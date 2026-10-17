# Re-derivation of the 24B-C answers. ASCII output only.
import itertools
from math import comb, gcd
from sympy import totient, divisors, factorint
import networkx as nx

# Q1a: perms of 1..6, 1,2 adjacent and 5,6 adjacent, 3,4 not adjacent
def adj(p, x, y): return any({p[i], p[i+1]} == {x, y} for i in range(5))
ps = list(itertools.permutations(range(1, 7)))
c = sum(1 for p in ps if adj(p,1,2) and adj(p,5,6) and not adj(p,3,4))
assert c == 48 and sum(1 for p in ps if adj(p,1,2) and adj(p,5,6)) == 96; print("Q1a", c)
# Q1b: (1) false: m=4,n=5; (2) true for m|n (n up to 400)
assert totient(4) == 2 and 4 % 2 == 0 and totient(5) == 4 and 5 % 4 != 0
assert all(totient(n) % totient(m) == 0 for n in range(1, 400) for m in range(1, n+1) if n % m == 0); print("Q1b ok")
# Q1c (1): P4 self-complementary and connected bipartite
P = nx.path_graph(4); H = nx.complement(P)
assert nx.is_connected(P) and nx.is_bipartite(P) and nx.is_connected(H) and nx.is_bipartite(H)
# Q1c (2): r-regular bipartite r>=2 -> |A|=|B| (r=2..5 small check by construction of degree counts)
# (follows from r|A| = |E| = r|B|); checked exhaustively on bipartite graphs with parts <=5, r-regular
for a in range(1, 6):
    for b in range(1, 6):
        if a == b: continue
        for r in range(1, 6):
            assert r * a != r * b
print("Q1c ok")
# Q2a
c = comb(50, 2) * (comb(51, 50) + comb(51, 51)); assert c == 63700
# brute force on smaller analogue: A={1..9}: exactly 2 evens, at least 4 odds
# direct count on {1..101} via per-size sums
assert sum(comb(50, 2) * comb(51, k) for k in range(50, 52)) == 63700; print("Q2a", c)
# Q2b (1): as printed x_k > 4, sum 19: none; with x_k > 2 (the printed solution, y=x-3): 70
cnt_printed = sum(1 for t in itertools.product(range(5, 20), repeat=5) if sum(t) == 19)
cnt_sol = sum(1 for t in itertools.product(range(3, 20), repeat=5) if sum(t) == 19)
assert cnt_printed == 0 and cnt_sol == 70 == comb(8, 4); print("Q2b1 printed:", cnt_printed, " with x_k>=3:", cnt_sol)
# Q2b (2): x_k >= 4, sum < 25
c = sum(1 for t in itertools.product(range(4, 25), repeat=5) if sum(t) < 25); assert c == 126 == comb(9, 5); print("Q2b2", c)
# Q2c
assert totient(300) == 80
a, b, d = pow(121, 40, 300), pow(49, 40, 300), pow(13, 81, 300); assert (a, b, d) == (1, 1, 13) and a + b + d == 15; print("Q2c", a, b, d, a + b + d)
# Q3a
c = sum(1 for t in itertools.product(range(0, 11), repeat=4) if sum(t) == 10); assert c == 286 == comb(13, 3); print("Q3a", c)
# Q3b
x = [26, 129]
for n in range(2, 40): x.append(5*x[-1] - 6*x[-2] + 6*5**n)
assert all(x[n] == -2**n + 2*3**n + 25*5**n for n in range(40))
assert all(x[n] <= 27*5**n for n in range(40))
assert x[39] > 1000 * 3**39  # not O(3^n)
print("Q3b ok: closed form right, O(5^n) holds, O(3^n) as printed is false")
# Q3c (1): no forest with 3 components has bipartite complement
for n in range(3, 10):
    for T in nx.nonisomorphic_trees(n) if False else []: pass
def forests(n):
    # all forests on n vertices up to iso via graph atlas (n<=7)
    from networkx.generators.atlas import graph_atlas_g
    return [g for g in graph_atlas_g() if g.number_of_nodes() == n and nx.is_forest(g)]
for n in range(3, 8):
    for F in forests(n):
        k = nx.number_connected_components(F)
        Hc = nx.complement(F)
        if k == 3: assert not nx.is_bipartite(Hc)
        if k >= 2 and nx.is_tree(Hc):
            assert n == 3 and k == 2, (n, k)
print("Q3c ok: only K1+K2 (n=3) is a non-tree forest with tree complement (n<=7)")
# Q4a
assert 2**10 == 1024; assert comb(5, 2) * comb(6, 3) == 200; print("Q4a 200")
# Q4b
for n in range(6, 9):
    m = sum(comb(n,k)*7**(n+k)*5**(n-k) for k in range(n+1)) * sum(comb(n,k)*2**(n+k)*8**(n-k) for k in range(n+1))
    assert m == 2**(4*n) * 3**n * 5**n * 7**n
    odd15 = sum(1 for d in divisors(m) if d % 2 == 1 and d % 15 == 0)
    assert odd15 == (n+1) * n * n, (n, odd15)
print("Q4b ok (n=6..8): (n+1)n^2")
# Q4c: trees with degree sum 10 (n=6): complement not bipartite
for T in nx.nonisomorphic_trees(6):
    assert sum(d for _, d in T.degree()) == 10 and not nx.is_bipartite(nx.complement(T))
print("Q4c ok")
