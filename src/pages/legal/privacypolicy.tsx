// src/pages/legal/PrivacyPolicy.tsx

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">QueueFree</span>. Your
        privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your personal information when you use our app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Account Information:</strong> Name, email, and phone number
          when you sign up.
        </li>
        <li>
          <strong>Order Details:</strong> Items you order, payment method, and
          transaction history.
        </li>
        <li>
          <strong>Usage Data:</strong> App usage, device info, and logs for
          improving our services.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the collected information to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and manage your food orders.</li>
        <li>Improve app performance and user experience.</li>
        <li>Send important updates about your orders or the app.</li>
        <li>Ensure security and prevent fraud.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal data. Information may be shared
        only with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Canteen staff for processing your orders.</li>
        <li>Service providers (like payment gateways) to complete transactions.</li>
        <li>Legal authorities if required by law.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use reasonable technical and organizational measures to protect your
        information. However, no method of transmission over the internet is
        100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request to access, update, or delete your personal data by
        contacting us at <span className="font-semibold">support@queuefree.app</span>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted in the app with the updated date.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
