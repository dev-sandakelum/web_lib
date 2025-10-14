const ComputerArchitectureQuiz = {
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