import networkx as nx
def build(res_edges):
    G=nx.Graph(); G.add_nodes_from(range(1,8)); G.add_edges_from(res_edges)
    for v in range(1,6): G.add_edge(v,6)
    for v in range(1,7): G.add_edge(v,7)
    return sorted(d for _,d in G.degree())
print('path     ',build([(1,2),(2,3),(3,4),(4,5)]))
print('K3+K2    ',build([(1,2),(2,3),(1,3),(4,5)]))
# the literal labelling v1->v2->...->v5 gives residual degrees:
P=nx.path_graph([1,2,3,4,5]); print('literal v1..v5 path degrees',[P.degree(v) for v in range(1,6)],'(table says 1,1,2,2,2)')
