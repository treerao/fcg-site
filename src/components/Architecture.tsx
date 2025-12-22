'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, RefreshCw, Rocket } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-brand-dark relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">
            The Foresight Architecture
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Capital &amp; Innovation Compounding Value
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* Fund Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface border border-white/10 rounded-2xl p-8 relative overflow-hidden group self-center hover:border-brand-accent/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Foresight Funds</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Private equity fund focused on AI-uplifted IRR in nextgen infrastructure projects.
              </p>
              {/* <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></span>
                  $500M Target Commitment
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></span>
                  17.6% Net IRR Target
                </li>
              </ul> */}
            </motion.div>

            {/* Center Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-brand-surface to-brand-dark border border-brand-accent/30 rounded-full aspect-square max-w-[350px] mx-auto shadow-[0_0_50px_rgba(6,182,212,0.15)] relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-accent/20"
              ></motion.div>

              <RefreshCw className="w-12 h-12 text-brand-accent mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Foresight<br />Capital Group
              </h4>
              <p className="text-sm text-gray-400 px-6">Reflexive Value Creation Loop</p>
              <div className="mt-4 py-1 px-3 bg-brand-accent/10 rounded-full border border-brand-accent/20 text-xs text-brand-accent font-mono">
                Dual Return Stream
              </div>
            </motion.div>

            {/* Innovation Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Uplift Systems */}
              <div className="bg-brand-surface border border-white/10 rounded-2xl p-8 group hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Uplift Systems</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Applied AI R&amp;D center achieving IRR uplift on current projects and capturing return on innovation via shuttles.
                </p>
              </div>

              {/* Shuttles */}
              <div className="bg-brand-surface border border-white/10 rounded-2xl p-8 group hover:border-brand-accent/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Innovation Shuttles</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Spinouts returning equity share &amp; income share to the parent group.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
