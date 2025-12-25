'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    investorType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                For institutional and accredited investors interested in learning more about Foresight Capital Group
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-brand-dark border border-brand-accent/30 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-accent/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Office Address</h3>
                        <p className="text-gray-400">
                          Foresight Capital Group<br />
                          [Address Line 1]<br />
                          [City, State ZIP]<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-accent/10 rounded-lg">
                        <Mail className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:ir@foresightcg.com"
                          className="text-brand-accent hover:text-white transition-colors"
                        >
                          ir@foresightcg.com
                        </a>
                        <p className="text-gray-500 text-sm mt-1">General Inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-accent/10 rounded-lg">
                        <Phone className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+15551234567"
                          className="text-brand-accent hover:text-white transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                        <p className="text-gray-500 text-sm mt-1">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand-accent/10 rounded-lg">
                        <Clock className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-400">
                          Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-accent" />
                    Department Contacts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-400">Investor Relations:</p>
                      <a href="mailto:ir@foresightcg.com" className="text-brand-accent hover:text-white">
                        ir@foresightcg.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-400">Legal & Compliance:</p>
                      <a href="mailto:legal@foresightcg.com" className="text-brand-accent hover:text-white">
                        legal@foresightcg.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-400">Privacy Matters:</p>
                      <a href="mailto:privacy@foresightcg.com" className="text-brand-accent hover:text-white">
                        privacy@foresightcg.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-400">General Information:</p>
                      <a href="mailto:info@foresightcg.com" className="text-brand-accent hover:text-white">
                        info@foresightcg.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-brand-dark border border-brand-accent/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <p className="text-gray-400 mb-6">
                  Please fill out the form below and a member of our team will contact you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Institution / Entity
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="Your institution or entity"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Investor Type *
                    </label>
                    <select
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select investor type</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="accredited-individual">Accredited Individual</option>
                      <option value="family-office">Family Office</option>
                      <option value="fund-of-funds">Fund of Funds</option>
                      <option value="other">Other Accredited Investor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you acknowledge that you have read our{' '}
                    <a href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="/terms" className="text-brand-accent hover:underline">Terms of Use</a>.
                  </p>
                </form>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-6">
              <h3 className="text-white font-bold mb-3">Important Notice</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                All inquiries are subject to verification of accredited investor status as required under
                Rule 506(c) of Regulation D. Foresight Capital Group works exclusively with institutional
                and accredited investors. This contact form does not constitute an offer or solicitation of
                any securities or investment products.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
