# Brute-force helpers shared by gen.py (writes the level files) and check.py (re-asserts the stored JS).
from itertools import product, combinations
from math import comb, perm, factorial

def funcs(m, n):
    return product(range(1, n + 1), repeat=m)

def count(m, n, pred):
    return sum(1 for f in funcs(m, n) if pred(f))

inj = lambda f: len(set(f)) == len(f)
def onto(n): return lambda f: len(set(f)) == n
inc = lambda f: all(f[i] < f[i + 1] for i in range(len(f) - 1))
dec = lambda f: all(f[i] > f[i + 1] for i in range(len(f) - 1))
winc = lambda f: all(f[i] <= f[i + 1] for i in range(len(f) - 1))
wdec = lambda f: all(f[i] >= f[i + 1] for i in range(len(f) - 1))

def stirling_bf(m, n):
    """number of partitions of an m-set into n non-empty blocks, via restricted growth strings"""
    def rec(i, mx):
        if i == m:
            return 1 if mx == n else 0
        return sum(rec(i + 1, max(mx, v + 1)) for v in range(min(mx + 1, n)))
    return rec(0, 0)

def D(n, m):
    return comb(n + m - 1, m)
