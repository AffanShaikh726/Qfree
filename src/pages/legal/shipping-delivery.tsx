import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ShippingDeliveryPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Shipping & Delivery Policy</CardTitle>
          <p className="text-center text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Nature</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>QFree is a canteen food-ordering app. We do not provide courier or shipping services.</li>
              <li>Orders placed through QFree are prepared by the canteen staff and are meant for pickup at the canteen counter.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Order Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are transmitted instantly to the canteen after confirmation.</li>
              <li>Preparation time depends on the item and current order load.</li>
              <li>You will receive real-time updates about your order status.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Pickup & Collection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must collect their food directly from the canteen counter.</li>
              <li>Please have your order details ready (Order ID, User Name, or QR code) for verification.</li>
              <li>Food must be collected within the time specified by the canteen to ensure freshness.</li>
              <li>Late pickups may result in food being discarded at the canteen's discretion.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Delivery (If Applicable)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Some canteens may offer internal delivery services (e.g., to hostel/college premises).</li>
              <li>Delivery availability and areas will be clearly mentioned in the app.</li>
              <li>Delivery times are estimates and may vary based on order volume and location.</li>
              <li>QFree is not responsible for delays or service issues related to canteen delivery staff.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Responsibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once an order is marked as Completed/Delivered by the canteen, QFree has no further responsibility for the order.</li>
              <li>QFree is not liable for food quality, delays in preparation, or missed pickups.</li>
              <li>Any issues with food quality or order accuracy should be reported to the canteen staff immediately upon pickup/delivery.</li>
              <li>QFree acts solely as a platform connecting users with the canteen and is not responsible for the actual food preparation or delivery services.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Shipping & Delivery Policy, please contact us at:
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
