// datasets/programming/programming.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const programmingDataset: Dataset = {
  id: "programming-fundamentals",
  category: "Programming",
  subcategory: "Expressions, Arrays, Functions & Pointers, Strings, File Handling, Unions",
  description: "Comprehensive C programming concepts including expressions, arrays, functions, pointers, strings, file handling, structures, and unions.",
  content: `
[cite_start]Topic: C Programming Fundamentals - Expressions, Arrays, Functions, Pointers, Strings, File Handling, and Unions [cite: 1]

Objectives:
[cite_start]• Understand expressions and operators in C programming [cite: 2, 3, 4, 5]
[cite_start]• Learn about arrays and their operations in C [cite: 6, 7, 8, 9, 10]
[cite_start]• Master C functions, function parameters, and recursion [cite: 11, 12, 13, 14, 15]
[cite_start]• Understand pointers, pointer arithmetic, and dynamic memory allocation in C [cite: 16, 17, 18, 19, 20]
[cite_start]• Work with strings and string manipulation functions in C [cite: 21, 22, 23, 24]
[cite_start]• Learn file handling operations in C [cite: 25, 26, 27, 28]
[cite_start]• Understand structures and unions in C [cite: 29, 30, 31, 32]

---
## Expressions and Operators in C

### What is an Expression?
[cite_start]• An expression in C is a combination of operators, constants, and variables that yields a single value [cite: 2].
[cite_start]• Expressions can be arithmetic, relational, logical, or assignment-based [cite: 2].

### Types of Operators in C

#### Arithmetic Operators
[cite_start]Arithmetic operators in C perform mathematical operations [cite: 3]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| + | [cite_start]Addition [cite: 3] | [cite_start]5 + 3 results in 8 [cite: 3] |
| - | [cite_start]Subtraction [cite: 3] | [cite_start]5 - 3 results in 2 [cite: 3] |
| * | [cite_start]Multiplication [cite: 3] | [cite_start]5 * 3 results in 15 [cite: 3] |
| / | [cite_start]Division [cite: 3] | [cite_start]6 / 3 results in 2 [cite: 3] |
| % | [cite_start]Modulus (remainder) [cite: 3] | [cite_start]5 % 3 results in 2 [cite: 3] |
| ++ | [cite_start]Increment [cite: 3] | [cite_start]x++ increments x by 1 [cite: 3] |
| -- | [cite_start]Decrement [cite: 3] | [cite_start]x-- decrements x by 1 [cite: 3] |

[cite_start]• The modulus operator (%) only works with integer operands in C [cite: 3].
[cite_start]• Increment and decrement operators have both prefix (++x, --x) and postfix (x++, x--) forms [cite: 3].

#### Relational Operators
[cite_start]Relational operators in C compare two values and return 1 (true) or 0 (false) [cite: 4]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| == | [cite_start]Equal to [cite: 4] | [cite_start]5 == 5 returns 1 [cite: 4] |
| != | [cite_start]Not equal to [cite: 4] | [cite_start]5 != 3 returns 1 [cite: 4] |
| > | [cite_start]Greater than [cite: 4] | [cite_start]5 > 3 returns 1 [cite: 4] |
| < | [cite_start]Less than [cite: 4] | [cite_start]3 < 5 returns 1 [cite: 4] |
| >= | [cite_start]Greater than or equal to [cite: 4] | [cite_start]5 >= 5 returns 1 [cite: 4] |
| <= | [cite_start]Less than or equal to [cite: 4] | [cite_start]3 <= 5 returns 1 [cite: 4] |

[cite_start]• In C, 0 represents false and any non-zero value represents true [cite: 4].

#### Logical Operators
[cite_start]Logical operators in C perform logical operations [cite: 5]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| && | [cite_start]Logical AND - returns 1 if both conditions are true [cite: 5] | [cite_start](5 > 3) && (2 < 4) returns 1 [cite: 5] |
| two pipes | [cite_start]Logical OR - returns 1 if at least one condition is true [cite: 5] | [cite_start](5 > 3) OR (2 > 4) returns 1 [cite: 5] |
| ! | [cite_start]Logical NOT - reverses the logical state [cite: 5] | [cite_start]!(5 > 3) returns 0 [cite: 5] |

[cite_start]• Logical operators use short-circuit evaluation in C [cite: 5].

#### Assignment Operators
[cite_start]Assignment operators in C assign values to variables [cite: 5]:

| Operator | Description | Example |
| :--- | :--- | :--- |
| = | [cite_start]Simple assignment [cite: 5] | [cite_start]x = 5 assigns 5 to x [cite: 5] |
| += | [cite_start]Add and assign [cite: 5] | [cite_start]x += 3 is equivalent to x = x + 3 [cite: 5] |
| -= | [cite_start]Subtract and assign [cite: 5] | [cite_start]x -= 3 is equivalent to x = x - 3 [cite: 5] |
| *= | [cite_start]Multiply and assign [cite: 5] | [cite_start]x *= 3 is equivalent to x = x * 3 [cite: 5] |
| /= | [cite_start]Divide and assign [cite: 5] | [cite_start]x /= 3 is equivalent to x = x / 3 [cite: 5] |
| %= | [cite_start]Modulus and assign [cite: 5] | [cite_start]x %= 3 is equivalent to x = x % 3 [cite: 5] |

#### Bitwise Operators in C
[cite_start]C also provides bitwise operators for bit-level operations [cite: 5]:
* & (bitwise AND)
* pipe symbol (bitwise OR)
* ^ (bitwise XOR)
* ~ (bitwise NOT)
* << (left shift)
* >> (right shift)

### Operator Precedence in C
[cite_start]• Operator precedence in C determines the order in which operators are evaluated in an expression [cite: 5].
[cite_start]• Operators with higher precedence are evaluated first [cite: 5].
[cite_start]• Parentheses can be used to override default precedence [cite: 5].
[cite_start]• For example, multiplication and division have higher precedence than addition and subtraction [cite: 5].

---
## Arrays in C

### What is an Array in C?
[cite_start]• An array in C is a collection of elements of the same data type stored in contiguous memory locations [cite: 6].
[cite_start]• Arrays allow you to store multiple values under a single variable name [cite: 6].
[cite_start]• Array elements are accessed using an index, starting from 0 [cite: 6].
[cite_start]• The size of an array must be a constant expression in C [cite: 6].

### Array Declaration and Initialization in C
[cite_start]• Array declaration syntax in C: datatype arrayName[size]; [cite: 7].
[cite_start]• Example: int numbers[5]; declares an array of 5 integers [cite: 7].
[cite_start]• Arrays can be initialized during declaration: int numbers[5] = {1, 2, 3, 4, 5}; [cite: 7].
[cite_start]• Partial initialization is allowed: int numbers[5] = {1, 2}; remaining elements are automatically set to 0 [cite: 7].
[cite_start]• Size can be omitted during initialization: int numbers[] = {1, 2, 3, 4, 5}; compiler calculates size [cite: 7].

### Accessing Array Elements in C
[cite_start]• Array elements in C are accessed using the index operator [] [cite: 8].
[cite_start]• Example: numbers[0] accesses the first element, numbers[4] accesses the fifth element [cite: 8].
[cite_start]• Array indexing in C starts at 0 and ends at size-1 [cite: 8].
[cite_start]• C does not perform bounds checking on array access [cite: 8].

### Multi-dimensional Arrays in C
[cite_start]• Multi-dimensional arrays in C are arrays of arrays [cite: 9].
[cite_start]• Two-dimensional array declaration: datatype arrayName[rows][columns]; [cite: 9].
[cite_start]• Example: int matrix[3][4]; declares a 3x4 matrix [cite: 9].
[cite_start]• Initialization example: int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}}; [cite: 9].
[cite_start]• In C, multi-dimensional arrays are stored in row-major order [cite: 9].

### Array Operations in C
[cite_start]Common array operations in C include [cite: 10]:
* Traversing (iterating through all elements using loops)
* Searching for an element (linear search, binary search)
* Sorting elements (bubble sort, selection sort, etc.)
* Finding maximum or minimum values
* Calculating sum or average
* Copying arrays
* Reversing arrays

[cite_start]• Arrays in C cannot be directly assigned or compared using = or == operators [cite: 10].
[cite_start]• When an array is passed to a function in C, only the pointer to the first element is passed [cite: 10].

---
## Functions in C

### What is a Function in C?
[cite_start]• A function in C is a block of code that performs a specific task [cite: 11].
[cite_start]• Functions promote code reusability and modularity [cite: 11].
[cite_start]• A function is defined once and can be called multiple times [cite: 11].
[cite_start]• Every C program must have a main() function [cite: 11].

### Function Components in C
[cite_start]A function in C consists of four main components [cite: 12]:

| Component | Description |
| :--- | :--- |
| Return Type | [cite_start]The data type of the value returned by the function (int, float, char, void, etc.) [cite: 12]. |
| Function Name | [cite_start]The identifier used to call the function, following C naming rules [cite: 12]. |
| Parameters | [cite_start]Variables that receive values when the function is called (optional) [cite: 12]. |
| Function Body | [cite_start]The block of code enclosed in braces that defines what the function does [cite: 12]. |

[cite_start]• If a function does not return a value, its return type should be void [cite: 12].

### Function Declaration and Definition in C
[cite_start]• Function declaration (prototype) in C: returnType functionName(parameterList); [cite: 13].
[cite_start]• Function prototypes are typically placed before main() or in header files [cite: 13].
[cite_start]• Function definition includes the actual implementation [cite: 13].
[cite_start]• Example declaration: int add(int a, int b); [cite: 13].
[cite_start]• Example definition: int add(int a, int b) { return a + b; } [cite: 13].
[cite_start]• In C, function definitions cannot be nested inside other functions [cite: 13].

### Function Calling in C
[cite_start]• Functions in C are called using their name followed by arguments in parentheses [cite: 13].
[cite_start]• Example: result = add(5, 3); [cite: 13].
[cite_start]• The number and type of arguments must match the function parameters [cite: 13].

### Parameter Passing Methods in C

#### Pass by Value
[cite_start]• In C, all function arguments are passed by value by default [cite: 14].
[cite_start]• In pass by value, a copy of the actual parameter is passed to the function [cite: 14].
[cite_start]• Changes made to the parameter inside the function do not affect the original variable [cite: 14].
[cite_start]• Example: void modify(int x) { x = 10; } the original value remains unchanged [cite: 14].

#### Pass by Reference (Using Pointers)
[cite_start]• C does not have true pass by reference, but it can be simulated using pointers [cite: 14].
[cite_start]• The address of the actual parameter is passed to the function [cite: 14].
[cite_start]• Changes made to the dereferenced pointer affect the original variable [cite: 14].
[cite_start]• Example: void modify(int *x) { *x = 10; } the original value is changed [cite: 14].
[cite_start]• This technique is commonly used in C to modify variables and return multiple values [cite: 14].

### Recursion in C
[cite_start]• Recursion is a technique where a function calls itself [cite: 15].
[cite_start]• A recursive function must have a base case to prevent infinite recursion [cite: 15].
[cite_start]• Example: Factorial function - factorial(n) = n * factorial(n-1), with base case factorial(0) = 1 [cite: 15].
[cite_start]• Recursion is useful for problems that can be broken down into smaller, similar subproblems [cite: 15].
[cite_start]• Common examples in C include factorial, fibonacci, tower of hanoi, and tree traversals [cite: 15].
[cite_start]• Recursive functions in C use the call stack for each recursive call [cite: 15].

---
## Pointers in C

### What is a Pointer in C?
[cite_start]• A pointer in C is a variable that stores the memory address of another variable [cite: 16].
[cite_start]• Pointers are one of the most powerful and important features of C [cite: 16].
[cite_start]• Pointers allow direct memory access and manipulation [cite: 16].
[cite_start]• Pointers are declared using the asterisk (*) symbol [cite: 16].

### Pointer Declaration and Initialization in C
[cite_start]• Pointer declaration syntax in C: datatype *pointerName; [cite: 17].
[cite_start]• Example: int *ptr; declares a pointer to an integer [cite: 17].
[cite_start]• The address-of operator (&) is used to get the address of a variable [cite: 17].
[cite_start]• Example: ptr = &x; assigns the address of variable x to ptr [cite: 17].
[cite_start]• The dereference operator (*) is used to access the value at the address stored in a pointer [cite: 17].
[cite_start]• Example: *ptr accesses the value of the variable pointed to by ptr [cite: 17].
[cite_start]• Uninitialized pointers in C are dangerous and should be avoided [cite: 17].
[cite_start]• NULL pointer: A pointer that points to nothing, defined as ((void*)0) in C [cite: 17].

### Pointer Arithmetic in C
[cite_start]Pointer arithmetic in C allows performing arithmetic operations on pointers [cite: 18]:

| Operation | Description |
| :--- | :--- |
| ptr++ | [cite_start]Increments pointer to point to the next memory location [cite: 18]. |
| ptr-- | [cite_start]Decrements pointer to point to the previous memory location [cite: 18]. |
| ptr + n | [cite_start]Moves pointer n positions forward [cite: 18]. |
| ptr - n | [cite_start]Moves pointer n positions backward [cite: 18]. |
| ptr1 - ptr2 | [cite_start]Gives the number of elements between two pointers [cite: 18]. |

[cite_start]• Pointer arithmetic in C is scaled by the size of the data type pointed to [cite: 18].
[cite_start]• Only addition, subtraction, and comparison operations are valid for pointer arithmetic [cite: 18].
[cite_start]• Pointer arithmetic is most commonly used with arrays [cite: 18].

### Pointers and Arrays in C
[cite_start]• In C, the name of an array is a constant pointer to its first element [cite: 19].
[cite_start]• Array notation and pointer notation can be used interchangeably in C [cite: 19].
[cite_start]• Example: arr[i] is equivalent to *(arr + i) [cite: 19].
[cite_start]• Example: &arr[i] is equivalent to (arr + i) [cite: 19].
[cite_start]• When passing arrays to functions in C, they decay to pointers [cite: 19].

### Dynamic Memory Allocation in C
[cite_start]Dynamic memory allocation in C allows allocating memory at runtime using functions from stdlib.h [cite: 20]:

| Function | Description | Example |
| :--- | :--- | :--- |
| malloc() | [cite_start]Allocates specified bytes of memory and returns a void pointer [cite: 20]. | [cite_start]ptr = (int*)malloc(5 * sizeof(int)); [cite: 20] |
| calloc() | [cite_start]Allocates memory for an array and initializes all bytes to zero [cite: 20]. | [cite_start]ptr = (int*)calloc(5, sizeof(int)); [cite: 20] |
| realloc() | [cite_start]Resizes previously allocated memory block [cite: 20]. | [cite_start]ptr = (int*)realloc(ptr, 10 * sizeof(int)); [cite: 20] |
| free() | [cite_start]Deallocates previously allocated memory [cite: 20]. | [cite_start]free(ptr); [cite: 20] |

[cite_start]• Always check if malloc() or calloc() returns NULL (allocation failure) [cite: 20].
[cite_start]• Always free dynamically allocated memory to prevent memory leaks [cite: 20].
[cite_start]• After calling free(), set the pointer to NULL to avoid dangling pointers [cite: 20].
[cite_start]• Memory allocated on the heap in C persists until explicitly freed [cite: 20].

### Pointer to Pointer in C
[cite_start]• A pointer to pointer in C is a pointer that stores the address of another pointer [cite: 20].
[cite_start]• Declaration syntax: datatype **pointerName; [cite: 20].
[cite_start]• Example: int **pptr; declares a pointer to a pointer to an integer [cite: 20].
[cite_start]• Used for dynamic 2D arrays and modifying pointer values in functions [cite: 20].

### Function Pointers in C
[cite_start]• Function pointers in C store the address of functions [cite: 20].
[cite_start]• They allow passing functions as arguments to other functions [cite: 20].
[cite_start]• Declaration syntax: returnType (*pointerName)(parameterTypes); [cite: 20].
[cite_start]• Function pointers are useful for callback functions in C [cite: 20].

### Void Pointers in C
[cite_start]• A void pointer (void *) is a generic pointer that can point to any data type [cite: 20].
[cite_start]• Void pointers must be cast before dereferencing [cite: 20].
[cite_start]• malloc() and calloc() return void pointers [cite: 20].

---
## Strings in C

### What is a String in C?
[cite_start]• A string in C is a sequence of characters terminated by a null character (backslash followed by zero) [cite: 21].
[cite_start]• C does not have a built-in string data type [cite: 21].
[cite_start]• In C, strings are implemented as arrays of characters [cite: 21].
[cite_start]• The null character marks the end of the string and is automatically added by the compiler [cite: 21].

### String Declaration and Initialization in C
[cite_start]• String declaration as character array: char str[size]; [cite: 22].
[cite_start]• String initialization: char str[] = "Hello"; compiler adds null terminator automatically [cite: 22].
[cite_start]• Character array initialization: char str[] = {'H', 'e', 'l', 'l', 'o', 0}; must add null terminator manually [cite: 22].
[cite_start]• String pointer: char *str = "Hello"; points to string literal in read-only memory [cite: 22].
[cite_start]• Size must accommodate the null terminator: char str[6] = "Hello"; [cite: 22].

### String Input/Output in C
[cite_start]Common string I/O functions in C [cite: 23]:

| Function | Description | Example |
| :--- | :--- | :--- |
| scanf() | [cite_start]Reads a string until whitespace, does not read spaces [cite: 23]. | [cite_start]scanf("%s", str); [cite: 23] |
| gets() | [cite_start]Reads an entire line including spaces (unsafe, removed in C11) [cite: 23]. | [cite_start]gets(str); [cite: 23] |
| fgets() | [cite_start]Safer alternative, reads up to n-1 characters or until newline [cite: 23]. | [cite_start]fgets(str, size, stdin); [cite: 23] |
| printf() | [cite_start]Prints a string using %s format specifier [cite: 23]. | [cite_start]printf("%s", str); [cite: 23] |
| puts() | [cite_start]Prints a string followed by a newline [cite: 23]. | [cite_start]puts(str); [cite: 23] |

[cite_start]• scanf() with %s does not prevent buffer overflow; specify maximum width like %19s for a 20-character array [cite: 23].
[cite_start]• fgets() is the recommended way to read strings in C [cite: 23].

### String Manipulation Functions in C
[cite_start]Common string functions from string.h header file [cite: 24]:

| Function | Description | Example |
| :--- | :--- | :--- |
| strlen() | [cite_start]Returns the length of a string (excluding null terminator) [cite: 24]. | [cite_start]len = strlen(str); [cite: 24] |
| strcpy() | [cite_start]Copies one string to another (including null terminator) [cite: 24]. | [cite_start]strcpy(dest, src); [cite: 24] |
| strncpy() | [cite_start]Copies n characters from one string to another [cite: 24]. | [cite_start]strncpy(dest, src, n); [cite: 24] |
| strcat() | [cite_start]Concatenates (appends) one string to another [cite: 24]. | [cite_start]strcat(dest, src); [cite: 24] |
| strncat() | [cite_start]Concatenates n characters from src to dest [cite: 24]. | [cite_start]strncat(dest, src, n); [cite: 24] |
| strcmp() | [cite_start]Compares two strings lexicographically, returns 0 if equal [cite: 24]. | [cite_start]result = strcmp(str1, str2); [cite: 24] |
| strncmp() | [cite_start]Compares first n characters of two strings [cite: 24]. | [cite_start]result = strncmp(str1, str2, n); [cite: 24] |
| strchr() | [cite_start]Finds first occurrence of a character in string [cite: 24]. | [cite_start]ptr = strchr(str, 'a'); [cite: 24] |
| strrchr() | [cite_start]Finds last occurrence of a character in string [cite: 24]. | [cite_start]ptr = strrchr(str, 'a'); [cite: 24] |
| strstr() | [cite_start]Finds first occurrence of a substring [cite: 24]. | [cite_start]ptr = strstr(str, "hello"); [cite: 24] |

[cite_start]• String functions in C do not perform bounds checking; programmer must ensure sufficient space [cite: 24].
[cite_start]• strncpy() may not null-terminate the destination if source is longer than n [cite: 24].
[cite_start]• strcmp() returns negative if str1 < str2, zero if equal, positive if str1 > str2 [cite: 24].

---
## File Handling in C

### What is File Handling in C?
[cite_start]• File handling in C allows programs to store data permanently in files [cite: 25].
[cite_start]• Files can be used to read input data and write output data [cite: 25].
[cite_start]• C provides file handling functions in stdio.h header file [cite: 25].
[cite_start]• Files are accessed through FILE pointers in C [cite: 25].

### File Operations in C
[cite_start]Basic file operations in C include [cite: 26]:
* Opening a file (fopen)
* Reading from a file (fgetc, fgets, fscanf, fread)
* Writing to a file (fputc, fputs, fprintf, fwrite)
* Closing a file (fclose)
* Seeking to a specific position (fseek)
* Checking end of file (feof)
* Error handling (ferror)

### File Opening Modes in C
[cite_start]Files in C can be opened in different modes [cite: 27]:

| Mode | Description |
| :--- | :--- |
| "r" | [cite_start]Opens file for reading; file must exist [cite: 27]. |
| "w" | [cite_start]Opens file for writing; creates new file or truncates existing file to zero length [cite: 27]. |
| "a" | [cite_start]Opens file for appending; creates new file if it doesn't exist [cite: 27]. |
| "r+" | [cite_start]Opens file for both reading and writing; file must exist [cite: 27]. |
| "w+" | [cite_start]Opens file for both reading and writing; creates new file or truncates existing [cite: 27]. |
| "a+" | [cite_start]Opens file for reading and appending; creates new file if it doesn't exist [cite: 27]. |

[cite_start]• For binary files in C, append 'b' to the mode (rb, wb, ab, rb+, wb+, ab+) [cite: 27].
[cite_start]• Text mode is the default in C [cite: 27].

### File Handling Functions in C
[cite_start]Common file handling functions in C [cite: 28]:

| Function | Description | Example |
| :--- | :--- | :--- |
| fopen() | [cite_start]Opens a file and returns a FILE pointer, returns NULL on failure [cite: 28]. | [cite_start]FILE *fp = fopen("file.txt", "r"); [cite: 28] |
| fclose() | [cite_start]Closes a file and flushes buffers [cite: 28]. | [cite_start]fclose(fp); [cite: 28] |
| fgetc() | [cite_start]Reads a single character from file, returns EOF at end [cite: 28]. | [cite_start]ch = fgetc(fp); [cite: 28] |
| fputc() | [cite_start]Writes a single character to file [cite: 28]. | [cite_start]fputc('A', fp); [cite: 28] |
| fgets() | [cite_start]Reads a string from file up to newline or n-1 characters [cite: 28]. | [cite_start]fgets(str, size, fp); [cite: 28] |
| fputs() | [cite_start]Writes a string to file without adding newline [cite: 28]. | [cite_start]fputs("Hello", fp); [cite: 28] |
| fscanf() | [cite_start]Reads formatted input from file [cite: 28]. | [cite_start]fscanf(fp, "%d", &num); [cite: 28] |
| fprintf() | [cite_start]Writes formatted output to file [cite: 28]. | [cite_start]fprintf(fp, "%d", num); [cite: 28] |
| fread() | [cite_start]Reads block of data from binary file [cite: 28]. | [cite_start]fread(buffer, size, count, fp); [cite: 28] |
| fwrite() | [cite_start]Writes block of data to binary file [cite: 28]. | [cite_start]fwrite(buffer, size, count, fp); [cite: 28] |
| fseek() | [cite_start]Sets file position indicator [cite: 28]. | [cite_start]fseek(fp, offset, SEEK_SET); [cite: 28] |
| ftell() | [cite_start]Returns current file position as byte offset [cite: 28]. | [cite_start]pos = ftell(fp); [cite: 28] |
| rewind() | [cite_start]Sets file position to beginning [cite: 28]. | [cite_start]rewind(fp); [cite: 28] |
| feof() | [cite_start]Checks if end of file is reached, returns non-zero if true [cite: 28]. | [cite_start]if(feof(fp)) {...} [cite: 28] |
| ferror() | [cite_start]Checks for file errors [cite: 28]. | [cite_start]if(ferror(fp)) {...} [cite: 28] |

[cite_start]• Always check if fopen() returns NULL before using the file pointer [cite: 28].
[cite_start]• Always close files using fclose() when done [cite: 28].
[cite_start]• fseek() uses SEEK_SET (beginning), SEEK_CUR (current), SEEK_END (end) as origin [cite: 28].

### Binary vs Text Files in C
[cite_start]• Text files in C store data in human-readable format with newline translations [cite: 28].
[cite_start]• Binary files in C store data in binary format exactly as in memory [cite: 28].
[cite_start]• Binary mode is more efficient for non-text data like structures [cite: 28].
[cite_start]• Use fread() and fwrite() for binary files, fprintf() and fscanf() for text files [cite: 28].

---
## Structures in C

### What is a Structure in C?
[cite_start]• A structure in C is a user-defined data type that groups related variables of different data types under a single name [cite: 29].
[cite_start]• Structures allow creating complex data types in C [cite: 29].
[cite_start]• Each variable in a structure is called a member or field [cite: 29].
[cite_start]• Structures in C are the foundation for organizing related data [cite: 29].

### Structure Declaration and Definition in C
[cite_start]• Structure declaration syntax in C: struct StructureName { datatype member1; datatype member2; }; [cite: 30].
[cite_start]• Example: struct Student { int id; char name[50]; float gpa; }; [cite: 30].
[cite_start]• Structure variable declaration: struct Student student1; [cite: 30].
[cite_start]• Structure definition and variable declaration can be combined: struct Student { int id; char name[50]; } student1, student2; [cite: 30].
[cite_start]• typedef can be used to create an alias: typedef struct Student { int id; } Student; then Student s1; [cite: 30].

### Accessing Structure Members in C
[cite_start]• Structure members in C are accessed using the dot (.) operator [cite: 30].
[cite_start]• Example: student1.id = 101; assigns 101 to the id member [cite: 30].
[cite_start]• For structure pointers, use the arrow (->) operator [cite: 30].
[cite_start]• Example: ptr->id = 101; is equivalent to (*ptr).id = 101; [cite: 30].
[cite_start]• The arrow operator is shorthand for dereferencing and accessing a member [cite: 30].

### Initializing Structures in C
[cite_start]• Structures can be initialized during declaration in C [cite: 30].
[cite_start]• Example: struct Student s1 = {101, "John", 3.5}; [cite: 30].
[cite_start]• Designated initializers (C99): struct Student s1 = {.id = 101, .gpa = 3.5, .name = "John"}; [cite: 30].
[cite_start]• Uninitialized members are set to zero [cite: 30].

### Array of Structures in C
[cite_start]• An array of structures allows storing multiple structure variables in C [cite: 30].
[cite_start]• Example: struct Student students[50]; declares an array of 50 Student structures [cite: 30].
[cite_start]• Accessing: students[0].id = 101; [cite: 30].

### Nested Structures in C
[cite_start]• A structure can contain another structure as a member in C [cite: 30].
[cite_start]• This is called a nested structure [cite: 30].
[cite_start]• Example: struct Date { int day; int month; int year; }; struct Employee { int id; struct Date birthdate; }; [cite: 30].
[cite_start]• Accessing nested members: emp.birthdate.day = 15; [cite: 30].

### Structures and Functions in C
[cite_start]• Structures can be passed to functions in C by value or by pointer [cite: 30].
[cite_start]• Passing by value creates a copy (inefficient for large structures) [cite: 30].
[cite_start]• Passing by pointer is more efficient and allows modification [cite: 30].
[cite_start]• Functions can also return structures in C [cite: 30].

### Structure Memory Allocation in C
[cite_start]• Structure size may be larger than the sum of its members due to padding [cite: 30].
[cite_start]• C compilers add padding bytes for alignment purposes [cite: 30].
[cite_start]• Use sizeof() operator to determine the actual size of a structure [cite: 30].

---
## Unions in C

### What is a Union in C?
[cite_start]• A union in C is a user-defined data type similar to a structure, but all members share the same memory location [cite: 31].
[cite_start]• Only one member of a union can hold a value at any given time [cite: 31].
[cite_start]• The size of a union is equal to the size of its largest member [cite: 31].
[cite_start]• Unions are used to save memory when only one member is needed at a time [cite: 31].

### Union Declaration and Definition in C
[cite_start]• Union declaration syntax in C: union UnionName { datatype member1; datatype member2; }; [cite: 32].
[cite_start]• Example: union Data { int i; float f; char c; }; [cite: 32].
[cite_start]• Union variable declaration: union Data data1; [cite: 32].
[cite_start]• Similar to structures, typedef can be used with unions [cite: 32].

### Accessing Union Members in C
[cite_start]• Union members in C are accessed using the dot (.) operator, similar to structures [cite: 32].
[cite_start]• Example: data1.i = 10; assigns 10 to the integer member [cite: 32].
[cite_start]• When one member is assigned a value, the values of other members become undefined [cite: 32].
[cite_start]• Only the last assigned member contains valid data [cite: 32].
[cite_start]• For union pointers, use the arrow (->) operator [cite: 32].

### Difference Between Structure and Union in C
[cite_start]Key differences between structures and unions in C [cite: 32]:

| Aspect | Structure | Union |
| :--- | :--- | :--- |
| Memory Allocation | [cite_start]Each member has its own memory location [cite: 32]. | [cite_start]All members share the same memory location [cite: 32]. |
| Size | [cite_start]Size is sum of all members plus padding [cite: 32]. | [cite_start]Size is equal to the largest member [cite: 32]. |
| Value Storage | [cite_start]All members can hold values simultaneously [cite: 32]. | [cite_start]Only one member can hold a valid value at a time [cite: 32]. |
| Access | [cite_start]All members can be accessed independently anytime [cite: 32]. | [cite_start]Only the last assigned member has valid value [cite: 32]. |
| Keyword | [cite_start]Uses struct keyword [cite: 32]. | [cite_start]Uses union keyword [cite: 32]. |

### When to Use Unions in C
[cite_start]• Unions in C are useful when you need to store different types of data in the same memory location at different times [cite: 32].
[cite_start]• Unions help save memory when only one member is needed at a time [cite: 32].
[cite_start]• Common use cases: Type interpretation (viewing same data as different types), memory-constrained embedded systems [cite: 32].
[cite_start]• Example use case: Storing different data types in a variant data structure [cite: 32].

### Anonymous Unions in C (C11)
[cite_start]• C11 standard allows anonymous unions inside structures [cite: 32].
[cite_start]• Anonymous unions do not have a name and their members can be accessed directly [cite: 32].

### Union Initialization in C
[cite_start]• Only the first member of a union can be initialized in C [cite: 32].
[cite_start]• Example: union Data d = {10}; initializes the first member (integer) [cite: 32].
[cite_start]• Designated initializers (C99) allow initializing any member: union Data d = {.f = 3.14}; [cite: 32].

---
## Additional C Programming Concepts

### Storage Classes in C
[cite_start]Storage classes define the scope, visibility, and lifetime of variables in C [cite: 33]:
* auto: Default storage class for local variables
* register: Stores variable in CPU register for faster access
* static: Preserves variable value between function calls
* extern: Declares a global variable defined in another file

### Preprocessor Directives in C
[cite_start]Preprocessor directives in C are processed before compilation [cite: 33]:
* #include: Includes header files
* #define: Defines macros and constants
* #ifdef, #ifndef, #endif: Conditional compilation
* #pragma: Compiler-specific directives

### Common C Programming Practices
[cite_start]Best practices in C programming [cite: 33]:
* Always initialize variables before use
* Check return values of functions like malloc(), fopen()
* Free dynamically allocated memory
* Use const for read-only data
* Avoid magic numbers, use named constants
* Write modular, reusable functions
* Comment code appropriately
* Follow consistent naming conventions

### Common Errors in C Programming
[cite_start]Common errors to avoid in C [cite: 33]:
* Buffer overflow (writing beyond array bounds)
* Memory leaks (forgetting to free allocated memory)
* Dangling pointers (using freed or out-of-scope pointers)
* Segmentation faults (accessing invalid memory)
* Off-by-one errors in loops
* Forgetting null terminator in strings
* Integer overflow
* Using uninitialized variables
`}