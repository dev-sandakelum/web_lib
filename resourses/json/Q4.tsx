export const CProgrammingQuiz = {
  id: "c-programming-comprehensive",
  title: "C Programming Comprehensive Quiz",
  category: "Programming",
  questions: [
    {
      question: "What is the correct syntax to declare a function in C?",
      options: [
        "function_name(parameters) return_type",
        "return_type function_name(parameters)",
        "parameters function_name return_type",
        "declare function_name(parameters)"
      ],
      correctIndex: 1,
    },
    {
      question: "Which statement about arrays in C is FALSE?",
      options: [
        "Arrays store elements sequentially in memory",
        "Array size can be changed after declaration",
        "The first element is at index 0",
        "All elements must be of the same type"
      ],
      correctIndex: 1,
    },
    {
      question: "What will be the output of: for(int i=5; i>0; i--) printf(\"%d \", i);",
      options: [
        "1 2 3 4 5",
        "0 1 2 3 4 5",
        "5 4 3 2 1",
        "5 4 3 2 1 0"
      ],
      correctIndex: 2,
    },
    {
      question: "In a switch statement, what happens if the break statement is omitted?",
      options: [
        "Compilation error occurs",
        "Only that case executes",
        "Execution continues to the next case",
        "The program terminates"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the purpose of the 'void' keyword as a return type?",
      options: [
        "The function returns nothing",
        "The function returns an integer",
        "The function cannot be called",
        "The function has no parameters"
      ],
      correctIndex: 0,
    },
    {
      question: "Which loop guarantees execution at least once?",
      options: [
        "for loop",
        "while loop",
        "do-while loop",
        "All loops execute at least once"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the index of the last element in an array of size 10?",
      options: [
        "10",
        "9",
        "8",
        "11"
      ],
      correctIndex: 1,
    },
    {
      question: "Which header file is required for string manipulation functions like strlen()?",
      options: [
        "stdio.h",
        "stdlib.h",
        "string.h",
        "math.h"
      ],
      correctIndex: 2,
    },
    {
      question: "In pass by value, what happens to the original argument?",
      options: [
        "It is modified by the function",
        "It remains unchanged",
        "It becomes null",
        "It is deleted from memory"
      ],
      correctIndex: 1,
    },
    {
      question: "What does the 'continue' statement do in a loop?",
      options: [
        "Exits the entire loop",
        "Skips remaining statements and continues with next iteration",
        "Terminates the program",
        "Repeats the current iteration"
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is NOT a valid way to declare a 1D array parameter in a function?",
      options: [
        "int myFunc(int arr[])",
        "int myFunc(int *arr)",
        "int myFunc(int arr[10])",
        "int myFunc(int arr{})"
      ],
      correctIndex: 3,
    },
    {
      question: "What character terminates a string in C?",
      options: [
        "'\\0'",
        "'\\n'",
        "' '",
        "'\\t'"
      ],
      correctIndex: 0,
    },
    {
      question: "In a 2D array declaration int x[3][2], how many elements does it contain?",
      options: [
        "5",
        "3",
        "6",
        "2"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the output when: int a=5; printf(\"%d\", ++a);",
      options: [
        "5",
        "6",
        "7",
        "4"
      ],
      correctIndex: 1,
    },
    {
      question: "Which statement about function prototypes is correct?",
      options: [
        "They are always optional",
        "Parameter names are mandatory",
        "They inform the compiler about function signature",
        "They must be placed after main()"
      ],
      correctIndex: 2,
    },
    {
      question: "What does strcmp(s1, s2) return if s1 equals s2?",
      options: [
        "1",
        "0",
        "-1",
        "true"
      ],
      correctIndex: 1,
    },
    {
      question: "Which loop type is best when the number of iterations is known beforehand?",
      options: [
        "while loop",
        "do-while loop",
        "for loop",
        "All are equally suitable"
      ],
      correctIndex: 2,
    },
    {
      question: "What is a recursive function?",
      options: [
        "A function that returns multiple values",
        "A function that calls itself",
        "A function with no parameters",
        "A function that never terminates"
      ],
      correctIndex: 1,
    },
    {
      question: "In nested loops, when does the outer loop increment?",
      options: [
        "Before the inner loop starts",
        "During each iteration of inner loop",
        "After the inner loop completes all iterations",
        "Only at the end of program"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the correct way to read a string using scanf()?",
      options: [
        "scanf(\"%s\", &str);",
        "scanf(\"%s\", str);",
        "scanf(\"%c\", str);",
        "scanf(str);"
      ],
      correctIndex: 1,
    },
    {
      question: "Which of these is a pre-test loop?",
      options: [
        "do-while loop",
        "while loop",
        "Both while and do-while",
        "Neither while nor do-while"
      ],
      correctIndex: 1,
    },
    {
      question: "What happens if you access array index outside its bounds?",
      options: [
        "Compilation error",
        "The program stops immediately",
        "May cause unexpected output or undefined behavior",
        "Automatically resizes the array"
      ],
      correctIndex: 2,
    },
    {
      question: "Which function copies one string to another?",
      options: [
        "strcmp()",
        "strlen()",
        "strcpy()",
        "strcat()"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the minimum number of times a do-while loop executes?",
      options: [
        "0",
        "1",
        "2",
        "Depends on condition"
      ],
      correctIndex: 1,
    },
    {
      question: "In an if-else-if ladder, when does the default else execute?",
      options: [
        "Always executes first",
        "When all conditions are false",
        "When any condition is true",
        "Never executes"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the signature of a function?",
      options: [
        "Return type only",
        "Function name only",
        "Function name and parameter list",
        "Function body"
      ],
      correctIndex: 2,
    },
    {
      question: "Which is NOT a benefit of using functions?",
      options: [
        "Code reusability",
        "Easy debugging",
        "Increases code size",
        "Easy understanding"
      ],
      correctIndex: 2,
    },
    {
      question: "What does the break statement do in a switch case?",
      options: [
        "Continues to next case",
        "Terminates the switch statement",
        "Restarts the switch",
        "Does nothing"
      ],
      correctIndex: 1,
    },
    {
      question: "How do you declare a 2D array with 4 rows and 5 columns?",
      options: [
        "int arr[5][4];",
        "int arr[4,5];",
        "int arr(4)(5);",
        "int arr[4][5];"
      ],
      correctIndex: 3,
    },
    {
      question: "What is a sentinel value used for?",
      options: [
        "To initialize arrays",
        "To terminate loops when count is unknown",
        "To start functions",
        "To declare variables"
      ],
      correctIndex: 1,
    },
    {
      question: "Which operator is used in switch statements?",
      options: [
        ">=",
        "<=",
        "==",
        "!="
      ],
      correctIndex: 2,
    },
    {
      question: "What type of control structure is a switch statement?",
      options: [
        "Sequential",
        "Selection",
        "Repetition",
        "Jump"
      ],
      correctIndex: 1,
    },
    {
      question: "In counter-controlled repetition, what must be done in each iteration?",
      options: [
        "Print output",
        "Modify the control variable",
        "Declare new variables",
        "Call a function"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of gets() function?",
      options: [
        "To write a string",
        "To compare strings",
        "To read a string from user",
        "To concatenate strings"
      ],
      correctIndex: 2,
    },
    {
      question: "Can a function call itself in C?",
      options: [
        "No, never allowed",
        "Yes, called recursion",
        "Only in main function",
        "Only with special keyword"
      ],
      correctIndex: 1,
    },
    {
      question: "Which is true about the default case in switch?",
      options: [
        "It must be placed at the end",
        "It is mandatory",
        "It can appear anywhere in the switch",
        "It requires a break statement always"
      ],
      correctIndex: 2,
    },
    {
      question: "What does strcat(s1, s2) do?",
      options: [
        "Compares s1 and s2",
        "Copies s2 to s1",
        "Concatenates s2 to the end of s1",
        "Finds length of s1"
      ],
      correctIndex: 2,
    },
    {
      question: "Which of the following initializes all elements of an array to zero?",
      options: [
        "int arr[10] = {0};",
        "int arr[10] = {};",
        "int arr[10];",
        "int arr[10] = null;"
      ],
      correctIndex: 0,
    },
    {
      question: "What is the first part executed in a for loop?",
      options: [
        "Condition check",
        "Loop body",
        "Initialization",
        "Increment/decrement"
      ],
      correctIndex: 2,
    },
    {
      question: "In nested if statements, which else matches with which if?",
      options: [
        "The first if",
        "The last if",
        "The nearest unmatched if",
        "All if statements"
      ],
      correctIndex: 2,
    },
    {
      question: "What does the main() function return in a typical C program?",
      options: [
        "void",
        "int",
        "char",
        "float"
      ],
      correctIndex: 1,
    },
    {
      question: "Which is correct about case labels in switch?",
      options: [
        "Must be floating point",
        "Must be integral type or character",
        "Can use relational operators",
        "Must be variables"
      ],
      correctIndex: 1,
    },
    {
      question: "What does strlen(str) return?",
      options: [
        "Size of string including null character",
        "Number of characters excluding null character",
        "Memory address of string",
        "Always returns 0"
      ],
      correctIndex: 1,
    },
    {
      question: "Can you declare a function inside another function in C?",
      options: [
        "Yes, always allowed",
        "No, not allowed",
        "Only in main()",
        "Only for recursive functions"
      ],
      correctIndex: 1,
    },
    {
      question: "What is an infinite loop?",
      options: [
        "A loop that never starts",
        "A loop where exit condition is never met",
        "A loop with no body",
        "A loop that executes exactly once"
      ],
      correctIndex: 1,
    },
    {
      question: "Which statement about 2D arrays is correct?",
      options: [
        "They are stored in random memory locations",
        "They can be called array of arrays",
        "First index represents columns",
        "They cannot be passed to functions"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of the #define directive?",
      options: [
        "To include header files",
        "To define constants or macros",
        "To declare functions",
        "To create loops"
      ],
      correctIndex: 1,
    },
    {
      question: "In C, can two functions have the same name?",
      options: [
        "Yes, function overloading is supported",
        "No, C does not support function overloading",
        "Yes, if they have different return types",
        "Only if they are in different files"
      ],
      correctIndex: 1,
    },
    {
      question: "What does the expression (x <= 10) evaluate to?",
      options: [
        "An integer value",
        "A boolean value (0 or 1)",
        "A string",
        "A floating point number"
      ],
      correctIndex: 1,
    },
    {
      question: "Which is the correct way to pass a 2D array to a function?",
      options: [
        "void func(int arr[][])",
        "void func(int arr[3][])",
        "void func(int arr[][5])",
        "void func(int **arr)"
      ],
      correctIndex: 2,
    },
  ],
};