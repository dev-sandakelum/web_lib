export type ContentItem = {
  type: 'qa' | 'text' | 'list' | 'subsection' | 'highlight';
  question?: string;
  answer?: string;
  title?: string;
  content?: string | string[];
  items?: ContentItem[];
  color?: "blue" | "green" | "yellow" | "purple" | "red";
};

export type Section = {
  id: string;
  title: string;
  content: {
    title?: string;
    items: ContentItem[];
  }[];
};

export const notesData: Section[] = [
  {
    id: "intro",
    title: "Introduction & Basics",
    content: [
      {
        title: "Architecture vs Organization",
        items: [
          {
            type: 'qa',
            question: "What is Computer Architecture?",
            answer: "Attributes that have a direct impact on the logical execution of a program. Includes instruction set, number of bits used to represent various data types (e.g., numbers, characters), I/O mechanisms, and techniques for addressing memory. Architecture describes what the computer does."
          },
          {
            type: 'qa',
            question: "What is Computer Organization?",
            answer: "Operational units and their interconnection to realize the architectural specifications. Includes hardware details transparent to the programmer, such as control signals, interfaces between computer and peripherals, and memory technology used. Organization describes how the computer does it."
          },
          {
            type: 'highlight',
            title: "Key Distinction",
            color: "blue",
            content: [
              "Architecture describes WHAT the computer does",
              "Organization describes HOW it does it",
              "Architecture deals with functional behavior",
              "Organization deals with structural relationships"
            ]
          },
          {
            type: 'qa',
            question: "Example: Architecture vs Organization",
            answer: "It is an architectural design issue whether a computer will have a multiply instruction. It is an organizational issue whether that instruction will be implemented by a special multiply unit or by a mechanism that makes repeated use of the add unit of the system."
          }
        ]
      },
      {
        title: "Computer Functions",
        items: [
          {
            type: 'qa',
            question: "What are the four main functions of a computer?",
            answer: "1) Data Processing - data may take wide variety of forms with broad processing requirements, 2) Data Storage - short-term (temporary during work) and long-term (files for retrieval/update), 3) Data Movement - between itself and outside (I/O with peripherals), 4) Control - Control Unit manages resources and performance of functional parts."
          },
          {
            type: 'qa',
            question: "What is the hierarchical nature of computer systems?",
            answer: "A computer is a hierarchical system - a set of interrelated subsystems, each hierarchical in structure until reaching lowest level of elementary subsystem. Designer deals with one level at a time. At each level: Structure (how components interrelate) and Function (operation of each component)."
          }
        ]
      },
      {
        title: "Computer Structure - Top-Level View",
        items: [
          {
            type: 'subsection',
            title: "Single-Processor Computer Components",
            content: "Four main components: 1) CPU (Central Processing Unit) - controls operation and performs data processing, 2) Main Memory - stores data, 3) I/O - moves data between computer and external environment, 4) System Interconnection - mechanism for communication (e.g., System Bus)."
          },
          {
            type: 'subsection',
            title: "CPU Components",
            content: "1) Control Unit - controls operation of CPU and hence the computer, 2) ALU (Arithmetic and Logic Unit) - performs computer's data processing functions, 3) Registers - provides storage internal to CPU, 4) CPU Interconnection - mechanism for communication among Control Unit, ALU, and Registers."
          },
          {
            type: 'subsection',
            title: "Multicore Computer",
            content: "Modern computers with multiple processors on single chip. Core - individual processing unit on processor chip, equivalent to CPU in single-CPU system. Processor - physical piece of silicon containing one or more cores, interprets and executes instructions."
          },
          {
            type: 'highlight',
            title: "Motherboard & Cache",
            color: "green",
            content: [
              "Motherboard (system board): main PCB with slots for processor, memory, I/O controller chips",
              "Chip: single piece of silicon with circuits/logic gates (integrated circuit)",
              "Cache Memory: multiple layers between processor and main memory",
              "Smaller and faster than main memory, speeds up access",
              "Levels: L1 (closest to core), L2, L3... (level n smaller/faster than n+1)"
            ]
          }
        ]
      },
      {
        title: "Von Neumann Architecture",
        items: [
          {
            type: 'qa',
            question: "What is Von Neumann Architecture?",
            answer: "All modern computer designs based on concepts by John von Neumann. Three key concepts: 1) Data and instructions stored in single read-write memory, 2) Memory contents addressable by location without regard to data type, 3) Execution occurs in sequential fashion (unless explicitly modified) from one instruction to next."
          }
        ]
      },
      {
        title: "CPU Registers",
        items: [
          {
            type: 'list',
            content: [
              "MAR (Memory Address Register) - specifies address in memory for next read/write",
              "MBR (Memory Buffer Register) - contains data to be written into memory or receives data read from memory",
              "I/OAR (I/O Address Register) - specifies particular I/O device",
              "I/OBR (I/O Buffer Register) - exchange of data between I/O module and CPU",
              "PC (Program Counter) - holds address of next instruction to be fetched",
              "IR (Instruction Register) - contains fetched instruction being executed",
              "AC (Accumulator) - temporarily stores values during operations"
            ]
          }
        ]
      },
      {
        title: "Performance Assessment",
        items: [
          {
            type: 'qa',
            question: "What are key parameters for evaluating processors?",
            answer: "Cost, size, security, reliability, power consumption, and performance. Performance is difficult to assess - depends on processor speed, instruction set, implementation language, compiler efficiency, and programming skill."
          },
          {
            type: 'list',
            content: [
              "Performance assessment methods:",
              "Clock Speed",
              "Instruction Execution Rate",
              "Benchmarks",
              "Amdahl's Law",
              "Little's Law"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "instruction_cycle",
    title: "Instruction Cycle & Program Execution",
    content: [
      {
        title: "Basic Function & Instruction Cycle",
        items: [
          {
            type: 'qa',
            question: "What is the basic function of a computer?",
            answer: "Execute programs, which consist of a set of instructions stored in memory. The instruction specifies what action the CPU is to take."
          },
          {
            type: 'qa',
            question: "What is an Instruction Cycle?",
            answer: "The time required by CPU to execute one single instruction. It is the basic operation of the CPU. The CPU repetitively performs Fetch, Decode, and Execute cycle to execute one program. Processing required for a single instruction is called an instruction cycle."
          },
          {
            type: 'highlight',
            title: "Instruction Processing",
            color: "blue",
            content: [
              "Two steps: Processor reads (fetches) instructions from memory one at a time, then executes each instruction",
              "Instruction execution may involve several operations",
              "Two main sub-cycles: Fetch and Execute"
            ]
          }
        ]
      },
      {
        title: "Fetch Cycle",
        items: [
          {
            type: 'qa',
            question: "What happens during Fetch Cycle?",
            answer: "1) Program Counter (PC) holds address of next instruction to be fetched, 2) Processor fetches (reads) instruction from memory location pointed to by PC, 3) Processor increments PC after each fetch (unless told otherwise), 4) Fetched instruction loaded into Instruction Register (IR), 5) Processor interprets instruction and performs required actions."
          }
        ]
      },
      {
        title: "Execute Cycle",
        items: [
          {
            type: 'qa',
            question: "What are the four categories of processor actions in Execute Cycle?",
            answer: "1) Processor-memory: Data transfer between CPU and main memory, 2) Processor-I/O: Data transfer between CPU and I/O module, 3) Data processing: Arithmetic or logical operation on data, 4) Control: Alteration of sequence of operations (e.g., jump). An instruction's execution may involve combination of these actions."
          }
        ]
      },
      {
        title: "Detailed Instruction Cycle States",
        items: [
          {
            type: 'list',
            content: [
              "Instruction Fetch: Read instruction from memory location into processor",
              "Instruction Operation Decoding: Analyze instruction to determine type of operation and operand(s)",
              "Operand Address Calculation: If operation involves memory/I/O operand, determine address",
              "Operand Fetch: Fetch operand from memory or read from I/O",
              "Data Operation: Perform operation indicated in instruction",
              "Operand Store: Write result into memory or to I/O",
              "Instruction Address Calculation (iac): Determine address of next instruction (usually add fixed number to previous address)"
            ]
          }
        ]
      },
      {
        title: "Program Execution Example",
        items: [
          {
            type: 'qa',
            question: "What are the characteristics of a hypothetical machine?",
            answer: "Instructions and data are 16 bits long. Memory organized using 16-bit words. Instruction format: 4 bits for opcode (2^4 = 16 different opcodes), 12 bits for address (2^12 = 4096 directly addressable locations)."
          },
          {
            type: 'highlight',
            title: "Partial Opcode List",
            color: "green",
            content: [
              "0001 (1 in hex) = Load AC from memory",
              "0010 (2 in hex) = Store AC to memory",
              "0101 (5 in hex) = Add to AC from memory"
            ]
          },
          {
            type: 'qa',
            question: "Describe program execution steps for the example",
            answer: "1) PC contains 300, instruction (1940 hex) loaded into IR, PC incremented, 2) First 4 bits indicate load AC, remaining 12 bits specify address (940), 3) Next instruction (5941) fetched from 301, PC incremented, 4) Old AC contents and contents of 941 added, result stored in AC, 5) Next instruction (2941) fetched from 302, PC incremented, 6) AC contents stored in location 941."
          }
        ]
      },
      {
        title: "Instruction Cycle State Diagram",
        items: [
          {
            type: 'text',
            content: "Execution cycle for particular instruction may involve more than one reference to memory and may specify I/O operation. This provides detailed look at basic instruction cycle with all possible states and transitions."
          }
        ]
      }
    ]
  },
  {
    id: "interrupts",
    title: "Interrupts",
    content: [
      {
        title: "Interrupt Basics",
        items: [
          {
            type: 'qa',
            question: "What is an Interrupt in Computing?",
            answer: "A mechanism where other modules (I/O, memory) may interrupt the normal sequence of processing of the processor. Most I/O devices have a bus control line called Interrupt Service Routine (ISR) for this purpose. From user program viewpoint, interrupt is just interruption of normal sequence - when interrupt processing completed, execution resumes."
          },
          {
            type: 'qa',
            question: "Why are Interrupts needed?",
            answer: "Interrupts improve processing efficiency. Most external devices are much slower than processor. Without interrupts, processor must pause and remain idle (wasteful) until external device catches up. This pause may be hundreds or thousands of instruction cycles. Interrupts allow processor to execute other tasks while I/O operates."
          },
          {
            type: 'highlight',
            title: "Advantages & Disadvantages",
            color: "blue",
            content: [
              "Advantages: Increases CPU efficiency, decreases waiting time, stops wastage of instruction cycles",
              "Disadvantages: CPU overhead required to handle interrupt request and resume previous execution"
            ]
          }
        ]
      },
      {
        title: "Classes of Interrupts",
        items: [
          {
            type: 'list',
            content: [
              "Program - Generated by condition occurring during instruction execution (e.g., division by zero, referring to not allowed memory space)",
              "Timer - Generated by timer within processor",
              "I/O - Generated by I/O controller to signal normal completion or request service from processor",
              "Hardware failure - e.g., power failure"
            ]
          }
        ]
      },
      {
        title: "I/O Techniques",
        items: [
          {
            type: 'subsection',
            title: "1. Programmed I/O",
            content: "Processor waits long periods for I/O modules. Processor repeatedly checks I/O module status. Very inefficient."
          },
          {
            type: 'subsection',
            title: "2. Interrupt Driven I/O",
            content: "Solves programmed I/O problems. Processor can execute other instructions while performing I/O operation. When device ready, sends interrupt request. Much more efficient."
          },
          {
            type: 'subsection',
            title: "3. Direct Memory Access (DMA)",
            content: "Transfers data between memory and I/O modules without processor engagement. I/O module issues read or write commands directly to memory."
          }
        ]
      },
      {
        title: "I/O Handling Without Interrupts",
        items: [
          {
            type: 'qa',
            question: "How does I/O work without interrupts?",
            answer: "User program performs WRITE calls interleaved with processing. WRITE command invokes I/O program. Instruction set 4 prepares for I/O operation. Once I/O command issued, program must wait for I/O device to perform function. Instruction set 5 completes I/O operation. This is inefficient as processor waits."
          }
        ]
      },
      {
        title: "I/O Handling With Interrupts",
        items: [
          {
            type: 'qa',
            question: "How does I/O work with interrupts?",
            answer: "Processor executes other instructions while I/O in progress. User program makes WRITE system call. I/O program consists only of preparation code and actual I/O command. After these instructions, control returns to user program. External device conducts I/O concurrently with user program execution. When device ready, I/O module sends interrupt request signal to processor."
          },
          {
            type: 'highlight',
            title: "Interrupt Driven I/O Process",
            color: "green",
            content: [
              "I/O module: Receives READ command, reads data from peripheral into data register, interrupts processor, waits until data requested, places data on bus when requested",
              "Processor: Issues READ command, performs other useful work, checks for interrupts at end of instruction cycle, saves context when interrupted, reads data from I/O module and stores in memory, restores context and resumes execution"
            ]
          }
        ]
      },
      {
        title: "Interrupt Cycle",
        items: [
          {
            type: 'qa',
            question: "What is the Interrupt Cycle?",
            answer: "To accommodate interrupts, an interrupt cycle is added to instruction cycle. Processor checks for interrupts. If no interrupts, proceeds to fetch cycle. If interrupt pending: Processor suspends current program, saves context (address of next instruction and other data), sets PC to interrupt handler starting address, proceeds to fetch cycle to fetch first instruction in interrupt handler, services interrupt, restores context, resumes user program at point of interruption."
          }
        ]
      },
      {
        title: "Program Timing",
        items: [
          {
            type: 'subsection',
            title: "Short I/O Wait",
            content: "If I/O operation time is relatively short (less than time to complete instructions between write operations), there is still efficiency gain because part of I/O operation time overlaps with user instruction execution."
          },
          {
            type: 'subsection',
            title: "Long I/O Wait",
            content: "If I/O operation takes much more time than executing sequence of user instructions, even greater efficiency gain. Large amount of time during I/O operation overlaps with execution of user instructions."
          },
          {
            type: 'text',
            content: "Note: Some overhead involved in interrupt process (extra instructions in interrupt handler), but because of relatively large time wasted by waiting on I/O, processor employed much more efficiently with interrupts."
          }
        ]
      },
      {
        title: "Multiple Interrupts",
        items: [
          {
            type: 'qa',
            question: "How are multiple interrupts handled?",
            answer: "Multiple interrupts can occur. Example: program receiving data from communications line and printing results. Printer generates interrupt on print completion, communications line generates interrupt on data arrival. Two approaches to handle: 1) Sequential - disable interrupts while processing one, 2) Nested (Priority-based) - define priorities, allow higher priority to interrupt lower priority."
          },
          {
            type: 'subsection',
            title: "Sequential Interrupt Handling",
            content: "Disable interrupts while processing one interrupt. Processor ignores further interrupts during processing. Interrupts remain pending, checked after current interrupt processed. Interrupts handled in strict sequential order. Simple but doesn't consider priority or time-critical needs."
          },
          {
            type: 'subsection',
            title: "Nested Interrupt Handling",
            content: "Define priorities for interrupts. Low priority interrupts can be interrupted by higher priority ones. After higher priority processed, processor returns to previous interrupt. Not sequential - nested interrupt processing."
          },
          {
            type: 'highlight',
            title: "Time Sequence Example",
            color: "purple",
            content: [
              "User program begins at t=0",
              "t=10: Printer interrupt occurs, user info on stack, printer ISR executes",
              "t=15: Communications interrupt (higher priority), printer ISR interrupted, state pushed on stack, communications ISR executes",
              "t=20: Disk interrupt (lower priority), simply held",
              "t=25: Communications ISR complete, restore printer ISR state",
              "t=25: Before printer ISR executes, disk interrupt (higher priority) honored, disk ISR executes",
              "t=35: Disk ISR complete, printer ISR resumes",
              "t=40: Printer ISR complete, control returns to user program"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bus_interconnection",
    title: "Bus & Interconnection",
    content: [
      {
        title: "Interconnection Structures",
        items: [
          {
            type: 'qa',
            question: "What is an Interconnection Structure?",
            answer: "Computer consists of set of components (processor, memory, I/O) that communicate with each other. The collection of paths connecting the various modules is called the interconnection structure."
          },
          {
            type: 'qa',
            question: "What transfers must interconnection structure support?",
            answer: "1) Memory to processor: processor reads instruction or data from memory, 2) Processor to memory: processor writes data to memory, 3) I/O to processor: processor reads data from I/O device via I/O module, 4) Processor to I/O: processor sends data to I/O device, 5) I/O to/from memory: I/O module exchanges data directly with memory without going through processor (Direct Memory Access)."
          },
          {
            type: 'text',
            content: "Most common interconnection structures: Bus and multiple bus structures, and point-to-point interconnection structures with packetized data transfer."
          }
        ]
      },
      {
        title: "Bus Basics",
        items: [
          {
            type: 'qa',
            question: "What is a Computer Bus?",
            answer: "A communication link used in computer system to send data, addresses, control signals and power to various components. Used to connect various hardware components. Can be wired cables or electrical wires embedded in motherboard. Bus performance is important parameter to access system performance - bus width and bus speed affect system performance."
          },
          {
            type: 'qa',
            question: "What are key characteristics of a bus?",
            answer: "A communication pathway connecting two or more devices. Key characteristic: Multiple devices connect to bus (shared transmission medium). Signal transmitted by any device available for reception by all other devices. If two devices transmit during same time, signals overlap. Only one device at a time can successfully transmit."
          },
          {
            type: 'highlight',
            title: "Bus Structure",
            color: "blue",
            content: [
              "Bus consists of multiple communication pathways (lines)",
              "Each line transmits signals representing binary 1 and 0",
              "Over time, sequence of binary digits transmitted across single line",
              "Several lines together transmit binary digits simultaneously",
              "Example: 8-bit data transmitted over 8 bus lines",
              "Computer systems contain number of different buses"
            ]
          }
        ]
      },
      {
        title: "System Bus",
        items: [
          {
            type: 'qa',
            question: "What is a System Bus?",
            answer: "A bus that connects major computer components (Processor, I/O, Memory). Computer interconnection structures based on one or more system buses. Typically consists of about 50 to hundreds of separate lines. Each line assigned particular meaning or function."
          },
          {
            type: 'highlight',
            title: "System Bus Classification",
            color: "green",
            content: [
              "Lines classified into three functional groups:",
              "Data Bus - carries data among system modules",
              "Address Bus - assigns source or destination of data",
              "Control Bus - controls access to data and address lines",
              "In addition: power distribution lines to supply power to attached modules"
            ]
          }
        ]
      },
      {
        title: "Data Bus",
        items: [
          {
            type: 'qa',
            question: "What is the Data Bus?",
            answer: "Carries data among system modules. Bi-directional bus carrying data in both directions. Remember: no difference between 'data' and 'instruction' at this level. Data lines collectively called data bus. Width = number of lines (may be 32, 64, 128 or more lines). One bit per line at one time."
          },
          {
            type: 'qa',
            question: "How does data bus width affect memory access?",
            answer: "Example: Data bus is 32 bits wide (32 lines) and each instruction is 64 bits long. Then processor must access memory module twice during each instruction cycle. Each data line transfers only one bit at time, so number of data lines determines how many bits transferred at once. System performance depends on data bus width."
          }
        ]
      },
      {
        title: "Address Bus",
        items: [
          {
            type: 'qa',
            question: "What is the Address Bus?",
            answer: "Assigns the source or destination of data on data bus. Example: If processor wishes to read word (8, 16, or 32 bits) from memory, it puts address of desired word on address lines. Width = maximum memory capacity of system. Address lines also used to address I/O ports. Typically: higher-order bits select particular module on bus, lower-order bits select memory location or I/O port within module."
          }
        ]
      },
      {
        title: "Control Bus",
        items: [
          {
            type: 'qa',
            question: "What is the Control Bus?",
            answer: "Controls the access to and use of data and address lines. Because data and address lines shared by all components, must be means of controlling their use. Control signals transmit both command and timing information among system modules. Timing Signals indicate validity of data and addresses. Command Signals specify operations to be performed."
          }
        ]
      },
      {
        title: "Bus Operation",
        items: [
          {
            type: 'qa',
            question: "What must a module do to use the bus?",
            answer: "If module wishes to send data to another: 1) Obtain use of bus, 2) Transfer data via bus. If module wishes to request data from another: 1) Obtain use of bus, 2) Transfer request to other module over appropriate control and address lines."
          }
        ]
      },
      {
        title: "Single Bus Architecture Problems",
        items: [
          {
            type: 'highlight',
            title: "Problems with Many Devices on One Bus",
            color: "red",
            content: [
              "Synchronization difficulties: At higher data rates, increasingly difficult to perform synchronization in timely fashion",
              "Propagation delays: More devices → greater bus length → greater propagation delay. When control passes from one device to another, delay affects performance",
              "Multicore chips: Multiple processors and significant memory on single chip magnified difficulties of increasing bus data rate and reducing bus latency to keep up with processors"
            ]
          }
        ]
      },
      {
        title: "Point-to-Point Interconnection",
        items: [
          {
            type: 'qa',
            question: "What is Point-to-Point Interconnection?",
            answer: "Modern systems increasingly rely on point-to-point interconnection rather than shared buses. Has lower latency, higher data rate, and better scalability. However, bus structures still commonly used for embedded systems, particularly microcontrollers."
          }
        ]
      },
      {
        title: "Bus Types",
        items: [
          {
            type: 'subsection',
            title: "Dedicated Bus",
            content: "Permanently assigned to one function or to physical subset of computer components. Two types: Functional Dedication (separate data, address, control lines for separate functions) and Physical Dedication (multiple buses, each connects only subset of modules)."
          },
          {
            type: 'subsection',
            title: "Multiplexed Bus",
            content: "Transmit data, address or control signals without mentioning dedication (same lines for multiple purposes). Advantage: Use fewer lines. Disadvantage: Complex circuitry needed within each module. Shared lines."
          }
        ]
      },
      {
        title: "Bus Arbitration",
        items: [
          {
            type: 'qa',
            question: "Why is Bus Arbitration needed?",
            answer: "More than one module may need control of bus. Example: I/O module may need to read or write directly to memory without sending data to processor. But only one module may control bus at one time. Therefore, some method of arbitration is needed."
          },
          {
            type: 'subsection',
            title: "Centralized Arbitration",
            content: "Single hardware device controls bus access. Referred as Bus Controller or Arbiter. May be part of CPU or separate module. Responsible for allocating time on bus."
          },
          {
            type: 'subsection',
            title: "Distributed Arbitration",
            content: "No central controller. Each module contains access control logic. Modules act together to share bus."
          }
        ]
      },
      {
        title: "Timing",
        items: [
          {
            type: 'qa',
            question: "What is Bus Timing?",
            answer: "Coordination of events on bus. Two types: Synchronous and Asynchronous."
          },
          {
            type: 'subsection',
            title: "Synchronous Timing",
            content: "Occurrence of events determined by clock. Bus includes clock line transmitting 1s and 0s of equal duration. Single 1-0 transmission called bus cycle or clock cycle. All devices can read clock line. All events start at beginning of clock cycle."
          },
          {
            type: 'subsection',
            title: "Asynchronous Timing",
            content: "No clock signal to synchronize actions. Occurrence of one event on bus follows and depends on occurrence of previous event."
          }
        ]
      }
    ]
  },
  {
    id: "cache_memory",
    title: "Cache Memory",
    content: [
      {
        title: "Memory Hierarchy Introduction",
        items: [
          {
            type: 'qa',
            question: "Why do we need Memory Hierarchy?",
            answer: "No single technology is optimal in satisfying memory requirements. Design constraints depend on three questions: How much? How fast? How expensive? Three key characteristics: Capacity, Access time, Cost. Relationships: Faster access time → greater cost per bit, Greater capacity → smaller cost per bit, Greater capacity → slower access time."
          },
          {
            type: 'qa',
            question: "What is the problem and solution?",
            answer: "Problem: Designer wants large-capacity memory (needed, low cost per bit) but needs expensive, lower-capacity memory with short access times for performance. Solution: Employ memory hierarchy instead of single memory component."
          },
          {
            type: 'highlight',
            title: "Memory Hierarchy Structure",
            color: "blue",
            content: [
              "No single technology capable of satisfying all requirements",
              "Typical computer equipped with hierarchy of memory subsystems",
              "Internal: Registers → Cache (L1, L2, L3) → Main Memory",
              "External: Magnetic Disk → Optical Disk → Magnetic Tape",
              "Going down hierarchy: Decreasing cost per bit, Increasing capacity, Increasing access time, Decreasing frequency of access by processor"
            ]
          }
        ]
      },
      {
        title: "Internal Memory Hierarchy",
        items: [
          {
            type: 'list',
            content: [
              "Registers: Fastest, smallest, most expensive memory internal to processor",
              "Cache: Not usually visible to programmer or processor. Device for staging data movement between main memory and processor registers to improve performance. Higher-speed, smaller than main memory",
              "Main Memory: Principal internal memory system. Each location has unique address. Usually extended with cache"
            ]
          }
        ]
      },
      {
        title: "Cache Memory Basics",
        items: [
          {
            type: 'qa',
            question: "What is Cache Memory?",
            answer: "Small amount of fast memory that can speed up CPU. Sits between main memory and CPU. Cache contains copy of portions of main memory. Not visible to programmer or processor. It is device for staging movement of data between main memory and processor registers to improve performance."
          },
          {
            type: 'qa',
            question: "How does Cache work?",
            answer: "When processor attempts to read word of memory, check is made to determine if word is in cache. If so (cache hit), word delivered to processor. If not (cache miss), block of main memory consisting of some fixed number of words is read into cache, then word delivered to processor."
          },
          {
            type: 'highlight',
            title: "Cache Advantages & Disadvantages",
            color: "green",
            content: [
              "Advantages: Faster than main memory, Consumes less access time, Stores programs executable in short period",
              "Disadvantages: Limited capacity, Very expensive"
            ]
          }
        ]
      },
      {
        title: "Locality of Reference",
        items: [
          {
            type: 'qa',
            question: "What is Locality of Reference?",
            answer: "Refers to process in which computer program tends to access same set of memory locations for particular time period. Or tendency of program to access instructions whose addresses are near one another. Property mainly shown by loops and subroutine calls. Two types: Temporal and Spatial."
          },
          {
            type: 'subsection',
            title: "Temporal Locality",
            content: "Current data or instruction being fetched may be needed soon. Therefore, store in cache memory to avoid searching main memory again for same data. When CPU accesses current main memory location for reading data/instruction, it also gets stored in cache based on fact that same data/instruction may be needed in near future. Considers actual memory location that was being fetched."
          },
          {
            type: 'subsection',title: "Spatial Locality",
        content: "Next access is often very close to last access. Instruction or data near current memory location being fetched may be needed soon in near future. Slightly different from temporal locality. Here considers nearby located memory locations while temporal locality considers actual memory location being fetched."
      },
      {
        type: 'highlight',
        title: "Key Difference",
        color: "yellow",
        content: [
          "Spatial Locality: Program's tendency to access memory locations geographically close to each other. Example: Iterating through array accesses contiguous memory locations. Cache fetches block containing several elements",
          "Temporal Locality: Program's tendency to access same memory location multiple times in short period. Example: In loop, variable accessed and modified multiple times in close succession. Once in cache, subsequent requests serviced quickly"
        ]
      }
    ]
  },
  {
    title: "Cache Performance",
    items: [
      {
        type: 'qa',
        question: "What is Cache Hit and Cache Miss?",
        answer: "Cache Hit: When CPU refers to memory and finds data or instruction within cache memory. Cache Miss: If desired data or instruction not found in cache, CPU refers to main memory to find it. Hit + Miss = Total CPU Reference. Hit Ratio (h) = Hit / (Hit + Miss). Cache performance measured in terms of hit ratio."
      }
    ]
  },
  {
    title: "Cache/Main Memory Structure",
    items: [
      {
        type: 'qa',
        question: "How are Cache and Main Memory structured?",
        answer: "Main memory: 2^n addressable words, each word has unique n-bit address. Each block has K words. There are M (2^n/K) blocks in main memory. Cache: m blocks (Lines), each line contains K words + tag of few bits. Cache line also includes control bits (e.g., bit indicating if line modified since loading into cache)."
      },
      {
        type: 'qa',
        question: "Why use term 'line' instead of 'block'?",
        answer: "Two reasons: 1) To avoid confusion with main memory block which contains same number of data words as cache line, 2) Because cache line includes not only K words of data (like memory block) but also includes tag and control bits. Tag identifies block number."
      },
      {
        type: 'text',
        content: "Line size is length of line not including tag and control bits. May be as small as 32 bits (4 bytes) with each 'word' being single byte (4 words per block), so line size is 4 bytes. Number of lines is considerably less than number of main memory blocks (m << M)."
      }
    ]
  },
  {
    title: "Cache Operation",
    items: [
      {
        type: 'qa',
        question: "What happens during Cache Read Operation?",
        answer: "CPU requests contents of memory location → Check cache for this data → If present (hit): get from cache (fast), deliver to processor → If not present (miss): read required block (with fixed number of words) from main memory to cache, then deliver from cache to CPU. Cache includes tags to identify which main memory block is in each cache slot."
      }
    ]
  },
  {
    title: "Cache Design Elements",
    items: [
      {
        type: 'list',
        content: [
          "Addressing - How to locate data in cache",
          "Size - Larger caches slower than smaller ones. Performance sensitive to workload nature. Impossible to arrive at single 'optimum' cache size",
          "Mapping Function - How memory blocks map to cache lines",
          "Replacement Algorithm - Which cache block to replace on miss",
          "Write Policy - When to write modified data back to memory",
          "Block Size - Number of words in cache line",
          "Number of Caches - Multiple levels (L1, L2, L3, etc.)"
        ]
      }
    ]
  }
]},
{
id: "internal_memory",
title: "Internal Memory Technologies",
content: [
{
title: "Introduction to Internal Memory",
items: [
{
type: 'qa',
question: "What is Internal Memory?",
answer: "Memory directly accessible by processor without accessing input-output channel. Also referred to as primary memory or main memory. Used to hold instructions or data currently being executed. Memory divided into large number of small parts called cells."
},
{
type: 'text',
content: "Earlier, main memory employed array of doughnut-shaped ferromagnetic loops referred to as cores. Today, use of semiconductor chips for main memory is almost universal. Basic element of semiconductor memory is memory cell."
}
]
},
{
title: "Memory Characteristics",
items: [
{
type: 'qa',
question: "What are key memory organization concepts?",
answer: "Word: 'Natural' unit of organization, size equals number of bits used to represent integer and instruction length. Addressable Units: In some systems, addressable unit is word; many systems allow byte-level addressing. 2^A = N (A=address length in bits, N=number of addressable units). Unit of transfer: For main memory, number of bits read/written at a time. Need not equal word or addressable unit."
}
]
},
{
title: "Semiconductor Memory Types",
items: [
{
type: 'qa',
question: "What is Volatile Memory?",
answer: "If power is interrupted, data are lost. Two traditional forms of RAM: SRAM and DRAM."
}
]
},
{
title: "Dynamic RAM (DRAM)",
items: [
{
type: 'qa',
question: "What is DRAM?",
answer: "Made with cells that store data as charge on capacitors. Presence or absence of charge interpreted as binary 1 or 0. Require periodic charge refreshing to maintain data storage. 'Dynamic' because charge can leak away even with power continuously applied. Essentially analog device (capacitor can store any charge value within range). Threshold value determines whether charge interpreted as 1 or 0. Used for main memory."
}
]
},
{
title: "Static RAM (SRAM)",
items: [
{
type: 'qa',
question: "What is SRAM?",
answer: "Digital device. Binary values stored using flip-flop logic-gate configurations. Static RAM holds data as long as power supplied. Faster, relatively low density (complex), expensive. Used in cache memory."
}
]
},
{
title: "DRAM vs SRAM",
items: [
{
type: 'highlight',
title: "Comparison",
color: "blue",
content: [
"Both are volatile",
"DRAM cell simpler and smaller than SRAM",
"DRAM has higher density (smaller cells = more cells per unit area)",
"DRAM is slower than SRAM",
"DRAM is less expensive",
"DRAM favored for large memory requirements"
]
}
]
},
{
title: "Read Only Memory (ROM)",
items: [
{
type: 'qa',
question: "What is ROM?",
answer: "Contains permanent pattern of data that cannot be changed (read-only). Non-volatile - no power source required to maintain bit values. Not possible to write new data. Applications: Microprogramming, System programs, Function tables."
},
{
type: 'highlight',
title: "ROM Pros & Cons",
color: "green",
content: [
"Advantage: Data or program permanently residing, no need to load from secondary storage",
"Disadvantage: Data insertion step of fabrication includes large fixed cost. No room for error - if one bit wrong, whole batch must be thrown out"
]
}
]
},
{
title: "Types of ROM",
items: [
{
type: 'subsection',
title: "ROM",
content: "Written during manufacturing process."
},
{
type: 'subsection',
title: "PROM (Programmable ROM)",
content: "Less expensive alternative for ROM. Non-volatile. Written only once. Writing performed electrically, may be done by supplier or customer later than original chip fabrication. Needs special equipment to program. Provides flexibility and convenience."
},
{
type: 'text',
content: "Read-mostly memory: Variation of ROM. Useful for applications where read operations far more frequent than write operations but nonvolatile storage required. Three common forms: EPROM, EEPROM, Flash memory."
},
{
type: 'subsection',
title: "EPROM (Erasable Programmable ROM)",
content: "Read and write electrically. Before write operation, all storage cells must be erased to same initial state. Erase using Ultraviolet (UV) rays. More expensive than PROM. Has advantage of multiple update capability."
},
{
type: 'subsection',
title: "EEPROM (Electrically Erasable Programmable ROM)",
content: "Can be written into at any time without erasing prior contents. Less dense and more expensive than EPROM. Takes much longer to write than read. Combines advantage of nonvolatility with flexibility of being updatable in place using ordinary bus control, address, and data lines."
},
{
type: 'subsection',
title: "Flash Memory",
content: "Intermediate between EPROM and EEPROM in cost and functionality. Uses electrical erasing technology. Entire flash memory can be erased in few seconds. Can delete entire flash memory or blocks. Not providing byte-level erasure. High density."
}
]
},
{
title: "Error Correction",
items: [
{
type: 'qa',
question: "What are errors in Semiconductor Memory Systems?",
answer: "Hard failures: Permanent physical defects caused by harsh environmental abuse, manufacturing defects. Soft errors: Random, nondestructive event altering contents of one or more memory cells without damaging memory. Caused by power supply problems or alpha particles (radioactive decay). Both clearly undesirable. Most modern main memory systems include logic for detecting and correcting errors."
},
{
type: 'qa',
question: "What is Error Correcting Code (ECC)?",
answer: "ECC in computer memory serves to enhance data integrity and system reliability by detecting and correcting memory errors. Particularly crucial in critical systems like servers and high-end workstations where data accuracy is paramount."
}
]
},
{
title: "Hamming Error Correcting Code",
items: [
{
type: 'qa',
question: "What is Hamming Code?",
answer: "Error-correcting code that adds redundant bits (parity bits) to data to detect and correct single-bit errors during data transmission or storage. By calculating and embedding parity bits in specific positions, receiver can check for inconsistencies and pinpoint exact location of flipped bit (0 becoming 1 or vice versa), then correct it automatically. Simplest of error-correcting codes. Uses Venn diagrams. Able to detect and correct 1-bit errors."
},
{
type: 'qa',
question: "How does ECC Function work?",
answer: "M-bit word of data (M), Code length (K), Function f performed on data. Function f performed on data to produce code. Both code and data stored (M+K bits). When word read out, code used to detect and correct errors. New set of K code bits generated from M data bits and compared with fetched code bits. Comparison yields: No errors detected, Error detected but not possible to correct (report condition), or If error possible to correct, provide M (data bits) and K (error correction bits) to corrector to produce corrected set of M bits."
},
{
type: 'highlight',
title: "Hamming Code Bit Requirements",
color: "purple",
content: [
"Formula: 2^K - 1 ≥ M + K",
"This inequality gives number of bits needed to correct single bit error in word containing M data bits",
"Example: For 8 data bits (M=8): K=3 gives 2^3-1=7 < 8+3=11 (not enough), K=4 gives 2^4-1=15 > 8+4=12 (sufficient)",
"Thus, eight data bits require four check bits"
]
},
{
type: 'qa',
question: "How does Syndrome Word work?",
answer: "Writing data: ECC controller performs calculation and generates corresponding code (often Hamming code), stored alongside data. Reading data: ECC controller performs same calculation on data and compares result to stored code. Generating syndrome: Bit-by-bit comparison using XOR operation. Result is syndrome word. Detecting/correcting: If syndrome all zeros, no error. If syndrome not zero, indicates error occurred. Specific non-zero pattern acts as index to lookup table, revealing exact bit needing correction. Error automatically corrected by flipping that bit."
}
]
},
{
title: "Hamming Code Example",
items: [
{
type: 'qa',
question: "How to arrange M+K bits for error correction?",
answer: "Bits arranged so: If Z=0, no error. If Z≠0, error occurred in i-th bit of data word, where i is value (in binary) of Z. Bit positions numbered from right to left. Data bits numbered D1, D2, D3, D4... Check bits numbered with value of position (positions that are powers of 2): C1, C2, C4, C8..."
},
{
type: 'qa',
question: "How to calculate check bits for M=4?",
answer: "Bit positions: 7(D4) 6(D3) 5(D2) 4(C4) 3(D1) 2(C2) 1(C1). Position numbers in binary: 111, 110, 101, 100, 011, 010, 001. Check bit calculations: C1 = D1⊕D2⊕D4 (positions with rightmost bit=1), C2 = D1⊕D3⊕D4 (positions with second bit from right=1), C4 = D2⊕D3⊕D4 (positions with third bit from right=1). Each check bit operates on every data bit whose position number contains 1 in same bit position as check bit's position number."
},
{
type: 'text',
content: "Example: Consider word 1101. Calculate control bits and draw Venn diagram. If data bit D3 has error (D3=0), recalculate check bits, form syndrome word, prove error in D3. Syndrome Z = C_new ⊕ C_old. If Z=110 in binary = 6 in decimal, error in bit position 6, which is D3."
}
]
},
{
title: "Improvements in Memory - DRAM Types",
items: [
{
type: 'subsection',
title: "SDRAM (Synchronous DRAM)",
content: "Exchanges data with processor synchronized with external clock signal. Moves data in/out according to system clock. Since SDRAM moves data in time with system clock, CPU knows when data will be ready. Processor can perform other tasks while SDRAM processing request. Can send data to processor only once per clock cycle."
},
{
type: 'subsection',
title: "DDR-SDRAM (Double-Data-Rate SDRAM)",
content: "Doubles transfer speed. Can send data twice per clock cycle."
},
{
type: 'subsection',
title: "RDRAM (Rambus DRAM)",
content: "Asynchronous, one transfer per clock cycle. Adopted by Intel for Pentium & Itanium processors. Main competitor to SDRAM. Exchanges data with processor using 28 wires. Maximum 12 centimeter length bus. Delivers address and control information using asynchronous block-oriented protocol."
}
]
}
]
},
{
id: "external_memory",
title: "External Memory Technologies",
content: [
{
title: "Types of External Memory",
items: [
{
type: 'list',
content: [
"Magnetic Disk",
"Optical Disk",
"Magnetic Tape"
]
}
]
},
{
title: "Magnetic Disk Basics",
items: [
{
type: 'qa',
question: "What is a Magnetic Disk?",
answer: "Disk is circular platter constructed of nonmagnetic material called substrate, coated with magnetizable material. Traditionally, substrate has been aluminum or aluminum alloy material. More recently, glass substrates introduced."
},
{
type: 'highlight',
title: "Glass Substrate Benefits",
color: "blue",
content: [
"Improvement in uniformity of magnetic film surface to increase disk reliability",
"Significant reduction in overall surface defects to help reduce read-write errors"
]
}
]
},
{
title: "Data Organization and Formatting",
items: [
{
type: 'qa',
question: "How is data organized on magnetic disk?",
answer: "Head is relatively small device capable of reading from or writing to portion of platter rotating beneath it. Data organized on platter in concentric set of rings called tracks. Each track same width as head. Thousands of tracks per surface. Adjacent tracks separated by intertrack gaps (prevents/minimizes errors due to misalignment or magnetic field interference). Data transferred to/from disk in sectors."
},
{
type: 'subsection',
title: "CAV (Constant Angular Velocity)",
content: "Bit near center of rotating disk travels past fixed point slower than bit on outside. Must compensate for variation in speed so head can read all bits at same rate. Define variable spacing between bits recorded on disk - outermost tracks have sectors with bigger spacing. Disk rotated at fixed speed. Disk divided into pie-shaped sectors and circular tracks. Advantage: Individual blocks directly addressed by track and sector. Disadvantage: Amount of data on long outer tracks only same as short inner tracks - limits storage capacity. Low bit density on outer tracks, high on inner tracks."
},
{
type: 'subsection',
title: "MZR (Multiple Zone Recording)",
content: "To maximize storage capacity, preferable to have same linear bit density on each track. Modern hard disk systems use MZR - surface divided into number of concentric zones (16 typical). Within zone, number of bits per track is constant. Zones remoter from center contain more bits (more sectors) than zones closer to center. Allows greater overall storage capacity at expense of more complex circuitry."
}
]
},
{
title: "Physical Characteristics",
items: [
{
type: 'subsection',
title: "Head Types",
content: "Fixed-head disk: One read-write head per track. All heads mounted on rigid arm extending across all tracks. Rare today. Movable-head disk: Only one read-write head. Head mounted on arm. Arm can be extended or retracted to position above any track."
},
{
type: 'subsection',
title: "Disk Mobility",
content: "Nonremovable disk: Permanently mounted in disk drive (e.g., hard disk in PC). Removable disk: Can be removed and replaced with another disk."
},
{
type: 'subsection',
title: "Sides",
content: "For most disks, magnetizable coating applied to both sides of platter - referred to as double-sided. Some less expensive disk systems use single-sided disks."
},
{
type: 'subsection',
title: "Multiple-Platter",
content: "Multiple-platter disks employ movable head with one read-write head per platter surface. All heads mechanically fixed so all at same distance from disk center and move together. Set of all tracks in same relative position on platters is referred to as cylinder."
}
]
},
{
title: "System Performance & RAID",
items: [
{
type: 'qa',
question: "Why was RAID developed?",
answer: "Secondary storage performance considerably less than rate for processors and main memory. Mismatch affected overall computer system performance. Led to development of arrays of disks operating independently and in parallel. With multiple disks: Separate I/O requests handled in parallel (as long as data on separate disks), Single I/O request executed in parallel if data block distributed across multiple disks."
},
{
type: 'qa',
question: "What is RAID?",
answer: "RAID (Redundant Array of Independent Disks) is technique where multiple physical hard drives equal single logical hard drive. Used to increase performance, fault tolerance and reliability. Earlier: large hard drives too expensive, so used several smaller (redundant array of inexpensive disks). Now: several smaller drives used to increase performance (redundant array of independent disks)."
},
{
type: 'highlight',
title: "RAID Definition & Purposes",
color: "green",
content: [
"Data storage virtualization technology combining multiple disk drives into logical unit",
"Main Purposes: Data Redundancy (protect against hardware failures - if one drive fails, data still accessible), Improved Performance (speed up read/write by distributing data across multiple disks)",
"Three common characteristics: Set of physical disks viewed as single logical drive by OS, Data distributed across physical drives, Can use redundant capacity to store parity information (guarantees data recoverability in case of disk failure)"
]
}
]
},
{
title: "RAID Levels",
items: [
{
type: 'qa',
question: "How many RAID levels exist?",
answer: "RAID scheme consists of seven levels, zero through six. These levels do not imply hierarchical relationship but designate different design architectures sharing three common characteristics."
},
{
type: 'subsection',
title: "RAID 0 - Striping",
content: "Data placed in segments called strips. Strips divided among number of hard drives present. Entire data divided into strips, distributed among available disks. No redundancy. Increases performance. Appears as logical disk on which all data stored. If one disk fails, all data lost."
},
{
type: 'subsection',
title: "RAID 1 - Mirrored Disks",
content: "Data (usually) striped across disks. Each logical stripe mapped to 2 disks. Read from either, write to both. Recovery is simple (high reliability) - swap faulty disk & re-mirror. No downtime. Relatively expensive - double disks required."
},
{
type: 'subsection',
title: "RAID 2 - Hamming Code ECC",
content: "Distribute data among few disks, use rest for storing error correcting codes. Error correction calculated across corresponding bits on disks. Multiple parity disks store Hamming code error correction in corresponding positions. Lots of redundancy, expensive. No longer used - most disks incorporate ECC already."
},
{
type: 'subsection',
title: "RAID 3 - Bit-Interleaved Parity",
content: "Similar to RAID 2 but only one redundant disk (to store parity values). Employs parallel access with data distributed in small strips (bit-wise) for high data transfer rates. Simple parity bit computed for set of individual bits in same position on all data disks. Data on failed drive reconstructed from surviving data and parity info. All disks involved in each I/O (poor I/O request performance). Not common."
},
{
type: 'subsection',
title: "RAID 4 - Block-Interleaved Parity",
content: "Similar to RAID 3 but divide data block-wise. Large strips (e.g., 16k or 32k). Each disk operates independently - one read/write uses only one disk. Parity stored on parity disk. Bit-by-bit parity calculated across stripes on each disk. Rest of disks available for other I/O requests. Poor write performance on small requests. Single parity drive is bottleneck."
},
{
type: 'subsection',
title: "RAID 5 - Distributed Parity",
content: "Avoids RAID 4 bottleneck at parity disk. In RAID 3 and 4, if parity disk fails, lose all recovery data. Here, parity data distributed across ALL disks. Store parity of entire block in one disk, actual data of that block divided into remaining disks. If two disks fail, cannot recover data. One of most widely used RAID schemes. Commonly used in network servers."
},
{
type: 'subsection',
title: "RAID 6 - Dual Parity",
content: "Two parity calculations (2 bits) protect against multiple disk failures. Stored in separate blocks on different disks. User requirement of N disks needs N+2. High data availability - three disks need to fail for data loss. Significant write penalty (each write affects two parity blocks). Rarely used because possibility of multiple simultaneous disk failure is very slim."
}
]
},
{
title: "Optical Memory",
items: [
{
type: 'text',
content: "Optical disks use laser technology to read and write data. Include CD, DVD, Blu-ray formats. High capacity, removable, slower than magnetic disks. Various formats: CD-ROM, CD-R, CD-RW (writable/rewritable), DVD-ROM, DVD±R, DVD±RW, BD-ROM, BD-R, BD-RE."
}
]
},
{
title: "Magnetic Tape",
items: [
{
type: 'qa',
question: "What is Magnetic Tape?",
answer: "Medium: Polyester tape coated with magnetizable material. Tape width: from 0.38cm to 1.27cm. Sequential access. Slowest member of memory hierarchy. Very cheap. Used primarily for backup and archival storage."
}
]
}
]
},
{
id: "arithmetic",
title: "Computer Arithmetic",
content: [
{
title: "ALU Basics",
items: [
{
type: 'qa',
question: "What is the Arithmetic & Logic Unit (ALU)?",
answer: "Performs arithmetic and logical operations on data. Everything else in computer (control unit, registers, memory, I/O) is there to bring data to this unit for processing and take results back. Handles integers and floating point (real) numbers."
},
{
type: 'qa',
question: "How does ALU work?",
answer: "Operands for arithmetic and logic operations presented to ALU in registers, results stored in registers. These are temporary storage locations within processor connected by signal paths to ALU. Also, flags as result of operation (e.g., overflow flag set to 1 if result exceeds register length). Flags stored in registers. Processor provides signals controlling ALU operation and data movement into/out of ALU."
}
]
},
{
title: "Integer Representations",
items: [
{
type: 'list',
content: [
"Unsigned notation - no sign, all bits represent magnitude",
"Signed notation: represent positive and negative numbers",
"Signed-Magnitude notation - leftmost bit is sign (0=positive, 1=negative), remaining bits are magnitude",
"One's complement notation - positive: 0 + magnitude; negative: complement all bits",
"Two's complement notation - positive: 0 + magnitude; negative: complement all bits + add 1"
]
}
]
},
{
title: "Signed-Magnitude Representation",
items: [
{
type: 'qa',
question: "What is Signed-Magnitude?",
answer: "In unsigned, + and - are same. In signed magnitude, left-most bit represents sign of integer: 0 for positive numbers, 1 for negative numbers. Remaining bits represent magnitude of numbers."
},
{
type: 'qa',
question: "What are drawbacks of Signed-Magnitude?",
answer: "Addition and subtraction require attention to sign bit. If signs same, simply add magnitudes and watch for overflow. If signs differ, subtract smaller magnitude from larger, keep sign of larger. Drawbacks: Require consideration of both signs and relative magnitudes, Two representations of 0. So sign-magnitude rarely used in implementing integer portion of ALU."
}
]
},
{
title: "One's Complement System",
items: [
{
type: 'qa',
question: "How to represent in One's Complement?",
answer: "Positive numbers: Same as unsigned binary, place 0 at leftmost bit. Negative numbers: Convert magnitude to unsigned binary, place 0 at leftmost, complement every bit."
},
{
type: 'qa',
question: "How to add/subtract in One's Complement?",
answer: "Both positive: just add. Both negative: get complement of both, add, if overflow bit add it to answer, you'll get negative number (1 as MSB), forget sign bit & complement magnitude again. Negative & positive: Write 1's complement of subtrahend (negative value), add with minuend (positive), if overflow bit add it to result, if no overflow bit then 1's complement of result obtained to get final result (negative)."
}
]
},
{
title: "Two's Complement Notation",
items: [
{
type: 'qa',
question: "How to represent in Two's Complement?",
answer: "Positive numbers: Same as unsigned binary, place 0 at leftmost bit. Negative numbers: Convert magnitude to unsigned binary, place 0 at leftmost, complement every bit, add 1 to complemented number."
},
{
type: 'qa',
question: "How to convert Two's Complement to decimal?",
answer: "Positive 2's complement: convert same as unsigned binary. Negative 2's complement: complement the number, add 1 to complemented number, convert same as unsigned binary (gives magnitude), remember it's negative."
},
{
type: 'highlight',
title: "Alternative Representations for 4-Bit Integers",
color: "blue",
content: [
"Decimal 5: Unsigned=0101, Signed-Magnitude=0101, 1's Complement=1010, 2's Complement=0101",
"Decimal 0: Unsigned=0000, Signed-Magnitude=0000, 1's Complement=1111, 2's Complement=0000",
"Decimal -0: Unsigned=0000, Signed-Magnitude=1000, 1's Complement=0111, 2's Complement=(none)",
"Decimal -5: Unsigned=0101, Signed-Magnitude=1101, 1's Complement=0010, 2's Complement=1011",
"Note: 2's complement has only one representation of zero"
]
}
]
},
{
title: "Addition and Subtraction in 2's Complement",
items: [
{
type: 'qa',
question: "How to perform addition and subtraction?",
answer: "Normal binary addition. For subtraction, take two's complement of subtrahend and add to minuend (a - b = a + (-b)). So only need addition and complement circuits. Always discard carry-out."
},
{
type: 'highlight',
title: "Arithmetic Rules",
color: "green",
content: [
"Overflow Rule: If two numbers added and both positive or both negative, overflow occurs if and only if result has opposite sign",
"Subtraction Rule: To subtract subtrahend from minuend, take two's complement (negation) of subtrahend and add to minuend",
"Note: Overflow can occur whether or not there is a carry"
]
}
]
},
{
title: "Hardware for Addition and Subtraction",
items: [
{
type: 'qa',
question: "How is addition/subtraction implemented in hardware?",
answer: "For addition, two numbers presented to adder from two registers (A and B). Result may be stored in one of these or third register. Overflow indication stored in 1-bit overflow flag (0=no overflow, 1=overflow). For subtraction, subtrahend (B register) passed through two's complementer so its two's complement presented to adder."
          }
        ]
      },
      {
        title: "Multiplication",
        items: [
          {
            type: 'qa',
            question: "How does binary multiplication work?",
            answer: "Complex. Generate partial products for each digit. Partial products easily defined: When multiplier bit is 0, partial product is 0; when multiplier is 1, partial product is multiplicand. Add partial products to produce final product. Multiplication of two n-bit binary integers results in product of up to 2n bits (e.g., 11 × 11 = 1001)."
          },
          {
            type: 'qa',
            question: "How is unsigned binary multiplication implemented?",
            answer: "Uses M register (multiplicand), Q register (multiplier), A register (accumulator, initially 0), C register (carry bit, initially 0). Does not have separate place for all partial products - fewer registers needed. Control logic reads multiplier bits one at a time. If Q0=1, add multiplicand to A register, store result in A, use C bit for overflow. Then shift all bits of C, A, Q right one bit (C→An-1, A0→Qn-1, Q0 lost). If Q0=0, no addition, just shift. Repeat for each bit. Resulting 2n-bit product contained in A and Q registers."
          }
        ]
      },
      {
        title: "Booth's Algorithm",
        items: [
          {
            type: 'qa',
            question: "What is Booth's Algorithm?",
            answer: "Algorithm for two's complement multiplication. Straightforward multiplication doesn't work for negative numbers. Booth's algorithm handles negative numbers. Multiplier and multiplicand placed in Q and M registers. 1-bit register Q-1 placed logically right of LSB (Q0), initialized to 0. A and Q store results. A and Q-1 initialized to 0."
          },
          {
            type: 'qa',
            question: "How does Booth's Algorithm work?",
            answer: "Control logic scans multiplier bits one at a time. If Q0 and Q-1 bits equal, shift all bits of A, Q, Q-1 right by 1 bit. If Q0 and Q-1 different, add M to A (if 0-1) or subtract M from A (if 1-0), update A with result. After addition or subtraction, right shift occurs. Arithmetic shift: When shifting leftmost bit of A (An-1), not only shifted into An-2 but also remains in An-1. Required to preserve sign of number in A and Q (known as arithmetic shift)."
          }
        ]
      },
      {
        title: "Division",
        items: [
          {
            type: 'qa',
            question: "How does binary division work?",
            answer: "More complex than multiplication. Same principles. Operation involves repetitive shifting and addition or subtraction. Negative numbers make process even more complex. Based on long division."
          },
          {
            type: 'qa',
            question: "Describe long division process",
            answer: "Bits of dividend examined left to right until set of bits represents number ≥ divisor (divisor can divide the number). Until this occurs, 0s placed in quotient left to right. When event occurs, 1 placed in quotient, divisor subtracted from partial dividend. Result is partial remainder. From this point, division follows cyclic pattern. At each cycle, additional dividend bits appended to partial remainder until result ≥ divisor. As before, divisor subtracted to produce new partial remainder. Process continues until all dividend bits exhausted."
          }
        ]
      },
      {
        title: "Floating Point Numbers",
        items: [
          {
            type: 'qa',
            question: "What are Real Numbers?",
            answer: "Numbers with fractions. Can be positive, negative or zero. Could be done in pure binary (e.g., 1001.1010 = 2^3 + 2^0 + 2^-1 + 2^-3 = 9.625). Can be represented as: Sign (plus or minus), Significand S, Exponent E, Base B. Format: (±) significand × base^exponent."
          },
          {
            type: 'qa',
            question: "What is 32-bit Floating Point Format?",
            answer: "Format: (±) significand × 2^exponent. Base B implicit, need not be stored (same for all numbers, here base=2). Radix Point to right of leftmost (most significant) bit of significand - one bit to left of radix point. Leftmost bit stores sign of number. Exponent value stored in next 8 bits using biased representation. Final portion (23 bits) is significand. For 32-bit number: 2^32 different numbers."
          },
          {
            type: 'qa',
            question: "What is Biased Representation?",
            answer: "Mantissa (Significand) stored in 2's complement. Exponent in excess or biased notation. Fixed value called bias subtracted from field to get true exponent value. Bias = 2^(k-1) - 1 (k=number of bits in binary exponent). 8-bit exponent field: bias = 2^(8-1) - 1 = 127. Pure value range (field) 0-255 (2^8 values). Subtract 127 to get correct exponent value. True exponent value range -127 to +128 (0-127 to 255-127)."
          },
          {
            type: 'qa',
            question: "What is Normalization?",
            answer: "FP numbers usually normalized to simplify operations. Normal number: most significant digit of significand is non-zero. i.e., exponent adjusted so leading bit (MSB) of significand is 1. Since always 1, no need to store it (Scientific notation: numbers normalized to give single digit before decimal point, e.g., 1.011×2^11001, 3.123×10^3). For base 2 representation, normal number is one in which most significant bit of significand is one."
          },
          {
            type: 'highlight',
            title: "IEEE 754 Standard",
            color: "purple",
            content: [
              "Standard for floating point representation",
              "Covers both binary and decimal floating-point representations",
              "Different formats: 32, 64, 128 bits standards",
              "8, 11, 15 bits exponent respectively",
              "Extended and extendable precision formats (both significand and exponent)",
              "Extended precision: Extends basic format using more precision and exponent range",
              "Extendable precision: Allows user to specify precision and exponent range"
            ]
          },
          {
            type: 'list',
            content: [
              "FP Arithmetic Addition/Subtraction: 1) Check for zeros, 2) Align significands (adjusting exponents to be equal), 3) Add or subtract significands, 4) Normalize result",
              "FP Arithmetic Multiplication/Division: 1) Check for zero, 2) Add/subtract exponents, 3) Multiply/divide significands (watch sign), 4) Normalize result, 5) Round result"
            ]
          }
        ]
      }
    ]
  }
];

