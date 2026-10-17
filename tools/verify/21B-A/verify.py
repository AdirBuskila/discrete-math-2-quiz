# Re-derivation of the 21B-A answers. ASCII output only.
import itertools, math
from math import comb
from sympy import totient, primerange, divisor_count
import networkx as nx

# Q1a
c = sum(1 for p in itertools.permutations("abcdef") if "abc" not in "".join(p)); assert c == 696; print("Q1a", c)
# Q1b: n | m => phi(n) | phi(m); and the printed definition (d | n) is the divisor count, not phi
assert all(int(totient(m)) % int(totient(n)) == 0 for m in range(3, 700) for n in range(2, m) if m % n == 0)
assert int(totient(6)) == 2 and int(divisor_count(6)) == 4
print("Q1b ok (definition with d|n gives tau(6)=4, phi(6)=2)")
# Q1c: connected graph whose only cycles are two vertex-disjoint cycles has |V|+1 edges (all graphs up to 7 vertices)
cnt = 0
for G in nx.graph_atlas_g():
    if G.number_of_nodes() == 0 or not nx.is_connected(G): continue
    cyc = list(nx.simple_cycles(G))
    if len(cyc) == 2 and not set(cyc[0]) & set(cyc[1]):
        assert G.number_of_edges() == G.number_of_nodes() + 1; cnt += 1
print("Q1c ok, graphs checked", cnt)
# Q2a
n = next(n for n in range(8, 100) if comb(n, 2) == 190); assert n == 20 and comb(10, 3) == 120; print("Q2a", n)
# Q2b: onto vs not onto, {1..5} -> {1,2,3}
onto = sum(1 for f in itertools.product(range(3), repeat=5) if set(f) == {0, 1, 2})
assert onto == 150 == 3**5 - 3*2**5 + 3 and 3**5 - onto == 93; print("Q2b onto", onto, "not onto", 3**5 - onto)
# Q2c: trees whose complement is a tree
ok = {n for n in range(1, 10) if any(nx.is_tree(nx.complement(T)) for T in (nx.nonisomorphic_trees(n) if n > 1 else [nx.empty_graph(1)]))}
assert ok == {1, 4}; print("Q2c", sorted(ok))
# Q3a
for n in range(1, 8):
    f = 5**n + sum(comb(n, k) * 3**(2*k) for k in range(n+1)); assert f == 5**n + 10**n <= 2*10**n
# Q3b
a = [10, 30]
for n in range(2, 40): a.append(4*a[-1] - 4*a[-2])
assert all(a[n] == 10*2**n + 5*n*2**n for n in range(40)); print("Q3b ok")
# Q3c: x1>=5, x2>=1, x3>=4, sum 27
c = sum(1 for x1 in range(5, 28) for x2 in range(1, 28) for x3 in range(4, 28) if x1 + x2 + x3 == 27); assert c == comb(19, 2) == 171; print("Q3c", c)
# Q4a
L = "abcduvw"; c = sum(1 for p in itertools.permutations(L) if p[0] in "abcd" and p[-1] in "uvw"); assert c == 1440; print("Q4a", c)
# Q4b
assert 5**5 - math.factorial(5) == 3005 and sum(1 for f in itertools.product(range(5), repeat=5) if len(set(f)) < 5) == 3005; print("Q4b 3005")
# Q4c: 2^(n-1)=1024 -> n=11; 11 | 10^10 - 1
assert 2**(11-1) == 1024 and (10**10 - 1) % 11 == 0 and int(totient(11)) == 10; print("Q4c ok")
# Q5a: sequence (1,1,1,1,2,2,6)
assert nx.is_graphical([1, 1, 1, 1, 2, 2, 6])
G = nx.Graph([(7, i) for i in range(1, 7)] + [(5, 6)]); assert sorted((d for _, d in G.degree()), reverse=True) == [6, 2, 2, 1, 1, 1, 1]; print("Q5a ok (exists)")
# Q5b
assert all(int(totient(p**q * q**p)) % 4 == 0 for p in primerange(3, 60) for q in primerange(3, 60) if p < q); print("Q5b ok")
# Q5c: Petersen graph as drawn (outer a-b-c-d-e, spokes, inner star f-h-j-g-i)
E = "ab bc cd de ea af bg ch di ej fh hj jg gi if".split()
G = nx.Graph([(e[0], e[1]) for e in E]); assert nx.is_isomorphic(G, nx.petersen_graph()) and all(d == 3 for _, d in G.degree())
H = nx.complement(G); assert all(d == 6 for _, d in H.degree()) and min(d for _, d in H.degree()) >= 5 and nx.is_eulerian(H)


def colorable(G, k):
    V = list(G)
    return any(all(col[u] != col[v] for u, v in G.edges()) for col in (dict(zip(V, c)) for c in itertools.product(range(k), repeat=len(V))))


assert not colorable(G, 2) and colorable(G, 3)
assert nx.is_isomorphic(G.subgraph("abcde"), nx.cycle_graph(5))   # C5 in G
assert nx.is_isomorphic(H.subgraph("acij"), nx.complete_graph(4))
print("Q5c ok")
# Q5c printed colouring and Q1c remark (two disjoint cycles do not fix |E| without the "only cycles" assumption)
col = dict(a=1, b=2, c=1, d=2, e=3, f=3, g=3, h=2, i=1, j=1)
assert all(col[u] != col[v] for u, v in G.edges())
K6 = nx.complete_graph(6); assert K6.number_of_edges() != 6 + 1
print("extra ok")
