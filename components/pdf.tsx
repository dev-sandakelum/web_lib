"use client";
import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Search,
  Download,
  ExternalLink,
  FolderOpen,
  Layers,
  Info,
} from "lucide-react";

interface PDFItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  size: string;
}

export default function PDFLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function to convert file size to MB
  const convertToMB = (sizeString: string): number => {
    const match = sizeString.match(/^([\d.]+)\s*(KB|MB|GB|B)?$/i);
    if (!match) return 0;

    const value = parseFloat(match[1]);
    const unit = (match[2] || "MB").toUpperCase();

    switch (unit) {
      case "B":
        return value / (1024 * 1024);
      case "KB":
        return value / 1024;
      case "MB":
        return value;
      case "GB":
        return value * 1024;
      default:
        return value;
    }
  };

  const categories = [
    {
      id: "all",
      name: "All Documents",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "networking",
      name: "Networking",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "programming",
      name: "Programming",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "IS",
      name: "Information Systems",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const pdf_path =
    "https://github.com/dev-sandakelum/web_lib/raw/main/resourses/pdf/";

  const pdfDocuments: PDFItem[] = [
    {
      id: "1",
      title: "Information Systems Questions",
      description: "A collection of questions for Information Systems.",
      category: "IS",
      url: `${pdf_path}Information System Questions.pdf`,
      size: "137 KB",
    },
  ];

  const filteredDocuments = pdfDocuments.filter((doc) => {
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">PDF Library</h1>
              <h2 className="text-2xl font-semibold">
                Comprehensive Study Resource Center
              </h2>
            </div>
          </div>
          <p className="text-rose-100 text-lg">
            Access, browse, and download academic resources with style.
          </p>
        </div>

        {/* Search + Categories */}
        <div className="p-8 bg-rose-50 border-b border-rose-200">
          <h3 className="text-md md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-rose-600" />
            Categories & Search
          </h3>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none text-gray-700 bg-white shadow-md"
              />
            </div>
          </div>

          {/* Category Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg scale-105"
                    : "bg-white border border-rose-200 text-gray-700 hover:bg-rose-100 hover:shadow-md"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Document Section */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-rose-600">
            <Layers className="w-6 h-6 text-rose-600" />
            <h2 className="text-md md:text-3xl font-bold text-gray-800 ">
              Available Documents
            </h2>
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-rose-200">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No documents found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-6">
                    <FileText className="w-10 h-10 mb-2" />
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {categories.find((c) => c.id === doc.category)?.name ||
                        doc.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 hover:text-rose-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                    <p className="text-gray-500 text-sm font-medium">
                      {doc.size}
                    </p>
                    <div className="flex gap-3 pt-2">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-3 rounded-lg font-medium hover:from-red-700 hover:to-rose-700 transition-all shadow-md hover:shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-rose-100 text-rose-700 px-4 py-3 rounded-lg hover:bg-rose-200 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Library Stats Section */}
        <div className="p-8 bg-gradient-to-br from-rose-50 to-red-50">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-rose-600">
            <Info className="w-6 h-6 text-rose-600" />
            <h2 className="text-md md:text-3xl font-bold text-gray-800">
              Library Statistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-500">
              <h3 className="text-3xl font-bold text-red-600 mb-1">
                {pdfDocuments.length}
              </h3>
              <p className="text-gray-600 font-medium">Total Documents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-rose-500">
              <h3 className="text-3xl font-bold text-rose-600 mb-1">
                {categories.length - 1}
              </h3>
              <p className="text-gray-600 font-medium">Categories</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-red-400">
              <h3 className="text-3xl font-bold text-red-500 mb-1">
                {pdfDocuments
                  .reduce((acc, doc) => acc + convertToMB(doc.size), 0)
                  .toFixed(2)}{" "}
                MB
              </h3>
              <p className="text-gray-600 font-medium">Total Size</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-rose-400">
              <h3 className="text-3xl font-bold text-rose-500 mb-1">
                {filteredDocuments.length}
              </h3>
              <p className="text-gray-600 font-medium">Filtered Results</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-6 text-center">
          <p className="text-lg font-semibold">PDF Library – Resource Hub</p>
          <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">
            Created by Hasitha Sandakelum
          </p>
          <p className="text-rose-200 text-sm mt-2">
            Learn smart. Read more. Expand your knowledge. 📚
          </p>
        </div>
      </div>
    </div>
  );
}
