import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Contact Us</CardTitle>
          <p className="text-center text-muted-foreground">We're here to help and answer any questions you might have.</p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Support</h3>
                <p className="text-muted-foreground">Have questions? We're here to help.</p>
                <a href="mailto:support@qfreeapp.com" className="text-primary hover:underline font-medium">
                  support@qfreeapp.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Office Address</h3>
                <p className="text-muted-foreground">Visit us during business hours</p>
                <p className="font-medium">
                  Canteen Building, Main Campus<br />
                  SRM University Kattankulathur<br />
                  SRM Nagar, Potheri, Kattankulathur<br />
                  Tamil Nadu 603203, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone Support</h3>
                <p className="text-muted-foreground">Available during support hours</p>
                <p className="font-medium">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Support Hours</h3>
                <ul className="space-y-1">
                  <li className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Monday – Friday:</span>
                    <span className="font-medium">9:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM – 2:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We'll do our best to respond to your queries as soon as possible. For general inquiries, please allow up to 24-48 hours for a response during business days.
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">For immediate assistance:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check our <a href="/faq" className="text-primary hover:underline">FAQ page</a> for quick answers</li>
                <li>Visit the canteen help desk during business hours</li>
                <li>For order-related issues, include your Order ID in your email</li>
              </ul>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
