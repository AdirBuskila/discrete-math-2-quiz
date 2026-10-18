# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-B.json -- discrete-math-2, spring 2024, moed B (05.08.2024).
Run: PYTHONUTF8=1 py -W error::SyntaxWarning tools/gen/gen_24B-B.py

Source: 24B-B, 5 pp (header + Q1 on p.1, then Q2-Q4, each followed by its typed official solution, 25 pts each).
Header: course 20068, 3 hours, formula sheet. Q1 = three "define the term, then answer a short question" parts.
Q2-Q4 have numbered sub-questions (1, 2, 3), each one item; Q2.2 (a,b) and Q2.3 (a,b) are single items
that keep both sub-parts. Parts of Q2-Q4 use the letters a, b, c for the numbers 1, 2, 3.

Transcription notes (printed slips, transcribed as printed unless said otherwise)
- Q3.1 (p.3): the solution says k = 9 objects remain; 17 - 5*2 = 7, and the printed D(5,7) = C(11,4) = 330 uses 7.
- Q3.2 (p.4): the solution line says a_1 = 60; the given value (and the equation 2C1+2C2+54 = 56 beside it) is 56.
- Q4.2 (p.5): the first factor of phi(m) is printed 7^(2n); m has 7^n, and the final 2^(5n+2)*3*5^(n-1)*7^(n-1)
  and 2n^2 are right.
- Q1c (p.2): the complement of T2 = K_{1,3} is printed with the same edge list as T2 (should be the triangle bcd);
  the conclusion (only P4) is right.
- Q2.3a (p.3): the example for "not increasing" is printed "6 < 5 but phi(6) = 2 < 4 = phi(5)" in a mirrored
  line; transcribed as 5 < 6 but phi(5) = 4 > 2 = phi(6).
- Q3.3 (p.4): printed without "prove or disprove", the solution gives a counterexample (P3), so the claim is false.
- Definitions asked for in Q1 are answered "according to the lecture" (no text).

Checks (tools/verify/24B-B/verify.py, brute force + sympy + networkx):
Q1a 9, Q1b phi(phi(5^a)) = 40*5^(a-3) for a=3..11, Q1c only P4 for n=2..9 (nonisomorphic trees), Q2.1 72, Q2.2a 56,
Q2.2b 120, Q2.3 phi values and 121^100, 81^50 mod 500 = 1, 1, Q3.1 330, Q3.2 closed form 2^n+18*3^n for n<40,
Q3.3 P3 is a counterexample, Q4.1 120, Q4.2 odd-divisor count 2n^2 (n=6..8 by factoring), Q4.3 all connected graphs n<=7.
"""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-B.json"


def Q(num, part, kind, topic, question, solution, **kw):
    q = {"num": num, "part": part, "kind": kind, "topic": topic, "question": question, "solution": solution,
         "solutionSource": "lecturer-solution", "official": True, "confidence": "high"}
    q.update(kw)
    return q


questions = [
    Q(1, "א", "computation", "permutations_arrangements",
      "**א1.** (8 נק') המונח: תמורה אי-סדר מלא של קבוצה.\n\n"
      "**א2.** שאלה: בכמה תמורות אי-סדר מלא של $\\{1,2,3,4,5,6\\}$ המספרים $1,2,3,4$ מופיעים ב-4 המקומות הראשונים?",
      r"""**א1. הגדרה:** לפי ההרצאה.

**א2.** כל תמורה שמקיימת את התנאים היא בצורה $a,b,c,d,6,5$, כאשר $a,b,c,d$ היא תמורה אי-סדר מלא של הקבוצה $\{1,2,3,4\}$. מספר התמורות אי-סדר מלא של $\{1,2,3,4\}$ שווה ל: $D_4=4!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}\right)=9$.

מסקנה: התשובה היא $9$.""",
      points=8),
    Q(1, "ב", "proof", "euler_phi",
      r"**ב1.** (8 נק') המונח: הפונקציה $\phi$ של Euler." "\n\n"
      r"**ב2.** שאלה: יהיו $\alpha\in\mathbb{N}$ וגם $n=5^\alpha>100$. הראו ש: $40\mid m$ כאשר $m=(\phi\circ\phi)(n)$.",
      r"""**ב1. הגדרה:** לפי ההרצאה.

**ב2.** לפי הנוסחה נקבל: $\phi(n)=5^\alpha\cdot\left(1-\frac15\right)=5^{\alpha-1}\cdot4$

ומכיוון ש: $\gcd\left(5^{\alpha-1},4\right)=1$ נשיג ש:

$$m=(\phi\circ\phi)(n)=\phi(\phi(n))=\phi\left(5^{\alpha-1}\cdot4\right)=\phi\left(5^{\alpha-1}\right)\cdot\phi(4)=2\cdot5^{\alpha-1}\cdot\left(1-\frac15\right)=8\cdot5^{\alpha-2}=8\cdot5\cdot5^{\alpha-3}=40\cdot5^{\alpha-3}$$

לכן $40\mid m$, משום ש: $n=5^\alpha>100$ וגם $\alpha\in\mathbb{N}$ מחייב $\alpha-3\in\mathbb{N}$.""",
      points=8),
    Q(1, "ג", "computation", "trees",
      "**ג1.** (9 נק') המונחים: עץ ויער.\n\n"
      "**ג2.** שאלה: מצאו כל עץ $T=(V,E)$ בעל $|V|=n>1$ צמתים, כך שהמשלים שלו גם עץ.",
      r"""**ג1. הגדרות:** לפי ההרצאה.

**ג2.** נסמן ב-$H=(V,U)$ את המשלים של $T$. מכיוון ש: $T$ וגם $H$ הם עצים, נקבל $|E|=|U|=n-1$. בנוסף ידוע ש: $|E|+|U|=n(n-1)/2$ ולכן נשיג ש:

$2(n-1)=n(n-1)/2\ \leftarrow\ n=4$ (משום ש: $1<n$).

קיימים רק 2 עצים בעלי 4 צמתים:

$T_1=P_4=(\{a,b,c,d\},\{(a,b),(b,c),(c,d)\})$ והמשלים שלו הוא $H_1=P_4=(\{a,b,c,d\},\{(d,b),(a,c),(a,d)\})$ וגם הוא עץ.

$T_2=K_{1,3}=(\{a,b,c,d\},\{(a,b),(a,c),(a,d)\})$ והמשלים שלו הוא $H_2=(\{a,b,c,d\},\{(a,b),(a,c),(a,d)\})$ וגם הוא אינו עץ. (כך מודפס בפתרון המקורי; רשימת הצלעות של $H_2$ זהה שם לזו של $T_2$.)

מסקנה: $T=P_4$ הוא הפתרון היחיד.""",
      points=9),

    Q(2, "א", "computation", "sum_product_inclusion",
      r"(8 נק') מהו מספר התמורות של הקבוצה $\{1,2,3,4,5\}$ שמקיימות **לפחות אחד** מהתנאים הבאים: המספרים $1,2$ נמצאים בסמיכות **או** המספרים $4,5$ נמצאים בסמיכות?",
      r"""נסמן ב: $A_1$ קבוצת התמורות של $\{1,2,3,4,5\}$ שבהן $1,2$ נמצאים בסמיכות, $A_2$ קבוצת התמורות של $\{1,2,3,4,5\}$ שבהן $4,5$ נמצאים בסמיכות.

אז נקבל: $|A_1|=|A_2|=4!\cdot2=48$ וגם $|A_1\cap A_2|=3!\cdot2!\cdot2!=24$.

לפי עקרון ההכלה וההדחה נקבל $|A_1\cup A_2|=|A_1|+|A_2|-|A_1\cap A_2|=72$.

מסקנה: התשובה היא $72$.""",
      points=8),
    Q(2, "ב", "computation", "function_counting",
      "(4+4 נק') תהיינה הקבוצות $A=\\{a,b,c,d\\}$ וגם $B=\\{x,y,z\\}$.\n\n"
      "**(א)** כמה תתי-קבוצות $M$ של $A\\times B$ מקיימות התנאים הבאים: $|M|=5$ וגם בכל איבר של $M$ לא מופיעה $z$.\n\n"
      "**(ב)** כמה סדרות שונות בנות 5 אותיות אפשר ליצור מ: $A\\cup B$ כך ש: כל אות מופיעה פעם אחת בסדרה וגם כל סידרה מתחילה ב-$ax$ או ב-$by$?",
      r"""**(א)** לפי הנתון: $M\subseteq\{x,y\}\times\{a,b,c,d\}$ וגם $|M|=5$. מכיוון ש: $|\{x,y\}\times\{a,b,c,d\}|=8$ נשיג שיש $C(8,5)=C(8,3)=56$ תתי-קבוצות $M$ מתאימות.

**(ב)** כל סדרה מתאימה היא בצורה:

$ax\,mnp$ כאשר $mnp$ היא חליפה בגודל 3 של $\{y,z,b,c,d\}$ (ויש 60 אופציות)

או

$by\,mnp$ כאשר $mnp$ היא חליפה בגודל 3 של $\{x,z,a,c,d\}$ (ויש 60 אופציות).

מסקנה: התשובה היא $120$, משום שאין סדרות שמתחילות גם ב: $ax$ וגם ב: $by$.""",
      points=8),
    Q(2, "ג", "computation", "euler_phi",
      r"**(א)** (3 נק') האם הפונקציה $\phi$ של Euler היא: חד-חד-ערכית; עולה; יורדת?" "\n\n"
      r"**(ב)** (6 נק') חשבו את $\phi(500)$ וגם $121^{100}\pmod{500}+81^{50}\pmod{500}$.",
      r"""**(א)** הפונקציה $\phi$ של Euler היא:

לא חד-חד-ערכית, משום ש (לדוגמה): $2\ne1$ אך $\phi(2)=\phi(1)=1$.

לא עולה, משום ש (לדוגמה): $5<6$ אך $\phi(5)=4>2=\phi(6)$.

לא יורדת משום ש (לדוגמה): $4<5$ אך $\phi(4)=2<4=\phi(5)$.

**(ב)** משום ש: $500=2^2\cdot5^3$ נקבל $\phi(500)=2^2\cdot5^3\cdot\left(1-\frac12\right)\cdot\left(1-\frac15\right)=200$.

לפי משפט Euler נשיג ש:

$121^{100}\pmod{500}=11^{200}\pmod{500}=11^{\phi(500)}\pmod{500}=1$

$81^{50}\pmod{500}=3^{200}\pmod{500}=3^{\phi(500)}\pmod{500}=1$

מכיוון ש: $\gcd(11,500)=1=\gcd(3,500)$.

מסקנה: התשובה היא $2$ (וגם $\phi(500)=200$).""",
      points=9),

    Q(3, "א", "computation", "selections_repetition",
      r"(5 נק') בכמה אופנים ניתן לפזר 17 עצמים זהים ל: 5 תאים שונים כך שבכל תא יהיו לפחות 2 עצמים?",
      r"""מכניסים בכל תא 2 עצמים, אז נשאר לפזר $k=9$ עצמים זהים ל: $n=5$ תאים שונים (כך מודפס בפתרון המקורי; $17-5\cdot2=7$, וכך גם בחישוב הבא).

לכן התשובה היא: $D(5,7)=C(11,4)=330$.""",
      points=5),
    Q(3, "ב", "computation", "recurrences",
      r"(15 נק') מצאו את הצורה המפורשת של $a_n$ והראו ש: $a_n=O(3^n)$, כאשר $a_n=4a_{n-1}-4a_{n-2}+2\cdot3^n,\ n\ge2$ וגם $a_0=19,\ a_1=56$.",
      r"""המשוואה האופיינית היא: $x^2-4x+4=0$ והשורשים שלה הן $x_1=x_2=2$.

לכן הפתרון הכללי של $a_n=4a_{n-1}-4a_{n-2}$ הוא $a_n^{(h)}=C_1\cdot2^n+C_2\cdot n\cdot2^n$.

פתרון פרטי של הרקורסיה $(*)\ a_n=4a_{n-1}-4a_{n-2}+2\cdot3^n$ הוא בצורה $a_n^{(p)}=A\cdot3^n$.

נציב $a_n^{(p)}$ ב-$(*)$ ונקבל $A\cdot3^n=4\cdot A\cdot3^{n-1}-4\cdot A\cdot3^{n-2}+2\cdot3^n\iff A=18$.

אז $a_n=a_n^{(h)}+a_n^{(p)}=C_1\cdot2^n+C_2\cdot n\cdot2^n+18\cdot3^n$.

ידוע ש: $a_0=19,\ a_1=60$ (כך מודפס בפתרון המקורי; הערך הנתון בשאלה הוא $a_1=56$, וכך גם במשוואה הבאה) $\iff C_1+18=19$ וגם $2C_1+2C_2+54=56$

ונשיג ש: $C_1=1,\ C_2=0$ ולכן הצורה המפורשת של $a_n$ היא $a_n=2^n+18\cdot3^n$.

מכיוון ש: $2^n\le3^n$ לכל $n\in\mathbb{N}$, נקבל $a_n\le19\cdot3^n$ לכל $n\in\mathbb{N}$.

מסקנה: $a_n=O(3^n)$.""",
      points=15),
    Q(3, "ג", "truefalse", "graph_basics",
      r"(5 נק') לא קיים גרף לא מכוון $G=(V,E)$ בעל עלים כך ש: כל העלים של $G$ הם גם כל העלים במשלים של $G$.",
      r"""**הגדרה:** לפי ההרצאה.

קיים: $G=P_3=(\{a,b,c\},\{(a,b),(b,c)\})$ שבו **רק** $a,c$ הם עלים והמשלים של $G$ הוא $H=(\{a,b,c\},\{(a,c)\})$ ובו **רק** $a,c$ הם עלים.

לכן הטענה אינה נכונה.""",
      verdict=False, points=5),

    Q(4, "א", "computation", "combinations_subsets",
      r"(9 נק') תהי $A=\{1,2,3,\dots,n\}$, כאשר $n>2$. אם לקבוצה $A$ יש 512 תתי-קבוצות בגודל זוגי, חשבו את מספר תתי-הקבוצות $B$ של $A$ שמכילות בדיוק 2 מספרים ראשונים מ-$A$ וגם 3 מספרים לא ראשונים מ-$A$.",
      r"""נתון ש: $2^{n-1}=512$ שמתקיים עבור $n=10$; כלומר $A=\{1,2,\dots,10\}$.

ב-$A$ יש 4 מספרים ראשונים: $2,3,5,7$ וגם 6 לא ראשונים: $1,4,6,8,9,10$.

כל תת-קבוצה מתאימה היא בצורה: $B=B_1\cup B_2$, כאשר

$|B_1|=2$ וגם $B_1\subseteq\{2,3,5,7\}$ (ויש $C(4,2)=6$ אופציות)

$|B_2|=3$ וגם $B_2\subseteq\{1,4,6,8,9,10\}$ (ויש $C(6,3)=20$ אופציות)

מסקנה: התשובה היא: $120$.""",
      points=9),
    Q(4, "ב", "computation", "euler_phi",
      "(10 נק') יהי $n\\in\\mathbb{N}$, $5<n$. חשבו את מספר המחלקים האי-זוגיים של $\\phi(m)$, כאשר\n"
      r"$$m=\sum_{k=0}^{n}\binom nk7^{n+k}3^{n-k}*\sum_{k=0}^{n}\binom nk2^{n+k}6^{n-k}$$",
      r"""לפי הבינום של Newton נקבל

$$m=7^n\cdot2^n\cdot\sum_{k=0}^{n}\binom nk7^k3^{n-k}\cdot\sum_{k=0}^{n}\binom nk2^k6^{n-k}=2^{5n}\cdot5^n\cdot7^n$$

ואז $\phi(m)=2^{5n}\cdot5^n\cdot7^{2n}\cdot\left(1-\frac12\right)\cdot\left(1-\frac15\right)\cdot\left(1-\frac17\right)=2^{5n+2}\cdot3\cdot5^{n-1}\cdot7^{n-1}$ (הביטוי $7^{2n}$ מודפס כך בפתרון המקורי; השוויון האחרון נכון עבור $7^n$).

כל מחלק אי-זוגי של $\phi(m)$ הוא בצורה $d=3^a\cdot5^b\cdot7^c$, כאשר $a\in\{0,1\}$ וגם $c,b\in\{0,1,\dots,n-1\}$.

מסקנה: למספר $\phi(m)$ יש $2n^2$ מחלקים אי-זוגיים.""",
      points=10),
    Q(4, "ג", "proof", "trees",
      r"(6 נק') יהי $G=(V,E)$ גרף בלתי מכוון וקשיר עם $|V|=n\ge2$. הראו כי: אם $G$ הוא עץ, אז מתקיים $\sum\{\deg(v):v\in V\}=2n-2$. האם קיים $G$ ששונה מעץ כך שעבורו מתקיים $\sum\{\deg(v):v\in V\}=2n-2$?",
      r"""אם $G$ הוא עץ, אז $|E|=n-1$ ולכן (לפי משפט הדרגות) נקבל

$$\sum\{\deg(v):v\in V\}=2|E|=2n-2$$

לא קיים כי:

$G$ קשיר וגם $\sum\{\deg(v):v\in V\}=2n-2\ \leftarrow\ G$ קשיר וגם $|E|=n-1$.

לכן $G$ חייב להיות עץ.""",
      points=6),
]

# ---- steps / rubric / pitfalls (ai-draft); every expected value is asserted in tools/verify/24B-B/steps_verify.py ----
IDS = "abcdefgh"


def ch(prompt, right, wrongs, explain, pos=0):
    """choice step: the right option is placed at index `pos`, the wrong ones fill the rest in order."""
    vals = list(wrongs)
    vals.insert(pos, right)
    return {"type": "choice", "prompt": prompt, "explain": explain, "correctId": IDS[pos],
            "options": [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]}


def num(prompt, answer, explain, tol=0):
    return {"type": "numeric", "prompt": prompt, "answer": answer, "tol": tol, "explain": explain}


def order(prompt, lines, explain):
    return {"type": "order", "prompt": prompt, "lines": lines, "explain": explain}


def bug(prompt, lines, bug_index, explain):
    return {"type": "findbug", "prompt": prompt, "lines": lines, "bugIndex": bug_index, "explain": explain}


def rub(*items):
    return [{"text": t, "points": p} for t, p in items]


STEPS = {}


def S(num_, part, rubric, pitfalls, steps):
    STEPS[(num_, part)] = dict(rubric=rub(*rubric), rubricSource="ai-verified", pitfalls=pitfalls,
                               steps=steps, stepsSource="ai-verified")


S(1, "א",
  [("הגדרת תמורה אי-סדר מלא לפי ההרצאה", 2), (r"המבנה $a,b,c,d,6,5$: שני המקומות האחרונים נקבעים", 2), (r"$D_4=9$", 2), (r"התשובה 9", 2)],
  [r"לספור גם את שני האיברים האחרונים כחופשיים ולקבל $9\cdot2$.",
   r"לחשב $D_4$ כ-$4!-3!=18$."],
  [num(r"כמה תמורות אי-סדר מלא יש ל-$\{1,2,3,4\}$?", 9, r"$D_4=24-24+12-4+1=9$."),
   num(r"בכמה אופנים אפשר לסדר את 5 ו-6 במקומות 5 ו-6, אם אף איבר אינו במקומו?", 1, r"5 חייב להיות במקום 6, ו-6 במקום 5: אפשרות אחת."),
   num("מספר התמורות המבוקש:", 9, r"$9\cdot1=9$.")]),

S(1, "ב",
  [("הגדרת הפונקציה $\\phi$ של Euler לפי ההרצאה", 2), (r"$\phi(n)=5^{\alpha-1}\cdot4$", 2), (r"כפליות: $(\phi\circ\phi)(n)=\phi(5^{\alpha-1})\phi(4)=8\cdot5^{\alpha-2}$", 2), (r"$=40\cdot5^{\alpha-3}$ ו-$\alpha\ge3$, ולכן $40\mid m$", 2)],
  [r"להשתמש בכפליות של $\phi$ על $5^{\alpha-1}$ ו-4 בלי לבדוק שהם זרים.",
   r"לשכוח ש-$5^\alpha>100$ מחייב $\alpha\ge3$, ולכן $5^{\alpha-3}$ שלם."],
  [ch("איזו שיטה משמש הפתרון הרשמי?", r"חישוב מפורש של $(\phi\circ\phi)(5^\alpha)$ בעזרת הנוסחה וכפליות $\phi$",
      [r"אינדוקציה על $\alpha$", r"הוכחה בשלילה", r"שובך היונים על שאריות מודולו 40"],
      r"הפתרון מחשב את $\phi(n)$ ואז את $\phi(\phi(n))$ ומקבל מכפלה שמתחלקת ב-40.", 0),
   num(r"עבור $\alpha=3$ (כלומר $n=125$): מהו $(\phi\circ\phi)(n)$?", 40, r"$\phi(125)=100$ ו-$\phi(100)=40$."),
   order("סדרו את שורות ההוכחה.",
         [r"$\phi(n)=5^\alpha\left(1-\frac15\right)=5^{\alpha-1}\cdot4$.",
          r"$\gcd(5^{\alpha-1},4)=1$, ולכן $(\phi\circ\phi)(n)=\phi(5^{\alpha-1})\phi(4)=5^{\alpha-2}\cdot4\cdot2=8\cdot5^{\alpha-2}$.",
          r"$8\cdot5^{\alpha-2}=40\cdot5^{\alpha-3}$.",
          r"מ-$5^\alpha>100$ נובע $\alpha\ge3$, ולכן $5^{\alpha-3}$ שלם ו-$40\mid m$."],
         "כל שורה נשענת על הקודמת."),
   bug("בהוכחה שורה אחת שגויה. איזו?",
       [r"$\phi(n)=5^\alpha\left(1-\frac15\right)=5^{\alpha-1}\cdot4$.",
        r"$\gcd(5^{\alpha-1},4)=1$, ולכן $(\phi\circ\phi)(n)=\phi(5^{\alpha-1})\phi(4)=5^{\alpha-2}\cdot4\cdot4=16\cdot5^{\alpha-2}$.",
        r"$8\cdot5^{\alpha-2}=40\cdot5^{\alpha-3}$.",
        r"מ-$5^\alpha>100$ נובע $\alpha\ge3$, ולכן $5^{\alpha-3}$ שלם ו-$40\mid m$."],
       1, r"$\phi(4)=2$ ולא 4 (רק 1 ו-3 זרים ל-4).")]),

S(1, "ג",
  [("הגדרות עץ ויער לפי ההרצאה", 2), (r"$|E|=|U|=n-1$ ו-$|E|+|U|=\frac{n(n-1)}2$", 2), (r"פתרון המשוואה: $n=4$", 2), (r"בדיקת שני העצים על 4 צמתים: רק $P_4$", 3)],
  [r"לשכוח שהמשלים חייב להיות עץ גם הוא, ולכן יש לו בדיוק $n-1$ צלעות.",
   r"לבדוק רק את $K_{1,3}$ ולהסיק שאין פתרון."],
  [ch(r"איזו משוואה נכונה (כש-$T$ ומשלימו $H$ שניהם עצים על $n$ צמתים)?", r"$2(n-1)=\frac{n(n-1)}2$",
      [r"$n-1=\frac{n(n-1)}2$", r"$2n=\frac{n(n-1)}2$", r"$2(n-1)=\frac{n(n+1)}2$"],
      r"לכל עץ $n-1$ צלעות, וצלעות $T$ וצלעות המשלים יחד הן כל $\binom n2$ הצלעות האפשריות.", 0),
   num(r"מהו $n>1$ שפותר את המשוואה?", 4, r"$4=n$, כי $n-1\ne0$."),
   ch(r"אילו מהעצים על 4 צמתים ($P_4$ ו-$K_{1,3}$) משלימם עץ?", r"רק $P_4$",
      [r"רק $K_{1,3}$", r"שניהם", r"אף אחד מהם"],
      r"המשלים של $P_4$ הוא $P_4$, והמשלים של $K_{1,3}$ הוא משולש ועוד צומת מבודד, שאינו עץ.", 0)]),

S(2, "א",
  [(r"הגדרת $A_1,A_2$", 2), (r"$|A_1|=|A_2|=4!\cdot2=48$", 2), (r"$|A_1\cap A_2|=3!\cdot2!\cdot2!=24$", 2), (r"הכלה והדחה: $48+48-24=72$", 2)],
  [r"לספור את הזוג כשני איברים חופשיים ולשכוח את הגורם 2 לסדר הפנימי.",
   r"לשכוח להחסיר את החיתוך."],
  [num(r"כמה תמורות מכילות את 1,2 בסמיכות?", 48, r"הזוג כיחידה אחת: $4!$ סידורים, כפול 2 לסדר הפנימי: $48$."),
   num(r"כמה תמורות מכילות גם 1,2 בסמיכות וגם 4,5 בסמיכות?", 24, r"שלוש יחידות (שני זוגות ו-3): $3!\cdot2\cdot2=24$."),
   num("מספר התמורות המבוקש:", 72, r"$48+48-24=72$.")]),

S(2, "ב",
  [(r"(א) $M\subseteq\{x,y\}\times\{a,b,c,d\}$", 2), (r"(א) $\binom85=56$", 2), (r"(ב) שני מקרים זרים (תחילת $ax$ או $by$), 60 סדרות בכל אחד", 2), (r"(ב) סך הכול 120", 2)],
  [r"לבחור את 5 הזוגות מתוך כל 12 הזוגות של $A\times B$, כולל אלה עם $z$.",
   r"לספור את הסדרות המתחילות ב-$ax$ ו-$by$ כחופפות (אין חפיפה)."],
  [num(r"כמה איברים יש ב-$\{x,y\}\times\{a,b,c,d\}$?", 8, r"$2\cdot4=8$."),
   num("מספר תתי-הקבוצות $M$:", 56, r"$\binom85=\binom83=56$."),
   num(r"אחרי שהסדרה מתחילה ב-$ax$, כמה אפשרויות יש ל-3 האותיות הנותרות (מתוך $\{y,z,b,c,d\}$, בלי חזרות)?", 60, r"$P(5,3)=60$."),
   num("מספר הסדרות המבוקש:", 120, r"$60+60=120$, כי אין סדרה שמתחילה בשני הזוגות.")]),

S(2, "ג",
  [(r"(א) דוגמאות נגדיות לחד-חד-ערכיות, עלייה וירידה", 3), (r"(ב) $\phi(500)=200$", 2), (r"(ב) משפט Euler על $11^{200}$ ו-$3^{200}$", 3), (r"(ב) הסכום 2", 1)],
  [r"לטעון ש-$\phi$ עולה כי היא 'כמעט' עולה (למשל $\phi(5)=4>2=\phi(6)$).",
   r"להפעיל את משפט Euler בלי לבדוק ש-$\gcd(11,500)=\gcd(3,500)=1$."],
  [ch(r"איזה זוג מוכיח ש-$\phi$ אינה חד-חד-ערכית?", r"$1,2$", [r"$2,5$", r"$3,5$", r"$5,7$"],
      r"$\phi(1)=\phi(2)=1$. בשאר הזוגות הערכים שונים: $\phi(2)=1,\ \phi(5)=4,\ \phi(3)=2,\ \phi(7)=6$.", 0),
   num(r"מהו $\phi(500)$?", 200, r"$500=2^2\cdot5^3$, ולכן $500\cdot\frac12\cdot\frac45=200$."),
   num(r"מהו $121^{100}\bmod500$?", 1, r"$121^{100}=11^{200}=11^{\phi(500)}\equiv1$."),
   num(r"מהו $81^{50}\bmod500$?", 1, r"$81^{50}=3^{200}=3^{\phi(500)}\equiv1$."),
   num(r"מהו $121^{100}\bmod500+81^{50}\bmod500$?", 2, r"$1+1=2$.")]),

S(3, "א",
  [("הכנסת 2 עצמים לכל תא מראש", 2), (r"נשארו 7 עצמים זהים ל-5 תאים", 1), (r"$D(5,7)=\binom{11}4=330$", 2)],
  [r"להשתמש ב-$k=9$ (כך מודפס בפתרון), במקום 7 שנשארו בפועל.",
   r"לחשב $\binom{11}{7}$ או $\binom{12}{4}$ במקום $\binom{11}{4}$ בלי התאמה לנוסחה."],
  [num("כמה עצמים הוכנסו מראש (2 לכל תא)?", 10, r"$5\cdot2=10$."),
   num("כמה עצמים נשארו לפזר?", 7, r"$17-10=7$."),
   num("מספר האופנים:", 330, r"$D(5,7)=\binom{5-1+7}{5-1}=\binom{11}4=330$.")]),

S(3, "ב",
  [("משוואה אופיינית ושורש כפול 2", 2), (r"פתרון הומוגני $C_1 2^n+C_2 n2^n$", 2), (r"פתרון פרטי $A\cdot3^n$ עם $A=18$", 4), (r"קבועים: $C_1=1,\ C_2=0$", 4), (r"הוכחת $a_n=O(3^n)$", 3)],
  [r"לבחור פתרון פרטי $A\cdot n\cdot3^n$ (3 אינו שורש של המשוואה האופיינית).",
   r"להציב $a_1=60$ במקום הערך הנתון $a_1=56$."],
  [num(r"מהו השורש הכפול של $x^2-4x+4=0$?", 2, r"$(x-2)^2=0$."),
   ch(r"באיזו צורה מחפשים פתרון פרטי כשהאיבר החופשי הוא $2\cdot3^n$?", r"$A\cdot3^n$", [r"$A\cdot n\cdot3^n$", r"$A\cdot2^n$", r"$A\cdot n\cdot2^n$"],
      r"3 אינו שורש של המשוואה האופיינית. הצורות האחרות אינן מקיימות את הרקורסיה.", 0),
   num(r"מהו הקבוע $A$?", 18, r"$9A=12A-4A+18\Rightarrow A=18$."),
   num(r"מהו $C_1$?", 1, r"$a_0=C_1+18=19$."),
   num(r"מהו $C_2$?", 0, r"$a_1=2C_1+2C_2+54=56$, ולכן $C_2=0$.")]),

S(3, "ג",
  [(r"הדוגמה הנגדית $G=P_3$", 2), (r"העלים של $G$ הם $a,c$ בלבד", 1), (r"במשלים רק הצלע $(a,c)$, והעלים הם $a,c$ בלבד", 1), ("מסקנה: הטענה אינה נכונה", 1)],
  [r"לחפש דוגמה נגדית בגרף שבו יש יותר מצומת בודד בדרגה 2.",
   r"לשכוח שצומת מבודד במשלים אינו עלה."],
  [ch(r"איזה גרף מפריך את הטענה (כל העלים של $G$ הם כל העלים של המשלים)?", r"$P_3$", [r"$P_4$", r"$K_{1,3}$", r"$P_5$"],
      r"ב-$P_4$ עלי המשלים אינם אותם עלים, ב-$K_{1,3}$ אין עלים במשלים, ב-$P_5$ קצות המסלול הם בדרגה 3 במשלים.", 0),
   num(r"כמה עלים יש במשלים של $P_3$?", 2, r"במשלים רק הצלע בין שני הקצוות: שני עלים וצומת מבודד."),
   bug("בבדיקה שורה אחת שגויה. איזו?",
       [r"ב-$G=P_3$ על $\{a,b,c\}$ העלים הם $a,c$ ו-$b$ בדרגה 2.",
        r"במשלים $H$ יש רק את הצלע $(a,b)$.",
        r"לכן העלים של $H$ הם $a,c$, כמו העלים של $G$."],
       1, r"המשלים מכיל את הצלעות שחסרות ב-$G$: רק $(a,c)$.")]),

S(4, "א",
  [(r"מ-$2^{n-1}=512$ מקבלים $n=10$", 2), (r"4 ראשוניים ו-6 לא ראשוניים", 2), (r"$\binom42=6$ ו-$\binom63=20$", 3), (r"$6\cdot20=120$", 2)],
  [r"לספור את 1 כראשוני.",
   r"להשתמש ב-$2^n=512$ ולקבל $n=9$."],
  [num(r"מהו $n$, אם $2^{n-1}=512$?", 10, r"$512=2^9$, ולכן $n-1=9$."),
   num(r"כמה ראשוניים יש ב-$\{1,\dots,10\}$?", 4, r"2, 3, 5, 7."),
   num(r"כמה מספרים אינם ראשוניים ב-$\{1,\dots,10\}$?", 6, r"1, 4, 6, 8, 9, 10."),
   num("מספר תתי-הקבוצות המבוקש:", 120, r"$\binom42\cdot\binom63=6\cdot20=120$.")]),

S(4, "ב",
  [("שימוש בבינום של Newton: $m=2^{5n}5^n7^n$", 3), (r"$\phi(m)=2^{5n+2}\cdot3\cdot5^{n-1}\cdot7^{n-1}$", 3), (r"מחלק אי-זוגי הוא $3^a5^b7^c$ עם $a\in\{0,1\}$", 2), (r"$2n^2$", 2)],
  [r"לכתוב $\phi(7^n)=7^{2n}\cdots$ (כך מודפס בפתרון) במקום $6\cdot7^{n-1}$.",
   r"לספור גם מחלקים זוגיים, או לשכוח שהגורם 3 מגיע מ-$\phi(7^n)$."],
  [ch(r"מהי הצורה הסגורה של $m$?", r"$2^{5n}\cdot5^n\cdot7^n$", [r"$2^{4n}\cdot5^n\cdot7^n$", r"$2^{5n}\cdot5^n\cdot7^{2n}$", r"$2^{5n}\cdot7^n$"],
      r"הסכום הראשון שווה $7^n(7+3)^n=2^n5^n7^n$ והשני $2^n(2+6)^n=2^{4n}$.", 0),
   ch(r"מהו החלק האי-זוגי של $\phi(m)$?", r"$3\cdot5^{n-1}\cdot7^{n-1}$", [r"$3\cdot5^n\cdot7^{n-1}$", r"$5^{n-1}\cdot7^{n-1}$", r"$3\cdot5^{n-1}\cdot7^n$"],
      r"$\phi(5^n)=4\cdot5^{n-1}$ ו-$\phi(7^n)=6\cdot7^{n-1}$ תורמים את הגורם האי-זוגי 3.", 0),
   num(r"עבור $n=6$: כמה ערכים אפשריים יש לחזקה של 5 במחלק אי-זוגי של $\phi(m)$?", 6, r"החזקה בין 0 ל-5, כלומר $n=6$."),
   num(r"עבור $n=6$: כמה מחלקים אי-זוגיים יש ל-$\phi(m)$?", 72, r"$2\cdot6\cdot6=72=2n^2$.")]),

S(4, "ג",
  [(r"עץ: $|E|=n-1$", 1), (r"משפט הדרגות: $\sum\deg=2|E|=2n-2$", 2), (r"הכיוון ההפוך: $G$ קשיר ו-$|E|=n-1$", 1), ("גרף קשיר עם $n-1$ צלעות הוא עץ, ולכן לא קיים $G$ שאינו עץ", 2)],
  [r"לכתוב $\sum\deg=|E|$ ולא $2|E|$.",
   r"לשכוח שהקשירות נדרשת כדי להסיק שהגרף עץ."],
  [num(r"בעץ עם 7 צמתים, מהו סכום הדרגות?", 12, r"$2n-2=12$."),
   ch(r"האם קיים גרף קשיר $G$ שאינו עץ ובו $\sum\deg=2n-2$?", r"לא, כי הוא קשיר עם $n-1$ צלעות ולכן עץ", [r"כן, מספיק להוסיף מעגל", r"כן, בכל גרף קשיר סכום הדרגות הוא $2n-2$"],
      r"סכום הדרגות $2n-2$ אומר $|E|=n-1$, וגרף קשיר עם $n-1$ צלעות הוא עץ.", 0),
   bug("בהוכחת הכיוון הראשון שורה אחת שגויה. איזו?",
       [r"$G$ עץ, ולכן $|E|=n-1$.",
        r"לפי משפט הדרגות $\sum\deg=|E|=n-1$.",
        r"מכאן $\sum\deg=2n-2$."],
       1, r"לפי משפט הדרגות $\sum\deg=2|E|$.")]),


_missing = []
for q in questions:
    if q.get("hold"):
        continue
    s = STEPS.get((q["num"], q.get("part")))
    if s is None:
        _missing.append((q["num"], q.get("part")))
        continue
    if "points" in q:
        assert sum(r["points"] for r in s["rubric"]) == q["points"], (q["num"], q.get("part"))
    assert 3 <= len(s["rubric"]) <= 5 and 2 <= len(s["steps"]) <= 5, (q["num"], q.get("part"))
    q.update(s)
assert not _missing, _missing

exam = {
    "examCode": "24B-B",
    "examLabel": "אביב 2024, מועד ב'",
    "year": 2024,
    "examDate": "05.08.2024",
    "sourceFile": "24B-B exam (typed, pp.1-5)",
    "solutionFile": "24B-B official solution (same PDF)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} items")
