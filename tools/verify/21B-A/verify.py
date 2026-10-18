# Re-derivation of the 21B-A answers. ASCII output only.
import itertools, math
from math import comb
from sympy import totient, primerange, divisor_count
import networkx as nx

# Q1a
c = sum(1 for p in itertools.permutations("abcdef") if "abc" not in "".join(p)); assert c == 696; print("Q1a", c)
# Q1b: n | m => phi(n) | phi(m); and the printed definition (d | n) is the divisor count, not phi
assert all(int(totient(m)) % int(totient(n)) == 0 for m in range(3, 700) for n in range(2, m) if m % n == 0)
assert int(totient(6)) == 2 and int(divisor_count(6)) == 4
print("Q1b ok (definition with d|n gives tau(6)=4, phi(6)=2)")
# Q1c: connected graph whose only cycles are two vertex-disjoint cycles has |V|+1 edges (all graphs up to 7 vertices)
cnt = 0
for G in nx.graph_atlas_g():
    if G.number_of_nodes() == 0 or not nx.is_connected(G): continue
    cyc = list(nx.simple_cycles(G))
    if len(cyc) == 2 and not set(cyc[0]) & set(cyc[1]):
        assert G.number_of_edges() == G.number_of_nodes() + 1; cnt += 1
print("Q1c ok, graphs checked", cnt)
# Q2a
n = next(n for n in range(8, 100) if comb(n, 2) == 190); assert n == 20 and comb(10, 3) == 120; print("Q2a", n)
# Q2b: onto vs not onto, {1..5} -> {1,2,3}
onto = sum(1 for f in itertools.product(range(3), repeat=5) if set(f) == {0, 1, 2})
assert onto == 150 == 3**5 - 3*2**5 + 3 and 3**5 - onto == 93; print("Q2b onto", onto, "not onto", 3**5 - onto)
# Q2c: trees whose complement is a tree
ok = {n for n in range(1, 10) if any(nx.is_tree(nx.complement(T)) for T in (nx.nonisomorphic_trees(n) if n > 1 else [nx.empty_graph(1)]))}
assert ok == {1, 4}; print("Q2c", sorted(ok))
# Q3a
for n in range(1, 8):
    f = 5**n + sum(comb(n, k) * 3**(2*k) for k in range(n+1)); assert f == 5**n + 10**n <= 2*10**n
assert min(c for c in range(1,10) if all(5**n+10**n <= c*10**n for n in range(0,30))) == 2
# Q3b
a = [10, 30]
for n in range(2, 40): a.append(4*a[-1] - 4*a[-2])
assert all(a[n] == 10*2**n + 5*n*2**n for n in range(40)); print("Q3b ok")
# Q3c: x1>=5, x2>=1, x3>=4, sum 27
c = sum(1 for x1 in range(5, 28) for x2 in range(1, 28) for x3 in range(4, 28) if x1 + x2 + x3 == 27); assert c == comb(19, 2) == 171; print("Q3c", c)
# Q4a
L = "abcduvw"; c = sum(1 for p in itertools.permutations(L) if p[0] in "abcd" and p[-1] in "uvw"); assert c == 1440; print("Q4a", c)
# Q4b
assert 5**5 - math.factorial(5) == 3005 and sum(1 for f in itertools.product(range(5), repeat=5) if len(set(f)) < 5) == 3005; print("Q4b 3005")
# Q4c: 2^(n-1)=1024 -> n=11; 11 | 10^10 - 1
assert 2**(11-1) == 1024 and (10**10 - 1) % 11 == 0 and int(totient(11)) == 10; print("Q4c ok")
# Q5a: sequence (1,1,1,1,2,2,6)
assert nx.is_graphical([1, 1, 1, 1, 2, 2, 6])
G = nx.Graph([(7, i) for i in range(1, 7)] + [(5, 6)]); assert sorted((d for _, d in G.degree()), reverse=True) == [6, 2, 2, 1, 1, 1, 1]; print("Q5a ok (exists)")
# Q5b
assert all(int(totient(p**q * q**p)) % 4 == 0 for p in primerange(3, 60) for q in primerange(3, 60) if p < q); print("Q5b ok")
# Q5c: Petersen graph as drawn (outer a-b-c-d-e, spokes, inner star f-h-j-g-i)
E = "ab bc cd de ea af bg ch di ej fh hj jg gi if".split()
G = nx.Graph([(e[0], e[1]) for e in E]); assert nx.is_isomorphic(G, nx.petersen_graph()) and all(d == 3 for _, d in G.degree())
H = nx.complement(G); assert all(d == 6 for _, d in H.degree()) and min(d for _, d in H.degree()) >= 5 and nx.is_eulerian(H)


def colorable(G, k):
    V = list(G)
    return any(all(col[u] != col[v] for u, v in G.edges()) for col in (dict(zip(V, c)) for c in itertools.product(range(k), repeat=len(V))))


assert not colorable(G, 2) and colorable(G, 3)
assert nx.is_isomorphic(G.subgraph("abcde"), nx.cycle_graph(5))   # C5 in G
assert nx.is_isomorphic(H.subgraph("acij"), nx.complete_graph(4))
print("Q5c ok")
# Q5c printed colouring and Q1c remark (two disjoint cycles do not fix |E| without the "only cycles" assumption)
col = dict(a=1, b=2, c=1, d=2, e=3, f=3, g=3, h=2, i=1, j=1)
assert all(col[u] != col[v] for u, v in G.edges())
K6 = nx.complete_graph(6); assert K6.number_of_edges() != 6 + 1
print("extra ok")


# ======================================================================================
# STEPS section: every value used in the rubric / steps of tools/gen/gen_21B-A.py
# ======================================================================================
import json, pathlib, random
import sympy as sp
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "21B-A.json").read_text(encoding="utf-8"))
PK = {"א": "a", "ב": "b", "ג": "c", "ד": "d", "ה": "e"}


def raw_numerics(qid):
    for q in RAW["questions"]:
        if f"21B-A-Q{q['num']}" + PK.get(q.get("part"), "") == qid:
            return [s["answer"] for s in q.get("steps", []) if s["type"] == "numeric"]
    raise KeyError(qid)


EXPECT = {}
# Q1a
cont = sum(1 for p in itertools.permutations("abcdef") if "abc" in "".join(p))
assert cont == 24 == math.factorial(4) and 720 - cont == 696
EXPECT["Q1a"] = [24, 696]
# Q1b: phi(60)/phi(12) = 4 = phi(5); the order lines: formula p^(b-a) * phi(q)
assert int(totient(60)) == 16 and int(totient(12)) == 4 and 16 // 4 == 4 == int(totient(5))
for n_ in range(2, 80):
    for m_ in range(n_ * 2, 400, n_):
        f_ = sp.factorint(n_); q_ = m_
        ratio = 1
        for p_, al in f_.items():
            be = sp.multiplicity(p_, m_); q_ //= p_**be; ratio *= p_**(be - al)
        assert sp.Rational(int(totient(m_)), int(totient(n_))) == ratio * int(totient(q_))
EXPECT["Q1b"] = [4]
# Q1c: n=10 -> spanning tree 9 edges, |E| = 11 (graphs with exactly two vertex-disjoint cycles: |E| = n+1)
G10 = nx.cycle_graph(5); G10 = nx.disjoint_union(G10, nx.cycle_graph(5)); G10.add_edge(0, 5)
assert G10.number_of_nodes() == 10 and G10.number_of_edges() == 11 and nx.is_connected(G10)
assert len(list(nx.simple_cycles(G10))) == 2 and len(nx.minimum_spanning_tree(G10).edges()) == 9
EXPECT["Q1c"] = [9, 11]
# Q2a
assert comb(20, 2) == 190 and sum(1 for x in range(1, 21) if x % 2 == 0) == 10 and comb(10, 3) == 120
EXPECT["Q2a"] = [20, 10, 120]
# Q2b
assert 3**5 == 243 and onto == 150 and 243 - 150 == 93
EXPECT["Q2b"] = [243, 150, 93]
# Q2c: n=4: |E|+|Ebar| = 6, trees with tree complement n<=9: {1,4}
assert comb(4, 2) == 6 and ok == {1, 4}
for T in nx.nonisomorphic_trees(4): assert nx.is_tree(nx.complement(T)) == (nx.diameter(T) == 3)
EXPECT["Q2c"] = [6, 2]
# Q3a
s3 = sum(comb(3, k) * 3**(2*k) for k in range(4)); assert s3 == 1000 and 5**3 + s3 == 1125
assert all(5**n_ + 10**n_ <= 2 * 10**n_ and not 5**n_ + 10**n_ <= 10**n_ for n_ in range(1, 40))
EXPECT["Q3a"] = [1000, 1125, 2]
# Q3b
import sympy
xs = sp.symbols("x"); assert sp.solve(xs**2 - 4*xs + 4, xs) == [2]
c1_, c2_ = sp.symbols("c1 c2"); assert sp.solve([c1_ - 10, 2*c1_ + 2*c2_ - 30], [c1_, c2_]) == {c1_: 10, c2_: 5}
assert a[2] == 80 == (10 + 5*2) * 4
EXPECT["Q3b"] = [2, 5, 80]
# Q3c
assert 27 - (5 + 1 + 4) == 17 and comb(19, 2) == 171
EXPECT["Q3c"] = [17, 171]
# Q4a
assert (4, 3, math.factorial(5), 4 * 3 * 120) == (4, 3, 120, 1440)
EXPECT["Q4a"] = [4, 3, 120, 1440]
# Q4b
inj = sum(1 for f in itertools.product(range(5), repeat=5) if len(set(f)) == 5)
assert inj == 120 and 5**5 == 3125 and 3125 - 120 == 3005
EXPECT["Q4b"] = [3125, 120, 3005]
# Q4c
assert pow(10, 10, 11) == 1 and [n_ for n_ in range(1, 30) if 2**(n_-1) == 1024] == [11]
EXPECT["Q4c"] = [11, 10, 1]
# Q5a: 7 edges, the construction
assert sum([1, 1, 1, 1, 2, 2, 6]) // 2 == 7
G5 = nx.Graph([(7, i) for i in range(1, 7)] + [(5, 6)]); assert G5.number_of_edges() == 7
assert sorted(d for _, d in nx.Graph([(5, 6)]).degree()) == [1, 1] and sorted(d for _, d in G5.degree()) == [1, 1, 1, 1, 2, 2, 6]
EXPECT["Q5a"] = [7]
# Q5b: p=3, q=5
assert int(totient(3**5 * 5**3)) == 16200 == (3-1)*(5-1)*3**4*5**2
assert 3 - 1 == 2 and (3 - 1) % 4 != 0                                   # "p-1 divisible by 4" fails
EXPECT["Q5b"] = [16200]
# Q5c: Petersen
GP = nx.Graph([(e[0], e[1]) for e in "ab bc cd de ea af bg ch di ej fh hj jg gi if".split()])
HP = nx.complement(GP)
indep = lambda S: all(not GP.has_edge(u, v) for u, v in itertools.combinations(S, 2))
assert indep("acij") and not indep("abcd") and not indep("fghi") and not indep("afgh")
assert all(d == 6 for _, d in HP.degree()) and 6 >= 10 / 2
EXPECT["Q5c"] = [6, 3]
for k_, v_ in EXPECT.items():
    assert raw_numerics("21B-A-" + k_) == v_, (k_, raw_numerics("21B-A-" + k_), v_)
print("STEPS section: ALL ASSERTIONS PASSED")
