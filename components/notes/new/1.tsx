"use client";
import React, { useState } from 'react';

export default function ICT1161Notes() {
  const [activeSection, setActiveSection] = useState('intro');

  const SectionCard: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg p-3 sm:p-4 mb-4 shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );

  const Subsection: React.FC<{ title: React.ReactNode; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-50 border-l-4 border-purple-600 p-3 sm:p-4 my-3 rounded-r-lg">
      <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

  const HighlightBox: React.FC<{ title?: React.ReactNode; children?: React.ReactNode; color?: 'blue' | 'green' | 'yellow' | 'purple' | 'red' }> = ({ title, children, color = 'blue' }) => {
    const colors: Record<'blue' | 'green' | 'yellow' | 'purple' | 'red', string> = {
      blue: 'bg-blue-50 border-blue-300',
      green: 'bg-green-50 border-green-300',
      yellow: 'bg-yellow-50 border-yellow-300',
      purple: 'bg-purple-50 border-purple-300',
      red: 'bg-red-50 border-red-300',
      
    };
    return (
      <div className={`${colors[color]} border rounded-lg p-3 sm:p-4 my-3`}>
        {title && <h4 className="text-sm sm:text-base font-semibold mb-2">{title}</h4>}
        <div className="text-xs sm:text-sm text-gray-700">{children}</div>
      </div>
    );
  };

  const ExampleBox: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="bg-green-50 border border-green-300 rounded-lg p-3 my-2">
      <div className="text-xs sm:text-sm text-gray-700">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 sm:p-8 rounded-xl mb-4 sm:mb-6 shadow-lg">
          <h2 className="text-lg sm:text-2xl font-semibold mb-1">IS</h2>
          <p className="text-xs sm:text-sm opacity-90">Information Systems</p>
        </div>

        {/* Navigation */}
        <div className="sticky top-0 bg-white rounded-lg shadow-md z-50 mb-4 sm:mb-6">
          <div className="flex gap-2 p-3 sm:p-4 overflow-x-auto">
            {[
                
                { id: 'intro', label: 'Introduction' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'mcommerce', label: 'M-Commerce' },
              { id: 'web2', label: 'Web 2.0' },
              { id: 'enterprise', label: 'Enterprise Systems' },
              { id: 'mis', label: 'MIS & DSS' },
              { id: 'sdlc', label: 'SDLC & Management' },
            ].map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-3 sm:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-purple-700 text-white shadow-md'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Introduction Section */}
        {activeSection === 'intro' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                What is a Business Information System?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Business Information Systems is a field that involves information, technological systems, and people. This field is both applied and managerial and uses the tools, techniques, and concepts of various disciplines (such as computer science and management) to find solutions to a wide range of business problems.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Levels of Information Systems within an Organization
              </h2>
              
              <Subsection title="📚 Knowledge Management System (KMS)">
                <p>KMS is a systems that an organization implements to ensure a continuous flow of new and updated knowledge into the company and its processes.</p>
              </Subsection>

              <Subsection title="📊 Management Information System (MIS)">
                <p className="mb-2">The management information system provides aid to managers by automating different processes that were initially done manually.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Business performance tracking and analysis</li>
                  <li>Making business decisions</li>
                  <li>Making a business plan</li>
                  <li>Defining workflow</li>
                  <li>Provides feedback to managers by analyzing roles and responsibilities</li>
                </ul>
              </Subsection>

              <Subsection title="🎯 Decision Support System (DSS)">
                <p className="mb-2">A decision support system is an information system that analyses business data and other information related to the enterprise to offer automation in decision-making or problem-solving.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Used in times of adversities during business operations</li>
                  <li>Collects information regarding revenue, sales figures, or inventory</li>
                  <li>Popular across different industries</li>
                </ul>
              </Subsection>

              <Subsection title="🏢 Enterprise System">
                <p>The systems that span functional areas, focus on executing business processes across the organization.</p>
              </Subsection>
            </SectionCard>
          </div>
        )}

        {/* E-Commerce Section */}
        {activeSection === 'ecommerce' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                E-Business vs E-Commerce
              </h2>
              
              <HighlightBox title="🌐 E-Business" color="blue">
                <p className="mb-2">The conduct of business on the internet, covers a wide range of business processes, from the buying and selling. Using information systems and the Internet to perform all business related tasks and functions.</p>
                <ExampleBox>
                  <strong>Examples:</strong> Amazon, eBay
                </ExampleBox>
              </HighlightBox>

              <HighlightBox title="💼 E-Commerce" color="blue">
                <p>Electronic commerce is the conducting of business activities (e.g., distribution, buying, selling, marketing, and servicing of products or services) electronically over computer networks such as the Internet, extranets, and corporate networks.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Why E-Commerce?
              </h2>
              
              <HighlightBox title="❌ Problems with Traditional Methods" color="yellow">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Paper-based processes</li>
                  <li>Time-consuming</li>
                  <li>Inconvenient for customers</li>
                </ul>
              </HighlightBox>

              <div className="mt-4">
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">✅ Advantages of E-Commerce</h3>
                <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                  <li><strong>Low cost:</strong> Reduced overhead and operational expenses</li>
                  <li><strong>Flexibility & speed:</strong> Quick adaptation to market changes</li>
                  <li><strong>Accessibility:</strong> 24/7 availability from anywhere</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">⚠️ Disadvantages of E-Commerce</h3>
                <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                  <li><strong>Security:</strong> Data breaches and cyber threats</li>
                  <li>Lack of physical product inspection</li>
                  <li>Dependence on technology infrastructure</li>
                </ul>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                E-Commerce Process
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">Any e-commerce system includes:</p>
              <ol className="list-decimal ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>User's ability to search for and identify items for sale</li>
                <li>Select those items and negotiate prices</li>
                <li>Terms of payment, delivery date</li>
                <li>Send an order to the vendor to purchase the items</li>
                <li>Pay for the product or service</li>
                <li>Obtain product delivery</li>
                <li>Receive after-sales support</li>
              </ol>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Types of E-Commerce
              </h2>

              <Subsection title="🏭 Business-to-Business (B2B)">
                <p className="mb-2">A subset of e-commerce where all the participants are organizations. Useful tool for connecting business partners in a virtual supply chain to cut resupply times and reduce costs.</p>
                <ExampleBox>
                  <strong>Examples:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>HP & Intel</li>
                    <li>Alibaba.com</li>
                    <li>Mallory Safety & Supply (www.mallory.com)</li>
                  </ul>
                </ExampleBox>
              </Subsection>

              <Subsection title="🛒 Business-to-Consumer (B2C)">
                <p className="mb-2">A form of e-commerce in which customers deal directly with an organization and avoid intermediaries. Eliminates intermediates → Reduce costs and inefficiencies out of the supply chain and can lead to higher profits and lower prices for consumers.</p>
                <HighlightBox color="purple">
                  <p><strong>DISINTERMEDIATION:</strong> The elimination of intermediate organizations between the producer and the consumer.</p>
                </HighlightBox>
                <ExampleBox>
                  <strong>Examples:</strong> Daraz, Amazon
                </ExampleBox>
              </Subsection>

              <Subsection title="👥 Consumer-to-Consumer (C2C)">
                <p className="mb-2">Involves consumers selling directly to other consumers. Selling items on auction Web sites!</p>
                <ExampleBox>
                  <strong>Examples:</strong> eBay
                </ExampleBox>
              </Subsection>

              <Subsection title="📱 M-Commerce (Mobile Commerce)">
                <p className="mb-2">Involves using wireless handheld devices like cellphones and tablets to conduct commercial transactions online, including the purchase and sale of products, online banking, and paying bills.</p>
                <ExampleBox>
                  <strong>Examples:</strong> Daraz mobile application, ikman.lk mobile app
                </ExampleBox>
              </Subsection>

              <Subsection title="📘 F-Commerce (Facebook Commerce)">
                <p>F-commerce refers to conducting online business activities on a Facebook page or Facebook application. Also known as Social shopping.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                E-Government
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The use of information and communications technology to simplify the sharing of information, speed formerly paper-based processes, and improve the relationship between citizens and government.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Types:</h3>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Government-to-Consumer (G2C):</strong> CEB, Water Board, Immigration department</li>
                <li><strong>Government-to-Business (G2B):</strong> Income-tax, Supply-chain & procurement</li>
                <li><strong>Government-to-Government (G2G):</strong> Immigration department, GeoData.gov</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Multistage Model for E-Commerce
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A successful e-commerce system must address the many stages that consumers experience in the sales life cycle (B2B and B2C):
              </p>
              
              <Subsection title="1️⃣ Search and Identification">
                <p>Finding and browsing products or services</p>
              </Subsection>

              <Subsection title="2️⃣ Selection and Negotiation">
                <p>Choosing items and discussing terms</p>
              </Subsection>

              <Subsection title="3️⃣ Purchasing Products and Services Electronically">
                <p>Completing the transaction online</p>
              </Subsection>

              <Subsection title="4️⃣ Product and Service Delivery">
                <p>Receiving the purchased items</p>
              </Subsection>

              <Subsection title="5️⃣ After-Sales Service">
                <p>Customer support and maintenance</p>
              </Subsection>

              <ExampleBox>
                <strong>Example:</strong> Product and Information Flow for HP Printers Ordered over the Web
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                E-Commerce Challenges
              </h2>
              <ol className="list-decimal ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Defining an effective e-commerce model and strategy</strong></li>
                <li><strong>Dealing with consumer privacy concerns</strong></li>
                <li><strong>Overcoming consumers' lack of trust</strong></li>
              </ol>

              <HighlightBox title="E-Commerce Model Components:" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li><strong>Community:</strong> Building user base</li>
                  <li><strong>Content:</strong> Providing valuable information</li>
                  <li><strong>Commerce:</strong> Facilitating transactions</li>
                </ol>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                🎯 Important Questions to Consider
              </h2>
              <HighlightBox title="Task 02:" color="yellow">
                <ul className="list-disc ml-5 space-y-2">
                  <li>Why is it needed to have proper "Supply Chain Management" & "Customer Relationship Management" in E-Commerce?</li>
                  <li>What are the security breaches of E-Commerce?</li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* M-Commerce Section */}
        {activeSection === 'mcommerce' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Mobile Commerce (M-Commerce)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Relies on the use of mobile, wireless devices, such as personal digital assistants, cell phones, and smartphones, to place orders and conduct business.
              </p>
              <ExampleBox>
                <strong>Example:</strong> Daraz mobile application
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Types of Mobile Commerce
              </h2>

              <Subsection title="🏦 Mobile Banking">
                <p>Using a mobile website or application to perform all banking functions.</p>
              </Subsection>

              <Subsection title="🎫 Mobile Ticketing and Booking">
                <p>Making bookings and receiving tickets on the mobile. The digital ticket or boarding pass is sent directly to your phone after you make the payment from it.</p>
              </Subsection>

              <Subsection title="💳 E-bills">
                <p>This includes mobile vouchers, mobile coupons to be redeemed and even loyalty points or cards system.</p>
              </Subsection>

              <Subsection title="🔨 Auctions">
                <p>Online auctions having now been developed to be made available via mobile phones as well.</p>
              </Subsection>

              <Subsection title="📈 Stock Market">
                <p>Stock Market Reports and even stock market trading over mobile applications.</p>
              </Subsection>

              <Subsection title="🛍️ Other Types">
                <ul className="list-disc ml-5 space-y-1">
                  <li>In-app purchasing</li>
                  <li>Virtual marketplace</li>
                  <li>Mobile Advertising</li>
                </ul>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                M-Commerce Web Sites
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Retailers have established special Web sites for users of mobile devices, optimized for smaller screens and touch interfaces.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Benefits of Mobile Commerce
              </h2>

              <HighlightBox title="1️⃣ Better Overall Customer Experience" color="blue">
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Mobility:</strong> Although desktop computers are portable, it's unlikely that a shopper will always have a laptop on-hand. But considering most people never leave the house without a smartphone, m-commerce makes online shopping far more convenient.</li>
                  <li><strong>Reachability:</strong> With the ability to send customers SMS push notifications, online retailers can reach a wider range of customers even when they're on the go.</li>
                  <li><strong>Location-tracking:</strong> M-commerce apps and online stores can pinpoint user locations using GPS technology and Wi-Fi, which helps provide content that is personalized and location-specific.</li>
                </ul>
              </HighlightBox>

              <Subsection title="2️⃣ Phenomenal Growth Potential">
                <p>Mobile commerce is experiencing rapid expansion worldwide.</p>
              </Subsection>

              <Subsection title="3️⃣ Variety of Payment Options">
                <p>Multiple payment methods available for customer convenience.</p>
              </Subsection>

              <Subsection title="4️⃣ Omni-channel Experience">
                <p>Refers to selling both in-store and online through multiple channels, providing seamless customer experience.</p>
              </Subsection>

              <Subsection title="5️⃣ Reduce Costs">
                <p>Lower operational and infrastructure costs.</p>
              </Subsection>

              <Subsection title="6️⃣ Speed the Flow of Goods and Information">
                <p>Faster transaction processing and delivery updates.</p>
              </Subsection>

              <Subsection title="7️⃣ Increase Accuracy">
                <p>Automated systems reduce human error.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Disadvantages of Mobile Commerce
              </h2>
              
              <HighlightBox color="yellow">
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Constant need for optimization:</strong> Requires continuous updates for different devices</li>
                  <li><strong>Limited payment methods:</strong> All payment methods are not available for all regions
                    <ExampleBox>
                      <strong>Example:</strong> Sri Lanka - PayPal restrictions
                    </ExampleBox>
                  </li>
                  <li><strong>Easier price comparison:</strong> Customers can easily compare prices across platforms</li>
                  <li><strong>Customer security:</strong> Concerns about data privacy and transaction security</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Global Challenges for Mobile Commerce
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Cultural Challenges:</strong> Different preferences in USA, Europe, Japan, Sri Lanka</li>
                <li><strong>Language Challenges:</strong> Multi-language support requirements</li>
                <li><strong>Time and Distance Challenges:</strong> Time zones and shipping distances</li>
                <li><strong>Infrastructure Challenges:</strong> Internet connectivity and mobile network quality</li>
                <li><strong>Currency Challenges:</strong> Exchange rates and payment processing</li>
                <li><strong>Product and Service Challenges:</strong> Availability across regions</li>
                <li><strong>State, Regional, and National Laws:</strong> Varying regulations</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Threats of Mobile Commerce
              </h2>

              <HighlightBox title="⚠️ Security Concerns" color="yellow">
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Theft of Intellectual Property (IP):</strong> Includes works of the mind such as books, films, music, processes, and software, which are distinct somehow and are owned and/or created by a single entity</li>
                  <li><strong>Fraud:</strong> Unauthorized transactions and identity theft</li>
                  <li><strong>Threats to Consumer Privacy:</strong> Personal data breaches</li>
                  <li><strong>Lack of Internet Access:</strong> Connectivity issues in remote areas</li>
                  <li><strong>Legal Jurisdiction:</strong> Cross-border legal complications</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                For Successful E-commerce & M-commerce
              </h2>
              
              <Subsection title="1️⃣ Defining the Web Site Functions">
                <p>Clear objectives and feature requirements</p>
              </Subsection>

              <Subsection title="2️⃣ Establishing a Web Site">
                <p>Technical setup and deployment</p>
              </Subsection>

              <Subsection title="3️⃣ Building Traffic to Your Web Site">
                <p>Marketing and customer acquisition</p>
              </Subsection>

              <Subsection title="4️⃣ Maintaining and Improving Your Web Site">
                <p>Ongoing updates and optimization</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Technology Infrastructure
              </h2>
              
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">For E-Commerce:</h3>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700 mb-4">
                <li>Web servers and hosting</li>
                <li>Database management systems</li>
                <li>Security protocols</li>
                <li>Payment gateways</li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">For M-Commerce:</h3>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Mobile device:</strong> Smartphones and tablets</li>
                <li><strong>Internet access & speed:</strong> Fast and reliable connectivity</li>
                <li><strong>Secured connection/network & communication:</strong> Encrypted data transmission</li>
                <li><strong>Electronic Payment Systems:</strong> Mobile payment solutions</li>
              </ul>
            </SectionCard>
          </div>
        )}

        {/* Web 2.0 Section */}
        {activeSection === 'web2' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                The World Wide Web (WWW)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A collection of tens of millions of server computers that work together as one in an Internet service using hyperlink technology to provide information to billions of users.
              </p>
              <HighlightBox color="blue">
                <strong>Hyperlink:</strong> Highlighted text or graphics in a Web document that, when clicked, opens a new Web page or section of the same page containing related content.
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Web 2.0
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The Web as a computing platform that supports software applications and the sharing of information between users.
              </p>
              
              <HighlightBox title="Evolution:" color="purple">
                <p className="font-semibold mb-2">Web 1.0 → Web 2.0</p>
                <p className="mb-2">One directional websites → Two directional websites</p>
                <p className="mb-2">Display only → Display and collect information</p>
                <p>The original Web, now referred to as Web 1.0, provided a platform for businesses to publish information for the general public to view</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Rich Internet Application
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Software that has the functionality and complexity of traditional application software, but does not require local installation and runs in a Web browser.
              </p>
              <ExampleBox>
                <strong>Examples:</strong> Zoom, Online C compilers
              </ExampleBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Social Media Types
              </h2>

              <Subsection title="👥 Social Media">
                <p>Users can post information about their interests and find like-minded people.</p>
                <ExampleBox><strong>Example:</strong> Facebook</ExampleBox>
              </Subsection>

              <Subsection title="🐦 Microblogging Sites">
                <p>People can post thoughts and ideas throughout the day for friends to read.</p>
                <ExampleBox><strong>Example:</strong> Twitter</ExampleBox>
              </Subsection>

              <Subsection title="🔖 Social Bookmarking">
                <p>Allow users to pool their votes to determine what online news stories and Web pages are most interesting each moment of the day.</p>
                <ExampleBox><strong>Examples:</strong> Digg and del.icio.us</ExampleBox>
              </Subsection>

              <Subsection title="💬 Opinion Platforms">
                <p>Allow consumers to voice their opinions about products.</p>
                <ExampleBox><strong>Example:</strong> Epinions</ExampleBox>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Internet And Web Applications
              </h2>

              <Subsection title="1️⃣ Search Engines and Web Research">
                <p>Tools for finding information on the internet efficiently.</p>
              </Subsection>

              <Subsection title="2️⃣ E-mail, Instant Messaging, and Video Chat">
                <p>Communication tools for personal and business use.</p>
              </Subsection>

              <Subsection title="3️⃣ Telnet, SSH, and FTP">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>Telnet:</strong> Command-line interface that allows the user to work on a remote server directly</li>
                  <li><strong>SSH:</strong> Telnet functionality through a more secure connection</li>
                  <li><strong>FTP:</strong> File transfers between a host and a remote computer</li>
                </ul>
              </Subsection>

              <Subsection title="4️⃣ Web Log (Blog), Video Log (Vlog), and Podcasting">
                <p>Content creation and sharing platforms for individuals and organizations.</p>
              </Subsection>

              <Subsection title="5️⃣ Entertainment">
                <p>Streaming services, gaming, and multimedia content consumption.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                📚 Recommended Books
              </h2>
              
              <HighlightBox color="green">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">"Principles of Information Systems"</p>
                    <p><strong>Authors:</strong> Ralph Stair, George Reynolds</p>
                    <p><strong>Publisher:</strong> Course Technology, Cengage Learning</p>
                    <p><strong>Year:</strong> 2010</p>
                    <p><strong>ISBN:</strong> 0324665288</p>
                  </div>
                  
                  <div className="border-t pt-3">
                    <p className="font-semibold mb-1">"M: Information Systems, 4th edition"</p>
                    <p><strong>Author:</strong> Paige Baltzan</p>
                    <p><strong>Publisher:</strong> McGraw-Hill Higher Education</p>
                    <p><strong>Year:</strong> 2017</p>
                    <p><strong>ISBN:</strong> 9781259814297</p>
                  </div>
                </div>
              </HighlightBox>
            </SectionCard>
            
          </div>
        )}
{/* Enterprise Systems Section */}
        {activeSection === 'enterprise' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Enterprise System
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A system central to the organization that ensures information can be shared across:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>All business functions</li>
                <li>All levels of management</li>
                <li>To support the running and managing of a business</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Transaction Processing Systems (TPS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Capture and process the detailed data necessary to update records about the fundamental business operations of the organization.
              </p>

              <Subsection title="Business Operations">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Order entry</li>
                  <li>Inventory control</li>
                  <li>Payroll</li>
                  <li>Accounts payable & receivable</li>
                </ul>
              </Subsection>

              <Subsection title="📥 Inputs">
                <p>Basic business transactions → Customer Orders, Purchase Orders, Receipts, Time Cards, Invoices, And Customer Payments</p>
              </Subsection>

              <Subsection title="⚙️ Processing">
                <p>Data Collection, Data Editing, Data Correction, Data Manipulation, Data Storage, Document Production</p>
              </Subsection>

              <Subsection title="📤 Output">
                <p>Organization's records are updated to reflect the status of the operation at the time of the last processed transaction</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                TPS Processing Methods
              </h2>

              <HighlightBox title="📦 Batch Processing System" color="blue">
                <p>A form of data processing where business transactions are accumulated over a period of time and prepared for processing as a single unit or batch.</p>
              </HighlightBox>

              <HighlightBox title="⚡ Online Transaction Processing (OLTP)" color="blue">
                <p className="mb-2">A form of data processing where each transaction is processed immediately, without the delay of accumulating transactions into a batch. Number of transactions occur concurrently.</p>
                <ExampleBox>
                  <strong>Examples:</strong> Online Banking, Online Shopping
                </ExampleBox>
              </HighlightBox>

              <HighlightBox title="🤔 Which one is the BEST?" color="yellow">
                <ul className="list-disc ml-5 space-y-1">
                  <li>TPS applications do not always run using online processing</li>
                  <li>For many applications, batch processing is more appropriate and cost-effective</li>
                  <li>Payroll transactions and billing are typically done via batch processing</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                TPS Objectives
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
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
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                TPS Types
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Order Processing Systems</strong></li>
                <li><strong>Accounting Systems</strong></li>
                <li><strong>Purchasing Systems</strong></li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Transaction Processing Cycle
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The process of data collection, data editing, data correction, data manipulation, data storage, and document production.
              </p>

              <Subsection title="1️⃣ Data Collection">
                <p>Capturing and gathering all data necessary to complete the processing of transactions</p>
              </Subsection>

              <Subsection title="2️⃣ Data Editing">
                <p className="mb-2">Checking data for validity and completeness</p>
                <ExampleBox>
                  <strong>Example:</strong> Names must be alphabetic
                </ExampleBox>
              </Subsection>

              <Subsection title="3️⃣ Data Correction">
                <p>Reentering data that was not typed or scanned properly</p>
              </Subsection>

              <Subsection title="4️⃣ Data Manipulation">
                <p>Performing calculations and other data transformations related to business transactions</p>
              </Subsection>

              <Subsection title="5️⃣ Data Storage">
                <p>Updating one or more databases with new transactions</p>
              </Subsection>

              <Subsection title="6️⃣ Document Production">
                <p>The process of generating output records and reports</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Control And Management Issues
              </h2>

              <Subsection title="🆘 Disaster Recovery Plan">
                <p>A formal plan describing the actions that must be taken to restore computer operations and services in the event of a disaster</p>
              </Subsection>

              <Subsection title="🔍 Transaction Processing System Audit">
                <p>A check of a firm's TPS systems to prevent accounting irregularities and/or loss of data privacy</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Enterprise Resource Planning (ERP)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Enterprise resource planning (ERP) is a platform companies use to manage and integrate the essential parts of their businesses. An ERP integrates business processes and the ERP database.
              </p>

              <HighlightBox title="ERP Systems Support:" color="blue">
                <ul className="list-disc ml-5 space-y-1">
                  <li>Supply-chain processes (Order Processing, Inventory Management, Purchasing)</li>
                  <li>Customer Relationship Management (Sales, Marketing, Customer Service)</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                ✅ Advantages of ERP Systems
              </h2>

              <Subsection title="🌍 Increased Global Competition">
                <p>Better positioning in the global marketplace</p>
              </Subsection>

              <Subsection title="📊 Improved Access to Data for Operational Decision Making">
                <p>ERP systems operate via an integrated database, using one set of data to support all business functions. The systems can support decisions on optimal sourcing or cost accounting for the entire enterprise or business units from the start, rather than gathering data from multiple business functions and then trying to coordinate that information manually.</p>
              </Subsection>

              <Subsection title="🗑️ Elimination of Inefficient or Outdated Systems Infrastructure">
                <p>Adoption of an ERP system enables an organization to eliminate many separate systems and replace them with a single, integrated set of applications for the entire enterprise. These old systems are extremely difficult to fix when they break, and adapting them to meet new business needs takes too long.</p>
              </Subsection>

              <Subsection title="⚡ Improvement of Work Processes and Technology Standardization">
                <p>ERP vendors do considerable research to define the best business processes. They gather requirements of leading companies within the same industry and combine them with research findings from research institutions and consultants.</p>
              </Subsection>

              <Subsection title="🔧 Upgrade of Technology Infrastructure">
                <p>When implementing an ERP system, an organization has an opportunity to upgrade the information technology (hardware, operating systems, databases, etc.) that it uses</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                ⚠️ Disadvantages of ERP Systems
              </h2>

              <Subsection title="💰 Expense and Time in Implementation">
                <p>Getting the full benefits of ERP takes time and money. Although ERP offers many strategic advantages by streamlining a company's TPSs, large firms typically need three to five years and spend tens of millions of dollars to implement a successful ERP system.</p>
              </Subsection>

              <Subsection title="🔄 Difficulty Implementing Change">
                <p>In some cases, a company has to radically change how it operates to conform to the ERP's work processes—its best practices. These changes can be so drastic to long-time employees that they retire or quit rather than go through the change. This exodus can leave a firm short of experienced workers.</p>
              </Subsection>

              <Subsection title="🔗 Difficulty Integrating with Other Systems">
                <p>Most companies have other systems that must be integrated with the ERP system, such as financial analysis programs, e-commerce operations, and other applications. Many companies have experienced difficulties making these other systems operate with their ERP system.</p>
              </Subsection>

              <Subsection title="🏢 Risks in Using One Vendor">
                <p>The high cost to switch to another vendor's ERP system makes it extremely unlikely that a firm will do so. After a company has adopted an ERP system, the vendor has less incentive to listen and respond to customer concerns. Selecting an ERP system involves not only choosing the best software product but also the right long-term business partner.</p>
              </Subsection>

              <Subsection title="❌ Risk of Implementation Failure">
                <p>Implementing an ERP system for a large organization is extremely challenging and requires tremendous amounts of resources, the best IS and business people, and plenty of management support. Unfortunately, large ERP installations occasionally fail.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Production and Supply Chain Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                ERP systems follow a systematic process for developing a production plan that draws on the information available in the ERP system database:
              </p>

              <Subsection title="1️⃣ Sales Forecasting">
                <p>Develop an estimate of future customer demand</p>
              </Subsection>

              <Subsection title="2️⃣ Sales and Operations Plan (S&OP)">
                <p>Takes demand and current inventory levels into considerations and determines the specific product items that need to be produced and when to meet the forecast future demand</p>
              </Subsection>

              <Subsection title="3️⃣ Demand Management">
                <p>Refines the production plan by determining the amount of weekly or daily production needed to meet the demand for individual products</p>
              </Subsection>

              <Subsection title="4️⃣ Detailed Scheduling">
                <p>Uses the production plan defined by the demand management process to develop a detailed production schedule specifying production scheduling details</p>
              </Subsection>

              <Subsection title="5️⃣ Materials Requirement Planning">
                <p>Determines the amount and timing for placing raw material orders with suppliers</p>
              </Subsection>

              <Subsection title="6️⃣ Purchasing">
                <p>Uses the information from materials requirement planning to place purchase orders for raw materials and transmit them to qualified suppliers</p>
              </Subsection>

              <Subsection title="7️⃣ Production">
                <p>Uses the detailed schedule to plan the details of running and staffing the production operation</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Customer Relationship Management (CRM)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A system that helps a company manage all aspects of customer encounters, including marketing and advertising, sales, customer service after the sale, and programs to retain loyal customers.
              </p>
              <HighlightBox color="purple">
                <strong>Goal:</strong> Understand and anticipate the needs of current and potential customers to increase customer retention and loyalty while optimizing the way that products and services are sold.
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Key Features of a CRM System
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Contact Management:</strong> The ability to track data on individual customers and sales leads and access that data from any part of the organization</li>
                <li><strong>Sales Management:</strong> The ability to organize data about customers and sales leads and then to prioritize the potential sales opportunities and identify appropriate next steps</li>
                <li><strong>Customer Support:</strong> The ability to support customer service reps so that they can quickly, thoroughly, and appropriately address customer requests</li>
                <li><strong>Marketing Automation:</strong> The ability to capture and analyze all customer interactions, generate appropriate responses, and gather data to create effective marketing campaigns</li>
                <li><strong>Analysis:</strong> The ability to analyze customer data to identify ways to increase revenue and decrease costs</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Key Challenges of Implementing Enterprise Systems
              </h2>

              <Subsection title="🔍 Finding the Right System">
                <p>Before you even contact any providers, do an honest appraisal of your business needs and challenges. Ask providers to respond on how they can meet your needs. It's important that they have experience within your industry.</p>
              </Subsection>

              <Subsection title="🚫 Resistance to Change">
                <p>Those who hold influence within the current infrastructure may fear losing their power, and long-serving staff may worry that they have trouble adapting to a new system. The answer to this common issue is consultation.</p>
              </Subsection>

              <Subsection title="👔 Commitment from Managers">
                <p>Top-level support for your ERP project is required, but don't forget about junior and middle managers. If managers at all levels are enthused about your plans, it will help in convincing others to follow.</p>
              </Subsection>

              <Subsection title="📚 System Training">
                <p>Ensure that your project management team builds in time for training in groups before the launch date. Allowing staff members to ask questions during and making it interactive can help create reassurance.</p>
              </Subsection>

              <Subsection title="📋 Expectation Management">
                <p>Staff will wrongly assume that the new system can solve every problem the organization has. Always be upfront about what each phase entails, how long it will take and what is outside the project scope.</p>
              </Subsection>

              <Subsection title="🧪 Inadequate Testing">
                <p>Let teams test the functionality they will be using daily, and let them feedback. It will help reduce the amount of resistance and assist them in adjusting to the change.</p>
              </Subsection>
            </SectionCard>
          </div>
        )}

        {/* MIS & DSS Section */}
        {activeSection === 'mis' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Management Information System (MIS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Integrated collection of people, procedures, databases, and devices that provides managers and decision makers with information to help achieve organizational goals.
              </p>
              <HighlightBox color="blue">
                <p>MISs can give the competitive advantage by providing the right information to the right people in the right format and at the right time.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                MIS Inputs & Outputs
              </h2>

              <Subsection title="📥 Inputs">
                <p className="mb-2"><strong>Internal:</strong> Supply chain information, TPS and ERP systems and related databases</p>
                <p><strong>External:</strong> Customers, suppliers, competitors, and stakeholders, whose data is not already captured by the TPS, as well as other sources, such as the Internet</p>
              </Subsection>

              <Subsection title="📤 Outputs">
                <p>Collection of reports</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                MIS Functions
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Improve Decision making:</strong> Provide reports with fixed and standard formats. Produce hard-copy and soft-copy reports. Allow users to develop their own custom reports.</li>
                <li><strong>Use internal data:</strong> Stored in the computer system</li>
                <li><strong>Provide connectivity:</strong> MIS provides managers with better connectivity with the rest of the organization</li>
                <li><strong>Improve efficiency:</strong> MIS helps managers to conduct their tasks with greater ease and with better efficiency</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                MIS Types
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Financial MIS</strong></li>
                <li><strong>Manufacturing MIS</strong></li>
                <li><strong>Marketing MIS</strong></li>
                <li><strong>Human Resource MIS (HRMIS)</strong></li>
                <li><strong>Other MIS:</strong> Accounting, GIS (Geographic Information Systems)</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Decision Making And Problem Solving
              </h2>

              <Subsection title="🧠 Intelligence Stage">
                <p>The first stage of decision making, in which potential problems or opportunities are identified and defined</p>
              </Subsection>

              <Subsection title="✏️ Design Stage">
                <p>The second stage of decision making, in which alternative solutions to the problem are developed</p>
              </Subsection>

              <Subsection title="✅ Choice Stage">
                <p>The third stage of decision making, which requires selecting a course of action</p>
              </Subsection>

              <Subsection title="🔧 Implementation Stage">
                <p>A stage of problem solving in which a solution is put into effect</p>
              </Subsection>

              <Subsection title="📊 Monitoring Stage">
                <p>The final stage of the problem solving process, in which decision makers evaluate the implementation</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Programmed vs. Non-programmed Decisions
              </h2>

              <HighlightBox title="✔️ Programmed Decision" color="blue">
                <p className="mb-2">A decision made using a rule, procedure, or quantitative method</p>
                <ExampleBox>
                  <strong>Example:</strong> Ordering more products when inventory levels drop to specified levels
                </ExampleBox>
              </HighlightBox>

              <HighlightBox title="❓ Non-programmed Decision" color="yellow">
                <p className="mb-2">A decision that deals with unusual or exceptional situations</p>
                <ExampleBox>
                  <strong>Example:</strong> When there is an economic crisis
                </ExampleBox>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Decision Support System (DSS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                A computerized program used to support determinations, judgments, and courses of action in an organization or a business.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Characteristics of a DSS
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Provide rapid access to information</li>
                <li>Handle large amounts of data from different sources</li>
                <li>Provide report and presentation flexibility</li>
                <li>Offer both textual and graphical orientation</li>
                <li>Perform complex, sophisticated analysis and comparisons using advanced software packages</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Components of a Decision Support System
              </h2>

              <Subsection title="💾 The Database">
                <p>Stores all relevant data for decision making</p>
              </Subsection>

              <Subsection title="🖥️ Dialogue Manager">
                <p>A UI that allows decision makers to easily access and manipulate the DSS and to use common business terms and phrases</p>
              </Subsection>

              <Subsection title="📐 Model Base">
                <p>Part of a DSS that provides decision makers access to a variety of models and assists them in decision making</p>
                <ExampleBox>
                  <strong>Examples:</strong> Financial (Spreadsheet), Statistical (SPSS), Graphical (PowerPoint), Project Management (MS Project)
                </ExampleBox>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                A Comparison of DSS and MIS
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-gray-300 p-2">Feature</th>
                      <th className="border border-gray-300 p-2">MIS</th>
                      <th className="border border-gray-300 p-2">DSS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Focus</td>
                      <td className="border border-gray-300 p-2">Structured problems</td>
                      <td className="border border-gray-300 p-2">Unstructured problems</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-semibold">Reports</td>
                      <td className="border border-gray-300 p-2">Fixed format</td>
                      <td className="border border-gray-300 p-2">Flexible format</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">User</td>
                      <td className="border border-gray-300 p-2">Middle managers</td>
                      <td className="border border-gray-300 p-2">All levels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Executive Support Systems (ESS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Specialized DSS that includes all hardware, software, data, procedures, and people used to assist senior-level executives within the organization.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Characteristics of an ESS
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Are tailored to individual executives</li>
                <li>Are easy to use</li>
                <li>Support the need for external data</li>
                <li>Can help with situations that have a high degree of uncertainty</li>
                <li>Have a future orientation</li>
                <li>Are linked with value-added business processes</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Capabilities of Executive Support Systems
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Support for Defining an Overall Vision</strong></li>
                <li><strong>Support for Strategic Planning:</strong> Determining long-term objectives by analyzing the strengths and weaknesses of the organization, predicting future trends, and projecting the development of new product lines</li>
                <li><strong>Support for Strategic Organizing and Staffing</strong></li>
                <li><strong>Support for Strategic Control</strong></li>
                <li><strong>Support for Crisis Management</strong></li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Knowledge Management Systems (KMS)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                An organized collection of people, procedures, software, databases, and devices used to create, store, share, and use the organization's knowledge and experience.
              </p>

              <HighlightBox title="Types of Knowledge" color="purple">
                <p className="mb-2"><strong>Explicit Knowledge:</strong> Can be measured and documented in reports, papers, and rules</p>
                <ExampleBox>
                  <strong>Example:</strong> Training materials
                </ExampleBox>
                <p className="mb-2 mt-3"><strong>Tacit Knowledge:</strong> Hard to measure and document and typically is not objective or formalized</p>
                <ExampleBox>
                  <strong>Example:</strong> Leadership Skills
                </ExampleBox>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Personnel Involved in a KMS
              </h2>

              <Subsection title="📝 Data Workers">
                <p>Secretaries, administrative assistants, bookkeepers, and similar data-entry personnel</p>
              </Subsection>

              <Subsection title="🎓 Knowledge Workers">
                <p className="mb-2">Are people who create, use, and disseminate knowledge. They are usually professionals in science, engineering, or business, and work in offices and belong to professional organizations.</p>
                <ExampleBox>
                  <strong>Examples:</strong> Writers, researchers, educators, and corporate designers
                </ExampleBox>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Artificial Intelligence (AI)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                The ability of computers to mimic or duplicate the functions of the human brain.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Expert Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                An expert system consists of hardware and software that stores knowledge and makes inferences, similar to those of a human.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                When to Use Expert Systems
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Sophisticated expert systems can be difficult, expensive, and time consuming to develop. Use when you need to:
              </p>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li>Capture and preserve irreplaceable human expertise</li>
                <li>Solve a problem that is not easily solved using traditional programming techniques</li>
                <li>Develop a system more consistent than human experts</li>
                <li>Provide expertise needed at a number of locations at the same time or in a hostile environment that is dangerous to human health</li>
                <li>Provide expertise that is expensive or rare</li>
                <li>Develop a solution faster than human experts can</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Components of Expert Systems
              </h2>

              <Subsection title="📚 Knowledge Base">
                <p>Stores all relevant information, data, rules, cases, and relationships used by the expert system</p>
              </Subsection>

              <Subsection title="⚙️ Inference Engine">
                <p>Seeks information and relationships from the knowledge base and provides answers, predictions, and suggestions similar to the way a human expert would</p>
              </Subsection>

              <Subsection title="💬 Explanation Facility">
                <p>Allows a user or decision maker to understand how the expert system arrived at certain conclusions or results</p>
              </Subsection>

              <Subsection title="📥 Knowledge Acquisition Facility">
                <p>Provides convenient and efficient means of capturing and storing all the components of the knowledge base</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Applications of Expert Systems and AI
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Credit granting and loan analysis</li>
                <li>Tracking terrorist attacks</li>
                <li>Hospitals and medical facilities</li>
                <li>Employee performance evaluation</li>
                <li>Repair and maintenance</li>
                <li>Marketing</li>
              </ul>
            </SectionCard>
          </div>
        )}

        {/* SDLC & Management Section */}
        {activeSection === 'sdlc' && (
          <div>
            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                IT Strategic Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Assesses what investments and technologies will achieve business goals while also considering the impact of funding them.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Identifying Potential Projects
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The first step in project management is deciding what projects to do in the first place. Project initiation starts with identifying potential projects, using realistic methods to select which projects to work on, and then formalizing their initiation by issuing a project charter.
              </p>
              
              <HighlightBox color="blue">
                <p><strong>Project Charter:</strong> A document that defines the objectives, scope, and stakeholders of a project, providing a roadmap for the team to follow.</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Methods For Selecting Projects
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Focusing on broad organizational needs</strong></li>
                <li><strong>Categorizing IT projects:</strong> Whether the project addresses a problem, an opportunity, or a directive</li>
                <li><strong>Performing financial analyses:</strong> NPV, ROI, Payback Analysis</li>
                <li><strong>Using a weighted scoring model:</strong> A project management technique used for weighing certain decisions, such as prioritizing project actions</li>
                <li><strong>Implementing a balanced scorecard:</strong> A performance metric companies use to identify and improve internal functions</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Strategic Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Strategic planning involves determining long-term objectives by analyzing the strengths and weaknesses of an organization, studying opportunities and threats in the business environment, predicting future trends, and projecting the need for new products and services.
              </p>

              <HighlightBox title="🎯 SWOT Analysis" color="purple">
                <ul className="list-disc ml-5 space-y-1">
                  <li><strong>S</strong>trengths</li>
                  <li><strong>W</strong>eaknesses</li>
                  <li><strong>O</strong>pportunities</li>
                  <li><strong>T</strong>hreats</li>
                </ul>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Participants in Systems Development
              </h2>

              <Subsection title="👥 Stakeholders">
                <p>People who, either themselves or through the organization they represent, ultimately benefit from the systems development project</p>
              </Subsection>

              <Subsection title="🙋 Users">
                <p>People who will interact with the system regularly</p>
              </Subsection>

              <Subsection title="👨‍💻 Development Team">
                <p>Responsible for determining the objectives of the information system and delivering a system that meets these objectives</p>
              </Subsection>

              <Subsection title="⌨️ Developers">
                <p>Modifying or developing programs to satisfy user requirements</p>
              </Subsection>

              <Subsection title="🧪 QA / Testers">
                <p>Ensuring quality and functionality of the system</p>
              </Subsection>

              <Subsection title="📊 Systems Analyst">
                <p>Analyzing and designing business systems</p>
              </Subsection>

              <Subsection title="📋 Project Manager">
                <p>Responsible for coordinating all people and resources needed to complete a project on time</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Information Systems Planning
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Information systems planning transforms organizational goals outlined in the strategic plan into specific systems development activities.
              </p>

              <HighlightBox title="The Steps of IS Planning" color="blue">
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Assess current IS capabilities</li>
                  <li>Determine business requirements</li>
                  <li>Develop IS strategy</li>
                  <li>Plan specific projects</li>
                </ol>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Establishing Objectives for Systems Development
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The overall objective of systems development is to achieve business goals, not technical goals, by delivering the right information to the right person at the right time.
              </p>

              <HighlightBox color="purple">
                <p><strong>Mission-critical Systems:</strong> Systems that play a critical role in an organization's continued operations and goal attainment</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Performance Objectives
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Quality of output:</strong> Is the system generating the right information for a value-added business process?</li>
                <li><strong>Accuracy of output:</strong> Is the output accurate and does it reflect the true situation?</li>
                <li><strong>Speed of output:</strong> Is the system generating output in time to meet organizational goals?</li>
                <li><strong>Customer response time:</strong> How quickly can customers get responses?</li>
                <li><strong>Scalability:</strong> Handle business growth and increased business volume</li>
                <li><strong>Risk management:</strong> Reduce system and operational risks</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Cost Objectives
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Development costs:</strong> All costs required to get the system up and running</li>
                <li><strong>Uniqueness costs:</strong> A system's uniqueness has a profound effect on its cost</li>
                <li><strong>Fixed investments:</strong> Hardware and related equipment</li>
                <li><strong>Ongoing operating costs:</strong> Personnel, software, supplies, and resources such as electricity</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Systems Development Life Cycle (SDLC)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                The systems development process. Sometimes, information learned in a particular phase requires cycling back to a previous phase.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                The Traditional SDLC Phases
              </h2>

              <Subsection title="1️⃣ Systems Investigation">
                <p>The systems development phase during which problems and opportunities are identified and considered in light of the goals of the business</p>
              </Subsection>

              <Subsection title="2️⃣ Systems Analysis">
                <p>The systems development phase that determines what the Information System must do to solve the problem by studying existing systems and work processes to identify strengths, weaknesses, and opportunities for improvement</p>
              </Subsection>

              <Subsection title="3️⃣ Systems Design">
                <p>The systems development phase that defines how the information system will do what it must do to obtain the problem solution</p>
              </Subsection>

              <Subsection title="4️⃣ Systems Implementation">
                <p>The systems development phase involving the creation or acquisition of various system components detailed in the systems design, assembling them, and placing the new or modified system into operation</p>
              </Subsection>

              <Subsection title="5️⃣ Systems Maintenance And Review">
                <p>The systems development phase that ensures the system operates and modifies the system so that it continues to meet changing business needs</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Prototyping
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Iterative approach to the systems development process. During each iteration, requirements and alternative solutions to the problem are identified and analyzed, new solutions are designed, and a portion of the system is implemented.
              </p>

              <HighlightBox title="Types of Prototypes" color="blue">
                <p className="mb-2"><strong>Operational Prototype:</strong> A prototype that works—accesses real data files, edits input data, makes necessary computations and comparisons, and produces real output</p>
                <p><strong>Nonoperational Prototype:</strong> A mock-up, or model, that includes output and input specifications and formats</p>
              </HighlightBox>

              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Each generation of prototype is a refinement of the previous generation based on user feedback.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Rapid Application Development (RAD)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A systems development approach that employs tools, techniques, and methodologies designed to speed application development.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Joint Application Development (JAD)
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                A process for data collection and requirements analysis in which users, stakeholders, and IS professionals work together to analyze existing systems, propose possible solutions, and define the requirements of a new or modified system.
              </p>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                Factors Affecting Systems Development Success
              </h2>

              <Subsection title="🔄 Degree of Change">
                <p>A major factor that affects the quality of systems development is the degree of change associated with the project. The scope can vary from enhancing an existing system to major reengineering. The project team needs to recognize where they are on this spectrum of change.</p>
              </Subsection>

              <Subsection title="📊 Managing Change">
                <p className="mb-2">The ability to manage change is critical to the success of systems development. Managing change requires the ability to recognize existing or potential problems and deal with them before they become a serious threat.</p>
                
                <HighlightBox title="Common Problems to Address:" color="yellow">
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Fear that the employee will lose their job, power, or influence</li>
                    <li>Belief that the proposed system will create more work than it eliminates</li>
                    <li>Reluctance to work with "computer people"</li>
                    <li>Anxiety that the proposed system will negatively alter the organization structure</li>
                    <li>Unwillingness to learn new procedures or approaches</li>
                  </ul>
                </HighlightBox>
              </Subsection>

              <Subsection title="✅ Quality and Standards">
                <p>Quality and standards are key success factors for systems development. Organizations that do business globally may be required to meet certain international standards, such as ISO 9000, a set of international quality standards originally developed in Europe in 1987.</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Computer-related Waste and Mistakes
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Major causes of computer problems, contributing to unnecessarily high costs and lost profits.
              </p>

              <HighlightBox color="red">
                <p className="mb-2"><strong>Computer Waste:</strong> Involves the inappropriate use of computer technology and resources</p>
                <p><strong>Computer-related Mistakes:</strong> Errors, failures, and other computer problems that make computer output incorrect or not useful, caused mostly by human error</p>
              </HighlightBox>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Types of Computer-related Mistakes
              </h2>

              <ul className="list-disc ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li>Data-entry or data-capture errors</li>
                <li>Errors in computer programs</li>
                <li>Errors in handling files (formatting a disk by mistake, copying an old file over a newer one, deleting a file by mistake)</li>
                <li>Mishandling of computer output</li>
                <li>Inadequate planning for equipment malfunctions</li>
                <li>Inadequate planning for environmental difficulties (electrical and humidity problems)</li>
                <li>Installing computing capacity inadequate for the level of activity</li>
                <li>Failure to provide access to current information (not adding new Web links, not deleting old links)</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Preventing Computer-related Waste & Mistakes
              </h2>

              <ol className="list-decimal ml-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Establishing Policies and Procedures</strong></li>
                <li><strong>Implementing Policies and Procedures</strong></li>
                <li><strong>Monitoring Policies and Procedures</strong></li>
                <li><strong>Reviewing Policies and Procedures</strong></li>
              </ol>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-600">
                The Computer as a Tool to Commit Crime
              </h2>

              <Subsection title="🎭 Social Engineering">
                <p>Using social skills to get computer users to provide information to access an information system or its data</p>
              </Subsection>

              <Subsection title="🗑️ Dumpster Diving">
                <p>Going through the trash cans of an organization to find secret or confidential information, including information needed to access an information system or its data</p>
              </Subsection>

              <Subsection title="💻 Cyberterrorism">
                <p>Use of computer systems to cause disruption or fear</p>
              </Subsection>

              <Subsection title="🆔 Identity Theft">
                <p>A crime in which an imposter obtains key pieces of personal identification information, such as Social Security or driver's license numbers, to impersonate someone else</p>
              </Subsection>

              <Subsection title="🎰 Internet Gambling">
                <p>Online gambling operations that may be illegal</p>
              </Subsection>

              <Subsection title="💾 Information and Equipment Theft">
                <p>Stealing data or hardware components</p>
              </Subsection>

              <Subsection title="🎣 Computer-Related Scams">
                <p>Various fraudulent schemes conducted through computers</p>
              </Subsection>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                Preventing Computer-related Crime
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>Crime prevention by state and federal agencies:</strong> Law enforcement involvement</li>
                <li><strong>Crime prevention by corporations:</strong> Internal security measures</li>
                <li><strong>Using intrusion detection software:</strong> Automated monitoring systems</li>
                <li><strong>Security dashboard:</strong> Centralized security monitoring interface</li>
                <li><strong>Using managed security service providers (MSSPs):</strong> Outsourced security experts</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
                📚 Assignment Information
              </h2>
              
              <HighlightBox title="CA - Group Presentation (Assignment 02)" color="purple">
                <p className="mb-2">Create a power point presentation on Computer Crimes and what are the appropriate steps that can be taken to prevent computer crimes.</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Upload as a power point presentation on or before the given deadline</li>
                  <li>6 Members for a group</li>
                  <li>All students should do the submission</li>
                </ul>
              </HighlightBox>
            </SectionCard>
          </div>
        )}

        {/* Recommended Books Section - Appears on all tabs */}
        <SectionCard className="mt-8">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-purple-600">
            📚 Recommended Books
          </h2>
          
          <HighlightBox color="green">
            <div className="space-y-3">
              <div>
                <p className="font-semibold mb-1">"Principles of Information Systems"</p>
                <p><strong>Authors:</strong> Ralph Stair, George Reynolds</p>
                <p><strong>Publisher:</strong> Course Technology, Cengage Learning</p>
                <p><strong>Year:</strong> 2010</p>
                <p><strong>ISBN:</strong> 0324665288</p>
              </div>
              
              <div className="border-t pt-3">
                <p className="font-semibold mb-1">"M: Information Systems, 4th edition"</p>
                <p><strong>Author:</strong> Paige Baltzan</p>
                <p><strong>Publisher:</strong> McGraw-Hill Higher Education</p>
                <p><strong>Year:</strong> 2017</p>
                <p><strong>ISBN:</strong> 9781259814297</p>
              </div>
            </div>
          </HighlightBox>
        </SectionCard>

        {/* Footer */}
        
      </div>
    </div>
  );
}