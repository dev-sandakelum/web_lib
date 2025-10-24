export const trigonometryPrompt = `
TRIGONOMETRY - MOBILE-OPTIMIZED:

Key Rules:
- Always state degrees° or radians
- Break calculations into SHORT lines
- Use <br> after each step
- Stack identities vertically

Common values (keep on ONE line each):
sin(30°) = 1/2<br>
cos(45°) = √2/2<br>
tan(60°) = √3

Conversions:
180° = π rad<br>
90° = π/2 rad<br>
60° = π/3 rad

Example with identity:
<div class="step">
  <h4>Step 1: Apply identity</h4>
  <p>Use sin²(θ) + cos²(θ) = 1:</p>
  <div class="formula">
sin²(30°) + cos²(30°) = 1<br>
(1/2)² + (√3/2)² = 1<br>
1/4 + 3/4 = 1<br>
1 = 1 ✓
  </div>
</div>

CRITICAL: Each calculation step on NEW line with <br>`