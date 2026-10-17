# Re-derivation of the 22B-B answers (brute force / sympy / networkx). ASCII output only.
import itertools, math, random
from math import comb
from sympy import totient, divisors
import networkx as nx

# Q1a: permutations of a..f without the substring "ab"
c = sum(1 for p in itertools.permutations("abcdef") if "ab" not in "".join(p))
assert c == 600 == math.factorial(6) - math.factorial(5); print("Q1a", c)
# Q1b: n | phi(n) only for n = 1
sol = [n for n in range(1, 3000) if int(totient(n)) % n == 0]; assert sol == [1]; print("Q1b", sol)
# Q1c: a forest with n vertices and k components has n-k edges
random.seed(1)
for _ in range(300):
    n = random.randint(1, 12); T = nx.Graph(); T.add_nodes_from(range(n))
    for v in range(1, n):
        if random.random() < 0.7: T.add_edge(v, random.randrange(v))
    assert nx.is_forest(T) and T.number_of_edges() == n - nx.number_connected_components(T)
print("Q1c ok")
# Q2a: f(n) = 2^(4n) 5^(2n); number of odd divisors 2n+1
for n in range(1, 7):
    f = sum(comb(n, k) * 7**k * 3**(n-k) for k in range(n+1)) * sum(comb(n, k) * 5**(n+k) * 3**(n-k) for k in range(n+1))
    assert f == 2**(4*n) * 5**(2*n)
    assert sum(1 for d in divisors(f) if d % 2 == 1) == 2*n + 1
print("Q2a ok")
# Q2b: a_n = (5+7n) 3^n, a_n <= 12 n 5^n for n>=1
a = [5, 36]
for n in range(2, 40): a.append(6*a[-1] - 9*a[-2])
assert all(a[n] == (5 + 7*n) * 3**n for n in range(40)) and all(a[n] <= 12*n*5**n for n in range(1, 40)); print("Q2b ok")
# Q2c: x1>=3,x2>=5,x3>=5,x4>=4, x1+..+x4 <= 23
c = sum(1 for x in itertools.product(range(3, 24), range(5, 24), range(5, 24), range(4, 24)) if sum(x) <= 23)
assert c == comb(10, 4) == 210; print("Q2c", c)
# Q3a
n = next(n for n in range(3, 100) if comb(n, 2) == 190); assert n == 20
assert comb(10, 2)**2 == 2025; print("Q3a", n, 2025)
# Q3b: onto f:{1..8}->{1..6} with f^-1({1,2,3}) = {1,2,3}
c = 0
for f in itertools.product(range(1, 7), repeat=8):
    if {i+1 for i in range(8) if f[i] in (1, 2, 3)} == {1, 2, 3} and set(f) == set(range(1, 7)): c += 1
assert c == 900 == 6 * (3**5 - 3*2**5 + 3); print("Q3b", c)
# Q3c: three claims
C5 = nx.cycle_graph(5); assert nx.diameter(C5) == 2 and not nx.is_bipartite(C5)   # c1 false (not complete bipartite)
P4 = nx.path_graph(4); assert nx.is_bipartite(P4) and nx.is_isomorphic(P4, nx.complement(P4)) and nx.diameter(nx.complement(P4)) == nx.diameter(P4) == 3  # c2 false
random.seed(2)
for _ in range(200):
    n = random.randint(2, 7); G = nx.gnp_random_graph(n, 0.5, seed=random.randint(0, 10**6))
    if not nx.is_connected(G): continue
    br = list(nx.bridges(G))
    for T in nx.SpanningTreeIterator(G):
        assert all(T.has_edge(*e) for e in br)                                            # c3 true
print("Q3c ok")


# Q4a: constructions (11 vertices, degrees 3, nine 2s, 1)
def seq(G): return sorted((d for _, d in G.degree()), reverse=True)


want = [3] + [2]*9 + [1]
G1 = nx.cycle_graph(10); G1.add_edge(0, 10)
assert seq(G1) == want and nx.is_connected(G1) and nx.is_bipartite(G1)
G2 = nx.disjoint_union(nx.cycle_graph(4), nx.cycle_graph(6)); G2.add_edge(0, 10)
assert G2.number_of_nodes() == 11 and seq(G2) == want and not nx.is_connected(G2) and nx.is_bipartite(G2)
for G in (G1, G2):
    H = nx.complement(G); odd = [v for v, d in H.degree() if d % 2]
    assert len(odd) == 2 and nx.is_connected(H) and nx.has_eulerian_path(H)
    assert min(d for _, d in H.degree()) >= 11 / 2
# the drawings in the ink have only 9 vertices (C8 + leaf): degree sequence 3, 2^7, 1
D1 = nx.cycle_graph(8); D1.add_edge(0, 8); assert seq(D1) == [3] + [2]*7 + [1]
print("Q4a ok (ink drawings have 9 vertices, the text needs 11)")
# Q4b: the 12-vertex graph read from the figure
E = ["1-2", "2-3", "3-4", "4-5", "5-6", "6-1", "1-7", "2-8", "3-9", "4-10", "5-11", "6-12", "7-8", "11-12", "9-10", "8-11", "12-9", "7-10"]
G = nx.Graph([tuple(map(int, e.split("-"))) for e in E])
assert G.number_of_nodes() == 12 and G.number_of_edges() == 18 and all(d == 3 for _, d in G.degree())
assert nx.is_bipartite(G)                                                                    # chi = 2
cyc = [1, 7, 8, 2, 3, 9, 10, 4, 5, 11, 12, 6]
assert sorted(cyc) == list(range(1, 13)) and all(G.has_edge(cyc[i], cyc[(i+1) % 12]) for i in range(12))   # C12 spanning subgraph
H = nx.complement(G)
assert all(d == 8 for _, d in H.degree()) and nx.is_eulerian(H) and min(d for _, d in H.degree()) >= 6


def induced(H, S, T): return nx.is_isomorphic(H.subgraph(S), T)


assert induced(H, [7, 9, 1, 10], nx.path_graph(4)) and H.has_edge(7, 9) and H.has_edge(9, 1) and H.has_edge(1, 10)
assert induced(H, [1, 3, 5, 10], nx.complete_graph(4))
assert induced(H, [1, 4, 2, 5], nx.cycle_graph(4))
assert not any(induced(H, S, nx.cycle_graph(5)) for S in itertools.combinations(range(1, 13), 5))
print("Q4b ok")
# the printed 2-colouring classes of Q4b.3
c1 = [1, 3, 5, 8, 10, 12]; c2 = [2, 4, 6, 7, 9, 11]
assert all(not (u in c1 and v in c1) and not (u in c2 and v in c2) for u, v in G.edges())
print("Q4b colouring classes ok")


# ======================================================================================
# STEPS section: every value used in the rubric / steps of tools/gen/gen_22B-B.py
# ======================================================================================
import json, pathlib
import sympy as sp
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "22B-B.json").read_text(encoding="utf-8"))


def raw_numerics(qid):
    for q in RAW["questions"]:
        if f"22B-B-Q{q['num']}" + {"א": "a", "ב": "b", "ג": "c"}.get(q.get("part"), "") == qid:
            return [s["answer"] for s in q.get("steps", []) if s["type"] == "numeric"]
    raise KeyError(qid)


EXPECT = {}
# Q1a: permutations containing "ab" (the glued block) and those without
cont = sum(1 for p in itertools.permutations("abcdef") if "ab" in "".join(p))
assert cont == 120 == math.factorial(5) and 720 - cont == 600
EXPECT["Q1a"] = [120, 600]
# Q1b: phi(1)=1; phi(n) <= n-1 for n>=2; the distractors fail
assert int(totient(1)) == 1 and all(1 <= int(totient(n)) <= n - 1 for n in range(2, 3000))
assert int(totient(4)) != 3 and int(totient(3)) % 2 == 0            # "phi(n)=n-1 always" and "phi(n) odd" fail
assert not any(int(totient(n)) >= n for n in range(2, 3000))        # "phi(n) >= n" fails
assert [n for n in range(1, 3000) if int(totient(n)) % n == 0] == [1]
EXPECT["Q1b"] = [1, 1]
# Q1c: forest with n=20, k=5 -> 15 edges (random forest check), the findbug variant (n-1) is wrong when k>1
random.seed(7)
for _ in range(200):
    n = 20
    # build a forest with exactly 5 components: random tree edges inside 5 groups
    F = nx.Graph(); F.add_nodes_from(range(n)); grp = [[] for _ in range(5)]
    for v in range(n): grp[v % 5].append(v)
    for g_ in grp:
        for i_ in range(1, len(g_)): F.add_edge(g_[i_], g_[random.randrange(i_)])
    assert nx.is_forest(F) and nx.number_connected_components(F) == 5 and F.number_of_edges() == 15 == n - 5 != n - 1
EXPECT["Q1c"] = [15]
# Q2a
for nn in (2,):
    s1 = sum(comb(nn, k) * 7**k * 3**(nn-k) for k in range(nn+1)); s2 = sum(comb(nn, k) * 5**(nn+k) * 3**(nn-k) for k in range(nn+1))
    assert (s1, s2) == (100, 1600) and s1 * s2 == 2**(4*nn) * 5**(2*nn)
    assert s1 * s2 not in (2**(3*nn) * 5**(2*nn), 2**(4*nn) * 5**nn, 10**(3*nn))
odd3 = sum(1 for d in divisors(2**12 * 5**6) if d % 2); assert odd3 == 7 == 2*3 + 1
EXPECT["Q2a"] = [100, 1600, 7]
# Q2b
r_ = sp.symbols("r"); assert sp.solve(r_**2 - 6*r_ + 9, r_) == [3]
c1_, c2_ = sp.symbols("c1 c2"); sol_ = sp.solve([c1_ - 5, 3*c1_ + 3*c2_ - 36], [c1_, c2_]); assert sol_ == {c1_: 5, c2_: 7}
assert a[2] == 171 == (5 + 7*2) * 9
assert all(a[n] <= 12 * n * 3**n for n in range(1, 40)) and all(5 <= 5*n for n in range(1, 40))
EXPECT["Q2b"] = [3, 7, 171, 12]
# Q2c
assert 23 - (3 + 5 + 5 + 4) == 6 and comb(6 + 5 - 1, 4) == 210
EXPECT["Q2c"] = [6, 5, 210]
# Q3a
assert 20 * 19 // 2 == 190 and comb(10, 2) == 45
c = sum(1 for B in itertools.combinations(range(1, 21), 4) if sum(1 for x in B if x % 2 == 0) == 2)
assert c == 2025 == 45 * 45
EXPECT["Q3a"] = [20, 45, 2025]
# Q3b
assert math.factorial(3) == 6 and 3**5 - 3*2**5 + 3 == 150 and 6 * 150 == 900
EXPECT["Q3b"] = [6, 150, 900]
# Q3c: option checks
def infd(G): return nx.diameter(G) if nx.is_connected(G) else float("inf")
def complete_bip(G): return nx.is_bipartite(G) and G.number_of_edges() == (lambda A, B: len(A) * len(B))(*nx.bipartite.sets(G)) if nx.is_connected(G) else False
assert infd(nx.cycle_graph(5)) == 2 and not nx.is_bipartite(nx.cycle_graph(5))                    # C5 counterexample to c1
assert infd(nx.cycle_graph(4)) == 2 and complete_bip(nx.cycle_graph(4))                            # C4 is K22: not a counterexample
assert infd(nx.path_graph(4)) == 3 and infd(nx.complete_graph(3)) == 1                              # P4, K3 not diam 2
def c2ok(G): return nx.is_bipartite(G) and infd(nx.complement(G)) == infd(G)
assert c2ok(nx.path_graph(4)) and not c2ok(nx.cycle_graph(5)) and not c2ok(nx.path_graph(3)) and not c2ok(nx.cycle_graph(4))
EXPECT["Q3c"] = []
# Q4a
for GG in (G1, G2):
    H_ = nx.complement(GG); degs = sorted(d for _, d in H_.degree())
    assert degs.count(9) == 1 and degs.count(7) == 1 and sum(1 for d in degs if d % 2) == 2
K4 = nx.complete_graph(4); assert nx.is_hamiltonian(K4) if hasattr(nx, "is_hamiltonian") else True
assert not nx.has_eulerian_path(K4) and sum(1 for _, d in K4.degree() if d % 2) == 4
EXPECT["Q4a"] = [9, 7, 2]
# Q4b: G from the figure
assert 11 - 1 - 3 + 0 == 7 and all(d == 8 for _, d in H.degree()) and G.number_of_edges() == 18 != 12
assert nx.is_bipartite(G) and not nx.is_bipartite(nx.cycle_graph(5))
EXPECT["Q4b"] = [8, 2]
LET = {"Q1a": "Q1a", "Q1b": "Q1b", "Q1c": "Q1c", "Q2a": "Q2a", "Q2b": "Q2b", "Q2c": "Q2c", "Q3a": "Q3a", "Q3b": "Q3b",
       "Q3c": "Q3c", "Q4a": "Q4a", "Q4b": "Q4b"}
for k_, v_ in EXPECT.items():
    assert raw_numerics("22B-B-" + k_) == v_, (k_, raw_numerics("22B-B-" + k_), v_)
print("STEPS section: ALL ASSERTIONS PASSED")
