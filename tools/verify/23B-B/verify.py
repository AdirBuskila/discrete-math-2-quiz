# Re-derivation of the 23B-B answers. ASCII output only.
import itertools
from math import comb, perm
from sympy import totient, isprime
import networkx as nx
from networkx.generators.atlas import graph_atlas_g

# Q1a: 5-letter sequences over {1..5} that are not permutations
c = sum(1 for t in itertools.product(range(1, 6), repeat=5) if len(set(t)) < 5); assert c == 3005 == 5**5 - 120; print("Q1a", c)
# Q1b: unique prime p with phi(p) | p
ps = [p for p in range(2, 20000) if isprime(p) and p % totient(p) == 0]; assert ps == [2]; print("Q1b", ps)
# Q1c: no regular graph with |V| = 0 mod 4 and |E| odd (all graphs on 4 vertices; parity argument in general)
atlas = graph_atlas_g()
for g in atlas:
    n, m = g.number_of_nodes(), g.number_of_edges()
    if n >= 1 and n % 4 == 0 and m % 2 == 1:
        assert len({d for _, d in g.degree()}) > 1
print("Q1c ok (n=4, plus parity argument)")
# Q2a: sum identity
for n in range(0, 12):
    f = sum(comb(n,k)*2**(n-k) for k in range(n+1)) * sum(comb(n,k)*3**(n+k)*2**(n-k) for k in range(n+1))
    assert f == 45**n and f <= 50**n
print("Q2a f(n) = 45^n <= 50^n")
# Q2b
a = [3, 14]
for n in range(2, 40): a.append(8*a[-1] - 16*a[-2] + 18)
assert all(a[n] == 4**n + 2*n*4**n + 2 for n in range(40)); print("Q2b ok")
# Q2c: multisets of size 30 over {a,b,c,d}: a>=6, b>=4, c>=5, d in {3,4}
c = 0
for d in (3, 4):
    for x1 in range(6, 31):
        for x2 in range(4, 31):
            x3 = 30 - d - x1 - x2
            if x3 >= 5: c += 1
assert c == 169 == comb(14, 2) + comb(13, 2); print("Q2c", c)
# Q3a: n + C(n,2) = 210 -> n = 20; 5-subsets with 3 multiples of 3 and 2 non-multiples
ns = [n for n in range(1, 100) if n + comb(n, 2) == 210]; assert ns == [20]
n = 20
c = sum(1 for S in itertools.combinations(range(1, n+1), 5) if sum(1 for x in S if x % 3 == 0) == 3)
assert c == comb(6, 3) * comb(14, 2) == 1820; print("Q3a", ns, c)
# Q3b
c = sum(1 for f in itertools.product(range(6), repeat=3) if len(set(f)) < 3); assert c == 96; print("Q3b", c)
# Q3c
G = nx.Graph(); G.add_nodes_from(range(1, 16))
G.add_edges_from((x, y) for x in range(1, 16) for y in range(x+1, 16) if x % 3 == y % 3)
H = nx.complement(G)
assert H.number_of_edges() == 75 == 3*5*5
def chi(g):
    nodes = list(g.nodes)
    for k in range(1, 8):
        # backtracking
        col = {}
        def go(i):
            if i == len(nodes): return True
            v = nodes[i]
            for cc in range(k):
                if all(col.get(u) != cc for u in g[v]):
                    col[v] = cc
                    if go(i+1): return True
                    del col[v]
            return False
        if go(0): return k
assert chi(G) == 5 and chi(H) == 3
tri = sum(1 for S in itertools.combinations(range(1, 16), 3) if H.subgraph(S).number_of_edges() == 3)
assert tri == 125; print("Q3c edges", H.number_of_edges(), "chi", chi(G), chi(H), "K3 induced", tri)
# Q4a: bipartite Hamiltonian graphs have even |V| (atlas up to 7 vertices); Euler regular with |V| even has |E| even
def hamiltonian(g):
    n = g.number_of_nodes()
    if n < 3: return False
    nodes = list(g.nodes)
    s = nodes[0]
    for perm_ in itertools.permutations(nodes[1:]):
        cyc = [s] + list(perm_)
        if all(g.has_edge(cyc[i], cyc[(i+1) % n]) for i in range(n)): return True
    return False
for g in atlas:
    n = g.number_of_nodes()
    if n % 2 == 1 and n >= 3 and nx.is_bipartite(g): assert not hamiltonian(g)
    if n >= 3 and n % 2 == 0 and nx.is_connected(g) and all(d % 2 == 0 for _, d in g.degree()) and len({d for _, d in g.degree()}) == 1:
        assert g.number_of_edges() % 2 == 0
print("Q4a ok")
# Q4b: the 12-vertex graph from the figure
E = [(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(9,1),(1,5),(2,7),(3,11),(4,8),(6,12),(9,10),(10,11),(10,12),(11,12)]
Gf = nx.Graph(E); assert Gf.number_of_nodes() == 12 and all(d == 3 for _, d in Gf.degree())
path = [(i, i+1) for i in range(1, 12)]; assert all(Gf.has_edge(*e) for e in path)   # Hamilton path v1..v12 = spanning tree with 2 leaves
G1 = Gf.copy(); G1.remove_edge(1, 5); C1 = nx.complement(G1)
odd = sorted(v for v, d in C1.degree() if d % 2 == 1); assert odd == [1, 5] and nx.is_connected(C1)
assert nx.has_eulerian_path(C1) and not nx.is_eulerian(C1); print("Q4b2 odd vertices", odd)
col = {1:1,2:2,3:1,4:2,5:3,6:1,7:3,8:1,9:2,10:1,11:2,12:3}
assert all(col[u] != col[v] for u, v in E); assert nx.is_connected(Gf)
assert {10, 11, 12} <= set(Gf) and Gf.has_edge(10, 11) and Gf.has_edge(10, 12) and Gf.has_edge(11, 12); assert chi(Gf) == 3; print("Q4b3 chi 3")
Gc = nx.complement(Gf)
K5 = [2, 4, 6, 9, 11]; assert all(Gc.has_edge(a, b) for a, b in itertools.combinations(K5, 2)); print("Q4b4 K5 on", K5)
# induced C5 in Gc: C5 = v1..v5 in G (self-complementary)
S = [1, 2, 3, 4, 5]; assert nx.is_isomorphic(Gc.subgraph(S), nx.cycle_graph(5))
S = [1, 2, 10, 11]; assert nx.is_isomorphic(Gc.subgraph(S), nx.cycle_graph(4)); print("Q4b4 induced C5 on 1..5, C4 on 1,2,10,11")
