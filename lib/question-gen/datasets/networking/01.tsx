// datasets/computer-networks/lesson01.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson01Dataset: Dataset = {
  id: "networks-01",
  category: "Computer Networks",
  subcategory: "Introduction, Network Hardware & Network Software",
  description: "Introduction to Computer Networks, Uses of Networks, Network Hardware (LAN, MAN, WAN, Wireless, Home, Internetworks), Network Software (Protocol Hierarchies, Services, and Protocols).",
  content: `
[cite_start]Topic: Introduction to Computer Networks, Network Hardware, and Network Software [cite: 1, 2]

Objectives:
[cite_start]• Understand what computer networks are and their definitions [cite: 4, 5]
[cite_start]• Learn the uses and benefits of computer networks [cite: 7, 8, 9, 10, 11, 12]
[cite_start]• Understand network hardware components and transmission technologies [cite: 13, 14]
[cite_start]• Learn about different types of networks (LAN, MAN, WAN, Wireless, Home, Internetworks) [cite: 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
[cite_start]• Understand network software concepts including protocol hierarchies [cite: 26, 27, 28, 29, 30]
[cite_start]• Learn about design issues for network layers [cite: 31, 32]
[cite_start]• Understand connection-oriented versus connectionless services [cite: 33]
[cite_start]• Learn about service primitives and their relationship to protocols [cite: 34, 35, 36]

---
## What is a Computer Network?

### Definition 1
[cite_start]• A computer network is a set of communication elements connected by communication links [cite: 4].
[cite_start]• A network can be defined as two or more computers/nodes connected together in such a way that they can share resources [cite: 4].

### Definition 2
[cite_start]• A computer network is a set of systems/nodes interconnected by communication links that is primarily used for information transfer (information = messages/data from applications) [cite: 5].

### Network Components
[cite_start]Computer networks consist of two main components [cite: 5]:

| Component | Description |
| :--- | :--- |
| **Systems** | [cite_start]Computers and other end systems (tablets, smartphones, sensors), switches, routers [cite: 5]. |
| **Links** | [cite_start]Wired connections including twisted pair, Twinax, coaxial cable, optical fiber [cite: 5]. |

### Network Example
[cite_start]Networks can be visualized with various interconnected devices and communication paths [cite: 6].

---
## Why We Use Computer Networks

[cite_start]Computer networks provide several important benefits [cite: 7]:

| Benefit | Description |
| :--- | :--- |
| **Faster Communication** | [cite_start]Before computer networks, people sent and received information by hand, using the postal service which is slow and unreliable. Computer networks enable faster, more efficient modes of communication such as email and video conferencing [cite: 7]. |
| **Standardization** | [cite_start]Computer networks and the sharing of electronic data encourages the use of standard policies and procedures [cite: 7]. |
| **Data Protection** | [cite_start]Computer networks provide backup and recovery support for our data redundancy [cite: 7]. |
| **Cost Savings** | [cite_start]Computer networks lead to cost savings [cite: 7]. |

---
## Uses of Computer Networks

[cite_start]Computer networks are used in four main areas [cite: 8]:
* Business Applications
* Home Applications
* Mobile Users
* Social Issues

### 1. Business Applications
[cite_start]Business applications of computer networks include [cite: 9]:
* **Resources sharing** - Sharing hardware, software, and data resources
* **Communication** - Facilitating business communication
* **Business with other companies** - Enabling inter-company transactions

[cite_start]• A client is a program requesting services [cite: 9].
[cite_start]• A service is a program providing services [cite: 9].

### 2. Home Applications
[cite_start]Home applications of computer networks include [cite: 10]:
* **Access to remote information** - Accessing information from anywhere
* **Person-to-person communication** - Enabling communication between individuals
* **Interactive Entertainment** - Providing entertainment options
* **Electronic Commerce** - Enabling online shopping and transactions

### 3. Mobile Users
[cite_start]• Mobile users benefit from combinations of wireless networks and mobile computing [cite: 11].

### 4. Social Issues
[cite_start]Computer networks also raise social issues [cite: 12]:
* Government versus citizen
* Spam mail
* Identity theft

[cite_start]• Many problems could be solved if computer security is taken seriously [cite: 12].

---
## Network Hardware

### Network Hardware Categories
[cite_start]Network hardware components can be categorized into [cite: 13]:
* Local Area Networks (LAN)
* Metropolitan Area Networks (MAN)
* Wide Area Networks (WAN)
* Wireless Networks
* Home Networks
* Internetworks

### Transmission Technologies
[cite_start]To develop network hardware components, we need transmission technologies [cite: 13]:
* Broadcast links
* Point-to-point links

---
## Transmission Technologies

### Broadcast Links
[cite_start]Broadcast links have the following characteristics [cite: 14]:
* Single communication channel that is shared by all the machines on the network
* Single communication channels can be done in broadcasting and multicasting via packets
* Messages on the network are called packets

[cite_start]• Broadcasting: A packet transmitted is received by every machine [cite: 14].
[cite_start]• Multicasting: Transmission to a subset of the machines [cite: 14].
[cite_start]• Each machine can subscribe to any or all of the groups [cite: 14].
[cite_start]• When a packet is sent to a certain group, it is delivered to all machines subscribing to that group [cite: 14].

### Point-to-Point Links
[cite_start]Point-to-point links have the following characteristics [cite: 14]:
* Point-to-point networks consist of many connections between individual pairs of machines
* Point-to-point transmission with one sender and receiver is sometimes called unicasting
* The personal area networks are meant for one person

---
## Local Area Networks (LAN)

### What is a LAN?
[cite_start]• A LAN is a network which is designed to operate over a small physical area such as an office, factory or a group of buildings [cite: 16].
[cite_start]• LANs are easy to design and troubleshoot [cite: 16].
[cite_start]• Exchange of information and sharing of resources become easy because of LAN [cite: 16].
[cite_start]• In LAN all machines are connected to a single cable [cite: 16].
[cite_start]• It is usually a privately owned network [cite: 16].

### LAN Characteristics
[cite_start]LANs are distinguished by three characteristics [cite: 16]:

| Characteristic | Description |
| :--- | :--- |
| **Size** | [cite_start]Restricted to particular geographic region such as an office building or single department [cite: 16]. |
| **Transmission Technology** | [cite_start]10 Mbps to 10 Gbps [cite: 16]. |
| **Topology** | [cite_start]Bus, star, and ring topologies [cite: 16]. |

---
## LAN Topologies

### Ring Topology
[cite_start]Ring topology characteristics [cite: 17]:
* Each computer connects to two other computers, joining them in a circle creating a unidirectional path where messages move workstation to workstation
* There is no need of server to control the connectivity among the nodes in the topology
* Each entity participating in the ring reads a message, then regenerates it and hands it to its neighbor on a different network cable
* The ring makes it difficult to add new computers
* Unlike a star topology network, the ring topology network will go down if one entity is removed from the ring
* Physical ring topology systems don't exist much anymore, mainly because the hardware involved was fairly expensive and the fault tolerance was very low
* Minimum collision (in single ring)

#### Types of Ring Topology
[cite_start]Ring topology has two types [cite: 18]:
* **Single ring** - All the devices on the network share a single cable
* **Dual ring** - The dual ring topology allows data to be sent in both directions

### Bus Topology
[cite_start]Bus topology characteristics [cite: 19]:
* A bus is the simplest physical topology consisting of a single cable that runs to every workstation
* This topology uses the least amount of cabling, but also covers the shortest amount of distance
* Each computer shares the same data and address path
* With a logical bus topology, messages pass through the trunk, and each workstation checks to see if the message is addressed to itself
* If the address of the message matches the workstation's address, the network adapter copies the message to the card's on-board memory
* It is difficult to add a workstation
* If main cable breaks, the entire network is disrupted
* Therefore, it is very expensive to maintain

### Star Topology
[cite_start]Star topology characteristics [cite: 20]:
* A physical star topology branches each network device off a central device called a hub, making it very easy to add a new workstation
* If any workstation goes down it does not affect the entire network (But if the central device goes down, the entire network goes down)
* When installed, the star topology resembles spokes in a bicycle wheel
* Star topologies are easy to install with a cable run from each workstation to the hub
* The hub is placed in a central location in the office
* Star topologies are more expensive to install than bus networks, because there are several more cables that need to be installed, plus the cost of the hubs that are needed

---
## Metropolitan Area Network (MAN)

[cite_start]MAN characteristics [cite: 21]:
* Computer network larger than a LAN and connects clients and servers from multiple buildings over a larger area
* A MAN may use different transmission technology and different media, such as fiber and wireless because of the greater distance it covers
* A Metropolitan Area Network is a network that is utilized across multiple buildings
* Commonly used in school campuses or large companies with multiple buildings
* Is larger than a LAN, but smaller than a WAN
* Is also used to mean the interconnection of several LANs by bridging them together
* This sort of network is also referred to as a campus network

---
## Wide Area Network (WAN)

[cite_start]WAN characteristics [cite: 22]:
* A Wide Area Network is a computer network that covers a broad area (any network whose communications links cross metropolitan, regional, or national boundaries)
* Less formally, a network that uses routers and public communications links
* The largest and most well-known example of a WAN is the Internet
* WANs are used to connect LANs and other types of networks together, so that users and computers in one location can communicate with users and computers in other locations

---
## Wireless WAN

[cite_start]Wireless WAN characteristics [cite: 23]:
* Wireless WAN is a wide area network in which separate area of coverage or cells are connected wirelessly to provide service to a large geographic area
* WWANs make use of technologies that focus on modulation of voice and data
* Wireless WANs exclusively use Radio Frequency signals designed to accommodate many users

---
## Home Network

[cite_start]Home network characteristics [cite: 24]:
* Every device in the home will be capable of communicating with every other device, and all of them will be accessible over the Internet
* Many devices are capable of being networked

[cite_start]Devices that can be networked in homes [cite: 24]:
* **Computers** - desktop PC, notebook PC, PDA, shared peripherals
* **Telecommunications** - telephone, mobile telephone, intercom, fax
* **Appliances** - microwave, refrigerator, clock, furnace, air conditioning, lights, AC
* **Telemetry** - utility meter, smoke/burglar alarm, thermostat, baby camera

---
## Internetworks

### What is an Internetwork?
[cite_start]• A collection of interconnected networks is called an internetwork or internet [cite: 25].
[cite_start]• Internetworking devices are products used to connect networks [cite: 25].
[cite_start]• As computer networks grow in size and complexity, so do the internetworking devices used to connect them [cite: 25].

### Internetworking Devices
[cite_start]Broadly following are the internetworking devices [cite: 25]:
* **Repeaters** - Amplify signals
* **Hubs** - Connect multiple devices in a star topology
* **Bridges** - Connect two LANs
* **Switches** - Intelligent hubs that forward packets to specific ports
* **Routers** - Connect networks and route packets between them
* **Gateways** - Connect networks using different protocols

---
## Network Software

[cite_start]Network software covers several key concepts [cite: 26]:
* Protocol hierarchies
* Design issues for the layers
* Connection-oriented versus connectionless service
* Service primitives
* Relationship of services to protocols

---
## Functions of Network Software

[cite_start]Network software performs the following functions [cite: 27]:
* Helps to set up and install computer networks
* Enables users to have access to network resources in a seamless manner
* Allows administrations to add or remove users from the network
* Helps to define locations of data storage and allows users to access that data
* Helps administrators and security system to protect the network from data breaches, unauthorized access and attacks on a network
* Enables network virtualizations

---
## Protocol Hierarchies

### What are Protocol Hierarchies?
[cite_start]• Networks are organized as a series of layers [cite: 28].
[cite_start]• Layer n on a host communicates with layer n on another host [cite: 28].
[cite_start]• Layer n protocol: Rules and conventions for this communication [cite: 28].
[cite_start]• The entities on each host implementing the layer n protocol are peers [cite: 28].

### Layered Communication
[cite_start]Protocol hierarchies enable layered communication between hosts [cite: 29, 30].

---
## Design Issues for the Layers

[cite_start]Key design issues for network layers include [cite: 31, 32]:

| Design Issue | Description |
| :--- | :--- |
| **Addressing** | [cite_start]Some form of addressing is needed in order to specify a specific destination [cite: 31]. |
| **Data Transfer Rules** | [cite_start]Rules for data transfer including Simplex, Half-duplex and full duplex transmission [cite: 31]. |
| **Error Control** | [cite_start]Both ends of the connection must agree on error detecting and error correcting codes [cite: 31]. |
| **Sequencing and Reassembly** | [cite_start]Messages may arrive out of order and hence need for provision for proper reassembly [cite: 31]. |
| **Flow Control** | [cite_start]Need to regulate flow of data to avoid swamping receiver. Could require receiver feedback or limit transmission rate [cite: 32]. |
| **Message Size** | [cite_start]Inability of all processes to accept arbitrarily long messages. This property leads to mechanisms for disassembling, transmitting and then reassembling messages [cite: 32]. |
| **Routing** | [cite_start]Choosing a path when there are multiple paths between source and destination [cite: 32]. |

---
## Connection-Oriented Versus Connectionless Service

### Connection-Oriented Service
[cite_start]Connection-oriented service characteristics [cite: 33]:
* Connection established and terminated
* Modeled after the telephone system
* Messages arrive in the order they are sent
* Example: TCP

### Connectionless Service (Datagram Service)
[cite_start]Connectionless service characteristics [cite: 33]:
* Modeled after the postal system
* No guarantees on message ordering
* Unreliable: Messages may be lost
* Example: UDP

---
## Service Primitives

### What are Service Primitives?
[cite_start]• A service is formally specified by a set of primitives (operations) available to a user process to access the service [cite: 34].
[cite_start]• These primitives tell the service to perform some action or report on an action taken by a peer entity [cite: 34].
[cite_start]• The set of primitives available depends on the nature of the service being provided [cite: 34].
[cite_start]• The primitives for connection-oriented service are different from those of connectionless service [cite: 34].

### Service Primitives for Reliable Byte Stream
[cite_start]Primitives for implementing a reliable byte stream in a client-server environment [cite: 35]:

| Primitive | Meaning |
| :--- | :--- |
| **LISTEN** | [cite_start]Block waiting for an incoming connection [cite: 35]. |
| **CONNECT** | [cite_start]Establish a connection with a waiting peer [cite: 35]. |
| **ACCEPT** | [cite_start]Accept an incoming connection from a peer [cite: 35]. |
| **RECEIVE** | [cite_start]Block waiting for an incoming message [cite: 35]. |
| **SEND** | [cite_start]Send a message to the peer [cite: 35]. |
| **DISCONNECT** | [cite_start]Terminate a connection [cite: 35]. |

---
## Relationship of Services to Protocols

[cite_start]• A service is a set of primitives (operations) that a layer provides to the layer above it [cite: 36].
[cite_start]• A protocol is a set of rules governing the format and meaning of the frames, packets, or messages that are exchanged by the peer entities within a layer [cite: 36].
`
};