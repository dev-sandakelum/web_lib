"use client";
import React, { useState } from 'react';

export default function NetworkingFullNotes() {
  const [activeSection, setActiveSection] = useState('intro');

  const SectionCard: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg p-3 sm:p-4 mb-4 shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );

  const Subsection: React.FC<{ title: React.ReactNode; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-50 border-l-4 border-blue-600 p-3 sm:p-4 my-3 rounded-r-lg">
      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

  const HighlightBox: React.FC<{ title?: React.ReactNode; children?: React.ReactNode; color?: 'blue' | 'green' | 'yellow' | 'purple' | 'red' }> = ({ title, children, color = 'blue' }) => {
    const colors: Record<'blue' | 'green' | 'yellow' | 'purple' | 'red', string> = {
      blue: 'bg-blue-50 border-blue-300',
      green: 'bg-green-50 border-green-300',
      yellow: 'bg-yellow-50 border-yellow-300',
      purple: 'bg-purple-50 border-purple-300',
      red: 'bg-red-50 border-red-300',
    };
    return (
      <div className={`${colors[color]} border rounded-lg p-3 sm:p-4 my-3`}>
        {title && <h4 className="text-sm sm:text-base font-semibold mb-2">{title}</h4>}
        <div className="text-xs sm:text-sm text-gray-700">{children}</div>
      </div>
    );
  };

  const ExampleBox: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="bg-green-50 border border-green-300 rounded-lg p-3 my-2">
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

       
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-8 rounded-xl mb-4 sm:mb-6 shadow-lg">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">ICT </h1>
          <h2 className="text-lg sm:text-2xl font-semibold mb-1">Computer Networks</h2>
          <p className="text-xs sm:text-sm opacity-90">Fabrikam Residences</p>
        </div>

        {/* Navigation */}
        <div className="sticky top-0 bg-white rounded-lg shadow-md z-50 mb-4 sm:mb-6">
          <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
            {[
              { id: 'intro', label: 'Introduction' },
              { id: 'reference', label: 'Reference Models' },
              { id: 'ip', label: 'IP Addressing' },
              { id: 'physical', label: 'Physical Layer' },
              { id: 'multiplexing', label: 'Multiplexing' },
              { id: 'datalink', label: 'Data Link Layer' },
              { id: 'mac', label: 'MAC Layer' },
              { id: 'network', label: 'Network Layer' },
              { id: 'transport', label: 'Transport Layer' },
              { id: 'application', label: 'Application Layer' },
            ].map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        {activeSection === 'intro' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                What is a Computer Network?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                A set of communication elements connected by communication links. A network can be defined as two or more computers/nodes connected together in such a way that they can share resources.
              </p>
              <HighlightBox color="blue">
                <p className="mb-2"><strong>More specifically:</strong></p>
                <p>A set of systems/nodes interconnected by communication links that is primarily used for information transfer (information = messages/data from applications)</p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li><strong>Systems:</strong> Computers and other end systems (tablets, smartphones, sensors), switches, routers</li>
                  <li><strong>Links:</strong> Wired (twisted pair, Twinax, coaxial cable, optical fiber)</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Why We are Using Computer Networks
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Before computer networks, people sent and received information by hand, using the postal service. This is slow and can be unreliable.</li>
                <li>Computer networks enable faster, more efficient modes of communication (email, video conferencing).</li>
                <li>Computer networks and the sharing of electronic data encourages the use of standard policies and procedures.</li>
                <li>Computer networks provide backup and recovery support for our data redundancy.</li>
                <li>Computer networks lead to cost savings.</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Uses of Computer Networks
              </h2>

              <Subsection title="1️⃣ Business Applications">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Resources sharing</li>
                  <li>Communication</li>
                  <li>Business with other companies</li>
                  <li>A client is a program requesting services. Services is a program providing services.</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Home Applications">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Access to remote information</li>
                  <li>Person-to person communication</li>
                  <li>Interactive Entertainment</li>
                  <li>Electronic Commerce</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Mobile Users">
                <p>Combinations of wireless networks and mobile computing.</p>
              </Subsection>

              <Subsection title="4️⃣ Social Issues">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Government versus citizen</li>
                  <li>Spam mail</li>
                  <li>Identity theft</li>
                  <li>Many problems could be solved if the computer security is taken seriously.</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Network Hardware
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Network hardware components can be categorized into:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700 mb-4">
                <li>Local Area Networks (LAN)</li>
                <li>Metropolitan Area Networks (MAN)</li>
                <li>Wide Area Networks (WAN)</li>
                <li>Wireless Networks</li>
                <li>Home Networks</li>
                <li>Internetworks</li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Transmission Technologies:</h3>

              <Subsection title="📡 Broadcast Links">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Single Communication channel that is shared by all the machines on the network.</li>
                  <li>Messages on the network are called packets.</li>
                  <li><strong>Broadcasting:</strong> A packet transmitted is received by every machine.</li>
                  <li><strong>Multicasting:</strong> Transmission to a subset of the machines.</li>
                </ul>
              </Subsection>

              <Subsection title="🔗 Point-to-Point Links">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Point-to-point networks consist of many connections between individual pairs of machines.</li>
                  <li>Point-to-point transmission with one sender and receiver is sometimes called unicasting.</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Local Area Networks (LAN)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                LAN is a network which is designed to operate over a small physical area such as an office, factory or a group of buildings.
              </p>

              <HighlightBox title="Characteristics:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Size:</strong> Restricted to particular geographic region (office building, single department)</li>
                  <li><strong>Transmission Technology:</strong> 10 Mbps to 10 Gbps</li>
                  <li><strong>Topology:</strong> bus, star and ring</li>
                  <li>Usually a privately owned network</li>
                </ul>
              </HighlightBox>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4">LAN Topologies:</h3>

              <Subsection title="⭕ Ring Topology">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Each computer connects to two other computers, joining them in a circle creating a unidirectional path.</li>
                  <li>No need of server to control the connectivity among the nodes.</li>
                  <li>Each entity participating in the ring reads a message, then regenerates it and hands it to its neighbor.</li>
                  <li>The ring makes it difficult to add new computers.</li>
                  <li>Unlike a star topology network, the ring topology network will go down if one entity is removed.</li>
                  <li>Minimum collision (in single ring)</li>
                  <li><strong>Single ring:</strong> All devices share a single cable</li>
                  <li><strong>Dual ring:</strong> Data can be sent in both directions</li>
                </ul>
              </Subsection>

              <Subsection title="🚌 Bus Topology">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Simplest physical topology consisting of a single cable that runs to every workstation</li>
                  <li>Uses the least amount of cabling, but covers the shortest distance</li>
                  <li>Each computer shares the same data and address path</li>
                  <li>Messages pass through the trunk, and each workstation checks if the message is addressed to itself</li>
                  <li>Difficult to add a workstation</li>
                  <li>If main cable breaks, the entire network is disrupted</li>
                  <li>Very expensive to maintain</li>
                </ul>
              </Subsection>

              <Subsection title="⭐ Star Topology">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Branches each network device off a central device called a hub</li>
                  <li>Very easy to add a new workstation</li>
                  <li>If any workstation goes down, it does not affect the entire network</li>
                  <li>If the central device goes down, the entire network goes down</li>
                  <li>Resembles spokes in a bicycle wheel</li>
                  <li>Easy to install - cable is run from each workstation to the hub</li>
                  <li>More expensive to install than bus networks due to more cables and hubs needed</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Metropolitan Area Network (MAN)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Computer network larger than a LAN and connects clients and servers from multiple buildings over a larger area.</li>
                <li>A MAN may use different transmission technology and different media, such as fiber and wireless because of the greater distance it covers.</li>
                <li>Utilized across multiple buildings.</li>
                <li>Commonly used in school campuses or large companies with multiple buildings.</li>
                <li>Larger than a LAN, but smaller than a WAN.</li>
                <li>Also used to mean the interconnection of several LANs by bridging them together (campus network).</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Wide Area Network (WAN)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A Wide Area Network is a computer network that covers a broad area (i.e., any network whose communications links cross metropolitan, regional, or national boundaries). Or, less formally, a network that uses routers and public communications links.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>The largest and most well-known example of a WAN is the Internet.</li>
                <li>WANs are used to connect LANs and other types of networks together.</li>
                <li>Users and computers in one location can communicate with users and computers in other locations.</li>
              </ul>

              <Subsection title="📶 Wireless WAN">
                <ul className="list-disc ml-5 space-y-1">
                  <li>A wide area network where separate areas of coverage or cells are connected wirelessly to provide service to a large geographic area.</li>
                  <li>WWANs make use of technologies that focus on modulation of voice and data.</li>
                  <li>Exclusively use Radio Frequency signals designed to accommodate many users.</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Home Network
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Every device in the home will be capable of communicating with every other device, and all of them will be accessible over the Internet.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Computers:</strong> Desktop PC, notebook PC, PDA, shared peripherals</li>
                <li><strong>Telecommunications:</strong> Telephone, Mobile telephone, intercom, fax</li>
                <li><strong>Appliances:</strong> Microwave, refrigerator, clock, furnace, airco, lights, AC</li>
                <li><strong>Telemetry:</strong> Utility meter, smoke/burglar alarm, thermostat, babycam</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Internetworks
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A collection of interconnected networks is called an internetwork or internet. Internetworking devices are products used to connect networks.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                As computer networks grow in size and complexity, so do the internetworking devices used to connect them.
              </p>
              <HighlightBox title="Internetworking Devices:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Repeaters</li>
                  <li>Hubs</li>
                  <li>Bridges</li>
                  <li>Switches</li>
                  <li>Routers</li>
                  <li>Gateways</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Network Software
              </h2>

              <Subsection title="📋 Functions of Network Software">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Helps to set up and install computer networks</li>
                  <li>Enables users to have access to network resources in a seamless manner</li>
                  <li>Allows administrations to add or remove users from the network</li>
                  <li>Helps to define locations of data storage and allows users to access that data</li>
                  <li>Helps administrators and security system to protect the network from data breaches, unauthorized access and attacks</li>
                  <li>Enables network virtualizations</li>
                </ul>
              </Subsection>

              <Subsection title="🏗️ Protocol Hierarchies">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Networks are organized as a series of layers.</li>
                  <li>Layer n on a host communicated with layer n on another host.</li>
                  <li><strong>Layer n protocol:</strong> Rules and conventions for this communication.</li>
                  <li>The entities on each host implementing the layer n protocol are peers.</li>
                </ul>
              </Subsection>

              <Subsection title="🎯 Design Issues for the Layers">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Addressing:</strong> Some form of addressing is needed to specify a specific destination.</li>
                  <li><strong>Rules for data transfer:</strong> Simplex, Half-duplex and full duplex transmission.</li>
                  <li><strong>Error control:</strong> Both ends must agree on error detecting and correcting codes.</li>
                  <li><strong>Sequencing and reassembly:</strong> Messages may arrive out of order and need proper reassembly.</li>
                  <li><strong>Flow control:</strong> Need to regulate flow of data to avoid swamping receiver.</li>
                  <li><strong>Message size handling:</strong> Disassembling, transmitting and reassembling messages.</li>
                  <li><strong>Routing:</strong> Choosing a path when there are multiple paths between source and destination.</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Connection-Oriented vs Connectionless Service
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HighlightBox title="🔗 Connection-oriented Service" color="blue">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Connection established and terminated</li>
                    <li>Modeled after the telephone system</li>
                    <li>Messages arrive in the order they are sent</li>
                    <li><strong>Example:</strong> TCP</li>
                  </ul>
                </HighlightBox>

                <HighlightBox title="📦 Connectionless Service" color="green">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Also called datagram service</li>
                    <li>Modeled after the postal system</li>
                    <li>No guarantees on message ordering</li>
                    <li>Unreliable: Messages may be lost</li>
                    <li><strong>Example:</strong> UDP</li>
                  </ul>
                </HighlightBox>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Service Primitives
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A service is formally specified by a set of primitives (operations) available to a user process to access the service.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 p-2">Primitive</th>
                      <th className="border border-gray-300 p-2">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">LISTEN</td>
                      <td className="border border-gray-300 p-2">Block waiting for an incoming connection</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">CONNECT</td>
                      <td className="border border-gray-300 p-2">Establish a connection with a waiting peer</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">ACCEPT</td>
                      <td className="border border-gray-300 p-2">Accept an incoming connection from a peer</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">RECEIVE</td>
                      <td className="border border-gray-300 p-2">Block waiting for an incoming message</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">SEND</td>
                      <td className="border border-gray-300 p-2">Send a message to the peer</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">DISCONNECT</td>
                      <td className="border border-gray-300 p-2">Terminate a connection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Relationship of Services to Protocols
              </h2>
              <HighlightBox color="purple">
                <p className="mb-2"><strong>Service:</strong> A set of primitives (operations) that a layer provides to the layer above it.</p>
                <p><strong>Protocol:</strong> A set of rules governing the format and meaning of the frames, packets, or messages that are exchanged by the peer entities within layer.</p>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* Reference Models Section */}
        {activeSection === 'reference' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Network Architecture
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Network architecture refers to the way a network is designed and built. The two major types are:
              </p>

              <Subsection title="👥 Peer-to-Peer Architecture">
                <p className="mb-2">Computers connect with each other in a workgroup to share files, printers, and Internet access. This is used to connect a small number of computers.</p>
                
                <h5 className="font-semibold mt-3 mb-1">✅ Advantages:</h5>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Easy to install and configure</li>
                  <li>All resources and contents are shared by all peers</li>
                  <li>More reliable as central dependency is eliminated</li>
                  <li>No need for a full-time System Administrator</li>
                  <li>Comparatively very low cost</li>
                </ul>

                <h5 className="font-semibold mt-3 mb-1">❌ Disadvantages:</h5>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Difficult to administer (decentralized system)</li>
                  <li>Difficult to uphold security policy</li>
                  <li>Very low security - malware can easily be transmitted</li>
                  <li>Data recovery or backup is very difficult</li>
                  <li>Used in torrents for copyrighted file transfers</li>
                </ul>

                <HighlightBox title="Where P2P is appropriate:" color="blue">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>10 or fewer users</li>
                    <li>No specialized services required</li>
                    <li>Security is not an issue</li>
                    <li>Limited growth in foreseeable future</li>
                  </ul>
                </HighlightBox>
              </Subsection>

              <Subsection title="🖥️ Client-Server Architecture">
                <p className="mb-2">Sends information from a client computer to a server, which then relays the information back to the client's computer, or to other computers on the network.</p>
                
                <h5 className="font-semibold mt-3 mb-1">✅ Advantages:</h5>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Facilitate resource sharing - centrally administrate and control</li>
                  <li>Facilitate system backup and recovery</li>
                  <li>Enhance security - only administrators have access to Server</li>
                  <li>Support more users</li>
                </ul>

                <h5 className="font-semibold mt-3 mb-1">❌ Disadvantages:</h5>
                <ul className="list-disc ml-5 space-y-1">
                  <li>High cost for Servers</li>
                  <li>Need an expert to configure the network</li>
                  <li>Introduce a single point of failure</li>
                  <li>Congestion in Network</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                OSI Reference Model
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In 1947, the International Standard Organization (ISO) is a multinational body dedicated to worldwide agreement on international standards. In late 1970s, an open system is a set of protocols that allow any two different systems to communicate.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                It divides the communications process into seven layers. Each communicating user or program is at a computer that can provide those seven layers of function.
              </p>

              <HighlightBox title="7 Layers of OSI Model (Top to Bottom):" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Application Layer</li>
                  <li>Presentation Layer</li>
                  <li>Session Layer</li>
                  <li>Transport Layer</li>
                  <li>Network Layer</li>
                  <li>Data Link Layer</li>
                  <li>Physical Layer</li>
                </ol>
              </HighlightBox>

              <Subsection title="7️⃣ Application Layer">
                <p className="mb-2">Responsible for providing services to the user and enable users to access network resources.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Contains a variety of protocols that are commonly needed by users</li>
                  <li><strong>HTTP:</strong> Hypertext Transfer Protocol - basis for World Wide Web</li>
                  <li>Other protocols: File transfer, electronic mail, and network news</li>
                </ul>
              </Subsection>

              <Subsection title="6️⃣ Presentation Layer">
                <p className="mb-2">Concerned with syntax and semantics of information exchanged between 2 systems.</p>
                <p className="mb-1">Performs specific functions:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Encryption/Decryption</li>
                  <li>Compression</li>
                  <li>Translation</li>
                </ul>
              </Subsection>

              <Subsection title="5️⃣ Session Layer">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Controls the dialogues (connections) between computers</li>
                  <li>Establishes, manages, and synchronizes the connections between local and remote applications</li>
                </ul>
              </Subsection>

              <Subsection title="4️⃣ Transport Layer">
                <p className="mb-2">Purpose: Provide a reliable mechanism for the exchange of data between two processes in different computers.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Ensures that data units are delivered error free</li>
                  <li>Ensures that data units are delivered in sequence</li>
                  <li>Ensures no loss or duplication of data units</li>
                  <li>Provides connectionless or connection-oriented service</li>
                  <li>Port addressing</li>
                  <li>Segmentation and reassembling</li>
                  <li>Connection control</li>
                  <li>End-to-end flow control</li>
                  <li>Error control</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Network Layer">
                <p className="mb-2">Responsible for the delivery of individual packets from the source host to the destination host.</p>
                <p className="mb-1">Concerned with:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Logical addressing (IP Address)</li>
                  <li>Routing (Source to destination transmission between networks)</li>
                  <li>Path determination</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Data Link Layer">
                <p className="mb-2">Responsible for moving frames from one node to the next.</p>
                <p className="mb-1">Concerned with:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Framing (stream of bits into manageable data units)</li>
                  <li>Physical Addressing (MAC address)</li>
                  <li>Flow Control (mechanism for overwhelming the receiver)</li>
                  <li>Error Control (trailer retransmission)</li>
                </ul>
              </Subsection>

              <Subsection title="1️⃣ Physical Layer">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Major function: Move data in the form of electromagnetic signals across a transmission medium</li>
                  <li>Responsible for movements of individual bits from one Node to next</li>
                  <li>Both data and signals can be either analog or digital</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TCP/IP Reference Model
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The TCP/IP protocol suite was developed prior to the OSI model. Therefore, the layers in the TCP/IP protocol suite do not match exactly with those in the OSI model.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The original TCP/IP protocol suite was defined as four software layers built upon the hardware. TCP/IP was developed earlier than the OSI 7-layer model, so it does not have 7 layers but only 4 layers.
              </p>

              <HighlightBox title="4 Layers of TCP/IP Model (Top to Bottom):" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Application Layer</li>
                  <li>Transport Layer</li>
                  <li>Internet Layer</li>
                  <li>Host-to-Network Layer</li>
                </ol>
              </HighlightBox>

              <Subsection title="4️⃣ Application Layer">
                <p className="mb-2">Contains all the higher-level protocols.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>TELNET:</strong> Two-way communication protocol that allows connecting to a remote machine and run applications on it</li>
                  <li><strong>FTP (File Transfer Protocol):</strong> Allows file transfer amongst computer users connected over a network. Reliable, simple, and efficient</li>
                  <li><strong>SMTP (Simple Mail Transport Protocol):</strong> Used to transport electronic mail between source and destination, directed via a route</li>
                  <li><strong>DNS (Domain Name Server):</strong> Resolves an IP address into a textual address for Hosts connected over a network</li>
                  <li>Allows peer entities to carry on conversation</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Transport Layer">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Decides if data transmission should be on parallel path or single path</li>
                  <li>Functions such as multiplexing, segmenting or splitting on the data</li>
                  <li>Applications can read and write to the transport layer</li>
                  <li>Adds header information to the data</li>
                  <li>Breaks the message (data) into small units for efficient handling by network layer</li>
                  <li>Arranges the packets to be sent in sequence</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Internet Layer">
                <p className="mb-2">Selection of a packet-switching network which is based on a connectionless internetwork layer. It is the layer which holds the whole architecture together.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Helps the packet to travel independently to the destination</li>
                  <li>Order in which packets are received is different from the way they are sent</li>
                  <li>IP (Internet Protocol) is used in this layer</li>
                </ul>
                <p className="mt-2 mb-1">Functions performed:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Delivering IP packets</li>
                  <li>Performing routing</li>
                </ul>
              </Subsection>

              <Subsection title="1️⃣ Host-to-Network Layer">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Lowest layer of all</li>
                  <li>TCP/IP does not define any specific protocol at this layer</li>
                  <li>Supports all standard and proprietary protocols</li>
                  <li>Protocol is used to connect to the host, so that packets can be sent over it</li>
                  <li>Varies from host to host and network to network</li>
                  <li>A network in TCP/IP internetwork can be a local-area network or wide area network</li>
                </ul>
              </Subsection>
            </SectionCard>
          </div>
        )}

        {/* IP Addressing Section */}
        {activeSection === 'ip' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                IP Address
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                IP address is short for Internet Protocol Address. IP is a network layer - it must be capable of providing communication between hosts on different kinds of networks.
              </p>
              
              <HighlightBox color="blue">
                <p className="mb-2">The address must include information about what network the receiving host is on.</p>
                <p className="mb-2"><strong>IP address helps to identify:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Name</li>
                  <li>Location</li>
                  <li>Route</li>
                </ul>
                <p className="mt-2">It is a unique identifier that allows transfers of files and e-mail between two computers located at different places.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of IP Address
              </h2>
              
              <Subsection title="IPv4">
                <ul className="list-disc ml-5 space-y-2">
                  <li>IP addresses consist of four sections</li>
                  <li>Each section is 8 bits long</li>
                  <li>Includes a network ID and a host ID</li>
                  <li>Each section can range from 0 to 255</li>
                  <li>Written, for example: 128.11.3.31</li>
                  <li>The address space in IPv4 is 2³² = 4,294,967,296</li>
                </ul>
                
                <ExampleBox>
                  <p className="font-semibold mb-2">Dotted Decimal Notation:</p>
                  <p className="mb-1">1.2.3.4</p>
                  <p className="font-mono">00000001 00000010 00000011 00000100</p>
                </ExampleBox>
              </Subsection>

              <Subsection title="IPv6">
                <p>Next generation IP addressing (covered in advanced topics)</p>
              </Subsection>

              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Each address consists of two parts:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>The Network Address</li>
                <li>The Host Address</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                IPv4 Address Examples
              </h2>
              
              <ExampleBox>
                <p className="font-semibold mb-2">Example 1: Binary to Dotted-Decimal</p>
                <p className="mb-1">Change the following IP address from binary notation to dotted-decimal notation:</p>
                <p className="font-mono mb-2">10000001 00001011 00001011 11101111</p>
                <p className="font-semibold">Solution:</p>
                <p>129.11.11.239</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 2: Dotted-Decimal to Binary</p>
                <p className="mb-1">Change the following IP address from dotted-decimal notation to binary notation:</p>
                <p className="mb-2">111.56.45.78</p>
                <p className="font-semibold">Solution:</p>
                <p className="font-mono">01101111 00111000 00101101 01001110</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 3: Find the Error</p>
                <p className="mb-1">Find the error in the following IP Address: 111.56.045.78</p>
                <p className="font-semibold">Solution:</p>
                <p>There are no leading zeroes in Dotted-decimal notation (045)</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 4: Find the Error</p>
                <p className="mb-1">Find the error in the following IP Address: 75.45.301.14</p>
                <p className="font-semibold">Solution:</p>
                <p>In decimal notation each number ≤ 255, 301 is out of the range</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Classful Addressing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In classful addressing the address space is divided into 5 classes: A, B, C, D, E
              </p>

              <Subsection title="Class A">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Address begins with bit 0</li>
                  <li>8 bit network number</li>
                  <li>24 bit host number</li>
                  <li><strong>Range:</strong> 0.0.0.0 to 127.255.255.255</li>
                </ul>
              </Subsection>

              <Subsection title="Class B">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Address begins with bits 10</li>
                  <li>16 bit network number</li>
                  <li>16 bit host number</li>
                  <li><strong>Range:</strong> 128.0.0.0 to 191.255.255.255</li>
                </ul>
              </Subsection>

              <Subsection title="Class C">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Address begins with bits 110</li>
                  <li>24 bit network number</li>
                  <li>8 bit host number</li>
                  <li><strong>Range:</strong> 192.0.0.0 to 223.255.255.255</li>
                </ul>
              </Subsection>

              <Subsection title="Class D">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Begins with 1110</li>
                  <li>Multicast addresses</li>
                  <li><strong>Range:</strong> 224.0.0.0 to 239.255.255.255</li>
                </ul>
              </Subsection>

              <Subsection title="Class E">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Begins with 11110</li>
                  <li>Unused/Reserved</li>
                  <li><strong>Range:</strong> 240.0.0.0 to 255.255.255.255</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Finding the Class - Examples
              </h2>
              
              <ExampleBox>
                <p className="font-semibold mb-2">Example 1: Find class in Binary Notation</p>
                <p className="mb-1">00000001 00001011 00001011 11101111</p>
                <p className="font-semibold">Solution:</p>
                <p>1st bit is 0, hence it is Class A</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 2: Find class in Binary Notation</p>
                <p className="mb-1">11000001 00001011 00001011 11101111</p>
                <p className="font-semibold">Solution:</p>
                <p>1st and 2nd bits are 1, and 3rd bit is 0, hence Class C</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 3: Find class in Decimal Notation</p>
                <p className="mb-1">158.223.1.108</p>
                <p className="font-semibold">Solution:</p>
                <p>1st byte = 158 (128 &lt; 158 &lt; 191) → Class B</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example 4: Find class in Decimal Notation</p>
                <p className="mb-1">227.13.14.88</p>
                <p className="font-semibold">Solution:</p>
                <p>1st byte = 227 (224 &lt; 227 &lt; 239) → Class D</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Network ID and Host ID Summary
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 p-2">Class</th>
                      <th className="border border-gray-300 p-2">1st Octet Range</th>
                      <th className="border border-gray-300 p-2">Network/Host Portion</th>
                      <th className="border border-gray-300 p-2">Default Mask</th>
                      <th className="border border-gray-300 p-2">Networks & Hosts</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">A</td>
                      <td className="border border-gray-300 p-2">0 – 127</td>
                      <td className="border border-gray-300 p-2">N.H.H.H</td>
                      <td className="border border-gray-300 p-2">255.0.0.0</td>
                      <td className="border border-gray-300 p-2">128 Nets (2⁷)<br/>16,777,214 hosts (2²⁴ – 2)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">B</td>
                      <td className="border border-gray-300 p-2">128 – 191</td>
                      <td className="border border-gray-300 p-2">N.N.H.H</td>
                      <td className="border border-gray-300 p-2">255.255.0.0</td>
                      <td className="border border-gray-300 p-2">16,384 Nets (2¹⁴)<br/>65,534 hosts (2¹⁶ – 2)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">C</td>
                      <td className="border border-gray-300 p-2">192 – 223</td>
                      <td className="border border-gray-300 p-2">N.N.N.H</td>
                      <td className="border border-gray-300 p-2">255.255.255.0</td>
                      <td className="border border-gray-300 p-2">2,090,105 Nets (2²¹)<br/>254 hosts (2⁸ – 2)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">D</td>
                      <td className="border border-gray-300 p-2">224 – 239</td>
                      <td className="border border-gray-300 p-2">N/A (Multicast)</td>
                      <td className="border border-gray-300 p-2">-</td>
                      <td className="border border-gray-300 p-2">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">E</td>
                      <td className="border border-gray-300 p-2">240 - 255</td>
                      <td className="border border-gray-300 p-2">N/A (Experimental)</td>
                      <td className="border border-gray-300 p-2">-</td>
                      <td className="border border-gray-300 p-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Subnet Mask
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Distinguishes which portion of the address identifies the network and which portion identifies the node.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Applying a subnet mask allows you to identify the network and node parts of the address. A router will then determine whether the address is local or remote.
              </p>

              <HighlightBox title="32-bit Binary Number 'Subnet Mask':" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Network bits are masked as 1s</li>
                  <li>Node bits are masked as 0s</li>
                </ul>
              </HighlightBox>

              <div className="overflow-x-auto mt-3">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 p-2">Class</th>
                      <th className="border border-gray-300 p-2">Subnet Mask</th>
                      <th className="border border-gray-300 p-2">Slash Notation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">A</td>
                      <td className="border border-gray-300 p-2">255.0.0.0</td>
                      <td className="border border-gray-300 p-2">/8</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">B</td>
                      <td className="border border-gray-300 p-2">255.255.0.0</td>
                      <td className="border border-gray-300 p-2">/16</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">C</td>
                      <td className="border border-gray-300 p-2">255.255.255.0</td>
                      <td className="border border-gray-300 p-2">/24</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ExampleBox>
                <p className="font-semibold mb-2">Example: IP address = 192.168.2.25</p>
                <p className="mb-1">All 1 bits (left to right) identify network/subnet</p>
                <p className="mb-1">Remaining 0 bits identify host/interface</p>
                <p className="font-mono mt-2 mb-1">192.168.10.79 with subnet mask 255.255.255.240</p>
                <p className="font-mono">11000000 10101000 00001010 01001111</p>
                <p className="font-mono mb-2">11111111 11111111 11111111 11100000</p>
                <p>Network ID | Host ID</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                CIDR - Classless Inter Domain Routing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                CIDR is a slash notation of subnet mask. CIDR tells us number of 'on' bits in a network address.
              </p>

              <HighlightBox title="Practice Example 1: Find Subnet Mask" color="yellow">
                <ul className="list-disc ml-5 space-y-1">
                  <li>10.72.8.0/22</li>
                  <li>192.168.10.128/25</li>
                  <li>172.163.5.24/26</li>
                  <li>192.168.10.0/16</li>
                  <li>192.168.10.0/20</li>
                </ul>
              </HighlightBox>

              <HighlightBox title="Practice Example 2: Find CIDR Notation" color="yellow">
                <ul className="list-disc ml-5 space-y-1">
                  <li>222.1.1.20 mask 255.255.255.192</li>
                  <li>135.1.1.25 mask 255.255.248.0</li>
                  <li>195.1.1.0 mask 255.255.252.0</li>
                  <li>192.168.10.0 mask 255.255.255.240</li>
                  <li>192.168.10.10 mask 255.255.255.224</li>
                </ul>
              </HighlightBox>

              <HighlightBox title="Practice Example 3: Find Network Details" color="yellow">
                <p className="mb-2">Find the network id, subnet mask, starting and ending address, and broadcast address:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>192.10.50.10/22</li>
                  <li>172.50.10.25/20</li>
                  <li>10.40.48.0/23</li>
                  <li>192.168.1.0/26</li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* Physical Layer Section */}
        {activeSection === 'physical' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Theoretical Basis for Data Communication
              </h2>

              <Subsection title="📊 Fourier Analysis">
                <p className="mb-2">In the early 19th century, the French mathematician Jean-Baptiste Fourier proved that any reasonably behaved periodic function, g(t) with period T can be constructed as the sum of a (possibly infinite) number of sines and cosines.</p>
              </Subsection>

              <Subsection title="📈 Bandwidth-Limited Signals">
                <h5 className="font-semibold mb-2">Nyquist Theorem:</h5>
                <p className="mb-2"><strong>Maximum data rate = 2H log₂ V bits per second</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>H = frequency</li>
                  <li>V = signal levels (binary signals: two levels)</li>
                </ul>
                
                <ExampleBox>
                  <p className="font-semibold mb-1">Example:</p>
                  <p>If H = 3 kHz, V = 2, maximum data rate will be 6000 bps</p>
                </ExampleBox>

                <h5 className="font-semibold mt-3 mb-2">Shannon's Theorem (with noise):</h5>
                <p className="mb-2">The amount of thermal noise present is measured by the ratio of the signal power to the noise power, called the SNR (Signal-to-Noise Ratio)</p>
                <p className="mb-2"><strong>SNR = (Power of signal) / (power of noise)</strong></p>
                <p className="mb-2"><strong>Maximum data rate = H log₂ (1 + S/N) bps</strong></p>
                <p className="text-xs">S/N: given in dB</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Practice Questions
              </h2>
              
              <ExampleBox>
                <p className="font-semibold mb-2">Question 1:</p>
                <p>Consider a noiseless channel with a bandwidth of 4000 Hz transmitting a signal with four signal levels. What can be the maximum bit rate?</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Question 2:</p>
                <p>We need to send 265 kbps over a noiseless channel with a bandwidth of 40 kHz. How many signal levels do we need?</p>
              </ExampleBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Question 3:</p>
                <p>A telephone line normally has a bandwidth of 3000 Hz (300 to 3300 Hz) assigned for data communication. The SNR is usually 2047. What will be the capacity for this channel?</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transmission Media
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In a data transmission system, the transmission media is the physical path between transmitter and receiver. Transmission media are actually located below the physical layer and are directly controlled by the physical layer.
              </p>

              <HighlightBox title="Types of Transmission Media:" color="blue">
                <div className="space-y-2">
                  <p className="font-semibold">Guided Media:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Twisted Pair Cable (UTP & STP)</li>
                    <li>Coaxial Cable</li>
                    <li>Fiber Optics</li>
                  </ul>
                  <p className="font-semibold mt-2">Unguided Media:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Radio Transmission</li>
                    <li>Microwave Transmission</li>
                    <li>Infrared Transmission</li>
                  </ul>
                </div>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Guided Media - Twisted Pair Cable
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A twisted pair cable consist of two conductor (normally copper), each with its own plastic insulation, twisted together. The purpose of twisted pair cable is to remove or cancel out electromagnetic interference (EMI) from external sources.
              </p>

              <Subsection title="🔌 Unshielded Twisted Pair (UTP) Cable">
                <ul className="list-disc ml-5 space-y-1">
                  <li>No shield provided - only two twisted copper wires with their own color plastic insulator</li>
                  <li>Very cheap and easy to install</li>
                  <li>Badly affected by noise interference</li>
                  <li><strong>Data Rate:</strong> 10-100 Mbps</li>
                  <li><strong>Cable Length:</strong> 100 meter max</li>
                  <li><strong>Electrical Interface:</strong> Most interference and cross talk occurs</li>
                  <li><strong>Installation:</strong> Easy to install</li>
                  <li><strong>Cost:</strong> Lowest</li>
                </ul>
              </Subsection>

              <Subsection title="🛡️ Shielded Twisted Pair (STP) Cable">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Has a metal foil to cover each pair of insulating conductors</li>
                  <li>Reduces the interference of the noise but makes the cable bulky and expensive</li>
                  <li><strong>Data Rate:</strong> 150 Mbps</li>
                  <li><strong>Cable Length:</strong> 500 meter max</li>
                  <li><strong>Electrical Interface:</strong> Less interference and cross talk occurs</li>
                  <li><strong>Installation:</strong> Very easy to install</li>
                  <li><strong>Cost:</strong> Little costly</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Coaxial Cable
              </h2>
              
              <Subsection title="🔧 Construction Layers">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>The copper conductor</li>
                  <li>Insulation layer of plastic foam</li>
                  <li>Second conductor or shield of wire mesh tube or metallic foil</li>
                  <li>Outer jacket of tough plastic</li>
                </ol>
              </Subsection>

              <Subsection title="✅ Features & Applications">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Can be used over longer distances than twisted pair</li>
                  <li>Support more stations on a shared line than twisted pair</li>
                  <li>Braided mesh helps prevent signal interference or cross-talk</li>
                  <li>Cross-talk: Signal from one cable becomes mixed with signal in different cable</li>
                  <li><strong>Applications:</strong> Cable TV, LANs</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Fiber Optic Cable
              </h2>

              <Subsection title="🔬 Optical Fiber Layers">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Core:</strong> Made of high quality silica glass or plastic</li>
                  <li><strong>Cladding:</strong> Made of high quality silica glass or plastic, with a lower refractive index than the core</li>
                  <li><strong>Buffer:</strong> Protective outer covering</li>
                </ul>
              </Subsection>

              <Subsection title="📡 Features">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Thin glass or plastic threads used to transmit data using light waves</li>
                  <li><strong>Single node fiber optic cable:</strong> Maximum segment length of 2 km, bandwidth up to 100 Mbps</li>
                  <li><strong>Multi-node fiber optic cable:</strong> Maximum segment length of 100 km, bandwidth up to 2 Gbps</li>
                </ul>
              </Subsection>

              <Subsection title="✅ Advantages">
                <ul className="list-disc ml-5 space-y-1">
                  <li>High bandwidth</li>
                  <li>Immune to electromagnetic interference</li>
                  <li>Suitable for industrial and noisy areas</li>
                  <li>Signals carrying data can travel long distances without weakening</li>
                </ul>
              </Subsection>

              <Subsection title="❌ Disadvantages">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Optical fiber cables are expensive</li>
                  <li>Sophisticated technology required for manufacturing, installing and maintaining</li>
                  <li>Light waves are unidirectional, so two frequencies are required for full duplex transmission</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Unguided Media
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Unguided media transport electromagnetic waves without using a physical conductor. This type of communication is often referred to as wireless communication. Signals are normally broadcast through free space and thus are available to anyone who has a device capable of receiving them.
              </p>

              <Subsection title="📶 Signal Propagation Methods">
                <p className="mb-2">Unguided signals can travel from source to destination in several ways:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Ground Propagation</li>
                  <li>Sky Propagation</li>
                  <li>Line of Sight Propagation</li>
                </ul>
              </Subsection>

              <Subsection title="🌍 Ground Propagation">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Radio waves travel through the lowest portion of the atmosphere hugging the earth</li>
                  <li>Low-frequency signals (lower than 2MHz)</li>
                  <li>Attenuation is low</li>
                  <li><strong>Applications:</strong> Television signal broadcasting, target detection for military purposes, radio signal transmission, local range operations</li>
                </ul>
              </Subsection>

              <Subsection title="☁️ Sky Propagation">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Higher-frequency radio waves radiate upward into the ionosphere where they are reflected back to Earth</li>
                  <li>Allows for greater distance with lower output power</li>
                  <li><strong>Applications:</strong> Radar and satellite communication, television broadcasting, line-of-sight communication, mobile communications</li>
                </ul>
              </Subsection>

              <Subsection title="📡 Line of Sight Propagation">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Very high-frequency signals transmitted in straight lines directly from antenna to antenna</li>
                  <li>Most common application: Radar technology</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Wireless Transmission Types
              </h2>

              <Subsection title="📻 Radio Waves">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Radio waves can penetrate walls</li>
                  <li>Use omnidirectional antennas that send out signals in all directions</li>
                  <li>Omnidirectional characteristics make them useful for multicasting (one sender, many receivers)</li>
                  <li><strong>Range:</strong> Between 3 kHz to 1 GHz</li>
                  <li><strong>Examples:</strong> AM, FM radio, television</li>
                </ul>
              </Subsection>

              <Subsection title="📡 Microwaves Transmission">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Electromagnetic waves having frequencies between 1 to 300 GHz</li>
                  <li>Microwaves are unidirectional (operating or moving in one direction only)</li>
                  <li>When an antenna transmits microwaves, they can be narrow focused</li>
                  <li>Sending and receiving antennas need to be aligned</li>
                </ul>
              </Subsection>

              <Subsection title="🔴 Infrared Transmission">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Infrared waves: Frequencies from 300 GHz to 400 THz</li>
                  <li>Can be used for short range communication</li>
                  <li>Having high frequencies, cannot penetrate walls</li>
                  <li>Advantageous: Prevents interference between one system and another</li>
                  <li>A short-range system in one room cannot be affected by another system in the next room</li>
                  <li><strong>Example:</strong> When we use our infrared remote control, we don't interfere with the use of the remote by our neighbors</li>
                </ul>
              </Subsection>
            </SectionCard>
          </div>
        )}

        {/* Multiplexing Section */}
        {activeSection === 'multiplexing' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Multiplexing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                It is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link.
              </p>

              <HighlightBox color="blue">
                <p className="mb-2"><strong>Multiplexer (MUX):</strong> Device that combines n input lines to generate one output line (many to one)</p>
                <p><strong>Demultiplexer (DEMUX):</strong> Device used at receiving end that separates signal into its component signals (one to many)</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Frequency Division Multiplexing (FDM)
              </h2>

              <Subsection title="📊 Features">
                <ul className="list-disc ml-5 space-y-1">
                  <li>It is an analog technique</li>
                  <li>Signals of different frequencies are combined into a composite signal and transmitted on a single link</li>
                  <li>Bandwidth of a link should be greater than the combined bandwidths of the various channels</li>
                  <li>Each signal has a different frequency</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Wave Division Multiplexing (WDM)
              </h2>

              <Subsection title="💡 Features">
                <ul className="list-disc ml-5 space-y-1">
                  <li>WDM is an analog technique</li>
                  <li>Working is same as FDM</li>
                  <li>Different signals are optical or light signals that are transmitted through optical fiber</li>
                  <li>Various light waves from different sources are combined to form a composite light signal transmitted across the channel to the receiver</li>
                  <li>At receiver side, this composite light is broken into different light waves by Demultiplexer</li>
                  <li>Combining and splitting of light waves are done by using a PRISM</li>
                  <li>Prism bends beam of light based on the angle of incidence and frequency of light wave</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Time Division Multiplexing (TDM)
              </h2>

              <Subsection title="⏰ Features">
                <ul className="list-disc ml-5 space-y-1">
                  <li>It is a digital multiplexing technique</li>
                  <li>Channel/Link is not divided on the basis of frequency but on the basis of time</li>
                  <li>Total time available in the channel is divided between several users</li>
                  <li>Each user is allotted a particular time interval called time slot or slice</li>
                  <li>In TDM, the data rate capacity of the transmission medium should be greater than the data rate required by sending or receiving devices</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Public Switched Telephone Network (PSTN)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The term Public Switched Telephone Network (PSTN) describes the various equipment and interconnecting facilities that provide phone service to the public.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The PSTN is a Network of computers and other electronic equipment that converts speech into digital data and provides a multitude of sophisticated phone features, data services, and mobile wireless access.
              </p>

              <HighlightBox title="PSTN Components:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Undergraduate Lines (UG):</strong> Underground telephone cables</li>
                  <li><strong>Overhead Lines (OH):</strong> Above-ground telephone lines</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Digital Subscriber Line (DSL)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                DSL (Digital Subscriber Line) is the general term for services that offer internet connections via a digital modem and a copper telephone line. The beauty of DSL is that there is one superfast internet connection.
              </p>

              <HighlightBox title="Types of DSL:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>SDSL:</strong> Symmetric Digital Subscriber Line</li>
                  <li><strong>VDSL:</strong> Very High Speed Digital Subscriber Line</li>
                  <li><strong>ADSL:</strong> Asymmetric Digital Subscriber Line</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Asymmetric Digital Subscriber Line (ADSL)
              </h2>

              <Subsection title="📡 How ADSL Works">
                <p className="mb-2">ADSL exploits the unused analogue bandwidth available in the wires.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Uses existing telephone lines</li>
                  <li>Provides high-speed internet access</li>
                  <li>Asymmetric: Different upload and download speeds</li>
                  <li>Download speeds are typically faster than upload speeds</li>
                </ul>
              </Subsection>

              <Subsection title="📊 Bandwidth">
                <p className="mb-2">Bandwidth allocation in ADSL:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Voice communication: 0-4 kHz</li>
                  <li>Upload data: 25-138 kHz</li>
                  <li>Download data: 138 kHz - 1.1 MHz</li>
                </ul>
              </Subsection>

              <Subsection title="📏 Distance vs Bandwidth">
                <p className="mb-2">ADSL performance depends on distance from the telephone exchange:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Shorter distance = Higher bandwidth</li>
                  <li>Longer distance = Lower bandwidth</li>
                  <li>Performance degrades with distance due to signal attenuation</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Cable Modem
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A cable modem is a hardware device that allows your computer to communicate with an Internet service provider over a landline connection. It converts an analog signal to a digital signal for the purpose of granting access to broadband Internet.
              </p>

              <HighlightBox color="blue">
                <p className="font-semibold mb-2">Key Features:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Uses coaxial cable infrastructure (same as cable TV)</li>
                  <li>Provides high-speed internet access</li>
                  <li>Typically offers faster speeds than ADSL</li>
                  <li>Bandwidth is shared among users in the neighborhood</li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}
{/* Data Link Layer Section */}
        
        {activeSection === 'datalink' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Open Loop Congestion Control Policies
              </h2>

              <Subsection title="1️⃣ Retransmission Policy">
                <p className="mb-2">If the sender feels that a sent packet is lost or corrupted, the packet needs to be retransmitted. This transmission may increase congestion in the network.</p>
                <p>To prevent congestion, retransmission timers must be designed to prevent congestion and also able to optimize efficiency.</p>
                <ExampleBox>
                  <strong>Example:</strong> Policy used by TCP for Retransmission
                </ExampleBox>
              </Subsection>

              <Subsection title="2️⃣ Window Policy">
                <p className="mb-2">The type of window at the sender side may also affect the congestion.</p>
                <p>Several packets in the Go-back-n window (variation of stop-and-wait protocol and sliding window protocol) are resent, although some packets may be received successfully at the receiver side.</p>
                <p>This duplication may increase the congestion in the network and make it worse.</p>
              </Subsection>

              <Subsection title="3️⃣ Discarding Policy">
                <p className="mb-2">A good discarding policy adopted by the routers is that the routers may prevent congestion and at the same time partially discard the corrupted or less sensitive packages and also able to maintain the quality of a message.</p>
                <ExampleBox>
                  <strong>Example:</strong> In case of audio file transmission, routers can discard less sensitive packets to prevent congestion and also maintain the quality of the audio file.
                </ExampleBox>
              </Subsection>

              <Subsection title="4️⃣ Acknowledgement Policy">
                <p className="mb-2">The receiver does not acknowledge every packet it receives, it slows the sender and helps prevent congestion.</p>
                <p>Sending fewer acknowledgments means imposing less load on the network.</p>
              </Subsection>

              <Subsection title="5️⃣ Admission Policy">
                <p className="mb-2">A mechanism should be used to prevent congestion. Switches in a flow should first check the resource requirement of a network flow before transmitting it further.</p>
                <p>If there is a chance of congestion or there is congestion in the network, the router should deny establishing a virtual network connection to prevent further congestion.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Closed Loop Congestion Control Mechanisms
              </h2>

              <Subsection title="🔙 Backpressure">
                <ul className="list-disc ml-5 space-y-1">
                  <li>A technique in which a congested node stops receiving packets from the upstream node</li>
                  <li>This may cause the upstream node or nodes to become congested and reject receiving data from above nodes</li>
                  <li>Backpressure is a node-to-node congestion control technique that propagates in the opposite direction of data flow</li>
                </ul>
              </Subsection>

              <Subsection title="🚫 Choke Packet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>A packet sent by a node to the source to inform it of congestion</li>
                  <li>Each router monitors its resources and the utilization at each of its output lines</li>
                  <li>When resource utilization exceeds the threshold value, the router directly sends a choke packet to the source</li>
                  <li>Gives feedback to reduce the traffic</li>
                  <li>The intermediate nodes through which the packets have traveled are not warned about congestion</li>
                </ul>
              </Subsection>

              <Subsection title="🔕 Implicit Signaling">
                <ul className="list-disc ml-5 space-y-1">
                  <li>No communication between the congested nodes and the source</li>
                  <li>The source guesses that there is congestion in a network</li>
                </ul>
                <ExampleBox>
                  <strong>Example:</strong> When sender sends several packets and there is no acknowledgment for a while, one assumption is that there is congestion.
                </ExampleBox>
              </Subsection>

              <Subsection title="📢 Explicit Signaling">
                <ul className="list-disc ml-5 space-y-1">
                  <li>If a node experiences congestion, it can explicitly send a packet to the source or destination to inform about congestion</li>
                  <li>The difference between choke packet and explicit signaling: the signal is included in the packets that carry data rather than creating different packet</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Traffic Shaping
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Another method of congestion control is to "shape" the traffic before it enters the network. Traffic shaping controls the rate at which packets are sent (not just how many). Used in ATM and Integrated Services networks.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                At connection set-up time, the sender and carrier negotiate a traffic pattern (shape).
              </p>

              <HighlightBox title="Two Traffic Shaping Algorithms:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Leaky Bucket</li>
                  <li>Token Bucket</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Leaky Bucket Algorithm
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The Leaky Bucket Algorithm is used to control rate in a network. It is implemented as a single-server queue with constant service time. If the bucket (buffer) overflows then packets are discarded.
              </p>

              <HighlightBox title="How It Works:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>When the host wants to send packet, packet is thrown into the bucket</li>
                  <li>The bucket leaks at a constant rate, meaning the network interface transmits packets at a constant rate</li>
                  <li>Burst traffic is converted to a uniform traffic by the leaky bucket</li>
                  <li>In practice the bucket is a finite queue that outputs at a finite rate</li>
                </ol>
              </HighlightBox>

              <HighlightBox color="purple">
                <p className="mb-2">The leaky bucket enforces a constant output rate (average rate) regardless of the burstiness of the input. Does nothing when input is idle.</p>
                <p>The host injects one packet per clock tick onto the network. This results in a uniform flow of packets, smoothing outbursts and reducing congestion.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Token Bucket Algorithm
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In contrast to the Leaky Bucket, the Token Bucket Algorithm allows the output rate to vary, depending on the size of the burst.
              </p>

              <HighlightBox title="How It Works:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>In regular intervals, tokens are thrown into the bucket</li>
                  <li>The bucket has a maximum capacity</li>
                  <li>If there is a ready packet, a token is removed from the bucket, and the packet is sent</li>
                  <li>If there is no token in the bucket, the packet cannot be sent</li>
                </ol>
              </HighlightBox>

              <HighlightBox color="purple">
                <ul className="list-disc ml-5 space-y-1">
                  <li>In the Token Bucket algorithm, the bucket holds tokens</li>
                  <li>To transmit a packet, the host must capture and destroy one token</li>
                  <li>Tokens are generated by a clock at the rate of one token every t sec</li>
                  <li>Idle hosts can capture and save up tokens (up to the max size of the bucket) to send larger bursts later</li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* Transport Layer Section */}
        {activeSection === 'transport' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transport Layer
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Responsible for end-to-end transportation of data between the applications.
              </p>

              <HighlightBox title="Major Functions:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Multiplexing and De-multiplexing</li>
                  <li>Segmentation</li>
                  <li>Sequencing and Reassembling</li>
                  <li>Error Correction</li>
                  <li>Flow Control</li>
                </ul>
              </HighlightBox>

              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Services are identified at this layer with the help of Port Numbers. The major protocols which take care of data transportation at Transport layer are TCP and UDP.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TCP vs UDP
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 p-2">Feature</th>
                      <th className="border border-gray-300 p-2">TCP</th>
                      <th className="border border-gray-300 p-2">UDP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Full Name</td>
                      <td className="border border-gray-300 p-2">Transmission Control Protocol</td>
                      <td className="border border-gray-300 p-2">User Datagram Protocol</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">Connection</td>
                      <td className="border border-gray-300 p-2">Connection Oriented</td>
                      <td className="border border-gray-300 p-2">Connection Less</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Reliability</td>
                      <td className="border border-gray-300 p-2">Reliable communication (with ACKs)</td>
                      <td className="border border-gray-300 p-2">Unreliable communication (no ACKs)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">Speed</td>
                      <td className="border border-gray-300 p-2">Slower data transportation</td>
                      <td className="border border-gray-300 p-2">Faster data transportation</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Examples</td>
                      <td className="border border-gray-300 p-2">HTTP, FTP, SMTP</td>
                      <td className="border border-gray-300 p-2">DNS, DHCP, TFTP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Multiplexing and De-multiplexing
              </h2>

              <HighlightBox title="Multiplexing:" color="blue">
                <p>The process of combining multiple data signals (either analogue or digital) into one composite signal for transmission over a shared medium (such as a cable, fiber, or wireless channel).</p>
              </HighlightBox>

              <HighlightBox title="De-multiplexing:" color="green">
                <p>The reverse process of multiplexing — it separates the combined (multiplexed) signal back into the original individual signals at the receiving end.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Segmentation
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                The process of breaking down large data into smaller segments for efficient transmission over the network.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Flow Control
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Mechanism to control the rate of data transmission between sender and receiver to prevent the receiver from being overwhelmed.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TCP (Transmission Control Protocol)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                TCP is one of the original protocols designed in the TCP/IP suite and hence the name of the model.
              </p>

              <Subsection title="🤝 Connection Establishment - Three-Way Handshake">
                <p className="mb-2">TCP uses a process called three-way handshake to establish a connection or virtual-circuit with the destination. The three-way handshake uses the SYN and ACK flags in the Code Bits section of the header. This process is necessary to initialize the sequence and acknowledgement number fields.</p>
                
                <HighlightBox title="Three Steps:" color="blue">
                  <ol className="list-decimal ml-5 space-y-2">
                    <li><strong>Step 1 - SYN:</strong>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Client sends a SYN (synchronize) packet to the server</li>
                        <li>Includes initial sequence number</li>
                      </ul>
                    </li>
                    <li><strong>Step 2 - SYN-ACK:</strong>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Server responds with SYN-ACK packet</li>
                        <li>Acknowledges client's SYN</li>
                        <li>Sends its own sequence number</li>
                      </ul>
                    </li>
                    <li><strong>Step 3 - ACK:</strong>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Client sends ACK packet to server</li>
                        <li>Connection is now established</li>
                        <li>Data transfer can begin</li>
                      </ul>
                    </li>
                  </ol>
                </HighlightBox>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                UDP (User Datagram Protocol)
              </h2>

              <HighlightBox color="blue">
                <ul className="list-disc ml-5 space-y-2">
                  <li>The only thing common between TCP and UDP is that they use port numbers to transport traffic</li>
                  <li>The UDP header contains only four parameters:
                    <ul className="list-disc ml-5 mt-1">
                      <li>Source port</li>
                      <li>Destination Port</li>
                      <li>Length</li>
                      <li>Checksum</li>
                    </ul>
                  </li>
                  <li>UDP header is 8 bytes in size</li>
                  <li>TCP has a higher overhead with a larger header and acknowledgements</li>
                  <li>The source also holds data till it receives acknowledgement in TCP</li>
                </ul>
              </HighlightBox>

              <HighlightBox title="When to Use UDP:" color="green">
                <p>Some applications, especially those that deal with voice and video, require fast transport and take care of the reliability themselves at the application layer.</p>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* Application Layer Section */}
        {activeSection === 'application' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Session Layer
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Creates and maintains dialogs between source and destination applications</li>
                <li>Handles the exchange of information to initiate dialogs</li>
                <li>Keeps dialogs active</li>
                <li>Restarts sessions that are disrupted or idle for a long period of time</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Presentation Layer
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The presentation layer has three primary functions:
              </p>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Translation data:</strong> Converts data formats between different systems</li>
                <li><strong>Compression data:</strong> Reduces data size for efficient transmission</li>
                <li><strong>Encrypt data:</strong> Secures data through encryption</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Application Layer
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The application layer is closest to the end user. Network applications enable users to send and receive data with ease.
              </p>

              <HighlightBox color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Acts as interface between the applications and the underlying network</li>
                  <li>Application layer protocols help exchange data between programs running on the source and destination hosts</li>
                  <li>The TCP/IP application layer performs the functions of the upper three layers of the OSI model</li>
                  <li><strong>Common protocols:</strong> HTTP, FTP, TFTP, DNS, SMTP</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                DNS (Domain Name System)
              </h2>

              <Subsection title="🌐 What is DNS?">
                <ul className="list-disc ml-5 space-y-1">
                  <li>DNS is a host name to IP address translation service</li>
                  <li>A distributed database implemented in a hierarchy of name servers</li>
                  <li>On the Internet, DNS automatically converts between the names we type in our web browser address bar to the IP addresses of web servers hosting those sites</li>
                  <li>Larger corporations also use DNS to manage their own company internet</li>
                  <li>Home networks use DNS when accessing the Internet but do not use it for managing the names of home computers</li>
                </ul>
              </Subsection>

              <Subsection title="📊 Domain Name System Structure">
                <p className="mb-2">Alternatively referred to as a namespace, a domain namespace is a name service provided by the Internet for Transmission Control Protocol networks/Internet Protocol (TCP/IP).</p>
                <p className="mb-2">DNS is broken up into domains, a logical organization of computers that exist in a larger network.</p>
                <p>Hierarchy of domain naming on the internet from top-level domains (TLD) down to subdomains.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                HTTP and HTTPS
              </h2>

              <Subsection title="🌐 HTTP (HyperText Transfer Protocol)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Is a request/response protocol</li>
                  <li>Has three common message types: GET, POST, PUT</li>
                  <li>Is not secure - messages can be intercepted</li>
                </ul>
              </Subsection>

              <Subsection title="🔒 HTTPS (HTTP Secure)">
                <p>Uses authentication and encryption to secure data</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Email Address
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                To deliver mail, a mail handling system must use an addressing system with unique addresses. In the Internet, the address consists of two parts: a local part and a domain name, separated by @ sign.
              </p>

              <HighlightBox title="Email Address Structure:" color="blue">
                <div className="text-center font-mono my-3">
                  [Local Part] @ [Domain Name]
                </div>
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Local Part:</strong> Address of the mailbox on the mail server</li>
                  <li><strong>Domain Name:</strong> The domain name of the mail server</li>
                </ul>
              </HighlightBox>

              <Subsection title="📧 Email Address Components">
                <p className="mb-2"><strong>Local Part:</strong></p>
                <p className="mb-2">Defines the name of a special file called the e-user mailbox, where all the mail received for a user is stored for retrieval by the message access agent.</p>
                
                <p className="mb-2 mt-3"><strong>Domain Name:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>The second part of the address is the domain name part</li>
                  <li>An organization usually selects one or more hosts to receive and send e-mail (mail servers)</li>
                  <li>The domain name assigned to each mail exchanger comes from the DNS database or is a logical name (e.g., the name of the organization)</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Email Protocols
              </h2>

              <Subsection title="📤 SMTP (Simple Mail Transfer Protocol)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Connection-oriented application layer protocol</li>
                  <li>Used to send and receive email messages</li>
                  <li>Introduced in 1982 by RFC 821</li>
                  <li>Last updated in 2008 by RFC 5321</li>
                  <li>Mail servers and mail transfer agents use SMTP to both send and receive messages</li>
                  <li>User-level applications use it only for sending messages</li>
                </ul>
              </Subsection>

              <Subsection title="📥 POP3 (Post Office Protocol Version 3)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Application layer protocol used by email clients to retrieve email messages from mail servers over TCP/IP network</li>
                  <li>Very simple protocol to implement but that limits its usage</li>
                  <li>Supports only one mail server for each mailbox</li>
                </ul>
              </Subsection>

              <Subsection title="📬 IMAP (Internet Message Access Protocol)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Defined by RFC 3501</li>
                  <li>Enables email clients to retrieve email messages from mail servers over TCP/IP connection</li>
                  <li>Designed to retrieve messages from multiple mail servers</li>
                  <li>All modern email clients and servers like Gmail, Outlook, and Yahoo Mail support IMAP or POP3 protocol</li>
                </ul>
              </Subsection>

              <Subsection title="📁 FTP (File Transfer Protocol)">
                <p className="mb-2">Using FTP to transfer files is helpful in these ways:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Easily transfers files between two different networks</li>
                  <li>Can resume file transfer sessions even if connection is dropped (if protocol is configured appropriately)</li>
                  <li>Enables collaboration between geographically separated teams</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                World Wide Web (WWW)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Developed in the 1980s by Tim Berners-Lee at CERN Switzerland</li>
                <li>Complex web of websites and web pages connected together through hypertexts</li>
                <li><strong>Hypertext:</strong> A word or group of words linking to another web page of the same or different website</li>
                <li>Evolution from ARPANET to WWW was possible due to many new achievements by researchers and computer scientists all over the world</li>
              </ul>
            </SectionCard>
         <SectionCard><h2 className="sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Data Link Layer Design Issues
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Service provided to the Network Layer</li>
                <li>Framing</li>
                <li>Error Control</li>
                <li>Flow Control</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Service Provided to the Network Layer
              </h2>

              <Subsection title="1️⃣ Unacknowledged Connectionless">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Used when error rate is low</li>
                  <li>No connection establishment</li>
                  <li>Sends independent frames</li>
                  <li>No acknowledgement</li>
                  <li>No flow control</li>
                  <li>No error control</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Acknowledged Connectionless">
                <p>Provides acknowledgment without establishing a connection (suitable for unreliable channels)</p>
              </Subsection>

              <Subsection title="3️⃣ Acknowledged Connection-Oriented">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Connection establishment</li>
                  <li>Each frame is numbered</li>
                  <li>Frames delivered in serial order</li>
                  <li>Acknowledgement</li>
                  <li>Guarantees that all frames received</li>
                  <li>Flow control</li>
                  <li>Error control</li>
                  <li><strong>Protocols:</strong> HTTP, FTP, SMTP</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Flow Control
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                It refers to a set of procedures used to restrict the amount of data that the sender can send before waiting for acknowledgment.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Error Control
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Network is responsible for transmission of data from one device to another device. The end to end transfer of data from a transmitting application to a receiving application involves many steps, each subject to error.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                With the error control process, we can be confident that the transmitted and received data are identical. Data can be corrupted during transmission. For reliable communication, errors must be detected and corrected.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Framing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Translation of physical layer's raw bits into a larger aggregate (or) discrete units called frames.
              </p>

              <HighlightBox title="Two Types of Frames:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Fixed Length:</strong> All frames have the same size</li>
                  <li><strong>Variable Length:</strong> Frames can have different sizes</li>
                </ul>
              </HighlightBox>

              <HighlightBox title="Frame Structure:" color="purple">
                <div className="font-mono text-center my-2">
                  [Header | Payload | Trailer]
                </div>
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Header:</strong> Frame starting bits, Address of source/destination, Type of data, Quality control</li>
                  <li><strong>Payload:</strong> Actual data</li>
                  <li><strong>Trailer:</strong> Frame stopping bits, Error detection</li>
                </ul>
              </HighlightBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Fixed Length Frame Example:</p>
                <p>If each frame is 10 bits (header) + 20 bits (data) + 10 bits (trailer) = 40 bits total</p>
                <p>200 bits of data needs: 200 ÷ 20 = 10 frames</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Framing Methods
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                How can the receiver recognize the start and end of a frame?
              </p>

              <Subsection title="1️⃣ Character Count">
                <ul className="list-disc ml-5 space-y-1">
                  <li>A field in the header specifies the number of characters in the frame</li>
                  <li>The Data Link Layer at the destination looks at the character count and decides the end of the frame</li>
                  <li><strong>Drawback:</strong> If any count is garbled by a transmission error, the destination is unable to decide the frames</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Flag Byte with Byte Stuffing">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Each frame starts and ends with special bytes – Flag Bytes</li>
                  <li>If the flag byte occurs in the frame, stuff an extra Escape byte (ESC)</li>
                  <li>A serious problem occurs when binary data itself contains flag byte's bit pattern</li>
                  <li>Solution: Sender's data link layer inserts a special escape byte (ESC) just before each "accidental" flag byte in the data</li>
                  <li>At receiving end, data link layer removes the escape byte before the data are given to the network layer</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Bit Stuffing">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Data frames can contain an arbitrary number of bits</li>
                  <li>Allows character codes with an arbitrary number of bits per character</li>
                  <li>Each frame begins and ends with a special bit pattern: 01111110 (flag byte)</li>
                  <li>Whenever sender's data link layer encounters five consecutive 1s in the data, it automatically stuffs a 0 bit into the outgoing bit stream</li>
                  <li>When receiver sees five consecutive incoming 1 bits followed by a 0 bit, it automatically destuffs the 0 bit</li>
                  <li>Completely transparent to the network layer</li>
                </ul>
                <ExampleBox>
                  <p className="font-semibold mb-1">Example:</p>
                  <p className="mb-1">Original data: 01111110</p>
                  <p className="mb-1">Transmitted as: 011111010</p>
                  <p>Stored in receiver's memory after destuffing: 01111110</p>
                </ExampleBox>
              </Subsection>

              <Subsection title="4️⃣ Physical Layer Coding Violations">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Applicable to networks where encoding on physical medium contains redundancy</li>
                  <li>Normally, a 1 bit is a high-low pair and a 0 bit is a low-high pair</li>
                  <li>Combinations of low-low and high-high (not used for data) may be used for marking frame boundaries</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Error Detection and Correction
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Data can be corrupted during transmission. For reliable communication, errors must be detected and corrected.
              </p>

              <HighlightBox title="What is an Error?" color="red">
                <p className="mb-2">Error is a condition when the output information does not match with the input information.</p>
                <p>During transmission, digital signals suffer from noise that can introduce errors in the binary bits traveling from one system to other. That means a 0 bit may change to 1 or a 1 bit may change to 0.</p>
              </HighlightBox>

              <Subsection title="📊 Error Detection Methods">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Parity Check</li>
                  <li>Checksum</li>
                  <li>Cyclic Redundancy Check (CRC)</li>
                </ul>
              </Subsection>

              <Subsection title="🔧 Error Correction Methods">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Hamming Code (Error Detection and Correction both)</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Parity Check
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                An additional bit, added with original block to perform checking of data. A parity bit, or check bit is a bit added to the end of a string of binary code that indicates whether the number of bits in the string with the value one is even or odd.
              </p>

              <HighlightBox title="Types of Parity:" color="blue">
                <p className="mb-2"><strong>Even Parity:</strong> Total number of 1s (including parity bit) should be even</p>
                <p><strong>Odd Parity:</strong> Total number of 1s (including parity bit) should be odd</p>
              </HighlightBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Examples:</p>
                <p className="mb-1">Data: 0110000 → Even Parity: 01100000 (adding 0)</p>
                <p>Data: 1101000 → Even Parity: 11010001 (adding 1)</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Checksum
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                To compute the checksum, the sender treats the data unit as a sequence of a certain number of blocks, all with the same number of bits. The sender and receiver agree on how long are the blocks. The sender adds the blocks using one's complement arithmetic and creates an additional block with the same size.
              </p>
              <ExampleBox>
                <p className="font-mono">10000100 00100100 11100010 10011001</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Hamming Code
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Given by R.W Hamming. Easy to implement. 7-bit hamming code is commonly used.
              </p>

              <HighlightBox title="Components:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Data bits:</strong> Original information bits</li>
                  <li><strong>Parity bits:</strong> Additional bits for error detection and correction</li>
                </ul>
              </HighlightBox>

              <Subsection title="📝 Hamming Code Algorithm">
                <ol className="list-decimal ml-5 space-y-2">
                  <li>Write the bit positions starting from 1 in binary form (1, 10, 11, 100, etc)</li>
                  <li>All bit positions that are a power of 2 are marked as parity bits (1, 2, 4, 8, etc)</li>
                  <li>All other bit positions are marked as data bits</li>
                  <li>Each data bit is included in a unique set of parity bits:
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Parity bit 1 covers all bits whose binary representation includes a 1 in the least significant position (1, 3, 5, 7, 9, 11, etc)</li>
                      <li>Parity bit 2 covers all bits whose binary representation includes a 1 in the second position (2, 3, 6, 7, 10, 11, etc)</li>
                      <li>Parity bit 4 covers all bits whose binary representation includes a 1 in the third position (4–7, 12–15, 20–23, etc)</li>
                    </ul>
                  </li>
                  <li>For even parity: Set a parity bit to 1 if the total number of ones in the positions it checks is odd</li>
                  <li>Set a parity bit to 0 if the total number of ones in the positions it checks is even</li>
                </ol>
              </Subsection>

              <ExampleBox>
                <p className="font-semibold mb-2">Example: Data = 1101</p>
                <p className="mb-1">7-bit Hamming Code format: P1 P2 D3 P4 D5 D6 D7</p>
                <p>Where P = Parity bits, D = Data bits</p>
              </ExampleBox>

              <HighlightBox title="Practice Problem:" color="yellow">
                <p>If the 7-bit hamming code word received is 1011011. Assuming even parity, state whether the received code word is correct or wrong. If wrong, locate the bit having error.</p>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* MAC Layer Section */}
        {activeSection === 'mac' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Why Do We Need the MAC Layer?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In a computer network, multiple devices share the same communication medium (cables or wireless signals).
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>If devices transmit data at the same time, signals collide → data is lost → retransmissions are required</li>
                <li>Collisions reduce network performance and cause delays</li>
              </ul>

              <HighlightBox title="The MAC Layer Defines:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Who can transmit</li>
                  <li>When to transmit</li>
                  <li>How to handle collisions</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Medium Access Sublayer
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Data link layer divided into two functionality-oriented sublayers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HighlightBox title="LLC (Logical Link Control)" color="blue">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Identifies which network protocol (e.g., IP, ARP, IPv6) is carried in the frame</li>
                    <li>Provides flow control to prevent overwhelming receivers</li>
                    <li>Performs error checking and provides error notification</li>
                  </ul>
                </HighlightBox>

                <HighlightBox title="MAC (Medium Access Control)" color="green">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Assigns each device a unique identifier (MAC address)</li>
                    <li>Determines how devices share the medium and avoid collisions</li>
                    <li>Adds information to frames for addressing and error detection</li>
                  </ul>
                </HighlightBox>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Functions of MAC Layer
              </h2>

              <Subsection title="1️⃣ Abstraction of the Physical Layer">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Provides an interface between the Physical Layer and upper layers (LLC and Network Layer)</li>
                  <li>Upper layers don't need to worry about the actual medium (wired or wireless)</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Frame Encapsulation">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Encapsulates network data into frames suitable for transmission</li>
                  <li>Adds header (source & destination MAC addresses) and trailer (Frame Check Sequence for error detection)</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Addressing">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Assigns unique MAC addresses to each device's NIC (Network Interface Card)</li>
                  <li>Determines source and destination addresses for frame delivery</li>
                  <li>Supports unicast, broadcast, and multicast delivery</li>
                </ul>
              </Subsection>

              <Subsection title="4️⃣ Access Control & Multiple Access Resolution">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Determines which device can use the medium when multiple devices want to transmit</li>
                  <li>Implements multiple access protocols (Random Access: CSMA/CD, CSMA/CA; Controlled Access: Token Passing, Polling)</li>
                  <li>Prevents collisions and ensures fair sharing of the medium</li>
                </ul>
              </Subsection>

              <Subsection title="5️⃣ Collision Handling & Retransmission">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Detects collisions on the medium (e.g., Ethernet CSMA/CD)</li>
                  <li>Initiates retransmission after a random backoff or waiting period</li>
                </ul>
              </Subsection>

              <Subsection title="6️⃣ Frame Delivery">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Ensures frames are delivered to the correct destination device</li>
                  <li>Works with switches and access points to forward frames accurately</li>
                </ul>
              </Subsection>

              <Subsection title="7️⃣ Error Detection">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Generates Frame Check Sequence (FCS) using CRC (Cyclic Redundancy Check)</li>
                  <li>Detects corrupted frames and prevents them from reaching upper layers</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Medium Access Protocols
              </h2>

              <HighlightBox title="Three Categories:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li><strong>Random Access Protocol:</strong> ALOHA, CSMA, CSMA/CD, CSMA/CA</li>
                  <li><strong>Controlled Access Protocol:</strong> Reservation, Polling, Token Passing</li>
                  <li><strong>Channelization Protocol:</strong> FDMA, TDMA, CDMA</li>
                </ol>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Random Access Protocol
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In random access methods, all stations are treated equally — no one has control over the channel. Any device can attempt to transmit data at any time, without permission from others.
              </p>

              <HighlightBox title="Key Characteristics:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>No centralized control or scheduling</li>
                  <li>Collisions can occur when multiple stations transmit simultaneously</li>
                  <li>Protocols define how stations detect or avoid collisions and retry sending</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                ALOHA Random Access Protocol
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                ALOHA was the first random access protocol, developed at the University of Hawaii in the 1970s for wireless communication. It laid the foundation for modern wireless and shared medium access methods.
              </p>

              <Subsection title="📡 Pure ALOHA">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Transmit anytime without checking if channel is free</li>
                  <li>Susceptible to high collision</li>
                  <li>Efficiency: ~18%</li>
                  <li>Stations transmit whenever they have data to send</li>
                  <li>If acknowledgment is not received, retransmit after random time</li>
                </ul>
              </Subsection>

              <Subsection title="⏰ Slotted ALOHA">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Time is divided into discrete slots</li>
                  <li>Transmit only at the beginning of time slots</li>
                  <li>Reduces collision window by half</li>
                  <li>Efficiency: ~36%</li>
                  <li>Requires time synchronization between stations</li>
                </ul>
              </Subsection>

              <HighlightBox title="Applications:" color="green">
                <p>Still relevant in low-power wireless networks like LoRa, LPWAN, and some satellite links</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Carrier Sense Multiple Access (CSMA)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Basic concept: "sense before transmit" or "listen before talk."
              </p>

              <HighlightBox color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>If channel is sensed idle → transmit the frame</li>
                  <li>If channel is sensed busy → defer the transmission</li>
                  <li>Reduces the collisions and increases the performance</li>
                </ul>
              </HighlightBox>

              <Subsection title="1️⃣ 1-Persistent CSMA">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Sense the carrier</li>
                  <li>If idle, send the frame immediately</li>
                  <li>If busy, continuously sense (listen) until it becomes idle and send immediately</li>
                  <li>High risk of collision, especially when multiple stations are waiting</li>
                  <li>In case of collision, sender waits for random period and attempts to transmit again (with probability = 1)</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Non-Persistent CSMA">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Sense the carrier</li>
                  <li>If idle, sends the frame immediately</li>
                  <li>If busy, station waits random time and then senses the carrier again</li>
                  <li><strong>Advantage:</strong> Reduces the chances of collision</li>
                  <li><strong>Disadvantage:</strong> Reduces the efficiency of the network</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ P-Persistent CSMA">
                <p className="mb-2">Used if the channel has time slots with slot duration equal to or greater than the maximum propagation time.</p>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>After finding the line idle:
                    <ul className="list-disc ml-5 mt-1">
                      <li>With probability p, the station sends its frame</li>
                      <li>With probability q = 1-p, wait for next time slot and check again</li>
                    </ul>
                  </li>
                  <li>If line is busy, acts as though collision occurred and uses backoff procedure</li>
                </ol>
                <p className="mt-2"><strong>Applications:</strong> Used in CSMA/CA systems including Wi-Fi and other packet radio systems</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                CSMA/CD protocol can be considered as a refinement over the CSMA scheme. The nodes continue to monitor the channel while transmitting a packet and immediately cease transmission when collision is detected. This scheme is known as Listen-While-Talk.
              </p>

              <Subsection title="📋 Two Rules">
                <ol className="list-decimal ml-5 space-y-2">
                  <li>If collision is detected during transmission, the station will immediately cease/abort the transmission and send a Jamming signal (for a brief duration) to enforce the collision to all other stations</li>
                  <li>After transmitting the jamming signal, the station waits for a random amount of time and then transmission is resumed</li>
                </ol>
              </Subsection>

              <HighlightBox title="Binary Exponential Backoff:" color="purple">
                <p className="mb-2">A node will attempt to transmit repeatedly in the face of repeated collisions, but after each collision, the mean value of random delay is doubled.</p>
                <p><strong>Note:</strong> Jamming signal is a 48-bit jamming sequence by station to indicate collision to other stations around the network.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                CSMA/CA is used in wireless networks. In wireless networks most of the energy is lost due to transmission. So collisions can add 5-10% additional energy which can't be well detected. So collisions are avoided using three CSMA/CA strategies:
              </p>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Inter-Frame Space:</strong> Waiting period between frames</li>
                <li><strong>Contention Window:</strong> Random backoff time before transmission</li>
                <li><strong>Acknowledgments:</strong> Confirms successful reception</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Controlled Access Protocols
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In controlled access, the stations consult one another to find which station has the right to send. A station cannot send unless it has been authorized by other stations.
              </p>

              <Subsection title="1️⃣ Reservation">
                <p>Stations reserve time slots before transmission</p>
              </Subsection>

              <Subsection title="2️⃣ Polling">
                <p>Primary station polls secondary stations to determine which has data to send. Uses Select and Poll functions to have communication between primary and secondary stations.</p>
              </Subsection>

              <Subsection title="3️⃣ Token Passing">
                <p>A special data packet called "token" circulates among devices. Only the device that holds the token is allowed to send data. Once finished, it passes the token to the next device.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Token Passing Control Access Protocol
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Token Passing is a deterministic network access method where a special data packet called a "token" circulates among the devices (or nodes) on the network.
              </p>

              <HighlightBox title="How It Works:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Only the device that holds the token is allowed to send data</li>
                  <li>Once the device finishes transmission, it passes the token to the next device</li>
                  <li>Forms a logical ring topology</li>
                  <li>No collisions occur</li>
                  <li>Predictable and fair access</li>
                </ul>
              </HighlightBox>

              <HighlightBox title="FDDI Token Ring Frame Format:" color="purple">
                <p className="mb-1">Contains fields for:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Start Delimiter</li>
                  <li>Frame Control</li>
                  <li>Destination Address</li>
                  <li>Source Address</li>
                  <li>Data</li>
                  <li>FCS (Frame-Check Sequence)</li>
                  <li>End Delimiter</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Channelization Protocol
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Channelization is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations.
              </p>

              <Subsection title="1️⃣ Frequency-Division Multiple Access (FDMA)">
                <p>Bandwidth divided into frequency bands, each assigned to a different user</p>
              </Subsection>

              <Subsection title="2️⃣ Time-Division Multiple Access (TDMA)">
                <p>Bandwidth divided into time slots, each assigned to a different user</p>
              </Subsection>

              <Subsection title="3️⃣ Code-Division Multiple Access (CDMA)">
                <p>Users share the same frequency band but use different codes to separate their data</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Ethernet
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                In computer networking, Ethernet is a technology for connecting devices in a local area network (LAN). It defines how data is transmitted over a wired network and is one of the most commonly used LAN technologies in the world.
              </p>

              <HighlightBox title="Key Characteristics:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Medium:</strong> Usually uses twisted pair cables (Cat5e, Cat6) and sometimes fiber optics</li>
                  <li><strong>Speed:</strong> Common speeds include 100 Mbps, 1 Gbps (Gigabit Ethernet), 10 Gbps, etc.</li>
                  <li><strong>Standard:</strong> Defined by the IEEE 802.3 standard</li>
                  <li><strong>Data Transmission:</strong> Uses frames to transmit data between devices</li>
                  <li><strong>Topology:</strong> Typically uses star or bus topology</li>
                  <li><strong>Switch/Hub:</strong> Devices usually connected through a switch (or older hubs)</li>
                </ul>
              </HighlightBox>

              <ExampleBox>
                <p className="font-semibold mb-2">Example Setup:</p>
                <p className="mb-1">Imagine you have:</p>
                <ul className="list-disc ml-5">
                  <li>A computer</li>
                  <li>A printer</li>
                  <li>A router</li>
                </ul>
                <p className="mt-2">If you connect all of them with Ethernet cables and a switch, they can communicate quickly and reliably within the same network.</p>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What You Need in an Ethernet LAN
              </h2>

              <Subsection title="1️⃣ Ethernet Cables">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Physical wires that connect devices</li>
                  <li>Common types: Cat5e, Cat6, or Cat6a</li>
                  <li>Used to connect PCs, printers, switches, and routers</li>
                </ul>
              </Subsection>

              <Subsection title="2️⃣ Network Interface Cards (NICs)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Every device must have a NIC</li>
                  <li>Most modern devices have a built-in Ethernet port</li>
                </ul>
              </Subsection>

              <Subsection title="3️⃣ Switch or Hub">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Switch is preferred: faster and smarter</li>
                  <li>Connects all devices and manages data traffic efficiently</li>
                  <li>Hub is older technology, rarely used now</li>
                </ul>
              </Subsection>

              <Subsection title="4️⃣ Router (Optional but Common)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Needed if LAN needs Internet access</li>
                  <li>Connects LAN to the Internet</li>
                  <li>Often includes a built-in switch with multiple Ethernet ports</li>
                </ul>
              </Subsection>

              <Subsection title="5️⃣ Power Supply">
                <p>All devices like routers and switches need power. Make sure power outlets are available where needed.</p>
              </Subsection>

              <Subsection title="6️⃣ Devices to Connect">
                <p>PCs, laptops, printers, IP phones, game consoles, etc.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of Ethernet
              </h2>

              <Subsection title="🔵 Classic Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Standardized to provide 10 Mbps communication</li>
                  <li>Uses Manchester encoding</li>
                  <li>Possible to have different types of connections</li>
                </ul>
              </Subsection>

              <Subsection title="⚡ Fast Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Can transfer data at a rate of 100 Mbps</li>
                  <li>Uses twisted-pair cable or fiber-optic cable</li>
                  <li>Based on proven CSMA/CD Media Access Control (MAC) protocol</li>
                  <li>Uses existing 10BaseT cabling</li>
                  <li>Data can move from 10 Mbps to 100 Mbps without protocol translation</li>
                </ul>
              </Subsection>

              <Subsection title="🚀 Gigabit Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Capable of transferring data at 1000 Mbps (1 Gbps)</li>
                  <li>Based on twisted-pair or fiber optic cable</li>
                  <li>Very popular</li>
                  <li>Supported by Cat 5e cable</li>
                  <li>All four pairs of twisted wires used to achieve high data transfer rates</li>
                </ul>
              </Subsection>

              <Subsection title="⚡ 10 Gigabit Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Latest generation delivering 10 Gbit/s (10,000 Mbit/s)</li>
                  <li>Uses fiber optic or twisted pair cable</li>
                  <li>10GBASE-LX4, 10GBASE-ER, and 10GBASE-SR based on optical fiber can bridge up to 10,000 m (6.2 miles)</li>
                  <li>Twisted pair solution requires high quality cable (Cat-6a or Cat-7)</li>
                  <li>Mainly used for backbones in high-end applications</li>
                </ul>
              </Subsection>

              <Subsection title="🔷 40 Gigabit & 100 Gigabit Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Speed:</strong> 40 Gbps and 100 Gbps</li>
                  <li><strong>Cable Type:</strong> Primarily fiber optic (multimode & single-mode), limited use of Cat8 for short distances</li>
                  <li><strong>Usage:</strong> Enterprise networks, data centers & cloud providers, ISP backbones & telecom infrastructure</li>
                </ul>
              </Subsection>

              <Subsection title="💎 Terabit Ethernet">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Next-generation standard aiming for 400 Gbps, 1 Tbps, and beyond</li>
                  <li><strong>Current deployments:</strong> 400 Gigabit Ethernet (400GbE)</li>
                  <li><strong>Future goal:</strong> 1 Terabit per second (Tbps) and higher</li>
                  <li><strong>Cable Type:</strong> Primarily fiber optic with advanced multiplexing</li>
                  <li><strong>Usage:</strong> High-performance computing (HPC), large-scale cloud infrastructures, next-gen ISP backbones, Big data, AI, and 5G/6G networks</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Different Types of Ethernet Cables
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Different variants of Ethernet technologies are designated according to the type and diameter of the cables used:
              </p>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>10Base2:</strong> Thin coaxial cable (thin Ethernet)</li>
                <li><strong>10Base5:</strong> Thick coaxial cable (thick Ethernet)</li>
                <li><strong>10Base-T:</strong> Twisted-pair cable, speed around 10 Mbps</li>
                <li><strong>100Base-FX:</strong> Multimode fiber optic, achieves 100 Mbps</li>
                <li><strong>100Base-TX:</strong> Similar to 10Base-T, but 10 times greater speed (100 Mbps)</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Wireless LAN (WLAN)
              </h2>

              <Subsection title="✅ Advantages of WLAN">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Availability of low-cost portable equipment</li>
                  <li>Mobility</li>
                  <li>Installation speed and simplicity</li>
                  <li>Installation flexibility</li>
                  <li>Reduced cost of ownership</li>
                  <li>Scalability</li>
                </ul>
              </Subsection>

              <Subsection title="❌ Why It Was Not Popular in the Past">
                <ul className="list-disc ml-5 space-y-1">
                  <li>High cost</li>
                  <li>Low data rate</li>
                  <li>Occupational safety concerns</li>
                  <li>Licensing requirements</li>
                </ul>
              </Subsection>

              <Subsection title="📊 Parameters Characterizing a LAN">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Transmission Media</li>
                  <li>Topology</li>
                  <li>Medium Access Control Techniques</li>
                </ul>
              </Subsection>

              <Subsection title="📱 Bluetooth Topology">
                <p className="mb-2">Two types: Piconet and Scatternet</p>
                <p className="mb-2"><strong>Piconet:</strong> A small ad hoc network of 8 stations</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>One is called Master and the others are called Slaves</li>
                  <li>All slave stations synchronize their clocks with the master</li>
                  <li>Possible communication: One-to-one or one-to-many</li>
                  <li>There may be one station in parked state</li>
                </ul>
              </Subsection>

              <Subsection title="🏢 Applications of WLAN">
                <ul className="list-disc ml-5 space-y-1">
                  <li>LAN Extensions</li>
                  <li>Buildings having large open floors</li>
                  <li>Small offices</li>
                  <li>Rescue operation sites</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Network Devices
              </h2>

              <Subsection title="🔄 Hub">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Basically a multiport repeater</li>
                  <li>Connects multiple wires coming from different branches</li>
                  <li>Cannot filter data, so data packets are sent to all connected devices</li>
                  <li>Collision domain of all hosts connected through Hub remains one</li>
                  <li>No intelligence to find out best path for data packets</li>
                  <li>Leads to inefficiencies and wastage</li>
                </ul>
              </Subsection>

              <Subsection title="🌉 Bridge">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Operates at data link layer</li>
                  <li>A repeater with added functionality of filtering content by reading MAC addresses</li>
                  <li>Used for interconnecting two LANs working on the same protocol</li>
                  <li>Has a single input and single output port (2 port device)</li>
                </ul>
              </Subsection>

              <Subsection title="🔀 Switch">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Multi-port bridge with a buffer</li>
                  <li>Data link layer device</li>
                  <li>Can perform error checking before forwarding data</li>
                  <li>Very efficient - does not forward packets that have errors</li>
                  <li>Forwards good packets selectively to correct port only</li>
                  <li>Divides collision domain of hosts, but broadcast domain remains same</li>
                </ul>
              </Subsection>

              <Subsection title="🛣️ Router">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Routes data packets based on their IP addresses</li>
                  <li>Mainly a Network Layer device</li>
                  <li>Connects LANs and WANs together</li>
                  <li>Has a dynamically updating routing table</li>
                  <li>Makes decisions on routing the data packets based on routing table</li>
                  <li>Divides broadcast domains of hosts connected through it</li>
                </ul>
              </Subsection>
            </SectionCard>
          </div>
        )}
    
        {/* Network Layer Section */}
        {activeSection === 'network' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Network Layer
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The network layer is responsible for routing packets from the source to destination.
              </p>

              <HighlightBox title="Key Functions:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Store-and-forward packet switching</li>
                  <li>Services provided to transport layer</li>
                  <li>Implementation of connectionless service</li>
                  <li>Implementation of connection-oriented service</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Routing Algorithms
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The routing algorithm is the piece of software that decides where a packet goes next (e.g., which output line, or which node on a broadcast channel).
              </p>

              <HighlightBox color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>For connectionless networks, the routing decision is made for each datagram</li>
                  <li>For connection-oriented networks, the decision is made once, at circuit setup time</li>
                </ul>
              </HighlightBox>

              <p className="text-xs sm:text-sm text-gray-700 mt-3 mb-3">
                There are many nodes in a computer network. Routing is the process of forwarding a packet from source node to the destination and it is important to find the best path to send the packets. It can be found using a routing algorithm.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Routing Algorithms - Common Requirements
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Correctness:</strong> No deadlocks, unreachable states</li>
                <li><strong>Simplicity:</strong> Fast handling of packets, less failures</li>
                <li><strong>Robustness:</strong> Dealing with failures, changes of the topology and of the traffic</li>
                <li><strong>Stability:</strong> Should be stable under all possible circumstances</li>
                <li><strong>Optimality:</strong> Should be optimal in terms of throughput and minimizing mean packet delays</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of Routing Algorithms
              </h2>

              <Subsection title="🔄 Dynamic Routing Algorithms">
                <p className="mb-2">Also called adaptive routing</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Use adaptive algorithms</li>
                  <li>Change routing decisions based on topology and network traffic</li>
                  <li>Adjacent routers or all routers provide routing information</li>
                  <li>Main optimization parameters: hops, distance, and estimated transit time</li>
                </ul>
              </Subsection>

              <Subsection title="📌 Static Routing Algorithms">
                <p className="mb-2">Use non-adaptive routing algorithms</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Routing information downloads to routers when booting up the network</li>
                  <li>Do not take routing decisions based on network topology or traffic</li>
                </ul>
              </Subsection>

              <HighlightBox title="Algorithm Categories:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Static:</strong> Shortest path routing algorithm</li>
                  <li><strong>Dynamic:</strong> Link state routing algorithm</li>
                  <li>Broadcast routing algorithm</li>
                  <li>Multicast routing algorithm</li>
                  <li>Hierarchical routing algorithm</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Shortest Path Algorithm (Dijkstra's Algorithm)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph.
              </p>

              <HighlightBox title="Practice Problems:" color="yellow">
                <p className="mb-2">Try solving the shortest path for these graphs:</p>
                <p className="mb-2"><strong>Example 1:</strong> Undirected graph with nodes 0-8 and various edge weights</p>
                <p><strong>Example 2:</strong> Directed graph with nodes A-E and specified edge weights</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Link State Routing Algorithm
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Each router must do the following:
              </p>

              <ol className="list-decimal ml-5 space-y-1 text-xs sm:text-sm text-gray-700 mb-3">
                <li>Discover its neighbors, learn their network address</li>
                <li>Measure the delay or cost to each of its neighbors</li>
                <li>Construct a packet telling all it has just learned</li>
                <li>Send this packet to all other routers</li>
                <li>Compute the shortest path to every other router</li>
              </ol>

              <HighlightBox title="Steps to Create Forwarding Table:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Create a Forward Table - Consider all the neighbors</li>
                  <li>Build Least Cost tree from source</li>
                </ol>
              </HighlightBox>

              <HighlightBox title="Exercise:" color="yellow">
                <p>Create forwarding table using link state routing algorithm for given topology with costs.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Hierarchical Routing Algorithm
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Routers are classified in groups known as regions</li>
                <li>Each router has only the information about the routers in its own region</li>
                <li>Has no information about routers in other regions</li>
                <li>Routers only contain the record of their immediate neighbors in the table</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Broadcast Routing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Host needs to send messages to many or all other hosts in a network. Sending a packet to all destinations simultaneously is called broadcasting.
              </p>

              <ExampleBox>
                <p className="font-semibold mb-2">Examples of Broadcasting:</p>
                <ul className="list-disc ml-5">
                  <li>Service distributing weather reports</li>
                  <li>Stock market updates</li>
                  <li>Live radio programs</li>
                </ul>
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Multicast Routing
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Sending a message to a group of hosts out of a large number of computers without broadcasting.
              </p>

              <HighlightBox color="blue">
                <p className="mb-2"><strong>Spanning tree:</strong> Tree containing all the vertices and some/all edges of a tree without cycles</p>
                <p className="mb-1">Concepts:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>A network with spanning tree for leftmost router</li>
                  <li>A multicast tree for different groups</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Congestion Control
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                When one part of the subnet (e.g. one or more routers in an area) becomes overloaded, congestion results.
              </p>

              <HighlightBox color="red">
                <p className="mb-2">Because routers are receiving packets faster than they can forward them, one of two things must happen:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>The subnet must prevent additional packets from entering the congested region until those already present can be processed</li>
                  <li>The congested routers can discard queued packets to make room for those that are arriving</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Factors that Cause Congestion
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Packet arrival rate exceeds the outgoing link capacity</li>
                <li>Insufficient memory to store arriving packets</li>
                <li>Burst traffic</li>
                <li>Slow processor</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Congestion Control Mechanisms
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Congestion control refers to techniques and mechanisms that can either prevent congestion before it happens, or remove congestion after it has happened.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <HighlightBox title="🔓 Open-Loop Congestion Control" color="blue">
                  <p className="mb-2">Prevention - policies applied before congestion happens</p>
                  <p>Congestion control is handled by either the source or the destination</p>
                </HighlightBox>

                <HighlightBox title="🔒 Closed-Loop Congestion Control" color="green">
                  <p className="mb-2">Removal - handles congestion after it occurs</p>
                  <p>Feedback-based approach</p>
                </HighlightBox>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg"></h2>
              </SectionCard>
          </div>
        )}
        {/* Footer */}
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm">
          <p className="font-semibold mb-2">Computer Networks - ICT 1163</p>
          <p>Fabrikam Residences</p>
        </div>
      </div>
    </div>
  );
}