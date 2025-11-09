// datasets/computer-networks/lesson06.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson06Dataset: Dataset = {
  id: "networks-06",
  category: "Computer Networks",
  subcategory: "Data Link Layer",
  description: "Data Link Layer design issues including Services to Network Layer, Framing techniques, Flow Control, Error Control, Error Detection (Parity Check, Checksum, CRC), and Error Correction (Hamming Code).",
  content: `
[cite_start]Topic: Data Link Layer - Design Issues, Framing, Error Detection and Correction [cite: 1, 2, 3]

Objectives:
[cite_start]• Understand Data Link Layer design issues [cite: 3]
[cite_start]• Learn about services provided to the Network Layer [cite: 4, 5, 6]
[cite_start]• Understand Flow Control mechanisms [cite: 7]
[cite_start]• Learn about Error Control processes [cite: 8]
[cite_start]• Explore Framing techniques and methods [cite: 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
[cite_start]• Understand Error Detection methods (Parity Check, Checksum, CRC) [cite: 21, 22, 24, 25]
[cite_start]• Learn about Error Correction using Hamming Code [cite: 23, 26, 27, 28]

---
## Data Link Layer Design Issues

[cite_start]The Data Link Layer has three main design issues [cite: 3]:
1. Service provided to the Network Layer
2. Framing
3. Error Control
4. Flow Control

---
## Services Provided to the Network Layer

### Types of Services

[cite_start]The Data Link Layer provides three types of services to the Network Layer [cite: 4]:
1. **Unacknowledged Connectionless Service**
2. **Acknowledged Connectionless Service**
3. **Acknowledged Connection-Oriented Service**

---
## Unacknowledged Connectionless Service

### Characteristics

[cite_start]Unacknowledged Connectionless service has the following characteristics [cite: 5]:

| Feature | Description |
| :--- | :--- |
| **Error Rate** | [cite_start]Used when error rate is low [cite: 5] |
| **Connection** | [cite_start]No connection establishment [cite: 5] |
| **Frame Transmission** | [cite_start]Sends independent frames [cite: 5] |
| **Acknowledgement** | [cite_start]No acknowledgement [cite: 5] |
| **Flow Control** | [cite_start]No flow control [cite: 5] |
| **Error Control** | [cite_start]No error control [cite: 5] |

### When to Use
This service is appropriate for:
* Real-time traffic (voice, video)
* Low error rate channels
* Applications where speed is more important than reliability
* Situations where higher layers handle error recovery

---
## Acknowledged Connection-Oriented Service

### Characteristics

[cite_start]Acknowledged Connection-Oriented service provides the following features [cite: 6]:

| Feature | Description |
| :--- | :--- |
| **Connection** | [cite_start]Connection establishment [cite: 6] |
| **Frame Numbering** | [cite_start]Each frame is numbered [cite: 6] |
| **Delivery Order** | [cite_start]Frames delivered in serial order [cite: 6] |
| **Acknowledgement** | [cite_start]Acknowledgement provided [cite: 6] |
| **Guarantee** | [cite_start]Guarantees that all frames received [cite: 6] |
| **Flow Control** | [cite_start]Flow control implemented [cite: 6] |
| **Error Control** | [cite_start]Error control implemented [cite: 6] |

### Protocols Using This Service
[cite_start]Protocols that use this service include [cite: 6]:
* HTTP
* FTP
* SMTP

### When to Use
This service is appropriate for:
* Reliable data transfer requirements
* File transfers
* Important data transmission
* Applications requiring guaranteed delivery

---
## Comparison of Services

| Feature | Unacknowledged Connectionless | Acknowledged Connection-Oriented |
| :--- | :--- | :--- |
| **Connection Setup** | [cite_start]No [cite: 5] | [cite_start]Yes [cite: 6] |
| **Frame Numbering** | No | [cite_start]Yes [cite: 6] |
| **Acknowledgement** | [cite_start]No [cite: 5] | [cite_start]Yes [cite: 6] |
| **Flow Control** | [cite_start]No [cite: 5] | [cite_start]Yes [cite: 6] |
| **Error Control** | [cite_start]No [cite: 5] | [cite_start]Yes [cite: 6] |
| **Delivery Guarantee** | No | [cite_start]Yes [cite: 6] |
| **Use Case** | [cite_start]Low error rate [cite: 5] | Reliable transmission |

---
## Flow Control

### Definition

[cite_start]Flow Control refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment [cite: 7].

### Purpose of Flow Control

| Purpose | Description |
| :--- | :--- |
| **Prevent Overflow** | Prevents receiver buffer from overflowing |
| **Matching Speeds** | Coordinates sender and receiver speeds |
| **Resource Management** | Manages receiver's processing capacity |
| **Data Regulation** | [cite_start]Restricts amount of data sent before acknowledgment [cite: 7] |

### Flow Control Methods
* Stop-and-Wait
* Sliding Window Protocol
* Go-Back-N
* Selective Repeat

---
## Error Control

### Definition

[cite_start]Network is responsible for transmission of data from one device to another device. The end-to-end transfer of data from a transmitting application to a receiving application involves many steps, each subject to error [cite: 8].

[cite_start]With the error control process, we can be confident that the transmitted and received data are identical. Data can be corrupted during transmission. For reliable communication, errors must be detected and corrected [cite: 8].

### Purpose of Error Control

| Purpose | Description |
| :--- | :--- |
| **Error Detection** | [cite_start]Detecting data corruption during transmission [cite: 8] |
| **Data Integrity** | [cite_start]Ensuring transmitted and received data are identical [cite: 8] |
| **Reliable Communication** | [cite_start]Providing reliable communication [cite: 8] |
| **Error Correction** | Correcting detected errors |

### Key Concept
[cite_start]Data can be corrupted during transmission. For reliable communication, errors must be detected and corrected [cite: 8].

---
## Relationship Between Packets and Frames

[cite_start]The Data Link Layer processes packets from the Network Layer and converts them into frames [cite: 9].

**Hierarchy:**
Network Layer to Packets to Data Link Layer to Frames to Physical Layer to Bits

---
## Framing

### Definition

[cite_start]Framing is the translation of physical layer's raw bits into larger aggregate or discrete units called frames [cite: 10].

### Types of Frames

[cite_start]There are two types of frames [cite: 10]:
1. **Fixed Length Frames**
2. **Variable Length Frames**

---
## Frame Structure

[cite_start]A frame consists of three main parts [cite: 11]:

| Component | Description |
| :--- | :--- |
| **Header** | [cite_start]Frame starting bits, Address of source or destination, Type of data, Quality control [cite: 11] |
| **Payload** | [cite_start]Actual data [cite: 11] |
| **Trailer** | [cite_start]Frame stopping bits, Error detection [cite: 11] |

### Frame Components Detailed

**Header contains:**
* [cite_start]Frame starting bits [cite: 11]
* [cite_start]Address of the source or destination [cite: 11]
* [cite_start]Type of data [cite: 11]
* [cite_start]Quality control [cite: 11]

**Trailer contains:**
* [cite_start]Frame stopping bits [cite: 11]
* [cite_start]Error detection [cite: 11]

---
## Fixed Length Frames

### Example Problem

[cite_start]Frame structure: 10 bits header plus 20 bits payload plus 10 bits trailer equals 40 bits total [cite: 11]

**Question:** 200 bits of data have to be transmitted as frames. How many frames have to be transmitted?

**Solution:**
* Each frame carries 20 bits of data (payload)
* Total data equals 200 bits
* Number of frames equals 200 divided by 20 equals 10 frames

### Characteristics of Fixed Length Frames
* Simple to implement
* Easy to detect frame boundaries
* May waste bandwidth if data does not fill frame
* Suitable for synchronous transmission

---
## Framing Methods

### The Framing Challenge

[cite_start]How to break down a stream of bits into smaller, digestible chunks called frames. How can frames be transmitted so the receiver can detect frame boundaries? That is, how can the receiver recognize the start and end of a frame? [cite: 12]

### Framing Techniques

[cite_start]There are four main framing methods [cite: 12]:
1. **Character Count**
2. **Flag Byte with Byte Stuffing**
3. **Bit Stuffing**
4. **Physical Layer Encoding Violations**

---
## Character Count Method

### How It Works

[cite_start]Here a field in the header specifies the number of characters in the frame [cite: 13].
[cite_start]The Data Link Layer at the destination looks at the character count and decides the end of the frame [cite: 13].

### Disadvantage

[cite_start]The main drawback of this method is if any count is garbled by a transmission error, then the destination is unable to decide the frames [cite: 13].

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Method** | [cite_start]Header field specifies character count [cite: 13] |
| **Detection** | [cite_start]Destination uses count to find frame end [cite: 13] |
| **Problem** | [cite_start]Transmission error in count causes frame loss [cite: 13] |
| **Reliability** | Low - single error can cause desynchronization |

---
## Flag Byte with Byte Stuffing

### The Problem

[cite_start]A serious problem occurs when binary data itself will contain flag byte's bit pattern. This situation will usually interfere with framing [cite: 14].

### Solution: Byte Stuffing

[cite_start]One solution is Flag Byte Stuffing where sender's data link layer inserts a special escape byte (ESC) just before each accidental flag byte in the data [cite: 14].
[cite_start]At the receiving end, data link layer removes the escape byte before the data are given to the network layer [cite: 14].

### Method Description

[cite_start]Each frame starts and ends with special bytes called Flag Bytes [cite: 14].
[cite_start]If the flag byte occurs in the frame, stuff an extra Escape byte (ESC) [cite: 14].

### How Byte Stuffing Works

**Sender's Actions:**
1. Start frame with FLAG byte
2. When FLAG appears in data, insert ESC before it
3. When ESC appears in data, insert ESC before it
4. End frame with FLAG byte

**Receiver's Actions:**
1. Remove FLAG bytes at start and end
2. When ESC is encountered, remove it and keep next byte
3. Deliver destuffed data to Network Layer

### Example

| Stage | Data |
| :--- | :--- |
| **Original Data** | A FLAG B ESC C FLAG D |
| **After Stuffing** | FLAG A ESC FLAG B ESC ESC C ESC FLAG D FLAG |
| **After Destuffing** | A FLAG B ESC C FLAG D |

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Transparency** | [cite_start]Completely transparent to Network Layer [cite: 14] |
| **Special Bytes** | FLAG and ESC |
| **Overhead** | Variable, depends on data content |

---
## Bit Stuffing

### Overview

[cite_start]Data frames can contain an arbitrary number of bits and allow character codes with an arbitrary number of bits per character [cite: 17].
[cite_start]Each frame begins and ends with a special bit pattern, 01111110 (flag byte) [cite: 17].

### Sender's Rule

[cite_start]Whenever the sender's data link layer encounters five consecutive 1s in the data, it automatically stuffs a 0 bit into the outgoing bit stream [cite: 17].

### Receiver's Rule

[cite_start]When the receiver sees five consecutive incoming 1 bits, followed by a 0 bit, it automatically destuffs the 0 bit [cite: 18].

### Transparency

[cite_start]Just as byte stuffing is completely transparent to the network layer in both computers, so is bit stuffing [cite: 18].

### Example

[cite_start]If the user data contains the flag pattern, 01111110, this flag is transmitted as 011111010 but stored in the receiver's memory as 01111110 [cite: 18].

### Bit Stuffing Process

**Original Data:** 01001111110111111

**Analysis:**
* First sequence: 0100111111 (five 1s so stuff a 0)
* Second sequence: 0111111 (five 1s so stuff a 0)

**After Bit Stuffing:** 0100111110101111101

**After Destuffing:** 01001111110111111 (original data restored)

### Bit Stuffing Illustration

[cite_start]Bit stuffing process [cite: 19]:
* The original data
* The data as they appear on the line (with stuffed bits)
* The data as they are stored in the receiver's memory after destuffing (original restored)

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Flag Pattern** | [cite_start]01111110 [cite: 17] |
| **Stuffing Rule** | [cite_start]After five 1s, insert 0 [cite: 17] |
| **Destuffing Rule** | [cite_start]After five 1s followed by 0, remove the 0 [cite: 18] |
| **Flexibility** | [cite_start]Arbitrary number of bits allowed [cite: 17] |
| **Transparency** | [cite_start]Completely transparent [cite: 18] |

---
## Physical Layer Encoding Violations

### Method Description

[cite_start]The final framing method is physical layer coding violations and is applicable to networks in which the encoding on the physical medium contains some redundancy [cite: 20].

[cite_start]In such cases, normally a 1 bit is a high-low pair and a 0 bit is a low-high pair [cite: 20].

[cite_start]The combinations of low-low and high-high which are not used for data may be used for marking frame boundaries [cite: 20].

### How It Works

**Normal Encoding:**
* 1 bit to High-Low pair
* 0 bit to Low-High pair

**Frame Boundary Markers:**
* Low-Low to Start or End of frame
* High-High to Start or End of frame

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Requirement** | [cite_start]Physical medium must have redundancy [cite: 20] |
| **Normal Coding** | [cite_start]1 equals high-low, 0 equals low-high [cite: 20] |
| **Boundary Markers** | [cite_start]Low-low and high-high [cite: 20] |
| **Advantage** | No stuffing overhead required |

---
## Error Detection and Correction Overview

### What is an Error?

[cite_start]Error is a condition when the output information does not match with the input information. During transmission, digital signals suffer from noise that can introduce errors in the binary bits travelling from one system to other. That means a 0 bit may change to 1 or a 1 bit may change to 0 [cite: 21].

### Importance

[cite_start]Data can be corrupted during transmission. For reliable communication, errors must be detected and corrected [cite: 21].

---
## Error Detection

### Definition

[cite_start]Error detection is the detection of errors caused by noise or other impairments during transmission from the transmitter to the receiver [cite: 22].

### Error Detection Methods

[cite_start]There are three main error detection methods [cite: 22]:
1. **Parity Check**
2. **Checksum**
3. **Cyclic Redundancy Check (CRC)**

---
## Error Correction

### Definition

[cite_start]Error correction is the detection of errors and reconstruction of the original, error-free data [cite: 23].

### Error Correction Method

[cite_start]Hamming Code (performs both Error Detection and Correction) [cite: 23].

---
## Parity Check

### Definition

[cite_start]A parity check uses an additional bit, added with original block to perform checking of data [cite: 24].

[cite_start]A parity bit, or check bit, is a bit added to the end of a string of binary code that indicates whether the number of bits in the string with the value one is even or odd. Parity bits are used as the simplest form of error detecting code [cite: 24].

### Types of Parity

[cite_start]There are two types of parity [cite: 24]:
1. **Even Parity**
2. **Odd Parity**

### Even Parity Example

[cite_start]Original data: 0110000 [cite: 24]
* Count of 1s equals 2 (even)
* Even parity bit equals 0 (to keep count even)
* **Transmitted:** 01100000

[cite_start]Original data: 1101000 [cite: 24]
* Count of 1s equals 3 (odd)
* Even parity bit equals 1 (to make count even)
* **Transmitted:** 11010001

### Odd Parity Example

For odd parity, the parity bit is set to ensure the total number of 1s is odd.

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Additional Bits** | [cite_start]One bit added [cite: 24] |
| **Purpose** | [cite_start]Checking data integrity [cite: 24] |
| **Complexity** | [cite_start]Simplest form of error detection [cite: 24] |
| **Detection Capability** | Single bit errors |
| **Limitation** | Cannot detect even number of bit errors |

---
## Checksum

### Method Description

[cite_start]To compute the checksum, the sender treats the data unit as a sequence of a certain number of blocks, all with the same number of bits [cite: 25].
[cite_start]The sender and receiver agree on how long are the blocks [cite: 25].
[cite_start]The sender adds the blocks using one's complement arithmetic and creates an additional block with the same size [cite: 25].

### How Checksum Works

**Sender's Process:**
1. Divide data into equal-sized blocks
2. Add all blocks using one's complement arithmetic
3. Take one's complement of the sum
4. This is the checksum
5. Append checksum to data

**Receiver's Process:**
1. Divide received data into blocks
2. Add all blocks including checksum
3. Take one's complement of the sum
4. If result is all 0s, no error detected
5. If result is not all 0s, error detected

### Example

[cite_start]Data: 10000100 00100100 11100010 10011001 [cite: 25]

**Calculation Process:**
Add all blocks together using one's complement arithmetic, then take the complement of the result to get the checksum.

### Characteristics

| Feature | Description |
| :--- | :--- |
| **Block Size** | [cite_start]Agreed between sender and receiver [cite: 25] |
| **Arithmetic** | [cite_start]One's complement addition [cite: 25] |
| **Checksum Size** | [cite_start]Same as block size [cite: 25] |
| **Detection Capability** | Multiple bit errors |

---
## Hamming Code - Error Detection and Correction

### Overview

[cite_start]Hamming Code was given by R.W. Hamming [cite: 26].
[cite_start]It is easy to implement [cite: 26].
[cite_start]7-bit hamming code is used commonly [cite: 26].

### Components

[cite_start]Hamming Code consists of [cite: 26]:
* **Data bits** - Original information bits
* **Parity bits** - Redundant bits for error detection and correction

---
## Hamming Code Algorithm

### Hamming Code Rules

[cite_start]The algorithm for creating Hamming Code [cite: 27]:

**Step 1:** Write the bit positions starting from 1 in binary form (1, 10, 11, 100, etc).

**Step 2:** All the bit positions that are a power of 2 are marked as parity bits (1, 2, 4, 8, etc).

**Step 3:** All the other bit positions are marked as data bits.

**Step 4:** Each data bit is included in a unique set of parity bits, as determined by its bit position in binary form:
* [cite_start]Parity bit 1 covers all the bit positions whose binary representation includes a 1 in the least significant position (1, 3, 5, 7, 9, 11, etc) [cite: 27]
* [cite_start]Parity bit 2 covers all the bit positions whose binary representation includes a 1 in the second position from the least significant bit (2, 3, 6, 7, 10, 11, etc) [cite: 27]
* [cite_start]Parity bit 4 covers all the bit positions whose binary representation includes a 1 in the third position from the least significant bit (4 to 7, 12 to 15, 20 to 23, etc) [cite: 27]

**Step 5:** [cite_start]Since we check for even parity, set a parity bit to 1 if the total number of ones in the positions it checks is odd [cite: 27].

**Step 6:** [cite_start]Set a parity bit to 0 if the total number of ones in the positions it checks is even [cite: 27].

---
## Hamming Code Example - Encoding

### Example: Data equals 1101

[cite_start]For data 1101, the Hamming code structure is: P1 P2 D3 P4 D5 D6 D7 [cite: 27]

**Bit Positions:**
* Position 1 (P1) - Parity bit
* Position 2 (P2) - Parity bit
* Position 3 (D3) - Data bit equals 1
* Position 4 (P4) - Parity bit
* Position 5 (D5) - Data bit equals 1
* Position 6 (D6) - Data bit equals 0
* Position 7 (D7) - Data bit equals 1

**Calculate Parity Bits:**

**P1 (checks positions 1, 3, 5, 7):**
* D3 equals 1, D5 equals 1, D7 equals 1, so Count equals 3 (odd)
* P1 equals 1 (to make even)

**P2 (checks positions 2, 3, 6, 7):**
* D3 equals 1, D6 equals 0, D7 equals 1, so Count equals 2 (even)
* P2 equals 0 (already even)

**P4 (checks positions 4, 5, 6, 7):**
* D5 equals 1, D6 equals 0, D7 equals 1, so Count equals 2 (even)
* P4 equals 0 (already even)

**Result:** 1 0 1 0 1 0 1

---
## Hamming Code - Error Correction

### Example Problem

[cite_start]If the 7-bit hamming code word received is 1011011. Assuming even parity, state whether the received code word is correct or wrong. If wrong, locate the bit having error [cite: 28].

**Solution:**

**Received Code:** 1 0 1 1 0 1 1

**Check Parity Bits:**

**P1 (positions 1, 3, 5, 7):**
* Values: 1, 1, 0, 1 so Count equals 3 (odd) so Error in P1 group
* Error indicator C1 equals 1

**P2 (positions 2, 3, 6, 7):**
* Values: 0, 1, 1, 1 so Count equals 3 (odd) so Error in P2 group
* Error indicator C2 equals 1

**P4 (positions 4, 5, 6, 7):**
* Values: 1, 0, 1, 1 so Count equals 3 (odd) so Error in P4 group
* Error indicator C4 equals 1

**Error Position:** C4 C2 C1 equals 111 (binary) equals 7 (decimal)

**Conclusion:** Error is at position 7. Flip bit 7 to correct.

**Corrected Code:** 1 0 1 1 0 1 0

---
## Summary of Error Detection Methods

| Method | Redundancy | Detection Capability | Correction Capability | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **Parity Check** | [cite_start]1 bit [cite: 24] | Single bit errors | No | [cite_start]Simplest [cite: 24] |
| **Checksum** | One block | Multiple bit errors | No | Moderate |
| **CRC** | Variable | Burst errors | No | Moderate |
| **Hamming Code** | Log base 2 of n bits | Single bit errors | [cite_start]Yes [cite: 23] | Higher |

---
## Key Concepts Summary

### Data Link Layer Services
* [cite_start]Unacknowledged Connectionless - No guarantees [cite: 5]
* [cite_start]Acknowledged Connection-Oriented - Reliable delivery [cite: 6]

### Flow Control
* [cite_start]Restricts data amount before acknowledgment [cite: 7]

### Error Control
* [cite_start]Ensures transmitted and received data are identical [cite: 8]
* [cite_start]Detects and corrects corruption [cite: 8]

### Framing
* [cite_start]Converts raw bits into frames [cite: 10]
* Methods: [cite_start]Character Count, Byte Stuffing, Bit Stuffing, Physical Layer Violations [cite: 12]

### Error Detection
* [cite_start]Parity Check - Simplest method [cite: 24]
* [cite_start]Checksum - Uses one's complement arithmetic [cite: 25]

### Error Correction
* [cite_start]Hamming Code - Detects and corrects errors [cite: 23, 26]
* [cite_start]Easy to implement, 7-bit commonly used [cite: 26]
`
};