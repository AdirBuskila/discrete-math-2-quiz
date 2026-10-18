# -*- coding: utf-8 -*-
"""Generator for tools/raw/22B-B.json -- discrete-math-2, spring 2022, moed B (03.07.2022).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_22B-B.py

Source: 22B-B, 8 pp (p.1 cover, pp.2-8 typed questions with handwritten ink solutions in blue/green/red, 4 questions x 25 pts).
Header: course 20068, 3 hours, formula sheet, date 03.07.2022 (the page says moed B). The solutions were read by vision; the
Hebrew prose is re-typeset from the ink, formulas and numbers as written.
Structure: Q1 = three "define the term, then answer" parts (4+5, 4+4, 4+5). Q2 a (3+3+3), b (4+6), c (6).
Q3 a (6+6), b (7), c (2+2+2, three claims in ONE item). Q4 a (4+2+2), b (4+4+5+4, four questions on one figure).
Parts with numbered sub-questions are ONE item. The Q1 definitions are handwritten as "according to the lecture".

Transcription notes
- Q4.a (p.7): the printed degree sequence is 3, nine 2s, 1 (11 vertices). The two sketches in the ink have only 9 vertices
  (C8 plus a leaf; C4 plus a leaf and a separate C4), but the degree computation next to them uses n=11. The solution below
  uses constructions with 11 vertices (C10 plus a leaf; C4 plus a leaf and a separate C6), which satisfy the printed sequence
  (tools/verify/22B-B/verify.py). Logged in docs/ASK_ADIR.md as a quiet fix (no student-facing label).
- Q4.b (p.8): the figure is the printed raster graph (rebuilt from the PDF image plus the printed vertex labels, with the
  solver's red/green ink removed). Edges read from the figure (cubic, 18 edges): the outer 6-cycle v1..v6, the spokes
  v1v7 v2v8 v3v9 v4v10 v5v11 v6v12, the inner edges v7v8 v11v12 v9v10 and the three through-the-centre edges v8v11 v12v9 v7v10.
- Q4.b.4 (p.8): the ink argues "G bipartite, so G has no C5, so the complement has no C5 because the complement of C5 is C5";
  the question asks about INDUCED subgraphs, for which this is right (the complement of the induced C5 would be an induced C5 of G).
  Checked by brute force: no 5 vertices induce a C5 in the complement.
- Q3.c.3 (p.6): the ink gives two proofs (a cycle through the bridge; G-(x,y) would contain a spanning tree); both are kept.

Checks (tools/verify/22B-B/verify.py, brute force + sympy + networkx):
Q1a 600, Q1b n|phi(n) only n=1 (n<3000), Q1c random forests, Q2a closed form and odd divisors n=1..6, Q2b closed form n<40,
Q2c 210, Q3a n=20 and 2025, Q3b 900 (all 6^8 functions), Q3c.1 C5, Q3c.2 P4, Q3c.3 all spanning trees of random graphs,
Q4a both constructions (11 vertices) with an Euler trail in the complement, Q4b the figure: bipartite, the listed C12, the
complement 8-regular and Euler, induced P4 / C4 / K4, no induced C5.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22B-B.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    # ---------------- Q1 ----------------
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (4 נק') המונח: תמורה.\n\n"
      "**א2.** (5 נק') שאלה: בכמה תמורות של הקבוצה $\\{a,b,c,d,e,f\\}$ **לא** מופיע הרצף \"ab\"?",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** לקבוצה $A=\{a,b,c,d,e,f\}$ יש $6!$ תמורות. כל תמורה של $A$ שבה מופיע הרצף "ab" היא תמורה של הקבוצה $\{x,c,d,e,f\}$ כאשר $x=$"ab", ולכן יש $5!$ תמורות מסוג זה.

מסקנה: מספר התמורות של $A$ שבהן לא מופיע הרצף "ab" שווה ל: $6!-5!=600$.""",
      points=9),
    Q(1, "ב", "computation", "euler_phi",
      r"**ב1.** (4 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** (4 נק') שאלה: מצאו כל $n\in\mathbb{N}-\{0\}$ עבורו $n\mid\phi(n)$.",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** אם $n=1$: $\phi(1)=1$, ולכן $1\mid\phi(1)$.

אם $2\le n\in\mathbb{N}$: $\phi(n)\le n-1$, ולכן $n\nmid\phi(n)$.

מסקנה: רק $n=1$ הוא פתרון.""",
      points=8),
    Q(1, "ג", "computation", "trees",
      r"**ג1.** (4 נק') המונחים: עץ ויער." "\n\n"
      r"**ג2.** (5 נק') שאלה: יהי $G=(V,E)$ גרף לא מכוון, בעל $n$ צמתים ו-$2\le k$ רכיבי קשירות. אם $G$ הוא יער, חשבו את $|E|$ כביטוי של $n$ וגם $k$.",
      r"""**ג1. הגדרה:** לפי ההרצאה.

**ג2.** נסמן ב-$T_i=(V_i,E_i)$ $(i=1,2,\dots,k)$ את רכיבי הקשירות של $G$. מכיוון ש-$G$ יער, כל $T_i$ הוא עץ, ולכן $|E_i|=|V_i|-1$.

אז:

$$|E|=|E_1|+|E_2|+\dots+|E_k|=(|V_1|-1)+(|V_2|-1)+\dots+(|V_k|-1)=|V_1|+|V_2|+\dots+|V_k|-k=|V|-k=n-k$$

מסקנה: $|E|=n-k$.""",
      points=9),

    # ---------------- Q2 ----------------
    Q(2, "א", "computation", "divisibility_primes",
      r"(3+3+3 נק') חשבו את $f(n)=\left(\sum_{k=0}^{n}\binom nk\cdot7^k\cdot3^{n-k}\right)\cdot\left(\sum_{k=0}^{n}\binom nk\cdot5^{n+k}\cdot3^{n-k}\right)$." "\n\n"
      r"כמה מחלקים אי-זוגיים יש ל-$f(n)$?",
      r"""לפי הבינום של Newton:

$$f(n)=\sum_{k=0}^{n}\binom nk7^k3^{n-k}\cdot5^n\cdot\sum_{k=0}^{n}\binom nk5^k3^{n-k}=(7+3)^n\cdot5^n\cdot(5+3)^n=10^n\cdot5^n\cdot8^n=2^{4n}\cdot5^{2n}$$

$d\mid f(n)\wedge d$ אי-זוגי $\iff0\le\alpha\le2n\wedge d=5^\alpha$.

מסקנה: ל-$f(n)$ יש $2n+1$ מחלקים אי-זוגיים.""",
      points=9),
    Q(2, "ב", "computation", "recurrences",
      r"(4+6 נק') מצאו את הצורה המפורשת של $a_n$, כאשר $a_0=5,\ a_1=36$ וגם $a_n=6a_{n-1}-9a_{n-2}$ עבור $1<n$. הראו ש: $a_n=O(n\cdot5^n)$.",
      r"""המשוואה האופיינית היא: $r^2=6r-9\iff(r-3)^2=0\Rightarrow r_1=r_2=3$, ולכן $a_n=C_1\cdot3^n+C_2\cdot n\cdot3^n$.

$$\begin{cases}a_0=5\\a_1=36\end{cases}\iff\begin{cases}C_1=5\\3C_1+3C_2=36\end{cases}\Rightarrow\begin{cases}C_1=5\\C_1+C_2=12\end{cases}\Rightarrow\begin{cases}C_1=5\\C_2=7\end{cases}$$

הצורה המפורשת היא: $a_n=5\cdot3^n+7\cdot n\cdot3^n$ לכל $n\in\mathbb{N}$.

לכל $n\ge1$: $a_n\le5n\cdot3^n+7n\cdot3^n=12\cdot n\cdot3^n\le12n\cdot5^n$.

מסקנה: $a_n=O(n\cdot5^n)$.""",
      points=10),
    Q(2, "ג", "computation", "selections_repetition",
      r"(6 נק') תהי הקבוצה $A=\{a,b,c,d\}$. כמה מלים באורך 23 אותיות לכל היותר, בלי חשיבות לסדר, ניתן ליצור מ-$A$ כך שבכל מילה: אות $a$ מופיעה לפחות 3 פעמים, אות $b$ מופיעה לפחות 5 פעמים, אות $c$ מופיעה לפחות 5 פעמים ואות $d$ מופיעה לפחות 4 פעמים.",
      r"""נסמן ב-$x_1$ את מספר הפעמים שהאות $a$ מופיעה בכל מילה, ב-$x_2$ את מספר הפעמים שהאות $b$ מופיעה, ב-$x_3$ את מספר הפעמים שהאות $c$ מופיעה וב-$x_4$ את מספר הפעמים שהאות $d$ מופיעה.

מה מספר המילים (בלי חשיבות לסדר) שווה למספר הפתרונות של:

$$\begin{cases}x_1+x_2+x_3+x_4\le23\\x_i\in\mathbb{Z},\ i=1,2,3,4\\3\le x_1,\ 5\le x_2,\ 5\le x_3,\ 4\le x_4\end{cases}$$

נסמן $y=23-(x_1+x_2+x_3+x_4)$, ואז:

$$\begin{cases}x_1+x_2+x_3+x_4+y=23\\y,x_i\in\mathbb{Z},\ y\ge0\end{cases}$$

נסמן $y_1=x_1-3,\ y_2=x_2-5,\ y_3=x_3-5,\ y_4=x_4-4$, ואז $y_i\ge0$ ומתקבל:

$$(y_1+3)+(y_2+5)+(y_3+5)+(y_4+4)+y=23\iff y_1+y_2+y_3+y_4+y=6,\ \forall y_i\in\mathbb{N}$$

מספר הפתרונות שווה ל:

$$D(5,6)=\binom{10}4=\frac{10\cdot9\cdot8\cdot7}{2\cdot3\cdot4}=210$$""",
      points=6),

    # ---------------- Q3 ----------------
    Q(3, "א", "computation", "combinations_subsets",
      r"(6+6 נק') תהי הקבוצה $A=\{1,2,3,\dots,n\}$, כאשר $n\in\mathbb{N}$. ידוע שלקבוצה $A$ יש 190 תתי-קבוצות בגודל 2. חשבו את מספר תתי-הקבוצות בגודל 4 של $A$ המכילות 2 מספרים **זוגיים** וגם 2 מספרים **אי-זוגיים**.",
      r"""נתון: $\binom n2=190\iff n(n-1)=2\cdot190\iff n^2-n-380=0\Rightarrow n=20$.

כל תת-קבוצה $B\subseteq A$ המקיימת את התנאי היא בצורה $B=C\cup D$, כאשר $|C|=2$ וגם $C\subseteq\{2,4,\dots,20\}$, וגם $|D|=2$ וגם $D\subseteq\{1,3,\dots,19\}$.

לכן יש $\binom{10}2\cdot\binom{10}2=45^2=2025$ תתי-קבוצות $B$ מתאימות.""",
      points=12),
    Q(3, "ב", "computation", "function_counting",
      r"(7 נק') כמה פונקציות $f:\{1,2,3,4,5,6,7,8\}\to\{1,2,3,4,5,6\}$ הן על וגם מקיימות התנאי $f^{-1}(\{1,2,3\})=\{1,2,3\}$?",
      r"""הפונקציה $f$ מעבירה את $\{1,2,3\}$ על $\{1,2,3\}$ בצורה חח"ע ועל: יש $3!$ אפשרויות.

הפונקציה $f$ מעבירה את $\{4,5,6,7,8\}$ על $\{4,5,6\}$ (על): מספר האפשרויות הוא

$$a=3^5-\binom31\cdot2^5+\binom32\cdot1^5=243-3\cdot32+3=150$$

מסקנה: יש $900=6\cdot150=3!\cdot150$ פונקציות מתאימות.""",
      points=7),
    Q(3, "ג", "proof", "graph_connectivity",
      r"(2+2+2 נק') הוכיחו או הפריכו:" "\n\n"
      r"**ג1.** אם $\operatorname{diam}(G)=2$, אז $G$ הוא דו-צדדי שלם." "\n\n"
      r"**ג2.** לא קיים גרף $G$ דו-צדדי שמקיים התנאי $\operatorname{diam}(\overline G)=\operatorname{diam}(G)$." "\n\n"
      r"**ג3.** אם $G=(V,E)$ הוא גרף לא מכוון, קשיר ו-$(x,y)$ היא גשר, אז $(x,y)$ נמצאת בכל עץ פורש של $G$.",
      r"""**ג1.** לא נכון. דוגמה נגדית: $G=C_5$ ($\operatorname{diam}(C_5)=2$, אך $C_5$ אינו דו-צדדי).

**ג2.** לא נכון. דוגמה נגדית: $\overline G\cong G=P_4$:

$\operatorname{diam}(P_4)=3=\operatorname{diam}(\overline{P_4})$ ($P_4$ הוא דו-צדדי, והמשלים של $P_4$ הוא $P_4$ עצמו).

**ג3.** נכון. נניח בשלילה שקיים עץ פורש $T=(V,E_T)$ של $G$ כך ש: $e=(x,y)\notin E_T$.

ב-$T$ קיים מסלול $P_{x,y}$ בין $x$ ל-$y$, ולכן $C=P_{x,y}+(x,y)$ הוא מעגל ב-$G$ שמכיל את הצלע $(x,y)$. אבל צלע היא גשר $\iff$ היא אינה נמצאת על אף מעגל. לכן $(x,y)$ אינה גשר, בסתירה לנתון.

עוד הוכחה: נניח בשלילה ש-$(x,y)\notin E_T$. אז $T$ הוא עץ פורש גם של $G-(x,y)$, ולכן $G-(x,y)$ קשיר, כלומר $(x,y)$ אינה גשר ב-$G$. סתירה.""",
      points=6),

    # ---------------- Q4 ----------------
    Q(4, "א", "proof", "euler_hamilton",
      r"(4+2+2 נק') בנו שני גרפים לא מכוונים: $G_1=(V,E_1)$ גרף קשיר ודו-צדדי, ו-$G_2=(V,E_2)$ גרף דו-צדדי אך לא קשיר, בעלי אותה סדרת דרגות: $3,2,2,2,2,2,2,2,2,2,1$." "\n\n"
      r"הראו שהמשלים של $G_1$ או של $G_2$ הוא בעל מסלול Euler. **אין** לצייר את המשלים של $G_1$ או $G_2$.",
      r"""**בניית $G_1$** (11 צמתים): מעגל באורך זוגי $C_{10}$ על הצמתים $v_1,\dots,v_{10}$, ובנוסף עלה $v_{11}$ המחובר ל-$v_1$. סדרת הדרגות: $\deg(v_1)=3$, $\deg(v_{11})=1$, ושאר 9 הצמתים בדרגה 2. הגרף קשיר, ודו-צדדי כי המעגל היחיד בו הוא $C_{10}$, מעגל זוגי.

**בניית $G_2$** (11 צמתים): $C_4$ עם עלה (דרגות $3,2,2,2,1$) וגרף $C_6$ זר לו (שישה צמתים בדרגה 2). לגרף אותה סדרת דרגות, הוא אינו קשיר, וכל מעגל בו זוגי ($C_4$ ו-$C_6$), ולכן הוא דו-צדדי.

**המשלים.** נבדוק את $\overline{G_1}$ (אותו חישוב נכון גם ל-$\overline{G_2}$). מספר הצמתים הוא $n=11$, ולכן $\deg_{\overline G}(v)=11-1-\deg_G(v)$:

$\deg_G(v_{11})=1\Rightarrow\deg_{\overline G}(v_{11})=11-2=9\ge\frac{11}2$

$\deg_G(v_1)=3\Rightarrow\deg_{\overline G}(v_1)=11-4=7\ge\frac{11}2$

$\forall i\ne1,11\Rightarrow\deg_G(v_i)=2\Rightarrow\deg_{\overline G}(v_i)=11-3=8\ge\frac{11}2$

לפי משפט Dirac $\overline G$ הוא גרף Hamilton, ולכן קשיר. בנוסף יש ב-$\overline G$ בדיוק 2 צמתים בדרגה אי-זוגית ($v_1$ ו-$v_{11}$).

מסקנה: ב-$\overline G$ יש מסלול Euler.""",
      points=8),
    Q(4, "ב", "computation", "euler_hamilton",
      r"(4+4+5+4 נק') יהי $G=(V,E)$ גרף לא מכוון שבציור הבא." "\n\n"
      r"**ב1.** (4 נק') האם לגרף $G$ יש גרף פורש איזומורפי ל-$C_{12}$?" "\n\n"
      r"**ב2.** (4 נק') האם המשלים של $G$ הוא גרף Euler?" "\n\n"
      r"**ב3.** (5 נק') חשבו את $\chi(G)$." "\n\n"
      r"**ב4.** (4 נק') האם במשלים של $G$ קיימים $P_4,\ C_4,\ C_5,\ K_4$ כתתי-גרפים מושרים?",
      r"""**ב1.** כן. יש ב-$G$ מעגל $C=C_{12}$ שעובר בכל הצמתים, ולכן $G$ הוא גרף Hamilton:

$C:\ v_1,v_7,v_8,v_2,v_3,v_9,v_{10},v_4,v_5,v_{11},v_{12},v_6,v_1$

**ב2.** $G$ הוא 3-רגולרי $\Rightarrow\overline G$ הוא 8-רגולרי $\Rightarrow$ לכל $v\in V$: $\deg_{\overline G}(v)=8\ge\frac{12}2$, ולכן $\overline G$ הוא גרף Hamilton (Dirac) ובפרט קשיר. כל דרגותיו זוגיות.

מסקנה: $\overline G$ הוא גרף Euler.

**ב3.** $E\ne\phi\Rightarrow\chi(G)\ge2$. ב-$G$ יש צביעה חוקית ב-2 צבעים: צבע 1 ל-$v_1,v_3,v_5,v_8,v_{10},v_{12}$ וצבע 2 ל-$v_2,v_4,v_6,v_7,v_9,v_{11}$. לכן $\chi(G)\le2$.

מסקנה: $\chi(G)=2$.

**ב4.** ב-$\overline G$ קיימים:

$P_4$: על הצמתים $v_7,v_9,v_1,v_{10}$ (הצלעות $(v_7,v_9),(v_9,v_1),(v_1,v_{10})$ ב-$\overline G$).

$K_4$: על הצמתים $v_1,v_3,v_5,v_{10}$ (אין ביניהם צלעות ב-$G$).

$C_4$: על הצמתים $v_1,v_4,v_2,v_5$ (ב-$G$ יש $2K_2$ מושרה: $(v_1,v_2)$ ו-$(v_4,v_5)$).

$C_5$: לא קיים. $\chi(G)=2$, כלומר $G$ דו-צדדי, ולכן אין ב-$G$ $C_5$ כתת-גרף מושרה. מכיוון ש-$\overline{C_5}\cong C_5$, גם ב-$\overline G$ אין $C_5$ כתת-גרף מושרה.""",
      points=17, contextId="c1"),
]

# ---------------------------------------------------------------------------------------------
# Phase 4: rubric / pitfalls / guided steps (ai-draft), every step derived from the stored solution.
# Every number and claim below is machine-checked in tools/verify/22B-B/verify.py (section "STEPS").
# ---------------------------------------------------------------------------------------------
IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


def num(prompt, answer, explain, tol=0):
    return {"type": "numeric", "prompt": prompt, "answer": answer, "tol": tol, "explain": explain}


def ch(prompt, options, correctId, explain):
    """options: the correct option is listed first in the source (id a); the UI shuffles."""
    return {"type": "choice", "prompt": prompt, "options": opts(*options), "correctId": correctId, "explain": explain}


def bug(line_list, i, new):
    b = list(line_list)
    b[i] = new
    return b


Q1C_LINES = [
    r"$G$ יער, ולכן כל רכיב קשירות $T_i=(V_i,E_i)$ שלו הוא עץ.",
    r"בעץ מתקיים $|E_i|=|V_i|-1$.",
    r"הצלעות של $G$ הן האיחוד הזר של $E_1,\dots,E_k$, ולכן $|E|=|E_1|+\dots+|E_k|$.",
    r"$|E|=(|V_1|-1)+\dots+(|V_k|-1)=|V|-k=n-k$.",
]
Q1C_BUG = bug(Q1C_LINES, 3, r"$|E|=(|V_1|-1)+\dots+(|V_k|-1)=|V|-1=n-1$.")

Q3C3_LINES = [
    r"נניח בשלילה שקיים עץ פורש $T$ של $G$ כך ש-$e=(x,y)\notin E_T$.",
    r"ב-$T$ קיים מסלול $P_{x,y}$ בין $x$ ל-$y$.",
    r"$C=P_{x,y}+(x,y)$ הוא מעגל ב-$G$ שמכיל את הצלע $(x,y)$.",
    r"צלע היא גשר אם ורק אם היא אינה נמצאת על אף מעגל, ולכן $(x,y)$ אינה גשר, בסתירה לנתון.",
]

ENRICH = {
    (1, "א"): dict(
        rubric=rub(("הגדרת תמורה (לפי ההרצאה)", 4),
                   (r'הדבקת "ab" לאות אחת $x$ וקבלת תמורות של $\{x,c,d,e,f\}$: $5!$', 3),
                   (r"חיסור מכלל התמורות והתוצאה $6!-5!=600$", 2)),
        pitfalls=[r'לחסר $2\cdot5!$ (שני הסדרים של a ו-b) במקום $5!$, כשהרצף הוא רק "ab".',
                  r"לענות $5!=120$, שהוא מספר התמורות שכן מכילות את הרצף, ולשכוח לחסר אותו מ-$6!$."],
        steps=[
            ch("איזו שיטה משמש הפתרון הרשמי לספירת התמורות שבהן **לא** מופיע הרצף?",
               [r"סופרים את התמורות שבהן הרצף מופיע (מדביקים אותו לאות אחת) ומחסירים מ-$6!$",
                r"בוחרים מקום לאות a ואז מסדרים את שאר האותיות בלי הגבלה",
                r"מחלקים את $6!$ ב-2", r"סופרים ישירות רק את התמורות ללא הרצף לפי מיקום האות a"],
               "a", r'הפתרון מגדיר $x=$"ab" ומחסיר את $5!$ מ-$6!$.'),
            num(r'כמה תמורות של $\{a,b,c,d,e,f\}$ מכילות את הרצף "ab"?', 120,
                r"הן תמורות של 5 עצמים $\{x,c,d,e,f\}$: $5!=120$."),
            num(r'בכמה תמורות לא מופיע הרצף "ab"?', 600, "$720-120=600$."),
        ]),
    (1, "ב"): dict(
        rubric=rub(("הגדרת פונקציית Euler (לפי ההרצאה)", 4),
                   (r"המקרה $n=1$: $\phi(1)=1$ ולכן $1\mid\phi(1)$", 1),
                   (r"לכל $n\ge2$: $\phi(n)\le n-1$, ולכן $n\nmid\phi(n)$", 2),
                   (r"מסקנה: רק $n=1$", 1)),
        pitfalls=[r"לשכוח לבדוק את $n=1$ בנפרד: שם החסם $\phi(n)\le n-1$ אינו נכון.",
                  r"לחשוב ש-$n\mid\phi(n)$ מתקיים עבור $n$ ראשוני, כי $\phi(p)=p-1$ ו-$p\nmid p-1$."],
        steps=[
            num(r"מהו $\phi(1)$?", 1, r"המספר היחיד בין 1 ל-1 הוא 1, והוא זר ל-1."),
            ch(r"איזו טענה משמשת את הפתרון כדי לשלול כל $n\ge2$?",
               [r"$1\le\phi(n)\le n-1$, ולכן $n$ אינו מחלק את $\phi(n)$",
                r"$\phi(n)\ge n$ לכל $n\ge2$", r"$\phi(n)=n-1$ לכל $n\ge2$", r"$\phi(n)$ תמיד אי-זוגי"],
               "a", r"$n$ לא זר לעצמו כש-$n\ge2$, ולכן $\phi(n)\le n-1$; מספר חיובי הקטן מ-$n$ אינו מתחלק ב-$n$."),
            num(r"כמה מספרים $n\ge1$ מקיימים $n\mid\phi(n)$?", 1, "רק $n=1$."),
        ]),
    (1, "ג"): dict(
        rubric=rub(("הגדרת עץ ויער (לפי ההרצאה)", 4),
                   (r"כל רכיב קשירות של יער הוא עץ, ולכן $|E_i|=|V_i|-1$", 2),
                   (r"סכימה על הרכיבים: $|E|=\sum|V_i|-k$", 2),
                   (r"מסקנה $|E|=n-k$", 1)),
        pitfalls=[r"לכתוב $|E|=n-1$ (נוסחת העץ) במקום להחסיר $k$.",
                  "להחסיר 1 פעם אחת בלבד במקום פעם אחת לכל רכיב."],
        steps=[
            ch("איזו עובדה על רכיבי הקשירות של יער משמשת בפתרון?",
               [r"כל רכיב קשירות הוא עץ, ולכן $|E_i|=|V_i|-1$", r"כל רכיב קשירות הוא גרף שלם",
                r"בכל רכיב $|E_i|=|V_i|$", r"בכל רכיב $|E_i|=|V_i|+1$"],
               "a", "יער הוא גרף חסר מעגלים, ורכיב קשיר וחסר מעגלים הוא עץ."),
            num(r"ליער על $n=20$ צמתים יש $k=5$ רכיבי קשירות. כמה צלעות יש בו?", 15, "$n-k=20-5=15$."),
            {"type": "findbug", "prompt": "באיזו שורה של ההוכחה יש טעות?", "lines": Q1C_BUG, "bugIndex": 3,
             "explain": r"מחסירים 1 מכל אחד מ-$k$ הרכיבים, ולכן הסכום הוא $|V|-k$ ולא $|V|-1$."},
        ]),
    (2, "א"): dict(
        rubric=rub((r"שימוש בבינום של Newton לסכום הראשון: $(7+3)^n=10^n$", 3),
                   (r"הוצאת $5^n$ ושימוש בבינום לסכום השני: $5^n(5+3)^n$, ולכן $f(n)=2^{4n}5^{2n}$", 3),
                   (r"מחלק אי-זוגי הוא $5^\alpha$ עם $0\le\alpha\le2n$, כלומר $2n+1$ מחלקים", 3)),
        pitfalls=[r"לשכוח ש-$5^{n+k}=5^n\cdot5^k$ ולא להוציא את $5^n$ מחוץ לסכום.",
                  "לספור את כל המחלקים של $f(n)$ במקום רק את האי-זוגיים."],
        steps=[
            num(r"מהו הסכום הראשון $\sum_{k=0}^{n}\binom nk7^k3^{n-k}$ עבור $n=2$?", 100, r"$(7+3)^2=100$."),
            num(r"מהו הסכום השני $\sum_{k=0}^{n}\binom nk5^{n+k}3^{n-k}$ עבור $n=2$?", 1600,
                r"$5^2\cdot(5+3)^2=25\cdot64=1600$."),
            ch(r"מהי הצורה של $f(n)$ אחרי הפישוט?",
               [r"$2^{4n}\cdot5^{2n}$", r"$2^{3n}\cdot5^{2n}$", r"$2^{4n}\cdot5^{n}$", r"$10^{3n}$"], "a",
               r"$f(n)=10^n\cdot5^n\cdot8^n=2^n5^n\cdot5^n\cdot2^{3n}=2^{4n}5^{2n}$."),
            num(r"כמה מחלקים אי-זוגיים יש ל-$f(3)$?", 7, r"$2n+1=7$ (המחלקים $5^0,\dots,5^6$)."),
        ]),
    (2, "ב"): dict(
        rubric=rub(("משוואה אופיינית $(r-3)^2=0$ ושורש כפול $r=3$", 2),
                   (r"צורה כללית $a_n=C_1 3^n+C_2 n3^n$", 2),
                   (r"פתרון התנאים ההתחלתיים: $C_1=5,\ C_2=7$", 3),
                   (r"חסם $a_n\le12n3^n\le12n5^n$ ומסקנת ה-$O$", 3)),
        pitfalls=[r"לכתוב $C_1 3^n+C_2 3^n$ לשורש כפול, בלי הגורם $n$.",
                  r"להוכיח את ה-$O$ בלי לציין קבוע ו-$n\ge1$."],
        steps=[
            num(r"מהו השורש (הכפול) של המשוואה האופיינית $r^2=6r-9$?", 3, r"$(r-3)^2=0$."),
            num(r"מהו $C_2$ אחרי הצבת $a_0=5,\ a_1=36$?", 7, r"$C_1=5$ ו-$3C_1+3C_2=36$, ולכן $C_2=7$."),
            num(r"מהו $a_2$ לפי הנוסחה המפורשת (וגם לפי הנסיגה)?", 171, r"$(5+14)\cdot9=171=6\cdot36-9\cdot5$."),
            num(r"מהו הקבוע $c$ הקטן ביותר שהטיעון בפתרון נותן בחסם $a_n\le c\cdot n\cdot3^n$ לכל $n\ge1$?", 12,
                r"$5\le5n$, ולכן $a_n\le5n3^n+7n3^n=12n3^n$."),
        ]),
    (2, "ג"): dict(
        rubric=rub((r"סימון $x_1,\dots,x_4$ והצגת הבעיה כאי-שוויון עם חסמים תחתונים", 2),
                   (r"הוספת משתנה עודף $y$ והזזת המשתנים: סכום $=6$ עם 5 משתנים", 2),
                   (r"$D(5,6)=\binom{10}4=210$", 2)),
        pitfalls=[r"לשכוח את המשתנה העודף $y$ (המילה יכולה להיות קצרה מ-23) ולפתור שוויון עם 4 משתנים בלבד.",
                  r"לחשב את הצד הימני $23-3-5-5-4$ בצורה שגויה."],
        steps=[
            num("לאחר הוספת משתנה עודף והזזת כל החסמים התחתונים, מהו סכום 5 המשתנים החדשים?", 6, "$23-(3+5+5+4)=6$."),
            num("כמה משתנים יש במשוואה אחרי הוספת המשתנה העודף?", 5, r"$y_1,y_2,y_3,y_4,y$."),
            num("כמה מילים אפשריות?", 210, r"$\binom{6+5-1}{5-1}=\binom{10}4=210$."),
        ]),
    (3, "א"): dict(
        rubric=rub((r"פתרון $\binom n2=190$ ומציאת $n=20$", 4),
                   ("10 מספרים זוגיים ו-10 אי-זוגיים", 2),
                   (r"בחירת זוג זוגי וזוג אי-זוגי: $\binom{10}2\cdot\binom{10}2$", 4),
                   (r"התוצאה $2025$", 2)),
        pitfalls=[r"להשאיר את שורש משוואת הריבוע השלילי $n=-19$.",
                  r"לחשב $\binom{20}{2}\cdot\binom{20}{2}$ ולא לפצל לזוגיים ואי-זוגיים."],
        steps=[
            num(r"מהו $n$ (נתון $\binom n2=190$)?", 20, r"$n^2-n-380=0\Rightarrow n=20$."),
            num(r"בכמה דרכים בוחרים 2 מספרים זוגיים מ-$\{2,4,\dots,20\}$?", 45, r"$\binom{10}2=45$."),
            num("כמה תתי-קבוצות מתאימות יש?", 2025, r"$45\cdot45=2025$."),
        ]),
    (3, "ב"): dict(
        rubric=rub((r'$\{1,2,3\}$ מועברת על $\{1,2,3\}$ בהתאמה חח"ע ועל: $3!$', 2),
                   (r"$\{4,\dots,8\}$ מועברת על $\{4,5,6\}$ על: $3^5-3\cdot2^5+3=150$", 3),
                   (r"מכפלה: $900$", 2)),
        pitfalls=[r"לשכוח שהפונקציה כולה צריכה להיות על, ולספור רק $3^5$ אפשרויות לחלק השני.",
                  r"להשתמש ב-$3^5$ במקום בנוסחת הפונקציות על."],
        steps=[
            num(r'בכמה דרכים $f$ יכולה לפעול על $\{1,2,3\}$ (חח"ע ועל $\{1,2,3\}$)?', 6, r"$3!=6$."),
            num(r"כמה פונקציות על יש מ-$\{4,5,6,7,8\}$ אל $\{4,5,6\}$?", 150, r"$3^5-3\cdot2^5+3\cdot1^5=243-96+3=150$."),
            num("כמה פונקציות מתאימות יש בסך הכול?", 900, r"$6\cdot150=900$."),
        ]),
    (3, "ג"): dict(
        rubric=rub((r"ג1: דוגמה נגדית $C_5$ עם קוטר 2 שאינו דו-צדדי", 2),
                   (r"ג2: דוגמה נגדית $P_4$ שהמשלים שלו איזומורפי אליו וקוטר שניהם 3", 2),
                   (r"ג3: הוכחה שגשר נמצא בכל עץ פורש", 2)),
        pitfalls=[r"לבחור דוגמה נגדית ל-ג1 שהיא דו-צדדית שלמה (למשל $C_4$), שאינה מפריכה.",
                  "בהוכחת ג3: לשכוח שגשר הוא צלע שאינה על אף מעגל."],
        steps=[
            ch(r"איזה גרף הוא דוגמה נגדית לטענה ג1 (קוטר 2 ואינו דו-צדדי שלם)?",
               [r"$C_5$", r"$C_4$", r"$P_4$", r"$K_3$"], "a",
               r"$\operatorname{diam}(C_5)=2$ ו-$C_5$ אינו דו-צדדי. $C_4=K_{2,2}$ דו-צדדי שלם; $\operatorname{diam}(P_4)=3$; $\operatorname{diam}(K_3)=1$."),
            ch(r"איזה גרף דו-צדדי מקיים $\operatorname{diam}(\overline G)=\operatorname{diam}(G)$ ומפריך את ג2?",
               [r"$P_4$", r"$C_5$", r"$P_3$", r"$C_4$"], "a",
               r"$\overline{P_4}\cong P_4$. $C_5$ אינו דו-צדדי; המשלים של $P_3$ וגם של $C_4$ אינו קשיר."),
            ch("באיזו שיטה הפתרון הרשמי מוכיח את ג3?",
               ["בשלילה: מניחים עץ פורש שאינו מכיל את הגשר ומקבלים מעגל דרך הגשר", "אינדוקציה על מספר הצמתים",
                "שובך היונים", "ספירה כפולה של הדרגות"], "a",
               r"הפתרון מניח שהצלע אינה בעץ פורש $T$ ומגיע לסתירה."),
            {"type": "order", "prompt": "סדרו את ההוכחה של ג3.", "lines": Q3C3_LINES,
             "explain": "ההנחה, מסלול בעץ, המעגל שנוצר ממנו, ואז הסתירה."},
        ]),
    (4, "א"): dict(
        rubric=rub(("בניית $G_1$ קשיר ודו-צדדי עם סדרת הדרגות הנתונה", 4),
                   ("בניית $G_2$ דו-צדדי לא קשיר עם אותה סדרה", 2),
                   ("הצגת דרגות במשלים, משפט Dirac ושני צמתים בדרגה אי-זוגית: מסלול Euler", 2)),
        pitfalls=["לצייר את המשלים, למרות שהשאלה אוסרת זאת.",
                  "לבנות גרף עם פחות מ-11 צמתים: סדרת הדרגות כוללת 11 איברים."],
        steps=[
            num(r"מהי הדרגה במשלים של צומת שדרגתו ב-$G$ היא 1 (ב-11 צמתים)?", 9, r"$11-1-1=9$."),
            num(r"מהי הדרגה במשלים של הצומת בדרגה 3?", 7, r"$11-1-3=7$."),
            num("כמה צמתים בדרגה אי-זוגית יש במשלים?", 2, "רק הצמתים בדרגות 7 ו-9; שאר הצמתים בדרגה 8."),
            ch("איזו הלכה מבטיחה מסלול Euler במשלים?",
               ["הגרף קשיר (לפי Dirac) ובדיוק שני צמתים בו בדרגה אי-זוגית", "הגרף הוא גרף Hamilton בלבד",
                "יש בגרף ארבעה צמתים בדרגה אי-זוגית", "מספר הצלעות בגרף זוגי"], "a",
               r"Hamilton בלבד אינו מספיק (למשל ב-$K_4$ אין מסלול Euler); ארבעה צמתים אי-זוגיים אינם מאפשרים מסלול Euler."),
        ]),
    (4, "ב"): dict(
        rubric=rub((r"ב1: מעגל Hamilton ב-$G$, ולכן גרף פורש איזומורפי ל-$C_{12}$", 4),
                   (r"ב2: $\overline G$ הוא 8-רגולרי, Hamilton לפי Dirac (קשיר) וכל הדרגות זוגיות", 4),
                   (r"ב3: $\chi\ge2$ וצביעה חוקית ב-2 צבעים, ולכן $\chi=2$", 5),
                   (r"ב4: $P_4,K_4,C_4$ מופיעים ו-$C_5$ אינו מופיע (כי $G$ דו-צדדי)", 4)),
        pitfalls=[r"לבדוק את $\chi$ של $\overline G$ במקום של $G$.",
                  r"לטעון שיש $C_5$ מושרה במשלים, למרות ש-$\overline{C_5}\cong C_5$ ו-$G$ אינו מכיל $C_5$."],
        steps=[
            ch(r"ל-$G$ יש גרף פורש איזומורפי ל-$C_{12}$. מהו הנימוק בפתרון הרשמי?",
               [r"יש ב-$G$ מעגל Hamilton, כלומר מעגל שעובר בכל 12 הצמתים", r"$G$ הוא 3-רגולרי", r"$G$ דו-צדדי",
                r"ל-$G$ יש בדיוק 12 צלעות"], "a",
               r"מעגל Hamilton ב-$G$ הוא מעגל על 12 צמתים, כלומר גרף פורש איזומורפי ל-$C_{12}$. ל-$G$ יש 18 צלעות."),
            num(r"מהי הדרגה של כל צומת ב-$\overline G$?", 8, r"$G$ הוא 3-רגולרי על 12 צמתים: $12-1-3=8$."),
            num(r"מהו $\chi(G)$?", 2, "G דו-צדדי: מחלקות הצבעים בפתרון הן 2."),
            ch(r"איזה מבין הגרפים $P_4,\ C_4,\ C_5,\ K_4$ **אינו** מופיע כתת-גרף מושרה ב-$\overline G$?",
               [r"$C_5$", r"$P_4$", r"$C_4$", r"$K_4$"], "a",
               r"$G$ דו-צדדי, ולכן אין בו $C_5$ מושרה, ו-$\overline{C_5}\cong C_5$, ולכן גם אין במשלים."),
        ]),
}

for q in questions:
    e = ENRICH.get((q["num"], q.get("part")))
    if e is None or q.get("hold"):
        continue
    q["rubric"] = e["rubric"]
    q["rubricSource"] = "ai-draft"
    q["pitfalls"] = e["pitfalls"]
    q["steps"] = e["steps"]
    q["stepsSource"] = "ai-draft"


exam = {
    "examCode": "22B-B",
    "examLabel": "אביב 2022, מועד ב'",
    "year": 2022,
    "examDate": "03.07.2022",
    "sourceFile": "22B-B exam (typed, pp.1-8)",
    "solutionFile": "22B-B handwritten solution (same PDF)",
    "contexts": {
        "c1": {"kind": "image", "title": "הגרף G (שאלה 4 סעיף ב)",
               "image": "images/exams/22B-B-Q4b.png", "caption": "הגרף G על 12 צמתים"},
    },
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
