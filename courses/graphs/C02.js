/* graphs, level 2: הגרף המשלים */
COURSE_LEVEL("graphs", {
  id: "C02", order: 2, icon: "🔄", title: String.raw`הגרף המשלים`,
  goal: String.raw`לחשב דרגות ומספר צלעות במשלים, ולזהות משלימים של גרפים מוכרים.`,
  source: "ai-verified",
  lesson: { html: String.raw`<p>ה<b>משלים</b> $\overline G$ של גרף $G=(V,E)$ הוא גרף על אותם צמתים, שבו שני צמתים שונים מחוברים <b>בדיוק כאשר הם לא מחוברים</b> ב-$G$. כלומר מוחקים את כל הצלעות הקיימות ומוסיפים את כל החסרות.</p>
<div class="lesson-rule">🔑 בגרף על $n$ צמתים: $\deg_G(v)+\deg_{\overline G}(v)=n-1$ ו-$|E(G)|+|E(\overline G)|=\binom n2$.</div>
<ul>
<li>המשלים של $K_n$ הוא גרף בלי צלעות (n צמתים מבודדים), ולהפך.</li>
<li>המשלים של $K_{m,n}$ הוא איחוד זר של $K_m$ ו-$K_n$.</li>
<li>המשלים של $C_5$ הוא $C_5$ (כשרושמים את הצמתים בסדר $v_1,v_3,v_5,v_2,v_4$).</li>
<li>אם $G$ <b>לא קשיר</b>, אז $\overline G$ קשיר: שני צמתים מרכיבים שונים לא מחוברים ב-$G$, ולכן מחוברים ב-$\overline G$. ההפך לא נכון: ל-$P_4$ ולמשלים שלו שניהם קשירים.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> אם $G$ איזומורפי ל-$\overline G$, אז יש להם אותו מספר צלעות, ולכן $2|E|=\binom n2$. בגרף כזה על 5 צמתים יש $|E|=5$ צלעות.</div>
<div class="lesson-trap">⚠️ משלים הופך <b>דרגה</b> $d$ ל-$n-1-d$ ולא ל-$n-d$. הצומת עצמו לא נספר כשכן.</div>` },
  questions: [
    { id: "C02-Q1",
      step: { type: "numeric", prompt: String.raw`בגרף $G$ יש 7 צמתים ו-8 צלעות. כמה צלעות יש במשלים $\overline G$ ?`, answer: 13, tol: 0,
              explain: String.raw`$\binom72=21$, ולכן במשלים $21-8=13$ צלעות.` },
      recap: String.raw`$|E(\overline G)|=\binom n2-|E|$.` },
    { id: "C02-Q2",
      step: { type: "numeric", prompt: String.raw`בגרף על 9 צמתים יש צומת $v$ בדרגה 2. מהי הדרגה של $v$ במשלים?`, answer: 6, tol: 0,
              explain: String.raw`$\deg_{\overline G}(v)=n-1-\deg_G(v)=9-1-2=6$.` },
      recap: String.raw`דרגה במשלים: $n-1-d$.` },
    { id: "C02-Q3",
      step: { type: "numeric", prompt: String.raw`כמה צלעות יש במשלים של $K_{3,4}$ ?`, answer: 9, tol: 0,
              explain: String.raw`ל-$K_{3,4}$ יש $12$ צלעות, ו-$\binom72=21$, ולכן במשלים $9$ צלעות. זה מתאים לכך שהמשלים הוא $K_3\cup K_4$ עם $3+6=9$ צלעות.` },
      recap: String.raw`משלים של $K_{m,n}$: $K_m\cup K_n$.` },
    { id: "C02-Q4", question: String.raw`איזה גרף הוא המשלים של $C_5$ ?`,
      options: [{ id: "a", value: String.raw`מסלול על 5 צמתים` },
         { id: "b", value: String.raw`מעגל באורך 5` },
         { id: "c", value: String.raw`כוכב עם 4 עלים` },
         { id: "d", value: String.raw`גרף בלי צלעות` }],
      correctId: "b",
      explanation: String.raw`ל-$C_5$ יש 5 צלעות והמשלים הוא 2-רגולרי עם $10-5=5$ צלעות, ובאמת מעגל באורך 5. מסלול על 5 צמתים יש לו רק 4 צלעות, לכוכב 4 צלעות ודרגות שונות, וגרף בלי צלעות הוא המשלים של $K_5$.`,
      recap: String.raw`$\overline{C_5}\cong C_5$.` },
    { id: "C02-Q5", question: String.raw`הגרף $G$ אינו קשיר. מה נכון תמיד לגבי $\overline G$ ?`,
      options: [{ id: "a", value: String.raw`אינו קשיר` },
         { id: "b", value: String.raw`קשיר תמיד` },
         { id: "c", value: String.raw`הוא עץ` },
         { id: "d", value: String.raw`הוא דו-צדדי` }],
      correctId: "b",
      explanation: String.raw`שני צמתים משני רכיבים שונים לא מחוברים ב-$G$ ולכן מחוברים ב-$\overline G$, וכל צומת מחובר דרכם לכל השאר. המשלים לא חייב להיות עץ או דו-צדדי: משלים של שלושה צמתים מבודדים הוא משולש.`,
      recap: String.raw`$G$ לא קשיר גורר $\overline G$ קשיר.` },
    { id: "C02-Q6",
      step: { type: "numeric", prompt: String.raw`גרף $G$ על 13 צמתים איזומורפי למשלים שלו. כמה צלעות יש בו?`, answer: 39, tol: 0,
              explain: String.raw`אותו מספר צלעות ב-$G$ וב-$\overline G$, וסכומם $\binom{13}2=78$. לכן $|E|=39$.` },
      recap: String.raw`$G\cong\overline G$ גורר $|E|=\frac12\binom n2$.` },
  ],
});
