# -*- coding: utf-8 -*-
# Machine check of every step value in tools/raw/24B-A.json (steps/rubric added by gen_24B-A.py).
# Run: PYTHONUTF8=1 py tools/verify/24B-A/steps_verify.py   (ASCII output only)
# Each helper below compares the value COMPUTED here (brute force / sympy / networkx) with what the generator stored.
import itertools, json, pathlib
from math import comb, factorial, perm, ceil
import networkx as nx
import sympy
from sympy import totient, divisors, factorint, primerange, isprime

RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "24B-A.json").read_text(encoding="utf-8"))
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
    print("steps_verify 24B-A: all %d steps in %d items checked" % (len(USED), len(QS)))

from fractions import Fraction


def sol(qk):
    return QS[qk]["solution"]


def derange(n):
    return sum(1 for p in itertools.permutations(range(n)) if all(p[i] != i for i in range(n)))


# ---- 1a ----
good = sum(1 for p in itertools.permutations(range(1, 7)) if not any(p[i:i+3] == (1, 2, 3) for i in range(4)))
N("1a", 0, sum(1 for _ in itertools.permutations(range(6))))
N("1a", 1, sum(1 for p in itertools.permutations(range(1, 7)) if any(p[i:i+3] == (1, 2, 3) for i in range(4))))
N("1a", 2, good); assert good == factorial(6) - factorial(4) == 696

# ---- 1b ----
allowed = [v for v in range(1, 10) if v not in (1, 2, 5, 7)]
subs = [s for s in itertools.combinations(range(1, 10), 5) if 1 in s and 2 in s and 5 not in s and 7 not in s]
N("1b", 0, len(allowed)); N("1b", 1, 5 - 2); N("1b", 2, len(subs)); assert len(subs) == comb(5, 3)

# ---- 1c ----
def trees(n):
    return [nx.empty_graph(1)] if n == 1 else list(nx.nonisomorphic_trees(n))
comp_tree = {n for n in range(1, 10) if any(nx.is_tree(nx.complement(t)) for t in trees(n))}
assert comp_tree == {1, 4}
N("1c", 0, min(max(len(s) for s in nx.bipartite.sets(t)) for t in trees(5)))
ORD("1c", 1, 4); BUG("1c", 2, 1, 1)
assert all(not nx.is_tree(nx.complement(t)) and not nx.is_bipartite(nx.complement(t)) for n in range(5, 10) for t in trees(n))
C("1c", 3, [comp_tree == {1, 4}, comp_tree == {1, 2, 3, 4}, comp_tree == {4, 5}, comp_tree == {2, 4}])

# ---- 2a ----
tot = sum(1 for p in itertools.permutations(range(1, 9)) if set(p[:4]) == {1, 2, 3, 4} and all(p[i] != i + 1 for i in range(8)))
N("2a", 0, derange(4)); N("2a", 1, derange(4)); N("2a", 2, tot); assert tot == 81

# ---- 2b ----
Bs = [s for s in itertools.combinations(range(1, 7), 4)]
N("2b", 0, sum(1 for s in Bs if {1, 2} <= set(s))); N("2b", 1, sum(1 for s in Bs if {1, 2} <= set(s) and {5, 6} <= set(s)))
N("2b", 2, sum(1 for s in Bs if {1, 2} <= set(s) or {5, 6} <= set(s)))

# ---- 2c ----
sol_set = {m for m in range(1, 3000) if totient(m) % m == 0}
C("2c", 0, [sol_set == {1}, sol_set == {1, 2}, sol_set == {1, 2, 3}, sol_set == set()])
N("2c", 1, totient(2**3 * 3**4))
ratios = {Fraction(2**p * 3**q, int(totient(2**p * 3**q))) for p in range(3, 8) for q in range(p + 1, 10)}
assert ratios == {Fraction(3)} and all(2**p * 3**q % int(totient(2**p * 3**q)) == 0 for p in range(3, 8) for q in range(p + 1, 10))
N("2c", 2, 3)
assert all(totient(m) <= m - 1 for m in range(2, 3000))

# ---- 3a ----
cnt = sum(1 for x in itertools.product(range(2, 16), repeat=4) if sum(x) == 15)
N("3a", 0, 4 * 2); N("3a", 1, 15 - 4 * 2); N("3a", 2, cnt); assert cnt == comb(10, 3) == 120

# ---- 3b ----
x = sympy.symbols("x"); assert sympy.solve(x**2 - 6*x + 9, x) == [3]
N("3b", 0, 3)
n_, A_ = sympy.symbols("n A")
def fits(cand):
    eqs_ = [sympy.simplify(cand(n_) - 6*cand(n_-1) + 9*cand(n_-2) - 4*5**n_).subs(n_, k) for k in range(2, 9)]
    return len(sympy.solve(eqs_, A_, dict=True)) > 0
C("3b", 1, [fits(lambda n: A_*5**n), fits(lambda n: A_*n*5**n), fits(lambda n: A_*3**n), fits(lambda n: A_*n*3**n)])
Av = sympy.solve(sympy.simplify(A_*5**n_ - 6*A_*5**(n_-1) + 9*A_*5**(n_-2) - 4*5**n_).subs(n_, 3), A_)[0]
N("3b", 2, Av)
c1, c2 = sympy.symbols("c1 c2")
sl = sympy.solve([c1 + Av - 26, 3*c1 + 3*c2 + 5*Av - 128], [c1, c2])
N("3b", 3, sl[c1]); N("3b", 4, sl[c2])
a = [26, 128]
for k in range(2, 40): a.append(6*a[-1] - 9*a[-2] + 4*5**k)
assert all(a[k] == 3**k + 25*5**k for k in range(40)) and all(a[k] <= 26*5**k for k in range(40))

# ---- 3c ----
allg = [g for g in nx.graph_atlas_g() if 2 <= g.number_of_nodes() <= 7]
def suff(premise):
    return all(g.number_of_nodes() % 2 == 0 for g in allg if premise(g))
def reg(g):
    return len({d for _, d in g.degree()}) == 1
def rdeg(g):
    return next(d for _, d in g.degree())
C("3c", 0, [suff(lambda g: reg(g) and rdeg(g) % 2 == 1),
            suff(lambda g: reg(g) and isprime(rdeg(g))),
            suff(lambda g: reg(g) and nx.is_connected(g)),
            suff(lambda g: reg(g) and g.number_of_edges() >= 1)])
assert not nx.is_graphical([3] * 7)
N("3c", 1, 2 * 3 + 1)
BUG("3c", 2, 3)
assert all(not nx.is_graphical([r_] * (2 * r_ + 1)) for r_ in (3, 5, 7, 11))                  # |V|=2r+1 is odd
for nn in range(2, 9):                                                                        # no G with G and its complement both 3-regular
    for g in [nx.random_regular_graph(3, nn, seed=s) for s in range(3)] if nn % 2 == 0 and nn > 3 else []:
        assert not all(d == 3 for _, d in nx.complement(g).degree())

# ---- 4a ----
nn = next(k for k in range(3, 100) if comb(k, 2) == 300); N("4a", 0, nn)
pr = list(primerange(2, 26)); np_ = [k for k in range(1, 26) if k not in pr]
N("4a", 1, len(pr)); N("4a", 2, len(np_)); N("4a", 3, comb(16, 4)); N("4a", 4, comb(9, 3) * comb(16, 4)); assert comb(9, 3) * comb(16, 4) == 152880

# ---- 4b ----
def m4b(n):
    return sum(comb(n, k) * 2**(n+k) * 5**(n-k) for k in range(n+1)) * sum(comb(n, k) * 4**(n+k) * 3**(n-k) for k in range(n+1))
fm = lambda n: factorint(m4b(n))
C("4b", 0, [all(fm(n) == {2: 3*n, 7: 2*n} for n in (3, 4, 5)), all(fm(n) == {2: 2*n, 7: 2*n} for n in (3, 4, 5)),
            all(fm(n) == {2: 3*n, 7: n} for n in (3, 4, 5)), all(fm(n) == {2: n, 7: 2*n} for n in (3, 4, 5))])
f5 = fm(5)
N("4b", 1, len(range(0, f5[2] + 1))); N("4b", 2, len(range(2, f5[7] + 1)))
N("4b", 3, sum(1 for d in divisors(m4b(5)) if d % 49 == 0))
for n in (3, 4, 5, 6):
    assert sum(1 for d in divisors(m4b(n)) if d % 49 == 0) == (3*n + 1) * (2*n - 1)

# ---- 4c ----
exists = [T for T in nx.nonisomorphic_trees(14) if {d for _, d in T.degree()} <= {1, 3} and sum(1 for _, d in T.degree() if d == 1) == 8]
assert exists
N("4c", 0, sum(1 for _, d in exists[0].degree() if d == 3))
for nn in range(4, 15):
    for T in nx.nonisomorphic_trees(nn):
        ds = [d for _, d in T.degree()]
        if set(ds) <= {1, 3} and ds.count(1) > 3:
            assert ds.count(3) == ds.count(1) - 2
p_, x_ = sympy.symbols("p x")
opts_ = [(p_ + 3*x_, 2*(p_ + x_ - 1)), (p_ + 3*x_, p_ + x_ - 1), (p_ + 3*x_, 2*(p_ + x_)), (3*p_ + x_, 2*(p_ + x_ - 1))]
C("4c", 1, [sympy.expand(l - (p_ + 3*x_)) == 0 and sympy.expand(r - 2*(p_ + x_ - 1)) == 0 for l, r in opts_])
ORD("4c", 2, 3); BUG("4c", 3, 1, 2)

DONE()
