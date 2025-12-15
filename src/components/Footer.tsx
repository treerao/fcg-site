"use client";

import React from "react";
import { Cpu } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-brand-accent/10 p-2 rounded-lg border border-brand-accent/20">
              <Cpu className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <span className="block font-bold text-white leading-none">
                FORESIGHT
              </span>
              <span className="block text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                Capital Group
              </span>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Investor Portal
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-xs text-gray-600 leading-relaxed text-justify">
          <p className="mb-4">
            DISCLAIMER: This website is for informational purposes only.
            Foresight Capital Group works exclusively with institutional and
            accredited investors. Nothing on this website constitutes an offer
            to sell, or a solicitation of an offer to purchase, any securities
            or investment products. Any such offer or solicitation will be made
            only by means of appropriate offering documents provided to
            qualified investors.
          </p>
          <p className="mt-4 text-center md:text-left">
            &copy; {new Date().getFullYear()} Foresight Capital Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
