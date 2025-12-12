import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Cpu, Database, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-dark z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] bg-grid"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-mono tracking-widest uppercase">
                The Intelligent Era
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-brand-accent/50 to-transparent"></span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            >
              Activating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
                Intelligent Infrastructure
              </span> Era
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              An institutional platform uniting capital deployment, practical AI application, 
              and value compounding—redefining infrastructure investment for the next decade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#thesis" 
                onClick={(e) => handleScroll(e, '#thesis')}
                className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Explore The Thesis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Request Deck
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Animation */}
          <div className="hidden lg:block relative h-[600px] w-full perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              
              {/* Background Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl"></div>

              {/* Main Mechanism Rings (SVG) */}
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 600 600">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                    <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Static Rings */}
                <circle cx="300" cy="300" r="280" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="300" cy="300" r="180" stroke="#1e293b" strokeWidth="1" opacity="0.5" />

                {/* Rotating Outer Ring (Capital) */}
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ originX: "300px", originY: "300px" }}>
                  <circle cx="300" cy="300" r="280" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="200 1500" />
                  <circle cx="580" cy="300" r="4" fill="#22d3ee" />
                </motion.g>

                {/* Rotating Inner Ring (Tech) */}
                <motion.g animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ originX: "300px", originY: "300px" }}>
                  <circle cx="300" cy="300" r="180" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="100 1000" />
                  <circle cx="480" cy="300" r="3" fill="#fff" />
                  <circle cx="120" cy="300" r="3" fill="#fff" />
                </motion.g>
              </svg>

              {/* Central Uplift Engine */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                {/* Spinning dashed border */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-brand-accent/20 border-dashed"
                ></motion.div>
                
                {/* Core Glow */}
                <div className="absolute inset-4 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-brand-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                   <div className="text-center relative z-10">
                      <Cpu className="w-10 h-10 text-brand-accent mx-auto mb-2" />
                      <div className="text-xs font-bold text-white tracking-widest">UPLIFT</div>
                   </div>
                   {/* Pulse effect */}
                   <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-brand-accent rounded-full"
                   ></motion.div>
                </div>
              </div>

              {/* Orbital Cards */}
              <motion.div
                 animate={{ y: [-15, 15, -15] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[20%] right-[10%] bg-brand-dark/90 border border-brand-accent/20 p-4 rounded-xl backdrop-blur-md shadow-2xl w-48 z-10"
              >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Optimization</span>
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">+150 bps</div>
                  <div className="text-[10px] text-gray-500">IRR Uplift Detected</div>
              </motion.div>

              <motion.div
                 animate={{ y: [15, -15, 15] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[20%] left-[5%] bg-brand-dark/90 border border-brand-accent/20 p-4 rounded-xl backdrop-blur-md shadow-2xl w-52 z-10"
              >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">Live Risk Model</span>
                    <Activity className="w-4 h-4 text-brand-accent" />
                  </div>
                  <div className="flex gap-1 h-8 items-end">
                     {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [h+'%', (h + Math.random()*20)+'%', h+'%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1.5 bg-brand-accent/60 rounded-t-sm"
                          style={{ height: h + '%' }}
                        />
                     ))}
                  </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Metrics Strip */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-brand-dark/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-6 py-6 flex flex-wrap justify-between gap-8 md:gap-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full">
              <Database className="text-brand-accent w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase">Annual Opportunity</p>
              <p className="text-xl font-bold text-white">$3 Trillion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="p-2 bg-white/5 rounded-full">
               <TrendingUp className="text-brand-accent w-5 h-5" />
             </div>
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase">Uninvested Capital</p>
              <p className="text-xl font-bold text-white">43% PE AUM</p>
            </div>
          </div>
           <div className="flex items-center gap-3">
             <div className="p-2 bg-white/5 rounded-full">
               <Cpu className="text-brand-accent w-5 h-5" />
             </div>
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase">Target Uplift</p>
              <p className="text-xl font-bold text-white">+150 bps IRR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;