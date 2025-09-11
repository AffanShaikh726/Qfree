import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Privacy Policy</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to <strong>QFree</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal Data</h3>
            <p className="mb-4">
              We may collect personal information that can be used to identify you, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely through Google Pay)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6">Non-Personal Data</h3>
            <p>We automatically collect certain information when you use our app, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device information (type, model, operating system)</li>
              <li>Usage data and analytics</li>
              <li>IP address and mobile network information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Payment processors (Google Pay) for transaction processing</li>
              <li>Analytics providers to understand usage patterns</li>
              <li>When required by law or to protect rights and safety</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Payment Processing</h2>
            <p>
              All payments are processed through Google Pay. We do not store your payment card details on our servers. 
              Google Pay handles all payment information in accordance with their privacy policy and security standards.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Restricted access to personal information</li>
              <li>Secure server infrastructure</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify any personal information that is inaccurate</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our app and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p>
              Our app is not intended for children under 16 years of age. We do not knowingly collect personal information 
              from children under 16. If we learn we have collected personal information from a child under 16, 
              we will delete that information as soon as possible.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2 font-medium">
              Email: support@qfreeapp.com
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
