// datasets/information-systems/lesson04.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const IsLesson04Dataset: Dataset = {
  id: "ict-is-04",
  topicCount: 8,
  category: "Information Systems",
  subcategory: "Enterprise Systems, TPS, ERP & CRM",
  description: "Operational and Enterprise Systems including Transaction Processing Systems, Enterprise Resource Planning, Supply Chain Management, and Customer Relationship Management.",
  topics: [
    "Enterprise Systems",
    "Transaction Processing Systems (TPS)",
    "Transaction Processing Cycle",
    "Control And Management Issues",
    "Enterprise Resource Planning (ERP)",
    "Production and Supply Chain Management",
    "Customer Relationship Management (CRM)",
    "Key Challenges of Implementing Enterprise Systems",
  ],
  content: `
<TOPIC_START index="0" title="Enterprise Systems">
1.0 Enterprise Systems

1.1 What is an Enterprise System?
• An **Enterprise System** is a system central to the organization that ensures information can be **shared across all business functions** and all levels of management to support the running and managing of a business.

1.2 Types of Enterprise Systems Enterprise systems include:
* **Enterprise Resource Planning Systems (ERP)** that support supply-chain processes, such as:
  * Order Processing
  * Inventory Management
  * Purchasing
* **Customer Relationship Management (CRM)** systems which support sales, marketing, and customer service related processes
<TOPIC_END>

<TOPIC_START index="1" title="Transaction Processing Systems (TPS)">
2.0 Transaction Processing Systems (TPS)

2.1 What is a Transaction Processing System?
• **Transaction Processing Systems (TPS)** capture and process the detailed data necessary to update records about the **fundamental business operations** of the organization.

2.2 TPS Components

2.2.1 Business Operations
TPS handle business operations such as:
* Order entry
* Inventory control
* Payroll
* Accounts payable & receivable

2.2.2 Inputs
• TPS inputs consist of basic business transactions such as Customer Orders, Purchase Orders, Receipts, Time Cards, Invoices, and Customer Payments.

2.2.3 Processing
• TPS processing includes Data Collection, Data Editing, Data Correction, Data Manipulation, Data Storage, and Document Production.

2.2.4 Output
• TPS outputs ensure that organization's records are updated to reflect the status of the operation at the time of the last processed transaction.

2.3 TPS Processing Methods

2.3.1 Batch Processing System
• A **batch processing system** is a form of data processing where business transactions are **accumulated over a period of time** and prepared for processing as a single unit or batch.

2.3.2 Online Transaction Processing (OLTP)
• **Online Transaction Processing (OLTP)** is a form of data processing where each transaction is processed **immediately**, without the delay of accumulating transactions into a batch.
• In OLTP, a number of transactions occur concurrently.
• Examples include Online Banking and Online Shopping.

2.4 Which Processing Method is Best?
• TPS applications do not always run using online processing.
• For many applications, batch processing is more appropriate and cost-effective.
• Payroll transactions and billing are typically done via batch processing.

2.5 TPS Objectives
The key objectives of TPS include:
* Capture, process, and update databases of business data required to support routine business activities
* Ensure that the data is processed accurately and completely
* Avoid processing fraudulent transactions
* Produce timely user responses and reports
* Reduce clerical and other labor requirements
* Help improve customer service
* Achieve competitive advantage

2.6 TPS Types
Common types of TPS include:
* **Order Processing Systems**
* **Accounting Systems**
* **Purchasing Systems**

2.7 TPS for Competitive Advantage
TPS can be used to achieve competitive advantage.
<TOPIC_END>

<TOPIC_START index="2" title="Transaction Processing Cycle">
3.0 Transaction Processing Cycle

3.1 What is the Transaction Processing Cycle?
• The **Transaction Processing Cycle** is the process of data collection, data editing, data correction, data manipulation, data storage, and document production.

3.2 Stages of the Transaction Processing Cycle 
The transaction processing cycle consists of six stages:

| Stage | Description |
| :--- | :--- |
| **Data Collection** | Capturing and gathering all data necessary to complete the processing of transactions. |
| **Data Editing** | Checking data for validity and completeness; for example, names must be alphabetic. |
| **Data Correction** | Reentering data that was not typed or scanned properly. |
| **Data Manipulation** | Performing calculations and other data transformations related to business transactions. |
| **Data Storage** | Updating one or more databases with new transactions. |
| **Document Production** | The process of generating output records and reports. |

3.3 Data Processing Cycle
The data processing cycle illustrates the flow of transaction processing.
<TOPIC_END>

<TOPIC_START index="3" title="Control And Management Issues">
4.0 Control And Management Issues

Important control and management issues in TPS include:

| Issue | Description |
| :--- | :--- |
| **Disaster recovery plan** | A formal plan describing the actions that must be taken to restore computer operations and services in the event of a disaster. |
| **Transaction processing system audit** | A check of a firm's TPS systems to prevent accounting irregularities and/or loss of data privacy. |
<TOPIC_END>

<TOPIC_START index="4" title="Enterprise Resource Planning (ERP)">
5.0 Enterprise Resource Planning (ERP)

5.1 What is Enterprise Resource Planning?
• **Enterprise resource planning (ERP)** is a platform companies use to **manage and integrate the essential parts of their businesses**.
• An ERP integrates **business processes** and the **ERP database**.

5.2 Advantages of ERP Systems

ERP systems provide numerous advantages:

| Advantage | Description |
| :--- | :--- |
| **Increased global competition** | Helps organizations compete in the global marketplace. |
| **Improved access to data for operational decision making** | ERP systems operate via an integrated database, using one set of data to support all business functions. The systems can support decisions on optimal sourcing or cost accounting for the entire enterprise or business units from the start, rather than gathering data from multiple business functions and then trying to coordinate that information manually or reconciling data with another application. The result is an organization that looks seamless, not only to the outside world but also to the decision makers. |
| **Elimination of inefficient or outdated systems infrastructure** | Adoption of an ERP system enables an organization to eliminate many separate systems and replace them with a single, integrated set of applications for the entire enterprise. In many cases, these systems are decades old, the original developers are long gone, and the systems are poorly documented. As a result, the systems are extremely difficult to fix when they break, and adapting them to meet new business needs takes too long. They become an anchor around the organization that keeps it from moving ahead and remaining competitive. An ERP system helps match the capabilities of an organization's information systems to its business needs even as these needs evolve. |
| **Improvement of work processes, and technology standardization** | ERP vendors do considerable research to define the best business processes. They gather requirements of leading companies within the same industry and combine them with research findings from research institutions and consultants. The individual application modules included in the ERP system are then designed to support these best practices. |
| **Upgrade of technology infrastructure** | When implementing an ERP system, an organization has an opportunity to upgrade the information technology (hardware, operating systems, databases, etc.) that it uses. |

5.3 Disadvantages of ERP Systems [Image illustrating the complexity and expense of ERP implementation]

ERP systems also have several disadvantages:

| Disadvantage | Description |
| :--- | :--- |
| **Expense and time in implementation** | Getting the full benefits of ERP takes time and money. Although ERP offers many strategic advantages by streamlining a company's TPSs, large firms typically need three to five years and spend tens of millions of dollars to implement a successful ERP system. |
| **Difficulty implementing change** | In some cases, a company has to radically change how it operates to conform to the ERP's work processes—its best practices. These changes can be so drastic to long-time employees that they retire or quit rather than go through the change. This exodus can leave a firm short of experienced workers. |
| **Difficulty integrating with other systems** | Most companies have other systems that must be integrated with the ERP system, such as financial analysis programs, e-commerce operations, and other applications. Many companies have experienced difficulties making these other systems operate with their ERP system. Other companies need additional software to create these links. |
| **Risks in using one vendor** | The high cost to switch to another vendor's ERP system makes it extremely unlikely that a firm will do so. After a company has adopted an ERP system, the vendor has less incentive to listen and respond to customer concerns. The high cost to switch also increases risk—in the event the ERP vendor allows its product to become outdated or goes out of business. Selecting an ERP system involves not only choosing the best software product but also the right long-term business partner. |
| **Risk of implementation failure** | Implementing an ERP system for a large organization is extremely challenging and requires tremendous amounts of resources, the best IS and business people, and plenty of management support. Unfortunately, large ERP installations occasionally fail, and problems with an ERP implementation can require expensive solutions. |
<TOPIC_END>

<TOPIC_START index="5" title="Production and Supply Chain Management">
6.0 Production and Supply Chain Management

6.1 ERP and Production Planning
• ERP systems follow a systematic process for developing a production plan that draws on the information available in the ERP system database.

6.2 The Process of Production & Supply Chain Management [Image illustrating the Production and Supply Chain Management process from sales forecasting to production]

The production and supply chain management process consists of seven steps:

| Step | Description |
| :--- | :--- |
| **1. Sales forecasting** | Develop an estimate of future customer demand. |
| **2. Sales and operations plan (S&OP)** | Takes demand and current inventory levels into considerations and determines the specific product items that need to be produced and when to meet the forecast future demand. |
| **3. Demand management** | Refines the production plan by determining the amount of weekly or daily production needed to meet the demand for individual products. |
| **4. Detailed scheduling** | Uses the production plan defined by the demand management process to develop a detailed production schedule specifying production scheduling details, such as which item to produce first and when production should be switched from one item to another. |
| **5. Materials requirement planning** | Determines the amount and timing for placing raw material orders with suppliers. |
| **6. Purchasing** | Uses the information from materials requirement planning to place purchase orders for raw materials and transmit them to qualified suppliers. |
| **7. Production** | Uses the detailed schedule to plan the details of running and staffing the production operation. |
<TOPIC_END>

<TOPIC_START index="6" title="Customer Relationship Management (CRM)">
7.0 Customer Relationship Management (CRM)

7.1 What is Customer Relationship Management?
• A **Customer Relationship Management (CRM) system** is a system that helps a company **manage all aspects of customer encounters**, including marketing and advertising, sales, customer service after the sale, and programs to retain loyal customers.
• The goal of CRM is to **understand and anticipate the needs** of current and potential customers to increase customer retention and loyalty while optimizing the way that products and services are sold.

7.2 The Key Features of a CRM System

A CRM system includes five key features:

| Feature | Description |
| :--- | :--- |
| **Contact management** | The ability to track data on individual customers and sales leads and access that data from any part of the organization. |
| **Sales management** | The ability to organize data about customers and sales leads and then to prioritize the potential sales opportunities and identify appropriate next steps. |
| **Customer support** | The ability to support customer service reps so that they can quickly, thoroughly, and appropriately address customer requests and resolve customers' issues while at the same time collecting and storing data about those interactions. |
| **Marketing automation** | The ability to capture and analyze all customer interactions, generate appropriate responses, and gather data to create and build effective and efficient marketing campaigns. |
| **Analysis** | The ability to analyze customer data to identify ways to increase revenue and decrease costs, identify the source of the firm's "best customers," and determine how to retain them and find even more of them. |
<TOPIC_END>

<TOPIC_START index="7" title="Key Challenges of Implementing Enterprise Systems">
8.0 Key Challenges of Implementing Enterprise Systems

Key challenges in implementing enterprise systems include:
* Finding the right system that suits your organization
* Resistance to change
* Commitment from managers
* System training
* Expectation management
* Inadequate testing

8.1 Finding the Right System
• Before you even contact any providers, do an honest appraisal of your business needs and challenges. Ask providers to respond on how they can meet your needs. It's important that they have experience within your industry, and that you can be as honest as possible about any future changes in direction that might alter your requirements.

8.2 Resistance to Change
• Those who hold influence within the current infrastructure may fear losing their power, and long-serving staff may worry that they have trouble adapting to a new system. If change is not communicated effectively in an organization, or previous implementations have failed, there will be a general distrust of anything new.
• The answer to this common issue is consultation. Communicating to all staff members during the process for your ERP project, they may even have valuable input.

8.3 Commitment from Managers
• Top-level support for your ERP project is required, but don't forget about junior and middle managers. In larger organizations where staff don't have regular access to senior figures, their immediate line manager and colleagues are often instrumental in forming their opinions on whether something is or isn't a good thing. If managers at all levels are enthused about your plans, it will help in convincing others to follow.

8.4 System Training
• Ensure that your project management team builds in time for training in groups before the launch date. Allowing staff members to ask questions during and making it interactive, can help create reassurance that every member of staff, regardless of seniority, are going on the same journey.

8.5 Expectation Management
• Staff will wrongly assume that the new system can solve every problem the organization has. ERP projects are often done in stages - always be upfront about what each phase entails, how long it will take and if need be and what is outside the project scope.

8.6 Inadequate Testing
• It's possible to get the business requirements and expectations spot on, but lack of testing often leads to a downfall. Let teams test the functionality they will be using daily, and let them feedback, it will help reduce the amount of resistance and assist them in adjusting to the change.
• Adjust the process if it is not suitable, do not make changes to imitate the old processes, but consider how processes can be improved using your new system.
<TOPIC_END>
`
};