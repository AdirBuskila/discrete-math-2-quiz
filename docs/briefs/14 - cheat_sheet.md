# דף נוסחאות וטענות לכל הקורס

דף סיכום לחזרה מהירה. כל סעיף מפנה לפרק המלא.

## ספירה
- סדרות עם חזרות באורך $k$ מ-$n$: $n^k$. חליפות: $P(n,k)=\frac{n!}{(n-k)!}$. תמורות: $n!$.
- צירופים: $\binom nk=\frac{n!}{k!(n-k)!}$, $\binom nk=\binom n{n-k}$, $\binom nk=\binom{n-1}{k-1}+\binom{n-1}k$.
- בחירה עם חזרות (סדר לא חשוב) ופתרונות של $x_1+\dots+x_n=k$ בטבעיים: $D(n,k)=\binom{n+k-1}{n-1}$. ראו [[selections_repetition]].
- בינום: $(x+y)^n=\sum\binom nk x^ky^{n-k}$; $\sum\binom nk=2^n$; זוגיים ואי-זוגיים $2^{n-1}$ כל אחד; $\sum k\binom nk x^k=nx(1+x)^{n-1}$. ראו [[combinations_subsets]].
- הכלה והדחה: $|A\cup B\cup C|=\sum|A_i|-\sum|A_i\cap A_j|+|A\cap B\cap C|$. כפולות של $d$ ב-$\{1..N\}$: $\lfloor N/d\rfloor$. ראו [[sum_product_inclusion]].
- אי-סדר מלא: $D_n=n!\sum_{k=0}^n\frac{(-1)^k}{k!}$; $D_n=(n-1)(D_{n-1}+D_{n-2})$; ערכים $0,1,2,9,44,265,1854,14833$. בדיוק $j$ נקודות שבת: $\binom nj D_{n-j}$. ראו [[permutations_arrangements]].
- פונקציות $f:A\to B$ עם $|A|=m,|B|=n$: כל $n^m$; חח"ע $P(n,m)$; עולה ממש $\binom nm$; על $\sum_{k}(-1)^k\binom nk(n-k)^m$. ראו [[function_counting]].

## מספרים
- $n=p_1^{a_1}\cdots p_k^{a_k}$; מספר המחלקים $\prod(a_i+1)$; מחלק הוא $\prod p_i^{b_i}$ עם $0\le b_i\le a_i$. ראו [[divisibility_primes]].
- $\phi(p^a)=p^{a-1}(p-1)$; $\gcd(m,n)=1\Rightarrow\phi(mn)=\phi(m)\phi(n)$; $\phi(n)=n\prod(1-\frac1p)$; $\phi(n)$ זוגי ל-$n>2$.
- משפט אוילר: $\gcd(a,n)=1\Rightarrow a^{\phi(n)}\equiv1\pmod n$. ראו [[euler_phi]].

## נסיגה וסדרי גודל
- $a_n=pa_{n-1}+qa_{n-2}+g(n)$: משוואה אופיינית $x^2=px+q$. שורשים שונים $C_1r_1^n+C_2r_2^n$; שורש כפול $(C_1+C_2n)r^n$.
- פתרון פרטי: קבוע $\to A$; $c\cdot s^n\to A s^n$ (ואם $s$ שורש, מכפילים ב-$n$). קבועים מתנאי ההתחלה אחרי החיבור. ראו [[recurrences]].
- $g=O(f)$: $g\le cf$ מ-$N$; $\Theta$: חסם משני הצדדים או גבול חיובי סופי של $g/f$. ראו [[asymptotics]].

## גרפים
- $\sum\deg(v)=2|E|$; מספר הצמתים בדרגה אי-זוגית זוגי. $K_n$: $\binom n2$ צלעות. $K_{m,n}$: $mn$ צלעות. ראו [[graph_basics]].
- משלים: $\deg_{\overline G}(v)=n-1-\deg_G(v)$; $|E|+|\overline E|=\binom n2$. $G$ לא קשיר $\Rightarrow\overline G$ קשיר עם קוטר $\le2$.
- דו-צדדי: אין מעגל אי-זוגי; $\sum_A\deg=\sum_B\deg=|E|$. עץ עם $n\ge5$ צמתים: המשלים מכיל משולש.
- סדרת דרגות: Havel-Hakimi; סכום זוגי הכרחי אבל לא מספיק.
- קשירות: $|E|<n-1\Rightarrow$ לא קשיר; $\delta\ge\frac{n-1}2\Rightarrow$ קשיר. ראו [[graph_connectivity]].
- עץ: קשיר ו-$|E|=n-1$; ביער עם $k$ רכיבים $|E|=n-k$; לפחות שני עלים; $\sum\deg=2n-2$. לכל גרף קשיר יש עץ פורש. ראו [[trees]].
- אוילר (מעגל): קשיר וכל הדרגות זוגיות; מסלול: 0 או 2 צמתים אי-זוגיים. המילטון: Dirac $\delta\ge n/2$ מספיק; בדו-צדדי מעגל דורש $|A|=|B|$. $K_n$ אוילר אם ורק אם $n$ אי-זוגי. ראו [[euler_hamilton]].
- $\chi(G)\ge$ גודל קליקה; $\chi=2$ אם ורק אם דו-צדדי עם צלע.

## שיטות הוכחה שחוזרות
- סתירה דרך זוגיות (משפט הדרגות), או דרך "הצד הגדול" בדו-צדדי.
- דוגמה נגדית קטנה להפרכה: $P_4$, $C_5$, $K_4$ עם צומת מבודד, $K_{2,3}$.
- פירוק למקרים לפי ערכים קטנים: $n=1,2$ ב-$\phi$, $n<10$ בפונקציות.
