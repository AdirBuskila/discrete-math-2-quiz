# -*- coding: utf-8 -*-
# Machine check of every step value in tools/raw/25B-A.json (steps/rubric added by gen_25B-A.py).
# Run: PYTHONUTF8=1 py tools/verify/25B-A/steps_verify.py   (ASCII output only)
# Each helper below compares the value COMPUTED here (brute force / sympy / networkx) with what the generator stored.
import itertools, json, pathlib
from math import comb, factorial, perm, ceil
import networkx as nx
import sympy
from sympy import totient, divisors, factorint, primerange, isprime

RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "25B-A.json").read_text(encoding="utf-8"))
QS = {}
for _q in RAW["questions"]:
    _p = _q.get("part", "")
    QS["%s%s" % (_q["num"], {"": "", "א": "a", "ב": "b", "ג": "c"}[_p])] = _q
USED = set()


def step(qk, i):
    USED.add((qk, i))
    return QS[qk]["steps"][i]


def N(qk, i, value):
    s = step(qk, i)
    assert s["type"] == "numeric" and s["answer"] == value and s.get("tol", 0) == 0, (qk, i, s["answer"], value)


def C(qk, i, flags):
    """choice step. `flags` = one computed truth value per option, in the stored option order. Exactly one option is
    really right (computed by a real check in this file) and it must be the stored correctId."""
    s = step(qk, i)
    assert s["type"] == "choice" and len(flags) == len(s["options"]), (qk, i)
    assert sum(1 for f in flags if f) == 1, (qk, i, "not exactly one right option", flags)
    assert s["options"][[bool(f) for f in flags].index(True)]["id"] == s["correctId"], (qk, i, "stored key differs")
    assert len(set(o["value"] for o in s["options"])) == len(s["options"])


def CV(qk, i, values, truth):
    """choice whose options are numbers: values in stored option order, truth computed by brute force."""
    C(qk, i, [v == truth for v in values])


def ORD(qk, i, n):
    s = step(qk, i)
    assert s["type"] == "order" and len(s["lines"]) == n and len(set(s["lines"])) == n, (qk, i)


def BUG(qk, i, idx, ref_i=None):
    """findbug: bugIndex == idx; if ref_i is given the buggy lines differ from that order step's lines in exactly one."""
    s = step(qk, i)
    assert s["type"] == "findbug" and s["bugIndex"] == idx, (qk, i)
    if ref_i is not None:
        ref = QS[qk]["steps"][ref_i]["lines"]
        assert len(ref) == len(s["lines"]) and sum(1 for a, b in zip(ref, s["lines"]) if a != b) == 1
        assert ref[idx] != s["lines"][idx]


def DONE():
    for qk, q in QS.items():
        if q.get("hold"):
            continue
        for i, s in enumerate(q["steps"]):
            assert (qk, i) in USED, ("step not machine-checked", qk, i, s["type"])
        if "points" in q:
            assert sum(r["points"] for r in q["rubric"]) == q["points"], qk
        assert 2 <= len(q["steps"]) <= 5 and 3 <= len(q["rubric"]) <= 6, qk
    print("steps_verify 25B-A: all %d steps in %d items checked" % (len(USED), len(QS)))

import math


def sol(qk):
    return QS[qk]["solution"]


# ---- 1a: counts up to 100 ----
A = range(1, 101)
a1 = sum(1 for x in A if x % 3 == 0); a2 = sum(1 for x in A if x % 49 == 0); a3 = sum(1 for x in A if x % 37 == 0)
N("1a", 0, a1); N("1a", 1, a2)
lcm_ok = min(math.lcm(3, 49), math.lcm(3, 37), math.lcm(49, 37)) > 100          # pairwise intersections empty
assert a1 == 33 and a2 == 2 and a3 == 2
x3 = {x for x in range(1, 13) if x % 3 == 0}; x2 = {x for x in range(1, 13) if x % 2 == 0}
C("1a", 2, [lcm_ok, a1 == a2 == a3, len(x3 | x2) == len(x3) + len(x2)])           # sum = union only for disjoint sets
N("1a", 3, sum(1 for x in A if x % 3 == 0 or x % 49 == 0 or x % 37 == 0)); assert a1 + a2 + a3 == 37

# ---- 1b ----
blocks = [p for p in itertools.permutations((1, 2, 3)) if p[0] == 1]
perms = 0
for p in itertools.permutations(range(1, 8)):
    pos = {v: p.index(v) for v in (1, 2, 3)}
    if max(pos.values()) - min(pos.values()) == 2 and pos[1] < pos[2] and pos[1] < pos[3]:
        perms += 1
N("1b", 0, len(blocks)); N("1b", 1, sum(1 for _ in itertools.permutations(range(5)))); N("1b", 2, perms)
assert perms == len(blocks) * factorial(5)

# ---- 1c: counterexamples for diam = 2 but not K_{m,n} ----
def is_cbp(g):
    if not nx.is_bipartite(g) or not nx.is_connected(g):
        return False
    a, b = nx.bipartite.sets(g)
    return g.number_of_edges() == len(a) * len(b)
cands = [nx.cycle_graph(5), nx.path_graph(4), nx.complete_bipartite_graph(2, 3), nx.complete_graph(4)]   # option order
C("1c", 0, [nx.diameter(g) == 2 and not is_cbp(g) for g in cands])
N("1c", 1, nx.diameter(nx.cycle_graph(5)))
for m in range(1, 6):
    for n in range(m, 6):
        if m + n >= 3:
            g = nx.complete_bipartite_graph(m, n)
            assert nx.diameter(g) == 2
            a, b = nx.bipartite.sets(g)
            for X in (a, b):
                for u, v in itertools.combinations(X, 2):
                    assert nx.shortest_path_length(g, u, v) == 2
            for u in a:
                for v in b:
                    assert nx.shortest_path_length(g, u, v) == 1                # so line index 2 (distance 2 across) is false
BUG("1c", 2, 2)

# ---- 2a ----
cnt = sum(1 for x1 in range(2, 40) for x2 in range(-1, 40) for x3_ in range(5, 40) if x1 + x2 + x3_ <= 20)
N("2a", 0, 20 - (2 + (-1) + 5)); N("2a", 1, 4)
CV("2a", 2, [comb(20, 3), comb(14, 3), comb(17, 3), comb(17, 4)], cnt)

# ---- 2b ----
def count12(n):
    f = sum(comb(n, k) * 2**(n-k) for k in range(n+1)) * sum(comb(n, k) * 6**k for k in range(n+1)) * sum(comb(n, k) * 5**k for k in range(n+1))
    return f, sum(1 for d in divisors(f) if d % 12 == 0), factorint(f)
f10, c10, fac10 = count12(10)
C("2b", 0, [all(count12(n)[2] == {2: n, 3: 2*n, 7: n} for n in (10, 11, 12)),
            all(count12(n)[2] == {2: n, 3: n, 7: n} for n in (10, 11, 12)),
            all(count12(n)[2] == {2: 2*n, 3: n, 7: n} for n in (10, 11, 12)),
            all(count12(n)[2] == {2: n, 3: 2*n, 5: n, 7: n} for n in (10, 11, 12))])
alpha = [a for a in range(0, fac10[2] + 1) if a >= 2]; N("2b", 1, len(alpha))
N("2b", 2, c10); assert c10 == 9 * 20 * 11
forms = [lambda n: n*(n*n-1), lambda n: 2*n*(n*n-1), lambda n: 2*n*(n+1)**2, lambda n: 2*n*(n-1)*(n+2)]
C("2b", 3, [all(fm(n) == count12(n)[1] for n in (10, 11, 12)) for fm in forms])

# ---- 2c ----
n15 = 15
N("2c", 0, len(range(6, n15 + 1)))
inc = sum(1 for s in itertools.combinations(range(1, n15 + 1), 10) if s[:3] == (3, 4, 5))
N("2c", 1, inc); assert inc == comb(10, 7)
def bij(d, n):   # injective and onto functions {1..d}->{1..n}, f(1)=1  (small analogue by enumeration)
    return sum(1 for f in itertools.product(range(n), repeat=d) if f[0] == 0 and len(set(f)) == d and len(set(f)) == n)
for d in range(2, 7):
    assert bij(d, d + 1) == 0 and bij(d, d) == factorial(d - 1)                   # n > d: 0 ; n = d: (d-1)!
zero = bij(5, 6)                                                                  # analogue of 10 -> 11
CV("2c", 2, [factorial(9), factorial(10), factorial(11), 0], zero)
N("2c", 3, factorial(9)); assert factorial(9) == 362880

# ---- 3a ----
x = sympy.symbols("x"); assert sympy.solve(x**2 - 6*x + 9, x) == [3]
N("3a", 0, 3)
n_, A_ = sympy.symbols("n A")
def fits(cand):                                   # does `cand` solve a_n = 6a_{n-1} - 9a_{n-2} + 3*2^n for a constant A?
    eqs = [sympy.simplify(cand(n_) - 6*cand(n_-1) + 9*cand(n_-2) - 3*2**n_).subs(n_, k) for k in range(2, 9)]
    return len(sympy.solve(eqs, A_, dict=True)) > 0
C("3a", 1, [fits(lambda n: A_*2**n), fits(lambda n: A_*3**n), fits(lambda n: A_*n*2**n), fits(lambda n: A_*n**2*3**n)])
Av = sympy.solve(sympy.simplify(A_*2**n_ - 6*A_*2**(n_-1) + 9*A_*2**(n_-2) - 3*2**n_).subs(n_, 3), A_)[0]
N("3a", 2, Av)
c1, c2 = sympy.symbols("c1 c2")
sl = sympy.solve([c1 + 12 - 16, 3*c1 + 3*c2 + 24 - 36], [c1, c2])
N("3a", 3, sl[c1]); N("3a", 4, sl[c2])
a = [16, 36]
for k in range(2, 40): a.append(6*a[-1] - 9*a[-2] + 3*2**k)
assert all(a[k] == 4*3**k + 12*2**k for k in range(40)) and Av == 12

# ---- 3b ----
sl3 = sol("3b")
C("3b", 0, ["gcd(7,m)=1" in sl3 and "\\phi(7^\\alpha)" in sl3, "אינדוקציה" in sl3, "שובך" in sl3, "בשלילה" in sl3])
ORD("3b", 1, 3)
for al in range(2, 8):
    assert totient(7**al) == 7**(al - 1) * 6 and totient(7**al) != 7**(al - 1) * 8
assert all(totient(m) % 21 == 0 for m in range(49, 20000, 49))
BUG("3b", 2, 1, 1)

# ---- 3c ----
nn = next(k for k in range(3, 100) if comb(k, 2) == 435); N("3c", 0, nn)
M4 = [k for k in range(1, 31) if k % 4 == 0]; P = list(primerange(2, 31))
N("3c", 1, len(M4)); N("3c", 2, len(P)); assert not set(M4) & set(P)
N("3c", 3, comb(10, 6)); N("3c", 4, comb(7, 3) * comb(10, 6)); assert comb(7, 3) * comb(10, 6) == 7350

# ---- 4a ----
seq = [6, 4, 4, 2, 2, 2, 2]; assert nx.is_graphical(seq)
Hseq = [3, 3, 1, 1, 1, 1]; assert nx.is_graphical(Hseq)
N("4a", 0, sum(Hseq))
# uniqueness of the realization of 3,3,1,1,1,1: all labeled graphs on 6 vertices with that sequence are isomorphic
pairs = list(itertools.combinations(range(6), 2)); refs = []
for mask in range(1 << 15):
    if bin(mask).count("1") != 5:
        continue
    g = nx.Graph(); g.add_nodes_from(range(6)); g.add_edges_from(pairs[i] for i in range(15) if mask >> i & 1)
    if sorted((d for _, d in g.degree()), reverse=True) == Hseq:
        if not refs: refs.append(g)
        assert nx.is_isomorphic(g, refs[0])
Hg = nx.Graph([(0, 1), (0, 2), (0, 3), (1, 4), (1, 5)])                            # two adjacent deg-3 vertices, two leaves each
assert nx.is_isomorphic(Hg, refs[0])
opt = [Hg, nx.path_graph(6), nx.Graph([(0, 1), (0, 2), (0, 3), (0, 4), (0, 5)]), nx.cycle_graph(6)]
C("4a", 1, [nx.is_isomorphic(g, refs[0]) for g in opt])
G7 = Hg.copy(); G7.add_edges_from((6, v) for v in range(6))
assert sorted((d for _, d in G7.degree()), reverse=True) == seq
ORD("4a", 2, 4)
# any realization of the 7-sequence has a vertex of degree 6 adjacent to all, so G is unique too
assert max(seq) == 6 == len(seq) - 1

# ---- 4b ----
Ts = list(nx.nonisomorphic_trees(5))
N("4b", 0, Ts[0].number_of_nodes() if all(t.number_of_edges() == 4 for t in Ts) else -1)
bigs = [max(len(s) for s in nx.bipartite.sets(t)) for t in Ts]
N("4b", 1, min(bigs)); assert ceil(5 / 2) == 3 and any(sorted(len(s) for s in nx.bipartite.sets(t)) == [2, 3] for t in Ts)
assert all(not nx.is_bipartite(nx.complement(t)) for t in Ts)
ORD("4b", 2, 4); BUG("4b", 3, 1, 2)

# ---- 4c ----
E = [(1,2),(1,6),(1,8),(2,3),(2,7),(6,7),(6,5),(8,3),(7,4),(8,5),(3,4),(5,4)]
G = nx.Graph(E); H = nx.complement(G)
degsH = {d for _, d in H.degree()}
N("4c", 0, degsH.pop()); assert not degsH and nx.is_eulerian(H)
def hamilton(g):
    nodes = list(g); st = nodes[0]
    def rec(path):
        if len(path) == len(nodes):
            return g.has_edge(path[-1], st)
        return any(rec(path + [w]) for w in g[path[-1]] if w not in path)
    return rec([st])
C("4c", 1, [hamilton(G), not hamilton(G)])
def induced_iso(g, ref, k):
    return any(nx.is_isomorphic(g.subgraph(s), ref) for s in itertools.combinations(g.nodes, k))
C("4c", 2, [induced_iso(H, nx.cycle_graph(4), 4), not induced_iso(H, nx.cycle_graph(4), 4)])
S_ = [1, 3, 5, 7]; assert G.subgraph(S_).number_of_edges() == 0 and nx.is_isomorphic(H.subgraph(S_), nx.complete_graph(4))
N("4c", 3, len(S_))
c5 = induced_iso(H, nx.cycle_graph(5), 5)
C("4c", 4, [not c5, c5]); assert nx.is_bipartite(G) and nx.is_isomorphic(nx.complement(nx.cycle_graph(5)), nx.cycle_graph(5))

# ---- 5a ----
n50 = next(k for k in range(2, 100) if 1 + k + comb(k, 2) == 1276); N("5a", 0, n50)
m5 = [k for k in range(1, 51) if k % 5 == 0]; m11 = [k for k in range(1, 51) if k % 11 == 0]
N("5a", 1, len(m5)); N("5a", 2, len(m11)); assert not set(m5) & set(m11)
N("5a", 3, comb(10, 5)); N("5a", 4, comb(10, 5) * comb(4, 2)); assert comb(10, 5) * comb(4, 2) == 1512

# ---- 5b ----
K4p = nx.complete_graph(4); K4p.add_node(4)
cands = [K4p, nx.complete_graph(4), nx.path_graph(4), nx.disjoint_union(nx.cycle_graph(5), nx.empty_graph(1))]
C("5b", 0, [g.number_of_edges() > g.number_of_nodes() and not nx.is_connected(g) for g in cands])
cands = [nx.complete_graph(4), nx.path_graph(4), nx.cycle_graph(4), K4p]
C("5b", 1, [g.number_of_edges() < g.number_of_nodes() and nx.is_connected(g) for g in cands])
sizes = set()
for G0 in nx.graph_atlas_g():
    if G0.number_of_nodes() == 6 and nx.is_connected(G0) and all(d % 2 == 1 for _, d in G0.degree()):
        sizes.add(nx.minimum_spanning_tree(G0).number_of_edges())
N("5b", 2, sizes.pop()); assert not sizes
for G0 in nx.graph_atlas_g():
    if 2 <= G0.number_of_nodes() <= 7 and nx.is_connected(G0) and all(d % 2 == 1 for _, d in G0.degree()):
        assert G0.number_of_nodes() % 2 == 0 and (G0.number_of_nodes() - 1) % 2 == 1
BUG("5b", 3, 1)

# ---- 5c ----
words = [w for w in itertools.product("abcd", repeat=7) if w[0] == "a" and w[-1] == "d" and w.count("d") == 1]
N("5c", 0, 7 - 2); N("5c", 1, len(set(w[3] for w in words))); N("5c", 2, len(words)); assert len(words) == 3**5

# ---- 6a ----
n = 13; found = 0; leaves = set(); odd = set(); ham_all = True; eul_any = False
for T in nx.nonisomorphic_trees(n):
    ds = [d for _, d in T.degree()]
    if ds.count(2) == 1 and set(ds) <= {1, 2, 3}:
        found += 1; leaves.add(ds.count(1)); odd.add(sum(1 for d in ds if d % 2))
        Tc = nx.complement(T)
        assert min(d for _, d in Tc.degree()) >= n / 2
        ham_all = ham_all and hamilton(Tc); eul_any = eul_any or nx.is_eulerian(Tc)
assert found > 0 and len(leaves) == 1 and len(odd) == 1
N("6a", 0, odd.pop()); N("6a", 1, leaves.pop())
C("6a", 2, [ham_all, not ham_all]); C("6a", 3, [not eul_any, eul_any])

# ---- 6b ----
tot = 0; both = 0; f1 = 0
for p in itertools.permutations(range(10)):
    a_, b_ = p[0] == 0, p[9] == 9
    f1 += a_; both += a_ and b_; tot += a_ or b_
N("6b", 0, f1); N("6b", 1, both); N("6b", 2, tot); assert tot == factorial(8) * 17 == 685440

DONE()
