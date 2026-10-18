/* graphs, level 9: גרפי המילטון */
COURSE_LEVEL("graphs", {
  id: "C09", order: 9, icon: "🔗", title: String.raw`גרפי המילטון`,
  goal: String.raw`להחליט אם בגרף יש מעגל המילטון או מסלול המילטון, בעזרת משפט Dirac ותנאים הכרחיים.`,
  source: "ai-verified",
  lesson: { html: String.raw`<p><b>מעגל המילטון</b> הוא מעגל פשוט שעובר בכל צומת של הגרף בדיוק פעם אחת. <b>גרף המילטון</b> הוא גרף שיש בו מעגל המילטון. <b>מסלול המילטון</b> הוא מסלול פשוט שעובר בכל הצמתים (לא בהכרח נסגר). קל להתבלבל עם אוילר: אוילר עוסק בצלעות והמילטון בצמתים, ושני התנאים בלתי תלויים.</p>
<div class="lesson-rule">🔑 <b>משפט Dirac (תנאי מספיק):</b> אם $n\ge3$ ו-$\deg(v)\ge\frac n2$ לכל צומת $v$, אז הגרף המילטון. אם התנאי לא מתקיים אי אפשר להסיק כלום: צריך להציג מעגל או להפריך בדרך אחרת.</div>
<ul>
<li><b>להפריך:</b> צומת בדרגה 1 (כש-$n\ge3$), או צומת הפרדה (אחרי הסרתו הגרף לא קשיר).</li>
<li><b>דו-צדדי:</b> מעגל המילטון מתחלף בין $A$ ל-$B$, ולכן דרוש $|A|=|B|$. מסלול המילטון דורש $\big||A|-|B|\big|\le1$. לכן $K_{m,n}$ המילטוני אם ורק אם $m=n\ge2$.</li>
<li>המשלים של $P_n$ הוא גרף המילטון עבור $n\ge6$: הדרגות הן לפחות $n-3\ge\frac n2$, ו-Dirac חל.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> ב-$K_{2,3}$ יש 2 צמתים בצד אחד ו-3 בצד השני. מסלול $b,a,b,a,b$ עובר בכל הצמתים, אבל מעגל המילטון דורש צדדים שווים, ולכן אין.</div>
<div class="lesson-trap">⚠️ משפט Dirac הוא תנאי מספיק בלבד. מעגל $C_n$ עם $n\ge5$ הוא המילטון אף שדרגותיו 2, קטנות מ-$n/2$.</div>` },
  questions: [
    { id: "C09-Q1", question: String.raw`איזה מהגרפים הבאים הוא גרף המילטון?`,
      options: [{ id: "a", value: String.raw`$K_{3,4}$` },
         { id: "b", value: String.raw`$K_{2,5}$` },
         { id: "c", value: String.raw`$K_{3,3}$` },
         { id: "d", value: String.raw`$K_{4,6}$` }],
      correctId: "c",
      explanation: String.raw`בגרף דו-צדדי מעגל המילטון מתחלף בין הצדדים ולכן דורש צדדים שווים. רק ב-$K_{3,3}$ מתקיים $|A|=|B|$.`,
      recap: String.raw`דו-צדדי המילטוני: $|A|=|B|$.` },
    { id: "C09-Q2", question: String.raw`בגרף על 10 צמתים כל הצמתים בדרגה 5 לפחות. מה אפשר להסיק?`,
      options: [{ id: "a", value: String.raw`יש בו מעגל המילטון` },
         { id: "b", value: String.raw`יש בו מעגל אוילר` },
         { id: "c", value: String.raw`הוא דו-צדדי` },
         { id: "d", value: String.raw`אי אפשר להסיק דבר` }],
      correctId: "a",
      explanation: String.raw`$\deg(v)\ge5=\frac{10}2$ לכל צומת, ולכן לפי Dirac הגרף המילטון. מעגל אוילר דורש דרגות זוגיות וקשירות, ואין לנו מידע על זוגיות. דו-צדדיות לא נובעת.`,
      recap: String.raw`Dirac: $\deg\ge n/2$ מספיק להמילטון.` },
    { id: "C09-Q3",
      step: { type: "numeric", prompt: String.raw`$G$ גרף 3-רגולרי על 10 צמתים. מהי הדרגה של כל צומת במשלים $\overline G$ ?`, answer: 6, tol: 0,
              explain: String.raw`$10-1-3=6\ge\frac{10}2$, ולכן לפי Dirac המשלים הוא גרף המילטון.` },
      recap: String.raw`דרגה במשלים: $n-1-r$.` },
    { id: "C09-Q4", question: String.raw`מה נכון לגבי המסלול $P_5$ (5 צמתים בשורה)?`,
      options: [{ id: "a", value: String.raw`יש בו מעגל המילטון` },
         { id: "b", value: String.raw`יש מסלול המילטון, אבל אין מעגל המילטון` },
         { id: "c", value: String.raw`אין בו מסלול המילטון` },
         { id: "d", value: String.raw`יש בו מעגל המילטון אבל אין מסלול המילטון` }],
      correctId: "b",
      explanation: String.raw`המסלול עצמו עובר בכל הצמתים. אין מעגל המילטון: הקצוות הם עלים (דרגה 1), ומעגל דורש שני שכנים לכל צומת.`,
      recap: String.raw`עלה מונע מעגל המילטון.` },
    { id: "C09-Q5", question: String.raw`הגרף מורכב משני משולשים החולקים צומת אחד (5 צמתים, דרגות $4,2,2,2,2$). מה נכון לגביו?`,
      options: [{ id: "a", value: String.raw`אוילר כן, המילטון כן` },
         { id: "b", value: String.raw`אוילר כן, המילטון לא` },
         { id: "c", value: String.raw`אוילר לא, המילטון כן` },
         { id: "d", value: String.raw`אוילר לא, המילטון לא` }],
      correctId: "b",
      explanation: String.raw`כל הדרגות זוגיות והגרף קשיר, ולכן יש מעגל אוילר. אבל הצומת המשותף הוא צומת הפרדה: אחרי הסרתו נשארים שני רכיבים, ולכן אין מעגל המילטון.`,
      recap: String.raw`אוילר והמילטון בלתי תלויים.` },
    { id: "C09-Q6", question: String.raw`מה נכון לגבי $K_{3,4}$ ?`,
      options: [{ id: "a", value: String.raw`יש בו מעגל המילטון` },
         { id: "b", value: String.raw`יש מסלול המילטון, אבל אין מעגל המילטון` },
         { id: "c", value: String.raw`אין בו מסלול המילטון` },
         { id: "d", value: String.raw`יש בו מעגל המילטון אבל אין מסלול המילטון` }],
      correctId: "b",
      explanation: String.raw`הצדדים הם 3 ו-4, והפרש הגדלים 1: מסלול $b,a,b,a,b,a,b$ עובר בכל הצמתים. מעגל המילטון דורש צדדים שווים, ולכן אין.`,
      recap: String.raw`הפרש 1 בין הצדדים: מסלול כן, מעגל לא.` },
  ],
});
