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
