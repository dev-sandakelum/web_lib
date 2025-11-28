"use client";
import React, { useState } from "react";

export default function InformationSystemsNotes() {
  const [activeSection, setActiveSection] = useState("intro");

  const SectionCard: React.FC<{
    children?: React.ReactNode;
    className?: string;
  }> = ({ children, className = "" }) => (
    <div
      className={`bg-white rounded-lg p-3 sm:p-4 mb-4 shadow-sm border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );

  const Subsection: React.FC<{
    title: React.ReactNode;
    children?: React.ReactNode;
  }> = ({ title, children }) => (
    <div className="bg-gray-50 border-l-4 border-blue-600 p-3 sm:p-4 my-3 rounded-r-lg">
      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
        {title}
      </h4>
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

  const HighlightBox: React.FC<{
    title?: React.ReactNode;
    children?: React.ReactNode;
    color?: "blue" | "green" | "yellow" | "purple" | "red";
  }> = ({ title, children, color = "blue" }) => {
    const colors: Record<
      "blue" | "green" | "yellow" | "purple" | "red",
      string
    > = {
      blue: "bg-blue-50 border-blue-300",
      green: "bg-green-50 border-green-300",
      yellow: "bg-yellow-50 border-yellow-300",
      purple: "bg-purple-50 border-purple-300",
      red: "bg-red-50 border-red-300",
    };
    return (
      <div className={`${colors[color]} border rounded-lg p-3 sm:p-4 my-3`}>
        {title && (
          <h4 className="text-sm sm:text-base font-semibold mb-2 text-black">
            {title}
          </h4>
        )}
        <div className="text-xs sm:text-sm text-gray-700">{children}</div>
      </div>
    );
  };

  const ExampleBox: React.FC<{ children?: React.ReactNode }> = ({
    children,
  }) => (
    <div className="bg-green-50 border border-green-300 rounded-lg p-3 my-2">
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-1 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-8 rounded-xl mb-4 sm:mb-6 shadow-lg">
          {/* <h1 className="text-2xl sm:text-4xl font-bold mb-2">ICT 1161</h1> */}
          <h2 className="text-lg sm:text-2xl font-semibold mb-1">
            Fundamentals of Information Systems
          </h2>
          {/* <p className="text-xs sm:text-sm opacity-90">University of Ruhuna</p> */}
        </div>

        {/* Navigation */}
        <div className="sticky top-0 bg-white rounded-lg shadow-md z-50 mb-4 m-0 p-0 sm:mb-6">
          <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
            {[
              { id: "intro", label: "Introduction" },
              { id: "ecommerce", label: "E-Commerce" },
              { id: "mcommerce", label: "M-Commerce" },
              { id: "enterprise", label: "Enterprise Systems" },
              { id: "mis", label: "MIS & DSS" },
              { id: "management", label: "IT Management" },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
        {/* Introduction Section */}
        {activeSection === "intro" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Data, Information, Knowledge & Process
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is Data?
                  <br />
                  <strong>A:</strong> Data is raw facts or figures without any
                  meaning. It is the basic input for processing.
                </li>
                <li>
                  <strong>Q:</strong> What is Information?
                  <br />
                  <strong>A:</strong> Information is processed and organized
                  data that has meaning and can be used for decision-making.
                </li>
                <li>
                  <strong>Q:</strong> What is Knowledge?
                  <br />
                  <strong>A:</strong> Knowledge is understanding and awareness
                  gained from information. It helps in making decisions and
                  solving problems.
                </li>
                <li>
                  <strong>Q:</strong> What is a Process?
                  <br />
                  <strong>A:</strong> A process is a set of logically related
                  tasks performed to achieve a specific outcome or goal.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transforming Data into Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Q:</strong> How is data transformed into information?
                <br />
                <strong>A:</strong> Data is collected, processed, organized, and
                structured to add meaning. This transformation gives it value,
                turning raw facts into information useful for decision-making.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Characteristics of Valuable Information
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What are the characteristics of valuable
                  information?
                  <br />
                  <strong>A:</strong> Valuable information must be accurate,
                  timely, relevant, complete, and understandable to support
                  proper decision-making.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What is a System?
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> Define a System.
                  <br />
                  <strong>A:</strong> A system is a set of interrelated
                  components working together to achieve a specific goal or
                  objective.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Components of a System
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What are the components of a system?
                  <br />
                  <strong>A:</strong> The main components of a system are: Input
                  (collecting data), Processing (converting data to
                  information), Output (producing results), and Feedback
                  (optional adjustments to improve processes).
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                System Categories
              </h2>
              <Subsection title="Open System">
                <p className="mb-2">
                  <strong>Q:</strong> What is an Open System?
                  <br />
                  <strong>A:</strong> An open system exchanges matter, energy,
                  or information with its environment and adapts to external
                  changes. Example: Human body.
                </p>
              </Subsection>
              <Subsection title="Closed System">
                <p className="mb-2">
                  <strong>Q:</strong> What is a Closed System?
                  <br />
                  <strong>A:</strong> A closed system is isolated from its
                  environment and does not exchange matter or energy. Example:
                  Earth.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What is an Information System?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Q:</strong> Define Information System.
                <br />
                <strong>A:</strong> An Information System is a system that
                collects, stores, processes, and distributes data and
                information, providing feedback to meet an objective.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Input, Processing, Output, Feedback
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is Input?
                  <br />
                  <strong>A:</strong> Input is the activity of collecting and
                  capturing raw data from internal or external sources.
                </li>
                <li>
                  <strong>Q:</strong> What is Processing?
                  <br />
                  <strong>A:</strong> Processing is converting or transforming
                  input data into useful information.
                </li>
                <li>
                  <strong>Q:</strong> What is Output?
                  <br />
                  <strong>A:</strong> Output is the production of useful
                  information, usually in reports or documents.
                </li>
                <li>
                  <strong>Q:</strong> What is Feedback?
                  <br />
                  <strong>A:</strong> Feedback is information returned from the
                  system to adjust input or processing to improve performance.
                </li>
                <li>
                  <strong>Q:</strong> What is Forecasting?
                  <br />
                  <strong>A:</strong> Forecasting predicts future events to
                  avoid problems and support decision-making.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Information System Categories
              </h2>
              <Subsection title="Manual IS">
                <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                  <li>
                    <strong>Q:</strong> What is Manual IS?
                    <br />
                    <strong>A:</strong> Manual IS is performed entirely manually
                    without computer support. Example: Old libraries.
                  </li>
                </ul>
              </Subsection>
              <Subsection title="Computer-Based IS (CBIS)">
                <p className="text-xs sm:text-sm text-gray-700 mb-2">
                  <strong>Q:</strong> What is Computer-Based IS?
                  <br />
                  <strong>A:</strong> CBIS uses computers, software, databases,
                  networks, and procedures to collect, process, store, and
                  distribute information.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Components of CBIS
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Hardware: Devices used for input, processing, output</li>
                <li>Software: Programs controlling computer operations</li>
                <li>Database: Organized collection of facts</li>
                <li>
                  Telecommunications: Electronic transmission for communication
                </li>
                <li>Networks: Connected computers and devices</li>
                <li>Internet: Global network exchanging information</li>
                <li>People: Users and operators of CBIS</li>
                <li>Procedures: Rules and methods for using CBIS</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Global Challenges in IS
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  Cultural differences: Customs affecting global operations
                </li>
                <li>
                  Language differences: Translation issues in communication
                </li>
                <li>
                  Time & distance: Difficulties coordinating across time zones
                </li>
                <li>
                  Infrastructure: Limited electricity, Internet, or skilled
                  workers
                </li>
                <li>Currency differences: Exchange rates affecting trade</li>
                <li>
                  Product/service delivery: Challenges in global distribution
                </li>
                <li>
                  Technology transfer: Restrictions and intellectual property
                  issues
                </li>
                <li>Laws: Different national/regional regulations</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Organization
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>A formal group of people/resources to achieve goals</li>
                <li>Types: For-profit / Non-profit</li>
                <li>
                  Organization is a system with input, process, output, and
                  feedback
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Organizational Structures
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Types: Traditional, Project, Team, Virtual
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Traditional Structure
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Hierarchical / Pyramid with multiple levels</li>
                <li>Authority flows top → bottom</li>
                <li>
                  Top management has more decision power and responsibilities
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Flat Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Few management layers, faster communication
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Project Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Organized around products or services (Ex: Baby products)
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Team Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Based on teams or groups working together
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Virtual Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                People work from dispersed locations using Internet or telecoms
                (Ex: WFH)
              </p>
            </SectionCard>
          </div>
        )}

        {/* E-Commerce Section */}
        {activeSection === "ecommerce" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Business Information System
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is a Business Information System?
                  <br />
                  <strong>A:</strong> A Business Information System (BIS) is a
                  field that integrates people, information, and technological
                  systems to solve business problems. It combines concepts from
                  management, computer science, and other disciplines to manage
                  and optimize business operations.
                </li>
                <li>
                  <strong>Q:</strong> Levels of Information Systems in an
                  organization?
                  <br />
                  <strong>A:</strong> Levels include:
                  <ul className="list-disc ml-5">
                    <li>
                      Knowledge Management System (KMS): Ensures a continuous
                      flow of updated knowledge into an organization to support
                      processes and decision-making.
                    </li>
                    <li>
                      Management Information System (MIS): Automates business
                      processes to help managers track performance, analyze
                      activities, plan, and provide feedback on roles and
                      responsibilities.
                    </li>
                    <li>
                      Decision Support System (DSS): Analyzes data to support
                      problem-solving and decision-making during business
                      operations. Used for revenue, sales, inventory analysis.
                    </li>
                    <li>
                      Enterprise System: Integrates processes across functional
                      areas to improve efficiency and coordination in the
                      organization.
                    </li>
                  </ul>
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                E-Business
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is E-Business?
                  <br />
                  <strong>A:</strong> Conducting business over the Internet
                  using information systems for tasks such as buying, selling,
                  marketing, and servicing. Examples: Amazon, eBay.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Q:</strong> What is E-Commerce?
                <br />
                <strong>A:</strong> Electronic commerce is the buying, selling,
                marketing, and servicing of products or services electronically
                over networks such as the Internet, extranets, or corporate
                networks.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Why Convert to E-Commerce?
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Paper-based methods are slow and inefficient</li>
                <li>Time-consuming processes</li>
                <li>Inconvenient for customers</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Advantages of E-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Low cost operations</li>
                <li>Flexible and fast transactions</li>
                <li>Accessible to a wider audience</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Disadvantages of E-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Security risks related to data and transactions</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                E-Commerce Process
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>User searches and identifies items</li>
                <li>Selects items and negotiates prices</li>
                <li>Agrees on terms of payment and delivery date</li>
                <li>Sends an order to the vendor</li>
                <li>Makes payment</li>
                <li>Receives product delivery</li>
                <li>Obtains after-sales support</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of E-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>B2B:</strong> Business-to-Business e-commerce connects
                  organizations for trade and supply chain efficiency. Examples:
                  HP & Intel, Alibaba.com
                </li>
                <li>
                  <strong>B2C:</strong> Business-to-Consumer e-commerce allows
                  businesses to sell directly to customers, eliminating
                  intermediaries (Disintermediation). Examples: Daraz, Amazon
                </li>
                <li>
                  <strong>C2C:</strong> Consumer-to-Consumer e-commerce involves
                  consumers selling to other consumers, e.g., auctions.
                  Examples: eBay
                </li>
                <li>
                  <strong>M-Commerce:</strong> Mobile commerce conducted via
                  handheld devices. Types: Mobile shopping, banking, payments.
                  Examples: Daraz app, ikman.lk
                </li>
                <li>
                  <strong>F-Commerce:</strong> Facebook-based commerce using
                  social media for online sales and social shopping.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                e-Government
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                <strong>Q:</strong> What is e-Government?
                <br />
                <strong>A:</strong> The use of ICT to simplify information
                sharing, speed up processes, and improve the relationship
                between citizens and government.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>G2C (Government-to-Consumer): CEB, WB, Immigration</li>
                <li>
                  G2B (Government-to-Business): Income Tax, Supply Chain,
                  Procurement
                </li>
                <li>
                  G2G (Government-to-Government): Immigration Department,
                  GeoData.gov
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Multistage Model for E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                A successful e-commerce system covers all stages of the sales
                lifecycle.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Search and Identification</li>
                <li>Selection and Negotiation</li>
                <li>Purchasing Products and Services Electronically</li>
                <li>Product and Service Delivery</li>
                <li>After-Sales Service</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                E-Commerce Challenges
              </h2>
              <ol className="list-decimal ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Defining an effective e-commerce model and strategy</li>
                <li>Dealing with consumer privacy concerns</li>
                <li>Overcoming lack of consumer trust</li>
              </ol>
              <HighlightBox title="E-Commerce Model Components:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Community</li>
                  <li>Content</li>
                  <li>Commerce</li>
                </ol>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Technology Infrastructure for E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Robust infrastructure including hardware, software, networks,
                and security is essential to support online business and
                transactions.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Web 2.0 and Social Media
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>WWW:</strong> Collection of servers providing
                  information via hyperlinks.
                </li>
                <li>
                  <strong>Web 2.0:</strong> Interactive platform allowing users
                  to share and collect information.
                </li>
                <li>
                  <strong>Rich Internet Applications:</strong> Web apps with
                  traditional software functionality, e.g., Zoom.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Social Media Types
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Social media:</strong> Sharing information and
                  connecting users (FB)
                </li>
                <li>
                  <strong>Microblogging sites:</strong> Post short updates
                  (Twitter)
                </li>
                <li>
                  <strong>Social bookmarking:</strong> Voting to rank online
                  content (Digg)
                </li>
                <li>
                  <strong>Epinions:</strong> Consumers review products
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Internet and Web Applications
              </h2>
              <ol className="list-decimal ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Search Engines and Web Research</li>
                <li>Email, Instant Messaging, Video Chat</li>
                <li>
                  Telnet, SSH, FTP
                  <ul className="list-disc ml-5 mt-1">
                    <li>Telnet: Access remote server via command line</li>
                    <li>SSH: Secure version of Telnet</li>
                    <li>
                      FTP: File transfers between host and remote computer
                    </li>
                  </ul>
                </li>
                <li>Web Log (Blog), Video Log (Vlog), Podcasting</li>
                <li>Entertainment</li>
              </ol>
            </SectionCard>
          </div>
        )}

        {/* M-Commerce Section */}
        {activeSection === "mcommerce" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is Mobile Commerce (M-Commerce)?
                  <br />
                  <strong>A:</strong> M-Commerce relies on mobile and wireless
                  devices such as smartphones, PDAs, and cell phones to place
                  orders and conduct business. Example: Daraz mobile
                  application.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Mobile Banking:</strong> Using mobile apps or websites
                  to perform banking functions.
                </li>
                <li>
                  <strong>Mobile Ticketing and Booking:</strong> Bookings and
                  tickets delivered directly to mobile devices after payment.
                </li>
                <li>
                  <strong>E-bills:</strong> Mobile vouchers, coupons, loyalty
                  points, and card systems.
                </li>
                <li>
                  <strong>Auctions:</strong> Online auctions accessible via
                  mobile phones.
                </li>
                <li>Stock market reports and trading through mobile apps.</li>
                <li>In-app purchasing and virtual marketplaces.</li>
                <li>Mobile Advertising.</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                M-Commerce Web Sites
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> Why are M-Commerce websites important?
                  <br />
                  <strong>A:</strong> Retailers establish special websites for
                  mobile device users to improve accessibility and convenience.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Common Benefits of Mobile Commerce
              </h2>
              <Subsection title="1) Better Overall Customer Experience">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Mobility:</strong> Smartphones make shopping
                    convenient anywhere, unlike laptops or desktops.
                  </li>
                  <li>
                    <strong>Reachability:</strong> Retailers can send SMS/push
                    notifications to reach customers on the go.
                  </li>
                  <li>
                    <strong>Location-tracking:</strong> GPS and Wi-Fi allow apps
                    to deliver personalized and location-specific content.
                  </li>
                </ul>
              </Subsection>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700 mt-3">
                <li>2) Phenomenal growth potential</li>
                <li>3) Variety of payment options</li>
                <li>
                  4) Omni-channel experience (selling both in-store and online)
                </li>
                <li>5) Reduced operational costs</li>
                <li>6) Faster flow of goods and information</li>
                <li>7) Increased accuracy</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Disadvantages of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Continuous need for optimization</li>
                <li>
                  Not all payment methods available in all regions (e.g., PayPal
                  in Sri Lanka)
                </li>
                <li>Customers can easily compare prices</li>
                <li>Security concerns for customers</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Global Challenges for Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  Cultural challenges (e.g., USA, Europe, Japan, Sri Lanka)
                </li>
                <li>Language challenges</li>
                <li>Time and distance challenges</li>
                <li>Infrastructure challenges</li>
                <li>Currency challenges</li>
                <li>Product and service challenges</li>
                <li>State, regional, and national law compliance</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Threats of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Security risks</strong>
                </li>
                <li>
                  <strong>Theft of Intellectual Property:</strong> Theft of
                  works like books, films, music, software owned by an entity
                </li>
                <li>
                  <strong>Fraud</strong>
                </li>
                <li>
                  <strong>Consumer privacy threats</strong>
                </li>
                <li>
                  <strong>Lack of internet access</strong>
                </li>
                <li>
                  <strong>Legal jurisdiction issues</strong>
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                For Successful E-Commerce & M-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Define website functions clearly</li>
                <li>Establish a functional website</li>
                <li>Build traffic to your website</li>
                <li>Maintain and continuously improve the website</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Technology Infrastructure for M-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Mobile devices</li>
                <li>Internet access and speed</li>
                <li>Secured network and communication</li>
                <li>Electronic payment systems</li>
              </ul>
            </SectionCard>
          </div>
        )}

        {/* Enterprise Systems Section */}
        {activeSection === "enterprise" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Enterprise System
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is an Enterprise System?
                  <br />
                  <strong>A:</strong> A central system in an organization that
                  shares information across all business functions and levels of
                  management to support running and managing a business.
                </li>
                <li>
                  <strong>ERP Examples:</strong> Systems supporting supply-chain
                  processes like order processing, inventory management,
                  purchasing, and customer relationship management (sales,
                  marketing, customer service).
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transaction Processing Systems (TPS)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is a TPS?
                  <br />
                  <strong>A:</strong> Captures and processes data to update
                  records about fundamental business operations.
                </li>
                <li>
                  <strong>Business Operations Include:</strong> Order entry,
                  inventory control, payroll, accounts payable & receivable.
                </li>
                <li>
                  <strong>Inputs:</strong> Customer orders, purchase orders,
                  receipts, time cards, invoices, customer payments.
                </li>
                <li>
                  <strong>Processing:</strong> Data collection, editing,
                  correction, manipulation, storage, document production.
                </li>
                <li>
                  <strong>Output:</strong> Updated organizational records
                  reflecting the latest transactions.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Batch Processing System
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is batch processing?
                  <br />
                  <strong>A:</strong> Accumulating transactions over time and
                  processing them as a single batch.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Online Transaction Processing (OLTP)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is OLTP?
                  <br />
                  <strong>A:</strong> Processing each transaction immediately
                  without batching. Transactions occur concurrently. Examples:
                  Online banking, online shopping.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Which one is the BEST?
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>TPS applications do not always use online processing.</li>
                <li>
                  Batch processing can be more appropriate and cost-effective
                  for many applications.
                </li>
                <li>
                  Payroll transactions and billing are typically done via batch
                  processing.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TPS Objectives
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Capture, process, and update business data databases.</li>
                <li>Ensure accurate and complete processing.</li>
                <li>Prevent fraudulent transactions.</li>
                <li>Produce timely user responses and reports.</li>
                <li>Reduce clerical and labor requirements.</li>
                <li>Improve customer service.</li>
                <li>Achieve competitive advantage.</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TPS Types
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Order Processing Systems</li>
                <li>Accounting Systems</li>
                <li>Purchasing Systems</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transaction Processing Cycle
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Data Collection:</strong> Capture all necessary
                  transaction data.
                </li>
                <li>
                  <strong>Data Editing:</strong> Check for validity and
                  completeness.
                </li>
                <li>
                  <strong>Data Correction:</strong> Reenter incorrect or missing
                  data.
                </li>
                <li>
                  <strong>Data Manipulation:</strong> Perform calculations and
                  transform data.
                </li>
                <li>
                  <strong>Data Storage:</strong> Update databases with new
                  transactions.
                </li>
                <li>
                  <strong>Document Production:</strong> Generate output records
                  and reports.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Control and Management Issues
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Disaster recovery plan:</strong> Plan for restoring
                  operations after a disaster.
                </li>
                <li>
                  <strong>TPS audit:</strong> Check TPS systems to prevent
                  accounting irregularities and data loss.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Enterprise Resource Planning (ERP)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Q:</strong> What is ERP?
                  <br />
                  <strong>A:</strong> Platform to manage and integrate essential
                  business parts using a central database.
                </li>
                <li>Integrates business processes and databases.</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Advantages of ERP Systems
              </h2>
              <Subsection title="Increased global competition">
                <p>ERP helps organizations compete globally.</p>
              </Subsection>

              <Subsection title="Improved access to data for operational decisions">
                <p>
                  Integrated database supports all business functions for
                  decision making without manual coordination.
                </p>
              </Subsection>

              <Subsection title="Elimination of inefficient systems">
                <p>
                  Replaces outdated or separate systems with a single integrated
                  system.
                </p>
              </Subsection>

              <Subsection title="Improvement of work processes & technology standardization">
                <p>
                  ERP modules support best practices defined from research and
                  industry standards.
                </p>
              </Subsection>

              <Subsection title="Upgrade of technology infrastructure">
                <p>
                  Opportunity to upgrade hardware, software, and databases
                  during ERP implementation.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Disadvantages of ERP Systems
              </h2>
              <Subsection title="Expense and time in implementation">
                <p>
                  ERP implementation is costly and time-consuming, often taking
                  years.
                </p>
              </Subsection>
              <Subsection title="Difficulty implementing change">
                <p>Employees may resist changes to adopt ERP best practices.</p>
              </Subsection>
              <Subsection title="Difficulty integrating with other systems">
                <p>
                  Other company systems may require additional software for ERP
                  integration.
                </p>
              </Subsection>
              <Subsection title="Risks in using one vendor">
                <p>
                  High switching costs make reliance on one ERP vendor risky.
                </p>
              </Subsection>
              <Subsection title="Risk of implementation failure">
                <p>
                  Large ERP projects can fail without sufficient resources,
                  expertise, and management support.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Production and Supply Chain Management
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Sales forecasting to estimate future demand</li>
                <li>
                  Sales & operations plan determines what and when to produce
                </li>
                <li>Demand management refines weekly/daily production</li>
                <li>
                  Detailed scheduling specifies production order and timing
                </li>
                <li>
                  Materials requirement planning schedules raw material orders
                </li>
                <li>Purchasing sends orders to suppliers</li>
                <li>Production executes schedule and manages staffing</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Customer Relationship Management (CRM)
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Manages marketing, sales, service, and loyalty programs</li>
                <li>
                  Goal: Anticipate customer needs, increase retention and
                  loyalty
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Key Features of CRM
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Contact management</li>
                <li>Sales management</li>
                <li>Customer support</li>
                <li>Marketing automation</li>
                <li>Analysis for revenue growth and cost reduction</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Key Challenges of Implementing Enterprise Systems
              </h2>
              <Subsection title="Finding the right system">
                <p>
                  Choose a system that fits business needs and has industry
                  experience.
                </p>
              </Subsection>
              <Subsection title="Resistance to change">
                <p>
                  Communicate and consult staff to reduce fear and distrust.
                </p>
              </Subsection>
              <Subsection title="Commitment from managers">
                <p>
                  Support from managers at all levels is crucial to adoption.
                </p>
              </Subsection>
              <Subsection title="System training">
                <p>
                  Interactive training ensures staff understand and adopt the
                  system.
                </p>
              </Subsection>
              <Subsection title="Expectation management">
                <p>
                  Be clear about project scope and what the system can and
                  cannot solve.
                </p>
              </Subsection>
              <Subsection title="Inadequate testing">
                <p>
                  Testing daily functions with feedback helps reduce resistance
                  and ensures processes are improved.
                </p>
              </Subsection>
            </SectionCard>
          </div>
        )}
        {/* Data Management Section */}
        {activeSection === "data" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Data Management Q&A
              </h2>

              {/* Q1 */}
              <HighlightBox
                title="Q1: What is the hierarchy of data?"
                color="blue"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Bits/Bytes:</strong> Represents characters.
                  </li>
                  <li>
                    <strong>Characters:</strong> Basic building block of
                    information (letters, digits, symbols).
                  </li>
                  <li>
                    <strong>Field:</strong> Name, number, or combination
                    describing a business aspect.
                  </li>
                  <li>
                    <strong>Record:</strong> Collection of related data fields.
                  </li>
                  <li>
                    <strong>File:</strong> Collection of related records.
                  </li>
                  <li>
                    <strong>Database:</strong> Organized collection of data.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q2 */}
              <HighlightBox
                title="Q2: What are entities, attributes, data items, and keys?"
                color="green"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Entity:</strong> General class of people, places, or
                    things (Ex: employees, inventory, customers).
                  </li>
                  <li>
                    <strong>Attribute:</strong> Characteristic of an entity (Ex:
                    employee number, last name).
                  </li>
                  <li>
                    <strong>Data item:</strong> Specific value of an attribute
                    (Ex: last name = "Rajapaksha").
                  </li>
                  <li>
                    <strong>Key:</strong> Field(s) used to identify a record.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q3 */}
              <HighlightBox
                title="Q3: What is the database approach vs traditional approach?"
                color="yellow"
              >
                <p>
                  <strong>Traditional:</strong> Separate data files for each
                  application.
                </p>
                <p>
                  <strong>Database approach:</strong> Pool of related data
                  shared by multiple applications.
                </p>
              </HighlightBox>

              {/* Q4 */}
              <HighlightBox title="Q4: What is a database?" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>An organized collection of data.</li>
                  <li>
                    Helps companies reduce costs, increase profits, track
                    business activities, and open new market opportunities.
                  </li>
                  <li>
                    Some databases are created and used internationally by
                    multiple organizations.
                  </li>
                  <li>
                    <strong>Relational Database:</strong> Collection of data
                    items with predefined relationships.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q5 */}
              <HighlightBox
                title="Q5: What are the advantages of DBMS?"
                color="green"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>Improved strategic use of corporate data.</li>
                  <li>Reduced data redundancy.</li>
                  <li>Improved data integrity.</li>
                  <li>Easier modification and updating.</li>
                  <li>Data and program independence.</li>
                  <li>Better access to data and information.</li>
                  <li>Standardization of data access.</li>
                  <li>Framework for program development.</li>
                </ul>
              </HighlightBox>

              {/* Q6 */}
              <HighlightBox
                title="Q6: What are the characteristics of a database?"
                color="yellow"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Content:</strong> What data should be collected and
                    at what cost?
                  </li>
                  <li>
                    <strong>Access:</strong> Who can use the data and when?
                  </li>
                  <li>
                    <strong>Logical structure:</strong> How data is arranged
                    logically for users.
                  </li>
                  <li>
                    <strong>Physical organization:</strong> Where data is
                    physically stored.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q7 */}
              <HighlightBox title="Q7: What is data modeling?" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Logical Design:</strong> Abstract model of data
                    structure, identifies relationships.
                  </li>
                  <li>
                    <strong>Physical Design:</strong> Optimizes performance,
                    avoids redundancies.
                  </li>
                  <li>
                    <strong>Data Model:</strong> Diagram of entities and
                    relationships.
                  </li>
                  <li>
                    <strong>Enterprise Data Modeling:</strong> Data modeling at
                    the organizational level for all departments.
                  </li>
                  <li>
                    <strong>ER Diagrams:</strong> Graphical symbols showing data
                    organization and relationships.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q8 */}
              <HighlightBox
                title="Q8: What is the relational database model and how to manipulate data?"
                color="green"
              >
                <p>
                  Tables (relations) store all data logically equivalent to
                  files.
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Selecting:</strong> Remove rows by criteria.
                  </li>
                  <li>
                    <strong>Projecting:</strong> Remove columns from a table.
                  </li>
                  <li>
                    <strong>Joining:</strong> Combine two or more tables.
                  </li>
                  <li>
                    <strong>Data cleanup:</strong> Fix inconsistencies, e.g.,
                    normalization.
                  </li>
                </ul>
              </HighlightBox>

              {/* Q9 */}
              <HighlightBox title="Q9: What is DBMS and DBA?" color="yellow">
                <p>
                  <strong>DBMS:</strong> Programs that manipulate the database
                  and provide interface to users and applications.
                </p>
                <p>
                  <strong>DBA:</strong> Skilled professional directing all
                  activities related to an organization’s database.
                </p>
              </HighlightBox>

              {/* Q10 */}
              <HighlightBox title="Q10: Database system features?" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Provide a user view</li>
                  <li>Create/modify database (DDL)</li>
                  <li>Store and retrieve data</li>
                  <li>Manipulate data and generate reports (DML)</li>
                  <li>Stylish output formatting</li>
                </ul>
              </HighlightBox>

              {/* Q11 */}
              <HighlightBox title="Q11: Popular DBMS examples?" color="green">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Microsoft Access</li>
                  <li>Microsoft SQL Server</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Oracle Database</li>
                  <li>Apache Cassandra</li>
                  <li>Firebird</li>
                </ul>
              </HighlightBox>

              {/* Q12 */}
              <HighlightBox
                title="Q12: Special-purpose database systems?"
                color="yellow"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    <strong>Israeli Holocaust Database:</strong> Info on 3
                    million people in 14 languages
                  </li>
                  <li>
                    <strong>Morphbank:</strong> Biological images DB for global
                    researchers
                  </li>
                  <li>
                    <strong>iTunes Store:</strong> Music/video catalog
                    special-purpose DB
                  </li>
                </ul>
              </HighlightBox>

              {/* Q13 */}
              <HighlightBox title="Q13: How to select a DBMS?" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Database size</li>
                  <li>Database cost</li>
                  <li>Concurrent users</li>
                  <li>Performance</li>
                  <li>Integration</li>
                  <li>Vendor reputation</li>
                </ul>
              </HighlightBox>

              {/* Q14 */}
              <HighlightBox title="Q14: Database applications?" color="green">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Linking company DB to Internet (Amazon, iTunes, eBay)</li>
                  <li>
                    Data Warehouses: Collects business info from multiple
                    sources
                  </li>
                  <li>
                    Data Mining: Automated discovery of patterns and trends
                  </li>
                  <li>
                    Predictive Analysis: Combines historical data and
                    assumptions to forecast outcomes
                  </li>
                  <li>
                    Business Intelligence: Timely info for strategy, tactics,
                    operations
                  </li>
                  <li>
                    Distributed Databases: Data spread across multiple connected
                    databases
                  </li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* MIS & DSS Section */}
        {activeSection === "mis" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                MIS & DSS Q&A
              </h2>

              {/* Q1 */}
              <HighlightBox
                title="Q1: What is a Management Information System (MIS)?"
                color="blue"
              >
                <p>
                  A: An MIS is an integrated collection of people, procedures,
                  databases, and devices that provides managers and decision
                  makers with information to help achieve organizational goals.
                  It gives competitive advantage by providing the right
                  information to the right people, in the right format, at the
                  right time.
                </p>
              </HighlightBox>

              {/* Q2 */}
              <HighlightBox
                title="Q2: What are the inputs and outputs of an MIS?"
                color="green"
              >
                <p>
                  <strong>Inputs:</strong> Internal: Supply chain info, TPS and
                  ERP systems, related databases. External: Customers,
                  suppliers, competitors, stakeholders, Internet, and other
                  sources.
                </p>
                <p>
                  <strong>Outputs:</strong> Collection of reports
                </p>
              </HighlightBox>

              {/* Q3 */}
              <HighlightBox
                title="Q3: What are the main functions of an MIS?"
                color="yellow"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Improve decision-making – provides standard and custom
                    reports
                  </li>
                  <li>Use internal data stored in computer systems</li>
                  <li>
                    Provide connectivity – better communication across the
                    organization
                  </li>
                  <li>
                    Improve efficiency – helps managers perform tasks faster,
                    improving productivity
                  </li>
                </ul>
              </HighlightBox>

              {/* Q4 */}
              <HighlightBox title="Q4: What are the types of MIS?" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Financial MIS</li>
                  <li>Manufacturing MIS</li>
                  <li>Marketing MIS</li>
                  <li>Human Resource MIS (HRMIS)</li>
                  <li>
                    Other MIS: Accounting, GIS (Geographic Information Systems)
                  </li>
                </ul>
              </HighlightBox>

              {/* Q5 */}
              <HighlightBox
                title="Q5: What are the stages of decision-making in MIS?"
                color="green"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Intelligence Stage: Identify and define problems or
                    opportunities
                  </li>
                  <li>Design Stage: Develop alternative solutions</li>
                  <li>Choice Stage: Select the best course of action</li>
                  <li>
                    Problem Solving: Goes beyond decisions, includes
                    implementation
                  </li>
                  <li>Implementation Stage: Put the solution into effect</li>
                  <li>Monitoring Stage: Evaluate implementation outcomes</li>
                </ul>
              </HighlightBox>

              {/* Q6 */}
              <HighlightBox
                title="Q6: Difference between programmed and non-programmed decisions?"
                color="yellow"
              >
                <p>
                  <strong>Programmed Decision:</strong> Made using rules,
                  procedures, or quantitative methods (Ex: reorder products when
                  inventory is low)
                </p>
                <p>
                  <strong>Non-programmed Decision:</strong> Deals with unusual
                  or exceptional situations (Ex: responding to an economic
                  crisis)
                </p>
              </HighlightBox>

              {/* Q7 */}
              <HighlightBox
                title="Q7: What is a Decision Support System (DSS)?"
                color="blue"
              >
                <p>
                  A computerized program used to support determinations,
                  judgments, and courses of action in an organization. Provides
                  interactive analysis for decision-making.
                </p>
              </HighlightBox>

              {/* Q8 */}
              <HighlightBox
                title="Q8: What are the characteristics of a DSS?"
                color="green"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>Rapid access to information</li>
                  <li>Handle large data from different sources</li>
                  <li>Flexible reporting and presentation</li>
                  <li>Textual and graphical orientation</li>
                  <li>Perform complex analysis using advanced software</li>
                </ul>
              </HighlightBox>

              {/* Q9 */}
              <HighlightBox
                title="Q9: Main components of a DSS?"
                color="yellow"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>Database: Stores all relevant data</li>
                  <li>Dialogue Manager: UI for easy access and manipulation</li>
                  <li>
                    Model Base: Provides models for decision-making (Ex:
                    spreadsheets, statistical tools)
                  </li>
                </ul>
              </HighlightBox>

              {/* Q10 */}
              <HighlightBox
                title="Q10: How does DSS differ from MIS?"
                color="blue"
              >
                <p>
                  DSS focuses on specific decisions and provides interactive
                  analysis, while MIS provides routine reports for operational
                  management.
                </p>
              </HighlightBox>

              {/* Q11 */}
              <HighlightBox
                title="Q11: What is an Executive Support System (ESS)?"
                color="green"
              >
                <p>
                  Specialized DSS used to assist senior executives, including
                  hardware, software, data, procedures, and people.
                </p>
              </HighlightBox>

              {/* Q12 */}
              <HighlightBox
                title="Q12: Characteristics and capabilities of ESS?"
                color="yellow"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>Tailored to individual executives</li>
                  <li>Easy to use</li>
                  <li>Supports external data</li>
                  <li>Helps in uncertain situations</li>
                  <li>Future-oriented and linked to business processes</li>
                  <li>
                    Capabilities: Support defining overall vision, strategic
                    planning, organizing, control, crisis management
                  </li>
                </ul>
              </HighlightBox>

              {/* Q13 */}
              <HighlightBox
                title="Q13: What is a Knowledge Management System (KMS)?"
                color="blue"
              >
                <p>
                  An organized collection of people, procedures, software,
                  databases, and devices used to create, store, share, and use
                  organizational knowledge.
                </p>
                <p>Types of Knowledge:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Explicit Knowledge: Measurable, documented (Ex: training
                    materials)
                  </li>
                  <li>
                    Tacit Knowledge: Hard to measure, informal (Ex: leadership
                    skills)
                  </li>
                </ul>
              </HighlightBox>

              {/* Q14 */}
              <HighlightBox
                title="Q14: Who are the personnel in a KMS?"
                color="green"
              >
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Data Workers: Secretaries, admin assistants, bookkeepers
                  </li>
                  <li>
                    Knowledge Workers: Professionals creating, using, and
                    sharing knowledge (Ex: researchers, writers, educators)
                  </li>
                </ul>
              </HighlightBox>

              {/* Q15 */}
              <HighlightBox
                title="Q15: What is an Expert System?"
                color="yellow"
              >
                <p>
                  Hardware and software that stores knowledge and makes
                  inferences similar to a human expert.
                </p>
                <p>When to Use:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Capture rare human expertise</li>
                  <li>Solve problems not easily solved with programming</li>
                  <li>
                    Provide expertise across locations or hazardous environments
                  </li>
                </ul>
                <p>Components:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Knowledge Base: Stores data, rules, cases</li>
                  <li>Inference Engine: Generates answers and predictions</li>
                  <li>Explanation Facility: Explains conclusions</li>
                  <li>
                    Knowledge Acquisition Facility: Captures knowledge
                    efficiently
                  </li>
                </ul>
                <p>
                  Applications: Credit analysis, medical diagnosis, employee
                  evaluation, marketing, repair and maintenance, tracking
                  threats
                </p>
              </HighlightBox>
            </SectionCard>
          </div>
        )}
      </div>
    </div>
  );
}
