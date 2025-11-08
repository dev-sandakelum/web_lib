// datasets/programming/programming.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const ProgrammingDataset: Dataset = {
  id: "programming-fundamentals",
  category: "Programming",
  subcategory: "Expressions, Arrays, Functions & Pointers, Strings, File Handling, Unions",
  description: "Comprehensive programming concepts including expressions, arrays, functions, pointers, strings, file handling, structures, and unions in C/C++.",
  content: `
[cite_start]Topic: Programming Fundamentals - Expressions, Arrays, Functions, Pointers, Strings, File Handling, and Unions [cite: 1]

Objectives:
[cite_start]• Understand expressions and operators in programming [cite: 2, 3, 4, 5]
[cite_start]• Learn about arrays and their operations [cite: 6, 7, 8, 9, 10]
[cite_start]• Master functions, function parameters, and recursion [cite: 11, 12, 13, 14, 15]
[cite_start]• Understand pointers, pointer arithmetic, and dynamic memory allocation [cite: 16, 17, 18, 19, 20]
[cite_start]• Work with strings and string manipulation functions [cite: 21, 22, 23, 24]
[cite_start]• Learn file handling operations [cite: 25, 26, 27, 28]
[cite_start]• Understand structures and unions [cite: 29, 30, 31, 32]

---
## Expressions and Operators

### What is an Expression?
[cite_start]• An expression is a combination of operators, constants, and variables that yields a single value [cite: 2].
[cite_start]• Expressions can be arithmetic, relational, logical, or assignment-based [cite: 2].

### Types of Operators

#### Arithmetic Operators
[cite_start]Arithmetic operators perform mathematical operations [cite: 3]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| + | [cite_start]Addition [cite: 3] | [cite_start]5 + 3 = 8 [cite: 3] |
| - | [cite_start]Subtraction [cite: 3] | [cite_start]5 - 3 = 2 [cite: 3] |
| * | [cite_start]Multiplication [cite: 3] | [cite_start]5 * 3 = 15 [cite: 3] |
| / | [cite_start]Division [cite: 3] | [cite_start]6 / 3 = 2 [cite: 3] |
| % | [cite_start]Modulus (remainder) [cite: 3] | [cite_start]5 % 3 = 2 [cite: 3] |
| ++ | [cite_start]Increment [cite: 3] | [cite_start]x++ increments x by 1 [cite: 3] |
| -- | [cite_start]Decrement [cite: 3] | [cite_start]x-- decrements x by 1 [cite: 3] |

#### Relational Operators
[cite_start]Relational operators compare two values and return true (1) or false (0) [cite: 4]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| == | [cite_start]Equal to [cite: 4] | [cite_start]5 == 5 returns true [cite: 4] |
| != | [cite_start]Not equal to [cite: 4] | [cite_start]5 != 3 returns true [cite: 4] |
| > | [cite_start]Greater than [cite: 4] | [cite_start]5 > 3 returns true [cite: 4] |
| < | [cite_start]Less than [cite: 4] | [cite_start]3 < 5 returns true [cite: 4] |
| >= | [cite_start]Greater than or equal to [cite: 4] | [cite_start]5 >= 5 returns true [cite: 4] |
| <= | [cite_start]Less than or equal to [cite: 4] | [cite_start]3 <= 5 returns true [cite: 4] |

#### Logical Operators
[cite_start]Logical operators perform logical operations [cite: 5]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| && | [cite_start]Logical AND - returns true if both conditions are true [cite: 5] | [cite_start](5 > 3) && (2 < 4) returns true [cite: 5] |
| OR | [cite_start]Logical OR - returns true if at least one condition is true [cite: 5] | [cite_start](5 > 3) OR (2 > 4) returns true [cite: 5] |
| ! | [cite_start]Logical NOT - reverses the logical state [cite: 5] | [cite_start]!(5 > 3) returns false [cite: 5] |

#### Assignment Operators
[cite_start]Assignment operators assign values to variables [cite: 5]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| = | [cite_start]Simple assignment [cite: 5] | [cite_start]x = 5 [cite: 5] |
| += | [cite_start]Add and assign [cite: 5] | [cite_start]x += 3 is equivalent to x = x + 3 [cite: 5] |
| -= | [cite_start]Subtract and assign [cite: 5] | [cite_start]x -= 3 is equivalent to x = x - 3 [cite: 5] |
| *= | [cite_start]Multiply and assign [cite: 5] | [cite_start]x *= 3 is equivalent to x = x * 3 [cite: 5] |
| /= | [cite_start]Divide and assign [cite: 5] | [cite_start]x /= 3 is equivalent to x = x / 3 [cite: 5] |
| %= | [cite_start]Modulus and assign [cite: 5] | [cite_start]x %= 3 is equivalent to x = x % 3 [cite: 5] |

### Operator Precedence
[cite_start]• Operator precedence determines the order in which operators are evaluated in an expression [cite: 5].
[cite_start]• Operators with higher precedence are evaluated first [cite: 5].
[cite_start]• Parentheses can be used to override default precedence [cite: 5].

---
## Arrays

### What is an Array?
[cite_start]• An array is a collection of elements of the same data type stored in contiguous memory locations [cite: 6].
[cite_start]• Arrays allow you to store multiple values under a single variable name [cite: 6].
[cite_start]• Array elements are accessed using an index, starting from 0 [cite: 6].

### Array Declaration and Initialization
[cite_start]• Array declaration syntax: datatype arrayName[size]; [cite: 7].
[cite_start]• Example: int numbers[5]; declares an array of 5 integers [cite: 7].
[cite_start]• Arrays can be initialized during declaration: int numbers[5] = {1, 2, 3, 4, 5}; [cite: 7].
[cite_start]• Partial initialization is allowed: int numbers[5] = {1, 2}; (remaining elements are set to 0) [cite: 7].

### Accessing Array Elements
[cite_start]• Array elements are accessed using the index operator [] [cite: 8].
[cite_start]• Example: numbers[0] accesses the first element, numbers[4] accesses the fifth element [cite: 8].
[cite_start]• Array indexing starts at 0 and ends at size-1 [cite: 8].

### Multi-dimensional Arrays
[cite_start]• Multi-dimensional arrays are arrays of arrays [cite: 9].
[cite_start]• Two-dimensional array declaration: datatype arrayName[rows][columns]; [cite: 9].
[cite_start]• Example: int matrix[3][4]; declares a 3x4 matrix [cite: 9].
[cite_start]• Initialization example: int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}}; [cite: 9].

### Array Operations
[cite_start]Common array operations include [cite: 10]:
* Traversing (iterating through all elements)
* Searching for an element
* Sorting elements
* Finding maximum/minimum values
* Calculating sum or average
* Inserting and deleting elements

---
## Functions

### What is a Function?
[cite_start]• A function is a block of code that performs a specific task [cite: 11].
[cite_start]• Functions promote code reusability and modularity [cite: 11].
[cite_start]• A function is defined once and can be called multiple times [cite: 11].

### Function Components
[cite_start]A function consists of four main components [cite: 12]:

| Component | Description |
| :--- | :--- |
| Return Type | [cite_start]The data type of the value returned by the function (e.g., int, float, void) [cite: 12]. |
| Function Name | [cite_start]The identifier used to call the function [cite: 12]. |
| Parameters | [cite_start]Variables that receive values when the function is called (optional) [cite: 12]. |
| Function Body | [cite_start]The block of code that defines what the function does [cite: 12]. |

### Function Declaration and Definition
[cite_start]• Function declaration (prototype): returnType functionName(parameterList); [cite: 13].
[cite_start]• Function definition includes the actual implementation [cite: 13].
[cite_start]• Example declaration: int add(int a, int b); [cite: 13].
[cite_start]• Example definition: int add(int a, int b) { return a + b; } [cite: 13].

### Function Calling
[cite_start]• Functions are called using their name followed by arguments in parentheses [cite: 13].
[cite_start]• Example: result = add(5, 3); [cite: 13].

### Parameter Passing Methods

#### Pass by Value
[cite_start]• In pass by value, a copy of the actual parameter is passed to the function [cite: 14].
[cite_start]• Changes made to the parameter inside the function do not affect the original variable [cite: 14].
[cite_start]• Example: void modify(int x) { x = 10; } // Original value unchanged [cite: 14].

#### Pass by Reference
[cite_start]• In pass by reference, the address of the actual parameter is passed to the function [cite: 14].
[cite_start]• Changes made to the parameter inside the function affect the original variable [cite: 14].
[cite_start]• In C, this is achieved using pointers [cite: 14].
[cite_start]• Example: void modify(int *x) { *x = 10; } // Original value changed [cite: 14].

### Recursion
[cite_start]• Recursion is a technique where a function calls itself [cite: 15].
[cite_start]• A recursive function must have a base case to prevent infinite recursion [cite: 15].
[cite_start]• Example: Factorial function - factorial(n) = n * factorial(n-1), with base case factorial(0) = 1 [cite: 15].
[cite_start]• Recursion is useful for problems that can be broken down into smaller, similar subproblems [cite: 15].

---
## Pointers

### What is a Pointer?
[cite_start]• A pointer is a variable that stores the memory address of another variable [cite: 16].
[cite_start]• Pointers allow direct memory access and manipulation [cite: 16].
[cite_start]• Pointers are declared using the asterisk (*) symbol [cite: 16].

### Pointer Declaration and Initialization
[cite_start]• Pointer declaration syntax: datatype *pointerName; [cite: 17].
[cite_start]• Example: int *ptr; declares a pointer to an integer [cite: 17].
[cite_start]• The address-of operator (&) is used to get the address of a variable [cite: 17].
[cite_start]• Example: ptr = &x; assigns the address of x to ptr [cite: 17].
[cite_start]• The dereference operator (*) is used to access the value at the address stored in a pointer [cite: 17].
[cite_start]• Example: *ptr accesses the value of the variable pointed to by ptr [cite: 17].

### Pointer Arithmetic
[cite_start]Pointer arithmetic allows performing arithmetic operations on pointers [cite: 18]:

| Operation | Description |
| :--- | :--- |
| ptr++ | [cite_start]Increments pointer to point to the next memory location [cite: 18]. |
| ptr-- | [cite_start]Decrements pointer to point to the previous memory location [cite: 18]. |
| ptr + n | [cite_start]Moves pointer n positions forward [cite: 18]. |
| ptr - n | [cite_start]Moves pointer n positions backward [cite: 18]. |
| ptr1 - ptr2 | [cite_start]Gives the number of elements between two pointers [cite: 18]. |

[cite_start]• Pointer arithmetic is scaled by the size of the data type [cite: 18].

### Pointers and Arrays
[cite_start]• The name of an array is a pointer to its first element [cite: 19].
[cite_start]• Array notation and pointer notation can be used interchangeably [cite: 19].
[cite_start]• Example: arr[i] is equivalent to *(arr + i) [cite: 19].

### Dynamic Memory Allocation
[cite_start]Dynamic memory allocation allows allocating memory at runtime [cite: 20]:

| Function | Description | Example |
| :--- | :--- | :--- |
| malloc() | [cite_start]Allocates specified bytes of memory and returns a pointer [cite: 20]. | [cite_start]ptr = (int*)malloc(5 * sizeof(int)); [cite: 20] |
| calloc() | [cite_start]Allocates memory and initializes all bytes to zero [cite: 20]. | [cite_start]ptr = (int*)calloc(5, sizeof(int)); [cite: 20] |
| realloc() | [cite_start]Resizes previously allocated memory [cite: 20]. | [cite_start]ptr = (int*)realloc(ptr, 10 * sizeof(int)); [cite: 20] |
| free() | [cite_start]Deallocates previously allocated memory [cite: 20]. | [cite_start]free(ptr); [cite: 20] |

[cite_start]• Always free dynamically allocated memory to prevent memory leaks [cite: 20].

### Pointer to Pointer
[cite_start]• A pointer to pointer is a pointer that stores the address of another pointer [cite: 20].
[cite_start]• Declaration syntax: datatype **pointerName; [cite: 20].
[cite_start]• Example: int **pptr; [cite: 20].

### Function Pointers
[cite_start]• Function pointers store the address of functions [cite: 20].
[cite_start]• They allow passing functions as arguments to other functions [cite: 20].
[cite_start]• Declaration syntax: returnType (*pointerName)(parameterTypes); [cite: 20].

---
## Strings

### What is a String?
[cite_start]• A string is a sequence of characters terminated by a null character (backslash 0) [cite: 21].
[cite_start]• In C, strings are implemented as arrays of characters [cite: 21].
[cite_start]• The null character marks the end of the string [cite: 21].

### String Declaration and Initialization
[cite_start]• String declaration as character array: char str[size]; [cite: 22].
[cite_start]• String initialization: char str[] = "Hello"; [cite: 22].
[cite_start]• String initialization with explicit null terminator: char str[] = {'H', 'e', 'l', 'l', 'o', null}; [cite: 22].
[cite_start]• String pointer: char *str = "Hello"; [cite: 22].

### String Input/Output
[cite_start]Common string I/O functions [cite: 23]:

| Function | Description | Example |
| :--- | :--- | :--- |
| scanf() | [cite_start]Reads a string until whitespace [cite: 23]. | [cite_start]scanf("%s", str); [cite: 23] |
| gets() | [cite_start]Reads an entire line including spaces (unsafe, deprecated) [cite: 23]. | [cite_start]gets(str); [cite: 23] |
| fgets() | [cite_start]Safer alternative to gets(), reads up to n-1 characters [cite: 23]. | [cite_start]fgets(str, size, stdin); [cite: 23] |
| printf() | [cite_start]Prints a string [cite: 23]. | [cite_start]printf("%s", str); [cite: 23] |
| puts() | [cite_start]Prints a string followed by a newline [cite: 23]. | [cite_start]puts(str); [cite: 23] |

### String Manipulation Functions
[cite_start]Common string functions from string.h [cite: 24]:

| Function | Description | Example |
| :--- | :--- | :--- |
| strlen() | [cite_start]Returns the length of a string [cite: 24]. | [cite_start]len = strlen(str); [cite: 24] |
| strcpy() | [cite_start]Copies one string to another [cite: 24]. | [cite_start]strcpy(dest, src); [cite: 24] |
| strncpy() | [cite_start]Copies n characters from one string to another [cite: 24]. | [cite_start]strncpy(dest, src, n); [cite: 24] |
| strcat() | [cite_start]Concatenates two strings [cite: 24]. | [cite_start]strcat(dest, src); [cite: 24] |
| strncat() | [cite_start]Concatenates n characters from src to dest [cite: 24]. | [cite_start]strncat(dest, src, n); [cite: 24] |
| strcmp() | [cite_start]Compares two strings lexicographically [cite: 24]. | [cite_start]result = strcmp(str1, str2); [cite: 24] |
| strncmp() | [cite_start]Compares first n characters of two strings [cite: 24]. | [cite_start]result = strncmp(str1, str2, n); [cite: 24] |
| strchr() | [cite_start]Finds first occurrence of a character in string [cite: 24]. | [cite_start]ptr = strchr(str, 'a'); [cite: 24] |
| strstr() | [cite_start]Finds first occurrence of a substring [cite: 24]. | [cite_start]ptr = strstr(str, "hello"); [cite: 24] |

---
## File Handling

### What is File Handling?
[cite_start]• File handling allows programs to store data permanently in files [cite: 25].
[cite_start]• Files can be used to read input data and write output data [cite: 25].
[cite_start]• C provides file handling functions in stdio.h [cite: 25].

### File Operations
[cite_start]Basic file operations include [cite: 26]:
* Opening a file
* Reading from a file
* Writing to a file
* Closing a file
* Seeking to a specific position
* Checking end of file

### File Opening Modes
[cite_start]Files can be opened in different modes [cite: 27]:

| Mode | Description |
| :--- | :--- |
| "r" | [cite_start]Opens file for reading; file must exist [cite: 27]. |
| "w" | [cite_start]Opens file for writing; creates new file or truncates existing file [cite: 27]. |
| "a" | [cite_start]Opens file for appending; creates new file if it doesn't exist [cite: 27]. |
| "r+" | [cite_start]Opens file for both reading and writing; file must exist [cite: 27]. |
| "w+" | [cite_start]Opens file for both reading and writing; creates new file or truncates existing [cite: 27]. |
| "a+" | [cite_start]Opens file for reading and appending; creates new file if it doesn't exist [cite: 27]. |

### File Handling Functions
[cite_start]Common file handling functions [cite: 28]:

| Function | Description | Example |
| :--- | :--- | :--- |
| fopen() | [cite_start]Opens a file and returns a file pointer [cite: 28]. | [cite_start]FILE *fp = fopen("file.txt", "r"); [cite: 28] |
| fclose() | [cite_start]Closes a file [cite: 28]. | [cite_start]fclose(fp); [cite: 28] |
| fgetc() | [cite_start]Reads a single character from file [cite: 28]. | [cite_start]ch = fgetc(fp); [cite: 28] |
| fputc() | [cite_start]Writes a single character to file [cite: 28]. | [cite_start]fputc('A', fp); [cite: 28] |
| fgets() | [cite_start]Reads a string from file [cite: 28]. | [cite_start]fgets(str, size, fp); [cite: 28] |
| fputs() | [cite_start]Writes a string to file [cite: 28]. | [cite_start]fputs("Hello", fp); [cite: 28] |
| fscanf() | [cite_start]Reads formatted input from file [cite: 28]. | [cite_start]fscanf(fp, "%d", &num); [cite: 28] |
| fprintf() | [cite_start]Writes formatted output to file [cite: 28]. | [cite_start]fprintf(fp, "%d", num); [cite: 28] |
| fread() | [cite_start]Reads block of data from file [cite: 28]. | [cite_start]fread(buffer, size, count, fp); [cite: 28] |
| fwrite() | [cite_start]Writes block of data to file [cite: 28]. | [cite_start]fwrite(buffer, size, count, fp); [cite: 28] |
| fseek() | [cite_start]Sets file position indicator [cite: 28]. | [cite_start]fseek(fp, offset, SEEK_SET); [cite: 28] |
| ftell() | [cite_start]Returns current file position [cite: 28]. | [cite_start]pos = ftell(fp); [cite: 28] |
| rewind() | [cite_start]Sets file position to beginning [cite: 28]. | [cite_start]rewind(fp); [cite: 28] |
| feof() | [cite_start]Checks if end of file is reached [cite: 28]. | [cite_start]if(feof(fp)) {...} [cite: 28] |

### Binary vs Text Files
[cite_start]• Text files store data in human-readable format [cite: 28].
[cite_start]• Binary files store data in binary format, which is more efficient for non-text data [cite: 28].
[cite_start]• Binary mode is specified by adding 'b' to the mode (e.g., "rb", "wb") [cite: 28].

---
## Structures

### What is a Structure?
[cite_start]• A structure is a user-defined data type that groups related variables of different data types [cite: 29].
[cite_start]• Structures allow creating complex data types [cite: 29].
[cite_start]• Each variable in a structure is called a member [cite: 29].

### Structure Declaration and Definition
[cite_start]• Structure declaration syntax: struct StructureName { datatype member1; datatype member2; }; [cite: 30].
[cite_start]• Example: struct Student { int id; char name[50]; float gpa; }; [cite: 30].
[cite_start]• Structure variable declaration: struct Student student1; [cite: 30].

### Accessing Structure Members
[cite_start]• Structure members are accessed using the dot (.) operator [cite: 30].
[cite_start]• Example: student1.id = 101; [cite: 30].
[cite_start]• For structure pointers, use the arrow (->) operator [cite: 30].
[cite_start]• Example: ptr->id = 101; [cite: 30].

### Array of Structures
[cite_start]• An array of structures allows storing multiple structure variables [cite: 30].
[cite_start]• Example: struct Student students[50]; [cite: 30].

### Nested Structures
[cite_start]• A structure can contain another structure as a member [cite: 30].
[cite_start]• This is called a nested structure [cite: 30].

---
## Unions

### What is a Union?
[cite_start]• A union is a user-defined data type similar to a structure, but all members share the same memory location [cite: 31].
[cite_start]• Only one member can hold a value at any given time [cite: 31].
[cite_start]• The size of a union is equal to the size of its largest member [cite: 31].

### Union Declaration and Definition
[cite_start]• Union declaration syntax: union UnionName { datatype member1; datatype member2; }; [cite: 32].
[cite_start]• Example: union Data { int i; float f; char c; }; [cite: 32].
[cite_start]• Union variable declaration: union Data data1; [cite: 32].

### Accessing Union Members
[cite_start]• Union members are accessed using the dot (.) operator, similar to structures [cite: 32].
[cite_start]• Example: data1.i = 10; [cite: 32].
[cite_start]• When one member is assigned a value, other members become invalid [cite: 32].

### Difference Between Structure and Union
[cite_start]Key differences between structures and unions [cite: 32]:

| Aspect | Structure | Union |
| :--- | :--- | :--- |
| Memory Allocation | [cite_start]Each member has its own memory location [cite: 32]. | [cite_start]All members share the same memory location [cite: 32]. |
| Size | [cite_start]Size is sum of all members (plus padding) [cite: 32]. | [cite_start]Size is equal to the largest member [cite: 32]. |
| Value Storage | [cite_start]All members can hold values simultaneously [cite: 32]. | [cite_start]Only one member can hold a value at a time [cite: 32]. |
| Access | [cite_start]All members can be accessed anytime [cite: 32]. | [cite_start]Only the last assigned member has valid value [cite: 32]. |

### When to Use Unions
[cite_start]• Unions are useful when you need to store different types of data in the same memory location at different times [cite: 32].
[cite_start]• Unions help save memory when only one member is needed at a time [cite: 32].
[cite_start]• Common use case: Type punning and interpreting the same data in different ways [cite: 32].
`
};