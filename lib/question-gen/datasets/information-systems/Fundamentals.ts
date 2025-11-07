// datasets/information-systems/fundamentals.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const isFundamentalsDataset: Dataset = {
  id: "ict-is-fundamentals",
  category: "Information Systems",
  subcategory: "Information System Components & Concepts",
  description: "Fundamentals of Information Systems, including data/information/knowledge, system components, characteristics of valuable information, and IS categories.",
  content: `
[cite_start]Topic: Information System Components, Information Concepts & Business Information Systems [cite: 8, 9, 10]

Objectives:
[cite_start]• Understand the difference between Data, Information, Knowledge, and Process [cite: 11]
[cite_start]• Identify the characteristics of Valuable Information [cite: 31, 33]
[cite_start]• Define what a system is and its components [cite: 36, 39]
[cite_start]• Differentiate between open and closed systems [cite: 54, 55]
[cite_start]• Define an Information System and its core components (Input, Processing, Output, Feedback) [cite: 74, 75]
[cite_start]• Distinguish between Manual IS and Computer Based IS (CBIS) and list the components of CBIS [cite: 90, 93, 96]
[cite_start]• Explain global challenges in IS and types of organizational structures [cite: 119, 181]

---
## Information Concepts

Data:
[cite_start]• **Raw facts**[cite: 12].
• Types of Data:
    * [cite_start]**Alphanumeric data**: Numbers, letters, and other characters[cite: 19, 20].
    * [cite_start]**Image data**: Graphic images and pictures[cite: 21, 22].
    * [cite_start]**Audio data**: Sound, noise, or tones[cite: 23, 25].
    * [cite_start]**Video data**: Moving images or pictures[cite: 24, 26].

Information:
[cite_start]• A collection of facts **organized** in such a way that they have **additional value** beyond the value of the individual facts[cite: 13].
[cite_start]• Data is transformed into information by a transformation process that involves applying knowledge by selecting, organizing, and manipulating data[cite: 27, 29, 30].


Knowledge:
[cite_start]• The **awareness and understanding** of a set of information and ways that information can be made useful to support a specific task or reach a decision[cite: 14].

Process:
[cite_start]• A set of **logically related tasks** performed to achieve a defined outcome[cite: 15].

---
## Characteristics of Valuable Information

[cite_start]Valuable Information must possess these characteristics[cite: 31, 33]:

| Characteristic | Definition |
| :--- | :--- |
| **Accessible** | [cite_start]Easily accessible by authorized users so they can obtain it in the right format and at the right time to meet their needs[cite: 32]. |
| **Accurate** | [cite_start]Error free; inaccurate data input leads to inaccurate information, commonly called **garbage in, garbage out (GIGO)**[cite: 32]. |
| **Complete** | [cite_start]Contains all the important facts; e.g., an investment report that does not include all important costs is not complete[cite: 32]. |
| **Economical** | [cite_start]Relatively economical to produce; decision makers must balance the value of information with the cost of producing it[cite: 32]. |
| **Flexible** | [cite_start]Can be used for a variety of purposes; e.g., inventory data can be used by sales, production, and finance[cite: 32]. |
| **Relevant** | [cite_start]Important to the decision maker; e.g., lumber prices might not be relevant to a computer chip manufacturer[cite: 34]. |
| **Reliable** | [cite_start]Can be trusted by users, often depending on the reliability of the data-collection method or the source[cite: 34]. |
| **Secure** | [cite_start]Should be secure from access by unauthorized users[cite: 34]. |
| **Simple** | [cite_start]Not overly complex; too much information can cause **information overload**[cite: 34]. |
| **Timely** | [cite_start]Delivered when it is needed[cite: 34]. |
| **Verifiable** | [cite_start]You can check it to make sure it is correct, perhaps by checking many sources for the same information[cite: 34].

---
## Systems and Information Systems

### What is a System?
[cite_start]• A set of **interrelated components** that work together to meet an objective[cite: 37].
[cite_start]• A set of elements or components that interact to accomplish goals[cite: 38].

### Components of a System
1. [cite_start]**Input** [cite: 41]
2. [cite_start]**Processing** [cite: 42]
3. [cite_start]**Output** [cite: 43]
4. [cite_start]**Feedback** (Optional) [cite: 44]


### System Categories
* [cite_start]**Open System**: A system that has flows of information, energy, and/or matter between the system and its **environment**, and which adapts to the exchange[cite: 69].
    * [cite_start]*Example*: The human body (requires inputs of food and oxygen; outputs carbon dioxide and waste)[cite: 71].
* [cite_start]**Closed System**: A system that is **completely isolated** from its environment[cite: 67].
    * [cite_start]*Example*: Earth, as a whole (nothing generally enters or leaves it except the energy from the sun)[cite: 72].


### What is an Information System (IS)?
[cite_start]• A set of interrelated components that **collect, manipulate, store, and disseminate data and information** and provide a **feedback mechanism** to meet an objective[cite: 74].

### Core Components of an Information System
* [cite_start]**Input**: The activity of gathering and capturing **raw data**[cite: 77].
* [cite_start]**Processing**: Converting or **transforming data** into useful outputs[cite: 78].
* [cite_start]**Output**: Involves producing useful information, usually in the form of documents and reports[cite: 79].
* [cite_start]**Feedback**: Information from the system that is used to make changes to input or processing activities[cite: 80].
    * [cite_start]**Forecasting** is predicting future events to avoid problems[cite: 81].

### IS Categories
* [cite_start]**Manual IS**: The entire process is done via a **manual way**[cite: 91].
    * [cite_start]*Example*: Old libraries[cite: 92].
* [cite_start]**Computer Based IS (CBIS)**: An IS that is processed via computer systems[cite: 95].
    * [cite_start]CBIS is a single set of hardware, software, databases, telecommunications, people, and procedures that are configured to collect, manipulate, store, and process data into information[cite: 94].

### Components of a CBIS

| Component | Definition |
| :--- | :--- |
| **Hardware** | [cite_start]Computer equipment used to perform input, processing, and output activities[cite: 105]. |
| **Software** | [cite_start]The computer programs that govern the operation of the computer[cite: 106]. |
| **Databases** | [cite_start]An organized collection of facts and information[cite: 107]. |
| **Telecommunications** | [cite_start]The electronic transmission of signals for communications, which enables organizations to carry out their processes and tasks through effective computer networks[cite: 108]. |
| **People** | [cite_start]Individuals involved in using and operating the system[cite: 112]. |
| **Procedures** | [cite_start]Include the strategies, policies, methods, and rules for using the CBIS, including the operation, maintenance, and security of the computer (e.g., who can access what data)[cite: 113, 114]. |
| **Networks** | [cite_start]Computers and equipment that are connected in a building, around the country, or around the world to enable electronic communications[cite: 110]. |
| **Internet** | [cite_start]The world's largest computer network, consisting of thousands of interconnected networks, all freely exchanging information[cite: 111]. |

---
## Organizational Structure and Globalization

### Organizational Systems
[cite_start]• An organization is a formal collection of people and other resources established to accomplish a set of goals[cite: 159].
[cite_start]• An organization is a system that has inputs, processing mechanisms, outputs, and feedback[cite: 161].
[cite_start]• Information systems support and work within all parts of an organizational process[cite: 174].


### Organizational Structures
[cite_start]An organization's structure depends on its goals and approach to management, affecting how it views and uses information systems[cite: 180]. [cite_start]Types include Traditional, project, team, and virtual[cite: 181].

* **Traditional (Hierarchical) Structure**:
    * [cite_start]Called a hierarchical structure[cite: 183].
    * [cite_start]Features a managerial pyramid where the hierarchy of decision making and authority flows from **strategic management** at the top down to operational management and non-management employees[cite: 184].
    * [cite_start]The strategic level has a higher degree of **decision authority**, more impact on corporate goals, and more unique problems to solve compared to lower levels[cite: 192].
    
* **Flat Organizational Structure**:
    * [cite_start]An organizational structure with a **reduced number of management layers**[cite: 206].
* **Project Organizational Structures**:
    * [cite_start]Centered on major **products or services**[cite: 213].
* **Team Organizational Structures**:
    * [cite_start]Centered on **work teams or groups**[cite: 262].
* **Virtual Organizational Structure and Collaborative Work**:
    * [cite_start]Employs individuals, groups, or complete business units in **geographically dispersed areas** that can last for a few weeks or years, often requiring telecommunications or the Internet[cite: 287, 288].

### Globalization Eras
| Era | Dates | Characterized by |
| :--- | :--- | :--- |
| **Globalization 1.0** | Late 1400–1800 | [cite_start]Countries with the power to explore and influence the world[cite: 148, 149, 155]. |
| **Globalization 2.0** | 1800–2000 | [cite_start]Multinational corporations that have plants, warehouses, and offices around the world[cite: 150, 151, 156]. |
| **Globalization 3.0** | 2000–today | [cite_start]Individuals from around the world who can compete and influence other people, corporations, and countries by using the Internet and powerful technology tools[cite: 152, 153, 157]. |

### Global Challenges in IS
[cite_start]Managing IS globally presents challenges[cite: 119]:

* [cite_start]**Cultural challenges**: Countries have their own cultures and customs that affect global trade[cite: 120, 128].
* [cite_start]**Language challenges**: Language differences make it difficult to translate exact meanings[cite: 121, 129].
* [cite_start]**Time and distance challenges**: Long time differences and long distances make communication and product/equipment movement difficult[cite: 122, 130, 131, 132].
* [cite_start]**Infrastructure challenges**: High-quality electricity, water, telephone services, Internet connections, and skilled employees might be unavailable or expensive[cite: 123, 133, 134].
* [cite_start]**Currency challenges**: The fluctuating value of different currencies makes international trade complex[cite: 124, 135].
* [cite_start]**Product and service challenges**: Physical products are difficult to deliver globally, while electronic products (e-products) and e-services (e-services) can be delivered electronically (e.g., software, music)[cite: 125, 136, 137, 138].
* [cite_start]**Technology transfer issues**: Governments restrict military-related equipment sales; there are issues with the stealing of intellectual property, trade secrets, and counterfeiting[cite: 126, 139, 140].
* [cite_start]**State, regional, and national laws**: Each area has laws (e.g., trade secrets, data privacy) that must be obeyed, including **transborder data-flow laws**[cite: 127, 141, 142, 143, 144].
`
};