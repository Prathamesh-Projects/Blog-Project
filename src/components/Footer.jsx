
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Youtube, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Newsletter Subscription",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `📱 ${platform}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    // { name: 'Prelims', href: '/category/prelims' },
    // { name: 'Mains', href: '/category/mains' },
    // { name: 'Current Affairs', href: '/category/current-affairs' },
    // { name: 'Resources', href: '/resources' },
    // { name: 'Interview', href: '/category/interview' }
  ];

  const otherLinks = [
  { name: 'Marathi News', href: '/category/marathi-news' },
  { name: 'Poems & Stories', href: '/category/poems-&-stories' },
  { name: 'Education', href: '/category/education' },
  { name: 'Finance & Economy', href: '/category/finance-&-economy' },
  { name: 'History & Culture', href: '/category/history-&-culture' },
  { name: 'AI & Technology', href: '/category/ai-&-technology' },
  { name: 'Current Affairs', href: '/category/current-affairs' },
  // { name: 'Lifestyle', href: '/category/lifestyle' }
];


  const importantLinks = [
    // { name: 'UPSC Official Website', href: '#' },
    // { name: 'Exam Calendar', href: '#' },
    // { name: 'Syllabus', href: '#' },
    // { name: 'Notification', href: '#' },
    // { name: 'Results', href: '#' },
    // { name: 'Cut-off Marks', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
<div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <span className="text-2xl font-bold mb-4 block text-white">
        Stay Updated with Latest Posts
      </span>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
        Get daily posts, articles, poems and stories updates directly in your inbox
      </p>
      
      <form
        onSubmit={handleNewsletterSubmit}
        className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full"
          required
        />
        <Button
          type="submit"
          className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto"
        >
          Subscribe
        </Button>
      </form>
    </div>
  </div>
</div>


      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Pankh Nave</span>
                  <p className="text-gray-400 text-sm">Blogs</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
  Welcome to your favorite Marathi blog! Discover news, poems, stories, education, 
  finance, and current affairs all in one place, written in Marathi and English for every reader.
</p>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleSocialClick('YouTube')}
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Telegram')}
                  className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Facebook')}
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Twitter')}
                  className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSocialClick('Instagram')}
                  className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <span className="text-lg font-semibold mb-4 block">Quick Links</span>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Materials */}
            <div>
              <span className="text-lg font-semibold mb-4 block">Other Materials</span>
              <ul className="space-y-2">
                {otherLinks.map((material, index) => (
                  <li key={index}>
                    <Link
                      to={material.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {material.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <span className="text-lg font-semibold mb-4 block">Contact Us</span>
              {/* <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    123 Education Street, Delhi, India - 110001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@upsccivilservices.com</span>
                </div>
              </div> */}
              
              <div className="mt-6">
                <span className="text-sm font-semibold mb-2 block">Important Links</span>
                <ul className="space-y-1">
                  {importantLinks.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSocialClick('External Link');
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Pankh Nave. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-4 right-4 md:hidden space-y-2 z-40">
        <motion.button
          onClick={() => handleSocialClick('Telegram')}
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
        <motion.button
          onClick={() => handleSocialClick('WhatsApp')}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
