import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Globe, BarChart3 } from 'lucide-react';

const cards = [
  {
    icon: <Globe className="w-8 h-8 text-brand-accent" />,
    title: "$3 Trillion Demand",
    description: "Annual project demand for the global energy transition, requiring sophisticated capital and technical solutions."
  },
  {
    icon: <Database className="w-8 h-8 text-brand-accent" />,
    title: "43% Idle Capital",
    description: "Greenfield PE AUM sitting idle due to regulatory complexities, data silos, and modeling limitations."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-accent" />,
    title: "Real-Time Modeling",
    description: "Advances in simulation and agentic AI enable real-time operating of physical systems—unlocking superior risk management."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-accent" />,
    title: "Measurable Uplift",
    description: "Targeting 150 basis points of IRR improvement through embedded AI optimization and de-risking."
  }
];

const Thesis: React.FC = () => {
  return (
    <section id="thesis" className="py-24 bg-brand-surface relative overflow-hidden scroll-mt-24">
        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-[0.05]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4"
          >
            The Convergence Opportunity
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            AI Meets Physical Infrastructure at Trillion-Dollar Scale
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Traditional infrastructure investment faces critical constraints that limit bankable deal flow.
            Our thesis is that <span className="text-white font-medium">agentic AI</span> now enables real-time modeling of physical systems,
            unlocking earlier origination and higher returns.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="p-8 rounded-xl bg-brand-dark border border-white/5 hover:border-brand-accent/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-brand-accent/5 rounded-lg w-fit group-hover:bg-brand-accent/10 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;