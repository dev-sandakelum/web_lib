export const IpData = [
  {
    id: 1,
    question: `<b>a)</b> Define what an <b>IP address</b> is and explain its purpose in computer networks.<br><br><b>b)</b> List three (03) things that an IP address helps to identify.`,
    modelAnswer: `<b>a) IP Address Definition and Purpose:</b><br>
IP address is short for Internet Protocol Address. It is a network layer protocol that must be capable of providing communication between hosts on different kinds of networks. An IP address is a unique identifier that allows transfers of files and e-mail between two computers located at different places.<br><br>

The address must include information about what network the receiving host is on, enabling proper routing of data across different networks.<br><br>

<b>b) Three Things IP Address Helps to Identify:</b><br>
<ol>
<li><b>Name:</b> Identification of the device or host</li>
<li><b>Location:</b> The network location of the device</li>
<li><b>Route:</b> The path for data transmission to reach the destination</li>
</ol>`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `Compare <b>IPv4</b> and <b>IPv6</b> addressing. For IPv4, describe its structure including the number of sections, bits per section, range per section, and total address space.`,
    modelAnswer: `<b>IPv4 Structure:</b><br><br>

<b>Components:</b><br>
<ul>
<li>IP addresses consist of <b>four sections</b></li>
<li>Each section is <b>8 bits long</b></li>
<li>Includes a <b>network ID</b> and a <b>host ID</b></li>
<li>Each section can range from <b>0 to 255</b></li>
</ul><br>

<b>Notation:</b><br>
Written in dotted-decimal notation, for example: <b>128.11.3.31</b><br><br>

<b>Address Space:</b><br>
The total address space in IPv4 is <b>2³² = 4,294,967,296</b> unique addresses<br><br>

<b>Example - Dotted Decimal Notation:</b><br>
<ul>
<li>Decimal: 1.2.3.4</li>
<li>Binary: 00000001 00000010 00000011 00000100</li>
</ul><br>

<b>Two Main Parts:</b><br>
<ol>
<li>The Network Address</li>
<li>The Host Address</li>
</ol><br>

<b>IPv6:</b><br>
IPv6 is the next generation IP addressing system, designed to overcome IPv4 address exhaustion (covered in advanced topics).`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `<b>a)</b> Convert the following IP address from binary notation to dotted-decimal notation:<br>
<b>10000001 00001011 00001011 11101111</b><br><br>
<b>b)</b> Convert the following IP address from dotted-decimal notation to binary notation:<br>
<b>111.56.45.78</b>`,
    modelAnswer: `<b>a) Binary to Dotted-Decimal Conversion:</b><br><br>

<b>Given:</b> 10000001 00001011 00001011 11101111<br><br>

<b>Conversion Process:</b><br>
<ul>
<li>1st octet: 10000001 = 128 + 1 = <b>129</b></li>
<li>2nd octet: 00001011 = 8 + 2 + 1 = <b>11</b></li>
<li>3rd octet: 00001011 = 8 + 2 + 1 = <b>11</b></li>
<li>4th octet: 11101111 = 128 + 64 + 32 + 8 + 4 + 2 + 1 = <b>239</b></li>
</ul><br>

<b>Answer:</b> 129.11.11.239<br><br>

<b>b) Dotted-Decimal to Binary Conversion:</b><br><br>

<b>Given:</b> 111.56.45.78<br><br>

<b>Conversion Process:</b><br>
<ul>
<li>1st octet: 111 = <b>01101111</b></li>
<li>2nd octet: 56 = <b>00111000</b></li>
<li>3rd octet: 45 = <b>00101101</b></li>
<li>4th octet: 78 = <b>01001110</b></li>
</ul><br>

<b>Answer:</b> 01101111 00111000 00101101 01001110`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `Identify the errors in the following IP addresses and explain why each is incorrect:<br>
<b>a)</b> 111.56.045.78<br>
<b>b)</b> 75.45.301.14`,
    modelAnswer: `<b>a) Error in IP Address: 111.56.045.78</b><br><br>

<b>Error Identified:</b> Leading zero in the third octet (045)<br><br>

<b>Explanation:</b><br>
There are <b>no leading zeroes</b> allowed in dotted-decimal notation. Each octet should be written as a plain decimal number without any leading zeros. The correct format would be 111.56.45.78<br><br>

<b>b) Error in IP Address: 75.45.301.14</b><br><br>

<b>Error Identified:</b> Value exceeds maximum range in third octet (301)<br><br>

<b>Explanation:</b><br>
In dotted-decimal notation, each number must be <b>≤ 255</b> (since each octet is 8 bits, and 2⁸ - 1 = 255 is the maximum value). The value 301 is out of the valid range (0-255), making this an invalid IP address.`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `Describe <b>Classful Addressing</b> in IPv4. List all five (05) classes and provide the following details for each:<br>
<b>i)</b> Starting bit pattern<br>
<b>ii)</b> IP address range<br>
<b>iii)</b> Purpose or usage`,
    modelAnswer: `<b>Classful Addressing:</b><br>
In classful addressing, the IPv4 address space is divided into 5 classes: A, B, C, D, and E<br><br>

<b>Class A:</b><br>
<ul>
<li><b>Starting bits:</b> 0</li>
<li><b>Range:</b> 0.0.0.0 to 127.255.255.255</li>
<li><b>Structure:</b> 8-bit network number, 24-bit host number (N.H.H.H)</li>
<li><b>Purpose:</b> Large networks with many hosts</li>
</ul><br>

<b>Class B:</b><br>
<ul>
<li><b>Starting bits:</b> 10</li>
<li><b>Range:</b> 128.0.0.0 to 191.255.255.255</li>
<li><b>Structure:</b> 16-bit network number, 16-bit host number (N.N.H.H)</li>
<li><b>Purpose:</b> Medium-sized networks</li>
</ul><br>

<b>Class C:</b><br>
<ul>
<li><b>Starting bits:</b> 110</li>
<li><b>Range:</b> 192.0.0.0 to 223.255.255.255</li>
<li><b>Structure:</b> 24-bit network number, 8-bit host number (N.N.N.H)</li>
<li><b>Purpose:</b> Small networks with fewer hosts</li>
</ul><br>

<b>Class D:</b><br>
<ul>
<li><b>Starting bits:</b> 1110</li>
<li><b>Range:</b> 224.0.0.0 to 239.255.255.255</li>
<li><b>Purpose:</b> Multicast addresses (group communication)</li>
</ul><br>

<b>Class E:</b><br>
<ul>
<li><b>Starting bits:</b> 11110</li>
<li><b>Range:</b> 240.0.0.0 to 255.255.255.255</li>
<li><b>Purpose:</b> Reserved for experimental use</li>
</ul>`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `Determine the class of the following IP addresses and explain your reasoning:<br>
<b>a)</b> 00000001 00001011 00001011 11101111 (binary notation)<br>
<b>b)</b> 11000001 00001011 00001011 11101111 (binary notation)<br>
<b>c)</b> 158.223.1.108 (decimal notation)<br>
<b>d)</b> 227.13.14.88 (decimal notation)`,
    modelAnswer: `<b>a) Binary: 00000001 00001011 00001011 11101111</b><br><br>

<b>Analysis:</b> The first bit is 0<br>
<b>Class:</b> <b>Class A</b><br>
<b>Reasoning:</b> Class A addresses begin with bit 0<br><br>

<b>b) Binary: 11000001 00001011 00001011 11101111</b><br><br>

<b>Analysis:</b> The first bit is 1, second bit is 1, third bit is 0<br>
<b>Class:</b> <b>Class C</b><br>
<b>Reasoning:</b> Class C addresses begin with bits 110<br><br>

<b>c) Decimal: 158.223.1.108</b><br><br>

<b>Analysis:</b> First byte = 158<br>
<b>Class:</b> <b>Class B</b><br>
<b>Reasoning:</b> 128 < 158 < 191, which falls in the Class B range (128.0.0.0 to 191.255.255.255)<br><br>

<b>d) Decimal: 227.13.14.88</b><br><br>

<b>Analysis:</b> First byte = 227<br>
<b>Class:</b> <b>Class D</b><br>
<b>Reasoning:</b> 224 < 227 < 239, which falls in the Class D range (224.0.0.0 to 239.255.255.255). This is a multicast address.`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `Create a summary table comparing Classes A, B, and C. Include the following information for each class:<br>
<b>i)</b> First octet range<br>
<b>ii)</b> Default subnet mask<br>
<b>iii)</b> Network/Host portion<br>
<b>iv)</b> Number of possible networks<br>
<b>v)</b> Number of hosts per network`,
    modelAnswer: `<b>Classful Addressing Comparison:</b><br><br>

<table border="1" cellpadding="8" cellspacing="0">
<tr>
<th><b>Class</b></th>
<th><b>1st Octet Range</b></th>
<th><b>Network/Host</b></th>
<th><b>Default Mask</b></th>
<th><b>Networks</b></th>
<th><b>Hosts per Network</b></th>
</tr>
<tr>
<td><b>A</b></td>
<td>0 – 127</td>
<td>N.H.H.H</td>
<td>255.0.0.0</td>
<td>128 (2⁷)</td>
<td>16,777,214 (2²⁴ – 2)</td>
</tr>
<tr>
<td><b>B</b></td>
<td>128 – 191</td>
<td>N.N.H.H</td>
<td>255.255.0.0</td>
<td>16,384 (2¹⁴)</td>
<td>65,534 (2¹⁶ – 2)</td>
</tr>
<tr>
<td><b>C</b></td>
<td>192 – 223</td>
<td>N.N.N.H</td>
<td>255.255.255.0</td>
<td>2,097,152 (2²¹)</td>
<td>254 (2⁸ – 2)</td>
</tr>
</table><br>

<b>Key Notes:</b><br>
<ul>
<li><b>N</b> = Network portion</li>
<li><b>H</b> = Host portion</li>
<li>The formula (2ⁿ – 2) is used for hosts because two addresses are reserved:</li>
<ul>
<li>Network address (all host bits = 0)</li>
<li>Broadcast address (all host bits = 1)</li>
</ul>
</ul>`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `<b>a)</b> Define what a <b>Subnet Mask</b> is and explain its purpose in IP networking.<br><br><b>b)</b> Describe how network bits and node bits are represented in a subnet mask.<br><br><b>c)</b> List the default subnet masks for Classes A, B, and C in both decimal and slash notation.`,
    modelAnswer: `<b>a) Subnet Mask Definition and Purpose:</b><br>
A subnet mask is a 32-bit binary number that distinguishes which portion of an IP address identifies the network and which portion identifies the host (node). It allows you to identify the network and node parts of the address.<br><br>

A router uses the subnet mask to determine whether an address is local (on the same network) or remote (on a different network), enabling proper routing decisions.<br><br>

<b>b) Representation in Subnet Mask:</b><br>
<ul>
<li><b>Network bits:</b> Masked as <b>1s</b> (binary 1)</li>
<li><b>Node/Host bits:</b> Masked as <b>0s</b> (binary 0)</li>
</ul><br>

The subnet mask uses contiguous 1s from left to right to identify the network portion, followed by contiguous 0s to identify the host portion.<br><br>

<b>c) Default Subnet Masks:</b><br><br>

<table border="1" cellpadding="6" cellspacing="0">
<tr>
<th><b>Class</b></th>
<th><b>Subnet Mask (Decimal)</b></th>
<th><b>Slash Notation (CIDR)</b></th>
</tr>
<tr>
<td><b>Class A</b></td>
<td>255.0.0.0</td>
<td>/8</td>
</tr>
<tr>
<td><b>Class B</b></td>
<td>255.255.0.0</td>
<td>/16</td>
</tr>
<tr>
<td><b>Class C</b></td>
<td>255.255.255.0</td>
<td>/24</td>
</tr>
</table>`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `Given the IP address <b>192.168.10.79</b> with subnet mask <b>255.255.255.240</b>:<br>
<b>a)</b> Convert both the IP address and subnet mask to binary notation<br>
<b>b)</b> Identify which bits represent the Network ID and which represent the Host ID<br>
<b>c)</b> Express this subnet mask in CIDR (slash) notation`,
    modelAnswer: `<b>a) Binary Conversion:</b><br><br>

<b>IP Address: 192.168.10.79</b><br>
Binary: <b>11000000 10101000 00001010 01001111</b><br><br>

<b>Subnet Mask: 255.255.255.240</b><br>
Binary: <b>11111111 11111111 11111111 11110000</b><br><br>

<b>b) Network ID and Host ID Identification:</b><br><br>

<pre>
IP Address:    11000000 10101000 00001010 01001111
Subnet Mask:   11111111 11111111 11111111 11110000
               └─────────────────────────┘ └──────┘
                     Network ID            Host ID
</pre><br>

<b>Network ID:</b> All bits where the subnet mask has 1s<br>
Binary: 11000000 10101000 00001010 0100<br>
This represents the network portion: 192.168.10.64<br><br>

<b>Host ID:</b> All bits where the subnet mask has 0s<br>
Binary: 1111<br>
This identifies the specific host (15 in decimal) within the network<br><br>

<b>c) CIDR Notation:</b><br>
Count the number of 1s in the subnet mask:<br>
11111111 11111111 11111111 11110000 = 28 ones<br><br>

<b>Answer:</b> <b>/28</b> or <b>192.168.10.79/28</b>`,
    createdAt: '2025-01-07',
    model: 'Sonnet 4'
  },
  {
    id: 10,
    question: `<b>a)</b> Explain what <b>CIDR (Classless Inter-Domain Routing)</b> is and its relationship to subnet masks.<br><br><b>b)</b> Convert the following CIDR notations to their corresponding subnet masks:<br>
<b>i)</b> /22<br>
<b>ii)</b> /25<br>
<b>iii)</b> /26`,
    modelAnswer: `<b>a) CIDR Definition:</b><br>
CIDR (Classless Inter-Domain Routing) is a slash notation representation of a subnet mask. CIDR tells us the number of 'on' bits (1s) in a network address, providing a more flexible and efficient way to specify subnet masks compared to the traditional classful system.<br><br>

The number after the slash (/) indicates how many bits from the left are set to 1 in the subnet mask, which represents the network portion of the address.<br><br>

<b>b) CIDR to Subnet Mask Conversions:</b><br><br>

<b>i) /22:</b><br>
22 bits set to 1, remaining 10 bits set to 0<br>
Binary: 11111111 11111111 11111100 00000000<br>
<b>Subnet Mask: 255.255.252.0</b><br><br>

<b>ii) /25:</b><br>
25 bits set to 1, remaining 7 bits set to 0<br>
Binary: 11111111 11111111 11111111 10000000<br>
<b>Subnet Mask: 255.255.255.128</b><br><br>

<b>iii) /26:</b><br>
26 bits set to 1, remaining 6 bits set to 0<br>
Binary: 11111111 11111111 11111111 11000000<br>
<b>Subnet Mask: 255.255.255.192</b><br><br>

<b>Verification Process:</b><br>
<ul>
<li>For /22: 8 + 8 + 6 = 22 ones</li>
<li>For /25: 8 + 8 + 8 + 1 = 25 ones</li>
<li>For /26: 8 + 8 + 8 + 2 = 26 ones</li>
</ul>`,
    createdAt: '2025-01-06',
    model: 'Sonnet 4'
  },
  {
    id: 11,
    question: `Convert the following subnet masks to CIDR (slash) notation:<br>
<b>a)</b> 222.1.1.20 with mask 255.255.255.192<br>
<b>b)</b> 135.1.1.25 with mask 255.255.248.0<br>
<b>c)</b> 192.168.10.0 with mask 255.255.255.240`,
    modelAnswer: `<b>a) IP: 222.1.1.20 with Mask: 255.255.255.192</b><br><br>

<b>Subnet Mask in Binary:</b><br>
255.255.255.192 = 11111111 11111111 11111111 11000000<br><br>

<b>Count the 1s:</b> 8 + 8 + 8 + 2 = <b>26</b><br>
<b>CIDR Notation:</b> <b>222.1.1.20/26</b><br><br>

<b>b) IP: 135.1.1.25 with Mask: 255.255.248.0</b><br><br>

<b>Subnet Mask in Binary:</b><br>
255.255.248.0 = 11111111 11111111 11111000 00000000<br>
(248 = 128 + 64 + 32 + 16 + 8 = 11111000)<br><br>

<b>Count the 1s:</b> 8 + 8 + 5 = <b>21</b><br>
<b>CIDR Notation:</b> <b>135.1.1.25/21</b><br><br>

<b>c) IP: 192.168.10.0 with Mask: 255.255.255.240</b><br><br>

<b>Subnet Mask in Binary:</b><br>
255.255.255.240 = 11111111 11111111 11111111 11110000<br>
(240 = 128 + 64 + 32 + 16 = 11110000)<br><br>

<b>Count the 1s:</b> 8 + 8 + 8 + 4 = <b>28</b><br>
<b>CIDR Notation:</b> <b>192.168.10.0/28</b><br><br>

<b>Key Concept:</b><br>
To convert a subnet mask to CIDR notation, count the total number of consecutive 1 bits from left to right in the binary representation of the subnet mask.`,
    createdAt: '2025-01-05',
    model: 'Sonnet 4'
  },
  {
    id: 12,
    question: `For the network <b>192.10.50.10/22</b>, calculate the following:<br>
<b>a)</b> Subnet mask in decimal notation<br>
<b>b)</b> Network ID<br>
<b>c)</b> First usable host address<br>
<b>d)</b> Last usable host address<br>
<b>e)</b> Broadcast address<br>
<b>f)</b> Total number of usable hosts`,
    modelAnswer: `<b>Given Network: 192.10.50.10/22</b><br><br>

<b>a) Subnet Mask:</b><br>
/22 means 22 bits are set to 1<br>
Binary: 11111111 11111111 11111100 00000000<br>
<b>Subnet Mask: 255.255.252.0</b><br><br>

<b>b) Network ID Calculation:</b><br>
IP Address: 192.10.50.10 = 11000000 00001010 00110010 00001010<br>
Subnet Mask: 255.255.252.0 = 11111111 11111111 11111100 00000000<br>
Apply AND operation:<br>
Result: 11000000 00001010 00110000 00000000<br>
<b>Network ID: 192.10.48.0</b><br><br>

<b>c) First Usable Host Address:</b><br>
Network ID + 1<br>
<b>First Host: 192.10.48.1</b><br><br>

<b>d) Last Usable Host Address:</b><br>
Broadcast Address - 1<br>
<b>Last Host: 192.10.51.254</b><br><br>

<b>e) Broadcast Address:</b><br>
Set all host bits to 1<br>
Network: 192.10.0011000000000000<br>
With host bits = 1: 192.10.0011001111111111<br>
<b>Broadcast: 192.10.51.255</b><br><br>

<b>f) Total Usable Hosts:</b><br>
Host bits = 32 - 22 = 10 bits<br>
Total addresses = 2¹⁰ = 1024<br>
Usable hosts = 1024 - 2 = <b>1022</b><br>
(Subtract 2 for network ID and broadcast address)<br><br>

<b>Summary:</b><br>
Network: 192.10.48.0/22<br>
Range: 192.10.48.1 to 192.10.51.254<br>
Broadcast: 192.10.51.255<br>
Usable Hosts: 1022`,
    createdAt: '2025-01-04',
    model: 'Sonnet 4'
  }
];