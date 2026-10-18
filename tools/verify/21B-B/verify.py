# Re-derivation of the 21B-B answers. ASCII output only.
import itertools, math
from math import comb, gcd
from sympy import totient, primerange, divisors, subfactorial
import networkx as nx

# Q1a: derangements of 5 and the non-derangements
d5 = sum(1 for p in itertools.permutations(range(5)) if all(p[i] != i for i in range(5)))
assert d5 == 44 == int(subfactorial(5)) and math.factorial(5) - d5 == 76; print("Q1a", d5, 120 - d5)
# Q1b: common divisors of 750 and 300
assert gcd(750, 300) == 150 and len(divisors(150)) == 12 and len([d for d in range(1, 751) if 750 % d == 0 and 300 % d == 0]) == 12; print("Q1b 12")
# Q1c: complement of C_n is Eulerian exactly for odd n >= 5
good = [n for n in range(3, 40) if nx.is_eulerian(nx.complement(nx.cycle_graph(n)))]
assert good == list(range(5, 40, 2)); print("Q1c", good[:5])
# Q2a
for n in range(1, 8):
    f = sum(comb(n, k) * (7**k + 3 * 5**k) for k in range(n+1)); assert f == 8**n + 3 * 6**n <= 4 * 9**n
assert min(c for c in range(1,10) if all(8**n+3*6**n <= c*9**n for n in range(0,30))) == 4
# Q2b
a = [5, 12]
for n in range(2, 40): a.append(2*a[-1] - a[-2])
assert all(a[n] == 5 + 7*n for n in range(40)); print("Q2b ok")
# Q2c
c = sum(1 for n in range(1, 201) if n % 2 == 0 or n % 3 == 0 or n % 5 == 0); assert c == 146; print("Q2c", c)
# Q3a: C(n,2)=105 -> n=15; odd numbers 1,3,..,15 (8 of them); subsets of size >= 6 (the printed relation, see the generator note)
n = next(n for n in range(2, 100) if comb(n, 2) == 105); assert n == 15
odd = [x for x in range(1, n+1) if x % 2]; assert len(odd) == 8
ge6 = sum(comb(8, k) for k in range(6, 9)); le6 = sum(comb(8, k) for k in range(0, 7))
assert ge6 == 37 and le6 == 247; print("Q3a n=15; size>=6:", ge6, "(size<=6 would be", le6, ")")
# Q3b: non-decreasing functions {1..5}->{1..5} = 126, the rest 2999
nd = sum(1 for f in itertools.product(range(5), repeat=5) if all(f[i] <= f[i+1] for i in range(4)))
assert nd == comb(9, 4) == 126 and 5**5 - nd == 2999; print("Q3b", nd, 5**5 - nd)
# Q3c: C_n isomorphic to its complement, n >= 3
iso = [n for n in range(3, 15) if nx.is_isomorphic(nx.cycle_graph(n), nx.complement(nx.cycle_graph(n)))]
assert iso == [5]; print("Q3c", iso)
# Q4a: pairs (a,b) in A x B with a+b odd; subsets of those pairs
om = [(a, b) for a in range(1, 7) for b in range(1, 6) if (a + b) % 2]
assert len(om) == 15 and 2**15 - 1 == 32767; print("Q4a |Omega| =", len(om), "nonempty subsets", 2**15 - 1)
# Q4b: strictly increasing f:{1..4}->{1..9} with f(1)=3
c = sum(1 for f in itertools.combinations(range(1, 10), 4) if f[0] == 3); assert c == comb(6, 3) == 20
# (strictly increasing = sorted 4-subsets whose minimum is 3)
print("Q4b", c)
# Q4c: n prime => n | phi(n)^phi(n^2) - 1
for n in primerange(2, 300):
    assert pow(int(totient(n)), int(totient(n*n)), n) == 1 % n
print("Q4c ok")
# Q5a: (1,1,1,1,3,4,5,6,8) is not graphical
assert not nx.is_graphical([1, 1, 1, 1, 3, 4, 5, 6, 8]); print("Q5a not graphical")
# Q5b: phi(p^2) | phi(phi(p^4))
assert all(int(totient(int(totient(p**4)))) % int(totient(p*p)) == 0 for p in primerange(2, 200)); print("Q5b ok")
# Q5c: the 12-vertex graph from the figure (3-regular)
E = ["1-2", "1-4", "2-3", "1-10", "2-9", "10-9", "10-11", "9-12", "11-12", "11-5", "12-7", "4-8", "8-3", "4-5", "8-6", "3-7", "5-6", "6-7"]
G = nx.Graph([tuple(map(int, e.split("-"))) for e in E])
assert G.number_of_nodes() == 12 and G.number_of_edges() == 18 and all(d == 3 for _, d in G.degree())
printed = [1, 2, 9, 11, 12, 7, 3, 8, 6, 5, 4]            # the ink list: only 11 vertices, v9-v11 is not an edge
assert len(printed) == 11 and not G.has_edge(9, 11)
cyc = [1, 2, 9, 10, 11, 12, 7, 3, 8, 6, 5, 4]            # corrected: v10 between v9 and v11
assert sorted(cyc) == list(range(1, 13)) and all(G.has_edge(cyc[i], cyc[(i+1) % 12]) for i in range(12))
H = nx.complement(G); assert all(d == 8 for _, d in H.degree()) and nx.is_eulerian(H) and min(d for _, d in H.degree()) >= 6


def colorable(G, k):
    V = list(G)
    return any(all(col[u] != col[v] for u, v in G.edges()) for col in (dict(zip(V, c)) for c in itertools.product(range(k), repeat=len(V))))


assert not nx.is_bipartite(G) and colorable(G, 3)
assert nx.is_isomorphic(G.subgraph([1, 4, 5, 11, 10]), nx.cycle_graph(5))                       # C5 in G -> chi >= 3
assert nx.is_isomorphic(H.subgraph([1, 9, 11, 7, 8]), nx.complete_graph(5))                     # K5 in the complement
print("Q5c ok")
col = {1: 2, 2: 1, 3: 3, 4: 1, 5: 3, 6: 1, 7: 2, 8: 2, 9: 2, 10: 1, 11: 2, 12: 1}
assert all(col[u] != col[v] for u, v in G.edges())
print("colouring ok")


# ======================================================================================
# STEPS section: every value used in the rubric / steps of tools/gen/gen_21B-B.py
# ======================================================================================
import json, pathlib
import sympy as sp
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "21B-B.json").read_text(encoding="utf-8"))
PK = {"א": "a", "ב": "b", "ג": "c", "ד": "d", "ה": "e"}


def raw_numerics(qid):
    for q in RAW["questions"]:
        if f"21B-B-Q{q['num']}" + PK.get(q.get("part"), "") == qid:
            return [s["answer"] for s in q.get("steps", []) if s["type"] == "numeric"]
    raise KeyError(qid)


EXPECT = {}
# Q1a
assert math.factorial(5) // 2 == 60 and math.factorial(5) // 6 == 20 and 60 - 20 + 5 - 1 == 44 == d5 and 120 - 44 == 76
EXPECT["Q1a"] = [60, 44, 76]
# Q1b: gcd; divisors of lcm are not all common divisors
assert gcd(750, 300) == 150 and len(divisors(150)) == 12 and 1500 % 4 == 0 and 750 % 4 != 0
EXPECT["Q1b"] = [150, 12]
# Q1c: degree n-3; smallest n = 5; the options
assert all(d == 6 for _, d in nx.complement(nx.cycle_graph(9)).degree())
good_n = [n_ for n_ in range(3, 40) if nx.is_eulerian(nx.complement(nx.cycle_graph(n_)))]
assert good_n[0] == 5 and good_n == [n_ for n_ in range(5, 40) if n_ % 2]            # option a exactly
assert 6 not in good_n and 3 not in good_n and all(n_ % 2 for n_ in good_n)           # b, c, d fail
EXPECT["Q1c"] = [6, 5]
# Q2a
ff = lambda n_: sum(comb(n_, k) * (7**k + 3 * 5**k) for k in range(n_ + 1))
assert ff(2) == 172 == 8**2 + 3 * 6**2 and ff(3) == 1160 == 8**3 + 3 * 6**3
assert all(ff(n_) <= 4 * 9**n_ for n_ in range(1, 30))
EXPECT["Q2a"] = [172, 1160, 4]
# Q2b
assert sp.solve(sp.symbols("x")**2 - 2*sp.symbols("x") + 1, sp.symbols("x")) == [1]
c1_, c2_ = sp.symbols("c1 c2"); assert sp.solve([c1_ - 5, c1_ + c2_ - 12], [c1_, c2_]) == {c1_: 5, c2_: 7}
assert a[5] == 40
EXPECT["Q2b"] = [1, 7, 40]
# Q2c
A_ = range(1, 201)
s1_ = sum(sum(1 for x in A_ if x % p == 0) for p in (2, 3, 5)); s2_ = sum(sum(1 for x in A_ if x % (p*q) == 0) for p, q in ((2, 3), (2, 5), (3, 5)))
s3_ = sum(1 for x in A_ if x % 30 == 0)
assert (s1_, s2_, s3_) == (206, 66, 6) and s1_ - s2_ + s3_ == 146
EXPECT["Q2c"] = [206, 66, 146]
# Q3a
assert next(k_ for k_ in range(2, 100) if comb(k_, 2) == 105) == 15 and len(odd) == 8 and ge6 == 37
EXPECT["Q3a"] = [15, 8, 37]
# Q3b
assert 5**5 == 3125 and nd == 126 and 3125 - 126 == 2999
EXPECT["Q3b"] = [3125, 126, 2999]
# Q3c
assert comb(5, 2) - 5 == 5 and sp.solve(sp.symbols("n")*(sp.symbols("n") - 5), sp.symbols("n")) == [0, 5]
assert all(2*n_ == n_ * (n_ - 1) // 2 for n_ in [5])
EXPECT["Q3c"] = [5, 5]
# Q4a
e1 = [(x, y) for x in (1, 3, 5) for y in (2, 4)]; e2 = [(x, y) for x in (2, 4, 6) for y in (1, 3, 5)]
assert (len(e1), len(e2)) == (6, 9) and set(e1 + e2) == set(om) and 2**15 - 1 == 32767
EXPECT["Q4a"] = [6, 9, 15, 32767]
# Q4b
assert len(range(4, 10)) == 6 and comb(6, 3) == 20 == c
EXPECT["Q4b"] = [6, 20]
# Q4c
assert int(totient(25)) == 20 == 5 * 4
EXPECT["Q4c"] = [20]
# Q5a: G - v9 sequence, number of isolated vertices; sum of degrees is even (30)
seq5 = [1, 1, 1, 1, 3, 4, 5, 6, 8]; assert sum(seq5) == 30
rest = sorted((d - 1 for d in seq5[:-1]), reverse=True); assert rest == [5, 4, 3, 2, 0, 0, 0, 0] and rest.count(0) == 4
assert not nx.is_graphical(rest)
EXPECT["Q5a"] = [4]
# Q5b: p = 3
assert int(totient(81)) == 54 and int(totient(54)) == 18 and int(totient(9)) == 6 and 18 // 6 == 3 == 3 * int(totient(2))
EXPECT["Q5b"] = [18, 3]
# Q5c
ham = lambda c_: sorted(c_) == list(range(1, 13)) and all(G.has_edge(c_[i], c_[(i + 1) % 12]) for i in range(12))
opts_ham = [[1, 2, 9, 10, 11, 12, 7, 3, 8, 6, 5, 4], [1, 2, 9, 11, 10, 12, 7, 3, 8, 6, 5, 4],
            [1, 2, 3, 7, 12, 9, 10, 11, 5, 4, 8, 6], [1, 10, 9, 2, 3, 8, 4, 5, 11, 12, 7, 6]]
assert [ham(c_) for c_ in opts_ham] == [True, False, False, False]
indep5 = lambda S: all(not G.has_edge(u, v) for u, v in itertools.combinations(S, 2))
sets5 = [[1, 9, 11, 7, 8], [1, 2, 3, 4, 5], [1, 9, 11, 7, 3], [1, 3, 5, 10, 12]]
assert [indep5(S) for S in sets5] == [True, False, False, False]
assert G.has_edge(1, 2) and G.has_edge(3, 7) and G.has_edge(1, 10)
EXPECT["Q5c"] = [8, 3]
for k_, v_ in EXPECT.items():
    assert raw_numerics("21B-B-" + k_) == v_, (k_, raw_numerics("21B-B-" + k_), v_)
print("STEPS section: ALL ASSERTIONS PASSED")
