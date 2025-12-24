'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';

const GlobalComplianceModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged
    const hasAcknowledged = localStorage.getItem('fcg-global-compliance-acknowledged');
    if (!hasAcknowledged) {
      setIsVisible(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem('fcg-global-compliance-acknowledged', 'true');
    setIsVisible(false);
  };

  const handleExit = () => {
    // Redirect to a neutral page or close
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/98 backdrop-blur-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full mx-4 bg-brand-dark border-2 border-brand-accent/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-accent/10 to-blue-900/10 border-b border-brand-accent/20 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-accent/20 rounded-full">
                  <Globe className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Global Access Notice
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Jurisdictional Restrictions Apply
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
                <p className="text-lg font-semibold text-white">
                  Important: Please Read Carefully
                </p>
                <p>
                  This website is not directed to any person in any jurisdiction where 
                  access would be contrary to local law or regulation. The information 
                  contained on this website is not intended for distribution to, or use 
                  by, any person in any jurisdiction where such distribution or use would 
                  be contrary to law or regulation.
                </p>
                <p>
                  By proceeding, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    You are accessing this website from a jurisdiction where it is legal 
                    to do so
                  </li>
                  <li>
                    You are not a resident of, or located in, any jurisdiction where 
                    access to this website is prohibited
                  </li>
                  <li>
                    You will comply with all applicable laws and regulations in your 
                    jurisdiction
                  </li>
                </ul>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-200 text-sm font-medium">
                    ⚠️ If you are uncertain whether you are permitted to access this website 
                    based on your jurisdiction, please exit immediately and consult with 
                    your legal counsel.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAcknowledge}
                  className="flex-1 px-6 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-all"
                >
                  I Acknowledge and Agree to Proceed
                </button>
                <button
                  onClick={handleExit}
                  className="flex-1 px-6 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-bold"
                >
                  Exit Website
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalComplianceModal;
