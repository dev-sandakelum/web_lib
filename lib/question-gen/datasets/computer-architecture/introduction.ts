// datasets/computer-architecture/introduction.ts

import { Dataset } from "@/lib/question-gen/types/dataset";


export const introductionDataset: Dataset = {
  id: "arch-introduction",
  category: "Computer Architecture",
  subcategory: "Introduction & Background",
  description: "Fundamentals of computer architecture, organization, and system structure",
  content: `
Topic: Introduction, Background & Importance

Objectives:
• Identify the difference between computer architecture & organization
• Explain the components of a computer system considering the top-level view of a computer
• Explain the basics of computer architecture including computer generations, Von Neumann Architecture & hardware/software approach of computers

Architecture & Organization:

Architecture:
• Attributes that have a direct impact on logical execution of a program
• Includes: instruction set, number of bits used to represent data types, I/O mechanisms, memory addressing techniques
• Architecture describes what the computer does

Organization:
• Operational units and their interconnection to realize architectural specifications
• Includes: hardware details transparent to programmer, control signals, interfaces between computer and peripherals, memory technology
• Organization describes how the computer does it

Key Differences:
• Architecture describes what the computer does
• Organization describes how it does it
• Architecture deals with functional behavior of computer systems
• Organization deals with structural relationships
• Architecture indicates hardware specifications
• Organization indicates performance characteristics
• Architecture is fixed first when designing a computer
• Organization is decided after architecture

Architecture Categories:
• Von-Neumann Architecture
• Harvard Architecture
• Instruction Set Architecture
• Micro-architecture
• System Design

Organization Types:
• Organization of a single Accumulator
• Organization of general registers
• Stack organization

Example - Multiply Instruction:
• Architectural Issue: Whether a computer will have a multiply instruction
• Organizational Issue: Whether that instruction uses a special multiply unit or repeated use of the add unit

Example - IBM System/370 Architecture:
• First introduced in 1970 with multiple models (different organizations)
• Same architecture but different organizations = different price and performance
• Customers could start with cheaper model and upgrade to faster model without abandoning software
• Architecture survived decades with enhancements as IBM's mainframe product line
• Changes in technology influence organization and result in more powerful/complex architectures

Hierarchical Nature of Computer Systems:

Computer as Complex System:
• Modern computers contain millions of elementary electronic components
• Key is to recognize the hierarchical nature of systems
• Hierarchical system = set of interrelated subsystems, each hierarchical in structure until reaching lowest level of elementary subsystem
• Designer need only deal with one level at a time
• At each level: system consists of components and their interrelationships

Studying Computer Systems - Top-Down Approach:
At each level of hierarchy, consider two things:
1. Structure: The way components are interrelated
2. Function: Operation of each individual component as part of structure

Computer Functions:

Four Basic Functions:
1. Data Processing - Data may take wide variety of forms with broad processing requirements
2. Data Storage:
   • Short-term: Computer temporarily stores data being worked on
   • Long-term: Files stored for subsequent retrieval and update
3. Data Movement - Between computer and outside environment
   • Input-Output (I/O): Data received/delivered to directly connected device
   • Peripheral: Device directly connected to computer
4. Control - Control Unit manages computer resources and functional parts performance

Computer Structure - Top-Level View:

Single-Processor Computer Components:
1. Central Processing Unit (CPU):
   • Controls computer operation
   • Performs data processing functions
   • Often simply called processor

2. Main Memory:
   • Stores data

3. I/O (Input/Output):
   • Moves data between computer and external environment

4. System Interconnection:
   • Provides communication among CPU, main memory, and I/O
   • Example: System Bus

CPU Main Structural Components:
1. Control Unit - Controls CPU operation and hence the computer
2. Arithmetic and Logic Unit (ALU) - Performs data processing functions
3. Registers - Provides internal CPU storage
4. CPU Interconnection - Provides communication among Control Unit, ALU, and Registers

Multicore Computer Structure:

Definitions:
• Core: Individual processing unit on processor chip (Control Unit, ALU, Registers, perhaps Cache)
• Processor: Physical piece of silicon containing one or more cores that interprets and executes instructions

Principal Components:
• Printed Circuit Board (PCB): Rigid, flat board holding and interconnecting chips and electronic components
• Made of 2-10 layers interconnecting components via copper pathways
• System Board/Motherboard: Main printed circuit board in computer
• Expansion Boards: Smaller boards that plug into slots in main board

Chip & Integrated Circuit:
• Chip: Single piece of semiconducting material (typically silicon) with electronic circuits and logic gates fabricated
• Integrated Circuit: Resulting product from chip fabrication

Motherboard Contents:
• Slot or socket for processor chip
• Memory chips
• I/O controller chips
• Other key computer components
• Used in embedded computers, smartphones, tablets, PCs, laptops, workstations

Cache Memory:

Definition and Purpose:
• Multiple layers of memory between processor and main memory
• Smaller and faster than main memory
• Used to speed up memory access by placing data likely to be used soon

Cache Levels:
• Level 1 (L1): Closest to core
• Level 2 (L2), Level 3 (L3), and beyond: Progressively farther from core
• Level n is smaller and faster than level n+1

Evolution of Computers:

Five Generations:
1. First Generation - Vacuum Tubes
2. Second Generation - Transistors
3. Third Generation - Integrated Circuits
4. Fourth Generation - Micro-Processors
5. Fifth Generation - Artificial Intelligence

Von Neumann Architecture:

Foundation:
• All modern computer designs based on concepts developed by John von Neumann at Institute for Advanced Studies, Princeton

Three Key Concepts:
1. Data and instructions stored in single read-write memory
2. Memory contents addressable by location, without regard to data type
3. Execution occurs in sequential fashion (unless explicitly modified) from one instruction to next

Top-Level View - Basic Function:
• Computer consists of CPU, memory, and I/O components
• Components interconnected to achieve basic function: execute programs
• Program = set of instructions stored in memory

CPU Registers:

Memory-Related Registers:
• Memory Address Register (MAR): Specifies address in memory for next read or write
• Memory Buffer Register (MBR): Contains data to be written into memory or receives data read from memory

I/O-Related Registers:
• I/O Address Register (I/OAR): Specifies particular I/O device
• I/O Buffer Register (I/OBR): Used for data exchange between I/O module and CPU

Designing for Performance:

Performance Trends:
• Cost of computer systems continues to drop dramatically
• Performance and capacity continue to rise equally dramatically
• Continuing technological revolution enabled development of complex and powerful applications

Modern Desktop Applications Requiring High Power:
• Image processing
• Speech recognition
• Videoconferencing
• Multimedia authoring
• Voice and video annotation of files
• Simulation modeling

Performance Assessment:

Key Parameters to Consider:
• Performance (along with cost, size, security, reliability, power consumption)
• Key parameter for evaluating processor hardware and setting requirements

Difficulty of Assessment:
Depends on:
• Speed of processor
• Instruction set
• Implementation language
• Efficiency of compiler
• Skill of programming in implementing application

Performance Assessment Methods:
1. Clock Speed - Processor operating frequency
2. Instruction Execution Rate - Instructions completed per unit time
3. Benchmarks - Standardized tests measuring system performance
4. Amdahl's Law - Theoretical speedup in latency from improving part of system
5. Little's Law - Relationship between average number of items, arrival rate, and time in system

Review Questions Summary:
i. Distinction between computer organization and architecture
ii. Distinction between computer structure and function
iii. Four main functions of computer
iv. Main structural components of single processor computer
v. Main structural components of CPU
vi. Difference between single-processor and multicore computers
vii. Cache memory explanation

Key Takeaways:
• Architecture defines what computer does; organization defines how
• Computer systems are hierarchical - studied using top-down approach
• Four basic functions: data processing, storage, movement, control
• Modern computers use multicore processors with cache memory hierarchy
• Von Neumann architecture is foundation of modern computing
• Performance assessment requires multiple methods and considerations

End of Lecture 01 – Introduction, Background & Importance
`
}