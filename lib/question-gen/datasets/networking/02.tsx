// datasets/computer-networks/lesson02.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson02Dataset: Dataset = {
  id: "networks-02",
  category: "Computer Networks",
  subcategory: "Network Architecture & Reference Models",
  description: "Network Architecture (Client-Server and Peer-to-Peer), OSI Reference Model (7 Layers), and TCP/IP Reference Model (4 Layers) with detailed layer functions.",
  content: `
[cite_start]Topic: Network Architecture, OSI Reference Model, and TCP/IP Reference Model [cite: 1, 2, 3]

Objectives:
[cite_start]• Understand network architecture types (Client-Server and Peer-to-Peer) [cite: 4, 5, 6, 7, 8]
[cite_start]• Learn the OSI Reference Model and its seven layers [cite: 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
[cite_start]• Understand the TCP/IP Reference Model and its four layers [cite: 19, 20, 21, 22, 23, 24]
[cite_start]• Identify the functions of each layer in both models [cite: 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24]
[cite_start]• Compare and contrast OSI and TCP/IP models [cite: 19, 20]

---
## Network Architecture

### What is Network Architecture?
[cite_start]• Network architecture refers to the way a network is designed and built [cite: 4].

### Types of Network Architecture
[cite_start]The two major types of network architecture are [cite: 4]:

| Architecture Type | Description |
| :--- | :--- |
| **Peer-to-peer architecture** | [cite_start]Computers connect with each other in a workgroup to share files, printers, and Internet access. This is used to connect a small number of computers [cite: 4]. |
| **Client/Server architecture** | [cite_start]Sends information from a client computer to a server, which then relays the information back to the client's computer, or to other computers on the network [cite: 4]. |

---
## Client-Server Architecture

### Advantages of Client/Server Networks
[cite_start]Client/server networks provide several advantages [cite: 5]:

| Advantage | Description |
| :--- | :--- |
| **Resource Sharing** | [cite_start]Facilitate resource sharing through central administration and control [cite: 5]. |
| **Backup and Recovery** | [cite_start]Facilitate system backup and recovery [cite: 5]. |
| **Enhanced Security** | [cite_start]Only administrators can have access to Server [cite: 5]. |
| **Scalability** | [cite_start]Support more users - difficult to achieve with peer-to-peer networks [cite: 5]. |

### Disadvantages of Client/Server Networks
[cite_start]Client/server networks have several disadvantages [cite: 5]:

| Disadvantage | Description |
| :--- | :--- |
| **High Cost** | [cite_start]High cost for Servers [cite: 5]. |
| **Expertise Required** | [cite_start]Need an expert to configure the network [cite: 5]. |
| **Single Point of Failure** | [cite_start]Introduce a single point of failure to the system [cite: 5]. |
| **Network Congestion** | [cite_start]Congestion in Network [cite: 5]. |

---
## Peer-to-Peer Architecture

### What is Peer-to-Peer?
[cite_start]• Peer-to-peer network is also called workgroup [cite: 6].
[cite_start]• No hierarchy among computers - all are equal [cite: 6].
[cite_start]• No administrator responsible for the network [cite: 6].

### When Peer-to-Peer is Appropriate
[cite_start]Peer-to-peer network is appropriate when [cite: 6]:
* 10 or fewer users
* No specialized services are required
* Security is not an issue
* Only limited growth in the foreseeable future

### Advantages of Peer-to-Peer Networks
[cite_start]Peer-to-peer networks provide several advantages [cite: 7]:

| Advantage | Description |
| :--- | :--- |
| **Easy Installation** | [cite_start]It is easy to install and so is the configuration of computers on this network [cite: 7]. |
| **Resource Sharing** | [cite_start]All the resources and contents are shared by all the peers, unlike server-client architecture where the Server shares all the contents and resources [cite: 7]. |
| **Reliability** | [cite_start]P2P is more reliable as central dependency is eliminated. Failure of one peer doesn't affect the functioning of other peers. In case of a Client-Server network, if the server goes down the whole network gets affected [cite: 7]. |
| **No Administrator Needed** | [cite_start]There is no need for a full-time System Administrator. Every user is the administrator of his machine. User can control their shared resources [cite: 7]. |
| **Low Cost** | [cite_start]The overall cost of building and maintaining this type of network is comparatively very less [cite: 7]. |

### Disadvantages of Peer-to-Peer Networks
[cite_start]Peer-to-peer networks have several disadvantages [cite: 8]:

| Disadvantage | Description |
| :--- | :--- |
| **Decentralized Administration** | [cite_start]The whole system is decentralized thus it is difficult to administer. One person cannot determine the whole accessibility setting of the whole network [cite: 8]. |
| **Security Policy** | [cite_start]Difficult to uphold security policy [cite: 8]. |
| **Low Security** | [cite_start]Security in this system is very less. Malware (viruses, spy-wares, trojans, etc) can easily be transmitted over this P2P architecture [cite: 8]. |
| **Data Backup** | [cite_start]Data recovery or backup is very difficult. Each computer should have its own backup system [cite: 8]. |
| **Copyright Issues** | [cite_start]Lot of movies, music, and other copyrighted files are transferred using this type of file transfer. P2P is the technology used in torrents [cite: 8]. |

---
## OSI Reference Model

### Introduction to OSI Model
[cite_start]• In 1947, the international standard organization (ISO) is a multinational body dedicated to worldwide agreement on international standards [cite: 9].
[cite_start]• In late 1970s an open system is a set of protocols that allow any two different systems to communicate [cite: 9].
[cite_start]• It divides the communications process into seven layers [cite: 9].
[cite_start]• Each communicating user or program is at a computer that can provide those seven layers of function [cite: 9].

### The Seven Layers of OSI Model
[cite_start]The OSI Reference Model consists of 7 layers [cite: 10, 11]:
1. Application Layer
2. Presentation Layer
3. Session Layer
4. Transport Layer
5. Network Layer
6. Data Link Layer
7. Physical Layer

---
## OSI Layer 7: Application Layer

[cite_start]Application Layer functions [cite: 12]:
* The application layer is responsible for providing services to the user and enable users to access network resources
* The application layer contains a variety of protocols that are commonly needed by users
* One widely used application protocol is HTTP (Hypertext Transfer Protocol), which is the basis for World Wide Web
* When a browser wants a Web page, it sends the name and page back
* Other application protocols are used for file transfer, electronic mail, and network news

---
## OSI Layer 6: Presentation Layer

[cite_start]Presentation Layer functions [cite: 13]:
* Concerned with syntax and semantics of information exchanged between 2 systems
* Performs specific functions that are requested regularly by applications

[cite_start]Key functions include [cite: 13]:
* Encryption/Decryption
* Compression
* Translation

---
## OSI Layer 5: Session Layer

[cite_start]Session Layer functions [cite: 14]:
* The session layer controls the dialogues (connections) between computers
* It establishes, manages, and synchronizes the connections between the local and remote applications

---
## OSI Layer 4: Transport Layer

[cite_start]• Purpose of this layer is to provide a reliable mechanism for the exchange of data between two processes in different computers [cite: 15].

[cite_start]Transport Layer ensures [cite: 15]:
* That the data units are delivered error free
* That data units are delivered in sequence
* That there is no loss or duplication of data units
* Provides connectionless or connection oriented service

[cite_start]Transport Layer functions [cite: 15]:
* **Port addressing** - Identifying specific applications
* **Segmentation and reassembling** - Breaking data into segments
* **Connection control** - Managing connections
* **End-to-end flow control** - Controlling data flow
* **Error control** - Detecting and correcting errors

---
## OSI Layer 3: Network Layer

[cite_start]• The network layer is responsible for the delivery of individual packets from the source host to the destination host [cite: 16].

[cite_start]Network Layer is concerned with [cite: 16]:
* **Logical addressing (IP Address)** - Assigning logical addresses
* **Routing** - Source to destination transmission between networks
* **Path determination** - Choosing the best path

---
## OSI Layer 2: Data Link Layer

[cite_start]• Data link layer is responsible for moving frames from one node to the next [cite: 17].

[cite_start]Data Link Layer is concerned with [cite: 17]:
* **Framing** - Stream of bits into manageable data units
* **Physical Addressing (MAC address)** - Hardware addressing
* **Flow Control** - Mechanism for overwhelming the receiver
* **Error Control** - Trailer retransmission

---
## OSI Layer 1: Physical Layer

[cite_start]Physical Layer functions [cite: 18]:
* One of the major functions of the physical layer is to move data in the form of electromagnetic signals across a transmission medium
* It is responsible for movements of individual bits from one Node to next
* Both data and the signals can be either analog or digital

---
## TCP/IP Reference Model

### Introduction to TCP/IP Model
[cite_start]• The TCP/IP protocol suite was developed prior to the OSI model [cite: 19].
[cite_start]• Therefore, the layers in the TCP/IP protocol suite do not match exactly with those in the OSI model [cite: 19].
[cite_start]• The original TCP/IP protocol suite was defined as four software layers built upon the hardware [cite: 19].
[cite_start]• TCP/IP was developed earlier than the OSI 7-layer model, it does not have 7 layers but only 4 layers [cite: 19].

### The Four Layers of TCP/IP Model
[cite_start]The TCP/IP reference model consists of 4 layers [cite: 20]:
1. Application Layer
2. Transport Layer
3. Internet Layer
4. Host-to-Network Layer

[cite_start]The TCP/IP reference model includes various protocols [cite: 20].

---
## TCP/IP Layer 4: Application Layer

[cite_start]• Application Layer contains all the higher-level protocols [cite: 21].
[cite_start]• It allows peer entities to carry on conversation [cite: 21].

[cite_start]Key protocols in the Application Layer [cite: 21]:

| Protocol | Description |
| :--- | :--- |
| **TELNET** | [cite_start]A two-way communication protocol that allows connecting to a remote machine and run applications on it [cite: 21]. |
| **FTP (File Transfer Protocol)** | [cite_start]A protocol that allows File transfer amongst computer users connected over a network. It is reliable, simple, and efficient [cite: 21]. |
| **SMTP (Simple Mail Transport Protocol)** | [cite_start]A protocol which is used to transport electronic mail between a source and destination, directed via a route [cite: 21]. |
| **DNS (Domain Name Server)** | [cite_start]Resolves an IP address into a textual address for Hosts connected over a network [cite: 21]. |

---
## TCP/IP Layer 3: Transport Layer

[cite_start]Transport Layer functions [cite: 22]:
* It decides if data transmission should be on parallel path or single path
* Functions such as multiplexing, segmenting or splitting on the data is done by transport layer
* The applications can read and write to the transport layer
* Transport layer adds header information to the data
* Transport layer breaks the message (data) into small units so that they are handled more efficiently by the network layer
* Transport layer also arranges the packets to be sent, in sequence

---
## TCP/IP Layer 2: Internet Layer

[cite_start]• Selection of a packet-switching network which is based on a connectionless internetwork layer is called an internet layer [cite: 23].
[cite_start]• It is the layer which holds the whole architecture together [cite: 23].
[cite_start]• It helps the packet to travel independently to the destination [cite: 23].
[cite_start]• Order in which packets are received is different from the way they are sent [cite: 23].
[cite_start]• IP (Internet Protocol) is used in this layer [cite: 23].

[cite_start]Functions performed by the Internet Layer [cite: 23]:
* Delivering IP packets
* Performing routing

---
## TCP/IP Layer 1: Host-to-Network Layer

[cite_start]Host-to-Network Layer characteristics [cite: 24]:
* Lowest layer of all
* At this Host-to-Network Layer, TCP/IP does not define any specific protocol
* It supports all the standard and proprietary protocols
* Protocol is used to connect to the host, so that the packets can be sent over it
* Varies from host to host and network to network
* A network in a TCP/IP internetwork can be a local-area network or a wide area network

---
## Comparison of OSI and TCP/IP Models

[cite_start]Key differences between OSI and TCP/IP models [cite: 9, 19]:

| Aspect | OSI Model | TCP/IP Model |
| :--- | :--- | :--- |
| **Number of Layers** | [cite_start]7 layers [cite: 9] | [cite_start]4 layers [cite: 19] |
| **Development** | [cite_start]Developed by ISO in late 1970s [cite: 9] | [cite_start]Developed prior to OSI model [cite: 19] |
| **Layer Matching** | [cite_start]Theoretical model [cite: 9] | [cite_start]Layers do not match exactly with OSI [cite: 19] |
| **Implementation** | [cite_start]Open system protocols [cite: 9] | [cite_start]Software layers built upon hardware [cite: 19] |
`
};