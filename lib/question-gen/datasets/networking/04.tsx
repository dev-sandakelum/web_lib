// datasets/computer-networks/lesson04.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const networksLesson04Dataset: Dataset = {
  id: "networks-04",
  category: "Computer Networks",
  subcategory: "Physical Layer",
  description: "Physical Layer fundamentals including Fourier Analysis, Bandwidth-Limited Signals, Maximum Data Rate, Transmission Media (Guided and Unguided), and Wireless Transmission types with their characteristics and applications.",
  content: `
[cite_start]Topic: Physical Layer - Theoretical Basis for Data Communication and Transmission Media [cite: 1, 2, 3]

Objectives:
[cite_start]• Understand Fourier Analysis and its application to data communication [cite: 4]
[cite_start]• Learn about Bandwidth-Limited Signals and channel capacity [cite: 5, 6]
[cite_start]• Calculate Maximum Data Rate using Nyquist and Shannon theorems [cite: 5, 6]
[cite_start]• Identify and compare different types of Transmission Media [cite: 7, 8]
[cite_start]• Understand Guided Media: Twisted Pair, Coaxial, and Fiber Optic cables [cite: 9-19]
[cite_start]• Learn about Unguided Media and wireless transmission types [cite: 20-29]
[cite_start]• Explore Radio, Microwave, and Infrared transmission characteristics [cite: 27-29]

---
## The Theoretical Basis for Data Communication

### Fourier Analysis

[cite_start]• In the early 19th century, the French mathematician Jean-Baptiste Fourier proved that any reasonably behaved periodic function, g(t) with period T can be constructed as the sum of a (possibly infinite) number of sines and cosines [cite: 4].

[cite_start]This mathematical principle is fundamental to understanding how signals can be transmitted over communication channels [cite: 4].

---
## Bandwidth-Limited Signals

### Nyquist Theorem

[cite_start]The Nyquist Theorem provides the maximum data rate for a noiseless channel [cite: 5]:

**Formula:** Maximum data rate = 2H log₂ V bits per second

Where:
* H = frequency (bandwidth in Hz)
* V = signal levels (binary signals have two levels)

[cite_start]**Example:** If H = 3 kHz and V = 2, maximum data rate will be 6000 bps [cite: 5].

### Shannon's Theorem (with Noise)

[cite_start]When noise is added (disturbances), we must consider the Signal-to-Noise Ratio (SNR) [cite: 5]:

[cite_start]• The amount of thermal noise present is measured by the ratio of the signal power to the noise power, called the SNR (Signal-to-Noise Ratio) [cite: 5].
[cite_start]• SNR = (Power of signal) / (power of noise) [cite: 5].

**Shannon's Formula:** Maximum data rate = H log₂ (1 + S/N) bps

[cite_start]Where S/N is given in dB [cite: 5].

---
## Practice Questions

### Question 1: Noiseless Channel Capacity
[cite_start]Consider a noiseless channel with a bandwidth of 4000 Hz transmitting a signal with four signal levels. What can be the maximum bit rate? [cite: 6]

**Solution:**
Using Nyquist Theorem: Maximum data rate = 2H log₂ V
= 2 × 4000 × log₂ 4
= 2 × 4000 × 2
= 16,000 bps or 16 kbps

### Question 2: Required Signal Levels
[cite_start]We need to send 265 kbps over a noiseless channel with a bandwidth of 40 kHz. How many signal levels do we need? [cite: 6]

**Solution:**
Using Nyquist Theorem: 265,000 = 2 × 40,000 × log₂ V
265,000 = 80,000 × log₂ V
log₂ V = 3.3125
V = 2^3.3125 ≈ 10 signal levels

### Question 3: Channel Capacity with Noise
[cite_start]A telephone line normally has a bandwidth of 3000 Hz (300 to 3300 Hz) assigned for data communication. The SNR is usually 2047. What will be the capacity for this channel? [cite: 6]

**Solution:**
Using Shannon's Theorem: Maximum data rate = H log₂ (1 + S/N)
= 3000 × log₂ (1 + 2047)
= 3000 × log₂ (2048)
= 3000 × 11
= 33,000 bps or 33 kbps

---
## Transmission Media Overview

### Definition
[cite_start]• In a data transmission system, the transmission media is the physical path between transmitter and receiver [cite: 7].
[cite_start]• Transmission media are actually located below the physical layer and are directly controlled by the physical layer [cite: 7].

### Classification of Transmission Media
[cite_start]Transmission media are classified into two main categories [cite: 8]:

**1. Guided Media:**
* Twisted Pair Cable (Shielded and Unshielded)
* Coaxial Cable
* Fiber Optics

**2. Unguided Media:**
* Radio Transmission
* Microwave Transmission
* Infrared Transmission

---
## Guided Media: Twisted Pair Cable

### Overview
[cite_start]• A twisted pair cable consists of two conductors (normally copper), each with its own plastic insulation, twisted together [cite: 9].
[cite_start]• The purpose of twisted pair cable is to remove or cancel out electromagnetic interference (EMI) from external sources [cite: 9].

### Types of Twisted Pair Cable
[cite_start]There are two types of twisted pair cable [cite: 9]:
1. Unshielded Twisted Pair Cable (UTP)
2. Shielded Twisted Pair Cable (STP)

---
## Unshielded Twisted Pair (UTP) Cable

### Characteristics
[cite_start]• In Unshielded Twisted Pair cable there is no shield provided, only two twisted copper wires with their own color plastic insulator [cite: 10].
[cite_start]• Unshielded Twisted Pair cables are very cheap and easy to install [cite: 10].
[cite_start]• But they are badly affected by noise interference [cite: 10].

### Structure
[cite_start]UTP cable consists of [cite: 10]:
* Twisted copper wire
* Outer plastic cover

---
## Shielded Twisted Pair (STP) Cable

### Characteristics
[cite_start]• STP cable has a metal foil to cover each pair of insulating conductors [cite: 11].
[cite_start]• It reduces the interference of the noise but makes the cable bulky and expensive [cite: 11].

---
## Comparison: UTP vs STP

[cite_start]Comparison between UTP and STP cables [cite: 13]:

| Parameter | UTP (Unshielded) | STP (Shielded) |
| :--- | :--- | :--- |
| **Data Rate** | [cite_start]10-100 Mbps [cite: 13] | [cite_start]150 Mbps [cite: 13] |
| **Cable Length** | [cite_start]100 meter max [cite: 13] | [cite_start]500 meter max [cite: 13] |
| **Electrical Interface** | [cite_start]Most interference and cross talk occurs [cite: 13] | [cite_start]Less interference and cross talk occurs [cite: 13] |
| **Installation** | [cite_start]Easy to install [cite: 13] | [cite_start]Very easy to install [cite: 13] |
| **Cost** | [cite_start]Lowest [cite: 13] | [cite_start]Little costly [cite: 13] |

---
## Guided Media: Coaxial Cable

### Structure
[cite_start]Coaxial cable consists of the following layers in its construction [cite: 14]:
* The copper conductor
* Insulation layer of plastic foam
* Second conductor or shield of wire mesh tube or metallic foil
* Outer jacket of tough plastic

### Characteristics and Applications
[cite_start]• Coaxial cable can be used over longer distances and support more stations on a shared line than twisted pair [cite: 15].
[cite_start]• Braided mesh helps to prevent signal interference or cross-talk. Cross-talk takes place when the signal from one cable becomes mixed up with the signal in a different cable [cite: 15].

[cite_start]Coaxial cable is used in wide variety of applications, including [cite: 15]:
* Cable TV
* LANs (Local Area Networks)

---
## Guided Media: Fiber Optic Cable

### Structure
[cite_start]Optical fiber layers [cite: 16]:
* **Core:** Made of high quality silica glass or plastic
* **Cladding:** Made of high quality silica glass or plastic, with a lower refractive index than the core
* **Buffer:** Protective outer covering

### Overview
[cite_start]• Thin glass or plastic threads used to transmit data using light waves are called optical fiber [cite: 17].

### Types and Specifications
[cite_start]• Single node fiber optic cable can have maximum segment length of 2 kms and bandwidth of up to 100 Mbps [cite: 17].
[cite_start]• Multi-node fiber optic cable can have maximum segment length of 100 kms and bandwidth up to 2 Gbps [cite: 17].

---
## Fiber Optic Cable: Advantages

[cite_start]Fiber optic cables offer several advantages [cite: 18]:

| Advantage | Description |
| :--- | :--- |
| **High Bandwidth** | [cite_start]Capable of carrying large amounts of data [cite: 18] |
| **Electromagnetic Immunity** | [cite_start]Immune to electromagnetic interference [cite: 18] |
| **Industrial Suitability** | [cite_start]Suitable for industrial and noisy areas [cite: 18] |
| **Long Distance** | [cite_start]Signals carrying data can travel long distances without weakening [cite: 18] |

---
## Fiber Optic Cable: Disadvantages

[cite_start]Fiber optic cables have several disadvantages [cite: 19]:

| Disadvantage | Description |
| :--- | :--- |
| **High Cost** | [cite_start]Optical fiber cables are expensive [cite: 19] |
| **Complex Technology** | [cite_start]Sophisticated technology required for manufacturing, installing, and maintaining optical fiber cables [cite: 19] |
| **Unidirectional** | [cite_start]Light waves are unidirectional, so two frequencies are required for full duplex transmission [cite: 19] |

---
## Unguided Media (Wireless Communication)

### Overview
[cite_start]• Unguided media transport electromagnetic waves without using a physical conductor [cite: 20].
[cite_start]• This type of communication is often referred to as wireless communication [cite: 20].
[cite_start]• Signals are normally broadcast through free space and thus are available to anyone who has a device capable of receiving them [cite: 20].

### Signal Propagation Methods
[cite_start]Unguided signals can travel from the source to destination in several ways [cite: 20]:
* Ground Propagation
* Sky Propagation
* Line of Sight Propagation

---
## Ground Propagation

### Characteristics
[cite_start]• In ground propagation, radio waves travel through the lowest portion of the atmosphere hugging the earth [cite: 21].
[cite_start]• Low-frequency signals (lower than 2 MHz) [cite: 21].
[cite_start]• Attenuation is low [cite: 21].

### Applications
[cite_start]Ground wave propagation finds its applications in various fields like [cite: 21]:
* Television signal broadcasting
* Target detection for military purposes
* Radio signal transmission
* All applications that require a distance of operation in the local range

---
## Sky Propagation

### Characteristics
[cite_start]• In sky propagation, higher-frequency radio waves radiate upward into the ionosphere where they are reflected back to Earth [cite: 22].
[cite_start]• This type of transmission allows for greater distance with lower output power [cite: 22].

### Applications
[cite_start]Sky wave propagation has broader applications in [cite: 22]:
* Radar and satellite communication
* Television broadcasting
* Line-of-sight communication
* Mobile communications

---
## Line of Sight Propagation

### Characteristics
[cite_start]• In line of sight propagation, very high-frequency signals are transmitted in straight lines directly from antenna to antenna [cite: 23].

### Applications
[cite_start]• The most common application of Line-of-Sight propagation in its most basic form is in Radar technology [cite: 23].

---
## Wireless Transmission Types

[cite_start]Wireless transmission is classified into three main types [cite: 26]:
1. Radio Transmission
2. Microwave Transmission
3. Infrared Transmission

---
## Radio Transmission

### Characteristics
[cite_start]• Radio waves can penetrate walls [cite: 27].
[cite_start]• Radio waves use omnidirectional antennas that send out signals in all directions [cite: 27].
[cite_start]• The omnidirectional characteristics of radio waves make them useful for multicasting, where there is one sender but many receivers [cite: 27].
[cite_start]• Range between 3 KHz to 1 GHz [cite: 27].

### Applications
[cite_start]• AM, FM radio, and television are examples of multicasting [cite: 27].

### Features Summary

| Feature | Description |
| :--- | :--- |
| **Penetration** | [cite_start]Can penetrate walls [cite: 27] |
| **Antenna Type** | [cite_start]Omnidirectional [cite: 27] |
| **Directionality** | [cite_start]All directions [cite: 27] |
| **Use Case** | [cite_start]Multicasting (one sender, many receivers) [cite: 27] |
| **Frequency Range** | [cite_start]3 KHz to 1 GHz [cite: 27] |

---
## Microwave Transmission

### Characteristics
[cite_start]• Electromagnetic waves having frequencies between 1 to 300 GHz are called Microwaves [cite: 28].
[cite_start]• Microwaves are unidirectional (operating or moving or allowing movement in one direction only) [cite: 28].
[cite_start]• When an antenna transmits microwaves, they can be narrow focused. This means that the sending and receiving antennas need to be aligned [cite: 28].

### Features Summary

| Feature | Description |
| :--- | :--- |
| **Frequency Range** | [cite_start]1 to 300 GHz [cite: 28] |
| **Directionality** | [cite_start]Unidirectional [cite: 28] |
| **Focus** | [cite_start]Narrow focused [cite: 28] |
| **Requirement** | [cite_start]Sending and receiving antennas must be aligned [cite: 28] |

### Applications
* Point-to-point communication
* Satellite communications
* Cellular networks
* Wireless LANs

---
## Infrared Transmission

### Characteristics
[cite_start]• Infrared waves, with frequencies from 300 GHz to 400 THz, can be used for short range communication [cite: 29].
[cite_start]• Infrared waves having high frequencies cannot penetrate walls [cite: 29].
[cite_start]• This advantageous characteristic prevents interference between one system and another. A short-range communication system in one room cannot be affected by another system in the next room [cite: 29].
[cite_start]• When we use our infrared remote control, we don't interfere with the use of the remote by our neighbors [cite: 29].

### Features Summary

| Feature | Description |
| :--- | :--- |
| **Frequency Range** | [cite_start]300 GHz to 400 THz [cite: 29] |
| **Range** | [cite_start]Short range communication [cite: 29] |
| **Penetration** | [cite_start]Cannot penetrate walls [cite: 29] |
| **Interference** | [cite_start]No interference between rooms [cite: 29] |

### Applications
* Remote controls
* Wireless keyboards and mice
* Short-range data transfer (IrDA)
* Indoor wireless communication

---
## Summary of Transmission Media Characteristics

### Guided Media Comparison

| Media Type | Max Distance | Bandwidth | Cost | Interference Resistance |
| :--- | :--- | :--- | :--- | :--- |
| **UTP** | [cite_start]100m [cite: 13] | [cite_start]10-100 Mbps [cite: 13] | [cite_start]Lowest [cite: 13] | [cite_start]Low [cite: 13] |
| **STP** | [cite_start]500m [cite: 13] | [cite_start]150 Mbps [cite: 13] | [cite_start]Little costly [cite: 13] | [cite_start]High [cite: 13] |
| **Coaxial** | Longer than TP | Higher than TP | Moderate | [cite_start]Prevents cross-talk [cite: 15] |
| **Fiber Optic (Single)** | [cite_start]2 km [cite: 17] | [cite_start]100 Mbps [cite: 17] | [cite_start]Expensive [cite: 19] | [cite_start]Immune to EMI [cite: 18] |
| **Fiber Optic (Multi)** | [cite_start]100 km [cite: 17] | [cite_start]2 Gbps [cite: 17] | [cite_start]Expensive [cite: 19] | [cite_start]Immune to EMI [cite: 18] |

### Unguided Media Comparison

| Media Type | Frequency Range | Directionality | Penetration | Applications |
| :--- | :--- | :--- | :--- | :--- |
| **Radio** | [cite_start]3 KHz - 1 GHz [cite: 27] | [cite_start]Omnidirectional [cite: 27] | [cite_start]Penetrates walls [cite: 27] | [cite_start]AM/FM, TV [cite: 27] |
| **Microwave** | [cite_start]1 - 300 GHz [cite: 28] | [cite_start]Unidirectional [cite: 28] | Line of sight | Satellite, cellular |
| **Infrared** | [cite_start]300 GHz - 400 THz [cite: 29] | Directional | [cite_start]Cannot penetrate walls [cite: 29] | [cite_start]Remote controls [cite: 29] |

---
## Key Formulas and Theorems

### Nyquist Theorem (Noiseless Channel)
**Maximum data rate = 2H log₂ V bits per second**

Where:
* H = Bandwidth (Hz)
* V = Number of signal levels

### Shannon's Theorem (Noisy Channel)
**Maximum data rate = H log₂ (1 + S/N) bps**

Where:
* H = Bandwidth (Hz)
* S/N = Signal-to-Noise Ratio

### Signal-to-Noise Ratio (SNR)
**SNR = (Power of signal) / (Power of noise)**

---
## Propagation Methods Summary

| Propagation Type | Frequency | Coverage | Key Feature |
| :--- | :--- | :--- | :--- |
| **Ground** | [cite_start]< 2 MHz [cite: 21] | Local range | [cite_start]Low attenuation [cite: 21] |
| **Sky** | Higher frequency | [cite_start]Greater distance [cite: 22] | [cite_start]Ionosphere reflection [cite: 22] |
| **Line of Sight** | [cite_start]Very high frequency [cite: 23] | Direct | [cite_start]Straight line transmission [cite: 23] |
`
};