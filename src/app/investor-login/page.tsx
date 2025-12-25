'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lock, Mail, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function InvestorLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login functionality would be implemented here
  };

  return (
    <div className="relative min-h-screen bg-brand-dark flex flex-col">
      <Navbar />

      <main className="relative z-10 flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-4">
                <Lock className="w-8 h-8 text-brand-accent" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Investor Portal
              </h1>
              <p className="text-gray-400">
                Secure access for verified investors
              </p>
            </div>

            {/* Notice Banner */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-blue-300 mb-1">Access Credentials Required</p>
                  <p>
                    Login credentials are provided to verified accredited investors upon subscription
                    completion. If you have not yet subscribed or completed verification, please contact
                    our investor relations team.
                  </p>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="bg-brand-dark border border-brand-accent/30 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="••••••••"
                      disabled
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full px-8 py-4 bg-gray-700 text-gray-400 font-bold rounded-lg cursor-not-allowed"
                >
                  Login Unavailable
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                <a href="#" className="text-brand-accent hover:text-white transition-colors pointer-events-none opacity-50">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                Need access to the investor portal?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/investor-access"
                  className="px-6 py-3 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-all"
                >
                  Request Verification
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-medium"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="mt-12 text-center text-xs text-gray-500">
              <p>
                Access to the investor portal is restricted to verified accredited investors
                in accordance with Rule 506(c) of Regulation D.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
