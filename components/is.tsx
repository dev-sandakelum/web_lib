"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen, Menu, X } from "lucide-react"

const StudyNotes = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [activeLesson, setActiveLesson] = useState("lesson3")
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const Section = ({
    id,
    title,
    children,
    level = 1,
  }: { id: string; title: string; children: React.ReactNode; level?: number }) => {
    const isExpanded = expandedSections[id]
    const headingClass = level === 1 ? "text-base sm:text-lg font-bold" : "text-sm sm:text-base font-semibold"
    const bgClass = level === 1 ? "bg-gradient-to-r from-blue-50 to-indigo-50" : "bg-gray-50"

    return (
      <div className="mb-3 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className={`w-full px-3 sm:px-4 py-3 ${bgClass} flex items-center justify-between transition-colors hover:bg-blue-100 active:bg-blue-200`}
        >
          <span className={headingClass}>{title}</span>
          {isExpanded ? (
            <ChevronUp className="flex-shrink-0" size={20} />
          ) : (
            <ChevronDown className="flex-shrink-0" size={20} />
          )}
        </button>
        {isExpanded && <div className="p-3 sm:p-4 bg-white">{children}</div>}
      </div>
    )
  }

  const lesson3Content = (
    <div className="space-y-4">
      <Section id="mcommerce" title="📱 Mobile Commerce (M-Commerce)">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Definition:</p>
            <p className="text-gray-700 text-sm sm:text-base">
              Uses mobile wireless devices (PDAs, cell phones, smartphones) to place orders and conduct business.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Example: Daraz mobile application</p>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Types of M-Commerce:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-sm">
              <li>
                <strong>Mobile Banking:</strong> Perform banking functions via app
              </li>
              <li>
                <strong>Mobile Ticketing:</strong> Digital tickets sent to phone after payment
              </li>
              <li>
                <strong>E-bills:</strong> Mobile vouchers, coupons, loyalty points
              </li>
              <li>
                <strong>Auctions:</strong> Online auctions via mobile
              </li>
              <li>
                <strong>Stock Trading:</strong> Market reports and trading apps
              </li>
              <li>
                <strong>In-app Purchasing:</strong> Virtual marketplace transactions
              </li>
              <li>
                <strong>Mobile Advertising:</strong> Targeted mobile ads
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="benefits" title="✅ Benefits of M-Commerce">
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">1. Better Customer Experience</h4>
            <ul className="text-xs sm:text-sm text-gray-700 mt-1 space-y-1">
              <li>
                • <strong>Mobility:</strong> Smartphones always on-hand, more convenient than laptops
              </li>
              <li>
                • <strong>Reachability:</strong> SMS push notifications reach customers on-the-go
              </li>
              <li>
                • <strong>Location-tracking:</strong> GPS enables personalized, location-specific content
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">2. Phenomenal Growth Potential</h4>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">3. Variety of Payment Options</h4>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">4. Omni-channel Experience</h4>
            <p className="text-xs sm:text-sm text-gray-700">Selling in-store and online through multiple channels</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">5. Reduce Costs</h4>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">6. Speed Flow of Goods & Information</h4>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">7. Increase Accuracy</h4>
          </div>
        </div>
      </Section>

      <Section id="disadvantages" title="⚠️ Disadvantages & Challenges">
        <div className="space-y-3">
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-semibold text-red-900 mb-2 text-sm sm:text-base">Disadvantages:</p>
            <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm space-y-1">
              <li>Constant need for optimization</li>
              <li>Not all payment methods available (e.g., PayPal in Sri Lanka)</li>
              <li>Easier for customers to compare prices</li>
              <li>Customer security concerns</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Global Challenges:</p>
            <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm space-y-1">
              <li>Cultural differences (USA, Europe, Japan, Sri Lanka)</li>
              <li>Language barriers</li>
              <li>Time and distance issues</li>
              <li>Infrastructure limitations</li>
              <li>Currency conversion challenges</li>
              <li>Product/service adaptations needed</li>
              <li>Legal variations (state, regional, national laws)</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">Threats:</p>
            <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm space-y-1">
              <li>
                <strong>Security</strong> vulnerabilities
              </li>
              <li>
                <strong>Theft of Intellectual Property</strong> (books, films, music, software)
              </li>
              <li>
                <strong>Fraud</strong> risks
              </li>
              <li>
                <strong>Consumer Privacy</strong> threats
              </li>
              <li>
                <strong>Lack of Internet Access</strong>
              </li>
              <li>
                <strong>Legal Jurisdiction</strong> issues
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="success" title="🎯 Keys to Successful E/M-Commerce">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-indigo-50 p-3 rounded">
            <p className="font-semibold text-indigo-900 text-sm">1. Define Website Functions</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded">
            <p className="font-semibold text-indigo-900 text-sm">2. Establish Website</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded">
            <p className="font-semibold text-indigo-900 text-sm">3. Build Traffic</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded">
            <p className="font-semibold text-indigo-900 text-sm">4. Maintain & Improve</p>
          </div>
        </div>

        <div className="mt-4 bg-purple-50 p-3 rounded-lg">
          <p className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Technology Infrastructure Needed:</p>
          <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm space-y-1">
            <li>Mobile device</li>
            <li>Internet access & speed</li>
            <li>Secured connection/network & communication</li>
            <li>Electronic Payment Systems</li>
          </ul>
        </div>
      </Section>

      <Section id="web2" title="🌐 Web 2.0 & Social Media">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">World Wide Web (WWW):</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Collection of millions of server computers working together using hyperlink technology
            </p>
          </div>

          <div className="bg-teal-50 p-3 rounded-lg">
            <p className="font-semibold text-teal-900 mb-2 text-sm sm:text-base">Web 2.0:</p>
            <p className="text-gray-700 text-xs sm:text-sm mb-2">
              Web as computing platform supporting software apps and information sharing
            </p>
            <p className="text-gray-700 text-xs sm:text-sm">Evolution: One-directional → Two-directional websites</p>
            <p className="text-gray-700 text-xs sm:text-sm font-medium mt-1">Can display AND collect information</p>
          </div>

          <div className="bg-cyan-50 p-3 rounded-lg">
            <p className="font-semibold text-cyan-900 mb-2 text-sm sm:text-base">Rich Internet Applications:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Complex software running in web browsers without local installation
            </p>
            <p className="text-xs text-gray-600 mt-1">Examples: Zoom, Online C compilers</p>
          </div>

          <div className="bg-pink-50 p-3 rounded-lg">
            <p className="font-semibold text-pink-900 mb-2 text-sm sm:text-base">Social Media Types:</p>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Social Media:</strong> Connect with like-minded people (Facebook)
              </li>
              <li>
                • <strong>Microblogging:</strong> Post daily thoughts (Twitter)
              </li>
              <li>
                • <strong>Social Bookmarking:</strong> Vote on interesting content (Digg, del.icio.us)
              </li>
              <li>
                • <strong>Review Sites:</strong> Voice opinions on products (Epinions)
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="webapps" title="💻 Internet & Web Applications">
        <div className="space-y-2">
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">1. Search Engines & Web Research</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">2. Email, Instant Messaging, Video Chat</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">3. Telnet, SSH, and FTP</p>
            <ul className="text-xs sm:text-sm text-gray-700 mt-1">
              <li>• Telnet: Command-line for remote server work</li>
              <li>• SSH: Secure Telnet connection</li>
              <li>• FTP: File transfers between computers</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">4. Blogs, Vlogs, Podcasting</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base">5. Entertainment</p>
          </div>
        </div>
      </Section>
    </div>
  )

  const lesson4Content = (
    <div className="space-y-4">
      <Section id="enterprise" title="🏢 Enterprise Systems">
        <div className="space-y-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Definition:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Central system ensuring information sharing across all business functions and management levels
            </p>
          </div>

          <div className="bg-indigo-50 p-3 rounded-lg">
            <p className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">Types:</p>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>
                • <strong>ERP Systems:</strong> Support supply-chain (orders, inventory, purchasing)
              </li>
              <li>
                • <strong>CRM Systems:</strong> Support sales, marketing, customer service
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="tps" title="💳 Transaction Processing Systems (TPS)">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Purpose:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Capture and process detailed data for fundamental business operations
            </p>
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-semibold text-green-900 mb-2 text-sm sm:text-base">Business Operations Supported:</p>
            <ul className="list-disc list-inside text-gray-700 text-xs sm:text-sm">
              <li>Order entry</li>
              <li>Inventory control</li>
              <li>Payroll</li>
              <li>Accounts payable & receivable</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Processing Steps:</p>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">
              <strong>Inputs:</strong> Customer orders, purchase orders, receipts, time cards, invoices, payments
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mb-1">
              <strong>Processing:</strong> Data collection, editing, correction, manipulation, storage, document
              production
            </p>
            <p className="text-xs sm:text-sm text-gray-700">
              <strong>Output:</strong> Updated organizational records
            </p>
          </div>
        </div>
      </Section>

      <Section id="processing" title="⚙️ Processing Types">
        <div className="space-y-3">
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Batch Processing:</p>
            <p className="text-gray-700 text-xs sm:text-sm mb-1">
              Transactions accumulated over time and processed as single batch
            </p>
            <p className="text-xs text-gray-600">Best for: Payroll, billing</p>
          </div>

          <div className="bg-pink-50 p-3 rounded-lg">
            <p className="font-semibold text-pink-900 mb-2 text-sm sm:text-base">
              Online Transaction Processing (OLTP):
            </p>
            <p className="text-gray-700 text-xs sm:text-sm mb-1">
              Each transaction processed immediately, concurrent transactions
            </p>
            <p className="text-xs text-gray-600">Examples: Online banking, online shopping</p>
          </div>

          <div className="bg-teal-50 p-3 rounded-lg">
            <p className="font-semibold text-teal-900 mb-2 text-sm sm:text-base">Transaction Processing Cycle:</p>
            <ol className="list-decimal list-inside text-gray-700 text-xs sm:text-sm space-y-1">
              <li>Data Collection</li>
              <li>Data Editing (validity checks)</li>
              <li>Data Correction (re-entry)</li>
              <li>Data Manipulation (calculations)</li>
              <li>Data Storage (database updates)</li>
              <li>Document Production (reports)</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="tps-objectives" title="🎯 TPS Objectives">
        <div className="grid grid-cols-1 gap-2">
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Process data accurately and completely</div>
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Avoid fraudulent transactions</div>
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Produce timely responses and reports</div>
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Reduce labor requirements</div>
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Improve customer service</div>
          <div className="bg-blue-50 p-2 rounded text-xs sm:text-sm">✓ Achieve competitive advantage</div>
        </div>
      </Section>

      <Section id="erp" title="🔄 Enterprise Resource Planning (ERP)">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Definition:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              Platform to manage and integrate essential business parts via integrated database
            </p>
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-semibold text-green-900 mb-2 text-sm sm:text-base">✅ Advantages:</p>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Global Competition:</strong> Better competitive positioning
              </li>
              <li>
                • <strong>Data Access:</strong> Integrated database, one data set for all functions
              </li>
              <li>
                • <strong>System Elimination:</strong> Replace separate outdated systems
              </li>
              <li>
                • <strong>Best Practices:</strong> Standardized, researched work processes
              </li>
              <li>
                • <strong>Tech Upgrade:</strong> Modernize hardware, OS, databases
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-semibold text-red-900 mb-2 text-sm sm:text-base">❌ Disadvantages:</p>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Expensive & Time:</strong> 3-5 years, tens of millions of dollars
              </li>
              <li>
                • <strong>Change Resistance:</strong> Drastic operational changes needed
              </li>
              <li>
                • <strong>Integration Issues:</strong> Difficulty with other systems
              </li>
              <li>
                • <strong>Vendor Lock-in:</strong> High switching costs
              </li>
              <li>
                • <strong>Implementation Risk:</strong> Chance of project failure
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="scm" title="📦 Production & Supply Chain Management">
        <div className="bg-indigo-50 p-3 rounded-lg">
          <p className="font-semibold text-indigo-900 mb-2 text-sm sm:text-base">Process Steps:</p>
          <ol className="list-decimal list-inside text-gray-700 text-xs sm:text-sm space-y-1">
            <li>
              <strong>Sales Forecasting:</strong> Estimate future demand
            </li>
            <li>
              <strong>{"S&OP"}</strong>: Determine specific products and timing
            </li>
            <li>
              <strong>Demand Management:</strong> Weekly/daily production amounts
            </li>
            <li>
              <strong>Detailed Scheduling:</strong> Production sequence and timing
            </li>
            <li>
              <strong>Materials Planning:</strong> Raw material orders timing
            </li>
            <li>
              <strong>Purchasing:</strong> Place orders with suppliers
            </li>
            <li>
              <strong>Production:</strong> Execute detailed schedule
            </li>
          </ol>
        </div>
      </Section>

      <Section id="crm" title="👥 Customer Relationship Management (CRM)">
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Definition:</p>
            <p className="text-gray-700 text-xs sm:text-sm">
              System managing all customer encounters to increase retention and optimize sales
            </p>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">Key Features:</p>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
              <li>
                • <strong>Contact Management:</strong> Track customer data across organization
              </li>
              <li>
                • <strong>Sales Management:</strong> Prioritize opportunities, identify next steps
              </li>
              <li>
                • <strong>Customer Support:</strong> Quick, thorough issue resolution
              </li>
              <li>
                • <strong>Marketing Automation:</strong> Analyze interactions, create campaigns
              </li>
              <li>
                • <strong>Analysis:</strong> Identify best customers, increase revenue, reduce costs
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="challenges" title="⚠️ Implementation Challenges">
        <div className="space-y-2">
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">1. Finding Right System</p>
            <p className="text-xs text-gray-600">Honest appraisal of needs, provider experience in industry</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">2. Resistance to Change</p>
            <p className="text-xs text-gray-600">Consultation and communication essential</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">3. Manager Commitment</p>
            <p className="text-xs text-gray-600">Support needed at all management levels</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">4. System Training</p>
            <p className="text-xs text-gray-600">Interactive group training before launch</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">5. Expectation Management</p>
            <p className="text-xs text-gray-600">Clear communication about phases and scope</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-3 py-1">
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">6. Inadequate Testing</p>
            <p className="text-xs text-gray-600">Teams test daily functionality and provide feedback</p>
          </div>
        </div>
      </Section>

      <Section id="control" title="🛡️ Control & Management">
        <div className="space-y-3">
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="font-semibold text-red-900 mb-1 text-sm sm:text-base">Disaster Recovery Plan</p>
            <p className="text-gray-700 text-xs sm:text-sm">Formal plan for restoring operations after disaster</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="font-semibold text-yellow-900 mb-1 text-sm sm:text-base">TPS Audit</p>
            <p className="text-gray-700 text-xs sm:text-sm">Check systems to prevent irregularities and data loss</p>
          </div>
        </div>
      </Section>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <BookOpen size={24} className="sm:w-7 sm:h-7 flex-shrink-0" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold">ICT1161</h1>
                <p className="text-xs text-blue-100 hidden sm:block">Fundamentals of Information Systems</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors active:bg-white/30"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-3 pb-2 lg:hidden space-y-2">
              <button
                onClick={() => {
                  setActiveLesson("lesson3")
                  setMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                  activeLesson === "lesson3"
                    ? "bg-white text-blue-700 font-semibold"
                    : "bg-white/20 hover:bg-white/30 active:bg-white/40"
                }`}
              >
                Lesson 3: M-Commerce & Web 2.0
              </button>
              <button
                onClick={() => {
                  setActiveLesson("lesson4")
                  setMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                  activeLesson === "lesson4"
                    ? "bg-white text-blue-700 font-semibold"
                    : "bg-white/20 hover:bg-white/30 active:bg-white/40"
                }`}
              >
                Lesson 4: Enterprise Systems
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block bg-white border-b border-gray-200 sticky top-[64px] z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 py-3">
            <button
              onClick={() => setActiveLesson("lesson3")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeLesson === "lesson3"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Lesson 3: M-Commerce & Web 2.0
            </button>
            <button
              onClick={() => setActiveLesson("lesson4")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeLesson === "lesson4"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Lesson 4: Enterprise Systems
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
          {activeLesson === "lesson3" ? lesson3Content : lesson4Content}
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-6 bg-white rounded-xl shadow-lg p-3 sm:p-4">
          <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">📚 Recommended Books:</p>
          <div className="space-y-2 text-xs text-gray-600">
            <p>{'• "Principles of Information Systems" by Ralph Stair, George Reynolds (Cengage Learning, 2010)'}</p>
            <p>{'• "M: Information Systems, 4th edition" by Paige Baltzan (McGraw-Hill, 2017)'}</p>
          </div>
          <div className="mt-3 sm:mt-4 text-center text-xs text-gray-500">
            <p>University of Ruhuna - Faculty of Technology</p>
            <p>Department of Information and Communication Technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyNotes
