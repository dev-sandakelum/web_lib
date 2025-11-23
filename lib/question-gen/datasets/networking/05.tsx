// ==========================================
// FILE: datasets/computer-networks/lesson05.ts
// ==========================================

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson05Dataset: Dataset = {
  id: "networks-05",
  topicCount: 12,
  category: "Computer Networks",
  subcategory: "Multiplexing and Broadband Technologies",
  description: "Multiplexing techniques (FDM, WDM, TDM), Public Switched Telephone Network (PSTN), Digital Subscriber Line (DSL/ADSL), and Cable Modem technology with their characteristics and applications.",
  topics: [
    "Multiplexing Overview",
    "Types of Multiplexing",
    "Frequency Division Multiplexing (FDM)",
    "Wave Division Multiplexing (WDM)",
    "Time Division Multiplexing (TDM)",
    "Public Switched Telephone Network (PSTN)",
    "Digital Subscriber Line (DSL)",
    "Asymmetric Digital Subscriber Line (ADSL)",
    "Cable Modem",
    "Comparison of Broadband Technologies",
    "Multiplexing Techniques Summary",
    "Key Concepts Review"
  ],
  content: `
<TOPIC_START index="0" title="Multiplexing Overview">
1.0 Multiplexing Overview

1.1 What is Multiplexing?
• Multiplexing is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link.

1.2 Multiplexer (MUX)
• Multiplexing is done using a device called Multiplexer (MUX) that combines n input lines to generate one output line i.e. (many to one).

1.3 Demultiplexer (DEMUX)
• At the receiving end, a device called Demultiplexer (DEMUX) is used that separates signal into its component signals i.e. one input and several outputs (one to many).

1.4 Key Concept
The fundamental purpose of multiplexing is to maximize the utilization of a single communication channel by allowing multiple users or signals to share it simultaneously or in sequence.
<TOPIC_END>

<TOPIC_START index="1" title="Types of Multiplexing">
2.0 Types of Multiplexing

There are three main types of multiplexing techniques:
1. Frequency Division Multiplexing (FDM)
2. Wave Division Multiplexing (WDM)
3. Time Division Multiplexing (TDM)
<TOPIC_END>

<TOPIC_START index="2" title="Frequency Division Multiplexing (FDM)">
3.0 Frequency Division Multiplexing (FDM)

3.1 Characteristics
• FDM is an analog technique.
• Signals of different frequencies are combined into a composite signal and transmitted on a single link.
• Bandwidth of a link should be greater than the combined bandwidths of the various channels.
• Each signal has a different frequency.

3.2 How FDM Works

| Component | Description |
| :--- | :--- |
| **Signal Combination** | Different frequency signals are combined into one composite signal |
| **Transmission** | Composite signal is transmitted on a single link |
| **Bandwidth Requirement** | Link bandwidth must be greater than combined channel bandwidths |
| **Signal Separation** | Each signal maintains a different frequency |

3.3 Key Requirements

**Bandwidth Condition:**
Total Link Bandwidth > Sum of all Individual Channel Bandwidths

3.4 Applications
* Analog television broadcasting
* Radio broadcasting (AM/FM)
* First generation cellular systems
* Broadband cable networks
<TOPIC_END>

<TOPIC_START index="3" title="Wave Division Multiplexing (WDM)">
4.0 Wave Division Multiplexing (WDM)

4.1 Characteristics
• WDM is an analog technique.
• Working is same as FDM.
• In WDM, different signals are optical or light signals that are transmitted through optical fiber.

4.2 How WDM Works
• Various light waves from different sources are combined to form a composite light signal that is transmitted across the channel to the receiver.
• At the receiver side, this composite light is broken into different light waves by Demultiplexer.
• This combining and splitting of light waves are done by using a PRISM. Prism bends beam of light based on the angle of incidence and frequency of light wave.

4.3 WDM Components

| Component | Function | Description |
| :--- | :--- | :--- |
| **Prism** | Combining and splitting light | Bends light based on angle of incidence and frequency |
| **Optical Fiber** | Transmission medium | Carries optical/light signals |
| **Multiplexer** | Combines signals | Merges various light waves into composite signal |
| **Demultiplexer** | Separates signals | Breaks composite light into individual waves |

4.4 Key Features

| Feature | Description |
| :--- | :--- |
| **Technique Type** | Analog |
| **Signal Type** | Optical/Light signals |
| **Medium** | Optical fiber |
| **Combining Device** | Prism |
| **Similar To** | FDM |

4.5 Applications
* Long-haul fiber optic communications
* Metropolitan area networks (MANs)
* High-capacity backbone networks
* Dense Wavelength Division Multiplexing (DWDM) systems
<TOPIC_END>

<TOPIC_START index="4" title="Time Division Multiplexing (TDM)">
5.0 Time Division Multiplexing (TDM)

5.1 Characteristics
• TDM is a digital multiplexing technique.
• Channel/Link is not divided on the basis of frequency but on the basis of time.
• Total time available in the channel is divided between several users.
• Each user is allotted a particular time interval called time slot or slice.
• In TDM, the data rate capacity of the transmission medium should be greater than the data rate required by sending or receiving devices.

5.2 How TDM Works

| Aspect | Description |
| :--- | :--- |
| **Technique Type** | Digital |
| **Division Basis** | Time (not frequency) |
| **Time Allocation** | Total time divided between several users |
| **Time Unit** | Time slot or slice |
| **Data Rate Requirement** | Medium capacity must exceed device requirements |

5.3 Key Requirements

**Data Rate Condition:**
Transmission Medium Data Rate > Sum of all Device Data Rates

5.4 TDM vs FDM

| Characteristic | FDM | TDM |
| :--- | :--- | :--- |
| **Type** | Analog | Digital |
| **Division Basis** | Frequency | Time |
| **Signal Type** | Different frequencies | Time slots |
| **Requirement** | Bandwidth > Combined bandwidths | Data rate > Combined data rates |

5.5 Applications
* Digital telephony (T1, E1 lines)
* ISDN (Integrated Services Digital Network)
* GSM cellular systems
* SONET/SDH networks
<TOPIC_END>

<TOPIC_START index="5" title="Public Switched Telephone Network (PSTN)">
6.0 Public Switched Telephone Network (PSTN)

6.1 Overview
• The term Public Switched Telephone Network (PSTN) describes the various equipment and interconnecting facilities that provide phone service to the public.
• The PSTN is a network of computers and other electronic equipment that converts speech into digital data and provides a multitude of sophisticated phone features, data services, and mobile wireless access.

6.2 Key Characteristics

| Feature | Description |
| :--- | :--- |
| **Purpose** | Provides phone service to the public |
| **Components** | Various equipment and interconnecting facilities |
| **Technology** | Network of computers and electronic equipment |
| **Signal Conversion** | Converts speech into digital data |
| **Services** | Phone features, data services, mobile wireless access |

6.3 PSTN Infrastructure

PSTN infrastructure includes two main types of lines:

**1. Overhead Lines (OH)**
* Aerial cables mounted on poles
* Traditional above-ground installation

**2. Underground Lines (UG)**
* Cables buried underground
* More reliable and protected from weather

6.4 Functions of PSTN

| Function | Description |
| :--- | :--- |
| **Voice Communication** | Primary telephone service |
| **Data Transmission** | Provides data services |
| **Signal Processing** | Converts speech to digital data |
| **Network Connectivity** | Interconnecting facilities |
| **Wireless Integration** | Mobile wireless access |

6.5 PSTN Components
* Local exchanges (telephone switches)
* Trunk lines
* Subscriber lines
* Network management systems
* Signaling systems
<TOPIC_END>

<TOPIC_START index="6" title="Digital Subscriber Line (DSL)">
7.0 Digital Subscriber Line (DSL)

7.1 What is DSL?
• DSL (Digital Subscriber Line) is the general term for services that offer internet connections via a digital modem and a copper telephone line.
• The beauty of DSL is that there is one superfast internet connection.

7.2 Types of DSL

There are different types of DSL. There is SDSL, VDSL and ADSL.

| DSL Type | Full Name | Key Feature |
| :--- | :--- | :--- |
| **ADSL** | Asymmetric Digital Subscriber Line | Different upload/download speeds |
| **SDSL** | Symmetric Digital Subscriber Line | Same upload/download speeds |
| **VDSL** | Very-high-bit-rate Digital Subscriber Line | Higher speeds over shorter distances |

7.3 Key Features of DSL

| Feature | Description |
| :--- | :--- |
| **Technology** | Digital modem and copper telephone line |
| **Connection Type** | Superfast internet connection |
| **Medium** | Existing copper telephone infrastructure |
| **Advantage** | Uses existing phone lines |
<TOPIC_END>

<TOPIC_START index="7" title="Asymmetric Digital Subscriber Line (ADSL)">
8.0 Asymmetric Digital Subscriber Line (ADSL)

8.1 ADSL Overview
ADSL is the most common type of DSL technology used for residential internet access. The term "asymmetric" refers to the different speeds for download and upload.

8.2 ADSL Distance vs Bandwidth Relationship
ADSL performance is affected by distance:
* Bandwidth decreases as distance from the telephone exchange increases
* Shorter distances provide higher data rates
* Maximum effective distance typically around 5-6 km

8.3 ADSL Bandwidth Characteristics
ADSL has distinct bandwidth allocation:
* **Download bandwidth:** Typically much higher (faster)
* **Upload bandwidth:** Typically lower (slower)
* **Asymmetric nature:** Download speed ≠ Upload speed

This asymmetric design is ideal for typical internet usage where users download more data (web browsing, streaming) than they upload.

8.4 How ADSL Works
• ADSL exploits the unused analogue bandwidth available in the wires.

8.4.1 ADSL Frequency Allocation
The telephone line bandwidth is divided into three main bands:

| Band | Frequency Range | Purpose |
| :--- | :--- | :--- |
| **Voice Band** | 0 - 4 kHz | Traditional telephone service (POTS) |
| **Upload Band** | 25 - 138 kHz | Upstream data transmission |
| **Download Band** | 138 kHz - 1.1 MHz | Downstream data transmission |

8.5 Key Principle
ADSL uses the unused analogue bandwidth in copper telephone wires, allowing simultaneous voice and data transmission without interference.

8.6 ADSL Components

| Component | Function |
| :--- | :--- |
| **ADSL Modem** | Converts digital data to/from analog signals |
| **Splitter** | Separates voice and data signals |
| **DSLAM** | Digital Subscriber Line Access Multiplexer at exchange |
| **Copper Line** | Existing telephone infrastructure |

8.7 ADSL Advantages

| Advantage | Description |
| :--- | :--- |
| **Always-On Connection** | No dial-up required |
| **Simultaneous Use** | Phone and internet at the same time |
| **Existing Infrastructure** | Uses copper telephone lines |
| **Cost-Effective** | No new cabling required |
| **Dedicated Connection** | Not shared with neighbors |

8.8 ADSL Disadvantages

| Disadvantage | Description |
| :--- | :--- |
| **Distance Limitation** | Speed decreases with distance |
| **Asymmetric Speed** | Lower upload than download |
| **Copper Quality** | Performance depends on line condition |
| **Availability** | Requires proximity to telephone exchange |

8.9 ADSL Speed Factors
Factors affecting ADSL performance:
1. **Distance from Exchange:** Primary factor affecting bandwidth
2. **Line Quality:** Condition of copper wires
3. **Interference:** Electrical noise on the line
4. **Bandwidth Allocation:** ISP service tier
5. **Number of Devices:** Simultaneous users on connection
<TOPIC_END>

<TOPIC_START index="8" title="Cable Modem">
9.0 Cable Modem

9.1 What is a Cable Modem?
• A cable modem is a hardware device that allows your computer to communicate with an Internet service provider over a landline connection.
• It converts an analog signal to a digital signal for the purpose of granting access to broadband Internet.

9.2 Cable Modem Characteristics

| Feature | Description |
| :--- | :--- |
| **Device Type** | Hardware device |
| **Purpose** | Computer-ISP communication |
| **Connection Type** | Landline connection |
| **Signal Conversion** | Analog to digital signal |
| **Service** | Broadband Internet access |

9.3 How Cable Modem Works

9.3.1 Signal Conversion Process
1. **Downstream (ISP to Computer):**
   - Analog signal received from cable network
   - Converted to digital signal
   - Digital data delivered to computer

2. **Upstream (Computer to ISP):**
   - Digital data from computer
   - Converted to analog signal
   - Transmitted over cable network

9.4 Cable Modem vs DSL

| Characteristic | Cable Modem | ADSL |
| :--- | :--- | :--- |
| **Medium** | Coaxial cable (TV cable) | Copper telephone line |
| **Shared/Dedicated** | Shared with neighborhood | Dedicated line |
| **Speed Consistency** | Can vary with usage | More consistent |
| **Installation** | Requires cable infrastructure | Uses existing phone lines |
| **Distance Sensitivity** | Less sensitive | Highly sensitive |

9.5 Cable Modem Advantages

| Advantage | Description |
| :--- | :--- |
| **High Speed** | Generally faster than ADSL |
| **Bundling** | Can be packaged with TV/phone services |
| **Distance Independent** | Performance not affected by distance from provider |
| **Existing Infrastructure** | Uses cable TV network |

9.6 Cable Modem Disadvantages

| Disadvantage | Description |
| :--- | :--- |
| **Shared Bandwidth** | Speed decreases during peak usage |
| **Security Concerns** | Shared network with neighbors |
| **Availability** | Requires cable TV infrastructure |
| **Variable Performance** | Depends on neighborhood usage patterns |
<TOPIC_END>

<TOPIC_START index="9" title="Comparison of Broadband Technologies">
10.0 Comparison of Broadband Technologies

10.1 ADSL vs Cable Modem Summary

| Feature | ADSL | Cable Modem |
| :--- | :--- | :--- |
| **Technology** | Digital modem over copper phone line | Analog-to-digital conversion over coax |
| **Connection** | Dedicated | Shared |
| **Distance Effect** | Significant | Minimal |
| **Bandwidth** | Asymmetric (download > upload) | Can be symmetric or asymmetric |
| **Medium** | Copper telephone wire | Coaxial cable |
| **Consistency** | More consistent | Variable with usage |
<TOPIC_END>

<TOPIC_START index="10" title="Multiplexing Techniques Summary">
11.0 Multiplexing Techniques Summary

11.1 Complete Comparison

| Technique | Type | Division Basis | Signal Type | Medium | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FDM** | Analog | Frequency | Different frequencies | Copper/Coax | Radio, TV |
| **WDM** | Analog | Wavelength | Light/Optical | Optical fiber | Fiber networks |
| **TDM** | Digital | Time | Digital | Any | Telephony, ISDN |

11.2 Bandwidth/Data Rate Requirements

| Technique | Requirement |
| :--- | :--- |
| **FDM** | Link bandwidth > Combined channel bandwidths |
| **WDM** | Similar to FDM, for optical wavelengths |
| **TDM** | Medium data rate > Sum of device data rates |
<TOPIC_END>

<TOPIC_START index="11" title="Key Concepts Review">
12.0 Key Concepts Review

12.1 Multiplexing Fundamentals
* Allows simultaneous transmission of multiple signals on single link
* Uses Multiplexer (MUX) for combining (many to one)
* Uses Demultiplexer (DEMUX) for separating (one to many)

12.2 PSTN
* Provides phone service to the public
* Converts speech to digital data
* Offers phone features, data services, wireless access

12.3 DSL/ADSL
* Internet via digital modem and copper phone line
* Exploits unused analogue bandwidth
* Distance affects bandwidth
* Asymmetric bandwidth allocation

12.4 Cable Modem
* Hardware device for ISP communication
* Converts analog to digital signals
* Provides broadband Internet access
<TOPIC_END>
`
};