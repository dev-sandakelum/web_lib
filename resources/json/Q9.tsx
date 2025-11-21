export const NetworkTransportQuiz = {
  id: "5",
  title: "Network Layer & Transport Layer",
  category: "Computer Networks",
  questions: [
    {
      question: "What is the Network Layer responsible for?",
      options: [
        "Error detection only",
        "Routing packets from source to destination",
        "Physical transmission",
        "Application data formatting",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a routing algorithm?",
      options: [
        "Hardware that connects networks",
        "Software that decides where a packet goes next",
        "A protocol for encryption",
        "A physical connection method",
      ],
      correctIndex: 1,
    },
    {
      question: "In connectionless networks, when is the routing decision made?",
      options: [
        "Once at circuit setup time",
        "For each datagram",
        "Only at the destination",
        "Never, it's predetermined",
      ],
      correctIndex: 1,
    },
    {
      question: "In connection-oriented networks, when is the routing decision made?",
      options: [
        "For each packet",
        "Once, at circuit setup time",
        "At random intervals",
        "Only when errors occur",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a common requirement for routing algorithms?",
      options: [
        "Correctness",
        "Simplicity",
        "Complexity",
        "Robustness",
      ],
      correctIndex: 2,
    },
    {
      question: "What does robustness mean in routing algorithms?",
      options: [
        "Using minimal resources",
        "Dealing with failures and topology changes",
        "Being simple to implement",
        "Having maximum speed",
      ],
      correctIndex: 1,
    },
    {
      question: "Routing algorithms should be optimal in terms of:",
      options: [
        "Cost only",
        "Speed only",
        "Throughput and minimizing mean packet delays",
        "Hardware usage only",
      ],
      correctIndex: 2,
    },
    {
      question: "How many types of routing algorithms are there?",
      options: [
        "One",
        "Two",
        "Three",
        "Four",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two types of routing algorithms?",
      options: [
        "Fast and Slow",
        "Simple and Complex",
        "Dynamic and Static",
        "Wired and Wireless",
      ],
      correctIndex: 2,
    },
    {
      question: "What do dynamic routing algorithms use?",
      options: [
        "Non-adaptive algorithms",
        "Adaptive algorithms",
        "Fixed algorithms",
        "Manual algorithms",
      ],
      correctIndex: 1,
    },
    {
      question: "What do dynamic routing algorithms base their decisions on?",
      options: [
        "Only hardware configuration",
        "Topology and network traffic",
        "User preferences",
        "Time of day only",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the main optimization parameters in dynamic routing?",
      options: [
        "Cost, power, speed",
        "Hops, distance, estimated transit time",
        "Bandwidth, latency, jitter",
        "Users, devices, connections",
      ],
      correctIndex: 1,
    },
    {
      question: "When does static routing download routing information to routers?",
      options: [
        "Every hour",
        "When traffic is high",
        "When booting up the network",
        "Never, it's manual",
      ],
      correctIndex: 2,
    },
    {
      question: "Do static routing algorithms take decisions based on network topology or traffic?",
      options: [
        "Yes, always",
        "Only on topology",
        "Only on traffic",
        "No, they do not",
      ],
      correctIndex: 3,
    },
    {
      question: "Which is a static routing algorithm?",
      options: [
        "Link state routing",
        "Shortest path routing",
        "Distance vector routing",
        "OSPF",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is a dynamic routing algorithm?",
      options: [
        "Shortest path routing",
        "Link state routing",
        "Fixed routing",
        "Manual routing",
      ],
      correctIndex: 1,
    },
    {
      question: "What algorithm is used for Shortest Path routing?",
      options: [
        "Bellman-Ford",
        "Dijkstra's Algorithm",
        "Prim's Algorithm",
        "Kruskal's Algorithm",
      ],
      correctIndex: 1,
    },
    {
      question: "In Link State Routing, what must each router discover first?",
      options: [
        "All network devices",
        "Its neighbors and their network addresses",
        "The internet gateway",
        "All possible routes",
      ],
      correctIndex: 1,
    },
    {
      question: "What must routers measure in Link State Routing?",
      options: [
        "Total network bandwidth",
        "Number of users",
        "Delay or cost to each neighbor",
        "Physical distance only",
      ],
      correctIndex: 2,
    },
    {
      question: "In Link State Routing, where does each router send its packet of learned information?",
      options: [
        "Only to adjacent routers",
        "To the gateway router",
        "All other routers",
        "To the network administrator",
      ],
      correctIndex: 2,
    },
    {
      question: "What does each router compute in Link State Routing?",
      options: [
        "Average network speed",
        "Total network cost",
        "Shortest path to every other router",
        "Maximum bandwidth available",
      ],
      correctIndex: 2,
    },
    {
      question: "In hierarchical routing, how are routers classified?",
      options: [
        "By speed",
        "In groups known as regions",
        "By cost",
        "By manufacturer",
      ],
      correctIndex: 1,
    },
    {
      question: "In hierarchical routing, what information does each router have?",
      options: [
        "Information about all routers in the network",
        "Only about routers in its own region",
        "Only about the gateway",
        "No routing information",
      ],
      correctIndex: 1,
    },
    {
      question: "What do routers contain in their table in hierarchical routing?",
      options: [
        "All possible routes",
        "Only their immediate neighbors",
        "All internet routes",
        "Historical data",
      ],
      correctIndex: 1,
    },
    {
      question: "What is broadcasting?",
      options: [
        "Sending to one destination",
        "Sending to selected destinations",
        "Sending a packet to all destinations simultaneously",
        "Storing packets for later delivery",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is an example of broadcast routing application?",
      options: [
        "Email transmission",
        "Weather reports distribution",
        "File downloads",
        "One-to-one messaging",
      ],
      correctIndex: 1,
    },
    {
      question: "What is multicast routing?",
      options: [
        "Sending to all hosts",
        "Sending to one host",
        "Sending to a group of hosts without broadcasting to all",
        "Blocking all transmissions",
      ],
      correctIndex: 2,
    },
    {
      question: "What is a spanning tree?",
      options: [
        "A tree with cycles",
        "A tree containing all vertices without cycles",
        "Only the edges of a graph",
        "A partial network topology",
      ],
      correctIndex: 1,
    },
    {
      question: "When does congestion occur?",
      options: [
        "When network is idle",
        "When one part of the subnet becomes overloaded",
        "During normal operation",
        "When routers are off",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens when routers receive packets faster than they can forward them?",
      options: [
        "Packets are stored indefinitely",
        "Network shuts down",
        "Subnet must prevent additional packets or discard queued packets",
        "Speed automatically increases",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is a factor that causes congestion?",
      options: [
        "Too few users",
        "Packet arrival rate exceeds outgoing link capacity",
        "Too much memory",
        "Fast processors",
      ],
      correctIndex: 1,
    },
    {
      question: "Which can cause congestion?",
      options: [
        "Sufficient memory",
        "Insufficient memory to store arriving packets",
        "Slow network growth",
        "Low traffic",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of traffic can cause congestion?",
      options: [
        "Steady traffic",
        "Burst traffic",
        "No traffic",
        "Minimal traffic",
      ],
      correctIndex: 1,
    },
    {
      question: "How many broad categories of congestion control mechanisms are there?",
      options: [
        "One",
        "Two",
        "Three",
        "Four",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two categories of congestion control?",
      options: [
        "Fast and Slow",
        "Open-loop and Closed-loop",
        "Active and Passive",
        "Manual and Automatic",
      ],
      correctIndex: 1,
    },
    {
      question: "What is open-loop congestion control?",
      options: [
        "Removing congestion after it happens",
        "Prevention before congestion happens",
        "Ignoring congestion",
        "Manual intervention",
      ],
      correctIndex: 1,
    },
    {
      question: "When are open-loop policies applied?",
      options: [
        "After congestion occurs",
        "Before congestion happens",
        "During network shutdown",
        "Only at night",
      ],
      correctIndex: 1,
    },
    {
      question: "Who handles open-loop congestion control?",
      options: [
        "Only routers",
        "Either source or destination",
        "Only switches",
        "Network administrator only",
      ],
      correctIndex: 1,
    },
    {
      question: "What must be designed carefully in retransmission policy?",
      options: [
        "Hardware specifications",
        "Retransmission timers",
        "Cable types",
        "User interfaces",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol uses a retransmission policy?",
      options: [
        "UDP",
        "TCP",
        "ICMP",
        "ARP",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of window can affect congestion in window policy?",
      options: [
        "Application window",
        "Browser window",
        "Go-back-n window at sender side",
        "Display window",
      ],
      correctIndex: 2,
    },
    {
      question: "What can a good discarding policy do?",
      options: [
        "Delete all packets",
        "Prevent congestion while maintaining message quality",
        "Block all traffic",
        "Increase congestion",
      ],
      correctIndex: 1,
    },
    {
      question: "In audio file transmission, what can routers discard to prevent congestion?",
      options: [
        "All packets",
        "The entire file",
        "Less sensitive packets",
        "Header information",
      ],
      correctIndex: 2,
    },
    {
      question: "How does acknowledgement policy help prevent congestion?",
      options: [
        "By acknowledging every packet",
        "By not acknowledging packets frequently, reducing network load",
        "By increasing acknowledgements",
        "By eliminating acknowledgements completely",
      ],
      correctIndex: 1,
    },
    {
      question: "What should switches check before transmitting in admission policy?",
      options: [
        "User identity",
        "Resource requirements of network flow",
        "Time of day",
        "Physical location",
      ],
      correctIndex: 1,
    },
    {
      question: "What should a router do if there's a chance of congestion in admission policy?",
      options: [
        "Speed up transmission",
        "Deny establishing virtual network connection",
        "Increase bandwidth",
        "Add more routers",
      ],
      correctIndex: 1,
    },
    {
      question: "What is backpressure?",
      options: [
        "Increasing network pressure",
        "A technique where congested node stops receiving packets from upstream",
        "Physical pressure on cables",
        "User authentication method",
      ],
      correctIndex: 1,
    },
    {
      question: "In which direction does backpressure propagate?",
      options: [
        "Same direction as data flow",
        "Opposite direction of data flow",
        "In all directions",
        "No direction",
      ],
      correctIndex: 1,
    },
    {
      question: "What is a choke packet?",
      options: [
        "A corrupted packet",
        "A packet sent by node to source to inform of congestion",
        "A normal data packet",
        "An encrypted packet",
      ],
      correctIndex: 1,
    },
    {
      question: "What does a router monitor to decide when to send choke packets?",
      options: [
        "User activity",
        "Resources and output line utilization",
        "Physical temperature",
        "Cable length",
      ],
      correctIndex: 1,
    },
    {
      question: "Are intermediate nodes warned in choke packet method?",
      options: [
        "Yes, all nodes are warned",
        "No, they are not warned",
        "Only some nodes",
        "Only gateway nodes",
      ],
      correctIndex: 1,
    },
    {
      question: "What is implicit signaling?",
      options: [
        "Direct communication about congestion",
        "No communication; source guesses congestion",
        "Encrypted messages",
        "Broadcasting congestion information",
      ],
      correctIndex: 1,
    },
    {
      question: "How might a source guess congestion in implicit signaling?",
      options: [
        "By network administrator notification",
        "When acknowledgments don't arrive for a while",
        "By checking physical connections",
        "Random assumption",
      ],
      correctIndex: 1,
    },
    {
      question: "What is explicit signaling?",
      options: [
        "Guessing congestion",
        "Node explicitly sends information about congestion",
        "Ignoring congestion",
        "Manual notification",
      ],
      correctIndex: 1,
    },
    {
      question: "How does explicit signaling differ from choke packets?",
      options: [
        "No difference",
        "Signal is included in data packets rather than separate packets",
        "Uses different protocols",
        "Faster transmission",
      ],
      correctIndex: 1,
    },
    {
      question: "What is traffic shaping?",
      options: [
        "Changing network topology",
        "Controlling rate at which packets are sent",
        "Physical cable management",
        "User management",
      ],
      correctIndex: 1,
    },
    {
      question: "Where is traffic shaping used?",
      options: [
        "Only in Ethernet",
        "ATM and Integrated Services networks",
        "Only wireless networks",
        "Only in LANs",
      ],
      correctIndex: 1,
    },
    {
      question: "What do sender and carrier negotiate at connection setup in traffic shaping?",
      options: [
        "Price",
        "Traffic pattern (shape)",
        "Hardware specifications",
        "User credentials",
      ],
      correctIndex: 1,
    },
    {
      question: "What are the two traffic shaping algorithms?",
      options: [
        "Fast and Slow Bucket",
        "Leaky Bucket and Token Bucket",
        "Open and Closed Bucket",
        "Static and Dynamic Bucket",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the Leaky Bucket Algorithm control?",
      options: [
        "Network topology",
        "Rate in a network",
        "User access",
        "Physical connections",
      ],
      correctIndex: 1,
    },
    {
      question: "How is the Leaky Bucket Algorithm implemented?",
      options: [
        "Multiple-server queue",
        "Single-server queue with constant service time",
        "Random access system",
        "Priority queue",
      ],
      correctIndex: 1,
    },
    {
      question: "What happens if the bucket overflows in Leaky Bucket Algorithm?",
      options: [
        "Packets are stored",
        "Packets are discarded",
        "Speed increases",
        "Network restarts",
      ],
      correctIndex: 1,
    },
    {
      question: "At what rate does the Leaky Bucket leak?",
      options: [
        "Variable rate",
        "Constant rate",
        "Random rate",
        "No rate",
      ],
      correctIndex: 1,
    },
    {
      question: "What does Leaky Bucket convert burst traffic into?",
      options: [
        "Faster traffic",
        "Uniform traffic",
        "Encrypted traffic",
        "No traffic",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the Leaky Bucket enforce?",
      options: [
        "Variable output rate",
        "Constant output rate regardless of burstiness",
        "Maximum speed",
        "No output",
      ],
      correctIndex: 1,
    },
    {
      question: "How does Token Bucket differ from Leaky Bucket?",
      options: [
        "No difference",
        "Allows output rate to vary depending on burst size",
        "Slower processing",
        "More complex hardware",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the bucket hold in Token Bucket Algorithm?",
      options: [
        "Packets",
        "Tokens",
        "Addresses",
        "Data",
      ],
      correctIndex: 1,
    },
    {
      question: "What must a host do to transmit a packet in Token Bucket?",
      options: [
        "Wait for permission",
        "Capture and destroy one token",
        "Check with router",
        "Request bandwidth",
      ],
      correctIndex: 1,
    },
    {
      question: "How are tokens generated in Token Bucket Algorithm?",
      options: [
        "Randomly",
        "By a clock at rate of one token every t seconds",
        "By user request",
        "Continuously",
      ],
      correctIndex: 1,
    },
    {
      question: "What can idle hosts do with tokens?",
      options: [
        "Nothing",
        "Discard them",
        "Capture and save them to send larger bursts later",
        "Trade them",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the Transport Layer responsible for?",
      options: [
        "Physical transmission",
        "End-to-end transportation of data between applications",
        "Network addressing",
        "Cable management",
      ],
      correctIndex: 1,
    },
    {
      question: "Which is NOT a major function of the Transport Layer?",
      options: [
        "Multiplexing",
        "Segmentation",
        "Routing",
        "Flow Control",
      ],
      correctIndex: 2,
    },
    {
      question: "How are services identified at the Transport Layer?",
      options: [
        "MAC addresses",
        "IP addresses",
        "Port numbers",
        "Device names",
      ],
      correctIndex: 2,
    },
    {
      question: "What are the two major protocols at the Transport Layer?",
      options: [
        "HTTP and FTP",
        "TCP and UDP",
        "IP and ICMP",
        "ARP and RARP",
      ],
      correctIndex: 1,
    },
    {
      question: "What does TCP stand for?",
      options: [
        "Transport Connection Protocol",
        "Transmission Control Protocol",
        "Transfer Control Process",
        "Technical Communication Protocol",
      ],
      correctIndex: 1,
    },
    {
      question: "What does UDP stand for?",
      options: [
        "Universal Data Protocol",
        "User Datagram Protocol",
        "Uniform Delivery Protocol",
        "United Data Process",
      ],
      correctIndex: 1,
    },
    {
      question: "Is TCP connection-oriented or connectionless?",
      options: [
        "Connectionless",
        "Connection-oriented",
        "Both",
        "Neither",
      ],
      correctIndex: 1,
    },
    {
      question: "Is UDP connection-oriented or connectionless?",
      options: [
        "Connection-oriented",
        "Connectionless",
        "Both",
        "Neither",
      ],
      correctIndex: 1,
    },
    {
      question: "Does TCP provide reliable communication?",
      options: [
        "No",
        "Yes, with acknowledgments",
        "Sometimes",
        "Only for large files",
      ],
      correctIndex: 1,
    },
    {
      question: "Does UDP provide reliable communication?",
      options: [
        "Yes, always",
        "No, unreliable with no acknowledgments",
        "Sometimes",
        "Only for small packets",
      ],
      correctIndex: 1,
    },
  ],
};

export const TransportProtocolsQuiz = {
  id: "transport-protocols",
  title: "TCP & UDP Protocols",
  category: "Computer Networks",
  questions: [
    {
      question: "Which protocol has slower data transportation?",
      options: [
        "UDP",
        "TCP",
        "Both are same speed",
        "Neither",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol has faster data transportation?",
      options: [
        "TCP",
        "UDP",
        "Both are same speed",
        "Neither",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol does HTTP use?",
      options: [
        "UDP",
        "TCP",
        "ICMP",
        "ARP",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol does FTP use?",
      options: [
        "UDP",
        "TCP",
        "IGMP",
        "RARP",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol does DNS use?",
      options: [
        "TCP",
        "UDP",
        "ICMP",
        "SMTP",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol does DHCP use?",
      options: [
        "TCP",
        "UDP",
        "FTP",
        "HTTP",
      ],
      correctIndex: 1,
    },
    {
      question: "What is multiplexing in Transport Layer?",
      options: [
        "Separating signals",
        "Combining multiple data signals into one for transmission",
        "Error checking",
        "Address resolution",
      ],
      correctIndex: 1,
    },
    {
      question: "What is de-multiplexing?",
      options: [
        "Combining signals",
        "Separating combined signal back into original signals",
        "Signal amplification",
        "Data compression",
      ],
      correctIndex: 1,
    },
    {
      question: "What process does TCP use to establish a connection?",
      options: [
        "Two-way handshake",
        "Three-way handshake",
        "Four-way handshake",
        "No handshake",
      ],
      correctIndex: 1,
    },
    {
      question: "What flags does the three-way handshake use?",
      options: [
        "ACK and FIN",
        "SYN and ACK",
        "RST and PSH",
        "URG and FIN",
      ],
      correctIndex: 1,
    },
    {
      question: "What does the three-way handshake initialize?",
      options: [
        "IP addresses",
        "Sequence and acknowledgement number fields",
        "MAC addresses",
        "Port numbers",
      ],
      correctIndex: 1,
    },
    {
      question: "How many parameters does the UDP header contain?",
      options: [
        "Two",
        "Three",
        "Four",
        "Five",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the size of the UDP header?",
      options: [
        "4 bytes",
        "8 bytes",
        "16 bytes",
        "20 bytes",
      ],
      correctIndex: 1,
    },
    {
      question: "Which protocol has higher overhead?",
      options: [
        "UDP",
        "TCP",
        "Both same",
        "Neither",
      ],
      correctIndex: 1,
    },
    {
      question: "What type of applications prefer UDP?",
      options: [
        "File transfers",
        "Email",
        "Voice and video",
        "Web browsing",
      ],
      correctIndex: 2,
    },
    {
      question: "Where do voice and video applications handle reliability?",
      options: [
        "Transport layer",
        "Network layer",
        "Application layer",
        "Physical layer",
      ],
      correctIndex: 2,
    },
    {
      question: "Does TCP hold data until acknowledgement is received?",
      options: [
        "No",
        "Yes",
        "Sometimes",
        "Only for large files",
      ],
      correctIndex: 1,
    },
    {
      question: "What is segmentation in Transport Layer?",
      options: [
        "Network division",
        "Breaking data into smaller units",
        "Cable management",
        "User grouping",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of sequencing in Transport Layer?",
      options: [
        "Encryption",
        "Ordering packets correctly",
        "Compression",
        "Addressing",
      ],
      correctIndex: 1,
    },
    {
      question: "What is reassembling in Transport Layer?",
      options: [
        "Breaking packets",
        "Putting segments back together in correct order",
        "Routing decisions",
        "Physical connection",
      ],
      correctIndex: 1,
    },
  ],
};