export const Ict1152Quiz = {
  "id": "ict1152-lec01",
  "title": "Computer Architecture ICT1152 - Lecture 01: Introduction & Background",
  "category": "Computer Architecture",
  "questions": [
    {
      "question": "Which of the following best defines Computer Architecture?",
      "options": [
        "The retail price and marketing of a processor line",
        "The operational units and how they interconnect physically",
        "The physical layout of cables and slots on a motherboard",
        "The attributes with a direct impact on the logical execution of a program"
      ],
      "correctIndex": 3,
      "explanation": "Architecture covers attributes visible to the programmer, like the instruction set, data types, and addressing techniques — it describes WHAT the computer does."
    },
    {
      "question": "Which of the following best defines Computer Organization?",
      "options": [
        "The number of bits used to represent each data type",
        "The operational units and interconnections that realize the architecture",
        "The high-level programming model of an application",
        "The instruction set architecture visible to the programmer"
      ],
      "correctIndex": 1,
      "explanation": "Organization deals with hardware details transparent to the programmer — control signals, interfaces, and memory technology. It describes HOW the computer does it."
    },
    {
      "question": "In the instruction ADD R1, R2, what does the architecture specify?",
      "options": [
        "The exact control signals used during execution",
        "The physical wiring layout of the ALU circuit",
        "That the processor supports an instruction like this one",
        "The precise clock cycle timing of the operation"
      ],
      "correctIndex": 2,
      "explanation": "The architecture specifies that a particular instruction (like ADD R1, R2) is supported; the organization explains how ALU, registers, and control units execute it."
    },
    {
      "question": "According to the lecture, which statement correctly distinguishes architecture and organization?",
      "options": [
        "Organization is always decided first, then architecture follows",
        "Architecture is fixed first, then organization is decided",
        "They are decided at the same time, independently of each other",
        "Organization has no real relationship with architecture"
      ],
      "correctIndex": 1,
      "explanation": "For designing a computer, its architecture is fixed first, and then an organization is decided to implement that architecture."
    },
    {
      "question": "Computer Architecture defines the _______ aspects of a computer system, while Computer Organization defines the _______ aspects.",
      "options": [
        "physical; logical",
        "financial; technical",
        "logical; physical",
        "software; hardware only"
      ],
      "correctIndex": 2,
      "explanation": "Computer architecture defines the logical aspects, while computer organization defines the physical aspects of the computer system."
    },
    {
      "question": "Which of these is an example of an 'Architecture category' as listed in the lecture?",
      "options": [
        "Organization of a single accumulator",
        "Von-Neumann Architecture",
        "Organization of the general registers",
        "Stack organization of memory access"
      ],
      "correctIndex": 1,
      "explanation": "Von-Neumann Architecture, Harvard Architecture, Instruction Set Architecture (ISA), and Micro-architecture are listed as architecture categories, while single accumulator, general registers, and stack organization are organization types."
    },
    {
      "question": "Who proposed the Von Neumann architecture, and in what year?",
      "options": [
        "Charles Babbage, in the year 1837",
        "John von Neumann, in the year 1945",
        "Grace Hopper, in the year 1952",
        "John von Neumann, in the year 1970",
        "Alan Turing, in the year 1936"
      ],
      "correctIndex": 1,
      "explanation": "The Von Neumann architecture was proposed by John von Neumann in 1945 and forms the foundation for most modern computers."
    },
    {
      "question": "What is the defining feature of the Von Neumann architecture regarding memory?",
      "options": [
        "Instructions and data use separate memory and buses",
        "Neither instructions nor data are stored in memory",
        "Only data is stored in memory; instructions are hardwired",
        "Instructions and data share a single memory address space"
      ],
      "correctIndex": 3,
      "explanation": "The Von Neumann architecture uses a single address space for both instructions and data, stored in the same memory."
    },
    {
      "question": "What is the 'Von Neumann Bottleneck'?",
      "options": [
        "The complete absence of an arithmetic logic unit",
        "A recurring software bug in early Von Neumann machines",
        "The CPU attempting to run too many instructions at once",
        "The limitation from sharing one memory bus for instructions and data"
      ],
      "correctIndex": 3,
      "explanation": "The shared memory bus for both instructions and data creates a bottleneck, limiting how fast the CPU can access information."
    },
    {
      "question": "Which architecture uses separate memories and buses for instructions and data, allowing simultaneous fetches?",
      "options": [
        "IBM's System/370 Architecture",
        "Von Neumann Architecture",
        "The x86-64 Architecture",
        "Harvard Architecture"
      ],
      "correctIndex": 3,
      "explanation": "Harvard Architecture uses separate memory and buses for instructions and data, enabling simultaneous instruction and data fetches — used in microcontrollers and DSPs."
    },
    {
      "question": "Which of the following is a typical use case for Harvard Architecture, as mentioned in the lecture?",
      "options": [
        "General-purpose desktop PCs and laptops",
        "Mainframe computing systems exclusively",
        "Microcontrollers like Arduino and PIC, and DSPs",
        "Large-scale cloud server farms only"
      ],
      "correctIndex": 2,
      "explanation": "Harvard architecture is used in microcontrollers (e.g., Arduino, PIC) and DSPs (Digital Signal Processors) for embedded systems needing faster execution."
    },
    {
      "question": "According to the lecture, DSPs enable which real-world application example?",
      "options": [
        "Encrypting email messages in transit",
        "Hosting and serving websites at scale",
        "Speech recognition for assistants like Siri and Alexa",
        "Real-time video game graphics rendering"
      ],
      "correctIndex": 2,
      "explanation": "DSPs analyze spoken words to convert them into digital text, enabling voice assistants like Siri, Alexa, and Google Assistant."
    },
    {
      "question": "Which architecture is used in most general-purpose computers such as PCs and laptops?",
      "options": [
        "An experimental Quantum Architecture",
        "Harvard Architecture",
        "Von Neumann Architecture",
        "A RISC-only style Architecture"
      ],
      "correctIndex": 2,
      "explanation": "Von Neumann architecture, with its single shared memory for code and data, is used in most general-purpose computers like PCs and laptops."
    },
    {
      "question": "What does MAR stand for in the CPU register table?",
      "options": [
        "Memory Address Register",
        "Memory Allocation Register",
        "Memory Access Result register",
        "Main Arithmetic Register"
      ],
      "correctIndex": 0,
      "explanation": "MAR (Memory Address Register) holds the memory location of data that needs to be accessed."
    },
    {
      "question": "What is the function of the MDR (Memory Data Register)?",
      "options": [
        "Decodes the currently fetched instruction",
        "Holds data being transferred to or from memory",
        "Holds the address of the next instruction",
        "Stores the intermediate arithmetic result"
      ],
      "correctIndex": 1,
      "explanation": "MDR (Memory Data Register) holds data that is being transferred to or from memory."
    },
    {
      "question": "What does the Accumulator (AC) register store?",
      "options": [
        "The current instruction being processed",
        "Intermediate arithmetic and logic results",
        "Data read only from an I/O device",
        "The address of the next instruction to run"
      ],
      "correctIndex": 1,
      "explanation": "The Accumulator (AC) is where intermediate arithmetic and logic results are stored."
    },
    {
      "question": "Which register contains the address of the next instruction to be executed?",
      "options": [
        "AC, the Accumulator register",
        "PC, the Program Counter",
        "CIR, the Current Instruction Register",
        "MDR, the Memory Data Register"
      ],
      "correctIndex": 1,
      "explanation": "The Program Counter (PC) contains the address of the next instruction to be executed."
    },
    {
      "question": "What does CIR (Current Instruction Register) contain?",
      "options": [
        "The address of an active I/O device",
        "Data currently being read from memory",
        "The address of the next instruction",
        "The current instruction being processed"
      ],
      "correctIndex": 3,
      "explanation": "CIR (Current Instruction Register) contains the current instruction during processing."
    },
    {
      "question": "In the top-level view of a single-processor computer's CPU, which component performs the computer's data processing functions?",
      "options": [
        "The I/O Module",
        "The Arithmetic and Logic Unit (ALU)",
        "The Control Unit",
        "The System Bus"
      ],
      "correctIndex": 1,
      "explanation": "The Arithmetic and Logic Unit (ALU) performs the computer's data processing functions, while the Control Unit controls the CPU's operation."
    },
    {
      "question": "Which CPU component controls the operation of the CPU and hence the computer?",
      "options": [
        "The ALU",
        "The Control Unit",
        "The Registers",
        "The Cache Memory"
      ],
      "correctIndex": 1,
      "explanation": "The Control Unit controls the operation of the CPU and hence the computer."
    },
    {
      "question": "What is the role of registers within the CPU?",
      "options": [
        "They control the system bus exclusively",
        "They store the entire operating system",
        "They connect the CPU to external I/O devices",
        "They provide storage internal to the CPU"
      ],
      "correctIndex": 3,
      "explanation": "Registers provide storage internal to the CPU, used to hold data, addresses, and instructions temporarily during processing."
    },
    {
      "question": "What are the four main structural components of a single-processor computer at the top level?",
      "options": [
        "Input, Output, Storage, and Processing",
        "CPU, ALU, Control Unit, and Registers",
        "Motherboard, CPU, RAM, and Hard Drive",
        "CPU, Main Memory, I/O, and System Interconnection"
      ],
      "correctIndex": 3,
      "explanation": "The four main components are: CPU (controls operation and processes data), Main memory (stores data), I/O (moves data to/from external environment), and System interconnection (e.g., system bus)."
    },
    {
      "question": "What example of 'system interconnection' is given in the lecture?",
      "options": [
        "The Control Unit itself",
        "The Accumulator register",
        "The cache memory hierarchy",
        "The System Bus"
      ],
      "correctIndex": 3,
      "explanation": "The System Bus is given as an example of the system interconnection mechanism that provides communication among CPU, main memory, and I/O."
    },
    {
      "question": "What is the correct order of steps in how the CPU interconnection works, according to the lecture?",
      "options": [
        "Store, then Decode, then Fetch, then Execute",
        "Execute, then Fetch, then Store, then Decode",
        "Decode, then Fetch, then Execute, then Store",
        "Fetch, then Decode, then Execute, then Store"
      ],
      "correctIndex": 3,
      "explanation": "The Control Unit fetches the instruction, it's decoded, operands go to the ALU for execution, and results are stored back — following fetch, decode, execute, store."
    },
    {
      "question": "What is a 'core' in the context of a multicore computer?",
      "options": [
        "A chip containing one or more processing units",
        "An individual processing unit on a processor chip",
        "An external device used for input/output",
        "The main memory unit of the computer"
      ],
      "correctIndex": 1,
      "explanation": "A core is an individual processing unit on a processor chip, equivalent in functionality to a CPU on a single-CPU system."
    },
    {
      "question": "How does the lecture define a 'processor' in the context of multicore systems?",
      "options": [
        "Silicon containing one or more cores that executes instructions",
        "A single processing unit only, containing no cores",
        "A component that is functionally identical to main memory",
        "A software layer that manages hardware resources"
      ],
      "correctIndex": 0,
      "explanation": "A processor is a physical piece of silicon containing one or more cores, and is the computer component that interprets and executes instructions."
    },
    {
      "question": "What is a Printed Circuit Board (PCB)?",
      "options": [
        "A rigid board that holds and interconnects electronic parts",
        "A specialized type of fast cache memory",
        "An external input or output peripheral device",
        "A single piece of silicon with fabricated circuits"
      ],
      "correctIndex": 0,
      "explanation": "A PCB is a rigid, flat board made of layers (typically 2–10) that interconnect components via copper pathways."
    },
    {
      "question": "What is the main printed circuit board in a computer called?",
      "options": [
        "An expansion board",
        "A backplane board",
        "A system board or motherboard",
        "A daughterboard"
      ],
      "correctIndex": 2,
      "explanation": "The main printed circuit board in a computer is called a system board or motherboard, while smaller boards that plug into it are called expansion boards."
    },
    {
      "question": "What is a 'chip', as defined in the lecture?",
      "options": [
        "A smaller type of plug-in expansion board",
        "An empty slot located on the motherboard",
        "A component used for cooling the processor",
        "Silicon with fabricated circuits and logic gates"
      ],
      "correctIndex": 3,
      "explanation": "A chip is a single piece of semiconducting material, typically silicon, on which electronic circuits and logic gates are fabricated — the result is called an integrated circuit."
    },
    {
      "question": "What is the purpose of cache memory?",
      "options": [
        "To fully replace the need for main memory",
        "To physically connect I/O devices to the CPU",
        "To speed up access to data likely to be used soon",
        "To permanently store the whole operating system",
        "To perform the computer's arithmetic operations"
      ],
      "correctIndex": 2,
      "explanation": "Cache memory is smaller and faster than main memory, and speeds up memory access by placing data likely to be used soon closer to the processor."
    },
    {
      "question": "In a multi-level cache hierarchy (L1, L2, L3...), how does size and speed change as the level number increases?",
      "options": [
        "All cache levels are equal in size and speed",
        "Level n is smaller and faster than level n+1",
        "Level n is larger and faster than level n+1",
        "Level n is smaller but also slower than n+1"
      ],
      "correctIndex": 1,
      "explanation": "In cache hierarchy, level n is smaller and faster than level n+1 — L1 (closest to the core) is the smallest and fastest, with L2, L3 progressively larger and slower."
    },
    {
      "question": "Which cache level is closest to the processor core?",
      "options": [
        "Main memory itself",
        "Level 3 cache (L3)",
        "Level 1 cache (L1)",
        "Level 2 cache (L2)"
      ],
      "correctIndex": 2,
      "explanation": "Level 1 (L1) cache is closest to the core, with additional levels (L2, L3, etc.) progressively farther from the core."
    },
    {
      "question": "What are the four main functions of a computer, according to the lecture?",
      "options": [
        "Input, Output, Storage, and Processing",
        "Read, Write, Compute, and Display",
        "Fetch, Decode, Execute, and Store",
        "Data Processing, Storage, Movement, and Control"
      ],
      "correctIndex": 3,
      "explanation": "In general, there are only four computer functions: Data processing, Data storage, Data movement, and Control."
    },
    {
      "question": "What is the term used when data is received from or delivered to a device directly connected to the computer?",
      "options": [
        "Input–Output (I/O)",
        "Data caching operation",
        "Data compression process",
        "Data encryption process"
      ],
      "correctIndex": 0,
      "explanation": "When data are received from or delivered to a directly connected device, the process is known as input–output (I/O), and the device is referred to as a peripheral."
    },
    {
      "question": "What distinguishes 'short-term' from 'long-term' data storage functions, per the lecture?",
      "options": [
        "Short-term holds current work; long-term keeps files for later",
        "Short-term storage is on disk; long-term is in RAM",
        "There is no real distinction between the two types",
        "Short-term is for instructions only; long-term is data only"
      ],
      "correctIndex": 0,
      "explanation": "The computer must temporarily store data being worked on (short-term), while files are stored for subsequent retrieval and update (long-term)."
    },
    {
      "question": "What manages the computer's resources and controls the performance of its functional parts in response to instructions?",
      "options": [
        "The Main Memory unit",
        "The Control Unit",
        "The System Bus itself",
        "The Arithmetic Logic Unit"
      ],
      "correctIndex": 1,
      "explanation": "A Control Unit manages the computer's resources and controls the performance of its functional parts in response to instructions."
    },
    {
      "question": "What is a 'hierarchical system', as described in the lecture?",
      "options": [
        "A flat list of components with no internal structure",
        "Interrelated subsystems, hierarchical down to elementary parts",
        "A network layout used only in server rooms",
        "A system that contains only a single level of components"
      ],
      "correctIndex": 1,
      "explanation": "A hierarchical system is a set of interrelated subsystems, each in turn hierarchical in structure, until reaching the lowest level of elementary subsystem."
    },
    {
      "question": "At each level of a computer system's hierarchy, what two important things should be considered?",
      "options": [
        "Structure and Function",
        "Cost and overall speed",
        "Hardware and Software",
        "Physical size and weight"
      ],
      "correctIndex": 0,
      "explanation": "At each level of the hierarchy: Structure (how components are interrelated) and Function (the operation of each component as part of the structure)."
    },
    {
      "question": "Which approach does the lecture say is used to study computer systems, and why?",
      "options": [
        "Middle-out, because it offers a balance",
        "Random, because it allows for more flexibility",
        "Bottom-up, because it starts from transistors",
        "Top-down, because it is clearest and most effective"
      ],
      "correctIndex": 3,
      "explanation": "The lecture states that a top-down approach is used to study computer systems as it is the clearest and most effective method."
    },
    {
      "question": "According to Von Neumann's three key concepts, how is memory addressed?",
      "options": [
        "Randomly, with no consistent addressing scheme",
        "By data type, so different types use separate areas",
        "By location, regardless of the type of data stored there",
        "Only instructions are addressable; data is not"
      ],
      "correctIndex": 2,
      "explanation": "One of Von Neumann's three key concepts is that memory contents are addressable by location, without regard to the type of data contained there."
    },
    {
      "question": "How does execution occur in the Von Neumann model, per the three key concepts?",
      "options": [
        "In a completely random and unordered sequence",
        "Only in reverse, from last instruction to first",
        "Sequentially, from one instruction to the next",
        "In parallel, across all instructions simultaneously"
      ],
      "correctIndex": 2,
      "explanation": "Execution occurs in a sequential fashion (unless explicitly modified) from one instruction to the next."
    },
    {
      "question": "In the 'Computer Components: A Top-Level View' diagram, what does IR stand for?",
      "options": [
        "Internal Register",
        "Input Register",
        "Instruction Register",
        "Interrupt Register"
      ],
      "correctIndex": 2,
      "explanation": "IR stands for Instruction Register, one of the CPU registers shown in the top-level computer components diagram."
    },
    {
      "question": "What is the purpose of the I/O Address Register (I/OAR)?",
      "options": [
        "It stores the result of an ALU operation",
        "It manages addresses within cache memory",
        "It specifies a particular I/O device",
        "It holds the next instruction to execute"
      ],
      "correctIndex": 2,
      "explanation": "The I/O Address Register (I/OAR) specifies a particular I/O device, similar to how MAR specifies a memory location."
    },
    {
      "question": "What is the purpose of the I/O Buffer Register (I/OBR)?",
      "options": [
        "It exchanges data between an I/O module and the CPU",
        "It specifies which I/O device is targeted",
        "It controls the clock speed of the CPU",
        "It stores the address of the next instruction"
      ],
      "correctIndex": 0,
      "explanation": "The I/O Buffer Register (I/OBR) is used for the exchange of data between an I/O module and the CPU, similar to how MBR works for memory."
    },
    {
      "question": "During a memory READ operation using MAR and MBR, what is the correct sequence?",
      "options": [
        "Data is fetched first, then loaded into the MAR",
        "The MBR is loaded first, then the MAR afterward",
        "Address goes to MAR, a read signal fetches data into MBR",
        "The CPU reads memory directly, bypassing MAR and MBR"
      ],
      "correctIndex": 2,
      "explanation": "For a read: the address is loaded into MAR, a read signal is sent to memory, data at that address is fetched and placed into MBR, and the CPU reads it from there."
    },
    {
      "question": "Which of these is NOT listed in the lecture as a method to assess computer performance?",
      "options": [
        "Measuring the Clock Speed",
        "Running standard Benchmarks",
        "Applying Moore's Law",
        "Applying Amdahl's Law"
      ],
      "correctIndex": 2,
      "explanation": "The lecture lists Clock Speed, Instruction Execution Rate, Benchmarks, Amdahl's Law, and Little's Law as performance assessment methods — Moore's Law is not included."
    },
    {
      "question": "According to the lecture, what factors make performance 'difficult to assess'?",
      "options": [
        "Processor speed, instruction set, language, and compiler",
        "Only the physical size of the computer case",
        "Only the color and design of the motherboard",
        "Only the retail price of the processor chip"
      ],
      "correctIndex": 0,
      "explanation": "Performance is difficult to assess because it depends on processor speed, instruction set, implementation language, compiler efficiency, and programming skill."
    },
    {
      "question": "Which of the following correctly lists the five generations of computers, in order, as presented in the lecture?",
      "options": [
        "Transistors, Vacuum Tubes, Circuits, Microprocessors, AI",
        "Vacuum Tubes, Transistors, Circuits, Microprocessors, AI",
        "Microprocessors, Vacuum Tubes, Transistors, AI, Circuits",
        "Circuits, Transistors, Vacuum Tubes, AI, Microprocessors"
      ],
      "correctIndex": 1,
      "explanation": "The lecture lists: 1st Gen – Vacuum Tubes, 2nd Gen – Transistors, 3rd Gen – Integrated Circuits, 4th Gen – Microprocessors, 5th Gen – Artificial Intelligence."
    },
    {
      "question": "In the Intel Core i3/i5/i7/i9 example, what stays the SAME across the family (representing shared architecture)?",
      "options": [
        "The x86-64 instruction set and programming model",
        "The clock speed and the retail price",
        "The number of cores and the cache size",
        "The overall performance level of the chip"
      ],
      "correctIndex": 0,
      "explanation": "All the processors in the family use the x86-64 architecture, support the same instruction set, and can run the same software — this is the shared architecture, while cores, clock speed, and cache size differ (organization)."
    },
    {
      "question": "What made the IBM System/370 architecture notable, according to the lecture's example?",
      "options": [
        "It was discontinued after only a single model",
        "It relied exclusively on the Harvard architecture design",
        "It was never adopted by any real paying customers",
        "Many models existed, yet the architecture still survives today"
      ],
      "correctIndex": 3,
      "explanation": "System/370 was first introduced in 1970 with many models (different organizations); customers could upgrade to faster models without abandoning existing software, and the architecture, with a few enhancements, survives today in IBM's mainframe product line."
    }
  ]
};

export const Ict1152Quiz2 = {
  "id": "ict1152-lec02",
  "title": "Computer Architecture ICT1152 - Lecture 02: Instruction Cycle and Interrupts",
  "category": "Computer Architecture",
  "questions": [
    {
      "question": "What is the basic function of a computer, according to the lecture?",
      "options": [
        "To execute programs made of instructions stored in memory",
        "To store data permanently without ever processing it",
        "To connect multiple I/O devices to a single display",
        "To manage electrical power across internal components"
      ],
      "correctIndex": 0,
      "explanation": "The basic function of a computer is to execute programs, which consist of a set of instructions stored in memory."
    },
    {
      "question": "What are the two basic steps involved in instruction processing?",
      "options": [
        "The processor fetches instructions, then executes each one",
        "The processor compiles code, then links external libraries",
        "The processor formats memory, then boots the operating system",
        "The processor encrypts data, then transmits it over a bus"
      ],
      "correctIndex": 0,
      "explanation": "Instruction processing consists of two steps: the processor reads (fetches) instructions from memory one at a time, and then executes each instruction."
    },
    {
      "question": "What is the term for the processing required to execute a single instruction?",
      "options": [
        "An instruction cycle",
        "A memory refresh cycle",
        "A power management cycle",
        "A compilation cycle"
      ],
      "correctIndex": 0,
      "explanation": "Processing required for a single instruction is called an instruction cycle."
    },
    {
      "question": "In the ADD example, what happens in the 'fetch stage' of instruction processing?",
      "options": [
        "Getting the instruction from memory",
        "Performing the actual arithmetic calculation",
        "Storing the final result back somewhere",
        "Retrieving the operand from memory or I/O"
      ],
      "correctIndex": 0,
      "explanation": "The lecture's ADD example lists 'Getting the instruction from memory' as the fetch stage, the first step of instruction processing."
    },
    {
      "question": "In the ADD example, what does the 'decode stage' involve?",
      "options": [
        "Understanding what the instruction means",
        "Retrieving the operand from memory or I/O",
        "Storing the result somewhere in memory",
        "Getting the instruction from memory itself"
      ],
      "correctIndex": 0,
      "explanation": "The lecture's ADD example describes the decode stage as 'Understanding what the instruction means.'"
    },
    {
      "question": "According to the 'How computer executes programs' diagram, where does the operating system initially load a program from?",
      "options": [
        "From disk memory (secondary memory) into RAM",
        "From the CPU cache directly into the accumulator",
        "From a remote network server into main memory",
        "From the I/O buffers directly into the ALU"
      ],
      "correctIndex": 0,
      "explanation": "The diagram shows the operating system loads a program from Disk Memory (Secondary Memory) into RAM (Primary Memory, Main Memory)."
    },
    {
      "question": "In the 'How computer executes programs' diagram, what happens after the 'Execute' step of the machine cycle, before checking for interrupts again?",
      "options": [
        "The 'Store' step saves results, then the cycle checks interrupts",
        "The program is immediately deleted from RAM",
        "The CPU shuts down until the next user input",
        "The disk memory is reformatted automatically"
      ],
      "correctIndex": 0,
      "explanation": "The machine cycle diagram shows: Fetch, Decode, Execute, Store, and then the cycle checks the Interrupt decision again before the next fetch."
    },
    {
      "question": "What does the lecture state is the basic operation of the CPU?",
      "options": [
        "The instruction cycle",
        "The power supply regulation process",
        "The disk defragmentation process",
        "The network packet routing process"
      ],
      "correctIndex": 0,
      "explanation": "The lecture states: 'The instruction cycle is the basic operation of the CPU.'"
    },
    {
      "question": "Which three-step cycle does the CPU repetitively perform to execute one program?",
      "options": [
        "Fetch, Decode, and Execute",
        "Compile, Link, and Load",
        "Boot, Format, and Install",
        "Encrypt, Transmit, and Decrypt"
      ],
      "correctIndex": 0,
      "explanation": "The lecture states the CPU repetitively performs the Fetch, Decode, and Execute cycle to execute one program."
    },
    {
      "question": "In the 'Steps in the Instruction Cycle' list, what does the Store step do?",
      "options": [
        "Saves results back to memory or registers, if needed",
        "Gets the instruction from memory for processing",
        "Interprets what the fetched instruction means",
        "Performs the calculation or data-moving operation"
      ],
      "correctIndex": 0,
      "explanation": "The lecture defines the Store step as: 'Save results back to memory or registers,' performed if needed."
    },
    {
      "question": "According to the 'Instruction Cycle' slide, how many main steps or sub-cycles make up the instruction cycle?",
      "options": [
        "Two: Fetch and Execute",
        "Three: Fetch, Decode, and Store",
        "Four: Fetch, Decode, Execute, and Halt",
        "Five: Fetch, Decode, Calculate, Store, and Halt"
      ],
      "correctIndex": 0,
      "explanation": "The 'Instruction Cycle' slide states there are two steps/sub cycles: Fetch and Execute."
    },
    {
      "question": "In the fetch-execute flow diagram (START to HALT), what happens directly after 'Fetch next instruction'?",
      "options": [
        "The processor moves to 'Execute instruction'",
        "The processor immediately halts the program",
        "The processor restarts from the START state",
        "The processor reloads the program from disk"
      ],
      "correctIndex": 0,
      "explanation": "The diagram shows: START, then Fetch next instruction, then Execute instruction, then HALT."
    },
    {
      "question": "During the Fetch Cycle, which register holds the address of the next instruction to be fetched?",
      "options": [
        "The Program Counter (PC)",
        "The Instruction Register (IR)",
        "The Memory Buffer Register (MBR)",
        "The Accumulator (AC)"
      ],
      "correctIndex": 0,
      "explanation": "A register called the Program Counter (PC) holds the address of the next instruction to be fetched."
    },
    {
      "question": "What does the processor typically do to the PC after each instruction fetch?",
      "options": [
        "It increments the PC, unless told otherwise",
        "It resets the PC back to the program's start",
        "It clears the PC completely to zero",
        "It copies the PC value into the accumulator"
      ],
      "correctIndex": 0,
      "explanation": "The processor increments the PC after each fetch, unless told otherwise."
    },
    {
      "question": "Where is the fetched instruction loaded during the Fetch Cycle?",
      "options": [
        "Into the Instruction Register (IR)",
        "Into the Memory Address Register (MAR) only",
        "Directly into the Arithmetic Logic Unit (ALU)",
        "Into the I/O Buffer Register (I/OBR)"
      ],
      "correctIndex": 0,
      "explanation": "The fetched instruction is loaded into the Instruction Register (IR)."
    },
    {
      "question": "What does an instruction contain that specifies the action the processor is to take?",
      "options": [
        "Bits within the fetched instruction itself",
        "A separate configuration file stored on disk",
        "A signal sent from an external I/O device",
        "A value permanently hardwired into the ALU"
      ],
      "correctIndex": 0,
      "explanation": "The instruction contains bits that specify the action the processor is to take."
    },
    {
      "question": "According to the Execute Cycle slide, what does 'Processor-memory' action refer to?",
      "options": [
        "Data transfer between the CPU and main memory",
        "Data transfer between the CPU and I/O module",
        "An arithmetic or logical operation on data",
        "Altering the sequence of program operations"
      ],
      "correctIndex": 0,
      "explanation": "The 'Processor-memory' category refers to data transfer between the CPU and main memory."
    },
    {
      "question": "According to the Execute Cycle slide, what does 'Processor - I/O' action refer to?",
      "options": [
        "Data transfer between the CPU and an I/O module",
        "Data transfer only between the CPU and main memory",
        "Performing arithmetic operations on stored data",
        "Jumping to a different point in the program"
      ],
      "correctIndex": 0,
      "explanation": "The 'Processor - I/O' category refers to data transfer between the CPU and I/O module."
    },
    {
      "question": "Which category of processor action does a 'jump' instruction belong to, according to the Execute Cycle slide?",
      "options": [
        "Control, which alters the sequence of operations",
        "Data processing, which performs arithmetic operations",
        "Processor-memory, which transfers data with memory",
        "Processor-I/O, which transfers data with I/O modules"
      ],
      "correctIndex": 0,
      "explanation": "Control actions specify the alteration of the sequence of operations, and a jump is given as the example."
    },
    {
      "question": "In the 'Computer Components: A Top-Level View' diagram, what does the abbreviation MBR stand for?",
      "options": [
        "Memory buffer register",
        "Memory branch register",
        "Main bus router",
        "Machine bit register"
      ],
      "correctIndex": 0,
      "explanation": "The diagram's legend defines MBR as the memory buffer register."
    },
    {
      "question": "In the 'Computer Components: A Top-Level View' diagram, what does I/O AR represent?",
      "options": [
        "Input/output address register",
        "Input/output access router",
        "Internal operation address register",
        "I/O arbitration register"
      ],
      "correctIndex": 0,
      "explanation": "The diagram's legend defines I/O AR as the input/output address register."
    },
    {
      "question": "According to the lecture, what are Registers used for within the CPU?",
      "options": [
        "To quickly accept, store, and transfer data and instructions",
        "To permanently archive old programs no longer in use",
        "To physically cool down the processor during operation",
        "To connect the motherboard to external power supplies"
      ],
      "correctIndex": 0,
      "explanation": "Registers are used to quickly accept, store, and transfer data and instructions that are being used immediately by the CPU."
    },
    {
      "question": "According to the PC Register explanation, what helps the PC Register decide which instruction executes next?",
      "options": [
        "The operating system, using scheduling algorithms",
        "The instruction register, using its stored opcode",
        "The accumulator, using its temporary stored value",
        "The I/O module, using its buffered device data"
      ],
      "correctIndex": 0,
      "explanation": "The lecture states the operating system helps the PC Register decide which instruction will be executed now, according to scheduling algorithms."
    },
    {
      "question": "According to the lecture, after the PC register allows an instruction, where is it sent?",
      "options": [
        "To the MAR, the memory address register",
        "To the AC, the accumulator register directly",
        "To the ALU for immediate arithmetic processing",
        "To external secondary storage for archiving"
      ],
      "correctIndex": 0,
      "explanation": "The PC register allows an instruction, then sends this instruction to the MAR register, which is the memory address register."
    },
    {
      "question": "What does the MBR register do, according to the lecture's description?",
      "options": [
        "It buffers the instruction, with help from the MAR",
        "It permanently stores the operating system kernel",
        "It calculates the next memory address to be used",
        "It directly executes arithmetic and logic operations"
      ],
      "correctIndex": 0,
      "explanation": "With the help of the MAR register, the MBR register buffers the instruction, since MBR stands for memory buffer register."
    },
    {
      "question": "What does the IR register tell the CPU, according to the lecture?",
      "options": [
        "Which instruction is currently being executed",
        "Which memory address will be accessed next",
        "How much power the CPU is currently consuming",
        "Which I/O device is currently connected"
      ],
      "correctIndex": 0,
      "explanation": "The IR register is the instruction register and tells the CPU which instruction is being executed."
    },
    {
      "question": "What does the AC (Accumulator) register help to do, according to the lecture?",
      "options": [
        "Temporarily store values used during processing",
        "Permanently store the entire operating system",
        "Directly control external input and output devices",
        "Manage scheduling algorithms for the whole system"
      ],
      "correctIndex": 0,
      "explanation": "The AC register is the accumulator register, and it helps to temporarily store the values."
    },
    {
      "question": "How does the lecture define a 'Hypothetical Machine'?",
      "options": [
        "A theoretical model of a computer used for teaching or simulation",
        "A physical prototype computer built for real commercial use",
        "A malfunctioning computer that needs to be repaired",
        "A computer running entirely on quantum processing hardware"
      ],
      "correctIndex": 0,
      "explanation": "A hypothetical machine is a theoretical model of a computer designed for teaching, analysis, or simulation purposes, not for actual real-world use."
    },
    {
      "question": "In the Hypothetical Machine's instruction format, how many bits are used for the address portion (out of 16 total bits)?",
      "options": [
        "12 bits are used for the address",
        "4 bits are used for the address",
        "8 bits are used for the address",
        "16 bits are used for the address"
      ],
      "correctIndex": 0,
      "explanation": "The instruction format uses 4 bits (0-3) for the opcode and the remaining 12 bits (4-15) for the address."
    },
    {
      "question": "In the Hypothetical Machine's instruction format, how many bits are used for the opcode?",
      "options": [
        "4 bits are used for the opcode",
        "8 bits are used for the opcode",
        "12 bits are used for the opcode",
        "1 bit is used for the opcode"
      ],
      "correctIndex": 0,
      "explanation": "The instruction format diagram shows bits 0 through 3 (4 bits total) are allocated to the opcode."
    },
    {
      "question": "What does opcode 0001 mean in the Hypothetical Machine's partial opcode list?",
      "options": [
        "Load AC from memory",
        "Store AC to memory",
        "Add to AC from memory",
        "Jump to a new memory address"
      ],
      "correctIndex": 0,
      "explanation": "The partial list of opcodes states 0001 = Load AC from memory."
    },
    {
      "question": "What does opcode 0010 mean in the Hypothetical Machine's partial opcode list?",
      "options": [
        "Store AC to memory",
        "Load AC from memory",
        "Add to AC from memory",
        "Halt the current program execution"
      ],
      "correctIndex": 0,
      "explanation": "The partial list of opcodes states 0010 = Store AC to memory."
    },
    {
      "question": "What does opcode 0101 mean in the Hypothetical Machine's partial opcode list?",
      "options": [
        "Add to AC from memory",
        "Load AC from memory directly",
        "Store AC back into memory",
        "Subtract a value from the AC"
      ],
      "correctIndex": 0,
      "explanation": "The partial list of opcodes states 0101 = Add to AC from memory."
    },
    {
      "question": "In the Program Instruction Format diagram, what does Part 2 (the Operation Code) tell the Control Unit?",
      "options": [
        "Which operation to perform",
        "Where the data is physically stored",
        "How much power the operation requires",
        "Which register holds the final result"
      ],
      "correctIndex": 0,
      "explanation": "Part 2, the OPCODE, is described as being for the Control Unit, indicating which operation to perform."
    },
    {
      "question": "In the Program Instruction Format diagram, what is Part 3 (the Operand) used for?",
      "options": [
        "For the ALU, indicating the data operation to be performed",
        "For the Control Unit, indicating which opcode to decode",
        "For the addressing mode rule applied to the operand",
        "For storing the entire instruction cycle's execution log"
      ],
      "correctIndex": 0,
      "explanation": "Part 3, the OPERAND, is described as being for the ALU, related to the data operation to be performed."
    },
    {
      "question": "In the worked example where instructions and data are 16 bits long with 4 bits for the opcode, how many different opcodes are possible?",
      "options": [
        "16 different opcodes (since 2^4 = 16)",
        "4 different opcodes (since 4 bits equals 4)",
        "256 different opcodes (since 2^8 = 256)",
        "12 different opcodes (matching the address bits)"
      ],
      "correctIndex": 0,
      "explanation": "With 4 bits for the opcode, the number of different opcodes is 2^4 = 16."
    },
    {
      "question": "In the worked example with 12 bits allocated for the address, how many directly addressable memory locations are possible?",
      "options": [
        "4096 locations, or 4K (since 2^12 = 4096)",
        "16 locations (matching the number of opcodes)",
        "1024 locations, or 1K (since 2^10 = 1024)",
        "65536 locations (since 2^16 = 65536)"
      ],
      "correctIndex": 0,
      "explanation": "With 12 bits for the address, the number of directly addressable memory locations is 2^12 = 4096 (4K)."
    },
    {
      "question": "In the Program Execution example, what is the first instruction (1940) at address 300 interpreted as doing?",
      "options": [
        "Loading the AC (accumulator) from memory",
        "Storing the AC (accumulator) into memory",
        "Adding a value to the AC from memory",
        "Jumping the program counter to a new address"
      ],
      "correctIndex": 0,
      "explanation": "Instruction 1940 has opcode 1 (0001), which means Load AC (accumulator) from memory; the leftmost digit 1 identifies this opcode."
    },
    {
      "question": "In the Program Execution example, what is the second instruction (5941) at address 301 interpreted as doing?",
      "options": [
        "Adding the contents of memory location 941 to the AC",
        "Loading the AC directly from memory location 941",
        "Storing the current AC value into memory location 941",
        "Fetching a brand-new instruction from location 941"
      ],
      "correctIndex": 0,
      "explanation": "Instruction 5941 has opcode 5 (0101), meaning Add to AC from memory; it adds the old AC contents to the contents of location 941."
    },
    {
      "question": "In the Program Execution example, what is the third instruction (2941) at address 302 interpreted as doing?",
      "options": [
        "Storing the contents of the AC into memory location 941",
        "Loading memory location 941 into the AC register",
        "Adding memory location 941's contents to the AC",
        "Halting the program immediately after this instruction"
      ],
      "correctIndex": 0,
      "explanation": "Instruction 2941 has opcode 2 (0010), meaning Store AC to memory, so the AC's contents are stored into location 941."
    },
    {
      "question": "In the hexadecimal Program Execution example, what values are initially stored at memory locations 940 and 941 respectively?",
      "options": [
        "940 holds 0003 and 941 holds 0002",
        "940 holds 0002 and 941 holds 0003",
        "940 holds 1940 and 941 holds 5941",
        "940 holds 0005 and 941 holds 0000"
      ],
      "correctIndex": 0,
      "explanation": "In the example table, memory location 940 initially contains 0003 and memory location 941 initially contains 0002."
    },
    {
      "question": "In the hexadecimal Program Execution example, after all three instructions run, what final value is stored in memory location 941?",
      "options": [
        "0005, the sum of the original 0003 and 0002",
        "0002, unchanged from its original value",
        "0003, matching the value from location 940",
        "1940, the first instruction's raw hex value"
      ],
      "correctIndex": 0,
      "explanation": "After loading AC with 003 from location 940 and adding the 002 from location 941, the AC becomes 005, which is then stored back into location 941."
    },
    {
      "question": "In the six-step Program Execution walkthrough, what happens in Step 4?",
      "options": [
        "The old AC contents and location 941's contents are added",
        "The first instruction is loaded into the IR and PC increments",
        "The next instruction is fetched from location 301",
        "The contents of the AC are stored back into location 941"
      ],
      "correctIndex": 0,
      "explanation": "Step 4 states: the old contents of the AC and the contents of location 941 are added, and the result is stored in the AC."
    },
    {
      "question": "In the six-step Program Execution walkthrough, what happens in the final Step 6?",
      "options": [
        "The contents of the AC are stored into location 941",
        "The first instruction is fetched from address 300",
        "The PC is loaded with the address 300 to begin",
        "The AC and location 941's values are added together"
      ],
      "correctIndex": 0,
      "explanation": "Step 6 states: the contents of the AC are stored in location 941."
    },
    {
      "question": "According to the register definitions given in the lecture, what does MAR (Memory Address Register) hold?",
      "options": [
        "The address in memory to read from or write to",
        "The current instruction that is actively executing",
        "The result of the most recent arithmetic operation",
        "The address of the next instruction to be fetched"
      ],
      "correctIndex": 0,
      "explanation": "MAR, the Memory Address Register, holds the address in memory to read from or write to."
    },
    {
      "question": "In the 'Fetch execute cycle steps' diagram, what happens immediately after the PC's address is copied to the MAR via the address bus?",
      "options": [
        "The instruction at that address is copied into the MDR",
        "The instruction is immediately decoded and executed",
        "The PC value is incremented to the next address",
        "The instruction is copied directly into the CIR"
      ],
      "correctIndex": 0,
      "explanation": "According to the diagram, after the address is copied to the MAR, the instruction at that address is copied into the MDR temporarily."
    },
    {
      "question": "In the 'Fetch execute cycle steps' diagram, what is the final step in the cycle before it repeats?",
      "options": [
        "The PC value is incremented, pointing to the next instruction",
        "The instruction in the MDR is placed into the CIR",
        "The address is copied to the MAR via the address bus",
        "The instruction is decoded and then executed"
      ],
      "correctIndex": 0,
      "explanation": "The final step shown is: the value in the PC is incremented, pointing to the next instruction to be fetched, which loops back to the start."
    },
    {
      "question": "In the Instruction Cycle State Diagram, what does 'Instruction address calculation' determine?",
      "options": [
        "The address of the next instruction to be executed",
        "The address of an operand referenced in memory",
        "The type of operation the current instruction performs",
        "Whether an I/O operation needs to be specified"
      ],
      "correctIndex": 0,
      "explanation": "Instruction address calculation (iac) determines the address of the next instruction to be executed."
    },
    {
      "question": "In the Instruction Cycle State Diagram, what does 'Instruction operation decoding' analyze?",
      "options": [
        "The type of operation to perform and the operand(s) to use",
        "The physical address in memory to store the final result",
        "How many times the operand should be fetched",
        "Whether the current instruction requires an I/O operation"
      ],
      "correctIndex": 0,
      "explanation": "Instruction operation decoding analyzes the instruction to determine the type of operation to be performed and operand(s) to be used."
    },
    {
      "question": "In the Instruction Cycle State Diagram example, if each instruction is 16 bits long and memory is organized into 16-bit words, what is added to the previous address for instruction address calculation?",
      "options": [
        "Add 1 to the previous address",
        "Add 2 to the previous address",
        "Add 4 to the previous address",
        "Add 16 to the previous address"
      ],
      "correctIndex": 0,
      "explanation": "If each instruction is 16 bits long and memory is organized into 16-bit words, then 1 is added to the previous address."
    },
    {
      "question": "In the Instruction Cycle State Diagram example, if memory is organized as individually addressable 8-bit bytes instead, what is added to the previous address?",
      "options": [
        "Add 2 to the previous address",
        "Add 1 to the previous address",
        "Add 8 to the previous address",
        "Add 16 to the previous address"
      ],
      "correctIndex": 0,
      "explanation": "If memory is organized as individually addressable 8-bit bytes, then 2 is added to the previous address (since each 16-bit instruction spans two 8-bit bytes)."
    }
  ]
}