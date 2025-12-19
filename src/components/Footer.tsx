"use client";

import React from "react";
import { Cpu } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-brand-accent/10 px-2 py-0 rounded-lg border border-brand-accent/20">
              <Logo alt="FCG Logo" className="h-12 w-auto" />
            </div>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-accent transition-colors">
              Investor Portal
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-2 flex flex-col items-center">
          <div className="max-w-3xl text-xs text-gray-500 leading-relaxed">
            <p className="mb-4">
              DISCLAIMER: This website is for informational purposes only.
              Foresight Capital Group works exclusively with institutional and
              accredited investors. Nothing on this website constitutes an offer
              to sell, or a solicitation of an offer to purchase, any securities
              or investment products. Any such offer or solicitation will be made
              only by means of appropriate offering documents provided to
              qualified investors.
            </p>
            <p className="mt-4 text-center">
              &copy; {new Date().getFullYear()} Foresight Capital Group. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
