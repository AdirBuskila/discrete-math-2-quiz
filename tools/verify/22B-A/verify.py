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
