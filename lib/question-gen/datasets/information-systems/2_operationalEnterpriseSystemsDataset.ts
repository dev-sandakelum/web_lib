// datasets/information-systems/operational-enterprise-systems.ts

import { Dataset } from "@/lib/question-gen/types/dataset";

export const operationalEnterpriseSystemsDataset: Dataset = {
  id: "ict-operational-enterprise-systems",
  category: "Information Systems",
  subcategory: "Operational & Enterprise Systems and Processes",
  description: "Detailed overview of Transaction Processing Systems (TPS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM).",
  content: `
Topic: Operational and Enterprise Systems and Processes

Objectives:
• Understand Enterprise Information Systems and Operational Planning and Control Systems
• Explain the components and cycle of Transaction Processing Systems (TPS)
• Differentiate between Batch and Online Transaction Processing (OLTP)
• Analyze the advantages and disadvantages of Enterprise Resource Planning (ERP) Systems
• Describe the process of Production and Supply Chain Management within ERP
• Detail the key features and goals of Customer Relationship Management (CRM)

Architecture & Organization:
// Not applicable for this topic; substituting with core system definitions.

Enterprise System:
• A system central to the organization that ensures information can be shared across all business functions and all levels of management to support the running and managing of a business.

---
## Transaction Processing Systems (TPS)

Definition:
• Systems that capture and process the **detailed data** necessary to update records about the **fundamental business operations** of the organization.

Business Operations Supported:
• Order entry
• Inventory control
• Payroll
• Accounts payable & receivable

Inputs:
• Basic business transactions like Customer Orders, Purchase Orders, Receipts, Time Cards, Invoices, and Customer Payments.

Outputs:
• The organization's records are updated to reflect the status of the operation at the time of the last processed transaction.

Objectives:
• Capture, process, and update databases of business data for routine activities.
• Ensure data is processed **accurately and completely**.
• Avoid processing fraudulent transactions.
• Produce timely user responses and reports.
• Reduce clerical and other labor requirements.
• Help improve customer service.
• Achieve competitive advantage.

Types of TPS:
• Order Processing Systems
• Accounting Systems
• Purchasing Systems

### Processing Methods

Batch Processing System:
• Business transactions are **accumulated over a period of time** and prepared for processing as a **single unit or batch**.
• More appropriate and cost-effective for applications like payroll and billing.

Online Transaction Processing (OLTP):
• Each transaction is **processed immediately** without the delay of accumulating transactions into a batch.
• Multiple transactions occur concurrently (e.g., Online Banking, Online Shopping).

### Transaction Processing Cycle

The cycle includes:
1. Data Collection: Capturing all data necessary to complete the processing of transactions.
2. Data Editing: Checking data for validity and completeness (e.g., names must be alphabetic).
3. Data Correction: Reentering data that was not typed or scanned properly.
4. Data Manipulation: Performing calculations and other data transformations.
5. Data Storage: Updating one or more databases with new transactions.
6. Document Production: Generating output records and reports.

---
## Enterprise Resource Planning (ERP) Systems

Definition and Purpose:
• A platform companies use to **manage and integrate the essential parts of their businesses**.
• An ERP integrates business processes and the ERP database.
• Supports supply-chain processes (Order Processing, Inventory Management, Purchasing) and Customer Relationship Management (sales, marketing, customer service).

Advantages of ERP:
• Increased global competition.
• **Improved access to data for operational decision making** via an integrated database.
• **Elimination of inefficient or outdated systems infrastructure** (replacing multiple separate systems with one integrated set).
• **Improvement of work processes** and technology standardization (designed to support "best practices").
• Upgrade of technology infrastructure (hardware, OS, databases, etc.).

Disadvantages of ERP:
• **Expense and time in implementation** (can take 3-5 years and tens of millions of dollars for large firms).
• **Difficulty implementing change** (radically changing operations to conform to ERP's processes, leading to staff exodus).
• Difficulty integrating with other systems (financial analysis, e-commerce, needing additional software).
• **Risks in using one vendor** (high cost to switch, reduced vendor incentive, risk if vendor becomes outdated or fails).
• **Risk of implementation failure** (extremely challenging, requiring vast resources and management support).

### Production and Supply Chain Management Process in ERP

1. Sales forecasting: Develop an estimate of future customer demand.
2. Sales and operations plan (S&OP): Determine specific products and timing needed to meet the forecast.
3. Demand management: Refine the plan to determine weekly or daily production amounts.
4. Detailed scheduling: Develop a detailed production schedule (e.g., which item to produce first).
5. Materials requirement planning: Determine the amount and timing for placing raw material orders.
6. Purchasing: Use MRP info to place and transmit purchase orders to suppliers.
7. Production: Use the detailed schedule to plan running and staffing the operation.

---
## Customer Relationship Management (CRM)

Definition and Goal:
• A system that helps a company **manage all aspects of customer encounters**, including marketing, sales, customer service, and retention programs.
• The goal is to **understand and anticipate customer needs** to increase customer retention and loyalty while optimizing sales.

Key Features:
• **Contact management**: Track data on individual customers and sales leads, accessible across the organization.
• **Sales management**: Organize data, prioritize potential sales opportunities, and identify next steps.
• **Customer support**: Support reps to quickly and appropriately address requests, while collecting and storing interaction data.
• **Marketing automation**: Capture and analyze customer interactions, generate responses, and gather data for effective marketing campaigns.
• **Analysis**: Analyze customer data to increase revenue, decrease costs, identify "best customers," and determine how to retain them.

---
## Key Challenges of Implementing Enterprise Systems

Challenges:
• **Finding the right system** that suits your organization (requires honest appraisal of business needs and industry experience from providers).
• **Resistance to change** (fear of losing power, distrust of new systems; consult and communicate effectively).
• **Commitment from managers** (support needed from top-level down to junior/middle managers to influence staff opinion).
• **System training** (must be interactive and allow time for questions before launch).
• **Expectation management** (staff may wrongly assume the system solves every problem; be upfront about project phases and scope).
• **Inadequate testing** (lack of testing leads to downfall; let teams test daily functionality and adjust processes for improvement).
`
};