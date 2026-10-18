/* graphs, level 4: גרפים דו-צדדיים */
COURSE_LEVEL("graphs", {
  id: "C04", order: 4, icon: "🔀", title: String.raw`גרפים דו-צדדיים`,
  goal: String.raw`לזהות גרף דו-צדדי, לספור צלעות לפי הצדדים, ולהסביר למה המשלים שלו כמעט אף פעם לא דו-צדדי.`,
  source: "ai-verified",
  lesson: { html: String.raw`<p>גרף $G=(A,B,E)$ הוא <b>דו-צדדי</b> אם אפשר לחלק את הצמתים לשתי קבוצות לא ריקות וזרות $A,B$, כך שכל צלע מחברת צומת מ-$A$ לצומת מ-$B$. אין צלעות בתוך צד.</p>
<div class="lesson-rule">🔑 גרף דו-צדדי אם ורק אם אין בו מעגל <b>באורך אי-זוגי</b>. בפרט $C_n$ עם $n$ זוגי דו-צדדי, $C_n$ עם $n$ אי-זוגי לא, וגם $K_n$ עבור $n\ge3$ לא (יש בו משולש).</div>
<ul>
<li><b>דו-צדדי שלם</b> $K_{m,n}$: כל צומת של $A$ ($|A|=m$) מחובר לכל צומת של $B$ ($|B|=n$). יש בו $mn$ צלעות.</li>
<li>בכל גרף דו-צדדי כל צלע נספרת פעם אחת בצד $A$ ופעם אחת בצד $B$: $\sum_{a\in A}\deg(a)=\sum_{b\in B}\deg(b)=|E|$.</li>
<li>אם $|A|=a$ ו-$|B|=n-a$, יש לכל היותר $a(n-a)$ צלעות.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> בגרף דו-צדדי עם $|A|=3$ שבו כל צומת של $A$ בדרגה 4 יש $12$ צלעות. אם $|B|=6$ וכל דרגות $B$ שוות, כל צומת של $B$ בדרגה 2.</div>
<div class="lesson-trap">⚠️ משלים של גרף דו-צדדי על 5 צמתים או יותר <b>אינו</b> דו-צדדי: לפחות אחד הצדדים מכיל 3 צמתים, ובמקור אין ביניהם צלעות, ולכן במשלים הם יוצרים משולש. משולש הוא מעגל אי-זוגי.</div>` },
  questions: [
    { id: "C04-Q1",
      step: { type: "numeric", prompt: String.raw`כמה צלעות יש ב-$K_{5,7}$ ?`, answer: 35, tol: 0,
              explain: String.raw`כל אחד מ-5 צמתי $A$ מחובר לכל 7 צמתי $B$: $5\cdot7=35$.` },
      recap: String.raw`$|E(K_{m,n})|=mn$.` },
    { id: "C04-Q2", question: String.raw`איזה מהגרפים הבאים דו-צדדי?`,
      options: [{ id: "a", value: String.raw`$C_7$` },
         { id: "b", value: String.raw`$C_8$` },
         { id: "c", value: String.raw`$K_4$` },
         { id: "d", value: String.raw`$K_5$` }],
      correctId: "b",
      explanation: String.raw`$C_8$ הוא מעגל באורך זוגי, ולכן אפשר לצבוע את צמתיו לסירוגין בשני צדדים. ב-$C_7$ יש מעגל באורך 7 (אי-זוגי), וב-$K_4$ ו-$K_5$ יש משולשים.`,
      recap: String.raw`אין מעגל אי-זוגי: דו-צדדי.` },
    { id: "C04-Q3",
      step: { type: "numeric", prompt: String.raw`בגרף דו-צדדי $|A|=4$ וכל צומת של $A$ בדרגה 3. ב-$B$ יש 6 צמתים, וכולם באותה דרגה. מהי הדרגה של צומת ב-$B$ ?`, answer: 2, tol: 0,
              explain: String.raw`מספר הצלעות $4\cdot3=12$, וגם $6\cdot d=12$. לכן $d=2$.` },
      recap: String.raw`$\sum_A\deg=\sum_B\deg=|E|$.` },
    { id: "C04-Q4", question: String.raw`האם המשלים של $K_{2,5}$ הוא דו-צדדי?`,
      options: [{ id: "a", value: String.raw`כן, כי $K_{2,5}$ דו-צדדי` },
         { id: "b", value: String.raw`לא דו-צדדי, כי במשלים יש משולש` },
         { id: "c", value: String.raw`לא, כי יש בו 7 צמתים` },
         { id: "d", value: String.raw`כן, כי הוא קשיר` }],
      correctId: "b",
      explanation: String.raw`המשלים הוא $K_2\cup K_5$. הצד בן 5 הצמתים הופך לקליקה $K_5$, ובה משולש. תכונה של גרף לא עוברת למשלים שלו. 7 צמתים לבדם לא מונעים דו-צדדיות, והמשלים אף אינו קשיר.`,
      recap: String.raw`צד עם 3 צמתים נהפך למשולש במשלים.` },
    { id: "C04-Q5",
      step: { type: "numeric", prompt: String.raw`מהו מספר הצלעות המרבי בגרף דו-צדדי על 9 צמתים?`, answer: 20, tol: 0,
              explain: String.raw`אם $|A|=a$ אז $|B|=9-a$ ומספר הצלעות לכל היותר $a(9-a)$. הערך הגדול ביותר ב-$a=4$ או $a=5$: $4\cdot5=20$.` },
      recap: String.raw`מקסימום $a(n-a)$, בצדדים שווים ככל האפשר.` },
    { id: "C04-Q6",
      step: { type: "numeric", prompt: String.raw`בגרף דו-צדדי דרגות הצמתים ב-$A$ הן $4,3,3,2$. ב-$B$ יש חמישה צמתים בדרגות $3,3,2,2,x$. מהו $x$ ?`, answer: 2, tol: 0,
              explain: String.raw`בצד $A$ יש $4+3+3+2=12$ צלעות. ב-$B$: $3+3+2+2+x=12$, לכן $x=2$.` },
      recap: String.raw`סכום הדרגות בכל צד שווה למספר הצלעות.` },
  ],
});
