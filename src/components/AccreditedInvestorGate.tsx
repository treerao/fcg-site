'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, AlertCircle } from 'lucide-react';

interface AccreditedInvestorGateProps {
  onProceed: () => void;
  onExit: () => void;
}

const AccreditedInvestorGate: React.FC<AccreditedInvestorGateProps> = ({
  onProceed,
  onExit,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleProceed = () => {
    if (!confirmed) {
      setShowError(true);
      return;
    }
    onProceed();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/95 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-full mx-4 bg-brand-dark border-2 border-brand-accent/30 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-accent/10 to-blue-900/10 border-b border-brand-accent/20 px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-accent/20 rounded-full">
              <Shield className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Accredited Investor Confirmation
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Verification Required for Access
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
            <p>
              Access to investment-related information is available only to
              institutional investors and other investors that qualify as
              &ldquo;Accredited Investors&rdquo; under applicable securities laws.
            </p>
            <p>By proceeding, you confirm that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                You are an institutional investor or otherwise qualify as an
                accredited investor under Rule 501(a) of Regulation D, and
              </li>
              <li>
                You understand that any investment may be offered only pursuant
                to definitive offering documents.
              </li>
            </ul>
          </div>

          {/* Verification Notice */}
          <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300 leading-relaxed">
                Foresight Capital Group relies on Rule 506(c) of Regulation D
                and will take reasonable steps to verify accredited investor
                status prior to accepting any investment, including third-party
                verification where required.
              </div>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => {
                    setConfirmed(e.target.checked);
                    setShowError(false);
                  }}
                  className="w-6 h-6 rounded border-2 border-brand-accent/50 bg-transparent checked:bg-brand-accent checked:border-brand-accent appearance-none cursor-pointer transition-all"
                />
                {confirmed && (
                  <svg
                    className="absolute w-4 h-4 text-brand-dark pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-white font-medium group-hover:text-brand-accent transition-colors">
                I confirm that I meet the qualifications described above
              </span>
            </label>
            <AnimatePresence>
              {showError && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm mt-2 ml-9"
                >
                  Please confirm your status to proceed
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleProceed}
              className={`flex-1 px-6 py-4 rounded-lg font-bold transition-all ${
                confirmed
                  ? 'bg-brand-accent text-brand-dark hover:bg-white'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Proceed to Verification
            </button>
            <button
              onClick={onExit}
              className="flex-1 px-6 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg hover:bg-white/5 transition-all font-bold"
            >
              I Do Not Qualify / Exit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccreditedInvestorGate;
