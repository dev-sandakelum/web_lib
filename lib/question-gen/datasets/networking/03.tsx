// datasets/computer-networks/lesson03.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson03Dataset: Dataset = {
  id: "networks-03",
  topicCount: 10,
  category: "Computer Networks",
  subcategory: "IP Addressing, IPv4, Classful Addressing, Subnet Masks & CIDR",
  description: "IP Address fundamentals, IPv4 addressing, binary and dotted-decimal notation, classful addressing (Classes A-E), network and host identification, subnet masks, and CIDR notation.",
  topics: [
    "IP Addresses",
    "IPv4 Addresses",
    "IPv4 Address Conversion Examples",
    "Classful Addressing",
    "Finding the Class in Binary Notation",
    "Finding the Class in Decimal Notation",
    "Network ID and Host ID",
    "Subnet Mask",
    "CIDR - Classless Inter-Domain Routing",
    "Key Concepts Summary",
  ],
  content: `
<TOPIC_START index="0" title="IP Addresses">
1.0 IP Addresses

1.1 What is an IP Address?
• **IP address** is short for Internet Protocol Address.
• IP is a **network layer protocol** - it must be capable of providing communication between hosts on different kinds of networks.
• The address must include information about what network the receiving host is on.
• IP address helps to identify **Name**, **Location**, and **Route**.
• It is a unique identifier.
• Allows transfers of files and e-mail between two computers located at different places.

1.2 IP Address Structure
IP addresses have a **hierarchical structure**.

1.3 Types of IP Addresses
There are two types of IP address:
* IPv4
* IPv6

Each address consists of two parts:
* The **Network Address**
* The **Host Address**
<TOPIC_END>

<TOPIC_START index="1" title="IPv4 Addresses">
2.0 IPv4 Addresses

2.1 IPv4 Address Structure
IPv4 address characteristics:
* IP addresses consist of **four sections**
* Each section is **8 bits** long (called an **octet**)
* Includes a **network ID** and a **host ID**
* Each section can range from **0 to 255**
* Written, for example, 128.11.3.31

• The address space in a protocol is $2^N$.
• The address space in IPv4 is $2^{32}$ equals **4,294,967,296 addresses**.

2.2 Dotted Decimal Notation
• IP Addresses are usually shown in **dotted decimal notation**.
• Example: 1.2.3.4 in dotted decimal equals 00000001 00000010 00000011 00000100 in binary.
<TOPIC_END>

<TOPIC_START index="2" title="IPv4 Address Conversion Examples">
3.0 IPv4 Address Conversion Examples

3.1 Binary to Dotted-Decimal Conversion
Example: Change the following IP address from binary notation to dotted-decimal notation:
* Binary: 10000001 00001011 00001011 11101111
* Solution: **129.11.11.239**

3.2 Dotted-Decimal to Binary Conversion
Example: Change the following IP address from dotted-decimal notation to binary notation:
* Dotted-decimal: 111.56.45.78
* Solution: **01101111 00111000 00101101 01001110**

3.3 Common Errors in IP Addresses

3.3.1 Example 1
Find the error in the following IP Address: 111.56.045.78
* Solution: There are **no leading zeroes** in dotted-decimal notation (045)

3.3.2 Example 2
Find the error in the following IP Address: 75.45.301.14
* Solution: In decimal notation each number must be less than or equal to **255**, 301 is out of the range
<TOPIC_END>

<TOPIC_START index="3" title="Classful Addressing">
4.0 Classful Addressing

4.1 What is Classful Addressing?
• In **classful addressing** the address space is divided into **5 classes: A, B, C, D, E**.

4.2 Class A
Class A characteristics:
* Address begins with bit **0**
* Has 8 bit **network number**
* Range: **0.0.0.0 to 127.255.255.255**
* Has 24 bit **host number**

4.3 Class B
Class B characteristics:
* Address begins with bits **10**
* Has 16 bit **network number**
* Range: **128.0.0.0 to 191.255.255.255**
* Has 16 bit **host number**

4.4 Class C
Class C characteristics:
* Address begins with bits **110**
* Has 24 bit **network number**
* Range: **192.0.0.0 to 223.255.255.255**
* Has 8 bit **host number**

4.5 Class D
Class D characteristics:
* Begins with **1110**
* Used for **multicast addresses**
* Range: **224.0.0.0 to 239.255.255.255**

4.6 Class E
Class E characteristics:
* Begins with **11110**
* Currently **unused** (reserved for experimental purposes)
<TOPIC_END>

<TOPIC_START index="4" title="Finding the Class in Binary Notation">
5.0 Finding the Class in Binary Notation

To find the class in binary notation, examine the first few bits:

| Class | First Bit(s) | Pattern |
| :--- | :--- | :--- |
| **Class A** | First bit is 0 | 0xxxxxxx |
| **Class B** | First two bits are 10 | 10xxxxxx |
| **Class C** | First three bits are 110 | 110xxxxx |
| **Class D** | First four bits are 1110 | 1110xxxx |
| **Class E** | First four bits are 1111 | 1111xxxx |

5.1 Binary Notation Examples

5.1.1 Example 1
Find the class of address 00000001 00001011 00001011 11101111:
* First bit is **0**, hence it is **Class A**

5.1.2 Example 2
Find the class of address 11000001 00001011 00001011 11101111:
* First and second bits are 1, and third bit is 0, hence **Class C**
<TOPIC_END>

<TOPIC_START index="5" title="Finding the Class in Decimal Notation">
6.0 Finding the Class in Decimal Notation

To find the class in decimal notation, examine the **first octet**:

| Class | First Octet Range |
| :--- | :--- |
| **Class A** | 0 to 127 |
| **Class B** | 128 to 191 |
| **Class C** | 192 to 223 |
| **Class D** | 224 to 239 |
| **Class E** | 240 to 255 |

6.1 Decimal Notation Examples

6.1.1 Example 1
Find the class of address 158.223.1.108:
* First byte equals **158** (128 < 158 < 191), therefore **Class B**

6.1.2 Example 2
Find the class of address 227.13.14.88:
* First byte equals **227** (224 < 227 < 239), therefore **Class D**

6.1.3 Example 3
Change IP address 111.56.45.78 from dotted-decimal to binary:
* Solution: **01101111 00111000 00101101 01001110**
<TOPIC_END>

<TOPIC_START index="6" title="Network ID and Host ID">
7.0 Network ID and Host ID

7.1 Understanding Network and Host Portions
**Network ID** and **Host ID** divide the IP address into two parts.

7.2 Address Class Details
Detailed breakdown of address classes:

| Address Class | First Octet Range | Network (N) and Host (H) Portion | Default Mask (Decimal) | Number of Networks and Hosts |
| :--- | :--- | :--- | :--- | :--- |
| **A** | 0 to 127 | N.H.H.H | 255.0.0.0 | 128 Networks ($2^7$), 16,777,214 hosts ($2^{24} - 2$) |
| **B** | 128 to 191 | N.N.H.H | 255.255.0.0 | 16,384 Networks ($2^{14}$), 65,534 hosts ($2^{16} - 2$) |
| **C** | 192 to 223 | N.N.N.H | 255.255.255.0 | 2,090,105 Networks ($2^{21}$), 254 hosts ($2^8 - 2$) |
| **D** | 224 to 239 | N/A (Multicast) | Not applicable | Not applicable |
| **E** | 240 to 255 | N/A (Experimental) | Not applicable | Not applicable |

• Note: The number of hosts is calculated as $2^n - 2$, where 2 addresses are reserved (network address and broadcast address).

7.3 Practice Question
Example: An address in a block is given as 187.22.13.9. Find the number of addresses in the block, the first address, and the last address.
<TOPIC_END>

<TOPIC_START index="7" title="Subnet Mask">
8.0 Subnet Mask

8.1 What is a Subnet Mask?
• A **subnet mask** distinguishes which portion of the address identifies the **network** and which portion identifies the **node**.
• Applying a subnet mask allows you to identify the network and node parts of the address.
• A router will then determine whether the address is local or remote.

8.2 Subnet Mask Structure
Subnet mask characteristics:
* 32 bit binary number called "**Subnet mask**"
* Network bits are masked as **1s**
* Node bits are masked as **0s**

8.3 Default Subnet Masks by Class
Default subnet masks for each class:

| Class | Subnet Mask | Binary Representation | Slash Notation |
| :--- | :--- | :--- | :--- |
| **Class A** | 255.0.0.0 | 11111111.00000000.00000000.00000000 | /8 |
| **Class B** | 255.255.0.0 | 11111111.11111111.00000000.00000000 | /16 |
| **Class C** | 255.255.255.0 | 11111111.11111111.11111111.00000000 | /24 |

8.4 Subnet Mask Visualization
Subnet masks can be visualized to show network and host portions. 
8.5 Subnet Mask Example

8.5.1 Example 1
Consider IP address 192.168.2.25:
* All **1 bits** (left to right) identify network/subnet
* Remaining **0 bits** identify host/interface

8.5.2 Example 2
IP 192.168.10.79 with subnet mask 255.255.255.240:
* Binary IP: 11000000 10101000 00001010 01001111
* Binary Mask: 11111111 11111111 11111111 11100000
* This separates Network ID from Host ID

8.6 Drawbacks of Classful Addressing
Classful addressing has several drawbacks:
* Inefficient use of address space
* Lack of flexibility in network size
* Address exhaustion
<TOPIC_END>

<TOPIC_START index="8" title="CIDR - Classless Inter-Domain Routing">
9.0 CIDR - Classless Inter-Domain Routing

9.1 What is CIDR?
• **CIDR** (Classless Inter-Domain Routing) is a **slash notation** of subnet mask.
• CIDR tells us the number of **on bits (1s)** in a network address.

9.2 CIDR Notation Format
• CIDR notation is written as **IP\_address/prefix\_length**.
• Example: **192.168.1.0/24** means the first 24 bits are the network portion.

9.3 Practice Examples

9.3.1 Finding Subnet Mask from CIDR
Practice Example 1: Find Subnet mask for the following:
* 10.72.8.0/22
* 192.168.10.128/25
* 172.163.5.24/26
* 192.168.10.0/16
* 192.168.10.0/20

9.3.2 Finding CIDR from Subnet Mask
Practice Example 2: Find CIDR notation for the following:
* 222.1.1.20 mask 255.255.255.192
* 135.1.1.25 mask 255.255.248.0
* 195.1.1.0 mask 255.255.252.0
* 192.168.10.0 mask 255.255.255.240
* 192.168.10.10 mask 255.255.255.224

9.3.3 Complete Network Analysis
Practice Example 3: Find the network id, subnet mask, starting and ending address, and broadcast address for:
* 192.10.50.10/22
* 172.50.10.25/20
* 10.40.48.0/23
* 192.168.1.0/26
<TOPIC_END>

<TOPIC_START index="9" title="Key Concepts Summary">
10.0 Key Concepts Summary

10.1 Binary and Decimal Conversion
• Converting between **binary** and **dotted-decimal** notation is essential for understanding IP addresses.
• Each octet in decimal ranges from **0 to 255**.
• **Leading zeros** are not allowed in dotted-decimal notation.

10.2 Classful Address Identification
• Identify class by examining **first octet** in decimal or **first bits** in binary.
• Each class has different **network and host portions**.
• Default subnet masks differ by class.

10.3 Subnetting Fundamentals
• **Subnet masks** use **1s** for network bits and **0s** for host bits.
• **Slash notation (CIDR)** indicates the number of network bits.
• **Network ID** is found by ANDing IP address with subnet mask.

10.4 Address Calculations
• Number of hosts per network: $2^{(\text{host bits})} - 2$.
• Two addresses are **reserved**: network address and broadcast address.
• CIDR allows more **flexible address allocation** than classful addressing.
<TOPIC_END>
`
};