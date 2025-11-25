export const ApplicationData = [
  {
    id: 1,
    question: `<b>a)</b> Describe the <b>Session Layer</b> and list four (04) major functions it performs in network communication.<br><br><b>b)</b> Explain why session management is important for maintaining reliable communication between applications.`,
    modelAnswer: `<b>a) Session Layer Description and Functions:</b><br><br>

<b>Overview:</b><br>
The Session Layer is responsible for creating and maintaining dialogs between source and destination applications. It manages the sessions (connections) between applications running on different hosts.<br><br>

<b>Four Major Functions:</b><br><br>

<ol>
<li><b>Dialog Creation and Maintenance:</b> Creates and maintains dialogs between source and destination applications, establishing communication channels</li><br>

<li><b>Information Exchange Handling:</b> Handles the exchange of information to initiate dialogs, managing the setup and parameters of communication sessions</li><br>

<li><b>Keeping Dialogs Active:</b> Keeps dialogs active during the communication process, ensuring continuous connection between applications</li><br>

<li><b>Session Recovery:</b> Restarts sessions that are disrupted or idle for a long period of time, providing resilience and continuity in communication</li>
</ol><br>

<b>b) Importance of Session Management:</b><br><br>

<ul>
<li><b>Communication Continuity:</b> Ensures that long-running communications can continue even if there are temporary disruptions</li>
<li><b>Resource Management:</b> Efficiently manages system resources by tracking active sessions and cleaning up idle ones</li>
<li><b>Synchronization:</b> Provides checkpoints in data streams, allowing recovery from the last good state rather than starting over</li>
<li><b>Dialog Control:</b> Manages turn-taking in communications, preventing conflicts when both sides try to send simultaneously</li>
<li><b>Recovery Mechanism:</b> Enables applications to resume communication after network failures without losing all progress</li>
<li><b>State Management:</b> Maintains the state of ongoing communications, tracking what has been sent and received</li>
</ul>`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `Describe the <b>Presentation Layer</b> and explain its three (03) primary functions. For each function, provide an example of how it is used in practice.`,
    modelAnswer: `<b>Presentation Layer Overview:</b><br>
The Presentation Layer is responsible for data formatting, translation, and preparation for the Application Layer. It ensures that data sent from one system can be understood by another, regardless of their internal data representations.<br><br>

<b>Three Primary Functions:</b><br><br>

<b>1. Data Translation:</b><br>
<ul>
<li><b>Function:</b> Converts data formats between different systems to ensure compatibility</li>
<li><b>Purpose:</b> Different computer systems may use different encoding schemes, character sets, or data representations</li>
<li><b>How it Works:</b> Translates data from the sender's format to a standardized network format, then from network format to the receiver's format</li>
</ul><br>

<b>Examples:</b><br>
<ul>
<li><b>Character Encoding:</b> Converting between ASCII, EBCDIC, and Unicode character sets</li>
<li><b>Data Type Conversion:</b> Translating between different integer representations (big-endian vs. little-endian)</li>
<li><b>File Format Translation:</b> Converting between different document formats (e.g., Word to PDF)</li>
<li><b>Number Representation:</b> Converting between different floating-point formats used by different systems</li>
</ul><br>

<b>2. Data Compression:</b><br>
<ul>
<li><b>Function:</b> Reduces data size for efficient transmission over the network</li>
<li><b>Purpose:</b> Minimizes bandwidth usage and speeds up data transfer</li>
<li><b>How it Works:</b> Uses compression algorithms to reduce redundancy in data before transmission</li>
</ul><br>

<b>Examples:</b><br>
<ul>
<li><b>Video Streaming:</b> Compressing video data using codecs like H.264 or H.265 to reduce file size while maintaining quality</li>
<li><b>File Transfer:</b> Using ZIP or GZIP compression to reduce file sizes before sending over the network</li>
<li><b>Web Content:</b> Compressing HTML, CSS, and JavaScript files before sending to web browsers</li>
<li><b>Image Transmission:</b> Using JPEG compression for photographs or PNG compression for graphics</li>
<li><b>Voice Communication:</b> Compressing audio in VoIP calls to reduce bandwidth requirements</li>
</ul><br>

<b>3. Data Encryption:</b><br>
<ul>
<li><b>Function:</b> Secures data through encryption to protect confidentiality and privacy</li>
<li><b>Purpose:</b> Ensures that data cannot be read by unauthorized parties during transmission</li>
<li><b>How it Works:</b> Converts plaintext data into ciphertext using encryption algorithms before transmission</li>
</ul><br>

<b>Examples:</b><br>
<ul>
<li><b>Secure Web Browsing:</b> Using SSL/TLS encryption in HTTPS to protect sensitive information like passwords and credit card numbers</li>
<li><b>Email Security:</b> Encrypting email messages to prevent unauthorized reading during transmission</li>
<li><b>VPN Connections:</b> Encrypting all data transmitted through Virtual Private Networks</li>
<li><b>Online Banking:</b> Encrypting financial transactions to protect account information</li>
<li><b>Secure File Transfer:</b> Using SFTP (Secure FTP) to encrypt files during transfer</li>
</ul><br>

<b>Summary:</b><br>
The Presentation Layer acts as a translator, compressor, and security guard for data, ensuring that information is formatted correctly, transmitted efficiently, and kept secure during network communication.`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `<b>a)</b> Define the <b>Application Layer</b> and explain its relationship to end users.<br><br><b>b)</b> Describe the relationship between the TCP/IP Application Layer and the OSI model.<br><br><b>c)</b> List five (05) common protocols that operate at the Application Layer.`,
    modelAnswer: `<b>a) Application Layer Definition:</b><br><br>

<b>Definition:</b><br>
The Application Layer is the topmost layer in the network model and is closest to the end user. It provides network applications that enable users to send and receive data with ease.<br><br>

<b>Relationship to End Users:</b><br>
<ul>
<li><b>User Interface:</b> Acts as the interface between user applications and the underlying network infrastructure</li>
<li><b>Direct Interaction:</b> This is the layer that users directly interact with through applications like web browsers, email clients, and file transfer programs</li>
<li><b>Service Provider:</b> Provides network services directly to end-user applications</li>
<li><b>Abstraction:</b> Hides the complexity of lower layers from users, making network access simple and intuitive</li>
</ul><br>

<b>b) TCP/IP Application Layer vs OSI Model:</b><br><br>

<b>Key Relationship:</b><br>
The TCP/IP Application Layer performs the functions of the upper three layers of the OSI model combined.<br><br>

<b>OSI Layers Encompassed:</b><br>
<ul>
<li><b>Application Layer (OSI Layer 7):</b> Provides network services to applications</li>
<li><b>Presentation Layer (OSI Layer 6):</b> Data formatting, translation, encryption</li>
<li><b>Session Layer (OSI Layer 5):</b> Dialog control and session management</li>
</ul><br>

<b>Why the Difference:</b><br>
<ul>
<li>TCP/IP model is more practical and simplified compared to the theoretical OSI model</li>
<li>In practice, the functions of these three OSI layers are often handled together by applications</li>
<li>The TCP/IP model reflects how protocols are actually implemented</li>
</ul><br>

<b>Functionality:</b><br>
Application layer protocols help exchange data between programs running on the source and destination hosts, handling all aspects of user-level communication.<br><br>

<b>c) Five Common Application Layer Protocols:</b><br><br>

<ol>
<li><b>HTTP (HyperText Transfer Protocol):</b>
<ul>
<li>Used for transferring web pages and web content</li>
<li>Foundation of data communication on the World Wide Web</li>
<li>Request/response protocol between clients and servers</li>
</ul>
</li><br>

<li><b>FTP (File Transfer Protocol):</b>
<ul>
<li>Used for transferring files between computers on a network</li>
<li>Supports authentication and directory navigation</li>
<li>Enables uploading and downloading of files</li>
</ul>
</li><br>

<li><b>TFTP (Trivial File Transfer Protocol):</b>
<ul>
<li>Simplified version of FTP</li>
<li>Used for simple file transfers with minimal overhead</li>
<li>Often used for booting diskless workstations</li>
</ul>
</li><br>

<li><b>DNS (Domain Name System):</b>
<ul>
<li>Translates domain names to IP addresses</li>
<li>Essential for locating resources on the internet</li>
<li>Distributed database system</li>
</ul>
</li><br>

<li><b>SMTP (Simple Mail Transfer Protocol):</b>
<ul>
<li>Used for sending email messages between servers</li>
<li>Handles email transmission and routing</li>
<li>Works with other protocols for complete email service</li>
</ul>
</li>
</ol>`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `<b>a)</b> Explain what <b>DNS (Domain Name System)</b> is and describe its primary function.<br><br><b>b)</b> Describe the structure of DNS as a distributed database system.<br><br><b>c)</b> Explain how DNS is used differently in corporate networks versus home networks.`,
    modelAnswer: `<b>a) DNS Definition and Primary Function:</b><br><br>

<b>What is DNS:</b><br>
DNS (Domain Name System) is a host name to IP address translation service. It is a distributed database implemented in a hierarchy of name servers that converts human-readable domain names into numerical IP addresses that computers use to communicate.<br><br>

<b>Primary Function:</b><br>
<ul>
<li><b>Name Resolution:</b> Translates domain names (like www.example.com) into IP addresses (like 192.168.1.1)</li>
<li><b>Automated Conversion:</b> On the Internet, DNS automatically converts between the names we type in our web browser address bar to the IP addresses of web servers hosting those sites</li>
<li><b>Reverse Lookup:</b> Can also translate IP addresses back to domain names</li>
<li><b>Service Location:</b> Helps locate mail servers, name servers, and other services</li>
</ul><br>

<b>Why DNS is Important:</b><br>
Without DNS, users would need to remember numerical IP addresses instead of easy-to-remember domain names. For example, typing "142.250.185.46" instead of "www.google.com".<br><br>

<b>b) DNS Structure as Distributed Database:</b><br><br>

<b>Distributed Database System:</b><br>
DNS is implemented as a distributed database, meaning the information is not stored in one central location but is spread across many name servers worldwide.<br><br>

<b>Hierarchical Structure:</b><br>
<ul>
<li><b>Domain Namespace:</b> Alternatively referred to as a namespace, a domain namespace is a name service provided by the Internet for TCP/IP networks</li>
<li><b>Logical Organization:</b> DNS is broken up into domains, which are logical organizations of computers that exist in a larger network</li>
<li><b>Hierarchy of Naming:</b> Follows a hierarchy of domain naming on the internet from top-level domains (TLD) down to subdomains</li>
</ul><br>

<b>DNS Hierarchy Levels:</b><br>
<ol>
<li><b>Root Level:</b> The top of the DNS hierarchy (represented by ".")</li>
<li><b>Top-Level Domains (TLDs):</b> Such as .com, .org, .net, .edu, country codes like .uk, .lk</li>
<li><b>Second-Level Domains:</b> The main domain name (e.g., "example" in example.com)</li>
<li><b>Subdomains:</b> Further divisions (e.g., "mail" in mail.example.com)</li>
</ol><br>

<b>Benefits of Distribution:</b><br>
<ul>
<li>No single point of failure</li>
<li>Improved performance through caching</li>
<li>Scalability to handle billions of domain names</li>
<li>Local control over domain information</li>
</ul><br>

<b>c) DNS Usage: Corporate Networks vs Home Networks:</b><br><br>

<b>Corporate Networks:</b><br>
<ul>
<li><b>Internal DNS Management:</b> Larger corporations also use DNS to manage their own company intranet</li>
<li><b>Private Name Resolution:</b> Companies run their own DNS servers to resolve internal hostnames</li>
<li><b>Internal Services:</b> DNS helps employees locate internal resources like file servers, printers, and databases</li>
<li><b>Security:</b> Corporate DNS can implement security policies and filtering</li>
<li><b>Example:</b> An employee typing "fileserver" can reach the company's file server without knowing its IP address</li>
<li><b>Dual Role:</b> Corporate DNS handles both internal names and external internet names</li>
</ul><br>

<b>Home Networks:</b><br>
<ul>
<li><b>Internet Access Only:</b> Home networks use DNS when accessing the Internet but do not use it for managing the names of home computers</li>
<li><b>ISP DNS Servers:</b> Home users typically use DNS servers provided by their Internet Service Provider (ISP)</li>
<li><b>No Internal Management:</b> Home computers are usually accessed by direct IP addresses or simple names without DNS</li>
<li><b>Simple Configuration:</b> DNS settings are usually automatically configured via DHCP</li>
<li><b>External Resolution Only:</b> Only used to resolve public internet domain names, not local device names</li>
</ul><br>

<b>Key Difference:</b><br>
Corporate networks use DNS for both internal resource management and external internet access, while home networks only use DNS for external internet access and rely on simpler methods for local device identification.`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `<b>a)</b> Compare <b>HTTP</b> and <b>HTTPS</b> protocols, explaining the key differences between them.<br><br><b>b)</b> List and explain the three (03) common HTTP message types.<br><br><b>c)</b> Explain why HTTPS is important for modern web applications.`,
    modelAnswer: `<b>a) HTTP vs HTTPS Comparison:</b><br><br>

<b>HTTP (HyperText Transfer Protocol):</b><br>
<ul>
<li><b>Protocol Type:</b> Request/response protocol for transmitting hypertext</li>
<li><b>Security:</b> Not secure - messages can be intercepted and read by anyone</li>
<li><b>Data Transmission:</b> Data is sent in plain text format</li>
<li><b>Port:</b> Uses port 80 by default</li>
<li><b>Speed:</b> Slightly faster due to no encryption overhead</li>
<li><b>URL Prefix:</b> Begins with "http://"</li>
</ul><br>

<b>HTTPS (HTTP Secure):</b><br>
<ul>
<li><b>Protocol Type:</b> Secure version of HTTP</li>
<li><b>Security:</b> Uses authentication and encryption to secure data</li>
<li><b>Data Transmission:</b> Data is encrypted before transmission</li>
<li><b>Port:</b> Uses port 443 by default</li>
<li><b>Speed:</b> Slightly slower due to encryption/decryption overhead</li>
<li><b>URL Prefix:</b> Begins with "https://"</li>
<li><b>Certificate:</b> Requires SSL/TLS certificate for authentication</li>
</ul><br>

<b>Key Differences:</b><br>
<table border="1" cellpadding="6" cellspacing="0">
<tr>
<th><b>Feature</b></th>
<th><b>HTTP</b></th>
<th><b>HTTPS</b></th>
</tr>
<tr>
<td><b>Security</b></td>
<td>Not secure</td>
<td>Secure with encryption</td>
</tr>
<tr>
<td><b>Data Protection</b></td>
<td>Can be intercepted</td>
<td>Encrypted and protected</td>
</tr>
<tr>
<td><b>Authentication</b></td>
<td>No authentication</td>
<td>Server authentication via certificates</td>
</tr>
<tr>
<td><b>Use Case</b></td>
<td>Public, non-sensitive content</td>
<td>Sensitive data, login pages, transactions</td>
</tr>
</table><br>

<b>b) Three Common HTTP Message Types:</b><br><br>

<b>1. GET:</b><br>
<ul>
<li><b>Purpose:</b> Requests data from a specified resource</li>
<li><b>Function:</b> Retrieves information from the server without modifying it</li>
<li><b>Characteristics:</b>
<ul>
<li>Data is sent in the URL (visible in address bar)</li>
<li>Can be cached and bookmarked</li>
<li>Has length restrictions</li>
<li>Should not be used for sensitive data</li>
</ul>
</li>
<li><b>Example:</b> Loading a web page, searching for information, fetching images</li>
<li><b>Usage:</b> GET /index.html HTTP/1.1</li>
</ul><br>

<b>2. POST:</b><br>
<ul>
<li><b>Purpose:</b> Sends data to the server to create or update a resource</li>
<li><b>Function:</b> Submits data to be processed by the server</li>
<li><b>Characteristics:</b>
<ul>
<li>Data is sent in the message body (not visible in URL)</li>
<li>Not cached or bookmarked</li>
<li>No length restrictions</li>
<li>More secure for sensitive data</li>
</ul>
</li>
<li><b>Example:</b> Submitting forms, uploading files, posting comments, user login</li>
<li><b>Usage:</b> POST /submit-form HTTP/1.1</li>
</ul><br>

<b>3. PUT:</b><br>
<ul>
<li><b>Purpose:</b> Updates or replaces an existing resource on the server</li>
<li><b>Function:</b> Sends data to update a complete resource</li>
<li><b>Characteristics:</b>
<ul>
<li>Idempotent - multiple identical requests have the same effect as one</li>
<li>Replaces the entire resource</li>
<li>Data sent in message body</li>
<li>Used for updates to existing resources</li>
</ul>
</li>
<li><b>Example:</b> Updating user profile information, replacing a file on the server</li>
<li><b>Usage:</b> PUT /user/123 HTTP/1.1</li>
</ul><br>

<b>c) Why HTTPS is Important for Modern Web Applications:</b><br><br>

<b>Security Benefits:</b><br>
<ol>
<li><b>Data Protection:</b>
<ul>
<li>Encrypts all communication between browser and server</li>
<li>Prevents eavesdropping and man-in-the-middle attacks</li>
<li>Protects sensitive information like passwords, credit card numbers, and personal data</li>
</ul>
</li><br>

<li><b>Authentication:</b>
<ul>
<li>Verifies that users are communicating with the intended website</li>
<li>Prevents phishing attacks and impersonation</li>
<li>SSL/TLS certificates confirm server identity</li>
</ul>
</li><br>

<li><b>Data Integrity:</b>
<ul>
<li>Ensures data is not modified during transmission</li>
<li>Detects any tampering or corruption</li>
<li>Guarantees that received data matches what was sent</li>
</ul>
</li><br>

<li><b>User Trust:</b>
<ul>
<li>Browser displays padlock icon for HTTPS sites</li>
<li>Users are more confident sharing information</li>
<li>Modern browsers warn users about non-HTTPS sites</li>
</ul>
</li><br>

<li><b>SEO and Rankings:</b>
<ul>
<li>Search engines like Google favor HTTPS sites in rankings</li>
<li>Improves website visibility and traffic</li>
<li>Many browsers mark HTTP sites as "Not Secure"</li>
</ul>
</li><br>

<li><b>Compliance Requirements:</b>
<ul>
<li>Required for handling payment information (PCI DSS compliance)</li>
<li>Necessary for GDPR and other privacy regulations</li>
<li>Industry standards mandate HTTPS for sensitive operations</li>
</ul>
</li><br>

<li><b>Modern Features:</b>
<ul>
<li>Many new web features require HTTPS (geolocation, camera access, etc.)</li>
<li>Progressive Web Apps require HTTPS</li>
<li>HTTP/2 and HTTP/3 protocols require HTTPS for better performance</li>
</ul>
</li>
</ol><br>

<b>Conclusion:</b><br>
HTTPS has become the standard for all websites, not just those handling sensitive data. It provides essential security, builds user trust, and is increasingly required by browsers, search engines, and regulatory frameworks.`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `<b>a)</b> Describe the structure of an <b>Email Address</b> and explain its two main components.<br><br><b>b)</b> Explain the purpose of each component (Local Part and Domain Name) in email addressing.<br><br><b>c)</b> Provide an example email address and break down each component.`,
    modelAnswer: `<b>a) Email Address Structure:</b><br><br>

<b>General Format:</b><br>
An email address consists of two parts separated by the @ (at) sign:<br><br>

<div style="text-align: center; font-size: 18px; font-family: monospace; margin: 15px 0;">
<b>[Local Part] @ [Domain Name]</b>
</div><br>

<b>Two Main Components:</b><br>
<ol>
<li><b>Local Part:</b> The portion before the @ symbol that identifies the specific mailbox</li>
<li><b>Domain Name:</b> The portion after the @ symbol that identifies the mail server</li>
</ol><br>

<b>Purpose of Email Addressing:</b><br>
To deliver mail, a mail handling system must use an addressing system with unique addresses. In the Internet, this two-part address structure ensures that each email can be routed to the correct mail server and then delivered to the correct recipient's mailbox.<br><br>

<b>b) Purpose of Each Component:</b><br><br>

<b>1. Local Part (Left side of @):</b><br><br>

<b>Definition and Purpose:</b><br>
<ul>
<li>Represents the address of the mailbox on the mail server</li>
<li>Defines the name of a special file called the user mailbox</li>
<li>Identifies the specific recipient within the mail server</li>
</ul><br>

<b>Functions:</b><br>
<ul>
<li><b>Mailbox Identification:</b> Points to where all mail received for a user is stored</li>
<li><b>User Distinction:</b> Differentiates between multiple users on the same mail server</li>
<li><b>Mail Storage:</b> The mailbox stores messages for retrieval by the message access agent</li>
<li><b>Unique within Domain:</b> Must be unique within the specific domain but can be duplicated across different domains</li>
</ul><br>

<b>Characteristics:</b><br>
<ul>
<li>Can contain letters, numbers, and certain special characters (., _, -, +)</li>
<li>Case-insensitive in most systems (though technically case-sensitive by standard)</li>
<li>Can include dots (.) to create structured naming</li>
<li>Cannot contain spaces or special characters like @, <, >, etc.</li>
</ul><br>

<b>2. Domain Name (Right side of @):</b><br><br>

<b>Definition and Purpose:</b><br>
<ul>
<li>The second part of the address that identifies the mail server</li>
<li>Specifies which mail server is responsible for handling email for this address</li>
<li>Represents the destination network location</li>
</ul><br>

<b>Functions:</b><br>
<ul>
<li><b>Mail Server Identification:</b> An organization usually selects one or more hosts to receive and send email (mail servers)</li>
<li><b>Routing Information:</b> Tells the email system where to deliver the message</li>
<li><b>DNS Resolution:</b> The domain name assigned to each mail exchanger comes from the DNS database or is a logical name (e.g., the name of the organization)</li>
<li><b>Organization Identity:</b> Often represents the company, institution, or service provider</li>
</ul><br>

<b>Characteristics:</b><br>
<ul>
<li>Must be a valid domain name registered in DNS</li>
<li>Can include subdomains (e.g., mail.example.com)</li>
<li>Case-insensitive</li>
<li>Must contain at least one dot (.) separating labels</li>
<li>Typically ends with a top-level domain (.com, .org, .edu, etc.)</li>
</ul><br>

<b>c) Example Email Address Breakdown:</b><br><br>

<b>Example: john.doe@company.example.com</b><br><br>

<b>Component Analysis:</b><br><br>

<b>Local Part: "john.doe"</b><br>
<ul>
<li><b>Function:</b> Identifies the specific user's mailbox</li>
<li><b>Structure:</b> Uses a dot to separate first and last name</li>
<li><b>Purpose:</b> This is the mailbox where emails for John Doe are stored</li>
<li><b>Retrieval:</b> When John Doe checks his email, the system accesses this specific mailbox file</li>
<li><b>Uniqueness:</b> Unique within company.example.com domain</li>
</ul><br>

<b>@ Symbol:</b><br>
<ul>
<li>Separator between local part and domain name</li>
<li>Pronounced "at"</li>
<li>Indicates "mailbox at mail server"</li>
</ul><br>

<b>Domain Name: "company.example.com"</b><br>
<ul>
<li><b>Subdomain:</b> "company" - identifies specific division or mail server</li>
<li><b>Second-level domain:</b> "example" - the organization's main domain</li>
<li><b>Top-level domain:</b> "com" - commercial organization</li>
<li><b>Purpose:</b> Identifies the mail server responsible for handling email</li>
<li><b>DNS Resolution:</b> DNS looks up the MX (Mail Exchange) records for this domain to find the actual mail server IP address</li>
<li><b>Mail Server Location:</b> Points to the physical or virtual server that will receive and store the email</li>
</ul><br>

<b>Complete Flow:</b><br>
<ol>
<li>Email is sent to john.doe@company.example.com</li>
<li>Sending mail server queries DNS for MX records of company.example.com</li>
<li>DNS returns the IP address of the mail server for company.example.com</li>
<li>Email is routed to that mail server</li>
<li>Mail server receives the email and stores it in the "john.doe" mailbox</li>
<li>When John Doe logs in, his email client retrieves messages from this mailbox</li>
</ol><br>

<b>Additional Examples:</b><br>
<ul>
<li><b>support@helpdesk.org</b> - Support mailbox at helpdesk organization</li>
<li><b>admin_2024@university.edu</b> - Administrative mailbox with year identifier at educational institution</li>
<li><b>sales+newsletter@business.com</b> - Sales mailbox with tag for newsletter filtering</li>
</ul>`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `Compare the three main email protocols: <b>SMTP</b>, <b>POP3</b>, and <b>IMAP</b>. For each protocol, describe:<br>
<b>a)</b> Its primary function<br>
<b>b)</b> When and how it is used<br>
<b>c)</b> Key characteristics and limitations`,
    modelAnswer: `<b>Email Protocols Comparison:</b><br><br>

<b>1. SMTP (Simple Mail Transfer Protocol):</b><br><br>

<b>a) Primary Function:</b><br>
<ul>
<li>Used to <b>send and transmit</b> email messages between mail servers</li>
<li>Handles the delivery of outgoing email</li>
<li>Responsible for routing email across the internet</li>
</ul><br>

<b>b) When and How It Is Used:</b><br>
<ul>
<li><b>Mail Server Communication:</b> Mail servers and mail transfer agents use SMTP to both send and receive messages from other mail servers</li>
<li><b>User-Level Applications:</b> Email clients use SMTP only for sending messages (not receiving)</li>
<li><b>Sending Process:</b> When you click "Send" in your email client, SMTP takes over to deliver the message</li>
<li><b>Server-to-Server:</b> SMTP relays messages between mail servers until reaching the destination</li>
</ul><br>

<b>c) Key Characteristics:</b><br>
<ul>
<li><b>Connection-oriented:</b> Application layer protocol that establishes connections</li>
<li><b>Push Protocol:</b> Pushes email from sender to receiver</li>
<li><b>Port:</b> Uses port 25 (standard), port 587 (submission), or port 465 (secure)</li>
<li><b>History:</b> Introduced in 1982 by RFC 821, last updated in 2008 by RFC 5321</li>
<li><b>Text-based:</b> Uses text commands for communication</li>
<li><b>Limitations:</b>
<ul>
  >
<li>Only handles sending, not receiving for end users</li>
<li>Cannot retrieve messages from server</li>
<li>Requires other protocols (POP3 or IMAP) for message retrieval</li>
</ul>
</ul><br><br>

<b>2. POP3 (Post Office Protocol Version 3):</b><br><br>

<b>a) Primary Function:</b><br>
<ul>
<li>Used by email clients to <b>retrieve and download</b> email messages from mail servers</li>
<li>Provides access to stored email on the server</li>
<li>Focuses on downloading messages to local device</li>
</ul><br>

<b>b) When and How It Is Used:</b><br>
<ul>
<li><b>Email Retrieval:</b> When you open your email client, POP3 connects to the server to download new messages</li>
<li><b>Single Device Access:</b> Designed for accessing email from one primary device</li>
<li><b>Offline Access:</b> Downloads emails for offline reading</li>
<li><b>Default Behavior:</b> Typically downloads and deletes messages from server (though can be configured to keep copies)</li>
</ul><br>

<b>c) Key Characteristics:</b><br>
<ul>
<li><b>Application Layer Protocol:</b> Works over TCP/IP network connection</li>
<li><b>Port:</b> Uses port 110 (standard) or port 995 (secure with SSL/TLS)</li>
<li><b>Simple Implementation:</b> Very simple protocol to implement</li>
<li><b>Download and Delete:</b> Traditional behavior is to remove messages from server after download</li>
</ul><br>

<b>Limitations:</b><br>
<ul>
<li><b>Single Mailbox:</b> Supports only one mail server for each mailbox</li>
<li><b>Limited Functionality:</b> Simplicity limits its usage and features</li>
<li><b>No Synchronization:</b> Does not sync messages across multiple devices</li>
<li><b>No Server-Side Management:</b> Cannot manage folders or organize email on the server</li>
<li><b>No Selective Download:</b> Cannot preview or selectively download messages</li>
<li><b>Poor Multi-Device Support:</b> Messages downloaded on one device are not accessible on others</li>
</ul><br><br>

<b>3. IMAP (Internet Message Access Protocol):</b><br><br>

<b>a) Primary Function:</b><br>
<ul>
<li>Enables email clients to <b>retrieve and manage</b> email messages from mail servers</li>
<li>Provides server-side email management</li>
<li>Maintains email synchronization across multiple devices</li>
</ul><br>

<b>b) When and How It Is Used:</b><br>
<ul>
<li><b>Email Access:</b> Email clients retrieve messages from mail servers over TCP/IP connection</li>
<li><b>Multiple Device Scenarios:</b> Designed to retrieve messages from multiple mail servers and maintain consistency</li>
<li><b>Server-Side Storage:</b> Keeps messages on the server while allowing access from any device</li>
<li><b>Modern Email Systems:</b> All modern email clients and servers like Gmail, Outlook, and Yahoo Mail support IMAP or POP3 protocol</li>
</ul><br>

<b>c) Key Characteristics:</b><br>
<ul>
<li><b>Standard:</b> Defined by RFC 3501</li>
<li><b>Port:</b> Uses port 143 (standard) or port 993 (secure with SSL/TLS)</li>
<li><b>Synchronization:</b> Keeps email synchronized across all devices</li>
<li><b>Server-Side Storage:</b> Messages remain on server unless explicitly deleted</li>
<li><b>Folder Management:</b> Supports creating and managing folders on the server</li>
<li><b>Selective Download:</b> Can download message headers first, then full messages on demand</li>
<li><b>Search Capabilities:</b> Can search messages on the server</li>
<li><b>Multiple Mailboxes:</b> Can access multiple mailboxes and folders</li>
<li><b>Status Flags:</b> Tracks message status (read, unread, flagged, etc.) across devices</li>
</ul><br>

<b>Advantages over POP3:</b><br>
<ul>
<li>Better multi-device support</li>
<li>Server-side organization and search</li>
<li>Bandwidth efficient (can download headers only)</li>
<li>Real-time synchronization</li>
<li>Better for modern cloud-based email usage</li>
</ul><br><br>

<b>Summary Comparison Table:</b><br><br>

<table border="1" cellpadding="8" cellspacing="0" width="100%">
<thead>
<tr style="background-color: #e3f2fd;">
<th><b>Feature</b></th>
<th><b>SMTP</b></th>
<th><b>POP3</b></th>
<th><b>IMAP</b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Primary Function</b></td>
<td>Send/transmit email</td>
<td>Download email</td>
<td>Access and manage email</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Direction</b></td>
<td>Outgoing (push)</td>
<td>Incoming (pull)</td>
<td>Incoming (pull)</td>
</tr>
<tr>
<td><b>Message Storage</b></td>
<td>N/A</td>
<td>Downloaded to device</td>
<td>Kept on server</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Multi-Device</b></td>
<td>N/A</td>
<td>Poor support</td>
<td>Excellent support</td>
</tr>
<tr>
<td><b>Synchronization</b></td>
<td>N/A</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Server Management</b></td>
<td>N/A</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td><b>Offline Access</b></td>
<td>N/A</td>
<td>Full access</td>
<td>Limited (cached)</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Complexity</b></td>
<td>Moderate</td>
<td>Simple</td>
<td>Complex</td>
</tr>
<tr>
<td><b>Standard Port</b></td>
<td>25, 587</td>
<td>110</td>
<td>143</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Secure Port</b></td>
<td>465</td>
<td>995</td>
<td>993</td>
</tr>
<tr>
<td><b>Best For</b></td>
<td>Sending email</td>
<td>Single device, offline access</td>
<td>Multiple devices, cloud access</td>
</tr>
</tbody>
</table><br>

<b>Typical Email Setup:</b><br>
Modern email systems use <b>SMTP for sending</b> and <b>IMAP for receiving</b>, providing the best balance of functionality and synchronization across multiple devices.`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `<b>a)</b> Describe <b>FTP (File Transfer Protocol)</b> and explain its primary purpose.<br><br><b>b)</b> List and explain three (03) ways that FTP is helpful for file transfers.<br><br><b>c)</b> Compare FTP with TFTP in terms of features and use cases.`,
    modelAnswer: `<b>a) FTP Description and Purpose:</b><br><br>

<b>Definition:</b><br>
FTP (File Transfer Protocol) is an Application Layer protocol used for transferring files between computers over a TCP/IP network. It provides a reliable method for uploading and downloading files between a client and a server.<br><br>

<b>Primary Purpose:</b><br>
<ul>
<li>Enable reliable file transfer between different systems</li>
<li>Provide a standardized method for file upload and download</li>
<li>Allow users to access, manage, and transfer files on remote servers</li>
<li>Support file sharing and distribution across networks</li>
</ul><br>

<b>Key Features:</b><br>
<ul>
<li>Uses TCP for reliable connection</li>
<li>Supports authentication (username/password)</li>
<li>Allows directory navigation and file management</li>
<li>Can transfer both text and binary files</li>
<li>Uses two connections: control (commands) and data (file transfer)</li>
</ul><br>

<b>b) Three Ways FTP Is Helpful for File Transfers:</b><br><br>

<b>1. Easy Transfer Between Different Networks:</b><br>
<ul>
<li><b>Cross-Platform:</b> Easily transfers files between two different networks regardless of operating system or platform</li>
<li><b>Remote Access:</b> Allows file access and transfer between geographically distant locations</li>
<li><b>Network Independence:</b> Works across different network architectures and configurations</li>
<li><b>Example:</b> A company can transfer files from their office network in New York to a branch office network in London</li>
<li><b>Benefit:</b> Eliminates the need for physical media or compatible network infrastructure</li>
</ul><br>

<b>2. Resume Capability After Connection Drops:</b><br>
<ul>
<li><b>Session Recovery:</b> Can resume file transfer sessions even if connection is dropped (if protocol is configured appropriately)</li>
<li><b>Large File Support:</b> Particularly useful when transferring large files that may take considerable time</li>
<li><b>Reliability:</b> Prevents loss of progress due to temporary network issues</li>
<li><b>Example:</b> If a 5GB file transfer is interrupted at 3GB, FTP can resume from 3GB rather than starting over</li>
<li><b>Benefit:</b> Saves time and bandwidth, especially important for slow or unreliable connections</li>
<li><b>Note:</b> This feature requires proper configuration and support from both client and server</li>
</ul><br>

<b>3. Geographic Collaboration:</b><br>
<ul>
<li><b>Team Collaboration:</b> Enables collaboration between geographically separated teams</li>
<li><b>Centralized Storage:</b> Provides a central location where team members from different locations can upload and download files</li>
<li><b>Version Control:</b> Facilitates sharing of updated files and documents</li>
<li><b>Example:</b> A development team with members in different countries can share code, documents, and resources through an FTP server</li>
<li><b>Benefit:</b> Promotes efficient teamwork across distances, reduces email attachments, and provides organized file storage</li>
<li><b>Use Cases:</b> Software development, content management, document sharing, media distribution</li>
</ul><br>

<b>c) FTP vs TFTP Comparison:</b><br><br>

<b>FTP (File Transfer Protocol):</b><br><br>

<b>Features:</b><br>
<ul>
<li><b>Connection Type:</b> Connection-oriented, uses TCP</li>
<li><b>Reliability:</b> Reliable file transfer with acknowledgements</li>
<li><b>Authentication:</b> Supports username/password authentication</li>
<li><b>Functionality:</b> Full-featured protocol</li>
<li><b>File Management:</b> Supports directory listing, navigation, file deletion, renaming</li>
<li><b>Ports:</b> Uses two ports - Port 21 (control) and Port 20 (data)</li>
<li><b>Complexity:</b> More complex implementation</li>
<li><b>Resume Capability:</b> Can resume interrupted transfers (if configured)</li>
<li><b>Security:</b> Supports secure variants (FTPS, SFTP)</li>
<li><b>Transfer Modes:</b> Supports both ASCII and binary modes</li>
</ul><br>

<b>Use Cases for FTP:</b><br>
<ul>
<li>Website maintenance and updates</li>
<li>Large file transfers requiring reliability</li>
<li>Remote file management</li>
<li>Backup and archiving</li>
<li>Software distribution</li>
<li>Media file transfers</li>
<li>Collaborative file sharing</li>
</ul><br>

<b>TFTP (Trivial File Transfer Protocol):</b><br><br>

<b>Features:</b><br>
<ul>
<li><b>Connection Type:</b> Connectionless, uses UDP</li>
<li><b>Reliability:</b> Less reliable, simpler error handling</li>
<li><b>Authentication:</b> No authentication mechanism</li>
<li><b>Functionality:</b> Minimal features - simple file transfers only</li>
<li><b>File Management:</b> No directory listing or file management capabilities</li>
<li><b>Port:</b> Uses single port - Port 69</li>
<li><b>Complexity:</b> Very simple implementation</li>
<li><b>Resume Capability:</b> No resume capability</li>
<li><b>Security:</b> No built-in security</li>
<li><b>Transfer Mode:</b> Only binary mode (octet)</li>
<li><b>Header Size:</b> Smaller overhead (8-byte UDP header vs 20-byte TCP header minimum)</li>
</ul><br>

<b>Use Cases for TFTP:</b><br>
<ul>
<li>Booting diskless workstations (PXE boot)</li>
<li>Router and switch configuration backups</li>
<li>Firmware updates for network devices</li>
<li>Simple file transfers in local networks</li>
<li>Embedded systems file transfers</li>
<li>IP phone configuration</li>
</ul><br>

<b>Detailed Comparison Table:</b><br><br>

<table border="1" cellpadding="8" cellspacing="0" width="100%">
<thead>
<tr style="background-color: #e3f2fd;">
<th><b>Aspect</b></th>
<th><b>FTP</b></th>
<th><b>TFTP</b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Transport Protocol</b></td>
<td>TCP (connection-oriented)</td>
<td>UDP (connectionless)</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Reliability</b></td>
<td>High (TCP guarantees delivery)</td>
<td>Lower (simpler error handling)</td>
</tr>
<tr>
<td><b>Port Numbers</b></td>
<td>20 (data), 21 (control)</td>
<td>69</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Authentication</b></td>
<td>Yes (username/password)</td>
<td>No</td>
</tr>
<tr>
<td><b>Directory Operations</b></td>
<td>Yes (list, navigate, create)</td>
<td>No</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Implementation</b></td>
<td>Complex</td>
<td>Simple</td>
</tr>
<tr>
<td><b>Overhead</b></td>
<td>Higher</td>
<td>Lower</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Transfer Speed</b></td>
<td>Generally slower (more overhead)</td>
<td>Generally faster (less overhead)</td>
</tr>
<tr>
<td><b>Security</b></td>
<td>Can be secured (FTPS, SFTP)</td>
<td>No security features</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Best For</b></td>
<td>General file transfers, web hosting</td>
<td>Simple local transfers, device booting</td>
</tr>
<tr>
<td><b>File Size</b></td>
<td>No practical limit</td>
<td>Limited (typically <32MB)</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Resume Capability</b></td>
<td>Yes (if configured)</td>
<td>No</td>
</tr>
</tbody>
</table><br>

<b>When to Choose Each:</b><br>
<ul>
<li><b>Choose FTP when:</b> You need reliable file transfers, authentication, file management, large file support, or security</li>
<li><b>Choose TFTP when:</b> You need simple, fast transfers in trusted local networks, booting devices, or minimal resource usage</li>
</ul>`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `<b>a)</b> Describe the <b>World Wide Web (WWW)</b> including its developer and origin.<br><br><b>b)</b> Explain the concept of <b>Hypertext</b> and its role in the World Wide Web.<br><br><b>c)</b> Describe the evolution from ARPANET to the modern World Wide Web.`,
    modelAnswer: `<b>a) World Wide Web Description:</b><br><br>

<b>Developer and Origin:</b><br>
<ul>
<li><b>Developer:</b> Tim Berners-Lee</li>
<li><b>Location:</b> CERN (European Organization for Nuclear Research) in Switzerland</li>
<li><b>Time Period:</b> Developed in the 1980s</li>
<li><b>Purpose:</b> Originally created to facilitate information sharing between scientists at different universities and institutes around the world</li>
</ul><br>

<b>What is the World Wide Web:</b><br>
<ul>
<li><b>Structure:</b> A complex web of websites and web pages connected together through hypertexts</li>
<li><b>Network of Information:</b> An interconnected system of documents and resources accessible via the Internet</li>
<li><b>Global System:</b> Worldwide information space that can be accessed through web browsers</li>
<li><b>Not the Internet:</b> The WWW runs on top of the Internet infrastructure but is not the same as the Internet itself</li>
</ul><br>

<b>Key Components of the Web:</b><br>
<ul>
<li><b>Web Pages:</b> Documents containing text, images, videos, and other content</li>
<li><b>Websites:</b> Collections of related web pages under a common domain</li>
<li><b>Hyperlinks:</b> Connections between web pages and resources</li>
<li><b>Web Browsers:</b> Software to access and display web content</li>
<li><b>Web Servers:</b> Computers that host and serve web pages</li>
<li><b>URLs:</b> Addresses for locating resources on the web</li>
<li><b>HTTP/HTTPS:</b> Protocols for transferring web content</li>
</ul><br>

<b>b) Hypertext Concept and Role:</b><br><br>

<b>Definition:</b><br>
Hypertext is a word or group of words linking to another web page of the same or different website. It provides a non-linear way of accessing information.<br><br>

<b>Characteristics:</b><br>
<ul>
<li><b>Clickable Links:</b> Text or images that users can click to navigate to other content</li>
<li><b>Visual Indication:</b> Typically displayed as underlined, colored text (often blue)</li>
<li><b>Interactive:</b> Changes cursor appearance when hovered over</li>
<li><b>Bidirectional:</b> Can link forward and backward between pages</li>
</ul><br>

<b>Role in the World Wide Web:</b><br><br>

<ol>
<li><b>Navigation:</b>
<ul>
<li>Enables users to move from one web page to another</li>
<li>Creates pathways through information</li>
<li>Allows exploration of related content</li>
<li>Eliminates the need to know exact URLs</li>
</ul>
</li><br>

<li><b>Connectivity:</b>
<ul>
<li>Links together the billions of web pages on the internet</li>
<li>Creates the "web" structure that gives the WWW its name</li>
<li>Connects related information across different websites</li>
<li>Enables cross-referencing and citation</li>
</ul>
</li><br>

<li><b>Information Discovery:</b>
<ul>
<li>Facilitates exploration and discovery of new content</li>
<li>Allows users to follow topics of interest</li>
<li>Supports serendipitous learning</li>
<li>Forms the basis for web searching and indexing</li>
</ul>
</li><br>

<li><b>User Experience:</b>
<ul>
<li>Provides intuitive, non-linear navigation</li>
<li>Enables users to choose their own path through information</li>
<li>Supports different learning and reading styles</li>
<li>Makes the web interactive and engaging</li>
</ul>
</li><br>

<li><b>Web Structure:</b>
<ul>
<li>Forms the foundation of the web's architecture</li>
<li>Enables search engines to crawl and index content</li>
<li>Creates the network effect that makes the web valuable</li>
<li>Allows for dynamic, interconnected content</li>
</ul>
</li>
</ol><br>

<b>Types of Hyperlinks:</b><br>
<ul>
<li><b>Internal Links:</b> Connect pages within the same website</li>
<li><b>External Links:</b> Connect to pages on different websites</li>
<li><b>Anchor Links:</b> Jump to specific sections within a page</li>
<li><b>Download Links:</b> Link to files for download</li>
</ul><br>

<b>c) Evolution from ARPANET to WWW:</b><br><br>

<b>Historical Context:</b><br>
Evolution from ARPANET to the World Wide Web was possible due to many new achievements by researchers and computer scientists all over the world. This transformation represents one of the most significant technological developments in history.<br><br>

<b>Key Stages of Evolution:</b><br><br>

<b>1. ARPANET Era (1960s-1980s):</b><br>
<ul>
<li><b>Purpose:</b> Military and research network funded by the U.S. Department of Defense</li>
<li><b>Launch:</b> 1969 - First operational packet-switching network</li>
<li><b>Limitations:</b>
<ul>
<li>Text-based, command-line interface</li>
<li>Limited to academic and military institutions</li>
<li>Difficult to use for non-technical users</li>
<li>No graphical interface or hypertext</li>
</ul>
</li>
<li><b>Key Achievement:</b> Proved feasibility of packet-switched networks</li>
</ul><br>

<b>2. TCP/IP Standardization (1983):</b><br>
<ul>
<li>ARPANET adopted TCP/IP protocol</li>
<li>Created foundation for internetworking</li>
<li>Enabled different networks to connect</li>
<li>Set stage for global internet</li>
</ul><br>

<b>3. Pre-Web Internet (1980s):</b><br>
<ul>
<li><b>Services Available:</b> Email, FTP, Telnet, Usenet</li>
<li><b>Expansion:</b> Network expanded to universities and research centers worldwide</li>
<li><b>Challenges:</b> Still complex and technical, no unified information system</li>
</ul><br>

<b>4. Birth of the World Wide Web (1989-1991):</b><br>
<ul>
<li><b>1989:</b> Tim Berners-Lee proposes information management system at CERN</li>
<li><b>Key Innovations:</b>
<ul>
<li>HTML (HyperText Markup Language) - for creating web pages</li>
<li>HTTP (HyperText Transfer Protocol) - for transferring web pages</li>
<li>URL (Uniform Resource Locator) - for addressing web resources</li>
<li>First web browser and web server</li>
</ul>
</li>
<li><b>1991:</b> World Wide Web made publicly available</li>
<li><b>Revolutionary Concept:</b> Hypertext-based information system</li>
</ul><br>

<b>5. Web Browser Revolution (1993-1995):</b><br>
<ul>
<li><b>1993:</b> Mosaic browser introduced graphical web browsing</li>
<li><b>1994:</b> Netscape Navigator launched</li>
<li><b>Impact:</b> Made the web accessible to non-technical users</li>
<li><b>Growth:</b> Explosive increase in web adoption</li>
</ul><br>

<b>6. Commercial Web (Mid-1990s):</b><br>
<ul>
<li>E-commerce emerges</li>
<li>Businesses establish web presence</li>
<li>Search engines developed (Yahoo, Google)</li>
<li>Web becomes mainstream</li>
</ul><br>

<b>7. Modern Web (2000s-Present):</b><br>
<ul>
<li><b>Web 2.0:</b> Social media, user-generated content, interactive applications</li>
<li><b>Mobile Web:</b> Smartphones and tablets</li>
<li><b>Cloud Computing:</b> Web-based services and applications</li>
<li><b>Web 3.0:</b> Semantic web, AI integration, decentralization</li>
</ul><br>

<b>Key Achievements Enabling Evolution:</b><br><br>

<ol>
<li><b>Networking Technology:</b>
<ul>
<li>Packet switching</li>
<li>TCP/IP protocols</li>
<li>Faster internet connections</li>
</ul>
</li><br>

<li><b>Software Innovations:</b>
<ul>
<li>Graphical browsers</li>
<li>HTML and web standards</li>
<li>Server technology</li>
<li>Programming languages for web development</li>
</ul>
</li><br>

<li><b>Infrastructure:</b>
<ul>
<li>Global fiber optic networks</li>
<li>Domain Name System (DNS)</li>
<li>Data centers and hosting services</li>
</ul>
</li><br>

<li><b>Standardization:</b>
<ul>
<li>W3C (World Wide Web Consortium) founded 1994</li>
<li>Open standards and protocols</li>
<li>Interoperability between systems</li>
</ul>
</li>
</ol><br>

<b>Comparison: ARPANET vs Modern WWW:</b><br><br>

<table border="1" cellpadding="8" cellspacing="0" width="100%">
<thead>
<tr style="background-color: #e3f2fd;">
<th><b>Aspect</b></th>
<th><b>ARPANET</b></th>
<th><b>Modern WWW</b></th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Users</b></td>
<td>Military, researchers</td>
<td>Billions of people worldwide</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Interface</b></td>
<td>Command-line, text-based</td>
<td>Graphical, multimedia, interactive</td>
</tr>
<tr>
<td><b>Content</b></td>
<td>Simple text files</td>
<td>Rich media, applications, services</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Navigation</b></td>
<td>Complex commands</td>
<td>Hyperlinks, search engines</td>
</tr>
<tr>
<td><b>Access</b></td>
<td>Restricted</td>
<td>Open and global</td>
</tr>
<tr style="background-color: #f5f5f5;">
<td><b>Purpose</b></td>
<td>Research, communication</td>
<td>Information, commerce, entertainment, social</td>
</tr>
</tbody>
</table><br>

<b>Impact:</b><br>
The evolution from ARPANET to the World Wide Web transformed the internet from a specialized research tool into a universal platform that has fundamentally changed how humanity communicates, works, learns, and conducts business.`,
    createdAt: '2025-01-07',
    model: 'Sonnet 4'
  }
];