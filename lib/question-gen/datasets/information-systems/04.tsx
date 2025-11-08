// datasets/information-systems/lesson04.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const IsLesson04Dataset: Dataset = {
  id: "ict-is-04",
  category: "Information Systems",
  subcategory: "Enterprise Systems, TPS, ERP & CRM",
  description: "Operational and Enterprise Systems including Transaction Processing Systems, Enterprise Resource Planning, Supply Chain Management, and Customer Relationship Management.",
  content: `
[cite_start]Topic: Enterprise Information Systems, Transaction Processing Systems, ERP, and CRM [cite: 1, 2]

Objectives:
[cite_start]• Understand Enterprise Systems and their role in organizations [cite: 3]
[cite_start]• Learn about Transaction Processing Systems (TPS) and their objectives [cite: 4, 5, 6, 7, 8, 9]
[cite_start]• Understand batch processing vs. online transaction processing [cite: 10, 11, 12]
[cite_start]• Learn about the Transaction Processing Cycle [cite: 13, 14]
[cite_start]• Understand Enterprise Resource Planning (ERP) systems [cite: 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
[cite_start]• Learn about Production and Supply Chain Management [cite: 26, 27]
[cite_start]• Understand Customer Relationship Management (CRM) systems [cite: 28, 29]
[cite_start]• Identify key challenges in implementing enterprise systems [cite: 30, 31, 32, 33, 34, 35, 36]

---
## Enterprise Systems

### What is an Enterprise System?
[cite_start]• An Enterprise System is a system central to the organization that ensures information can be shared across all business functions and all levels of management to support the running and managing of a business [cite: 3].

### Types of Enterprise Systems
[cite_start]Enterprise systems include [cite: 3]:
* **Enterprise Resource Planning Systems (ERP)** that support supply-chain processes, such as:
  * Order Processing
  * Inventory Management
  * Purchasing
* **Customer Relationship Management (CRM)** systems which support sales, marketing, and customer service related processes

---
## Transaction Processing Systems (TPS)

### What is a Transaction Processing System?
[cite_start]• Transaction Processing Systems (TPS) capture and process the detailed data necessary to update records about the fundamental business operations of the organization [cite: 4].

### TPS Components

#### Business Operations
[cite_start]TPS handle business operations such as [cite: 4]:
* Order entry
* Inventory control
* Payroll
* Accounts payable & receivable

#### Inputs
[cite_start]• TPS inputs consist of basic business transactions such as Customer Orders, Purchase Orders, Receipts, Time Cards, Invoices, and Customer Payments [cite: 4].

#### Processing
[cite_start]• TPS processing includes Data Collection, Data Editing, Data Correction, Data Manipulation, Data Storage, and Document Production [cite: 4].

#### Output
[cite_start]• TPS outputs ensure that organization's records are updated to reflect the status of the operation at the time of the last processed transaction [cite: 4].

### TPS Processing Methods

#### Batch Processing System
[cite_start]• A batch processing system is a form of data processing where business transactions are accumulated over a period of time and prepared for processing as a single unit or batch [cite: 5].

#### Online Transaction Processing (OLTP)
[cite_start]• Online Transaction Processing (OLTP) is a form of data processing where each transaction is processed immediately, without the delay of accumulating transactions into a batch [cite: 6].
[cite_start]• In OLTP, a number of transactions occur concurrently [cite: 6].
[cite_start]• Examples include Online Banking and Online Shopping [cite: 6].

### Which Processing Method is Best?
[cite_start]• TPS applications do not always run using online processing [cite: 7].
[cite_start]• For many applications, batch processing is more appropriate and cost-effective [cite: 7].
[cite_start]• Payroll transactions and billing are typically done via batch processing [cite: 7].

### TPS Objectives
[cite_start]The key objectives of TPS include [cite: 8]:
* Capture, process, and update databases of business data required to support routine business activities
* Ensure that the data is processed accurately and completely
* Avoid processing fraudulent transactions
* Produce timely user responses and reports
* Reduce clerical and other labor requirements
* Help improve customer service
* Achieve competitive advantage

### TPS Types
[cite_start]Common types of TPS include [cite: 9]:
* **Order Processing Systems**
* **Accounting Systems**
* **Purchasing Systems**

### TPS for Competitive Advantage
[cite_start]TPS can be used to achieve competitive advantage [cite: 10].

---
## Transaction Processing Cycle

### What is the Transaction Processing Cycle?
[cite_start]• The Transaction Processing Cycle is the process of data collection, data editing, data correction, data manipulation, data storage, and document production [cite: 11].

### Stages of the Transaction Processing Cycle

[cite_start]The transaction processing cycle consists of six stages [cite: 11]:

| Stage | Description |
| :--- | :--- |
| **Data Collection** | [cite_start]Capturing and gathering all data necessary to complete the processing of transactions [cite: 11]. |
| **Data Editing** | [cite_start]Checking data for validity and completeness; for example, names must be alphabetic [cite: 11]. |
| **Data Correction** | [cite_start]Reentering data that was not typed or scanned properly [cite: 11]. |
| **Data Manipulation** | [cite_start]Performing calculations and other data transformations related to business transactions [cite: 11]. |
| **Data Storage** | [cite_start]Updating one or more databases with new transactions [cite: 11]. |
| **Document Production** | [cite_start]The process of generating output records and reports [cite: 11]. |

### Data Processing Cycle
[cite_start]The data processing cycle illustrates the flow of transaction processing [cite: 12].

---
## Control And Management Issues

[cite_start]Important control and management issues in TPS include [cite: 13]:

| Issue | Description |
| :--- | :--- |
| **Disaster recovery plan** | [cite_start]A formal plan describing the actions that must be taken to restore computer operations and services in the event of a disaster [cite: 13]. |
| **Transaction processing system audit** | [cite_start]A check of a firm's TPS systems to prevent accounting irregularities and/or loss of data privacy [cite: 13]. |

---
## Enterprise Resource Planning (ERP)

### What is Enterprise Resource Planning?
[cite_start]• Enterprise resource planning (ERP) is a platform companies use to manage and integrate the essential parts of their businesses [cite: 14].
[cite_start]• An ERP integrates business processes and the ERP database [cite: 14].

### Advantages of ERP Systems

[cite_start]ERP systems provide numerous advantages [cite: 15, 16, 17, 18, 19]:

| Advantage | Description |
| :--- | :--- |
| **Increased global competition** | [cite_start]Helps organizations compete in the global marketplace [cite: 15]. |
| **Improved access to data for operational decision making** | [cite_start]ERP systems operate via an integrated database, using one set of data to support all business functions. The systems can support decisions on optimal sourcing or cost accounting for the entire enterprise or business units from the start, rather than gathering data from multiple business functions and then trying to coordinate that information manually or reconciling data with another application. The result is an organization that looks seamless, not only to the outside world but also to the decision makers [cite: 16]. |
| **Elimination of inefficient or outdated systems infrastructure** | [cite_start]Adoption of an ERP system enables an organization to eliminate many separate systems and replace them with a single, integrated set of applications for the entire enterprise. In many cases, these systems are decades old, the original developers are long gone, and the systems are poorly documented. As a result, the systems are extremely difficult to fix when they break, and adapting them to meet new business needs takes too long. They become an anchor around the organization that keeps it from moving ahead and remaining competitive. An ERP system helps match the capabilities of an organization's information systems to its business needs even as these needs evolve [cite: 17]. |
| **Improvement of work processes, and technology standardization** | [cite_start]ERP vendors do considerable research to define the best business processes. They gather requirements of leading companies within the same industry and combine them with research findings from research institutions and consultants. The individual application modules included in the ERP system are then designed to support these best practices [cite: 18]. |
| **Upgrade of technology infrastructure** | [cite_start]When implementing an ERP system, an organization has an opportunity to upgrade the information technology (hardware, operating systems, databases, etc.) that it uses [cite: 19]. |

### Disadvantages of ERP Systems

[cite_start]ERP systems also have several disadvantages [cite: 20, 21, 22, 23, 24, 25]:

| Disadvantage | Description |
| :--- | :--- |
| **Expense and time in implementation** | [cite_start]Getting the full benefits of ERP takes time and money. Although ERP offers many strategic advantages by streamlining a company's TPSs, large firms typically need three to five years and spend tens of millions of dollars to implement a successful ERP system [cite: 21]. |
| **Difficulty implementing change** | [cite_start]In some cases, a company has to radically change how it operates to conform to the ERP's work processes—its best practices. These changes can be so drastic to long-time employees that they retire or quit rather than go through the change. This exodus can leave a firm short of experienced workers [cite: 22]. |
| **Difficulty integrating with other systems** | [cite_start]Most companies have other systems that must be integrated with the ERP system, such as financial analysis programs, e-commerce operations, and other applications. Many companies have experienced difficulties making these other systems operate with their ERP system. Other companies need additional software to create these links [cite: 23]. |
| **Risks in using one vendor** | [cite_start]The high cost to switch to another vendor's ERP system makes it extremely unlikely that a firm will do so. After a company has adopted an ERP system, the vendor has less incentive to listen and respond to customer concerns. The high cost to switch also increases risk—in the event the ERP vendor allows its product to become outdated or goes out of business. Selecting an ERP system involves not only choosing the best software product but also the right long-term business partner [cite: 24]. |
| **Risk of implementation failure** | [cite_start]Implementing an ERP system for a large organization is extremely challenging and requires tremendous amounts of resources, the best IS and business people, and plenty of management support. Unfortunately, large ERP installations occasionally fail, and problems with an ERP implementation can require expensive solutions [cite: 25]. |

---
## Production and Supply Chain Management

### ERP and Production Planning
[cite_start]• ERP systems follow a systematic process for developing a production plan that draws on the information available in the ERP system database [cite: 26].

### The Process of Production & Supply Chain Management

[cite_start]The production and supply chain management process consists of seven steps [cite: 27]:

| Step | Description |
| :--- | :--- |
| **1. Sales forecasting** | [cite_start]Develop an estimate of future customer demand [cite: 27]. |
| **2. Sales and operations plan (S&OP)** | [cite_start]Takes demand and current inventory levels into considerations and determines the specific product items that need to be produced and when to meet the forecast future demand [cite: 27]. |
| **3. Demand management** | [cite_start]Refines the production plan by determining the amount of weekly or daily production needed to meet the demand for individual products [cite: 27]. |
| **4. Detailed scheduling** | [cite_start]Uses the production plan defined by the demand management process to develop a detailed production schedule specifying production scheduling details, such as which item to produce first and when production should be switched from one item to another [cite: 27]. |
| **5. Materials requirement planning** | [cite_start]Determines the amount and timing for placing raw material orders with suppliers [cite: 27]. |
| **6. Purchasing** | [cite_start]Uses the information from materials requirement planning to place purchase orders for raw materials and transmit them to qualified suppliers [cite: 27]. |
| **7. Production** | [cite_start]Uses the detailed schedule to plan the details of running and staffing the production operation [cite: 27]. |

---
## Customer Relationship Management (CRM)

### What is Customer Relationship Management?
[cite_start]• A Customer Relationship Management (CRM) system is a system that helps a company manage all aspects of customer encounters, including marketing and advertising, sales, customer service after the sale, and programs to retain loyal customers [cite: 28].
[cite_start]• The goal of CRM is to understand and anticipate the needs of current and potential customers to increase customer retention and loyalty while optimizing the way that products and services are sold [cite: 28].

### The Key Features of a CRM System

[cite_start]A CRM system includes five key features [cite: 29]:

| Feature | Description |
| :--- | :--- |
| **Contact management** | [cite_start]The ability to track data on individual customers and sales leads and access that data from any part of the organization [cite: 29]. |
| **Sales management** | [cite_start]The ability to organize data about customers and sales leads and then to prioritize the potential sales opportunities and identify appropriate next steps [cite: 29]. |
| **Customer support** | [cite_start]The ability to support customer service reps so that they can quickly, thoroughly, and appropriately address customer requests and resolve customers' issues while at the same time collecting and storing data about those interactions [cite: 29]. |
| **Marketing automation** | [cite_start]The ability to capture and analyze all customer interactions, generate appropriate responses, and gather data to create and build effective and efficient marketing campaigns [cite: 29]. |
| **Analysis** | [cite_start]The ability to analyze customer data to identify ways to increase revenue and decrease costs, identify the source of the firm's "best customers," and determine how to retain them and find even more of them [cite: 29]. |

---
## Key Challenges of Implementing Enterprise Systems

[cite_start]Key challenges in implementing enterprise systems include [cite: 30]:
* Finding the right system that suits your organization
* Resistance to change
* Commitment from managers
* System training
* Expectation management
* Inadequate testing

### 1. Finding the Right System
[cite_start]• Before you even contact any providers, do an honest appraisal of your business needs and challenges. Ask providers to respond on how they can meet your needs. It's important that they have experience within your industry, and that you can be as honest as possible about any future changes in direction that might alter your requirements [cite: 31].

### 2. Resistance to Change
[cite_start]• Those who hold influence within the current infrastructure may fear losing their power, and long-serving staff may worry that they have trouble adapting to a new system. If change is not communicated effectively in an organization, or previous implementations have failed, there will be a general distrust of anything new [cite: 32].
[cite_start]• The answer to this common issue is consultation. Communicating to all staff members during the process for your ERP project, they may even have valuable input [cite: 32].

### 3. Commitment from Managers
[cite_start]• Top-level support for your ERP project is required, but don't forget about junior and middle managers. In larger organizations where staff don't have regular access to senior figures, their immediate line manager and colleagues are often instrumental in forming their opinions on whether something is or isn't a good thing. If managers at all levels are enthused about your plans, it will help in convincing others to follow [cite: 33].

### 4. System Training
[cite_start]• Ensure that your project management team builds in time for training in groups before the launch date. Allowing staff members to ask questions during and making it interactive, can help create reassurance that every member of staff, regardless of seniority, are going on the same journey [cite: 34].

### 5. Expectation Management
[cite_start]• Staff will wrongly assume that the new system can solve every problem the organization has. ERP projects are often done in stages - always be upfront about what each phase entails, how long it will take and if need be and what is outside the project scope [cite: 35].

### 6. Inadequate Testing
[cite_start]• It's possible to get the business requirements and expectations spot on, but lack of testing often leads to a downfall. Let teams test the functionality they will be using daily, and let them feedback, it will help reduce the amount of resistance and assist them in adjusting to the change [cite: 36].
[cite_start]• Adjust the process if it is not suitable, do not make changes to imitate the old processes, but consider how processes can be improved using your new system [cite: 36].

---
## Recommended Resources
[cite_start]Recommended books for further study [cite: 37]:
* "Principles of Information Systems" by Ralph Stair, George Reynolds (Publisher: Course Technology, Cengage Learning 2010, ISBN: 0324665288)
* "M: Information Systems, 4th edition" by Paige Batlzan (Publisher: McGraw-Hill Higher Education 2017, ISBN: 9781259814297)
`
};