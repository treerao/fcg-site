'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Approach from '@/components/Approach';
import Architecture from '@/components/Architecture';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GlobalComplianceModal from '@/components/GlobalComplianceModal';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white overflow-hidden">
      <GlobalComplianceModal />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Thesis />
        <Approach />
        <Architecture />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
