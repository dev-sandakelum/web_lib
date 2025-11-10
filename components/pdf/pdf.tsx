"use client";
import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  FolderOpen,
  Search,
  Download,
  ExternalLink,
  Info,
  Layers,
} from "lucide-react";
import { PdfDocuments } from "./dataset";


export default function PDFLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Documents", icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "networking", name: "Networking", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "programming", name: "Programming", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: "IS", name: "Information Systems", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  // Convert KB/MB/GB → MB
  const convertToMB = (sizeStr: string): number => {
    const match = sizeStr.match(/([\d.]+)\s*(KB|MB|GB)/i);
    if (!match) return 0;
    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    switch (unit) {
      case "KB":
        return value / 1024;
      case "GB":
        return value * 1024;
      default:
        return value;
    }
  };

  const filteredDocuments = PdfDocuments.filter((doc) => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-red-100 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-5 sm:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">PDF Library</h1>
                <p className="text-lg sm:text-xl font-medium text-rose-100">
                  Study Resource Collection
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-rose-100 max-w-2xl">
            Access, browse, and download educational resources with a clean and responsive design.
          </p>
        </header>

        {/* Search & Categories */}
        <section className="p-5 sm:p-8 bg-rose-50 border-b border-rose-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
            Browse & Search
          </h3>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 sm:py-4 rounded-xl border-2 border-rose-200 focus:border-rose-500 focus:outline-none text-gray-700 bg-white shadow-md text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md scale-105"
                    : "bg-white border border-rose-200 text-gray-700 hover:bg-rose-100 hover:shadow-sm"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Document Section */}
        <section className="p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-rose-600">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Available Documents
            </h2>
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center border border-rose-200">
              <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-base sm:text-lg">
                No documents found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-5 sm:p-6">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-medium">
                      {categories.find((c) => c.id === doc.category)?.name || doc.category}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 hover:text-rose-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {doc.description}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">{doc.size}</p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-3 rounded-lg font-medium hover:from-red-700 hover:to-rose-700 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
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
        </section>

        {/* Stats */}
        <section className="p-5 sm:p-8 bg-gradient-to-br from-rose-50 to-red-50">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-rose-600">
            <Info className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Library Statistics</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center border-t-4 border-red-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">{PdfDocuments.length}</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Total Documents</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center border-t-4 border-rose-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-1">{categories.length - 1}</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Categories</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center border-t-4 border-red-400">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-1">
                {PdfDocuments.reduce((acc, doc) => acc + convertToMB(doc.size), 0).toFixed(2)} MB
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Total Size</p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md text-center border-t-4 border-rose-400">
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-500 mb-1">
                {filteredDocuments.length}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Filtered Results</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-center px-5 py-6 sm:py-8">
          <p className="text-base sm:text-lg font-semibold">PDF Library – Resource Hub</p>
          <p className="text-xs sm:text-sm font-medium mt-2 text-white opacity-80">
            Created by Hasitha Sandakelum
          </p>
          <p className="text-rose-200 text-xs sm:text-sm mt-2">
            Learn smart. Read more. Expand your knowledge. 📚
          </p>
        </footer>
      </div>
    </div>
  );
}
