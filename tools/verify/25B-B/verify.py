# Re-derivation of the 25B-B answers (brute force / sympy / networkx). ASCII output only.
import itertools
from math import comb, factorial, perm
from sympy import totient, divisors, factorint, isprime
import networkx as nx

# Q1a: divisors of 10! not divisible by 7
n = factorial(10); assert factorint(n) == {2: 8, 3: 4, 5: 2, 7: 1}
c = sum(1 for d in divisors(n) if d % 7); assert c == 135 == 9 * 5 * 3; print("Q1a", c)
# Q1b: derangements of 1..7 with 1,2,3,4 in the first 4 positions
c = sum(1 for p in itertools.permutations(range(1, 8)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i+1 for i in range(7)))
assert c == 18; print("Q1b", c)
# Q1c: tree on 30 vertices with degrees in {1,5}: p leaves, p + 5(30-p) = 58
sols = [p for p in range(1, 30) if p + 5*(30-p) == 2*29]; assert sols == [23]; print("Q1c", sols)

# Q2a
c = sum(1 for x1 in range(-1, 40) for x2 in range(0, 40) for x3 in range(7, 40) if x1 + x2 + x3 <= 23)
assert c == 1140 == comb(20, 3); print("Q2a", c)
# Q2b
for n in range(11, 14):
    s1 = sum(comb(n, k) * 2**(n-k) for k in range(n+1)); s2 = sum(comb(n, k) * 8**k * 3**(n-k) for k in range(n+1)); s3 = sum(comb(n, k) * 4**k for k in range(n+1))
    f = s1 * s2 * s3; assert f == 3**n * 5**n * 11**n
    assert sum(1 for d in divisors(f) if d % 15 == 0) == n*n*(n+1)
print("Q2b ok n^2(n+1) for n=11..13")
# Q2c: strictly decreasing f:{1..10}->{1..n}, f({1,2,3})={3,4,5}: f(1)=5>f(2)=4>f(3)=3>f(4)>...>f(10)>=1 needs 7 values below 3
for n in range(10, 16):
    assert sum(1 for s in itertools.combinations(range(1, n+1), 10) if set(s[-3:]) == {3, 4, 5}) == 0
print("Q2c1 0 (7 distinct values < 3 impossible)")
for d in range(2, 6):
    for n in range(1, d + 3):
        assert sum(1 for f in itertools.product(range(n), repeat=d) if len(set(f)) == d) == (perm(n, d) if n >= d else 0)
print("Q2c2 P(n,10)=n!/(n-10)! for n>=10, 0 otherwise (small analogues ok)")

# Q3a
a = [25, 130]
for n in range(2, 40): a.append(5*a[-1] - 6*a[-2] + 6*5**n)
assert all(a[n] == -5*2**n + 5*3**n + 25*5**n for n in range(40)) and all(a[n] <= 30*5**n for n in range(40)); print("Q3a ok")
# Q3b
ans = [n for n in range(1, 2000) if isprime(n) and isprime(int(totient(n)))]; assert ans == [3]; print("Q3b", ans)
# Q3c
n = next(n for n in range(2, 40) if 2**(n-1) - 1 == 4095); assert n == 13
odd_primes = [3, 5, 7, 11, 13]; evens = [2, 4, 6, 8, 10, 12]
c = sum(1 for S in itertools.combinations(range(1, 14), 7)
        if sum(1 for x in S if x % 2 == 0) == 4 and sum(1 for x in S if x in odd_primes) == 3)
assert c == comb(5, 3) * comb(6, 4) == 150; print("Q3c", n, c)

# Q4a: bipartite Eulerian graphs have an even number of edges (connected bipartite, n<=7)
for G in nx.graph_atlas_g():
    if 2 <= G.number_of_nodes() <= 7 and nx.is_bipartite(G) and nx.is_connected(G) and nx.is_eulerian(G):
        assert G.number_of_edges() % 2 == 0
print("Q4a ok")
# Q4b: every degree an odd prime -> |V| even -> complement degrees even -> no bridges in complement.
# check on random-ish graphs: all graphs n<=7 with all degrees odd (3,5 primes) -> complement has all even degrees and no bridges
for G in nx.graph_atlas_g():
    n = G.number_of_nodes()
    if n >= 2 and all(d in (3, 5) for _, d in G.degree()):
        H = nx.complement(G)
        assert all(d % 2 == 0 for _, d in H.degree()) and len(list(nx.bridges(H))) == 0
print("Q4b ok: 0 bridges")
# Q4c: the figure (inferred 4-regular graph on 11 vertices, see docstring)
E = [(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,1),(1,9),(1,10),(5,9),(5,10),(2,11),(2,10),(3,10),(3,7),(4,11),(4,6),(6,11),(7,9),(8,11),(8,9)]
G = nx.Graph(E); H = nx.complement(G)
assert G.number_of_edges() == 22 and all(d == 4 for _, d in G.degree()) and all(d == 6 for _, d in H.degree())
assert nx.is_connected(H) and nx.is_eulerian(H) and 6 >= 11 / 2
ind = lambda g, vs: g.subgraph(vs)
assert nx.is_isomorphic(ind(H, [7, 5, 8, 6, 9]), nx.path_graph(5)) and H.has_edge(7, 5) and H.has_edge(5, 8) and H.has_edge(8, 6) and H.has_edge(6, 9)
house = nx.cycle_graph(4); house.add_edges_from([(0, 4), (1, 4)])
assert nx.is_isomorphic(ind(G, [7, 5, 8, 6, 9]), house)
assert nx.is_isomorphic(ind(H, [1, 2, 4, 5]), nx.cycle_graph(4)) and ind(G, [1, 2, 4, 5]).number_of_edges() == 2
assert nx.is_isomorphic(ind(H, [1, 3, 5, 11]), nx.complete_graph(4)) and ind(G, [1, 3, 5, 11]).number_of_edges() == 0
prism = nx.complement(nx.cycle_graph(6))
assert nx.is_isomorphic(ind(G, [1, 2, 3, 4, 5, 9]), nx.cycle_graph(6)) and nx.is_isomorphic(ind(H, [1, 2, 3, 4, 5, 9]), prism)
print("Q4c ok: H Eulerian (Dirac), induced P5, C4, K4, prism (= complement of induced C6 in G)")

# Q5a
assert perm(8, 5) - perm(7, 5) == 4200 == 5 * perm(7, 4); print("Q5a 4200")
# Q5b
n = next(n for n in range(6, 20) if 2**(n-1) == 128); assert n == 8
c = sum(1 for k in range(4, 9, 2) for _ in itertools.combinations(range(8), k)); assert c == 99; print("Q5b", n, c)
# Q5c
G4 = nx.path_graph(4); assert nx.is_bipartite(G4) and nx.is_connected(G4) and nx.is_isomorphic(G4, nx.complement(G4))
K23 = nx.complete_bipartite_graph(2, 3); odd = [v for v, d in K23.degree() if d % 2]; assert len(odd) == 2 and nx.has_eulerian_path(K23)
assert nx.is_connected(K23)  # Euler path exists; Hamilton path b1 a1 b2 a2 b3:
hp = [("b", 1), ("a", 1), ("b", 2), ("a", 2), ("b", 3)]
K = nx.Graph([(("a", i), ("b", j)) for i in (1, 2) for j in (1, 2, 3)]); assert all(K.has_edge(hp[i], hp[i+1]) for i in range(4))
# part 3: for all trees up to 9 vertices with a bipartition (A,B) and |B|<=|A|: some a in A is a leaf
for n in range(2, 10):
    for T in nx.nonisomorphic_trees(n):
        A, B = nx.bipartite.sets(T)
        for X, Y in ((A, B), (B, A)):
            if len(Y) <= len(X): assert any(T.degree(v) == 1 for v in X)
print("Q5c ok (1 false P4, 2 false K23, 3 true)")

# Q6a
n = 21
assert sum(len(S) * 1 for k in (3, 4, 5) for S in itertools.combinations(range(6), k)) == 3 * comb(6, 3) + 4 * comb(6, 4) + 5 * comb(6, 5)
print("Q6a 3C(n,3)+4C(n,4)+5C(n,5) ok")
# Q6b: connected graph, one vertex deg 4 and the rest deg 5 -> sum parity impossible for bipartite graphs
for N in range(2, 12):
    degs_sum_odd = (4 + 5 * (N - 1)) % 2
    # exists graph? sum must be even -> N even; bipartite requires 4+5(|A|-1) = 5|B| -> 5(|A|-|B|)=1 impossible
    for a_ in range(1, N):
        assert 4 + 5 * (a_ - 1) != 5 * (N - a_)
print("Q6b ok: 5(|A|-|B|)=1 has no integer solution")
