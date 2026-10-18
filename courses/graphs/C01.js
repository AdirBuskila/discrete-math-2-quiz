/* graphs, level 1: דרגות ומשפט הדרגות */
COURSE_LEVEL("graphs", {
  id: "C01", order: 1, icon: "🔢", title: String.raw`דרגות ומשפט הדרגות`,
  goal: String.raw`לחשב מספר צלעות מתוך דרגות, ולזהות מתי סדרת דרגות לא יכולה להתקיים בגלל זוגיות.`,
  source: "ai-verified",
  lesson: { html: String.raw`<p><b>גרף לא מכוון</b> $G=(V,E)$ מורכב מקבוצת <b>צמתים</b> $V$ ומקבוצת <b>צלעות</b> $E$, שכל אחת מהן זוג צמתים. בקורס הגרפים <b>פשוטים</b>: בלי לולאות ובלי צלעות כפולות. <b>דרגה</b> של צומת $v$, שנכתבת $\deg(v)$, היא מספר הצלעות שנוגעות בו (מספר השכנים שלו). בגרף פשוט על $n$ צמתים תמיד $0\le\deg(v)\le n-1$.</p>
<div class="lesson-rule">🔑 <b>משפט הדרגות:</b> $\sum_{v\in V}\deg(v)=2|E|$. כל צלע נספרת פעמיים, פעם בכל אחד מקצותיה.</div>
<ul>
<li><b>מסקנה:</b> מספר הצמתים בעלי דרגה אי-זוגית הוא תמיד זוגי (כי הסכום זוגי).</li>
<li><b>גרף שלם</b> $K_n$: כל זוג צמתים מחובר, ולכן $|E|=\binom n2=\frac{n(n-1)}2$.</li>
<li><b>גרף $r$-רגולרי:</b> כל הדרגות שוות $r$. אז $r\cdot|V|=2|E|$.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> בגרף על 6 צמתים כל הדרגות 3. סכום הדרגות $6\cdot3=18$, ולכן $|E|=9$.</div>
<div class="lesson-trap">⚠️ סכום דרגות אי-זוגי אי-אפשרי. למשל 5 צמתים בדרגה 3 נותנים סכום 15, ולכן אין גרף כזה.</div>` },
  questions: [
    { id: "C01-Q1",
      step: { type: "numeric", prompt: String.raw`בגרף יש 8 צמתים וכל צומת בו בדרגה 3. כמה צלעות יש בגרף?`, answer: 12, tol: 0,
              explain: String.raw`סכום הדרגות הוא $8\cdot3=24$, ולפי משפט הדרגות $|E|=24/2=12$.` },
      recap: String.raw`$|E|=\frac12\sum\deg(v)$.` },
    { id: "C01-Q2", question: String.raw`האם קיים גרף פשוט על 7 צמתים שכל צומת בו בדרגה 3?`,
      options: [{ id: "a", value: String.raw`כן, כי 3 קטן מ-7` },
         { id: "b", value: String.raw`לא, כי סכום הדרגות 21 הוא אי-זוגי` },
         { id: "c", value: String.raw`לא, כי 3 גדול מדי ל-7 צמתים` },
         { id: "d", value: String.raw`כן, לכל מספר צמתים קיים גרף 3-רגולרי` }],
      correctId: "b",
      explanation: String.raw`סכום הדרגות הוא $7\cdot3=21$, והוא חייב להיות $2|E|$, מספר זוגי. לכן אין גרף כזה. הדרגה 3 לא גדולה מדי (המקסימום הוא $6$). הטענה שלכל מספר צמתים קיים גרף 3-רגולרי שגויה: על 8 צמתים קיים, על 7 לא.`,
      recap: String.raw`סכום הדרגות חייב להיות זוגי.` },
    { id: "C01-Q3",
      step: { type: "numeric", prompt: String.raw`כמה צלעות יש בגרף השלם $K_9$ ?`, answer: 36, tol: 0,
              explain: String.raw`כל זוג צמתים מחובר: $\binom92=\frac{9\cdot8}2=36$.` },
      recap: String.raw`$|E(K_n)|=\binom n2$.` },
    { id: "C01-Q4",
      step: { type: "numeric", prompt: String.raw`בגרף 10 צמתים: ארבעה מהם בדרגה 3 ושישה בדרגה 2. כמה צלעות יש בו?`, answer: 12, tol: 0,
              explain: String.raw`סכום הדרגות $4\cdot3+6\cdot2=24$, ולכן $|E|=12$.` },
      recap: String.raw`מחברים את כל הדרגות ומחלקים ב-2.` },
    { id: "C01-Q5", question: String.raw`איזו מהסדרות הבאות <b>לא</b> יכולה להיות סדרת הדרגות של גרף?`,
      options: [{ id: "a", value: String.raw`$2,2,2,2$` },
         { id: "b", value: String.raw`$3,3,2,2$` },
         { id: "c", value: String.raw`$3,3,3,1,1$` },
         { id: "d", value: String.raw`$4,2,2,2,2$` }],
      correctId: "c",
      explanation: String.raw`בסדרה $3,3,3,1,1$ סכום הדרגות הוא $11$, אי-זוגי (חמישה צמתים בדרגה אי-זוגית), ולכן אין גרף כזה. את שלוש האחרות אפשר לממש: $C_4$, גרף $K_4$ בלי צלע אחת, ושני משולשים החולקים צומת.`,
      recap: String.raw`סכום אי-זוגי: אין גרף.` },
    { id: "C01-Q6",
      step: { type: "numeric", prompt: String.raw`בגרף רגולרי יש 10 צמתים ו-20 צלעות. מהי הדרגה של כל צומת?`, answer: 4, tol: 0,
              explain: String.raw`$r\cdot10=2\cdot20=40$, ולכן $r=4$.` },
      recap: String.raw`$r|V|=2|E|$.` },
  ],
});
