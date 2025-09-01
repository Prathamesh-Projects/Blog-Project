// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-10 lg:px-20 bg-gray-50 text-gray-800">
      <Helmet>
        <title>Privacy Policy - Pankh Nave</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Pankh Nave. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how Pankh Nave collects, uses, and protects your personal information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Personal information you provide voluntarily (e.g., name, email address).</li>
          <li>Non-personal information collected automatically (e.g., IP address, browser type, device information).</li>
          <li>Cookies and usage data to enhance your browsing experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To provide, operate, and maintain our website.</li>
          <li>To improve user experience and site performance.</li>
          <li>To send promotional content or updates (only if you opt-in).</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies & Tracking</h2>
        <p className="mb-4">
          We use cookies to personalize content, analyze traffic, and provide social media features. You can manage cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services (like Google Analytics or AdSense) that collect information to help us improve the website and deliver relevant ads. These services have their own privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Children’s Privacy</h2>
        <p className="mb-4">
          Our website is not directed to children under 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:rahulip33@gmail.com" className="text-blue-600 underline">rahulip33@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
