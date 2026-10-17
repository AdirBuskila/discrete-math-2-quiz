# Re-derivation of the 22B-A answers. ASCII output only.
import itertools
from math import comb, perm
from sympy import totient, divisors
import networkx as nx
from networkx.generators.atlas import graph_atlas_g

atlas = graph_atlas_g()
# Q1a: injective f:{1..6}->{1..8} with f({1,2,3}) = {5,6,7}
c = sum(1 for t in itertools.permutations(range(1, 9), 6) if set(t[:3]) == {5, 6, 7}); assert c == 360 == 6 * perm(5, 3); print("Q1a", c)
# Q1b: odd n with phi(n) | n
ns = [n for n in range(1, 200001, 2) if n % totient(n) == 0]; assert ns == [1]; print("Q1b", ns)
# Q1c: tree, n>1, |E| even  ->  a cut vertex (non-leaf) of even degree
k = 0
for n in (3, 5, 7, 9, 11):
    for T in nx.nonisomorphic_trees(n):
        assert any(d % 2 == 0 and d >= 2 for _, d in T.degree()); k += 1
print("Q1c ok", k, "trees")
# Q2a
for n in range(1, 8):
    f = sum(comb(n,k)*2**(n-k) for k in range(n+1)) * sum(comb(n,k)*3**(n+k)*5**(n-k) for k in range(n+1))
    assert f == 3**(2*n) * 2**(3*n)
    assert sum(1 for d in divisors(f) if d % 2 == 0) == 3*n*(2*n+1)
print("Q2a ok")
# Q2b
x = [10, 30]
for n in range(2, 40): x.append(4*x[-1] - 4*x[-2])
assert all(x[n] == 10*2**n + 5*n*2**n for n in range(40)); assert all(x[n] <= 15*n*3**n for n in range(1, 40)); print("Q2b ok")
# Q2c
c = sum(1 for x1 in range(5, 21) for x2 in range(4, 21) for x3 in range(6, 21) if x1 + x2 + x3 == 20); assert c == 21 == comb(7, 2); print("Q2c", c)
# Q3a
ns = [n for n in range(2, 100) if comb(n, 2) == 120]; assert ns == [16]
assert comb(8, 2) * comb(8, 3) == 1568; print("Q3a", ns, 1568)
# Q3b
c = sum(1 for f in itertools.product(range(3), repeat=5) if len(set(f)) < 3); assert c == 93; print("Q3b", c)
# Q3c.1: graph isomorphic to its complement is connected (all graphs n<=7)
for g in atlas:
    if g.number_of_nodes() >= 1 and nx.is_isomorphic(g, nx.complement(g)): assert nx.is_connected(g)
# Q3c.2: bipartite graphs with an odd number of spanning trees
def ntrees(g):
    L = nx.laplacian_matrix(g).toarray().astype(float)
    import numpy as np
    return round(abs(np.linalg.det(L[1:, 1:])))
T = nx.path_graph(4); assert nx.is_bipartite(T) and ntrees(T) == 1
th = nx.Graph([(0,1),(1,2),(2,5),(0,3),(3,4),(4,5),(0,5)])
assert th.number_of_nodes() == 6 and th.number_of_edges() == 7 and nx.is_bipartite(th) and ntrees(th) == 15 and ntrees(th) % 2 == 1; print("Q3c2 theta:", ntrees(th))
# Q3c.3: two distinct spanning trees: union contains a cycle (all connected graphs n<=5)
for g in atlas:
    n = g.number_of_nodes()
    if n < 3 or n > 5 or not nx.is_connected(g): continue
    sts = [frozenset(frozenset(e) for e in t.edges) for t in
           (nx.Graph(es) for es in itertools.combinations(g.edges, n-1)) if t.number_of_nodes() == n and nx.is_tree(t)]
    for a, b in itertools.combinations(set(sts), 2):
        u = nx.Graph([tuple(e) for e in (a | b)]); assert not nx.is_tree(u) and nx.cycle_basis(u)
print("Q3c3 ok")
# Q4a: n>3, G != K_n, deg >= (n-1)/2 -> connected, diam 2   (all graphs n<=7)
k = 0
for g in atlas:
    n = g.number_of_nodes()
    if n > 3 and g.number_of_edges() < comb(n, 2) and all(d >= (n-1)/2 for _, d in g.degree()):
        assert nx.is_connected(g) and nx.diameter(g) == 2; k += 1
print("Q4a ok", k, "graphs; 2 + (n-1)/2 + (n-1)/2 = n+1, not 2n")
# Q4b: figure graph
E = [(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(9,1),(1,5),(2,7),(3,11),(4,8),(6,12),(9,10),(10,11),(10,12),(11,12)]
G = nx.Graph(E); assert all(d == 3 for _, d in G.degree()) and G.number_of_edges() == 18
G2 = G.copy(); G2.add_edge(4, 7)
cyc = [4,7,8,9,1,2,3,11,10,12,6,5]
assert len(set(cyc)) == 12 and all(G2.has_edge(cyc[i], cyc[(i+1) % 12]) for i in range(12)); print("Q4b1 C12 ok")
Gc = nx.complement(G); assert all(d == 8 for _, d in Gc.degree()) and nx.is_eulerian(Gc); print("Q4b2 complement Euler")
col = {1:2,2:1,3:2,4:1,5:3,6:1,7:2,8:3,9:1,10:2,11:1,12:3}
assert all(col[u] != col[v] for u, v in E); assert G.has_edge(10,11) and G.has_edge(11,12) and G.has_edge(10,12); print("Q4b3 chi 3")
assert all(Gc.has_edge(a, b) for a, b in itertools.combinations([2,4,6,9,11], 2))
assert nx.is_isomorphic(Gc.subgraph([1,4,2,8]), nx.cycle_graph(4))
assert nx.is_isomorphic(G.subgraph([9,1,2,3]), nx.path_graph(4)) and nx.is_isomorphic(Gc.subgraph([9,1,2,3]), nx.path_graph(4))
assert nx.is_isomorphic(G.subgraph([4,5,6,7,8]), nx.cycle_graph(5)) and nx.is_isomorphic(Gc.subgraph([4,5,6,7,8]), nx.cycle_graph(5))
print("Q4b4 K5, C4, P4, C5 ok")

# ======================= step-author phase: every guided-step value =======================
import json, pathlib
import sympy as sp
from sympy import factorint
from networkx.algorithms import isomorphism as iso
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "22B-A.json").read_text(encoding="utf-8"))
def STP(n, p): return next(q for q in RAW["questions"] if q["num"] == n and q.get("part") == p)["steps"]
def NUM(n, p, i, v):
    s = STP(n, p)[i]; assert s["type"] == "numeric" and s["answer"] == v and s["tol"] == 0, (n, p, i, s["answer"], v)
def CH(n, p, i, text):
    s = STP(n, p)[i]; assert s["type"] == "choice"
    assert text in [o["value"] for o in s["options"] if o["id"] == s["correctId"]][0], (n, p, i)
    v = [o["value"] for o in s["options"]]; assert len(set(v)) == len(v)

# Q1a: 3! images of {1,2,3}, 5 codomain elements left ({1,2,3,4,8}), 60, 360 (brute force above)
assert sp.factorial(3) == 6 and sorted(set(range(1, 9)) - {5, 6, 7}) == [1, 2, 3, 4, 8] and perm(5, 3) == 60
assert sum(1 for t in itertools.permutations(range(1, 9), 6) if set(t[:3]) == {5, 6, 7} and set(t[3:]) <= {1, 2, 3, 4, 8}) == 360
NUM(1, "א", 0, 6); NUM(1, "א", 1, 5); NUM(1, "א", 2, 60); NUM(1, "א", 3, 360)
# Q1b: phi(45), unique odd n <= 100000, phi(n) even for n>=3, phi(p^a m) formula, p-1 even for odd p
assert totient(45) == 24 and [n for n in range(1, 100001, 2) if n % totient(n) == 0] == [1]
assert all(totient(n) % 2 == 0 for n in range(3, 5000)) and all((p_ - 1) % 2 == 0 for p_ in sp.primerange(3, 1000))
NUM(1, "ב", 0, 24); NUM(1, "ב", 1, 1); CH(1, "ב", 2, "בדיקת")
# Q1c: |V| = |E|+1; the choice options: (a) parity of odd-degree vertices (true), (b) all degrees even (false), (c) path (false)
assert 6 + 1 == 7
for n in (3, 5, 7, 9):
    for T in nx.nonisomorphic_trees(n):
        assert sum(1 for _, d in T.degree() if d % 2) % 2 == 0 and n % 2 == 1               # (a)
assert any(d % 2 for _, d in nx.star_graph(4).degree())                                       # (b) false: leaves have degree 1
assert not nx.is_isomorphic(nx.star_graph(4), nx.path_graph(5)) and nx.star_graph(4).number_of_edges() % 2 == 0   # (c) false
# the last proof line of the findbug: in a tree the x-y path goes through v and T-v separates them
for T in nx.nonisomorphic_trees(7):
    for v in T:
        if T.degree(v) >= 2:
            H_ = T.copy(); H_.remove_node(v); nb = list(T[v])
            assert all(not nx.has_path(H_, a, b) for a, b in itertools.combinations(nb, 2))
NUM(1, "ג", 0, 7); CH(1, "ג", 1, "זוגי, ו-$|V|$ אי-זוגי")
# Q2a: closed form at n=2 and the divisor-count pieces
n2 = 2; f2 = 3**(2*n2) * 2**(3*n2); assert factorint(f2) == {2: 6, 3: 4}
ev = [d for d in divisors(f2) if d % 2 == 0]; assert len(ev) == 30 == 3*n2*(2*n2+1)
assert {factorint(d)[2] for d in ev} == set(range(1, 7)) and {factorint(d).get(3, 0) for d in ev} == set(range(0, 5))
fq = lambda n: sum(comb(n,k)*2**(n-k) for k in range(n+1)) * sum(comb(n,k)*3**(n+k)*5**(n-k) for k in range(n+1))
assert [fq(3) == v for v in (3**3*2**9, 3**6*2**9, 3**6*2**6, 3**9*2**9)] == [False, True, False, False]
CH(2, "א", 0, "3^{2n}\cdot2^{3n}"); NUM(2, "א", 1, 6); NUM(2, "א", 2, 5); NUM(2, "א", 3, 30)
# Q2b: double root, constants, a_3, c = 15 (and a_n <= 15 n 2^n for n>=1)
xx = sp.Symbol("r"); assert sp.factor(xx**2 - 4*xx + 4) == (xx - 2)**2
assert x[3] == 200 == 10*8 + 5*3*8 and all(x[n] <= 15*n*2**n for n in range(1, 40)) and all(10*2**n <= 10*n*2**n for n in range(1, 40))
assert any(x[n] > 14*n*2**n for n in range(1, 40))   # 15 is tight at n=1 (30 = 15*1*2): smaller integer fails
CH(2, "ב", 0, "r=2$ שורש"); NUM(2, "ב", 1, 10); NUM(2, "ב", 2, 5); NUM(2, "ב", 3, 200); NUM(2, "ב", 4, 15)
# Q2c
assert 5 + 4 + 6 == 15 and 20 - 15 == 5 and comb(7, 2) == 21
NUM(2, "ג", 0, 15); NUM(2, "ג", 1, 5); NUM(2, "ג", 2, 21)
# Q3a
NUM(3, "א", 0, 16); NUM(3, "א", 1, comb(8, 2)); NUM(3, "א", 2, comb(8, 3)); NUM(3, "א", 3, 1568)
assert sum(1 for S in itertools.combinations(range(1, 17), 5) if sum(1 for v in S if v % 2 == 0) == 2) == 1568
# Q3b: inclusion-exclusion
assert 3**5 == 243 and 3 * 2**5 == 96 and 3**5 - 96 + 3 == 150 and 243 - 150 == 93
assert sum(1 for f in itertools.product(range(3), repeat=5) if len(set(f)) == 3) == 150
NUM(3, "ב", 0, 243); NUM(3, "ב", 1, 96); NUM(3, "ב", 2, 150); NUM(3, "ב", 3, 93)
# Q3c: verdicts (checked above): c1 true (self-complementary => connected), c2 false (path P4 and the theta graph), c3 true
assert ntrees(T4 := nx.path_graph(4)) == 1 and ntrees(th) == 15
CH(3, "ג", 0, "נכונה"); CH(3, "ג", 1, "אינה"); NUM(3, "ג", 2, 15); CH(3, "ג", 3, "נכונה")
# Q4a: Dirac numbers at n=7; the bound 2 + deg a + deg b >= n + 1; diameter 2 (all graphs n<=7, above)
n7 = 7; assert (n7 + 1) // 2 == 4 and 2 + 3 + 3 == 8 == n7 + 1 and (n7 + 1) // 2 <= n7
for g in atlas:                                   # Dirac on H = G + apex vertex for every qualifying G with n<=7
    n = g.number_of_nodes()
    if n > 3 and g.number_of_edges() < comb(n, 2) and all(d >= (n-1)/2 for _, d in g.degree()):
        Hh = g.copy(); Hh.add_edges_from((-1, v) for v in g)
        assert all(d >= (n+1)/2 for _, d in Hh.degree())
CH(4, "א", 0, "Dirac"); NUM(4, "א", 1, 4); NUM(4, "א", 2, 8); NUM(4, "א", 3, 2)
# Q4b
assert all(d == 8 for _, d in Gc.degree()) and nx.is_eulerian(Gc)
def induced_has(G_, F): return iso.GraphMatcher(G_, F).subgraph_is_isomorphic()
assert all(induced_has(Gc, F) for F in (nx.path_graph(4), nx.cycle_graph(4), nx.cycle_graph(5), nx.complete_graph(5)))
CH(4, "ב", 0, "כן"); NUM(4, "ב", 1, 8); CH(4, "ב", 2, "כן"); NUM(4, "ב", 3, 3); CH(4, "ב", 4, "כולם")
print("STEPS 22B-A ok")
