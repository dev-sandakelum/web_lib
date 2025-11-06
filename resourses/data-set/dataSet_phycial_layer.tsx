const PointerDataSet = [
  {
    course: "ICT1132 - C Programming",
    lecture: "Lecture 09 - Pointers in C",
    topics: [
      {
        topic: "Introduction to Pointers",
        points: [
          "Every variable is a memory location",
          "Every memory location has an address",
          "Address accessed using ampersand (&) operator",
          "& operator denotes an address in memory",
          "&var gives the address of variable var",
          "& is called the reference operator",
        ],
      },
      {
        topic: "What is a Pointer",
        points: [
          "A pointer is a variable that holds a memory address",
          "Pointers reduce program length and complexity",
          "Pointers increase execution speed",
          "Enable access and modification of variables outside functions",
          "Support dynamic allocation of memory",
          "Used for implementing complex data structures",
        ],
      },
      {
        topic: "Declaring a Pointer",
        points: [
          "Syntax: datatype *name;",
          "int *ip; - pointer to an integer",
          "double *dp; - pointer to a double",
          "float *fp; - pointer to a float",
          "char *ch; - pointer to a character",
        ],
      },
      {
        topic: "Pointer Operators",
        points: [
          "* operator obtains value at the address held by pointer",
          'Example: printf("%d", *ip); prints value at location pointed by ip',
          "& operator obtains memory address of an operand",
          'Example: printf("%d", &ip); prints memory address of ip',
          "Both * and & are unary operators (use only one operand)",
          "& is Address operator",
          "* is Contents operator (dereference operator)",
        ],
      },
      {
        topic: "Pointer Operations Example",
        points: [
          "int *m; - declares pointer m (points to random location initially)",
          "int count = 7; - declares and initializes integer variable",
          "m = &count; - assigns address of count to pointer m",
          "Value of m is the address of count (e.g., 0x3267A1B4)",
          "Value of *m is 7 (the value stored in count)",
          "Value of &m is the address of pointer m itself (e.g., 0x3267A1B0)",
        ],
      },
      {
        topic: "Pass by Reference (Function Arguments)",
        points: [
          "Copies the address of an argument into formal parameter",
          "Pointer is passed as argument to function",
          "Address of memory location is passed instead of value",
          "Inside function, address is used to access actual argument",
          "Changes made to parameter affect the passed argument",
          "Not a copy - modifies original variable",
        ],
      },
      {
        topic: "Swap Function Example",
        points: [
          "void mySwap(int *a, int *b) - function signature with pointer parameters",
          "temp = *a; - save value at address a",
          "*a = *b; - put value of b into a",
          "*b = temp; - put temp into b",
          "Called with: mySwap(&x, &y); - pass addresses of variables",
        ],
      },
      {
        topic: "Command Line Arguments",
        points: [
          "Values passed from command line when program executes",
          "Allows user to control program from outside",
          "Avoids hard coding values inside code",
          "Full declaration: int main(int argc, char *argv[])",
          "argc and argv are the two parameters passed to main",
        ],
      },
      {
        topic: "Command Line Parameters",
        points: [
          "int argc - Argument count",
          "Number of arguments passed including program name",
          "char *argv[] - Array of string pointers",
          "All command-line arguments passed as strings",
          "argv[0] points to program's name",
          "argv[1] points to first argument",
          "argv[2] points to second argument, and so on",
        ],
      },
      {
        topic: "Arrays and Pointers",
        points: [
          "Arrays are closely related to pointers",
          "Array name is a constant pointer to first element",
          "arr and &arr[0] point to address of first element",
          "&arr[0] is equivalent to arr",
          "Both have same address and value",
          "Address of &arr[1] is equivalent to (arr + 1)",
          "Value of arr[1] is equivalent to *(arr + 1)",
        ],
      },
      {
        topic: "Array Name as Pointer",
        points: [
          "Array name is a pointer",
          'Example: char name[20] = "hello"; - name is a pointer',
          'To read character: scanf("%c", &ch); - needs & operator',
          'To read string: scanf("%s", name); - no & needed',
          "No & for string because name is already a pointer",
        ],
      },
      {
        topic: "Pointer Arithmetic",
        points: [
          "Can perform arithmetic operations on pointers",
          "Adding integer to pointer moves it by n elements",
          "Subtraction gives number of elements between pointers",
          "Used extensively with arrays",
          "ptr + i moves pointer i positions forward",
          "Actual memory offset depends on data type size",
        ],
      },
      {
        topic: "Multiple Indirection",
        points: [
          "Pointer pointing to another pointer",
          "Also called pointers to pointers",
          "Allows pointer to point to another pointer that points to value",
          "Single indirection: Pointer -> Value",
          "Multiple indirection: Pointer -> Pointer -> Value",
          "Declared with multiple asterisks: int **ptr;",
        ],
      },
      {
        topic: "Dynamic Memory Allocation",
        points: [
          "Exact size of array unknown until compile time",
          "Size may be insufficient or more than required",
          "Allows program to obtain memory at runtime",
          "Can obtain more memory space while running",
          "Can release memory if not required",
          "More flexible than static allocation",
        ],
      },
      {
        topic: "Dynamic Allocation Functions",
        points: [
          "malloc() - used to allocate memory",
          "calloc() - allocates space for array elements",
          "free() - used to release memory",
          "realloc() - changes size of previously allocated space",
          "More dynamic allocation functions available in C",
          "All declared in stdlib.h header",
        ],
      },
      {
        topic: "malloc() Example",
        points: [
          "mem_allocation = malloc(20 * sizeof(char)); - allocates 20 bytes",
          "Returns pointer to allocated memory",
          "Returns NULL if allocation fails",
          "Must check: if(mem_allocation == NULL) - handle error",
          "Use the allocated memory for operations",
          "free(mem_allocation); - frees the allocated memory",
          "Always free to prevent memory leaks",
        ],
      },
      {
        topic: "Common Pointer Errors",
        points: [
          "Pointers must be initialized before use",
          "Using uninitialized pointer points to random location",
          "int *p; *p = x; - WRONG: writes to unknown location",
          "Can lead to program crashes",
          "Lack of understanding causes serious errors",
          "Always initialize: int *p = &variable; or int *p = NULL;",
        ],
      },
      {
        topic: "Best Practices",
        points: [
          "Always initialize pointers before use",
          "Check malloc() return value for NULL",
          "Always free() dynamically allocated memory",
          "Don't access memory after free()",
          "Use NULL for pointers that don't point anywhere yet",
          "Be careful with pointer arithmetic",
          "Avoid dangling pointers (pointers to freed memory)",
          "Match every malloc() with a free()",
        ],
      },
    ],
    code_examples: [
      {
        title: "Basic Memory Address Example",
        code: 'int var1;\nchar var2[10];\nfloat var3;\nprintf("Address of var1: %x\\n", &var1);\nprintf("Address of var2: %x\\n", &var2);\nprintf("Address of var3: %x\\n", &var3);',
      },
      {
        title: "Pointer Declaration and Usage",
        code: 'int i = 7;\nint *ptr = &i;\nprintf("content of i: %d\\n", i);\nprintf("address of i: %p\\n", &i);\nprintf("content of ptr: %p\\n", ptr);\nprintf("value pointed by ptr: %d\\n", *ptr);\nprintf("address of ptr: %p\\n", &ptr);',
      },
      {
        title: "Swap Function with Pointers",
        code: "void mySwap(int *a, int *b) {\n    int temp;\n    temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nvoid main() {\n    int x=4, y=7;\n    mySwap(&x, &y);\n}",
      },
      {
        title: "Dynamic Memory Allocation",
        code: 'char *mem_allocation;\nmem_allocation = malloc(20 * sizeof(char));\nif(mem_allocation == NULL) {\n    printf("Couldn\'t allocate memory\\n");\n} else {\n    strcpy(mem_allocation, "Technology");\n}\nprintf("Content: %s\\n", mem_allocation);\nfree(mem_allocation);',
      },
    ],
    key_syntax: [
      {
        operation: "Declare pointer",
        syntax: "datatype *pointer_name;",
      },
      {
        operation: "Get address",
        syntax: "&variable",
      },
      {
        operation: "Get value at address",
        syntax: "*pointer",
      },
      {
        operation: "Assign address to pointer",
        syntax: "pointer = &variable;",
      },
      {
        operation: "Main with command line args",
        syntax: "int main(int argc, char *argv[])",
      },
      {
        operation: "Allocate memory",
        syntax: "pointer = malloc(size * sizeof(type));",
      },
      {
        operation: "Free memory",
        syntax: "free(pointer);",
      },
    ],
  },
];
