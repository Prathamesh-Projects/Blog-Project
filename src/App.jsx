
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import BlogPost from '@/pages/BlogPost';
import ResourcesPage from '@/pages/ResourcesPage';
import ScrollToTop from "@/components/ScrollToTop";
import SearchPage from "@/pages/SearchPages"; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Helmet>
          <title>Pankh Nave</title>
          <meta name="description" content="Comprehensive UPSC Civil Services preparation platform with Prelims, Mains, Optional subjects, Current Affairs, and Interview guidance. Expert notes, practice tests, and study materials." />
          <meta name="keywords" content="UPSC, Civil Services, IAS, IPS, Prelims, Mains, Current Affairs, Study Material, Notes, Practice Tests" />
          <meta property="og:title" content="UPSC Civil Services Preparation - Complete Study Material & Resources" />
          <meta property="og:description" content="Comprehensive UPSC Civil Services preparation platform with expert guidance and study materials." />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Header />
        
        <main className="min-h-screen">
          <Routes>
             
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/post/:postId" element={<BlogPost />} />
            <Route path="/resources" element={<ResourcesPage />} />
             <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
