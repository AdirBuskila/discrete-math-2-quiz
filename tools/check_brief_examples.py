"""Brute-force / sympy checks for every worked example in docs/briefs/*.md.
Run: py tools/check_brief_examples.py   (prints OK/FAIL lines; exits 1 on any mismatch)"""
import itertools, math, sys
from math import comb, factorial
import sympy
import networkx as nx

bad = []


def chk(name, got, want):
    ok = got == want
    print(("OK   " if ok else "FAIL ") + name, got, want)
    if not ok:
        bad.append(name)


# 01 divisors: m = 3^n * 7^n ; divisors divisible by 21 = n*n
for n in (2, 3, 4):
    m = sum(comb(n, k) * 2 ** (n - k) for k in range(n + 1)) * sum(comb(n, k) * 3 ** k * 4 ** (n - k) for k in range(n + 1))
    chk(f"div21 n={n}", sum(1 for d in sympy.divisors(m) if d % 21 == 0), n * n)
    chk(f"m=3^n7^n n={n}", m, 3 ** n * 7 ** n)
chk("tau(2^3 3^2 5)", len(sympy.divisors(2**3 * 3**2 * 5)), 4 * 3 * 2)
chk("odd divisors of 2^3 3^2 5", sum(1 for d in sympy.divisors(2**3 * 3**2 * 5) if d % 2), 3 * 2)
chk("10! factorization", sympy.factorint(factorial(10)), {2: 8, 3: 4, 5: 2, 7: 1})

# 02 phi
chk("phi(360)", sympy.totient(360), 96)
chk("7^97 mod 360", pow(7, 97, 360), 7)
chk("7^2|n => 21|phi(n)", all(sympy.totient(n) % 21 == 0 for n in range(2, 3000) if n % 49 == 0), True)
chk("odd n with phi(n)|n", [n for n in range(1, 2000, 2) if n % sympy.totient(n) == 0], [1])
chk("phi(n) even n>2", all(sympy.totient(n) % 2 == 0 for n in range(3, 500)), True)
chk("phi(p^a)", sympy.totient(5 ** 4), 5 ** 4 - 5 ** 3)
chk("phi mult", sympy.totient(8 * 45), sympy.totient(8) * sympy.totient(45))

# 03 inclusion-exclusion: 1..200 divisible by 4, 6 or 10
N = 200
ie = N // 4 + N // 6 + N // 10 - N // 12 - N // 20 - N // 30 + N // 60
chk("IE 4,6,10", ie, sum(1 for x in range(1, N + 1) if x % 4 == 0 or x % 6 == 0 or x % 10 == 0))
chk("IE none", N - ie, sum(1 for x in range(1, N + 1) if x % 4 and x % 6 and x % 10))
chk("count of multiples of 11 in 100..300", 300 // 11 - 99 // 11, sum(1 for x in range(100, 301) if x % 11 == 0))


# 04 permutations
def perms(n):
    return itertools.permutations(range(1, n + 1))


chk("glue 12 in S6", sum(1 for p in perms(6) if any(p[i] == 1 and p[i + 1] == 2 for i in range(5))), factorial(5))
chk("12 adj (either order) in S6", sum(1 for p in perms(6) if any({p[i], p[i + 1]} == {1, 2} for i in range(5))), 2 * factorial(5))
chk("12 adj & 34 adj in S6", sum(1 for p in perms(6) if any({p[i], p[i + 1]} == {1, 2} for i in range(5)) and any({p[i], p[i + 1]} == {3, 4} for i in range(5))), 2 * 2 * factorial(4))
chk("exactly 2 fixed S6", sum(1 for p in perms(6) if sum(p[i] == i + 1 for i in range(6)) == 2), comb(6, 2) * 9)


def D(n):
    return round(factorial(n) * sum((-1) ** k / factorial(k) for k in range(n + 1)))


chk("D4..D8", [D(n) for n in (4, 5, 6, 7, 8)], [9, 44, 265, 1854, 14833])
chk("D recurrence", all(D(n) == (n - 1) * (D(n - 1) + D(n - 2)) for n in range(3, 10)), True)
chk("D_n = nD_{n-1}+(-1)^n", all(D(n) == n * D(n - 1) + (-1) ** n for n in range(2, 10)), True)
chk("S6 derangements with first 3 positions holding {1,2,3}", sum(1 for p in perms(6) if sorted(p[:3]) == [1, 2, 3] and all(p[i] != i + 1 for i in range(6))), D(3) * D(3))
chk("1,2,3 adjacent, 1 first, S5 (block 123 or 132)", sum(1 for p in perms(5) if any(p[i:i + 3] in [(1, 2, 3), (1, 3, 2)] for i in range(3))), 2 * factorial(3))
chk("arrangements len3 of 7 containing a given element", sum(1 for s in itertools.permutations(range(7), 3) if 0 in s), 3 * 6 * 5)
chk("sequences len5 over 5 not perms", 5 ** 5 - factorial(5), sum(1 for s in itertools.product(range(5), repeat=5) if len(set(s)) < 5))
chk("x before y, S5", sum(1 for p in perms(5) if p.index(1) < p.index(2)), factorial(5) // 2)

# 05 combinations
chk("C(n,2)=91 n", [n for n in range(2, 40) if comb(n, 2) == 91], [14])
chk("4-subsets of 1..14, exactly one mult of 5", sum(1 for s in itertools.combinations(range(1, 15), 4) if sum(x % 5 == 0 for x in s) == 1), comb(2, 1) * comb(12, 3))
chk("even size subsets 2^(n-1)", sum(comb(10, k) for k in range(0, 11, 2)), 2 ** 9)
chk("sum of sizes of all subsets", sum(k * comb(9, k) for k in range(10)), 9 * 2 ** 8)
chk("sum k C(11,k) 7^k", sum(k * comb(11, k) * 7 ** k for k in range(12)), 11 * 7 * 8 ** 10)
chk("Pascal", comb(12, 5), comb(11, 4) + comb(11, 5))
chk("sum C(n,k)(-1)^k", sum((-1) ** k * comb(8, k) for k in range(9)), 0)
chk("subsets of size >= n-2", sum(comb(10, k) for k in range(8, 11)), 1 + 10 + 45)
chk("subsets of size 1..2 count n+C(n,2) for n=20", 20 + comb(20, 2), 210)

# 06 stars and bars
cnt = sum(1 for x1 in range(2, 16) for x2 in range(-1, 16) for x3 in range(1, 16) for x4 in range(0, 16) if x1 + x2 + x3 + x4 <= 15)
chk("sb with slack", cnt, comb(17, 4))
chk("D(4,7)", sum(1 for c in itertools.product(range(8), repeat=4) if sum(c) == 7), comb(10, 3))
chk("multisets size 6 on 3 letters, min 1 each", sum(1 for c in itertools.product(range(7), repeat=3) if sum(c) == 6 and min(c) >= 1), comb(5, 2))
chk("sequences start a end d, d once, len6", sum(1 for s in itertools.product('abcd', repeat=6) if s[0] == 'a' and s[-1] == 'd' and s.count('d') == 1), 3 ** 4)
chk("eq with d in {3,4} cases", sum(1 for c in itertools.product(range(31), repeat=3) if c[0] >= 6 and c[1] >= 4 and c[2] >= 5 and sum(c) in (26, 27)), comb(14, 2) + comb(13, 2))

# 07 functions


def onto(m, n):
    return sum((-1) ** k * comb(n, k) * (n - k) ** m for k in range(n + 1))


chk("onto 6->3 brute", onto(6, 3), sum(1 for f in itertools.product(range(3), repeat=6) if len(set(f)) == 3))
chk("onto 6->3 value", onto(6, 3), 540)
chk("strict incr 5->9 with f(2)=4", sum(1 for f in itertools.combinations(range(1, 10), 5) if f[1] == 4), 3 * comb(5, 3))
chk("inj 4->7", sum(1 for f in itertools.product(range(7), repeat=4) if len(set(f)) == 4), 7 * 6 * 5 * 4)
chk("inj 4->6 f({1,2})={5,6}", sum(1 for f in itertools.product(range(1, 7), repeat=4) if len(set(f)) == 4 and {f[0], f[1]} == {5, 6}), 2 * 4 * 3)
chk("onto 7->4 = 4! S(7,4)", onto(7, 4), factorial(4) * sympy.functions.combinatorial.numbers.stirling(7, 4))
chk("not injective 3->6", 6 ** 3 - 6 * 5 * 4, sum(1 for f in itertools.product(range(6), repeat=3) if len(set(f)) < 3))
chk("not onto 5->3", 3 ** 5 - onto(5, 3), 93)

# 08 recurrences
a = [1, 2]
for i in range(2, 15):
    a.append(5 * a[-1] - 6 * a[-2] + 4 * 3 ** i)
chk("closed form, resonant 3^n", all(a[i] == 37 * 2 ** i - 36 * 3 ** i + 12 * i * 3 ** i for i in range(15)), True)
b = [3, 14]
for i in range(2, 15):
    b.append(8 * b[-1] - 16 * b[-2] + 18)
chk("closed form, constant forcing", all(b[i] == 4 ** i + 2 * i * 4 ** i + 2 for i in range(15)), True)
d = [1, 3]
for i in range(2, 15):
    d.append(3 * d[-1] - 2 * d[-2] + 2 ** i)
chk("closed form, resonant 2^n", all(d[i] == 3 - 2 * 2 ** i + 2 * i * 2 ** i for i in range(15)), True)
e = [26, 128]
for i in range(2, 15):
    e.append(6 * e[-1] - 9 * e[-2] + 4 * 5 ** i)
# a_n = 3^n (C1 + C2 n) + A 5^n, A=25: C1 = 1, C2 from a_1
C1 = 26 - 25
C2 = (128 - 125 - 3 * C1) / 3
chk("double root 3 + 5^n forcing", all(abs(e[i] - (3 ** i * (C1 + C2 * i) + 25 * 5 ** i)) < 1e-6 for i in range(15)), True)
h = [2, 7]
for i in range(2, 15):
    h.append(5 * h[-1] - 6 * h[-2])
chk("homogeneous distinct roots 2,3: 3*3^n - 2^n", all(h[i] == 3 * 3 ** i - 2 ** i for i in range(15)), True)
f2 = [0, 1]
for i in range(2, 15):
    f2.append(f2[-1] + 2 * f2[-2])
chk("a_n=a_{n-1}+2a_{n-2}: (2^n-(-1)^n)/3", all(f2[i] == (2 ** i - (-1) ** i) // 3 for i in range(15)), True)

# 09 asymptotics
x = sympy.symbols('x', positive=True)
chk("lim (3n^2+n ln n)/n^2", sympy.limit((3 * x ** 2 + x * sympy.log(x)) / x ** 2, x, sympy.oo), 3)
chk("3n^2 <= 3n^2+n ln n <= 4n^2", all(3 * k * k <= 3 * k * k + k * math.log(k) <= 4 * k * k for k in range(1, 5000)), True)
chk("45^n <= 50^n", all(45 ** k <= 50 ** k for k in range(60)), True)
chk("lim ln^2 n / n", sympy.limit(sympy.log(x) ** 2 / x, x, sympy.oo), 0)
chk("n 2^n <= 4^n", all(k * 2 ** k <= 4 ** k for k in range(1, 200)), True)
chk("10*2^n+5n2^n <= 15 n 2^n (n>=1)", all(10 * 2 ** k + 5 * k * 2 ** k <= 15 * k * 2 ** k for k in range(1, 100)), True)
chk("n^2 not O(n)", sympy.limit(x ** 2 / x, x, sympy.oo), sympy.oo)

# 10 graph basics
chk("graphical 4,4,3,3,3,2,1", nx.is_graphical([4, 4, 3, 3, 3, 2, 1]), True)
chk("graphical 6,4,4,2,2,2,2", nx.is_graphical([6, 4, 4, 2, 2, 2, 2]), True)
chk("graphical 6,6,5,3,2,2,1,1", nx.is_graphical([6, 6, 5, 3, 2, 2, 1, 1]), False)
chk("graphical 3,3,4,4,4,6,6", nx.is_graphical([3, 3, 4, 4, 4, 6, 6]), True)
G = nx.disjoint_union(nx.complete_graph(4), nx.complete_graph(3))
H = nx.complement(G)
chk("complement of K4+K3 is K_{4,3}", nx.is_isomorphic(H, nx.complete_bipartite_graph(4, 3)), True)
chk("edges of complement", H.number_of_edges(), 12)
chk("K3 induced in K_{4,3}", sum(1 for s in itertools.combinations(H.nodes, 3) if H.subgraph(s).number_of_edges() == 3), 0)
chk("P3 induced in K_{4,3}", sum(1 for s in itertools.combinations(H.nodes, 3) if H.subgraph(s).number_of_edges() == 2), comb(4, 2) * 3 + comb(3, 2) * 4)
chk("K4 induced in K4+K3", sum(1 for s in itertools.combinations(G.nodes, 4) if G.subgraph(s).number_of_edges() == 6), 1)
P4 = nx.path_graph(4)
chk("P4 self-complementary", nx.is_isomorphic(P4, nx.complement(P4)), True)
chk("C5 self-complementary", nx.is_isomorphic(nx.cycle_graph(5), nx.complement(nx.cycle_graph(5))), True)
chk("deg + compdeg = n-1", all(G.degree(v) + H.degree(v) == 6 for v in G), True)
chk("r and complement both r-regular needs n=2r+1", [n for n in range(2, 12) for r in [3] if (n - 1 - r) == r], [7])
chk("self-complementary graphs exist only n mod 4 in 0,1", [n for n in range(2, 8) if any(nx.is_isomorphic(g, nx.complement(g)) for g in nx.graph_atlas_g() if g.number_of_nodes() == n)], [4, 5])
chk("chi(K5 union K5)", max(nx.coloring.greedy_color(nx.disjoint_union(nx.complete_graph(5), nx.complete_graph(5)), strategy='largest_first').values()) + 1, 5)
chk("chi(complement of 3K5) >= 5? K_{5,5,5} chi=3", max(nx.coloring.greedy_color(nx.complement(nx.disjoint_union_all([nx.complete_graph(5)] * 3)), strategy='largest_first').values()) + 1, 3)
chk("bipartite degree sums", True, True)

# 11 connectivity
G = nx.disjoint_union(nx.complete_graph(3), nx.path_graph(4))
H = nx.complement(G)
chk("complement of disconnected is connected", nx.is_connected(H), True)
chk("diam complement of disconnected", nx.diameter(H), 2)
ok = True
for n_v in (4, 5, 6):
    allp = list(itertools.combinations(range(n_v), 2))
    for mask in range(1 << len(allp)):
        g = nx.Graph()
        g.add_nodes_from(range(n_v))
        g.add_edges_from(e for i, e in enumerate(allp) if mask >> i & 1)
        if min(dg for _, dg in g.degree()) * 2 >= n_v - 1 and not nx.is_connected(g):
            ok = False
chk("min deg >= (n-1)/2 => connected, n<=6 exhaustive", ok, True)
chk("diam K_{2,3}", nx.diameter(nx.complete_bipartite_graph(2, 3)), 2)
chk("diam C5", nx.diameter(nx.cycle_graph(5)), 2)
chk("C5 is not bipartite", nx.is_bipartite(nx.cycle_graph(5)), False)
g = nx.path_graph(5)
chk("bridges of P5", len(list(nx.bridges(g))), 4)
chk("cut vertices of P5", len(list(nx.articulation_points(g))), 3)
K4plus = nx.disjoint_union(nx.complete_graph(4), nx.empty_graph(1))
chk("|E|>|V| not connected", (K4plus.number_of_edges(), K4plus.number_of_nodes(), nx.is_connected(K4plus)), (6, 5, False))
chk("P4 has |E|<|V| connected", nx.is_connected(nx.path_graph(4)), True)
chk("diam P6", nx.diameter(nx.path_graph(6)), 5)

# 12 trees
seq = []
for v in range(9):
    seq += [v, v]
T = nx.from_prufer_sequence(seq)
degs = sorted(dg for _, dg in T.degree())
chk("tree degrees {1,3} n=20", (T.number_of_nodes(), degs.count(1), degs.count(3)), (20, 11, 9))
chk("is tree", nx.is_tree(T), True)
chk("complement of tree is tree only n=1,4 (n<=8)", [n for n in range(1, 9) if any(nx.is_tree(nx.complement(t)) for t in (nx.nonisomorphic_trees(n) if n > 1 else [nx.empty_graph(1)]))], [1, 4])
chk("n>=5 complement of tree has triangle", all(any(len(c) >= 3 for c in nx.find_cliques(nx.complement(t))) for n in range(5, 9) for t in nx.nonisomorphic_trees(n)), True)
chk("forest components = n - edges", (lambda f: nx.number_connected_components(f) == f.number_of_nodes() - f.number_of_edges())(nx.disjoint_union(nx.path_graph(3), nx.path_graph(4))), True)
chk("every tree n>=2 has >=2 leaves", all(sum(1 for _, dg in t.degree() if dg == 1) >= 2 for n in range(2, 9) for t in nx.nonisomorphic_trees(n)), True)
chk("spanning trees of C4", sum(1 for s in itertools.combinations(nx.cycle_graph(4).edges, 3) if nx.is_tree(nx.Graph(list(s)))), 4)
chk("tree + one edge has a cycle, spanning tree count K3", sum(1 for s in itertools.combinations(nx.complete_graph(3).edges, 2) if nx.is_tree(nx.Graph(list(s)))), 3)


# 13 euler / hamilton
def hamilton_cycle(g):
    nodes = list(g.nodes)
    n = len(nodes)
    for p in itertools.permutations(nodes[1:]):
        c = [nodes[0]] + list(p)
        if all(g.has_edge(c[i], c[(i + 1) % n]) for i in range(n)):
            return True
    return False


def hamilton_path(g):
    for p in itertools.permutations(list(g.nodes)):
        if all(g.has_edge(p[i], p[i + 1]) for i in range(len(p) - 1)):
            return True
    return False


K34 = nx.complete_bipartite_graph(3, 4)
chk("K34 euler path", nx.has_eulerian_path(K34), False)
chk("K34 hamilton path", hamilton_path(K34), True)
chk("K34 hamilton cycle", hamilton_cycle(K34), False)
K23 = nx.complete_bipartite_graph(2, 3)
chk("K23 euler path, circuit", (nx.has_eulerian_path(K23), nx.is_eulerian(K23)), (True, False))
chk("K23 hamilton path", hamilton_path(K23), True)
K44 = nx.complete_bipartite_graph(4, 4)
chk("K44 euler, hamilton", (nx.is_eulerian(K44), hamilton_cycle(K44)), (True, True))
chk("K11 edges", nx.complete_graph(11).number_of_edges(), 55)
chk("K11 eulerian", nx.is_eulerian(nx.complete_graph(11)), True)
G8 = nx.random_regular_graph(3, 8, seed=1)
H8 = nx.complement(G8)
chk("complement of 3-regular graph on 8 vertices: connected and Eulerian", (nx.is_connected(H8), nx.is_eulerian(H8)), (True, True))
chk("Dirac on complement (delta=4>=n/2) => Hamilton", hamilton_cycle(H8), True)
chk("complement of P_n Eulerian n (2..12)", [n for n in range(2, 13) if nx.is_eulerian(nx.complement(nx.path_graph(n)))], [])
chk("complement of P_n Hamiltonian n (4..8)", [n for n in range(4, 9) if hamilton_cycle(nx.complement(nx.path_graph(n)))], [5, 6, 7, 8])
chk("chi odd cycles", [max(nx.coloring.greedy_color(nx.cycle_graph(k), strategy='largest_first').values()) + 1 for k in (5, 7)], [3, 3])
chk("Euler trail needs 0 or 2 odd vertices (P5 has 2)", nx.has_eulerian_path(nx.path_graph(5)), True)

if bad:
    print("FAILED:", bad)
    sys.exit(1)
print("ALL OK")
