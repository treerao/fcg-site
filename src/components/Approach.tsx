'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, LineChart, Target } from 'lucide-react';

const approachItems = [
  {
    icon: <Target className="w-6 h-6 text-brand-accent" />,
    title: 'AI-Assisted Project Evaluation',
    description:
      'Development-stage opportunities prior to Final Investment Decision (FID), where our AI systems provide real-time modeling and risk assessment.',
  },
  {
    icon: <LineChart className="w-6 h-6 text-brand-accent" />,
    title: 'Stage-Gated Underwriting',
    description:
      'Risk management designed for development investments that can have binary outcomes—structured to maximize upside while managing downside.',
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-accent" />,
    title: 'Asia-Pacific Focus',
    description:
      'Primary focus on APAC markets with global flexibility, subject to applicable mandates and regulatory requirements.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-accent" />,
    title: 'Sector Concentration',
    description:
      'Renewable energy, geothermal, solar, sustainable aviation fuel (SAF), industrial decarbonization, and related transition opportunities.',
  },
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-brand-dark border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4"
          >
            Our Approach
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Pre-Development Capital Meets AI-Driven Insights
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Foresight Capital Group focuses on <span className="text-white font-medium">pre-development and early-stage industrial opportunities</span> at the phase where projects are shaped, risks are clarified, and capital is often scarce.
          </motion.p>
        </div>

        {/* Grid of Approach Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="p-8 bg-brand-surface border border-white/10 rounded-xl hover:border-brand-accent/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-dark rounded-lg group-hover:bg-brand-accent/10 transition-colors flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Expertise Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-6 bg-gradient-to-r from-brand-accent/5 via-brand-accent/10 to-brand-accent/5 border border-brand-accent/20 rounded-xl">
            <p className="text-white text-lg">
              Our team includes executives with experience across{' '}
              <span className="text-brand-accent font-semibold">artificial intelligence</span>,{' '}
              <span className="text-brand-accent font-semibold">industrial development</span>, and{' '}
              <span className="text-brand-accent font-semibold">investment management</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
