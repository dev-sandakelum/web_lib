export const CacheMemoryQuiz = {
  id: "1",
  title: "Cache Memory",
  category: "Computer Architecture",
  questions: [
    {
      question: "What is the main purpose of cache memory?",
      options: [
        "To replace main memory entirely",
        "To improve performance by staging data between main memory and processor registers",
        "To store permanent data",
        "To increase the physical size of RAM"
      ],
      correctIndex: 1,
    },
    {
      question: "What type of memory access allows data retrieval by providing a portion of the data's content rather than its memory address?",
      options: [
        "Sequential access",
        "Associative access",
        "Direct access",
        "Random access"
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is NOT a characteristic of cache memory?",
      options: [
        "Faster than main memory",
        "Very expensive",
        "Larger than main memory",
        "Limited capacity"
      ],
      correctIndex: 2,
    },
    {
      question: "What is temporal locality?",
      options: [
        "Accessing memory locations that are geographically close",
        "Accessing the same memory location multiple times in a short period",
        "Accessing memory sequentially",
        "Random memory access patterns"
      ],
      correctIndex: 1,
    },
    {
      question: "What is spatial locality?",
      options: [
        "Accessing memory locations that are close to each other",
        "Accessing the same memory location repeatedly",
        "Accessing memory randomly",
        "Accessing memory in reverse order"
      ],
      correctIndex: 0,
    },
    {
      question: "What happens during a cache hit?",
      options: [
        "CPU refers to main memory",
        "Cache is cleared",
        "Data is found in cache and delivered to processor",
        "System restarts"
      ],
      correctIndex: 2,
    },
    {
      question: "What happens during a cache miss?",
      options: [
        "Data is immediately available",
        "A block of main memory is read into cache then delivered to processor",
        "Cache is reset",
        "Program terminates"
      ],
      correctIndex: 1,
    },
    {
      question: "How is cache performance measured?",
      options: [
        "In bytes per second",
        "In cache size",
        "In access frequency",
        "In terms of hit ratio"
      ],
      correctIndex: 3,
    },
    {
      question: "What is the formula for Hit Ratio?",
      options: [
        "Hit / (Hit + Miss)",
        "Miss / Total",
        "(Hit + Miss) / Total",
        "Miss / Hit"
      ],
      correctIndex: 0,
    },
    {
      question: "In the memory hierarchy, which memory is fastest?",
      options: [
        "Main memory",
        "Hard disk",
        "Registers",
        "Cache"
      ],
      correctIndex: 2,
    },
    {
      question: "What is internal memory also referred to as?",
      options: [
        "External memory",
        "Primary or main memory",
        "Cache only",
        "Virtual memory"
      ],
      correctIndex: 1,
    },
    {
      question: "What does a cache line include besides data words?",
      options: [
        "Only data",
        "Virtual addresses only",
        "Tag and control bits",
        "Nothing else"
      ],
      correctIndex: 2,
    },
    {
      question: "Why is the term 'line' used instead of 'block' for cache?",
      options: [
        "They are the same thing",
        "Because cache is linear",
        "To avoid confusion with main memory blocks and because it includes tag/control bits",
        "Historical reasons only"
      ],
      correctIndex: 2,
    },
    {
      question: "In the memory hierarchy, as you go down the hierarchy, what happens to cost per bit?",
      options: [
        "Increases",
        "Decreases",
        "Stays the same",
        "Fluctuates randomly"
      ],
      correctIndex: 1,
    },
    {
      question: "In the memory hierarchy, as capacity increases, what happens to access time?",
      options: [
        "Decreases",
        "Increases",
        "Stays constant",
        "Becomes zero"
      ],
      correctIndex: 1,
    },
    {
      question: "What does 'addressable unit' mean in memory systems?",
      options: [
        "Always a word",
        "Always a byte",
        "The smallest unit that can be addressed",
        "Always 32 bits"
      ],
      correctIndex: 2,
    },
    {
      question: "The formula 2^A = N represents what relationship?",
      options: [
        "Relationship between address length and number of addressable units",
        "Cache size calculation",
        "CPU speed",
        "Bus width"
      ],
      correctIndex: 0,
    },
    {
      question: "What is the 'unit of transfer' for main memory?",
      options: [
        "Always one byte",
        "Always one word",
        "The number of bits read/written at one time",
        "Always one block"
      ],
      correctIndex: 2,
    },
    {
      question: "Which factor describes how often the processor accesses memory in the hierarchy?",
      options: [
        "Access time",
        "Cost per bit",
        "Capacity",
        "Frequency of access"
      ],
      correctIndex: 3,
    },
    {
      question: "What happens to frequency of access as you go down the memory hierarchy?",
      options: [
        "Decreases",
        "Increases",
        "Stays the same",
        "Becomes random"
      ],
      correctIndex: 0,
    },
    {
      question: "Why can't a single memory technology satisfy all computer system requirements?",
      options: [
        "Technical limitations only",
        "Manufacturing issues",
        "Trade-offs between speed, capacity, and cost",
        "Software constraints"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the relationship between access time and cost per bit?",
      options: [
        "No relationship",
        "Faster access means lower cost",
        "Faster access time means greater cost per bit",
        "They are independent"
      ],
      correctIndex: 2,
    },
    {
      question: "Cache memory is typically visible to which of the following?",
      options: [
        "The programmer",
        "The operating system",
        "All system components",
        "Neither the programmer nor usually the processor"
      ],
      correctIndex: 3,
    },
    {
      question: "What determines if data is in cache when the processor requests it?",
      options: [
        "Random selection",
        "A check is performed",
        "The operating system decides",
        "User input"
      ],
      correctIndex: 1,
    },
    {
      question: "What is a 'word' in computer memory?",
      options: [
        "Always 8 bits",
        "The natural unit of organization",
        "Always 32 bits",
        "A string of characters"
      ],
      correctIndex: 1,
    },
    {
      question: "Cache contains a copy of what?",
      options: [
        "All of main memory",
        "Only program code",
        "Portions of main memory",
        "Only data variables"
      ],
      correctIndex: 2,
    },
    {
      question: "What property of programs does cache memory exploit?",
      options: [
        "Random access",
        "Sequential processing",
        "Locality of reference",
        "Parallel execution"
      ],
      correctIndex: 2,
    },
    {
      question: "Which shows temporal locality?",
      options: [
        "Array traversal",
        "Loop variables accessed repeatedly",
        "File reading",
        "Network communication"
      ],
      correctIndex: 1,
    },
    {
      question: "Which shows spatial locality?",
      options: [
        "Repeated variable access",
        "Iterating through an array",
        "Random memory jumps",
        "Recursive functions"
      ],
      correctIndex: 1,
    },
    {
      question: "What does 'K' represent in cache/main memory structure?",
      options: [
        "Number of cache lines",
        "Total memory size",
        "Number of words per block",
        "Cache size"
      ],
      correctIndex: 2,
    },
    {
      question: "What does 'M' represent in main memory structure?",
      options: [
        "Memory size in MB",
        "Number of blocks in main memory",
        "Cache lines",
        "Word size"
      ],
      correctIndex: 1,
    },
    {
      question: "What does 'm' represent in cache structure?",
      options: [
        "Main memory blocks",
        "Number of cache lines",
        "Word size",
        "Address bits"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the relationship between m and M in cache design?",
      options: [
        "m >> M",
        "m = M",
        "m << M",
        "m is independent of M"
      ],
      correctIndex: 2,
    },
    {
      question: "What does the 'tag' in a cache line represent?",
      options: [
        "Data size",
        "Block number",
        "Cache position",
        "Memory type"
      ],
      correctIndex: 1,
    },
    {
      question: "What is line size in cache?",
      options: [
        "Including tag and control bits",
        "The length of the line not including tag and control bits",
        "Only the tag",
        "Only control bits"
      ],
      correctIndex: 1,
    },
    {
      question: "A typical line size may be as small as:",
      options: [
        "8 bits",
        "16 bits",
        "32 bits (4 bytes)",
        "64 bits"
      ],
      correctIndex: 2,
    },
    {
      question: "When a processor requests memory contents, what is checked first?",
      options: [
        "Hard disk",
        "Cache",
        "Main memory",
        "Registers"
      ],
      correctIndex: 1,
    },
    {
      question: "If data is not in cache, what happens?",
      options: [
        "Error occurs",
        "System waits indefinitely",
        "Required block is read from main memory to cache",
        "Processor stops"
      ],
      correctIndex: 2,
    },
    {
      question: "What do control bits in a cache line indicate?",
      options: [
        "Data size only",
        "Whether the line has been modified since loading",
        "Cache size",
        "Memory address"
      ],
      correctIndex: 1,
    },
    {
      question: "The three key characteristics of memory hierarchy are:",
      options: [
        "Size, color, weight",
        "Capacity, access time, cost",
        "Speed, durability, portability",
        "Width, height, depth"
      ],
      correctIndex: 1,
    },
    {
      question: "Which memory type is the principal internal memory system?",
      options: [
        "Cache",
        "Registers",
        "Main memory",
        "ROM"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the fastest and most expensive memory type in a computer?",
      options: [
        "Cache",
        "Main memory",
        "Registers internal to the processor",
        "Hard disk"
      ],
      correctIndex: 2,
    },
    {
      question: "Larger caches compared to smaller ones are:",
      options: [
        "Faster",
        "The same speed",
        "Slower",
        "More efficient"
      ],
      correctIndex: 2,
    },
    {
      question: "What is a disadvantage of cache memory?",
      options: [
        "Slower than main memory",
        "Unlimited capacity",
        "Very expensive",
        "Easy to program"
      ],
      correctIndex: 2,
    },
    {
      question: "What advantage does cache memory provide?",
      options: [
        "Larger storage capacity",
        "Consumes less access time as compared to main memory",
        "Cheaper than RAM",
        "Permanent storage"
      ],
      correctIndex: 1,
    },
    {
      question: "Which type of programs primarily show locality of reference?",
      options: [
        "Random access programs",
        "Programs with loops and subroutine calls",
        "Single-line programs",
        "Non-repetitive programs"
      ],
      correctIndex: 1,
    },
    {
      question: "In temporal locality, what is stored in cache?",
      options: [
        "Random data",
        "Data that was recently accessed",
        "Future data predictions",
        "All available data"
      ],
      correctIndex: 1,
    },
    {
      question: "In spatial locality, cache fetches:",
      options: [
        "Only requested data",
        "A block containing several nearby elements",
        "Random memory blocks",
        "All memory"
      ],
      correctIndex: 1,
    },
    {
      question: "What are the key elements considered in cache design?",
      options: [
        "Only size",
        "Addressing, size, mapping function, replacement algorithm, write policy, block size, number of caches",
        "Color and shape",
        "Only cost"
      ],
      correctIndex: 1,
    },
    {
      question: "Each location in main memory has:",
      options: [
        "No address",
        "A shared address",
        "A unique address",
        "Multiple addresses"
      ],
      correctIndex: 2,
    },
  ],
};

export const ComputerArithmeticQuiz = {
  id: "2",
  title: "Computer Arithmetic",
  category: "Computer Architecture",
  questions: [
    {
      question: "What does the ALU stand for?",
      options: [
        "Arithmetic & Logic Unit",
        "Advanced Logic Unit",
        "Array Logic Unit",
        "Automated Learning Unit"
      ],
      correctIndex: 0,
    },
    {
      question: "What is the primary function of the ALU?",
      options: [
        "Store data permanently",
        "Control program flow",
        "Perform arithmetic and logical operations on data",
        "Manage memory"
      ],
      correctIndex: 2,
    },
    {
      question: "In signed magnitude representation, what does the leftmost bit represent?",
      options: [
        "The magnitude",
        "The sign of the integer",
        "The parity",
        "The address"
      ],
      correctIndex: 1,
    },
    {
      question: "In signed magnitude, which bit value represents a positive number?",
      options: [
        "0",
        "1",
        "Both 0 and 1",
        "Neither"
      ],
      correctIndex: 0,
    },
    {
      question: "In signed magnitude, which bit value represents a negative number?",
      options: [
        "0",
        "1",
        "Both 0 and 1",
        "Neither"
      ],
      correctIndex: 1,
    },
    {
      question: "What is a major drawback of signed magnitude representation?",
      options: [
        "Too complex",
        "There are two representations of 0",
        "Cannot represent negative numbers",
        "Too many bits required"
      ],
      correctIndex: 1,
    },
    {
      question: "In 1's complement, how do you represent a negative number?",
      options: [
        "Add 1 to positive",
        "Complement every bit of the positive number",
        "Multiply by -1",
        "Shift left"
      ],
      correctIndex: 1,
    },
    {
      question: "In 1's complement addition, what do you do if there is an overflow bit?",
      options: [
        "Ignore it",
        "Add it to the answer",
        "Subtract it",
        "Set error flag"
      ],
      correctIndex: 1,
    },
    {
      question: "How do you find the 2's complement of a number?",
      options: [
        "Just complement the bits",
        "Complement the bits and add 1",
        "Multiply by -1",
        "Shift right"
      ],
      correctIndex: 1,
    },
    {
      question: "In 2's complement addition, what do you do with the carry-out?",
      options: [
        "Add it back",
        "Subtract it",
        "Always discard it",
        "Store it separately"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the subtraction rule in 2's complement?",
      options: [
        "Direct subtraction",
        "Take the two's complement of subtrahend and add to minuend",
        "Use 1's complement",
        "Use signed magnitude"
      ],
      correctIndex: 1,
    },
    {
      question: "When does overflow occur in 2's complement addition?",
      options: [
        "Always when there's a carry",
        "When two numbers of the same sign produce a result with opposite sign",
        "Never",
        "Only with negative numbers"
      ],
      correctIndex: 1,
    },
    {
      question: "In 2's complement, how many representations of zero are there?",
      options: [
        "0",
        "1",
        "2",
        "3"
      ],
      correctIndex: 1,
    },
    {
      question: "What type of numbers does the ALU handle?",
      options: [
        "Only integers",
        "Integers and floating point numbers",
        "Only floating point",
        "Only characters"
      ],
      correctIndex: 1,
    },
    {
      question: "Where are operands for ALU operations presented from?",
      options: [
        "Hard disk",
        "Cache only",
        "Registers",
        "Network"
      ],
      correctIndex: 2,
    },
    {
      question: "What is an overflow flag used for?",
      options: [
        "Store results",
        "Indicate if result exceeds register length",
        "Count operations",
        "Store addresses"
      ],
      correctIndex: 1,
    },
    {
      question: "In unsigned binary multiplication, if the multiplier bit is 0, what is the partial product?",
      options: [
        "1",
        "0",
        "The multiplicand",
        "Undefined"
      ],
      correctIndex: 1,
    },
    {
      question: "In unsigned binary multiplication, if the multiplier bit is 1, what is the partial product?",
      options: [
        "0",
        "1",
        "The multiplicand",
        "The multiplier"
      ],
      correctIndex: 2,
    },
    {
      question: "Multiplication of two n-bit binary integers results in a product of up to how many bits?",
      options: [
        "n bits",
        "n+1 bits",
        "2n bits",
        "n-1 bits"
      ],
      correctIndex: 2,
    },
    {
      question: "In the multiplication hardware, what is the A register initially set to?",
      options: [
        "1",
        "0",
        "Multiplicand",
        "Multiplier"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of the C register in multiplication?",
      options: [
        "Store result",
        "Hold a potential carry bit from addition",
        "Count iterations",
        "Store multiplier"
      ],
      correctIndex: 1,
    },
    {
      question: "In multiplication, after each step, which direction are the bits shifted?",
      options: [
        "Left",
        "Right",
        "No shift",
        "Alternating"
      ],
      correctIndex: 1,
    },
    {
      question: "What is Booth's Algorithm used for?",
      options: [
        "Division only",
        "Addition",
        "Two's complement multiplication",
        "Memory management"
      ],
      correctIndex: 2,
    },
    {
      question: "In Booth's Algorithm, what is Q-1 initialized to?",
      options: [
        "1",
        "0",
        "Multiplier value",
        "Multiplicand value"
      ],
      correctIndex: 1,
    },
    {
      question: "In Booth's Algorithm, what happens when Q0 and Q-1 are equal?",
      options: [
        "Add M to A",
        "Subtract M from A",
        "Shift right only",
        "Stop"
      ],
      correctIndex: 2,
    },
    {
      question: "In Booth's Algorithm, what happens when Q0Q-1 = 01?",
      options: [
        "Subtract M from A",
        "Add M to A",
        "No operation",
        "Shift left"
      ],
      correctIndex: 1,
    },
    {
      question: "In Booth's Algorithm, what happens when Q0Q-1 = 10?",
      options: [
        "Add M to A",
        "Subtract M from A",
        "No operation",
        "Shift left"
      ],
      correctIndex: 1,
    },
    {
      question: "What type of shift is used in Booth's Algorithm?",
      options: [
        "Logical shift",
        "Circular shift",
        "Arithmetic shift",
        "No shift"
      ],
      correctIndex: 2,
    },
    {
      question: "Why is arithmetic shift used in Booth's Algorithm?",
      options: [
        "Faster operation",
        "To preserve the sign bit",
        "To reduce errors",
        "To save memory"
      ],
      correctIndex: 1,
    },
    {
      question: "Which operation is more complex: multiplication or division?",
      options: [
        "Multiplication",
        "Division",
        "They are equal",
        "Neither is complex"
      ],
      correctIndex: 1,
    },
    {
      question: "Division is based on which manual method?",
      options: [
        "Short division",
        "Long division",
        "Synthetic division",
        "Polynomial division"
      ],
      correctIndex: 1,
    },
    {
      question: "In division, what is placed in the quotient when the divisor can divide?",
      options: [
        "0",
        "1",
        "2",
        "The divisor"
      ],
      correctIndex: 1,
    },
    {
      question: "In division, what is placed in the quotient when the divisor cannot divide?",
      options: [
        "0",
        "1",
        "Skip",
        "Error"
      ],
      correctIndex: 0,
    },
    {
      question: "What is the result after the divisor is subtracted from the partial dividend called?",
      options: [
        "Quotient",
        "Partial remainder",
        "Final result",
        "Dividend"
      ],
      correctIndex: 1,
    },
    {
      question: "Real numbers can be represented as which of the following?",
      options: [
        "Integers only",
        "Sign, significand, exponent, and base",
        "Binary only",
        "Hexadecimal only"
      ],
      correctIndex: 1,
    },
    {
      question: "In a 32-bit floating point format, how many bits are used for the exponent?",
      options: [
        "4",
        "8",
        "16",
        "23"
      ],
      correctIndex: 1,
    },
    {
      question: "In a 32-bit floating point format, how many bits are used for the significand?",
      options: [
        "8",
        "16",
        "23",
        "32"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the bias for an 8-bit exponent field?",
      options: [
        "64",
        "127",
        "128",
        "255"
      ],
      correctIndex: 1,
    },
    {
      question: "The bias formula for an exponent is:",
      options: [
        "2^k",
        "2^(k-1) - 1",
        "2^k - 1",
        "k - 1"
      ],
      correctIndex: 1,
    },
    {
      question: "What does normalization ensure in floating point numbers?",
      options: [
        "Smallest size",
        "Most significant digit of significand is non-zero",
        "Fastest computation",
        "Least memory"
      ],
      correctIndex: 1,
    },
    {
      question: "In normalized binary floating point, the MSB of the significand is:",
      options: [
        "0",
        "1",
        "Either 0 or 1",
        "Not defined"
      ],
      correctIndex: 1,
    },
    {
      question: "Since the MSB is always 1 in normalized form, what can be done?",
      options: [
        "Store it anyway",
        "No need to store it",
        "Store it twice",
        "Ignore the number"
      ],
      correctIndex: 1,
    },
    {
      question: "What does IEEE 754 standardize?",
      options: [
        "Integer representation",
        "Floating point representation",
        "Character encoding",
        "Memory addressing"
      ],
      correctIndex: 1,
    },
    {
      question: "IEEE 754 covers which types of floating-point representations?",
      options: [
        "Only binary",
        "Only decimal",
        "Both binary and decimal",
        "Neither"
      ],
      correctIndex: 2,
    },
    {
      question: "In IEEE 754, how many bits is the standard single precision format?",
      options: [
        "16",
        "32",
        "64",
        "128"
      ],
      correctIndex: 1,
    },
    {
      question: "In IEEE 754, how many bits is the double precision format?",
      options: [
        "32",
        "64",
        "128",
        "256"
      ],
      correctIndex: 1,
    },
    {
      question: "What is the first step in floating point addition/subtraction?",
      options: [
        "Add significands",
        "Normalize",
        "Check for zeros",
        "Round result"
      ],
      correctIndex: 2,
    },
    {
      question: "What is the second step in floating point addition/subtraction?",
      options: [
        "Check for zeros",
        "Align significands by adjusting exponents",
        "Normalize",
        "Add significands"
      ],
      correctIndex: 1,
    },
    {
      question: "In floating point multiplication, what do you do with the exponents?",
      options: [
        "Add them",
        "Subtract them",
        "Multiply them",
        "Divide them"
      ],
      correctIndex: 0,
    },
    {
      question: "In floating point division, what do you do with the exponents?",
      options: [
        "Add them",
        "Subtract them",
        "Multiply them",
        "Divide them"
      ],
      correctIndex: 1,
    },
  ],
};