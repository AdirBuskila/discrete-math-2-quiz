# Re-derivation of the 24B-B answers (brute force / sympy / networkx). ASCII output only.
import itertools
from math import comb, gcd
from sympy import totient, divisors, factorint
import networkx as nx

# Q1a: derangements of 1..6 with 1,2,3,4 in the first 4 positions
c = sum(1 for p in itertools.permutations(range(1, 7)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i+1 for i in range(6)))
assert c == 9; print("Q1a", c)
# Q1b: phi(phi(5^a)) for 5^a > 100 is divisible by 40
for a in range(3, 12):
    assert totient(totient(5**a)) % 40 == 0 and totient(totient(5**a)) == 40 * 5**(a-3)
print("Q1b ok (alpha=3..11); alpha=2 (25<100) gives", totient(totient(25)))
# Q1c: all trees on n=2..9 vertices whose complement is a tree
for n in range(2, 10):
    good = [T for T in nx.nonisomorphic_trees(n) if nx.is_tree(nx.complement(T))]
    print("Q1c n=%d: %d" % (n, len(good)), sorted(d for _, d in good[0].degree()) if good else "")
    assert (len(good) == 1) if n == 4 else (len(good) == 0)
# Q2.1: perms of 1..5 with 1,2 adjacent or 4,5 adjacent
def adj(p, x, y): return any({p[i], p[i+1]} == {x, y} for i in range(4))
ps = list(itertools.permutations(range(1, 6)))
assert sum(1 for p in ps if adj(p, 1, 2)) == 48
assert sum(1 for p in ps if adj(p, 1, 2) and adj(p, 4, 5)) == 24
c = sum(1 for p in ps if adj(p, 1, 2) or adj(p, 4, 5)); assert c == 72; print("Q2.1", c)
# Q2.2a: 5-subsets of AxB (|A|=4,|B|=3) with no element containing z
A, B = "abcd", "xyz"
AB = [(a, b) for a in A for b in B]
c = sum(1 for M in itertools.combinations(AB, 5) if all(b != "z" for _, b in M)); assert c == 56; print("Q2.2a", c)
# Q2.2b: 5-letter words, distinct letters from A u B, starting with ax or by
L = list(A + B)
c = sum(1 for w in itertools.permutations(L, 5) if (w[0], w[1]) in (("a", "x"), ("b", "y"))); assert c == 120; print("Q2.2b", c)
# Q2.3a: phi neither injective, increasing nor decreasing
assert totient(1) == totient(2) == 1 and totient(5) == 4 > totient(6) == 2 and totient(4) == 2 < totient(5)
# Q2.3b
assert totient(500) == 200
a, b = pow(121, 100, 500), pow(81, 50, 500); assert (a, b) == (1, 1); print("Q2.3b", totient(500), a, b, (a + b) % 500, a + b)
# Q3.1: 17 identical objects, 5 distinct cells, >=2 each
c = sum(1 for t in itertools.product(range(2, 18), repeat=5) if sum(t) == 17)
assert c == comb(11, 4) == 330; print("Q3.1", c, "(k = 17-10 = 7, not 9)")
# Q3.2
a_ = [19, 56]
for n in range(2, 40): a_.append(4*a_[-1] - 4*a_[-2] + 2*3**n)
assert all(a_[n] == 2**n + 18*3**n for n in range(40)); assert all(a_[n] <= 19*3**n for n in range(40)); print("Q3.2 ok (a_1 = 56 given; printed 60 is a typo)")
# Q3.3: P3 is a counterexample to "no such graph"
G = nx.path_graph(3); H = nx.complement(G)
leaves = lambda g: {v for v, d in g.degree() if d == 1}
assert leaves(G) == leaves(H) == {0, 2}; print("Q3.3 P3 leaves", leaves(G), leaves(H))
# Q4.1
assert 2**9 == 512; P = [2, 3, 5, 7]; assert comb(4, 2) * comb(6, 3) == 120; print("Q4.1 120")
# Q4.2: m and odd divisors of phi(m)
for n in range(6, 9):
    m = sum(comb(n, k)*7**(n+k)*3**(n-k) for k in range(n+1)) * sum(comb(n, k)*2**(n+k)*6**(n-k) for k in range(n+1))
    assert m == 2**(5*n) * 5**n * 7**n
    ph = totient(m)
    f = factorint(ph); assert f == {2: 5*n+2, 3: 1, 5: n-1, 7: n-1}, f
    odd = 2 * n * n
    assert sum(1 for d in divisors(ph // 2**(5*n+2)) if d % 2 == 1) == odd
print("Q4.2 ok: phi(m) = 2^(5n+2) 3 5^(n-1) 7^(n-1), odd divisors 2n^2 (printed 7^2n in the first product is a typo)")
# Q4.3: connected graphs with sum deg = 2n-2 are trees (all graphs n<=7)
for n in range(2, 8):
    for G in nx.graph_atlas_g():
        if G.number_of_nodes() == n and nx.is_connected(G) and sum(d for _, d in G.degree()) == 2*n - 2:
            assert nx.is_tree(G)
print("Q4.3 ok")
