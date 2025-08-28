
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Video, 
  Search, 
  Filter,
  Star,
  Eye,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: 156 },
    { id: 'ncert', name: 'NCERT Notes', count: 45 },
    { id: 'notes', name: 'Study Notes', count: 38 },
    { id: 'pyq', name: 'Previous Year Papers', count: 28 },
    { id: 'mindmaps', name: 'Mind Maps', count: 22 },
    { id: 'answer-writing', name: 'Answer Writing', count: 15 },
    { id: 'current-affairs', name: 'Current Affairs PDFs', count: 8 }
  ];

  const resources = [
    {
      id: 1,
      title: "NCERT Class 6-12 Complete Notes",
      description: "Comprehensive notes covering all NCERT textbooks from Class 6 to 12, specially curated for UPSC preparation.",
      category: "ncert",
      type: "PDF",
      size: "45.2 MB",
      pages: 850,
      downloads: "25.4k",
      rating: 4.8,
      date: "2024-02-15",
      featured: true,
      subjects: ["History", "Geography", "Polity", "Economy", "Science"],
      image: "NCERT textbooks collection with comprehensive study notes and highlights"
    },
    {
      id: 2,
      title: "Indian Polity by Laxmikanth - Summary Notes",
      description: "Concise summary of M. Laxmikanth's Indian Polity covering all important topics for Prelims and Mains.",
      category: "notes",
      type: "PDF",
      size: "12.8 MB",
      pages: 180,
      downloads: "18.7k",
      rating: 4.9,
      date: "2024-02-12",
      featured: true,
      subjects: ["Polity", "Constitution"],
      image: "Indian Polity book summary with constitutional framework diagrams"
    },
    {
      id: 3,
      title: "UPSC Prelims Previous Year Papers (2015-2023)",
      description: "Complete collection of UPSC Prelims question papers with detailed solutions and explanations.",
      category: "pyq",
      type: "PDF",
      size: "28.5 MB",
      pages: 320,
      downloads: "32.1k",
      rating: 4.7,
      date: "2024-02-10",
      featured: false,
      subjects: ["General Studies", "CSAT"],
      image: "UPSC previous year question papers with answer sheets and analysis"
    },
    {
      id: 4,
      title: "Economy Mind Maps - Complete Coverage",
      description: "Visual mind maps covering entire economy syllabus including budget, economic survey, and current developments.",
      category: "mindmaps",
      type: "PDF",
      size: "8.9 MB",
      pages: 45,
      downloads: "14.2k",
      rating: 4.6,
      date: "2024-02-08",
      featured: false,
      subjects: ["Economy", "Budget", "Economic Survey"],
      image: "Colorful mind maps showing economic concepts and interconnections"
    },
    {
      id: 5,
      title: "Mains Answer Writing Templates",
      description: "Structured templates and sample answers for all GS papers with evaluation criteria and improvement tips.",
      category: "answer-writing",
      type: "PDF",
      size: "15.3 MB",
      pages: 120,
      downloads: "9.8k",
      rating: 4.8,
      date: "2024-02-06",
      featured: true,
      subjects: ["Mains", "Answer Writing", "GS Papers"],
      image: "Answer writing templates with structured format and evaluation criteria"
    },
    {
      id: 6,
      title: "Current Affairs February 2024",
      description: "Monthly compilation of important current affairs with analysis and relevance for UPSC examination.",
      category: "current-affairs",
      type: "PDF",
      size: "6.7 MB",
      pages: 85,
      downloads: "22.5k",
      rating: 4.7,
      date: "2024-02-28",
      featured: false,
      subjects: ["Current Affairs", "Monthly Compilation"],
      image: "Current affairs magazine with news analysis and UPSC relevance"
    },
    {
      id: 7,
      title: "Environment & Ecology Complete Notes",
      description: "Comprehensive coverage of environment and ecology topics with latest developments and case studies.",
      category: "notes",
      type: "PDF",
      size: "18.4 MB",
      pages: 200,
      downloads: "16.3k",
      rating: 4.5,
      date: "2024-02-04",
      featured: false,
      subjects: ["Environment", "Ecology", "Climate Change"],
      image: "Environmental science concepts with ecosystem diagrams and conservation strategies"
    },
    {
      id: 8,
      title: "Science & Technology Mind Maps",
      description: "Visual representation of important S&T topics including space technology, biotechnology, and emerging technologies.",
      category: "mindmaps",
      type: "PDF",
      size: "11.2 MB",
      pages: 60,
      downloads: "12.7k",
      rating: 4.6,
      date: "2024-02-02",
      featured: false,
      subjects: ["Science", "Technology", "Innovation"],
      image: "Science and technology mind maps with latest innovations and discoveries"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesTab = activeTab === 'all' || resource.category === activeTab;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const handleDownload = (resource) => {
    toast({
      title: `📥 Downloading ${resource.title}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleFilter = () => {
    toast({
      title: "🔍 Advanced Filters",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="pt-16 min-h-screen ">
      <Helmet>
        <title>Study Resources - UPSC Civil Services Preparation Materials</title>
        <meta name="description" content="Download comprehensive UPSC study materials including NCERT notes, previous year papers, mind maps, current affairs PDFs, and answer writing templates." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-white"
          >
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Resources</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive collection of study materials, notes, and practice resources for UPSC Civil Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleDownload({ title: 'Complete Study Package' })}
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
              >
                <Download className="mr-2 w-5 h-5" />
                Download All Resources
              </Button>
              <Button
                onClick={handleFilter}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold"
              >
                <Filter className="mr-2 w-5 h-5" />
                Advanced Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Category:</span>
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {resourceCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <img  
                  className="w-full h-48 object-cover"
                  alt={resource.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {resource.type}
                  </span>
                  {resource.featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {resource.size}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.subjects.slice(0, 3).map((subject, subIndex) => (
                    <span
                      key={subIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {subject}
                    </span>
                  ))}
                  {resource.subjects.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{resource.subjects.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {resource.pages} pages
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {resource.downloads}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{resource.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Updated: {new Date(resource.date).toLocaleDateString()}
                  </span>
                  <Button
                    onClick={() => handleDownload(resource)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setActiveTab('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Featured Resources Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Study Package</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get access to our complete collection of study materials, video lectures, and personalized guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Study Material</h3>
                <p className="text-gray-600">All subjects covered with expert-curated content</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Lectures</h3>
                <p className="text-gray-600">HD quality lectures by experienced faculty</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Mentorship</h3>
                <p className="text-gray-600">One-on-one guidance from successful candidates</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                onClick={() => handleDownload({ title: 'Premium Package' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Get Premium Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResourcesPage;
