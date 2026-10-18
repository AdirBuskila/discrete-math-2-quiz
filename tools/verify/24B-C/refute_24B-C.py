# Independent refuter checks for 24B-C (own derivations, brute force + sympy)
import itertools, json, sys
from itertools import permutations
from math import comb
import sympy as sp, networkx as nx
V={}
def adj(p,a,b):
    return abs(p.index(a)-p.index(b))==1
V['Q1a']=sum(1 for p in permutations(range(1,7)) if adj(p,1,2) and adj(p,5,6) and not adj(p,3,4))
assert V['Q1a']==48
# Q1b: counterexample phi(4)|phi(5) and (2) m|n => phi(m)|phi(n) brute
assert sp.totient(4)==2 and sp.totient(5)==4 and 5%4!=0
assert all(sp.totient(n)%sp.totient(m)==0 for n in range(1,400) for m in range(1,n+1) if n%m==0)
# Q1c: P4 self-complementary, connected, bipartite; r-regular bipartite |A|=|B| (K_{r,r} style brute small)
P=nx.path_graph(4); assert nx.is_isomorphic(P,nx.complement(P)) and nx.is_connected(P) and nx.is_bipartite(P)
for g in [nx.cycle_graph(4),nx.star_graph(3),nx.path_graph(3)]:
    h=nx.complement(g); assert not nx.is_connected(h)
# (2): any r-regular bipartite (A,B): edges counted from both sides
# Q2a
assert comb(50,2)*(comb(51,50)+comb(51,51))==63700
# Q2b: (1) as printed x>4 -> 0 ; as x>=3 -> 70 ; (2) 126
def cnt(n,lo,total,strict_less=False):
    c=0
    def rec(i,s):
        nonlocal c
        if i==n:
            if (s<total if strict_less else s==total): c+=1
            return
        for x in range(lo,total+1):
            if s+x>total: break
            rec(i+1,s+x)
    rec(0,0); return c
assert cnt(5,5,19)==0
assert cnt(5,3,19)==70
assert cnt(5,4,25,True)==126
# Q2c
assert sp.totient(300)==80
vals=(pow(121,40,300),pow(49,40,300),pow(13,81,300)); assert vals==(1,1,13) and sum(vals)==15
# Q3a
assert sum(1 for y in itertools.product(range(21),repeat=4) if y[0]>=1 and y[1]>=2 and y[2]>=3 and y[3]>=4 and sum(y)==20)==286
# Q3b
a=[26,129]
for n in range(2,40): a.append(5*a[-1]-6*a[-2]+6*5**n)
assert all(a[n]==-2**n+2*3**n+25*5**n for n in range(40))
assert a[2]==639
assert a[39]/3**39>1e6  # not O(3^n)
assert max(a[n]/5**n for n in range(40))<27
# Q3c (1): forest, 3 comps -> complement has triangle (non-bipartite). exhaustive via atlas up to 7 nodes
from networkx.generators.atlas import graph_atlas_g
uniq=[]
for g in graph_atlas_g():
    n=len(g)
    if n<3 or not nx.is_forest(g) if n else True: continue
    k=nx.number_connected_components(g)
    h=nx.complement(g)
    if k==3: assert not nx.is_bipartite(h)
    if k>=2 and nx.is_tree(h): uniq.append(g)
assert len(uniq)==1 and len(uniq[0])==3 and uniq[0].number_of_edges()==1, uniq
# Q4a
assert 2**(11-1)==1024 and comb(5,2)*comb(6,3)==200
# Q4b
for n in (6,7,8,9):
    m=sum(comb(n,k)*7**(n+k)*5**(n-k) for k in range(n+1))*sum(comb(n,k)*2**(n+k)*8**(n-k) for k in range(n+1))
    assert m==2**(4*n)*3**n*5**n*7**n
    assert sum(1 for d in sp.divisors(m) if d%2 and d%15==0)==n*n*(n+1)
# Q4c: all trees with sum deg 10 -> n=6; complement non-bipartite
for g in graph_atlas_g():
    if len(g)==6 and nx.is_tree(g): assert not nx.is_bipartite(nx.complement(g))
# step-value cross check against raw json
d=json.load(open(__import__('os').path.join(__import__('os').path.dirname(__file__),'..','..','raw','24B-C.json'),encoding='utf8'))
allowed={(1,0):{4,96,48},(1,1):{4},(1,2):{15},(2,0):{1225,52,63700},(2,1):{25,0,6,126},(2,2):{80,1,13,15},
 (3,0):{10,286},(3,1):{25,-1,639},(3,2):{2},(4,0):{11,5,200},(4,1):{6,7,252},(4,2):{6}}
ks={}
for q in d['questions']:
    i=ks.get(q['num'],0); ks[q['num']]=i+1
    for s in q['steps']:
        if s['type']=='numeric': assert s['answer'] in allowed[(q['num'],i)],(q['num'],i,s['answer'])
print('24B-C refute OK')
