import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Terms and Conditions</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to <strong>QFree</strong>, a digital platform designed to facilitate food ordering from your institution's canteen. These Terms and Conditions ("Terms") govern your use of the QFree mobile application ("App") and related services (collectively, "Service").
            </p>
            <p className="font-medium">
              By accessing or using QFree, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the Service.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul className="space-y-2">
              <li><strong>"App"</strong> refers to the QFree mobile application.</li>
              <li><strong>"User"</strong> or <strong>"You"</strong> means any person who accesses or uses the Service.</li>
              <li><strong>"Canteen"</strong> refers to the food service provider at your educational institution.</li>
              <li><strong>"Order"</strong> means a request placed through the App for food items from the Canteen.</li>
              <li><strong>"Service"</strong> includes all features, content, and functionality offered through the App.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <p className="mb-4">To use QFree, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 13 years of age</li>
              <li>Be a currently enrolled student at the educational institution where QFree is being used</li>
              <li>Have a valid Google Pay account for making payments</li>
              <li>Provide accurate and complete information during registration</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Use of Service</h2>
            <h3 className="text-lg font-medium mb-2">Permitted Use</h3>
            <p className="mb-4">You may use QFree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Browse the menu and place food orders from the Canteen</li>
              <li>Make secure payments through Google Pay</li>
              <li>Track your order status in real-time</li>
              <li>View your order history</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create multiple accounts or use another user's account</li>
              <li>Place fraudulent orders or engage in any deceptive practices</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use any automated means to access the Service without permission</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Accounts & User Responsibilities</h2>
            <p className="mb-4">When creating an account, you agree to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Immediately notify us of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p>You are solely responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Ordering & Payments</h2>
            <h3 className="text-lg font-medium mb-2">Order Placement</h3>
            <p className="mb-4">
              All orders placed through QFree are subject to acceptance by the Canteen. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in the description or price of the product, or issues identified by our fraud detection systems.
            </p>

            <h3 className="text-lg font-medium mb-2">Payments</h3>
            <p className="mb-4">
              All payments are processed through Google Pay. By placing an order, you authorize us to charge your Google Pay account for the total amount of your order, including any applicable taxes and fees.
            </p>

            <h3 className="text-lg font-medium mb-2">Refunds & Cancellations</h3>
            <p>
              Refund and cancellation policies are determined by the Canteen. Generally, orders can be canceled up to 30 minutes before the scheduled pickup time. Refunds, if applicable, will be processed through the original payment method.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Canteen's Responsibility</h2>
            <p>
              QFree acts solely as a platform connecting Users with the Canteen. The Canteen is solely responsible for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Food preparation and quality</li>
              <li>Food safety and hygiene standards</li>
              <li>Order fulfillment and packaging</li>
              <li>Compliance with all applicable food safety regulations</li>
            </ul>
            <p className="mt-4">
              QFree is not responsible for any issues related to food quality, preparation, or delivery times, as these are the sole responsibility of the Canteen.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, QFree shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any direct, indirect, incidental, or consequential damages</li>
              <li>Issues related to food quality, preparation, or delivery</li>
              <li>Payment processing errors or failures</li>
              <li>Service interruptions or technical difficulties</li>
              <li>Unauthorized access to or alteration of your data</li>
            </ul>
            <p>
              QFree does not guarantee that the Service will be uninterrupted, secure, or error-free. The Service is provided "as is" and "as available" without warranties of any kind.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of the QFree App, including but not limited to text, graphics, logos, and software, are the exclusive property of QFree and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You agree not to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our App, except as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your computer may temporarily store copies of such materials in RAM</li>
              <li>You may store files that are automatically cached by your web browser</li>
              <li>You may print or download one copy of a reasonable number of pages of the App for your own personal, non-commercial use</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination of Service</h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/State], India.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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
