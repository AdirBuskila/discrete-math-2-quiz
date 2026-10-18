import itertools, networkx as nx
from math import comb, factorial as f
from sympy import totient, primerange, divisors, factorint
def der(p,base=1): return all(p[i]!=base+i for i in range(len(p)))
# Q1a: perms of 1..6 derangements with 1-4 first
assert sum(1 for p in itertools.permutations(range(1,7)) if set(p[:4])=={1,2,3,4} and der(p))==9
# Q1b
for al in range(3,9):
    n=5**al; assert n>100 and totient(totient(n))%40==0
assert 5**2<100 and totient(totient(25))%40!=0
# Q1c
print("tree n with tree complement 2..8:",[n for n in range(2,9) if any(nx.is_tree(nx.complement(t)) for t in nx.nonisomorphic_trees(n))])
assert not nx.is_tree(nx.complement(nx.star_graph(3)))
# Q2a
assert sum(1 for p in itertools.permutations(range(1,6)) if abs(p.index(1)-p.index(2))==1 or abs(p.index(4)-p.index(5))==1)==72
# Q2b
assert comb(8,5)==56
L='abcdxyz'
assert sum(1 for p in itertools.permutations(L,5) if ''.join(p[:2]) in('ax','by'))==120
# Q2c
assert totient(500)==200 and pow(121,100,500)==1 and pow(81,50,500)==1
assert totient(1)==totient(2) and totient(5)>totient(6) and totient(4)<totient(5)
pairs=[(1,2),(2,5),(3,5),(5,7)]; print("inj pairs:",[p for p in pairs if totient(p[0])==totient(p[1])])
# Q3a
assert comb(11,4)==330 and comb(5-1+9,4)!=330
# Q3b
a=[19,56]
for n in range(2,30): a.append(4*a[-1]-4*a[-2]+2*3**n)
assert all(a[n]==2**n+18*3**n for n in range(30))
# Q3c: all graphs on <=6 vertices: leaves(G)==leaves(complement)!=empty ?
from networkx.generators.atlas import graph_atlas_g
ex=[]
for G in graph_atlas_g():
    if G.number_of_nodes()<2: continue
    H=nx.complement(G); lg={v for v in G if G.degree(v)==1}; lh={v for v in H if H.degree(v)==1}
    if lg and lg==lh: ex.append((G.number_of_nodes(),sorted(G.edges())))
print("exists graph (counterexample count, first):",len(ex),ex[:2])
def leaves_equal(G):
    H=nx.complement(G);return {v for v in G if G.degree(v)==1}=={v for v in H if H.degree(v)==1}
for name,G in [("P3",nx.path_graph(3)),("P4",nx.path_graph(4)),("K13",nx.star_graph(3)),("P5",nx.path_graph(5))]:
    print(name,leaves_equal(G) and any(G.degree(v)==1 for v in G))
# Q4a
assert 2**9==512
pr=list(primerange(2,11)); assert comb(len(pr),2)*comb(10-len(pr),3)==120
# Q4b
for n in range(1,5):
    m=sum(comb(n,k)*7**(n+k)*3**(n-k) for k in range(n+1))*sum(comb(n,k)*2**(n+k)*6**(n-k) for k in range(n+1))
    assert m==2**(5*n)*5**n*7**n
for n in range(6,9):
    m=2**(5*n)*5**n*7**n; ph=int(totient(m)); odd=ph
    while odd%2==0: odd//=2
    assert len(divisors(odd))==2*n*n
    assert odd==3*5**(n-1)*7**(n-1)
# Q4c: connected graph with sum deg 2n-2 is tree
for n in range(2,8):
    for G in graph_atlas_g():
        if G.number_of_nodes()==n and nx.is_connected(G) and sum(d for _,d in G.degree())==2*n-2: assert nx.is_tree(G)
print("24B-B ok; pitfalls:", 9*2, f(4)-f(3))
