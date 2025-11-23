// datasets/computer-networks/lesson07.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson07Dataset: Dataset = {
  id: "networks-07",
  topicCount: 45,
  category: "Computer Networks",
  subcategory: "Medium Access Sublayer",
  description: "Medium Access Control (MAC) layer functions, Random Access Protocols (ALOHA, CSMA, CSMA/CD, CSMA/CA), Controlled Access Protocols (Polling, Token Passing), Channelization, Ethernet technologies, Wireless LAN, and Network Devices (Hub, Bridge, Switch, Router).",
  topics: [
    "Why Do We Need the MAC Layer?",
    "Medium Access Sublayer",
    "Functions of MAC Layer",
    "Medium Access Protocols",
    "Random Access Protocols",
    "ALOHA Random Access Protocol",
    "Pure ALOHA",
    "Slotted ALOHA",
    "Carrier-Sense Multiple Access (CSMA)",
    "CSMA Protocols - Persistent Methods",
    "1-Persistent CSMA",
    "Non-Persistent CSMA",
    "P-Persistent CSMA",
    "Carrier Sense Multiple Access with Collision Detection (CSMA/CD)",
    "CSMA/CD Rules",
    "Binary Exponential Backoff Algorithm",
    "Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)",
    "Controlled Access Protocols",
    "Polling Control Access Protocol",
    "Token Passing Control Access Protocol",
    "Channelization Protocols",
    "Ethernet",
    "Ethernet Characteristics",
    "Ethernet Example",
    "What You Need in an Ethernet LAN",
    "Types of Ethernet",
    "Classic Ethernet",
    "Fast Ethernet",
    "Gigabit Ethernet",
    "10 Gigabit Ethernet",
    "40 Gigabit and 100 Gigabit Ethernet",
    "Terabit Ethernet",
    "Different Types of Ethernet Cables",
    "Wireless LAN (WLAN)",
    "Components of LAN Technology",
    "Bluetooth Topology",
    "Applications of WLAN",
    "Network Devices",
    "Bridge",
    "Switch",
    "Router",
    "Comparison of Network Devices",
    "Summary of Access Protocols",
    "Ethernet Speeds Summary",
    "Key Concepts Review",
  ],
  content: `
<TOPIC_START index="0" title="Why Do We Need the MAC Layer?">
## 1.0 Why Do We Need the MAC Layer?

### 1.1 The Problem

In a computer network, multiple devices share the same communication medium (cables or wireless signals).
If devices transmit data at the same time, signals collide, resulting in data loss and requiring retransmissions.
Collisions reduce network performance and cause delays.

### 1.2 The Solution: MAC Layer

The **Medium Access Control (MAC) layer** defines the rules for how devices access the medium:
* **Who can transmit**
* **When to transmit**
* **How to handle collisions**
<TOPIC_END>

<TOPIC_START index="1" title="Medium Access Sublayer">
## 2.0 Medium Access Sublayer

### 2.1 Data Link Layer Division

The **Data Link Layer** is divided into two functionality-oriented sublayers:
1. **LLC (Logical Link Control)**
2. **MAC (Medium Access Control)**

### 2.2 LLC (Logical Link Control) Functions

LLC provides the following functions:
* Identifies which network protocol (e.g., IP, ARP, IPv6) is carried in the frame
* Provides flow control to prevent overwhelming receivers
* Performs error checking and provides error notification

### 2.3 MAC (Medium Access Control) Functions

MAC provides the following functions:
* Assigns each device a **unique identifier (MAC address)**
* Determines how devices share the medium and avoid collisions
* Adds information to frames for addressing and error detection
<TOPIC_END>

<TOPIC_START index="2" title="Functions of MAC Layer">
## 3.0 Functions of MAC Layer

### 3.1 Core Functions Overview

The MAC layer performs seven critical functions:

### 3.2 Abstraction of the Physical Layer

• Provides an interface between the Physical Layer and upper layers (LLC and Network Layer)
• Upper layers do not need to worry about the actual medium (wired or wireless)

### 3.3 Frame Encapsulation

• Encapsulates network data into frames suitable for transmission
• Adds header (source and destination MAC addresses) and trailer (Frame Check Sequence (FCS) for error detection) information

### 3.4 Addressing

• Assigns **unique MAC addresses** to each device's NIC (Network Interface Card)
• Determines source and destination addresses for frame delivery
• Supports unicast, broadcast, and multicast delivery

### 3.5 Access Control and Multiple Access Resolution

• Determines which device can use the medium when multiple devices want to transmit
• Implements multiple access protocols (Random Access: CSMA/CD, CSMA/CA; Controlled Access: Token Passing, Polling)
• Prevents collisions and ensures fair sharing of the medium

### 3.6 Collision Handling and Retransmission

• Detects collisions on the medium (e.g., Ethernet CSMA/CD)
• Initiates retransmission after a random backoff or waiting period

### 3.7 Frame Delivery

• Ensures frames are delivered to the correct destination device
• Works with switches and access points to forward frames accurately

### 3.8 Error Detection

• Generates Frame Check Sequence (FCS) using CRC (Cyclic Redundancy Check)
• Detects corrupted frames and prevents them from reaching upper layers
<TOPIC_END>

<TOPIC_START index="3" title="Medium Access Protocols">
## 4.0 Medium Access Protocols

Medium Access Protocols are classified into three main categories:
1. **Random Access Protocols**
2. **Controlled Access Protocols**
3. **Channelization Protocols**
<TOPIC_END>

<TOPIC_START index="4" title="Random Access Protocols">
## 5.0 Random Access Protocols

### 5.1 Overview

In random access methods, all stations are treated equally and no one has control over the channel. Any device can attempt to transmit data at any time, without permission from others.

### 5.2 Key Characteristics

Random access protocols have the following characteristics:
* No centralized control or scheduling
* **Collisions can occur** when multiple stations transmit simultaneously
* Protocols define how stations detect or avoid collisions and retry sending

### 5.3 Categories of Random Access Protocols

The categories of random access protocols are:
* **ALOHA**
* **Carrier-Sense Multiple Access (CSMA)**
* **Carrier Sense Multiple Access With Collision Detection (CSMA/CD)**
* **Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)**
<TOPIC_END>

<TOPIC_START index="5" title="ALOHA Random Access Protocol">
## 6.0 ALOHA Random Access Protocol

### 6.1 Overview

**ALOHA** was the first random access protocol, developed at the University of Hawaii in the 1970s for wireless communication. It laid the foundation for modern wireless and shared medium access methods.

The main problem in shared media: multiple stations may transmit simultaneously, causing collisions.

### 6.2 Variations of ALOHA

ALOHA can be of two variations:
* **Pure ALOHA** - Transmit anytime; susceptible to high collision (efficiency approximately 18 percent)
* **Slotted ALOHA** - Transmit in predefined time slots (efficiency approximately 36 percent)

### 6.3 Applications

Applications: Still relevant in low-power wireless networks like LoRa, LPWAN, and some satellite links.
<TOPIC_END>

<TOPIC_START index="6" title="Pure ALOHA">
## 7.0 Pure ALOHA

### 7.1 How It Works

Frames in a pure ALOHA network are transmitted at any time without checking if the channel is busy.

### 7.2 Characteristics

| Feature | Description |
| :--- | :--- |
| **Transmission** | Anytime, no synchronization |
| **Collision Probability** | High |
| **Efficiency** | Approximately 18 percent |
| **Advantage** | Simple implementation |
| **Disadvantage** | Low throughput due to collisions |
<TOPIC_END>

<TOPIC_START index="7" title="Slotted ALOHA">
## 8.0 Slotted ALOHA

### 8.1 How It Works

Frames in a slotted ALOHA network are transmitted in **predefined time slots**.

### 8.2 Characteristics

| Feature | Description |
| :--- | :--- |
| **Transmission** | Only at beginning of time slots |
| **Collision Probability** | Lower than Pure ALOHA |
| **Efficiency** | Approximately 36 percent |
| **Advantage** | Better efficiency than Pure ALOHA |
| **Disadvantage** | Requires time synchronization |

### 8.3 Comparison: Pure ALOHA vs Slotted ALOHA

| Aspect | Pure ALOHA | Slotted ALOHA |
| :--- | :--- | :--- |
| **Timing** | Anytime | Predefined time slots |
| **Efficiency** | ~18% | ~36% |
| **Synchronization** | Not required | Required |
| **Collision Window** | 2 times frame transmission time | 1 times frame transmission time |
<TOPIC_END>

<TOPIC_START index="8" title="Carrier-Sense Multiple Access (CSMA)">
## 9.0 Carrier-Sense Multiple Access (CSMA)

### 9.1 Basic Concept

Basic concept: **"sense before transmit"** or **"listen before talk"**.

### 9.2 How CSMA Works

• If channel is sensed **idle**, transmit the frame
• If channel is sensed **busy**, defer the transmission
• Reduces the collisions and increases the performance
<TOPIC_END>

<TOPIC_START index="9" title="CSMA Protocols - Persistent Methods">
## 10.0 CSMA Protocols - Persistent Methods

### 10.1 Key Questions

In CSMA, a station senses the channel before transmitting. If the channel is busy, the station must wait. These variations define how the station behaves while waiting or sensing.

Key Questions:
* What should a station do if the channel is busy?
* What should it do if the channel is idle?

### 10.2 Types of CSMA Protocols

Types of CSMA Protocols:
1. **1-Persistent CSMA** - Transmit immediately when the channel becomes idle (high collision chance)
2. **Non-Persistent CSMA** - Wait random time before sensing again (reduces collisions, increases delay)
3. **P-Persistent CSMA** (used in slotted systems like Wi-Fi) - Transmit with probability $p$, or wait for next slot with probability $(1-p)$
<TOPIC_END>

<TOPIC_START index="10" title="1-Persistent CSMA">
## 11.0 1-Persistent CSMA

### 11.1 How It Works

• Sense the carrier
• If it is idle, send the frame immediately
• If the station is busy, it will continuously sense (listen) to the carrier until it becomes idle and will send the frame immediately

### 11.2 Characteristics

• High risk of collision, especially when multiple stations are waiting for the channel to become idle at the same time

• In case of a collision, the sender waits for a random period of time and attempts to transmit again unconditionally (i.e. with probability equals 1)

### 11.3 1-Persistent CSMA Process

| Step | Action |
| :--- | :--- |
| **1. Sense Channel** | Check if channel is idle or busy |
| **2. If Idle** | Transmit immediately |
| **3. If Busy** | Continuously sense until idle |
| **4. When Idle** | Transmit immediately |
| **5. If Collision** | Wait random time, retry |

### 11.4 Advantages and Disadvantages

| Aspect | Description |
| :--- | :--- |
| **Advantage** | Maximum channel utilization when idle |
| **Disadvantage** | High collision risk |
<TOPIC_END>

<TOPIC_START index="11" title="Non-Persistent CSMA">
## 12.0 Non-Persistent CSMA

### 12.1 How It Works

• Sense the carrier
• If it is idle, sends the frame immediately
• If it is busy, station will wait **random amount of time** and then senses the carrier again

### 12.2 Characteristics

• Advantage: Reduces the chances of collision
• Disadvantage: Reduces the efficiency of the network

### 12.3 Non-Persistent CSMA Process

| Step | Action |
| :--- | :--- |
| **1. Sense Channel** | Check if channel is idle or busy |
| **2. If Idle** | Transmit immediately |
| **3. If Busy** | Wait random time |
| **4. After Waiting** | Sense carrier again |
<TOPIC_END>

<TOPIC_START index="12" title="P-Persistent CSMA">
## 13.0 P-Persistent CSMA

### 13.1 Overview

This method is used if the channel has time slots with a slot duration equal to or greater than the maximum propagation time.

### 13.2 How It Works

In this method, after the station finds the line idle it follows these steps:
* With probability $p$, the station sends its frame
* With probability $q = 1-p$, the station waits for the beginning of the next time slot and checks the line again
* If the link is idle, it goes to step 1
* If the line is busy, it acts as though a collision has occurred and uses the backoff procedure

### 13.3 Applications

Applications: Used in CSMA/CA systems including Wi-Fi and other packet radio systems.

### 13.4 P-Persistent CSMA Process

| Step | Condition | Action |
| :--- | :--- | :--- |
| **1. Sense Channel** | Channel idle | Proceed to step 2 |
| **1. Sense Channel** | Channel busy | Continue sensing |
| **2. Probability Check** | Random less than $p$ | Transmit frame |
| **2. Probability Check** | Random greater than $p$ | Wait for next slot |
| **3. Next Slot** | Channel idle | Return to step 2 |
| **3. Next Slot** | Channel busy | Backoff procedure |
<TOPIC_END>

<TOPIC_START index="13" title="Carrier Sense Multiple Access with Collision Detection (CSMA/CD)">
## 14.0 Carrier Sense Multiple Access with Collision Detection (CSMA/CD)

### 14.1 Overview

**CSMA/CD** protocol can be considered as a refinement over the CSMA scheme.
The nodes continue to monitor the channel while transmitting a packet and immediately cease transmission when collision is detected.
This scheme is known as **Carrier Sensed Multiple Access with Collision Detection (CSMA/CD)** or **Listen-While-Talk**.
<TOPIC_END>

<TOPIC_START index="14" title="CSMA/CD Rules">
## 15.0 CSMA/CD Rules

### 15.1 Two Rules

Rule 1: If collision is detected during the transmission of packet, the station will immediately cease or abort the transmission and it will send a **Jamming signal** (for a brief duration) to enforce the collision to all the other stations who have not sensed the collision.

Rule 2: After transmitting the jamming signal, the station waits for a **random amount of time** and then transmission is resumed.

### 15.2 Jamming Signal

Note: Jamming signal is a **48 bit jamming sequence** sent by station to indicate collision to other stations around the network.
<TOPIC_END>

<TOPIC_START index="15" title="Binary Exponential Backoff Algorithm">
## 16.0 Binary Exponential Backoff Algorithm

### 16.1 How It Works

**Binary exponential backoff** is used: A node will attempt to transmit repeatedly in the face of repeated collision, but after each collision, the mean value of random delay is **doubled**.

### 16.2 Binary Exponential Backoff Process

**Algorithm Steps:**
1. After first collision: wait 0 or 1 slot times randomly
2. After second collision: wait 0, 1, 2, or 3 slot times randomly
3. After third collision: wait 0 to 7 slot times randomly
4. After $n^{th}$ collision: wait 0 to $(2^n - 1)$ slot times randomly
5. After 10 collisions: keep maximum at 1023 slot times
6. After 16 collisions: give up and report error

### 16.3 Characteristics

| Feature | Description |
| :--- | :--- |
| **Purpose** | Handle repeated collisions fairly |
| **Method** | Double mean delay after each collision |
| **Jamming Signal** | 48 bits |
| **Fairness** | Gives equal chance to all stations |
<TOPIC_END>

<TOPIC_START index="16" title="Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)">
## 17.0 Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)

### 17.1 Overview

**CSMA/CA** is used in **wireless network**. In wireless networks most of the energy is lost due to transmission. So collisions can add 5-10 percent additional energy which cannot be well detected. So **collisions are avoided** using three CSMA/CA strategies.

### 17.2 Three CSMA/CA Strategies

CSMA/CA uses three strategies:
1. **Inter-Frame Space (IFS)**
2. **Contention Window**
3. **Acknowledgments**

### 17.3 Why CSMA/CA for Wireless?

| Reason | Explanation |
| :--- | :--- |
| **Energy Loss** | Most energy lost in transmission |
| **Collision Cost** | Collisions add 5-10% additional energy |
| **Detection Difficulty** | Collisions cannot be well detected |
| **Solution** | Avoid collisions rather than detect them |
<TOPIC_END>

<TOPIC_START index="17" title="Controlled Access Protocols">
## 18.0 Controlled Access Protocols

### 18.1 Overview

In **controlled access**, the stations consult one another to find which station has the right to send.
A station cannot send unless it has been **authorized** by other stations.

### 18.2 Categories

The categories of controlled access protocols are:
* **Reservation**
* **Polling**
* **Token Passing**
<TOPIC_END>

<TOPIC_START index="18" title="Polling Control Access Protocol">
## 19.0 Polling Control Access Protocol

### 19.1 Overview

To have a communication between primary and secondary stations, **Select and Poll functions** are used in polling access method.

### 19.2 How Polling Works

**Primary Station:**
* Controls the medium
* **Polls** secondary stations
* Asks if they have data to send

**Secondary Stations:**
* Wait to be polled
* Respond when selected
* Send data when authorized

### 19.3 Characteristics

| Feature | Description |
| :--- | :--- |
| **Control** | Centralized (primary station) |
| **Authorization** | Stations must be authorized |
| **Functions** | Select and Poll |
| **Efficiency** | No collisions, but overhead from polling |
<TOPIC_END>

<TOPIC_START index="19" title="Token Passing Control Access Protocol">
## 20.0 Token Passing Control Access Protocol

### 20.1 Overview

**Token Passing** is a deterministic network access method where a special data packet called a "**token**" circulates among the devices (or nodes) on the network.

Only the device that **holds the token** is allowed to send data.

Once the device finishes transmission, it passes the token to the next device.

### 20.2 How Token Passing Works

**Process:**
1. Token circulates through network
2. Station with data waits for token
3. Station captures token
4. Station transmits data
5. Station releases token to next station

### 20.3 Logical Ring Topology

Token passing uses a **logical ring** and physical topology.

### 20.4 FDDI Token Ring Frame Format

FDDI Token Ring Frame Format includes **FCS** (Frame-Check Sequence).

### 20.5 Characteristics

| Feature | Description |
| :--- | :--- |
| **Access Method** | Token circulation |
| **Authorization** | Only token holder can transmit |
| **Type** | Deterministic |
| **Collisions** | None (token ensures exclusive access) |
| **Fairness** | Each station gets equal opportunity |
<TOPIC_END>

<TOPIC_START index="20" title="Channelization Protocols">
## 21.0 Channelization Protocols

### 21.1 Overview

**Channelization** is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations.

### 21.2 Categories

The categories of channelization protocols are:
* **Frequency-Division Multiple Access (FDMA)**
* **Time-Division Multiple Access (TDMA)**
* **Code-Division Multiple Access (CDMA)**

### 21.3 Comparison of Channelization Methods

| Method | Division Basis | Application |
| :--- | :--- | :--- |
| **FDMA** | Frequency bands | Analog cellular, radio |
| **TDMA** | Time slots | GSM, digital telephony |
| **CDMA** | Unique codes | 3G cellular, GPS |
<TOPIC_END>

<TOPIC_START index="21" title="Ethernet">
## 22.0 Ethernet

### 22.1 Overview

In computer networking, **Ethernet** is a technology for connecting devices in a **local area network (LAN)**. It defines how data is transmitted over a **wired network** and is one of the most commonly used LAN technologies in the world.
<TOPIC_END>

<TOPIC_START index="22" title="Ethernet Characteristics">
## 23.0 Ethernet Characteristics

Ethernet has the following characteristics:

| Feature | Description |
| :--- | :--- |
| **Medium** | Usually uses twisted pair cables (like Cat5e, Cat6) and sometimes fiber optics |
| **Speed** | Common Ethernet speeds include 100 Mbps, 1 Gbps (Gigabit Ethernet), 10 Gbps, etc |
| **Standard** | Defined by the **IEEE 802.3 standard** |
| **Data Transmission** | Uses frames to transmit data between devices |
| **Topology** | Typically uses star or bus topology |
| **Connectivity** | Devices usually connected through a **switch** (or older hubs) |
<TOPIC_END>

<TOPIC_START index="23" title="Ethernet Example">
## 24.0 Ethernet Example

Example: Imagine you have a computer, a printer, and a router. If you connect all of them with Ethernet cables and a switch, they can communicate quickly and reliably within the same network.
<TOPIC_END>

<TOPIC_START index="24" title="What You Need in an Ethernet LAN">
## 25.0 What You Need in an Ethernet LAN

### 25.1 Physical Components

**Ethernet Cables:**
• These are the physical wires that connect devices
• Common types: Cat5e, Cat6, or Cat6a
• Use them to connect PCs, printers, switches, and routers

**Network Interface Cards (NICs):**
• Every device (computer, printer, etc.) must have a **NIC**
• Most modern devices have a built-in Ethernet port

**Switch or Hub:**
• **Switch is preferred**: it is faster and smarter
• A switch connects all your devices and manages data traffic efficiently
• Hub is older technology, rarely used now

**Router (Optional but Common):**
• Needed if your LAN needs internet access
• Connects your LAN to the Internet
• Often includes a built-in switch with multiple Ethernet ports

**Power Supply:**
• All devices like routers and switches need power
• Make sure power outlets are available where needed

**Devices to Connect:**
• PCs, laptops, printers, IP phones, game consoles, etc
<TOPIC_END>

<TOPIC_START index="25" title="Types of Ethernet">
## 26.0 Types of Ethernet

Types of Ethernet include:
* Classic Ethernet
* Fast Ethernet
* Gigabit Ethernet
* 10 GB Ethernet
* 40 Gigabit and 100 Gigabit Ethernet
* Terabit Ethernet
<TOPIC_END>

<TOPIC_START index="26" title="Classic Ethernet">
## 27.0 Classic Ethernet

The **classic ethernet** was standardized to provide **10 Mb communication** using **Manchester encoding**.
It is possible to have different types of connections while implementing the classic ethernet.

### 27.1 Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | 10 Mbps |
| **Encoding** | Manchester encoding |
| **Standard** | Original Ethernet standard |
<TOPIC_END>

<TOPIC_START index="27" title="Fast Ethernet">
## 28.0 Fast Ethernet

The **fast Ethernet** is a type of Ethernet network that can transfer data at a rate of **100 Mbps** using a twisted-pair cable or a fiber-optic cable.

The older 10 Mbps Ethernet is still used, but such networks do not provide necessary bandwidth for some network-based video applications.

Fast Ethernet is based on the proven **CSMA/CD Media Access Control (MAC) protocol**, and uses existing 10BaseT cabling.

Data can move from 10 Mbps to 100 Mbps without any protocol translation or changes to the application and networking software.

### 28.1 Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | 100 Mbps |
| **Cable Types** | Twisted-pair or fiber-optic |
| **MAC Protocol** | CSMA/CD |
| **Compatibility** | Uses existing 10BaseT cabling |
| **Upgrade** | No protocol translation needed |
<TOPIC_END>

<TOPIC_START index="28" title="Gigabit Ethernet">
## 29.0 Gigabit Ethernet

The **Gigabit Ethernet** is a type of Ethernet network capable of transferring data at a rate of **1000 Mbps (1 Gbps)** based on a twisted-pair or fiber optic cable, and it is very popular.

The type of twisted-pair cables that support Gigabit Ethernet is **Cat 5e cable**, where all the four pairs of twisted wires of the cable are used to achieve high data transfer rates.

### 29.1 Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | 1000 Mbps (1 Gbps) |
| **Cable Types** | Twisted-pair or fiber optic |
| **Cable Standard** | Cat 5e cable |
| **Wire Usage** | All four pairs of twisted wires |
| **Popularity** | Very popular |
<TOPIC_END>

<TOPIC_START index="29" title="10 Gigabit Ethernet">
## 30.0 10 Gigabit Ethernet

The **10 Gigabit Ethernet** is a latest generation Ethernet capable of transferring data at a rate of **10 Gbps** using twisted-pair or fiber optic cable.

10 Gigabit Ethernet is the latest generation and delivers a data rate of 10 Gbit/s (10,000 Mbit/s), and a fiber optic or twisted pair cable can be used.

**10GBASE-LX4, 10GBASE-ER** and **10GBASE-SR** based on an optical fiber cable can be used to bridge distances of up to **10,000 m (6.2 miles)**.

With a twisted pair solution, a very high quality cable (**Cat-6a or Cat-7**) is required. 10 Gbit/s Ethernet is mainly used for **backbones** in high-end applications that require high data rates.

### 30.1 Characteristics

| Feature | Description |
| :--- | :--- |
| **Speed** | 10 Gbps |
| **Cable Types** | Fiber optic or twisted pair |
| **Fiber Distance** | Up to 10,000 m (6.2 miles) |
| **Twisted Pair Cable** | Cat-6a or Cat-7 |
| **Usage** | Backbones in high-end applications |
<TOPIC_END>

<TOPIC_START index="30" title="40 Gigabit and 100 Gigabit Ethernet">
## 31.0 40 Gigabit and 100 Gigabit Ethernet

### 31.1 Definition

High-speed Ethernet standards (**40GbE** and **100GbE**) are designed for enterprise, backbone, and data center networks.

### 31.2 Speed

Speeds:
* 40GbE equals 40 Gigabits per second
* 100GbE equals 100 Gigabits per second

### 31.3 Cable Type

Cable types:
* Primarily **fiber optic** (multimode and single-mode)
* Limited use of twisted-pair (Cat8) for short distances

### 31.4 Usage

Usage areas:
* Enterprise networks
* **Data centers and cloud providers**
* ISP backbones and telecom infrastructure
<TOPIC_END>

<TOPIC_START index="31" title="Terabit Ethernet">
## 32.0 Terabit Ethernet

### 32.1 Definition

Next-generation Ethernet standard aiming for speeds of **400 Gbps, 1 Tbps**, and beyond.

### 32.2 Speed

Speed capabilities:
* Current deployments: **400 Gigabit Ethernet (400GbE)**
* Future goal: **1 Terabit per second (Tbps)** and higher

### 32.3 Cable Type

Cable types:
* Primarily **fiber optic** (single-mode and multimode)
* Advanced multiplexing and parallel transmission technologies

### 32.4 Usage

Usage areas:
* High-performance computing (HPC)
* Large-scale cloud infrastructures
* Next-gen ISP backbones and global internet traffic
* Big data, AI, and 5G/6G networks
<TOPIC_END>

<TOPIC_START index="32" title="Different Types of Ethernet Cables">
## 33.0 Different Types of Ethernet Cables

Different variants of Ethernet technologies are designated according to the type and diameter of the cables used as given below:

| Cable Type | Description |
| :--- | :--- |
| **10Base2** | The cable used is a thin coaxial cable: thin Ethernet |
| **10Base5** | The cable used is a thick coaxial cable: thick Ethernet |
| **10Base-T** | The cable used is a **twisted-pair (T means twisted pair)** and the speed achieved is around 10 Mbps |
| **100Base-FX** | Makes it possible to achieve a speed of 100 Mbps by using **multimode fiber optic (F stands for Fiber)** |
| **100Base-TX** | Similar to 10Base-T, but with a speed 10 times greater (100 Mbps) |
<TOPIC_END>

<TOPIC_START index="33" title="Wireless LAN (WLAN)">
## 34.0 Wireless LAN (WLAN)

### 34.1 Why Wireless LAN?

**Advantages of WLAN:**
Advantages of WLAN include:
* Availability of low-cost portable equipment
* **Mobility**
* Installation speed and simplicity
* Installation flexibility
* Reduced cost of ownership
* **Scalability**

### 34.2 Historical Challenges

Why it was not popular in the past:
* High cost
* Low data rate
* Occupational safety concerns
* Licensing requirements
<TOPIC_END>

<TOPIC_START index="34" title="Components of LAN Technology">
## 35.0 Components of LAN Technology

Parameters that characterize a LAN:
* **Transmission Media**
* **Topology**
* **Medium Access Control Techniques**
<TOPIC_END>

<TOPIC_START index="35" title="Bluetooth Topology">
## 36.0 Bluetooth Topology

Two types of topology: **Piconet** and **Scatternet**.

### 36.1 Piconet

Piconet characteristics:
* A small **ad hoc network of 8 stations**
* One is called **Master** and the others are called **Slaves**
* All slave stations synchronize their clocks with the master
* Possible communication: One-to-one or one-to-many
* There may be one station in parked state
<TOPIC_END>

<TOPIC_START index="36" title="Applications of WLAN">
## 37.0 Applications of WLAN

Applications of WLAN:
* LAN Extensions
* Building having large open floor
* Small offices
* Rescue operation site
<TOPIC_END>

<TOPIC_START index="37" title="Network Devices">
## 38.0 Hub

A **hub** is basically a **multiport repeater**. A hub connects multiple wires coming from different branches, for example, the connector in star topology which connects different stations.

Hubs **cannot filter data**, so data packets are sent to all connected devices. In other words, **collision domain of all hosts connected through Hub remains one**.

Also, they do not have intelligence to find out best path for data packets which leads to inefficiencies and wastage.

### 38.2 Hub Characteristics

| Feature | Description |
| :--- | :--- |
| **Type** | Multiport repeater |
| **Function** | Connects multiple wires |
| **Data Filtering** | Cannot filter data |
| **Transmission** | Sends to all connected devices |
| **Collision Domain** | Single collision domain |
| **Intelligence** | No path intelligence |
| **Efficiency** | Leads to inefficiencies |
<TOPIC_END>

<TOPIC_START index="38" title="Bridge">
## 39.0 Bridge

A **bridge** operates at **data link layer**. A bridge is a repeater, with add-on functionality of **filtering content by reading the MAC addresses** of source and destination.

It is also used for interconnecting two LANs working on the **same protocol**. It has a single input and single output port, thus making it a **2 port device**.

### 39.1 Bridge Characteristics

| Feature | Description |
| :--- | :--- |
| **Layer** | Data Link Layer |
| **Type** | Repeater with filtering |
| **Filtering** | Reads MAC addresses |
| **Function** | Interconnects two LANs |
| **Protocol** | Same protocol required |
| **Ports** | 2 ports (single input, single output) |
<TOPIC_END>

<TOPIC_START index="39" title="Switch">
## 40.0 Switch

A **switch** is a **multi-port bridge** with a buffer and a design that can boost its efficiency (large number of ports imply less traffic) and performance.

Switch is a **data link layer device**.

Switch can perform **error checking** before forwarding data, that makes it very efficient as it does not forward packets that have errors and forwards good packets **selectively to correct port only**.

In other words, switch **divides collision domain** of hosts, but **broadcast domain remains same**.

### 40.1 Switch Characteristics

| Feature | Description |
| :--- | :--- |
| **Type** | Multi-port bridge |
| **Layer** | Data Link Layer |
| **Buffer** | Has buffer for efficiency |
| **Performance** | Boosts efficiency and performance |
| **Error Checking** | Performs before forwarding |
| **Forwarding** | Selective to correct port only |
| **Collision Domain** | Divides collision domains |
| **Broadcast Domain** | Remains same |
<TOPIC_END>

<TOPIC_START index="40" title="Router">
## 41.0 Router

A **router** is a device like a switch that routes data packets based on their **IP addresses**. Router is mainly a **Network Layer device**.

Routers normally connect **LANs and WANs** together and have a dynamically updating **routing table** based on which they make decisions on routing the data packets.

Router **divides broadcast domains** of hosts connected through it.

### 41.1 Router Characteristics

| Feature | Description |
| :--- | :--- |
| **Layer** | Network Layer |
| **Routing Basis** | IP addresses |
| **Function** | Routes data packets |
| **Connectivity** | Connects LANs and WANs |
| **Routing Table** | Dynamically updating |
| **Broadcast Domain** | Divides broadcast domains |
<TOPIC_END>

<TOPIC_START index="41" title="Comparison of Network Devices">
## 42.0 Comparison of Network Devices

### 42.1 Device Comparison Summary

| Device | Layer | Ports | Collision Domain | Broadcast Domain | Intelligence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hub** | Physical | Multiple | Single | Single | No |
| **Bridge** | Data Link | 2 | Divides | Single | MAC filtering |
| **Switch** | Data Link | Multiple | Divides | Single | MAC filtering, error checking |
| **Router** | Network | Multiple | Divides | Divides | IP routing |

### 42.2 Functionality Comparison

| Feature | Hub | Bridge | Switch | Router |
| :--- | :--- | :--- | :--- | :--- |
| **Data Filtering** | No | Yes (MAC) | Yes (MAC) | Yes (IP) |
| **Error Checking** | No | Limited | Yes | Yes |
| **Path Selection** | No | Limited | Yes | Yes |
| **Network Segmentation** | No | Partial | Collision only | Full |
<TOPIC_END>

<TOPIC_START index="42" title="Summary of Access Protocols">
## 43.0 Summary of Access Protocols

### 43.1 Random Access Protocols Summary

| Protocol | Efficiency | Collision Handling | Application |
| :--- | :--- | :--- | :--- |
| **Pure ALOHA** | ~18% | Retry after random time | Low-power wireless, satellite |
| **Slotted ALOHA** | ~36% | Time slots | Wireless networks |
| **1-Persistent CSMA** | Higher | Sense, transmit immediately when idle | Simple networks |
| **Non-Persistent CSMA** | Moderate | Wait random time | Low collision priority |
| **P-Persistent CSMA** | Good | Probability-based | Wi-Fi |
| **CSMA/CD** | High | Detect and abort | Wired Ethernet |
| **CSMA/CA** | Good | Avoid collisions | Wireless networks |

### 43.2 Controlled Access Protocols Summary

| Protocol | Control Type | Efficiency | Application |
| :--- | :--- | :--- | :--- |
| **Polling** | Centralized | High | Terminal networks |
| **Token Passing** | Distributed | Deterministic | Token Ring, FDDI |

### 43.3 Channelization Protocols Summary

| Protocol | Division Method | Application |
| :--- | :--- | :--- |
| **FDMA** | Frequency | Analog systems |
| **TDMA** | Time | Digital telephony |
| **CDMA** | Code | 3G cellular |
<TOPIC_END>

<TOPIC_START index="43" title="Ethernet Speeds Summary">
## 44.0 Ethernet Speeds Summary

| Type | Speed | Cable | Standard |
| :--- | :--- | :--- | :--- |
| **Classic Ethernet** | 10 Mbps | Various | IEEE 802.3 |
| **Fast Ethernet** | 100 Mbps | Twisted-pair or fiber | IEEE 802.3u |
| **Gigabit Ethernet** | 1000 Mbps | Cat 5e or fiber | IEEE 802.3ab/z |
| **10 Gigabit Ethernet** | 10 Gbps | Cat 6a/7 or fiber | IEEE 802.3ae |
| **40/100 Gigabit Ethernet** | 40/100 Gbps | Fiber optic | IEEE 802.3ba |
| **Terabit Ethernet** | 400 Gbps - 1 Tbps | Fiber optic | Future standards |
<TOPIC_END>

<TOPIC_START index="44" title="Key Concepts Review">
## 45.0 Key Concepts Review

### 45.1 MAC Layer Functions
* Provides interface between Physical and upper layers
* Encapsulates data into frames
* Assigns unique MAC addresses
* Implements access control protocols
* Handles collisions and retransmission
* Performs error detection using CRC

### 45.2 Access Protocol Selection
* **Random Access**: No central control, collisions possible
* **Controlled Access**: Stations must be authorized
* **Channelization**: Bandwidth shared by time, frequency, or code

### 45.3 CSMA Variants
* **1-Persistent**: Transmit immediately when idle
* **Non-Persistent**: Wait random time if busy
* **P-Persistent**: Transmit with probability $p$

### 45.4 Collision Handling
* **CSMA/CD**: Detect collision, send jamming signal, backoff
* **CSMA/CA**: Avoid collisions using IFS, contention window, ACKs

### 45.5 Network Devices
* **Hub**: Multiport repeater, no filtering
* **Bridge**: Data Link Layer, MAC filtering
* **Switch**: Multi-port bridge, divides collision domains
* **Router**: Network Layer, divides broadcast domains

### 45.6 Ethernet Evolution
* Classic: 10 Mbps
* Fast: 100 Mbps
* Gigabit: 1000 Mbps
* 10 Gigabit: 10 Gbps
* Beyond: 40/100 Gbps to Terabit
<TOPIC_END>
`
};