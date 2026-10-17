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
