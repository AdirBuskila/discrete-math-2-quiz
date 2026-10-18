import itertools, json, os
from itertools import permutations, combinations
from math import comb
import sympy as sp, networkx as nx
from networkx.generators.atlas import graph_atlas_g
assert 5**5-sum(1 for _ in permutations(range(5)))==3005
assert [p for p in sp.primerange(2,200) if p%int(sp.totient(p))==0]==[2]
for g in graph_atlas_g():
    n=len(g)
    if n and n%4==0 and g.number_of_edges()%2==1:
        assert len(set(dict(g.degree()).values()))>1
for n in range(1,6):
    f=sum(comb(n,k)*2**(n-k) for k in range(n+1))*sum(comb(n,k)*3**(n+k)*2**(n-k) for k in range(n+1))
    assert f==45**n and f<=50**n
assert 45**2==2025
a=[3,14]
for i in range(2,30): a.append(8*a[-1]-16*a[-2]+18)
assert all(a[i]==(1+2*i)*4**i+2 for i in range(30)) and a[2]==82
c=lambda d:sum(1 for x in itertools.product(range(31),repeat=3) if sum(x)==30-d and x[0]>=6 and x[1]>=4 and x[2]>=5)
assert c(3)==91 and c(4)==78 and c(3)+c(4)==169
assert [n for n in range(1,100) if n+comb(n,2)==210]==[20]
assert comb(6,3)*comb(14,2)==1820 and sum(1 for k in range(1,21) if k%3==0)==6
assert sum(1 for f in itertools.product(range(6),repeat=3) if len(set(f))<3)==96
def chi(g):
    nodes=list(g)
    for k in range(1,len(nodes)+1):
        col={}
        def bt(i):
            if i==len(nodes): return True
            for cc in range(k):
                if all(col.get(u)!=cc for u in g[nodes[i]]):
                    col[nodes[i]]=cc
                    if bt(i+1): return True
                    del col[nodes[i]]
            return False
        if bt(0): return k
G=nx.Graph(); G.add_nodes_from(range(1,16))
for x in range(1,16):
    for y in range(x+1,16):
        if x%3==y%3: G.add_edge(x,y)
H=nx.complement(G)
assert H.number_of_edges()==75 and chi(G)==5 and chi(H)==3
assert sum(1 for S in combinations(H.nodes,3) if H.subgraph(S).number_of_edges()==3)==125
def hamcyc(g):
    n=len(g)
    if n<3: return False
    s=next(iter(g))
    def dfs(path,seen):
        if len(path)==n: return g.has_edge(path[-1],s)
        return any(dfs(path+[w],seen|{w}) for w in g[path[-1]] if w not in seen)
    return dfs([s],{s})
for g in graph_atlas_g():
    if len(g)>=3 and nx.is_bipartite(g) and hamcyc(g): assert len(g)%2==0
    if len(g)>=1 and nx.is_connected(g) and nx.is_eulerian(g) and len(set(dict(g.degree()).values()))==1 and len(g)%2==0:
        assert g.number_of_edges()%2==0
E=[(9,1),(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(1,5),(2,7),(3,11),(4,8),(9,10),(10,11),(10,12),(11,12),(12,6)]
g=nx.Graph(E); assert len(g)==12 and set(dict(g.degree()).values())=={3}
path=list(range(1,13)); assert all(g.has_edge(path[i],path[i+1]) for i in range(11))
g1=g.copy(); g1.remove_edge(1,5); h1=nx.complement(g1)
odd=sorted(v for v,d in h1.degree() if d%2); assert odd==[1,5] and nx.is_connected(h1) and h1.degree(1)==9
assert chi(g)==3
col={}
for v in (1,3,6,8,10): col[v]=1
for v in (2,4,9,11): col[v]=2
for v in (5,7,12): col[v]=3
assert len(col)==12 and all(col[u]!=col[v] for u,v in E)
hb=nx.complement(g)
S=(2,4,6,9,11); assert all(hb.has_edge(a,b) for a,b in combinations(S,2))
def has_induced(gr,pat):
    return any(nx.is_isomorphic(gr.subgraph(S),pat) for S in combinations(gr.nodes,len(pat)))
assert has_induced(hb,nx.cycle_graph(4)) and has_induced(hb,nx.cycle_graph(5)) and has_induced(hb,nx.complete_graph(5))
d=json.load(open(os.path.join(os.path.dirname(__file__),'..','..','raw','23B-B.json'),encoding='utf8'))
allowed={(1,0):{3125,120,3005},(1,1):{10,2},(1,2):{0,2},(2,0):{2025,1},(2,1):{2,1,82},(2,2):{27,12,91,78,169},
 (3,0):{20,91,1820},(3,1):{216,120,96},(3,2):{5,75,3,125},(4,0):{8},(4,1):{9,3}}
ks={}
for q in d['questions']:
    i=ks.get(q['num'],0); ks[q['num']]=i+1
    for s in q['steps']:
        if s['type']=='numeric': assert s['answer'] in allowed[(q['num'],i)],(q['num'],i,s['answer'])
print('23B-B refute OK')
