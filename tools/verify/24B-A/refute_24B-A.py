# independent refuter checks, 24B-A (written without reading the author's harness)
import itertools, math
from math import comb, factorial as f
from sympy import totient, primerange, divisor_count, Rational, symbols, Function, rsolve
def D(n): return sum((-1)**k*f(n)//f(k) for k in range(n+1))
assert sum(1 for p in itertools.permutations(range(1,7)) if not any(p[i:i+3]==(1,2,3) for i in range(4)))==696
assert sum(1 for c in itertools.combinations(range(1,10),5) if {1,2}<=set(c) and not({5,7}&set(c)))==10
# trees with tree complement, n<=7 via Prufer
import networkx as nx
good=[n for n in range(1,8) if any(nx.is_tree(nx.complement(t)) for t in nx.nonisomorphic_trees(n))] if True else []
print("n with tree whose complement is tree (1..7):",[n for n in range(2,8) if any(nx.is_tree(nx.complement(t)) for t in nx.nonisomorphic_trees(n))])
assert sum(1 for p in itertools.permutations(range(1,9)) if set(p[:4])=={1,2,3,4} and all(p[i]!=i+1 for i in range(8)))==81
assert sum(1 for c in itertools.combinations(range(1,7),4) if {1,2}<=set(c) or {5,6}<=set(c))==11
assert [n for n in range(1,200) if n%totient(n)==0 and totient(n)%n==0]==[1]
assert all(int(n)%int(totient(n))==0 for n in [2**p*3**q for p in range(3,8) for q in range(p+1,10)])
assert totient(648)==216
assert comb(10,3)==120
a=[26,128]
for n in range(2,30): a.append(6*a[-1]-9*a[-2]+4*5**n)
assert all(a[n]==3**n+25*5**n for n in range(30))
# 3c: r odd prime, |V|=2r+1 odd => r|V| odd -> impossible
assert all((r*(2*r+1))%2==1 for r in primerange(3,200))
n=[x for x in range(3,100) if comb(x,2)==300];assert n==[25]
pr=len(list(primerange(2,26)));assert pr==9 and comb(9,3)*comb(16,4)==152880 and comb(16,4)==1820
for n in range(1,6):
    m=sum(comb(n,k)*2**(n+k)*5**(n-k) for k in range(n+1))*sum(comb(n,k)*4**(n+k)*3**(n-k) for k in range(n+1))
    assert m==2**(3*n)*7**(2*n)
    assert sum(1 for d in sympy_divs(m) ) if False else True
from sympy import divisors
for n in range(1,5):
    m=2**(3*n)*7**(2*n); assert sum(1 for d in divisors(m) if d%49==0)==(3*n+1)*(2*n-1)
assert (16*9)==144
# 4c: p leaves -> p-2 deg3 ; degree-sum
for p in range(4,30):
    x=p-2; assert p+3*x==2*(p+x-1)
print("24B-A numeric ok")
# step distractors
assert not all(totient(n)%n==0 for n in (2,)) and 1%1==0
for n in (2,3): assert totient(n)%n!=0
assert D(4)==9 and 24-24+12-4+1==9
# pitfalls: 6!/3!, 3!*4!, 5!, D4 as 4!-3!, C(10,4),C(11,7)
print(f(6)//f(3), f(3)*f(4), 720-120, f(4)-f(3), comb(10,4), comb(11,7))
# q2c pitfall 2 expression equals true value?
print("pitfall Q2g2 expr 2^{p-1}3^{q-1}*2 == 2^p 3^{q-1}:", all(2**(p-1)*3**(q-1)*2==2**p*3**(q-1) for p in range(1,6) for q in range(1,6)))
