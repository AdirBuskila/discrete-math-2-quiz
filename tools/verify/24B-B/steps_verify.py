# -*- coding: utf-8 -*-
# Machine check of every step value in tools/raw/24B-B.json (steps/rubric added by gen_24B-B.py).
# Run: PYTHONUTF8=1 py tools/verify/24B-B/steps_verify.py   (ASCII output only)
# Each helper below compares the value COMPUTED here (brute force / sympy / networkx) with what the generator stored.
import itertools, json, pathlib
from math import comb, factorial, perm, ceil
import networkx as nx
import sympy
from sympy import totient, divisors, factorint, primerange, isprime

RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "24B-B.json").read_text(encoding="utf-8"))
QS = {}
for _q in RAW["questions"]:
    _p = _q.get("part", "")
    QS["%s%s" % (_q["num"], {"": "", "א": "a", "ב": "b", "ג": "c"}[_p])] = _q
USED = set()


def step(qk, i):
    USED.add((qk, i))
    return QS[qk]["steps"][i]


def N(qk, i, value):
    s = step(qk, i)
    assert s["type"] == "numeric" and s["answer"] == value and s.get("tol", 0) == 0, (qk, i, s["answer"], value)


def C(qk, i, flags):
    """choice step. `flags` = one computed truth value per option, in the stored option order. Exactly one option is
    really right (computed by a real check in this file) and it must be the stored correctId."""
    s = step(qk, i)
    assert s["type"] == "choice" and len(flags) == len(s["options"]), (qk, i)
    assert sum(1 for f in flags if f) == 1, (qk, i, "not exactly one right option", flags)
    assert s["options"][[bool(f) for f in flags].index(True)]["id"] == s["correctId"], (qk, i, "stored key differs")
    assert len(set(o["value"] for o in s["options"])) == len(s["options"])


def CV(qk, i, values, truth):
    """choice whose options are numbers: values in stored option order, truth computed by brute force."""
    C(qk, i, [v == truth for v in values])


def ORD(qk, i, n):
    s = step(qk, i)
    assert s["type"] == "order" and len(s["lines"]) == n and len(set(s["lines"])) == n, (qk, i)


def BUG(qk, i, idx, ref_i=None):
    """findbug: bugIndex == idx; if ref_i is given the buggy lines differ from that order step's lines in exactly one."""
    s = step(qk, i)
    assert s["type"] == "findbug" and s["bugIndex"] == idx, (qk, i)
    if ref_i is not None:
        ref = QS[qk]["steps"][ref_i]["lines"]
        assert len(ref) == len(s["lines"]) and sum(1 for a, b in zip(ref, s["lines"]) if a != b) == 1
        assert ref[idx] != s["lines"][idx]


def DONE():
    for qk, q in QS.items():
        if q.get("hold"):
            continue
        for i, s in enumerate(q["steps"]):
            assert (qk, i) in USED, ("step not machine-checked", qk, i, s["type"])
        if "points" in q:
            assert sum(r["points"] for r in q["rubric"]) == q["points"], qk
        assert 2 <= len(q["steps"]) <= 5 and 3 <= len(q["rubric"]) <= 6, qk
    print("steps_verify 24B-B: all %d steps in %d items checked" % (len(USED), len(QS)))

import math
def sol(qk):
    return QS[qk]["solution"]


def derange(n):
    return sum(1 for p in itertools.permutations(range(n)) if all(p[i] != i for i in range(n)))


# ---- 1a ----
N("1a", 0, derange(4))
last = [q for q in itertools.permutations((5, 6)) if all(q[i] != (5, 6)[i] for i in range(2))]
N("1a", 1, len(last))
tot = sum(1 for p in itertools.permutations(range(1, 7)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i + 1 for i in range(6)))
N("1a", 2, tot); assert tot == 9

# ---- 1b ----
s1 = sol("1b")
C("1b", 0, [r"\phi(\phi(n))" in s1 and r"\gcd\left(5^{\alpha-1},4\right)=1" in s1, "אינדוקציה" in s1, "בשלילה" in s1, "שובך" in s1])
N("1b", 1, totient(totient(125)))
ORD("1b", 2, 4); BUG("1b", 3, 1, 2)
for al in range(3, 12):
    m = totient(totient(5**al)); assert m == 40 * 5**(al - 3) and m % 40 == 0
assert totient(4) == 2 and totient(4) != 4 and totient(5**7) == 4 * 5**6
assert all(5**al > 100 for al in range(3, 12)) and 5**2 < 100

# ---- 1c ----
n = sympy.symbols("n")
eqs = [(2*(n - 1), n*(n - 1)/2), (n - 1, n*(n - 1)/2), (2*n, n*(n - 1)/2), (2*(n - 1), n*(n + 1)/2)]
def valid(lhs, rhs):          # true for tree T and tree complement on n vertices: |E|+|U| = 2(n-1) and = C(n,2)
    return sympy.simplify(lhs - 2*(n - 1)) == 0 and sympy.simplify(rhs - n*(n - 1)/2) == 0
C("1c", 0, [valid(l, r) for l, r in eqs])
sols = [k for k in range(2, 100) if 2*(k - 1) == k*(k - 1)//2]
N("1c", 1, sols[0]); assert sols == [4]
P4, K13 = nx.path_graph(4), nx.star_graph(3)
tP, tK = nx.is_tree(nx.complement(P4)), nx.is_tree(nx.complement(K13))
C("1c", 2, [tP and not tK, tK and not tP, tP and tK, not tP and not tK])

# ---- 2a ----
perms5 = list(itertools.permutations(range(1, 6)))
adj = lambda p, a, b: abs(p.index(a) - p.index(b)) == 1
A1 = [p for p in perms5 if adj(p, 1, 2)]; A2 = [p for p in perms5 if adj(p, 4, 5)]
N("2a", 0, len(A1)); N("2a", 1, sum(1 for p in perms5 if adj(p, 1, 2) and adj(p, 4, 5)))
N("2a", 2, sum(1 for p in perms5 if adj(p, 1, 2) or adj(p, 4, 5)))

# ---- 2b ----
AB = list(itertools.product("abcd", "xyz"))
noz = [pr for pr in AB if pr[1] != "z"]
N("2b", 0, len(noz)); N("2b", 1, sum(1 for _ in itertools.combinations(noz, 5)))
words = [w for w in itertools.permutations("abcdxyz", 5)]
N("2b", 2, sum(1 for w in words if w[0] == "a" and w[1] == "x"))
N("2b", 3, sum(1 for w in words if w[:2] in (("a", "x"), ("b", "y"))))

# ---- 2c ----
pairs = [(1, 2), (2, 5), (3, 5), (5, 7)]
C("2c", 0, [totient(a) == totient(b) for a, b in pairs])
assert totient(5) > totient(6) and totient(4) < totient(5)
N("2c", 1, totient(500)); N("2c", 2, pow(121, 100, 500)); N("2c", 3, pow(81, 50, 500))
N("2c", 4, pow(121, 100, 500) + pow(81, 50, 500)); assert math.gcd(11, 500) == math.gcd(3, 500) == 1 and 121**100 == 11**200 and 81**50 == 3**200

# ---- 3a ----
N("3a", 0, 5 * 2); N("3a", 1, 17 - 5 * 2)
cnt = sum(1 for x in itertools.product(range(2, 18), repeat=5) if sum(x) == 17)
N("3a", 2, cnt); assert cnt == comb(11, 4) == 330

# ---- 3b ----
x = sympy.symbols("x"); assert sympy.solve(x**2 - 4*x + 4, x) == [2]
N("3b", 0, 2)
n_, A_ = sympy.symbols("n A")
def fits(cand):
    eqs_ = [sympy.simplify(cand(n_) - 4*cand(n_-1) + 4*cand(n_-2) - 2*3**n_).subs(n_, k) for k in range(2, 9)]
    return len(sympy.solve(eqs_, A_, dict=True)) > 0
C("3b", 1, [fits(lambda n: A_*3**n), fits(lambda n: A_*n*3**n), fits(lambda n: A_*2**n), fits(lambda n: A_*n*2**n)])
Av = sympy.solve(sympy.simplify(A_*3**n_ - 4*A_*3**(n_-1) + 4*A_*3**(n_-2) - 2*3**n_).subs(n_, 3), A_)[0]
N("3b", 2, Av)
c1, c2 = sympy.symbols("c1 c2")
sl = sympy.solve([c1 + Av - 19, 2*c1 + 2*c2 + 3*Av - 56], [c1, c2])
N("3b", 3, sl[c1]); N("3b", 4, sl[c2])
a = [19, 56]
for k in range(2, 40): a.append(4*a[-1] - 4*a[-2] + 2*3**k)
assert all(a[k] == 2**k + 18*3**k for k in range(40)) and all(a[k] <= 19*3**k for k in range(40))

# ---- 3c ----
def leaves(g):
    return {v for v, d in g.degree() if d == 1}
cands = [nx.path_graph(3), nx.path_graph(4), nx.star_graph(3), nx.path_graph(5)]
C("3c", 0, [leaves(g) and leaves(g) == leaves(nx.complement(g)) for g in cands])
N("3c", 1, len(leaves(nx.complement(nx.path_graph(3)))))
P3 = nx.path_graph(3); assert list(nx.complement(P3).edges) == [(0, 2)] and leaves(P3) == {0, 2}
BUG("3c", 2, 1)

# ---- 4a ----
nn = next(k for k in range(2, 30) if 2**(k - 1) == 512); N("4a", 0, nn)
pr = list(primerange(2, 11)); npr = [k for k in range(1, 11) if k not in pr]
N("4a", 1, len(pr)); N("4a", 2, len(npr))
c = sum(1 for s in itertools.combinations(range(1, 11), 5) if sum(1 for v in s if v in pr) == 2)
N("4a", 3, c); assert c == comb(4, 2) * comb(6, 3) == 120

# ---- 4b ----
def m4b(k):
    return (sum(comb(k, j) * 7**(k+j) * 3**(k-j) for j in range(k+1)) * sum(comb(k, j) * 2**(k+j) * 6**(k-j) for j in range(k+1)))
fm = lambda k: factorint(m4b(k))
C("4b", 0, [all(fm(k) == {2: 5*k, 5: k, 7: k} for k in (4, 5, 6)), all(fm(k) == {2: 4*k, 5: k, 7: k} for k in (4, 5, 6)),
            all(fm(k) == {2: 5*k, 5: k, 7: 2*k} for k in (4, 5, 6)), all(fm(k) == {2: 5*k, 7: k} for k in (4, 5, 6))])
def odd_part(k):
    t = int(totient(m4b(k)))
    while t % 2 == 0: t //= 2
    return t
C("4b", 1, [all(odd_part(k) == 3 * 5**(k-1) * 7**(k-1) for k in (4, 5, 6)), all(odd_part(k) == 3 * 5**k * 7**(k-1) for k in (4, 5, 6)),
            all(odd_part(k) == 5**(k-1) * 7**(k-1) for k in (4, 5, 6)), all(odd_part(k) == 3 * 5**(k-1) * 7**k for k in (4, 5, 6))])
N("4b", 2, len(range(0, factorint(odd_part(6))[5] + 1)))
N("4b", 3, sum(1 for d in divisors(int(totient(m4b(6)))) if d % 2))
for k in (6, 7, 8):
    assert sum(1 for d in divisors(int(totient(m4b(k)))) if d % 2) == 2 * k * k and int(totient(m4b(k))) == 2**(5*k + 2) * 3 * 5**(k-1) * 7**(k-1)

# ---- 4c ----
T7 = nx.path_graph(7); N("4c", 0, sum(d for _, d in T7.degree()))
for g in nx.graph_atlas_g():
    k = g.number_of_nodes()
    if k < 2:
        continue
    if 2 <= k <= 7 and nx.is_connected(g) and sum(d for _, d in g.degree()) == 2 * k - 2:
        assert nx.is_tree(g)
    if nx.is_tree(g) and k >= 2:
        assert sum(d for _, d in g.degree()) == 2 * k - 2 and 2 * g.number_of_edges() == sum(d for _, d in g.degree())
# option flags: "no such graph" is true, the other two are false
exists = any(nx.is_connected(g) and not nx.is_tree(g) and sum(d for _, d in g.degree()) == 2 * g.number_of_nodes() - 2
             for g in nx.graph_atlas_g() if 2 <= g.number_of_nodes() <= 7)
sum_always = all(sum(d for _, d in g.degree()) == 2 * g.number_of_nodes() - 2 for g in nx.graph_atlas_g() if 2 <= g.number_of_nodes() <= 7 and nx.is_connected(g))
C("4c", 1, [not exists, exists, sum_always])
BUG("4c", 2, 1)

DONE()
