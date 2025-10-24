export const calculusPrompt = `
CALCULUS - MOBILE-OPTIMIZED:

Key Rules:
- Break ALL steps into SHORT vertical lines
- Use <br> after EVERY operation
- Stack derivatives/integrals vertically

Derivatives:
d/dx, f'(x), dy/dx

Integrals:
∫ f(x)dx<br>
∫[a to b] f(x)dx

Limits:
lim(x→a) f(x)

Example - Derivative:
<div class="step">
  <h4>Step 1: Differentiate</h4>
  <p>Find f'(x) for f(x) = x³ + 2x:</p>
  <div class="formula">
f'(x) = d/dx(x³ + 2x)<br>
= d/dx(x³) + d/dx(2x)<br>
= 3x² + 2<br>
(power rule)
  </div>
  <p class="result">f'(x) = 3x² + 2</p>
</div>

Example - Integration:
<div class="step">
  <h4>Step 1: Integrate</h4>
  <p>Find ∫(2x + 3)dx:</p>
  <div class="formula">
∫(2x + 3)dx<br>
= ∫2x dx + ∫3 dx<br>
= 2(x²/2) + 3x + C<br>
= x² + 3x + C
  </div>
  <p class="result">x² + 3x + C</p>
</div>

Chain rule (break it down):
<div class="formula">
d/dx[f(g(x))]<br>
= f'(g(x)) · g'(x)<br>
<br>
Example:<br>
d/dx[(x²+1)³]<br>
= 3(x²+1)² · d/dx(x²+1)<br>
= 3(x²+1)² · 2x<br>
= 6x(x²+1)²
</div>

CRITICAL: Every operation on separate line with <br>`