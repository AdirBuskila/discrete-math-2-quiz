import itertools, math, sympy as sp, networkx as nx
from math import comb
r={}
r['1a2']=sum((-1)**j*comb(4,j)*(4-j)**6 for j in range(5))
r['2a']=sum(1 for x in range(100,301) if x%11 and x%6 and x%5)
n=sp.symbols('n',integer=True)
a=[1,3]
for i in range(2,12): a.append(3*a[-1]-2*a[-2]+2**i)
r['2b_ok']=all(a[i]==3-2**(i+1)+i*2**(i+1) for i in range(12))
def evdiv(N): return sum(1 for d in sp.divisors(N) if d%2==0)
for nn in range(0,5):
    m=sum(comb(nn,k)*4**(nn+k)*10**(nn-k) for k in range(nn+1))*sum(comb(nn,k)*2**(nn-k)*7**(nn+k) for k in range(nn+1))
    r['2c_%d'%nn]=(evdiv(m) if m<10**14 else None, 3*nn*(2*nn+1)**2)
r['3a']=all(sp.totient(21*k)%12==0 for k in range(1,3000))
r['3b']=sum(1 for t in itertools.product(range(26),repeat=3) if 4+7+2+3+sum(t)<=25 and True) 
r['3b']=sum(1 for x in itertools.product(range(26),repeat=4) if sum(x)==25 and x[0]>=4 and x[1]>=7 and x[2]>=2 and x[3]>=3)
def ham(G):
    ns=list(G.nodes); 
    if len(ns)<3: return False
    for p in itertools.permutations(ns[1:]):
        c=[ns[0]]+list(p)
        if all(G.has_edge(c[i],c[(i+1)%len(c)]) for i in range(len(c))): return True
    return False
for k in range(2,9):
    C=nx.complement(nx.path_graph(k))
    r['3c_n%d'%k]=dict(euler_circ=nx.is_eulerian(C) if nx.is_connected(C) else False,euler_trail=nx.has_eulerian_path(C) if nx.is_connected(C) else False,ham=ham(C))
C6c=nx.complement(nx.cycle_graph(6)); r['1c2_bip']=nx.is_bipartite(C6c)
r['4b']=[nx.is_graphical([3,3,4,4,4,6,6])]
# count non-isomorphic realizations of 3,3,4,4,4,6,6 via the degree-seq 1,1,2,2,2 on 5 vertices
ds=[1,1,2,2,2]; gs=[]
for es in itertools.combinations(list(itertools.combinations(range(5),2)),4):
    G=nx.Graph(); G.add_nodes_from(range(5)); G.add_edges_from(es)
    if sorted(d for _,d in G.degree())==ds and not any(nx.is_isomorphic(G,H) for H in gs): gs.append(G)
r['4b_nonisom_residuals']=[sorted(len(c) for c in nx.connected_components(G)) for G in gs]
r['5a2']=sum((-1)**j*math.factorial(8)//math.factorial(j) for j in range(9))
s=sum(comb(11,k)*k*7**k for k in range(12)); r['5c']=(s,sp.totient(s),s==77*8**10)
# brute: derangement
r['5a2_brute']=sum(1 for p in itertools.permutations(range(8)) if all(p[i]!=i for i in range(8)))
for k,v in r.items(): print(k,v)
