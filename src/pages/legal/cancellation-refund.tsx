import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CancellationRefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Cancellation & Refund Policy</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Order Cancellation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once an order is placed and confirmed, it cannot be canceled through the app.</li>
              <li>If you wish to cancel, you must immediately contact the canteen staff directly.</li>
              <li>The canteen has the right to accept or deny cancellation requests, depending on food preparation status.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Refund Policy</h2>
            
            <h3 className="text-lg font-medium mb-2">No Refunds will be provided for:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Orders already prepared or delivered.</li>
              <li>Wrong information entered by the user (e.g., wrong item, quantity, or pickup details).</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Refunds may be provided if:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>The canteen is unable to prepare or deliver your order.</li>
              <li>A payment is deducted but the order is not recorded in the system.</li>
              <li>The same order is charged multiple times due to a technical issue.</li>
            </ul>

            <p className="mb-4">
              All refunds (if applicable) will be processed through Google Pay only. The time taken to reflect the refund depends on your bank/payment provider.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Responsibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>QFree is only a platform for ordering. Final decision on cancellation or refund rests with the canteen and the payment provider (Google Pay).</li>
              <li>QFree is not liable for delays in refund processing caused by third-party services.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cancellation & Refund Policy, please contact us at:
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
