import itertools, networkx as nx
from itertools import permutations
print("1a",sum(1 for p in permutations("abcdef") if "ab" not in "".join(p)))
from sympy import totient
print("1b",[n for n in range(1,3000) if totient(n)%n==0])
print("2c",sum(1 for a in range(3,24) for b in range(5,24) for c in range(5,24) for d in range(4,24) if a+b+c+d<=23))
import math
print("3a",math.comb(20,2),math.comb(10,2)**2)
cnt=0
for f in itertools.product(range(1,7),repeat=8):
    if set(f)==set(range(1,7)) and {i+1 for i,x in enumerate(f) if x in(1,2,3)}=={1,2,3}: cnt+=1
print("3b",cnt)
# a_n
a=[5,36]
for n in range(2,30):a.append(6*a[-1]-9*a[-2])
print("2b",all(a[n]==(5+7*n)*3**n for n in range(30)), all(a[n]<=12*n*5**n for n in range(1,30)))
G=nx.Graph()
for i in range(1,7):G.add_edge(i,i%6+1)
for o,i in zip(range(1,7),[7,8,9,10,11,12]):G.add_edge(o,i)
for e in [(7,8),(11,12),(9,10),(7,10),(8,11),(9,12)]:G.add_edge(*e)
print("deg",set(dict(G.degree()).values()),G.number_of_edges())
# hamiltonian
def ham(G):
    n=G.number_of_nodes()
    def dfs(p,s):
        if len(p)==n: return p[0] in G[p[-1]]
        for v in G[p[-1]]:
            if v not in s and dfs(p+[v],s|{v}):return True
        return False
    return dfs([1],{1})
print("4b1 ham",ham(G))
H=nx.complement(G)
print("4b2 euler",nx.is_eulerian(H),nx.is_connected(H))
print("bip",nx.is_bipartite(G), "triangles",sum(nx.triangles(G).values())//3)
from networkx.algorithms import isomorphism as iso
def induced(Hc,P):
    return any(True for _ in iso.GraphMatcher(Hc,P).subgraph_isomorphisms_iter())
for name,P in [("P4",nx.path_graph(4)),("C4",nx.cycle_graph(4)),("C5",nx.cycle_graph(5)),("K4",nx.complete_graph(4))]:
    print(name,"induced in complement",induced(H,P),"(induced-> GraphMatcher is node-induced)")
print("chi",max(nx.greedy_color(G,'DSATUR').values())+1)
# 3c1: C5
print("diam C5",nx.diameter(nx.cycle_graph(5)),nx.is_bipartite(nx.cycle_graph(5)))
P=nx.path_graph(4);print("P4 diam",nx.diameter(P),nx.diameter(nx.complement(P)))
