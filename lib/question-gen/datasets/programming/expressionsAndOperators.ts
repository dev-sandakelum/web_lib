// expressionsAndOperators.ts
// Single dataset entry combining all lecture content from Lecture 03 – Expressions and Operators.pdf
import { Dataset } from "../../types/dataset";
export const expressionsAndOperatorsDataset: Dataset = {
  id: "Expressions-and-Operators",
  category: "Programming",
  subcategory: "Expressions and Operators",
  description:
    "Comprehensive overview of expressions, operators, and related concepts in programming.",
  content: `
Expressions and Operators

Expressions:
An expression is a combination of variables, constants, operators, and function invocations, constructed according to the syntax of the language.
Example: area = pi * pow(r , 2);

Types of expressions:
1. Assign a value to a variable: x = 7
2. Have a value without assignment: 3 + 4
3. Combine two or more expressions: x + 3 = 5x + 6

Operands and Operators:
Every expression has at least one operator and one or more operands.
Operands are values; operators represent computational (mathematical or logical) actions.

Arithmetic Operators:
Used to perform mathematical operations on numeric values.
Operators: + (Addition), - (Subtraction), * (Multiplication), / (Division), % (Modulus)
Example (A=6, B=2): A+B=8, A-B=4, A*B=12, A/B=3, A%B=0

Mixed Mode Arithmetic Expression:
If operands include both INTEGER and REAL values, INTEGERs are converted to REAL before computation.
Result type: REAL.
Examples: 1 + 2.5, 4.0 / 2

Arithmetic Operations On Characters:
Character variables in expressions are converted to ASCII integer values.
Example: ASCII('a') = 97, ASCII('B') = 66
‘a’ + 5 = ‘f’; ‘B’ – 10 = ‘8’

Divide (/) and Modulus (%) Operators:
Integer division: 5/2 = 2
Real division: 5/2.0 = 2.5
Modulus: 5%2 = 1
Avoid modulus with negative operands (inconsistent across systems).

Unary Minus Operator:
A unary operator acts on a single operand.
Unary minus changes the sign of its operand (equivalent to multiplying by –1).
Different from subtraction (requires two operands).

Assignment Operators:
Used to assign right-side values to left-side variables.
Examples: +=, -=, *=, /=, %=
Example program:
int a = 2;
a += 5; → 7
int b = 9;
b -= 3; → 6

Relational Operators:
Used to compare two values.
Examples: ==, !=, >, <, >=, <=
Note: Avoid using = instead of ==.

Logical Operators:
Used for logical operations:
1. AND (&&)
2. OR (||)
3. NOT (!)
Short-circuit evaluation stops execution once the result is known.

Logical “And”:
True only if both expressions are true.

Logical “OR”:
False only if both expressions are false.

Logical “NOT”:
Negates a logical expression (true → false, false → true).

Short-Circuit Evaluation:
If a == b || c == d || e == f
Once a == b is true, others are not evaluated.

Increment and Decrement Operators:
Increment (++) increases value by 1.
Decrement (--) decreases value by 1.
Prefix (++i / --i): executed before expression.
Postfix (i++ / i--): executed after expression.

Conditional (Ternary) Operator:
Returns one value if condition is true, another if false.
Syntax: (condition ? true_value : false_value)
Example: (A > 100 ? 0 : 1)

Bitwise Operators:
Perform bit-level operations.
Used only with integral types (char, int, long).
Operators:
& (AND), | (OR), ^ (XOR), << (Left Shift), >> (Right Shift), ~ (One’s Complement)

Operator Precedence:
Defines the order of evaluation.
* has higher precedence than +.
Parentheses override precedence.
Example: a = 6 + 5 * 3 → evaluates as 6 + (5 * 3) = 21.

Operator Associativity:
Defines order of execution for operators with same precedence (usually left-to-right).

Compound Statements (Blocks):
A compound statement is a list of statements enclosed in braces { }.
Acts as a single block of code.
Example:
{
  statement1;
  statement2;
}

Block Scope:
Variables declared outside a block are accessible inside.
Variables declared inside a block are only valid within that block.
Changes inside block are released after execution.
You can redeclare variable names inside nested blocks.

Library Functions in C:
Functions are reusable code segments that perform tasks.
Library functions are predefined and stored in header files (.h).
Example: #include <math.h> includes math functions.

Mathematical Functions (math.h):
Example syntax: pow(double base, double exponent);
Include header: #include <math.h>

End of Lecture – Thank You!
`,
};
