# Independent checks for 25S-A answers (ASCII output only).
import itertools, math
import networkx as nx
import sympy as sp
from math import comb

res = {}
# Q1a2: onto functions 6 -> 4
cnt = sum(1 for f in itertools.product(range(4), repeat=6) if len(set(f)) == 4)
res["Q1a2 onto 6->4"] = (cnt, 1560)
# Q2a: 100..300 not divisible by 11, 6, 5
res["Q2a"] = (sum(1 for x in range(100, 301) if x % 11 and x % 6 and x % 5), 122)
# Q2b: recurrence
n = sp.symbols('n', integer=True)
a = sp.Function('a')
sol = sp.rsolve(a(n) - 3*a(n-1) + 2*a(n-2) - 2**n, a(n), {a(0): 1, a(1): 3})
print("Q2b rsolve:", sol)
def an(k):
    x0, x1 = 1, 3
    if k == 0: return x0
    for i in range(2, k+1):
        x0, x1 = x1, 3*x1 - 2*x0 + 2**i
    return x1
printed = lambda k: 3 - 2**k + 2*k*2**k
fixed = lambda k: 3 - 2*2**k + 2*k*2**k
print("Q2b printed matches a0..a6:", [an(k) == printed(k) for k in range(7)])
assert all(an(k) == fixed(k) for k in range(0, 31)), "corrected closed form fails the recurrence"
assert printed(0) != 1 and an(0) == 1, "printed form must fail a_0 = 1"
assert sol.subs(n, 7) == fixed(7)
print("Q2b corrected 3-2*2^n+2n*2^n == recurrence for n=0..30: OK; printed form gives a_0 =", printed(0))
# Q2c: even divisors of m for n=1..5
for nn in range(1, 6):
    s1 = sum(comb(nn, k)*4**(nn+k)*10**(nn-k) for k in range(nn+1))
    s2 = sum(comb(nn, k)*2**(nn-k)*7**(nn+k) for k in range(nn+1))
    m = s1*s2
    fac = sp.factorint(m)
    even = fac.get(2, 0) * 0 + fac[2] * math.prod(e+1 for p, e in fac.items() if p != 2)
    assert fac == {2: 3*nn, 3: 2*nn, 7: 2*nn}, fac
    assert even == 3*nn*(2*nn+1)**2
print("Q2c ok")
# Q3a: 12 | phi(21n), n>=1
print("Q3a", all(sp.totient(21*k) % 12 == 0 for k in range(1, 2000)))
# Q3b: words with multiset counts: x1>=4,x2>=7,x3>=2,x4>=3, sum 25
c = sum(1 for x1 in range(4, 26) for x2 in range(7, 26) for x3 in range(2, 26)
        if 25 - x1 - x2 - x3 >= 3)
print("Q3b", c, comb(12, 3))
# Q3c: complement of path
for k in range(2, 13):
    G = nx.complement(nx.path_graph(k))
    euler = nx.is_connected(G) and all(d % 2 == 0 for _, d in G.degree())
    # hamiltonian: brute force
    ham = False
    if k >= 3 and nx.is_connected(G):
        nodes = list(G.nodes)
        for perm in itertools.permutations(nodes[1:]):
            cyc = [nodes[0]] + list(perm)
            if all(G.has_edge(cyc[i], cyc[(i+1) % k]) for i in range(k)):
                ham = True; break
    print("Q3c n=%d euler=%s hamilton=%s" % (k, euler, ham))
# Q4a: K11 longest trail = 55 (Euler circuit exists)
K = nx.complete_graph(11)
print("Q4a K11 eulerian:", nx.is_eulerian(K), K.number_of_edges())
# Q4b: degree sequence graphic
seq = [3, 3, 4, 4, 4, 6, 6]
print("Q4b graphic:", nx.is_graphical(seq))
print("Q4b HH step: remove 6 ->", [2, 2, 3, 3, 3, 5], nx.is_graphical([2,2,3,3,3,5]), "remove 5 ->", nx.is_graphical([1,1,2,2,2]))
# Q4c: search small connected simple graphs: one vertex deg 2, rest deg 3 -> |V| odd, never bipartite
found = False
for v in range(3, 10):
    s = [2] + [3]*(v-1)
    if nx.is_graphical(s):
        found = True
        print("Q4c |V|=%d graphical" % v)
print("Q4c graphical only for odd |V| (see above)")
# Q5a2
print("Q5a2 D8:", sum(1 for p in itertools.permutations(range(8)) if all(p[i] != i for i in range(8))))
# Q5c
S = sum(comb(11, k)*k*7**k for k in range(12))
print("Q5c sum==11*7*2^30:", S == 11*7*2**30, "phi:", sp.totient(S), 60*2**29)
for k, (got, want) in res.items():
    print(k, got, want, "OK" if got == want else "MISMATCH")


# ======================================================================================
# STEPS section: every value used in the rubric / steps of tools/gen/gen_25S-A.py
# ======================================================================================
import json, pathlib
from fractions import Fraction
from networkx.generators.atlas import graph_atlas_g

# --- Q1a
assert 4**6 == 4096 and comb(4, 1)*3**6 == 2916 and comb(4, 2)*2**6 == 384 and comb(4, 3)*1 == 4
assert 4096 - 2916 + 384 - 4 == 1560 == cnt
# --- Q1b
xx = sp.symbols('x', positive=True)
Lim = sp.limit((xx**2 + 2*sp.log(xx))/(3*xx**2 + sp.log(xx)**2), xx, sp.oo)
assert Lim == sp.Rational(1, 3), Lim
# --- Q1c
C6 = nx.cycle_graph(6)
Cb = nx.complement(C6)
assert Cb.number_of_edges() == 9 == comb(6, 2) - 6
assert not nx.is_bipartite(Cb)
assert all(Cb.has_edge(u, v) for u, v in [(0, 2), (2, 4), (4, 0)])           # v1v3, v3v5, v5v1
assert C6.has_edge(0, 1) and not Cb.has_edge(0, 1)                            # the findbug line is wrong
# --- Q2a
UU = range(100, 301)
dv = lambda k: sum(1 for t in UU if t % k == 0)
assert (dv(11), dv(6), dv(5), dv(30), dv(55), dv(66), dv(330)) == (18, 34, 41, 7, 4, 3, 0)
assert 201 - 18 - 34 - 41 + 7 + 4 + 3 - 0 == 122 == res["Q2a"][0]
# --- Q2b
Asym, k1, k2, tt = sp.symbols('A c1 c2 t')
pp = lambda k: 2*k*2**k
assert all(pp(k) == 3*pp(k-1) - 2*pp(k-2) + 2**k for k in range(2, 31))      # particular solution A=2
assert sp.solve(sp.Eq(-2*Asym + 4, 0), Asym) == [2]
assert sp.solve([k1 + k2 - 1, k1 + 2*k2 + 4 - 3], [k1, k2]) == {k1: 3, k2: -2}
assert sp.roots(sp.Poly(tt**2 - 3*tt + 2, tt)) == {2: 1, 1: 1}
assert fixed(5) == 259 == an(5)
# --- Q2c
for nn in range(1, 6):
    s1 = sum(comb(nn, k)*4**k*10**(nn-k) for k in range(nn+1))
    s2 = sum(comb(nn, k)*2**(nn-k)*7**k for k in range(nn+1))
    assert s1 == 14**nn and s2 == 9**nn
mm = lambda nn: (sum(comb(nn, k)*4**(nn+k)*10**(nn-k) for k in range(nn+1))
                 * sum(comb(nn, k)*2**(nn-k)*7**(nn+k) for k in range(nn+1)))
assert mm(1) == 3528 == 2**3*3**2*7**2
assert sp.factorint(mm(2)) == {2: 6, 3: 4, 7: 4}
assert sum(1 for d_ in sp.divisors(mm(2)) if d_ % 2 == 0) == 150 == 3*2*(2*2 + 1)**2
# --- Q3a
assert sp.totient(21*3) == 36 == 12*3
aa, bb = sp.symbols('a b', integer=True, positive=True)
assert sp.simplify((3**(aa+1) - 3**aa) - 2*3**aa) == 0 and sp.simplify((7**(bb+1) - 7**bb) - 6*7**bb) == 0
assert 2*6 == 12 and 2*4 == 8 and 8 % 12 != 0                                  # the findbug line
# --- Q3b
assert 25 - 4 - 7 - 2 - 3 == 9 and comb(9 + 4 - 1, 3) == 220 == comb(12, 3) == c
assert len({comb(12, 3), comb(9, 4), comb(25, 3), comb(13, 4)}) == 4           # distractors differ from 220
# --- Q3c
def eul(G): return nx.is_connected(G) and all(dg % 2 == 0 for _, dg in G.degree())
def ham(G):
    k = G.number_of_nodes()
    if k < 3 or not nx.is_connected(G): return False
    nodes = list(G.nodes)
    for perm in itertools.permutations(nodes[1:]):
        cyc = [nodes[0]] + list(perm)
        if all(G.has_edge(cyc[i], cyc[(i+1) % k]) for i in range(k)): return True
    return False
for k in range(2, 11):
    G = nx.complement(nx.path_graph(k))
    assert not eul(G), k
    assert ham(G) == (k >= 5), k
assert nx.complement(nx.path_graph(6)).degree(1) == 3 == 6 - 3                 # v2 in complement of P6
assert nx.complement(nx.path_graph(7)).degree(0) == 5 == 7 - 2                 # v1 in complement of P7
assert nx.is_isomorphic(nx.complement(nx.path_graph(4)), nx.path_graph(4))
# --- Q4a
K11 = nx.complete_graph(11)
assert set(dict(K11.degree()).values()) == {10} and K11.number_of_edges() == 55 and nx.is_eulerian(K11)
assert len(list(nx.eulerian_circuit(K11))) == 55
# --- Q4b
assert nx.is_graphical([3, 3, 4, 4, 4, 6, 6])
G7 = nx.havel_hakimi_graph([3, 3, 4, 4, 4, 6, 6])
assert sorted(dict(G7.degree()).values()) == [3, 3, 4, 4, 4, 6, 6]
hubs = [v for v, dg in G7.degree() if dg == 6]
assert len(hubs) == 2
H1 = G7.copy(); H1.remove_node(hubs[0])
assert sorted(dict(H1.degree()).values()) == [2, 2, 3, 3, 3, 5] and max(dict(H1.degree()).values()) == 5
H2 = G7.copy(); H2.remove_nodes_from(hubs)
assert sorted(dict(H2.degree()).values()) == [1, 1, 2, 2, 2]
assert sum(dict(H2.degree()).values()) == 8 and H2.number_of_edges() == 4
assert nx.is_graphical([2, 2, 3, 3, 3, 5]) and nx.is_graphical([1, 1, 2, 2, 2])
assert sorted(dict(nx.path_graph(5).degree()).values()) == [1, 1, 2, 2, 2]      # P5 realises 1,1,2,2,2
# --- Q4c (every connected graph on <= 7 vertices from the atlas)
seen = set()
for G in graph_atlas_g():
    v = G.number_of_nodes()
    if v < 3 or not nx.is_connected(G): continue
    if sorted(dict(G.degree()).values()) == sorted([2] + [3]*(v-1)):
        assert v % 2 == 1, v
        assert not nx.is_bipartite(G)
        seen.add(v)
assert seen == {5, 7}, seen
for v in range(3, 12):
    if v % 2 == 0: assert not nx.is_graphical([2] + [3]*(v-1))
assert (3*5 - 1) % 2 == 0 and (3*5 - 1)//2 == 7 and nx.is_graphical([2, 3, 3, 3, 3])
Asz, Bsz = sp.symbols('A B', integer=True)
assert sp.expand(2 + 3*(Asz - 1) - 3*Bsz) == 3*Asz - 3*Bsz - 1                 # 2+3(|A|-1)=3|B|  <=>  3(|A|-|B|)=1
# --- Q5a
assert math.factorial(8) == 40320
D8 = round(math.factorial(8)*sum(Fraction((-1)**k, math.factorial(k)) for k in range(9)))
assert D8 == 14833
isder = lambda p: all(p[i] != i + 1 for i in range(len(p)))
assert [isder(p) for p in [(2, 1, 4, 3), (1, 3, 2, 4), (3, 2, 1, 4), (1, 2, 4, 3)]] == [True, False, False, False]
# --- Q5b (every connected graph on <= 7 vertices has a spanning tree; deleting an edge of a cycle keeps it connected)
for G in graph_atlas_g():
    if G.number_of_nodes() < 3 or not nx.is_connected(G): continue
    T = nx.minimum_spanning_tree(G)
    assert nx.is_tree(T) and set(T.nodes) == set(G.nodes)
    for cyc in nx.cycle_basis(G):
        H = G.copy(); H.remove_edge(cyc[0], cyc[1])
        assert nx.is_connected(H)
# --- Q5c
S5 = sum(comb(11, k)*k*7**k for k in range(12))
assert S5 == 11*7*2**30 == 82678120448
assert sp.totient(2**30) == 2**29 == 536870912
assert sp.totient(S5) == 10*6*2**29 == 32212254720

# --- consistency: every numeric step value in the generated raw JSON is one asserted above
raw = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "25S-A.json").read_text(encoding="utf-8"))
want = {"Q1a": [4096, 2916, 1560], "Q1b": [0.3333], "Q1c": [9], "Q2a": [18, 7, 0, 122], "Q2b": [2, -2, 259],
        "Q2c": [3528, 6, 150], "Q3a": [36], "Q3b": [9, 220], "Q3c": [3, 5], "Q4a": [10, 55], "Q4b": [5, 8],
        "Q4c": [7], "Q5a": [40320, 14833], "Q5b": [], "Q5c": [82678120448, 536870912, 32212254720]}
heb = dict(zip("אבג", "abc"))
for q in raw["questions"]:
    key = "Q%d%s" % (q["num"], heb[q["part"]])
    got = [st["answer"] for st in q.get("steps", []) if st["type"] == "numeric"]
    assert got == want[key], (key, got, want[key])
    assert sum(r["points"] for r in q["rubric"]) == q["points"], key
    assert not q.get("hold")
print("STEPS section: ALL ASSERTIONS PASSED")
