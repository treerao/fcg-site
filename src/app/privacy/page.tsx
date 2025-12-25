'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 mb-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert prose-cyan max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group ("FCG," "we," "us," or "our") respects your privacy and is
                    committed to protecting your personal information. This Privacy Policy describes how
                    we collect, use, disclose, and safeguard your information when you visit our website
                    or interact with our services.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We may collect the following types of information:</p>
                  <h3 className="text-xl font-bold text-white mt-6 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Name, email address, phone number</li>
                    <li>Institution or entity name</li>
                    <li>Investor type and accreditation status</li>
                    <li>Financial information for verification purposes</li>
                  </ul>
                  <h3 className="text-xl font-bold text-white mt-6 mb-3">Usage Information</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and exit pages</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Verify your status as an accredited investor as required by Rule 506(c)</li>
                    <li>Provide you with information about our investment opportunities</li>
                    <li>Respond to your inquiries and provide customer service</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Detect and prevent fraud or unauthorized access</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Third-party verification services to confirm accredited investor status</li>
                    <li>Service providers who assist with our business operations</li>
                    <li>Legal and regulatory authorities when required by law</li>
                    <li>Professional advisers, including lawyers, auditors, and consultants</li>
                  </ul>
                  <p>
                    We do not sell, rent, or otherwise share your personal information with third parties
                    for their marketing purposes without your consent.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However,
                    no method of transmission over the Internet or electronic storage is 100% secure, and we
                    cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy, unless a longer retention period is required or permitted
                    by law. This includes retention for regulatory compliance and record-keeping requirements.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>Depending on your jurisdiction, you may have the following rights:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your information (subject to legal obligations)</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@foresightcg.com.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website.
                    You can control cookie settings through your browser preferences. However, disabling cookies
                    may limit your ability to use certain features of our website.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Your information may be transferred to and processed in countries other than your country
                    of residence. We will ensure that appropriate safeguards are in place to protect your
                    information in accordance with applicable data protection laws.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Our website is not intended for individuals under the age of 18. We do not knowingly
                    collect personal information from children. If we become aware that we have collected
                    information from a child, we will take steps to delete such information.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material
                    changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="font-semibold">
                    Foresight Capital Group<br />
                    Email: privacy@foresightcg.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
