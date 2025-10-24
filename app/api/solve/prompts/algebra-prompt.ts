export const algebraPrompt = `
🧮 ALGEBRA - MOBILE-OPTIMIZED FORMATTING 🧮

Key Rules:
- Break into SHORT vertical steps
- Use <br> after EVERY line
- Keep each operation separate
- Stack equations vertically

Variables: <i>x</i>, <i>y</i>, <i>a</i>, <i>b</i>
Exponents: x², x³, 2ⁿ
Subscripts: x₁, x₂, aₙ
Fractions: (a/b), (x+1)/(x-2)
Roots: √16, √(x+5)
Absolute: |x-3|

═══════════════════════════════════════════

LINEAR EQUATIONS:
<div class="step">
  <h4>Step 1: Solve for x</h4>
  <p>Isolate the variable:</p>
  <div class="formula">
3x + 5 = 20<br>
3x = 20 - 5<br>
3x = 15<br>
x = 15/3<br>
x = 5
  </div>
  <p class="result">x = 5</p>
</div>

QUADRATIC (break into steps):
<div class="step">
  <h4>Step 1: Identify a, b, c</h4>
  <p>From 2x² - 5x - 3 = 0:</p>
  <div class="formula">
a = 2<br>
b = -5<br>
c = -3
  </div>
</div>

<div class="step">
  <h4>Step 2: Apply formula</h4>
  <p>Use x = (-b±√(b²-4ac))/(2a):</p>
  <div class="formula">
x = (-(-5)±√((-5)²-4(2)(-3)))/(2(2))<br>
x = (5±√(25+24))/4<br>
x = (5±√49)/4<br>
x = (5±7)/4
  </div>
</div>

<div class="step">
  <h4>Step 3: Two solutions</h4>
  <p>Calculate both values:</p>
  <div class="formula">
x₁ = (5+7)/4<br>
<span class="ms"></span>= 12/4<br>
<span class="ms"></span>= 3<br>
<br>
x₂ = (5-7)/4<br>
<span class="ms"></span>= -2/4<br>
<span class="ms"></span>= -1/2
  </div>
  <p class="result">x = 3 or x = -1/2</p>
</div>

FACTORING:
<div class="step">
  <h4>Step 1: Factor</h4>
  <p>Find GCF:</p>
  <div class="formula">
6x³ + 9x² - 3x<br>
= 3x(2x² + 3x - 1)
  </div>
  <p class="result">GCF: 3x</p>
</div>

SYSTEMS OF EQUATIONS:
<div class="step">
  <h4>Step 1: Write system</h4>
  <p>Two equations:</p>
  <div class="formula">
Eq 1: 2x + 3y = 12<br>
Eq 2: x - y = 1
  </div>
</div>

<div class="step">
  <h4>Step 2: Solve for x</h4>
  <p>From equation 2:</p>
  <div class="formula">
x - y = 1<br>
x = y + 1
  </div>
</div>

<div class="step">
  <h4>Step 3: Substitute</h4>
  <p>Into equation 1:</p>
  <div class="formula">
2(y+1) + 3y = 12<br>
2y + 2 + 3y = 12<br>
5y + 2 = 12<br>
5y = 10<br>
y = 2
  </div>
</div>

<div class="step">
  <h4>Step 4: Find x</h4>
  <p>Substitute y = 2:</p>
  <div class="formula">
x = y + 1<br>
x = 2 + 1<br>
x = 3
  </div>
  <p class="result">x = 3, y = 2</p>
</div>

INEQUALITIES:
<div class="formula">
3x - 7 > 8<br>
3x > 15<br>
x > 5
</div>

EXPONENTIALS:
<div class="formula">
2ˣ = 8<br>
2ˣ = 2³<br>
x = 3
</div>

RATIONAL EXPRESSIONS:
<div class="formula">
(x²-4)/(x-2)<br>
= ((x+2)(x-2))/(x-2)<br>
= x + 2<br>
(where x ≠ 2)
</div>

═══════════════════════════════════════════

CRITICAL MOBILE RULES:
✅ ONE operation per line
✅ Use <br> after EVERY step
✅ Use <span class="ms"></span> for indentation
✅ Stack vertically, NO horizontal scrolling
✅ Break long expressions into parts
✅ Max 50 characters per line

❌ NO horizontal calculations
❌ NO skipped steps
❌ NO wide expressions
❌ NO inline operations`