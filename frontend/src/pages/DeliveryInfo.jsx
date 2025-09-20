import React from 'react';
import { assets } from '../assets/assets';

export const DeliveryInfo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Delivery Information</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about shipping, delivery times, and order tracking for your ASUK orders.
        </p>
      </div>
      
      <div className="space-y-12">
        {/* Domestic Shipping */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Domestic Shipping</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3">Standard Delivery</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>3-5 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Free on orders over ₹2,999</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Order before 2 PM for same-day dispatch</span>
                </li>
              </ul>
            </div>

            <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3">Express Delivery</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>1-2 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Flat rate of ₹199</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Priority processing</span>
                </li>
              </ul>
            </div>

            <div className="border p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-3">Store Pickup</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Ready in 2-3 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Free pickup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Try before you buy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">International Shipping</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Available Countries</h3>
              <p className="text-gray-700 mb-4">
                We ship to the USA, UK, Canada, Australia, UAE, and Singapore.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Shipping Rates & Times</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="px-3 py-2 text-left border">Region</th>
                        <th className="px-3 py-2 text-left border">Delivery Time</th>
                        <th className="px-3 py-2 text-left border">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border">USA & Canada</td>
                        <td className="px-3 py-2 border">7-10 days</td>
                        <td className="px-3 py-2 border">$24.99</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">UK & Europe</td>
                        <td className="px-3 py-2 border">8-12 days</td>
                        <td className="px-3 py-2 border">$29.99</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border">Australia & NZ</td>
                        <td className="px-3 py-2 border">10-14 days</td>
                        <td className="px-3 py-2 border">$34.99</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-3 py-2 border">Middle East</td>
                        <td className="px-3 py-2 border">6-9 days</td>
                        <td className="px-3 py-2 border">$39.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-blue-700">*Free international shipping on orders over $200</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Customs & Import Duties</h3>
              <p className="text-gray-700 mb-4">
                International orders may be subject to import duties, taxes, and customs fees. These charges are the responsibility of the recipient and are not included in the order total.
              </p>
              
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium text-yellow-800 mb-2">Important Information</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-700">
                  <li>Check with your local customs office for more information</li>
                  <li>We cannot predict what these charges will be</li>
                  <li>Refused shipments subject to 15% restocking fee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Order Tracking */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Order Tracking</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">How to Track Your Order</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm font-medium">1</span>
                  <span>You'll receive a confirmation email with your order number once your order is placed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm font-medium">2</span>
                  <span>When your order ships, you'll receive a shipping confirmation email with tracking information.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm font-medium">3</span>
                  <span>Click the tracking link in your email or enter your tracking number on our website.</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Track Your Order</h3>
              <div className="border rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="order-number" className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                    <input
                      type="text"
                      id="order-number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Enter order number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Enter email address"
                    />
                  </div>
                  <button className="w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">How long does delivery take?</h3>
              <p className="mt-1 text-gray-600">
                Standard delivery takes 3-5 business days. Express delivery takes 1-2 business days. International delivery times vary by destination.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">Do you offer free shipping?</h3>
              <p className="mt-1 text-gray-600">
                Yes, we offer free standard shipping on all domestic orders over ₹2,999. International orders over $200 also qualify for free shipping.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">Can I change my delivery address after ordering?</h3>
              <p className="mt-1 text-gray-600">
                You can change your delivery address within 1 hour of placing your order. After that, please contact our customer service team immediately.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-900">What if I'm not home when my order arrives?</h3>
              <p className="mt-1 text-gray-600">
                The delivery agent will attempt delivery 3 times. After that, your package will be returned to our warehouse and you'll be charged a return shipping fee.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gray-50 p-6 md:p-8 rounded-xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Need Help with Your Order?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our customer service team is available to assist you with any questions about your order or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@asuk.com" 
                className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block text-center"
              >
                Email Support
              </a>
              <a 
                href="tel:+91902488492" 
                className="border border-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Call +91 90248 8492
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Monday - Friday, 10 AM - 7 PM IST
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeliveryInfo;
