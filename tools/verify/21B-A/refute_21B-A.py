import math, itertools, networkx as nx
from sympy import totient, factorint
from itertools import permutations
print("1a",sum(1 for p in permutations("abcdef") if "abc" not in "".join(p)))
# 1b brute
bad=[(n,m) for m in range(3,400) for n in range(2,m) if m%n==0 and totient(m)%totient(n)]
print("1b counterex",bad)
print("2a",math.comb(20,2),math.comb(10,3))
cnt=0
for f in itertools.product(range(3),repeat=5):
    if len(set(f))<3:cnt+=1
print("2b",cnt)
# 2c: trees whose complement is tree
for n in range(1,9):
    ok=0
    for T in nx.nonisomorphic_trees(n) if n>1 else [nx.empty_graph(1)]:
        if nx.is_tree(nx.complement(T)):ok+=1
    print("2c n",n,ok)
a=[10,30]
for n in range(2,30):a.append(4*a[-1]-4*a[-2])
print("3b",all(a[n]==(10+5*n)*2**n for n in range(30)))
print("3a",[(5**n+sum(math.comb(n,k)*9**k for k in range(n+1)))==5**n+10**n for n in range(10)])
print("3c",sum(1 for a in range(5,28) for b in range(1,28) for c in range(4,28) if a+b+c==27))
print("4a",sum(1 for p in permutations("abcdefg") if p[0] in "abcd" and p[-1] in "efg") if False else 4*3*math.factorial(5))
print("4b",5**5,5**5-120)
print("4c",[n for n in range(1,20) if 2**(n-1)==1024],(10**10-1)%11, totient(11))
# 5a
print("5a",nx.is_graphical([1,1,1,1,2,2,6]))
# 5b
for p in [3,5,7,11]:
    for q in [x for x in [5,7,11,13,17] if x>p]:
        print("5b",p,q,(p**(q-1)*(p-1)*q**(p-1)*(q-1))%4, end=" ")
print()
E=[("a","e"),("a","b"),("a","f"),("e","j"),("e","d"),("b","g"),("b","c"),("d","c"),("d","i"),("c","h"),("f","i"),("f","h"),("j","g"),("j","h"),("g","i")]
G=nx.Graph(E); H=nx.complement(G)
print("deg",set(dict(G.degree()).values()),"Petersen iso",nx.is_isomorphic(G,nx.petersen_graph()))
def ham(G):
    n=len(G)
    nodes=list(G)
    def dfs(p,s):
        if len(p)==n:return p[0] in G[p[-1]]
        return any(dfs(p+[v],s|{v}) for v in G[p[-1]] if v not in s)
    return dfs([nodes[0]],{nodes[0]})
print("5c1 ham compl",ham(H),"euler",nx.is_eulerian(H))
from networkx.algorithms.coloring import greedy_color
best=min(max(greedy_color(G,'random_sequential').values())+1 for _ in range(200));print("chi<=",best,"bip",nx.is_bipartite(G))
print("alpha",max(len(c) for c in nx.find_cliques(H)))
