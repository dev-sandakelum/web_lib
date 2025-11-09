// datasets/computer-networks/lesson03.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson03Dataset: Dataset = {
  id: "networks-03",
  category: "Computer Networks",
  subcategory: "IP Addressing, IPv4, Classful Addressing, Subnet Masks & CIDR",
  description: "IP Address fundamentals, IPv4 addressing, binary and dotted-decimal notation, classful addressing (Classes A-E), network and host identification, subnet masks, and CIDR notation.",
  content: `
[cite_start]Topic: IP Addresses, IPv4, Classful Addressing, Subnet Masks, and CIDR [cite: 1, 2]

Objectives:
[cite_start]• Understand what IP addresses are and their purpose [cite: 3, 4, 5]
[cite_start]• Learn IPv4 address structure and notation [cite: 6, 7, 8, 9]
[cite_start]• Understand classful addressing and IP address classes [cite: 10, 11, 12, 13, 14, 15]
[cite_start]• Identify network ID and host ID in IP addresses [cite: 16, 17, 18]
[cite_start]• Learn about subnet masks and their purpose [cite: 19, 20, 21, 22]
[cite_start]• Understand CIDR (Classless Inter-Domain Routing) notation [cite: 23, 24, 25, 26]

---
## IP Addresses

### What is an IP Address?
[cite_start]• IP address is short for Internet Protocol Address [cite: 3].
[cite_start]• IP is a network layer protocol - it must be capable of providing communication between hosts on different kinds of networks [cite: 3].
[cite_start]• The address must include information about what network the receiving host is on [cite: 3].
[cite_start]• IP address helps to identify Name, Location, and Route [cite: 3].
[cite_start]• It is a unique identifier [cite: 3].
[cite_start]• Allows transfers of files and e-mail between two computers located at different places [cite: 3].

### IP Address Structure
[cite_start]IP addresses have a hierarchical structure [cite: 4].

### Types of IP Addresses
[cite_start]There are two types of IP address [cite: 5]:
* IPv4
* IPv6

[cite_start]Each address consists of two parts [cite: 5]:
* The Network Address
* The Host Address

---
## IPv4 Addresses

### IPv4 Address Structure
[cite_start]IPv4 address characteristics [cite: 6]:
* IP addresses consist of four sections
* Each section is 8 bits long (called an octet)
* Includes a network ID and a host ID
* Each section can range from 0 to 255
* Written, for example, 128.11.3.31

[cite_start]• The address space in a protocol is 2 raised to N [cite: 6].
[cite_start]• The address space in IPv4 is 2 raised to 32 equals 4,294,967,296 addresses [cite: 6].

### Dotted Decimal Notation
[cite_start]• IP Addresses are usually shown in dotted decimal notation [cite: 7].
[cite_start]• Example: 1.2.3.4 in dotted decimal equals 00000001 00000010 00000011 00000100 in binary [cite: 7].

---
## IPv4 Address Conversion Examples

### Binary to Dotted-Decimal Conversion
[cite_start]Example: Change the following IP address from binary notation to dotted-decimal notation [cite: 8]:
* Binary: 10000001 00001011 00001011 11101111
* Solution: 129.11.11.239

### Dotted-Decimal to Binary Conversion
[cite_start]Example: Change the following IP address from dotted-decimal notation to binary notation [cite: 8]:
* Dotted-decimal: 111.56.45.78
* Solution: 01101111 00111000 00101101 01001110

### Common Errors in IP Addresses
[cite_start]Example 1: Find the error in the following IP Address: 111.56.045.78 [cite: 9]:
* Solution: There are no leading zeroes in dotted-decimal notation (045)

[cite_start]Example 2: Find the error in the following IP Address: 75.45.301.14 [cite: 9]:
* Solution: In decimal notation each number must be less than or equal to 255, 301 is out of the range

---
## Classful Addressing

### What is Classful Addressing?
[cite_start]• In classful addressing the address space is divided into 5 classes: A, B, C, D, E [cite: 10].

### Class A
[cite_start]Class A characteristics [cite: 10]:
* Address begins with bit 0
* Has 8 bit network number
* Range: 0.0.0.0 to 127.255.255.255
* Has 24 bit host number

### Class B
[cite_start]Class B characteristics [cite: 10]:
* Address begins with bits 10
* Has 16 bit network number
* Range: 128.0.0.0 to 191.255.255.255
* Has 16 bit host number

### Class C
[cite_start]Class C characteristics [cite: 10]:
* Address begins with bits 110
* Has 24 bit network number
* Range: 192.0.0.0 to 223.255.255.255
* Has 8 bit host number

### Class D
[cite_start]Class D characteristics [cite: 10]:
* Begins with 1110
* Used for multicast addresses
* Range: 224.0.0.0 to 239.255.255.255

### Class E
[cite_start]Class E characteristics [cite: 10]:
* Begins with 11110
* Currently unused (reserved for experimental purposes)

---
## Finding the Class in Binary Notation

[cite_start]To find the class in binary notation, examine the first few bits [cite: 11]:

| Class | First Bit(s) | Pattern |
| :--- | :--- | :--- |
| **Class A** | [cite_start]First bit is 0 [cite: 11] | 0xxxxxxx |
| **Class B** | [cite_start]First two bits are 10 [cite: 11] | 10xxxxxx |
| **Class C** | [cite_start]First three bits are 110 [cite: 11] | 110xxxxx |
| **Class D** | [cite_start]First four bits are 1110 [cite: 11] | 1110xxxx |
| **Class E** | [cite_start]First four bits are 1111 [cite: 11] | 1111xxxx |

### Binary Notation Examples
[cite_start]Example 1: Find the class of address 00000001 00001011 00001011 11101111 [cite: 12]:
* First bit is 0, hence it is Class A

[cite_start]Example 2: Find the class of address 11000001 00001011 00001011 11101111 [cite: 12]:
* First and second bits are 1, and third bit is 0, hence Class C

---
## Finding the Class in Decimal Notation

[cite_start]To find the class in decimal notation, examine the first octet [cite: 13]:

| Class | First Octet Range |
| :--- | :--- |
| **Class A** | [cite_start]0 to 127 [cite: 13] |
| **Class B** | [cite_start]128 to 191 [cite: 13] |
| **Class C** | [cite_start]192 to 223 [cite: 13] |
| **Class D** | [cite_start]224 to 239 [cite: 13] |
| **Class E** | [cite_start]240 to 255 [cite: 13] |

### Decimal Notation Examples
[cite_start]Example 1: Find the class of address 158.223.1.108 [cite: 14]:
* First byte equals 158 (128 < 158 < 191), therefore Class B

[cite_start]Example 2: Find the class of address 227.13.14.88 [cite: 14]:
* First byte equals 227 (224 < 227 < 239), therefore Class D

[cite_start]Example 3: Change IP address 111.56.45.78 from dotted-decimal to binary [cite: 14]:
* Solution: 01101111 00111000 00101101 01001110

---
## Network ID and Host ID

### Understanding Network and Host Portions
[cite_start]Network ID and Host ID divide the IP address into two parts [cite: 16].

### Address Class Details
[cite_start]Detailed breakdown of address classes [cite: 17]:

| Address Class | First Octet Range | Network (N) and Host (H) Portion | Default Mask (Decimal) | Number of Networks and Hosts |
| :--- | :--- | :--- | :--- | :--- |
| **A** | [cite_start]0 to 127 [cite: 17] | [cite_start]N.H.H.H [cite: 17] | [cite_start]255.0.0.0 [cite: 17] | [cite_start]128 Networks (2^7), 16,777,214 hosts (2^24 - 2) [cite: 17] |
| **B** | [cite_start]128 to 191 [cite: 17] | [cite_start]N.N.H.H [cite: 17] | [cite_start]255.255.0.0 [cite: 17] | [cite_start]16,384 Networks (2^14), 65,534 hosts (2^16 - 2) [cite: 17] |
| **C** | [cite_start]192 to 223 [cite: 17] | [cite_start]N.N.N.H [cite: 17] | [cite_start]255.255.255.0 [cite: 17] | [cite_start]2,090,105 Networks (2^21), 254 hosts (2^8 - 2) [cite: 17] |
| **D** | [cite_start]224 to 239 [cite: 17] | [cite_start]N/A (Multicast) [cite: 17] | [cite_start]Not applicable [cite: 17] | [cite_start]Not applicable [cite: 17] |
| **E** | [cite_start]240 to 255 [cite: 17] | [cite_start]N/A (Experimental) [cite: 17] | [cite_start]Not applicable [cite: 17] | [cite_start]Not applicable [cite: 17] |

[cite_start]• Note: The number of hosts is calculated as 2^n - 2, where 2 addresses are reserved (network address and broadcast address) [cite: 17].

### Practice Question
[cite_start]Example: An address in a block is given as 187.22.13.9. Find the number of addresses in the block, the first address, and the last address [cite: 18].

---
## Subnet Mask

### What is a Subnet Mask?
[cite_start]• A subnet mask distinguishes which portion of the address identifies the network and which portion of the address identifies the node [cite: 19].
[cite_start]• Applying a subnet mask allows you to identify the network and node parts of the address [cite: 19].
[cite_start]• A router will then determine whether the address is local or remote [cite: 19].

### Subnet Mask Structure
[cite_start]Subnet mask characteristics [cite: 19]:
* 32 bit binary number called "Subnet mask"
* Network bits are masked as 1s
* Node bits are masked as 0s

### Default Subnet Masks by Class
[cite_start]Default subnet masks for each class [cite: 19]:

| Class | Subnet Mask | Binary Representation | Slash Notation |
| :--- | :--- | :--- | :--- |
| **Class A** | [cite_start]255.0.0.0 [cite: 19] | [cite_start]11111111.00000000.00000000.00000000 [cite: 19] | [cite_start]/8 [cite: 19] |
| **Class B** | [cite_start]255.255.0.0 [cite: 19] | [cite_start]11111111.11111111.00000000.00000000 [cite: 19] | [cite_start]/16 [cite: 19] |
| **Class C** | [cite_start]255.255.255.0 [cite: 19] | [cite_start]11111111.11111111.11111111.00000000 [cite: 19] | [cite_start]/24 [cite: 19] |

### Subnet Mask Visualization
[cite_start]Subnet masks can be visualized to show network and host portions [cite: 20].

### Subnet Mask Example
[cite_start]Example: Consider IP address 192.168.2.25 [cite: 21]:
* All 1 bits (left to right) identify network/subnet
* Remaining 0 bits identify host/interface

[cite_start]Example: IP 192.168.10.79 with subnet mask 255.255.255.240 [cite: 21]:
* Binary IP: 11000000 10101000 00001010 01001111
* Binary Mask: 11111111 11111111 11111111 11100000
* This separates Network ID from Host ID

### Drawbacks of Classful Addressing
[cite_start]Classful addressing has several drawbacks [cite: 22]:
* Inefficient use of address space
* Lack of flexibility in network size
* Address exhaustion

---
## CIDR - Classless Inter-Domain Routing

### What is CIDR?
[cite_start]• CIDR is a slash notation of subnet mask [cite: 23].
[cite_start]• CIDR tells us the number of on bits (1s) in a network address [cite: 23].

### CIDR Notation Format
[cite_start]• CIDR notation is written as IP_address/prefix_length [cite: 23].
[cite_start]• Example: 192.168.1.0/24 means the first 24 bits are the network portion [cite: 23].

### Practice Examples

#### Finding Subnet Mask from CIDR
[cite_start]Practice Example 1: Find Subnet mask for the following [cite: 24]:
* 10.72.8.0/22
* 192.168.10.128/25
* 172.163.5.24/26
* 192.168.10.0/16
* 192.168.10.0/20

#### Finding CIDR from Subnet Mask
[cite_start]Practice Example 2: Find CIDR notation for the following [cite: 25]:
* 222.1.1.20 mask 255.255.255.192
* 135.1.1.25 mask 255.255.248.0
* 195.1.1.0 mask 255.255.252.0
* 192.168.10.0 mask 255.255.255.240
* 192.168.10.10 mask 255.255.255.224

#### Complete Network Analysis
[cite_start]Practice Example 3: Find the network id, subnet mask, starting and ending address, and broadcast address for [cite: 26]:
* 192.10.50.10/22
* 172.50.10.25/20
* 10.40.48.0/23
* 192.168.1.0/26

---
## Key Concepts Summary

### Binary and Decimal Conversion
[cite_start]• Converting between binary and dotted-decimal notation is essential for understanding IP addresses [cite: 7, 8].
[cite_start]• Each octet in decimal ranges from 0 to 255 [cite: 6, 9].
[cite_start]• Leading zeros are not allowed in dotted-decimal notation [cite: 9].

### Classful Address Identification
[cite_start]• Identify class by examining first octet in decimal or first bits in binary [cite: 11, 13].
[cite_start]• Each class has different network and host portions [cite: 17].
[cite_start]• Default subnet masks differ by class [cite: 19].

### Subnetting Fundamentals
[cite_start]• Subnet masks use 1s for network bits and 0s for host bits [cite: 19].
[cite_start]• Slash notation (CIDR) indicates the number of network bits [cite: 19, 23].
[cite_start]• Network ID is found by ANDing IP address with subnet mask [cite: 21].

### Address Calculations
[cite_start]• Number of hosts per network: 2^(host bits) - 2 [cite: 17].
[cite_start]• Two addresses are reserved: network address and broadcast address [cite: 17].
[cite_start]• CIDR allows more flexible address allocation than classful addressing [cite: 23].
`
};