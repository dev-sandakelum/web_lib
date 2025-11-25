export const MultiplexingData = [
  {
    id: 1,
    question: `<b>a)</b> Define <b>Multiplexing</b> and explain its purpose in data communication.<br><br><b>b)</b> Differentiate between a <b>Multiplexer (MUX)</b> and a <b>Demultiplexer (DEMUX)</b>, describing the function of each device.`,
    modelAnswer: `<b>a) Multiplexing Definition and Purpose:</b><br>
Multiplexing is the set of techniques that allows the simultaneous transmission of multiple signals across a single data link. This technique enables efficient utilization of communication channels by combining multiple data streams into one transmission medium.<br><br>

<b>Purpose:</b><br>
<ul>
<li>Maximize the use of expensive transmission media</li>
<li>Reduce the cost of separate communication links</li>
<li>Enable multiple users to share a single physical channel</li>
<li>Improve bandwidth utilization efficiency</li>
</ul><br>

<b>b) Multiplexer vs Demultiplexer:</b><br><br>

<b>Multiplexer (MUX):</b><br>
<ul>
<li><b>Function:</b> Combines multiple input signals into one output signal</li>
<li><b>Direction:</b> Many-to-one operation</li>
<li><b>Location:</b> Used at the sending end</li>
<li><b>Purpose:</b> Combines n input lines to generate one composite output line</li>
</ul><br>

<b>Demultiplexer (DEMUX):</b><br>
<ul>
<li><b>Function:</b> Separates a composite signal into its component signals</li>
<li><b>Direction:</b> One-to-many operation</li>
<li><b>Location:</b> Used at the receiving end</li>
<li><b>Purpose:</b> Splits the composite signal back into individual original signals</li>
</ul>`,
    createdAt: '2025-01-15',
    model: 'Sonnet 4'
  },
  {
    id: 2,
    question: `Describe <b>Frequency Division Multiplexing (FDM)</b>. Include four (04) key features of this technique and explain the bandwidth requirement.`,
    modelAnswer: `<b>Frequency Division Multiplexing (FDM):</b><br><br>

FDM is a multiplexing technique that combines signals of different frequencies into a composite signal for transmission over a single communication link.<br><br>

<b>Four Key Features:</b><br><br>

<ol>
<li><b>Analog Technique:</b> FDM is an analog multiplexing technique that works with continuous analog signals rather than digital data.</li><br>

<li><b>Frequency-Based Division:</b> Signals of different frequencies are combined into a composite signal and transmitted on a single link. Each signal occupies a different frequency band.</li><br>

<li><b>Bandwidth Requirement:</b> The bandwidth of the communication link should be greater than the combined bandwidths of all the various channels being multiplexed. This ensures all signals can be transmitted without interference.</li><br>

<li><b>Unique Frequency Assignment:</b> Each signal is assigned a different, non-overlapping frequency range to prevent interference between channels.</li>
</ol><br>

<b>How It Works:</b><br>
Multiple signals are modulated onto different carrier frequencies, combined into a composite signal, transmitted over the link, and then separated at the receiver by filtering out individual frequency bands.`,
    createdAt: '2025-01-14',
    model: 'Sonnet 4'
  },
  {
    id: 3,
    question: `<b>a)</b> Explain <b>Wave Division Multiplexing (WDM)</b> and describe how it differs from FDM.<br><br><b>b)</b> Describe the role of a <b>PRISM</b> in WDM and explain how it functions in combining and splitting light waves.`,
    modelAnswer: `<b>a) Wave Division Multiplexing (WDM):</b><br><br>

<b>Definition:</b><br>
WDM is an analog multiplexing technique specifically designed for optical fiber communications. It works on the same principle as FDM but uses light signals instead of electrical signals.<br><br>

<b>Key Characteristics:</b><br>
<ul>
<li>WDM is an analog technique</li>
<li>Working principle is the same as FDM</li>
<li>Different signals are optical or light signals transmitted through optical fiber</li>
<li>Various light waves from different sources are combined to form a composite light signal</li>
<li>The composite signal is transmitted across the channel to the receiver</li>
<li>At the receiver side, the composite light is broken into different light waves by a Demultiplexer</li>
</ul><br>

<b>Difference from FDM:</b><br>
While FDM uses electrical signals with different frequencies, WDM uses optical/light signals with different wavelengths (or frequencies in the optical spectrum).<br><br>

<b>b) Role of PRISM in WDM:</b><br><br>

<b>Function:</b><br>
A PRISM is used for both combining and splitting light waves in WDM systems.<br><br>

<b>How PRISM Works:</b><br>
<ul>
<li>The prism bends beams of light based on two factors:</li>
<ul>
<li><b>Angle of incidence:</b> The angle at which light strikes the prism</li>
<li><b>Frequency of light wave:</b> Different frequencies (wavelengths) bend at different angles</li>
</ul>
<li><b>At Multiplexer:</b> Different wavelength light signals enter the prism from different angles and are combined into a single composite light beam</li>
<li><b>At Demultiplexer:</b> The composite light beam enters the prism and is separated into its component wavelengths, each exiting at a different angle</li>
</ul>`,
    createdAt: '2025-01-13',
    model: 'Sonnet 4'
  },
  {
    id: 4,
    question: `Describe <b>Time Division Multiplexing (TDM)</b>. Explain five (05) key features and state the data rate requirement for TDM.`,
    modelAnswer: `<b>Time Division Multiplexing (TDM):</b><br><br>

TDM is a digital multiplexing technique where the communication channel is divided based on time rather than frequency. Multiple signals share the same channel by taking turns using the entire bandwidth for short time intervals.<br><br>

<b>Five Key Features:</b><br><br>

<ol>
<li><b>Digital Technique:</b> TDM is a digital multiplexing technique, unlike FDM and WDM which are analog techniques. It works with discrete digital signals.</li><br>

<li><b>Time-Based Division:</b> The channel/link is not divided on the basis of frequency but on the basis of time. Each signal gets exclusive use of the entire bandwidth for a specific time period.</li><br>

<li><b>Time Slot Allocation:</b> Total time available in the channel is divided among several users. Each user is allotted a particular time interval called a time slot or time slice.</li><br>

<li><b>Sequential Transmission:</b> Signals from different sources are transmitted sequentially, one after another, in their assigned time slots. The multiplexer samples each input in a round-robin fashion.</li><br>

<li><b>Data Rate Requirement:</b> In TDM, the data rate capacity of the transmission medium should be greater than the combined data rate required by all sending or receiving devices. This ensures all signals can be transmitted without data loss.</li>
</ol><br>

<b>Formula:</b><br>
Link Capacity ≥ Sum of all individual channel data rates`,
    createdAt: '2025-01-12',
    model: 'Sonnet 4'
  },
  {
    id: 5,
    question: `Compare and contrast <b>Frequency Division Multiplexing (FDM)</b> and <b>Time Division Multiplexing (TDM)</b> by describing four (04) key differences between these two techniques.`,
    modelAnswer: `<b>Key Differences Between FDM and TDM:</b><br><br>

<ol>
<li><b>Nature of Technique:</b>
<ul>
<li><b>FDM:</b> It is an analog multiplexing technique that works with continuous analog signals</li>
<li><b>TDM:</b> It is a digital multiplexing technique that works with discrete digital signals</li>
</ul>
</li><br>

<li><b>Channel Division Method:</b>
<ul>
<li><b>FDM:</b> The channel is divided on the basis of frequency. Each signal is assigned a different frequency band within the available bandwidth</li>
<li><b>TDM:</b> The channel is divided on the basis of time. Each signal is assigned a specific time slot during which it has exclusive use of the entire bandwidth</li>
</ul>
</li><br>

<li><b>Capacity Requirement:</b>
<ul>
<li><b>FDM:</b> The bandwidth of the link should be greater than the combined bandwidths of all channels</li>
<li><b>TDM:</b> The data rate capacity of the transmission medium should be greater than the combined data rate of all devices</li>
</ul>
</li><br>

<li><b>Signal Transmission:</b>
<ul>
<li><b>FDM:</b> All signals are transmitted simultaneously, each on its own frequency band. Each signal uses a different frequency at the same time</li>
<li><b>TDM:</b> Signals are transmitted sequentially, taking turns using the entire channel bandwidth. Each signal gets the full bandwidth but at different time intervals</li>
</ul>
</li>
</ol><br>

<b>Summary:</b> FDM shares frequency spectrum simultaneously, while TDM shares time sequentially.`,
    createdAt: '2025-01-11',
    model: 'Sonnet 4'
  },
  {
    id: 6,
    question: `<b>a)</b> Define the <b>Public Switched Telephone Network (PSTN)</b> and describe its modern capabilities.<br><br><b>b)</b> List and explain the two (02) main component types used in PSTN infrastructure.`,
    modelAnswer: `<b>a) Public Switched Telephone Network (PSTN):</b><br><br>

<b>Definition:</b><br>
The term Public Switched Telephone Network (PSTN) describes the various equipment and interconnecting facilities that provide phone service to the public. It is the traditional circuit-switched telephone network.<br><br>

<b>Modern PSTN:</b><br>
The PSTN is a network of computers and other electronic equipment that converts speech into digital data and provides a multitude of sophisticated phone features, data services, and mobile wireless access.<br><br>

<b>Capabilities:</b><br>
<ul>
<li>Voice communication (traditional telephone service)</li>
<li>Digital data conversion and transmission</li>
<li>Advanced phone features (call waiting, caller ID, voicemail, etc.)</li>
<li>Data services and internet connectivity</li>
<li>Integration with mobile wireless networks</li>
</ul><br>

<b>b) PSTN Infrastructure Components:</b><br><br>

<b>1. Underground Lines (UG):</b><br>
<ul>
<li>Underground telephone cables</li>
<li>Buried beneath the ground for protection</li>
<li>More reliable and protected from weather conditions</li>
<li>Common in urban and densely populated areas</li>
</ul><br>

<b>2. Overhead Lines (OH):</b><br>
<ul>
<li>Above-ground telephone lines</li>
<li>Suspended on poles or towers</li>
<li>More susceptible to weather damage</li>
<li>Easier and cheaper to install and maintain</li>
<li>Common in rural areas</li>
</ul>`,
    createdAt: '2025-01-10',
    model: 'Sonnet 4'
  },
  {
    id: 7,
    question: `<b>a)</b> Explain what <b>Digital Subscriber Line (DSL)</b> is and describe its main advantage.<br><br><b>b)</b> List and briefly describe three (03) types of DSL technologies.`,
    modelAnswer: `<b>a) Digital Subscriber Line (DSL):</b><br><br>

<b>Definition:</b><br>
DSL (Digital Subscriber Line) is the general term for services that offer internet connections via a digital modem and a copper telephone line.<br><br>

<b>Main Advantage:</b><br>
The beauty of DSL is that it provides one superfast internet connection while using existing telephone infrastructure. This allows simultaneous use of internet and telephone services on the same line without interference.<br><br>

<b>Key Benefits:</b><br>
<ul>
<li>Uses existing copper telephone lines</li>
<li>No need for new infrastructure installation</li>
<li>Provides high-speed internet access</li>
<li>Allows simultaneous voice and data transmission</li>
<li>Dedicated connection (not shared with neighbors)</li>
</ul><br>

<b>b) Three Types of DSL Technologies:</b><br><br>

<b>1. SDSL (Symmetric Digital Subscriber Line):</b><br>
<ul>
<li>Provides equal upload and download speeds</li>
<li>Suitable for businesses requiring balanced data flow</li>
<li>Ideal for applications like video conferencing and file sharing</li>
</ul><br>

<b>2. VDSL (Very High Speed Digital Subscriber Line):</b><br>
<ul>
<li>Offers the fastest speeds among DSL technologies</li>
<li>Provides very high-speed data transmission</li>
<li>Performance is highly distance-dependent</li>
<li>Suitable for bandwidth-intensive applications</li>
</ul><br>

<b>3. ADSL (Asymmetric Digital Subscriber Line):</b><br>
<ul>
<li>Most common type of DSL</li>
<li>Provides different upload and download speeds</li>
<li>Download speeds are typically faster than upload speeds</li>
<li>Optimized for typical consumer internet usage</li>
</ul>`,
    createdAt: '2025-01-09',
    model: 'Sonnet 4'
  },
  {
    id: 8,
    question: `Describe <b>Asymmetric Digital Subscriber Line (ADSL)</b> in detail. Include:<br>
<b>a)</b> How ADSL works and why it is called "asymmetric"<br>
<b>b)</b> The bandwidth allocation for different services<br>
<b>c)</b> The relationship between distance and performance`,
    modelAnswer: `<b>a) How ADSL Works:</b><br><br>

<b>Technology:</b><br>
ADSL exploits the unused analog bandwidth available in existing telephone wires. It uses existing telephone lines to provide high-speed internet access without interfering with voice communication.<br><br>

<b>Why "Asymmetric":</b><br>
ADSL is called "asymmetric" because it provides different upload and download speeds. The download speeds are typically much faster than upload speeds. This asymmetry is designed to match typical internet usage patterns where users download more data (web pages, videos, files) than they upload.<br><br>

<b>Characteristics:</b><br>
<ul>
<li>Uses existing copper telephone lines</li>
<li>Provides simultaneous voice and data services</li>
<li>Download speeds significantly exceed upload speeds</li>
<li>Optimized for consumer internet usage patterns</li>
</ul><br>

<b>b) Bandwidth Allocation in ADSL:</b><br><br>

<table border="1" cellpadding="6" cellspacing="0">
<tr>
<th><b>Service</b></th>
<th><b>Frequency Range</b></th>
</tr>
<tr>
<td><b>Voice Communication</b></td>
<td>0 - 4 kHz</td>
</tr>
<tr>
<td><b>Upload Data</b></td>
<td>25 - 138 kHz</td>
</tr>
<tr>
<td><b>Download Data</b></td>
<td>138 kHz - 1.1 MHz</td>
</tr>
</table><br>

This allocation clearly shows the asymmetry, with download data occupying a much larger frequency range than upload data.<br><br>

<b>c) Distance vs Performance Relationship:</b><br><br>

ADSL performance depends heavily on the distance from the telephone exchange:<br><br>

<ul>
<li><b>Shorter Distance = Higher Bandwidth:</b> Users closer to the telephone exchange experience faster speeds and better performance</li>
<li><b>Longer Distance = Lower Bandwidth:</b> Users farther from the exchange experience slower speeds and reduced performance</li>
<li><b>Signal Attenuation:</b> Performance degrades with distance due to signal attenuation (weakening) in the copper wire</li>
<li>The quality of the copper line also affects performance</li>
</ul><br>

<b>Key Point:</b> Distance is a critical factor in ADSL performance, with significant speed degradation occurring as distance increases.`,
    createdAt: '2025-01-08',
    model: 'Sonnet 4'
  },
  {
    id: 9,
    question: `<b>a)</b> Define what a <b>Cable Modem</b> is and explain its primary function.<br><br><b>b)</b> Describe four (04) key features of cable modem technology and explain how it differs from ADSL.`,
    modelAnswer: `<b>a) Cable Modem Definition and Function:</b><br><br>

<b>Definition:</b><br>
A cable modem is a hardware device that allows your computer to communicate with an Internet service provider over a landline connection.<br><br>

<b>Primary Function:</b><br>
It converts an analog signal to a digital signal for the purpose of granting access to broadband Internet. This conversion enables high-speed data transmission over cable television infrastructure.<br><br>

<b>b) Four Key Features of Cable Modem Technology:</b><br><br>

<ol>
<li><b>Infrastructure:</b>
<ul>
<li>Uses coaxial cable infrastructure (the same infrastructure used for cable TV)</li>
<li>Takes advantage of existing cable television networks</li>
<li>Does not require separate cabling installation</li>
</ul>
</li><br>

<li><b>High-Speed Access:</b>
<ul>
<li>Provides high-speed internet access</li>
<li>Typically offers faster speeds than ADSL</li>
<li>Capable of delivering higher bandwidth for both upload and download</li>
</ul>
</li><br>

<li><b>Shared Bandwidth:</b>
<ul>
<li>Bandwidth is shared among users in the neighborhood</li>
<li>Performance can vary depending on the number of active users</li>
<li>Peak usage times may result in reduced speeds</li>
</ul>
</li><br>

<li><b>Always-On Connection:</b>
<ul>
<li>Provides constant, always-on internet connectivity</li>
<li>No need to dial or establish connection each time</li>
<li>Instant access to internet services</li>
</ul>
</li>
</ol><br>

<b>Difference from ADSL:</b><br>
<ul>
<li><b>Infrastructure:</b> Cable modem uses coaxial cable (TV cable), while ADSL uses telephone lines</li>
<li><b>Speed:</b> Cable modems typically offer faster speeds than ADSL</li>
<li><b>Bandwidth Sharing:</b> Cable modem bandwidth is shared with neighbors, while ADSL provides a dedicated connection</li>
<li><b>Performance:</b> Cable modem speed can vary with neighborhood usage, while ADSL speed is more consistent but distance-dependent</li>
</ul>`,
    createdAt: '2025-01-07',
    model: 'Sonnet 4'
  },
  {
    id: 10,
    question: `Compare <b>ADSL</b> and <b>Cable Modem</b> technologies by creating a detailed comparison covering:<br>
<b>a)</b> Infrastructure used<br>
<b>b)</b> Speed characteristics<br>
<b>c)</b> Connection type<br>
<b>d)</b> Performance factors`,
    modelAnswer: `<b>Comparison: ADSL vs Cable Modem</b><br><br>

<b>a) Infrastructure Used:</b><br><br>

<b>ADSL:</b><br>
<ul>
<li>Uses existing copper telephone lines</li>
<li>Requires a telephone line connection</li>
<li>Can operate simultaneously with voice service on the same line</li>
<li>Exploits unused analog bandwidth in telephone wires</li>
</ul><br>

<b>Cable Modem:</b><br>
<ul>
<li>Uses coaxial cable infrastructure</li>
<li>Same infrastructure as cable television service</li>
<li>Requires cable TV connection availability</li>
<li>Utilizes unused frequency spectrum on cable TV lines</li>
</ul><br>

<b>b) Speed Characteristics:</b><br><br>

<b>ADSL:</b><br>
<ul>
<li>Asymmetric speeds (download faster than upload)</li>
<li>Typical speeds: 1-24 Mbps download, 0.5-3.5 Mbps upload</li>
<li>Speed depends heavily on distance from exchange</li>
<li>More consistent speeds but generally lower maximum speeds</li>
</ul><br>

<b>Cable Modem:</b><br>
<ul>
<li>Generally symmetric or near-symmetric speeds</li>
<li>Typically offers faster speeds than ADSL</li>
<li>Can provide 50-1000+ Mbps depending on service tier</li>
<li>Speed can vary based on network congestion</li>
</ul><br>

<b>c) Connection Type:</b><br><br>

<b>ADSL:</b><br>
<ul>
<li>Dedicated connection</li>
<li>Bandwidth not shared with neighbors</li>
<li>Consistent performance regardless of neighbor activity</li>
<li>Point-to-point connection to the exchange</li>
</ul><br>

<b>Cable Modem:</b><br>
<ul>
<li>Shared connection</li>
<li>Bandwidth is shared among users in the neighborhood</li>
<li>Performance can degrade during peak usage times</li>
<li>Multiple users on the same cable segment</li>
</ul><br>

<b>d) Performance Factors:</b><br><br>

<b>ADSL:</b><br>
<ul>
<li><b>Primary Factor:</b> Distance from telephone exchange</li>
<li>Shorter distance = higher bandwidth</li>
<li>Longer distance = lower bandwidth</li>
<li>Signal attenuation affects performance</li>
<li>Line quality impacts speeds</li>
<li>Performance is predictable and consistent</li>
</ul><br>

<b>Cable Modem:</b><br>
<ul>
<li><b>Primary Factor:</b> Number of active users in neighborhood</li>
<li>Less affected by physical distance</li>
<li>More affected by network congestion</li>
<li>Peak hours can reduce speeds significantly</li>
<li>Off-peak hours provide maximum speeds</li>
<li>Performance can be variable</li>
</ul><br>

<b>Summary:</b><br>
ADSL provides dedicated, consistent speeds that decrease with distance, while Cable Modem offers typically faster speeds that are shared and can vary with neighborhood usage.`,
    createdAt: '2025-01-06',
    model: 'Sonnet 4'
  }
];