export const InternalMemoryQuiz = {
  id: "internal-memory-tech",
  title: "Internal Memory Technologies",
  category: "Computer Architecture",
  questions: [
    {
      question: "What was used for main memory before semiconductor chips became universal?",
      options: ["Magnetic tape arrays", "Doughnut-shaped ferromagnetic cores", "Glass substrate disks", "Optical memory cells"],
      correctIndex: 1,
      explanation: "Earlier main memory employed an array of doughnut-shaped ferromagnetic loops referred to as cores."
    },
    {
      question: "What is the basic element of a semiconductor memory?",
      options: ["Memory core", "Memory cell", "Memory gate", "Memory loop"],
      correctIndex: 1,
      explanation: "The basic element of a semiconductor memory is the memory cell."
    },
    {
      question: "What happens to data in volatile memory when power is interrupted?",
      options: ["Data is compressed", "Data remains intact", "Data is lost", "Data is transferred to ROM"],
      correctIndex: 2,
      explanation: "Volatile memory loses data if power is interrupted."
    },
    {
      question: "How do DRAM cells store data?",
      options: ["As magnetic fields", "As charge on capacitors", "Using flip-flop configurations", "Through optical signals"],
      correctIndex: 1,
      explanation: "DRAM cells store data as charge on capacitors."
    },
    {
      question: "Why is DRAM called 'dynamic'?",
      options: ["It operates at variable speeds", "Charge can leak away even with power applied", "It dynamically allocates memory", "It changes capacity automatically"],
      correctIndex: 1,
      explanation: "DRAM is called dynamic because charge can leak away, even with power continuously applied."
    },
    {
      question: "What type of device is DRAM essentially?",
      options: ["A digital device", "An analog device", "A hybrid device", "An optical device"],
      correctIndex: 1,
      explanation: "DRAM is essentially an analog device as the capacitor can store any charge value within a range."
    },
    {
      question: "What is the primary use of DRAM in computer systems?",
      options: ["Cache memory", "Main memory", "ROM storage", "External storage"],
      correctIndex: 1,
      explanation: "DRAM is used for main memory."
    },
    {
      question: "How does SRAM store binary values?",
      options: ["Using capacitor charges", "Using magnetic fields", "Using flip-flop logic-gate configurations", "Using optical switches"],
      correctIndex: 2,
      explanation: "SRAM stores binary values using flip-flop logic-gate configurations."
    },
    {
      question: "What type of device is SRAM?",
      options: ["An analog device", "A hybrid device", "A digital device", "A magnetic device"],
      correctIndex: 2,
      explanation: "SRAM is a digital device."
    },
    {
      question: "How long will SRAM hold its data?",
      options: ["For a few seconds only", "Until manually cleared", "As long as power is supplied", "Until refreshed periodically"],
      correctIndex: 2,
      explanation: "A static RAM will hold its data as long as power is supplied to it."
    },
    {
      question: "Where is SRAM typically used in computer systems?",
      options: ["Main memory", "External storage", "Cache memory", "ROM chips"],
      correctIndex: 2,
      explanation: "SRAM is used in cache memory."
    },
    {
      question: "Which memory type has higher density?",
      options: ["SRAM", "DRAM", "ROM", "PROM"],
      correctIndex: 1,
      explanation: "DRAM has higher density because the DRAM cell is simpler and smaller than SRAM."
    },
    {
      question: "Which characteristic makes DRAM more expensive than SRAM?",
      options: ["DRAM is actually less expensive", "DRAM requires more power", "DRAM needs special cooling", "DRAM has faster access times"],
      correctIndex: 0,
      explanation: "DRAM is less expensive than SRAM, not more expensive."
    },
    {
      question: "Why is DRAM favored for large memory requirements?",
      options: ["It's faster than SRAM", "It's less expensive than SRAM", "It requires no power", "It's more reliable"],
      correctIndex: 1,
      explanation: "DRAM is less expensive, making it favored for large memory requirements."
    },
    {
      question: "What type of pattern does ROM contain?",
      options: ["A temporary pattern of data", "A permanent pattern of data", "A user-modifiable pattern", "A volatile pattern"],
      correctIndex: 1,
      explanation: "ROM contains a permanent pattern of data that cannot be changed."
    },
    {
      question: "Is ROM volatile or non-volatile?",
      options: ["Volatile", "Non-volatile", "Semi-volatile", "Conditionally volatile"],
      correctIndex: 1,
      explanation: "ROM is non-volatile - no power source is required to maintain the bit values in memory."
    },
    {
      question: "Which is NOT a typical application of ROM?",
      options: ["Microprogramming", "System programs", "Function tables", "Temporary data storage"],
      correctIndex: 3,
      explanation: "ROM is used for microprogramming, system programs, and function tables, not temporary data storage."
    },
    {
      question: "What is the main disadvantage of ROM?",
      options: ["High power consumption", "Slow access speed", "Data insertion has large fixed cost with no room for error", "Requires constant refreshing"],
      correctIndex: 2,
      explanation: "ROM's data insertion has a relatively large fixed cost, and if one bit is wrong, the whole batch must be thrown out."
    },
    {
      question: "When is PROM written?",
      options: ["During manufacturing only", "Only by the manufacturer", "Electrically after chip fabrication", "Using ultraviolet light"],
      correctIndex: 2,
      explanation: "PROM writing is performed electrically and may be done by a supplier or customer at a time later than chip fabrication."
    },
    {
      question: "How many times can PROM be written?",
      options: ["Multiple times", "Only once", "Unlimited times", "Twice only"],
      correctIndex: 1,
      explanation: "PROM is written only once."
    },
    {
      question: "What are EPROM, EEPROM, and Flash memory types of?",
      options: ["Volatile memory", "Cache memory", "Read-mostly memory", "Dynamic memory"],
      correctIndex: 2,
      explanation: "EPROM, EEPROM, and Flash memory are forms of read-mostly memory."
    },
    {
      question: "How is EPROM erased?",
      options: ["Electrically", "Using ultraviolet rays", "Using magnetic fields", "Using heat"],
      correctIndex: 1,
      explanation: "EPROM is erased using ultraviolet (UV) rays."
    },
    {
      question: "What must be done to EPROM before a write operation?",
      options: ["Cool it down", "All storage cells must be erased to the same initial state", "Charge the capacitors", "Apply magnetic field"],
      correctIndex: 1,
      explanation: "Before a write operation, all EPROM storage cells must be erased to the same initial state."
    },
    {
      question: "What advantage does EPROM have over PROM?",
      options: ["Lower cost", "Faster access", "Multiple update capability", "Higher density"],
      correctIndex: 2,
      explanation: "EPROM has the advantage of multiple update capability."
    },
    {
      question: "Can EEPROM be written into at any time?",
      options: ["No, it must be erased first", "Yes, without erasing prior contents", "Only once per power cycle", "Only during manufacturing"],
      correctIndex: 1,
      explanation: "EEPROM can be written into at any time without erasing prior contents."
    },
    {
      question: "How does EEPROM compare to EPROM in terms of density and cost?",
      options: ["More dense and cheaper", "Less dense and more expensive", "More dense but more expensive", "Less dense but cheaper"],
      correctIndex: 1,
      explanation: "EEPROM is less dense and more expensive than EPROM."
    },
    {
      question: "Where does Flash memory fall in terms of cost and functionality?",
      options: ["Below EPROM", "Above EEPROM", "Intermediate between EPROM and EEPROM", "Equal to PROM"],
      correctIndex: 2,
      explanation: "Flash memory is intermediate between EPROM and EEPROM in both cost and functionality."
    },
    {
      question: "How long does it take to erase an entire flash memory?",
      options: ["Several minutes", "Several hours", "A few seconds", "A few milliseconds"],
      correctIndex: 2,
      explanation: "Entire flash memory can be erased in few seconds."
    },
    {
      question: "Does Flash memory provide byte-level erasure?",
      options: ["Yes, for all operations", "No, only entire memory or blocks", "Only for small files", "Yes, but only with special hardware"],
      correctIndex: 1,
      explanation: "Flash memory can delete entire flash memory or blocks of it, not providing byte-level erasure."
    },
    {
      question: "What are hard failures in semiconductor memory?",
      options: ["Temporary glitches", "Permanent physical defects", "Software errors", "Power fluctuations"],
      correctIndex: 1,
      explanation: "Hard failures are permanent physical defects."
    },
    {
      question: "What characterizes soft errors in memory?",
      options: ["Permanent damage", "Manufacturing defects", "Random, nondestructive events that alter contents", "Physical defects"],
      correctIndex: 2,
      explanation: "Soft errors are random, nondestructive events that alter the contents without damaging the memory."
    },
    {
      question: "What can cause soft errors?",
      options: ["Manufacturing defects only", "Power supply problems or alpha particles", "Physical damage only", "Excessive heat only"],
      correctIndex: 1,
      explanation: "Soft errors are caused by power supply problems or alpha particles."
    },
    {
      question: "What code is used to detect errors in memory systems?",
      options: ["Binary code", "Hamming error correcting code", "ASCII code", "Unicode"],
      correctIndex: 1,
      explanation: "Errors are detected using Hamming error correcting code."
    },
    {
      question: "How many bit errors can a Hamming code detect and correct in 4-bit codes?",
      options: ["2-bit errors", "3-bit errors", "1-bit errors", "4-bit errors"],
      correctIndex: 2,
      explanation: "Hamming code is able to detect and correct 1-bit errors in 4-bit codes."
    },
    {
      question: "In the error correction function, what does M represent?",
      options: ["Memory size", "M-bit word of data", "Maximum errors", "Module count"],
      correctIndex: 1,
      explanation: "M represents the M-bit word of data."
    },
    {
      question: "What does K represent in error correction code?",
      options: ["Kilobyte size", "Code length", "Kernel bits", "Key value"],
      correctIndex: 1,
      explanation: "K represents the code length."
    },
    {
      question: "How many bits are stored in total with error correction?",
      options: ["M bits", "K bits", "(M+K) bits", "(M-K) bits"],
      correctIndex: 2,
      explanation: "Both the code and the data are stored as (M+K) bits."
    },
    {
      question: "What is a parity bit used for?",
      options: ["Data encryption", "Error checking", "Data compression", "Address calculation"],
      correctIndex: 1,
      explanation: "A parity bit is a bit which can be used for error checking."
    },
    {
      question: "How is each parity bit chosen in Hamming code?",
      options: ["Randomly selected", "So that the total number of 1s in its circle is even", "Always set to 1", "Based on data size"],
      correctIndex: 1,
      explanation: "Each parity bit is chosen so that the total number of 1s in its circle is even."
    },
    {
      question: "What is the syndrome word?",
      options: ["The original data word", "The result of XOR comparison of ECC codes", "The parity bit pattern", "The error location"],
      correctIndex: 1,
      explanation: "The syndrome word is the result of the XOR comparison of the two ECC codes."
    },
    {
      question: "What does a syndrome word of all zeros indicate?",
      options: ["Multiple errors detected", "One error detected", "No error detected", "Uncorrectable error"],
      correctIndex: 2,
      explanation: "If the syndrome word is all zeros, no error was detected."
    },
    {
      question: "What relationship must hold between M and K for single-bit error correction?",
      options: ["2^K - 1 ≥ M + K", "2^M - 1 ≥ M + K", "M + K ≥ 2^K", "M = K"],
      correctIndex: 0,
      explanation: "For single-bit error correction, 2^K - 1 ≥ M + K must hold."
    },
    {
      question: "How many check bits are required for 8 data bits?",
      options: ["3 check bits", "4 check bits", "5 check bits", "2 check bits"],
      correctIndex: 1,
      explanation: "For M=8, K=4 satisfies 2^4-1 > 8+4, so eight data bits require four check bits."
    },
    {
      question: "What is the percentage increase in memory for error correction with 8 data bits?",
      options: ["75%", "50%", "31.25%", "25%"],
      correctIndex: 1,
      explanation: "With 8 data bits requiring 4 check bits, the increase is (4/8)×100% = 50%."
    },
    {
      question: "Which bit positions are designated as check bits?",
      options: ["All even positions", "All odd positions", "Positions whose numbers are powers of 2", "First K positions"],
      correctIndex: 2,
      explanation: "Bit positions whose position numbers are powers of 2 are designated as check bits."
    },
    {
      question: "What does SDRAM stand for?",
      options: ["Static DRAM", "Synchronous DRAM", "Sequential DRAM", "Standard DRAM"],
      correctIndex: 1,
      explanation: "SDRAM stands for Synchronous DRAM."
    },
    {
      question: "How does SDRAM exchange data with the processor?",
      options: ["Asynchronously", "Synchronized with an external clock signal", "Through parallel buses", "Using optical signals"],
      correctIndex: 1,
      explanation: "SDRAM exchanges data synchronized with an external clock signal."
    },
    {
      question: "How many times per clock cycle can SDRAM send data?",
      options: ["Twice", "Four times", "Once", "Three times"],
      correctIndex: 2,
      explanation: "SDRAM can send data to the processor only once per clock cycle."
    },
    {
      question: "What does DDR stand for in DDR SDRAM?",
      options: ["Dynamic Data Rate", "Double-data-rate", "Direct Data Read", "Dual Data Register"],
      correctIndex: 1,
      explanation: "DDR stands for Double-data-rate."
    },
    {
      question: "How many times per clock cycle can DDR SDRAM send data?",
      options: ["Once", "Twice", "Four times", "Three times"],
      correctIndex: 1,
      explanation: "DDR SDRAM can send data twice per clock cycle."
    }
  ]
}

export const ExternalMemoryQuiz = {
  id: "external-memory-tech",
  title: "External Memory Technologies",
  category: "Computer Architecture",
  questions: [
    {
      question: "What are the three types of external memory covered?",
      options: ["RAM, ROM, and Cache", "Magnetic Disk, Optical Disk, and Magnetic Tape", "SRAM, DRAM, and Flash", "Primary, Secondary, and Tertiary"],
      correctIndex: 1,
      explanation: "The three types of external memory are Magnetic Disk, Optical Disk, and Magnetic Tape."
    },
    {
      question: "What is a magnetic disk platter constructed of?",
      options: ["Magnetic material only", "Nonmagnetic substrate coated with magnetizable material", "Glass substrate only", "Aluminum core with copper coating"],
      correctIndex: 1,
      explanation: "A disk is a circular platter constructed of nonmagnetic material (substrate) coated with a magnetizable material."
    },
    {
      question: "What material has traditionally been used for disk substrates?",
      options: ["Glass only", "Plastic polymers", "Aluminum or aluminum alloy", "Steel alloys"],
      correctIndex: 2,
      explanation: "Traditionally, the substrate has been an aluminum or aluminum alloy material."
    },
    {
      question: "What is a benefit of glass substrates for magnetic disks?",
      options: ["Lower manufacturing cost", "Improvement in uniformity of the magnetic film surface", "Faster rotation speeds", "Greater flexibility"],
      correctIndex: 1,
      explanation: "Glass substrate provides improvement in the uniformity of the magnetic film surface to increase disk reliability."
    },
    {
      question: "What do glass substrates help reduce in magnetic disks?",
      options: ["Manufacturing time", "Power consumption", "Read-write errors", "Physical size"],
      correctIndex: 2,
      explanation: "Glass substrates provide a significant reduction in overall surface defects to help reduce read-write errors."
    },
    {
      question: "What are the concentric rings on a disk platter called?",
      options: ["Sectors", "Tracks", "Cylinders", "Blocks"],
      correctIndex: 1,
      explanation: "Data is organized on the platter in a concentric set of rings called tracks."
    },
    {
      question: "How wide is each track relative to the head?",
      options: ["Twice as wide", "Half as wide", "The same width", "Variable width"],
      correctIndex: 2,
      explanation: "Each track is the same width as the head."
    },
    {
      question: "Approximately how many tracks are there per disk surface?",
      options: ["Hundreds", "Thousands", "Tens", "Millions"],
      correctIndex: 1,
      explanation: "There are thousands of tracks per surface."
    },
    {
      question: "What are adjacent tracks separated by?",
      options: ["Sector gaps", "Intertrack gaps", "Guard bands", "Buffer zones"],
      correctIndex: 1,
      explanation: "Adjacent tracks are separated by intertrack gaps."
    },
    {
      question: "Why are intertrack gaps used?",
      options: ["To increase storage capacity", "To prevent errors due to misalignment or interference", "To speed up rotation", "To reduce power consumption"],
      correctIndex: 1,
      explanation: "Intertrack gaps prevent or minimize errors due to misalignment of the head or interference of magnetic fields."
    },
    {
      question: "In what units is data transferred to and from the disk?",
      options: ["Tracks", "Sectors", "Cylinders", "Bytes"],
      correctIndex: 1,
      explanation: "Data are transferred to and from the disk in sectors."
    },
    {
      question: "How does a bit near the center of a rotating disk compare to one on the outside?",
      options: ["Travels at the same speed", "Travels faster", "Travels slower", "Doesn't move"],
      correctIndex: 2,
      explanation: "A bit near the center travels past a fixed point slower than a bit on the outside."
    },
    {
      question: "What does CAV stand for?",
      options: ["Computer Access Volume", "Constant Angular Velocity", "Central Access Vector", "Continuous Aligned Values"],
      correctIndex: 1,
      explanation: "CAV stands for Constant Angular Velocity."
    },
    {
      question: "In CAV, how is the disk divided?",
      options: ["Into concentric zones only", "Into pie-shaped sectors and circular tracks", "Into uniform blocks", "Into spiral paths"],
      correctIndex: 1,
      explanation: "In CAV, the disk is divided into pie-shaped sectors and circular tracks."
    },
    {
      question: "What is an advantage of using CAV?",
      options: ["Maximum storage capacity", "Individual blocks can be directly addressed by track and sector", "Uniform bit density", "Faster access times"],
      correctIndex: 1,
      explanation: "The advantage of CAV is that individual blocks of data can be directly addressed by track and sector."
    },
    {
      question: "What is a disadvantage of CAV?",
      options: ["Cannot directly address blocks", "Limited storage capacity due to same data on all tracks", "Requires variable speed rotation", "Too expensive"],
      correctIndex: 1,
      explanation: "CAV's disadvantage is that the amount of data on long outer tracks is only the same as on short inner tracks, limiting storage capacity."
    },
    {
      question: "What does MZR stand for?",
      options: ["Maximum Zone Recording", "Multiple Zone Recording", "Magnetic Zone Regulation", "Multi-level Zone Reading"],
      correctIndex: 1,
      explanation: "MZR stands for Multiple Zone Recording."
    },
    {
      question: "How many zones are typical in MZR?",
      options: ["8 zones", "16 zones", "32 zones", "64 zones"],
      correctIndex: 1,
      explanation: "In MZR, 16 zones is typical."
    },
    {
      question: "In MZR, what is constant within a zone?",
      options: ["Rotation speed", "Number of bits per track", "Track width", "Sector size"],
      correctIndex: 1,
      explanation: "Within a zone in MZR, the number of bits per track is constant."
    },
    {
      question: "Which zones contain more bits in MZR?",
      options: ["Inner zones", "Middle zones", "All zones are equal", "Zones remoter from the center"],
      correctIndex: 3,
      explanation: "Zones remoter from the center contain more bits (more sectors) than zones closer to the center."
    },
    {
      question: "What is the tradeoff of using MZR?",
      options: ["Lower storage capacity", "Greater storage capacity at expense of more complex circuitry", "Slower access times", "Higher power consumption"],
      correctIndex: 1,
      explanation: "MZR allows for greater overall storage capacity at the expense of somewhat more complex circuitry."
    },
    {
      question: "In a fixed-head disk, how many read-write heads are there?",
      options: ["One per disk", "One per platter", "One per track", "One per sector"],
      correctIndex: 2,
      explanation: "In a fixed-head disk, there is one read-write head per track."
    },
    {
      question: "Are fixed-head disk systems common today?",
      options: ["Yes, very common", "No, they are rare", "Only in servers", "Only in mobile devices"],
      correctIndex: 1,
      explanation: "Fixed-head disk systems are rare today."
    },
    {
      question: "How many read-write heads are in a movable-head disk?",
      options: ["One per track", "Multiple heads", "Only one", "Two per platter"],
      correctIndex: 2,
      explanation: "In a movable-head disk, there is only one read-write head."
    },
    {
      question: "Can a nonremovable disk be removed from the drive?",
      options: ["Yes, easily removed", "No, permanently mounted", "Yes, with special tools", "Only by technicians"],
      correctIndex: 1,
      explanation: "A nonremovable disk is permanently mounted in the disk drive."
    },
    {
      question: "What is an example of a nonremovable disk?",
      options: ["USB flash drive", "CD-ROM", "Hard disk in a personal computer", "Floppy disk"],
      correctIndex: 2,
      explanation: "The hard disk in a personal computer is a nonremovable disk."
    },
    {
      question: "To how many sides is the magnetizable coating applied in double-sided disks?",
      options: ["One side", "Both sides", "Three sides", "Four sides"],
      correctIndex: 1,
      explanation: "For double-sided disks, the magnetizable coating is applied to both sides of the platter."
    },
    {
      question: "In multiple-platter disks, how many read-write heads are there?",
      options: ["One total", "One per disk drive", "One per platter surface", "Two per platter"],
      correctIndex: 2,
      explanation: "Multiple-platter disks have one read-write head per platter surface."
    },
    {
      question: "In multiple-platter systems, how are all the heads fixed?",
      options: ["Independently movable", "Fixed at different distances", "Mechanically fixed at same distance from center", "Randomly positioned"],
      correctIndex: 2,
      explanation: "All heads are mechanically fixed so that all are at the same distance from the center and move together."
    },
    {
      question: "What is a cylinder in disk terminology?",
      options: ["The disk platter shape", "Set of all tracks in same relative position on platters", "The disk drive casing", "The rotation mechanism"],
      correctIndex: 1,
      explanation: "A cylinder is the set of all the tracks in the same relative position on the platter."
    },
    {
      question: "How does secondary storage performance compare to processors and main memory?",
      options: ["Much faster", "Considerably less", "About the same", "Slightly faster"],
      correctIndex: 1,
      explanation: "Secondary storage performance is considerably less than the rate for processors and main memory."
    },
    {
      question: "What was developed to address the performance mismatch?",
      options: ["Faster single disks", "Arrays of disks operating independently and in parallel", "Optical storage", "Magnetic tape"],
      correctIndex: 1,
      explanation: "Arrays of disks that operate independently and in parallel were developed to address the mismatch."
    },
    {
      question: "What does RAID stand for?",
      options: ["Random Array of Independent Disks", "Redundant Array of Independent Disks", "Reliable Array of Internal Disks", "Rapid Access Independent Drives"],
      correctIndex: 1,
      explanation: "RAID stands for Redundant Array of Independent Disks."
    },
    {
      question: "What was the original meaning of the 'I' in RAID?",
      options: ["Independent", "Internal", "Inexpensive", "Integrated"],
      correctIndex: 2,
      explanation: "Originally RAID stood for redundant array of inexpensive disks because large hard drives were too expensive."
    },
    {
      question: "What is RAID used to increase?",
      options: ["Power consumption only", "Physical size only", "Performance, fault tolerance, and reliability", "Manufacturing costs"],
      correctIndex: 2,
      explanation: "RAID is used to increase the performance, fault tolerance, and reliability."
    },
    {
      question: "How many RAID levels are there in the scheme?",
      options: ["Five levels", "Six levels", "Seven levels (0-6)", "Eight levels"],
      correctIndex: 2,
      explanation: "The RAID scheme consists of seven levels, zero through six."
    },
    {
      question: "What do RAID levels designate?",
      options: ["Hierarchical importance", "Different design architectures", "Storage capacity sizes", "Speed ratings"],
      correctIndex: 1,
      explanation: "RAID levels designate different design architectures, not a hierarchical relationship."
    },
    {
      question: "What are the segments called in which data is placed in RAID 0?",
      options: ["Blocks", "Strips", "Sectors", "Chunks"],
      correctIndex: 1,
      explanation: "In RAID 0, data is placed in segments called strips."
    },
    {
      question: "Does RAID 0 provide redundancy?",
      options: ["Yes, full redundancy", "Yes, partial redundancy", "No redundancy", "Only parity redundancy"],
      correctIndex: 2,
      explanation: "RAID 0 has no redundancy."
    },
    {
      question: "What is the main benefit of RAID 0?",
      options: ["Data protection", "Increased performance", "Error correction", "Lower cost"],
      correctIndex: 1,
      explanation: "RAID 0 increases the performance."
    },
    {
      question: "How does RAID 1 provide redundant storage?",
      options: ["Through parity calculations", "Through error correcting codes", "Data is duplicated on mirrored disks", "Through checksum validation"],
      correctIndex: 2,
      explanation: "RAID 1 provides redundant storage in the simplest form: data is duplicated on mirrored disks."
    },
    {
      question: "In RAID 1, how many disks is each logical stripe mapped to?",
      options: ["1 disk", "2 disks", "3 disks", "4 disks"],
      correctIndex: 1,
      explanation: "In RAID 1, each logical stripe is mapped to 2 disks."
    },
    {
      question: "How does RAID 1 recovery work?",
      options: ["Complex reconstruction", "Simple - swap faulty disk and re-mirror", "Requires parity calculation", "Cannot recover"],
      correctIndex: 1,
      explanation: "RAID 1 recovery is simple - swap the faulty disk and re-mirror with no downtime."
    },
    {
      question: "What makes RAID 1 relatively expensive?",
      options: ["Complex circuitry", "Requires double disks", "High power consumption", "Slow performance"],
      correctIndex: 1,
      explanation: "RAID 1 is relatively expensive because it requires double disks."
    },
    {
      question: "What does RAID 2 use for error correction?",
      options: ["Simple parity", "Mirroring", "Hamming code", "Checksums"],
      correctIndex: 2,
      explanation: "RAID 2 uses Hamming code error correction stored on multiple parity disks."
    },
    {
      question: "Is RAID 2 still commonly used?",
      options: ["Yes, very common", "No longer used", "Only in servers", "Only in personal computers"],
      correctIndex: 1,
      explanation: "RAID 2 is no longer used; most disks incorporate ECC already."
    },
    {
      question: "How many redundant disks does RAID 3 use?",
      options: ["None", "Only one", "Two", "Three"],
      correctIndex: 1,
      explanation: "RAID 3 uses only one redundant disk to store parity values."
    },
    {
      question: "How is data distributed in RAID 3?",
      options: ["In large blocks", "In small strips (bit-wise)", "In sectors", "In cylinders"],
      correctIndex: 1,
      explanation: "RAID 3 distributes data in small strips (bit-wise) for high data transfer rates."
    },
    {
      question: "What is a disadvantage of RAID 3?",
      options: ["Low storage capacity", "Poor I/O request performance", "No redundancy", "Too expensive"],
      correctIndex: 1,
      explanation: "RAID 3 has poor I/O request performance because all disks are involved in each I/O."
    },
    {
      question: "How does RAID 4 divide data compared to RAID 3?",
      options: ["Bit-wise like RAID 3", "Block-wise with large strips", "Byte-wise", "Sector-wise"],
      correctIndex: 1,
      explanation: "RAID 4 divides data block-wise with large strips (e.g., 16k or 32k), unlike RAID 3's bit-wise distribution."
    },
    {
      question: "What is the bottleneck in RAID 4?",
      options: ["The data disks", "The single parity drive", "The controller", "The cache memory"],
      correctIndex: 1,
      explanation: "The single parity drive is a bottleneck in RAID 4."
    },
    {
      question: "How does RAID 5 avoid the RAID 4 bottleneck?",
      options: ["Uses multiple parity disks", "Eliminates parity completely", "Distributes parity data across all disks", "Uses faster drives"],
      correctIndex: 2,
      explanation: "RAID 5 distributes parity data across ALL the disks to avoid the RAID 4 bottleneck."
    },
    {
      question: "What happens if two disks fail in RAID 5?",
      options: ["Full recovery possible", "Partial recovery possible", "Will not be able to recover data", "Automatic failover occurs"],
      correctIndex: 2,
      explanation: "If two disks fail in RAID 5, it will not be able to recover data."
    },
    {
      question: "Is RAID 5 commonly used?",
      options: ["Rarely used", "One of the most widely used RAID schemes", "Obsolete", "Only in legacy systems"],
      correctIndex: 1,
      explanation: "RAID 5 is one of the most widely used RAID schemes, commonly used in network servers."
    },
    {
      question: "How many parity calculations does RAID 6 use?",
      options: ["One", "Two", "Three", "Four"],
      correctIndex: 1,
      explanation: "RAID 6 uses two parity calculations (2 bits) to protect against multiple disk failures."
    },
    {
      question: "For N disks, how many disks are needed in RAID 6?",
      options: ["N disks", "N+1 disks", "N+2 disks", "N+3 disks"],
      correctIndex: 2,
      explanation: "RAID 6 requires N+2 disks for a user requirement of N disks."
    },
    {
      question: "How many disks need to fail in RAID 6 for data loss?",
      options: ["One disk", "Two disks", "Three disks", "Four disks"],
      correctIndex: 2,
      explanation: "Three disks need to fail in RAID 6 for data loss to occur."
    },
    {
      question: "Why is RAID 6 rarely used?",
      options: ["Too expensive", "Too complex", "Possibility of multiple simultaneous disk failure is very slim", "Poor performance"],
      correctIndex: 2,
      explanation: "RAID 6 is rarely used because the possibility of multiple simultaneous disk failure is very slim."
    },
    {
      question: "What is the significant disadvantage of RAID 6?",
      options: ["Low storage capacity", "Write penalty affecting two parity blocks", "Slow read speeds", "High power consumption"],
      correctIndex: 1,
      explanation: "RAID 6 has a significant write penalty because each write affects two parity blocks."
    },
    {
      question: "What material is used as the medium for magnetic tape?",
      options: ["Metal tape", "Glass fiber", "Polyester tape coated with magnetizable material", "Plastic film only"],
      correctIndex: 2,
      explanation: "Magnetic tape uses polyester tape coated with a magnetizable material as the medium."
    },
    {
      question: "What is the typical width range for magnetic tape?",
      options: ["0.38cm to 1.27cm", "1cm to 5cm", "0.1cm to 0.5cm", "2cm to 10cm"],
      correctIndex: 0,
      explanation: "Tape width ranges from 0.38cm to 1.27cm."
    },
    {
      question: "What type of access does magnetic tape provide?",
      options: ["Random access", "Direct access", "Sequential access", "Parallel access"],
      correctIndex: 2,
      explanation: "Magnetic tape provides sequential access."
    },
    {
      question: "Where does magnetic tape rank in the memory hierarchy in terms of speed?",
      options: ["Fastest member", "Middle tier", "Slowest member", "Second fastest"],
      correctIndex: 2,
      explanation: "Magnetic tape is the slowest member of the memory hierarchy."
    },
    {
      question: "What is a key advantage of magnetic tape?",
      options: ["Fastest access", "Very cheap", "Random access capability", "High power efficiency"],
      correctIndex: 1,
      explanation: "Magnetic tape is very cheap, which is its key advantage."
    }
  ]
}

export const AdvancedMemoryQuiz = {
  id: "advanced-memory-systems",
  title: "Advanced Memory Systems | Internal & External",
  category: "Computer Architecture",
  questions: [
    {
      question: "In a multiple zone recording system with 15 tracks organized into 5 zones, if the innermost two zones have 9 sectors each and the outermost zones have 16 sectors each, what advantage does this provide over CAV?",
      options: ["Faster rotation speeds across all zones", "Higher bit density on outer tracks maximizing storage capacity", "Simpler addressing mechanism for data blocks", "Reduced power consumption during operation"],
      correctIndex: 1,
      explanation: "MZR allows zones remoter from the center to contain more sectors, providing higher bit density on outer tracks and maximizing storage capacity compared to CAV's uniform sector distribution."
    },
    {
      question: "When SDRAM moves data in time with the system clock, what operational advantage does this synchronization provide to the CPU?",
      options: ["The CPU can predict data availability and perform other tasks during SDRAM processing", "The CPU can overclock without stability issues", "The CPU requires less cache memory", "The CPU can reduce its voltage requirements"],
      correctIndex: 0,
      explanation: "Since SDRAM moves data synchronized with the system clock, the CPU knows when data will be ready and can perform other tasks while SDRAM processes the request."
    },
    {
      question: "If a system uses 64 data bits with Hamming code error correction, what is the percentage increase in memory overhead?",
      options: ["6.25%", "10.94%", "18.75%", "12.50%"],
      correctIndex: 1,
      explanation: "For M=64, K=7 check bits are required, giving an increase of (7/64)×100% = 10.94%."
    },
    {
      question: "In a RAID 5 configuration with 5 disks where parity is distributed across all disks, what is the effective storage capacity if each disk is 1TB?",
      options: ["5TB total capacity", "4TB usable capacity", "3TB usable capacity", "4.5TB usable capacity"],
      correctIndex: 1,
      explanation: "RAID 5 uses one disk's worth of capacity for distributed parity, so 5 disks provide 4TB usable storage (N-1 effective capacity)."
    },
    {
      question: "Why does DRAM require periodic charge refreshing while SRAM does not?",
      options: ["DRAM uses higher voltage levels", "DRAM stores charge on capacitors that leak, while SRAM uses stable flip-flop circuits", "DRAM has larger memory cells", "DRAM operates at higher temperatures"],
      correctIndex: 1,
      explanation: "DRAM stores data as charge on capacitors which can leak away even with power applied, while SRAM uses flip-flop logic-gate configurations that maintain state as long as power is supplied."
    },
    {
      question: "In the Hamming code calculation for an 8-bit word at positions 1-12, which data bits does check bit C2 (position 2) operate on?",
      options: ["D1, D2, D4", "D1, D3, D4", "D2, D3, D4", "All data bits"],
      correctIndex: 1,
      explanation: "C2 at position 010 operates on data bits whose position numbers contain 1 in the second bit position: D1 (position 3=011), D3 (position 6=110), and D4 (position 7=111)."
    },
    {
      question: "What is the fundamental reason glass substrates provide better reliability than aluminum substrates in magnetic disks?",
      options: ["Glass is less expensive to manufacture", "Glass provides improvement in uniformity of magnetic film surface and reduction in surface defects", "Glass allows faster rotation speeds", "Glass has better thermal conductivity"],
      correctIndex: 1,
      explanation: "Glass substrates improve uniformity of the magnetic film surface and significantly reduce overall surface defects, both contributing to reduced read-write errors and increased reliability."
    },
    {
      question: "In error correction, if the syndrome word Z is calculated as 110 (binary 6), what action should be taken?",
      options: ["No correction needed", "Report uncorrectable error", "Correct the bit at position 6", "Recalculate all parity bits"],
      correctIndex: 2,
      explanation: "A non-zero syndrome indicates the position number of the error. Z=110 (binary 6) means bit position 6 is in error and should be inverted."
    },
    {
      question: "Why does RAID 3 provide high data transfer rates but poor I/O request performance?",
      options: ["It uses only one parity disk", "Data is distributed bit-wise requiring all disks for each I/O operation", "It lacks error correction capability", "The parity calculations are too complex"],
      correctIndex: 1,
      explanation: "RAID 3 distributes data in small strips (bit-wise) with parallel access, meaning all disks are involved in each I/O operation, providing high transfer rates but poor individual request performance."
    },
    {
      question: "What is the primary trade-off between EPROM and EEPROM technologies?",
      options: ["EPROM is volatile while EEPROM is non-volatile", "EPROM requires UV erasure and is cheaper/denser; EEPROM allows in-place updates but is more expensive/less dense", "EPROM is faster but EEPROM is more reliable", "EPROM uses more power than EEPROM"],
      correctIndex: 1,
      explanation: "EPROM requires UV light for erasure but is less expensive and denser, while EEPROM can be written without prior erasure but is less dense and more expensive."
    },
    {
      question: "In a cylinder concept for multiple-platter disks, why are all heads mechanically fixed at the same distance from the center?",
      options: ["To reduce manufacturing costs", "To allow simultaneous access to corresponding tracks on all platters, improving parallel I/O performance", "To simplify the motor mechanism", "To prevent head collisions"],
      correctIndex: 1,
      explanation: "Mechanically fixing heads at the same distance allows all corresponding tracks (forming a cylinder) to be accessed simultaneously, enabling parallel I/O operations across multiple platters."
    },
    {
      question: "If RAID 0 stripes data D into blocks D1-D6 across 3 disks and one disk fails, what percentage of data is recoverable?",
      options: ["100% - full recovery possible", "67% - two disks remain", "0% - no redundancy means complete data loss", "33% - one disk's data lost"],
      correctIndex: 2,
      explanation: "RAID 0 provides no redundancy, so any disk failure results in complete data loss as the striped data cannot be reconstructed."
    },
    {
      question: "Why is the inequality 2^K - 1 ≥ M + K critical for Hamming code design?",
      options: ["It ensures enough parity bits to identify any single-bit error location in M data bits plus K check bits", "It minimizes power consumption", "It maximizes storage density", "It reduces computational complexity"],
      correctIndex: 0,
      explanation: "The syndrome word has 2^K possible values; one (zero) indicates no error, leaving 2^K-1 values to uniquely identify which of the M+K total bits is in error."
    },
    {
      question: "What happens when EEPROM is written with new data compared to EPROM?",
      options: ["Both require complete erasure first", "EEPROM can be written without erasing prior contents, EPROM requires UV erasure of all cells first", "EPROM is faster to write than EEPROM", "Both use the same writing mechanism"],
      correctIndex: 1,
      explanation: "EEPROM can be written into at any time without erasing prior contents, while EPROM requires all storage cells to be erased to the same initial state using UV light before writing."
    },
    {
      question: "In CAV formatting, why does low bit density occur on outer tracks and high bit density on inner tracks?",
      options: ["Outer tracks rotate faster", "Bits are spaced equally in angular positions, so outer tracks have more physical space per bit", "Inner tracks have more sectors", "Magnetic properties vary with radius"],
      correctIndex: 1,
      explanation: "With constant angular velocity and fixed bit spacing in angular terms, outer tracks have more physical circumference but the same number of bits as inner tracks, resulting in lower bit density (more wasted space)."
    },
    {
      question: "How does DDR SDRAM achieve twice the transfer speed of regular SDRAM?",
      options: ["It uses a faster clock signal", "It sends data on both rising and falling edges of clock cycle", "It uses wider data buses", "It employs parallel memory channels"],
      correctIndex: 1,
      explanation: "DDR (Double-data-rate) SDRAM can send data twice per clock cycle by transferring on both the rising and falling edges of the clock signal."
    },
    {
      question: "If soft errors are caused by alpha particles from radioactive decay, what characteristic makes them different from hard failures?",
      options: ["Soft errors cause permanent damage while hard failures are temporary", "Soft errors are random and nondestructive, not damaging the memory physically", "Soft errors only occur in DRAM", "Soft errors cannot be corrected"],
      correctIndex: 1,
      explanation: "Soft errors are random, nondestructive events that alter memory contents without damaging the memory itself, unlike hard failures which are permanent physical defects."
    },
    {
      question: "Why does RAID 4 have poor write performance on small requests despite allowing independent disk operations?",
      options: ["All disks must be accessed for writes", "The single parity disk becomes a bottleneck for all write operations", "Data must be written sequentially", "Write operations require double the time"],
      correctIndex: 1,
      explanation: "In RAID 4, every write operation must update the single parity disk, creating a bottleneck even though data disks can operate independently."
    },
    {
      question: "In a Venn diagram implementation of Hamming code with three circles A, B, C, if an error creates inconsistencies in circles A and C but not B, which compartment contains the error?",
      options: ["The center compartment in all three circles", "The compartment that is only in circle B", "The compartment in circles A and C but not B", "The parity bit compartment"],
      correctIndex: 2,
      explanation: "The error is located in the unique compartment that is in both A and C but not in B, as this is the only compartment that would cause parity failures in A and C while maintaining parity in B."
    },
    {
      question: "What fundamental advantage does Flash memory's electrical erasing provide over EPROM's UV erasing?",
      options: ["Higher storage density", "Entire memory can be erased in seconds without removing from circuit", "Lower power consumption", "Better data retention"],
      correctIndex: 1,
      explanation: "Flash memory uses electrical erasing technology allowing entire memory or blocks to be erased in few seconds while in-circuit, unlike EPROM which requires UV light exposure and physical removal."
    },
    {
      question: "Why is SRAM preferred for cache memory despite being more expensive than DRAM?",
      options: ["SRAM has higher density", "SRAM is non-volatile", "SRAM is faster and doesn't require refreshing", "SRAM uses less power"],
      correctIndex: 2,
      explanation: "SRAM is faster than DRAM and holds data without requiring periodic refresh cycles, making it ideal for cache memory where speed is critical despite higher cost."
    },
    {
      question: "In the compare circuit for error detection, what does each bit of the syndrome word indicate when comparing inputs X and Y?",
      options: ["The parity of that position", "Whether there is a match (0) or mismatch (1) in that bit position", "The data value at that position", "The error correction code"],
      correctIndex: 1,
      explanation: "The syndrome is calculated using XOR, where each bit is 0 for a match and 1 for a mismatch between corresponding positions in X and Y."
    },
    {
      question: "Why does increasing data word size from 4 bits to 256 bits reduce error correction overhead from 75% to only 3.52%?",
      options: ["Larger words have fewer errors", "The relationship 2^K-1 ≥ M+K means check bits grow logarithmically while data bits grow linearly", "Parity becomes more efficient", "Error detection is disabled"],
      correctIndex: 1,
      explanation: "Check bits (K) grow logarithmically (log2 of M) while data bits (M) grow linearly, so the ratio K/M decreases significantly as M increases, reducing overhead percentage."
    },
    {
      question: "What is the significance of positioning check bits at powers-of-2 positions in Hamming code?",
      options: ["It makes calculations faster", "Each check bit's position number has only one '1' bit, allowing it to uniquely cover specific data bit positions", "It reduces memory requirements", "It simplifies hardware implementation"],
      correctIndex: 1,
      explanation: "Power-of-2 positions (1, 2, 4, 8...) have only one '1' bit in binary, allowing each check bit to cover a unique pattern of data bits based on binary position encoding."
    },
    {
      question: "If RAID 6 requires N+2 disks and provides protection against three-disk failure, what is the storage efficiency compared to RAID 5's N+1 requirement?",
      options: ["RAID 6 is more efficient", "Both have equal efficiency", "RAID 5 is more efficient with higher usable capacity ratio", "Efficiency depends on N value"],
      correctIndex: 2,
      explanation: "RAID 5 uses 1 disk for parity (N-1)/N efficiency, while RAID 6 uses 2 disks for dual parity (N-2)/N efficiency, making RAID 5 more storage-efficient but less fault-tolerant."
    },
    {
      question: "Why does magnetic tape remain relevant despite being the slowest member of the memory hierarchy?",
      options: ["It provides random access capability", "It's very cheap and suitable for sequential backup/archival storage", "It has the highest data density", "It's the most reliable medium"],
      correctIndex: 1,
      explanation: "Magnetic tape's extreme low cost makes it ideal for backup and archival purposes where sequential access is acceptable and storage capacity is more important than speed."
    },
    {
      question: "In ROM fabrication, why is 'one bit wrong' catastrophic for the entire batch?",
      options: ["ROM can be rewritten multiple times", "ROM is written during manufacturing with high fixed costs and no error correction capability", "ROM is too expensive to test", "ROM degradation spreads to other chips"],
      correctIndex: 1,
      explanation: "ROM data insertion during fabrication has a large fixed cost, and since ROMs cannot be modified after manufacturing, a single bit error requires discarding the entire batch."
    },
    {
      question: "How does the relationship between bit position and check bit coverage work in Hamming code (e.g., C1 covering D1, D2, D4)?",
      options: ["Random assignment for redundancy", "Each check bit covers data bits whose position numbers have '1' in the same binary position as the check bit's position", "Check bits cover adjacent data bits", "Coverage is determined by physical distance"],
      correctIndex: 1,
      explanation: "C1 at position 001 covers data bits with '1' in the rightmost position (D1=011, D2=101, D4=111); the binary encoding creates systematic coverage patterns."
    },
    {
      question: "What operational difference allows RAID 4 disks to be available for other I/O requests unlike RAID 3?",
      options: ["RAID 4 has no parity disk", "RAID 4 uses large block-wise strips allowing independent disk operation, while RAID 3's bit-wise distribution requires all disks", "RAID 4 operates faster", "RAID 4 uses fewer disks"],
      correctIndex: 1,
      explanation: "RAID 4's large strips (16k-32k) allow each disk to operate independently for single I/O operations, while RAID 3's bit-wise striping requires parallel access to all disks for every operation."
    },
    {
      question: "Why is the threshold value critical in DRAM operation?",
      options: ["It determines refresh rate", "It distinguishes between binary 1 and 0 in an analog capacitor charge", "It sets the voltage level", "It controls access speed"],
      correctIndex: 1,
      explanation: "Since DRAM is essentially an analog device storing variable charge values, a threshold determines whether the capacitor charge is interpreted as binary 1 or 0."
    },
    {
      question: "In a 12-bit Hamming code system (positions 1-12) with 8 data bits, if syndrome calculation yields 0011 (binary 3), what needs correction?",
      options: ["Check bit C1", "Check bit C2", "Data bit at position 3 (D1)", "No correction needed"],
      correctIndex: 2,
      explanation: "Non-zero syndrome 0011 (decimal 3) indicates bit position 3 is in error, which contains data bit D1 in the standard Hamming code layout."
    },
    {
      question: "What makes intertrack gaps essential for reliable disk operation despite reducing storage capacity?",
      options: ["They improve rotation speed", "They prevent or minimize errors from head misalignment and magnetic field interference", "They reduce power consumption", "They allow faster seeks"],
      correctIndex: 1,
      explanation: "Intertrack gaps sacrifice some storage capacity but are essential to prevent errors due to head misalignment or magnetic field interference between adjacent tracks."
    },
    {
      question: "Why does RAID 1 mirroring result in 'no down time' during recovery?",
      options: ["Recovery is automated", "Data exists on the mirror disk, allowing immediate access while faulty disk is swapped", "RAID 1 never fails", "Hot spare activation is instant"],
      correctIndex: 1,
      explanation: "Since data is duplicated on mirrored disks, the system can continue operating from the functioning mirror while the faulty disk is swapped and re-mirrored without downtime."
    },
    {
      question: "What principle allows PROM to be 'a less expensive alternative for ROM' while providing flexibility?",
      options: ["PROM uses cheaper materials", "PROM eliminates the high fixed manufacturing cost by allowing electrical programming after fabrication", "PROM has lower density", "PROM requires less testing"],
      correctIndex: 1,
      explanation: "PROM avoids ROM's high fixed fabrication cost by being electrically programmable after manufacturing, allowing suppliers or customers to program it later, providing flexibility at lower cost."
    },
    {
      question: "In multiple zone recording with 5 zones and 15 tracks, why do middle zones have 12 sectors while outermost zones have 16 sectors?",
      options: ["Random distribution", "Zones remoter from center have longer circumference allowing more sectors while maintaining bit density", "Manufacturing limitations", "Speed optimization"],
      correctIndex: 1,
      explanation: "Outer zones have greater circumference, allowing more sectors per track while maintaining consistent linear bit density within each zone, maximizing overall storage capacity."
    },
    {
      question: "What fundamental limitation prevents RAID 5 from recovering data when two disks fail simultaneously?",
      options: ["Insufficient parity calculations", "RAID 5 uses only single parity per stripe, requiring N-1 disks to reconstruct the Nth disk", "Controller limitations", "Power requirements"],
      correctIndex: 1,
      explanation: "RAID 5 distributes single parity across disks, allowing reconstruction of one missing disk from N-1 surviving disks; two simultaneous failures leave insufficient information for reconstruction."
    },
    {
      question: "Why does the ECC controller perform the 'same calculation' on read data and compare it to stored ECC?",
      options: ["To verify controller functionality", "To detect if data corruption occurred by checking if recalculated code matches stored code", "To update the code", "To refresh memory"],
      correctIndex: 1,
      explanation: "Performing the same calculation on read data and comparing to the stored ECC code reveals discrepancies (syndrome word) indicating data corruption occurred between write and read operations."
    },
    {
      question: "What makes Flash memory 'intermediate' between EPROM and EEPROM beyond just cost?",
      options: ["Flash uses both UV and electrical erasing", "Flash provides electrical erasure like EEPROM but at block-level rather than byte-level like EEPROM", "Flash has medium density", "Flash speed is between them"],
      correctIndex: 1,
      explanation: "Flash memory provides electrical erasing (like EEPROM) making it more convenient than EPROM's UV erasing, but only at block-level rather than EEPROM's byte-level, placing it functionally intermediate."
    },
    {
      question: "How does the fixed-head disk design trade-off manifest in modern systems?",
      options: ["Fixed-head is slower but cheaper", "Fixed-head provides faster access but is rare due to cost/complexity of one head per track", "Fixed-head is more reliable", "Fixed-head uses less power"],
      correctIndex: 1,
      explanation: "Fixed-head disks eliminate seek time with one head per track, providing faster access, but the cost and mechanical complexity of multiple heads make them rare in modern systems."
    },
    {
      question: "Why is RAID 2's use of Hamming code considered redundant in modern systems?",
      options: ["RAID 2 is too slow", "Most modern disks incorporate ECC already, making RAID-level Hamming code unnecessary", "RAID 2 requires too many disks", "RAID 2 cannot correct errors"],
      correctIndex: 1,
      explanation: "RAID 2 is no longer used because modern disk drives already incorporate internal ECC (Error Correcting Code), making the RAID-level Hamming code implementation redundant and inefficient."
    }
  ]
}