import itertools, json, os, random
from itertools import permutations, combinations
from math import comb
import sympy as sp, networkx as nx, numpy as np
from networkx.generators.atlas import graph_atlas_g
assert sum(1 for f in permutations(range(1,9),6) if set(f[:3])=={5,6,7})==360
assert [n for n in range(1,100001,2) if n%int(sp.totient(n))==0]==[1]
assert int(sp.totient(45))==24
for n in (3,5,7,9):
    for t in nx.nonisomorphic_trees(n):
        assert any(d%2==0 and d>1 for _,d in t.degree())
for n in range(1,6):
    f=sum(comb(n,k)*2**(n-k) for k in range(n+1))*sum(comb(n,k)*3**(n+k)*5**(n-k) for k in range(n+1))
    assert f==2**(3*n)*3**(2*n)
    assert sum(1 for d in sp.divisors(f) if d%2==0)==3*n*(2*n+1)
assert sum(1 for d in sp.divisors(2**6*3**4) if d%2==0)==30
a=[10,30]
for i in range(2,40): a.append(4*a[-1]-4*a[-2])
assert all(a[i]==(10+5*i)*2**i for i in range(40)) and a[3]==200
assert all(a[n]<=15*n*2**n<=15*n*3**n for n in range(1,40))
assert min(c for c in range(1,40) if all(a[n]<=c*n*2**n for n in range(1,40)))==15
assert sum(1 for x in itertools.product(range(21),repeat=3) if sum(x)==20 and x[0]>=5 and x[1]>=4 and x[2]>=6)==21
assert [n for n in range(2,100) if comb(n,n-2)==120]==[16] and comb(8,2)*comb(8,3)==1568
assert sum(1 for f in itertools.product(range(3),repeat=5) if len(set(f))<3)==93
assert sum(1 for f in itertools.product(range(3),repeat=5) if len(set(f))==3)==150
for g in graph_atlas_g():
    if len(g)>=1 and nx.is_isomorphic(g,nx.complement(g)): assert nx.is_connected(g)
def nst(g):
    L=nx.laplacian_matrix(g).toarray().astype(float)
    return round(np.linalg.det(L[1:,1:]))
assert nst(nx.path_graph(4))==1 and nx.is_bipartite(nx.path_graph(4))
T=nx.Graph([(0,1),(1,2),(2,3),(0,4),(4,5),(5,3),(0,3)])
assert nst(T)==15 and nx.is_bipartite(T) and len(T)==6 and T.number_of_edges()==7
random.seed(1)
for _ in range(200):
    g=nx.gnp_random_graph(7,0.6,seed=random.randint(0,10**6))
    if not nx.is_connected(g): continue
    t1=nx.minimum_spanning_tree(g)
    for e in g.edges: g[e[0]][e[1]]['w']=random.random()
    t2=nx.minimum_spanning_tree(g,weight='w')
    if set(map(frozenset,t1.edges))!=set(map(frozenset,t2.edges)):
        u=nx.Graph(); u.add_edges_from(list(t1.edges)+list(t2.edges)); assert not nx.is_forest(u)
for g in graph_atlas_g():
    n=len(g)
    if n>3 and g.number_of_edges()<n*(n-1)//2 and all(2*d>=n-1 for _,d in g.degree()):
        assert nx.is_connected(g) and nx.diameter(g)==2
E=[(9,1),(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(1,5),(2,7),(3,11),(4,8),(9,10),(10,11),(10,12),(11,12),(12,6)]
g=nx.Graph(E); assert len(g)==12 and set(dict(g.degree()).values())=={3}
g1=g.copy(); g1.add_edge(4,7)
cyc=[4,7,8,9,1,2,3,11,10,12,6,5]; assert sorted(cyc)==list(range(1,13)) and all(g1.has_edge(cyc[i],cyc[(i+1)%12]) for i in range(12))
h=nx.complement(g); assert set(dict(h.degree()).values())=={8} and nx.is_connected(h)
col={}
for v in (2,4,6,9,11): col[v]=1
for v in (1,3,7,10): col[v]=2
for v in (5,8,12): col[v]=3
assert len(col)==12 and all(col[u]!=col[v] for u,v in E)
assert g.subgraph((10,11,12)).number_of_edges()==3 and not nx.is_bipartite(g)
S=(2,4,6,9,11); assert all(h.has_edge(a,b) for a,b in combinations(S,2))
def has_induced(gr,pat): return any(nx.is_isomorphic(gr.subgraph(S),pat) for S in combinations(gr.nodes,len(pat)))
assert all(has_induced(h,p) for p in (nx.path_graph(4),nx.cycle_graph(4),nx.cycle_graph(5),nx.complete_graph(5)))
assert nx.is_isomorphic(g.subgraph((9,1,2,3)),nx.path_graph(4)) and nx.is_isomorphic(g.subgraph((4,5,6,7,8)),nx.cycle_graph(5)) and g.subgraph((1,2,4,8)).number_of_edges()==2
d=json.load(open(os.path.join(os.path.dirname(__file__),'..','..','raw','22B-A.json'),encoding='utf8'))
allowed={(1,0):{6,5,60,360},(1,1):{24,1},(1,2):{7},(2,0):{6,5,30},(2,1):{10,5,200,15},(2,2):{15,5,21},
 (3,0):{16,28,56,1568},(3,1):{243,96,150,93},(3,2):{15},(4,0):{4,8,2},(4,1):{8,3}}
ks={}
for q in d['questions']:
    i=ks.get(q['num'],0); ks[q['num']]=i+1
    for s in q['steps']:
        if s['type']=='numeric': assert s['answer'] in allowed[(q['num'],i)],(q['num'],i,s['answer'])
print('22B-A refute OK')
