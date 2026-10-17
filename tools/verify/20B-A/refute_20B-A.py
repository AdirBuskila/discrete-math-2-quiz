import math, itertools, networkx as nx
from sympy import totient, symbols, Function
from itertools import permutations, combinations
print("1a",sum(1 for p in permutations(range(1,6)) if p[0] in(1,2)))
print("1b",totient(120))
print("1c",all(nx.complement(nx.complete_bipartite_graph(m,n)).number_of_edges()==math.comb(m,2)+math.comb(n,2) for m in range(1,6) for n in range(1,6)))
print("1d",[n for n in range(2,12) if nx.is_connected(nx.complement(nx.path_graph(n))) and nx.is_bipartite(nx.complement(nx.path_graph(n)))])
print("2a1",sum(1 for p in permutations(range(1,8)) if abs(p.index(1)-p.index(2))<=2 and abs(p.index(1)-p.index(3))<=2 and abs(p.index(2)-p.index(3))<=2 and max(p.index(x) for x in(1,2,3))-min(p.index(x) for x in(1,2,3))==2))
print("2a2",sum(1 for p in permutations(range(1,8)) if p.index(1)<p.index(2)))
print("2b1",4**4*3**3)
print("2b2 distinct", sum(1 for p in permutations("abcdxyz") if p[0] in "ab" and all(c in "abcd" for c in p[:4]) and all(c in "xyz" for c in p[4:])))
print("2c phi inj",totient(1),totient(2),all(totient(n)%8==0 for n in range(15,3000,15)))
print("3a",sum(1 for x in range(1,101) if x%3 and x%5 and x%7))
a=[14,27]
for n in range(2,25):a.append(15*2**n-a[n-2])
import sympy as sp
print("3b",all(a[n]==12*2**n+[2,3,-2,-3][n%4] for n in range(25)),[12*2**n+[2,3,-2,-3][n%4] for n in range(5)],a[:5])
H=nx.complement(nx.path_graph(15));print("3c",nx.is_connected(H),sum(1 for _,d in H.degree() if d%2))
print("4a",[n for n in range(3,40) if math.comb(n,2)==55],2**10)
print("4b",math.comb(6,4),6*5*4*3)
print("4c",[sum(math.comb(n,k)*k for k in range(n+1))==n*2**(n-1) for n in range(3,10)])
print("5a",nx.is_graphical([1,1,2,3,3,3,6,7,8]))
print("5b",sum(1 for a in range(3,23) for b in range(1,23) for c in range(4,23) for d in range(2,23) if a+b+c+d==22),math.comb(15,3))
E=[("a","e"),("a","b"),("a","f"),("e","j"),("e","d"),("b","g"),("b","c"),("d","c"),("d","i"),("c","h"),("f","i"),("f","h"),("j","g"),("j","h"),("g","i")]
G=nx.Graph(E);H=nx.complement(G)
def ham(G):
    n=len(G);nodes=list(G)
    def dfs(p,s):
        if len(p)==n:return p[0] in G[p[-1]]
        return any(dfs(p+[v],s|{v}) for v in G[p[-1]] if v not in s)
    return dfs([nodes[0]],{nodes[0]})
print("5c ham",ham(H),"euler",nx.is_eulerian(H),"bip",nx.is_bipartite(H),"diam",nx.diameter(G),nx.is_isomorphic(G,nx.petersen_graph()))
n_=5
for n in [5,6,7]:
    a_=8**n;b_=12**n;print("6a",n,totient(a_*b_)==2**(5*n)*3**(n-1), sum(math.comb(n,k)*3**k*5**(n-k) for k in range(n+1))==a_,sum(math.comb(n,k)*7**k*5**(n-k) for k in range(n+1))==b_)
