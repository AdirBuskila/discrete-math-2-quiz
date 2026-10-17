# Re-derivation of the 23B-A answers. ASCII output only.
import itertools
from math import comb, perm
from sympy import totient, isprime, factorint, divisors, primerange
import networkx as nx
from networkx.generators.atlas import graph_atlas_g

atlas = graph_atlas_g()
# Q1a: injective f:{1..5}->{1..10}, f({1,2}) in {6..10}, f({3,4,5}) in {1..5}
c = 0
for t in itertools.permutations(range(1, 11), 5):
    if all(x >= 6 for x in t[:2]) and all(x <= 5 for x in t[2:]): c += 1
assert c == 1200 == perm(5, 2) * perm(5, 3); print("Q1a", c)
# Q1b: p prime, gcd(n,p^4)=p^3, no prime q>p divides n  =>  p | phi(phi(n))
from math import gcd
cnt = 0
for p in primerange(2, 40):
    smallp = [q for q in primerange(2, p)]
    for m in range(1, 2000):
        if gcd(m, p) != 1 or any(m % q == 0 for q in primerange(p+1, 2001)): continue
        n = m * p**3
        assert gcd(n, p**4) == p**3
        assert totient(totient(n)) % p == 0; cnt += 1
print("Q1b ok", cnt, "cases")
# Q1c: n>2, 1<m<n-1  =>  diam(complement) = 2   (all graphs n<=7)
k = 0
for g in atlas:
    n, m = g.number_of_nodes(), g.number_of_edges()
    if n > 2 and 1 < m < n - 1:
        H = nx.complement(g); assert nx.is_connected(H) and nx.diameter(H) == 2; k += 1
print("Q1c ok", k, "graphs")
# Q2a: f(n), divisor counts, m = 3n(n+1)^4
for n in range(1, 8):
    f = sum(comb(n,k)*3**(n-k) for k in range(n+1)) * sum(comb(n,k)*3**(n+k)*7**(n-k) for k in range(n+1))
    assert f == 2**(3*n) * 3**n * 5**n * 1 * (1) or f == 4**n*10**n*3**n
    assert f == 2**(3*n) * 3**n * 5**n
    ds = divisors(f); a = sum(1 for d in ds if d % 2 == 0); b = sum(1 for d in ds if d % 2 == 1)
    assert a == 3*n*(n+1)**2 and b == (n+1)**2 and a*b == 3*n*(n+1)**4
print("Q2a ok n=1..7")
# Q2b
x = [10, 30]
for n in range(2, 40): x.append(4*x[-1] - 4*x[-2])
assert all(x[n] == 10*2**n + 5*n*2**n for n in range(40)); print("Q2b ok")
# Q2c: multisets of size 22: a>=7, b>=3 (as printed), c>=4, d=2 ; and with b>=2 (the ink's lower bound)
def cnt(bmin):
    return sum(1 for x1 in range(7, 23) for x2 in range(bmin, 23) for x3 in range(4, 23) if x1 + x2 + x3 + 2 == 22)
assert cnt(3) == 28 == comb(8, 2); print("Q2c", cnt(3), "(with b>=2 it would be", cnt(2), ")")
# Q3a: sizes >= n-2 total 1276 -> n = 50; 5-subsets with 2 even and 3 odd
ns = [n for n in range(3, 200) if comb(n, 2) + n + 1 == 1276]; assert ns == [50]
assert comb(25, 2) * comb(25, 3) == 690000; print("Q3a", ns, 690000)
# Q3b: not onto f:{1..10}->{1,2}
c = sum(1 for f in itertools.product((1, 2), repeat=10) if len(set(f)) < 2); assert c == 2; print("Q3b", c)
# Q3c
G = nx.Graph(); G.add_nodes_from(range(0, 21))
G.add_edges_from((x, y) for x in range(21) for y in range(x+1, 21) if x % 2 == y % 2)
H = nx.complement(G)
k4 = sum(1 for S in itertools.combinations(range(21), 4) if G.subgraph(S).number_of_edges() == 6)
def induced_p3(g):
    c = 0
    for S in itertools.combinations(g.nodes, 3):
        s = g.subgraph(S)
        if s.number_of_edges() == 2: c += 1
    return c
p3 = induced_p3(H)
assert k4 == 540 == comb(10, 4) + comb(11, 4) and p3 == 1045 == 10*comb(11, 2) + 11*comb(10, 2)
assert nx.is_isomorphic(H, nx.complete_bipartite_graph(11, 10)); print("Q3c", k4, p3)
# Q4a: r-regular G (r>=4), H spanning (r-2)-regular.  (1) true  (2) false: counterexample r=4
G = nx.disjoint_union(nx.complete_graph(4), nx.complete_graph(4))
for i in range(4): G.add_edge(i, 4 + i)
assert all(d == 4 for _, d in G.degree()) and nx.is_eulerian(G)
H = nx.disjoint_union(nx.cycle_graph(4), nx.cycle_graph(4))
assert all(G.has_edge(*e) for e in H.edges) and all(d == 2 for _, d in H.degree()) and not nx.is_eulerian(H)
# (1) exhaustive on all graphs n<=7: G r-regular r>=4, spanning (r-2)-regular H Euler -> G Euler
for g in atlas:
    n = g.number_of_nodes()
    degs = {d for _, d in g.degree()}
    if len(degs) == 1 and min(degs) >= 4 and n >= 5:
        r = degs.pop()
        for es in itertools.combinations(g.edges, n*(r-2)//2):
            h = nx.Graph(); h.add_nodes_from(g.nodes); h.add_edges_from(es)
            if all(d == r-2 for _, d in h.degree()) and nx.is_eulerian(h): assert nx.is_eulerian(g)
print("Q4a ok")
# Q4b: graphs with a vertex that is a leaf in G and in its complement (all graphs n<=7)
res = []
for g in atlas:
    n = g.number_of_nodes()
    if n == 0: continue
    h = nx.complement(g)
    if any(g.degree(v) == 1 and h.degree(v) == 1 for v in g): res.append((n, sorted(d for _, d in g.degree()), g.number_of_edges()))
assert all(n == 3 for n, _, _ in res) and len(res) == 2, res; print("Q4b graphs (n, degs, edges):", res)
# Q4c: 13-vertex graph
E = [(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,1),(1,9),(2,9),(8,12),(7,12),(9,13),(12,13),(10,13),(11,13),(3,10),(4,10),(5,11),(6,11)]
Gf = nx.Graph(E); assert Gf.number_of_nodes() == 13 and Gf.number_of_edges() == 20
assert sorted(d for _, d in Gf.degree()) == [3]*12 + [4]
cyc = [1,2,3,10,4,5,11,6,7,8,12,13,9]
assert all(Gf.has_edge(cyc[i], cyc[(i+1) % 13]) for i in range(13)) and len(set(cyc)) == 13; print("Q4c1 Hamilton cycle ok")
G2 = Gf.copy(); G2.remove_node(13); C2 = nx.complement(G2)
assert G2.degree(9) == 2 and C2.degree(9) == 9 and not nx.is_eulerian(C2); print("Q4c2 deg_comp(v9) =", C2.degree(9))
col = {1:1,2:2,3:1,4:2,5:1,6:2,7:1,8:2,9:3,10:3,11:3,12:3,13:1}
assert all(col[u] != col[v] for u, v in Gf.edges) and Gf.has_edge(1,2) and Gf.has_edge(1,9) and Gf.has_edge(2,9); print("Q4c3 chi=3")
Hc = nx.complement(Gf); S = [1,3,5,7,13]; assert all(Hc.has_edge(a, b) for a, b in itertools.combinations(S, 2)); print("Q4c4 K5 in complement")
