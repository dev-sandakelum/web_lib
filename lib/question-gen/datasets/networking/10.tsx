// datasets/computer-networks/lesson10.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson10Dataset: Dataset = {
  id: "networks-10",
  topicCount: 10,
  category: "Computer Networks",
  subcategory: "Application Layer, Session Layer, Presentation Layer, Application Protocols",
  description: "Session, presentation, and application layer fundamentals, DNS, HTTP/HTTPS, email systems and protocols (SMTP, POP3, IMAP), FTP, domain name system hierarchy, email addressing, and World Wide Web concepts.",
  topics: [
    "Session Layer",
    "Presentation Layer",
    "Application Layer",
    "DNS (Domain Name System)",
    "Domain Name System Hierarchy",
    "HTTP and HTTPS",
    "Email Systems and Addressing",
    "Email Protocols",
    "FTP (File Transfer Protocol)",
    "World Wide Web (WWW)",
  ],
  content: `
<TOPIC_START index="0" title="Session Layer">
1.0 Session Layer

1.1 Session Layer Overview
• The **session layer** creates and maintains **dialogs** between source and destination applications.
• Responsible for establishing, managing, and terminating communication sessions.
• Operates at **Layer 5 of the OSI model**.
• Provides **synchronization** and **dialog control**.

1.2 Session Layer Functions
The session layer handles:
* Exchange of information to initiate dialogs
* Keeping dialogs active during communication
* Managing session state and synchronization
* Restarting sessions that are disrupted or idle for a long period of time
* Proper termination of sessions

1.3 Session Management
Session management includes:
* Session establishment between applications
* Data transfer coordination
* Session maintenance during communication
* Error recovery and session restoration
* Proper session closure and resource release

1.4 Session Layer Services
Services provided by session layer:
* **Dialog control** (half-duplex or full-duplex)
* **Synchronization** (checkpoints in data stream)
* Session recovery after failures
* Authentication and authorization
* Connection management between applications
<TOPIC_END>

<TOPIC_START index="1" title="Presentation Layer">
2.0 Presentation Layer

2.1 Presentation Layer Overview
• The **presentation layer** operates at **Layer 6 of the OSI model**.
• Responsible for **data formatting and presentation**.
• Ensures data is readable by the receiving system.
• Acts as data translator for the network.

2.2 Three Primary Functions
The presentation layer has three primary functions:
* **Translation** of data
* **Compression** of data
* **Encryption** of data

2.3 Data Translation
Translation function:
* Converts data from application format to network format
* Handles different data encoding schemes (ASCII, EBCDIC, Unicode)
* Ensures compatibility between different systems
* Translates data types and structures
* Performs character code conversion

2.4 Data Compression
Compression function:
* Reduces the number of bits to be transmitted
* Improves transmission efficiency
* Reduces bandwidth requirements
* Can be lossy or lossless compression
* Decompression at receiving end restores original data

2.5 Data Encryption
Encryption function:
* Transforms data into secure format
* Protects sensitive information during transmission
* Ensures data confidentiality and security
* Uses encryption algorithms and keys
* Decryption at receiving end restores readable data
<TOPIC_END>

<TOPIC_START index="2" title="Application Layer">
3.0 Application Layer

3.1 Application Layer Overview
• The **application layer** is closest to the end user.
• Operates at **Layer 7 of the OSI model** (top layer).
• Provides network services directly to end-user applications.
• Interface between applications and the underlying network.

3.2 Application Layer Purpose
Key purposes:
* Network applications enable users to send and receive data with ease
* Acts as interface between applications and underlying network
* Provides services for file transfer, email, web browsing, and more
* Enables communication between software applications

3.3 Application Layer Protocols
• Application layer protocols help exchange data between programs running on source and destination hosts.
• Each protocol designed for specific type of communication.
• Protocols define message formats and rules for data exchange.

3.4 TCP/IP Application Layer
• The **TCP/IP application layer** performs the functions of the upper three layers of the OSI model.
• Combines application, presentation, and session layer functions.
• Simplified layer structure in TCP/IP model.

3.5 Common Application Layer Protocols
Common application layer protocols include:
* **HTTP** (Hypertext Transfer Protocol)
* **HTTPS** (HTTP Secure)
* **FTP** (File Transfer Protocol)
* **TFTP** (Trivial File Transfer Protocol)
* **DNS** (Domain Name System)
* **SMTP** (Simple Mail Transfer Protocol)
* **POP3** (Post Office Protocol version 3)
* **IMAP** (Internet Message Access Protocol)
<TOPIC_END>

<TOPIC_START index="3" title="DNS (Domain Name System)">
4.0 DNS (Domain Name System)

4.1 What is DNS?
• **DNS** is a **host name to IP address translation service**.
• DNS is a **distributed database** implemented in a **hierarchy of name servers**.
• Essential service for internet functionality.
• Allows use of human-readable domain names instead of IP addresses.

4.2 DNS Purpose and Function
DNS functions:
* Translates domain names to IP addresses
* Enables users to access websites using memorable names
* Maintains distributed database of domain name mappings
* Provides name resolution services
* Supports reverse lookups (IP to domain name)

4.3 How DNS Works
DNS operation process:
* User types domain name in web browser
* DNS client sends query to DNS server
* DNS server looks up IP address for domain name
* DNS server returns IP address to client
* Client uses IP address to connect to web server

4.4 DNS on the Internet
• On the Internet, DNS automatically converts between the names we type in our web browser address bar to the IP address of web servers hosting those sites.
• Makes internet navigation user-friendly.
• Eliminates need to remember numeric IP addresses.

4.5 DNS in Organizations
• Larger corporations also use DNS to manage their own company intranet.
• Internal DNS servers for company resources.
• Private domain names for internal services.
* Integration with public DNS for external access.

4.6 DNS in Home Networks
• Home networks use DNS when accessing the Internet.
• Do not use DNS for managing names of home computers.
• Typically use ISP's DNS servers.
• Can configure custom DNS servers (like Google DNS or Cloudflare DNS).
<TOPIC_END>

<TOPIC_START index="4" title="Domain Name System Hierarchy">
5.0 Domain Name System Hierarchy

5.1 Domain Namespace
• Alternatively referred to as a **namespace**, a domain namespace is a name service provided by the Internet for Transmission Control Protocol networks/Internet Protocol (TCP/IP).
• Hierarchical naming system for computers and services.
• Organized in **tree-like structure**.

5.2 Domain Organization
• DNS is broken up into **domains**, a logical organization of computers that exist in a larger network.
• Each level in hierarchy represents a domain level.
• Domains can contain subdomains.

5.3 Domain Hierarchy Structure
The hierarchy of domain naming on the internet: 
**Root Domain** (represented by ".")
* Top of DNS hierarchy
* Root name servers know addresses of TLD servers

**Top-Level Domains (TLDs)**
* Examples: .com, .org, .edu, .gov, .net, .mil
* Country code TLDs: .uk, .jp, .au, .in, .lk
* Generic TLDs: .com, .org, .net

**Second-Level Domains**
* Registered domain names
* Examples: google.com, microsoft.com, university.edu
* Owned by organizations or individuals

**Subdomains**
* Subdivisions of second-level domains
* Examples: mail.google.com, www.microsoft.com
* Created and managed by domain owner

5.4 Domain Name Resolution
Domain resolution process:
* Query starts from right to left in domain name
* Contacts root servers first
* Then TLD servers
* Then authoritative name servers for domain
* Returns IP address to client
<TOPIC_END>

<TOPIC_START index="5" title="HTTP and HTTPS">
6.0 HTTP and HTTPS

6.1 HTTP (Hypertext Transfer Protocol)
HTTP characteristics:
* Is a **request/response protocol**
* Client sends request, server sends response
* **Stateless protocol** (each request independent)
* Foundation of data communication on the web

6.2 HTTP Message Types
HTTP has three common message types:
* **GET**: Requests data from server
* **POST**: Submits data to server
* **PUT**: Updates existing data on server

Additional HTTP methods include DELETE, HEAD, PATCH, OPTIONS.

6.3 HTTP Security Concerns
• HTTP is **not secure**.
• Messages can be intercepted by attackers.
• Data transmitted in **plain text**.
• Vulnerable to eavesdropping and man-in-the-middle attacks.
• No encryption or authentication.

6.4 HTTPS (HTTP Secure)
HTTPS features:
* Uses **authentication** to verify server identity
* Uses **encryption** to secure data transmission
* Protects data from interception and tampering
* Uses **SSL/TLS protocols** for security
* Indicated by padlock icon in browser

6.5 HTTP vs HTTPS Comparison

| Feature | HTTP | HTTPS |
| :--- | :--- | :--- |
| **Security** | Not secure | Secure with encryption |
| **Port** | Port 80 | Port 443 |
| **Data Transfer** | Plain text | Encrypted |
| **Authentication** | No | Yes (SSL/TLS certificates) |
| **Performance** | Faster (less overhead) | Slightly slower (encryption overhead) |
| **SEO Ranking** | Lower priority | Higher priority |
<TOPIC_END>

<TOPIC_START index="6" title="Email Systems and Addressing">
7.0 Email Systems and Addressing

7.1 Email Address Structure
• To deliver mail, a mail handling system must use an addressing system with unique addresses.
• In the Internet, the address consists of **two parts separated by @ sign**.
• Format: **localpart@domainname**

7.2 Email Address Components

**Local Part**
* Appears before @ sign
* Address of the mailbox on the mail server
* Identifies specific user or mailbox
* Examples: john, support, admin

**Domain Name**
* Appears after @ sign
* The domain name of the mail server
* Identifies the mail server handling the email
* Examples: gmail.com, company.com, university.edu

7.3 Local Part Details
• The local part defines the name of a special file called the **user mailbox**.
• All mail received for a user is stored in the mailbox.
• Retrieved by the message access agent.
• Can contain letters, numbers, and some special characters.

7.4 Domain Name in Email
• The second part of the address is the domain name part.
• An organization usually selects one or more hosts to receive and send email.
• The hosts are sometimes called **mail servers or mail exchangers**.
• The domain name assigned to each mail exchanger either comes from the DNS database or is a logical name (for example, the name of the organization).

7.5 Email Address Examples
Valid email address formats:
* user@example.com
* john.doe@company.org
* support@helpdesk.university.edu
* admin123@mail.service.com
<TOPIC_END>

<TOPIC_START index="7" title="Email Protocols">
8.0 Email Protocols

8.1 SMTP (Simple Mail Transfer Protocol)

SMTP Overview:
* **SMTP** stands for Simple Mail Transfer Protocol
* **Connection-oriented** application layer protocol
* Used to **send and receive** email messages
* Introduced in 1982 by RFC 821
* Last updated in 2008 by RFC 5321

SMTP Usage:
* Mail servers and mail transfer agents use SMTP to both send and receive messages
* User-level applications use it **only for sending messages**
* Default port: **25** (or **587** for submission)
* **Push protocol** (sender initiates transfer)

8.2 POP3 (Post Office Protocol Version 3)

POP3 Overview:
* Acronym for **Post Office Protocol Version 3**
* Application layer protocol used by email clients to **retrieve** email messages
* Works over TCP/IP network
* Simple protocol with limited functionality

POP3 Characteristics:
* POP3 is a very **simple protocol** to implement but that limits its usage
* POP3 supports only **one mail server for each mailbox**
* **Downloads** emails from server to client
* Typically **deletes emails from server** after download
* Default port: **110** (or **995** for secure POP3)

POP3 Limitations:
* No synchronization across multiple devices
* Limited folder management
* Cannot access same emails from multiple clients
* Offline-focused protocol

8.3 IMAP (Internet Message Access Protocol)

IMAP Overview:
* **IMAP** stands for Internet Message Access Protocol
* Defined by RFC 3501
* Enables email clients to **retrieve and manage** email messages from mail servers over TCP/IP connection
* More advanced than POP3

IMAP Features:
* Designed to retrieve messages from **multiple mail servers**
* **Keeps emails on server** (synchronization)
* Supports multiple folders and mailboxes
* Allows access from **multiple devices**
* Online and offline modes supported
* Default port: **143** (or **993** for secure IMAP)

IMAP Advantages:
* All modern email clients and servers support IMAP
* Examples: Gmail, Outlook, Yahoo Mail
* Better for users with multiple devices
* Centralized email management

8.4 Email Protocol Comparison

| Feature | SMTP | POP3 | IMAP |
| :--- | :--- | :--- | :--- |
| **Purpose** | Send email | Retrieve email | Retrieve and manage email |
| **Direction** | Client to server | Server to client | Server to client |
| **Storage** | N/A | Local (downloads) | Server (synchronizes) |
| **Multiple Devices** | N/A | Poor support | Excellent support |
| **Complexity** | Moderate | Simple | Complex |
| **Port** | 25/587 | 110/995 | 143/993 |
<TOPIC_END>

<TOPIC_START index="8" title="FTP (File Transfer Protocol)">
9.0 FTP (File Transfer Protocol)

9.1 FTP Overview
• Acronym for **File Transfer Protocol**.
• Application layer protocol for **transferring files** between systems.
• One of the **oldest internet protocols**.
• Uses **client-server model**.

9.2 Benefits of Using FTP
Using FTP to transfer files is helpful in these ways:
* Easily transfers files between two different networks
* Can resume file transfer sessions even if connection is dropped (if protocol is configured appropriately)
* Enables collaboration between geographically separated teams
* Supports large file transfers

9.3 FTP Features
Key FTP features:
* **Bidirectional file transfer** (upload and download)
* Directory navigation on remote server
* File management operations (delete, rename, create directories)
* Authentication with username and password
* **Anonymous FTP access** for public files

9.4 FTP Operation
• Uses **two separate connections**: **control connection** and **data connection**.
• Control connection (**port 21**): For commands and responses.
• Data connection (**port 20**): For actual file transfer.
• Separate channels improve efficiency and security.

9.5 FTP Modes
FTP transfer modes:
* **Active mode**: Server initiates data connection to client
* **Passive mode**: Client initiates both connections (better for firewalls)

9.6 FTP Security Considerations
• Standard FTP transmits data in **plain text**.
• Usernames and passwords sent **unencrypted**.
• Vulnerable to interception.
• Secure alternatives: **SFTP** (SSH File Transfer Protocol), **FTPS** (FTP Secure).
<TOPIC_END>

<TOPIC_START index="9" title="World Wide Web (WWW)">
10.0 World Wide Web (WWW)

10.1 WWW Development
• Developed in the 1980s by **Tim Berners-Lee at CERN**, Switzerland.
• Revolutionary invention that changed information sharing.
• Proposed in 1989, implemented in 1990.
• Made internet accessible to general public.

10.2 WWW Structure
• Complex web of websites and web pages connected together through **hypertexts**.
• Interconnected system of documents and resources.
• Accessible via the internet using web browsers.
• Based on **client-server architecture**.

10.3 Hypertext Concept
• **Hypertext**: A word or group of words linking to another web page of the same or different website.
• Allows **non-linear navigation** through information.
• Fundamental concept enabling web interconnectivity.
• Hyperlinks connect related content across the web.

10.4 Evolution from ARPANET to WWW
• Evolution from ARPANET to WWW was possible due to many new achievements.
• Contributions by researchers and computer scientists all over the world.
• Key technologies: TCP/IP, DNS, HTTP, HTML.
• Transformed internet from research network to global information system.

10.5 WWW Key Components
Essential WWW components:
* Web browsers: Software to access and display web pages
* Web servers: Computers hosting websites and serving content
* HTTP/HTTPS: Protocols for communication
* HTML: Language for creating web pages
* URLs: Addresses for locating resources
* DNS: System for resolving domain names

10.6 WWW vs Internet
• **Internet**: Global network of interconnected networks (infrastructure).
• **WWW**: Service that operates on the internet (application).
* Internet provides the connection
* WWW provides the content and interface
<TOPIC_END>
`
};