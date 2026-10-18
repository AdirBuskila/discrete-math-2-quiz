# Machine-computed answers for the "graphs" guided course (networkx + brute force).
# gen.py reads ANS to write courses/graphs/C0*.js; check.py reloads the stored JS and re-asserts every answer.
import itertools, math
import networkx as nx
from networkx.algorithms import bipartite as nxb

ANS = {}


def hh_step(seq):
    s = sorted(seq, reverse=True)
    d, rest = s[0], s[1:]
    assert d <= len(rest)
    rest = [x - 1 for x in rest[:d]] + rest[d:]
    assert all(x >= 0 for x in rest)
    return sorted(rest, reverse=True)


def hh_graphical(seq):
    s = sorted(seq, reverse=True)
    while s and s[0] > 0:
        d = s[0]
        rest = s[1:]
        if d > len(rest):
            return False
        rest = [x - 1 for x in rest[:d]] + rest[d:]
        if min(rest) < 0:
            return False
        s = sorted(rest, reverse=True)
    return True


def hamilton_cycle(G):
    n = G.number_of_nodes()
    if n < 3:
        return False
    nodes = list(G.nodes())
    start = nodes[0]
    adj = {v: set(G[v]) for v in nodes}

    def dfs(v, seen, cnt):
        if cnt == n:
            return start in adj[v]
        for w in adj[v]:
            if w not in seen:
                seen.add(w)
                if dfs(w, seen, cnt + 1):
                    return True
                seen.remove(w)
        return False
    return dfs(start, {start}, 1)


def hamilton_path(G):
    n = G.number_of_nodes()
    adj = {v: set(G[v]) for v in G}

    def dfs(v, seen, cnt):
        if cnt == n:
            return True
        for w in adj[v]:
            if w not in seen:
                seen.add(w)
                if dfs(w, seen, cnt + 1):
                    return True
                seen.remove(w)
        return False
    return any(dfs(v, {v}, 1) for v in G)


def circulant(n, jumps):
    return nx.circulant_graph(n, jumps)


# ---------------- sanity facts used by several levels ----------------
comp = nx.complement
# handshake on random graphs
for seed in range(30):
    G = nx.gnp_random_graph(9, 0.4, seed=seed)
    assert sum(d for _, d in G.degree()) == 2 * G.number_of_edges()
    assert sum(1 for _, d in G.degree() if d % 2) % 2 == 0
    H = comp(G)
    assert G.number_of_edges() + H.number_of_edges() == math.comb(9, 2)
    for v in G:
        assert G.degree(v) + H.degree(v) == 8

# ================= C01: degrees =================
G = circulant(8, [1, 4]); assert all(d == 3 for _, d in G.degree())
ANS["C01-Q1"] = G.number_of_edges()                                  # 12
assert not nx.is_graphical([3] * 7) and sum([3] * 7) == 21 and nx.is_graphical([3] * 8)
ANS["C01-Q2"] = "לא, כי סכום הדרגות 21 הוא אי-זוגי"
ANS["C01-Q3"] = nx.complete_graph(9).number_of_edges()               # 36
seq = [3] * 4 + [2] * 6
assert nx.is_graphical(seq)
ANS["C01-Q4"] = nx.havel_hakimi_graph(seq).number_of_edges()         # 12
c01q5 = {"a": [2, 2, 2, 2], "b": [3, 3, 2, 2], "c": [3, 3, 3, 1, 1], "d": [4, 2, 2, 2, 2]}
bad = [k for k, s in c01q5.items() if not nx.is_graphical(s)]
assert bad == ["c"] and sum(c01q5["c"]) % 2 == 1
ANS["C01-Q5"] = "$3,3,3,1,1$"
G = nx.random_regular_graph(4, 10, seed=1)
ANS["C01-Q6"] = 4
assert G.number_of_edges() == 20 and 4 * 10 == 2 * 20

# ================= C02: complement =================
G = nx.Graph(); G.add_nodes_from(range(7)); G.add_edges_from([(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 6), (0, 6), (2, 5)])
assert G.number_of_edges() == 8
ANS["C02-Q1"] = comp(G).number_of_edges()                            # 13
G = nx.cycle_graph(9); G.remove_edge(0, 8); G.remove_edge(0, 1); G.add_edges_from([(0, 4), (0, 5)])
v = [0]
assert G.degree(0) == 2
ANS["C02-Q2"] = comp(G).degree(v[0])                                 # 6
K = nx.complete_bipartite_graph(3, 4)
ANS["C02-Q3"] = comp(K).number_of_edges()                            # 9
assert nx.is_isomorphic(comp(nx.cycle_graph(5)), nx.cycle_graph(5))
assert not nx.is_isomorphic(comp(nx.cycle_graph(5)), nx.path_graph(5))
assert not nx.is_isomorphic(comp(nx.cycle_graph(5)), nx.star_graph(4))
ANS["C02-Q4"] = "מעגל באורך 5"
# disconnected => complement connected (all graphs up to 7 nodes), converse false (P4)
for H in nx.graph_atlas_g():
    if H.number_of_nodes() >= 2 and not nx.is_connected(H):
        assert nx.is_connected(comp(H))
assert nx.is_connected(nx.path_graph(4)) and nx.is_connected(comp(nx.path_graph(4)))
ANS["C02-Q5"] = "קשיר תמיד"
P = nx.paley_graph(13).to_undirected()
P = nx.Graph(P)
assert P.number_of_nodes() == 13 and nx.is_isomorphic(P, comp(P))
ANS["C02-Q6"] = P.number_of_edges()                                  # 39
assert P.number_of_edges() * 2 == math.comb(13, 2)

# ================= C03: degree sequences =================
c03q1 = {"a": [3, 3, 2, 2, 2], "b": [4, 2, 2, 1, 1], "c": [4, 4, 3, 1, 1, 1], "d": [3, 3, 3, 3]}
assert all(sum(s) % 2 == 0 for s in c03q1.values())
assert [k for k, s in c03q1.items() if not nx.is_graphical(s)] == ["c"]
for s in c03q1.values():
    assert hh_graphical(s) == nx.is_graphical(s)
ANS["C03-Q1"] = "$4,4,3,1,1,1$"
ANS["C03-Q2"] = hh_step([4, 3, 3, 2, 2, 1, 1])                       # [2,2,1,1,1,1]
assert ANS["C03-Q2"] == [2, 2, 1, 1, 1, 1]
# 7 vertices with pairwise distinct degrees: impossible (graph atlas: no graph with 7 nodes has 7 distinct degrees)
assert not any(len({d for _, d in H.degree()}) == H.number_of_nodes() for H in nx.graph_atlas_g() if H.number_of_nodes() == 7)
assert not nx.is_graphical([6, 5, 4, 3, 2, 1, 0])
ANS["C03-Q3"] = "לא: הדרגות היו חייבות להיות 0,1,2,3,4,5,6 וצומת בדרגה 6 לא יכול להתקיים יחד עם צומת בדרגה 0"
seq = [5, 4, 3, 3, 2, 2, 2, 1]
assert nx.is_graphical(seq)
ANS["C03-Q4"] = sum(seq) // 2                                        # 11
assert nx.havel_hakimi_graph(seq).number_of_edges() == 11
seq5 = [7, 6, 5, 5, 3, 2, 2, 2]
assert sum(seq5) % 2 == 0 and not nx.is_graphical(seq5) and not hh_graphical(seq5)
ANS["C03-Q5"] = "לא, אף שהסכום זוגי האלגוריתם נכשל"
trace = [[3, 3, 2, 2, 1, 1]]
while trace[-1] and trace[-1][0] > 0:
    trace.append(hh_step(trace[-1]))
assert trace[-1] == [0, 0, 0] and nx.is_graphical([3, 3, 2, 2, 1, 1])
ANS["C03-Q6"] = [[x for x in t] for t in trace[1:]]                  # three intermediate sequences
assert ANS["C03-Q6"] == [[2, 1, 1, 1, 1], [1, 1, 0, 0], [0, 0, 0]]

# ================= C04: bipartite =================
ANS["C04-Q1"] = nx.complete_bipartite_graph(5, 7).number_of_edges()  # 35
bip = {"a": nx.cycle_graph(7), "b": nx.cycle_graph(8), "c": nx.complete_graph(4), "d": nx.complete_graph(5)}
assert [k for k, g in bip.items() if nx.is_bipartite(g)] == ["b"]
ANS["C04-Q2"] = "$C_8$"
B = nx.Graph()
A_ = [("a", i) for i in range(4)]; B_ = [("b", j) for j in range(6)]
for i in range(4):
    for t in range(3):
        B.add_edge(("a", i), ("b", (3 * i + t) % 6))
assert nx.is_bipartite(B) and all(B.degree(a) == 3 for a in A_) and len({B.degree(b) for b in B_}) == 1
ANS["C04-Q3"] = B.degree(B_[0])                                      # 2
assert B.number_of_edges() == 12
for G_ in [nx.complete_bipartite_graph(2, 5)]:
    assert nx.is_bipartite(G_) and not nx.is_bipartite(comp(G_))
ANS["C04-Q4"] = "לא דו-צדדי, כי במשלים יש משולש"
best = max(a * (9 - a) for a in range(1, 9))
ANS["C04-Q5"] = best                                                 # 20
aseq, bseq = [4, 3, 3, 2], [3, 3, 2, 2, 2]
assert sum(aseq) == sum(bseq) and nxb.havel_hakimi_graph(aseq, bseq).number_of_edges() == 12
ANS["C04-Q6"] = 2

# ================= C05: trees =================
T = nx.random_labeled_tree(15, seed=1) if hasattr(nx, "random_labeled_tree") else nx.random_tree(15, seed=1)
assert nx.is_tree(T)
ANS["C05-Q1"] = T.number_of_edges()                                  # 14
F = nx.disjoint_union_all([nx.path_graph(8), nx.star_graph(5), nx.path_graph(6)])  # 8 + 6 + 6 = 20 vertices, 3 comps
assert F.number_of_nodes() == 20 and nx.number_connected_components(F) == 3 and nx.is_forest(F)
ANS["C05-Q2"] = F.number_of_edges()                                  # 17
F = nx.disjoint_union_all([nx.path_graph(5)] * 6)
assert F.number_of_nodes() == 30 and F.number_of_edges() == 24 and nx.is_forest(F)
ANS["C05-Q3"] = nx.number_connected_components(F)                    # 6
# 7 vertices, 6 edges: connected => tree; the other conditions are not enough
cnt_conn = 0; ce_deg1 = ce_deg3 = ce_bip = False
for H in nx.graph_atlas_g():
    if H.number_of_nodes() == 7 and H.number_of_edges() == 6:
        if nx.is_connected(H):
            assert nx.is_tree(H)
        else:
            if min(d for _, d in H.degree()) >= 1: ce_deg1 = True
            if max(d for _, d in H.degree()) >= 3: ce_deg3 = True
            if nx.is_bipartite(H): ce_bip = True
assert ce_deg1 and ce_deg3 and ce_bip
ANS["C05-Q4"] = "הגרף קשיר"
for t in nx.nonisomorphic_trees(8):
    for leaf in [v for v in t if t.degree(v) == 1]:
        t2 = t.copy(); t2.remove_node(leaf); assert nx.is_tree(t2)
ANS["C05-Q5"] = "מתקבל עץ"
mn = min(sum(1 for v in t if t.degree(v) == 1) for n in range(2, 11) for t in nx.nonisomorphic_trees(n))
assert mn == 2
ANS["C05-Q6"] = "2"

# ================= C06: leaves of a tree from the degree sum =================
def prufer_tree_with(degs):
    """tree whose vertex degrees are degs (n = len(degs)); via Pruefer, raises if impossible"""
    n = len(degs)
    seqs = []
    for v, d in enumerate(degs):
        seqs += [v] * (d - 1)
    assert len(seqs) == n - 2
    return nx.from_prufer_sequence(seqs)

def leaves(t):
    return sum(1 for v in t if t.degree(v) == 1)

def solve_leaves(n, d):
    # p + d(n-p) = 2(n-1)
    num = d * n - 2 * (n - 1)
    return num / (d - 1)

t = prufer_tree_with([3] * 6 + [1] * 8)
assert t.number_of_nodes() == 14 and leaves(t) == 8 and solve_leaves(14, 3) == 8
ANS["C06-Q1"] = 8
# n=25 with degrees in {1,4}: no integer solution
assert solve_leaves(25, 4) != int(solve_leaves(25, 4))
# and a brute force over x = number of degree-4 vertices
assert not any(x * 4 + (25 - x) == 2 * 24 for x in range(26))
ANS["C06-Q2"] = "לא, כי מתקבל מספר עלים לא שלם"
t = prufer_tree_with([5] * 6 + [1] * 20)
assert t.number_of_nodes() == 26 and leaves(t) == 20 and solve_leaves(26, 5) == 20
ANS["C06-Q3"] = 20
t = prufer_tree_with([4, 3] + [1] * 5)
assert leaves(t) == 5 and t.number_of_nodes() == 7
ANS["C06-Q4"] = 5
t = prufer_tree_with([3] * 13 + [1] * 15)
assert t.number_of_nodes() == 28 and leaves(t) == 15
ANS["C06-Q5"] = 28
assert solve_leaves(17, 4) == 12
t = prufer_tree_with([4] * 5 + [1] * 12)
assert t.number_of_nodes() == 17 and leaves(t) == 12
C06_LINES = [
    r"נסמן ב-$p$ את מספר העלים. שאר $17-p$ הצמתים בדרגה 4.",
    r"סכום הדרגות בעץ על 17 צמתים הוא $2(17-1)=32$.",
    r"לכן $p+4(17-p)=32$.",
    r"כלומר $68-3p=32$ ולכן $p=12$.",
]
C06_BUG = r"סכום הדרגות בעץ על 17 צמתים הוא $2\cdot17=34$."
assert 2 * 16 == 32 and 68 - 3 * 12 == 32 and 2 * 17 == 34 and (68 - 34) % 3 != 0
ANS["C06-Q6"] = 1                                                    # bug index

# ================= C07: trees and their complements =================
t = nx.random_labeled_tree(8, seed=2) if hasattr(nx, "random_labeled_tree") else nx.random_tree(8, seed=2)
ANS["C07-Q1"] = comp(t).number_of_edges()                            # 21
assert nx.is_isomorphic(comp(nx.path_graph(4)), nx.path_graph(4))
assert not nx.is_tree(comp(nx.star_graph(3)))
ANS["C07-Q2"] = "$P_4$"
S = comp(nx.star_graph(5))
assert nx.is_isomorphic(S, nx.disjoint_union(nx.complete_graph(5), nx.empty_graph(1)))
ANS["C07-Q3"] = "$K_5$ ועוד צומת מבודד"
mx = min(max(len(a), len(b)) for t in nx.nonisomorphic_trees(9) for a, b in [nxb.sets(t)])
assert mx == 5
ANS["C07-Q4"] = 5
for n in range(5, 10):
    for t in nx.nonisomorphic_trees(n):
        assert not nx.is_bipartite(comp(t))
assert all(nx.is_bipartite(comp(nx.path_graph(4))) for _ in [0])
ANS["C07-Q5"] = "המשלים אינו דו-צדדי, לכל עץ כזה"
for n in range(1, 12):
    ts = [t for t in nx.nonisomorphic_trees(n)] if n >= 2 else [nx.empty_graph(1)]
    ok = [n for t in ts if nx.is_tree(comp(t)) and comp(t).number_of_nodes() > 0]
    if ok: assert n in (1, 4)
assert math.comb(4, 2) == 2 * 3

# ================= C08: Euler =================
eu = {"a": nx.complete_graph(6), "b": nx.complete_graph(8), "c": nx.complete_graph(7), "d": nx.complete_bipartite_graph(3, 4)}
assert [k for k, g in eu.items() if nx.is_eulerian(g)] == ["c"]
ANS["C08-Q1"] = "$K_7$"
K23 = nx.complete_bipartite_graph(2, 3)
assert not nx.is_eulerian(K23) and nx.is_semieulerian(K23)
ANS["C08-Q2"] = "יש מסלול אוילר שאינו סגור, אבל אין מעגל אוילר"
K9 = nx.complete_graph(9)
assert nx.is_eulerian(K9) and len(list(nx.eulerian_circuit(K9))) == 36
ANS["C08-Q3"] = 36
two = nx.disjoint_union(nx.complete_graph(3), nx.complete_graph(3))
assert all(d % 2 == 0 for _, d in two.degree()) and not nx.is_eulerian(two)
ANS["C08-Q4"] = "לא, כי הגרף אינו קשיר"
cnt = sum(1 for n in range(5, 11) if nx.is_eulerian(comp(nx.cycle_graph(n))))
assert cnt == 3 and [n for n in range(5, 11) if nx.is_eulerian(comp(nx.cycle_graph(n)))] == [5, 7, 9]
ANS["C08-Q5"] = 3
for n in range(2, 14):
    assert not nx.is_eulerian(comp(nx.path_graph(n)))
ANS["C08-Q6"] = "לא, כי יש בו צומת בדרגה אי-זוגית"

# ================= C09: Hamilton =================
ham = {"a": nx.complete_bipartite_graph(3, 3), "b": nx.complete_bipartite_graph(3, 4), "c": nx.complete_bipartite_graph(2, 5), "d": nx.complete_bipartite_graph(4, 6)}
assert [k for k, g in ham.items() if hamilton_cycle(g)] == ["a"]
ANS["C09-Q1"] = "$K_{3,3}$"
for seed in range(300):
    n = 8
    G = nx.gnp_random_graph(n, 0.6, seed=seed)
    if min(d for _, d in G.degree()) >= n // 2:
        assert hamilton_cycle(G)
ANS["C09-Q2"] = "יש בו מעגל המילטון"
Pet = nx.petersen_graph()
Hc = comp(Pet)
assert all(d == 6 for _, d in Hc.degree()) and hamilton_cycle(Hc) and not hamilton_cycle(Pet)
ANS["C09-Q3"] = 6
assert hamilton_path(nx.path_graph(5)) and not hamilton_cycle(nx.path_graph(5))
ANS["C09-Q4"] = "יש מסלול המילטון, אבל אין מעגל המילטון"
bow = nx.Graph([(0, 1), (1, 2), (2, 0), (0, 3), (3, 4), (4, 0)])
assert nx.is_eulerian(bow) and not hamilton_cycle(bow) and hamilton_path(bow)
ANS["C09-Q5"] = "אוילר כן, המילטון לא"
K34 = nx.complete_bipartite_graph(3, 4)
assert hamilton_path(K34) and not hamilton_cycle(K34)
ANS["C09-Q6"] = "יש מסלול המילטון, אבל אין מעגל המילטון"
for n in range(6, 12):
    assert hamilton_cycle(comp(nx.path_graph(n)))
BOSS = ["25B-A-Q4a", "21B-B-Q3c", "24B-A-Q3c", "25B-A-Q4b", "25B-B-Q1c", "25S-A-Q3c"]

if __name__ == "__main__":
    print(len(ANS), "answers computed")
