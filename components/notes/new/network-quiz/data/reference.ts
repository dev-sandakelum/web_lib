export const ReferenceData = [
  {
    id: 1,
    question: `<b>a)</b> Briefly describe the two major types of <b>Network Architecture</b>.<br><br><b>b)</b> List four (04) advantages of <b>Peer-to-Peer Architecture</b>.`,
    modelAnswer: `<b>a) Two Major Types of Network Architecture:</b><br><br>

<b>1. Peer-to-Peer Architecture:</b><br>
Computers connect with each other in a workgroup to share files, printers, and Internet access. This architecture is used to connect a small number of computers where all peers have equal status and can act as both clients and servers.<br><br>

<b>2. Client-Server Architecture:</b><br>
Sends information from a client computer to a server, which then relays the information back to the client's computer, or to other computers on the network. This architecture has a centralized approach with dedicated servers providing services to client computers.<br><br>

<b>b) Four Advantages of Peer-to-Peer Architecture:</b><br>
<ol>
<li><b>Easy Installation and Configuration:</b> The network is simple to set up without requiring complex configurations or specialized expertise.</li><br>

<li><b>Resource Sharing:</b> All resources and contents are shared by all peers, allowing every computer to access shared files and devices.</li><br>

<li><b>High Reliability:</b> More reliable as central dependency is eliminated. If one peer fails, others can continue operating independently.</li><br>

<li><b>Low Cost:</b> Comparatively very low cost as there is no need for expensive dedicated servers or full-time System Administrator.</li>
</ol>`,
    createdAt: '2025-01-20',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `Compare <b>Peer-to-Peer Architecture</b> and <b>Client-Server Architecture</b> considering their advantages and disadvantages in terms of:<br>
<b>i)</b> Security<br>
<b>ii)</b> Administration<br>
<b>iii)</b> Cost<br>
<b>iv)</b> Reliability`,
    modelAnswer: `<b>Comparison of P2P and Client-Server Architecture:</b><br><br>

<b>i) Security:</b><br>
<ul>
<li><b>Peer-to-Peer:</b> Very low security with difficult security policy enforcement. Malware can easily be transmitted between peers as there is no centralized control.</li>
<li><b>Client-Server:</b> Enhanced security as only administrators have access to servers, providing centralized security management and better protection against threats.</li>
</ul><br>

<b>ii) Administration:</b><br>
<ul>
<li><b>Peer-to-Peer:</b> Difficult to administer due to decentralized system. No need for a full-time System Administrator, but this makes management inconsistent. Data recovery or backup is very difficult.</li>
<li><b>Client-Server:</b> Centrally administrated and controlled, facilitating easier resource sharing and system backup and recovery. However, requires an expert to configure the network.</li>
</ul><br>

<b>iii) Cost:</b><br>
<ul>
<li><b>Peer-to-Peer:</b> Comparatively very low cost as no expensive servers or dedicated administrator needed.</li>
<li><b>Client-Server:</b> High cost for servers and professional configuration services. More expensive to implement and maintain.</li>
</ul><br>

<b>iv) Reliability:</b><br>
<ul>
<li><b>Peer-to-Peer:</b> More reliable in terms of distributed operation as central dependency is eliminated. If one peer fails, others continue working.</li>
<li><b>Client-Server:</b> Introduces a single point of failure - if the server fails, the entire network functionality is compromised. May also experience network congestion.</li>
</ul>`,
    createdAt: '2025-01-19',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `Describe four (04) situations where <b>Peer-to-Peer Architecture</b> is appropriate for implementation.`,
    modelAnswer: `<b>Four Situations Where P2P Architecture is Appropriate:</b><br><br>

<ol>
<li><b>Small User Base (10 or fewer users):</b> P2P is suitable when the network needs to support only a small number of users, typically 10 or fewer. This limited scale makes the decentralized nature of P2P manageable and cost-effective.</li><br>

<li><b>No Specialized Services Required:</b> When the organization does not require specialized services such as centralized databases, web servers, or application servers, P2P provides sufficient functionality for basic file and printer sharing needs.</li><br>

<li><b>Security is Not an Issue:</b> P2P is appropriate when security is not a critical concern for the organization. This might apply to environments where sensitive data is not handled or where the risk of security breaches is minimal and acceptable.</li><br>

<li><b>Limited Growth in Foreseeable Future:</b> When there are no plans for significant network expansion or growth in the near future, P2P architecture is suitable. The network's simple structure works well for stable, small-scale operations without scalability requirements.</li>
</ol>`,
    createdAt: '2025-01-18',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `<b>a)</b> Briefly explain what the <b>OSI Reference Model</b> is and state how many layers it contains.<br><br><b>b)</b> List all seven (07) layers of the OSI model from top to bottom.`,
    modelAnswer: `<b>a) OSI Reference Model:</b><br>
The OSI (Open Systems Interconnection) Reference Model was developed by the International Standard Organization (ISO) in the late 1970s. It is an open system with a set of protocols that allow any two different systems to communicate. The OSI model divides the communications process into <b>seven layers</b>. Each communicating user or program is at a computer that can provide those seven layers of function, enabling standardized communication between different computer systems.<br><br>

<b>b) Seven Layers of OSI Model (Top to Bottom):</b><br>
<ol>
<li><b>Application Layer</b> (Layer 7)</li>
<li><b>Presentation Layer</b> (Layer 6)</li>
<li><b>Session Layer</b> (Layer 5)</li>
<li><b>Transport Layer</b> (Layer 4)</li>
<li><b>Network Layer</b> (Layer 3)</li>
<li><b>Data Link Layer</b> (Layer 2)</li>
<li><b>Physical Layer</b> (Layer 1)</li>
</ol>`,
    createdAt: '2025-01-17',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `Describe the functions of the following OSI model layers:<br>
<b>a)</b> Application Layer<br>
<b>b)</b> Presentation Layer<br>
<b>c)</b> Session Layer`,
    modelAnswer: `<b>a) Application Layer (Layer 7):</b><br>
The Application Layer is responsible for providing services to the user and enabling users to access network resources. It contains a variety of protocols that are commonly needed by users, including:<br>
<ul>
<li><b>HTTP (Hypertext Transfer Protocol):</b> Forms the basis for the World Wide Web</li>
<li>Other protocols for file transfer, electronic mail, and network news</li>
</ul>
This layer provides the interface between applications and the network, allowing users to interact with network services.<br><br>

<b>b) Presentation Layer (Layer 6):</b><br>
The Presentation Layer is concerned with the syntax and semantics of information exchanged between two systems. It performs specific functions to ensure data is readable by the receiving system:<br>
<ul>
<li><b>Encryption/Decryption:</b> Secures data during transmission</li>
<li><b>Compression:</b> Reduces data size for efficient transmission</li>
<li><b>Translation:</b> Converts data formats between different systems (e.g., character encoding, data representation)</li>
</ul>
This layer acts as a translator, ensuring that data sent from one system can be understood by another.<br><br>

<b>c) Session Layer (Layer 5):</b><br>
The Session Layer controls the dialogues (connections) between computers. Its main functions include:<br>
<ul>
<li>Establishes connections between local and remote applications</li>
<li>Manages ongoing sessions during data transfer</li>
<li>Synchronizes the connections to ensure proper data flow</li>
</ul>
This layer is responsible for setting up, coordinating, and terminating conversations, exchanges, and dialogues between applications at each end of a communication.`,
    createdAt: '2025-01-16',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `<b>a)</b> Describe the purpose and main functions of the <b>Transport Layer</b> in the OSI model.<br><br><b>b)</b> List five (05) specific functions performed by the Transport Layer.`,
    modelAnswer: `<b>a) Purpose of Transport Layer (Layer 4):</b><br>
The purpose of the Transport Layer is to provide a reliable mechanism for the exchange of data between two processes in different computers. It acts as an intermediary between the upper application layers and the lower network layers, ensuring end-to-end communication reliability.<br><br>

The Transport Layer ensures that:<br>
<ul>
<li>Data units are delivered error free</li>
<li>Data units are delivered in sequence</li>
<li>There is no loss or duplication of data units</li>
<li>Connectionless or connection-oriented service is provided as needed</li>
</ul><br>

<b>b) Five Specific Functions of Transport Layer:</b><br>
<ol>
<li><b>Port Addressing:</b> Identifies specific applications or services on a computer using port numbers, enabling multiple applications to use the network simultaneously.</li><br>

<li><b>Segmentation and Reassembling:</b> Breaks large messages into smaller segments for transmission and reassembles them at the destination.</li><br>

<li><b>Connection Control:</b> Provides both connectionless and connection-oriented services depending on application requirements.</li><br>

<li><b>End-to-End Flow Control:</b> Manages the rate of data transmission between sender and receiver to prevent overwhelming the receiving system.</li><br>

<li><b>Error Control:</b> Detects and corrects errors in transmitted data, ensuring data integrity through mechanisms like acknowledgments and retransmissions.</li>
</ol>`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `<b>a)</b> Describe the responsibilities of the <b>Network Layer</b> in the OSI model.<br><br><b>b)</b> Explain what is meant by <b>logical addressing</b> and <b>routing</b> at the Network Layer.`,
    modelAnswer: `<b>a) Responsibilities of Network Layer (Layer 3):</b><br>
The Network Layer is responsible for the delivery of individual packets from the source host to the destination host. It handles the transmission of data across multiple networks, determining the best path for data to travel from source to destination. This layer is concerned with three main aspects:<br>
<ul>
<li>Logical addressing (IP Address)</li>
<li>Routing (Source to destination transmission between networks)</li>
<li>Path determination</li>
</ul><br>

<b>b) Logical Addressing and Routing:</b><br><br>

<b>Logical Addressing:</b><br>
Logical addressing refers to the use of IP (Internet Protocol) addresses to identify devices on a network. Unlike physical addresses (MAC addresses) which are fixed in hardware, logical addresses are assigned and can be changed. IP addresses enable the Network Layer to identify both the source and destination of packets across different networks, making it possible for data to be routed correctly through interconnected networks.<br><br>

<b>Routing:</b><br>
Routing is the process of selecting the best path for data transmission from source to destination across multiple networks. The Network Layer uses routing protocols and algorithms to:<br>
<ul>
<li>Determine the most efficient path through interconnected networks</li>
<li>Forward packets from one network to another</li>
<li>Adapt to network changes and find alternative paths when needed</li>
<li>Ensure packets reach their destination even when multiple routes are available</li>
</ul>
Routing enables communication between devices on different networks by forwarding packets through intermediate routers.`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `<b>a)</b> Describe the main responsibility of the <b>Data Link Layer</b> in the OSI model.<br><br><b>b)</b> Explain the four (04) functions performed by the Data Link Layer.`,
    modelAnswer: `<b>a) Main Responsibility of Data Link Layer (Layer 2):</b><br>
The Data Link Layer is responsible for moving frames from one node to the next. It provides reliable transit of data across a physical link, handling the communication between adjacent network nodes connected by a physical medium.<br><br>

<b>b) Four Functions of Data Link Layer:</b><br><br>

<ol>
<li><b>Framing:</b> Organizes the stream of bits received from the Physical Layer into manageable data units called frames. This process structures the raw bit stream into discrete, identifiable packages for transmission and reception.</li><br>

<li><b>Physical Addressing (MAC Address):</b> Adds physical addresses (Media Access Control addresses) to frames to identify the source and destination devices on the local network. MAC addresses are hardware addresses burned into network interface cards.</li><br>

<li><b>Flow Control:</b> Provides mechanisms to prevent overwhelming the receiver with too much data at once. This ensures that a fast sender does not overrun a slower receiver, maintaining smooth data transmission.</li><br>

<li><b>Error Control:</b> Detects and corrects errors that occur during frame transmission. Uses trailer information for error detection and implements retransmission mechanisms when errors are detected, ensuring reliable node-to-node delivery.</li>
</ol>`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `<b>a)</b> Describe the major function of the <b>Physical Layer</b> in the OSI model.<br><br><b>b)</b> Briefly explain what types of data and signals can be transmitted at the Physical Layer.`,
    modelAnswer: `<b>a) Major Function of Physical Layer (Layer 1):</b><br>
The major function of the Physical Layer is to move data in the form of electromagnetic signals across a transmission medium. It is responsible for the movement of individual bits from one node to the next, handling the actual physical connection between devices and the transmission of raw bit streams over the physical medium.<br><br>

This layer deals with the mechanical, electrical, and procedural characteristics of the physical medium, defining aspects such as:<br>
<ul>
<li>Voltage levels</li>
<li>Timing of signals</li>
<li>Physical data rates</li>
<li>Maximum transmission distances</li>
<li>Physical connectors and cable specifications</li>
</ul><br>

<b>b) Types of Data and Signals at Physical Layer:</b><br>
At the Physical Layer, both data and signals can be either <b>analog or digital</b>:<br><br>

<b>Digital Data:</b> Discrete values represented as 0s and 1s<br>
<b>Digital Signals:</b> Discrete electromagnetic pulses representing digital data<br><br>

<b>Analog Data:</b> Continuous values such as sound waves or video signals<br>
<b>Analog Signals:</b> Continuous electromagnetic waves representing analog data<br><br>

The Physical Layer must handle conversions between these formats as needed, depending on the transmission medium and the type of data being transmitted. Different encoding schemes are used to represent data as signals appropriate for the transmission medium being used.`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 10,
    question: `<b>a)</b> Briefly explain when and why the <b>TCP/IP Reference Model</b> was developed and how it differs from the OSI model in terms of layers.<br><br><b>b)</b> List the four (04) layers of the TCP/IP model from top to bottom.`,
    modelAnswer: `<b>a) TCP/IP Reference Model Development:</b><br>
The TCP/IP protocol suite was developed prior to the OSI model in the late 1960s and early 1970s. Therefore, the layers in the TCP/IP protocol suite do not match exactly with those in the OSI model. <br><br>

TCP/IP was developed earlier than the OSI 7-layer model as a practical implementation for the ARPANET (the precursor to the Internet), while the OSI model was developed later as a theoretical framework. The original TCP/IP protocol suite was defined as <b>four software layers</b> built upon the hardware, whereas the OSI model has <b>seven layers</b>.<br><br>

The key difference is that TCP/IP was designed based on practical networking needs and real-world implementation, making it more streamlined with only 4 layers, while OSI was designed as a comprehensive theoretical model with 7 layers to cover all possible aspects of network communication.<br><br>

<b>b) Four Layers of TCP/IP Model (Top to Bottom):</b><br>
<ol>
<li><b>Application Layer</b> (Layer 4)</li>
<li><b>Transport Layer</b> (Layer 3)</li>
<li><b>Internet Layer</b> (Layer 2)</li>
<li><b>Host-to-Network Layer</b> (Layer 1)</li>
</ol>`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 11,
    question: `Describe the <b>Application Layer</b> of the TCP/IP model, including its purpose and four (04) protocols that operate at this layer with their functions.`,
    modelAnswer: `<b>Application Layer of TCP/IP Model:</b><br><br>

<b>Purpose:</b><br>
The Application Layer contains all the higher-level protocols and allows peer entities to carry on conversations. It provides network services directly to user applications and end-users.<br><br>

<b>Four Protocols Operating at Application Layer:</b><br><br>

<ol>
<li><b>TELNET (Telecommunication Network):</b><br>
A two-way communication protocol that allows connecting to a remote machine and running applications on it. It provides terminal emulation capabilities, enabling users to access and control remote computers as if they were sitting at the physical terminal.</li><br>

<li><b>FTP (File Transfer Protocol):</b><br>
Allows file transfer amongst computer users connected over a network. It is reliable, simple, and efficient, enabling users to upload, download, and manage files on remote systems with features like authentication and directory navigation.</li><br>

<li><b>SMTP (Simple Mail Transfer Protocol):</b><br>
Used to transport electronic mail between source and destination, directed via a route. SMTP handles the sending and relaying of email messages across networks, ensuring mail delivery from sender to recipient's mail server.</li><br>

<li><b>DNS (Domain Name Server):</b><br>
Resolves an IP address into a textual address (domain name) for hosts connected over a network. DNS translates human-readable domain names (like www.example.com) into machine-readable IP addresses (like 192.168.1.1), making it easier for users to access network resources without memorizing numerical addresses.</li>
</ol>`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 12,
    question: `<b>a)</b> Describe the main functions of the <b>Transport Layer</b> in the TCP/IP model.<br><br><b>b)</b> List four (04) specific operations performed by the Transport Layer.`,
    modelAnswer: `<b>a) Main Functions of Transport Layer in TCP/IP:</b><br>
The Transport Layer in the TCP/IP model serves as an intermediary between the Application Layer and the Internet Layer. It is responsible for managing data transmission between applications on different hosts and ensuring reliable end-to-end communication. The layer decides on transmission strategies and prepares data for network transmission.<br><br>

<b>b) Four Specific Operations Performed:</b><br><br>

<ol>
<li><b>Path Decision and Multiplexing:</b><br>
Decides if data transmission should be on parallel paths or a single path. Performs multiplexing functions to allow multiple applications to use the network simultaneously, and segments or splits data as needed for efficient transmission.</li><br>

<li><b>Read/Write Operations:</b><br>
Applications can read from and write to the transport layer. This provides an interface for applications to send and receive data, adding necessary header information to the data for proper routing and delivery.</li><br>

<li><b>Message Segmentation:</b><br>
Breaks the message (data) into small units for efficient handling by the network layer. This ensures that large messages are divided into manageable packet sizes that can be transmitted effectively across the network.</li><br>

<li><b>Packet Sequencing:</b><br>
Arranges the packets to be sent in sequence. This ensures that data segments are numbered and can be reassembled in the correct order at the destination, even if they arrive out of sequence due to different network paths.</li>
</ol>`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 13,
    question: `<b>a)</b> Describe the purpose and importance of the <b>Internet Layer</b> in the TCP/IP model.<br><br><b>b)</b> Explain three (03) key characteristics of packet transmission at the Internet Layer.`,
    modelAnswer: `<b>a) Purpose and Importance of Internet Layer:</b><br>
The Internet Layer is based on the selection of a packet-switching network which uses a connectionless internetwork layer. It is the layer which holds the whole TCP/IP architecture together, making it the fundamental layer for internetworking. The Internet Layer uses IP (Internet Protocol) and is responsible for two main functions:<br>
<ul>
<li>Delivering IP packets to their destinations</li>
<li>Performing routing to determine the best path for packets</li>
</ul><br>

This layer is crucial because it enables communication across different networks, allowing packets to traverse multiple network segments to reach their final destination.<br><br>

<b>b) Three Key Characteristics of Packet Transmission:</b><br><br>

<ol>
<li><b>Independent Packet Travel:</b><br>
The Internet Layer helps each packet to travel independently to the destination. Each packet contains complete addressing information and can take its own route through the network, independent of other packets from the same message.</li><br>

<li><b>Variable Packet Order:</b><br>
The order in which packets are received is different from the way they are sent. Packets may take different routes and experience different delays, causing them to arrive out of sequence. The receiving system must handle reordering at higher layers.</li><br>

<li><b>Connectionless Communication:</b><br>
The Internet Layer operates in a connectionless manner, meaning no dedicated path is established before data transmission. Each packet is treated independently and routed based on current network conditions, providing flexibility but requiring upper layers to ensure reliability and proper sequencing.</li>
</ol>`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 14,
    question: `Describe the <b>Host-to-Network Layer</b> of the TCP/IP model, including its position, characteristics, and why TCP/IP does not define specific protocols at this layer.`,
    modelAnswer: `<b>Host-to-Network Layer of TCP/IP Model:</b><br><br>

<b>Position and Basic Characteristics:</b><br>
The Host-to-Network Layer is the lowest layer of all in the TCP/IP model. It serves as the foundation upon which the other layers are built, providing the physical connection to the network.<br><br>

<b>Key Characteristics:</b><br><br>

<ol>
<li><b>No Specific Protocol Definition:</b><br>
TCP/IP does not define any specific protocol at this layer. This is a deliberate design choice that provides flexibility in the TCP/IP architecture.</li><br>

<li><b>Universal Protocol Support:</b><br>
The layer supports all standard and proprietary protocols. This allows TCP/IP to work with various types of network hardware and technologies without modification to the upper layers.</li><br>

<li><b>Host Connection Protocols:</b><br>
Protocols are used to connect to the host, so that packets can be sent over it. The specific protocol used depends on the underlying network technology.</li><br>

<li><b>Variable Implementation:</b><br>
The implementation varies from host to host and network to network. Different physical networks use different technologies and protocols at this layer.</li><br>

<li><b>Network Type Flexibility:</b><br>
A network in a TCP/IP internetwork can be either a local-area network (LAN) or a wide area network (WAN). The Host-to-Network Layer adapts to whatever physical network technology is being used.</li>
</ol><br>

<b>Why No Specific Protocol is Defined:</b><br>
TCP/IP was designed to be network-independent, allowing it to run over any type of physical network. By not defining specific protocols at this layer, TCP/IP can adapt to existing and future network technologies, including Ethernet, Wi-Fi, fiber optics, or any other physical transmission method. This flexibility has been crucial to TCP/IP's success and widespread adoption across diverse network infrastructures.`,
    createdAt: '2025-01-07',
    model: 'Sonnet 4'
  },
  {
    id: 15,
    question: `Compare the <b>OSI Reference Model</b> and the <b>TCP/IP Reference Model</b> by describing:<br>
<b>a)</b> The number of layers in each model<br>
<b>b)</b> Three (03) key differences in their design and purpose<br>
<b>c)</b> How the layers correspond between the two models`,
    modelAnswer: `<b>a) Number of Layers:</b><br>
<ul>
<li><b>OSI Reference Model:</b> Contains seven (7) layers</li>
<li><b>TCP/IP Reference Model:</b> Contains four (4) layers</li>
</ul><br>

<b>b) Three Key Differences in Design and Purpose:</b><br><br>

<ol>
<li><b>Development Approach:</b><br>
<b>OSI Model:</b> Developed by ISO in the late 1970s as a theoretical framework and international standard for how computer systems should communicate. It was designed before protocols were developed.<br>
<b>TCP/IP Model:</b> Developed earlier as a practical implementation for ARPANET and the Internet. It was based on existing protocols and real-world networking needs.</li><br>

<li><b>Protocol Specificity:</b><br>
<b>OSI Model:</b> Protocol-independent, serving as a conceptual framework that can accommodate various protocol suites. It defines what each layer should do without specifying how.<br>
<b>TCP/IP Model:</b> Built around specific protocols (TCP, IP, etc.) that were already in use. The model describes the actual protocols used in the Internet.</li><br>

<li><b>Adoption and Usage:</b><br>
<b>OSI Model:</b> Widely used as a reference model for teaching and discussing network concepts, but OSI protocols themselves are rarely implemented in practice.<br>
<b>TCP/IP Model:</b> The practical standard for the Internet and most modern networks, with its protocols (TCP, IP, HTTP, FTP, etc.) being universally implemented.</li>
</ol><br>

<b>c) Layer Correspondence Between Models:</b><br><br>

<table border="1" cellpadding="5">
<tr>
<th>OSI Model (7 Layers)</th>
<th>TCP/IP Model (4 Layers)</th>
</tr>
<tr>
<td>7. Application Layer<br>6. Presentation Layer<br>5. Session Layer</td>
<td>4. Application Layer</td>
</tr>
<tr>
<td>4. Transport Layer</td>
<td>3. Transport Layer</td>
</tr>
<tr>
<td>3. Network Layer</td>
<td>2. Internet Layer</td>
</tr>
<tr>
<td>2. Data Link Layer<br>1. Physical Layer</td>
<td>1. Host-to-Network Layer</td>
</tr>
</table><br>

The TCP/IP Application Layer combines the functions of OSI's Application, Presentation, and Session layers. The Transport and Network layers have direct equivalents (Transport and Internet layers). The TCP/IP Host-to-Network Layer encompasses both OSI's Data Link and Physical layers.`,
    createdAt: '2025-01-06',
    model: 'Sonnet 4'
  }
];

