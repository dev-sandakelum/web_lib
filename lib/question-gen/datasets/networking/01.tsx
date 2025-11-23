// ==========================================
// FILE: datasets/computer-networks/lesson01.ts
// ==========================================

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson01Dataset: Dataset = {
  id: "networks-01",
  topicCount: 20,
  category: "Computer Networks",
  subcategory: "Introduction, Network Hardware & Network Software",
  description: "Introduction to Computer Networks, Uses of Networks, Network Hardware (LAN, MAN, WAN, Wireless, Home, Internetworks), Network Software (Protocol Hierarchies, Services, and Protocols).",
  topics: [
    "What is a Computer Network?",
    "Why We Use Computer Networks",
    "Uses of Computer Networks",
    "Network Hardware Overview",
    "Transmission Technologies",
    "Local Area Networks (LAN)",
    "LAN Topology: Ring",
    "LAN Topology: Bus",
    "LAN Topology: Star",
    "Metropolitan Area Network (MAN)",
    "Wide Area Network (WAN)",
    "Wireless WAN",
    "Home Network",
    "Internetworks",
    "Network Software Overview",
    "Functions of Network Software",
    "Protocol Hierarchies",
    "Design Issues for the Layers",
    "Connection-Oriented vs Connectionless Service",
    "Service Primitives and Relationship to Protocols"
  ],
  content: `
<TOPIC_START index="0" title="What is a Computer Network?">
1.0 What is a Computer Network?

1.1 Definition 1
• A computer network is a set of communication elements connected by communication links.
• A network can be defined as two or more computers/nodes connected together in such a way that they can share resources.

1.2 Definition 2
• A computer network is a set of systems/nodes interconnected by communication links that is primarily used for information transfer (information = messages/data from applications).

1.3 Network Components
Computer networks consist of two main components:

| Component | Description |
| :--- | :--- |
| **Systems** | Computers and other end systems (tablets, smartphones, sensors), switches, routers. |
| **Links** | Wired connections including twisted pair, Twinax, coaxial cable, optical fiber. |

1.4 Network Example
Networks can be visualized with various interconnected devices and communication paths.
<TOPIC_END>

<TOPIC_START index="1" title="Why We Use Computer Networks">
2.0 Why We Use Computer Networks

Computer networks provide several important benefits:

| Benefit | Description |
| :--- | :--- |
| **Faster Communication** | Before computer networks, people sent and received information by hand, using the postal service which is slow and unreliable. Computer networks enable faster, more efficient modes of communication such as email and video conferencing. |
| **Standardization** | Computer networks and the sharing of electronic data encourages the use of standard policies and procedures. |
| **Data Protection** | Computer networks provide backup and recovery support for our data redundancy. |
| **Cost Savings** | Computer networks lead to cost savings. |
<TOPIC_END>

<TOPIC_START index="2" title="Uses of Computer Networks">
3.0 Uses of Computer Networks

Computer networks are used in four main areas:
* Business Applications
* Home Applications
* Mobile Users
* Social Issues

3.1 Business Applications
Business applications of computer networks include:
* **Resources sharing** - Sharing hardware, software, and data resources
* **Communication** - Facilitating business communication
* **Business with other companies** - Enabling inter-company transactions

• A client is a program requesting services.
• A service is a program providing services.

3.2 Home Applications
Home applications of computer networks include:
* **Access to remote information** - Accessing information from anywhere
* **Person-to-person communication** - Enabling communication between individuals
* **Interactive Entertainment** - Providing entertainment options
* **Electronic Commerce** - Enabling online shopping and transactions

3.3 Mobile Users
• Mobile users benefit from combinations of wireless networks and mobile computing.

3.4 Social Issues
Computer networks also raise social issues:
* Government versus citizen
* Spam mail
* Identity theft

• Many problems could be solved if computer security is taken seriously.
<TOPIC_END>

<TOPIC_START index="3" title="Network Hardware Overview">
4.0 Network Hardware

4.1 Network Hardware Categories
Network hardware components can be categorized into:
* Local Area Networks (LAN)
* Metropolitan Area Networks (MAN)
* Wide Area Networks (WAN)
* Wireless Networks
* Home Networks
* Internetworks

4.2 Transmission Technologies
To develop network hardware components, we need transmission technologies:
* Broadcast links
* Point-to-point links
<TOPIC_END>

<TOPIC_START index="4" title="Transmission Technologies">
5.0 Transmission Technologies

5.1 Broadcast Links
Broadcast links have the following characteristics:
* Single communication channel that is shared by all the machines on the network
* Single communication channels can be done in broadcasting and multicasting via packets
* Messages on the network are called packets

• Broadcasting: A packet transmitted is received by every machine.
• Multicasting: Transmission to a subset of the machines.
• Each machine can subscribe to any or all of the groups.
• When a packet is sent to a certain group, it is delivered to all machines subscribing to that group.

5.2 Point-to-Point Links
Point-to-point links have the following characteristics:
* Point-to-point networks consist of many connections between individual pairs of machines
* Point-to-point transmission with one sender and receiver is sometimes called unicasting
* The personal area networks are meant for one person
<TOPIC_END>

<TOPIC_START index="5" title="Local Area Networks (LAN)">
6.0 Local Area Networks (LAN)

6.1 What is a LAN?
• A LAN is a network which is designed to operate over a small physical area such as an office, factory or a group of buildings.
• LANs are easy to design and troubleshoot.
• Exchange of information and sharing of resources become easy because of LAN.
• In LAN all machines are connected to a single cable.
• It is usually a privately owned network.

6.2 LAN Characteristics
LANs are distinguished by three characteristics:

| Characteristic | Description |
| :--- | :--- |
| **Size** | Restricted to particular geographic region such as an office building or single department. |
| **Transmission Technology** | 10 Mbps to 10 Gbps. |
| **Topology** | Bus, star, and ring topologies. |
<TOPIC_END>

<TOPIC_START index="6" title="LAN Topology: Ring">
7.0 LAN Topologies

7.1 Ring Topology
Ring topology characteristics:
* Each computer connects to two other computers, joining them in a circle creating a unidirectional path where messages move workstation to workstation
* There is no need of server to control the connectivity among the nodes in the topology
* Each entity participating in the ring reads a message, then regenerates it and hands it to its neighbor on a different network cable
* The ring makes it difficult to add new computers
* Unlike a star topology network, the ring topology network will go down if one entity is removed from the ring
* Physical ring topology systems don't exist much anymore, mainly because the hardware involved was fairly expensive and the fault tolerance was very low
* Minimum collision (in single ring)

7.1.1 Types of Ring Topology
Ring topology has two types:
* **Single ring** - All the devices on the network share a single cable
* **Dual ring** - The dual ring topology allows data to be sent in both directions
<TOPIC_END>

<TOPIC_START index="7" title="LAN Topology: Bus">
7.2 Bus Topology
Bus topology characteristics:
* A bus is the simplest physical topology consisting of a single cable that runs to every workstation
* This topology uses the least amount of cabling, but also covers the shortest amount of distance
* Each computer shares the same data and address path
* With a logical bus topology, messages pass through the trunk, and each workstation checks to see if the message is addressed to itself
* If the address of the message matches the workstation's address, the network adapter copies the message to the card's on-board memory
* It is difficult to add a workstation
* If main cable breaks, the entire network is disrupted
* Therefore, it is very expensive to maintain
<TOPIC_END>

<TOPIC_START index="8" title="LAN Topology: Star">
7.3 Star Topology
Star topology characteristics:
* A physical star topology branches each network device off a central device called a hub, making it very easy to add a new workstation
* If any workstation goes down it does not affect the entire network (But if the central device goes down, the entire network goes down)
* When installed, the star topology resembles spokes in a bicycle wheel
* Star topologies are easy to install with a cable run from each workstation to the hub
* The hub is placed in a central location in the office
* Star topologies are more expensive to install than bus networks, because there are several more cables that need to be installed, plus the cost of the hubs that are needed
<TOPIC_END>

<TOPIC_START index="9" title="Metropolitan Area Network (MAN)">
8.0 Metropolitan Area Network (MAN)

MAN characteristics:
* Computer network larger than a LAN and connects clients and servers from multiple buildings over a larger area
* A MAN may use different transmission technology and different media, such as fiber and wireless because of the greater distance it covers
* A Metropolitan Area Network is a network that is utilized across multiple buildings
* Commonly used in school campuses or large companies with multiple buildings
* Is larger than a LAN, but smaller than a WAN
* Is also used to mean the interconnection of several LANs by bridging them together
* This sort of network is also referred to as a campus network
<TOPIC_END>

<TOPIC_START index="10" title="Wide Area Network (WAN)">
9.0 Wide Area Network (WAN)

WAN characteristics:
* A Wide Area Network is a computer network that covers a broad area (any network whose communications links cross metropolitan, regional, or national boundaries)
* Less formally, a network that uses routers and public communications links
* The largest and most well-known example of a WAN is the Internet
* WANs are used to connect LANs and other types of networks together, so that users and computers in one location can communicate with users and computers in other locations
<TOPIC_END>

<TOPIC_START index="11" title="Wireless WAN">
10.0 Wireless WAN

Wireless WAN characteristics:
* Wireless WAN is a wide area network in which separate area of coverage or cells are connected wirelessly to provide service to a large geographic area
* WWANs make use of technologies that focus on modulation of voice and data
* Wireless WANs exclusively use Radio Frequency signals designed to accommodate many users
<TOPIC_END>

<TOPIC_START index="12" title="Home Network">
11.0 Home Network

Home network characteristics:
* Every device in the home will be capable of communicating with every other device, and all of them will be accessible over the Internet
* Many devices are capable of being networked

Devices that can be networked in homes:
* **Computers** - desktop PC, notebook PC, PDA, shared peripherals
* **Telecommunications** - telephone, mobile telephone, intercom, fax
* **Appliances** - microwave, refrigerator, clock, furnace, air conditioning, lights, AC
* **Telemetry** - utility meter, smoke/burglar alarm, thermostat, baby camera
<TOPIC_END>

<TOPIC_START index="13" title="Internetworks">
12.0 Internetworks

12.1 What is an Internetwork?
• A collection of interconnected networks is called an internetwork or internet.
• Internetworking devices are products used to connect networks.
• As computer networks grow in size and complexity, so do the internetworking devices used to connect them.

12.2 Internetworking Devices
Broadly following are the internetworking devices:
* **Repeaters** - Amplify signals
* **Hubs** - Connect multiple devices in a star topology
* **Bridges** - Connect two LANs
* **Switches** - Intelligent hubs that forward packets to specific ports
* **Routers** - Connect networks and route packets between them
* **Gateways** - Connect networks using different protocols
<TOPIC_END>

<TOPIC_START index="14" title="Network Software Overview">
13.0 Network Software

Network software covers several key concepts:
* Protocol hierarchies
* Design issues for the layers
* Connection-oriented versus connectionless service
* Service primitives
* Relationship of services to protocols
<TOPIC_END>

<TOPIC_START index="15" title="Functions of Network Software">
14.0 Functions of Network Software

Network software performs the following functions:
* Helps to set up and install computer networks
* Enables users to have access to network resources in a seamless manner
* Allows administrations to add or remove users from the network
* Helps to define locations of data storage and allows users to access that data
* Helps administrators and security system to protect the network from data breaches, unauthorized access and attacks on a network
* Enables network virtualizations
<TOPIC_END>

<TOPIC_START index="16" title="Protocol Hierarchies">
15.0 Protocol Hierarchies

15.1 What are Protocol Hierarchies?
• Networks are organized as a series of layers.
• Layer n on a host communicates with layer n on another host.
• Layer n protocol: Rules and conventions for this communication.
• The entities on each host implementing the layer n protocol are peers.

15.2 Layered Communication
Protocol hierarchies enable layered communication between hosts.
<TOPIC_END>

<TOPIC_START index="17" title="Design Issues for the Layers">
16.0 Design Issues for the Layers

Key design issues for network layers include:

| Design Issue | Description |
| :--- | :--- |
| **Addressing** | Some form of addressing is needed in order to specify a specific destination. |
| **Data Transfer Rules** | Rules for data transfer including Simplex, Half-duplex and full duplex transmission. |
| **Error Control** | Both ends of the connection must agree on error detecting and error correcting codes. |
| **Sequencing and Reassembly** | Messages may arrive out of order and hence need for provision for proper reassembly. |
| **Flow Control** | Need to regulate flow of data to avoid swamping receiver. Could require receiver feedback or limit transmission rate. |
| **Message Size** | Inability of all processes to accept arbitrarily long messages. This property leads to mechanisms for disassembling, transmitting and then reassembling messages. |
| **Routing** | Choosing a path when there are multiple paths between source and destination. |
<TOPIC_END>

<TOPIC_START index="18" title="Connection-Oriented vs Connectionless Service">
17.0 Connection-Oriented Versus Connectionless Service

17.1 Connection-Oriented Service
Connection-oriented service characteristics:
* Connection established and terminated
* Modeled after the telephone system
* Messages arrive in the order they are sent
* Example: TCP

17.2 Connectionless Service (Datagram Service)
Connectionless service characteristics:
* Modeled after the postal system
* No guarantees on message ordering
* Unreliable: Messages may be lost
* Example: UDP
<TOPIC_END>

<TOPIC_START index="19" title="Service Primitives and Relationship to Protocols">
18.0 Service Primitives

18.1 What are Service Primitives?
• A service is formally specified by a set of primitives (operations) available to a user process to access the service.
• These primitives tell the service to perform some action or report on an action taken by a peer entity.
• The set of primitives available depends on the nature of the service being provided.
• The primitives for connection-oriented service are different from those of connectionless service.

18.2 Service Primitives for Reliable Byte Stream
Primitives for implementing a reliable byte stream in a client-server environment:

| Primitive | Meaning |
| :--- | :--- |
| **LISTEN** | Block waiting for an incoming connection. |
| **CONNECT** | Establish a connection with a waiting peer. |
| **ACCEPT** | Accept an incoming connection from a peer. |
| **RECEIVE** | Block waiting for an incoming message. |
| **SEND** | Send a message to the peer. |
| **DISCONNECT** | Terminate a connection. |

18.3 Relationship of Services to Protocols
• A service is a set of primitives (operations) that a layer provides to the layer above it.
• A protocol is a set of rules governing the format and meaning of the frames, packets, or messages that are exchanged by the peer entities within a layer.
<TOPIC_END>
`
};