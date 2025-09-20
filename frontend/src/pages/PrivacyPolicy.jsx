import React from 'react';
import { assets } from "../assets/assets";

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: September 21, 2025
        </p>

        <div className="space-y-10">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <p>We collect several types of information from and about users of our website, including:</p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-800 mb-2">Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Contact details: name, email address, phone number, shipping/billing address</li>
                  <li>Account information: username, password, profile picture</li>
                  <li>Payment information: credit/debit card details (securely processed by our payment partners)</li>
                  <li>Order history and purchase details</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-md mt-4">
                <h3 className="font-medium text-gray-800 mb-2">Technical Information:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, browser type, and version</li>
                  <li>Pages you visit and time spent on our site</li>
                  <li>Device information and operating system</li>
                  <li>Cookies and tracking technologies data</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect for various purposes, including to:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border p-4 rounded-md">
                  <h3 className="font-medium text-gray-800 mb-2">Order Processing</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Process and fulfill your purchases</li>
                    <li>Send order confirmations and updates</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>

                <div className="border p-4 rounded-md">
                  <h3 className="font-medium text-gray-800 mb-2">Service Improvement</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Personalize your shopping experience</li>
                    <li>Improve our website and services</li>
                    <li>Develop new products and features</li>
                    <li>Analyze site usage and trends</li>
                  </ul>
                </div>

                <div className="border p-4 rounded-md">
                  <h3 className="font-medium text-gray-800 mb-2">Communication</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Respond to your inquiries</li>
                    <li>Send service-related announcements</li>
                    <li>Provide promotional offers (with your consent)</li>
                    <li>Request feedback on our services</li>
                  </ul>
                </div>

                <div className="border p-4 rounded-md">
                  <h3 className="font-medium text-gray-800 mb-2">Legal Compliance</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Comply with legal obligations</li>
                    <li>Enforce our terms and conditions</li>
                    <li>Protect our rights and property</li>
                    <li>Prevent fraudulent activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Security Measures</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security audits</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Payment Security</h3>
                  <p className="mb-2">We use PCI-DSS compliant payment processors and do not store your full payment details on our servers.</p>
                  <div className="flex items-center gap-3 mt-2">
                    <img src={assets.ssl_secure} alt="SSL Secure" className="h-8" />SSL Secure 
                    <img src={assets.pci_compliant} alt="PCI Compliant" className="h-8" />PCI Compliant
                  </div>
                </div>
              </div>
              
              <p className="mt-4">While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but we work hard to protect your information to the best of our ability.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Your Privacy Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Access & Portability</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Request access to your personal data</li>
                    <li>Receive a copy of your information in a portable format</li>
                    <li>Review how we process your data</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Control & Deletion</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Update or correct your information</li>
                    <li>Delete your personal data</li>
                    <li>Restrict or object to processing</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4">To exercise these rights, please contact us using the information in the "Contact Us" section below. We may need to verify your identity before processing your request.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full mt-4 border">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left border">Type</th>
                      <th className="px-4 py-2 text-left border">Purpose</th>
                      <th className="px-4 py-2 text-left border">How to Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">Essential</td>
                      <td className="px-4 py-2 border">Site functionality and security</td>
                      <td className="px-4 py-2 border">Cannot be disabled</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">Analytics</td>
                      <td className="px-4 py-2 border">Understand site usage</td>
                      <td className="px-4 py-2 border">Browser settings or our cookie banner</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">Marketing</td>
                      <td className="px-4 py-2 border">Personalized ads</td>
                      <td className="px-4 py-2 border">Opt-out in account settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-4">You can manage your cookie preferences through your browser settings or by using our cookie consent tool.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. International Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions where applicable</li>
                <li>Other legal transfer mechanisms</li>
              </ul>
              <p>By using our services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules than in your country.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without verification of parental consent, we take steps to remove that information from our servers.</p>
              <p>If you believe we might have any information from or about a child under 16, please contact us immediately.</p>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.</p>
              <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="font-medium text-blue-800">Notification of Changes</p>
                <p className="text-blue-700 text-sm mt-1">For significant changes, we may provide additional notice (such as adding a statement to our homepage or sending you a notification).</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Mailing Address</h3>
                  <p>ASUK Apparel Pvt. Ltd.<br />
                  123 Fashion Street, Bandra West<br />
                  Mumbai, Maharashtra 400050<br />
                  India</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Contact Information</h3>
                  <p>
                    <span className="font-medium">Email:</span> support@asuk.com<br />
                    <span className="font-medium">Phone:</span> +91 9924294924<br />
                    <span className="font-medium">Hours:</span> Monday - Friday, 10 AM - 7 PM IST
                  </p>
                </div>
              </div>
              
              <p className="mt-4">We aim to respond to all inquiries within 48 business hours. For data protection requests, please include "Privacy Request" in your subject line.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
