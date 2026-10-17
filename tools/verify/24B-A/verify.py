# Re-derivation of the 24B-A answers (brute force / sympy). ASCII output only.
import itertools, math
from math import comb
from sympy import totient, primerange, symbols, rsolve, Function, simplify, divisor_count
import networkx as nx

# Q1a: permutations of 1..6 avoiding substring 123
c = sum(1 for p in itertools.permutations(range(1, 7)) if not any(p[i:i+3] == (1, 2, 3) for i in range(4)))
assert c == 696 == math.factorial(6) - math.factorial(4); print("Q1a", c)
# Q1b: 5-subsets of 1..9 with 1,2 in and 7,5 out
c = sum(1 for s in itertools.combinations(range(1, 10), 5) if 1 in s and 2 in s and 7 not in s and 5 not in s)
assert c == 10; print("Q1b", c)
# Q1c: no tree on n>=5 vertices has a tree complement (all trees n=1..9), and n in {1,4} do
for n in range(1, 10):
    ok = [nx.is_tree(nx.complement(T)) for T in nx.nonisomorphic_trees(n)] if n > 1 else [True]
    print("Q1c n=%d trees with tree complement: %d of %d" % (n, sum(ok), len(ok)))
    if n >= 5: assert not any(ok)
# Q2a: derangements of 1..8 with first 4 positions holding {1,2,3,4}
c = sum(1 for p in itertools.permutations(range(1, 9)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i+1 for i in range(8)))
assert c == 81; print("Q2a", c)
# Q2b: 4-subsets of 1..6 containing {1,2} or {5,6}
c = sum(1 for s in itertools.combinations(range(1, 7), 4) if {1, 2} <= set(s) or {5, 6} <= set(s))
assert c == 11; print("Q2b", c)
# Q2c: phi(n) | n iff? and n | phi(n)
sol = [n for n in range(1, 3000) if totient(n) % n == 0]; print("Q2c n | phi(n):", sol)
assert sol == [1]
assert all(n % totient(n) == 0 for p in range(3, 8) for q in range(p+1, 9) for n in [2**p * 3**q])
print("Q2c phi(n)|n for 2^p3^q ok")
# Q3a: 15 trees, 4 kinds, at least 2 of each
c = sum(1 for a in range(2, 16) for b in range(2, 16) for cc in range(2, 16) for d in range(2, 16) if a+b+cc+d == 15)
assert c == comb(10, 3) == 120; print("Q3a", c)
# Q3b
a = [26, 128]
for n in range(2, 40): a.append(6*a[-1] - 9*a[-2] + 4*5**n)
assert all(a[n] == 3**n + 25*5**n for n in range(40)); print("Q3b closed form ok n<40; ratio a_n/5^n ->", a[39]/5**39)
assert all(a[n] <= 26*5**n for n in range(40))
# Q3c: r-regular graph with r-regular complement needs |V|=2r+1 and |V| even if r odd -> check small graphs by degree seq
for r in (3, 5, 7):
    ok = False
    for v in range(r+1, 3*r):
        if (v*r) % 2 == 0 and v-1-r == r: ok = True
    assert not ok
print("Q3c ok")
# Q4a
n = next(n for n in range(3, 100) if comb(n, 2) == 300); assert n == 25
P = list(primerange(2, 26)); assert len(P) == 9
c = comb(9, 3) * comb(16, 4); assert c == 152880 and comb(9, 3) == 84 and comb(16, 4) == 1820; print("Q4a", n, c)
# Q4b: divisor count of m with 49 | d, check small n directly
for n in range(1, 5):
    m = sum(comb(n, k)*2**(n+k)*5**(n-k) for k in range(n+1)) * sum(comb(n, k)*4**(n+k)*3**(n-k) for k in range(n+1))
    assert m == 2**(3*n) * 7**(2*n)
    cnt = sum(1 for d in range(1, 1) ) + sum(1 for e in [0] ) # placeholder
    cnt = 0
    for a_ in range(0, 3*n+1):
        for b_ in range(0, 2*n+1):
            if b_ >= 2: cnt += 1
    assert m % 49 == 0 and cnt == (3*n+1)*(2*n-1)
    # direct divisor count
    from sympy import divisors
    if m < 10**9: assert sum(1 for d in divisors(m) if d % 49 == 0) == (3*n+1)*(2*n-1)
print("Q4b ok")
# Q4c: trees with degrees in {1,3}: p leaves => p-2 degree-3 vertices
for n in range(4, 13):
    for T in nx.nonisomorphic_trees(n):
        ds = [d for _, d in T.degree()]
        if set(ds) <= {1, 3}:
            p = ds.count(1)
            if p > 3: assert ds.count(3) == p-2
print("Q4c ok")
