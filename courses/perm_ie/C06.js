/* perm_ie, level 6: derangements, formula and recurrence */
COURSE_LEVEL("perm_ie", {
  id: "C06", order: 6, icon: "🎲", title: "תמורות אי-סדר מלא",
  goal: "להבין מהי תמורת אי-סדר מלא ולחשב את מספרן בנוסחה ובנסיגה.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>תמורה של $\{1,\dots,n\}$ נכתבת $(j_1,\dots,j_n)$ כאשר $j_i$ הוא האיבר שנמצא במקום $i$. <b>נקודת שבת</b> היא מקום $i$ שבו $j_i=i$ (האיבר יושב במקומו הטבעי).</p>
<div class="lesson-rule">🔑 <b>תמורת אי-סדר מלא</b> היא תמורה בלי אף נקודת שבת: $j_i\ne i$ לכל $i$. מספרן מסומן $D_n$.</div>
<div class="lesson-ex"><b>דוגמה:</b> עבור $n=3$ התמורות $(2,3,1)$ ו-$(3,1,2)$ הן אי-סדר מלא. כל אחת מארבע התמורות האחרות של $\{1,2,3\}$ מכילה נקודת שבת. לכן $D_3=2$. התמורה $(2,1,3)$ אינה אי-סדר מלא כי $j_3=3$.</div>
<h3>הנוסחה</h3>
<p>$$D_n=n!\left(\frac1{0!}-\frac1{1!}+\frac1{2!}-\dots+(-1)^n\frac1{n!}\right)$$
(מקורה בהכלה והדחה על התנאים "$i$ נקודת שבת".) למשל $D_4=24\left(1-1+\frac12-\frac16+\frac1{24}\right)=24\cdot\frac{9}{24}=9$.</p>
<h3>נסיגה וטבלה</h3>
<p>החישוב המהיר הוא בנסיגה: $D_n=(n-1)(D_{n-1}+D_{n-2})$, וגם $D_n=nD_{n-1}+(-1)^n$, עם $D_1=0$ ו-$D_2=1$.</p>
<table><thead><tr><th>$n$</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>
<tbody><tr><td>$D_n$</td><td>0</td><td>1</td><td>2</td><td>9</td><td>44</td><td>265</td><td>1854</td><td>14833</td></tr></tbody></table>
<div class="lesson-trap">⚠️ $D_n$ אינו $\frac{n!}{e}$ בדיוק, אלא העיגול שלו. בבחינה מחשבים את הערך המדויק בנסיגה, לא בקירוב.</div>
` },
  questions: [
    { id: "C06-Q1",
      step: { type: "numeric", prompt: String.raw`חשבו בנוסחה את $D_4$ : $4!\left(1-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}\right)$.`, answer: 9, tol: 0,
              explain: String.raw`$24-24+12-4+1=9$.` },
      recap: String.raw`$D_4=9$.` },
    { id: "C06-Q2",
      step: { type: "numeric", prompt: String.raw`נתון $D_3=2$ ו-$D_4=9$. חשבו בנסיגה $D_n=(n-1)(D_{n-1}+D_{n-2})$ את $D_5$.`, answer: 44, tol: 0,
              explain: String.raw`$D_5=4\cdot(9+2)=44$.` },
      recap: String.raw`$D_n=(n-1)(D_{n-1}+D_{n-2})$.` },
    { id: "C06-Q3",
      step: { type: "numeric", prompt: String.raw`כמה תמורות של $\{1,2,3,4\}$ **אינן** אי-סדר מלא?`, answer: 15, tol: 0,
              explain: String.raw`כל התמורות: $4!=24$. אי-סדר מלא: $D_4=9$. התשובה $24-9=15$.` },
      recap: String.raw`יש לפחות נקודת שבת אחת: $n!-D_n$.` },
    { id: "C06-Q4",
      step: { type: "numeric", prompt: String.raw`נתון $D_4=9$ ו-$D_5=44$. חשבו את $D_6$ .`, answer: 265, tol: 0,
              explain: String.raw`$D_6=5\cdot(44+9)=265$. בדיקה בנסיגה השנייה: $6\cdot44+1=265$.` },
      recap: String.raw`$D_6=265$.` },
    { id: "C06-Q5", question: String.raw`איזו מהתמורות הבאות של $\{1,2,3,4\}$ (כתובות כ-$(j_1,j_2,j_3,j_4)$) היא תמורת אי-סדר מלא?`,
      options: [{ id: "a", value: "$(2,1,3,4)$" }, { id: "b", value: "$(3,2,1,4)$" }, { id: "c", value: "$(2,1,4,3)$" }, { id: "d", value: "$(2,4,3,1)$" }],
      correctId: "c",
      explanation: String.raw`ב-$(2,1,4,3)$ אף איבר אינו במקומו. ב-$(2,1,3,4)$ יש נקודות שבת במקום 3 ובמקום 4. ב-$(3,2,1,4)$ יש נקודות שבת במקום 2 ובמקום 4. ב-$(2,4,3,1)$ יש נקודת שבת במקום 3.`,
      recap: String.raw`בודקים כל מקום $i$: האם $j_i=i$.` },
    { id: "C06-Q6",
      step: { type: "numeric", prompt: String.raw`נתון $D_6=265$. חשבו בנסיגה $D_n=nD_{n-1}+(-1)^n$ את $D_7$ .`, answer: 1854, tol: 0,
              explain: String.raw`$D_7=7\cdot265+(-1)^7=1855-1=1854$.` },
      recap: String.raw`$D_n=nD_{n-1}+(-1)^n$.` },
  ],
});
