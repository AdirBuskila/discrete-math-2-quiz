import itertools, networkx as nx
from math import comb, factorial as f, perm
from sympy import primerange, divisors, totient, factorint, isprime
from networkx.generators.atlas import graph_atlas_g
assert sum(1 for d in divisors(f(10)) if d%7)==135 and factorint(f(10))=={2:8,3:4,5:2,7:1}
def der(p): return all(p[i]!=i+1 for i in range(len(p)))
assert sum(1 for p in itertools.permutations(range(1,8)) if set(p[:4])=={1,2,3,4} and der(p))==18
L=[(l,t) for t in range(0,31) for l in [30-t] if l+5*t==58]; print("leaves/deg5:",L)
assert sum(1 for x1 in range(-1,30) for x2 in range(0,30) for x3 in range(7,40) if x1+x2+x3<=23)==1140
for n in (10,11,12):
    ff=3**n*11**n*5**n
    assert sum(1 for d in divisors(ff) if d%15==0)==n*n*(n+1)
    # check closed form of sum
    assert sum(comb(n,k)*2**(n-k) for k in range(n+1))*sum(comb(n,k)*8**k*3**(n-k) for k in range(n+1))*sum(comb(n,k)*4**k for k in range(n+1))==ff
assert 11*11*12==1452
print("strict decr with f({1,2,3})={3,4,5}, n=15 domain10:",sum(1 for c in itertools.combinations(range(1,16),10) if sorted(c,reverse=True)[:3]==[5,4,3]))
assert perm(12,10)==239500800
a=[25,130]
for n in range(2,30): a.append(5*a[-1]-6*a[-2]+6*5**n)
assert all(a[n]==-5*2**n+5*3**n+25*5**n for n in range(30))
print("prime n with prime phi:",[n for n in primerange(2,2000) if isprime(int(totient(n)))])
assert comb(13,2)!=0 and 2**12-1==4095
ev=[x for x in range(1,14) if x%2==0]; op=[p for p in primerange(2,14) if p%2]
assert len(ev)==6 and len(op)==5
print("Q3g:",sum(1 for S in itertools.combinations(range(1,14),7) if sum(1 for x in S if x%2==0)==4 and sum(1 for x in S if x in op)==3))
# 4a brute: bipartite Euler graphs, |E| even
for G in graph_atlas_g():
    if G.number_of_nodes()>1 and nx.is_bipartite(G) and nx.is_connected(G) and all(d%2==0 for _,d in G.degree()): assert G.number_of_edges()%2==0
# 4b: all degrees odd -> complement even degrees
for G in graph_atlas_g():
    if G.number_of_nodes()>1 and all(d in(3,5) for _,d in G.degree()):
        assert len(list(nx.bridges(nx.complement(G))))==0
print("4b brute ok")
# 4c graph from picture
oct_=[(i,i%8+1) for i in range(1,9)]
E=oct_+[(1,9),(9,5),(1,10),(10,5),(8,11),(11,4),(2,11),(11,6),(7,9),(10,3),(8,9),(2,10),(7,3),(6,4)]
G=nx.Graph(E);H=nx.complement(G)
print("deg G",set(dict(G.degree()).values()),"edges",G.number_of_edges(),"H deg",set(dict(H.degree()).values()),"H conn",nx.is_connected(H),"Eulerian",nx.is_eulerian(H))
def isind(S,P): return nx.is_isomorphic(H.subgraph(S),P)
print("P5 sets:",[S for S in [{5,6,7,8,9},{1,2,3,4,5},{1,3,5,9,11},{2,4,6,8,10}] if isind(S,nx.path_graph(5))])
print("C4 sets:",[S for S in [{1,2,3,4},{1,2,4,5},{1,3,5,11},{5,6,7,8}] if isind(S,nx.cycle_graph(4))])
print("K4 {1,3,5,11} independent in G:",G.subgraph([1,3,5,11]).number_of_edges()==0)
print("C6 induced in G on 1,2,3,4,5,9:",nx.is_isomorphic(G.subgraph([1,2,3,4,5,9]),nx.cycle_graph(6)))
prism=nx.complement(nx.cycle_graph(6)); print("prism iso K3xK2:",nx.is_isomorphic(prism,nx.cartesian_product(nx.complete_graph(3),nx.complete_graph(2))))
print("prism induced in H on those:",nx.is_isomorphic(H.subgraph([1,2,3,4,5,9]),prism))
print("house on 5,6,7,8,9 in G, edges:",sorted(G.subgraph([5,6,7,8,9]).edges()))
# 5a: 'חליפה' = ordered
assert sum(1 for p in itertools.permutations(range(1,9),5) if 1 in p)==4200
assert 2**7==128 and sum(comb(8,k) for k in (4,6,8))==99
# 5c
print("P4 self-compl bip conn:",nx.is_isomorphic(nx.complement(nx.path_graph(4)),nx.path_graph(4)))
for m,n in [(2,3),(3,3),(2,4),(3,5)]:
    G2=nx.complete_bipartite_graph(m,n); odd=sum(1 for _,d in G2.degree() if d%2); print((m,n),"euler path:",odd in(0,2),"ham-path possible:",abs(m-n)<=1)
for T in nx.nonisomorphic_trees(9):
    A,B=nx.bipartite.sets(T)
    if len(B)<=len(A) and len(A)>0: assert any(T.degree(a)==1 for a in A)
    elif len(A)<=len(B): assert any(T.degree(b)==1 for b in B)
assert 3*comb(21,3)+4*comb(21,4)+5*comb(21,5)==129675 and (comb(21,3),comb(21,4),comb(21,5))==(1330,5985,20349)
# 6b brute: bipartite impossible for sums
assert all(4+5*(a-1)!=5*b for a in range(1,60) for b in range(1,60))
print("25B-B ok")
