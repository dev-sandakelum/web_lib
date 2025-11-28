
export type ContentItem = {
  type: 'qa' | 'text' | 'list' | 'subsection' | 'highlight';
  question?: string;
  answer?: string;
  title?: string;
  content?: string | string[];
  items?: ContentItem[];
  color?: "blue" | "green" | "yellow" | "purple" | "red";
};

export type Section = {
  id: string;
  title: string;
  content: {
    title?: string;
    items: ContentItem[];
  }[];
};

export const notesData: Section[] = [
  {
    id: "intro",
    title: "Introduction",
    content: [
      {
        title: "Data, Information, Knowledge & Process",
        items: [
          {
            type: 'qa',
            question: "What is Data?",
            answer: "Data is raw facts or figures without any meaning. It is the basic input for processing."
          },
          {
            type: 'qa',
            question: "What is Information?",
            answer: "Information is processed and organized data that has meaning and can be used for decision-making."
          },
          {
            type: 'qa',
            question: "What is Knowledge?",
            answer: "Knowledge is understanding and awareness gained from information. It helps in making decisions and solving problems."
          },
          {
            type: 'qa',
            question: "What is a Process?",
            answer: "A process is a set of logically related tasks performed to achieve a specific outcome or goal."
          }
        ]
      },
      {
        title: "Transforming Data into Information",
        items: [
          {
            type: 'qa',
            question: "How is data transformed into information?",
            answer: "Data is collected, processed, organized, and structured to add meaning. This transformation gives it value, turning raw facts into information useful for decision-making."
          }
        ]
      },
      {
        title: "Characteristics of Valuable Information",
        items: [
          {
            type: 'qa',
            question: "What are the characteristics of valuable information?",
            answer: "Valuable information must be accurate, timely, relevant, complete, and understandable to support proper decision-making."
          }
        ]
      },
      {
        title: "What is a System?",
        items: [
          {
            type: 'qa',
            question: "Define a System.",
            answer: "A system is a set of interrelated components working together to achieve a specific goal or objective."
          }
        ]
      },
      {
        title: "Components of a System",
        items: [
          {
            type: 'qa',
            question: "What are the components of a system?",
            answer: "The main components of a system are: Input (collecting data), Processing (converting data to information), Output (producing results), and Feedback (optional adjustments to improve processes)."
          }
        ]
      },
      {
        title: "System Categories",
        items: [
          {
            type: 'subsection',
            title: "Open System",
            content: "An open system exchanges matter, energy, or information with its environment and adapts to external changes. Example: Human body.",
            question: "What is an Open System?"
          },
          {
            type: 'subsection',
            title: "Closed System",
            content: "A closed system is isolated from its environment and does not exchange matter or energy. Example: Earth.",
            question: "What is a Closed System?"
          }
        ]
      },
      {
        title: "What is an Information System?",
        items: [
          {
            type: 'qa',
            question: "Define Information System.",
            answer: "An Information System is a system that collects, stores, processes, and distributes data and information, providing feedback to meet an objective."
          }
        ]
      },
      {
        title: "Input, Processing, Output, Feedback",
        items: [
          { type: 'qa', question: "What is Input?", answer: "Input is the activity of collecting and capturing raw data from internal or external sources." },
          { type: 'qa', question: "What is Processing?", answer: "Processing is converting or transforming input data into useful information." },
          { type: 'qa', question: "What is Output?", answer: "Output is the production of useful information, usually in reports or documents." },
          { type: 'qa', question: "What is Feedback?", answer: "Feedback is information returned from the system to adjust input or processing to improve performance." },
          { type: 'qa', question: "What is Forecasting?", answer: "Forecasting predicts future events to avoid problems and support decision-making." }
        ]
      },
      {
        title: "Information System Categories",
        items: [
          {
            type: 'subsection',
            title: "Manual IS",
            content: "Manual IS is performed entirely manually without computer support. Example: Old libraries.",
            question: "What is Manual IS?"
          },
          {
            type: 'subsection',
            title: "Computer-Based IS (CBIS)",
            content: "CBIS uses computers, software, databases, networks, and procedures to collect, process, store, and distribute information.",
            question: "What is Computer-Based IS?"
          }
        ]
      },
      {
        title: "Components of CBIS",
        items: [
          { type: 'list', content: [
            "Hardware: Devices used for input, processing, output",
            "Software: Programs controlling computer operations",
            "Database: Organized collection of facts",
            "Telecommunications: Electronic transmission for communication",
            "Networks: Connected computers and devices",
            "Internet: Global network exchanging information",
            "People: Users and operators of CBIS",
            "Procedures: Rules and methods for using CBIS"
          ]}
        ]
      },
      {
        title: "Global Challenges in IS",
        items: [
          { type: 'list', content: [
            "Cultural differences: Customs affecting global operations",
            "Language differences: Translation issues in communication",
            "Time & distance: Difficulties coordinating across time zones",
            "Infrastructure: Limited electricity, Internet, or skilled workers",
            "Currency differences: Exchange rates affecting trade",
            "Product/service delivery: Challenges in global distribution",
            "Technology transfer: Restrictions and intellectual property issues",
            "Laws: Different national/regional regulations"
          ]}
        ]
      },
      {
        title: "Organization",
        items: [
          { type: 'list', content: [
            "A formal group of people/resources to achieve goals",
            "Types: For-profit / Non-profit",
            "Organization is a system with input, process, output, and feedback"
          ]}
        ]
      },
      {
        title: "Organizational Structures",
        items: [
          { type: 'text', content: "Types: Traditional, Project, Team, Virtual" }
        ]
      },
      {
        title: "Traditional Structure",
        items: [
          { type: 'list', content: [
            "Hierarchical / Pyramid with multiple levels",
            "Authority flows top → bottom",
            "Top management has more decision power and responsibilities"
          ]}
        ]
      },
      {
        title: "Flat Structure",
        items: [
          { type: 'text', content: "Few management layers, faster communication" }
        ]
      },
      {
        title: "Project Structure",
        items: [
          { type: 'text', content: "Organized around products or services (Ex: Baby products)" }
        ]
      },
      {
        title: "Team Structure",
        items: [
          { type: 'text', content: "Based on teams or groups working together" }
        ]
      },
      {
        title: "Virtual Structure",
        items: [
          { type: 'text', content: "People work from dispersed locations using Internet or telecoms (Ex: WFH)" }
        ]
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    content: [
      {
        title: "Business Information System",
        items: [
          {
            type: 'qa',
            question: "What is a Business Information System?",
            answer: "A Business Information System (BIS) is a field that integrates people, information, and technological systems to solve business problems. It combines concepts from management, computer science, and other disciplines to manage and optimize business operations."
          },
          {
            type: 'qa',
            question: "Levels of Information Systems in an organization?",
            answer: "Levels include: Knowledge Management System (KMS), Management Information System (MIS), Decision Support System (DSS), and Enterprise System."
          }
        ]
      },
      {
        title: "E-Business",
        items: [
          {
            type: 'qa',
            question: "What is E-Business?",
            answer: "Conducting business over the Internet using information systems for tasks such as buying, selling, marketing, and servicing. Examples: Amazon, eBay."
          }
        ]
      },
      {
        title: "E-Commerce",
        items: [
          {
            type: 'qa',
            question: "What is E-Commerce?",
            answer: "Electronic commerce is the buying, selling, marketing, and servicing of products or services electronically over networks such as the Internet, extranets, or corporate networks."
          }
        ]
      },
      {
        title: "Why Convert to E-Commerce?",
        items: [
          { type: 'list', content: ["Paper-based methods are slow and inefficient", "Time-consuming processes", "Inconvenient for customers"] }
        ]
      },
      {
        title: "Advantages of E-Commerce",
        items: [
          { type: 'list', content: ["Low cost operations", "Flexible and fast transactions", "Accessible to a wider audience"] }
        ]
      },
      {
        title: "Disadvantages of E-Commerce",
        items: [
          { type: 'list', content: ["Security risks related to data and transactions"] }
        ]
      },
      {
        title: "E-Commerce Process",
        items: [
          { type: 'list', content: [
            "User searches and identifies items",
            "Selects items and negotiates prices",
            "Agrees on terms of payment and delivery date",
            "Sends an order to the vendor",
            "Makes payment",
            "Receives product delivery",
            "Obtains after-sales support"
          ]}
        ]
      },
      {
        title: "Types of E-Commerce",
        items: [
          { type: 'list', content: [
            "B2B: Business-to-Business e-commerce connects organizations for trade and supply chain efficiency. Examples: HP & Intel, Alibaba.com",
            "B2C: Business-to-Consumer e-commerce allows businesses to sell directly to customers, eliminating intermediaries (Disintermediation). Examples: Daraz, Amazon",
            "C2C: Consumer-to-Consumer e-commerce involves consumers selling to other consumers, e.g., auctions. Examples: eBay",
            "M-Commerce: Mobile commerce conducted via handheld devices. Types: Mobile shopping, banking, payments. Examples: Daraz app, ikman.lk",
            "F-Commerce: Facebook-based commerce using social media for online sales and social shopping."
          ]}
        ]
      },
      {
        title: "e-Government",
        items: [
          {
            type: 'qa',
            question: "What is e-Government?",
            answer: "The use of ICT to simplify information sharing, speed up processes, and improve the relationship between citizens and government."
          },
          { type: 'list', content: [
            "G2C (Government-to-Consumer): CEB, WB, Immigration",
            "G2B (Government-to-Business): Income Tax, Supply Chain, Procurement",
            "G2G (Government-to-Government): Immigration Department, GeoData.gov"
          ]}
        ]
      },
      {
        title: "Multistage Model for E-Commerce",
        items: [
          { type: 'text', content: "A successful e-commerce system covers all stages of the sales lifecycle." },
          { type: 'list', content: [
            "Search and Identification",
            "Selection and Negotiation",
            "Purchasing Products and Services Electronically",
            "Product and Service Delivery",
            "After-Sales Service"
          ]}
        ]
      },
      {
        title: "E-Commerce Challenges",
        items: [
          { type: 'list', content: [
            "Defining an effective e-commerce model and strategy",
            "Dealing with consumer privacy concerns",
            "Overcoming lack of consumer trust"
          ]},
          {
            type: 'highlight',
            title: "E-Commerce Model Components:",
            content: ["Community", "Content", "Commerce"],
            color: "blue"
          }
        ]
      },
      {
        title: "Technology Infrastructure for E-Commerce",
        items: [
          { type: 'text', content: "Robust infrastructure including hardware, software, networks, and security is essential to support online business and transactions." }
        ]
      },
      {
        title: "Web 2.0 and Social Media",
        items: [
          { type: 'list', content: [
            "WWW: Collection of servers providing information via hyperlinks.",
            "Web 2.0: Interactive platform allowing users to share and collect information.",
            "Rich Internet Applications: Web apps with traditional software functionality, e.g., Zoom."
          ]}
        ]
      },
      {
        title: "Social Media Types",
        items: [
          { type: 'list', content: [
            "Social media: Sharing information and connecting users (FB)",
            "Microblogging sites: Post short updates (Twitter)",
            "Social bookmarking: Voting to rank online content (Digg)",
            "Epinions: Consumers review products"
          ]}
        ]
      },
      {
        title: "Internet and Web Applications",
        items: [
          { type: 'list', content: [
            "Search Engines and Web Research",
            "Email, Instant Messaging, Video Chat",
            "Telnet, SSH, FTP",
            "Web Log (Blog), Video Log (Vlog), Podcasting",
            "Entertainment"
          ]}
        ]
      }
    ]
  },
  {
    id: "mcommerce",
    title: "M-Commerce",
    content: [
      {
        title: "Mobile Commerce",
        items: [
          {
            type: 'qa',
            question: "What is Mobile Commerce (M-Commerce)?",
            answer: "M-Commerce relies on mobile and wireless devices such as smartphones, PDAs, and cell phones to place orders and conduct business. Example: Daraz mobile application."
          }
        ]
      },
      {
        title: "Types of Mobile Commerce",
        items: [
          { type: 'list', content: [
            "Mobile Banking: Using mobile apps or websites to perform banking functions.",
            "Mobile Ticketing and Booking: Bookings and tickets delivered directly to mobile devices after payment.",
            "E-bills: Mobile vouchers, coupons, loyalty points, and card systems.",
            "Auctions: Online auctions accessible via mobile phones.",
            "Stock market reports and trading through mobile apps.",
            "In-app purchasing and virtual marketplaces.",
            "Mobile Advertising."
          ]}
        ]
      },
      {
        title: "M-Commerce Web Sites",
        items: [
          {
            type: 'qa',
            question: "Why are M-Commerce websites important?",
            answer: "Retailers establish special websites for mobile device users to improve accessibility and convenience."
          }
        ]
      },
      {
        title: "Common Benefits of Mobile Commerce",
        items: [
          {
            type: 'subsection',
            title: "1) Better Overall Customer Experience",
            content: [
              "Mobility: Smartphones make shopping convenient anywhere, unlike laptops or desktops.",
              "Reachability: Retailers can send SMS/push notifications to reach customers on the go.",
              "Location-tracking: GPS and Wi-Fi allow apps to deliver personalized and location-specific content."
            ]
          },
          { type: 'list', content: [
            "2) Phenomenal growth potential",
            "3) Variety of payment options",
            "4) Omni-channel experience (selling both in-store and online)",
            "5) Reduced operational costs",
            "6) Faster flow of goods and information",
            "7) Increased accuracy"
          ]}
        ]
      },
      {
        title: "Disadvantages of Mobile Commerce",
        items: [
          { type: 'list', content: [
            "Continuous need for optimization",
            "Not all payment methods available in all regions (e.g., PayPal in Sri Lanka)",
            "Customers can easily compare prices",
            "Security concerns for customers"
          ]}
        ]
      },
      {
        title: "Global Challenges for Mobile Commerce",
        items: [
          { type: 'list', content: [
            "Cultural challenges (e.g., USA, Europe, Japan, Sri Lanka)",
            "Language challenges",
            "Time and distance challenges",
            "Infrastructure challenges",
            "Currency challenges",
            "Product and service challenges",
            "State, regional, and national law compliance"
          ]}
        ]
      },
      {
        title: "Threats of Mobile Commerce",
        items: [
          { type: 'list', content: [
            "Security risks",
            "Theft of Intellectual Property: Theft of works like books, films, music, software owned by an entity",
            "Fraud",
            "Consumer privacy threats",
            "Lack of internet access",
            "Legal jurisdiction issues"
          ]}
        ]
      },
      {
        title: "For Successful E-Commerce & M-Commerce",
        items: [
          { type: 'list', content: [
            "Define website functions clearly",
            "Establish a functional website",
            "Build traffic to your website",
            "Maintain and continuously improve the website"
          ]}
        ]
      },
      {
        title: "Technology Infrastructure for M-Commerce",
        items: [
          { type: 'list', content: [
            "Mobile devices",
            "Internet access and speed",
            "Secured network and communication",
            "Electronic payment systems"
          ]}
        ]
      }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Systems",
    content: [
      {
        title: "Enterprise System",
        items: [
          {
            type: 'qa',
            question: "What is an Enterprise System?",
            answer: "A central system in an organization that shares information across all business functions and levels of management to support running and managing a business."
          },
          { type: 'list', content: ["ERP Examples: Systems supporting supply-chain processes like order processing, inventory management, purchasing, and customer relationship management (sales, marketing, customer service)."] }
        ]
      },
      {
        title: "Transaction Processing Systems (TPS)",
        items: [
          {
            type: 'qa',
            question: "What is a TPS?",
            answer: "Captures and processes data to update records about fundamental business operations."
          },
          { type: 'list', content: [
            "Business Operations Include: Order entry, inventory control, payroll, accounts payable & receivable.",
            "Inputs: Customer orders, purchase orders, receipts, time cards, invoices, customer payments.",
            "Processing: Data collection, editing, correction, manipulation, storage, document production.",
            "Output: Updated organizational records reflecting the latest transactions."
          ]}
        ]
      },
      {
        title: "Batch Processing System",
        items: [
          {
            type: 'qa',
            question: "What is batch processing?",
            answer: "Accumulating transactions over time and processing them as a single batch."
          }
        ]
      },
      {
        title: "Online Transaction Processing (OLTP)",
        items: [
          {
            type: 'qa',
            question: "What is OLTP?",
            answer: "Processing each transaction immediately without batching. Transactions occur concurrently. Examples: Online banking, online shopping."
          }
        ]
      },
      {
        title: "Which one is the BEST?",
        items: [
          { type: 'list', content: [
            "TPS applications do not always use online processing.",
            "Batch processing can be more appropriate and cost-effective for many applications.",
            "Payroll transactions and billing are typically done via batch processing."
          ]}
        ]
      },
      {
        title: "TPS Objectives",
        items: [
          { type: 'list', content: [
            "Capture, process, and update business data databases.",
            "Ensure accurate and complete processing.",
            "Prevent fraudulent transactions.",
            "Produce timely user responses and reports.",
            "Reduce clerical and labor requirements.",
            "Improve customer service.",
            "Achieve competitive advantage."
          ]}
        ]
      },
      {
        title: "TPS Types",
        items: [
          { type: 'list', content: [
            "Order Processing Systems",
            "Accounting Systems",
            "Purchasing Systems"
          ]}
        ]
      },
      {
        title: "Transaction Processing Cycle",
        items: [
          { type: 'list', content: [
            "Data Collection: Capture all necessary transaction data.",
            "Data Editing: Check for validity and completeness.",
            "Data Correction: Reenter incorrect or missing data.",
            "Data Manipulation: Perform calculations and transform data.",
            "Data Storage: Update databases with new transactions.",
            "Document Production: Generate output records and reports."
          ]}
        ]
      },
      {
        title: "Control and Management Issues",
        items: [
          { type: 'list', content: [
            "Disaster recovery plan: Plan for restoring operations after a disaster.",
            "TPS audit: Check TPS systems to prevent accounting irregularities and data loss."
          ]}
        ]
      },
      {
        title: "Enterprise Resource Planning (ERP)",
        items: [
          {
            type: 'qa',
            question: "What is ERP?",
            answer: "Platform to manage and integrate essential business parts using a central database."
          },
          { type: 'list', content: ["Integrates business processes and databases."] }
        ]
      },
      {
        title: "Advantages of ERP Systems",
        items: [
          { type: 'subsection', title: "Increased global competition", content: "ERP helps organizations compete globally." },
          { type: 'subsection', title: "Improved access to data for operational decisions", content: "Integrated database supports all business functions for decision making without manual coordination." },
          { type: 'subsection', title: "Elimination of inefficient systems", content: "Replaces outdated or separate systems with a single integrated system." },
          { type: 'subsection', title: "Improvement of work processes & technology standardization", content: "ERP modules support best practices defined from research and industry standards." },
          { type: 'subsection', title: "Upgrade of technology infrastructure", content: "Opportunity to upgrade hardware, software, and databases during ERP implementation." }
        ]
      },
      {
        title: "Disadvantages of ERP Systems",
        items: [
          { type: 'subsection', title: "Expense and time in implementation", content: "ERP implementation is costly and time-consuming, often taking years." },
          { type: 'subsection', title: "Difficulty implementing change", content: "Employees may resist changes to adopt ERP best practices." },
          { type: 'subsection', title: "Difficulty integrating with other systems", content: "Other company systems may require additional software for ERP integration." },
          { type: 'subsection', title: "Risks in using one vendor", content: "High switching costs make reliance on one ERP vendor risky." },
          { type: 'subsection', title: "Risk of implementation failure", content: "Large ERP projects can fail without sufficient resources, expertise, and management support." }
        ]
      },
      {
        title: "Production and Supply Chain Management",
        items: [
          { type: 'list', content: [
            "Sales forecasting to estimate future demand",
            "Sales & operations plan determines what and when to produce",
            "Demand management refines weekly/daily production",
            "Detailed scheduling specifies production order and timing",
            "Materials requirement planning schedules raw material orders",
            "Purchasing sends orders to suppliers",
            "Production executes schedule and manages staffing"
          ]}
        ]
      },
      {
        title: "Customer Relationship Management (CRM)",
        items: [
          { type: 'list', content: [
            "Manages marketing, sales, service, and loyalty programs",
            "Goal: Anticipate customer needs, increase retention and loyalty"
          ]}
        ]
      },
      {
        title: "Key Features of CRM",
        items: [
          { type: 'list', content: [
            "Contact management",
            "Sales management",
            "Customer support",
            "Marketing automation",
            "Analysis for revenue growth and cost reduction"
          ]}
        ]
      },
      {
        title: "Key Challenges of Implementing Enterprise Systems",
        items: [
          { type: 'subsection', title: "Finding the right system", content: "Choose a system that fits business needs and has industry experience." },
          { type: 'subsection', title: "Resistance to change", content: "Communicate and consult staff to reduce fear and distrust." },
          { type: 'subsection', title: "Commitment from managers", content: "Support from managers at all levels is crucial to adoption." },
          { type: 'subsection', title: "System training", content: "Interactive training ensures staff understand and adopt the system." },
          { type: 'subsection', title: "Expectation management", content: "Be clear about project scope and what the system can and cannot solve." },
          { type: 'subsection', title: "Inadequate testing", content: "Testing daily functions with feedback helps reduce resistance and ensures processes are improved." }
        ]
      }
    ]
  },
  {
    id: "data",
    title: "Data Management",
    content: [
      {
        title: "Data Management Q&A",
        items: [
          { type: 'highlight', title: "Q1: What is the hierarchy of data?", color: "blue", content: [
            "Bits/Bytes: Represents characters.",
            "Characters: Basic building block of information (letters, digits, symbols).",
            "Field: Name, number, or combination describing a business aspect.",
            "Record: Collection of related data fields.",
            "File: Collection of related records.",
            "Database: Organized collection of data."
          ]},
          { type: 'highlight', title: "Q2: What are entities, attributes, data items, and keys?", color: "green", content: [
            "Entity: General class of people, places, or things (Ex: employees, inventory, customers).",
            "Attribute: Characteristic of an entity (Ex: employee number, last name).",
            "Data item: Specific value of an attribute (Ex: last name = 'Rajapaksha').",
            "Key: Field(s) used to identify a record."
          ]},
          { type: 'highlight', title: "Q3: What is the database approach vs traditional approach?", color: "yellow", content: [
            "Traditional: Separate data files for each application.",
            "Database approach: Pool of related data shared by multiple applications."
          ]},
          { type: 'highlight', title: "Q4: What is a database?", color: "blue", content: [
            "An organized collection of data.",
            "Helps companies reduce costs, increase profits, track business activities, and open new market opportunities.",
            "Some databases are created and used internationally by multiple organizations.",
            "Relational Database: Collection of data items with predefined relationships."
          ]},
          { type: 'highlight', title: "Q5: What are the advantages of DBMS?", color: "green", content: [
            "Improved strategic use of corporate data.",
            "Reduced data redundancy.",
            "Improved data integrity.",
            "Easier modification and updating.",
            "Data and program independence.",
            "Better access to data and information.",
            "Standardization of data access.",
            "Framework for program development."
          ]},
          { type: 'highlight', title: "Q6: What are the characteristics of a database?", color: "yellow", content: [
            "Content: What data should be collected and at what cost?",
            "Access: Who can use the data and when?",
            "Logical structure: How data is arranged logically for users.",
            "Physical organization: Where data is physically stored."
          ]},
          { type: 'highlight', title: "Q7: What is data modeling?", color: "blue", content: [
            "Logical Design: Abstract model of data structure, identifies relationships.",
            "Physical Design: Optimizes performance, avoids redundancies.",
            "Data Model: Diagram of entities and relationships.",
            "Enterprise Data Modeling: Data modeling at the organizational level for all departments.",
            "ER Diagrams: Graphical symbols showing data organization and relationships."
          ]},
          { type: 'highlight', title: "Q8: What is the relational database model and how to manipulate data?", color: "green", content: [
            "Tables (relations) store all data logically equivalent to files.",
            "Selecting: Remove rows by criteria.",
            "Projecting: Remove columns from a table.",
            "Joining: Combine two or more tables.",
            "Data cleanup: Fix inconsistencies, e.g., normalization."
          ]},
          { type: 'highlight', title: "Q9: What is DBMS and DBA?", color: "yellow", content: [
            "DBMS: Programs that manipulate the database and provide interface to users and applications.",
            "DBA: Skilled professional directing all activities related to an organization’s database."
          ]},
          { type: 'highlight', title: "Q10: Database system features?", color: "blue", content: [
            "Provide a user view",
            "Create/modify database (DDL)",
            "Store and retrieve data",
            "Manipulate data and generate reports (DML)",
            "Stylish output formatting"
          ]},
          { type: 'highlight', title: "Q11: Popular DBMS examples?", color: "green", content: [
            "Microsoft Access",
            "Microsoft SQL Server",
            "PostgreSQL",
            "MySQL",
            "Oracle Database",
            "Apache Cassandra",
            "Firebird"
          ]},
          { type: 'highlight', title: "Q12: Special-purpose database systems?", color: "yellow", content: [
            "Israeli Holocaust Database: Info on 3 million people in 14 languages",
            "Morphbank: Biological images DB for global researchers",
            "iTunes Store: Music/video catalog special-purpose DB"
          ]},
          { type: 'highlight', title: "Q13: How to select a DBMS?", color: "blue", content: [
            "Database size",
            "Database cost",
            "Concurrent users",
            "Performance",
            "Integration",
            "Vendor reputation"
          ]},
          { type: 'highlight', title: "Q14: Database applications?", color: "green", content: [
            "Linking company DB to Internet (Amazon, iTunes, eBay)",
            "Data Warehouses: Collects business info from multiple sources",
            "Data Mining: Automated discovery of patterns and trends",
            "Predictive Analysis: Combines historical data and assumptions to forecast outcomes",
            "Business Intelligence: Timely info for strategy, tactics, operations",
            "Distributed Databases: Data spread across multiple connected databases"
          ]}
        ]
      }
    ]
  },
  {
    id: "mis",
    title: "MIS & DSS",
    content: [
      {
        title: "MIS & DSS Q&A",
        items: [
          { type: 'highlight', title: "Q1: What is a Management Information System (MIS)?", color: "blue", content: "A: An MIS is an integrated collection of people, procedures, databases, and devices that provides managers and decision makers with information to help achieve organizational goals. It gives competitive advantage by providing the right information to the right people, in the right format, at the right time." },
          { type: 'highlight', title: "Q2: What are the inputs and outputs of an MIS?", color: "green", content: [
            "Inputs: Internal: Supply chain info, TPS and ERP systems, related databases. External: Customers, suppliers, competitors, stakeholders, Internet, and other sources.",
            "Outputs: Collection of reports"
          ]},
          { type: 'highlight', title: "Q3: What are the main functions of an MIS?", color: "yellow", content: [
            "Improve decision-making – provides standard and custom reports",
            "Use internal data stored in computer systems",
            "Provide connectivity – better communication across the organization",
            "Improve efficiency – helps managers perform tasks faster, improving productivity"
          ]},
          { type: 'highlight', title: "Q4: What are the types of MIS?", color: "blue", content: [
            "Financial MIS",
            "Manufacturing MIS",
            "Marketing MIS",
            "Human Resource MIS (HRMIS)",
            "Other MIS: Accounting, GIS (Geographic Information Systems)"
          ]},
          { type: 'highlight', title: "Q5: What are the stages of decision-making in MIS?", color: "green", content: [
            "Intelligence Stage: Identify and define problems or opportunities",
            "Design Stage: Develop alternative solutions",
            "Choice Stage: Select the best course of action",
            "Problem Solving: Goes beyond decisions, includes implementation",
            "Implementation Stage: Put the solution into effect",
            "Monitoring Stage: Evaluate implementation outcomes"
          ]},
          { type: 'highlight', title: "Q6: Difference between programmed and non-programmed decisions?", color: "yellow", content: [
            "Programmed Decision: Made using rules, procedures, or quantitative methods (Ex: reorder products when inventory is low)",
            "Non-programmed Decision: Deals with unusual or exceptional situations (Ex: responding to an economic crisis)"
          ]},
          { type: 'highlight', title: "Q7: What is a Decision Support System (DSS)?", color: "blue", content: "A computerized program used to support determinations, judgments, and courses of action in an organization. Provides interactive analysis for decision-making." },
          { type: 'highlight', title: "Q8: What are the characteristics of a DSS?", color: "green", content: [
            "Rapid access to information",
            "Handle large data from different sources",
            "Flexible reporting and presentation",
            "Textual and graphical orientation",
            "Perform complex analysis using advanced software"
          ]},
          { type: 'highlight', title: "Q9: Main components of a DSS?", color: "yellow", content: [
            "Database: Stores all relevant data",
            "Dialogue Manager: UI for easy access and manipulation",
            "Model Base: Provides models for decision-making (Ex: spreadsheets, statistical tools)"
          ]},
          { type: 'highlight', title: "Q10: How does DSS differ from MIS?", color: "blue", content: "DSS focuses on specific decisions and provides interactive analysis, while MIS provides routine reports for operational management." },
          { type: 'highlight', title: "Q11: What is an Executive Support System (ESS)?", color: "green", content: "Specialized DSS used to assist senior executives, including hardware, software, data, procedures, and people." },
          { type: 'highlight', title: "Q12: Characteristics and capabilities of ESS?", color: "yellow", content: [
            "Tailored to individual executives",
            "Easy to use",
            "Supports external data",
            "Helps in uncertain situations",
            "Future-oriented and linked to business processes",
            "Capabilities: Support defining overall vision, strategic planning, organizing, control, crisis management"
          ]},
          { type: 'highlight', title: "Q13: What is a Knowledge Management System (KMS)?", color: "blue", content: [
            "An organized collection of people, procedures, software, databases, and devices used to create, store, share, and use organizational knowledge.",
            "Types of Knowledge:",
            "Explicit Knowledge: Measurable, documented (Ex: training materials)",
            "Tacit Knowledge: Hard to measure, informal (Ex: leadership skills)"
          ]},
          { type: 'highlight', title: "Q14: Who are the personnel in a KMS?", color: "green", content: [
            "Data Workers: Secretaries, admin assistants, bookkeepers",
            "Knowledge Workers: Professionals creating, using, and sharing knowledge (Ex: researchers, writers, educators)"
          ]},
          { type: 'highlight', title: "Q15: What is an Expert System?", color: "yellow", content: [
            "Hardware and software that stores knowledge and makes inferences similar to a human expert.",
            "When to Use:",
            "Capture rare human expertise",
            "Solve problems not easily solved with programming",
            "Provide expertise across locations or hazardous environments",
            "Components:",
            "Knowledge Base: Stores data, rules, cases",
            "Inference Engine: Generates answers and predictions",
            "Explanation Facility: Explains conclusions",
            "Knowledge Acquisition Facility: Captures knowledge efficiently",
            "Applications: Credit analysis, medical diagnosis, employee evaluation, marketing, repair and maintenance, tracking threats"
          ]}
        ]
      }
    ]
  },
  {
  id: "it_management",
  title: "IT Management",
  content: [
    {
      title: "Identifying Potential Projects",
      items: [
        {
          type: 'qa',
          question: "What is the first step in project management?",
          answer: "Identifying potential projects."
        },
        {
          type: 'qa',
          question: "What is project initiation?",
          answer: "Selecting realistic projects and issuing a project charter."
        },
        {
          type: 'qa',
          question: "What is a project charter?",
          answer: "A document defining project objectives, scope, and stakeholders."
        }
      ]
    },

    {
      title: "Methods for Selecting Projects",
      items: [
        {
          type: 'qa',
          question: "List methods used to select IT projects.",
          answer: "Organizational needs, project categorization, NPV/ROI/Payback, weighted scoring model, balanced scorecard."
        },
        {
          type: 'qa',
          question: "What is a weighted scoring model?",
          answer: "A technique to prioritize actions or features based on weighted criteria."
        },
        {
          type: 'qa',
          question: "What is a balanced scorecard?",
          answer: "A metric that measures and improves internal and external organizational performance."
        }
      ]
    },

    {
      title: "Strategic Planning",
      items: [
        {
          type: 'qa',
          question: "What is strategic planning?",
          answer: "Determining long-term objectives by analyzing strengths, weaknesses, opportunities, and threats."
        },
        {
          type: 'qa',
          question: "What tool is commonly used in strategic planning?",
          answer: "SWOT analysis."
        }
      ]
    },

    {
      title: "IT Strategic Planning",
      items: [
        {
          type: 'qa',
          question: "What does IT strategic planning assess?",
          answer: "The investments and technologies needed to meet business goals."
        }
      ]
    },

    {
      title: "Participants in Systems Development",
      items: [
        {
          type: 'qa',
          question: "Who are stakeholders?",
          answer: "People who benefit from the project."
        },
        {
          type: 'qa',
          question: "Who are system users?",
          answer: "People who interact with the system."
        },
        {
          type: 'qa',
          question: "Who is the development team?",
          answer: "The group responsible for achieving system objectives."
        },
        {
          type: 'qa',
          question: "Who are developers?",
          answer: "People who write or modify programs."
        },
        {
          type: 'qa',
          question: "Who is a systems analyst?",
          answer: "A person who analyzes and designs business systems."
        },
        {
          type: 'qa',
          question: "Who is the project manager?",
          answer: "The person coordinating people and resources to complete the project."
        }
      ]
    },

    {
      title: "Information Systems Planning",
      items: [
        {
          type: 'qa',
          question: "What is information systems planning?",
          answer: "Converting organizational goals into system development activities."
        }
      ]
    },

    {
      title: "Objectives of Systems Development",
      items: [
        {
          type: 'qa',
          question: "What is the main objective of systems development?",
          answer: "Deliver the right information to the right person at the right time."
        },
        {
          type: 'qa',
          question: "What are mission-critical systems?",
          answer: "Systems essential for organizational operations."
        }
      ]
    },

    {
      title: "Performance Objectives",
      items: [
        {
          type: 'list',
          content: [
            "Quality and usefulness",
            "Accuracy",
            "Speed",
            "Scalability",
            "Risk reduction"
          ]
        }
      ]
    },

    {
      title: "Cost Objectives",
      items: [
        {
          type: 'qa',
          question: "What are development costs?",
          answer: "Costs required to get a system up and running."
        },
        {
          type: 'qa',
          question: "Why does uniqueness impact cost?",
          answer: "Unique systems cost more but may be reusable."
        },
        {
          type: 'qa',
          question: "What are operating costs?",
          answer: "Ongoing costs like personnel, software, supplies, and electricity."
        }
      ]
    },

    {
      title: "Systems Development Life Cycle (SDLC)",
      items: [
        {
          type: 'qa',
          question: "What is SDLC?",
          answer: "The overall process of developing an information system."
        }
      ]
    },

    {
      title: "SDLC Phases",
      items: [
        {
          type: 'qa',
          question: "What is systems investigation?",
          answer: "Identifying problems or opportunities."
        },
        {
          type: 'qa',
          question: "What is systems analysis?",
          answer: "Determining what the system must do."
        },
        {
          type: 'qa',
          question: "What is systems design?",
          answer: "Deciding how the system will work."
        },
        {
          type: 'qa',
          question: "What is systems implementation?",
          answer: "Developing or acquiring system components and making them operational."
        },
        {
          type: 'qa',
          question: "What is systems maintenance?",
          answer: "Ensuring the system works properly and updating it."
        }
      ]
    },

    {
      title: "Prototyping",
      items: [
        {
          type: 'qa',
          question: "What is prototyping?",
          answer: "An iterative approach where the system is designed, tested, and improved repeatedly."
        },
        {
          type: 'qa',
          question: "What is an operational prototype?",
          answer: "A working system accessing real data."
        },
        {
          type: 'qa',
          question: "What is a non-operational prototype?",
          answer: "A model showing inputs and outputs without real processing."
        }
      ]
    },

    {
      title: "Rapid Application Development (RAD)",
      items: [
        {
          type: 'qa',
          question: "What is RAD?",
          answer: "A fast development approach using specialized tools."
        }
      ]
    },

    {
      title: "Joint Application Development (JAD)",
      items: [
        {
          type: 'qa',
          question: "What is JAD?",
          answer: "A process where users and IS staff work together to analyze and design systems."
        }
      ]
    },

    {
      title: "Factors Affecting Systems Development Success",
      items: [
        {
          type: 'qa',
          question: "How does the degree of change affect projects?",
          answer: "Large changes increase complexity and risk."
        },
        {
          type: 'qa',
          question: "Why is managing change important?",
          answer: "New systems change user habits and work environments."
        },
        {
          type: 'list',
          content: [
            "Fear of job loss",
            "Increased workload",
            "Dislike of IT staff",
            "Organizational changes",
            "Fear of learning new procedures"
          ]
        }
      ]
    },

    {
      title: "Quality and Standards",
      items: [
        {
          type: 'qa',
          question: "Why are standards important?",
          answer: "To ensure system quality across different platforms and global requirements like ISO 9000."
        }
      ]
    },

    {
      title: "Computer Waste & Mistakes",
      items: [
        {
          type: 'qa',
          question: "What is computer waste?",
          answer: "Misuse of computer resources."
        },
        {
          type: 'qa',
          question: "What are computer-related mistakes?",
          answer: "Human errors that make system output incorrect."
        },
        {
          type: 'list',
          content: [
            "Data entry errors",
            "Program errors",
            "File handling mistakes",
            "Output mishandling",
            "Poor planning of environment",
            "Insufficient computing capacity"
          ]
        }
      ]
    },

    {
      title: "Preventing Waste & Mistakes",
      items: [
        {
          type: 'qa',
          question: "How can computer waste be reduced?",
          answer: "By establishing, implementing, monitoring, and reviewing IT policies."
        }
      ]
    },

    {
      title: "Computer Crime",
      items: [
        {
          type: 'qa',
          question: "What is social engineering?",
          answer: "Tricking people into giving confidential information."
        },
        {
          type: 'qa',
          question: "What is dumpster diving?",
          answer: "Searching trash for sensitive information."
        },
        {
          type: 'qa',
          question: "What is identity theft?",
          answer: "Stealing personal information to impersonate someone."
        },
        {
          type: 'list',
          content: [
            "Cyberterrorism",
            "Online scams",
            "Equipment theft",
            "Internet gambling"
          ]
        }
      ]
    },

    {
      title: "Preventing Computer Crime",
      items: [
        {
          type: 'list',
          content: [
            "Government efforts",
            "Corporate policies",
            "Intrusion detection software",
            "Security dashboards",
            "Managed security service providers (MSSPs)"
          ]
        }
      ]
    }
  ]
}
  
];
