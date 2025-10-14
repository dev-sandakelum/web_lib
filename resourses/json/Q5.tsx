export const ComputerArchitectureQuiz = {
  id: "computer-architecture",
  title: "Computer Architecture",
  category: "Computer Architecture",
  questions: [
    {
      question: "What does computer architecture describe?",
      options: ["How the computer does it", "What the computer does", "The physical components", "The power supply"],
      correctIndex: 1,
    },
    {
      question: "Which component is NOT part of the CPU?",
      options: ["Control Unit", "Main Memory", "ALU", "Registers"],
      correctIndex: 1,
    },
    {
      question: "What is the key characteristic of a bus?",
      options: ["Point-to-point connection", "Wireless transmission", "Shared transmission medium", "Dedicated lines only"],
      correctIndex: 2,
    },
    {
      question: "How many key concepts does Von Neumann Architecture have?",
      options: ["2", "5", "3", "4"],
      correctIndex: 2,
    },
    {
      question: "Which register holds the address of the next instruction?",
      options: ["IR", "MAR", "PC", "AC"],
      correctIndex: 2,
    },
    {
      question: "What is the first step in the instruction cycle?",
      options: ["Execute", "Decode", "Fetch", "Store"],
      correctIndex: 2,
    },
    {
      question: "Which is NOT a class of interrupts?",
      options: ["Program", "Network", "Timer", "I/O"],
      correctIndex: 1,
    },
    {
      question: "What does DMA stand for?",
      options: ["Digital Memory Array", "Direct Memory Access", "Dynamic Memory Allocation", "Data Management Access"],
      correctIndex: 1,
    },
    {
      question: "Which bus carries source and destination information?",
      options: ["Data Bus", "Address Bus", "Control Bus", "Power Bus"],
      correctIndex: 1,
    },
    {
      question: "What is a core in a multicore computer?",
      options: ["The motherboard", "Individual processing unit on chip", "The cache memory", "System bus"],
      correctIndex: 1,
    },
    {
      question: "Which component performs arithmetic and logical operations?",
      options: ["Control Unit", "Memory", "ALU", "I/O Module"],
      correctIndex: 2,
    },
    {
      question: "What does MAR stand for?",
      options: ["Memory Access Register", "Memory Address Register", "Main Accumulator Register", "Memory Array Register"],
      correctIndex: 1,
    },
    {
      question: "How many main functions does a computer have?",
      options: ["3", "5", "4", "6"],
      correctIndex: 2,
    },
    {
      question: "Which is NOT a computer function?",
      options: ["Data Processing", "Control", "Compilation", "Data Storage"],
      correctIndex: 2,
    },
    {
      question: "What happens when two devices transmit on a bus simultaneously?",
      options: ["Signals will overlap", "They take turns automatically", "One gets priority", "Both succeed"],
      correctIndex: 0,
    },
    {
      question: "Which cache level is closest to the CPU core?",
      options: ["L3", "L2", "L1", "L4"],
      correctIndex: 2,
    },
    {
      question: "What does IR register contain?",
      options: ["Memory address", "Next instruction address", "Current instruction being executed", "I/O data"],
      correctIndex: 2,
    },
    {
      question: "Which I/O technique allows data transfer without CPU involvement?",
      options: ["Programmed I/O", "Interrupt Driven I/O", "Direct Memory Access", "Polling"],
      correctIndex: 2,
    },
    {
      question: "What is the width of a data bus determined by?",
      options: ["Clock speed", "Number of lines", "Voltage level", "Cable length"],
      correctIndex: 1,
    },
    {
      question: "Which interrupt has the highest priority in the lecture example?",
      options: ["Printer", "Disk", "Communication", "Timer"],
      correctIndex: 1,
    },
    {
      question: "What does the Control Unit do?",
      options: ["Stores data", "Controls CPU operation", "Performs calculations", "Manages memory"],
      correctIndex: 1,
    },
    {
      question: "In Von Neumann Architecture, where are instructions stored?",
      options: ["Separate instruction memory", "Cache only", "Single read-write memory with data", "ROM only"],
      correctIndex: 2,
    },
    {
      question: "What is the purpose of the accumulator (AC) register?",
      options: ["Store addresses", "Temporarily store values", "Control I/O", "Fetch instructions"],
      correctIndex: 1,
    },
    {
      question: "Which bus is bi-directional?",
      options: ["Address Bus", "Data Bus", "Control Bus", "All buses"],
      correctIndex: 1,
    },
    {
      question: "What is checked at the end of each instruction cycle?",
      options: ["Memory status", "Cache hits", "Interrupts", "Bus availability"],
      correctIndex: 2,
    },
    {
      question: "Which execute cycle category involves jumping to another instruction?",
      options: ["Data Processing", "Control", "Processor-Memory", "Processor-I/O"],
      correctIndex: 1,
    },
    {
      question: "What does synchronous timing use?",
      options: ["Random signals", "A clock signal", "Asynchronous events", "Manual triggers"],
      correctIndex: 1,
    },
    {
      question: "What problem occurs with single bus architecture at high speeds?",
      options: ["Too much power usage", "Synchronization difficulties", "Overheating", "Data loss"],
      correctIndex: 1,
    },
    {
      question: "Which is an advantage of point-to-point interconnection?",
      options: ["Lower cost", "Simpler design", "Lower latency", "More compatibility"],
      correctIndex: 2,
    },
    {
      question: "What does a multiplexed bus do?",
      options: ["Connects multiple CPUs", "Uses same lines for multiple purposes", "Only carries data", "Increases speed"],
      correctIndex: 1,
    },
    {
      question: "In centralized bus arbitration, what controls bus access?",
      options: ["Each module independently", "Multiple controllers", "Single hardware device", "Operating system only"],
      correctIndex: 2,
    },
    {
      question: "What is the main advantage of interrupts?",
      options: ["Simpler programming", "Increased CPU efficiency", "Reduced power consumption", "Faster memory"],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a step in the interrupt cycle?",
      options: ["Save context", "Compile code", "Restore context", "Service interrupt"],
      correctIndex: 1,
    },
    {
      question: "What does nested interrupt processing involve?",
      options: ["Sequential handling", "Priority-based interruption", "Disabling all interrupts", "Batch processing"],
      correctIndex: 1,
    },
    {
      question: "Which component connects major computer components?",
      options: ["Cache", "System Bus", "Register", "Motherboard only"],
      correctIndex: 1,
    },
    {
      question: "What is a PCB in computer systems?",
      options: ["Program Control Block", "Printed Circuit Board", "Processor Cache Buffer", "Primary Communication Bus"],
      correctIndex: 1,
    },
    {
      question: "How is execution performed in Von Neumann Architecture?",
      options: ["Parallel always", "Random order", "Sequential fashion", "Circular pattern"],
      correctIndex: 2,
    },
    {
      question: "What happens to PC after fetching an instruction?",
      options: ["It resets to zero", "It increments", "It decrements", "It stays same"],
      correctIndex: 1,
    },
    {
      question: "Which is a disadvantage of multiplexed buses?",
      options: ["Uses more lines", "Slower speed", "Complex circuitry needed", "Cannot carry data"],
      correctIndex: 2,
    },
    {
      question: "What does I/OAR specify?",
      options: ["Memory location", "Particular I/O device", "Instruction address", "Cache level"],
      correctIndex: 1,
    },
    {
      question: "Which register buffers data to/from memory?",
      options: ["PC", "IR", "MBR", "AC"],
      correctIndex: 2,
    },
    {
      question: "What is the main board in a computer called?",
      options: ["Circuit board", "Motherboard", "Expansion board", "Logic board"],
      correctIndex: 1,
    },
    {
      question: "In programmed I/O, what does the processor do?",
      options: ["Works on other tasks", "Waits and checks I/O status", "Uses interrupts", "Transfers to DMA"],
      correctIndex: 1,
    },
    {
      question: "What generates a timer interrupt?",
      options: ["I/O controller", "External device", "Timer within processor", "Memory"],
      correctIndex: 2,
    },
    {
      question: "Which typically has more lines in a system bus?",
      options: ["Usually 5-10 lines", "About 20 lines", "Fifty to hundreds of lines", "Exactly 32 lines"],
      correctIndex: 2,
    },
    {
      question: "What is computer organization concerned with?",
      options: ["What computer does", "Operational units and interconnections", "Software design", "User interface"],
      correctIndex: 1,
    },
    {
      question: "Which memory is faster?",
      options: ["Main memory", "Hard disk", "Cache memory", "ROM"],
      correctIndex: 2,
    },
    {
      question: "What determines maximum memory capacity?",
      options: ["Data bus width", "Address bus width", "Control bus width", "Cache size"],
      correctIndex: 1,
    },
    {
      question: "Which handles interrupt in sequential method?",
      options: ["By priority only", "Disables interrupts during processing", "Multiple simultaneous", "Random selection"],
      correctIndex: 1,
    },
    {
      question: "What does asynchronous timing NOT use?",
      options: ["Event dependencies", "Clock signal", "Previous event triggers", "Sequential events"],
      correctIndex: 1,
    },
  ],
};

export const ComputerArchitectureQuiz2 = {
  id: "computer-architecture-advanced-ict1242",
  title: "Computer Architecture Advanced ICT1242",
  category: "Computer Architecture",
  questions: [
    {
      question: "What is the relationship between cache levels?",
      options: ["All same size", "Level n is smaller and faster than n+1", "Higher levels are slower", "L3 is fastest"],
      correctIndex: 1,
    },
    {
      question: "Which IBM architecture survived from 1970 to modern times?",
      options: ["System/360", "System/370", "System/390", "zSeries"],
      correctIndex: 1,
    },
    {
      question: "What does propagation delay affect in bus systems?",
      options: ["Power consumption", "Performance", "Data storage", "Instruction set"],
      correctIndex: 1,
    },
    {
      question: "Which component is responsible for overall system operation control?",
      options: ["Memory", "I/O Module", "CPU", "Bus Controller"],
      correctIndex: 2,
    },
    {
      question: "What makes I/O functionally similar to memory from computer's viewpoint?",
      options: ["Both use same voltage", "Both have Read and Write operations", "Both are on motherboard", "Both use same speed"],
      correctIndex: 1,
    },
    {
      question: "In the instruction format example, how many bits are for opcode?",
      options: ["8 bits", "4 bits", "12 bits", "16 bits"],
      correctIndex: 1,
    },
    {
      question: "What is a chip in computer systems?",
      options: ["Metal connector", "Cooling device", "Silicon with integrated circuits", "Power supply unit"],
      correctIndex: 2,
    },
    {
      question: "Which is fixed first when designing a computer?",
      options: ["Organization", "Architecture", "Both simultaneously", "Power requirements"],
      correctIndex: 1,
    },
    {
      question: "What does the opcode 0001 (hex 1) represent in the example?",
      options: ["Store AC", "Add to AC", "Load AC from memory", "Jump"],
      correctIndex: 2,
    },
    {
      question: "How many words can be directly addressed with 12-bit address?",
      options: ["1024", "2048", "4096", "8192"],
      correctIndex: 2,
    },
    {
      question: "What is the disadvantage of interrupts?",
      options: ["Slower I/O", "CPU overhead", "More power usage", "Less memory"],
      correctIndex: 1,
    },
    {
      question: "Which state comes after instruction fetch in the detailed cycle?",
      options: ["Execute", "Operand fetch", "Instruction operation decoding", "Data operation"],
      correctIndex: 2,
    },
    {
      question: "What sends interrupt signals to the processor?",
      options: ["Only memory", "Only timer", "I/O modules can", "Only software"],
      correctIndex: 2,
    },
    {
      question: "In a 32-bit data bus, how many bits transfer at once?",
      options: ["8", "16", "32", "64"],
      correctIndex: 2,
    },
    {
      question: "What is an ISR in interrupt context?",
      options: ["Instruction Set Register", "Interrupt Service Routine", "Internal System Resource", "Input Signal Register"],
      correctIndex: 1,
    },
    {
      question: "Which bus type uses separate lines for different functions?",
      options: ["Multiplexed", "Functional dedication", "Shared", "Virtual"],
      correctIndex: 1,
    },
    {
      question: "What happens during operand fetch state?",
      options: ["Instruction is decoded", "Get operand from memory or I/O", "Calculate next address", "Store result"],
      correctIndex: 1,
    },
    {
      question: "Which is an example of a program interrupt?",
      options: ["Power failure", "Printer done", "Division by zero", "Timer expired"],
      correctIndex: 2,
    },
    {
      question: "What does a bus controller also referred to as?",
      options: ["Manager", "Arbiter", "Coordinator", "Scheduler"],
      correctIndex: 1,
    },
    {
      question: "In the timing example, what priority was the printer ISR?",
      options: ["1", "2", "4", "5"],
      correctIndex: 1,
    },
    {
      question: "What determines if instruction or data on data bus?",
      options: ["Bus speed", "No difference at this level", "Special flag bit", "Memory location"],
      correctIndex: 1,
    },
    {
      question: "Which interconnection structure is most common?",
      options: ["Ring topology", "Star topology", "Bus structures", "Mesh network"],
      correctIndex: 2,
    },
    {
      question: "What does physical dedication in buses involve?",
      options: ["Separate data and address", "Multiple buses for module subsets", "Single shared bus", "Wireless connections"],
      correctIndex: 1,
    },
    {
      question: "When does processor check for interrupts?",
      options: ["Start of fetch cycle", "During execution", "End of instruction cycle", "Randomly"],
      correctIndex: 2,
    },
    {
      question: "What is the purpose of MBR register?",
      options: ["Store addresses", "Buffer data to/from memory", "Hold instructions", "Control I/O"],
      correctIndex: 1,
    },
    {
      question: "Which modern computers use point-to-point interconnection?",
      options: ["Only mainframes", "Embedded systems primarily", "Modern systems increasingly", "Legacy systems only"],
      correctIndex: 2,
    },
    {
      question: "What does distributed bus arbitration lack?",
      options: ["Access control", "Central controller", "Bus lines", "Timing mechanism"],
      correctIndex: 1,
    },
    {
      question: "How does higher-order bits usage differ from lower-order in address bus?",
      options: ["Speed difference", "Higher selects module, lower selects location within", "No difference", "Power consumption"],
      correctIndex: 1,
    },
    {
      question: "What type of processing do nested interrupts use?",
      options: ["Sequential only", "Priority-based", "Random", "First-come-first-served"],
      correctIndex: 1,
    },
    {
      question: "In the example, what is stored at memory location 940?",
      options: ["Instruction", "Data value 0003", "Address", "Control signal"],
      correctIndex: 1,
    },
    {
      question: "What do control signals transmit?",
      options: ["Only data", "Only addresses", "Command and timing information", "Power"],
      correctIndex: 2,
    },
    {
      question: "Which generation used vacuum tubes?",
      options: ["1st", "2nd", "3rd", "4th"],
      correctIndex: 0,
    },
    {
      question: "What is the main printed circuit board called?",
      options: ["Expansion board", "Motherboard or system board", "Logic board", "Memory board"],
      correctIndex: 1,
    },
    {
      question: "How many different opcodes possible with 4 bits?",
      options: ["4", "8", "16", "32"],
      correctIndex: 2,
    },
    {
      question: "What does instruction address calculation determine?",
      options: ["Operand location", "Address of next instruction", "Memory capacity", "Bus speed"],
      correctIndex: 1,
    },
    {
      question: "Which is NOT an advantage of interrupts?",
      options: ["Increases efficiency", "Decreases waiting", "Simpler hardware", "Stops instruction wastage"],
      correctIndex: 2,
    },
    {
      question: "What is placed on system stack during interrupt?",
      options: ["Next instruction only", "User information and state", "I/O data", "Bus address"],
      correctIndex: 1,
    },
    {
      question: "In Von Neumann, how is memory addressable?",
      options: ["By data type", "By location regardless of type", "By priority", "By module"],
      correctIndex: 1,
    },
    {
      question: "What happens if no interrupt is pending?",
      options: ["System halts", "Proceeds to fetch cycle", "Waits for interrupt", "Resets PC"],
      correctIndex: 1,
    },
    {
      question: "Which component would you find on a motherboard slot?",
      options: ["Power supply", "Monitor", "Processor chip", "Keyboard"],
      correctIndex: 2,
    },
    {
      question: "What makes buses still used in embedded systems?",
      options: ["They are faster", "Better for microcontrollers", "Cheaper always", "More reliable always"],
      correctIndex: 1,
    },
    {
      question: "In the example at t=20, what interrupt occurred?",
      options: ["Printer", "Communication", "Disk", "Timer"],
      correctIndex: 2,
    },
    {
      question: "What must a module do to send data to another via bus?",
      options: ["Wait for permission only", "Obtain bus use and transfer data", "Send signal only", "Nothing special"],
      correctIndex: 1,
    },
    {
      question: "Which register tells CPU which instruction is executing?",
      options: ["PC", "MAR", "IR", "MBR"],
      correctIndex: 2,
    },
    {
      question: "What is the key for describing complex computer systems?",
      options: ["Detailed diagrams", "Mathematical formulas", "Recognize hierarchical nature", "Component lists"],
      correctIndex: 2,
    },
    {
      question: "In operand store state, where is result written?",
      options: ["Only to memory", "Only to registers", "Memory or I/O", "Cache only"],
      correctIndex: 2,
    },
    {
      question: "What occurs in a bus cycle?",
      options: ["Complete program execution", "Single 1-0 clock transmission", "Memory refresh", "Interrupt handling"],
      correctIndex: 1,
    },
    {
      question: "Which has better scalability?",
      options: ["Single bus", "Point-to-point", "Multiplexed bus", "All equal"],
      correctIndex: 1,
    },
    {
      question: "What does the example opcode 0101 (hex 5) do?",
      options: ["Load AC", "Store AC", "Add to AC from memory", "Subtract"],
      correctIndex: 2,
    },
    {
      question: "Where does John von Neumann develop the architecture?",
      options: ["MIT", "Stanford", "Institute for Advanced Studies, Princeton", "Harvard"],
      correctIndex: 2,
    },
  ],
};
