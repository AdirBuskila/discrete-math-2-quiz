import itertools, json, os
from itertools import permutations, combinations
from math import comb
import sympy as sp, networkx as nx
from networkx.algorithms import isomorphism
# Q1a
assert sum(1 for f in permutations(range(1,11),5) if set(f[:2])<=set(range(6,11)) and set(f[2:])<=set(range(1,6)))==1200
# Q1b: sample check p | phi(phi(n)) for n with v_p=3 exactly and no prime > p
for p in (2,3,5,7):
    for n in range(1,3000):
        if sp.gcd(n,p**4)==p**3 and all(q<=p for q in sp.primefactors(n)):
            assert sp.totient(sp.totient(n))%p==0
assert sp.totient(sp.totient(375))==80
# Q1c: all graphs 4..7 nodes with 1<m<n-1 : diam(complement)==2
from networkx.generators.atlas import graph_atlas_g
for g in graph_atlas_g():
    n=len(g); m=g.number_of_edges()
    if n>2 and 1<m<n-1:
        assert nx.diameter(nx.complement(g))==2
# Q2a
for n in range(1,6):
    f=sum(comb(n,k)*3**(n-k) for k in range(n+1))*sum(comb(n,k)*3**(n+k)*7**(n-k) for k in range(n+1))
    assert f==2**(3*n)*3**n*5**n
    ds=sp.divisors(f); a=sum(1 for d in ds if d%2==0); b=sum(1 for d in ds if d%2)
    assert a==3*n*(n+1)**2 and b==(n+1)**2
assert 3*3*16==144
# Q2b
a=[10,30]
for i in range(2,30): a.append(4*a[-1]-4*a[-2])
assert all(a[i]==(10+5*i)*2**i for i in range(30)) and a[2]==80
# Q2c
assert sum(1 for x in itertools.product(range(23),repeat=3) if sum(x)==20 and x[0]>=7 and x[1]>=3 and x[2]>=4)==28
# Q3a
assert 1+50+comb(50,2)==1276 and comb(25,2)*comb(25,3)==690000
# brute check n unique
assert [n for n in range(1,200) if sum(comb(n,k) for k in range(max(0,n-2),n+1))==1276]==[50]
# Q3b
assert sum(1 for f in itertools.product((1,2),repeat=10) if len(set(f))<2)==2
# Q3c
G=nx.Graph(); G.add_nodes_from(range(21))
for x in range(21):
    for y in range(x+1,21):
        if x%2==y%2: G.add_edge(x,y)
H=nx.complement(G)
def induced(Gr,pat):
    c=0
    for S in combinations(Gr.nodes,len(pat)):
        if nx.is_isomorphic(Gr.subgraph(S),pat): c+=1
    return c
assert induced(G,nx.complete_graph(4))==540
assert induced(H,nx.path_graph(3))==1045
# Q4a counterexample: two K4 + perfect matching
K=nx.disjoint_union(nx.complete_graph(4),nx.complete_graph(4))
for i in range(4): K.add_edge(i,i+4)
assert set(dict(K.degree()).values())=={4} and nx.is_connected(K) and nx.is_eulerian(K)
Hs=nx.Graph(); Hs.add_nodes_from(K)
for off in (0,4):
    for i in range(4): Hs.add_edge(off+i,off+(i+1)%4)
assert set(dict(Hs.degree()).values())=={2} and not nx.is_connected(Hs) and all(K.has_edge(*e) for e in Hs.edges)
# A1 sanity: random 4-regular..skip; theory: H connected spanning => G connected, r-2 even => r even
# Q4b: exhaustive over labeled graphs on n<=6, vertex 0 leaf in G and complement
res=set()
for n in range(2,7):
    pairs=list(combinations(range(n),2))
    for mask in range(1<<len(pairs)):
        g=nx.Graph(); g.add_nodes_from(range(n)); g.add_edges_from(p for i,p in enumerate(pairs) if mask>>i&1)
        if g.degree(0)==1 and nx.complement(g).degree(0)==1: res.add(n)
assert res=={3}
# Q4c graph (read from image): edges
E=[(1,2),(1,8),(1,9),(2,9),(2,3),(3,10),(3,4),(4,10),(4,5),(5,11),(5,6),(6,11),(6,7),(7,12),(7,8),(8,12),(9,13),(10,13),(11,13),(12,13)]
g=nx.Graph(E); assert len(g)==13
cyc=[1,2,3,10,4,5,11,6,7,8,12,13,9]
assert sorted(cyc)==list(range(1,14)) and all(g.has_edge(cyc[i],cyc[(i+1)%13]) for i in range(13))
g2=g.copy(); g2.remove_node(13); h2=nx.complement(g2)
assert h2.degree(9)==9 and not nx.is_eulerian(h2)
col={}
for v in (1,3,5,7,13): col[v]=1
for v in (2,4,6,8): col[v]=2
for v in (9,10,11,12): col[v]=3
assert all(col[u]!=col[v] for u,v in E) and g.has_edge(1,2) and g.has_edge(2,9) and g.has_edge(1,9)
S=(1,3,5,7,13); assert not any(g.has_edge(a,b) for a,b in combinations(S,2))
Hh=nx.complement(g); assert max(len(c) for c in nx.find_cliques(Hh))==5
# json step cross-check
d=json.load(open(os.path.join(os.path.dirname(__file__),'..','..','raw','23B-A.json'),encoding='utf8'))
allowed={(1,0):{20,60,1200},(1,1):{80},(1,2):{2},(2,0):{144,16,5},(2,1):{10,5,80},(2,2):{20,6,28},
 (3,0):{50,300,2300,690000},(3,1):{1024,2},(3,2):{540,550,495,1045},(4,0):{4,2},(4,1):{3},(4,2):{9,3,5}}
ks={}
for q in d['questions']:
    i=ks.get(q['num'],0); ks[q['num']]=i+1
    for s in q['steps']:
        if s['type']=='numeric': assert s['answer'] in allowed[(q['num'],i)],(q['num'],i,s['answer'])
print('23B-A refute OK')
