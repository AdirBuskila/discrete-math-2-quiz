import math, itertools, networkx as nx
from sympy import totient, divisors, gcd
from itertools import permutations, combinations
print("1a",sum(1 for p in permutations(range(5)) if any(p[i]==i for i in range(5))))
print("1b",len(set(divisors(750))&set(divisors(300))))
def euler_c(n):
    G=nx.cycle_graph(n);H=nx.complement(G);return nx.is_connected(H) and all(d%2==0 for _,d in H.degree()) and H.number_of_edges()>0
print("1c",[n for n in range(3,30) if euler_c(n)],[(n,all(d%2==0 for _,d in nx.complement(nx.cycle_graph(n)).degree()),nx.is_connected(nx.complement(nx.cycle_graph(n)))) for n in range(3,8)])
print("2a",[sum(math.comb(n,k)*(7**k+3*5**k) for k in range(n+1))==8**n+3*6**n for n in range(10)], max((8**n+3*6**n)/9**n for n in range(0,60)))
a=[5,12]
for n in range(2,20):a.append(2*a[-1]-a[-2])
print("2b",all(a[n]==5+7*n for n in range(20)))
print("2c",sum(1 for x in range(1,201) if x%2==0 or x%3==0 or x%5==0))
n=[n for n in range(1,50) if math.comb(n,2)==105];print("3a",n,sum(math.comb(8,k) for k in range(6,9)))
print("3b",sum(1 for f in itertools.product(range(5),repeat=5) if any(f[i]>f[i+1] for i in range(4))), 5**5-math.comb(9,5))
print("3c",[n for n in range(3,12) if nx.is_isomorphic(nx.cycle_graph(n),nx.complement(nx.cycle_graph(n)))])
print("4a",sum(1 for a in range(1,7) for b in range(1,6) if (a+b)%2),2**15)
print("4b",sum(1 for f in combinations(range(1,10),4) if f[0]==3),sum(1 for f in combinations(range(1,10),4) if True and f[0]==3))
print("4b alt: f(1)=3 strictly inc",sum(1 for f in itertools.product(range(1,10),repeat=4) if f[0]==3 and all(f[i]<f[i+1] for i in range(3))))
from sympy import primerange
print("4c",all(pow(totient(p),int(totient(p*p)),p)==1%p for p in primerange(2,200)))
print("5a",nx.is_graphical([1,1,1,1,3,4,5,6,8]))
print("5b",all(totient(totient(p**4))%totient(p*p)==0 for p in primerange(2,300)))
edges="1-2 1-10 10-11 10-9 2-9 9-12 11-12 1-4 2-3 11-5 12-7 4-8 8-3 4-5 8-6 3-7 5-6 6-7".split()
G=nx.Graph([tuple(map(int,e.split('-'))) for e in edges])
print("n,e",len(G),G.number_of_edges(),set(dict(G.degree()).values()),nx.is_bipartite(G))
def ham(G):
    n=len(G);nodes=list(G)
    def dfs(p,s):
        if len(p)==n:return p[0] in G[p[-1]]
        return any(dfs(p+[v],s|{v}) for v in G[p[-1]] if v not in s)
    return dfs([nodes[0]],{nodes[0]})
H=nx.complement(G)
def chi(G):
    nodes=list(G)
    for k in range(1,6):
        for col in itertools.product(range(k),repeat=len(nodes)):
            c=dict(zip(nodes,col))
            if all(c[u]!=c[v] for u,v in G.edges()):return k
print("chi",chi(G),"triangles",sum(nx.triangles(G).values())//3)
