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
