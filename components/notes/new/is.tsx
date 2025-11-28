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
          <h4 className="text-sm sm:text-base font-semibold mb-2">{title}</h4>
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
                What is Data, Information, Knowledge & Process
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Data:</strong> Raw facts
                </li>
                <li>
                  <strong>Information:</strong> A collection of facts organized
                  in such a way that they have additional value beyond the value
                  of the individual facts
                </li>
                <li>
                  <strong>Knowledge:</strong> The awareness and understanding of
                  a set of information and ways that information can be made
                  useful to support a specific task or reach a decision
                </li>
                <li>
                  <strong>Process:</strong> A set of logically related tasks
                  performed to achieve a defined outcome
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Process of Transforming Data into Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Data is transformed into information through various processing
                activities that add value and meaning to raw facts.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Characteristics of Valuable Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Information should possess certain characteristics to be
                considered valuable for decision-making and operations.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What is a System?
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  A set of interrelated components that work together to meet an
                  objective.
                </li>
                <li>
                  A set of elements or components that interact to accomplish
                  goals.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Components of a System
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A system's four components consist of:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Input</li>
                <li>Processing</li>
                <li>Output</li>
                <li>Feedback (Optional)</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                System Categories
              </h2>

              <Subsection title="Open System">
                <p className="mb-2">
                  Human body. It requires the inputs of food and oxygen to
                  continue to function, and it outputs carbon dioxide and other
                  waste, which must be handled by other systems.
                </p>
                <p>
                  An open system is a system that has flows of information,
                  energy, and/or matter between the system and its environment,
                  and which adapts to the exchange.
                </p>
              </Subsection>

              <Subsection title="Closed System">
                <p className="mb-2">
                  Earth, as a whole, can be considered a closed system, as
                  nothing generally enters or leaves it except the energy from
                  the sun.
                </p>
                <p>
                  A closed system is a system that is completely isolated from
                  its environment.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What is an Information System?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A set of interrelated components that collect, manipulate,
                store, and disseminate data and information and provide a
                feedback mechanism to meet an objective.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Input, Processing, Output, Feedback
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Input:</strong> The activity of gathering and
                  capturing raw data
                </li>
                <li>
                  <strong>Processing:</strong> means converting or transforming
                  data into useful outputs
                </li>
                <li>
                  <strong>Output:</strong> involves producing useful
                  information, usually in the form of documents and reports
                </li>
                <li>
                  <strong>Feedback:</strong> Information from the system that is
                  used to make changes to input or processing activities
                </li>
                <li>
                  <strong>FORCASTING:</strong> Predicting future events to avoid
                  problems.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Information System Categories
              </h2>

              <Subsection title="Manual IS">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Entire process is done via manual way.</li>
                  <li>Ex: Old libraries</li>
                </ul>
              </Subsection>

              <Subsection title="Computer Based IS (CBIS)">
                <p className="mb-2">
                  CBIS is a single set of hardware, software, databases,
                  telecommunications, people, and procedures that are configured
                  to collect, manipulate, store, and process data into
                  information.
                </p>
                <p>IS that is processed via computer systems.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Component of CBIS
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Hardware:</strong> Computer equipment used to perform
                  input, processing, and output activities
                </li>
                <li>
                  <strong>Software:</strong> The computer programs that govern
                  the operation of the computer
                </li>
                <li>
                  <strong>Database:</strong> An organized collection of facts
                  and information
                </li>
                <li>
                  <strong>Telecommunications:</strong> The electronic
                  transmission of signals for communications, which enables
                  organizations to carry out their processes and tasks through
                  effective computer networks
                </li>
                <li>
                  <strong>Networks:</strong> Computers and equipment that are
                  connected in a building, around the country, or around the
                  world to enable electronic communications
                </li>
                <li>
                  <strong>Internet:</strong> The world's largest computer
                  network, consisting of thousands of interconnected networks,
                  all freely exchanging information
                </li>
                <li>
                  <strong>People</strong>
                </li>
                <li>
                  <strong>Procedures:</strong> Include the strategies, policies,
                  methods, and rules for using the CBIS, including the
                  operation, maintenance, and security of the computer
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Global Challenges in IS
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Cultural challenges:</strong> Countries and regional
                  areas have their own cultures and customs that can
                  significantly affect individuals and organizations involved in
                  global trade.
                </li>
                <li>
                  <strong>Language challenges:</strong> Language differences can
                  make it difficult to translate exact meanings from one
                  language to another.
                </li>
                <li>
                  <strong>Time and distance challenges:</strong> Time and
                  distance issues can be difficult to overcome for individuals
                  and organizations involved with global trade in remote
                  locations. Large time differences make it difficult to talk to
                  people on the other side of the world. With long distance, it
                  can take days to get a product, a critical part, or a piece of
                  equipment from one location to another location.
                </li>
                <li>
                  <strong>Infrastructure challenges:</strong> High-quality
                  electricity and water might not be available in certain parts
                  of the world. Telephone services, Internet connections, and
                  skilled employees might be expensive or not readily available.
                </li>
                <li>
                  <strong>Currency challenges:</strong> The value of different
                  currencies can vary significantly over time, making
                  international trade more difficult and complex.
                </li>
                <li>
                  <strong>Product and service challenges:</strong> Traditional
                  products that are physical or tangible, such as an automobile
                  or bicycle, can be difficult to deliver to the global market.
                  However, electronic products (e-products) and electronic
                  services (e-services) can be delivered to customers
                  electronically, over the phone, through networks, through the
                  Internet, or by other electronic means. Software, music,
                  books, manuals, and advice can all be delivered globally and
                  over the Internet.
                </li>
                <li>
                  <strong>Technology transfer issues:</strong> Most governments
                  don't allow certain military-related equipment and systems to
                  be sold to some countries. Even so, some believe that foreign
                  companies are stealing intellectual property, trade secrets,
                  and copyrighted materials, and counter feiting products and
                  services.
                </li>
                <li>
                  <strong>State, regional, and national laws:</strong> Each
                  state, region, and country has a set of laws that must be
                  obeyed by citizens and organizations operating in the country.
                  These laws can deal with a variety of issues, including trade
                  secrets, patents, copyrights, protection of personal or
                  financial data, privacy, and much more. Laws restricting how
                  data enters or exits a country are often called transborder
                  data-flow laws. Keeping track of these laws and incorporating
                  them into the procedures and computer systems of multinational
                  and transnational organizations can be very difficult and time
                  consuming, requiring expert legal advice.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Organization
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  A formal collection of people and other resources established
                  to accomplish a set of goals
                </li>
                <li>Types: For-profit , Non-profit</li>
                <li>
                  An organization is a system, which means that it has inputs,
                  processing mechanisms, outputs, and feedback
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Information systems support and work within all parts of an
                organizational process. Input to the process subsystem can come
                from internal and external sources. Just prior to entering the
                subsystem, data is external. After it enters the subsystem, it
                becomes internal. Likewise , goods and services can be output to
                either internal or external systems.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Organizational Structures
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Organizational subunits and the way they relate to the overall
                organization. An organization's structure depends on its goals
                and approach to management, and can affect how it views and uses
                information systems.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Types: Traditional, project, team, and virtual
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Traditional Organizational Structure
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Called a hierarchical structure</li>
                <li>
                  Managerial pyramid where the hierarchy of decision making and
                  authority flows from the strategic management at the top down
                  to operational management and non-management employees
                </li>
                <li>So many levels</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Compared to lower levels, the strategic level, including the
                president of the company and vice presidents, has a higher
                degree of decision authority, more impact on corporate goals,
                and more unique problems to solve.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Flat Organizational Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                An organizational structure with a reduced number of management
                layers
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Project Organizational Structures
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Centered on major products or services. Ex: Baby products
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Team Organizational Structures
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Centered on work teams or groups
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Virtual Organizational Structure and Collaborative Work
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Employs individuals, groups, or complete business units in
                geographically dispersed areas that can last for a few weeks or
                years, often requiring telecommunications or the Internet. Ex:
                WFH
              </p>
            </SectionCard>
          </div>
        )}

        {/* E-Commerce Section */}
        {activeSection === "ecommerce" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                What is a Business Information System?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Business Information Systems is a field that involves
                information, technological systems, and people. This field is
                both applied and managerial and uses the tools, techniques, and
                concepts of various disciplines (such as computer science and
                management) to find solutions to a wide range of business
                problems.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Business Information Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Levels of information systems within an organization:
              </p>

              <Subsection title="Knowledge Management System">
                <p>
                  KMS is a systems that an organization implements to ensure a
                  continuous flow of new and updated knowledge into the company
                  and its processes.
                </p>
              </Subsection>

              <Subsection title="Management Information System">
                <p className="mb-2">
                  The management information system provides aid to managers by
                  automating different processes that were initially done
                  manually.
                </p>
                <p>
                  Business activities like business performance tracking and
                  analysis, making business decisions, making a business plan,
                  and defining workflow. It also provides feedback to the
                  managers by analyzing the roles and responsibilities.
                </p>
              </Subsection>

              <Subsection title="Decision Support System">
                <p className="mb-2">
                  A decision support system is an information system that
                  analyses business data and other information related to the
                  enterprise to offer automation in decision-making or
                  problem-solving.
                </p>
                <p>
                  A manager uses it in times of adversities arising during the
                  operation of the business. Generally, the decision support
                  system is used to collect information regarding revenue, sales
                  figures or inventory. It is used across different industries,
                  and the decision support system is a popular information
                  system.
                </p>
              </Subsection>

              <Subsection title="Enterprise System">
                <p>
                  The systems that span functional areas, focus on executing
                  business processes across the organization.
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                E-Business
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  The conduct of business on the internet, covers a wide range
                  of business processes, from the buying and selling
                </li>
                <li>
                  Using information systems and the Internet to perform all
                  business related tasks and functions
                </li>
                <li>Examples: Amazon, eBay</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Electronic commerce is the conducting of business activities
                (e.g., distribution, buying, selling, marketing, and servicing
                of products or services) electronically over computer networks
                such as the Internet, extranets, and corporate networks.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Why this conversion?
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Paper-based</li>
                <li>Time-consuming</li>
                <li>Inconvenient for customers</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Advantage of E-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Low cost</li>
                <li>Flexibility & speed</li>
                <li>Accessibility</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Disadvantages of E-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Security</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                E-Commerce Process
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Any e-commerce system:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  User's ability to search for and identify items for sale
                </li>
                <li>Select those items and negotiate prices,</li>
                <li>Terms of payment, delivery date</li>
                <li>Send an order to the vendor to purchase the items</li>
                <li>Pay for the product or service</li>
                <li>Obtain product delivery</li>
                <li>Receive after-sales support</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of E-Commerce
              </h2>

              <Subsection title="Business-to-Business (B2B)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    A subset of e-commerce where all the participants are
                    organizations
                  </li>
                  <li>
                    Useful tool for connecting business partners in a virtual
                    supply chain to cut resupply times and reduce costs
                  </li>
                  <li>
                    Examples: HP & Intel, Alibaba.com, Mallory Safety & Supply
                    (www.mallory.com)
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Business-to-Consumer (B2C)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    A form of e-commerce in which customers deal directly with
                    an organization and avoid intermediaries
                  </li>
                  <li>
                    Eliminates intermediates → Reduce costs and inefficiencies
                    out of the supply chain and can lead to higher profits and
                    lower prices for consumers
                  </li>
                  <li>
                    The elimination of intermediate organizations between the
                    producer and the consumer is called DISINTERMEDIATION
                  </li>
                  <li>Examples: Daraz, Amazon</li>
                </ul>
              </Subsection>

              <Subsection title="Consumer-to-Consumer (C2C)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Involves consumers selling directly to other consumers
                  </li>
                  <li>Selling items on auction Web sites!</li>
                  <li>Examples: E-Bay</li>
                </ul>
              </Subsection>

              <Subsection title="M-Commerce">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    Involves using wireless handheld devices like cellphones and
                    tablets to conduct commercial transactions online, including
                    the purchase and sale of products, online banking, and
                    paying bills.
                  </li>
                  <li>
                    Types: Mobile shopping, Mobile banking, Mobile payments
                  </li>
                  <li>
                    Examples: Daraz mobile application, ikman.lk mobile app
                  </li>
                </ul>
              </Subsection>

              <Subsection title="F-Commerce">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    F-commerce refers to conducting online business activities
                    on a Facebook page or Facebook application
                  </li>
                  <li>Social shopping</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                e-Government
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The use of information and communications technology to simplify
                the sharing of information, speed formerly paper-based
                processes, and improve the relationship between citizens and
                government
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">Types:</p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>
                  Government-to-consumer (G2C) → CEB, WB , Immigration
                  department
                </li>
                <li>
                  Government-to-business (G2B) → Income-tax , Supply-chain &
                  procurement
                </li>
                <li>
                  Government-to-government (G2G) → Immigration department,
                  GeoData.gov
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Multistage Model for E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A successful e-commerce system must address the many stages that
                consumers experience in the sales life cycle. Multistage Model
                for E-Commerce (B2B and B2C)
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                Steps:
              </h3>
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
                <li>Overcoming consumers' lack of trust</li>
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
                E-commerce requires robust technology infrastructure including
                hardware, software, networks, and security systems to support
                online transactions and business operations.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Web 2.0 and Social Media
              </h2>

              <Subsection title="The World Wide Web (WWW)">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    A collection of tens of millions of server computers that
                    work together as one in an Internet service using hyperlink
                    technology to provide information to billions of users
                  </li>
                  <li>
                    Hyperlink: Highlighted text or graphics in a Web document
                    that, when clicked, opens a new Web page or section of the
                    same page containing related content
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Web 2.0">
                <ul className="list-disc ml-5 space-y-1">
                  <li>
                    The Web as a computing platform that supports software
                    applications and the sharing of information between users
                  </li>
                  <li>One directional websites → Two directional websites</li>
                  <li>Display and collect information</li>
                  <li>
                    The original Web, now referred to as Web 1.0, provided a
                    platform for businesses' to publish information for the
                    general public to view
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Rich Internet Application">
                <p>
                  Software that has the functionality and complexity of
                  traditional application software, but does not require local
                  installation and runs in a Web browser. Examples: Zoom, Online
                  C compilers
                </p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Social Media Types
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Social media:</strong> Users can post information
                  about their interests and find like-minded people. (FB)
                </li>
                <li>
                  <strong>Microblogging sites:</strong> People can post thoughts
                  and ideas throughout the day for friends to read. (Twitter)
                </li>
                <li>
                  <strong>Social bookmarking:</strong> Allow users to pool their
                  votes to determine what online news stories and Web pages are
                  most interesting each moment of the day. (Digg and
                  del.icio.us)
                </li>
                <li>
                  <strong>Epinions:</strong> Allow consumers to voice their
                  opinions about products
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Internet And Web Applications
              </h2>
              <ol className="list-decimal ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Search Engines and Web Research</li>
                <li>E-mail, Instant Messaging, and Video Chat</li>
                <li>
                  Telnet, SSH, and FTP
                  <ul className="list-disc ml-5 mt-1">
                    <li>
                      Telnet: command-line interface that allows the user to
                      work on a remote server directly
                    </li>
                    <li>
                      SSH: Telnet functionality through a more secure connection
                    </li>
                    <li>
                      FTP: File transfers between a host and a remote computer
                    </li>
                  </ul>
                </li>
                <li>Web Log (Blog), Video Log (Vlog), and Podcasting</li>
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
              <p className="text-xs sm:text-sm text-gray-700">
                Relies on the use of mobile, wireless devices, such as personal digital assistants, cell phones, and smartphones, to place orders and conduct business. Ex: Daraz mobile application
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Mobile Banking:</strong> Using a mobile website or application to perform all banking functions.</li>
                <li><strong>Mobile Ticketing and Booking:</strong> Making bookings and receiving tickets on the mobile. The digital ticket or boarding pass is sent directly to your phone after you make the payment from it.</li>
                <li><strong>E-bills:</strong> This includes mobile vouchers, mobile coupons to be redeemed and even loyalty points or cards system.</li>
                <li><strong>Auctions:</strong> Online auctions having now been developed to be made available via mobile phones as well.</li>
                <li>Stock Market Reports and even stock market trading over mobile applications.</li>
                <li>in-app purchasing , virtual marketplace</li>
                <li>Mobile Advertising</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                M-Commerce Web Sites
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Retailers have established special Web sites for users of mobile devices
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Common Benefits of Mobile Commerce
              </h2>
              
              <Subsection title="1) Better overall customer experience">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Mobility:</strong> Although desktop computers are portable, it's unlikely that a shopper will always have a laptop on-hand. But considering most people never leave the house without a smartphone, m-commerce makes online shopping far more convenient.</li>
                  <li><strong>Reachability:</strong> With the ability to send customers SMS push notifications, online retailers can reach a wider range of customers even when they're on the go.</li>
                  <li><strong>Location-tracking:</strong> M-commerce apps and online stores can pinpoint user locations using GPS technology and Wi-Fi, which helps provide content that is personalized and location-specific.</li>
                </ul>
              </Subsection>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700 mt-3">
                <li>2) Phenomenal growth potential</li>
                <li>3) Variety of payment options</li>
                <li>4) Omni channel experience - Refers to selling both in-store and online through multiple channels</li>
                <li>5) Reduce Costs</li>
                <li>6) Speed the Flow of Goods and Information</li>
                <li>7) Increase Accuracy</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Disadvantages of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Constant need for optimization</li>
                <li>All payment methods are not available for all - Ex: Sri-Lanka : Pay-pal</li>
                <li>Easier for customers to compare prices</li>
                <li>Customer security</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Global Challenges for Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Cultural Challenges (USA, Europe & Japan, Sri Lanka)</li>
                <li>Language Challenges</li>
                <li>Time and Distance Challenges</li>
                <li>Infrastructure Challenges</li>
                <li>Currency Challenges</li>
                <li>Product and Service Challenges</li>
                <li>State, Regional, and National Laws</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Threats of Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Security</strong></li>
                <li><strong>Theft of Intellectual Property</strong> - IP : Includes works of the mind such as books, films, music, processes, and software, which are distinct somehow and are owned and/or created by a single entity</li>
                <li><strong>Fraud</strong></li>
                <li><strong>Threats to the Consumer Privacy</strong></li>
                <li><strong>Lack of Internet Access</strong></li>
                <li><strong>Legal Jurisdiction</strong></li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                For Successful E-commerce & M-commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Defining the Web Site Functions</li>
                <li>Establishing a Web Site</li>
                <li>Building Traffic to Your Web Site</li>
                <li>Maintaining and Improving Your Web Site</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Technology Infrastructure for M-Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Mobile device</li>
                <li>Internet access & speed</li>
                <li>Secured connection/network & communication</li>
                <li>Electronic Payment Systems</li>
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
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A system central to the organization that ensures information can be shared across:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>All business functions</li>
                <li>All levels of management</li>
                <li>to support the running and managing of a business</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Enterprise Resource Planning Systems (ERP) that support supply-chain processes, such as Order Processing, Inventory Management, Purchasing, Customer Relationship Management which support sales, marketing, and customer service related processes.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Transaction Processing Systems (TPS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Capture and process the detailed data necessary to update records about the fundamental business operations of the organization.
              </p>
              
              <HighlightBox color="blue">
                <p className="mb-2"><strong>Business Operation:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Order entry</li>
                  <li>Inventory control</li>
                  <li>Payroll</li>
                  <li>Accounts payable & receivable</li>
                </ul>
              </HighlightBox>

              <HighlightBox color="green">
                <p className="mb-2"><strong>Inputs:</strong> Basic business transactions→ Customer Orders, Purchase Orders, Receipts, Time Cards, Invoices, And Customer Payments</p>
                <p className="mb-2"><strong>Processing:</strong> Data Collection, Data Editing, Data Correction, Data Manipulation, Data Storage, Document Production</p>
                <p><strong>Output:</strong> Organization's records are updated to reflect the status of the operation at the time of the last processed transaction</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Batch Processing System
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A form of data processing where business transactions are accumulated over a period of time and prepared for processing as a single unit or batch.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Online Transaction Processing (OLTP)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A form of data processing where each transaction is processed immediately, without the delay of accumulating transactions into a batch. Number of transactions occur concurrently.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Ex:- Online Banking, Online Shopping
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Which one is the BEST?
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>TPS applications do not always run using online processing</li>
                <li>For many applications, batch processing is more appropriate and cost-effective</li>
                <li>Payroll transactions and billing are typically done via batch processing</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                TPS Objectives
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Capture, process, and update databases of business data required to support routine business activities</li>
                <li>Ensure that the data is processed accurately and completely</li>
                <li>Avoid processing fraudulent transactions</li>
                <li>Produce timely user responses and reports</li>
                <li>Reduce clerical and other labor requirements</li>
                <li>Help improve customer service</li>
                <li>Achieve competitive advantage</li>
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
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The process of data collection, data editing, data correction, data manipulation, data storage, and document production:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Data Collection:</strong> Capturing and gathering all data necessary to complete the processing of transactions</li>
                <li><strong>Data Editing:</strong> Checking data for validity and completeness - Names must be alphabetic</li>
                <li><strong>Data Correction:</strong> Reentering data that was not typed or scanned properly</li>
                <li><strong>Data Manipulation:</strong> Performing calculations and other data transformations related to business transactions</li>
                <li><strong>Data Storage:</strong> Updating one or more databases with new transactions</li>
                <li><strong>Document Production:</strong> The process of generating output records and reports</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Control And Management Issues
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Disaster recovery plan:</strong> A formal plan describing the actions that must be taken to restore computer operations and services in the event of a disaster</li>
                <li><strong>Transaction processing system audit:</strong> A check of a firm's TPS systems to prevent accounting irregularities and/or loss of data privacy</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Enterprise Resource Planning (ERP)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Enterprise resource planning (ERP) is a platform companies use to manage and integrate the essential parts of their businesses.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                An ERP integrates business processes and the ERP database.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Advantages of ERP Systems
              </h2>
              
              <Subsection title="Increased global competition">
                <p>Organizations face increased competition in global markets.</p>
              </Subsection>

              <Subsection title="Improved access to data for operational decision making">
                <p className="mb-2">ERP systems operate via an integrated database, using one set of data to support all business functions. The systems can support decisions on optimal sourcing or cost accounting, for instance, for the entire enterprise or business units from the start, rather than gathering data from multiple business functions and then trying to coordinate that information manually or reconciling data with another application.</p>
                <p>The result is an organization that looks seamless, not only to the outside world but also to the decision makers.</p>
              </Subsection>

              <Subsection title="Elimination of inefficient or outdated systems infrastructure">
                <p className="mb-2">Adoption of an ERP system enables an organization to eliminate many separate systems and replace them with a single, integrated set of applications for the entire enterprise. In many cases, these systems are decades old, the original developers are long gone, and the systems are poorly documented. As a result, the systems are extremely difficult to fix when they break, and adapting them to meet new business needs takes too long. They become an anchor around the organization that keeps it from moving ahead and remaining competitive.</p>
                <p>An ERP system helps match the capabilities of an organization's information systems to its business needs even as these needs evolve.</p>
              </Subsection>

              <Subsection title="Improvement of work processes, and technology standardization">
                <p>ERP vendors do considerable research to define the best business processes. They gather requirements of leading companies within the same industry and combine them with research findings from research institutions and consultants. The individual application modules included in the ERP system are then designed to support these best practices.</p>
              </Subsection>

              <Subsection title="Upgrade of technology infrastructure">
                <p>When implementing an ERP system, an organization has an opportunity to upgrade the information technology (hardware, operating systems, databases, etc.) that it uses.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Disadvantages of ERP Systems
              </h2>

              <Subsection title="Expense and time in implementation">
                <p>Getting the full benefits of ERP takes time and money. Although ERP offers many strategic advantages by streamlining a company's TPSs, large firms typically need three to five years and spend tens of millions of dollars to implement a successful ERP system.</p>
              </Subsection>

              <Subsection title="Difficulty implementing change">
                <p>In some cases, a company has to radically change how it operates to conform to the ERP's work processes—its best practices. These changes can be so drastic to long-time employees that they retire or quit rather than go through the change. This exodus can leave a firm short of experienced workers.</p>
              </Subsection>

              <Subsection title="Difficulty integrating with other systems">
                <p>Most companies have other systems that must be integrated with the ERP system, such as financial analysis programs, e-commerce operations, and other applications. Many companies have experienced difficulties making these other systems operate with their ERP system. Other companies need additional software to create these links.</p>
              </Subsection>

              <Subsection title="Risks in using one vendor">
                <p className="mb-2">The high cost to switch to another vendor's ERP system makes it extremely unlikely that a firm will do so. After a company has adopted an ERP system, the vendor has less incentive to listen and respond to customer concerns. The high cost to switch also increases risk—in the event the ERP vendor allows its product to become outdated or goes out of business.</p>
                <p>Selecting an ERP system involves not only choosing the best software product but also the right long-term business partner.</p>
              </Subsection>

              <Subsection title="Risk of implementation failure">
                <p>Implementing an ERP system for a large organization is extremely challenging and requires tremendous amounts of resources, the best IS and businesspeople, and plenty of management support. Unfortunately, large ERP installations occasionally fail, and problems with an ERP implementation can require expensive solutions.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Production and Supply Chain Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                ERP systems follow a systematic process for developing a production plan that draws on the information available in the ERP system database.
              </p>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                The process of Production & Supply Chain Management:
              </h3>
              <ol className="list-decimal ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Sales forecasting to develop an estimate of future customer demand</li>
                <li>The sales and operations plan (S&OP) takes demand and current inventory levels into considerations and determines the specific product items that need to be produced and when to meet the forecast future demand</li>
                <li>Demand management refines the production plan by determining the amount of weekly or daily production needed to meet the demand for individual products</li>
                <li>Detailed scheduling uses the production plan defined by the demand management process to develop a detailed production schedule specifying production scheduling details, such as which item to produce first and when production should be switched from one item to another</li>
                <li>Materials requirement planning determines the amount and timing for placing raw material orders with suppliers</li>
                <li>Purchasing uses the information from materials requirement planning to place purchase orders for raw materials and transmit them to qualified suppliers</li>
                <li>Production uses the detailed schedule to plan the details of running and staffing the production operation</li>
              </ol>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Customer Relationship Management (CRM)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A system that helps a company manage all aspects of customer encounters, including marketing and advertising, sales, customer service after the sale, and programs to retain loyal customers.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                The goal of CRM is to understand and anticipate the needs of current and potential customers to increase customer retention and loyalty while optimizing the way that products and services are sold.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Key Features of a CRM System
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Contact management:</strong> The ability to track data on individual customers and sales leads and access that data from any part of the organization</li>
                <li><strong>Sales management:</strong> The ability to organize data about customers and sales leads and then to prioritize the potential sales opportunities and identify appropriate next steps</li>
                <li><strong>Customer support:</strong> The ability to support customer service reps so that they can quickly, thoroughly, and appropriately address customer requests and resolve customers' issues while at the same time collecting and storing data about those interactions</li>
                <li><strong>Marketing automation:</strong> The ability to capture and analyze all customer interactions, generate appropriate responses, and gather data to create and build effective and efficient marketing campaigns</li>
                <li><strong>Analysis:</strong> The ability to analyze customer data to identify ways to increase revenue and decrease costs, identify the source of the firm's "best customers," and determine how to retain them and find even more of them</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Key Challenges of Implementing Enterprise Systems
              </h2>

              <Subsection title="Finding the right system that suits your organization">
                <p>Before you even contact any providers, do an honest appraisal of your business needs and challenges. Ask providers to respond on how they can meet your needs. It's important that they have experience within your industry, and that you can be as honest as possible about any future changes in direction that might alter your requirements.</p>
              </Subsection>

              <Subsection title="Resistance to change">
                <p className="mb-2">Those who hold influence within the current infrastructure may fear losing their power, and long-serving staff may worry that they have trouble adapting to a new system. If change is not communicated effectively in an organization, or previous implementations have failed, there will be a general distrust of anything new.</p>
                <p>The answer to this common issue is consultation. Communicating to all staff members during the process for your ERP project, they may even have valuable input.</p>
              </Subsection>

              <Subsection title="Commitment from managers">
                <p>Top-level support for your ERP project is required, but don't forget about junior and middle managers. In larger organizations where staff don't have regular access to senior figures, their immediate line manager and colleagues are often instrumental in forming their opinions on whether something is or isn't a good thing. If managers at all levels are enthused about your plans, it will help in convincing others to follow.</p>
              </Subsection>

              <Subsection title="System training">
                <p>Ensure that your project management team builds in time for training in groups before the launch date. Allowing staff members to ask questions during and making it interactive, can help create reassurance that every member of staff, regardless of seniority, are going on the same journey.</p>
              </Subsection>

              <Subsection title="Expectation management">
                <p>Staff will wrongly assume that the new system can solve every problem the organization has. ERP projects are often done in stages - always be upfront about what each phase entails, how long it will take and if need be and what is outside the project scope.</p>
              </Subsection>

              <Subsection title="Inadequate testing">
                <p className="mb-2">It's possible to get the business requirements and expectations spot on, but lack of testing often leads to a downfall. Let teams test the functionality they will be using daily, and let them feedback, it will help reduce the amount of resistance and assist them in adjusting to the change.</p>
                <p>Adjust the process if it is not suitable, do not make changes to imitate the old processes, but consider how processes can be improved using your new system.</p>
              </Subsection>
            </SectionCard>
          </div>
        )}
        {/* MIS & DSS Section */}
        {activeSection === "mis" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Management Information System
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Integrated collection of people, procedures, databases, and
                devices that provides managers and decision makers with
                information to help achieve organizational goals.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                MISs can give the competitive advantage by providing the right
                information to the right people in the right format and at the
                right time.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                MIS Inputs & Outputs
              </h2>

              <HighlightBox title="Inputs:" color="blue">
                <p className="mb-2">
                  <strong>Internal:</strong> Supply chain information, TPS and
                  ERP systems and related databases
                </p>
                <p>
                  <strong>External:</strong> Customers, suppliers, competitors,
                  and stakeholders, whose data is not already captured by the
                  TPS, as well as other sources, such as the Internet
                </p>
              </HighlightBox>

              <HighlightBox title="Outputs:" color="green">
                <p>Collection of reports</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                MIS Functions
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Improve Decision making</strong> - Provide reports
                  with fixed and standard formats. Produce hard-copy and
                  soft-copy reports. Allow users to develop their own custom
                  reports.
                </li>
                <li>Use internal data stored in the computer system.</li>
                <li>
                  <strong>Provide connectivity:</strong> MIS provides managers
                  with better connectivity with the rest of the organization.
                </li>
                <li>
                  <strong>Improve efficiency:</strong> MIS helps managers to
                  conduct their tasks with greater ease and with better
                  efficiency. This reflects in better productivity for the
                  company.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                MIS Types
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Financial MIS</li>
                <li>Manufacturing MIS</li>
                <li>Marketing MIS</li>
                <li>Human Resource MIS (HRMIS)</li>
                <li>
                  Other MIS: Accounting, GIS (Geographic Information Systems)
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Decision Making And Problem Solving
              </h2>

              <Subsection title="Decision Making Process Stages">
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    <strong>Intelligence Stage:</strong> The first stage of
                    decision making, in which potential problems or
                    opportunities are identified and defined
                  </li>
                  <li>
                    <strong>Design Stage:</strong> The second stage of decision
                    making, in which alternative solutions to the problem are
                    developed
                  </li>
                  <li>
                    <strong>Choice Stage:</strong> The third stage of decision
                    making, which requires selecting a course of action
                  </li>
                  <li>
                    <strong>Problem Solving:</strong> A process that goes beyond
                    decision making to include the implementation stage
                  </li>
                  <li>
                    <strong>Implementation Stage:</strong> A stage of problem
                    solving in which a solution is put into effect
                  </li>
                  <li>
                    <strong>Monitoring Stage:</strong> The final stage of the
                    problem solving process, in which decision makers evaluate
                    the implementation
                  </li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Programmed Vs. Non-programmed Decisions
              </h2>

              <HighlightBox title="Programmed Decision" color="blue">
                <p className="mb-2">
                  A decision made using a rule, procedure, or quantitative
                  method
                </p>
                <p>
                  Ex: Ordering more products when inventory levels drop to
                  specified levels
                </p>
              </HighlightBox>

              <HighlightBox title="Non-programmed Decision" color="yellow">
                <p className="mb-2">
                  A decision that deals with unusual or exceptional situations
                </p>
                <p>Ex: When there is an economic crisis</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Information and Decision Support Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A decision support system (DSS) is a computerized program used
                to support determinations, judgments, and courses of action in
                an organization or a business.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Characteristics of a Decision Support System
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Provide rapid access to information.</li>
                <li>Handle large amounts of data from different sources.</li>
                <li>Provide report and presentation flexibility.</li>
                <li>Offer both textual and graphical orientation.</li>
                <li>
                  Perform complex, sophisticated analysis and comparisons using
                  advanced software packages.
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Components of a Decision Support System
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>The Database</strong>
                </li>
                <li>
                  <strong>Dialogue Manager:</strong> A UI that allows decision
                  makers to easily access and manipulate the DSS and to use
                  common business terms and phrases
                </li>
                <li>
                  <strong>Model Base:</strong> Part of a DSS that provides
                  decision makers access to a variety of models and assists them
                  in decision making
                  <ul className="list-disc ml-5 mt-1">
                    <li>
                      Ex: Financial (Spreadsheet), Statistical (SPSS), Graphical
                      (PowerPoint), Project Management(MS Project)
                    </li>
                  </ul>
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                A Comparison of DSS and MIS
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                DSS focuses on specific decisions and provides interactive
                analysis, while MIS provides routine reports for operational
                management.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Executive Support Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Specialized DSS that includes all hardware, software, data,
                procedures, and people used to assist senior-level executives
                within the organization.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Characteristics of an ESS
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Are tailored to individual executives</li>
                <li>Are easy to use</li>
                <li>Support the need for external data</li>
                <li>
                  Can help with situations that have a high degree of
                  uncertainty.
                </li>
                <li>Have a future orientation</li>
                <li>Are linked with value-added business processes</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Capabilities of Executive Support Systems
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Support for Defining an Overall Vision</strong>
                </li>
                <li>
                  <strong>Support for Strategic Planning</strong> - Strategic
                  Planning: Determining long-term objectives by analyzing the
                  strengths and weaknesses of the organization, predicting
                  future trends, and projecting the development of new product
                  lines
                </li>
                <li>
                  <strong>Support for Strategic Organizing and Staffing</strong>
                </li>
                <li>
                  <strong>Support for Strategic Control</strong>
                </li>
                <li>
                  <strong>Support for Crisis Management</strong>
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Knowledge Management Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                An organized collection of people, procedures, software,
                databases, and devices used to create, store, share, and use the
                organization's knowledge and experience.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                KMS can involve different types of knowledge:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Explicit knowledge:</strong> Can be measured and
                  documented in reports, papers, and rules. Ex: Training
                  materials
                </li>
                <li>
                  <strong>Tacit knowledge:</strong> Hard to measure and document
                  and typically is not objective or formalized. Ex: Leadership
                  Skills
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Personnel Involved in a KMS
              </h2>

              <Subsection title="Data workers">
                <p>
                  Secretaries, administrative assistants, bookkeepers, and
                  similar data-entry personnel are often called data workers.
                </p>
              </Subsection>

              <Subsection title="Knowledge workers">
                <p className="mb-2">
                  Are people who create, use, and disseminate knowledge. They
                  are usually professionals in science, engineering, or
                  business, and work in offices and belong to professional
                  organizations.
                </p>
                <p>
                  Other examples of knowledge workers include writers,
                  researchers, educators, and corporate designers.
                </p>
              </Subsection>
            </SectionCard>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Expert Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                An expert system consists of hardware and software that stores
                knowledge and makes inferences, similar to those of a human.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                When to Use Expert Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Sophisticated expert systems can be difficult, expensive, and
                time consuming to develop.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Capture and preserve irreplaceable human expertise.</li>
                <li>
                  Solve a problem that is not easily solved using traditional
                  programming techniques
                </li>
                <li>Develop a system more consistent than human experts</li>
                <li>
                  Provide expertise needed at a number of locations at the same
                  time or in a hostile environment that is dangerous to human
                  health
                </li>
                <li>Provide expertise that is expensive or rare</li>
                <li>Develop a solution faster than human experts can</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Components of Expert Systems
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>Knowledge base:</strong> Stores all relevant
                  information, data, rules, cases, and relationships used by the
                  expert system
                </li>
                <li>
                  <strong>Inference engine:</strong> Seeks information and
                  relationships from the knowledge base and provides answers,
                  predictions, and suggestions similar to the way a human expert
                  would
                </li>
                <li>
                  <strong>Explanation facility:</strong> Allows a user or
                  decision maker to understand how the expert system arrived at
                  certain conclusions or results
                </li>
                <li>
                  <strong>Knowledge acquisition facility:</strong> Provides
                  convenient and efficient means of capturing and storing all
                  the components of the knowledge base
                </li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Applications of Expert Systems and AI
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Credit granting and loan analysis</li>
                <li>Tracking terrorists attacks</li>
                <li>Hospitals and medical facilities</li>
                <li>Employee performance evaluation</li>
                <li>Repair and maintenance</li>
                <li>Marketing</li>
              </ul>
            </SectionCard>
          </div>
        )}
        {/* IT Management Section */}
        {activeSection === "management" && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Identifying Potential Projects
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The first step in project management is deciding what projects to do in the first place. Therefore, project initiation starts with identifying potential projects, using realistic methods to select which projects to work on, and then formalizing their initiation by issuing some sort of project charter.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                A project charter is a document that defines the objectives, scope, and stakeholders of a project, providing a roadmap for the team to follow.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Methods For Selecting Projects
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Focusing on broad organizational needs</li>
                <li>Categorizing IT projects : whether the project addresses: a problem, an opportunity, or a directive ?</li>
                <li>Performing net present value or other financial analyses - NPV, ROI, Payback Analysis</li>
                <li>Using a weighted scoring model</li>
                <li>Implementing a balanced scorecard</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                A weighted scoring model is a project management technique used for weighing certain decisions, such as prioritizing project actions, prioritizing the development of product features. A balanced scorecard (BSC) is a performance metric companies use to identify and improve internal functions and their resulting external outcomes.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Strategic Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Strategic planning involves determining long-term objectives by analyzing the strengths and weaknesses of an organization, studying opportunities and threats in the business environment, predicting future trends, and projecting the need for new products and services.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                Strategic planning provides important information to help organizations identify and then select potential projects. SWOT analysis.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                IT Strategic Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Assesses what investments and technologies will achieve business goals while also considering the impact of funding them.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Participants in Systems Development
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Stakeholders:</strong> People who, either themselves or through the organization they represent, ultimately benefit from the systems development project</li>
                <li><strong>Users:</strong> People who will interact with the system regularly</li>
                <li><strong>Development team:</strong> Responsible for determining the objectives of the information system and delivering a system that meets these objectives</li>
                <li><strong>Developers:</strong> Modifying or developing programs to satisfy user requirements</li>
                <li><strong>QA / Testers</strong></li>
                <li><strong>Systems analyst:</strong> Analyzing and designing business systems</li>
                <li><strong>Project Manager:</strong> Responsible for coordinating all people and resources needed to complete a project on time</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Information Systems Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Information systems planning transforms organizational goals outlined in the strategic plan into specific systems development activities.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Establishing Objectives for Systems Development
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The overall objective of systems development is to achieve business goals, not technical goals, by delivering the right information to the right person at the right time.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                <strong>Mission-critical Systems:</strong> Systems that play a critical role in an organization's continued operations and goal attainment.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Performance Objectives
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>The quality or usefulness of the output:</strong> Is the system generating the right information for a value-added business process or by a goal-oriented decision maker?</li>
                <li><strong>The accuracy of the output:</strong> Is the output accurate and does it reflect the true situation?</li>
                <li><strong>The speed at which output is generated:</strong> Is the system generating output in time to meet organizational goals and operational objectives? Customer response time</li>
                <li><strong>The scalability of the resulting system:</strong> Handle business growth and increased business volume</li>
                <li><strong>The risk of the system:</strong> One important objective of many systems development projects is to reduce risk</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Cost Objectives
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Development costs:</strong> All costs required to get the system up and running</li>
                <li><strong>Costs related to the uniqueness of the system application:</strong> A system's uniqueness has a profound effect on its cost. An expensive but reusable system might be preferable to a less costly system with limited use</li>
                <li><strong>Fixed investments in hardware and related equipment</strong></li>
                <li><strong>Ongoing operating costs of the system:</strong> Operating costs include costs for personnel, software, supplies, and resources such as the electricity required to run the system</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Systems Development Life Cycle (SDLC)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The systems development process. Sometimes, information learned in a particular phase requires cycling back to a previous phase.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Traditional Systems Development Life Cycle
              </h2>
              
              <Subsection title="Systems Investigation">
                <p>The systems development phase during which problems and opportunities are identified and considered in light of the goals of the business.</p>
              </Subsection>

              <Subsection title="Systems Analysis">
                <p>The systems development phase that determines what the Information System must do to solve the problem by studying existing systems and work processes to identify strengths, weaknesses, and opportunities for improvement.</p>
              </Subsection>

              <Subsection title="Systems Design">
                <p>The systems development phase that defines how the information system will do what it must do to obtain the problem solution.</p>
              </Subsection>

              <Subsection title="Systems Implementation">
                <p>The systems development phase involving the creation or acquisition of various system components detailed in the systems design, assembling them, and placing the new or modified system into operation.</p>
              </Subsection>

              <Subsection title="Systems Maintenance And Review">
                <p>The systems development phase that ensures the system operates and modifies the system so that it continues to meet changing business needs.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Prototyping
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Iterative approach to the systems development process. During each iteration, requirements and alternative solutions to the problem are identified and analyzed, new solutions are designed, and a portion of the system is implemented. Users are then encouraged to try the prototype and provide feedback.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Operational prototype:</strong> A prototype that works—accesses real data files, edits input data, makes necessary computations and comparisons, and produces real output</li>
                <li><strong>Nonoperational prototype:</strong> A mock-up, or model, that includes output and input specifications and formats</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Each generation of prototype is a refinement of the previous generation based on user feedback.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Rapid Application Development (RAD)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A systems development approach that employs tools, techniques, and methodologies designed to speed application development.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-blue-600">
                Joint Application Development (JAD)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A process for data collection and requirements analysis in which users, stakeholders, and IS professionals work together to analyze existing systems, propose possible solutions, and define the requirements of a new or modified system.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Factors Affecting Systems Development Success
              </h2>
              
              <Subsection title="Degree of Change">
                <p>A major factor that affects the quality of systems development is the degree of change associated with the project. The scope can vary from enhancing an existing system to major reengineering. The project team needs to recognize where they are on this spectrum of change.</p>
              </Subsection>

              <Subsection title="Managing Change">
                <p className="mb-2">The ability to manage change is critical to the success of systems development. For example, the work environment and habits of users are invariably affected by the development of a new information system. Unfortunately, not everyone adapts easily.</p>
                <p className="mb-2">Managing change requires the ability to recognize existing or potential problems (particularly the concerns of users) and deal with them before they become a serious threat to the success of the new or modified system.</p>
                <p className="mb-2">The most common problems that often need to be addressed as a result of new or modified systems:</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Fear that the employee will lose his job, power, or influence within the organization</li>
                  <li>Belief that the proposed system will create more work than it eliminates</li>
                  <li>Reluctance to work with "computer people"</li>
                  <li>Anxiety that the proposed system will negatively alter the structure of the organization</li>
                  <li>Unwillingness to learn new procedures or approaches</li>
                </ul>
              </Subsection>

              <Subsection title="Quality and Standards">
                <p className="mb-2">Quality and standards are other key success factors for systems development. Increasingly, corporations are expanding their standards to include many different computer platforms. While many companies try to standardize their operations on one operating system, others have multiple systems and platforms to take advantage of the strengths of each.</p>
                <p>In addition, organizations that do business around the globe, may be required to meet certain international standards, such as ISO 9000, a set of international quality standards originally developed in Europe in 1987.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Computer-related Waste and Mistakes
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Major causes of computer problems, contributing as they do to unnecessarily high costs and lost profits.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Computer waste:</strong> involves the inappropriate use of computer technology and resources</li>
                <li><strong>Computer-related mistakes:</strong> refer to errors, failures, and other computer problems that make computer output incorrect or not useful, caused mostly by human error</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Types of Computer-related Mistakes
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Data-entry or data-capture errors</li>
                <li>Errors in computer programs</li>
                <li>Errors in handling files, including formatting a disk by mistake, copying an old file over a newer one, and deleting a file by mistake</li>
                <li>Mishandling of computer output</li>
                <li>Inadequate planning for and control of equipment malfunctions</li>
                <li>Inadequate planning for and control of environmental difficulties (such as electrical and humidity problems)</li>
                <li>Installing computing capacity inadequate for the level of activity on corporate Web sites</li>
                <li>Failure to provide access to the most current information by not adding new Web links and not deleting old links</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Preventing Computer-related Waste & Mistakes
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Establishing Policies and Procedures</li>
                <li>Implementing Policies and Procedures</li>
                <li>Monitoring Policies and Procedures</li>
                <li>Reviewing Policies and Procedures</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                The Computer as a Tool to Commit Crime
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Social Engineering:</strong> Using social skills to get computer users to provide information to access an information system or its data</li>
                <li><strong>Dumpster Diving:</strong> Going through the trash cans of an organization to find secret or confidential information, including information needed to access an information system or its data</li>
                <li><strong>Cyberterrorism</strong></li>
                <li><strong>Identify Theft:</strong> A crime in which an imposter obtains key pieces of personal identification information, such as Social Security or driver's license numbers, to impersonate someone else</li>
                <li><strong>Internet Gambling</strong></li>
                <li><strong>Information and Equipment Theft</strong></li>
                <li><strong>Computer-Related Scams</strong></li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-600">
                Preventing Computer-related Crime
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Crime prevention by state and federal agencies</li>
                <li>Crime prevention by corporations</li>
                <li>Using intrusion detection software</li>
                <li>Security dashboard</li>
                <li>Using managed security service providers (MSSPS)</li>
              </ul>
            </SectionCard>
          </div>
        )}
      </div>
    </div>
  );
}
