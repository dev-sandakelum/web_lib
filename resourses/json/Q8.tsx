export const PhysicalLayerQuiz = {
  id: "n3",
  title: "Physical Layer ",
  category: "Computer Networks",
  questions: [
    {
      question: "Who proved that any periodic function can be constructed as the sum of sines and cosines?",
      options: [
        "Isaac Newton",
        "Jean-Baptiste Fourier",
        "Albert Einstein",
        "Claude Shannon",
      ],
      correctIndex: 1,
    },
    {
      question: "According to Nyquist Theorem, what is the maximum data rate formula for a noiseless channel?",
      options: [
        "H log₂ V bits per second",
        "2H log₂ V bits per second",
        "H log₂ (1 + S/N) bps",
        "2H (1 + S/N) bps",
      ],
      correctIndex: 1,
    },
    {
      question: "In the Nyquist formula, what does H represent?",
      options: [
        "Height of signal",
        "Harmonic frequency",
        "Frequency (bandwidth)",
        "Humidity factor",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the maximum data rate for a noiseless channel with H = 3 kHz and V = 2?",
      options: [
        "3000 bps",
        "6000 bps",
        "9000 bps",
        "12000 bps",
      ],
      correctIndex: 1,
    },
    {
      question: "What does SNR stand for?",
      options: [
        "System Noise Reduction",
        "Signal-to-Noise Ratio",
        "Standard Network Rating",
        "Secure Network Response",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the formula for maximum data rate when noise is present?",
      options: [
        "2H log₂ V bps",
        "H × S/N bps",
        "H log₂ (1 + S/N) bps",
        "2H (S/N) bps",
      ],
      correctIndex: 2,
    },
    {
      question: "A noiseless channel with bandwidth 4000 Hz transmitting four signal levels has what maximum bit rate?",
      options: [
        "8000 bps",
        "16000 bps",
        "32000 bps",
        "4000 bps",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the transmission media in a data transmission system?",
      options: [
        "Software that processes data",
        "Physical path between transmitter and receiver",
        "Digital signal converter",
        "Network protocol",
      ],
      correctIndex: 1,
    },
    {
      question: "Where is transmission media located in relation to the OSI model?",
      options: [
        "Within the physical layer",
        "Between physical and data link layers",
        "Below the physical layer",
        "Above the physical layer",
      ],
      correctIndex: 2,
    },
    {
      question: "Which of the following is NOT a type of guided media?",
      options: [
        "Twisted pair cable",
        "Coaxial cable",
        "Fiber optics",
        "Radio transmission",
      ],
      correctIndex: 3,
    },
    {
      question: "What is the primary purpose of twisting wires in a twisted pair cable?",
      options: [
        "To make it look attractive",
        "To reduce or cancel electromagnetic interference (EMI)",
        "To increase voltage",
        "To reduce cable cost",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two conductors in a twisted pair cable typically made of?",
      options: [
        "Aluminum",
        "Copper",
        "Gold",
        "Silver",
      ],
      correctIndex: 1,
    },
    {
      question: "Which type of twisted pair cable has no shield?",
      options: [
        "STP",
        "UTP",
        "Coaxial",
        "Fiber optic",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a major disadvantage of Unshielded Twisted Pair (UTP) cable?",
      options: [
        "Too expensive",
        "Difficult to install",
        "Badly affected by noise interference",
        "Too heavy",
      ],
      correctIndex: 2,
    },
    {
      question: "What does STP cable use to reduce interference?",
      options: [
        "Thicker copper wire",
        "Metal foil to cover each pair of conductors",
        "Plastic insulation only",
        "Air gaps",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the maximum data rate of UTP cable?",
      options: [
        "10-100 Mbps",
        "150 Mbps",
        "1 Gbps",
        "10 Gbps",
      ],
      correctIndex: 0,
    },
    {
      question: "What is the maximum cable length for UTP?",
      options: [
        "50 meters",
        "100 meters",
        "500 meters",
        "1000 meters",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the maximum cable length for STP?",
      options: [
        "100 meters",
        "200 meters",
        "500 meters",
        "1000 meters",
      ],
      correctIndex: 2,
    },
    {
      question: "Which layer is NOT part of a coaxial cable construction?",
      options: [
        "Copper conductor",
        "Insulation layer of plastic foam",
        "Metal foil pairs",
        "Wire mesh tube or metallic foil shield",
      ],
      correctIndex: 2,
    },
    {
      question: "What advantage does coaxial cable have over twisted pair?",
      options: [
        "Cheaper cost",
        "Easier installation",
        "Can be used over longer distances",
        "More flexible",
      ],
      correctIndex: 2,
    },
    {
      question: "What does the braided mesh in coaxial cable help prevent?",
      options: [
        "Physical damage",
        "Water damage",
        "Signal interference or cross-talk",
        "Heat buildup",
      ],
      correctIndex: 2,
    },
    {
      question: "Which applications commonly use coaxial cable?",
      options: [
        "Telephone lines only",
        "Cable TV and LANs",
        "Mobile networks only",
        "Satellite communications only",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the core of an optical fiber made of?",
      options: [
        "Copper",
        "Aluminum",
        "High quality silica glass or plastic",
        "Steel",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the protective outer covering of optical fiber called?",
      options: [
        "Shield",
        "Cladding",
        "Buffer",
        "Insulator",
      ],
      correctIndex: 2,
    },
    {
      question: "How does the refractive index of cladding compare to the core in optical fiber?",
      options: [
        "Higher than the core",
        "Equal to the core",
        "Lower than the core",
        "Variable depending on light",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the maximum segment length of single node fiber optic cable?",
      options: [
        "100 meters",
        "500 meters",
        "2 kilometers",
        "10 kilometers",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the bandwidth capacity of multi-node fiber optic cable?",
      options: [
        "Up to 100 Mbps",
        "Up to 1 Gbps",
        "Up to 2 Gbps",
        "Up to 10 Gbps",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is NOT an advantage of fiber optic cables?",
      options: [
        "High bandwidth",
        "Immune to electromagnetic interference",
        "Low installation cost",
        "Can travel long distances without weakening",
      ],
      correctIndex: 2,
    },
    {
      question: "Why are two frequencies required for full duplex transmission in fiber optics?",
      options: [
        "To increase speed",
        "Because light waves are unidirectional",
        "To reduce cost",
        "To improve signal quality",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of media is wireless communication classified as?",
      options: [
        "Guided media",
        "Unguided media",
        "Shielded media",
        "Coaxial media",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a method of unguided signal propagation?",
      options: [
        "Ground propagation",
        "Sky propagation",
        "Line of sight propagation",
        "Cable propagation",
      ],
      correctIndex: 3,
    },
    {
      question: "What frequency range is used in ground propagation?",
      options: [
        "Lower than 2 MHz",
        "2-10 MHz",
        "10-100 MHz",
        "Above 100 MHz",
      ],
      correctIndex: 0,
    },
    {
      question: "Where are radio waves reflected in sky propagation?",
      options: [
        "Ground surface",
        "Clouds",
        "Ionosphere",
        "Buildings",
      ],
      correctIndex: 2,
    },
    {
      question: "What characteristic do radio waves have regarding antennas?",
      options: [
        "Unidirectional",
        "Omnidirectional",
        "Bidirectional",
        "Multidirectional",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the frequency range for radio waves?",
      options: [
        "1 Hz to 1 kHz",
        "3 kHz to 1 GHz",
        "1 GHz to 10 GHz",
        "10 GHz to 100 GHz",
      ],
      correctIndex: 1,
    },
    {
      question: "What frequency range do microwaves operate in?",
      options: [
        "1 kHz to 1 MHz",
        "1 MHz to 1 GHz",
        "1 to 300 GHz",
        "300 GHz to 400 THz",
      ],
      correctIndex: 2,
    },
    {
      question: "Are microwaves directional or omnidirectional?",
      options: [
        "Omnidirectional",
        "Unidirectional",
        "Bidirectional",
        "Nondirectional",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the frequency range for infrared waves?",
      options: [
        "1 to 300 GHz",
        "300 MHz to 300 GHz",
        "300 GHz to 400 THz",
        "400 THz to 800 THz",
      ],
      correctIndex: 2,
    },
    {
      question: "Can infrared waves penetrate walls?",
      options: [
        "Yes, easily",
        "Yes, but weakly",
        "No, they cannot",
        "Only concrete walls",
      ],
      correctIndex: 2,
    },
    {
      question: "What is an advantage of infrared transmission's inability to penetrate walls?",
      options: [
        "Stronger signal strength",
        "Prevents interference between systems in different rooms",
        "Increases transmission range",
        "Reduces equipment cost",
      ],
      correctIndex: 1,
    },
  ],
};

export const ComputerNetworksQuiz = {
  id: "computer-networks-physical",
  title: "Physical Layer & Data Communication",
  category: "Computer Networks",
  questions: [
    {
      question: "Who proved that any periodic function can be constructed as the sum of sines and cosines?",
      options: ["Isaac Newton", "Jean-Baptiste Fourier", "Albert Einstein", "Claude Shannon"],
      correctIndex: 1,
    },
    {
      question: "According to Nyquist Theorem, what is the maximum data rate formula for a noiseless channel?",
      options: ["H log₂ V bits per second", "2H log₂ V bits per second", "H log₂ (1 + S/N) bps", "2H (1 + S/N) bps"],
      correctIndex: 1,
    },
    {
      question: "In the Nyquist formula, what does H represent?",
      options: ["Height of signal", "Harmonic frequency", "Frequency (bandwidth)", "Humidity factor"],
      correctIndex: 2,
    },
    {
      question: "What is the maximum data rate for a noiseless channel with H = 3 kHz and V = 2?",
      options: ["3000 bps", "6000 bps", "9000 bps", "12000 bps"],
      correctIndex: 1,
    },
    {
      question: "What does SNR stand for?",
      options: ["System Noise Reduction", "Signal-to-Noise Ratio", "Standard Network Rating", "Secure Network Response"],
      correctIndex: 1,
    },
    {
      question: "What is the formula for maximum data rate when noise is present?",
      options: ["2H log₂ V bps", "H × S/N bps", "H log₂ (1 + S/N) bps", "2H (S/N) bps"],
      correctIndex: 2,
    },
    {
      question: "A noiseless channel with bandwidth 4000 Hz transmitting four signal levels has what maximum bit rate?",
      options: ["8000 bps", "16000 bps", "32000 bps", "4000 bps"],
      correctIndex: 1,
    },
    {
      question: "What is the transmission media in a data transmission system?",
      options: ["Software that processes data", "Physical path between transmitter and receiver", "Digital signal converter", "Network protocol"],
      correctIndex: 1,
    },
    {
      question: "Where is transmission media located in relation to the OSI model?",
      options: ["Within the physical layer", "Between physical and data link layers", "Below the physical layer", "Above the physical layer"],
      correctIndex: 2,
    },
    {
      question: "Which of the following is NOT a type of guided media?",
      options: ["Twisted pair cable", "Coaxial cable", "Fiber optics", "Radio transmission"],
      correctIndex: 3,
    },
    {
      question: "What is the primary purpose of twisting wires in a twisted pair cable?",
      options: ["To make it look attractive", "To reduce or cancel electromagnetic interference (EMI)", "To increase voltage", "To reduce cable cost"],
      correctIndex: 1,
    },
    {
      question: "What are the two conductors in a twisted pair cable typically made of?",
      options: ["Aluminum", "Copper", "Gold", "Silver"],
      correctIndex: 1,
    },
    {
      question: "Which type of twisted pair cable has no shield?",
      options: ["STP", "UTP", "Coaxial", "Fiber optic"],
      correctIndex: 1,
    },
    {
      question: "What is a major disadvantage of Unshielded Twisted Pair (UTP) cable?",
      options: ["Too expensive", "Difficult to install", "Badly affected by noise interference", "Too heavy"],
      correctIndex: 2,
    },
    {
      question: "What does STP cable use to reduce interference?",
      options: ["Thicker copper wire", "Metal foil to cover each pair of conductors", "Plastic insulation only", "Air gaps"],
      correctIndex: 1,
    },
    {
      question: "What is the maximum data rate of UTP cable?",
      options: ["10-100 Mbps", "150 Mbps", "1 Gbps", "10 Gbps"],
      correctIndex: 0,
    },
    {
      question: "What is the maximum cable length for UTP?",
      options: ["50 meters", "100 meters", "500 meters", "1000 meters"],
      correctIndex: 1,
    },
    {
      question: "What is the maximum cable length for STP?",
      options: ["100 meters", "200 meters", "500 meters", "1000 meters"],
      correctIndex: 2,
    },
    {
      question: "Which layer is NOT part of a coaxial cable construction?",
      options: ["Copper conductor", "Insulation layer of plastic foam", "Metal foil pairs", "Wire mesh tube or metallic foil shield"],
      correctIndex: 2,
    },
    {
      question: "What advantage does coaxial cable have over twisted pair?",
      options: ["Cheaper cost", "Easier installation", "Can be used over longer distances", "More flexible"],
      correctIndex: 2,
    },
    {
      question: "What does the braided mesh in coaxial cable help prevent?",
      options: ["Physical damage", "Water damage", "Signal interference or cross-talk", "Heat buildup"],
      correctIndex: 2,
    },
    {
      question: "Which applications commonly use coaxial cable?",
      options: ["Telephone lines only", "Cable TV and LANs", "Mobile networks only", "Satellite communications only"],
      correctIndex: 1,
    },
    {
      question: "What is the core of an optical fiber made of?",
      options: ["Copper", "Aluminum", "High quality silica glass or plastic", "Steel"],
      correctIndex: 2,
    },
    {
      question: "What is the protective outer covering of optical fiber called?",
      options: ["Shield", "Cladding", "Buffer", "Insulator"],
      correctIndex: 2,
    },
    {
      question: "How does the refractive index of cladding compare to the core in optical fiber?",
      options: ["Higher than the core", "Equal to the core", "Lower than the core", "Variable depending on light"],
      correctIndex: 2,
    },
    {
      question: "What is the maximum segment length of single node fiber optic cable?",
      options: ["100 meters", "500 meters", "2 kilometers", "10 kilometers"],
      correctIndex: 2,
    },
    {
      question: "What is the bandwidth capacity of multi-node fiber optic cable?",
      options: ["Up to 100 Mbps", "Up to 1 Gbps", "Up to 2 Gbps", "Up to 10 Gbps"],
      correctIndex: 2,
    },
    {
      question: "Which is NOT an advantage of fiber optic cables?",
      options: ["High bandwidth", "Immune to electromagnetic interference", "Low installation cost", "Can travel long distances without weakening"],
      correctIndex: 2,
    },
    {
      question: "Why are two frequencies required for full duplex transmission in fiber optics?",
      options: ["To increase speed", "Because light waves are unidirectional", "To reduce cost", "To improve signal quality"],
      correctIndex: 1,
    },
    {
      question: "What type of media is wireless communication classified as?",
      options: ["Guided media", "Unguided media", "Shielded media", "Coaxial media"],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a method of unguided signal propagation?",
      options: ["Ground propagation", "Sky propagation", "Line of sight propagation", "Cable propagation"],
      correctIndex: 3,
    },
    {
      question: "What frequency range is used in ground propagation?",
      options: ["Lower than 2 MHz", "2-10 MHz", "10-100 MHz", "Above 100 MHz"],
      correctIndex: 0,
    },
    {
      question: "Where are radio waves reflected in sky propagation?",
      options: ["Ground surface", "Clouds", "Ionosphere", "Buildings"],
      correctIndex: 2,
    },
    {
      question: "What characteristic do radio waves have regarding antennas?",
      options: ["Unidirectional", "Omnidirectional", "Bidirectional", "Multidirectional"],
      correctIndex: 1,
    },
    {
      question: "What is the frequency range for radio waves?",
      options: ["1 Hz to 1 kHz", "3 kHz to 1 GHz", "1 GHz to 10 GHz", "10 GHz to 100 GHz"],
      correctIndex: 1,
    },
    {
      question: "What frequency range do microwaves operate in?",
      options: ["1 kHz to 1 MHz", "1 MHz to 1 GHz", "1 to 300 GHz", "300 GHz to 400 THz"],
      correctIndex: 2,
    },
    {
      question: "Are microwaves directional or omnidirectional?",
      options: ["Omnidirectional", "Unidirectional", "Bidirectional", "Nondirectional"],
      correctIndex: 1,
    },
    {
      question: "What is the frequency range for infrared waves?",
      options: ["1 to 300 GHz", "300 MHz to 300 GHz", "300 GHz to 400 THz", "400 THz to 800 THz"],
      correctIndex: 2,
    },
    {
      question: "Can infrared waves penetrate walls?",
      options: ["Yes, easily", "Yes, but weakly", "No, they cannot", "Only concrete walls"],
      correctIndex: 2,
    },
    {
      question: "What is an advantage of infrared transmission's inability to penetrate walls?",
      options: ["Stronger signal strength", "Prevents interference between systems in different rooms", "Increases transmission range", "Reduces equipment cost"],
      correctIndex: 1,
    },
  ],
};

export const DataLinkMACQuiz = {
  id: "n4",
  title: "Data Link Layer & Medium Access Control",
  category: "Computer Networks",
  questions: [
    {
      question: "Which of the following is NOT a design issue of the Data Link Layer?",
      options: [
        "Service provided to the Network Layer",
        "Framing",
        "Routing",
        "Error Control",
      ],
      correctIndex: 2,
    },
    {
      question: "What type of service has no connection establishment and sends independent frames?",
      options: [
        "Acknowledged Connection Oriented",
        "Unacknowledged Connectionless",
        "Acknowledged Connectionless",
        "Connection Oriented",
      ],
      correctIndex: 1,
    },
    {
      question: "Which service is used when the error rate is low?",
      options: [
        "Acknowledged Connection Oriented",
        "Acknowledged Connectionless",
        "Unacknowledged Connectionless",
        "All of the above",
      ],
      correctIndex: 2,
    },
    {
      question: "Which protocols use Acknowledged Connection Oriented service?",
      options: [
        "UDP, ICMP",
        "HTTP, FTP, SMTP",
        "ARP, RARP",
        "IGMP, GGP",
      ],
      correctIndex: 1,
    },
    {
      question: "What does Flow Control restrict?",
      options: [
        "The type of data sent",
        "The amount of data the sender can send before waiting for acknowledgment",
        "The number of devices on network",
        "The network topology",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of Error Control?",
      options: [
        "To increase transmission speed",
        "To detect and correct errors during transmission",
        "To reduce network cost",
        "To manage network users",
      ],
      correctIndex: 1,
    },
    {
      question: "What is Framing in the Data Link Layer?",
      options: [
        "Physical layer encryption",
        "Translation of raw bits into discrete units called frames",
        "Network addressing",
        "Router configuration",
      ],
      correctIndex: 1,
    },
    {
      question: "How many types of frames are there?",
      options: [
        "One",
        "Two",
        "Three",
        "Four",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two types of frames?",
      options: [
        "Small and Large",
        "Fast and Slow",
        "Fixed Length and Variable Length",
        "Static and Dynamic",
      ],
      correctIndex: 2,
    },
    {
      question: "If 200 bits of data need to be transmitted using fixed length frames of 10 bits each, how many frames are needed?",
      options: [
        "10 frames",
        "20 frames",
        "30 frames",
        "40 frames",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a framing method?",
      options: [
        "Character Count",
        "Flag byte with Byte Stuffing",
        "Bit Stuffing",
        "Protocol Stuffing",
      ],
      correctIndex: 3,
    },
    {
      question: "What does a field in the header specify in Character Count method?",
      options: [
        "The type of data",
        "The number of characters in the frame",
        "The sender's address",
        "The priority level",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the main drawback of Character Count method?",
      options: [
        "Too slow",
        "Too expensive",
        "If count is garbled by transmission error, destination cannot decide frames",
        "Requires special hardware",
      ],
      correctIndex: 2,
    },
    {
      question: "What does the sender insert before each accidental flag byte in Flag Byte Stuffing?",
      options: [
        "A start byte",
        "An escape byte (ESC)",
        "A stop byte",
        "A control byte",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the receiver do with escape bytes in Flag Byte Stuffing?",
      options: [
        "Stores them",
        "Ignores them",
        "Removes them before giving data to network layer",
        "Forwards them to physical layer",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the flag byte pattern used in Bit Stuffing?",
      options: [
        "11111111",
        "01111110",
        "10101010",
        "00000000",
      ],
      correctIndex: 1,
    },
    {
      question: "In Bit Stuffing, when does the sender automatically stuff a 0 bit?",
      options: [
        "After three consecutive 1s",
        "After four consecutive 1s",
        "After five consecutive 1s",
        "After six consecutive 1s",
      ],
      correctIndex: 2,
    },
    {
      question: "If the user data contains 01111110, how is it transmitted in Bit Stuffing?",
      options: [
        "01111110",
        "011111010",
        "011111100",
        "001111110",
      ],
      correctIndex: 1,
    },
    {
      question: "What does Physical Layer Coding Violations use to mark frame boundaries?",
      options: [
        "Special bytes",
        "Flag patterns",
        "Combinations like low-low and high-high not used for data",
        "Parity bits",
      ],
      correctIndex: 2,
    },
    {
      question: "What is an error in data transmission?",
      options: [
        "When transmission is slow",
        "When output information does not match input information",
        "When network is congested",
        "When devices are offline",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT an error detection method?",
      options: [
        "Parity Check",
        "Checksum",
        "Cyclic Redundancy Check",
        "Binary Search",
      ],
      correctIndex: 3,
    },
    {
      question: "What method is used for both error detection and correction?",
      options: [
        "Parity Check",
        "Checksum",
        "Hamming Code",
        "CRC only",
      ],
      correctIndex: 2,
    },
    {
      question: "What is a parity bit?",
      options: [
        "A bit for encryption",
        "A bit added to indicate if number of 1s is even or odd",
        "A bit for compression",
        "A bit for addressing",
      ],
      correctIndex: 1,
    },
    {
      question: "In Even parity, if data is 0110000, what is the parity bit?",
      options: [
        "0",
        "1",
        "Depends on protocol",
        "Not applicable",
      ],
      correctIndex: 1,
    },
    {
      question: "Who gave the Hamming Code?",
      options: [
        "Claude Shannon",
        "R.W. Hamming",
        "Jean-Baptiste Fourier",
        "Nikola Tesla",
      ],
      correctIndex: 1,
    },
    {
      question: "How many bit Hamming code is commonly used?",
      options: [
        "5 bit",
        "6 bit",
        "7 bit",
        "8 bit",
      ],
      correctIndex: 2,
    },
    {
      question: "In Hamming Code, which bit positions are marked as parity bits?",
      options: [
        "All odd positions",
        "All even positions",
        "Powers of 2 (1, 2, 4, 8, etc)",
        "Multiples of 3",
      ],
      correctIndex: 2,
    },
    {
      question: "Why do we need the MAC layer?",
      options: [
        "To encrypt data",
        "To handle collisions when multiple devices share the same medium",
        "To increase bandwidth",
        "To reduce cable costs",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens when devices transmit data at the same time?",
      options: [
        "Data is compressed",
        "Speed increases",
        "Signals collide and data is lost",
        "Network expands",
      ],
      correctIndex: 2,
    },
    {
      question: "The Data Link Layer is divided into how many sublayers?",
      options: [
        "One",
        "Two",
        "Three",
        "Four",
      ],
      correctIndex: 1,
    },
    {
      question: "What does LLC stand for?",
      options: [
        "Link Layer Control",
        "Logical Link Control",
        "Local Link Communication",
        "Layer Link Connection",
      ],
      correctIndex: 1,
    },
    {
      question: "What does MAC stand for?",
      options: [
        "Media Access Control",
        "Multiple Access Communication",
        "Medium Access Control",
        "Message Access Control",
      ],
      correctIndex: 2,
    },
    {
      question: "Which sublayer identifies which network protocol is carried in the frame?",
      options: [
        "MAC",
        "LLC",
        "Physical",
        "Network",
      ],
      correctIndex: 1,
    },
    {
      question: "Which sublayer assigns each device a unique identifier?",
      options: [
        "LLC",
        "MAC",
        "Network",
        "Transport",
      ],
      correctIndex: 1,
    },
    {
      question: "What does FCS stand for in MAC layer?",
      options: [
        "Frame Control System",
        "File Check Sequence",
        "Frame Check Sequence",
        "Forward Control Signal",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is NOT a function of the MAC layer?",
      options: [
        "Frame Encapsulation",
        "Addressing",
        "Routing between networks",
        "Error Detection",
      ],
      correctIndex: 2,
    },
    {
      question: "What type of addresses does MAC layer support?",
      options: [
        "Only unicast",
        "Only broadcast",
        "Unicast, broadcast, and multicast",
        "Only multicast",
      ],
      correctIndex: 2,
    },
    {
      question: "How many categories of Medium Access Protocols are there?",
      options: [
        "Two",
        "Three",
        "Four",
        "Five",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a category of Medium Access Protocols?",
      options: [
        "Random Access",
        "Controlled Access",
        "Channelization",
        "Distributed Access",
      ],
      correctIndex: 3,
    },
    {
      question: "In Random Access methods, how are stations treated?",
      options: [
        "Hierarchically",
        "All stations are treated equally",
        "Based on priority",
        "First come first served",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a Random Access Protocol?",
      options: [
        "ALOHA",
        "CSMA",
        "CSMA/CD",
        "Token Passing",
      ],
      correctIndex: 3,
    },
    {
      question: "In Controlled Access, what must a station do before sending?",
      options: [
        "Send immediately",
        "Wait random time",
        "Be authorized by other stations",
        "Check for errors",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is a Controlled Access Protocol?",
      options: [
        "ALOHA",
        "CSMA",
        "Polling",
        "CSMA/CA",
      ],
      correctIndex: 2,
    },
    {
      question: "What does FDMA stand for?",
      options: [
        "Frequency-Division Multiple Access",
        "Frame-Division Multiple Access",
        "Fast-Division Multiple Access",
        "Full-Duplex Multiple Access",
      ],
      correctIndex: 0,
    },
    {
      question: "Where was ALOHA protocol developed?",
      options: [
        "MIT",
        "Stanford University",
        "University of Hawaii",
        "Carnegie Mellon",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the efficiency of Pure ALOHA?",
      options: [
        "~18%",
        "~36%",
        "~50%",
        "~75%",
      ],
      correctIndex: 0,
    },
    {
      question: "What is the efficiency of Slotted ALOHA?",
      options: [
        "~18%",
        "~36%",
        "~50%",
        "~75%",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the basic concept of CSMA?",
      options: [
        "Transmit immediately",
        "Sense before transmit or listen before talk",
        "Wait for token",
        "Use polling",
      ],
      correctIndex: 1,
    },
    {
      question: "In 1-Persistent CSMA, what happens if the channel is idle?",
      options: [
        "Wait random time",
        "Send the frame immediately",
        "Check again",
        "Request permission",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the main disadvantage of 1-Persistent CSMA?",
      options: [
        "Too slow",
        "High risk of collision",
        "Complex implementation",
        "Requires special hardware",
      ],
      correctIndex: 1,
    },
    {
      question: "In Non-Persistent CSMA, what happens if the channel is busy?",
      options: [
        "Wait continuously",
        "Transmit immediately",
        "Wait random time then sense again",
        "Give up transmission",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the advantage of Non-Persistent CSMA?",
      options: [
        "Faster transmission",
        "Reduces chances of collision",
        "Simpler implementation",
        "No waiting time",
      ],
      correctIndex: 1,
    },
    {
      question: "In P-Persistent CSMA, with what probability does the station send its frame?",
      options: [
        "Always 1",
        "Always 0.5",
        "Probability p",
        "Random probability",
      ],
      correctIndex: 2,
    },
    {
      question: "Where is P-Persistent CSMA used?",
      options: [
        "Ethernet only",
        "Token Ring",
        "Wi-Fi and packet radio systems",
        "Fiber optics",
      ],
      correctIndex: 2,
    },
    {
      question: "What does CSMA/CD stand for?",
      options: [
        "Carrier Sense Multiple Access with Collision Detection",
        "Carrier Signal Multiple Access with Connection Detection",
        "Central System Multiple Access with Collision Detection",
        "Carrier Sense Media Access with Connection Detection",
      ],
      correctIndex: 0,
    },
    {
      question: "What is CSMA/CD also known as?",
      options: [
        "Listen-Before-Talk",
        "Listen-While-Talk",
        "Listen-After-Talk",
        "Talk-Before-Listen",
      ],
      correctIndex: 1,
    },
    {
      question: "What signal is sent when collision is detected in CSMA/CD?",
      options: [
        "Stop signal",
        "Error signal",
        "Jamming signal",
        "Reset signal",
      ],
      correctIndex: 2,
    },
    {
      question: "How many bits is the jamming signal in CSMA/CD?",
      options: [
        "32 bits",
        "48 bits",
        "64 bits",
        "128 bits",
      ],
      correctIndex: 1,
    },
    {
      question: "What backoff algorithm is used in CSMA/CD?",
      options: [
        "Linear backoff",
        "Binary exponential backoff",
        "Quadratic backoff",
        "Random backoff",
      ],
      correctIndex: 1,
    },
    {
      question: "Where is CSMA/CA primarily used?",
      options: [
        "Wired networks",
        "Wireless networks",
        "Fiber optic networks",
        "Satellite networks",
      ],
      correctIndex: 1,
    },
    {
      question: "Why are collisions avoided in CSMA/CA?",
      options: [
        "To increase speed",
        "Most energy is lost in transmission in wireless, making collision detection difficult",
        "To reduce costs",
        "For better security",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a CSMA/CA strategy?",
      options: [
        "Inter-Frame Space",
        "Contention Window",
        "Acknowledgments",
        "Jamming Signal",
      ],
      correctIndex: 3,
    },
    {
      question: "What is a token in Token Passing?",
      options: [
        "A physical device",
        "A special data packet",
        "A network address",
        "An error code",
      ],
      correctIndex: 1,
    },
    {
      question: "Who can send data in Token Passing?",
      options: [
        "Any device at any time",
        "Only the device that holds the token",
        "The first device to request",
        "The master device only",
      ],
      correctIndex: 1,
    },
    {
      question: "What does FCS stand for in Token Ring Frame?",
      options: [
        "Frame Control System",
        "Frame Check Sequence",
        "Forward Control Signal",
        "File Check System",
      ],
      correctIndex: 1,
    },
    {
      question: "What standard defines Ethernet?",
      options: [
        "IEEE 802.11",
        "IEEE 802.3",
        "IEEE 802.5",
        "IEEE 802.15",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a common Ethernet speed?",
      options: [
        "10 Mbps",
        "100 Mbps",
        "1 Gbps",
        "All of the above",
      ],
      correctIndex: 3,
    },
    {
      question: "What topology does Ethernet typically use?",
      options: [
        "Ring or mesh",
        "Star or bus",
        "Tree or hybrid",
        "Full mesh only",
      ],
      correctIndex: 1,
    },
    {
      question: "What cable type does Ethernet commonly use?",
      options: [
        "Twisted pair cables",
        "Coaxial only",
        "Fiber optics only",
        "Wireless only",
      ],
      correctIndex: 0,
    },
    {
      question: "Which device must every Ethernet device have?",
      options: [
        "Router",
        "Hub",
        "Network Interface Card (NIC)",
        "Modem",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is preferred in modern Ethernet LANs?",
      options: [
        "Hub",
        "Switch",
        "Bridge",
        "Repeater",
      ],
      correctIndex: 1,
    },
    {
      question: "What speed does Classic Ethernet provide?",
      options: [
        "1 Mbps",
        "10 Mbps",
        "100 Mbps",
        "1000 Mbps",
      ],
      correctIndex: 1,
    },
    {
      question: "What encoding does Classic Ethernet use?",
      options: [
        "NRZ encoding",
        "Manchester encoding",
        "Differential encoding",
        "4B/5B encoding",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the data rate of Fast Ethernet?",
      options: [
        "10 Mbps",
        "100 Mbps",
        "1000 Mbps",
        "10 Gbps",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the data rate of Gigabit Ethernet?",
      options: [
        "100 Mbps",
        "1000 Mbps",
        "10 Gbps",
        "100 Gbps",
      ],
      correctIndex: 1,
    },
    {
      question: "What cable type supports Gigabit Ethernet?",
      options: [
        "Cat 3",
        "Cat 5",
        "Cat 5e",
        "Cat 2",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the data rate of 10 Gigabit Ethernet?",
      options: [
        "1 Gbps",
        "5 Gbps",
        "10 Gbps",
        "100 Gbps",
      ],
      correctIndex: 2,
    },
    {
      question: "What cable quality is required for 10 Gigabit Ethernet with twisted pair?",
      options: [
        "Cat 5",
        "Cat 5e",
        "Cat 6a or Cat 7",
        "Cat 3",
      ],
      correctIndex: 2,
    },
    {
      question: "What does 40GbE stand for?",
      options: [
        "40 Megabits Ethernet",
        "40 Gigabits Ethernet",
        "40 Terabits Ethernet",
        "40 Kilobits Ethernet",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the current deployment speed of Terabit Ethernet?",
      options: [
        "100 Gbps",
        "200 Gbps",
        "400 Gbps",
        "1 Tbps",
      ],
      correctIndex: 2,
    },
    {
      question: "What does 10Base-T mean?",
      options: [
        "10 Mbps using thick coaxial",
        "10 Mbps using twisted pair",
        "100 Mbps using twisted pair",
        "10 Gbps using fiber",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the 'F' in 100Base-FX stand for?",
      options: [
        "Fast",
        "Fixed",
        "Fiber",
        "Full-duplex",
      ],
      correctIndex: 2,
    },
  ],
};

export const NetworkDevicesQuiz = {
  id: "network-devices",
  title: "Network Devices & WLAN",
  category: "Computer Networks",
  questions: [
    {
      question: "What is a hub?",
      options: [
        "A multiport switch",
        "A multiport repeater",
        "A multiport router",
        "A multiport bridge",
      ],
      correctIndex: 1,
    },
    {
      question: "Can hubs filter data?",
      options: [
        "Yes, always",
        "No, they cannot",
        "Only with special configuration",
        "Only in managed hubs",
      ],
      correctIndex: 1,
    },
    {
      question: "At which layer does a bridge operate?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer",
      ],
      correctIndex: 1,
    },
    {
      question: "How many ports does a bridge have?",
      options: [
        "One input, one output (2 ports)",
        "Multiple inputs, one output",
        "One input, multiple outputs",
        "Multiple inputs, multiple outputs",
      ],
      correctIndex: 0,
    },
    {
      question: "What does a bridge read to filter content?",
      options: [
        "IP addresses",
        "MAC addresses",
        "Port numbers",
        "Protocol types",
      ],
      correctIndex: 1,
    },
    {
      question: "At which layer does a switch operate?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a switch essentially?",
      options: [
        "A simple repeater",
        "A multi-port bridge with a buffer",
        "A network layer device",
        "A wireless access point",
      ],
      correctIndex: 1,
    },
    {
      question: "What can a switch do before forwarding data?",
      options: [
        "Compress data",
        "Error checking",
        "Data encryption",
        "Protocol conversion",
      ],
      correctIndex: 1,
    },
    {
      question: "What does a switch divide?",
      options: [
        "Broadcast domain",
        "Collision domain",
        "Network addresses",
        "IP subnets",
      ],
      correctIndex: 1,
    },
    {
      question: "At which layer does a router mainly operate?",
      options: [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Application layer",
      ],
      correctIndex: 2,
    },
    {
      question: "What does a router use to route data packets?",
      options: [
        "MAC addresses",
        "IP addresses",
        "Port numbers",
        "Physical addresses",
      ],
      correctIndex: 1,
    },
    {
      question: "What do routers divide?",
      options: [
        "Collision domains only",
        "Broadcast domains",
        "Network segments",
        "Data packets",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of networks do routers typically connect?",
      options: [
        "Only LANs",
        "Only WANs",
        "LANs and WANs",
        "Only wireless networks",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is an advantage of Wireless LAN?",
      options: [
        "Higher security than wired",
        "Mobility",
        "Lower cost than all alternatives",
        "No interference",
      ],
      correctIndex: 1,
    },
    {
      question: "Why was Wireless LAN not popular in the past?",
      options: [
        "High cost",
        "Low data rate",
        "Licensing requirements",
        "All of the above",
      ],
      correctIndex: 3,
    },
    {
      question: "What is a Piconet?",
      options: [
        "A large network of 100 stations",
        "A small ad hoc network of 8 stations",
        "A wired network topology",
        "A type of router",
      ],
      correctIndex: 1,
    },
    {
      question: "In Bluetooth topology, how many stations are in a Piconet?",
      options: [
        "4 stations",
        "8 stations",
        "16 stations",
        "32 stations",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two types of stations in a Piconet?",
      options: [
        "Primary and Secondary",
        "Master and Slave",
        "Host and Client",
        "Server and Workstation",
      ],
      correctIndex: 1,
    },
    {
      question: "Who do all slave stations synchronize their clocks with?",
      options: [
        "Each other",
        "The master",
        "An external server",
        "The router",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is an application of WLAN?",
      options: [
        "LAN extensions",
        "Building with large open floors",
        "Rescue operation sites",
        "All of the above",
      ],
      correctIndex: 3,
    },
  ],
};