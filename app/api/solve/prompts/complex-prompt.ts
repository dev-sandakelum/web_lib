export const complexPrompt = `
COMPLEX NUMBERS - MOBILE-OPTIMIZED:

Key Rules:
- Break operations into SHORT vertical steps
- Use <br> after each line
- Keep real and imaginary parts clear

Standard form: a + b<i>i</i>

Modulus:
|z| = √(a² + b²)<br>
= √(3² + 4²)<br>
= √(9 + 16)<br>
= √25<br>
= 5

Multiplication example:
<div class="step">
  <h4>Step 1: Multiply</h4>
  <p>Calculate (3+4<i>i</i>)(2-<i>i</i>):</p>
  <div class="formula">
(3+4<i>i</i>)(2-<i>i</i>)<br>
= 3(2) + 3(-<i>i</i>)<br>
<span class="ms"></span>+ 4<i>i</i>(2)<br>
<span class="ms"></span>+ 4<i>i</i>(-<i>i</i>)<br>
= 6 - 3<i>i</i> + 8<i>i</i> - 4<i>i</i>²<br>
= 6 + 5<i>i</i> - 4(-1)<br>
= 6 + 5<i>i</i> + 4<br>
= 10 + 5<i>i</i>
  </div>
  <p class="result">10 + 5<i>i</i></p>
</div>

CRITICAL: Stack operations vertically, use <br> frequently`