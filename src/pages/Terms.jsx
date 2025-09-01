// src/pages/Terms.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-10 lg:px-20 bg-gray-50 text-gray-800">
      <Helmet>
        <title>Terms of Service - Pankh Nave</title>
        <meta
          name="description"
          content="Terms of Service for Pankh Nave, a Marathi blog platform sharing news, poems, stories, and cultural content."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Terms of Service
        </h1>

        <p className="mb-4">
          Welcome to Pankh Nave! By accessing or using our website, you agree to comply with and be bound by the following terms:
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Our Website</h2>
        <p className="mb-4">
          You agree to use Pankh Nave for lawful purposes only. You must not engage in any activity that could harm the website, its content, or other users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Content Ownership</h2>
        <p className="mb-4">
          All content on this website, including articles, poems, stories, and images, is owned by Pankh Nave or its contributors. You may not copy, reproduce, or distribute content without permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. User-Generated Content</h2>
        <p className="mb-4">
          If you submit comments or contributions, you grant Pankh Nave a non-exclusive, royalty-free license to use, display, and distribute your content on the website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
        <p className="mb-4">
          The content on Pankh Nave is for informational and entertainment purposes only. While we strive for accuracy, we do not guarantee the completeness or correctness of the content. Use the information at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Pankh Nave is not liable for any damages arising from your use of the website, including direct, indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. External Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms of Service from time to time. By continuing to use our website, you agree to any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4">
          For questions about these terms, please contact us at: <a href="mailto:rahulip33@gmail.com" className="text-blue-600 underline">rahulip33@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
