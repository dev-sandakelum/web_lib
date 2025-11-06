// internalMemory.ts
// Single dataset entry combining all lecture content from Lecture_08(InternalMemory) 2025-10-08.pdf

import { Dataset } from "../types/dataset";



export const internalMemoryDataset: Dataset = 
  {
    id: "Internal-Memory",
    category: "Internal Memory",
    description:
      "Comprehensive lecture notes on internal memory technologies, including RAM types, ROM types, and error correction mechanisms in semiconductor memory.",
    content: `
Lecture 07 – Computer Architecture (ICT1152)
Topic: Internal Memory Technologies

Objectives:
• Identify the different types of semiconductor main memory
• Understand basic error detection and correction code operations
• Summarize properties of modern DRAM organizations

Introduction:
Earlier main memory employed arrays of doughnut-shaped ferromagnetic cores.
Today, semiconductor chips are universally used for main memory.
The basic element of semiconductor memory is the memory cell.

Semiconductor Memory Types:
• Volatile memory: Data is lost when power is interrupted.
• Non-volatile memory: Retains data without power.
Traditional forms of RAM: SRAM and DRAM.

Dynamic RAM (DRAM):
• Stores data as charge on capacitors.
• Presence or absence of charge = binary 1 or 0.
• Requires periodic refresh to maintain data.
• Charge can leak away over time even with power.
• Analog in nature; capacitor stores variable charge.
• Threshold value determines whether stored bit is 1 or 0.
• Used for main memory.

Static RAM (SRAM):
• Digital device using flip-flop logic gates.
• Holds data as long as power is supplied.
• Faster, lower density, more complex and expensive than DRAM.
• Used in cache memory.

DRAM vs SRAM:
• Both are volatile.
• DRAM cell is simpler, smaller → higher density.
• DRAM is slower but cheaper, suitable for large memory.
• SRAM is faster and used for cache.

Read Only Memory (ROM):
• Contains permanent data (read-only).
• Non-volatile – retains data without power.
• Cannot be rewritten.
Applications:
• Microprogramming
• System programs
• Function tables

ROM – Advantages and Disadvantages:
Advantage:
• Data permanently stored – no need to load from secondary storage.
Disadvantage:
• High fabrication cost, no flexibility.
• If one bit is wrong, entire batch must be discarded.

Types of ROM:
1. ROM – written during manufacturing.
2. PROM – Programmable ROM.
   • Non-volatile, written only once.
   • Programmed electrically after fabrication.
   • Requires special equipment.
3. Read-mostly memory:
   • Used where reads are more frequent than writes.
   • Types: EPROM, EEPROM, Flash memory.

EPROM (Erasable Programmable ROM):
• Read and write electrically.
• Must erase all storage cells before writing.
• Erased using ultraviolet rays.
• More expensive but can be updated multiple times.

EEPROM (Electrically Erasable Programmable ROM):
• Can be rewritten without erasing prior data.
• Less dense, more expensive than EPROM.
• Slower write times.
• Combines non-volatility with in-place updatability.

Flash Memory:
• Between EPROM and EEPROM in cost and function.
• Erased electrically (entire or block-wise).
• High density, fast erase (seconds), not byte-level.

Error Correction:
Errors in semiconductor memory are categorized as:
1. Hard failures – permanent defects (manufacturing or environmental).
2. Soft errors – transient bit changes without damage (e.g., alpha particles).

Error detection/correction uses Hamming Code (simplest form).
Detects and corrects single-bit errors in small data words (e.g., 4-bit).

Error Correcting Code (ECC):
• Enhances reliability and data integrity by detecting/correcting errors.
• Important for servers and mission-critical systems.
• Stores both data bits (M) and correction bits (K).
• Upon reading, ECC compares stored code and recalculated code.

Three outcomes:
1. No error detected.
2. Error detected but uncorrectable.
3. Correctable error – identifies and flips the faulty bit.

Hamming Error-Correcting Code:
• Adds redundant bits (parity bits) to detect/correct single-bit errors.
• Each parity bit covers specific data bits.
• Uses even parity (each circle must have even number of 1s).
• Can locate and fix 1-bit errors.

Example (4-bit word, M=4):
• Uses 3 parity bits (K=3) across 7 compartments (4 data + 3 parity).
• Parity bits ensure even parity in each circle (A, B, C).
• Example correction: If inconsistencies found in A and C but not B,
  the error lies in the bit common to A and C only.

Syndrome Word:
• XOR of stored ECC code and recalculated ECC code.
• If all zeros → no error.
• Non-zero → identifies position of erroneous bit.

Relation Between M and K:
To correct single-bit errors:
2^K - 1 ≥ M + K
Example:
For 8-bit word (M=8):
K=3 → 2^3-1 < 12 (fails)
K=4 → 2^4-1 > 12 (works)
Thus, 8 data bits need 4 check bits.

Memory Overhead:
Data bits (M) | Check bits (K) | % Increase
4 | 3 | 75%
8 | 4 | 50%
16 | 5 | 31.25%
32 | 6 | 18.75%
64 | 7 | 10.94%
128 | 8 | 6.25%
256 | 9 | 3.52%

M+K Bits Arrangement:
• Z (syndrome) = 0 → no error.
• Z = 1-bit set → check bit error.
• Z > 1-bit set → data bit error (bit at position = value of Z).
• Bit positions that are powers of 2 are check bits.

Example: M=4
Bit positions 7 6 5 4 3 2 1
Check bits: C4 C2 C1
Data bits: D4 D3 D2 D1
C1 = D1 ⊕ D2 ⊕ D4
C2 = D1 ⊕ D3 ⊕ D4
C4 = D2 ⊕ D3 ⊕ D4

If D3 changes value (error), recalculating check bits and syndrome reveals error in D3.

Example: 
Original: D4D3D2D1 = 1101
Check bits: C4=0, C2=1, C1=0
If D3=0 → error → Z = 110 (binary 6) → bit 6 corresponds to D3.

Improved DRAM Technologies:
• SDRAM – Synchronous DRAM: data transfer synchronized with system clock.
• DDR-SDRAM – Double Data Rate SDRAM: transfers data twice per clock cycle.
• RDRAM – Rambus DRAM: asynchronous, high-speed memory for Intel Pentium/Itanium, uses 28 wires, short bus (≤12 cm), transfers one block per clock.

Summary:
• DRAM and SRAM are volatile main memories with different speed and density trade-offs.
• ROM and its variants (PROM, EPROM, EEPROM, Flash) are non-volatile, with varying programmability.
• Error correction codes like Hamming ensure reliability and accuracy.
• Modern memory systems use ECC and DRAM technologies (SDRAM, DDR, RDRAM) to balance speed, capacity, and reliability.

End of Lecture 08 – Internal Memory
`
  }
;
