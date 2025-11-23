// ==========================================
// FILE: datasets/computer-networks/lesson04.ts
// ==========================================

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson04Dataset: Dataset = {
  id: "networks-04",
  topicCount: 23,
  category: "Computer Networks",
  subcategory: "Physical Layer",
  description: "Physical Layer fundamentals including Fourier Analysis, Bandwidth-Limited Signals, Maximum Data Rate, Transmission Media (Guided and Unguided), and Wireless Transmission types with their characteristics and applications.",
  topics: [
    "The Theoretical Basis for Data Communication",
    "Bandwidth-Limited Signals",
    "Practice Questions",
    "Transmission Media Overview",
    "Guided Media: Twisted Pair Cable",
    "Unshielded Twisted Pair (UTP) Cable",
    "Shielded Twisted Pair (STP) Cable",
    "Comparison: UTP vs STP",
    "Guided Media: Coaxial Cable",
    "Guided Media: Fiber Optic Cable",
    "Fiber Optic Cable: Advantages",
    "Fiber Optic Cable: Disadvantages",
    "Unguided Media (Wireless Communication)",
    "Ground Propagation",
    "Sky Propagation",
    "Line of Sight Propagation",
    "Wireless Transmission Types",
    "Radio Transmission",
    "Microwave Transmission",
    "Infrared Transmission",
    "Summary of Transmission Media Characteristics",
    "Key Formulas and Theorems",
    "Propagation Methods Summary"
  ],
  content: `
<TOPIC_START index="0" title="The Theoretical Basis for Data Communication">
1.0 The Theoretical Basis for Data Communication

1.1 Fourier Analysis
• In the early 19th century, the French mathematician **Jean-Baptiste Fourier** proved that any reasonably behaved periodic function, $g(t)$ with period $T$ can be constructed as the sum of a (possibly infinite) number of sines and cosines.
• This mathematical principle is fundamental to understanding how signals can be transmitted over communication channels.
<TOPIC_END>

<TOPIC_START index="1" title="Bandwidth-Limited Signals">
2.0 Bandwidth-Limited Signals

2.1 Nyquist Theorem
The **Nyquist Theorem** provides the maximum data rate for a **noiseless channel**:

**Formula:** Maximum data rate $= 2H \log_2 V$ bits per second

Where:
* $H$ = frequency (**bandwidth in Hz**)
* $V$ = **signal levels** (binary signals have two levels)

**Example:** If $H = 3 \text{ kHz}$ and $V = 2$, maximum data rate will be **6000 bps**.

2.2 Shannon's Theorem (with Noise)
When noise is added (disturbances), we must consider the **Signal-to-Noise Ratio (SNR)**:

• The amount of thermal noise present is measured by the ratio of the signal power to the noise power, called the **SNR (Signal-to-Noise Ratio)**.
• $\text{SNR} = \text{(Power of signal)} / \text{(power of noise)}$.

**Shannon's Formula:** Maximum data rate $= H \log_2 (1 + S/N)$ bps

Where $S/N$ is given in dB.
<TOPIC_END>

<TOPIC_START index="2" title="Practice Questions">
3.0 Practice Questions

3.1 Question 1: Noiseless Channel Capacity
Consider a noiseless channel with a bandwidth of **4000 Hz** transmitting a signal with **four signal levels**. What can be the maximum bit rate?

**Solution:**
Using Nyquist Theorem: Maximum data rate $= 2H \log_2 V$
$= 2 \times 4000 \times \log_2 4$
$= 2 \times 4000 \times 2$
$= 16,000 \text{ bps}$ or **16 kbps**

3.2 Question 2: Required Signal Levels
We need to send **265 kbps** over a noiseless channel with a bandwidth of **40 kHz**. How many signal levels do we need?

**Solution:**
Using Nyquist Theorem: $265,000 = 2 \times 40,000 \times \log_2 V$
$265,000 = 80,000 \times \log_2 V$
$\log_2 V = 3.3125$
$V = 2^{3.3125} \approx 10$ **signal levels**

3.3 Question 3: Channel Capacity with Noise
A telephone line normally has a bandwidth of **3000 Hz** (300 to 3300 Hz) assigned for data communication. The **SNR is usually 2047**. What will be the capacity for this channel?

**Solution:**
Using Shannon's Theorem: Maximum data rate $= H \log_2 (1 + S/N)$
$= 3000 \times \log_2 (1 + 2047)$
$= 3000 \times \log_2 (2048)$
$= 3000 \times 11$
$= 33,000 \text{ bps}$ or **33 kbps**
<TOPIC_END>

<TOPIC_START index="3" title="Transmission Media Overview">
4.0 Transmission Media Overview

4.1 Definition
• In a data transmission system, the **transmission media** is the **physical path** between transmitter and receiver.
• Transmission media are actually located **below the physical layer** and are directly controlled by the physical layer.

4.2 Classification of Transmission Media
Transmission media are classified into two main categories:

**1. Guided Media:**
* Twisted Pair Cable (Shielded and Unshielded)
* Coaxial Cable
* Fiber Optics

**2. Unguided Media:**
* Radio Transmission
* Microwave Transmission
* Infrared Transmission
<TOPIC_END>

<TOPIC_START index="4" title="Guided Media: Twisted Pair Cable">
5.0 Guided Media: Twisted Pair Cable

5.1 Overview
• A **twisted pair cable** consists of two conductors (normally copper), each with its own plastic insulation, **twisted together**.
• The purpose of twisted pair cable is to remove or cancel out **electromagnetic interference (EMI)** from external sources.

5.2 Types of Twisted Pair Cable
There are two types of twisted pair cable:
1. **Unshielded Twisted Pair Cable (UTP)**
2. **Shielded Twisted Pair Cable (STP)**
<TOPIC_END>

<TOPIC_START index="5" title="Unshielded Twisted Pair (UTP) Cable">
6.0 Unshielded Twisted Pair (UTP) Cable

6.1 Characteristics
• In Unshielded Twisted Pair cable there is **no shield** provided, only two twisted copper wires with their own color plastic insulator.
• UTP cables are very **cheap** and **easy to install**.
• But they are badly affected by **noise interference**.

6.2 Structure
UTP cable consists of:
* Twisted copper wire
* Outer plastic cover
<TOPIC_END>

<TOPIC_START index="6" title="Shielded Twisted Pair (STP) Cable">
7.0 Shielded Twisted Pair (STP) Cable

7.1 Characteristics
• **STP cable** has a **metal foil** to cover each pair of insulating conductors.
• It **reduces the interference of the noise** but makes the cable bulky and expensive.
<TOPIC_END>

<TOPIC_START index="7" title="Comparison: UTP vs STP">
8.0 Comparison: UTP vs STP

Comparison between UTP and STP cables:

| Parameter | UTP (Unshielded) | STP (Shielded) |
| :--- | :--- | :--- |
| **Data Rate** | 10-100 Mbps | 150 Mbps |
| **Cable Length** | 100 meter max | 500 meter max |
| **Electrical Interface** | Most interference and cross talk occurs | Less interference and cross talk occurs |
| **Installation** | Easy to install | Very easy to install |
| **Cost** | Lowest | Little costly |
<TOPIC_END>

<TOPIC_START index="8" title="Guided Media: Coaxial Cable">
9.0 Guided Media: Coaxial Cable

9.1 Structure
Coaxial cable consists of the following layers in its construction:
* The **copper conductor**
* **Insulation layer** of plastic foam
* **Second conductor or shield** of wire mesh tube or metallic foil
* **Outer jacket** of tough plastic

9.2 Characteristics and Applications
• Coaxial cable can be used over **longer distances** and support more stations on a shared line than twisted pair.
• Braided mesh helps to prevent signal interference or **cross-talk**. Cross-talk takes place when the signal from one cable becomes mixed up with the signal in a different cable.

Coaxial cable is used in wide variety of applications, including:
* **Cable TV**
* **LANs** (Local Area Networks)
<TOPIC_END>

<TOPIC_START index="9" title="Guided Media: Fiber Optic Cable">
10.0 Guided Media: Fiber Optic Cable

10.1 Structure
Optical fiber layers:
* **Core:** Made of high quality silica glass or plastic
* **Cladding:** Made of high quality silica glass or plastic, with a **lower refractive index** than the core
* **Buffer:** Protective outer covering

10.2 Overview
• Thin glass or plastic threads used to transmit data using **light waves** are called **optical fiber**.

10.3 Types and Specifications
• **Single node** fiber optic cable can have maximum segment length of **2 kms** and bandwidth of up to **100 Mbps**.
• **Multi-node** fiber optic cable can have maximum segment length of **100 kms** and bandwidth up to **2 Gbps**.
<TOPIC_END>

<TOPIC_START index="10" title="Fiber Optic Cable: Advantages">
11.0 Fiber Optic Cable: Advantages

Fiber optic cables offer several advantages:

| Advantage | Description |
| :--- | :--- |
| **High Bandwidth** | Capable of carrying large amounts of data |
| **Electromagnetic Immunity** | Immune to electromagnetic interference |
| **Industrial Suitability** | Suitable for industrial and noisy areas |
| **Long Distance** | Signals carrying data can travel long distances without weakening |
<TOPIC_END>

<TOPIC_START index="11" title="Fiber Optic Cable: Disadvantages">
12.0 Fiber Optic Cable: Disadvantages

Fiber optic cables have several disadvantages:

| Disadvantage | Description |
| :--- | :--- |
| **High Cost** | Optical fiber cables are expensive |
| **Complex Technology** | Sophisticated technology required for manufacturing, installing, and maintaining optical fiber cables |
| **Unidirectional** | Light waves are unidirectional, so two frequencies are required for full duplex transmission |
<TOPIC_END>

<TOPIC_START index="12" title="Unguided Media (Wireless Communication)">
13.0 Unguided Media (Wireless Communication)

13.1 Overview
• **Unguided media** transport electromagnetic waves without using a physical conductor.
• This type of communication is often referred to as **wireless communication**.
• Signals are normally broadcast through free space and thus are available to anyone who has a device capable of receiving them.

13.2 Signal Propagation Methods
Unguided signals can travel from the source to destination in several ways:
* **Ground Propagation**
* **Sky Propagation**
* **Line of Sight Propagation**
<TOPIC_END>

<TOPIC_START index="13" title="Ground Propagation">
14.0 Ground Propagation

14.1 Characteristics
• In **ground propagation**, radio waves travel through the lowest portion of the atmosphere **hugging the earth**.
• **Low-frequency signals** (lower than 2 MHz).
• **Attenuation is low**.

14.2 Applications
Ground wave propagation finds its applications in various fields like:
* Television signal broadcasting
* Target detection for military purposes
* Radio signal transmission
* All applications that require a distance of operation in the local range
<TOPIC_END>

<TOPIC_START index="14" title="Sky Propagation">
15.0 Sky Propagation

15.1 Characteristics
• In **sky propagation**, higher-frequency radio waves radiate upward into the **ionosphere** where they are **reflected back to Earth**.
• This type of transmission allows for greater distance with lower output power.

15.2 Applications
Sky wave propagation has broader applications in:
* Radar and satellite communication
* Television broadcasting
* Line-of-sight communication
* Mobile communications
<TOPIC_END>

<TOPIC_START index="15" title="Line of Sight Propagation">
16.0 Line of Sight Propagation

16.1 Characteristics
• In **line of sight propagation**, very **high-frequency signals** are transmitted in **straight lines** directly from antenna to antenna.

16.2 Applications
• The most common application of Line-of-Sight propagation in its most basic form is in **Radar technology**.
<TOPIC_END>

<TOPIC_START index="16" title="Wireless Transmission Types">
17.0 Wireless Transmission Types

Wireless transmission is classified into three main types:
1. **Radio Transmission**
2. **Microwave Transmission**
3. **Infrared Transmission**
<TOPIC_END>

<TOPIC_START index="17" title="Radio Transmission">
18.0 Radio Transmission

18.1 Characteristics
• Radio waves can **penetrate walls**.
• Radio waves use **omnidirectional antennas** that send out signals in all directions.
• The omnidirectional characteristics of radio waves make them useful for **multicasting**, where there is one sender but many receivers.
• Range between **3 KHz to 1 GHz**.

18.2 Applications
• **AM, FM radio, and television** are examples of multicasting.

18.3 Features Summary

| Feature | Description |
| :--- | :--- |
| **Penetration** | Can penetrate walls |
| **Antenna Type** | Omnidirectional |
| **Directionality** | All directions |
| **Use Case** | Multicasting (one sender, many receivers) |
| **Frequency Range** | 3 KHz to 1 GHz |
<TOPIC_END>

<TOPIC_START index="18" title="Microwave Transmission">
19.0 Microwave Transmission

19.1 Characteristics
• Electromagnetic waves having frequencies between **1 to 300 GHz** are called **Microwaves**.
• Microwaves are **unidirectional** (operating or moving or allowing movement in one direction only).
• When an antenna transmits microwaves, they can be **narrow focused**. This means that the sending and receiving antennas need to be **aligned**.

19.2 Features Summary

| Feature | Description |
| :--- | :--- |
| **Frequency Range** | 1 to 300 GHz |
| **Directionality** | Unidirectional |
| **Focus** | Narrow focused |
| **Requirement** | Sending and receiving antennas must be aligned |

19.3 Applications
* Point-to-point communication
* Satellite communications
* Cellular networks
* Wireless LANs
<TOPIC_END>

<TOPIC_START index="19" title="Infrared Transmission">
20.0 Infrared Transmission

20.1 Characteristics
• Infrared waves, with frequencies from **300 GHz to 400 THz**, can be used for **short range communication**.
• Infrared waves having high frequencies **cannot penetrate walls**.
• This advantageous characteristic **prevents interference** between one system and another. A short-range communication system in one room cannot be affected by another system in the next room.
• When we use our infrared remote control, we don't interfere with the use of the remote by our neighbors.

20.2 Features Summary

| Feature | Description |
| :--- | :--- |
| **Frequency Range** | 300 GHz to 400 THz |
| **Range** | Short range communication |
| **Penetration** | Cannot penetrate walls |
| **Interference** | No interference between rooms |

20.3 Applications
* Remote controls
* Wireless keyboards and mice
* Short-range data transfer (IrDA)
* Indoor wireless communication
<TOPIC_END>

<TOPIC_START index="20" title="Summary of Transmission Media Characteristics">
21.0 Summary of Transmission Media Characteristics

21.1 Guided Media Comparison

| Media Type | Max Distance | Bandwidth | Cost | Interference Resistance |
| :--- | :--- | :--- | :--- | :--- |
| **UTP** | 100m | 10-100 Mbps | Lowest | Low |
| **STP** | 500m | 150 Mbps | Little costly | High |
| **Coaxial** | Longer than TP | Higher than TP | Moderate | Prevents cross-talk |
| **Fiber Optic (Single)** | 2 km | 100 Mbps | Expensive | Immune to EMI |
| **Fiber Optic (Multi)** | 100 km | 2 Gbps | Expensive | Immune to EMI |

21.2 Unguided Media Comparison

| Media Type | Frequency Range | Directionality | Penetration | Applications |
| :--- | :--- | :--- | :--- | :--- |
| **Radio** | 3 KHz - 1 GHz | Omnidirectional | Penetrates walls | AM/FM, TV |
| **Microwave** | 1 - 300 GHz | Unidirectional | Line of sight | Satellite, cellular |
| **Infrared** | 300 GHz - 400 THz | Directional | Cannot penetrate walls | Remote controls |
<TOPIC_END>

<TOPIC_START index="21" title="Key Formulas and Theorems">
22.0 Key Formulas and Theorems

22.1 Nyquist Theorem (Noiseless Channel)
**Maximum data rate $= 2H \log_2 V$ bits per second**

Where:
* $H$ = Bandwidth (Hz)
* $V$ = Number of signal levels

22.2 Shannon's Theorem (Noisy Channel)
**Maximum data rate $= H \log_2 (1 + S/N)$ bps**

Where:
* $H$ = Bandwidth (Hz)
* $S/N$ = Signal-to-Noise Ratio

22.3 Signal-to-Noise Ratio (SNR)
**$\text{SNR} = \text{(Power of signal)} / \text{(Power of noise)}$**
<TOPIC_END>

<TOPIC_START index="22" title="Propagation Methods Summary">
23.0 Propagation Methods Summary

| Propagation Type | Frequency | Coverage | Key Feature |
| :--- | :--- | :--- | :--- |
| **Ground** | < 2 MHz | Local range | Low attenuation |
| **Sky** | Higher frequency | Greater distance | Ionosphere reflection |
| **Line of Sight** | Very high frequency | Direct | Straight line transmission |
<TOPIC_END>
`
};