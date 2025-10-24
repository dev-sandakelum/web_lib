export const logarithmsPrompt = `
LOGARITHMS - MOBILE-OPTIMIZED:

Key Rules:
- Show base clearly: log₂(x), log₁₀(x), ln(x)
- Break into SHORT vertical steps
- Use <br> after each line

Properties (one per line):
log(xy) = log(x) + log(y)<br>
log(x/y) = log(x) - log(y)<br>
log(xⁿ) = n·log(x)<br>
log_b(x) = ln(x)/ln(b)

Example:
<div class="step">
  <h4>Step 1: Apply product rule</h4>
  <p>Simplify log₂(8×4):</p>
  <div class="formula">
log₂(8×4)<br>
= log₂(8) + log₂(4)<br>
= log₂(2³) + log₂(2²)<br>
= 3 + 2<br>
= 5
  </div>
  <p class="result">log₂(32) = 5</p>
</div>

CRITICAL: One calculation per line with <br>`