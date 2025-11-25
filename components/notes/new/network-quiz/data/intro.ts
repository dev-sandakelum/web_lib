export const IntroData = [
  {
    id: 1,
    question: `<b>a)</b> Briefly explain the term <b>Computer Network</b>.<br><br><b>b)</b> List three (03) key components that make up a computer network and briefly describe each.`,
    modelAnswer: `<b>a) Computer Network:</b><br>
A computer network is a set of systems/nodes interconnected by communication links that is primarily used for information transfer. More specifically, it can be defined as two or more computers/nodes connected together in such a way that they can share resources. A network consists of communication elements connected by communication links.<br><br>

<b>b) Three Key Components:</b><br>
<ol>
<li><b>Systems/Nodes:</b> These include computers and other end systems (tablets, smartphones, sensors), as well as network devices like switches and routers that facilitate communication between devices.</li><br>

<li><b>Communication Links:</b> These are the physical or wireless connections that enable data transmission. Wired links include twisted pair cables, Twinax, coaxial cables, and optical fiber.</li><br>

<li><b>Communication Elements:</b> These are the hardware and software components that enable data transfer, including protocols, network interfaces, and communication software that manage how information (messages/data from applications) is transmitted across the network.</li>
</ol>`,
    createdAt: '2025-01-20',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `List and briefly describe four (04) reasons why computer networks are used in modern organizations and society.`,
    modelAnswer: `<b>Four Reasons for Using Computer Networks:</b><br><br>

<ol>
<li><b>Faster and Efficient Communication:</b> Before computer networks, people sent and received information by hand using the postal service, which was slow and unreliable. Computer networks enable faster, more efficient modes of communication such as email and video conferencing.</li><br>

<li><b>Standardization of Policies and Procedures:</b> Computer networks and the sharing of electronic data encourage the use of standard policies and procedures across organizations, ensuring consistency and uniformity in operations.</li><br>

<li><b>Data Backup and Recovery:</b> Computer networks provide backup and recovery support for data redundancy, ensuring that critical information is not lost and can be restored in case of system failures.</li><br>

<li><b>Cost Savings:</b> Computer networks lead to significant cost savings by reducing the need for physical infrastructure, enabling resource sharing, and improving operational efficiency through centralized management and reduced duplication of resources.</li>
</ol>`,
    createdAt: '2025-01-19',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `<b>a)</b> Describe the two (02) main transmission technologies used in computer networks.<br><br><b>b)</b> Differentiate between <b>Broadcasting</b> and <b>Multicasting</b> in broadcast link networks.`,
    modelAnswer: `<b>a) Two Main Transmission Technologies:</b><br><br>

<ol>
<li><b>Broadcast Links:</b> A single communication channel that is shared by all the machines on the network. Messages transmitted on the network are called packets. In this technology, a packet transmitted can be received by every machine on the network, and machines use addressing to determine which packets are meant for them.</li><br>

<li><b>Point-to-Point Links:</b> Point-to-point networks consist of many connections between individual pairs of machines. These networks create direct connections between two specific devices. Point-to-point transmission with one sender and receiver is sometimes called unicasting.</li>
</ol><br>

<b>b) Broadcasting vs Multicasting:</b><br><br>

<b>Broadcasting:</b><br>
A packet transmitted is received by every machine on the network. All devices on the network receive the same message, regardless of whether they need it or not.<br><br>

<b>Multicasting:</b><br>
Transmission is sent to a specific subset of the machines on the network, not all machines. Only devices that belong to a particular multicast group receive the message, making it more efficient than broadcasting when communication is needed with only specific devices.`,
    createdAt: '2025-01-18',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `Differentiate between <b>Local Area Network (LAN)</b>, <b>Metropolitan Area Network (MAN)</b>, and <b>Wide Area Network (WAN)</b> by describing three (03) key differences.`,
    modelAnswer: `<b>Key Differences Between LAN, MAN, and WAN:</b><br><br>

<ol>
<li><b>Geographic Coverage and Size:</b>
<ul>
<li><b>LAN:</b> Restricted to a particular geographic region such as an office building or single department. Covers the smallest area.</li>
<li><b>MAN:</b> Larger than a LAN, covers multiple buildings within a city or campus. Commonly used in school campuses or large companies with multiple buildings.</li>
<li><b>WAN:</b> Covers a broad area with communications links that cross metropolitan, regional, or national boundaries. The largest network type, with the Internet being the most well-known example.</li>
</ul>
</li><br>

<li><b>Transmission Technology and Speed:</b>
<ul>
<li><b>LAN:</b> Uses high-speed transmission technology ranging from 10 Mbps to 10 Gbps. Typically uses standard topologies like bus, star, and ring.</li>
<li><b>MAN:</b> May use different transmission technologies and media such as fiber and wireless due to greater distances covered. Speed varies based on technology used.</li>
<li><b>WAN:</b> Uses routers and public communications links. Generally has lower transmission speeds compared to LANs due to the vast distances covered and uses various transmission technologies.</li>
</ul>
</li><br>

<li><b>Ownership and Purpose:</b>
<ul>
<li><b>LAN:</b> Usually a privately owned network designed to operate over a small physical area like an office or factory.</li>
<li><b>MAN:</b> Can interconnect several LANs by bridging them together (campus network). Utilized across multiple buildings within an organization or city.</li>
<li><b>WAN:</b> Used to connect LANs and other types of networks together, enabling users and computers in one location to communicate with users and computers in other locations across large geographic areas.</li>
</ul>
</li>
</ol>`,
    createdAt: '2025-01-17',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `<b>a)</b> Briefly describe the three (03) main LAN topologies.<br><br><b>b)</b> Compare <b>Star Topology</b> and <b>Bus Topology</b> considering their advantages and disadvantages.`,
    modelAnswer: `<b>a) Three Main LAN Topologies:</b><br><br>

<ol>
<li><b>Ring Topology:</b> Each computer connects to two other computers, joining them in a circle creating a unidirectional path. Each entity participating in the ring reads a message, regenerates it, and hands it to its neighbor. Minimum collision occurs in single ring configuration.</li><br>

<li><b>Bus Topology:</b> The simplest physical topology consisting of a single cable (trunk) that runs to every workstation. All computers share the same data and address path. Messages pass through the trunk, and each workstation checks if the message is addressed to itself.</li><br>

<li><b>Star Topology:</b> Branches each network device off a central device called a hub. The configuration resembles spokes in a bicycle wheel, with all devices connecting to a central point.</li>
</ol><br>

<b>b) Star Topology vs Bus Topology:</b><br><br>

<b>Star Topology Advantages:</b><br>
<ul>
<li>Very easy to add a new workstation without disrupting the network</li>
<li>If any workstation goes down, it does not affect the entire network</li>
<li>Easy to install - cable is run from each workstation to the hub</li>
</ul><br>

<b>Star Topology Disadvantages:</b><br>
<ul>
<li>If the central device (hub) goes down, the entire network goes down</li>
<li>More expensive to install than bus networks due to more cables and hubs needed</li>
</ul><br>

<b>Bus Topology Advantages:</b><br>
<ul>
<li>Uses the least amount of cabling among topologies</li>
<li>Simplest physical topology to implement</li>
</ul><br>

<b>Bus Topology Disadvantages:</b><br>
<ul>
<li>Covers the shortest distance</li>
<li>Difficult to add a workstation</li>
<li>If the main cable breaks, the entire network is disrupted</li>
<li>Very expensive to maintain</li>
</ul>`,
    createdAt: '2025-01-16',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `<b>a)</b> List six (06) internetworking devices used to connect networks.<br><br><b>b)</b> Briefly explain what an <b>internetwork</b> is and why internetworking devices are necessary as networks grow.`,
    modelAnswer: `<b>a) Six Internetworking Devices:</b><br>
<ol>
<li>Repeaters</li>
<li>Hubs</li>
<li>Bridges</li>
<li>Switches</li>
<li>Routers</li>
<li>Gateways</li>
</ol><br>

<b>b) Internetwork and Necessity of Internetworking Devices:</b><br><br>

<b>What is an Internetwork:</b><br>
A collection of interconnected networks is called an internetwork or internet. It represents the linking of multiple individual networks to create a larger, more complex network infrastructure.<br><br>

<b>Why Internetworking Devices are Necessary:</b><br>
As computer networks grow in size and complexity, so do the internetworking devices used to connect them. Internetworking devices are products specifically designed to connect networks and enable communication between different network segments. These devices become increasingly important as networks expand because they:<br>
<ul>
<li>Enable communication between different network types and technologies</li>
<li>Manage traffic flow across multiple network segments</li>
<li>Provide protocol translation and data routing</li>
<li>Help maintain network performance and reliability as the network scales</li>
<li>Allow organizations to build larger, more sophisticated network infrastructures</li>
</ul>`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `Describe six (06) functions of network software in managing and maintaining computer networks.`,
    modelAnswer: `<b>Six Functions of Network Software:</b><br><br>

<ol>
<li><b>Network Setup and Installation:</b> Helps to set up and install computer networks, providing the necessary tools and configurations to establish network connectivity and infrastructure.</li><br>

<li><b>Seamless Resource Access:</b> Enables users to have access to network resources in a seamless manner, allowing them to use shared files, printers, and other network resources without complex procedures.</li><br>

<li><b>User Management:</b> Allows administrators to add or remove users from the network, managing user accounts, permissions, and access rights efficiently.</li><br>

<li><b>Data Storage Management:</b> Helps to define locations of data storage and allows users to access that data. This ensures proper organization and accessibility of information across the network.</li><br>

<li><b>Security and Protection:</b> Helps administrators and security systems to protect the network from data breaches, unauthorized access, and attacks. This includes implementing firewalls, encryption, and access control mechanisms.</li><br>

<li><b>Network Virtualization:</b> Enables network virtualization, allowing the creation of multiple virtual networks on the same physical infrastructure, improving resource utilization and flexibility.</li>
</ol>`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `<b>a)</b> Briefly explain the concept of <b>Protocol Hierarchies</b> in network software.<br><br><b>b)</b> List and describe five (05) design issues that must be considered for network layers.`,
    modelAnswer: `<b>a) Protocol Hierarchies:</b><br>
Networks are organized as a series of layers or levels. Layer n on a host communicates with layer n on another host using a specific protocol. The <b>layer n protocol</b> consists of the rules and conventions for this communication. The entities on each host implementing the layer n protocol are called <b>peers</b>. This hierarchical organization allows for modular design and easier management of network complexity.<br><br>

<b>b) Five Design Issues for Network Layers:</b><br><br>

<ol>
<li><b>Addressing:</b> Some form of addressing is needed to specify a specific destination. This ensures that data reaches the correct recipient in the network.</li><br>

<li><b>Error Control:</b> Both ends must agree on error detecting and correcting codes. This ensures reliable data transmission by identifying and fixing errors that occur during transmission.</li><br>

<li><b>Flow Control:</b> Need to regulate the flow of data to avoid swamping the receiver. This prevents a fast sender from overwhelming a slow receiver with more data than it can process.</li><br>

<li><b>Sequencing and Reassembly:</b> Messages may arrive out of order and need proper reassembly. The network layer must ensure that data packets are reassembled in the correct sequence at the destination.</li><br>

<li><b>Routing:</b> Choosing a path when there are multiple paths between source and destination. This involves selecting the most efficient route for data transmission across the network.</li>
</ol>`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `Differentiate between <b>Connection-Oriented Service</b> and <b>Connectionless Service</b> by describing four (04) key differences.`,
    modelAnswer: `<b>Key Differences Between Connection-Oriented and Connectionless Service:</b><br><br>

<ol>
<li><b>Connection Establishment:</b>
<ul>
<li><b>Connection-Oriented:</b> A connection must be established before data transmission and terminated after transmission is complete. Modeled after the telephone system.</li>
<li><b>Connectionless:</b> No connection is established or terminated. Data is sent immediately without any setup phase. Modeled after the postal system.</li>
</ul>
</li><br>

<li><b>Message Ordering:</b>
<ul>
<li><b>Connection-Oriented:</b> Messages arrive in the order they are sent, maintaining sequence and ensuring organized delivery.</li>
<li><b>Connectionless:</b> No guarantees on message ordering. Messages may arrive out of sequence or in a different order than they were sent.</li>
</ul>
</li><br>

<li><b>Reliability:</b>
<ul>
<li><b>Connection-Oriented:</b> Provides reliable data delivery with acknowledgments and error checking mechanisms.</li>
<li><b>Connectionless:</b> Unreliable service where messages may be lost during transmission. Also called datagram service.</li>
</ul>
</li><br>

<li><b>Examples and Use Cases:</b>
<ul>
<li><b>Connection-Oriented:</b> TCP (Transmission Control Protocol) is a primary example, used when reliable, ordered delivery is critical.</li>
<li><b>Connectionless:</b> UDP (User Datagram Protocol) is a primary example, used when speed is more important than guaranteed delivery.</li>
</ul>
</li>
</ol>`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 10,
    question: `<b>a)</b> Briefly explain what <b>Service Primitives</b> are in network communication.<br><br><b>b)</b> Describe the purpose of the following service primitives:<br>
<b>i)</b> LISTEN<br>
<b>ii)</b> CONNECT<br>
<b>iii)</b> SEND<br>
<b>iv)</b> DISCONNECT`,
    modelAnswer: `<b>a) Service Primitives:</b><br>
A service is formally specified by a set of primitives (operations) available to a user process to access the service. Service primitives are the basic operations that define how a layer provides services to the layer above it, enabling communication and data exchange in a structured manner.<br><br>

<b>b) Purpose of Service Primitives:</b><br><br>

<b>i) LISTEN:</b><br>
The LISTEN primitive causes a process to block (wait) for an incoming connection. It puts the system in a state where it is ready to accept connection requests from other entities on the network.<br><br>

<b>ii) CONNECT:</b><br>
The CONNECT primitive is used to establish a connection with a waiting peer. It initiates the connection establishment process with another entity that is in a LISTEN state, creating a communication channel between the two peers.<br><br>

<b>iii) SEND:</b><br>
The SEND primitive is used to send a message to the peer entity. Once a connection is established, this primitive allows data transmission from one entity to another across the established connection.<br><br>

<b>iv) DISCONNECT:</b><br>
The DISCONNECT primitive is used to terminate a connection. It cleanly closes the communication channel between two entities, releasing resources and ending the data exchange session.`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 11,
    question: `<b>a)</b> Differentiate between <b>Service</b> and <b>Protocol</b> in the context of network layers.<br><br><b>b)</b> Explain why understanding the relationship between services and protocols is important in network design.`,
    modelAnswer: `<b>a) Service vs Protocol:</b><br><br>

<b>Service:</b><br>
A service is a set of primitives (operations) that a layer provides to the layer above it. It defines what operations and functionalities are available to the upper layer without specifying how these operations are implemented. The service represents the interface between layers.<br><br>

<b>Protocol:</b><br>
A protocol is a set of rules governing the format and meaning of the frames, packets, or messages that are exchanged by the peer entities within a layer. It defines how the service is actually implemented and how communication occurs between entities at the same layer on different systems.<br><br>

<b>b) Importance of Understanding the Relationship:</b><br><br>

Understanding the relationship between services and protocols is crucial in network design because:<br><br>

<ul>
<li><b>Separation of Concerns:</b> Services define "what" functionality is provided, while protocols define "how" that functionality is implemented. This separation allows for modular design and easier system maintenance.</li><br>

<li><b>Flexibility in Implementation:</b> The same service can be implemented using different protocols, allowing network designers to choose or change protocols without affecting the layers above, as long as the service interface remains consistent.</li><br>

<li><b>Interoperability:</b> Peer entities on different systems must use the same protocol to communicate successfully, but they can offer their services to different upper-layer implementations, enabling diverse systems to work together.</li><br>

<li><b>Layered Architecture Benefits:</b> This distinction supports the layered network architecture, where each layer can be designed, tested, and modified independently, improving network scalability and maintainability.</li>
</ul>`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 12,
    question: `Describe the characteristics and applications of a <b>Home Network</b>, including four (04) categories of devices that can be part of a home network.`,
    modelAnswer: `<b>Home Network:</b><br><br>

A home network is designed so that every device in the home will be capable of communicating with every other device, and all of them will be accessible over the Internet. This creates an integrated environment where all household devices can share information and be controlled remotely.<br><br>

<b>Four Categories of Devices in Home Networks:</b><br><br>

<ol>
<li><b>Computers:</b>
<ul>
<li>Desktop PC</li>
<li>Notebook PC</li>
<li>PDA (Personal Digital Assistant)</li>
<li>Shared peripherals (printers, scanners, storage devices)</li>
</ul>
</li><br>

<li><b>Telecommunications Devices:</b>
<ul>
<li>Telephone</li>
<li>Mobile telephone</li>
<li>Intercom systems</li>
<li>Fax machines</li>
</ul>
</li><br>

<li><b>Appliances:</b>
<ul>
<li>Microwave ovens</li>
<li>Refrigerators</li>
<li>Clocks</li>
<li>Furnace and air conditioning systems</li>
<li>Lights</li>
</ul>
</li><br>

<li><b>Telemetry and Security Devices:</b>
<ul>
<li>Utility meters</li>
<li>Smoke detectors and burglar alarms</li>
<li>Thermostats</li>
<li>Baby monitors/cameras</li>
</ul>
</li>
</ol><br>

<b>Purpose:</b> Home networks enable automation, remote monitoring, energy management, security, and convenience by interconnecting all these devices into a unified, Internet-accessible system.`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 13,
    question: `<b>a)</b> List the three (03) rules for data transfer in network communication.<br><br><b>b)</b> Explain each rule briefly, describing how data flows in each transmission mode.`,
    modelAnswer: `<b>a) Three Rules for Data Transfer:</b><br>
<ol>
<li>Simplex transmission</li>
<li>Half-duplex transmission</li>
<li>Full-duplex transmission</li>
</ol><br>

<b>b) Explanation of Each Transmission Mode:</b><br><br>

<b>1. Simplex Transmission:</b><br>
Data flows in only one direction. Communication is unidirectional, where one device is always the sender and the other is always the receiver. The receiver cannot send data back to the sender.<br>
<b>Example:</b> Traditional television broadcasting, where the TV station transmits and the TV receiver only receives.<br><br>

<b>2. Half-Duplex Transmission:</b><br>
Data can flow in both directions, but not simultaneously. Devices can both send and receive data, but only one device can transmit at a time. When one device is sending, the other must be receiving.<br>
<b>Example:</b> Walkie-talkies, where users must take turns speaking and listening.<br><br>

<b>3. Full-Duplex Transmission:</b><br>
Data can flow in both directions simultaneously. Both devices can send and receive data at the same time, allowing for true bidirectional communication without waiting for one transmission to complete before starting another.<br>
<b>Example:</b> Telephone conversations, where both parties can speak and hear simultaneously.`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 14,
    question: `Describe the <b>Ring Topology</b> for LANs, including its advantages and disadvantages. Also explain the difference between <b>single ring</b> and <b>dual ring</b> configurations.`,
    modelAnswer: `<b>Ring Topology Description:</b><br>
In ring topology, each computer connects to two other computers, joining them in a circle creating a unidirectional path where data travels in one direction around the ring. Each entity participating in the ring reads a message, then regenerates it and hands it to its neighbor on the ring.<br><br>

<b>Advantages of Ring Topology:</b><br>
<ul>
<li>No need for a server to control the connectivity among the nodes, making it simpler to manage</li>
<li>Minimum collision in single ring configuration, as data travels in one predetermined direction</li>
<li>Each device acts as a repeater, regenerating the signal as it passes through, which helps maintain signal strength</li>
</ul><br>

<b>Disadvantages of Ring Topology:</b><br>
<ul>
<li>The ring makes it difficult to add new computers without disrupting the network</li>
<li>Unlike a star topology network, the ring topology network will go down if one entity is removed or fails, as the circular path is broken</li>
<li>Troubleshooting can be difficult as a problem anywhere in the ring affects the entire network</li>
</ul><br>

<b>Single Ring vs Dual Ring:</b><br><br>

<b>Single Ring:</b><br>
All devices share a single cable forming one circular path. Data travels in one direction only around the ring. If the ring is broken at any point, the entire network fails.<br><br>

<b>Dual Ring:</b><br>
Consists of two rings where data can be sent in both directions (clockwise and counterclockwise). This provides redundancy - if one ring fails, data can still flow through the second ring, making the network more fault-tolerant and reliable.`,
    createdAt: '2025-01-07',
    model: 'Sonnet 4'
  },
  {
    id: 15,
    question: `<b>a)</b> Briefly describe what a <b>Wireless WAN</b> is.<br><br><b>b)</b> List three (03) characteristics of Wireless WAN technology.`,
    modelAnswer: `<b>a) Wireless WAN (Wide Area Network):</b><br>
A Wireless WAN is a wide area network where separate areas of coverage or cells are connected wirelessly to provide service to a large geographic area. It enables wireless communication over vast distances, extending beyond the limitations of traditional wired WANs.<br><br>

<b>b) Three Characteristics of Wireless WAN:</b><br><br>

<ol>
<li><b>Cellular Coverage Structure:</b> WWANs use a cellular structure with separate areas of coverage (cells) that are interconnected wirelessly, allowing for continuous service across large geographic regions.</li><br>

<li><b>Modulation Technology:</b> WWANs make use of technologies that focus on modulation of both voice and data, enabling them to carry multiple types of communication signals efficiently.</li><br>

<li><b>Radio Frequency Design:</b> WWANs exclusively use Radio Frequency (RF) signals that are specifically designed to accommodate many users simultaneously. This multi-user capability is essential for providing service to large populations across wide geographic areas.</li>
</ol>`,
    createdAt: '2025-01-06',
    model: 'Sonnet 4'
  }
];

