// datasets/computer-networks/lesson07.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson07Dataset: Dataset = {
  id: "networks-07",
  category: "Computer Networks",
  subcategory: "Medium Access Sublayer",
  description: "Medium Access Control (MAC) layer functions, Random Access Protocols (ALOHA, CSMA, CSMA/CD, CSMA/CA), Controlled Access Protocols (Polling, Token Passing), Channelization, Ethernet technologies, Wireless LAN, and Network Devices (Hub, Bridge, Switch, Router).",
  content: `
[cite_start]Topic: Medium Access Sublayer - MAC Layer, Access Protocols, Ethernet, and Network Devices [cite: 1, 2, 3]

Objectives:
[cite_start]• Understand the need for MAC layer in computer networks [cite: 3]
[cite_start]• Learn about Medium Access Sublayer and its relationship with LLC [cite: 4]
[cite_start]• Explore functions of the MAC layer [cite: 5, 6]
[cite_start]• Understand Medium Access Protocols (Random, Controlled, Channelization) [cite: 7, 8, 9, 10]
[cite_start]• Learn Random Access Protocols: ALOHA, CSMA variants, CSMA/CD, CSMA/CA [cite: 11-25]
[cite_start]• Understand Controlled Access Protocols: Polling and Token Passing [cite: 26-29]
[cite_start]• Explore Ethernet technology and its variants [cite: 30-44]
[cite_start]• Learn about Wireless LAN characteristics and applications [cite: 45-49]
[cite_start]• Understand network devices: Hub, Bridge, Switch, and Router [cite: 50-53]

---
## Why Do We Need the MAC Layer?

### The Problem

[cite_start]In a computer network, multiple devices share the same communication medium (cables or wireless signals) [cite: 3].
[cite_start]If devices transmit data at the same time, signals collide, resulting in data loss and requiring retransmissions [cite: 3].
[cite_start]Collisions reduce network performance and cause delays [cite: 3].

### The Solution: MAC Layer

[cite_start]The Medium Access Control (MAC) layer defines the rules for how devices access the medium [cite: 3]:
* **Who can transmit**
* **When to transmit**
* **How to handle collisions**

---
## Medium Access Sublayer

### Data Link Layer Division

[cite_start]The Data Link Layer is divided into two functionality-oriented sublayers [cite: 4]:
1. **LLC (Logical Link Control)**
2. **MAC (Medium Access Control)**

### LLC (Logical Link Control) Functions

[cite_start]LLC provides the following functions [cite: 4]:
* Identifies which network protocol (e.g., IP, ARP, IPv6) is carried in the frame
* Provides flow control to prevent overwhelming receivers
* Performs error checking and provides error notification

### MAC (Medium Access Control) Functions

[cite_start]MAC provides the following functions [cite: 4]:
* Assigns each device a unique identifier (MAC address)
* Determines how devices share the medium and avoid collisions
* Adds information to frames for addressing and error detection

---
## Functions of MAC Layer

### Core Functions Overview

The MAC layer performs seven critical functions:

### 1. Abstraction of the Physical Layer

[cite_start]• Provides an interface between the Physical Layer and upper layers (LLC and Network Layer) [cite: 5]
[cite_start]• Upper layers do not need to worry about the actual medium (wired or wireless) [cite: 5]

### 2. Frame Encapsulation

[cite_start]• Encapsulates network data into frames suitable for transmission [cite: 5]
[cite_start]• Adds header (source and destination MAC addresses) and trailer (Frame Check Sequence (FCS) for error detection) information [cite: 5]

### 3. Addressing

[cite_start]• Assigns unique MAC addresses to each device's NIC (Network Interface Card) [cite: 5]
[cite_start]• Determines source and destination addresses for frame delivery [cite: 5]
[cite_start]• Supports unicast, broadcast, and multicast delivery [cite: 5]

### 4. Access Control and Multiple Access Resolution

[cite_start]• Determines which device can use the medium when multiple devices want to transmit [cite: 6]
[cite_start]• Implements multiple access protocols (Random Access: CSMA/CD, CSMA/CA; Controlled Access: Token Passing, Polling) [cite: 6]
[cite_start]• Prevents collisions and ensures fair sharing of the medium [cite: 6]

### 5. Collision Handling and Retransmission

[cite_start]• Detects collisions on the medium (e.g., Ethernet CSMA/CD) [cite: 6]
[cite_start]• Initiates retransmission after a random backoff or waiting period [cite: 6]

### 6. Frame Delivery

[cite_start]• Ensures frames are delivered to the correct destination device [cite: 6]
[cite_start]• Works with switches and access points to forward frames accurately [cite: 6]

### 7. Error Detection

[cite_start]• Generates Frame Check Sequence (FCS) using CRC (Cyclic Redundancy Check) [cite: 6]
[cite_start]• Detects corrupted frames and prevents them from reaching upper layers [cite: 6]

---
## Medium Access Protocols

[cite_start]Medium Access Protocols are classified into three main categories [cite: 7]:
1. **Random Access Protocols**
2. **Controlled Access Protocols**
3. **Channelization Protocols**

---
## Random Access Protocols

### Overview

[cite_start]In random access methods, all stations are treated equally and no one has control over the channel. Any device can attempt to transmit data at any time, without permission from others [cite: 8].

### Key Characteristics

[cite_start]Random access protocols have the following characteristics [cite: 8]:
* No centralized control or scheduling
* Collisions can occur when multiple stations transmit simultaneously
* Protocols define how stations detect or avoid collisions and retry sending

### Categories of Random Access Protocols

[cite_start]The categories of random access protocols are [cite: 8]:
* **ALOHA**
* **Carrier-Sense Multiple Access (CSMA)**
* **Carrier Sense Multiple Access With Collision Detection (CSMA/CD)**
* **Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)**

---
## ALOHA Random Access Protocol

### Overview

[cite_start]ALOHA was the first random access protocol, developed at the University of Hawaii in the 1970s for wireless communication. It laid the foundation for modern wireless and shared medium access methods [cite: 11].

[cite_start]The main problem in shared media: multiple stations may transmit simultaneously, causing collisions [cite: 11].

### Variations of ALOHA

[cite_start]ALOHA can be of two variations [cite: 11]:
* **Pure ALOHA** - Transmit anytime; susceptible to high collision (efficiency approximately 18 percent)
* **Slotted ALOHA** - Transmit in predefined time slots (efficiency approximately 36 percent)

### Applications

[cite_start]Applications: Still relevant in low-power wireless networks like LoRa, LPWAN, and some satellite links [cite: 11].

---
## Pure ALOHA

### How It Works

[cite_start]Frames in a pure ALOHA network are transmitted at any time without checking if the channel is busy [cite: 12].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Transmission** | Anytime, no synchronization |
| **Collision Probability** | High |
| **Efficiency** | [cite_start]Approximately 18 percent [cite: 11] |
| **Advantage** | Simple implementation |
| **Disadvantage** | Low throughput due to collisions |

---
## Slotted ALOHA

### How It Works

[cite_start]Frames in a slotted ALOHA network are transmitted in predefined time slots [cite: 13].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Transmission** | Only at beginning of time slots |
| **Collision Probability** | Lower than Pure ALOHA |
| **Efficiency** | [cite_start]Approximately 36 percent [cite: 11] |
| **Advantage** | Better efficiency than Pure ALOHA |
| **Disadvantage** | Requires time synchronization |

### Comparison: Pure ALOHA vs Slotted ALOHA

| Aspect | Pure ALOHA | Slotted ALOHA |
| :--- | :--- | :--- |
| **Timing** | [cite_start]Anytime [cite: 11] | [cite_start]Predefined time slots [cite: 11] |
| **Efficiency** | [cite_start]~18% [cite: 11] | [cite_start]~36% [cite: 11] |
| **Synchronization** | Not required | Required |
| **Collision Window** | 2 times frame transmission time | 1 times frame transmission time |

---
## Carrier-Sense Multiple Access (CSMA)

### Basic Concept

[cite_start]Basic concept: "sense before transmit" or "listen before talk" [cite: 14].

### How CSMA Works

[cite_start]• If channel is sensed idle, transmit the frame [cite: 14]
[cite_start]• If channel is sensed busy, defer the transmission [cite: 14]
[cite_start]• Reduces the collisions and increases the performance [cite: 14]

---
## CSMA Protocols - Persistent Methods

### Key Questions

[cite_start]In CSMA, a station senses the channel before transmitting. If the channel is busy, the station must wait. These variations define how the station behaves while waiting or sensing [cite: 15]:

[cite_start]Key Questions [cite: 15]:
* What should a station do if the channel is busy?
* What should it do if the channel is idle?

### Types of CSMA Protocols

[cite_start]Types of CSMA Protocols [cite: 15]:
1. **1-Persistent CSMA** - Transmit immediately when the channel becomes idle (high collision chance)
2. **Non-Persistent CSMA** - Wait random time before sensing again (reduces collisions, increases delay)
3. **P-Persistent CSMA** (used in slotted systems like Wi-Fi) - Transmit with probability p, or wait for next slot with probability (1-p)

---
## 1-Persistent CSMA

### How It Works

[cite_start]• Sense the carrier [cite: 16]
[cite_start]• If it is idle, send the frame immediately [cite: 16]
[cite_start]• If the station is busy, it will continuously sense (listen) to the carrier until it becomes idle and will send the frame immediately [cite: 16]

### Characteristics

[cite_start]• High risk of collision, especially when multiple stations are waiting for the channel to become idle at the same time [cite: 16]

[cite_start]• In case of a collision, the sender waits for a random period of time and attempts to transmit again unconditionally (i.e. with probability equals 1) [cite: 17]

### 1-Persistent CSMA Process

| Step | Action |
| :--- | :--- |
| **1. Sense Channel** | Check if channel is idle or busy |
| **2. If Idle** | [cite_start]Transmit immediately [cite: 16] |
| **3. If Busy** | [cite_start]Continuously sense until idle [cite: 16] |
| **4. When Idle** | [cite_start]Transmit immediately [cite: 16] |
| **5. If Collision** | [cite_start]Wait random time, retry [cite: 17] |

### Advantages and Disadvantages

| Aspect | Description |
| :--- | :--- |
| **Advantage** | Maximum channel utilization when idle |
| **Disadvantage** | [cite_start]High collision risk [cite: 16] |

---
## Non-Persistent CSMA

### How It Works

[cite_start]• Sense the carrier [cite: 18]
[cite_start]• If it is idle, sends the frame immediately [cite: 18]
[cite_start]• If it is busy, station will wait random amount of time and then senses the carrier again [cite: 18]

### Characteristics

[cite_start]• Advantage: Reduces the chances of collision [cite: 18]
[cite_start]• Disadvantage: Reduces the efficiency of the network [cite: 18]

### Non-Persistent CSMA Process

| Step | Action |
| :--- | :--- |
| **1. Sense Channel** | Check if channel is idle or busy |
| **2. If Idle** | [cite_start]Transmit immediately [cite: 18] |
| **3. If Busy** | [cite_start]Wait random time [cite: 18] |
| **4. After Waiting** | [cite_start]Sense carrier again [cite: 18] |

---
## P-Persistent CSMA

### Overview

[cite_start]This method is used if the channel has time slots with a slot duration equal to or greater than the maximum propagation time [cite: 19].

### How It Works

[cite_start]In this method, after the station finds the line idle it follows these steps [cite: 19]:
* [cite_start]With probability p, the station sends its frame [cite: 19]
* [cite_start]With probability q equals 1-p, the station waits for the beginning of the next time slot and checks the line again [cite: 19]
* [cite_start]If the link is idle, it goes to step 1 [cite: 19]
* [cite_start]If the line is busy, it acts as though a collision has occurred and uses the backoff procedure [cite: 19]

### Applications

[cite_start]Applications: Used in CSMA/CA systems including Wi-Fi and other packet radio systems [cite: 19].

### P-Persistent CSMA Process

| Step | Condition | Action |
| :--- | :--- | :--- |
| **1. Sense Channel** | Channel idle | Proceed to step 2 |
| **1. Sense Channel** | Channel busy | Continue sensing |
| **2. Probability Check** | Random less than p | [cite_start]Transmit frame [cite: 19] |
| **2. Probability Check** | Random greater than p | [cite_start]Wait for next slot [cite: 19] |
| **3. Next Slot** | Channel idle | Return to step 2 |
| **3. Next Slot** | Channel busy | [cite_start]Backoff procedure [cite: 19] |

---
## Carrier Sense Multiple Access with Collision Detection (CSMA/CD)

### Overview

[cite_start]CSMA/CD protocol can be considered as a refinement over the CSMA scheme [cite: 21].
[cite_start]The nodes continue to monitor the channel while transmitting a packet and immediately cease transmission when collision is detected [cite: 21].
[cite_start]This scheme is known as Carrier Sensed Multiple Access with Collision Detection (CSMA/CD) or Listen-While-Talk [cite: 21].

---
## CSMA/CD Rules

### Two Rules

[cite_start]Rule 1: If collision is detected during the transmission of packet, the station will immediately cease or abort the transmission and it will send a Jamming signal (for a brief duration) to enforce the collision to all the other stations who have not sensed the collision [cite: 22].

[cite_start]Rule 2: After transmitting the jamming signal, the station waits for a random amount of time and then transmission is resumed [cite: 22].

### Jamming Signal

[cite_start]Note: Jamming signal is a 48 bit jamming sequence sent by station to indicate collision to other stations around the network [cite: 23].

---
## Binary Exponential Backoff Algorithm

### How It Works

[cite_start]Binary exponential backoff is used: A node will attempt to transmit repeatedly in the face of repeated collision, but after each collision, the mean value of random delay is doubled [cite: 23].

### Binary Exponential Backoff Process

**Algorithm Steps:**
1. After first collision: wait 0 or 1 slot times randomly
2. After second collision: wait 0, 1, 2, or 3 slot times randomly
3. After third collision: wait 0 to 7 slot times randomly
4. After nth collision: wait 0 to (2^n - 1) slot times randomly
5. After 10 collisions: keep maximum at 1023 slot times
6. After 16 collisions: give up and report error

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Purpose** | Handle repeated collisions fairly |
| **Method** | [cite_start]Double mean delay after each collision [cite: 23] |
| **Jamming Signal** | [cite_start]48 bits [cite: 23] |
| **Fairness** | Gives equal chance to all stations |

---
## Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)

### Overview

[cite_start]CSMA/CA is used in wireless network. In wireless networks most of the energy is lost due to transmission. So collisions can add 5-10 percent additional energy which cannot be well detected. So collisions are avoided using three CSMA/CA strategies [cite: 25]:

### Three CSMA/CA Strategies

[cite_start]CSMA/CA uses three strategies [cite: 25]:
1. **Inter-Frame Space (IFS)**
2. **Contention Window**
3. **Acknowledgments**

### Why CSMA/CA for Wireless?

| Reason | Explanation |
| :--- | :--- |
| **Energy Loss** | [cite_start]Most energy lost in transmission [cite: 25] |
| **Collision Cost** | [cite_start]Collisions add 5-10% additional energy [cite: 25] |
| **Detection Difficulty** | [cite_start]Collisions cannot be well detected [cite: 25] |
| **Solution** | Avoid collisions rather than detect them |

---
## Controlled Access Protocols

### Overview

[cite_start]In controlled access, the stations consult one another to find which station has the right to send [cite: 9].
[cite_start]A station cannot send unless it has been authorized by other stations [cite: 9].

### Categories

[cite_start]The categories of controlled access protocols are [cite: 9]:
* **Reservation**
* **Polling**
* **Token Passing**

---
## Polling Control Access Protocol

### Overview

[cite_start]To have a communication between primary and secondary stations, Select and Poll functions are used in polling access method [cite: 26].

### How Polling Works

**Primary Station:**
* Controls the medium
* Polls secondary stations
* Asks if they have data to send

**Secondary Stations:**
* Wait to be polled
* Respond when selected
* Send data when authorized

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Control** | Centralized (primary station) |
| **Authorization** | [cite_start]Stations must be authorized [cite: 9] |
| **Functions** | [cite_start]Select and Poll [cite: 26] |
| **Efficiency** | No collisions, but overhead from polling |

---
## Token Passing Control Access Protocol

### Overview

[cite_start]Token Passing is a deterministic network access method where a special data packet called a "token" circulates among the devices (or nodes) on the network [cite: 28].

[cite_start]Only the device that holds the token is allowed to send data [cite: 28].

[cite_start]Once the device finishes transmission, it passes the token to the next device [cite: 28].

### How Token Passing Works

**Process:**
1. Token circulates through network
2. Station with data waits for token
3. Station captures token
4. Station transmits data
5. Station releases token to next station

### Logical Ring Topology

[cite_start]Token passing uses a logical ring and physical topology [cite: 27].

### FDDI Token Ring Frame Format

[cite_start]FDDI Token Ring Frame Format includes FCS (Frame-Check Sequence) [cite: 29].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Access Method** | [cite_start]Token circulation [cite: 28] |
| **Authorization** | [cite_start]Only token holder can transmit [cite: 28] |
| **Type** | [cite_start]Deterministic [cite: 28] |
| **Collisions** | None (token ensures exclusive access) |
| **Fairness** | Each station gets equal opportunity |

---
## Channelization Protocols

### Overview

[cite_start]Channelization is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations [cite: 10].

### Categories

[cite_start]The categories of channelization protocols are [cite: 10]:
* **Frequency-Division Multiple Access (FDMA)**
* **Time-Division Multiple Access (TDMA)**
* **Code-Division Multiple Access (CDMA)**

### Comparison of Channelization Methods

| Method | Division Basis | Application |
| :--- | :--- | :--- |
| **FDMA** | Frequency bands | Analog cellular, radio |
| **TDMA** | Time slots | GSM, digital telephony |
| **CDMA** | Unique codes | 3G cellular, GPS |

---
## Ethernet

### Overview

[cite_start]In computer networking, Ethernet is a technology for connecting devices in a local area network (LAN). It defines how data is transmitted over a wired network and is one of the most commonly used LAN technologies in the world [cite: 30].

---
## Ethernet Characteristics

[cite_start]Ethernet has the following characteristics [cite: 31]:

| Feature | Description |
| :--- | :--- |
| **Medium** | [cite_start]Usually uses twisted pair cables (like Cat5e, Cat6) and sometimes fiber optics [cite: 31] |
| **Speed** | [cite_start]Common Ethernet speeds include 100 Mbps, 1 Gbps (Gigabit Ethernet), 10 Gbps, etc [cite: 31] |
| **Standard** | [cite_start]Defined by the IEEE 802.3 standard [cite: 31] |
| **Data Transmission** | [cite_start]Uses frames to transmit data between devices [cite: 31] |
| **Topology** | [cite_start]Typically uses star or bus topology [cite: 31] |
| **Connectivity** | [cite_start]Devices usually connected through a switch (or older hubs) [cite: 31] |

---
## Ethernet Example

[cite_start]Example: Imagine you have a computer, a printer, and a router. If you connect all of them with Ethernet cables and a switch, they can communicate quickly and reliably within the same network [cite: 32].

---
## What You Need in an Ethernet LAN

### Physical Components

**Ethernet Cables:**
[cite_start]• These are the physical wires that connect devices [cite: 33]
[cite_start]• Common types: Cat5e, Cat6, or Cat6a [cite: 33]
[cite_start]• Use them to connect PCs, printers, switches, and routers [cite: 33]

**Network Interface Cards (NICs):**
[cite_start]• Every device (computer, printer, etc.) must have a NIC [cite: 33]
[cite_start]• Most modern devices have a built-in Ethernet port [cite: 33]

**Switch or Hub:**
[cite_start]• Switch is preferred: it is faster and smarter [cite: 35]
[cite_start]• A switch connects all your devices and manages data traffic efficiently [cite: 35]
[cite_start]• Hub is older technology, rarely used now [cite: 35]

**Router (Optional but Common):**
[cite_start]• Needed if your LAN needs internet access [cite: 35]
[cite_start]• Connects your LAN to the Internet [cite: 35]
[cite_start]• Often includes a built-in switch with multiple Ethernet ports [cite: 35]

**Power Supply:**
[cite_start]• All devices like routers and switches need power [cite: 36]
[cite_start]• Make sure power outlets are available where needed [cite: 36]

**Devices to Connect:**
[cite_start]• PCs, laptops, printers, IP phones, game consoles, etc [cite: 36]

---
## Types of Ethernet

[cite_start]Types of Ethernet include [cite: 37]:
* Classic Ethernet
* Fast Ethernet
* Gigabit Ethernet
* 10 GB Ethernet
* 40 Gigabit and 100 Gigabit Ethernet
* Terabit Ethernet

---
## Classic Ethernet

[cite_start]The classic ethernet was standardized to provide 10 Mb communication using Manchester encoding [cite: 38].
[cite_start]It is possible to have different types of connections while implementing the classic ethernet [cite: 38].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | [cite_start]10 Mbps [cite: 38] |
| **Encoding** | [cite_start]Manchester encoding [cite: 38] |
| **Standard** | Original Ethernet standard |

---
## Fast Ethernet

[cite_start]The fast Ethernet is a type of Ethernet network that can transfer data at a rate of 100 Mbps using a twisted-pair cable or a fiber-optic cable [cite: 39].

[cite_start]The older 10 Mbps Ethernet is still used, but such networks do not provide necessary bandwidth for some network-based video applications [cite: 39].

[cite_start]Fast Ethernet is based on the proven CSMA/CD Media Access Control (MAC) protocol, and uses existing 10BaseT cabling [cite: 39].

[cite_start]Data can move from 10 Mbps to 100 Mbps without any protocol translation or changes to the application and networking software [cite: 39].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | [cite_start]100 Mbps [cite: 39] |
| **Cable Types** | [cite_start]Twisted-pair or fiber-optic [cite: 39] |
| **MAC Protocol** | [cite_start]CSMA/CD [cite: 39] |
| **Compatibility** | [cite_start]Uses existing 10BaseT cabling [cite: 39] |
| **Upgrade** | [cite_start]No protocol translation needed [cite: 39] |

---
## Gigabit Ethernet

[cite_start]The Gigabit Ethernet is a type of Ethernet network capable of transferring data at a rate of 1000 Mbps based on a twisted-pair or fiber optic cable, and it is very popular [cite: 40].

[cite_start]The type of twisted-pair cables that support Gigabit Ethernet is Cat 5e cable, where all the four pairs of twisted wires of the cable are used to achieve high data transfer rates [cite: 40].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | [cite_start]1000 Mbps (1 Gbps) [cite: 40] |
| **Cable Types** | [cite_start]Twisted-pair or fiber optic [cite: 40] |
| **Cable Standard** | [cite_start]Cat 5e cable [cite: 40] |
| **Wire Usage** | [cite_start]All four pairs of twisted wires [cite: 40] |
| **Popularity** | [cite_start]Very popular [cite: 40] |

---
## 10 Gigabit Ethernet

[cite_start]The 10 Gigabit Ethernet is a latest generation Ethernet capable of transferring data at a rate of 10 Gbps using twisted-pair or fiber optic cable [cite: 40].

[cite_start]10 Gigabit Ethernet is the latest generation and delivers a data rate of 10 Gbit/s (10,000 Mbit/s), and a fiber optic or twisted pair cable can be used [cite: 41].

[cite_start]10GBASE-LX4, 10GBASE-ER and 10GBASE-SR based on an optical fiber cable can be used to bridge distances of up to 10,000 m (6.2 miles) [cite: 41].

[cite_start]With a twisted pair solution, a very high quality cable (Cat-6a or Cat-7) is required. 10 Gbit/s Ethernet is mainly used for backbones in high-end applications that require high data rates [cite: 41].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | [cite_start]10 Gbps [cite: 41] |
| **Cable Types** | [cite_start]Fiber optic or twisted pair [cite: 41] |
| **Fiber Distance** | [cite_start]Up to 10,000 m (6.2 miles) [cite: 41] |
| **Twisted Pair Cable** | [cite_start]Cat-6a or Cat-7 [cite: 41] |
| **Usage** | [cite_start]Backbones in high-end applications [cite: 41] |

---
## 40 Gigabit and 100 Gigabit Ethernet

### Definition

[cite_start]High-speed Ethernet standards (40GbE and 100GbE) are designed for enterprise, backbone, and data center networks [cite: 42].

### Speed

[cite_start]Speeds [cite: 42]:
* 40GbE equals 40 Gigabits per second
* 100GbE equals 100 Gigabits per second

### Cable Type

[cite_start]Cable types [cite: 42]:
* Primarily fiber optic (multimode and single-mode)
* Limited use of twisted-pair (Cat8) for short distances

### Usage

[cite_start]Usage areas [cite: 42]:
* Enterprise networks
* Data centers and cloud providers
* ISP backbones and telecom infrastructure

---
## Terabit Ethernet

### Definition

[cite_start]Next-generation Ethernet standard aiming for speeds of 400 Gbps, 1 Tbps, and beyond [cite: 43].

### Speed

[cite_start]Speed capabilities [cite: 43]:
* Current deployments: 400 Gigabit Ethernet (400GbE)
* Future goal: 1 Terabit per second (Tbps) and higher

### Cable Type

[cite_start]Cable types [cite: 43]:
* Primarily fiber optic (single-mode and multimode)
* Advanced multiplexing and parallel transmission technologies

### Usage

[cite_start]Usage areas [cite: 43]:
* High-performance computing (HPC)
* Large-scale cloud infrastructures
* Next-gen ISP backbones and global internet traffic
* Big data, AI, and 5G/6G networks

---
## Different Types of Ethernet Cables

[cite_start]Different variants of Ethernet technologies are designated according to the type and diameter of the cables used as given below [cite: 44]:

| Cable Type | Description |
| :--- | :--- |
| **10Base2** | [cite_start]The cable used is a thin coaxial cable: thin Ethernet [cite: 44] |
| **10Base5** | [cite_start]The cable used is a thick coaxial cable: thick Ethernet [cite: 44] |
| **10Base-T** | [cite_start]The cable used is a twisted-pair (T means twisted pair) and the speed achieved is around 10 Mbps [cite: 44] |
| **100Base-FX** | [cite_start]Makes it possible to achieve a speed of 100 Mbps by using multimode fiber optic (F stands for Fiber) [cite: 44] |
| **100Base-TX** | [cite_start]Similar to 10Base-T, but with a speed 10 times greater (100 Mbps) [cite: 44] |

---
## Wireless LAN (WLAN)

### Why Wireless LAN?

**Advantages of WLAN:**
[cite_start]Advantages of WLAN include [cite: 45]:
* Availability of low-cost portable equipment
* Mobility
* Installation speed and simplicity
* Installation flexibility
* Reduced cost of ownership
* Scalability

### Historical Challenges

[cite_start]Why it was not popular in the past [cite: 46]:
* High cost
* Low data rate
* Occupational safety concerns
* Licensing requirements

---
## Components of LAN Technology

[cite_start]Parameters that characterize a LAN [cite: 47]:
* Transmission Media
* Topology
* Medium Access Control Techniques

---
## Bluetooth Topology

[cite_start]Two types of topology: Piconet and Scatternet [cite: 48].

### Piconet

[cite_start]Piconet characteristics [cite: 48]:
* A small ad hoc network of 8 stations
* One is called Master and the others are called Slaves
* All slave stations synchronize their clocks with the master
* Possible communication: One-to-one or one-to-many
* There may be one station in parked state

---
## Applications of WLAN

[cite_start]Applications of WLAN [cite: 49]:
* LAN Extensions
* Building having large open floor
* Small offices
* Rescue operation site

---
## Network Devices

### Hub

[cite_start]A hub is basically a multiport repeater. A hub connects multiple wires coming from different branches, for example, the connector in star topology which connects different stations [cite: 50].

[cite_start]Hubs cannot filter data, so data packets are sent to all connected devices. In other words, collision domain of all hosts connected through Hub remains one [cite: 50].

[cite_start]Also, they do not have intelligence to find out best path for data packets which leads to inefficiencies and wastage [cite: 50].

### Hub Characteristics

| Feature | Description |
| :--- | :--- |
| **Type** | [cite_start]Multiport repeater [cite: 50] |
| **Function** | [cite_start]Connects multiple wires [cite: 50] |
| **Data Filtering** | [cite_start]Cannot filter data [cite: 50] |
| **Transmission** | [cite_start]Sends to all connected devices [cite: 50] |
| **Collision Domain** | [cite_start]Single collision domain [cite: 50] |
| **Intelligence** | [cite_start]No path intelligence [cite: 50] |
| **Efficiency** | [cite_start]Leads to inefficiencies [cite: 50] |

---
## Bridge

[cite_start]A bridge operates at data link layer. A bridge is a repeater, with add-on functionality of filtering content by reading the MAC addresses of source and destination [cite: 51].

[cite_start]It is also used for interconnecting two LANs working on the same protocol. It has a single input and single output port, thus making it a 2 port device [cite: 51].

### Bridge Characteristics

| Feature | Description |
| :--- | :--- |
| **Layer** | [cite_start]Data Link Layer [cite: 51] |
| **Type** | [cite_start]Repeater with filtering [cite: 51] |
| **Filtering** | [cite_start]Reads MAC addresses [cite: 51] |
| **Function** | [cite_start]Interconnects two LANs [cite: 51] |
| **Protocol** | [cite_start]Same protocol required [cite: 51] |
| **Ports** | [cite_start]2 ports (single input, single output) [cite: 51] |

---
## Switch

[cite_start]A switch is a multi-port bridge with a buffer and a design that can boost its efficiency (large number of ports imply less traffic) and performance [cite: 52].

[cite_start]Switch is a data link layer device [cite: 52].

[cite_start]Switch can perform error checking before forwarding data, that makes it very efficient as it does not forward packets that have errors and forwards good packets selectively to correct port only [cite: 52].

[cite_start]In other words, switch divides collision domain of hosts, but broadcast domain remains same [cite: 52].

### Switch Characteristics

| Feature | Description |
| :--- | :--- |
| **Type** | [cite_start]Multi-port bridge [cite: 52] |
| **Layer** | [cite_start]Data Link Layer [cite: 52] |
| **Buffer** | [cite_start]Has buffer for efficiency [cite: 52] |
| **Performance** | [cite_start]Boosts efficiency and performance [cite: 52] |
| **Error Checking** | [cite_start]Performs before forwarding [cite: 52] |
| **Forwarding** | [cite_start]Selective to correct port only [cite: 52] |
| **Collision Domain** | [cite_start]Divides collision domains [cite: 52] |
| **Broadcast Domain** | [cite_start]Remains same [cite: 52] |

---
## Router

[cite_start]A router is a device like a switch that routes data packets based on their IP addresses. Router is mainly a Network Layer device [cite: 53].

[cite_start]Routers normally connect LANs and WANs together and have a dynamically updating routing table based on which they make decisions on routing the data packets [cite: 53].

[cite_start]Router divides broadcast domains of hosts connected through it [cite: 53].

### Router Characteristics

| Feature | Description |
| :--- | :--- |
| **Layer** | [cite_start]Network Layer [cite: 53] |
| **Routing Basis** | [cite_start]IP addresses [cite: 53] |
| **Function** | [cite_start]Routes data packets [cite: 53] |
| **Connectivity** | [cite_start]Connects LANs and WANs [cite: 53] |
| **Routing Table** | [cite_start]Dynamically updating [cite: 53] |
| **Broadcast Domain** | [cite_start]Divides broadcast domains [cite: 53] |

---
## Comparison of Network Devices

### Device Comparison Summary

| Device | Layer | Ports | Collision Domain | Broadcast Domain | Intelligence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hub** | [cite_start]Physical [cite: 50] | Multiple | [cite_start]Single [cite: 50] | Single | [cite_start]No [cite: 50] |
| **Bridge** | [cite_start]Data Link [cite: 51] | [cite_start]2 [cite: 51] | Divides | Single | [cite_start]MAC filtering [cite: 51] |
| **Switch** | [cite_start]Data Link [cite: 52] | [cite_start]Multiple [cite: 52] | [cite_start]Divides [cite: 52] | [cite_start]Single [cite: 52] | [cite_start]MAC filtering, error checking [cite: 52] |
| **Router** | [cite_start]Network [cite: 53] | Multiple | Divides | [cite_start]Divides [cite: 53] | [cite_start]IP routing [cite: 53] |

### Functionality Comparison

| Feature | Hub | Bridge | Switch | Router |
| :--- | :--- | :--- | :--- | :--- |
| **Data Filtering** | [cite_start]No [cite: 50] | [cite_start]Yes (MAC) [cite: 51] | [cite_start]Yes (MAC) [cite: 52] | [cite_start]Yes (IP) [cite: 53] |
| **Error Checking** | No | Limited | [cite_start]Yes [cite: 52] | Yes |
| **Path Selection** | [cite_start]No [cite: 50] | Limited | [cite_start]Yes [cite: 52] | [cite_start]Yes [cite: 53] |
| **Network Segmentation** | [cite_start]No [cite: 50] | Partial | [cite_start]Collision only [cite: 52] | [cite_start]Full [cite: 53] |

---
## Summary of Access Protocols

### Random Access Protocols Summary

| Protocol | Efficiency | Collision Handling | Application |
| :--- | :--- | :--- | :--- |
| **Pure ALOHA** | [cite_start]~18% [cite: 11] | Retry after random time | [cite_start]Low-power wireless, satellite [cite: 11] |
| **Slotted ALOHA** | [cite_start]~36% [cite: 11] | [cite_start]Time slots [cite: 11] | Wireless networks |
| **1-Persistent CSMA** | Higher | [cite_start]Sense, transmit immediately when idle [cite: 16] | Simple networks |
| **Non-Persistent CSMA** | Moderate | [cite_start]Wait random time [cite: 18] | Low collision priority |
| **P-Persistent CSMA** | Good | [cite_start]Probability-based [cite: 19] | [cite_start]Wi-Fi [cite: 19] |
| **CSMA/CD** | High | [cite_start]Detect and abort [cite: 21] | Wired Ethernet |
| **CSMA/CA** | Good | [cite_start]Avoid collisions [cite: 25] | [cite_start]Wireless networks [cite: 25] |

### Controlled Access Protocols Summary

| Protocol | Control Type | Efficiency | Application |
| :--- | :--- | :--- | :--- |
| **Polling** | [cite_start]Centralized [cite: 26] | High | Terminal networks |
| **Token Passing** | [cite_start]Distributed [cite: 28] | [cite_start]Deterministic [cite: 28] | Token Ring, FDDI |

### Channelization Protocols Summary

| Protocol | Division Method | Application |
| :--- | :--- | :--- |
| **FDMA** | [cite_start]Frequency [cite: 10] | Analog systems |
| **TDMA** | [cite_start]Time [cite: 10] | Digital telephony |
| **CDMA** | [cite_start]Code [cite: 10] | 3G cellular |

---
## Ethernet Speeds Summary

| Type | Speed | Cable | Standard |
| :--- | :--- | :--- | :--- |
| **Classic Ethernet** | [cite_start]10 Mbps [cite: 38] | [cite_start]Various [cite: 38] | IEEE 802.3 |
| **Fast Ethernet** | [cite_start]100 Mbps [cite: 39] | [cite_start]Twisted-pair or fiber [cite: 39] | IEEE 802.3u |
| **Gigabit Ethernet** | [cite_start]1000 Mbps [cite: 40] | [cite_start]Cat 5e or fiber [cite: 40] | IEEE 802.3ab/z |
| **10 Gigabit Ethernet** | [cite_start]10 Gbps [cite: 41] | [cite_start]Cat 6a/7 or fiber [cite: 41] | IEEE 802.3ae |
| **40/100 Gigabit Ethernet** | [cite_start]40/100 Gbps [cite: 42] | [cite_start]Fiber optic [cite: 42] | IEEE 802.3ba |
| **Terabit Ethernet** | [cite_start]400 Gbps - 1 Tbps [cite: 43] | [cite_start]Fiber optic [cite: 43] | Future standards |

---
## Key Concepts Review

### MAC Layer Functions
* [cite_start]Provides interface between Physical and upper layers [cite: 5]
* [cite_start]Encapsulates data into frames [cite: 5]
* [cite_start]Assigns unique MAC addresses [cite: 5]
* [cite_start]Implements access control protocols [cite: 6]
* [cite_start]Handles collisions and retransmission [cite: 6]
* [cite_start]Performs error detection using CRC [cite: 6]

### Access Protocol Selection
* **Random Access**: [cite_start]No central control, collisions possible [cite: 8]
* **Controlled Access**: [cite_start]Stations must be authorized [cite: 9]
* **Channelization**: [cite_start]Bandwidth shared by time, frequency, or code [cite: 10]

### CSMA Variants
* **1-Persistent**: [cite_start]Transmit immediately when idle [cite: 16]
* **Non-Persistent**: [cite_start]Wait random time if busy [cite: 18]
* **P-Persistent**: [cite_start]Transmit with probability p [cite: 19]

### Collision Handling
* **CSMA/CD**: [cite_start]Detect collision, send jamming signal, backoff [cite: 21, 22]
* **CSMA/CA**: [cite_start]Avoid collisions using IFS, contention window, ACKs [cite: 25]

### Network Devices
* **Hub**: [cite_start]Multiport repeater, no filtering [cite: 50]
* **Bridge**: [cite_start]Data Link Layer, MAC filtering [cite: 51]
* **Switch**: [cite_start]Multi-port bridge, divides collision domains [cite: 52]
* **Router**: [cite_start]Network Layer, divides broadcast domains [cite: 53]

### Ethernet Evolution
* [cite_start]Classic: 10 Mbps [cite: 38]
* [cite_start]Fast: 100 Mbps [cite: 39]
* [cite_start]Gigabit: 1000 Mbps [cite: 40]
* [cite_start]10 Gigabit: 10 Gbps [cite: 41]
* [cite_start]Beyond: 40/100 Gbps to Terabit [cite: 42, 43]
`}