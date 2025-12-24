'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AccreditedInvestorGate from '@/components/AccreditedInvestorGate';
import Footer from '@/components/Footer';

export default function InvestorAccessPage() {
  const router = useRouter();
  const [showGate, setShowGate] = useState(true);

  const handleProceed = () => {
    setShowGate(false);
    // Here you would typically redirect to verification or email capture
    // For now, we'll show a simple message
  };

  const handleExit = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <Navbar />
      
      {showGate && (
        <AccreditedInvestorGate onProceed={handleProceed} onExit={handleExit} />
      )}

      {!showGate && (
        <main className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Investor Verification
              </h1>
              
              <div className="bg-brand-dark border border-brand-accent/30 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Next Steps
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Thank you for your confirmation. To complete your accredited investor
                  verification and access investment materials, please provide your
                  contact information below.
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Institution / Entity Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors"
                      placeholder="Your institution or entity"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Investor Type
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-accent focus:outline-none transition-colors">
                      <option value="">Select investor type</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="accredited-individual">Accredited Individual</option>
                      <option value="family-office">Family Office</option>
                      <option value="other">Other Accredited Investor</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-all"
                  >
                    Submit for Verification
                  </button>
                </form>
              </div>
              
              <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Verification Process
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Foresight Capital Group relies on Rule 506(c) of Regulation D
                  and will take reasonable steps to verify accredited investor
                  status prior to accepting any investment, including third-party
                  verification where required. Our team will contact you to
                  complete this process.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
