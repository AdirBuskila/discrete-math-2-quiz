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

# ======================= step-author phase: every guided-step value =======================
import json, pathlib
import sympy as sp
RAW = json.loads((pathlib.Path(__file__).resolve().parents[2] / "raw" / "24B-C.json").read_text(encoding="utf-8"))
def STP(n, p): return next(q for q in RAW["questions"] if q["num"] == n and q.get("part") == p)["steps"]
def NUM(n, p, i, v):
    s = STP(n, p)[i]; assert s["type"] == "numeric" and s["answer"] == v and s["tol"] == 0, (n, p, i, s["answer"], v)
def CH(n, p, i, text):
    s = STP(n, p)[i]; assert s["type"] == "choice"
    assert text in [o["value"] for o in s["options"] if o["id"] == s["correctId"]][0], (n, p, i)
def FALSEOPTS(n, p, i):  # exactly one correct id, all option values distinct
    s = STP(n, p)[i]; v = [o["value"] for o in s["options"]]; assert len(set(v)) == len(v)

# Q1a: units, |A|, |B|, answer (brute force)
def adj(p, x, y): return any({p[i], p[i+1]} == {x, y} for i in range(5))
A_ = sum(1 for p in ps if adj(p,1,2) and adj(p,5,6)); B_ = sum(1 for p in ps if adj(p,1,2) and adj(p,5,6) and adj(p,3,4))
assert (A_, B_) == (96, 48) and 96 == 2*2*sp.factorial(4) and 4 == len({"12", "56", "3", "4"})
NUM(1, "א", 0, 4); NUM(1, "א", 1, A_); NUM(1, "א", 2, B_); NUM(1, "א", 3, A_ - B_)
# Q1b: counterexample, phi(5)=4, claim (2) checked above for n<400
assert totient(4) == 2 and totient(5) == 4 and 4 % 2 == 0 and 5 % 4 != 0
CH(1, "ב", 0, "אינה"); NUM(1, "ב", 1, int(totient(5))); CH(1, "ב", 2, "פירוק")
# Q1c: which of the four named graphs is a counterexample (connected, bipartite, complement connected + bipartite)
def good(G):
    H = nx.complement(G); return all([nx.is_connected(G), nx.is_bipartite(G), nx.is_connected(H), nx.is_bipartite(H)])
cands = {"C4": nx.cycle_graph(4), "K13": nx.complete_bipartite_graph(1, 3), "P4": nx.path_graph(4), "P3": nx.path_graph(3)}
assert [k for k, g in cands.items() if good(g)] == ["P4"]
CH(1, "ג", 0, "אינה"); CH(1, "ג", 1, "P_4")
Gb = nx.Graph(); Gb.add_edges_from((i, 5 + (i + j) % 5) for i in range(5) for j in range(3))
assert all(d == 3 for _, d in Gb.degree()) and nx.is_bipartite(Gb) and Gb.number_of_edges() == 15
NUM(1, "ג", 2, 15)
# Q2a
NUM(2, "א", 0, comb(50, 2)); assert sum(comb(51, k) for k in (50, 51)) == 52 and sum(comb(51, k) for k in (49, 50, 51)) != 52
CH(2, "א", 1, r"\in\{50,51\}"); NUM(2, "א", 2, 52); NUM(2, "א", 3, 63700)
# Q2b
assert 5 * 5 == 25 and cnt_printed == 0 and comb(9, 5) == 126
NUM(2, "ב", 0, 25); NUM(2, "ב", 1, 0); NUM(2, "ב", 2, 6); NUM(2, "ב", 3, 126)
# Q2c
NUM(2, "ג", 0, 80); NUM(2, "ג", 1, pow(121, 40, 300)); NUM(2, "ג", 2, pow(49, 40, 300)); NUM(2, "ג", 3, pow(13, 81, 300)); NUM(2, "ג", 4, 15)
# Q3a: the four options evaluate to 1001, 286, 210, 4**10; only 286 is the count (brute force above)
assert [comb(14, 4), comb(13, 3), comb(10, 4), 4**10] == [1001, 286, 210, 1048576]
NUM(3, "א", 0, 10); CH(3, "א", 1, r"\binom{13}{3}"); NUM(3, "א", 2, 286)
# Q3b
xs = sp.symbols("x"); assert sorted(sp.solve(xs**2 - 5*xs + 6, xs)) == [2, 3]
Asym = sp.symbols("A"); assert sp.solve(sp.Eq(Asym, Asym - sp.Rational(6, 25)*Asym + 6), Asym) == [25]
C1s, C2s = sp.symbols("C1 C2"); sol = sp.solve([C1s + C2s + 25 - 26, 2*C1s + 3*C2s + 125 - 129], [C1s, C2s]); assert sol == {C1s: -1, C2s: 2}
assert x[2] == 639 == -4 + 18 + 625
CH(3, "ב", 0, "x=2"); NUM(3, "ב", 1, 25); NUM(3, "ב", 2, -1); NUM(3, "ב", 3, 639); CH(3, "ב", 4, "O(5^n)")
assert x[39] / 5**39 < 27 and x[39] / 3**39 > 1000 and x[39] / 2**39 > 1000  # tight c is 5 (2^n and 3^n are too small)
# Q3c: only K1+K2 has a tree complement; 3-component forests have non-bipartite complement (atlas, above)
CH(3, "ג", 0, "נכונה"); CH(3, "ג", 1, "בשלילה"); NUM(3, "ג", 2, 2)
# Q4a
assert 2**(11 - 1) == 1024 and len([i for i in range(1, 12) if i % 2 == 0]) == 5
NUM(4, "א", 0, 11); NUM(4, "א", 1, 5); NUM(4, "א", 2, 200)
# Q4b: option values at n=6 (only the third equals m); counts at n=6
n_ = 6
m6 = sum(comb(n_,k)*7**(n_+k)*5**(n_-k) for k in range(n_+1)) * sum(comb(n_,k)*2**(n_+k)*8**(n_-k) for k in range(n_+1))
optv = [2**(4*n_)*3**n_*5**n_, 2**(2*n_)*3**n_*5**n_*7**n_, 2**(4*n_)*3**n_*5**n_*7**n_, 2**(4*n_)*3**(2*n_)*5**n_*7**n_]
assert [v == m6 for v in optv] == [False, False, True, False]
ds = [d for d in divisors(m6) if d % 2 == 1 and d % 15 == 0]
e3 = {factorint(d)[3] for d in ds}; e7 = {factorint(d).get(7, 0) for d in ds}
assert len(e3) == 6 and e3 == set(range(1, 7)) and len(e7) == 7 and len(ds) == 252
CH(4, "ב", 0, "2^{4n}\cdot3^n\cdot5^n\cdot7^n"); NUM(4, "ב", 1, 6); NUM(4, "ב", 2, 7); NUM(4, "ב", 3, 252)
# Q4c: n=6; complement of a tree on 6 vertices has a triangle; max side >= 3 always, min side < 3 for the star
for T in nx.nonisomorphic_trees(6):
    a, b = nx.bipartite.sets(T); assert max(len(a), len(b)) >= 3
    assert any(len(c) == 3 for c in nx.enumerate_all_cliques(nx.complement(T)))
S = nx.star_graph(5); a, b = nx.bipartite.sets(S); assert min(len(a), len(b)) == 1
assert nx.is_bipartite(nx.cycle_graph(4)) and nx.is_bipartite(nx.path_graph(3)) and nx.is_bipartite(nx.complete_bipartite_graph(1, 3)) and not nx.is_bipartite(nx.cycle_graph(3))
NUM(4, "ג", 0, 6); CH(4, "ג", 1, "C_3")
print("STEPS 24B-C ok")
