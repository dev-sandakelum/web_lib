export const TransportData = [
  {
    id: 1,
    question: `<b>a)</b> Define the <b>Transport Layer</b> and explain its primary responsibility in the OSI model.<br><br><b>b)</b> List five (05) major functions performed by the Transport Layer.`,
    modelAnswer: `<b>a) Transport Layer Definition and Responsibility:</b><br>
The Transport Layer is responsible for end-to-end transportation of data between applications. It ensures that data is delivered reliably and efficiently from the source application to the destination application, regardless of the underlying network infrastructure.<br><br>

<b>Primary Responsibility:</b><br>
The Transport Layer provides logical communication between application processes running on different hosts. It handles the delivery of messages from application to application, managing the complete data transfer process.<br><br>

<b>b) Five Major Functions of Transport Layer:</b><br><br>

<ol>
<li><b>Multiplexing and De-multiplexing:</b> Combining multiple data streams into one channel and separating them at the destination</li><br>

<li><b>Segmentation:</b> Breaking down large data into smaller segments for efficient transmission over the network</li><br>

<li><b>Sequencing and Reassembling:</b> Numbering segments in proper order and reassembling them correctly at the destination</li><br>

<li><b>Error Correction:</b> Detecting and correcting errors that occur during data transmission</li><br>

<li><b>Flow Control:</b> Controlling the rate of data transmission to prevent the receiver from being overwhelmed</li>
</ol><br>

<b>Additional Information:</b><br>
Services at this layer are identified with the help of Port Numbers. The major protocols that handle data transportation at the Transport Layer are TCP and UDP.`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `Compare <b>TCP (Transmission Control Protocol)</b> and <b>UDP (User Datagram Protocol)</b> by describing five (05) key differences between these two transport layer protocols.`,
    modelAnswer: `<b>Key Differences Between TCP and UDP:</b><br><br>

<ol>
<li><b>Full Name:</b>
<ul>
<li><b>TCP:</b> Transmission Control Protocol</li>
<li><b>UDP:</b> User Datagram Protocol</li>
</ul>
</li><br>

<li><b>Connection Type:</b>
<ul>
<li><b>TCP:</b> Connection-oriented protocol - establishes a connection before data transfer using three-way handshake</li>
<li><b>UDP:</b> Connectionless protocol - sends data without establishing a connection first</li>
</ul>
</li><br>

<li><b>Reliability:</b>
<ul>
<li><b>TCP:</b> Reliable communication with acknowledgements (ACKs) - guarantees delivery and maintains data integrity</li>
<li><b>UDP:</b> Unreliable communication without acknowledgements - does not guarantee delivery or order</li>
</ul>
</li><br>

<li><b>Speed:</b>
<ul>
<li><b>TCP:</b> Slower data transportation due to connection establishment, acknowledgements, and error checking overhead</li>
<li><b>UDP:</b> Faster data transportation with minimal overhead and no acknowledgement mechanism</li>
</ul>
</li><br>

<li><b>Usage Examples:</b>
<ul>
<li><b>TCP:</b> Used by HTTP (web browsing), FTP (file transfer), SMTP (email)</li>
<li><b>UDP:</b> Used by DNS (domain name resolution), DHCP (IP configuration), TFTP (trivial file transfer)</li>
</ul>
</li>
</ol><br>

<b>Summary:</b><br>
TCP prioritizes reliability and guarantees delivery at the cost of speed, while UDP prioritizes speed and efficiency at the cost of reliability.`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `<b>a)</b> Explain the concept of <b>Multiplexing</b> at the Transport Layer.<br><br><b>b)</b> Explain the concept of <b>De-multiplexing</b> at the Transport Layer.<br><br><b>c)</b> Describe why these processes are important for network communication.`,
    modelAnswer: `<b>a) Multiplexing at Transport Layer:</b><br><br>

<b>Definition:</b><br>
Multiplexing is the process of combining multiple data signals (either analogue or digital) into one composite signal for transmission over a shared medium (such as a cable, fiber, or wireless channel).<br><br>

<b>How It Works:</b><br>
At the Transport Layer, multiplexing allows multiple applications on the same host to send data simultaneously through the network. Each application is assigned a unique port number, and the Transport Layer combines data from different applications into segments that are sent through the network layer.<br><br>

<b>Example:</b> A computer running a web browser, email client, and file transfer application simultaneously uses multiplexing to send all their data through a single network connection.<br><br>

<b>b) De-multiplexing at Transport Layer:</b><br><br>

<b>Definition:</b><br>
De-multiplexing is the reverse process of multiplexing — it separates the combined (multiplexed) signal back into the original individual signals at the receiving end.<br><br>

<b>How It Works:</b><br>
At the receiving host, the Transport Layer examines the destination port number in each incoming segment and delivers the data to the correct application process. This ensures that data from different sources reaches the appropriate application.<br><br>

<b>Example:</b> When incoming data arrives at a computer, de-multiplexing ensures that web data goes to the browser, email data goes to the email client, and file transfer data goes to the FTP application.<br><br>

<b>c) Importance of These Processes:</b><br><br>

<ul>
<li><b>Efficient Resource Utilization:</b> Allows multiple applications to share the same network connection without interference</li>
<li><b>Application Identification:</b> Port numbers enable correct delivery of data to specific applications</li>
<li><b>Concurrent Communication:</b> Enables simultaneous data transfer for multiple applications on the same device</li>
<li><b>Network Simplification:</b> Reduces the need for separate physical connections for each application</li>
<li><b>Process Isolation:</b> Keeps data streams from different applications separate and organized</li>
</ul>`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `<b>a)</b> Define <b>Segmentation</b> in the Transport Layer and explain its purpose.<br><br><b>b)</b> Explain <b>Flow Control</b> and describe why it is necessary in data communication.`,
    modelAnswer: `<b>a) Segmentation:</b><br><br>

<b>Definition:</b><br>
Segmentation is the process of breaking down large data into smaller segments for efficient transmission over the network.<br><br>

<b>Purpose:</b><br>
<ul>
<li><b>Network Compatibility:</b> Different networks have maximum transmission unit (MTU) limits - segmentation ensures data fits within these limits</li>
<li><b>Efficient Transmission:</b> Smaller segments are easier to manage and transmit across various network paths</li>
<li><b>Error Management:</b> If an error occurs, only the affected segment needs to be retransmitted, not the entire data</li>
<li><b>Fair Resource Sharing:</b> Smaller segments prevent one large transfer from monopolizing network resources</li>
<li><b>Parallel Processing:</b> Multiple segments can be processed simultaneously at intermediate routers</li>
</ul><br>

<b>Process:</b><br>
The Transport Layer divides application data into appropriately sized segments, adds headers with sequence numbers and other control information, and passes them to the Network Layer for transmission.<br><br>

<b>b) Flow Control:</b><br><br>

<b>Definition:</b><br>
Flow Control is a mechanism to control the rate of data transmission between sender and receiver to prevent the receiver from being overwhelmed.<br><br>

<b>Why Flow Control is Necessary:</b><br><br>

<ol>
<li><b>Speed Mismatch:</b> The sender may transmit data faster than the receiver can process it</li><br>

<li><b>Buffer Overflow Prevention:</b> Receivers have limited buffer space - without flow control, buffers can overflow causing data loss</li><br>

<li><b>Resource Management:</b> Ensures efficient use of receiver's processing power and memory resources</li><br>

<li><b>Data Integrity:</b> Prevents data loss that would occur if the receiver cannot keep up with incoming data</li><br>

<li><b>Network Congestion:</b> Helps prevent network congestion by regulating transmission rates</li>
</ol><br>

<b>How It Works:</b><br>
The receiver communicates its ability to accept more data (usually through window size in TCP), and the sender adjusts its transmission rate accordingly. This creates a balanced data flow that matches the receiver's capacity.`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `Describe the <b>TCP Three-Way Handshake</b> process used for connection establishment. Explain all three steps in detail, including the flags used and the purpose of each step.`,
    modelAnswer: `<b>TCP Three-Way Handshake:</b><br><br>

<b>Overview:</b><br>
TCP uses a process called the three-way handshake to establish a connection or virtual circuit with the destination. This process uses the SYN (Synchronize) and ACK (Acknowledge) flags in the Code Bits section of the TCP header. The three-way handshake is necessary to initialize the sequence and acknowledgement number fields before data transmission can begin.<br><br>

<b>Three Steps of Connection Establishment:</b><br><br>

<b>Step 1 - SYN (Synchronize):</b><br>
<ul>
<li><b>Action:</b> The client sends a SYN (synchronize) packet to the server</li>
<li><b>Purpose:</b> Request to establish a connection</li>
<li><b>Contents:</b> Includes the client's initial sequence number (ISN)</li>
<li><b>Flag Set:</b> SYN flag is set to 1</li>
<li><b>Meaning:</b> "I want to establish a connection with you, and here is my starting sequence number"</li>
</ul><br>

<b>Step 2 - SYN-ACK (Synchronize-Acknowledge):</b><br>
<ul>
<li><b>Action:</b> The server responds with a SYN-ACK packet</li>
<li><b>Purpose:</b> Acknowledge the client's request and send its own synchronization request</li>
<li><b>Contents:</b> 
  <ul>
  <li>Acknowledges the client's SYN by sending ACK number (client's sequence number + 1)</li>
  <li>Sends its own initial sequence number</li>
  </ul>
</li>
<li><b>Flags Set:</b> Both SYN and ACK flags are set to 1</li>
<li><b>Meaning:</b> "I received your request, I agree to the connection, and here is my starting sequence number"</li>
</ul><br>

<b>Step 3 - ACK (Acknowledge):</b><br>
<ul>
<li><b>Action:</b> The client sends an ACK packet to the server</li>
<li><b>Purpose:</b> Acknowledge the server's response and confirm connection establishment</li>
<li><b>Contents:</b> Acknowledges the server's sequence number (server's sequence number + 1)</li>
<li><b>Flag Set:</b> ACK flag is set to 1</li>
<li><b>Meaning:</b> "I received your acknowledgment, connection is established"</li>
</ul><br>

<b>Result:</b><br>
After these three steps, the connection is now established and both parties have synchronized their sequence numbers. Data transfer can now begin in both directions.<br><br>

<b>Why This Process is Important:</b><br>
<ul>
<li>Ensures both sides are ready to communicate</li>
<li>Synchronizes sequence numbers for proper ordering of data</li>
<li>Establishes a reliable virtual circuit</li>
<li>Prevents old duplicate connections from causing confusion</li>
</ul>`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `<b>a)</b> Describe the structure of the <b>UDP header</b> by listing and explaining its four (04) parameters.<br><br><b>b)</b> Compare the UDP header with the TCP header in terms of size and overhead.`,
    modelAnswer: `<b>a) UDP Header Structure:</b><br><br>

The UDP header contains only four parameters, making it simple and lightweight:<br><br>

<b>1. Source Port (16 bits):</b><br>
<ul>
<li>Identifies the port number of the sending application</li>
<li>Allows the receiver to send responses back to the correct application</li>
<li>Optional - can be set to zero if not needed</li>
</ul><br>

<b>2. Destination Port (16 bits):</b><br>
<ul>
<li>Identifies the port number of the receiving application</li>
<li>Tells the receiving system which application should receive the data</li>
<li>Essential for de-multiplexing at the receiver</li>
</ul><br>

<b>3. Length (16 bits):</b><br>
<ul>
<li>Specifies the length of the UDP header plus data</li>
<li>Measured in bytes</li>
<li>Minimum value is 8 (header only, no data)</li>
<li>Helps the receiver know where the UDP datagram ends</li>
</ul><br>

<b>4. Checksum (16 bits):</b><br>
<ul>
<li>Used for error detection in the header and data</li>
<li>Optional in IPv4, mandatory in IPv6</li>
<li>Provides basic integrity checking</li>
<li>Can be set to zero if not used</li>
</ul><br>

<b>UDP Header Size:</b> <b>8 bytes (64 bits) total</b><br><br>

<b>b) UDP vs TCP Header Comparison:</b><br><br>

<b>Size Comparison:</b><br>
<ul>
<li><b>UDP Header:</b> 8 bytes (fixed size)</li>
<li><b>TCP Header:</b> Minimum 20 bytes (can be larger with options)</li>
<li>UDP header is significantly smaller - only 40% of TCP's minimum size</li>
</ul><br>

<b>Overhead Comparison:</b><br>
<ul>
<li><b>TCP:</b> Has higher overhead with a larger header and acknowledgements</li>
<li><b>TCP:</b> Requires connection establishment (three-way handshake)</li>
<li><b>TCP:</b> Requires acknowledgements for every segment</li>
<li><b>TCP:</b> The source holds data in buffer until it receives acknowledgement</li>
<li><b>UDP:</b> Minimal overhead with smaller header</li>
<li><b>UDP:</b> No connection establishment required</li>
<li><b>UDP:</b> No acknowledgements needed</li>
<li><b>UDP:</b> Data is sent immediately without waiting</li>
</ul><br>

<b>Common Feature:</b><br>
The only thing common between TCP and UDP is that they both use port numbers to transport traffic and identify applications.<br><br>

<b>Trade-off:</b><br>
UDP's simplicity and low overhead make it faster but less reliable than TCP. TCP's additional features ensure reliability but at the cost of increased overhead and slower transmission.`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `<b>a)</b> Explain when and why <b>UDP</b> should be used instead of TCP.<br><br><b>b)</b> Provide three (03) examples of applications or protocols that use UDP and explain why UDP is suitable for each.`,
    modelAnswer: `<b>a) When and Why to Use UDP:</b><br><br>

<b>Situations Where UDP is Preferred:</b><br><br>

<ol>
<li><b>Time-Sensitive Applications:</b>
<ul>
<li>When speed is more important than perfect reliability</li>
<li>Applications that cannot tolerate the delays caused by TCP's acknowledgements and retransmissions</li>
<li>Real-time communications where old data becomes useless</li>
</ul>
</li><br>

<li><b>Applications with Built-in Reliability:</b>
<ul>
<li>Some applications, especially those dealing with voice and video, require fast transport</li>
<li>These applications take care of reliability themselves at the application layer</li>
<li>They can implement their own error handling mechanisms tailored to their specific needs</li>
</ul>
</li><br>

<li><b>Low Overhead Requirements:</b>
<ul>
<li>When minimal protocol overhead is needed</li>
<li>Small, simple transactions where connection setup overhead would be wasteful</li>
<li>Bandwidth-constrained environments</li>
</ul>
</li><br>

<li><b>Broadcast/Multicast Communications:</b>
<ul>
<li>UDP supports broadcasting to multiple recipients</li>
<li>TCP's connection-oriented nature doesn't work for one-to-many communication</li>
</ul>
</li>
</ol><br>

<b>b) Three Applications Using UDP:</b><br><br>

<b>1. DNS (Domain Name System):</b><br>
<ul>
<li><b>Why UDP is Suitable:</b></li>
<ul>
<li>DNS queries are typically small, single-packet requests</li>
<li>Setting up a TCP connection would add unnecessary overhead</li>
<li>If a query fails, it's faster to simply resend it than to manage TCP connections</li>
<li>Speed is critical for good user experience in web browsing</li>
<li>The application layer can retry if no response is received</li>
</ul>
</ul><br>

<b>2. DHCP (Dynamic Host Configuration Protocol):</b><br>
<ul>
<li><b>Why UDP is Suitable:</b></li>
<ul>
<li>Used when a computer first connects to a network (before it has an IP address)</li>
<li>Cannot establish a TCP connection without an IP address</li>
<li>Simple request-response protocol that doesn't need connection state</li>
<li>Broadcasts requests to find DHCP servers</li>
<li>Fast configuration is important for network connectivity</li>
</ul>
</ul><br>

<b>3. TFTP (Trivial File Transfer Protocol):</b><br>
<ul>
<li><b>Why UDP is Suitable:</b></li>
<ul>
<li>Designed for simple file transfers with minimal overhead</li>
<li>Often used in local networks where reliability is less of a concern</li>
<li>Implements its own simple acknowledgement mechanism at the application layer</li>
<li>Used for booting diskless workstations where efficiency matters</li>
<li>Simpler implementation than TCP-based FTP</li>
</ul>
</ul><br>

<b>Additional Examples:</b><br>
Other applications using UDP include:<br>
<ul>
<li><b>VoIP (Voice over IP):</b> Real-time voice communication where slight data loss is acceptable but delays are not</li>
<li><b>Video Streaming:</b> Missing a few frames is better than pausing for retransmission</li>
<li><b>Online Gaming:</b> Current game state is more important than perfect delivery of old data</li>
</ul>`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `Explain the concept of <b>Port Numbers</b> in the Transport Layer. Describe:<br>
<b>a)</b> What port numbers are and their purpose<br>
<b>b)</b> How port numbers enable service identification<br>
<b>c)</b> Why both TCP and UDP use port numbers`,
    modelAnswer: `<b>a) What Port Numbers Are:</b><br><br>

<b>Definition:</b><br>
Port numbers are 16-bit numerical identifiers (ranging from 0 to 65,535) used at the Transport Layer to identify specific processes or services running on a host. They act as endpoints for communication, allowing multiple applications to use network services simultaneously on the same device.<br><br>

<b>Purpose:</b><br>
<ul>
<li><b>Application Identification:</b> Uniquely identify different applications or services on a single host</li>
<li><b>Multiplexing:</b> Enable multiple applications to share the same network connection</li>
<li><b>De-multiplexing:</b> Allow incoming data to be delivered to the correct application</li>
<li><b>Session Management:</b> Distinguish between different communication sessions</li>
</ul><br>

<b>Port Number Ranges:</b><br>
<ul>
<li><b>Well-Known Ports (0-1023):</b> Reserved for standard services (HTTP=80, HTTPS=443, FTP=21, SMTP=25)</li>
<li><b>Registered Ports (1024-49151):</b> Used by specific applications registered with IANA</li>
<li><b>Dynamic/Private Ports (49152-65535):</b> Used temporarily by client applications</li>
</ul><br>

<b>b) How Port Numbers Enable Service Identification:</b><br><br>

Services at the Transport Layer are identified with the help of Port Numbers. Here's how it works:<br><br>

<b>Service Identification Process:</b><br>
<ol>
<li><b>Unique Assignment:</b> Each service or application is assigned a specific port number</li>
<li><b>Header Information:</b> Every TCP or UDP segment includes source and destination port numbers in its header</li>
<li><b>Routing to Application:</b> When data arrives, the Transport Layer examines the destination port number</li>
<li><b>Delivery:</b> Data is delivered to the application listening on that specific port</li>
</ol><br>

<b>Example:</b><br>
<ul>
<li>Web server listens on port 80 (HTTP) or 443 (HTTPS)</li>
<li>When your browser sends a request, it includes destination port 80</li>
<li>The server's Transport Layer sees port 80 and delivers data to the web server application</li>
<li>Multiple browsers can connect simultaneously using different source ports</li>
</ul><br>

<b>Socket Concept:</b><br>
The combination of IP address and port number creates a socket (e.g., 192.168.1.10:80), which uniquely identifies a specific process on a specific machine.<br><br>

<b>c) Why Both TCP and UDP Use Port Numbers:</b><br><br>

The only thing common between TCP and UDP is that they both use port numbers to transport traffic. Here's why:<br><br>

<b>Common Requirements:</b><br>
<ol>
<li><b>Application Layer Interface:</b>
<ul>
<li>Both protocols need to interface with multiple applications simultaneously</li>
<li>Port numbers provide a standardized way to identify applications</li>
<li>Without ports, neither protocol could support multiple applications</li>
</ul>
</li><br>

<li><b>Multiplexing/De-multiplexing:</b>
<ul>
<li>Both TCP and UDP need to multiplex data from multiple applications</li>
<li>Both need to de-multiplex incoming data to correct applications</li>
<li>Port numbers are essential for both processes regardless of protocol</li>
</ul>
</li><br>

<li><b>Standardization:</b>
<ul>
<li>Using the same port numbering scheme for both protocols creates consistency</li>
<li>Applications can be designed to work with specific ports regardless of protocol</li>
<li>Network administrators can manage services based on port numbers</li>
</ul>
</li><br>

<li><b>Independent Operation:</b>
<ul>
<li>TCP and UDP maintain separate port spaces</li>
<li>The same port number can be used by both TCP and UDP simultaneously</li>
<li>Example: Port 53 is used by both TCP and UDP for DNS</li>
</ul>
</li>
</ol><br>

<b>Key Insight:</b><br>
While TCP and UDP differ significantly in how they handle data (reliable vs. unreliable, connection-oriented vs. connectionless), they share the fundamental need to identify and route data to specific applications. Port numbers provide this essential addressing mechanism for both protocols.`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `Describe the complete process of reliable data transfer in <b>TCP</b>. Include:<br>
<b>a)</b> How TCP ensures reliability<br>
<b>b)</b> The role of acknowledgements<br>
<b>c)</b> What happens when data is lost or corrupted`,
    modelAnswer: `<b>Reliable Data Transfer in TCP:</b><br><br>

<b>a) How TCP Ensures Reliability:</b><br><br>

TCP implements several mechanisms to guarantee reliable data delivery:<br><br>

<b>1. Connection-Oriented Communication:</b><br>
<ul>
<li>TCP establishes a connection before data transfer using the three-way handshake</li>
<li>This ensures both sender and receiver are ready to communicate</li>
<li>Creates a virtual circuit between the two endpoints</li>
</ul><br>

<b>2. Sequence Numbers:</b><br>
<ul>
<li>Every byte of data is assigned a unique sequence number</li>
<li>Enables the receiver to detect missing or out-of-order segments</li>
<li>Allows proper reassembly of data at the destination</li>
<li>Initialized during the three-way handshake</li>
</ul><br>

<b>3. Acknowledgements (ACKs):</b><br>
<ul>
<li>Receiver confirms receipt of data by sending acknowledgements</li>
<li>Indicates the next expected sequence number</li>
<li>Informs sender that data was successfully received</li>
</ul><br>

<b>4. Checksums:</b><br>
<ul>
<li>TCP includes checksums in every segment for error detection</li>
<li>Detects corruption during transmission</li>
<li>Corrupted segments are discarded and not acknowledged</li>
</ul><br>

<b>5. Retransmission:</b><br>
<ul>
<li>If acknowledgement is not received within a timeout period, data is retransmitted</li>
<li>Ensures that lost or corrupted data is eventually delivered</li>
</ul><br>

<b>6. Flow Control:</b><br>
<ul>
<li>Prevents sender from overwhelming receiver</li>
<li>Receiver advertises available buffer space (window size)</li>
<li>Sender adjusts transmission rate accordingly</li>
</ul><br>

<b>b) The Role of Acknowledgements:</b><br><br>

Acknowledgements are crucial to TCP's reliability mechanism:<br><br>

<b>Functions of ACKs:</b><br>
<ol>
<li><b>Confirmation of Receipt:</b>
<ul>
<li>Receiver sends ACK to confirm successful data reception</li>
<li>ACK number indicates the next expected byte</li>
<li>Example: ACK=1001 means "I received up to byte 1000, send byte 1001 next"</li>
</ul>
</li><br>

<li><b>Cumulative Acknowledgement:</b>
<ul>
<li>TCP uses cumulative ACKs - one ACK can acknowledge multiple segments</li>
<li>ACK for sequence 1000 confirms all data up to byte 999</li>
<li>Reduces the number of ACK messages needed</li>
</ul>
</li><br>

<li><b>Trigger for Data Release:</b>
<ul>
<li>The source holds data in its buffer until it receives acknowledgement</li>
<li>Once ACK is received, buffer space can be freed</li>
<li>Allows sender to send more data</li>
</ul>
</li><br>

<li><b>Retransmission Timer Management:</b>
<ul>
<li>Receiving an ACK stops the retransmission timer for that data</li>
<li>Sender knows data arrived safely and doesn't need to resend</li>
</ul>
</li><br>

<li><b>Flow Control Feedback:</b>
<ul>
<li>ACKs include window size information</li>
<li>Tells sender how much buffer space is available at receiver</li>
<li>Enables dynamic adjustment of transmission rate</li>
</ul>
</li>
</ol><br>

<b>c) What Happens When Data is Lost or Corrupted:</b><br><br>

<b>Scenario 1: Data Segment is Lost:</b><br>
<ol>
<li>Sender transmits a segment but it never reaches the receiver</li>
<li>Receiver doesn't send an ACK (because it never received the data)</li>
<li>Sender's retransmission timer expires</li>
<li>Sender retransmits the lost segment</li>
<li>Receiver eventually receives the segment and sends ACK</li>
<li>Communication continues normally</li>
</ol><br>

<b>Scenario 2: Data is Corrupted:</b><br>
<ol>
<li>Segment arrives at receiver but contains errors</li>
<li>Receiver's checksum calculation detects the corruption</li>
<li>Receiver discards the corrupted segment without sending ACK</li>
<li>Sender's retransmission timer expires (no ACK received)</li>
<li>Sender retransmits the segment</li>
<li>Receiver receives clean data and sends ACK</li>
</ol><br>

<b>Scenario 3: ACK is Lost:</b><br>
<ol>
<li>Data arrives successfully and receiver sends ACK</li>
<li>ACK is lost in the network</li>
<li>Sender's timer expires (no ACK received)</li>
<li>Sender retransmits the data</li>
<li>Receiver detects duplicate using sequence numbers</li>
<li>Receiver discards duplicate but sends ACK again</li>
<li>Sender receives ACK and continues</li>
</ol><br>

<b>Scenario 4: Out-of-Order Delivery:</b><br>
<ol>
<li>Segments arrive in wrong order (e.g., segment 3 before segment 2)</li>
<li>Receiver buffers out-of-order segments</li>
<li>Receiver sends duplicate ACK requesting missing segment</li>
<li>When missing segment arrives, receiver reassembles all data in correct order</li>
<li>Sends cumulative ACK for all received data</li>
</ol><br>

<b>Key Mechanisms:</b><br>
<ul>
<li><b>Retransmission Timer:</b> Triggers retransmission if ACK not received</li>
<li><b>Duplicate Detection:</b> Sequence numbers prevent duplicate data from being processed twice</li>
<li><b>Buffer Management:</b> Sender keeps copy of data until acknowledged</li>
<li><b>Error Detection:</b> Checksums identify corrupted data</li>
</ul><br>

<b>Result:</b><br>
Through these mechanisms, TCP guarantees that data will eventually be delivered correctly, in order, and without duplicates or corruption, making it a reliable transport protocol suitable for applications like HTTP, FTP, and SMTP.,     createdAt: '2025-01-07',     model: 'Sonnet 4'   },   {     id: 10,     question: Create a comprehensive comparison table between <b>TCP</b> and <b>UDP</b> covering at least eight (08) different aspects including connection type, reliability, speed, header size, acknowledgements, use cases, and any other relevant characteristics.,     modelAnswer: <b>Comprehensive TCP vs UDP Comparison:</b><br><br>
<table border="1" cellpadding="8" cellspacing="0" width="100%">
<thead>
<tr style="background-color: #e3f2fd;">
<th><b>Aspect</b></th>
<th><b>TCP (Transmission Control Protocol)</b></th>
<th><b>UDP (User Datagram Protocol)</b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Connection Type</b></td>
<td>Connection-oriented: Establishes connection before data transfer using three-way handshake</td>
<td>Connectionless: Sends data without establishing a connection</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Reliability</b></td>
<td>Reliable communication with acknowledgements (ACKs). Guarantees delivery, order, and integrity</td>
<td>Unreliable communication without acknowledgements. No guarantee of delivery or order</td>
</tr>
<tr>
<td><b>Speed</b></td>
<td>Slower data transportation due to connection setup, acknowledgements, and error checking</td>
<td>Faster data transportation with minimal overhead and no acknowledgement delays</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Header Size</b></td>
<td>Minimum 20 bytes (can be larger with options). Higher overhead</td>
<td>Fixed 8 bytes. Minimal overhead</td>
</tr>
<tr>
<td><b>Acknowledgements</b></td>
<td>Requires acknowledgements for every segment. Sender holds data in buffer until ACK received</td>
<td>No acknowledgements. Data is sent immediately without waiting for confirmation</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Error Checking</b></td>
<td>Comprehensive error checking with checksums. Corrupted data is retransmitted</td>
<td>Basic checksum for error detection only. No retransmission mechanism</td>
</tr>
<tr>
<td><b>Flow Control</b></td>
<td>Yes - uses window size mechanism to prevent receiver overflow</td>
<td>No - no flow control mechanism</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Congestion Control</b></td>
<td>Yes - adjusts transmission rate based on network conditions</td>
<td>No - no congestion control</td>
</tr>
<tr>
<td><b>Ordering</b></td>
<td>Maintains data order using sequence numbers. Segments are reassembled in correct order</td>
<td>No ordering guarantee. Packets may arrive out of order</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Data Boundary</b></td>
<td>Stream-oriented: No message boundaries, data treated as continuous stream</td>
<td>Message-oriented: Preserves message boundaries, each datagram is independent</td>
</tr>
<tr>
<td><b>Retransmission</b></td>
<td>Automatic retransmission of lost or corrupted data</td>
<td>No retransmission - application must handle if needed</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Broadcasting</b></td>
<td>Not supported - only point-to-point communication</td>
<td>Supports broadcasting and multicasting</td>
</tr>
<tr>
<td><b>Use Cases</b></td>
<td>
- HTTP (Web browsing)<br>
- FTP (File transfer)<br>
- SMTP (Email)<br>
- Any application requiring reliability
</td>
<td>
- DNS (Domain name resolution)<br>
- DHCP (IP configuration)<br>
- TFTP (Trivial file transfer)<br>
- VoIP, Video streaming, Online gaming
</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>When to Use</b></td>
<td>
- Data integrity is critical<br>
- Complete data delivery required<br>
- Order matters<br>
- File transfers, web pages, emails
</td>
<td>
- Speed is more important than reliability<br>
- Real-time applications<br>
- Small, simple transactions<br>
- Application handles its own reliability
</td>
</tr>
<tr>
<td><b>Overhead</b></td>
<td>High overhead - connection management, ACKs, sequence numbers, timers, buffers</td>
<td>Low overhead - minimal protocol machinery</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Resource Usage</b></td>
<td>Higher resource usage - maintains connection state, buffers, timers</td>
<td>Lower resource usage - stateless, no connection tracking</td>
</tr>
</tbody>
</table><br>
<b>Summary:</b><br>
<ul>
<li><b>TCP:</b> Choose when reliability, data integrity, and correct ordering are essential. Accept slower speed as trade-off for guaranteed delivery.</li>
<li><b>UDP:</b> Choose when speed is critical and occasional data loss is acceptable. Ideal for real-time applications where timeliness matters more than perfection.</li>
</ul><br>
<b>Common Feature:</b><br>
The only thing common between TCP and UDP is that they both use port numbers to transport traffic and identify applications at the Transport Layer.`,
createdAt: '2025-01-06',
model: 'Sonnet 4'
}
];