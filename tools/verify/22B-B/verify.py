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
