// datasets/information-systems/fundamentals.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const IsFundamentalsDataset: Dataset = {
  id: "ict-is-fundamentals",
  topicCount: 4,
  category: "Information Systems",
  subcategory: "Information System Components & Concepts",
  description: "Fundamentals of Information Systems, including data/information/knowledge, system components, characteristics of valuable information, and IS categories.",
  topics: [
    "Information Concepts",
    "Characteristics of Valuable Information",
    "Systems and Information Systems",
    "Organizational Structure and Globalization",
  ],
  content: `
<TOPIC_START index="0" title="Information Concepts">
1.0 Information Concepts

1.1 Data
• **Raw facts**.
• Types of Data:
    * **Alphanumeric data**: Numbers, letters, and other characters.
    * **Image data**: Graphic images and pictures.
    * **Audio data**: Sound, noise, or tones.
    * **Video data**: Moving images or pictures.

1.2 Information
• A collection of facts **organized** in such a way that they have **additional value** beyond the value of the individual facts.
• Data is transformed into information by a transformation process that involves applying knowledge by selecting, organizing, and manipulating data.

1.3 Knowledge
• The **awareness and understanding** of a set of information and ways that information can be made useful to support a specific task or reach a decision.

1.4 Process
• A set of **logically related tasks** performed to achieve a defined outcome.
<TOPIC_END>

<TOPIC_START index="1" title="Characteristics of Valuable Information">
2.0 Characteristics of Valuable Information

Valuable Information must possess these characteristics:

| Characteristic | Definition |
| :--- | :--- |
| **Accessible** | Easily accessible by authorized users so they can obtain it in the right format and at the right time to meet their needs. |
| **Accurate** | Error free; inaccurate data input leads to inaccurate information, commonly called **garbage in, garbage out (GIGO)**. |
| **Complete** | Contains all the important facts; e.g., an investment report that does not include all important costs is not complete. |
| **Economical** | Relatively economical to produce; decision makers must balance the value of information with the cost of producing it. |
| **Flexible** | Can be used for a variety of purposes; e.g., inventory data can be used by sales, production, and finance. |
| **Relevant** | Important to the decision maker; e.g., lumber prices might not be relevant to a computer chip manufacturer. |
| **Reliable** | Can be trusted by users, often depending on the reliability of the data-collection method or the source. |
| **Secure** | Should be secure from access by unauthorized users.
| **Simple** | Not overly complex; too much information can cause **information overload**. |
| **Timely** | Delivered when it is needed. |
| **Verifiable** | You can check it to make sure it is correct, perhaps by checking many sources for the same information. |
<TOPIC_END>

<TOPIC_START index="2" title="Systems and Information Systems">
3.0 Systems and Information Systems

3.1 What is a System?
• A set of **interrelated components** that work together to meet an objective.
• A set of elements or components that interact to accomplish goals.

3.2 Components of a System
1. **Input**
2. **Processing**
3. **Output**
4. **Feedback** (Optional)

3.3 System Categories

3.3.1 Open System
• A system that has flows of information, energy, and/or matter between the system and its **environment**, and which adapts to the exchange.
• *Example*: The human body (requires inputs of food and oxygen; outputs carbon dioxide and waste).

3.3.2 Closed System
• A system that is **completely isolated** from its environment.
• *Example*: Earth, as a whole (nothing generally enters or leaves it except the energy from the sun).

3.4 What is an Information System (IS)?
• A set of interrelated components that **collect, manipulate, store, and disseminate data and information** and provide a **feedback mechanism** to meet an objective.

3.5 Core Components of an Information System • **Input**: The activity of gathering and capturing **raw data**.
• **Processing**: Converting or **transforming data** into useful outputs.
• **Output**: Involves producing useful information, usually in the form of documents and reports.
• **Feedback**: Information from the system that is used to make changes to input or processing activities.
    * **Forecasting** is predicting future events to avoid problems.

3.6 IS Categories

3.6.1 Manual IS
• The entire process is done via a **manual way**.
• *Example*: Old libraries.

3.6.2 Computer Based IS (CBIS)
• An IS that is processed via computer systems.
• CBIS is a single set of hardware, software, databases, telecommunications, people, and procedures that are configured to collect, manipulate, store, and process data into information.

3.7 Components of a CBIS

| Component | Definition |
| :--- | :--- |
| **Hardware** | Computer equipment used to perform input, processing, and output activities. |
| **Software** | The computer programs that govern the operation of the computer. |
| **Databases** | An organized collection of facts and information. |
| **Telecommunications** | The electronic transmission of signals for communications, which enables organizations to carry out their processes and tasks through effective computer networks. |
| **People** | Individuals involved in using and operating the system. |
| **Procedures** | Include the strategies, policies, methods, and rules for using the CBIS, including the operation, maintenance, and security of the computer (e.g., who can access what data). |
| **Networks** | Computers and equipment that are connected in a building, around the country, or around the world to enable electronic communications. |
| **Internet** | The world's largest computer network, consisting of thousands of interconnected networks, all freely exchanging information. |
<TOPIC_END>

<TOPIC_START index="3" title="Organizational Structure and Globalization">
4.0 Organizational Structure and Globalization

4.1 Organizational Systems
• An organization is a formal collection of people and other resources established to accomplish a set of goals.
• An organization is a system that has inputs, processing mechanisms, outputs, and feedback.
• Information systems support and work within all parts of an organizational process.

4.2 Organizational Structures
An organization's structure depends on its goals and approach to management, affecting how it views and uses information systems. Types include Traditional, project, team, and virtual.

4.2.1 Traditional (Hierarchical) Structure
• Called a **hierarchical structure**.
• Features a managerial pyramid where the hierarchy of decision making and authority flows from **strategic management** at the top down to operational management and non-management employees.
• The strategic level has a higher degree of **decision authority**, more impact on corporate goals, and more unique problems to solve compared to lower levels.

4.2.2 Flat Organizational Structure
• An organizational structure with a **reduced number of management layers**.

4.2.3 Project Organizational Structures
• Centered on major **products or services**.

4.2.4 Team Organizational Structures
• Centered on **work teams or groups**.

4.2.5 Virtual Organizational Structure and Collaborative Work
• Employs individuals, groups, or complete business units in **geographically dispersed areas** that can last for a few weeks or years, often requiring telecommunications or the Internet.

4.3 Globalization Eras

| Era | Dates | Characterized by |
| :--- | :--- | :--- |
| **Globalization 1.0** | Late 1400–1800 | Countries with the power to explore and influence the world. |
| **Globalization 2.0** | 1800–2000 | Multinational corporations that have plants, warehouses, and offices around the world. |
| **Globalization 3.0** | 2000–today | Individuals from around the world who can compete and influence other people, corporations, and countries by using the Internet and powerful technology tools. |

4.4 Global Challenges in IS
Managing IS globally presents challenges:

• **Cultural challenges**: Countries have their own cultures and customs that affect global trade.
• **Language challenges**: Language differences make it difficult to translate exact meanings.
• **Time and distance challenges**: Long time differences and long distances make communication and product/equipment movement difficult.
• **Infrastructure challenges**: High-quality electricity, water, telephone services, Internet connections, and skilled employees might be unavailable or expensive.
• **Currency challenges**: The fluctuating value of different currencies makes international trade complex.
• **Product and service challenges**: Physical products are difficult to deliver globally, while electronic products (e-products) and e-services (e-services) can be delivered electronically (e.g., software, music).
• **Technology transfer issues**: Governments restrict military-related equipment sales; there are issues with the stealing of intellectual property, trade secrets, and counterfeiting.
• **State, regional, and national laws**: Each area has laws (e.g., trade secrets, data privacy) that must be obeyed, including **transborder data-flow laws**.
<TOPIC_END>
`
};