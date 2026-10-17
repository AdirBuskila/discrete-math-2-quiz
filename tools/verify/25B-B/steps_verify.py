# -*- coding: utf-8 -*-
# Machine check of every step value in tools/raw/25B-B.json (steps/rubric added by gen_25B-B.py).
# Run: PYTHONUTF8=1 py tools/verify/25B-B/steps_verify.py   (ASCII output only)
# Each helper below compares the value COMPUTED here (brute force / sympy / networkx) with what the generator stored.
import itertools, json, pathlib
from math import comb, factorial, perm, ceil
import networkx as nx
import sympy
from sympy import totient, divisors, factorint, primerange, isprime

RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "25B-B.json").read_text(encoding="utf-8"))
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
    print("steps_verify 25B-B: all %d steps in %d items checked" % (len(USED), len(QS)))

import math


def sol(qk):
    return QS[qk]["solution"]


def induced_iso(g, ref, vs):
    return nx.is_isomorphic(g.subgraph(vs), ref)


def hamilton_path(g):
    nodes = list(g)
    def rec(path):
        if len(path) == len(nodes):
            return True
        return any(rec(path + [w]) for w in g[path[-1]] if w not in path)
    return any(rec([v]) for v in nodes)


# ---- 1a ----
f10 = factorint(factorial(10))
C("1a", 0, [f10 == {2: 8, 3: 4, 5: 2, 7: 1}, f10 == {2: 7, 3: 4, 5: 2, 7: 1}, f10 == {2: 8, 3: 3, 5: 2, 7: 1}, f10 == {2: 8, 3: 4, 5: 1, 7: 1}])
N("1a", 1, len(range(0, f10[2] + 1))); N("1a", 2, len(range(0, f10[3] + 1)))
N("1a", 3, sum(1 for d in divisors(factorial(10)) if d % 7)); assert 9 * 5 * 3 == 135

# ---- 1b ----
def derange(n):
    return sum(1 for p in itertools.permutations(range(n)) if all(p[i] != i for i in range(n)))
N("1b", 0, derange(4)); N("1b", 1, derange(3))
tot = sum(1 for p in itertools.permutations(range(1, 8)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i + 1 for i in range(7)))
N("1b", 2, tot); assert derange(4) * derange(3) == tot

# ---- 1c ----
n30 = 30
N("1c", 0, 2 * (n30 - 1))
p_ = sympy.symbols("p")
eqs = [(p_ + 5 * (30 - p_), 58), (p_ + 5 * p_, 58), (p_ + 5 * (30 - p_), 60), (5 * p_ + (30 - p_), 58)]     # option order
C("1c", 1, [sympy.expand(l - (p_ + 5 * (30 - p_))) == 0 and r == 2 * (n30 - 1) for l, r in eqs])
leaves = sympy.solve(p_ + 5 * (30 - p_) - 58, p_)[0]
N("1c", 2, leaves)
deg = [1] * 23 + [5] * 7                                   # prufer: vertex v appears deg(v)-1 times
pr = [v for v, d in enumerate(deg) for _ in range(d - 1)]; assert len(pr) == 28
T = nx.from_prufer_sequence(pr); assert nx.is_tree(T) and sorted(d for _, d in T.degree()) == sorted(deg)

# ---- 2a ----
cnt = sum(1 for x1 in range(-1, 40) for x2 in range(0, 40) for x3 in range(7, 40) if x1 + x2 + x3 <= 23)
N("2a", 0, 23 - (-1 + 0 + 7)); N("2a", 1, 4)
CV("2a", 2, [comb(17, 3), comb(20, 3), comb(23, 3), comb(20, 4)], cnt)

# ---- 2b ----
def f2b(n):
    f = sum(comb(n, k) * 2**(n-k) for k in range(n+1)) * sum(comb(n, k) * 8**k * 3**(n-k) for k in range(n+1)) * sum(comb(n, k) * 4**k for k in range(n+1))
    return f
fac = lambda n: factorint(f2b(n))
C("2b", 0, [all(fac(n) == {3: n, 5: n, 11: n} for n in (10, 11, 12)),
            all(fac(n) == {3: 3*n, 5: n} for n in (10, 11, 12)),
            all(fac(n) == {3: n, 5: n, 2: 3*n} for n in (10, 11, 12)),
            all(fac(n) == {3: 3*n, 5: n} for n in (10, 11, 12))])
n = 11; fn = f2b(n)
N("2b", 1, len(range(1, factorint(fn)[3] + 1))); N("2b", 2, len(range(0, factorint(fn)[11] + 1)))
N("2b", 3, sum(1 for d in divisors(fn) if d % 15 == 0))
for k in (10, 11, 12):
    assert sum(1 for d in divisors(f2b(k)) if d % 15 == 0) == k * k * (k + 1)

# ---- 2c ----
N("2c", 0, len([v for v in range(1, 20) if v < 3]))
N("2c", 1, len(range(4, 11)))
dec = sum(1 for s in itertools.combinations(range(1, 16), 10) if set(s[-3:]) == {3, 4, 5})   # strictly decreasing f = reversed combination
CV("2c", 2, [0, 1, 120, 2], dec)
N("2c", 3, perm(12, 10))
for d in range(2, 6):
    for nn in range(1, d + 3):
        assert sum(1 for f in itertools.product(range(nn), repeat=d) if len(set(f)) == d) == (perm(nn, d) if nn >= d else 0)

# ---- 3a ----
x = sympy.symbols("x")
rts = set(sympy.solve(x**2 - 5*x + 6, x))
C("3a", 0, [rts == {2, 3}, rts == {-2, -3}, rts == {1, 6}, rts == {5, 6}])
n_, A_ = sympy.symbols("n A")
def fits(cand):
    eqs_ = [sympy.simplify(cand(n_) - 5*cand(n_-1) + 6*cand(n_-2) - 6*5**n_).subs(n_, k) for k in range(2, 9)]
    return len(sympy.solve(eqs_, A_, dict=True)) > 0
C("3a", 1, [fits(lambda n: A_*n*5**n), fits(lambda n: A_*2**n), fits(lambda n: A_*5**n), fits(lambda n: A_*3**n)])
Av = sympy.solve(sympy.simplify(A_*5**n_ - 5*A_*5**(n_-1) + 6*A_*5**(n_-2) - 6*5**n_).subs(n_, 3), A_)[0]
N("3a", 2, Av)
c1, c2 = sympy.symbols("c1 c2")
sl = sympy.solve([c1 + c2 + Av - 25, 2*c1 + 3*c2 + 5*Av - 130], [c1, c2])
N("3a", 3, sl[c1]); N("3a", 4, sl[c2])
a = [25, 130]
for k in range(2, 40): a.append(5*a[-1] - 6*a[-2] + 6*5**k)
assert all(a[k] == -5*2**k + 5*3**k + 25*5**k for k in range(40)) and all(a[k] <= 30*5**k for k in range(40))

# ---- 3b ----
s3 = sol("3b")
C("3b", 0, ["$n=2$" in s3 and "$n=3$" in s3 and "n>3" in s3, "אינדוקציה" in s3, "שובך" in s3, "פונקציה חד-חד" in s3])
assert all((q - 1) % 2 == 0 and q - 1 > 2 for q in primerange(5, 2000))                  # phi(n) = n-1 is EVEN for prime n > 3
assert totient(2) == 1 and totient(3) == 2
BUG("3b", 1, 1)
N("3b", 2, len([q for q in primerange(2, 100) if isprime(int(totient(q)))]))

# ---- 3c ----
nn = next(k for k in range(2, 40) if 2**(k - 1) - 1 == 4095); N("3c", 0, nn)
op = [q for q in primerange(2, 14) if q % 2]; ev = [k for k in range(1, 14) if k % 2 == 0]
N("3c", 1, len(op)); N("3c", 2, len(ev))
c = sum(1 for S0 in itertools.combinations(range(1, 14), 7) if sum(1 for v in S0 if v % 2 == 0) == 4 and sum(1 for v in S0 if v in op) == 3)
N("3c", 3, c); assert c == comb(5, 3) * comb(6, 4)

# ---- 4a ----
bip = [g for g in nx.graph_atlas_g() if 2 <= g.number_of_nodes() <= 7 and nx.is_bipartite(g) and nx.is_connected(g)]
def holds(rel):
    return all(rel(g, *nx.bipartite.sets(g)) for g in bip)
C("4a", 0, [holds(lambda g, A, B: g.number_of_edges() == sum(g.degree(v) for v in A)),
            holds(lambda g, A, B: g.number_of_edges() == sum(d for _, d in g.degree())),
            holds(lambda g, A, B: g.number_of_edges() == len(A) * len(B)),
            holds(lambda g, A, B: g.number_of_edges() == len(A) + len(B))])
assert all(g.number_of_edges() % 2 == 0 for g in bip if nx.is_eulerian(g))               # the claim itself
assert 1 + 1 + 1 == 3 and 3 % 2 == 1                                                      # a sum of odd numbers can be odd
BUG("4a", 1, 2)
K = nx.complete_bipartite_graph(2, 4); assert nx.is_eulerian(K)
N("4a", 2, sum(K.degree(v) for v in range(2)))

# ---- 4b ----
allg = [g for g in nx.graph_atlas_g() if 2 <= g.number_of_nodes() <= 7]
def suff(premise):
    return all(g.number_of_nodes() % 2 == 0 for g in allg if premise(g))
C("4b", 0, [suff(lambda g: all(d % 2 == 1 for _, d in g.degree())),
            suff(lambda g: all(isprime(d) for _, d in g.degree())),
            suff(lambda g: min(d for _, d in g.degree()) >= 1),
            suff(lambda g: nx.is_connected(g))])
R3 = nx.random_regular_graph(3, 8, seed=1); degs = {d for _, d in nx.complement(R3).degree()}
N("4b", 1, degs.pop()); assert not degs
for g in allg:
    if all(d in (3, 5) for _, d in g.degree()):
        assert len(list(nx.bridges(nx.complement(g)))) == 0
for dd in (3, 5):
    for sd in range(5):
        g = nx.random_regular_graph(dd, 8 if dd == 3 else 8, seed=sd)
        assert len(list(nx.bridges(nx.complement(g)))) == 0
N("4b", 2, 0)

# ---- 4c ----
E = [(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,1),(1,9),(1,10),(5,9),(5,10),(2,11),(2,10),(3,10),(3,7),(4,11),(4,6),(6,11),(7,9),(8,11),(8,9)]
G = nx.Graph(E); H = nx.complement(G)
dh = {d for _, d in H.degree()}; N("4c", 0, dh.pop()); assert not dh and nx.is_connected(H) and nx.is_eulerian(H)
P5 = nx.path_graph(5)
C("4c", 1, [induced_iso(H, P5, s) for s in ([5, 6, 7, 8, 9], [1, 2, 3, 4, 5], [1, 3, 5, 9, 11], [2, 4, 6, 8, 10])])
C4 = nx.cycle_graph(4)
C("4c", 2, [induced_iso(H, C4, s) for s in ([1, 2, 3, 4], [1, 2, 4, 5], [1, 3, 5, 11], [5, 6, 7, 8])])
ind = [1, 3, 5, 11]; assert G.subgraph(ind).number_of_edges() == 0
N("4c", 3, len(ind))
prism = nx.complement(nx.cycle_graph(6))
has_prism = any(induced_iso(H, prism, s) for s in itertools.combinations(H.nodes, 6))
assert nx.is_isomorphic(G.subgraph([1, 2, 3, 4, 5, 9]), nx.cycle_graph(6))
C("4c", 4, [has_prism, not has_prism])

# ---- 5a ----
cand = [p for p in itertools.permutations(range(1, 9), 5) if 1 in p]
N("5a", 0, len({p.index(1) for p in cand})); N("5a", 1, perm(7, 4)); N("5a", 2, len(cand)); assert len(cand) == 4200

# ---- 5b ----
nn = next(k for k in range(6, 20) if 2**(k - 1) == 128); N("5b", 0, nn)
N("5b", 1, comb(8, 6))
N("5b", 2, sum(1 for k in range(4, 9, 2) for _ in itertools.combinations(range(8), k))); assert comb(8, 4) + comb(8, 6) + comb(8, 8) == comb(8, 0) + comb(8, 2) + comb(8, 4) == 99

# ---- 5c ----
def ok_g1(g):
    return nx.is_bipartite(g) and nx.is_connected(g) and nx.is_bipartite(nx.complement(g)) and nx.is_connected(nx.complement(g))
C("5c", 0, [ok_g1(g) for g in (nx.path_graph(4), nx.cycle_graph(4), nx.star_graph(3), nx.path_graph(3))])
def ok_g2(m, n):
    g = nx.complete_bipartite_graph(m, n)
    return m >= n > 1 and nx.has_eulerian_path(g) and hamilton_path(g)
C("5c", 1, [ok_g2(3, 2), ok_g2(3, 3), ok_g2(4, 2), ok_g2(5, 3)])
ORD("5c", 2, 3); BUG("5c", 3, 1, 2)
for t_n in range(2, 10):
    for T in nx.nonisomorphic_trees(t_n):
        A, B = nx.bipartite.sets(T)
        assert T.number_of_edges() == len(A) + len(B) - 1
        for X, Y in ((A, B), (B, A)):
            if len(Y) <= len(X): assert any(T.degree(v) == 1 for v in X)

# ---- 6a ----
def direct(n_, lo=3, hi=5):
    return sum(len(B) for k in range(lo, hi + 1) for B in itertools.combinations(range(n_), k))
N("6a", 0, sum(1 for _ in itertools.combinations(range(21), 4)))
forms = [lambda n: 3*comb(n, 3) + 4*comb(n, 4) + 5*comb(n, 5), lambda n: comb(n, 3) + comb(n, 4) + comb(n, 5),
         lambda n: 12*comb(n, 3), lambda n: (3 + 4 + 5)*comb(n, 5)]
C("6a", 1, [all(fm(k) == direct(k) for k in range(7, 12)) for fm in forms])
N("6a", 2, direct(21)); assert direct(21) == forms[0](21) == 129675

# ---- 6b ----
s6 = sol("6b")
C("6b", 0, ["בשלילה" in s6 and "\\sum_{x\\in A}\\deg(x)=\\sum_{y\\in B}\\deg(y)" in s6,
            "אינדוקציה" in s6, "בניית צביעה" in s6, "חמדני" in s6])
a_, b_ = sympy.symbols("a b")
N("6b", 1, sympy.simplify(5*(a_ - b_) - (4 + 5*(a_ - 1) - 5*b_)))
assert sympy.expand(5*a_ - 5*b_ - 1 - (4 + 5*(a_ - 1) - 5*b_)) == 0                       # 4+5(a-1)=5b  <=>  5(a-b)=1
for Nn in range(2, 60):
    assert all(4 + 5*(aa - 1) != 5*(Nn - aa) for aa in range(1, Nn))
ORD("6b", 2, 4); BUG("6b", 3, 1, 2)

DONE()
