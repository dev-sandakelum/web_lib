export const vectorsPrompt = `
VECTORS - MOBILE-OPTIMIZED FORMATTING:

Key Rules:
- Stack components VERTICALLY for long vectors
- Break calculations into SHORT lines
- Use <br> frequently to avoid horizontal scrolling

Show components clearly:
v = (3, 4, 5) for short vectors
OR for longer:
v = (<br>
<span class="ms"></span>3,<br>
<span class="ms"></span>4,<br>
<span class="ms"></span>5<br>
)

Magnitude calculation:
||v|| = √(x² + y²)<br>
= √(3² + 4²)<br>
= √(9 + 16)<br>
= √25<br>
= 5

Dot product:
a · b = a₁b₁ + a₂b₂<br>
= (3)(2) + (4)(5)<br>
= 6 + 20<br>
= 26

Example step:
<div class="step">
  <h4>Step 1: Find magnitude</h4>
  <p>Calculate length of v = (3, 4):</p>
  <div class="formula">
||v|| = √(x² + y²)<br>
= √(3² + 4²)<br>
= √(9 + 16)<br>
= √25<br>
= 5
  </div>
  <p class="result">Magnitude = 5 units</p>
</div>

CRITICAL: Break every calculation into individual lines with <br>`