// src/pages/Contact.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-10 lg:px-20 bg-gray-50 text-gray-800">
      <Helmet>
        <title>Contact Us - Pankh Nave</title>
        <meta
          name="description"
          content="Contact Pankh Nave, a Marathi blog platform for news, poems, stories, and cultural content."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="mb-6 text-gray-700">
          Connect with us via email or follow us on our social media channels for updates.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 flex-wrap">

             <Button
            onClick={() => window.open('https://whatsapp.com/channel/0029VbBMb1O8V0tjACRkyr2B', '_blank')}
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg gap-2"
          >
            <Phone className="w-5 h-5" />
            WhatsApp
          </Button>


          <Button
            onClick={() => window.open('https://t.me/YourTelegramChannel', '_blank')}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Telegram
          </Button>

         

          <Button
            onClick={() => window.open('https://www.facebook.com/share/16okmVQhxY/', '_blank')}
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg gap-2"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </Button>

          <Button
            onClick={() => window.open('https://x.com/IPRAHUL?t=29DDLWM88Qc2wI4Q5j20YQ&s=09', '_blank')}
            className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg gap-2"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </Button>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
