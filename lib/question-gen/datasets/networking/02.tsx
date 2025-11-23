// datasets/computer-networks/lesson02.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson02Dataset: Dataset = {
  id: "networks-02",
  topicCount: 17,
  category: "Computer Networks",
  subcategory: "Network Architecture & Reference Models",
  description: "Network Architecture (Client-Server and Peer-to-Peer), OSI Reference Model (7 Layers), and TCP/IP Reference Model (4 Layers) with detailed layer functions.",
  topics: [
    "Network Architecture",
    "Client-Server Architecture",
    "Peer-to-Peer Architecture",
    "OSI Reference Model",
    "OSI Layer 7: Application Layer",
    "OSI Layer 6: Presentation Layer",
    "OSI Layer 5: Session Layer",
    "OSI Layer 4: Transport Layer",
    "OSI Layer 3: Network Layer",
    "OSI Layer 2: Data Link Layer",
    "OSI Layer 1: Physical Layer",
    "TCP/IP Reference Model",
    "TCP/IP Layer 4: Application Layer",
    "TCP/IP Layer 3: Transport Layer",
    "TCP/IP Layer 2: Internet Layer",
    "TCP/IP Layer 1: Host-to-Network Layer",
    "Comparison of OSI and TCP/IP Models",
  ],
  content: `
<TOPIC_START index="0" title="Network Architecture">
1.0 Network Architecture

1.1 What is Network Architecture?
• Network architecture refers to the way a network is designed and built.

1.2 Types of Network Architecture
The two major types of network architecture are:

| Architecture Type | Description |
| :--- | :--- |
| **Peer-to-peer architecture** | Computers connect with each other in a workgroup to share files, printers, and Internet access. This is used to connect a small number of computers. |
| **Client/Server architecture** | Sends information from a client computer to a server, which then relays the information back to the client's computer, or to other computers on the network. |
<TOPIC_END>

<TOPIC_START index="1" title="Client-Server Architecture">
2.0 Client-Server Architecture

2.1 Advantages of Client/Server Networks
Client/server networks provide several advantages:

| Advantage | Description |
| :--- | :--- |
| **Resource Sharing** | Facilitate resource sharing through central administration and control. |
| **Backup and Recovery** | Facilitate system backup and recovery. |
| **Enhanced Security** | Only administrators can have access to Server. |
| **Scalability** | Support more users - difficult to achieve with peer-to-peer networks. |

2.2 Disadvantages of Client/Server Networks
Client/server networks have several disadvantages:

| Disadvantage | Description |
| :--- | :--- |
| **High Cost** | High cost for Servers. |
| **Expertise Required** | Need an expert to configure the network. |
| **Single Point of Failure** | Introduce a single point of failure to the system. |
| **Network Congestion** | Congestion in Network. |
<TOPIC_END>

<TOPIC_START index="2" title="Peer-to-Peer Architecture">
3.0 Peer-to-Peer Architecture

3.1 What is Peer-to-Peer?
• Peer-to-peer network is also called workgroup.
• No hierarchy among computers - all are equal.
• No administrator responsible for the network.

3.2 When Peer-to-Peer is Appropriate
Peer-to-peer network is appropriate when:
* 10 or fewer users
* No specialized services are required
* Security is not an issue
* Only limited growth in the foreseeable future

3.3 Advantages of Peer-to-Peer Networks
Peer-to-peer networks provide several advantages:

| Advantage | Description |
| :--- | :--- |
| **Easy Installation** | It is easy to install and so is the configuration of computers on this network. |
| **Resource Sharing** | All the resources and contents are shared by all the peers, unlike server-client architecture where the Server shares all the contents and resources. |
| **Reliability** | P2P is more reliable as central dependency is eliminated. Failure of one peer doesn't affect the functioning of other peers. In case of a Client-Server network, if the server goes down the whole network gets affected. |
| **No Administrator Needed** | There is no need for a full-time System Administrator. Every user is the administrator of his machine. User can control their shared resources. |
| **Low Cost** | The overall cost of building and maintaining this type of network is comparatively very less. |

3.4 Disadvantages of Peer-to-Peer Networks
Peer-to-peer networks have several disadvantages:

| Disadvantage | Description |
| :--- | :--- |
| **Decentralized Administration** | The whole system is decentralized thus it is difficult to administer. One person cannot determine the whole accessibility setting of the whole network. |
| **Security Policy** | Difficult to uphold security policy. |
| **Low Security** | Security in this system is very less. Malware (viruses, spy-wares, trojans, etc) can easily be transmitted over this P2P architecture. |
| **Data Backup** | Data recovery or backup is very difficult. Each computer should have its own backup system. |
| **Copyright Issues** | Lot of movies, music, and other copyrighted files are transferred using this type of file transfer. P2P is the technology used in torrents. |
<TOPIC_END>

<TOPIC_START index="3" title="OSI Reference Model">
4.0 OSI Reference Model

4.1 Introduction to OSI Model
• In 1947, the international standard organization (ISO) is a multinational body dedicated to worldwide agreement on international standards.
• In late 1970s an open system is a set of protocols that allow any two different systems to communicate.
• It divides the communications process into seven layers.
• Each communicating user or program is at a computer that can provide those seven layers of function.

4.2 The Seven Layers of OSI Model
The OSI Reference Model consists of 7 layers:
1. Application Layer
2. Presentation Layer
3. Session Layer
4. Transport Layer
5. Network Layer
6. Data Link Layer
7. Physical Layer
<TOPIC_END>

<TOPIC_START index="4" title="OSI Layer 7: Application Layer">
5.0 OSI Layer 7: Application Layer

Application Layer functions:
* The application layer is responsible for providing services to the user and enable users to access network resources
* The application layer contains a variety of protocols that are commonly needed by users
* One widely used application protocol is HTTP (Hypertext Transfer Protocol), which is the basis for World Wide Web
* When a browser wants a Web page, it sends the name and page back
* Other application protocols are used for file transfer, electronic mail, and network news
<TOPIC_END>

<TOPIC_START index="5" title="OSI Layer 6: Presentation Layer">
6.0 OSI Layer 6: Presentation Layer

Presentation Layer functions:
* Concerned with syntax and semantics of information exchanged between 2 systems
* Performs specific functions that are requested regularly by applications

Key functions include:
* Encryption/Decryption
* Compression
* Translation
<TOPIC_END>

<TOPIC_START index="6" title="OSI Layer 5: Session Layer">
7.0 OSI Layer 5: Session Layer

Session Layer functions:
* The session layer controls the dialogues (connections) between computers
* It establishes, manages, and synchronizes the connections between the local and remote applications
<TOPIC_END>

<TOPIC_START index="7" title="OSI Layer 4: Transport Layer">
8.0 OSI Layer 4: Transport Layer

• Purpose of this layer is to provide a reliable mechanism for the exchange of data between two processes in different computers.

Transport Layer ensures:
* That the data units are delivered error free
* That data units are delivered in sequence
* That there is no loss or duplication of data units
* Provides connectionless or connection oriented service

Transport Layer functions:
* **Port addressing** - Identifying specific applications
* **Segmentation and reassembling** - Breaking data into segments
* **Connection control** - Managing connections
* **End-to-end flow control** - Controlling data flow
* **Error control** - Detecting and correcting errors
<TOPIC_END>

<TOPIC_START index="8" title="OSI Layer 3: Network Layer">
9.0 OSI Layer 3: Network Layer

• The network layer is responsible for the delivery of individual packets from the source host to the destination host.

Network Layer is concerned with:
* **Logical addressing (IP Address)** - Assigning logical addresses
* **Routing** - Source to destination transmission between networks
* **Path determination** - Choosing the best path
<TOPIC_END>

<TOPIC_START index="9" title="OSI Layer 2: Data Link Layer">
10.0 OSI Layer 2: Data Link Layer

• Data link layer is responsible for moving frames from one node to the next.

Data Link Layer is concerned with:
* **Framing** - Stream of bits into manageable data units
* **Physical Addressing (MAC address)** - Hardware addressing
* **Flow Control** - Mechanism for overwhelming the receiver
* **Error Control** - Trailer retransmission
<TOPIC_END>

<TOPIC_START index="10" title="OSI Layer 1: Physical Layer">
11.0 OSI Layer 1: Physical Layer

Physical Layer functions:
* One of the major functions of the physical layer is to move data in the form of electromagnetic signals across a transmission medium
* It is responsible for movements of individual bits from one Node to next
* Both data and the signals can be either analog or digital
<TOPIC_END>

<TOPIC_START index="11" title="TCP/IP Reference Model">
12.0 TCP/IP Reference Model

12.1 Introduction to TCP/IP Model
• The TCP/IP protocol suite was developed prior to the OSI model.
• Therefore, the layers in the TCP/IP protocol suite do not match exactly with those in the OSI model.
• The original TCP/IP protocol suite was defined as four software layers built upon the hardware.
• TCP/IP was developed earlier than the OSI 7-layer model, it does not have 7 layers but only 4 layers.

12.2 The Four Layers of TCP/IP Model
The TCP/IP reference model consists of 4 layers:
1. Application Layer
2. Transport Layer
3. Internet Layer
4. Host-to-Network Layer

The TCP/IP reference model includes various protocols.
<TOPIC_END>

<TOPIC_START index="12" title="TCP/IP Layer 4: Application Layer">
13.0 TCP/IP Layer 4: Application Layer

• Application Layer contains all the higher-level protocols.
• It allows peer entities to carry on conversation.

Key protocols in the Application Layer:

| Protocol | Description |
| :--- | :--- |
| **TELNET** | A two-way communication protocol that allows connecting to a remote machine and run applications on it. |
| **FTP (File Transfer Protocol)** | A protocol that allows File transfer amongst computer users connected over a network. It is reliable, simple, and efficient. |
| **SMTP (Simple Mail Transport Protocol)** | A protocol which is used to transport electronic mail between a source and destination, directed via a route. |
| **DNS (Domain Name Server)** | Resolves an IP address into a textual address for Hosts connected over a network. |
<TOPIC_END>

<TOPIC_START index="13" title="TCP/IP Layer 3: Transport Layer">
14.0 TCP/IP Layer 3: Transport Layer

Transport Layer functions:
* It decides if data transmission should be on parallel path or single path
* Functions such as multiplexing, segmenting or splitting on the data is done by transport layer
* The applications can read and write to the transport layer
* Transport layer adds header information to the data
* Transport layer breaks the message (data) into small units so that they are handled more efficiently by the network layer
* Transport layer also arranges the packets to be sent, in sequence
<TOPIC_END>

<TOPIC_START index="14" title="TCP/IP Layer 2: Internet Layer">
15.0 TCP/IP Layer 2: Internet Layer

• Selection of a packet-switching network which is based on a connectionless internetwork layer is called an internet layer.
• It is the layer which holds the whole architecture together.
• It helps the packet to travel independently to the destination.
• Order in which packets are received is different from the way they are sent.
• IP (Internet Protocol) is used in this layer.

Functions performed by the Internet Layer:
* Delivering IP packets
* Performing routing
<TOPIC_END>

<TOPIC_START index="15" title="TCP/IP Layer 1: Host-to-Network Layer">
16.0 TCP/IP Layer 1: Host-to-Network Layer

Host-to-Network Layer characteristics:
* Lowest layer of all
* At this Host-to-Network Layer, TCP/IP does not define any specific protocol
* It supports all the standard and proprietary protocols
* Protocol is used to connect to the host, so that the packets can be sent over it
* Varies from host to host and network to network
* A network in a TCP/IP internetwork can be a local-area network or a wide area network
<TOPIC_END>

<TOPIC_START index="16" title="Comparison of OSI and TCP/IP Models">
17.0 Comparison of OSI and TCP/IP Models

Key differences between OSI and TCP/IP models:

| Aspect | OSI Model | TCP/IP Model |
| :--- | :--- | :--- |
| **Number of Layers** | 7 layers | 4 layers |
| **Development** | Developed by ISO in late 1970s | Developed prior to OSI model |
| **Layer Matching** | Theoretical model | Layers do not match exactly with OSI |
| **Implementation** | Open system protocols | Software layers built upon hardware |
<TOPIC_END>
`
};