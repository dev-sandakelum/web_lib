"use client";
import React, { useState } from 'react';
import { BookOpen, FileText, Search, Download, ExternalLink, FolderOpen } from 'lucide-react';

interface PDFItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  size: string;
}

export default function PDFLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Documents', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'networking', name: 'Networking', icon: <FileText className="w-5 h-5" /> },
    { id: 'programming', name: 'Programming', icon: <FileText className="w-5 h-5" /> },
    { id: 'IS', name: 'Information Systems', icon: <FileText className="w-5 h-5" /> }
  ];

  const pdfDocuments: PDFItem[] = [
    {
      id: '1',
      title: 'Information Systems Questions',
      description: 'A collection of questions for Information Systems.',
      category: 'IS',
      url: 'https://github.com/dev-sandakelum/web_lib/raw/main/resourses/pdf/Information System Questions.pdf',
      size: '0.134 MB'
    },
  ];

  const filteredDocuments = pdfDocuments.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">PDF Library</h1>
              <p className="text-red-100 text-lg">Your comprehensive document collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-red-200 focus:border-red-500 focus:outline-none text-gray-700 bg-white shadow-md"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-red-50 text-gray-700 hover:bg-red-100 hover:shadow-md'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Document Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {filteredDocuments.length} {filteredDocuments.length === 1 ? 'Document' : 'Documents'}
          </h2>
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No documents found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-transparent hover:border-red-300"
              >
                <div className="bg-gradient-to-br from-red-500 to-rose-500 p-6">
                  <FileText className="w-12 h-12 text-white mb-2" />
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {categories.find(c => c.id === doc.category)?.name || doc.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="font-medium">{doc.size}</span>
                  </div>

                  <div className="flex gap-3">
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
                      className="flex items-center justify-center bg-red-100 text-red-700 px-4 py-3 rounded-lg hover:bg-red-200 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-red-500">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {pdfDocuments.length}
            </div>
            <div className="text-gray-600 font-medium">Total Documents</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-rose-500">
            <div className="text-3xl font-bold text-rose-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600 font-medium">Categories</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-red-400">
            <div className="text-3xl font-bold text-red-500 mb-2">
              {pdfDocuments.reduce((acc, doc) => acc + parseFloat(doc.size), 0).toFixed(1)} MB
            </div>
            <div className="text-gray-600 font-medium">Total Size</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-rose-400">
            <div className="text-3xl font-bold text-rose-500 mb-2">
              {filteredDocuments.length}
            </div>
            <div className="text-gray-600 font-medium">Filtered Results</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">PDF Library Collection</p>
          <p className="text-red-100">Access quality educational resources anytime</p>
        </div>
      </div>
    </div>
  );
}