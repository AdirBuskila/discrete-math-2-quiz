import json
A='agree'
def it(key,ans,steps,notes=''):
    return {'item':key,'my_answer':ans,'solution':A,'rubric':A,'pitfalls':A,'steps':steps,'notes':notes}
v=[
it('1א','1560',[A]*4),
it('1ב','limit 1/3 -> theta',[A]*3),
it('1ג','not bipartite (triangle v1v3v5)',[A]*4),
it('2א','122',[A]*5),
it('2ב','a_n=3-2^(n+1)+n2^(n+1) (typo-corrected form verified; a_5=259)',[A]*4),
it('2ג','3n(2n+1)^2',[A]*4,'Solution text lists divisor form 2^a 7^b 5^c; third prime of m is 3 (typo, self-flagged in text). Final answer correct.'),
it('3א','12 | phi(21n) (phi(3^(a+1))phi(7^(b+1))=12*3^a*7^b)',[A]*4),
it('3ב','220',[A]*3),
it('3ג','no n (circuit); Hamiltonian iff n>=5',[A]*4,'Assumes Euler = circuit; with Euler trail n=4,5,7,... would qualify. Course usage is circuit.'),
it('4א','55 as trail (Euler circuit); 10 if simple path',[A]*3,'Depends on "path" = trail (course usage, matches official). Under simple-path reading answer is 10 edges. Unclear-ambiguous, not disagree.'),
{'item':'4ב','my_answer':'exists; realizations non-unique: residual 1,1,2,2,2 is P5 or K3+K2 (both verified to give 3,3,4,4,4,6,6)',
 'solution':'disagree','rubric':'disagree','pitfalls':A,
 'steps':[A,A,'disagree'],
 'divergence':'Solution says G-{v6,v7} = v1->v2->v3->v4->v5 and rubric item 3 / order step 4 say 1,1,2,2,2 is the sequence of a path on 5 vertices. First divergence: path v1..v5 has degrees 1,2,2,2,1, not 1,1,2,2,2 as labelled (label mismatch, in the original too), and the sequence is not uniquely a path (K3 + disjoint edge also realizes it). Existence conclusion is correct. Step 4 line should say "a path (or K3 plus an edge)" / any realization.'},
it('4ג','|V| odd; not bipartite (3(|A|-|B|)=1 impossible)',[A]*4),
it('5א','D8=14833',[A]*3),
it('5ב','true: spanning tree exists',[A]*3,'Conclusion true. Proof wording "delete distinct edges from every cycle" is loose (cycles overlap; correct form is delete cycle edges one at a time), mirrored in order/findbug steps. Not marked disagree.'),
it('5ג','32212254720',[A]*4),
]
json.dump({'examCode':'25S-A','items':v,'summary':{'agree':13,'disagree':1,'ambiguous_notes':['4א','5ב','3ג','2ג']}},open('tools/raw/_verify_25S-A.json','w',encoding='utf8'),ensure_ascii=False,indent=1)
