export const Datalink = [
    {
      id: 1,
      question: `<b>a)</b> Briefly explain the term <b>Flow Control</b> in the Data Link Layer.<br><br><b>b)</b> Describe the <b>Acknowledged Connection Oriented</b> service provided by the Data Link Layer, including three (03) key characteristics.`,
      modelAnswer: `<b>a) Flow Control:</b><br>
Flow control refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment. This mechanism prevents the receiver from being overwhelmed with data and ensures smooth data transmission between sender and receiver.<br><br>

<b>b) Acknowledged Connection Oriented Service:</b><br>
This service type establishes a connection before data transmission and provides reliable delivery.<br><br>

<b>Key Characteristics:</b><br>
<ol>
<li><b>Connection establishment:</b> A dedicated connection is established between sender and receiver before data transmission begins.</li>
<li><b>Frame numbering and serial delivery:</b> Each frame is numbered and frames are delivered in serial order, ensuring data arrives in the correct sequence.</li>
<li><b>Acknowledgement and guarantees:</b> Each frame is acknowledged, guaranteeing that all frames are received. Includes both flow control and error control mechanisms.</li>
</ol><br>

<b>Protocols using this service:</b> HTTP, FTP, SMTP`,
      createdAt: '2025-01-15',
      model: 'Sonnet 4'
    },
    {
      id: 2,
      question: `Differentiate between <b>Unacknowledged Connectionless</b> and <b>Acknowledged Connection Oriented</b> services by describing four (04) key differences.`,
      modelAnswer: `<b>Key Differences:</b><br><br>

<ol>
<li><b>Connection Establishment:</b>
<ul>
<li>Unacknowledged Connectionless: No connection establishment required; frames are sent independently</li>
<li>Acknowledged Connection Oriented: Requires connection establishment before data transmission</li>
</ul>
</li><br>

<li><b>Acknowledgement:</b>
<ul>
<li>Unacknowledged Connectionless: No acknowledgement is sent for received frames</li>
<li>Acknowledged Connection Oriented: Acknowledgement is provided for each frame, guaranteeing delivery</li>
</ul>
</li><br>

<li><b>Flow Control and Error Control:</b>
<ul>
<li>Unacknowledged Connectionless: No flow control or error control mechanisms</li>
<li>Acknowledged Connection Oriented: Includes both flow control and error control</li>
</ul>
</li><br>

<li><b>Usage and Reliability:</b>
<ul>
<li>Unacknowledged Connectionless: Used when error rate is low; frames sent independently without guarantees</li>
<li>Acknowledged Connection Oriented: Guarantees all frames are received in serial order; used in protocols like HTTP, FTP, and SMTP</li>
</ul>
</li>
</ol>`,
      createdAt: '2025-01-14',
      model: 'Sonnet 4'
    },
    {
      id: 3,
      question: `<b>a)</b> Briefly describe the purpose of <b>Framing</b> in the Data Link Layer.<br><br><b>b)</b> List the two (02) types of frames and describe the structure of a frame including its three (03) main components.`,
      modelAnswer: `<b>a) Purpose of Framing:</b><br>
Framing is the translation of the physical layer's raw bits into larger aggregate or discrete units called frames. This process breaks down a stream of bits into smaller, digestible chunks that can be transmitted and received effectively, allowing the receiver to detect frame boundaries (start and end of frames).<br><br>

<b>b) Types of Frames:</b><br>
<ol>
<li>Fixed Length Frames</li>
<li>Variable Length Frames</li>
</ol><br>

<b>Frame Structure (Three Main Components):</b><br>
<ol>
<li><b>Header:</b> Contains frame starting bits, address of the source or destination, type of data, and quality control information</li>
<li><b>Payload:</b> Contains the actual data being transmitted</li>
<li><b>Trailer:</b> Contains frame stopping bits and error detection information</li>
</ol>`,
      createdAt: '2025-01-13',
      model: 'Sonnet 4'
    },
    {
      id: 4,
      question: `<b>a)</b> List the four (04) methods used for framing in the Data Link Layer.<br><br><b>b)</b> Describe the <b>Character Count</b> method and explain its main drawback.`,
      modelAnswer: `<b>a) Four Framing Methods:</b><br>
<ol>
<li>Character Count</li>
<li>Flag byte with Byte Stuffing</li>
<li>Bit Stuffing</li>
<li>Physical Layer Encoding Violations</li>
</ol><br>

<b>b) Character Count Method:</b><br>
In this method, a field in the header specifies the number of characters in the frame. The Data Link Layer at the destination looks at the character count and decides the end of the frame based on this count.<br><br>

<b>Main Drawback:</b><br>
If any count is garbled by a transmission error, then the destination is unable to decide where frames begin and end. This makes the method unreliable in environments with transmission errors, as a single bit error in the count field can cause synchronization problems for all subsequent frames.`,
      createdAt: '2025-01-12',
      model: 'Sonnet 4'
    },
    {
      id: 5,
      question: `Explain the <b>Flag Byte with Byte Stuffing</b> method used in framing. Describe how the sender and receiver handle flag bytes that occur within the data, and explain why this method is necessary.`,
      modelAnswer: `<b>Flag Byte with Byte Stuffing Method:</b><br><br>

Each frame starts and ends with special bytes called Flag Bytes. These flag bytes mark the boundaries of frames.<br><br>

<b>The Problem:</b><br>
A serious problem occurs when binary data itself contains the flag byte's bit pattern. This situation will usually interfere with framing, as the receiver might mistake data for frame boundaries.<br><br>

<b>Solution - Byte Stuffing:</b><br>
<ol>
<li><b>At Sender:</b> The sender's data link layer inserts a special escape byte (ESC) just before each "accidental" flag byte that appears in the data. This ensures that flag bytes within the data are not interpreted as frame boundaries.</li><br>

<li><b>At Receiver:</b> The receiver's data link layer removes the escape byte before the data is given to the network layer. This process is transparent to the network layer.</li>
</ol><br>

<b>Why This Method is Necessary:</b><br>
This method is necessary to distinguish between flag bytes used for frame delimiting and the same bit pattern appearing as part of the actual data. Without byte stuffing, the receiver would incorrectly interpret data as frame boundaries, causing data corruption and loss of synchronization.`,
      createdAt: '2025-01-11',
      model: 'Sonnet 4'
    },
    {
      id: 6,
      question: `<b>a)</b> Describe the <b>Bit Stuffing</b> method for framing, explaining how the sender handles five consecutive 1s in the data.<br><br><b>b)</b> If the user data contains the flag pattern <b>01111110</b>, show how it is transmitted and how it is stored in the receiver's memory after destuffing.`,
      modelAnswer: `<b>a) Bit Stuffing Method:</b><br><br>

Bit stuffing is used for data frames that can contain an arbitrary number of bits. Each frame begins and ends with a special bit pattern called a flag byte: <b>01111110</b>.<br><br>

<b>Sender's Operation:</b><br>
Whenever the sender's data link layer encounters five consecutive 1s in the data, it automatically stuffs a 0 bit into the outgoing bit stream. This prevents the data from accidentally containing the flag pattern.<br><br>

<b>Receiver's Operation:</b><br>
When the receiver sees five consecutive incoming 1 bits followed by a 0 bit, it automatically destuffs (removes) the 0 bit. This process is completely transparent to the network layer in both computers.<br><br>

<b>b) Example:</b><br>
<ul>
<li><b>Original user data:</b> 01111110</li>
<li><b>After bit stuffing (transmitted):</b> 011111<u>0</u>10 (a 0 is inserted after five 1s)</li>
<li><b>After destuffing (stored in receiver's memory):</b> 01111110 (restored to original)</li>
</ul>`,
      createdAt: '2025-01-10',
      model: 'Sonnet 4'
    },
    {
      id: 7,
      question: `<b>a)</b> Briefly explain what an <b>Error</b> is in data transmission.<br><br><b>b)</b> List three (03) methods for <b>Error Detection</b> and one method for <b>Error Correction</b>.`,
      modelAnswer: `<b>a) What is an Error:</b><br>
Error is a condition when the output information does not match with the input information. During transmission, digital signals suffer from noise that can introduce errors in the binary bits travelling from one system to another. This means a 0 bit may change to 1 or a 1 bit may change to 0.<br><br>

<b>b) Error Detection and Correction Methods:</b><br><br>

<b>Error Detection Methods:</b><br>
<ol>
<li><b>Parity Check:</b> An additional bit added to data to indicate even or odd parity</li>
<li><b>Checksum:</b> Sum of data blocks calculated using one's complement arithmetic</li>
<li><b>Cyclic Redundancy Check (CRC):</b> Mathematical calculation based on polynomial division</li>
</ol><br>

<b>Error Correction Method:</b><br>
<ol>
<li><b>Hamming Code:</b> Can perform both error detection and error correction by using parity bits strategically placed in the data</li>
</ol>`,
      createdAt: '2025-01-09',
      model: 'Sonnet 4'
    },
    {
      id: 8,
      question: `<b>a)</b> Explain the <b>Parity Check</b> method for error detection, describing both even and odd parity.<br><br><b>b)</b> Given the data <b>1101000</b>, add an appropriate parity bit for <b>even parity</b> and <b>odd parity</b>.`,
      modelAnswer: `<b>a) Parity Check Method:</b><br><br>

A parity check uses an additional bit (parity bit or check bit) added to the end of a string of binary code. This bit indicates whether the number of bits in the string with the value one is even or odd. Parity bits are used as the simplest form of error detecting code.<br><br>

<b>Even Parity:</b><br>
The parity bit is set so that the total number of 1s in the entire string (including the parity bit) is even.<br><br>

<b>Odd Parity:</b><br>
The parity bit is set so that the total number of 1s in the entire string (including the parity bit) is odd.<br><br>

<b>b) Example with data 1101000:</b><br><br>

<b>Original data:</b> 1101000<br>
Number of 1s in original data: 3 (odd)<br><br>

<b>Even Parity:</b><br>
Since there are 3 ones (odd), we add a parity bit of <b>1</b> to make the total even.<br>
Result: <b>11010001</b> (now 4 ones, which is even)<br><br>

<b>Odd Parity:</b><br>
Since there are 3 ones (already odd), we add a parity bit of <b>0</b> to keep the total odd.<br>
Result: <b>11010000</b> (still 3 ones, which is odd)`,
      createdAt: '2025-01-08',
      model: 'Sonnet 4'
    },
    {
      id: 9,
      question: `Describe the <b>Checksum</b> method for error detection. Explain how the sender computes the checksum and what agreement must exist between sender and receiver.`,
      modelAnswer: `<b>Checksum Method:</b><br><br>

To compute the checksum, the sender treats the data unit as a sequence of a certain number of blocks, all with the same number of bits.<br><br>

<b>Agreement Between Sender and Receiver:</b><br>
The sender and receiver must agree on how long the blocks are (e.g., 8-bit blocks, 16-bit blocks, etc.). This agreement is essential for the method to work correctly.<br><br>

<b>How the Sender Computes Checksum:</b><br>
<ol>
<li>The data is divided into blocks of equal size (based on the agreed-upon block length)</li>
<li>The sender adds all the blocks together using one's complement arithmetic</li>
<li>An additional block (checksum) with the same size is created from this sum</li>
<li>This checksum block is sent along with the data</li>
</ol><br>

<b>At the Receiver:</b><br>
The receiver performs the same calculation on the received data blocks and compares the result with the received checksum. If they match, the data is assumed to be error-free; if they don't match, an error has occurred during transmission.`,
      createdAt: '2025-01-07',
      model: 'Sonnet 4'
    },
    {
      id: 10,
      question: `<b>a)</b> Briefly describe the <b>Hamming Code</b> method, including who developed it and its common usage.<br><br><b>b)</b> For the data bits <b>1101</b>, determine the positions of parity bits and data bits in a 7-bit Hamming code. Explain which bit positions are parity bits and which are data bits.`,
      modelAnswer: `<b>a) Hamming Code:</b><br><br>

The Hamming Code was developed by <b>R.W. Hamming</b>. It is easy to implement and the 7-bit Hamming code is commonly used in practice. Hamming code can perform both error detection and error correction.<br><br>

<b>Components:</b><br>
<ul>
<li>Data bits: The original information to be transmitted</li>
<li>Parity bits: Additional bits added for error detection and correction</li>
</ul><br>

<b>b) 7-bit Hamming Code for data 1101:</b><br><br>

<b>Bit Position Analysis:</b><br>
<ul>
<li>Position 1 (2⁰): <b>P1</b> - Parity bit</li>
<li>Position 2 (2¹): <b>P2</b> - Parity bit</li>
<li>Position 3: <b>D3</b> - Data bit (first data bit = 1)</li>
<li>Position 4 (2²): <b>P4</b> - Parity bit</li>
<li>Position 5: <b>D5</b> - Data bit (second data bit = 1)</li>
<li>Position 6: <b>D6</b> - Data bit (third data bit = 0)</li>
<li>Position 7: <b>D7</b> - Data bit (fourth data bit = 1)</li>
</ul><br>

<b>Structure:</b> P1 P2 D3 P4 D5 D6 D7<br><br>

<b>Rule:</b> All bit positions that are powers of 2 (1, 2, 4, 8, 16...) are parity bits. All other positions are data bits.`,
      createdAt: '2025-01-06',
      model: 'Sonnet 4'
    },
    {
      id: 11,
      question: `Explain how <b>Hamming Code parity bits</b> are calculated. Describe which bit positions each parity bit covers, including:<br>
<b>i)</b> Parity bit 1 (P1)<br>
<b>ii)</b> Parity bit 2 (P2)<br>
<b>iii)</b> Parity bit 4 (P4)`,
      modelAnswer: `<b>Hamming Code Parity Bit Calculation:</b><br><br>

Each parity bit covers specific bit positions based on the binary representation of those positions. The rule is that each parity bit covers all bit positions where its corresponding bit is set to 1 in the binary representation.<br><br>

<b>i) Parity bit 1 (P1):</b><br>
Covers all bit positions whose binary representation includes a 1 in the <b>least significant position</b> (rightmost bit).<br>
<b>Positions covered:</b> 1, 3, 5, 7, 9, 11, 13, 15...<br>
<b>Binary pattern:</b> XX...XX<u>1</u> (ends in 1)<br><br>

<b>ii) Parity bit 2 (P2):</b><br>
Covers all bit positions whose binary representation includes a 1 in the <b>second position from the least significant bit</b>.<br>
<b>Positions covered:</b> 2, 3, 6, 7, 10, 11, 14, 15...<br>
<b>Binary pattern:</b> XX...X<u>1</u>X (second bit from right is 1)<br><br>

<b>iii) Parity bit 4 (P4):</b><br>
Covers all bit positions whose binary representation includes a 1 in the <b>third position from the least significant bit</b>.<br>
<b>Positions covered:</b> 4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23...<br>
<b>Binary pattern:</b> XX...<u>1</u>XX (third bit from right is 1)<br><br>

<b>Parity Calculation:</b><br>
<ul>
<li>For <b>even parity</b>: Set the parity bit to 1 if the total number of ones in the positions it checks is odd; set it to 0 if even</li>
<li>For <b>odd parity</b>: Set the parity bit to 0 if the total number of ones in the positions it checks is odd; set it to 1 if even</li>
</ul>`,
      createdAt: '2025-01-05',
      model: 'Sonnet 4'
    },
    {
      id: 12,
      question: `If the 7-bit Hamming code word received is <b>1011011</b>, and assuming <b>even parity</b> is used, verify whether the received code word is correct or wrong. If wrong, locate the bit position having the error.`,
      modelAnswer: `<b>Received Hamming Code:</b> 1011011<br><br>

<b>Bit Position Analysis:</b><br>
<ul>
<li>Position 1 (P1): 1</li>
<li>Position 2 (P2): 0</li>
<li>Position 3 (D3): 1</li>
<li>Position 4 (P4): 1</li>
<li>Position 5 (D5): 0</li>
<li>Position 6 (D6): 1</li>
<li>Position 7 (D7): 1</li>
</ul><br>

<b>Parity Check Calculations (Even Parity):</b><br><br>

<b>Check P1 (positions 1, 3, 5, 7):</b><br>
Bits: 1, 1, 0, 1<br>
Count of 1s: 3 (odd) → <b>Error detected</b> → C1 = 1<br><br>

<b>Check P2 (positions 2, 3, 6, 7):</b><br>
Bits: 0, 1, 1, 1<br>
Count of 1s: 3 (odd) → <b>Error detected</b> → C2 = 1<br><br>

<b>Check P4 (positions 4, 5, 6, 7):</b><br>
Bits: 1, 0, 1, 1<br>
Count of 1s: 3 (odd) → <b>Error detected</b> → C4 = 1<br><br>

<b>Error Position Calculation:</b><br>
Error position = C4 C2 C1 = <b>111</b> (binary) = <b>7</b> (decimal)<br><br>

<b>Conclusion:</b><br>
The received code word is <b>WRONG</b>. The error is at <b>bit position 7</b>.<br><br>

<b>Correction:</b><br>
Bit at position 7 should be flipped from 1 to 0.<br>
<b>Correct code:</b> 101101<b>0</b>`,
      createdAt: '2025-01-04',
      model: 'Sonnet 4'
    }
  ];