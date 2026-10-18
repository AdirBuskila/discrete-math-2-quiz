import itertools, networkx as nx
from math import comb, factorial as f
from sympy import primerange, divisors, totient
from networkx.generators.atlas import graph_atlas_g
assert sum(1 for n in range(1,101) if n%3==0 or n%49==0 or n%37==0)==37
assert sum(1 for p in itertools.permutations(range(1,8)) if abs(p.index(1)-p.index(2))>0 and
   sorted([p.index(1),p.index(2),p.index(3)])==list(range(min(p.index(1),p.index(2),p.index(3)),min(p.index(1),p.index(2),p.index(3))+3)) and p.index(1)<p.index(2) and p.index(1)<p.index(3))==240
# 1c: diameter claims
for m in range(1,6):
    for n in range(1,6):
        if m+n>=3: assert nx.diameter(nx.complete_bipartite_graph(m,n))==2
print("diam C5, P4, K23, K4:",nx.diameter(nx.cycle_graph(5)),nx.diameter(nx.path_graph(4)),nx.diameter(nx.complete_bipartite_graph(2,3)),nx.diameter(nx.complete_graph(4)))
assert not nx.is_bipartite(nx.cycle_graph(5))
# 2a
cnt=sum(1 for x1 in range(2,40) for x2 in range(-1,40) for x3 in range(5,40) if x1+x2+x3<=20); assert cnt==680==comb(17,3)
# 2b
for n in (10,11,12):
    ff=3**n*7**n*6**n
    assert sum(1 for d in divisors(ff) if d%12==0)==2*n*(n*n-1)
assert 9*20*11==1980
# 2c  brute for small n? general: count strictly increasing with f(1..3)=3,4,5 on domain 10 -> codomain n
for n in (12,13,15):
    assert sum(1 for c in itertools.combinations(range(6,n+1),7))==comb(n-5,7)
assert comb(10,7)==120 and f(9)==362880
# 3a
a=[16,36]
for n in range(2,30): a.append(6*a[-1]-9*a[-2]+3*2**n)
assert all(a[n]==4*3**n+12*2**n for n in range(30))
# 3b
for n in range(2,5000):
    if n%49==0: assert totient(n)%21==0
# 3c
assert [n for n in range(2,80) if comb(n,2)==435]==[30]
m4=[x for x in range(1,31) if x%4==0]; pr=list(primerange(2,31)); assert len(m4)==7 and len(pr)==10 and not set(m4)&set(pr)
core=comb(7,3)*comb(10,6); print("Q3g exactly-9-element reading:",core,"  free-others reading:",core*2**(30-7-10))
# 4a: degree sequence
print("graphical 6,4,4,2,2,2,2:",nx.is_graphical([6,4,4,2,2,2,2]),"3,3,1,1,1,1:",nx.is_graphical([3,3,1,1,1,1]))
c=[G for G in graph_atlas_g() if G.number_of_nodes()==6 and sorted((d for _,d in G.degree()),reverse=True)==[3,3,1,1,1,1]]; print("graphs with seq 331111 on 6 nodes (iso classes):",len(c))
# 4b
for T in nx.nonisomorphic_trees(5): assert not nx.is_bipartite(nx.complement(T))
# 4c: graph
E=[(1,2),(2,3),(3,4),(4,5),(5,6),(6,1),(6,7),(8,3),(1,8),(2,7),(7,4),(5,8)]
G=nx.Graph(E); H=nx.complement(G)
print("G regular deg",set(dict(G.degree()).values()),"bip",nx.is_bipartite(G),"H deg",set(dict(H.degree()).values()),"H conn",nx.is_connected(H))
cyc=[1,2,3,8,5,4,7,6,1]; assert all(G.has_edge(cyc[i],cyc[i+1]) for i in range(8)) and len(set(cyc))==8
def ind(S): return G.subgraph(S)
def induced_in(Hg,P,k):
    return any(nx.is_isomorphic(Hg.subgraph(S),P) for S in itertools.combinations(Hg.nodes(),k))
print("H P4 ind",induced_in(H,nx.path_graph(4),4),"C4 ind",induced_in(H,nx.cycle_graph(4),4),"K4 ind",induced_in(H,nx.complete_graph(4),4),"C5 ind",induced_in(H,nx.cycle_graph(5),5))
assert nx.is_isomorphic(H.subgraph([2,4,1,3]),nx.path_graph(4)) and H.subgraph([1,4,2,5]).number_of_edges()==4
assert G.subgraph([1,3,5,7]).number_of_edges()==0
# 5a
assert [n for n in range(1,100) if 1+n+comb(n,2)==1276]==[50]
assert len([x for x in range(1,51) if x%5==0])==10 and len([x for x in range(1,51) if x%11==0])==4 and comb(10,5)*comb(4,2)==1512
print("Q5a free-others reading:",1512*2**(50-14))
# 5b
K=nx.complete_graph(4); K.add_node(9); print("K4+iso: E,V,conn",K.number_of_edges(),K.number_of_nodes(),nx.is_connected(K)); assert nx.is_connected(nx.path_graph(4))
# 5b3 brute: connected graphs all-odd degrees n<=7 spanning tree edges odd
for G2 in graph_atlas_g():
    if G2.number_of_nodes()>1 and nx.is_connected(G2) and all(d%2==1 for _,d in G2.degree()): assert (G2.number_of_nodes()-1)%2==1
# 5c
assert sum(1 for s in itertools.product('abcd',repeat=7) if s[0]=='a' and s[-1]=='d' and s.count('d')==1)==243
# 6a numerics
for n in (13,15,17):
    pass
# build trees: n=13 odd with exactly one deg2, others 1/3 : leaves=(n+1)/2
n=13;L=(n+1)//2;t=(n-3)//2;assert L+t+1==n and L+3*t+2==2*(n-1)
# complement of such a tree: hamiltonian / euler brute for one example (caterpillar)
T=nx.Graph();spine=list(range(t+1)) # t deg3 spine nodes + ... build via degree seq
import random
seq=[1]*L+[3]*t+[2]; T=None
for seed in range(2000):
    try:
        S=nx.random_labeled_tree(n,seed=seed) if hasattr(nx,'random_labeled_tree') else nx.random_tree(n,seed=seed)
    except Exception: break
    if sorted(d for _,d in S.degree())==sorted(seq): T=S;break
print("found tree:",T is not None)
if T is not None:
    Hc=nx.complement(T); print("complement Euler:",nx.is_eulerian(Hc),"min deg",min(d for _,d in Hc.degree()),">= n/2:",min(d for _,d in Hc.degree())>=n/2)
# 6b
assert f(9)*2-f(8)==685440
print("25B-A ok")
