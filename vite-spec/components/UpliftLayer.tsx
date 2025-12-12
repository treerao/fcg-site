import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Wind, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, title: "Hypothesize", desc: "Identify candidate levers for uplifting projects." },
  { id: 2, title: "Prototype", desc: "Build physics-informed AI models against real-world data." },
  { id: 3, title: "Deploy", desc: "Test on live assets to validate IRR uplift." },
  { id: 4, title: "Scale", desc: "Institutionalize tools into Fund playbook." },
  { id: 5, title: "Capture", desc: "Spin out proven IP, retaining equity." },
];

const UpliftLayer: React.FC = () => {
  return (
    <section id="uplift" className="py-24 bg-brand-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">Uplift Labs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Applied R&D as a Financial Instrument</h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            Uplift delivers and iterates AI tech into real projects selected for investment. 
            Designed to generate measurable project basis-point uplift and strengthen exits.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              <div className="p-6 bg-brand-surface border border-white/5 rounded-xl hover:border-brand-accent/30 transition-all h-full flex flex-col">
                <div className="text-4xl font-bold text-brand-accent/20 mb-4 group-hover:text-brand-accent/40 transition-colors">0{step.id}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-brand-accent">
                  <ChevronRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/10 group">
            <div className="h-40 bg-gradient-to-br from-blue-900/20 to-brand-dark flex items-center justify-center">
                <Network className="w-16 h-16 text-blue-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Unified Knowledge Graph</h4>
                <p className="text-sm text-gray-400">Integrates time-series, geospatial, and physics data into a single environment for cross-domain optimization.</p>
            </div>
          </div>
          
          <div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/10 group">
            <div className="h-40 bg-gradient-to-br from-cyan-900/20 to-brand-dark flex items-center justify-center">
                <Cpu className="w-16 h-16 text-cyan-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
             <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">AI Orchestration Layer</h4>
                <p className="text-sm text-gray-400">Multi-agent systems coordinating energy flows and grid interactions in real-time.</p>
            </div>
          </div>

          <div className="bg-brand-surface rounded-2xl overflow-hidden border border-white/10 group">
             <div className="h-40 bg-gradient-to-br from-purple-900/20 to-brand-dark flex items-center justify-center">
                <Wind className="w-16 h-16 text-purple-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
             <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Physics-Based Simulation</h4>
                <p className="text-sm text-gray-400">Replacing heuristic estimation with deterministic prediction for objective optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpliftLayer;