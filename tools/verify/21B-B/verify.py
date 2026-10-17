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
