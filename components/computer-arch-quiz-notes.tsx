"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Check, X } from 'lucide-react';

const QuizStudyGuide = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  interface Topic {
    subtitle: string;
    points: string[];
  }

  interface StudySection {
    id: string;
    title: string;
    topics: Topic[];
  }

  interface QuizQuestion {
    q: string;
    a: string;
  }

  interface Score {
    correct: number;
    total: number;
  }

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const studyContent = [
    {
      id: 'intro',
      title: 'Lecture 1: Introduction & Top-Level View',
      topics: [
        {
          subtitle: 'Architecture vs Organization',
          points: [
            'Architecture: What the computer does (functional behavior, instruction set, data types, I/O mechanisms)',
            'Organization: How it does it (operational units, control signals, memory technology)',
            'Architecture is fixed first, then organization is decided',
            'Example: IBM System/370 - same architecture, different organizations (models)'
          ]
        },
        {
          subtitle: 'Computer Functions (4 Main)',
          points: [
            '1. Data Processing - transforming data',
            '2. Data Storage - short-term (working) and long-term (files)',
            '3. Data Movement - I/O with peripherals',
            '4. Control - managing resources and operations'
          ]
        },
        {
          subtitle: 'Single-Processor Components',
          points: [
            'CPU: Controls operation, performs data processing',
            'Main Memory: Stores data',
            'I/O: Moves data to/from external environment',
            'System Interconnection: Communication mechanism (System Bus)'
          ]
        },
        {
          subtitle: 'CPU Components',
          points: [
            'Control Unit: Controls CPU operation',
            'ALU: Performs data processing',
            'Registers: Internal CPU storage',
            'CPU Interconnection: Internal communication'
          ]
        },
        {
          subtitle: 'Multicore vs Single-Processor',
          points: [
            'Core: Individual processing unit on chip (Control Unit + ALU + Registers + Cache)',
            'Processor: Physical silicon containing one or more cores',
            'Multicore: Multiple processors on single chip',
            'Motherboard: PCB connecting all components'
          ]
        },
        {
          subtitle: 'Cache Memory',
          points: [
            'Multiple layers between processor and main memory',
            'Smaller and faster than main memory',
            'L1 closest to core, then L2, L3, etc.',
            'Level n is smaller and faster than level n+1'
          ]
        },
        {
          subtitle: 'Von Neumann Architecture (3 Key Concepts)',
          points: [
            '1. Data and instructions stored in single read-write memory',
            '2. Memory addressable by location (regardless of data type)',
            '3. Sequential execution (unless explicitly modified)'
          ]
        },
        {
          subtitle: 'CPU Registers',
          points: [
            'MAR (Memory Address Register): Specifies memory address',
            'MBR (Memory Buffer Register): Contains data to/from memory',
            'I/OAR (I/O Address Register): Specifies I/O device',
            'I/OBR (I/O Buffer Register): Data exchange with I/O'
          ]
        }
      ]
    },
    {
      id: 'function',
      title: 'Lecture 2: Computer Function & Instruction Cycle',
      topics: [
        {
          subtitle: 'Instruction Cycle (2 Steps)',
          points: [
            '1. FETCH: PC holds next instruction address → Read from memory → Load to IR → Increment PC',
            '2. EXECUTE: Perform the instruction action'
          ]
        },
        {
          subtitle: 'Execute Cycle Categories (4)',
          points: [
            '1. Processor-Memory: Data transfer CPU ↔ Memory',
            '2. Processor-I/O: Data transfer CPU ↔ I/O',
            '3. Data Processing: Arithmetic/logical operations',
            '4. Control: Alter sequence (e.g., jump)'
          ]
        },
        {
          subtitle: 'Key CPU Registers',
          points: [
            'PC (Program Counter): Address of next instruction',
            'MAR (Memory Address Register): Memory address for read/write',
            'MBR (Memory Buffer Register): Buffers data to/from memory',
            'IR (Instruction Register): Current instruction being executed',
            'AC (Accumulator): Temporarily stores values'
          ]
        },
        {
          subtitle: 'Instruction Cycle States',
          points: [
            'Instruction Address Calculation: Determine next instruction address',
            'Instruction Fetch: Read instruction from memory',
            'Instruction Operation Decoding: Analyze instruction type',
            'Operand Address Calculation: Determine operand address',
            'Operand Fetch: Get operand from memory/I/O',
            'Data Operation: Perform the operation',
            'Operand Store: Write result to memory/I/O'
          ]
        }
      ]
    },
    {
      id: 'interrupts',
      title: 'Lecture 3: Interrupts',
      topics: [
        {
          subtitle: 'What is an Interrupt?',
          points: [
            'Mechanism for I/O/memory to interrupt normal processor sequence',
            'User program doesn\'t need special code for interrupts',
            'OS and processor handle suspend and resume',
            'Allows processor to execute other instructions during I/O'
          ]
        },
        {
          subtitle: 'Classes of Interrupts (4)',
          points: [
            '1. Program: Result of instruction (division by zero, invalid memory)',
            '2. Timer: Generated by processor timer',
            '3. I/O: From I/O controller (operation complete, request service)',
            '4. Hardware Failure: Power failure, etc.'
          ]
        },
        {
          subtitle: 'Why Interrupts?',
          points: [
            'Improve processing efficiency',
            'External devices much slower than processor',
            'Without interrupts: CPU wastes time waiting',
            'With interrupts: CPU can do other work while I/O in progress'
          ]
        },
        {
          subtitle: 'Advantages & Disadvantages',
          points: [
            'Advantages: Increases CPU efficiency, decreases waiting time, stops instruction cycle wastage',
            'Disadvantages: CPU overhead to handle interrupts and resume execution'
          ]
        },
        {
          subtitle: 'I/O Techniques (3)',
          points: [
            '1. Programmed I/O: Processor waits, repeatedly checks I/O status',
            '2. Interrupt Driven I/O: Processor executes other instructions during I/O',
            '3. Direct Memory Access (DMA): I/O ↔ Memory without processor'
          ]
        },
        {
          subtitle: 'Interrupt Cycle',
          points: [
            'Added to instruction cycle',
            'Check for interrupts at end of each instruction',
            'If interrupt: Suspend program → Save context → Jump to interrupt handler → Service interrupt → Restore context → Resume'
          ]
        },
        {
          subtitle: 'Multiple Interrupts (2 Methods)',
          points: [
            '1. Sequential: Disable interrupts during processing, handle in strict order',
            '2. Nested (Priority): Higher priority can interrupt lower priority, returns after completion'
          ]
        }
      ]
    },
    {
      id: 'bus',
      title: 'Lecture 4: Bus Architecture & Interconnection',
      topics: [
        {
          subtitle: 'What is a Bus?',
          points: [
            'Communication pathway connecting 2+ devices',
            'Shared transmission medium (key characteristic)',
            'Multiple devices connect to bus',
            'Only one device can successfully transmit at a time',
            'Signal available to all devices for reception'
          ]
        },
        {
          subtitle: 'System Bus (3 Types)',
          points: [
            '1. DATA BUS: Carries data (bi-directional), width = number of lines (32, 64, 128+)',
            '2. ADDRESS BUS: Source/destination addresses, width = max memory capacity',
            '3. CONTROL BUS: Controls access to data/address lines, timing and command signals'
          ]
        },
        {
          subtitle: 'Memory Connection Signals',
          points: [
            'Receives and sends data',
            'Receives addresses (location for operation)',
            'Receives control signals (Read/Write)'
          ]
        },
        {
          subtitle: 'I/O Connection',
          points: [
            'Functionally similar to memory (Read/Write)',
            'Can control multiple external devices',
            'Uses unique port addresses',
            'Can send interrupt signals to processor'
          ]
        },
        {
          subtitle: 'Interconnection Transfer Types',
          points: [
            'Memory → Processor: Read instruction/data',
            'Processor → Memory: Write data',
            'I/O → Processor: Read data from I/O',
            'Processor → I/O: Send data to I/O',
            'I/O ↔ Memory: Direct Memory Access (DMA)'
          ]
        },
        {
          subtitle: 'Single Bus Problems',
          points: [
            'Synchronization difficulties at high data rates',
            'Propagation delays (more devices = longer bus = greater delay)',
            'Bus control transfer delays affect performance',
            'Multicore chips magnify these problems'
          ]
        },
        {
          subtitle: 'Point-to-Point Interconnection',
          points: [
            'Modern alternative to shared buses',
            'Advantages: Lower latency, higher data rate, better scalability',
            'Buses still used in embedded systems and microcontrollers'
          ]
        },
        {
          subtitle: 'Bus Types',
          points: [
            'DEDICATED: Permanently assigned (Functional: separate lines; Physical: multiple buses for subsets)',
            'MULTIPLEXED: Same lines for multiple purposes (fewer lines, but more complex circuitry)'
          ]
        },
        {
          subtitle: 'Bus Arbitration (2 Methods)',
          points: [
            'Need: Multiple modules may need bus control, but only one at a time',
            '1. Centralized: Single controller/arbiter (may be CPU or separate)',
            '2. Distributed: No central controller, each module has access control logic'
          ]
        },
        {
          subtitle: 'Bus Timing (2 Types)',
          points: [
            '1. Synchronous: Events determined by clock, all events start at clock cycle beginning',
            '2. Asynchronous: No clock signal, one event depends on previous event'
          ]
        }
      ]
    }
  ];

  const quizQuestions = [
    {
      q: 'What is the difference between Computer Architecture and Organization?',
      a: 'Architecture describes WHAT the computer does (functional behavior, instruction set, data types). Organization describes HOW it does it (operational units, control signals, memory technology).'
    },
    {
      q: 'List the 4 main functions of a computer.',
      a: '1. Data Processing, 2. Data Storage (short-term & long-term), 3. Data Movement (I/O), 4. Control (managing resources)'
    },
    {
      q: 'What are the 3 key concepts of Von Neumann Architecture?',
      a: '1. Data and instructions in single read-write memory, 2. Memory addressable by location (regardless of type), 3. Sequential execution (unless modified)'
    },
    {
      q: 'What are the 4 main components of a single-processor computer?',
      a: '1. CPU (processor), 2. Main Memory, 3. I/O, 4. System Interconnection (e.g., System Bus)'
    },
    {
      q: 'What are the 4 components inside the CPU?',
      a: '1. Control Unit, 2. ALU (Arithmetic Logic Unit), 3. Registers, 4. CPU Interconnection'
    },
    {
      q: 'What is the difference between a Core and a Processor?',
      a: 'Core: Individual processing unit on chip (Control Unit + ALU + Registers + Cache). Processor: Physical silicon piece containing one or more cores.'
    },
    {
      q: 'What are the 2 main steps of the Instruction Cycle?',
      a: '1. FETCH: Read instruction from memory (PC → MAR → Memory → MBR → IR), increment PC. 2. EXECUTE: Perform the instruction action.'
    },
    {
      q: 'What are the 4 categories of Execute Cycle actions?',
      a: '1. Processor-Memory (data transfer), 2. Processor-I/O (data transfer), 3. Data Processing (arithmetic/logic), 4. Control (alter sequence, e.g., jump)'
    },
    {
      q: 'Explain these CPU registers: PC, MAR, MBR, IR, AC',
      a: 'PC: Program Counter (next instruction address). MAR: Memory Address Register. MBR: Memory Buffer Register. IR: Instruction Register (current instruction). AC: Accumulator (temp storage).'
    },
    {
      q: 'What is an Interrupt and why is it needed?',
      a: 'Mechanism for I/O/memory to interrupt normal processor sequence. Needed because external devices are much slower than CPU. Allows CPU to do other work instead of waiting, improving efficiency.'
    },
    {
      q: 'List the 4 classes of interrupts.',
      a: '1. Program (e.g., division by zero), 2. Timer (from processor timer), 3. I/O (operation complete/request service), 4. Hardware Failure (e.g., power failure)'
    },
    {
      q: 'What are the 3 I/O Techniques?',
      a: '1. Programmed I/O (processor waits), 2. Interrupt Driven I/O (processor does other work), 3. DMA - Direct Memory Access (I/O ↔ Memory without processor)'
    },
    {
      q: 'Describe the Interrupt Cycle process.',
      a: 'Check for interrupts → If yes: Suspend program → Save context (PC, registers) → Jump to interrupt handler → Service interrupt → Restore context → Resume program'
    },
    {
      q: 'What are the 2 methods for handling Multiple Interrupts?',
      a: '1. Sequential: Disable interrupts during processing, handle in strict order. 2. Nested (Priority-based): Higher priority interrupts can interrupt lower priority ones.'
    },
    {
      q: 'What is a Bus and its key characteristic?',
      a: 'Communication pathway connecting 2+ devices. Key characteristic: Shared transmission medium where multiple devices connect, but only ONE can successfully transmit at a time.'
    },
    {
      q: 'What are the 3 types of System Bus and their functions?',
      a: '1. DATA BUS: Carries data (bi-directional). 2. ADDRESS BUS: Carries source/destination addresses. 3. CONTROL BUS: Controls access, sends timing and command signals.'
    },
    {
      q: 'List the 5 types of interconnection transfers.',
      a: '1. Memory → Processor (read), 2. Processor → Memory (write), 3. I/O → Processor (read), 4. Processor → I/O (write), 5. I/O ↔ Memory (DMA)'
    },
    {
      q: 'What are problems with Single Bus Architecture?',
      a: 'Synchronization difficulties at high speeds, propagation delays (more devices = longer bus = greater delay), bus control transfer delays, magnified with multicore chips'
    },
    {
      q: 'What are the advantages of Point-to-Point over Bus?',
      a: 'Lower latency, higher data rate, better scalability. (But buses still used in embedded systems)'
    },
    {
      q: 'What is the difference between Dedicated and Multiplexed buses?',
      a: 'Dedicated: Permanently assigned to one function (more lines, simpler). Multiplexed: Same lines for multiple purposes (fewer lines, more complex circuitry).'
    },
    {
      q: 'What are the 2 Bus Arbitration methods?',
      a: '1. Centralized: Single hardware controller/arbiter controls bus access. 2. Distributed: No central controller, each module has access control logic.'
    },
    {
      q: 'What are the 2 Bus Timing types?',
      a: '1. Synchronous: Events determined by clock signal, all start at clock cycle beginning. 2. Asynchronous: No clock, one event depends on occurrence of previous event.'
    }
  ];

  const nextQuestion = () => {
    setCurrentQuiz((prev) => (prev + 1) % quizQuestions.length);
    setShowAnswer(false);
  };

  const prevQuestion = () => {
    setCurrentQuiz((prev) => (prev - 1 + quizQuestions.length) % quizQuestions.length);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Computer Architecture</h1>
                <p className="text-gray-600">Quiz Study Guide</p>
              </div>
            </div>
            <button
              onClick={() => setQuizMode(!quizMode)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              {quizMode ? 'Study Notes' : 'Quiz Mode'}
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!quizMode ? (
          // Study Notes Mode
          <div className="space-y-4">
            {studyContent.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-6 h-6 text-indigo-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-indigo-600" />
                  )}
                </button>
                
                {expandedSections[section.id] && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    {section.topics.map((topic, idx) => (
                      <div key={idx} className="mb-6 last:mb-0">
                        <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                          {topic.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {topic.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex gap-2">
                              <span className="text-indigo-600 font-bold mt-1">•</span>
                              <span className="text-gray-700 flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Quiz Mode
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuiz + 1} of {quizQuestions.length}
                </span>
                <div className="h-2 bg-gray-200 rounded-full flex-1 mx-4">
                  <div
                    className="h-2 bg-indigo-600 rounded-full transition-all"
                    style={{ width: `${((currentQuiz + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {quizQuestions[currentQuiz].q}
                </h3>
                
                {showAnswer && (
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{quizQuestions[currentQuiz].a}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="flex-1 py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button
                onClick={prevQuestion}
                className="flex-1 py-2 px-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                className="flex-1 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>💡 Tip: Review all sections in Study Notes, then test yourself in Quiz Mode!</p>
        </div>
      </div>
    </div>
  );
};

export default QuizStudyGuide;