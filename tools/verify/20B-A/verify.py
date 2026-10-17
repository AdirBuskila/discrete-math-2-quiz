# Re-derivation of the 20B-A answers (the solved version of the paper). ASCII output only.
import itertools, math
from math import comb
from sympy import totient, divisors
import networkx as nx

# Q1a: permutations of {1..5} that start with 1 or 2
c = sum(1 for p in itertools.permutations(range(1, 6)) if p[0] in (1, 2)); assert c == 48; print("Q1a", c)
# Q1b: phi(5!) = 32, and the definition with gcd(n,m)=1
assert int(totient(120)) == 32 == sum(1 for m in range(1, 121) if math.gcd(120, m) == 1); print("Q1b 32")
# Q1c: complement of K_{m,n} has C(m,2)+C(n,2) = C(m+n,2) - mn edges
for m in range(1, 8):
    for n in range(1, 8):
        H = nx.complement(nx.complete_bipartite_graph(m, n))
        assert H.number_of_edges() == m*(m-1)//2 + n*(n-1)//2 == (m+n)*(m+n-1)//2 - m*n
print("Q1c ok")
# Q1d: n>=2 with complement of P_n connected and bipartite
good = [n for n in range(2, 14) if nx.is_connected(nx.complement(nx.path_graph(n))) and nx.is_bipartite(nx.complement(nx.path_graph(n)))]
assert good == [4]; print("Q1d", good)
# Q2a1 / Q2a2
c1 = sum(1 for p in itertools.permutations(range(1, 8)) if any({p[i], p[i+1], p[i+2]} == {1, 2, 3} for i in range(5)))
c2 = sum(1 for p in itertools.permutations(range(1, 8)) if p.index(1) < p.index(2))
assert c1 == 720 == math.factorial(3) * math.factorial(5) and c2 == 2520 == comb(7, 2) * math.factorial(5) == math.factorial(7) // 2 != 2560
print("Q2a", c1, c2, "(ink says 2560)")
# Q2b1 / Q2b2
L = "abcdxyz"
c1 = sum(1 for p in itertools.permutations(L) if set(p[:4]) == set("abcd"))
c2 = sum(1 for p in itertools.permutations(L) if set(p[:4]) == set("abcd") and p[0] in "ab")
assert c1 == 144 and c2 == 72; print("Q2b", c1, c2)
# Q2c: phi not injective; 15 | n => 8 | phi(n)
assert int(totient(1)) == int(totient(2)) == 1
assert all(int(totient(n)) % 8 == 0 for n in range(15, 6000, 15)); print("Q2c ok")
# Q3a
c = sum(1 for n in range(1, 101) if n % 3 and n % 5 and n % 7); assert c == 45; print("Q3a", c)
# Q3b: a_n + a_{n-2} = 15*2^n, a0=14, a1=27
a = [14, 27]
for n in range(2, 40): a.append(15 * 2**n - a[n-2])
cs = [1, 0, -1, 0]; sn = [0, 1, 0, -1]
assert all(a[n] == 2*cs[n % 4] + 3*sn[n % 4] + 12 * 2**n for n in range(40)); print("Q3b ok")
# Q3c: complement of P15 has an Euler trail
H = nx.complement(nx.path_graph(15))
assert nx.is_connected(H) and sum(1 for _, d in H.degree() if d % 2) == 2 and nx.has_eulerian_path(H)
assert min(d for _, d in H.degree()) >= 15 / 2; print("Q3c ok")
# Q4a
n = next(n for n in range(3, 100) if comb(n, 2) == 55); assert n == 11 and sum(comb(11, k) for k in range(0, 12, 2)) == 1024 == 2**10; print("Q4a", n)
# Q4b
assert comb(6, 4) == 15 == sum(1 for f in itertools.product(range(1, 7), repeat=4) if all(f[i] < f[i+1] for i in range(3)))
assert math.perm(6, 4) == 360 == sum(1 for f in itertools.product(range(1, 7), repeat=4) if len(set(f)) == 4); print("Q4b 15 360")
# Q4c
for n in range(3, 11):
    assert sum(len(s) for k in range(n+1) for s in itertools.combinations(range(n), k)) == n * 2**(n-1)
print("Q4c ok")
# Q5a: (1,1,2,3,3,3,6,7,8) is not graphical
assert not nx.is_graphical([1, 1, 2, 3, 3, 3, 6, 7, 8]); print("Q5a not graphical")
# Q5b
c = sum(1 for x in itertools.product(range(3, 23), range(1, 23), range(4, 23), range(2, 23)) if sum(x) == 22); assert c == comb(15, 3) == 455; print("Q5b", c)
# Q5c / Q6c: Petersen graph as drawn
E = "ab bc cd de ea af bg ch di ej fh hj jg gi if".split()
G = nx.Graph([(e[0], e[1]) for e in E]); assert nx.is_isomorphic(G, nx.petersen_graph())
H = nx.complement(G)
assert all(d == 6 for _, d in H.degree()) and min(d for _, d in H.degree()) >= 5 and nx.is_eulerian(H)
assert not nx.is_bipartite(H) and nx.is_isomorphic(H.subgraph("adg"), nx.complete_graph(3))
assert nx.diameter(G) == 2; print("Q5c Q6c ok")
# Q6a: a = 8^n, b = 12^n, phi(ab) = 2^(5n) 3^(n-1)
for n in range(5, 9):
    a = sum(comb(n, k) * 3**k * 5**(n-k) for k in range(n+1)); b = sum(comb(n, k) * 7**k * 5**(n-k) for k in range(n+1))
    assert a == 8**n and b == 12**n and int(totient(a*b)) == 2**(5*n) * 3**(n-1)
print("Q6a ok")


# ======================================================================================
# STEPS section: every value used in the rubric / steps of tools/gen/gen_20B-A.py
# ======================================================================================
import json, pathlib
import sympy as sp
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "20B-A.json").read_text(encoding="utf-8"))
PK = {"א": "a", "ב": "b", "ג": "c", "ד": "d", "ה": "e"}


def raw_numerics(qid):
    for q in RAW["questions"]:
        if f"20B-A-Q{q['num']}" + PK.get(q.get("part"), "") == qid:
            return [s["answer"] for s in q.get("steps", []) if s["type"] == "numeric"]
    raise KeyError(qid)


EXPECT = {}
# Q1a
assert 2 * math.factorial(4) == 48 and math.factorial(4) == 24
EXPECT["Q1a"] = [2, 24, 48]
# Q1b: three distinct primes; phi(5!) = 32; the distractor formulas fail
assert len(sp.factorint(120)) == 3 and int(totient(120)) == 32
assert int(totient(4)) != 3 and int(totient(3)) != 3 / 2 and int(totient(6)) == 2 != len(divisors(6))
EXPECT["Q1b"] = [3, 32]
# Q1c: complement of K_{3,4}; it is K3 u K4
Hc = nx.complement(nx.complete_bipartite_graph(3, 4))
assert Hc.number_of_edges() == 9 == comb(3, 2) + comb(4, 2) == comb(7, 2) - 12
assert nx.is_isomorphic(Hc, nx.disjoint_union(nx.complete_graph(3), nx.complete_graph(4)))
assert nx.complete_graph(7).number_of_edges() != 9 and nx.complete_bipartite_graph(3, 4).number_of_edges() != 9
EXPECT["Q1c"] = [9]
# Q1d: unique n among 2,3,4,5; edges of complement of P4
cb = lambda n_: nx.is_connected(nx.complement(nx.path_graph(n_))) and nx.is_bipartite(nx.complement(nx.path_graph(n_)))
assert [cb(n_) for n_ in (4, 2, 3, 5)] == [True, False, False, False]
assert nx.complement(nx.path_graph(4)).number_of_edges() == 3
EXPECT["Q1d"] = [3]
# Q1e: only the choice/order steps (no numbers); Q ~ N ~ Z by the cited theorem; A infinite subset of Z
EXPECT["Q1e"] = []
# Q2a
assert math.factorial(5) == 120 and 6 * 120 == 720 and comb(7, 2) == 21 and 21 * 120 == 2520
EXPECT["Q2a"] = [120, 720, 21, 2520]
# Q2b
assert 24 == math.factorial(4) and 24 * 6 == 144 and 2 * math.factorial(3) == 12 and 12 * 6 == 72
EXPECT["Q2b"] = [24, 144, 12, 72]
# Q2c: phi(1)=phi(2)=1, phi(15)=8; the lines of the proof for several n with 15 | n
assert int(totient(1)) == int(totient(2)) == 1 and int(totient(15)) == 8
for n_ in range(15, 3000, 15):
    f_ = sp.factorint(n_); al, be = f_[3], f_[5]; m_ = n_ // (3**al * 5**be)
    assert int(totient(n_)) == 2 * 4 * 3**(al - 1) * 5**(be - 1) * int(totient(m_)) and int(totient(n_)) % 8 == 0
EXPECT["Q2c"] = [1, 8]
# Q3a
A3, A5, A7 = (100 // 3, 100 // 5, 100 // 7); assert (A3, A5, A7) == (33, 20, 14) and A3 + A5 + A7 == 67
assert (100 // 15, 100 // 21, 100 // 35) == (6, 4, 2) and 6 + 4 + 2 == 12 and 100 // 105 == 0 and 100 - 67 + 12 == 45
EXPECT["Q3a"] = [67, 12, 0, 45]
# Q3b: A = 12; C1 = 2; C2 = 3; a_2 = 46
A_ = sp.symbols("A"); assert sp.solve(A_ + A_/4 - 15, A_) == [12]
assert 14 - 12 == 2 and 27 - 24 == 3
aa_ = [14, 27]
for n_ in range(2, 5): aa_.append(15 * 2**n_ - aa_[n_ - 2])
assert aa_[2] == 46 == 2 * (-1) + 3 * 0 + 12 * 4 == 15 * 4 - 14
EXPECT["Q3b"] = [12, 2, 3, 46]
# Q3c: degrees in the complement of P15
Hp = nx.complement(nx.path_graph(15)); dg = sorted(d for _, d in Hp.degree())
assert dg.count(13) == 2 and dg.count(12) == 13 and sum(1 for d in dg if d % 2) == 2
K4_ = nx.complete_graph(4); assert nx.is_connected(K4_) and not nx.has_eulerian_path(K4_) and sum(d % 2 for _, d in K4_.degree()) == 4
EXPECT["Q3c"] = [13, 12]
# Q4a: n = 11; even-size subsets 2^(n-1) for n=1..12, and the distractors differ
assert [n_ for n_ in range(3, 100) if comb(n_, 2) == 55] == [11]
for n_ in range(1, 13):
    ev = sum(comb(n_, k) for k in range(0, n_ + 1, 2)); assert ev == 2**(n_ - 1) != 2**n_
    assert ev != n_ * 2**(n_ - 1) or n_ == 1
assert 2**10 == 1024
EXPECT["Q4a"] = [11, 1024]
# Q4b
assert comb(6, 4) == 15 and math.perm(6, 4) == 360
EXPECT["Q4b"] = [15, 360]
# Q4c
assert sum(k * comb(4, k) for k in range(5)) == 32 == 4 * 2**3
EXPECT["Q4c"] = [32]
# Q5a: G - v9 sequence
seqa = [1, 1, 2, 3, 3, 3, 6, 7, 8]; assert sum(seqa) == 34
rest = sorted((d - 1 for d in seqa[:-1]), reverse=True); assert rest == [6, 5, 2, 2, 2, 1, 0, 0] and rest.count(0) == 2
assert 8 - 1 - 2 == 5 < 6 and not nx.is_graphical(rest)
EXPECT["Q5a"] = [2, 5]
# Q5b
assert 22 - (3 + 1 + 4 + 2) == 12 and comb(12 + 3, 3) == 455
EXPECT["Q5b"] = [12, 4, 455]
# Q5c / Q6c: Petersen; triangle options
GP = nx.Graph([(e[0], e[1]) for e in "ab bc cd de ea af bg ch di ej fh hj jg gi if".split()]); HP = nx.complement(GP)
tri = lambda S: all(HP.has_edge(u, v) for u, v in itertools.combinations(S, 2))
assert [tri(S) for S in ("adg", "abc", "fhj", "ace")] == [True, False, False, False]
assert GP.has_edge("a", "b") and GP.has_edge("f", "h") and GP.has_edge("e", "a")
assert all(d == 6 for _, d in HP.degree())
EXPECT["Q5c"] = [6]
# Q6a: n = 2
n2 = 2; a2_ = sum(comb(n2, k) * 3**k * 5**(n2 - k) for k in range(n2 + 1)); b2_ = sum(comb(n2, k) * 7**k * 5**(n2 - k) for k in range(n2 + 1))
assert (a2_, b2_) == (64, 144) and sp.factorint(a2_ * b2_) == {2: 10, 3: 2} and int(totient(a2_ * b2_)) == 3072 == 2**10 * 3
for n_ in range(1, 8):
    assert sp.factorint(8**n_ * 12**n_) == {2: 5 * n_, 3: n_}
    assert sp.factorint(8**n_ * 12**n_) != {2: 4 * n_, 3: n_} and sp.factorint(8**n_ * 12**n_) != {2: 3 * n_, 3: n_}
EXPECT["Q6a"] = [64, 144, 3072]
# Q6b: f(x)=x+2 maps (0,1) into (2,7]; f(x)=x+7 does not
assert all(2 < t + 2 <= 7 for t in [i / 1000 for i in range(1, 1000)]) and not all(2 < t + 7 <= 7 for t in [i / 1000 for i in range(1, 1000)])
EXPECT["Q6b"] = []
# Q6c: Petersen distances from a
d_ = nx.single_source_shortest_path_length(GP, "a")
assert sum(1 for v in d_.values() if v == 1) == 3 and sum(1 for v in d_.values() if v == 2) == 6 and nx.diameter(GP) == 2
assert sorted(v for v, t in d_.items() if t == 2) == sorted("jgihcd")
EXPECT["Q6c"] = [3, 6, 2]
for k_, v_ in EXPECT.items():
    assert raw_numerics("20B-A-" + k_) == v_, (k_, raw_numerics("20B-A-" + k_), v_)
print("STEPS section: ALL ASSERTIONS PASSED")
