// datasets/computer-networks/lesson08.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson08Dataset: Dataset = {
  id: "networks-08",
  topicCount: 14,
  category: "Computer Networks",
  subcategory: "Network Layer, Routing Algorithms, Congestion Control",
  description: "Network layer fundamentals, routing algorithms (shortest path, link state, hierarchical), broadcast and multicast routing, congestion control mechanisms, traffic shaping algorithms including leaky bucket and token bucket.",
  topics: [
    "Network Layer",
    "Types of Routing Algorithms",
    "Shortest Path Routing Algorithm",
    "Link State Routing Algorithm",
    "Hierarchical Routing Algorithm",
    "Broadcast Routing",
    "Multicast Routing",
    "Congestion Control",
    "Open Loop Congestion Control",
    "Closed Loop Congestion Control",
    "Traffic Shaping",
    "Leaky Bucket Algorithm",
    "Token Bucket Algorithm",
    "Key Concepts Summary",
  ],
  content: `
<TOPIC_START index="0" title="Network Layer">
1.0 Network Layer

1.1 Network Layer Overview
• The **network layer** is responsible for **routing packets** from the source to destination.
• Implements **store-and-forward packet switching**.
• Provides services to the transport layer.
• Can implement both **connectionless** and **connection-oriented** services.

1.2 Routing Algorithm Definition
• The **routing algorithm** is the piece of software that decides where a packet goes next.
• Determines which output line or which node on a broadcast channel.
• For connectionless networks, the routing decision is made for each **datagram**.
• For connection-oriented networks, the decision is made once at **circuit setup time**.

1.3 Common Requirements for Routing Algorithms
Routing algorithms must meet several critical requirements:
* **Correctness**: No deadlocks or unreachable states
* **Simplicity**: Fast handling of packets, fewer failures
* **Robustness**: Dealing with failures, changes of topology and traffic
* **Stability**: Stable under all possible circumstances
* **Optimality**: Optimal in terms of throughput and minimizing mean packet delays
<TOPIC_END>

<TOPIC_START index="1" title="Types of Routing Algorithms">
2.0 Types of Routing Algorithms

2.1 Overview
• There are many nodes in a computer network.
• **Routing** is the process of forwarding a packet from source node to destination.
• It is important to find the best path to send packets.
• Can be found using a routing algorithm.
• Two main types: **dynamic** and **static** routing algorithms.

2.2 Dynamic Routing Algorithms
Dynamic routing characteristics:
* Uses **adaptive algorithms**
* Changes routing decisions based on **topology and network traffic**
* Adjacent routers or all routers provide routing information
* Main optimization parameters: number of hops, distance, estimated transit time

2.3 Static Routing Algorithms
Static routing characteristics:
* Uses **non-adaptive routing algorithms**
* Routing information downloads to routers when booting up the network
* Does not take routing decisions based on network topology or traffic

2.4 Classification of Routing Algorithms
Main routing algorithm types:
* Static Routing: Shortest path routing algorithm
* Dynamic Routing: Link state routing algorithm
* Broadcast routing algorithm
* Multicast routing algorithm
* Hierarchical routing algorithm
<TOPIC_END>

<TOPIC_START index="2" title="Shortest Path Routing Algorithm">
3.0 Shortest Path Routing Algorithm

3.1 Algorithm Overview
• Also known as **Dijkstra's Shortest Path Algorithm**.
• Finds the shortest path between nodes in a graph.
• Can be applied to both directed and undirected graphs.
• Commonly used in network routing protocols.

3.2 How Shortest Path Algorithm Works
The algorithm follows these steps:
* Start from the source node
* Calculate the shortest distance to all neighboring nodes
* Mark the visited node
* Select the unvisited node with the smallest distance
* Repeat until all nodes are visited or destination is reached

3.3 Shortest Path Example - Undirected Graph
Consider an undirected graph with nodes and weighted edges:
* Nodes: 0, 1, 2, 3, 4, 5, 6, 7, 8
* Edge weights represent cost or distance
* Algorithm finds minimum cost path from source to all other nodes

3.4 Shortest Path Example - Directed Graph
In a directed graph:
* Edges have direction (one-way paths)
* Example: Node A to B with cost 9, B to C with cost 1, etc.
* Must follow edge directions when calculating paths
<TOPIC_END>

<TOPIC_START index="3" title="Link State Routing Algorithm">
4.0 Link State Routing Algorithm

4.1 Algorithm Overview
• Each router maintains information about the **network topology**.
• Routers share information with **all other routers**.
• Uses shortest path algorithm to compute routes.

4.2 Steps in Link State Routing
Each router must do the following:
* Discover its neighbors and learn their network addresses
* Measure the delay or cost to each of its neighbors
* Construct a packet telling all it has just learned
* Send this packet to all other routers
* Compute the shortest path to every other router

4.3 Link State Routing Process
Implementation steps:
* Create a forwarding table considering all neighbors
* Build a least cost tree from source to all destinations
* Use Dijkstra's algorithm to find shortest paths

4.4 Link State Routing Example
Consider topology with routers A, B, C, D, E, F, G:
* Each edge has an associated cost
* Find shortest path from Router A to every other router
* Create forwarding table showing next hop for each destination
<TOPIC_END>

<TOPIC_START index="4" title="Hierarchical Routing Algorithm">
5.0 Hierarchical Routing Algorithm

5.1 What is Hierarchical Routing?
• Routers are classified in groups known as **regions**.
• Each router has information only about routers in its **own region**.
• Has no information about routers in other regions.
• Routers only contain records of their immediate neighbors in the table.

5.2 Benefits of Hierarchical Routing
Hierarchical routing provides:
* **Scalability** for large networks
* Reduced routing table size
* Faster routing computations
* Better organization of network structure

5.3 Implementation
• Network divided into regions or areas
• Each region has internal routing
• Border routers connect different regions
• Two-level or multi-level hierarchy possible
<TOPIC_END>

<TOPIC_START index="5" title="Broadcast Routing">
6.0 Broadcast Routing

6.1 What is Broadcasting?
• Host needs to send messages to many or **all other hosts** in a network.
• Sending a packet to all destinations simultaneously is called **broadcasting**.

6.2 Broadcast Routing Applications
Examples of broadcast usage:
* Service distributing weather reports
* Stock market updates
* Live radio programs
* Network announcements
* Routing table updates

6.3 Broadcast Techniques
Common broadcasting methods:
* **Flooding**: Send to all neighbors
* **Spanning tree**: Use tree structure to avoid loops
* Reverse path forwarding
* Multiple unicast (inefficient)
<TOPIC_END>

<TOPIC_START index="6" title="Multicast Routing">
7.0 Multicast Routing

7.1 What is Multicasting?
• Sending a message to a **group of hosts** out of a large number of computers.
• More efficient than broadcasting as it targets specific group members.
• Does not broadcast to all hosts unnecessarily.

7.2 Spanning Tree in Multicast
• **Spanning tree**: Tree containing all vertices and some/all edges of a graph without cycles.
• Used to efficiently deliver multicast packets.
• Different multicast groups can have different spanning trees.

7.3 Multicast Tree Examples
Network can have multiple multicast trees:
* A network with routers and hosts
* Spanning tree for the leftmost router
* Multicast tree for group 1
* Multicast tree for group 2
* Each group receives only relevant traffic
<TOPIC_END>

<TOPIC_START index="7" title="Congestion Control">
8.0 Congestion Control

8.1 What is Congestion?
• When one part of the subnet becomes **overloaded**, congestion results.
• Routers receive packets faster than they can forward them.

8.2 Consequences of Congestion
Two things must happen when congestion occurs:
* The subnet must **prevent additional packets** from entering the congested region
* Congested routers can **discard queued packets** to make room for arriving packets

8.3 Factors that Cause Congestion
Main causes of congestion:
* Packet arrival rate exceeds the outgoing link capacity
* Insufficient memory to store arriving packets
* Bursty traffic patterns
* Slow processor performance

8.4 Congestion Control Categories
Congestion control mechanisms divided into two broad categories:
* **Open-loop congestion control** (prevention)
* **Closed-loop congestion control** (removal)
<TOPIC_END>

<TOPIC_START index="8" title="Open Loop Congestion Control">
9.0 Open Loop Congestion Control

9.1 Overview
• Policies are applied to **prevent congestion before it happens**.
• Congestion control is handled by either the source or the destination.
• Preventive measures rather than reactive measures.

9.2 Retransmission Policy
• If sender feels a packet is lost or corrupted, packet needs retransmission.
• Retransmission may increase congestion in the network.
• Retransmission timers must be designed to prevent congestion and optimize efficiency.
• Example: Policy used by TCP for retransmission.

9.3 Window Policy
• Type of window at sender side may affect congestion.
• **Go-back-N window**: Several packets are resent, even if some received successfully.
• This duplication may increase congestion and make it worse.
• Variation of stop-and-wait protocol and sliding window protocol.

9.4 Discarding Policy
• Good discarding policy adopted by routers can prevent congestion.
• Routers may partially discard corrupted or less sensitive packages.
• Maintains quality of message while preventing congestion.
• Example: In audio file transmission, routers discard less sensitive packets to prevent congestion while maintaining audio quality.

9.5 Acknowledgement Policy
• Receiver does not acknowledge every packet it receives.
• Slows the sender and helps prevent congestion.
• Sending fewer acknowledgments means imposing less load on network.

9.6 Admission Policy
• Mechanism should be used to prevent congestion.
• Switches check resource requirements before transmitting.
• If there is chance of congestion, router should deny establishing virtual network connection.
• Prevents further congestion by controlling new connections.
<TOPIC_END>

<TOPIC_START index="9" title="Closed Loop Congestion Control">
10.0 Closed Loop Congestion Control

10.1 Overview
• **Reactive approach** to handle congestion after it occurs.
• Includes mechanisms to detect and remove congestion.
• Uses **feedback from network** to adjust traffic.

10.2 Backpressure
Backpressure technique characteristics:
* Congested node **stops receiving packets from upstream node**
* May cause upstream nodes to become congested
* Reject receiving data from above nodes
* Node-to-node congestion control technique
* Propagates in opposite direction of data flow

10.3 Choke Packet
Choke packet mechanism:
* Packet sent by node to source to **inform it of congestion**
* Each router monitors its resources and utilization at output lines
* When resource utilization exceeds threshold value, router sends choke packet to source
* Gives feedback to reduce traffic
* Intermediate nodes through which packets traveled are not warned about congestion

10.4 Implicit Signaling
• No communication between congested nodes and source.
• Source **guesses** that there is congestion in network.
• Example: When sender sends several packets with no acknowledgment for a while, assumes congestion exists.

10.5 Explicit Signaling
• Node experiencing congestion **explicitly sends signal** to source or destination.
• Signal included in packets that carry data.
• Difference from choke packet: uses existing packets rather than creating different packets.
<TOPIC_END>

<TOPIC_START index="10" title="Traffic Shaping">
11.0 Traffic Shaping

11.1 What is Traffic Shaping?
• Method to control congestion by **"shaping" traffic** before it enters network.
• Controls the **rate** at which packets are sent (not just how many).
• Used in ATM and Integrated Services networks.
• At connection setup time, sender and carrier negotiate traffic pattern (shape).

11.2 Traffic Shaping Algorithms
Two main traffic shaping algorithms:
* **Leaky Bucket Algorithm**
* **Token Bucket Algorithm**
<TOPIC_END>

<TOPIC_START index="11" title="Leaky Bucket Algorithm">
12.0 Leaky Bucket Algorithm

12.1 Algorithm Overview
• Used to **control rate** in a network.
• Implemented as single-server queue with constant service time.
• If bucket (buffer) overflows, packets are discarded.

12.2 How Leaky Bucket Works
Process steps:
* When host wants to send packet, packet is thrown into bucket
* **Bucket leaks at constant rate** (network interface transmits packets at constant rate)
* **Bursty traffic is converted to uniform traffic** by leaky bucket
* In practice, bucket is finite queue that outputs at finite rate

12.3 Leaky Bucket Behavior
• Enforces **constant output rate** (average rate) regardless of burstiness of input.
• Does nothing when input is idle.
• Host injects one packet per clock tick onto network.
• Results in uniform flow of packets, smoothing outbursts and reducing congestion.

12.4 Leaky Bucket Analogy
• Like a leaky bucket with water: water added at variable rate but leaks at constant rate.
• With packets: packets arrive at variable rate but transmitted at constant rate.
<TOPIC_END>

<TOPIC_START index="12" title="Token Bucket Algorithm">
13.0 Token Bucket Algorithm

13.1 Algorithm Overview
• In contrast to Leaky Bucket, allows output rate to **vary depending on size of burst**.
• Bucket holds **tokens** rather than packets.
• To transmit packet, host must **capture and destroy one token**.

13.2 How Token Bucket Works
Process steps:
* In regular intervals, tokens are thrown into bucket
* Bucket has maximum capacity
* If there is ready packet, token is removed from bucket and packet is sent
* If there is no token in bucket, packet cannot be sent

13.3 Token Generation and Storage
• Tokens generated by clock at rate of one token every $t$ seconds.
• Idle hosts can capture and **save up tokens** (up to max size of bucket).
• Allows sending larger bursts later.
• Provides flexibility for bursty traffic while maintaining average rate.

13.4 Token Bucket vs Leaky Bucket
Comparison:
* Leaky Bucket: Constant output rate, smooths all bursts
* Token Bucket: Variable output rate, allows controlled bursts
* Token Bucket: Better for applications with legitimate burst requirements
* Leaky Bucket: Simpler implementation, stricter rate control
<TOPIC_END>

<TOPIC_START index="13" title="Key Concepts Summary">
14.0 Key Concepts Summary

14.1 Routing Essentials
• Network layer routes packets from source to destination.
• Routing algorithms must be correct, simple, robust, stable, and optimal.
• Dynamic routing adapts to network changes; static routing uses fixed paths.

14.2 Major Routing Algorithms
• **Shortest Path (Dijkstra)**: Finds minimum cost path.
• **Link State**: Routers share complete topology information.
• **Hierarchical**: Divides network into regions for scalability.
• **Broadcast**: Sends to all hosts in network.
• **Multicast**: Sends to specific group of hosts.

14.3 Congestion Control Strategy
• **Open-loop**: Prevention through policies (retransmission, window, discarding, acknowledgement, admission).
• **Closed-loop**: Removal through feedback (backpressure, choke packets, implicit/explicit signaling).

14.4 Traffic Shaping
• **Leaky Bucket**: Converts bursty traffic to uniform traffic with constant output rate.
• **Token Bucket**: Allows controlled bursts while maintaining average rate through token-based transmission control.
<TOPIC_END>
`
};