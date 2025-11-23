// datasets/computer-networks/lesson09.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson09Dataset: Dataset = {
  id: "networks-09",
  topicCount: 11,
  category: "Computer Networks",
  subcategory: "Transport Layer, TCP, UDP, Flow Control",
  description: "Transport layer fundamentals, multiplexing and demultiplexing, segmentation, sequencing and reassembling, error correction, flow control, TCP vs UDP comparison, three-way handshake, connection establishment, and transport protocols.",
  topics: [
    "Transport Layer",
    "TCP vs UDP",
    "Segmentation",
    "Multiplexing and Demultiplexing",
    "Sequencing and Reassembling",
    "Error Correction",
    "Flow Control",
    "TCP (Transmission Control Protocol)",
    "TCP Connection Establishment",
    "UDP (User Datagram Protocol)",
    "Key Concepts Summary",
  ],
  content: `
<TOPIC_START index="0" title="Transport Layer">
1.0 Transport Layer

1.1 Transport Layer Overview
• Responsible for **end-to-end transportation** of data between applications.
• Provides **logical communication** between application processes running on different hosts.
• Operates between the network layer and application layer.
• Handles data transfer for both **connection-oriented** and **connectionless** services.

1.2 Major Functions of Transport Layer
The transport layer performs several critical functions:
* Multiplexing and Demultiplexing
* Segmentation
* Sequencing and Reassembling
* Error Correction
* Flow Control

1.3 Service Identification
• Services are identified at this layer with the help of **port numbers**.
• Port numbers allow multiple applications to use network services simultaneously.
• Each service or application is assigned a unique port number.
• Port numbers range from 0 to 65535.

1.4 Major Transport Layer Protocols
The major protocols which take care of data transportation at transport layer are:
* **TCP** (Transmission Control Protocol)
* **UDP** (User Datagram Protocol)
<TOPIC_END>

<TOPIC_START index="1" title="TCP vs UDP">
2.0 TCP vs UDP

2.1 Transmission Control Protocol (TCP)
TCP characteristics:
* **Connection-oriented** protocol
* **Reliable** communication with acknowledgements
* **Slower** data transportation due to overhead
* Ensures data delivery and order
* Examples: HTTP, FTP, SMTP

2.2 User Datagram Protocol (UDP)
UDP characteristics:
* **Connection-less** protocol
* **Unreliable** communication with no acknowledgements
* **Faster** data transportation
* No guarantee of delivery or order
* Examples: DNS, DHCP, TFTP

2.3 TCP vs UDP Comparison 
| Feature | TCP | UDP |
| :--- | :--- | :--- |
| **Connection Type** | Connection-oriented | Connection-less |
| **Reliability** | Reliable with ACKs | Unreliable, no ACKs |
| **Speed** | Slower | Faster |
| **Overhead** | Higher overhead | Lower overhead |
| **Header Size** | 20-60 bytes | 8 bytes |
| **Use Cases** | HTTP, FTP, SMTP | DNS, DHCP, TFTP |

2.4 When to Use TCP vs UDP
• Use TCP when: **Reliability is critical**, data integrity is important, order matters (file transfers, web browsing, email).
• Use UDP when: **Speed is critical**, some data loss is acceptable, real-time communication needed (video streaming, voice calls, gaming).
<TOPIC_END>

<TOPIC_START index="2" title="Segmentation">
3.0 Segmentation

3.1 What is Segmentation?
• **Segmentation** is the process of dividing large data into smaller units called **segments**.
• Transport layer breaks down application layer data into manageable pieces.
• Each segment can be transmitted independently across the network.
• Allows efficient transmission and error handling.

3.2 Purpose of Segmentation
Benefits of segmentation:
* Enables transmission of large data over networks with size limitations
* Facilitates error detection and recovery for specific segments
* Allows multiplexing of data from different applications
* Improves network efficiency and reliability

3.3 Segment Structure
• Each segment contains a **header** and **data payload**.
• Header includes control information (port numbers, sequence numbers, checksums).
• Data payload contains the actual application data.
• Maximum segment size depends on network constraints.
<TOPIC_END>

<TOPIC_START index="3" title="Multiplexing and Demultiplexing">
4.0 Multiplexing and Demultiplexing

4.1 What is Multiplexing?
• **Multiplexing** is the process of **combining multiple data signals** into one composite signal.
• Multiple data signals can be either analog or digital.
• Composite signal transmitted over a shared medium (cable, fiber, wireless channel).
• Allows efficient use of network resources.

4.2 Multiplexing at Transport Layer
Transport layer multiplexing:
* Gathering data from **multiple application processes**
* Adding transport header information to each segment
* Passing segments to network layer
* Uses **port numbers** to identify different data streams

4.3 What is Demultiplexing?
• **Demultiplexing** is the reverse process of multiplexing.
• Separates the combined (multiplexed) signal back into original individual signals.
• Occurs at the receiving end.
• Delivers data to correct application process.

4.4 Demultiplexing at Transport Layer
Transport layer demultiplexing:
* Examining **port numbers** in received segments
* Extracting data from segments
* Delivering data to correct application socket
* Uses **destination port number** for routing

4.5 Port Numbers in Multiplexing/Demultiplexing
• Port numbers are essential for multiplexing and demultiplexing.
• **Source port number** identifies sending application.
• **Destination port number** identifies receiving application.
• Combination of IP address and port number creates a **socket**.
<TOPIC_END>

<TOPIC_START index="4" title="Sequencing and Reassembling">
5.0 Sequencing and Reassembling

5.1 Sequencing
• **Sequencing** assigns a **sequence number** to each segment.
• Sequence numbers identify the order of segments.
• Allows receiver to detect missing or out-of-order segments.
• Critical for reliable data transmission in TCP.

5.2 Purpose of Sequence Numbers
Sequence numbers provide:
* Ordering of segments at the receiver
* Detection of duplicate segments
* Flow control mechanism
* Acknowledgement tracking

5.3 Reassembling
• **Reassembling** is the process of putting segments back together in **correct order**.
• Receiver uses sequence numbers to reassemble data.
* Reconstructs original data stream from individual segments.
• Handles out-of-order arrival of segments.

5.4 Reassembly Process
Steps in reassembly:
* Receive segments at transport layer
* Check sequence numbers
* Buffer out-of-order segments
* Reassemble segments in correct sequence
* Deliver complete data to application layer
<TOPIC_END>

<TOPIC_START index="5" title="Error Correction">
6.0 Error Correction

6.1 Error Detection and Correction
• Transport layer provides mechanisms to detect and correct errors.
• Ensures data integrity during transmission.
• Uses **checksums** to detect corrupted data.
• Implements **retransmission** for error recovery.

6.2 Checksum Mechanism
• **Checksum** is a calculated value used to detect errors.
• Sender calculates checksum and includes it in segment header.
• Receiver recalculates checksum and compares with received value.
• Mismatch indicates data corruption.

6.3 Error Recovery in TCP
TCP error recovery methods:
* **Acknowledgements (ACKs)** confirm successful receipt
* Retransmission of lost or corrupted segments
* Timeout mechanisms trigger retransmission
* Duplicate ACKs indicate missing segments

6.4 Error Handling in UDP
• UDP provides basic error detection with checksum.
• **No automatic error recovery** or retransmission.
• Application layer responsible for handling errors if needed.
• Trade-off between speed and reliability.
<TOPIC_END>

<TOPIC_START index="6" title="Flow Control">
7.0 Flow Control

7.1 What is Flow Control?
• **Flow control** manages the **rate of data transmission** between sender and receiver.
• Prevents sender from **overwhelming receiver** with too much data too quickly.
• Ensures receiver has sufficient buffer space to process incoming data.
• Critical for preventing data loss and maintaining efficient communication.

7.2 Need for Flow Control
Flow control is needed to:
* Match sender's transmission rate to receiver's processing capability
* Prevent buffer overflow at receiver
* Optimize network resource utilization
* Maintain reliable data delivery

7.3 Flow Control Mechanisms
Common flow control mechanisms:
* **Sliding window protocol**
* Receiver advertises available buffer space
* Sender adjusts transmission rate accordingly
* Dynamic adjustment based on network conditions

7.4 Window-Based Flow Control
• Receiver specifies a **window size** indicating how much data it can accept.
• Sender can transmit up to window size without receiving acknowledgement.
• Window slides forward as data is acknowledged.
• Provides efficient and flexible flow control.
<TOPIC_END>

<TOPIC_START index="7" title="TCP (Transmission Control Protocol)">
8.0 TCP (Transmission Control Protocol)

8.1 TCP Overview
• TCP is one of the original protocols designed in the **TCP/IP suite**.
• Hence the name of the model (TCP/IP).
• Provides **reliable, connection-oriented** service.
• Most widely used transport protocol for internet applications.

8.2 TCP Features
Key features of TCP:
* Connection establishment and termination
* Reliable data transfer with acknowledgements
* Flow control using sliding window
* Congestion control mechanisms
* Error detection and recovery
* In-order data delivery

8.3 TCP Header Structure
TCP header contains important fields:
* Source Port (16 bits)
* Destination Port (16 bits)
* Sequence Number (32 bits)
* Acknowledgement Number (32 bits)
* Header Length and Flags
* Window Size (16 bits)
* Checksum (16 bits)
* Urgent Pointer (16 bits)

8.4 TCP Header Size
• TCP header size ranges from **20 to 60 bytes**.
• Minimum header size is 20 bytes (without options).
• Options field can extend header up to 60 bytes.
• Higher overhead compared to UDP.
<TOPIC_END>

<TOPIC_START index="8" title="TCP Connection Establishment">
9.0 TCP Connection Establishment

9.1 Three-Way Handshake
• TCP uses a process called **three-way handshake** to establish a connection .
• Creates a **virtual circuit** with the destination.
• Uses **SYN** and **ACK** flags in the Code Bits section of the header.
• This process is necessary to initialize the sequence and acknowledgement number fields.

9.2 Three-Way Handshake Process

Step 1: SYN (Synchronize)
* Client sends **SYN packet** to server.
* Includes **initial sequence number (ISN)**.
* SYN flag is set to 1.
* Indicates desire to establish connection.

Step 2: SYN-ACK (Synchronize-Acknowledge)
* Server receives SYN packet.
* Responds with **SYN-ACK packet**.
* Acknowledges client's sequence number.
* Sends its own initial sequence number.
* Both SYN and ACK flags are set.

Step 3: ACK (Acknowledge)
* Client receives SYN-ACK packet.
* Sends **ACK packet** to server.
* Acknowledges server's sequence number.
* Connection is now **established**.
* Data transfer can begin.

9.3 Purpose of Three-Way Handshake
The three-way handshake serves to:
* Establish **reliable connection** between client and server.
* **Synchronize sequence numbers** for both directions.
* Agree on initial sequence numbers.
* Verify both sides are ready for data transmission.
* Prevent old duplicate connection requests.

9.4 Connection State After Handshake
• After successful three-way handshake, connection is in **ESTABLISHED** state.
• Both client and server can send and receive data.
• Sequence numbers are synchronized.
• Flow control and error recovery mechanisms are active.
<TOPIC_END>

<TOPIC_START index="9" title="UDP (User Datagram Protocol)">
10.0 UDP (User Datagram Protocol)

10.1 UDP Overview
• The only thing common between TCP and UDP is that they use **port numbers** to transport traffic.
• UDP is a simple, **connectionless** protocol.
• Provides **minimal transport layer services**.
• No connection establishment or termination.

10.2 UDP Header Structure
The UDP header contains only four parameters:
* Source Port (16 bits)
* Destination Port (16 bits)
* Length (16 bits)
* Checksum (16 bits)

10.3 UDP Header Size
• UDP header is **8 bytes** in size.
• Fixed size, no options field.
• Much smaller than TCP header.
• Results in **lower overhead and faster transmission**.

10.4 TCP vs UDP Overhead Comparison
• TCP has higher overhead with larger header and acknowledgements.
• Source also holds data till it receives acknowledgement in TCP.
• UDP has minimal overhead with smaller header.
• No acknowledgements or connection management in UDP.

10.5 Applications Using UDP
• Some applications, especially those dealing with voice and video, require **fast transport**.
• These applications can tolerate some data loss.
• They take care of reliability themselves at the application layer if needed.
• Speed is more critical than guaranteed delivery.

10.6 UDP Use Cases
Common UDP applications:
* **DNS** (Domain Name System)
* **DHCP** (Dynamic Host Configuration Protocol)
* **TFTP** (Trivial File Transfer Protocol)
* Streaming media (video, audio)
* Online gaming
* VoIP (Voice over IP)
* Live broadcasts
<TOPIC_END>

<TOPIC_START index="10" title="Key Concepts Summary">
11.0 Key Concepts Summary

11.1 Transport Layer Functions
• End-to-end data transportation between applications.
• Multiplexing/demultiplexing using port numbers.
• Segmentation for efficient transmission.
• Sequencing and reassembling for ordered delivery.
• Error correction and flow control mechanisms.

11.2 TCP Characteristics
• **Connection-oriented** with three-way handshake.
• **Reliable** delivery with acknowledgements.
• Flow control and congestion control.
• Higher overhead (20-60 byte header).
• Used for applications requiring reliability.

11.3 UDP Characteristics
• **Connectionless** protocol.
• **Unreliable**, no acknowledgements.
• Minimal overhead (8 byte header).
• Faster transmission.
• Used for real-time applications where speed matters more than reliability.

11.4 Protocol Selection
• Choose TCP for: File transfers, web browsing, email, applications requiring data integrity.
• Choose UDP for: Video streaming, voice calls, DNS queries, applications requiring low latency.
<TOPIC_END>
`
};