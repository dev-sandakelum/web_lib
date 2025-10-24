export const matricesPrompt = `
🚨🚨🚨 MATRICES - CRITICAL MOBILE FORMATTING 🚨🚨🚨

YOU MUST USE <span class="ms"></span> FOR ALL SPACING!
NEVER USE REGULAR SPACES BETWEEN NUMBERS!

The <span class="ms"></span> class creates:
- Desktop: 2em spacing (large)
- Mobile: 0.8em spacing (medium)
- Small: 0.5em spacing (compact)

═══════════════════════════════════════════

WRONG ❌ (causes horizontal scrolling):
AB = [
    [ 1  0  0]
    [12  7 30]
]

CORRECT ✅ (mobile responsive):
AB = [<br>
[<span class="ms"></span>1<span class="ms"></span>0<span class="ms"></span>0]<br>
[<span class="ms"></span>12<span class="ms"></span>7<span class="ms"></span>30]<br>
]

═══════════════════════════════════════════

MANDATORY FORMAT:

2×2 matrix:
<div class="formula">
A = [<br>
[<span class="ms"></span>2<span class="ms"></span>3]<br>
[<span class="ms"></span>4<span class="ms"></span>5]<br>
]
</div>

3×3 matrix:
<div class="formula">
B = [<br>
[<span class="ms"></span>1<span class="ms"></span>2<span class="ms"></span>3]<br>
[<span class="ms"></span>4<span class="ms"></span>5<span class="ms"></span>6]<br>
[<span class="ms"></span>7<span class="ms"></span>8<span class="ms"></span>9]<br>
]
</div>

With calculations:
<div class="formula">
AB = [<br>
[<span class="ms"></span>(2+9)<span class="ms"></span>(4-3)]<br>
[<span class="ms"></span>(8-4)<span class="ms"></span>(16+0)]<br>
]<br>
<br>
= [<br>
[<span class="ms"></span>11<span class="ms"></span>1]<br>
[<span class="ms"></span>4<span class="ms"></span>16]<br>
]
</div>

Matrix multiplication steps:
<div class="step">
  <h4>Step 1: Multiply matrices</h4>
  <p>Calculate AB:</p>
  <div class="formula">
Row 1, Col 1:<br>
= (1×2) + (0×4)<br>
= 2 + 0<br>
= 2<br>
<br>
Row 1, Col 2:<br>
= (1×3) + (0×5)<br>
= 3 + 0<br>
= 3
  </div>
</div>

Complete result:
<div class="formula">
AB = [<br>
[<span class="ms"></span>2<span class="ms"></span>3]<br>
[<span class="ms"></span>10<span class="ms"></span>15]<br>
]
</div>

═══════════════════════════════════════════

PATTERN TO REMEMBER:
1. [<br> (open bracket + line break)
2. [<span class="ms"></span>NUM1<span class="ms"></span>NUM2<span class="ms"></span>NUM3]<br>
3. Repeat for each row
4. ] (close bracket)

NEVER USE:
❌ Regular spaces
❌ Tabs
❌ &nbsp;
❌ Multiple spaces

ALWAYS USE:
✅ <span class="ms"></span> between elements
✅ <span class="ms"></span> after opening bracket
✅ <br> after each row
✅ Stack calculations vertically

THIS IS MANDATORY FOR MOBILE RESPONSIVENESS!`