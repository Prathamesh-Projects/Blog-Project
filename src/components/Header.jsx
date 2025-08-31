import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Top-level categories only
  const navigationItems = [
    { title: "Education", href: "/category/education" },
    { title: "Poems & Stories", href: "/category/poems-&-stories" },
    { title: "Current Affairs", href: "/category/current-affairs" },
    { title: "Finance", href: "/category/finance-&-economy" },
    { title: "AI & Technology", href: "/category/ai-&-technology" },
    { title: "History & Culture", href: "/category/history-&-culture" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "sticky-header shadow-lg bg-white"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="../assets/logo.png" // <-- replace with your logo path
              alt="PankhNave Logo"
              className="w-8 h-8 object-contain rounded-lg"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-900">
              PankhNave
            </span>
          </Link>

          {/* ✅ Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <Button
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029VbBMb1O8V0tjACRkyr2B",
                  "_blank"
                )
              }
              className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Social Media
            </Button>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mobile-menu border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Search Articles
                </h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
                >
                  Search
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
