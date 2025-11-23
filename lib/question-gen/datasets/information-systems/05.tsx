// datasets/information-systems/lesson05.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const IsLesson05Dataset: Dataset = {
  id: "ict-is-05",
  topicCount: 8,
  category: "Information Systems",
  subcategory: "MIS, DSS, ESS, KMS & Artificial Intelligence",
  description: "Management Information Systems, Decision Support Systems, Executive Support Systems, Knowledge Management Systems, Expert Systems and Artificial Intelligence concepts.",
  topics: [
    "Management Information Systems (MIS)",
    "Decision Making And Problem Solving",
    "Decision Support Systems (DSS)",
    "Executive Support Systems (ESS)",
    "Knowledge Management Systems (KMS)",
    "Artificial Intelligence (AI)",
    "Expert Systems",
    "Positive & Negative Impacts",
  ],
  content: `
<TOPIC_START index="0" title="Management Information Systems (MIS)">
1.0 Management Information Systems (MIS)

1.1 What is a Management Information System?
• A **Management Information System (MIS)** is an integrated collection of people, procedures, databases, and devices that provides managers and decision makers with information to help **achieve organizational goals**.
• MISs can give **competitive advantage** by providing the right information to the right people in the right format and at the right time.

1.2 MIS Inputs & Outputs

1.2.1 Inputs
MIS receives inputs from two main sources:

| Input Source | Description |
| :--- | :--- |
| **Internal** | Supply chain information, TPS and ERP systems and related databases. |
| **External** | Customers, suppliers, competitors, and stakeholders, whose data is not already captured by the TPS, as well as other sources, such as the Internet. |

1.2.2 Outputs
• MIS produces a collection of **reports** as outputs.

1.3 MIS Functions
Key functions of MIS include:

| Function | Description |
| :--- | :--- |
| **Improve Decision making** | Provide reports with fixed and standard formats. Produce hard-copy and soft-copy reports. Allow users to develop their own custom reports. |
| **Use internal data** | Use internal data stored in the computer system. |
| **Provide connectivity** | MIS provides managers with better connectivity with the rest of the organization. |
| **Improve efficiency** | MIS helps managers to conduct their tasks with greater ease and with better efficiency. This reflects in better productivity for the company. |

1.4 MIS Types
Common types of MIS include:
* **Financial MIS**
* **Manufacturing MIS**
* **Marketing MIS**
* **Human Resource MIS (HRMIS)**
* **Other MIS**:
  * Accounting
  * GIS (Geographic Information Systems)
<TOPIC_END>

<TOPIC_START index="1" title="Decision Making And Problem Solving">
2.0 Decision Making And Problem Solving

2.1 Decision Making as a Component of Problem Solving
Decision making is a key component of problem solving.

2.2 The Stages of Decision Making and Problem Solving 
The decision making and problem-solving process consists of five stages:

| Stage | Description |
| :--- | :--- |
| **Intelligence Stage** | The first stage of decision making, in which potential problems or opportunities are identified and defined. |
| **Design Stage** | The second stage of decision making, in which alternative solutions to the problem are developed. |
| **Choice Stage** | The third stage of decision making, which requires selecting a course of action. |
| **Implementation Stage** | A stage of problem solving in which a solution is put into effect. |
| **Monitoring Stage** | The final stage of the problem solving process, in which decision makers evaluate the implementation. |

• **Problem Solving** is a process that goes beyond decision making to include the implementation stage.

2.3 Types of Decisions

2.3.1 Programmed Decisions
• A **programmed decision** is a decision made using a **rule, procedure, or quantitative method**.
• Example: Ordering more products when inventory levels drop to specified levels.

2.3.2 Non-programmed Decisions
• A **non-programmed decision** is a decision that deals with **unusual or exceptional situations**.
• Example: When there is an economic crisis.
<TOPIC_END>

<TOPIC_START index="2" title="Decision Support Systems (DSS)">
3.0 Decision Support Systems (DSS)

3.1 What is a Decision Support System?
• A **Decision Support System (DSS)** is a computerized program used to support determinations, judgments, and courses of action in an organization or a business.

3.2 Characteristics of a Decision Support System
Key characteristics of DSS include:
* Provide rapid access to information
* Handle large amounts of data from different sources
* Provide report and presentation flexibility
* Offer both textual and graphical orientation
* Perform complex, sophisticated analysis and comparisons using advanced software packages

3.3 Components of a Decision Support System 
A DSS consists of three main components:

| Component | Description |
| :--- | :--- |
| **The Database** | Stores the data used by the DSS. |
| **Dialogue Manager** | A user interface (UI) that allows decision makers to easily access and manipulate the DSS and to use common business terms and phrases. |
| **Model Base** | Part of a DSS that provides decision makers access to a variety of models and assists them in decision making. |

Examples of models include Financial (Spreadsheet), Statistical (SPSS), Graphical (PowerPoint), and Project Management (MS Project).

3.4 A Comparison of DSS and MIS
DSS and MIS differ in their focus and capabilities.
<TOPIC_END>

<TOPIC_START index="3" title="Executive Support Systems (ESS)">
4.0 Executive Support Systems (ESS)

4.1 What is an Executive Support System?
• An **Executive Support System (ESS)** is a specialized DSS that includes all hardware, software, data, procedures, and people used to assist **senior-level executives** within the organization.

4.2 The Characteristics of an ESS
Executive Support Systems have the following characteristics:
* Are tailored to individual executives
* Are easy to use
* Support the need for external data
* Can help with situations that have a high degree of uncertainty
* Have a future orientation
* Are linked with value-added business processes

4.3 Capabilities of Executive Support Systems

ESS provide several key capabilities:

| Capability | Description |
| :--- | :--- |
| **Support for Defining an Overall Vision** | Helps executives define the organization's vision. |
| **Support for Strategic Planning** | Strategic Planning involves determining long-term objectives by analyzing the strengths and weaknesses of the organization, predicting future trends, and projecting the development of new product lines. |
| **Support for Strategic Organizing and Staffing** | Assists in organizing resources and staffing decisions. |
| **Support for Strategic Control** | Helps maintain strategic control over operations. |
| **Support for Crisis Management** | Assists executives in managing crises. |
<TOPIC_END>

<TOPIC_START index="4" title="Knowledge Management Systems (KMS)">
5.0 Knowledge Management Systems (KMS)

5.1 What is a Knowledge Management System?
• A **Knowledge Management System (KMS)** is an organized collection of people, procedures, software, databases, and devices used to **create, store, share, and use the organization's knowledge and experience**.

5.2 Types of Knowledge in KMS

KMS can involve different types of knowledge:

| Knowledge Type | Description | Example |
| :--- | :--- | :--- |
| **Explicit knowledge** | Can be measured and documented in reports, papers, and rules. | Training materials. |
| **Tacit knowledge** | Hard to measure and document and typically is not objective or formalized. | Leadership Skills. |

5.3 Personnel Involved in a KMS

The personnel involved in a KMS include:

| Role | Description |
| :--- | :--- |
| **Data workers** | Secretaries, administrative assistants, bookkeepers, and similar data-entry personnel. |
| **Knowledge workers** | People who create, use, and disseminate knowledge. They are usually professionals in science, engineering, or business, and work in offices and belong to professional organizations. Other examples include writers, researchers, educators, and corporate designers. |
<TOPIC_END>

<TOPIC_START index="5" title="Artificial Intelligence (AI)">
6.0 Artificial Intelligence (AI)

6.1 What is Artificial Intelligence?
• **Artificial Intelligence (AI)** is the ability of computers to **mimic or duplicate the functions of the human brain**.
<TOPIC_END>

<TOPIC_START index="6" title="Expert Systems">
7.0 Expert Systems

7.1 What is an Expert System?
• An **expert system** consists of hardware and software that stores knowledge and makes inferences, similar to those of a **human expert**.

7.2 When to Use Expert Systems

Sophisticated expert systems can be difficult, expensive, and time consuming to develop.

Expert systems are appropriate when you need to:
* Capture and preserve irreplaceable human expertise
* Solve a problem that is not easily solved using traditional programming techniques
* Develop a system more consistent than human experts
* Provide expertise needed at a number of locations at the same time or in a hostile environment that is dangerous to human health
* Provide expertise that is expensive or rare
* Develop a solution faster than human experts can

7.3 Components of Expert Systems 
An expert system consists of four main components:

| Component | Description |
| :--- | :--- |
| **Knowledge base** | Stores all relevant information, data, rules, cases, and relationships used by the expert system. |
| **Inference engine** | Seeks information and relationships from the knowledge base and provides answers, predictions, and suggestions similar to the way a human expert would. |
| **Explanation facility** | Allows a user or decision maker to understand how the expert system arrived at certain conclusions or results. |
| **Knowledge acquisition facility** | Provides convenient and efficient means of capturing and storing all the components of the knowledge base. |

7.4 Applications of Expert Systems and AI

Expert systems and AI are applied in various domains:
* Credit granting and loan analysis
* Tracking terrorists attacks
* Hospitals and medical facilities
* Employee performance evaluation
* Repair and maintenance
* Marketing
<TOPIC_END>

<TOPIC_START index="7" title="Positive & Negative Impacts">
8.0 Positive & Negative Impacts

Information systems have both positive and negative impacts on organizations and society.
<TOPIC_END>
`
};