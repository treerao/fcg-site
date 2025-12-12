'use client';

import React from 'react';

const teamMembers = [
  { name: 'Rajesh Chandran', role: 'CEO', prev: 'Actual Systems, FinTech Exits' },
  { name: 'Karthik Balakrishnan', role: 'President', prev: 'Actual, Airbus UTM, Stanford PhD' },
  { name: 'Adam Bauer', role: 'Capital Markets', prev: 'Fairshore AM, Goldman Sachs' },
  { name: 'Ramana Rao', role: 'Chief Scientist', prev: 'Xerox PARC, 30+ Patents' },
  { name: 'Steve Hickman', role: 'Energy', prev: 'ChemOne, HSBC, Swiss Life' },
  { name: 'Alan Liu', role: 'Engineering', prev: 'Google, TensorFlow, NetSuite' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-brand-surface border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">
            Leadership
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Foresight + Uplift Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-6 bg-brand-dark border border-white/5 rounded-lg hover:border-brand-accent/40 transition-colors group"
            >
              <div className="mb-4 w-12 h-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors"></div>
              <h4 className="text-xl font-bold text-white">{member.name}</h4>
              <p className="text-brand-accent font-medium text-sm mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.prev}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Plus a deep bench of experts from Google X, DeepMind, and Institutional Finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
