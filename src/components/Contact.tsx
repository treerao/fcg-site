'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">
          Investment Opportunity
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Join the Compounding Flywheel</h3>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg">
          We are currently raising an evergreen rolling $55M capped round. Investors receive GP &amp;
          Fee interests in Funds I-IV and Equity Stake in Uplift Lab shuttles.
        </p>

        <div className="inline-flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-brand-accent text-brand-dark font-bold text-lg rounded hover:bg-white transition-colors flex items-center justify-center gap-2">
            Request Access <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
