/* graphs, level 5: עצים ויערות */
COURSE_LEVEL("graphs", {
  id: "C05", order: 5, icon: "🌳", title: String.raw`עצים ויערות`,
  goal: String.raw`לזהות עץ, ולחשב מספר צלעות, רכיבים ועלים לפי מספר הצמתים.`,
  source: "ai-verified",
  lesson: { html: String.raw`<p><b>עץ</b> הוא גרף קשיר בלי מעגלים. <b>יער</b> הוא גרף בלי מעגלים (איחוד זר של עצים). <b>עלה</b> הוא צומת בדרגה 1.</p>
<div class="lesson-rule">🔑 בגרף על $n$ צמתים כל אחד מהתנאים הבאים שקול ל"עץ": (1) קשיר וגם $|E|=n-1$; (2) בלי מעגלים וגם $|E|=n-1$; (3) לכל שני צמתים יש מסלול <b>יחיד</b> ביניהם.</div>
<ul>
<li>ביער עם $n$ צמתים ו-$k$ רכיבי קשירות יש $|E|=n-k$ צלעות, כלומר $k=n-|E|$.</li>
<li>לכל עץ עם $n\ge2$ צמתים יש לפחות <b>שני עלים</b>: שני קצות המסלול הארוך ביותר.</li>
<li>הסרת עלה מעץ משאירה עץ.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> יער עם 20 צמתים ו-3 רכיבים הוא בעל $20-3=17$ צלעות.</div>
<div class="lesson-trap">⚠️ התנאי $|E|=n-1$ לבדו לא מספיק: צריך גם קשירות או גם היעדר מעגלים. משולש וצומת מבודד: 4 צמתים, 3 צלעות, אבל זה לא עץ.</div>` },
  questions: [
    { id: "C05-Q1",
      step: { type: "numeric", prompt: String.raw`כמה צלעות יש בעץ עם 15 צמתים?`, answer: 14, tol: 0,
              explain: String.raw`$|E|=n-1=14$.` },
      recap: String.raw`עץ על $n$ צמתים: $n-1$ צלעות.` },
    { id: "C05-Q2",
      step: { type: "numeric", prompt: String.raw`ביער יש 20 צמתים ו-3 רכיבי קשירות. כמה צלעות יש בו?`, answer: 17, tol: 0,
              explain: String.raw`$|E|=n-k=20-3=17$.` },
      recap: String.raw`יער: $|E|=n-k$.` },
    { id: "C05-Q3",
      step: { type: "numeric", prompt: String.raw`ביער יש 30 צמתים ו-24 צלעות. כמה רכיבי קשירות יש בו?`, answer: 6, tol: 0,
              explain: String.raw`$k=n-|E|=30-24=6$.` },
      recap: String.raw`$k=n-|E|$.` },
    { id: "C05-Q4", question: String.raw`בגרף 7 צמתים ו-6 צלעות. איזה תנאי נוסף <b>מבטיח</b> שהוא עץ?`,
      options: [{ id: "a", value: String.raw`אין בו צומת מבודד` },
         { id: "b", value: String.raw`הגרף קשיר` },
         { id: "c", value: String.raw`יש בו צומת בדרגה 3` },
         { id: "d", value: String.raw`הוא דו-צדדי` }],
      correctId: "b",
      explanation: String.raw`קשיר ו-$|E|=n-1$ הם עץ לפי משפט האפיון. שאר התנאים לא מספיקים: משולש ועוד כוכב $K_{1,3}$ הם גרף עם 7 צמתים ו-6 צלעות, בלי צומת מבודד ועם דרגה 3, ואינו עץ. ו-$C_4$ ועוד מסלול על 3 צמתים הוא דו-צדדי ואינו עץ.`,
      recap: String.raw`$n-1$ צלעות ועוד קשיר (או בלי מעגלים) הם עץ.` },
    { id: "C05-Q5", question: String.raw`מסירים עלה מעץ עם לפחות 3 צמתים. מה מתקבל?`,
      options: [{ id: "a", value: String.raw`יער עם שני רכיבים` },
         { id: "b", value: String.raw`מתקבל עץ` },
         { id: "c", value: String.raw`גרף עם מעגל` },
         { id: "d", value: String.raw`גרף לא קשיר` }],
      correctId: "b",
      explanation: String.raw`העלה נוגע בצלע אחת בלבד, ולכן מסלולים בין שאר הצמתים לא עברו דרכו. הגרף נשאר קשיר, ואין בו מעגלים: עץ עם צומת אחד פחות.`,
      recap: String.raw`הסרת עלה משאירה עץ.` },
    { id: "C05-Q6", question: String.raw`מהו מספר העלים המזערי של עץ עם $n\ge2$ צמתים?`,
      options: [{ id: "a", value: String.raw`1` },
         { id: "b", value: String.raw`2` },
         { id: "c", value: String.raw`$n-1$` },
         { id: "d", value: String.raw`אין חסם` }],
      correctId: "b",
      explanation: String.raw`בעץ יש לפחות שני עלים: המסלול הארוך ביותר מתחיל ומסתיים בצמתים שדרגתם 1. המסלול $P_n$ מראה שיש עץ עם בדיוק שני עלים.`,
      recap: String.raw`לעץ עם $n\ge2$ לפחות שני עלים.` },
  ],
});
