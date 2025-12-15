'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Approach from '@/components/Approach';
import Architecture from '@/components/Architecture';
import UpliftLayer from '@/components/UpliftLayer';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Economics = dynamic(() => import('@/components/Economics'), { ssr: false });

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white overflow-hidden">
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
        <Economics />
        <UpliftLayer />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
