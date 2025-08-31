
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
      {/* Social Updates Section */}
<div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <span className="text-2xl font-bold mb-4 block text-white">
        Stay Updated with Latest Posts
      </span>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
        Join us on Telegram, WhatsApp, YouTube & Facebook for daily posts, articles, poems and stories
      </p>

      {/* Icons Section */}
      <div className="flex justify-center gap-6">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/16okmVQhxY/" // <-- replace with your Facebook page link
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.847V11.41h2.973V8.41c0-2.937 1.792-4.54 4.412-4.54 1.254 0 2.33.093 2.642.135v3.06h-1.815c-1.425 0-1.7.677-1.7 1.67v2.19h3.406l-.445 3.296h-2.961V24h5.805C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>
        
        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029VbBMb1O8V0tjACRkyr2B" // <-- replace with your WhatsApp channel link
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 25 25">
            <path d="M20.52 3.48A11.867 11.867 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.118.555 4.19 1.61 6.013L0 24l6.236-1.64A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.196-1.247-6.203-3.48-8.52zM12 22.1c-1.872 0-3.693-.507-5.27-1.466l-.378-.226-3.698.974.987-3.602-.246-.371A9.929 9.929 0 0 1 2.1 12c0-5.47 4.43-9.9 9.9-9.9 2.646 0 5.136 1.033 7.006 2.908A9.864 9.864 0 0 1 21.9 12c0 5.47-4.43 9.9-9.9 9.9z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com/@pankhnave5552?si=VSCI4isQfYhL_MjG" // <-- replace with your YouTube link
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.6.3c-.5.1-1.4.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.6.3 7.6.3s4.9 0 8.6-.3c.5-.1 1.4-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 14.5v-5l5.2 2.5-5.2 2.5z"/>
          </svg>
        </a>

        

        {/* Telegram */}
        <a
          href="https://t.me/YourChannel" // <-- replace with your Telegram link
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 26 20">
            <path d="M9.999 15.171 9.959 19c.586 0 .841-.252 1.148-.555l2.764-2.654 5.735 4.184c1.052.582 1.797.276 2.061-.975l3.73-17.55c.37-1.648-.596-2.29-1.624-1.885L1.83 9.29C.214 9.94.222 10.874 1.527 11.28l5.894 1.84 13.67-8.63-11.092 10.68z"/>
          </svg>
        </a>

      </div>
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
                <img 
                  src="/assets/logo.png"   // <-- replace with your logo path
                  alt="PankhNave Logo" 
                  className="w-10 h-10 object-contain rounded-lg"
                  />
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
  <a
    href="https://youtube.com/@pankhnave5552?si=VSCI4isQfYhL_MjG"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
  >
    <Youtube className="w-5 h-5" />
  </a>
  <a
    href="https://t.me/YourTelegramChannel"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <MessageCircle className="w-5 h-5" />
  </a>
  <a
    href="https://www.facebook.com/share/16okmVQhxY/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </a>
  <a
    href="https://x.com/IPRAHUL?t=29DDLWM88Qc2wI4Q5j20YQ&s=09"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
  >
    <Twitter className="w-5 h-5" />
  </a>
  <a
    href="https://www.instagram.com/rahul_ingale_patil?igsh=MWwyNzNkcTRwajY5dQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>
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
