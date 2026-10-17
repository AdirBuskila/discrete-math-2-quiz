# Independent checks for 25S-A answers (ASCII output only).
import itertools, math
import networkx as nx
import sympy as sp
from math import comb

res = {}
# Q1a2: onto functions 6 -> 4
cnt = sum(1 for f in itertools.product(range(4), repeat=6) if len(set(f)) == 4)
res["Q1a2 onto 6->4"] = (cnt, 1560)
# Q2a: 100..300 not divisible by 11, 6, 5
res["Q2a"] = (sum(1 for x in range(100, 301) if x % 11 and x % 6 and x % 5), 122)
# Q2b: recurrence
n = sp.symbols('n', integer=True)
a = sp.Function('a')
sol = sp.rsolve(a(n) - 3*a(n-1) + 2*a(n-2) - 2**n, a(n), {a(0): 1, a(1): 3})
print("Q2b rsolve:", sol)
def an(k):
    x0, x1 = 1, 3
    if k == 0: return x0
    for i in range(2, k+1):
        x0, x1 = x1, 3*x1 - 2*x0 + 2**i
    return x1
printed = lambda k: 3 - 2**k + 2*k*2**k
fixed = lambda k: 3 - 2*2**k + 2*k*2**k
print("Q2b printed matches a0..a6:", [an(k) == printed(k) for k in range(7)])
print("Q2b 3-2*2^n+2n2^n matches:", all(an(k) == fixed(k) for k in range(12)))
# Q2c: even divisors of m for n=1..5
for nn in range(1, 6):
    s1 = sum(comb(nn, k)*4**(nn+k)*10**(nn-k) for k in range(nn+1))
    s2 = sum(comb(nn, k)*2**(nn-k)*7**(nn+k) for k in range(nn+1))
    m = s1*s2
    fac = sp.factorint(m)
    even = fac.get(2, 0) * 0 + fac[2] * math.prod(e+1 for p, e in fac.items() if p != 2)
    assert fac == {2: 3*nn, 3: 2*nn, 7: 2*nn}, fac
    assert even == 3*nn*(2*nn+1)**2
print("Q2c ok")
# Q3a: 12 | phi(21n), n>=1
print("Q3a", all(sp.totient(21*k) % 12 == 0 for k in range(1, 2000)))
# Q3b: words with multiset counts: x1>=4,x2>=7,x3>=2,x4>=3, sum 25
c = sum(1 for x1 in range(4, 26) for x2 in range(7, 26) for x3 in range(2, 26)
        if 25 - x1 - x2 - x3 >= 3)
print("Q3b", c, comb(12, 3))
# Q3c: complement of path
for k in range(2, 13):
    G = nx.complement(nx.path_graph(k))
    euler = nx.is_connected(G) and all(d % 2 == 0 for _, d in G.degree())
    # hamiltonian: brute force
    ham = False
    if k >= 3 and nx.is_connected(G):
        nodes = list(G.nodes)
        for perm in itertools.permutations(nodes[1:]):
            cyc = [nodes[0]] + list(perm)
            if all(G.has_edge(cyc[i], cyc[(i+1) % k]) for i in range(k)):
                ham = True; break
    print("Q3c n=%d euler=%s hamilton=%s" % (k, euler, ham))
# Q4a: K11 longest trail = 55 (Euler circuit exists)
K = nx.complete_graph(11)
print("Q4a K11 eulerian:", nx.is_eulerian(K), K.number_of_edges())
# Q4b: degree sequence graphic
seq = [3, 3, 4, 4, 4, 6, 6]
print("Q4b graphic:", nx.is_graphical(seq))
print("Q4b HH step: remove 6 ->", [2, 2, 3, 3, 3, 5], nx.is_graphical([2,2,3,3,3,5]), "remove 5 ->", nx.is_graphical([1,1,2,2,2]))
# Q4c: search small connected simple graphs: one vertex deg 2, rest deg 3 -> |V| odd, never bipartite
found = False
for v in range(3, 10):
    s = [2] + [3]*(v-1)
    if nx.is_graphical(s):
        found = True
        print("Q4c |V|=%d graphical" % v)
print("Q4c graphical only for odd |V| (see above)")
# Q5a2
print("Q5a2 D8:", sum(1 for p in itertools.permutations(range(8)) if all(p[i] != i for i in range(8))))
# Q5c
S = sum(comb(11, k)*k*7**k for k in range(12))
print("Q5c sum==11*7*2^30:", S == 11*7*2**30, "phi:", sp.totient(S), 60*2**29)
for k, (got, want) in res.items():
    print(k, got, want, "OK" if got == want else "MISMATCH")
