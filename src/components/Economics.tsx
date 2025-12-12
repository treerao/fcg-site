'use client';

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Baseline IRR', value: 12.5, type: 'Market' },
  { name: 'Deep Value', value: 16.1, type: 'Foresight' },
  { name: 'AI Uplift', value: 17.6, type: 'Foresight + AI' },
];

const Economics: React.FC = () => {
  return (
    <section id="economics" className="py-24 bg-brand-surface overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">
              Fund I Economics
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">A Category Creator</h3>
            <p className="text-gray-400 text-lg mb-8">
              Targeting $500M LP commitments with a Q1 2026 launch. We anticipate a 2.0x MOIC over 8
              years driven by a 60-70% entry discount and measurable AI operational uplift.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-brand-dark/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">17.6%</div>
                <div className="text-xs text-gray-500 font-mono uppercase">Net IRR Target</div>
              </div>
              <div className="p-4 bg-brand-dark/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-brand-accent mb-1">+150 bps</div>
                <div className="text-xs text-gray-500 font-mono uppercase">AI Uplift</div>
              </div>
              <div className="p-4 bg-brand-dark/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">80%</div>
                <div className="text-xs text-gray-500 font-mono uppercase">Hit Rate (vs 50% Base)</div>
              </div>
              <div className="p-4 bg-brand-dark/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">$5B</div>
                <div className="text-xs text-gray-500 font-mono uppercase">AUM Goal (10yr)</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[400px]">
            <div className="bg-brand-dark p-6 rounded-2xl border border-white/10 h-full relative">
              <h4 className="text-white font-bold mb-6">Return Driver Simulation</h4>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" unit="%" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#f8fafc"
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#334155',
                      color: '#f8fafc',
                    }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="value" fill="#06b6d4" barSize={30} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 right-10 text-xs text-brand-accent font-mono animate-pulse">
                +150bps AI Advantage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economics;
