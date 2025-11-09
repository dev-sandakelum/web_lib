// datasets/computer-networks/lesson05.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson05Dataset: Dataset = {
  id: "networks-05",
  category: "Computer Networks",
  subcategory: "Multiplexing and Broadband Technologies",
  description: "Multiplexing techniques (FDM, WDM, TDM), Public Switched Telephone Network (PSTN), Digital Subscriber Line (DSL/ADSL), and Cable Modem technology with their characteristics and applications.",
  content: `
[cite_start]Topic: Multiplexing, PSTN, DSL, and Cable Modem [cite: 1, 2, 3]

Objectives:
[cite_start]• Understand the concept and purpose of multiplexing [cite: 3, 4]
[cite_start]• Learn about Frequency Division Multiplexing (FDM) [cite: 5, 6]
[cite_start]• Understand Wave Division Multiplexing (WDM) [cite: 7, 8]
[cite_start]• Learn about Time Division Multiplexing (TDM) [cite: 9]
[cite_start]• Understand the Public Switched Telephone Network (PSTN) [cite: 10, 11, 12, 13]
[cite_start]• Explore Digital Subscriber Line (DSL) and ADSL technology [cite: 14-23]
[cite_start]• Learn about Cable Modem technology [cite: 24]

---
## Multiplexing Overview

### What is Multiplexing?

[cite_start]• Multiplexing is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link [cite: 3].

### Multiplexer (MUX)
[cite_start]• Multiplexing is done using a device called Multiplexer (MUX) that combines n input lines to generate one output line i.e. (many to one) [cite: 3].

### Demultiplexer (DEMUX)
[cite_start]• At the receiving end, a device called Demultiplexer (DEMUX) is used that separates signal into its component signals i.e. one input and several outputs (one to many) [cite: 3].

### Key Concept
The fundamental purpose of multiplexing is to maximize the utilization of a single communication channel by allowing multiple users or signals to share it simultaneously or in sequence.

---
## Types of Multiplexing

[cite_start]There are three main types of multiplexing techniques [cite: 4]:
1. Frequency Division Multiplexing (FDM)
2. Wave Division Multiplexing (WDM)
3. Time Division Multiplexing (TDM)

---
## Frequency Division Multiplexing (FDM)

### Characteristics

[cite_start]• FDM is an analog technique [cite: 5].
[cite_start]• Signals of different frequencies are combined into a composite signal and transmitted on a single link [cite: 5].
[cite_start]• Bandwidth of a link should be greater than the combined bandwidths of the various channels [cite: 5].
[cite_start]• Each signal has a different frequency [cite: 5].

### How FDM Works

| Component | Description |
| :--- | :--- |
| **Signal Combination** | [cite_start]Different frequency signals are combined into one composite signal [cite: 5] |
| **Transmission** | [cite_start]Composite signal is transmitted on a single link [cite: 5] |
| **Bandwidth Requirement** | [cite_start]Link bandwidth must be greater than combined channel bandwidths [cite: 5] |
| **Signal Separation** | [cite_start]Each signal maintains a different frequency [cite: 5] |

### Key Requirements

**Bandwidth Condition:**
Total Link Bandwidth > Sum of all Individual Channel Bandwidths

### Applications
* Analog television broadcasting
* Radio broadcasting (AM/FM)
* First generation cellular systems
* Broadband cable networks

---
## Wave Division Multiplexing (WDM)

### Characteristics

[cite_start]• WDM is an analog technique [cite: 7].
[cite_start]• Working is same as FDM [cite: 7].
[cite_start]• In WDM, different signals are optical or light signals that are transmitted through optical fiber [cite: 7].

### How WDM Works

[cite_start]• Various light waves from different sources are combined to form a composite light signal that is transmitted across the channel to the receiver [cite: 7].
[cite_start]• At the receiver side, this composite light is broken into different light waves by Demultiplexer [cite: 7].
[cite_start]• This combining and splitting of light waves are done by using a PRISM. Prism bends beam of light based on the angle of incidence and frequency of light wave [cite: 7].

### WDM Components

| Component | Function | Description |
| :--- | :--- | :--- |
| **Prism** | [cite_start]Combining and splitting light [cite: 7] | [cite_start]Bends light based on angle of incidence and frequency [cite: 7] |
| **Optical Fiber** | Transmission medium | [cite_start]Carries optical/light signals [cite: 7] |
| **Multiplexer** | Combines signals | [cite_start]Merges various light waves into composite signal [cite: 7] |
| **Demultiplexer** | Separates signals | [cite_start]Breaks composite light into individual waves [cite: 7] |

### Key Features

| Feature | Description |
| :--- | :--- |
| **Technique Type** | [cite_start]Analog [cite: 7] |
| **Signal Type** | [cite_start]Optical/Light signals [cite: 7] |
| **Medium** | [cite_start]Optical fiber [cite: 7] |
| **Combining Device** | [cite_start]Prism [cite: 7] |
| **Similar To** | [cite_start]FDM [cite: 7] |

### Applications
* Long-haul fiber optic communications
* Metropolitan area networks (MANs)
* High-capacity backbone networks
* Dense Wavelength Division Multiplexing (DWDM) systems

---
## Time Division Multiplexing (TDM)

### Characteristics

[cite_start]• TDM is a digital multiplexing technique [cite: 9].
[cite_start]• Channel/Link is not divided on the basis of frequency but on the basis of time [cite: 9].
[cite_start]• Total time available in the channel is divided between several users [cite: 9].
[cite_start]• Each user is allotted a particular time interval called time slot or slice [cite: 9].
[cite_start]• In TDM, the data rate capacity of the transmission medium should be greater than the data rate required by sending or receiving devices [cite: 9].

### How TDM Works

| Aspect | Description |
| :--- | :--- |
| **Technique Type** | [cite_start]Digital [cite: 9] |
| **Division Basis** | [cite_start]Time (not frequency) [cite: 9] |
| **Time Allocation** | [cite_start]Total time divided between several users [cite: 9] |
| **Time Unit** | [cite_start]Time slot or slice [cite: 9] |
| **Data Rate Requirement** | [cite_start]Medium capacity must exceed device requirements [cite: 9] |

### Key Requirements

**Data Rate Condition:**
Transmission Medium Data Rate > Sum of all Device Data Rates

### TDM vs FDM

| Characteristic | FDM | TDM |
| :--- | :--- | :--- |
| **Type** | [cite_start]Analog [cite: 5] | [cite_start]Digital [cite: 9] |
| **Division Basis** | [cite_start]Frequency [cite: 5] | [cite_start]Time [cite: 9] |
| **Signal Type** | [cite_start]Different frequencies [cite: 5] | Time slots |
| **Requirement** | [cite_start]Bandwidth > Combined bandwidths [cite: 5] | [cite_start]Data rate > Combined data rates [cite: 9] |

### Applications
* Digital telephony (T1, E1 lines)
* ISDN (Integrated Services Digital Network)
* GSM cellular systems
* SONET/SDH networks

---
## Public Switched Telephone Network (PSTN)

### Overview

[cite_start]• The term Public Switched Telephone Network (PSTN) describes the various equipment and interconnecting facilities that provide phone service to the public [cite: 10].
[cite_start]• The PSTN is a network of computers and other electronic equipment that converts speech into digital data and provides a multitude of sophisticated phone features, data services, and mobile wireless access [cite: 10].

### Key Characteristics

| Feature | Description |
| :--- | :--- |
| **Purpose** | [cite_start]Provides phone service to the public [cite: 10] |
| **Components** | [cite_start]Various equipment and interconnecting facilities [cite: 10] |
| **Technology** | [cite_start]Network of computers and electronic equipment [cite: 10] |
| **Signal Conversion** | [cite_start]Converts speech into digital data [cite: 10] |
| **Services** | [cite_start]Phone features, data services, mobile wireless access [cite: 10] |

### PSTN Infrastructure

[cite_start]PSTN infrastructure includes two main types of lines [cite: 13]:

**1. Overhead Lines (OH)**
* Aerial cables mounted on poles
* Traditional above-ground installation

**2. Underground Lines (UG)**
* Cables buried underground
* More reliable and protected from weather

### Functions of PSTN

| Function | Description |
| :--- | :--- |
| **Voice Communication** | Primary telephone service |
| **Data Transmission** | [cite_start]Provides data services [cite: 10] |
| **Signal Processing** | [cite_start]Converts speech to digital data [cite: 10] |
| **Network Connectivity** | [cite_start]Interconnecting facilities [cite: 10] |
| **Wireless Integration** | [cite_start]Mobile wireless access [cite: 10] |

### PSTN Components
* Local exchanges (telephone switches)
* Trunk lines
* Subscriber lines
* Network management systems
* Signaling systems

---
## Digital Subscriber Line (DSL)

### What is DSL?

[cite_start]• DSL (Digital Subscriber Line) is the general term for services that offer internet connections via a digital modem and a copper telephone line [cite: 14].
[cite_start]• The beauty of DSL is that there is one superfast internet connection [cite: 14].

### Types of DSL

[cite_start]There are different types of DSL. There is SDSL, VDSL and ADSL [cite: 14].

| DSL Type | Full Name | Key Feature |
| :--- | :--- | :--- |
| **ADSL** | Asymmetric Digital Subscriber Line | Different upload/download speeds |
| **SDSL** | Symmetric Digital Subscriber Line | Same upload/download speeds |
| **VDSL** | Very-high-bit-rate Digital Subscriber Line | Higher speeds over shorter distances |

### Key Features of DSL

| Feature | Description |
| :--- | :--- |
| **Technology** | [cite_start]Digital modem and copper telephone line [cite: 14] |
| **Connection Type** | [cite_start]Superfast internet connection [cite: 14] |
| **Medium** | Existing copper telephone infrastructure |
| **Advantage** | Uses existing phone lines |

---
## Asymmetric Digital Subscriber Line (ADSL)

### ADSL Overview

ADSL is the most common type of DSL technology used for residential internet access. The term "asymmetric" refers to the different speeds for download and upload.

### ADSL Distance vs Bandwidth Relationship

[cite_start]ADSL performance is affected by distance [cite: 17]:
* Bandwidth decreases as distance from the telephone exchange increases
* Shorter distances provide higher data rates
* Maximum effective distance typically around 5-6 km

### ADSL Bandwidth Characteristics

[cite_start]ADSL has distinct bandwidth allocation [cite: 18]:
* **Download bandwidth:** Typically much higher (faster)
* **Upload bandwidth:** Typically lower (slower)
* **Asymmetric nature:** Download speed ≠ Upload speed

This asymmetric design is ideal for typical internet usage where users download more data (web browsing, streaming) than they upload.

### How ADSL Works

[cite_start]• ADSL exploits the unused analogue bandwidth available in the wires [cite: 20].

#### ADSL Frequency Allocation

The telephone line bandwidth is divided into three main bands:

| Band | Frequency Range | Purpose |
| :--- | :--- | :--- |
| **Voice Band** | 0 - 4 kHz | Traditional telephone service (POTS) |
| **Upload Band** | 25 - 138 kHz | Upstream data transmission |
| **Download Band** | 138 kHz - 1.1 MHz | Downstream data transmission |

### Key Principle
[cite_start]ADSL uses the unused analogue bandwidth in copper telephone wires [cite: 20], allowing simultaneous voice and data transmission without interference.

### ADSL Components

| Component | Function |
| :--- | :--- |
| **ADSL Modem** | Converts digital data to/from analog signals |
| **Splitter** | Separates voice and data signals |
| **DSLAM** | Digital Subscriber Line Access Multiplexer at exchange |
| **Copper Line** | Existing telephone infrastructure |

### ADSL Advantages

| Advantage | Description |
| :--- | :--- |
| **Always-On Connection** | No dial-up required |
| **Simultaneous Use** | Phone and internet at the same time |
| **Existing Infrastructure** | [cite_start]Uses copper telephone lines [cite: 14] |
| **Cost-Effective** | No new cabling required |
| **Dedicated Connection** | Not shared with neighbors |

### ADSL Disadvantages

| Disadvantage | Description |
| :--- | :--- |
| **Distance Limitation** | [cite_start]Speed decreases with distance [cite: 17] |
| **Asymmetric Speed** | Lower upload than download |
| **Copper Quality** | Performance depends on line condition |
| **Availability** | Requires proximity to telephone exchange |

### ADSL Speed Factors

Factors affecting ADSL performance:
1. **Distance from Exchange:** [cite_start]Primary factor affecting bandwidth [cite: 17]
2. **Line Quality:** Condition of copper wires
3. **Interference:** Electrical noise on the line
4. **Bandwidth Allocation:** ISP service tier
5. **Number of Devices:** Simultaneous users on connection

---
## Cable Modem

### What is a Cable Modem?

[cite_start]• A cable modem is a hardware device that allows your computer to communicate with an Internet service provider over a landline connection [cite: 24].
[cite_start]• It converts an analog signal to a digital signal for the purpose of granting access to broadband Internet [cite: 24].

### Cable Modem Characteristics

| Feature | Description |
| :--- | :--- |
| **Device Type** | [cite_start]Hardware device [cite: 24] |
| **Purpose** | [cite_start]Computer-ISP communication [cite: 24] |
| **Connection Type** | [cite_start]Landline connection [cite: 24] |
| **Signal Conversion** | [cite_start]Analog to digital signal [cite: 24] |
| **Service** | [cite_start]Broadband Internet access [cite: 24] |

### How Cable Modem Works

#### Signal Conversion Process
1. **Downstream (ISP to Computer):**
   - Analog signal received from cable network
   - [cite_start]Converted to digital signal [cite: 24]
   - Digital data delivered to computer

2. **Upstream (Computer to ISP):**
   - Digital data from computer
   - Converted to analog signal
   - Transmitted over cable network

### Cable Modem vs DSL

| Characteristic | Cable Modem | ADSL |
| :--- | :--- | :--- |
| **Medium** | Coaxial cable (TV cable) | [cite_start]Copper telephone line [cite: 14] |
| **Shared/Dedicated** | Shared with neighborhood | Dedicated line |
| **Speed Consistency** | Can vary with usage | More consistent |
| **Installation** | Requires cable infrastructure | [cite_start]Uses existing phone lines [cite: 14] |
| **Distance Sensitivity** | Less sensitive | [cite_start]Highly sensitive [cite: 17] |

### Cable Modem Advantages

| Advantage | Description |
| :--- | :--- |
| **High Speed** | Generally faster than ADSL |
| **Bundling** | Can be packaged with TV/phone services |
| **Distance Independent** | Performance not affected by distance from provider |
| **Existing Infrastructure** | Uses cable TV network |

### Cable Modem Disadvantages

| Disadvantage | Description |
| :--- | :--- |
| **Shared Bandwidth** | Speed decreases during peak usage |
| **Security Concerns** | Shared network with neighbors |
| **Availability** | Requires cable TV infrastructure |
| **Variable Performance** | Depends on neighborhood usage patterns |

---
## Comparison of Broadband Technologies

### ADSL vs Cable Modem Summary

| Feature | ADSL | Cable Modem |
| :--- | :--- | :--- |
| **Technology** | [cite_start]Digital modem over copper phone line [cite: 14] | [cite_start]Analog-to-digital conversion over coax [cite: 24] |
| **Connection** | Dedicated | Shared |
| **Distance Effect** | [cite_start]Significant [cite: 17] | Minimal |
| **Bandwidth** | [cite_start]Asymmetric (download > upload) [cite: 18] | Can be symmetric or asymmetric |
| **Medium** | [cite_start]Copper telephone wire [cite: 14, 20] | Coaxial cable |
| **Consistency** | More consistent | Variable with usage |

---
## Multiplexing Techniques Summary

### Complete Comparison

| Technique | Type | Division Basis | Signal Type | Medium | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FDM** | [cite_start]Analog [cite: 5] | [cite_start]Frequency [cite: 5] | [cite_start]Different frequencies [cite: 5] | Copper/Coax | Radio, TV |
| **WDM** | [cite_start]Analog [cite: 7] | Wavelength | [cite_start]Light/Optical [cite: 7] | [cite_start]Optical fiber [cite: 7] | Fiber networks |
| **TDM** | [cite_start]Digital [cite: 9] | [cite_start]Time [cite: 9] | Digital | Any | Telephony, ISDN |

### Bandwidth/Data Rate Requirements

| Technique | Requirement |
| :--- | :--- |
| **FDM** | [cite_start]Link bandwidth > Combined channel bandwidths [cite: 5] |
| **WDM** | Similar to FDM, for optical wavelengths |
| **TDM** | [cite_start]Medium data rate > Sum of device data rates [cite: 9] |

---
## Key Concepts Review

### Multiplexing Fundamentals
* [cite_start]Allows simultaneous transmission of multiple signals on single link [cite: 3]
* [cite_start]Uses Multiplexer (MUX) for combining (many to one) [cite: 3]
* [cite_start]Uses Demultiplexer (DEMUX) for separating (one to many) [cite: 3]

### PSTN
* [cite_start]Provides phone service to the public [cite: 10]
* [cite_start]Converts speech to digital data [cite: 10]
* [cite_start]Offers phone features, data services, wireless access [cite: 10]

### DSL/ADSL
* [cite_start]Internet via digital modem and copper phone line [cite: 14]
* [cite_start]Exploits unused analogue bandwidth [cite: 20]
* [cite_start]Distance affects bandwidth [cite: 17]
* [cite_start]Asymmetric bandwidth allocation [cite: 18]

### Cable Modem
* [cite_start]Hardware device for ISP communication [cite: 24]
* [cite_start]Converts analog to digital signals [cite: 24]
* [cite_start]Provides broadband Internet access [cite: 24]
`
};