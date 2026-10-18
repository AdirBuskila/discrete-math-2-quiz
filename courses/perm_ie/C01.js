/* perm_ie, level 1: product rule, factorial, arrangements (partial permutations), sequences with repetition */
COURSE_LEVEL("perm_ie", {
  id: "C01", order: 1, icon: "🔢", title: "עקרון הכפל, עצרת וחליפות",
  goal: "לחשב בכמה דרכים מסדרים איברים בשורה: תמורות, חליפות וסדרות עם חזרות.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>כל שאלה בנושא הזה היא ספירה של <b>סידורים בשורה</b>: מי במקום הראשון, מי בשני, וכן הלאה. הכלי הבסיסי הוא עקרון הכפל.</p>
<div class="lesson-rule">🔑 <b>עקרון הכפל:</b> אם בוחרים בשלבים, ובשלב $i$ יש $n_i$ אפשרויות (בלי קשר לבחירות הקודמות), אז מספר התוצאות הכולל הוא $n_1\cdot n_2\cdots n_k$.</div>
<h3>תמורה וחליפה</h3>
<ul>
<li><b>תמורה</b> של קבוצה בת $n$ איברים: סידור של כל האיברים בשורה, בלי חזרות. יש $n!=n(n-1)\cdots 2\cdot 1$ תמורות (עצרת), כי למקום הראשון $n$ אפשרויות, לשני $n-1$, וכן הלאה.</li>
<li><b>חליפה</b> בגודל $k$ מתוך $n$: סדרה של $k$ איברים <b>שונים</b>, והסדר חשוב. מספרן $P(n,k)=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}$.</li>
<li><b>סדרה עם חזרות</b> באורך $k$ מתוך $n$ איברים: בכל מקום $n$ אפשרויות, ולכן $n^k$.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> כמה חליפות בגודל 3 יש מתוך $\{1,2,3,4,5,6\}$? למקום הראשון 6 אפשרויות, לשני 5, לשלישי 4: $6\cdot5\cdot4=120=P(6,3)$. ואילו סדרות באורך 3 עם חזרות מותרות: $6^3=216$.</div>
<div class="lesson-trap">⚠️ השאלה לא תמיד אומרת "חליפה" או "חזרות". קראו מה כתוב: "אותיות שונות" או "סידור של כולם" פירושו בלי חזרות. אם לא נאמר שהאיברים שונים וחזרות אפשריות, זה $n^k$.</div>
<table><thead><tr><th>מה סופרים</th><th>נוסחה</th></tr></thead>
<tbody><tr><td>תמורות של $n$ איברים</td><td>$n!$</td></tr>
<tr><td>חליפות בגודל $k$ מתוך $n$</td><td>$P(n,k)=\frac{n!}{(n-k)!}$</td></tr>
<tr><td>סדרות באורך $k$ עם חזרות</td><td>$n^k$</td></tr></tbody></table>
` },
  questions: [
    { id: "C01-Q1", question: String.raw`כמה סיסמאות בנות 3 אותיות **שונות** אפשר ליצור מהאותיות $a,b,c,d,e$ ?`,
      options: [{ id: "a", value: "125" }, { id: "b", value: "60" }, { id: "c", value: "10" }, { id: "d", value: "15" }],
      correctId: "b",
      explanation: String.raw`בוחרים בשלבים: $5\cdot4\cdot3=60=P(5,3)$. התשובה 125 היא $5^3$, כלומר סדרות שבהן חזרות מותרות. התשובה 10 היא מספר הדרכים לבחור 3 אותיות בלי סדר, והתשובה 15 היא $5\cdot3$ שאין לה הצדקה.`,
      recap: String.raw`אותיות שונות והסדר חשוב: $P(n,k)$.` },
    { id: "C01-Q2",
      step: { type: "numeric", prompt: String.raw`כמה תמורות יש לקבוצה $\{1,2,3,4,5,6\}$ ?`, answer: 720, tol: 0,
              explain: String.raw`$6!=6\cdot5\cdot4\cdot3\cdot2\cdot1=720$.` },
      recap: String.raw`תמורות של $n$ איברים: $n!$.` },
    { id: "C01-Q3",
      step: { type: "numeric", prompt: String.raw`כמה סדרות באורך 4 אפשר ליצור מהספרות $1,2,3$ כאשר מותר לחזור על ספרה?`, answer: 81, tol: 0,
              explain: String.raw`בכל אחד מ-4 המקומות 3 אפשרויות: $3^4=81$.` },
      recap: String.raw`סדרה עם חזרות: $n^k$.` },
    { id: "C01-Q4",
      step: { type: "numeric", prompt: String.raw`כמה חליפות בגודל 3 יש מתוך קבוצה בת 8 איברים?`, answer: 336, tol: 0,
              explain: String.raw`$P(8,3)=8\cdot7\cdot6=336$.` },
      recap: String.raw`$P(n,k)$: $k$ גורמים יורדים החל מ-$n$.` },
    { id: "C01-Q5", question: String.raw`ב-7 רצים מחלקים מדליית זהב, כסף וארד (כל מדליה לרץ אחר). בכמה דרכים אפשר לחלק את המדליות?`,
      options: [{ id: "a", value: "343" }, { id: "b", value: "35" }, { id: "c", value: "5040" }, { id: "d", value: "210" }],
      correctId: "d",
      explanation: String.raw`הסדר חשוב (זהב שונה מכסף) ואין חזרות: $7\cdot6\cdot5=210=P(7,3)$. התשובה 343 היא $7^3$ (אותו רץ יכול לקבל כמה מדליות). התשובה 35 היא בחירה בלי סדר. התשובה 5040 היא $7!$, תמורה של כל 7 הרצים.`,
      recap: String.raw`דירוג של $k$ מתוך $n$: $P(n,k)$.` },
  ],
});
