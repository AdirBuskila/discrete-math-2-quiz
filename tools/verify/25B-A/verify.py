# Re-derivation of the 25B-A answers (brute force / sympy / networkx). ASCII output only.
import itertools
from math import comb, factorial
from sympy import totient, divisors, primerange, factorint
import networkx as nx

# Q1a
assert sum(1 for x in range(1, 101) if x % 3 == 0 or x % 49 == 0 or x % 37 == 0) == 37; print("Q1a 37")
# Q1b: perms of 1..7 with 1,2,3 consecutive (any order inside) and 1 before 2 and before 3
def ok(p):
    i = p.index(1)
    return i + 2 < 7 + 0 and set(p[i:i+3]) == {1, 2, 3} or (i + 2 <= 6 and set(p[i:i+3]) == {1, 2, 3})
c = 0
for p in itertools.permutations(range(1, 8)):
    pos = {v: p.index(v) for v in (1, 2, 3)}
    if max(pos.values()) - min(pos.values()) == 2 and pos[1] < pos[2] and pos[1] < pos[3]: c += 1
assert c == 240 == 2 * factorial(5); print("Q1b", c)
# Q1c: K_{m,n} has diameter 2 when m+n>=3 ; C5 has diameter 2 but is not complete bipartite
for m in range(1, 6):
    for n in range(m, 6):
        if m + n >= 3: assert nx.diameter(nx.complete_bipartite_graph(m, n)) == 2
C5 = nx.cycle_graph(5); assert nx.diameter(C5) == 2 and not nx.is_bipartite(C5); print("Q1c ok (1 true, 2 false by C5)")

# Q2a: integer solutions x1+x2+x3 <= 20, x1>1, x2>-2, x3>4
c = sum(1 for x1 in range(2, 40) for x2 in range(-1, 40) for x3 in range(5, 40) if x1 + x2 + x3 <= 20)
assert c == 680 == comb(17, 3); print("Q2a", c)
# Q2b: divisors of f(n) divisible by 12 (n = 10..12 and also check the sums)
for n in range(10, 13):
    s1 = sum(comb(n, k) * 2**(n-k) for k in range(n+1)); s2 = sum(comb(n, k) * 6**k for k in range(n+1)); s3 = sum(comb(n, k) * 5**k for k in range(n+1))
    f = s1 * s2 * s3; assert f == 2**n * 3**(2*n) * 7**n
    assert sum(1 for d in divisors(f) if d % 12 == 0) == 2 * n * (n*n - 1)
print("Q2b ok 2n(n^2-1) for n=10..12")
# Q2c1: strictly increasing f:{1..10}->{1..n} with f({1,2,3}) = {3,4,5}
for n in range(10, 17):
    c = sum(1 for s in itertools.combinations(range(1, n+1), 10) if s[:3] == (3, 4, 5))
    assert c == comb(n-5, 7)
print("Q2c1 C(n-5,7) ok n=10..16")
# Q2c2: onto + injective + f(1)=1 for domain 10 and codomain n: small analogue by enumeration
for d in range(2, 6):
    for n in range(d, d + 3):
        c = sum(1 for f in itertools.product(range(n), repeat=d) if f[0] == 0 and len(set(f)) == d and len(set(f)) == n)
        assert c == (factorial(d-1) if n == d else 0)
print("Q2c2 ok: 9! for n=10, 0 for n>10")

# Q3a
a = [16, 36]
for n in range(2, 40): a.append(6*a[-1] - 9*a[-2] + 3*2**n)
assert all(a[n] == 4*3**n + 12*2**n for n in range(40)) and all(a[n] <= 16*3**n for n in range(40)); print("Q3a ok")
# Q3b
assert all(totient(n) % 21 == 0 for n in range(1, 20000) if n % 49 == 0); print("Q3b ok")
# Q3c: C(n,2)=435 -> n=30 ; 3 multiples of 4 and 6 primes
n = next(n for n in range(3, 100) if comb(n, 2) == 435); assert n == 30
P = list(primerange(2, 31)); M4 = [x for x in range(1, 31) if x % 4 == 0]
assert len(P) == 10 and len(M4) == 7 and not set(P) & set(M4)
print("Q3c n=%d primes=%d mult4=%d answer=C(7,3)*C(10,6)=%d (handwritten key says 29400 = 35*840)" % (n, len(P), len(M4), comb(7, 3) * comb(10, 6)))
assert comb(7, 3) * comb(10, 6) == 7350 and comb(10, 4) == 210 and 35 * 840 == 29400
# Q3c shipped answer (typo-corrected from the printed 29400): C(10,6) = C(10,4) = 210, 10*9*8*7/(1*2*3) = 840 is the dropped-factor slip
assert comb(7, 3) * comb(10, 6) == comb(7, 3) * comb(10, 4) == 7350 and 10 * 9 * 8 * 7 // 6 == 840 and 29400 != 7350

# Q4a: tree with 4 edges: complement not bipartite
for T in nx.nonisomorphic_trees(5): assert not nx.is_bipartite(nx.complement(T))
# Q4b: sequence 6,4,4,2,2,2,2 graphical (the claim "no such graph" is false)
seq = [6, 4, 4, 2, 2, 2, 2]; assert nx.is_graphical(seq); print("Q4b graphical:", nx.is_graphical(seq))
# Q4c: the figure
E = [(1,2),(1,6),(1,8),(2,3),(2,7),(6,7),(6,5),(8,3),(7,4),(8,5),(3,4),(5,4)]
G = nx.Graph(E); H = nx.complement(G)
assert all(d == 3 for _, d in G.degree()) and all(d == 4 for _, d in H.degree())
assert nx.is_connected(H) and nx.is_eulerian(H)
cyc = [1, 2, 3, 8, 5, 4, 7, 6, 1]; assert all(G.has_edge(cyc[i], cyc[i+1]) for i in range(8)) and len(set(cyc[:-1])) == 8
assert nx.is_isomorphic(G.subgraph([1, 2, 3, 4]), nx.path_graph(4)) and nx.is_isomorphic(H.subgraph([1, 2, 3, 4]), nx.path_graph(4))
assert nx.is_isomorphic(H.subgraph([1, 2, 4, 5]), nx.cycle_graph(4)) and G.subgraph([1, 2, 4, 5]).number_of_edges() == 2
assert nx.is_isomorphic(H.subgraph([1, 3, 5, 7]), nx.complete_graph(4)) and G.subgraph([1, 3, 5, 7]).number_of_edges() == 0
assert nx.is_bipartite(G)
has_c5 = any(nx.is_isomorphic(H.subgraph(s), nx.cycle_graph(5)) for s in itertools.combinations(range(1, 9), 5))
assert not has_c5; print("Q4c ok: H Eulerian, G Hamiltonian, induced P4/C4/K4 in H, no induced C5 in H")

# Q5a
n = next(n for n in range(2, 100) if 1 + n + comb(n, 2) == 1276); assert n == 50
c = comb(50 // 5, 5) * comb(50 // 11, 2); assert c == 1512 and not any(x % 55 == 0 for x in range(1, 51)); print("Q5a", n, c)
# Q5b
K4p = nx.complete_graph(4); K4p.add_node(4); assert K4p.number_of_edges() > K4p.number_of_nodes() and not nx.is_connected(K4p)
P4 = nx.path_graph(4); assert P4.number_of_edges() < P4.number_of_nodes() and nx.is_connected(P4)
for G0 in nx.graph_atlas_g():
    n0 = G0.number_of_nodes()
    if 2 <= n0 <= 6 and nx.is_connected(G0) and all(d % 2 == 1 for _, d in G0.degree()):
        T = nx.minimum_spanning_tree(G0); assert T.number_of_edges() % 2 == 1
print("Q5b ok (1 false K4+K1, 2 false P4, 3 true)")
# Q5c
c = sum(1 for w in itertools.product("abcd", repeat=7) if w[0] == "a" and w[-1] == "d" and w.count("d") == 1); assert c == 243; print("Q5c", c)

# Q6a: trees with n=11,13: one vertex of degree 2, others 1 or 3
for n in (11, 13):
    found = 0
    for T in nx.nonisomorphic_trees(n):
        ds = sorted(d for _, d in T.degree())
        if ds.count(2) == 1 and set(ds) <= {1, 2, 3}:
            found += 1
            assert ds.count(1) == (n + 1) // 2
            Tc = nx.complement(T)
            assert not nx.is_eulerian(Tc)
            # Hamilton cycle by DP over subsets is heavy; Dirac check suffices (min deg >= n/2) and verify by search
            adj = {v: set(Tc[v]) for v in Tc}
            def ham():
                path = [0]; used = {0}
                def rec():
                    if len(path) == n: return 0 in adj[path[-1]]
                    for w in adj[path[-1]]:
                        if w not in used:
                            used.add(w); path.append(w)
                            if rec(): return True
                            used.discard(w); path.pop()
                    return False
                return rec()
            assert ham()
    print("Q6a n=%d: %d trees, leaves (n+1)/2, complement Hamiltonian, not Eulerian" % (n, found))
assert all(n % 2 == 1 for n in (11, 13))
# Q6b: small analogue by enumeration, formula N!/N * 2 - (N-2)!
for N in range(3, 8):
    perms = list(itertools.permutations(range(1, N + 1)))
    c = sum(1 for p in perms if p[0] == 1 or p[N-1] == N)
    assert c == 2 * factorial(N-1) - factorial(N-2)
assert 2 * factorial(9) - factorial(8) == factorial(8) * 17 == 685440; print("Q6b 8!*17 = 685440")
