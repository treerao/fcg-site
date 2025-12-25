"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="bg-brand-accent/10 px-2 py-0 rounded-lg border border-brand-accent/20">
              <Logo alt="FCG Logo" className="h-12 w-auto" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-brand-accent transition-colors">
              Terms of Use
            </Link>
            <Link href="/investor-disclaimer" className="hover:text-brand-accent transition-colors">
              Investor Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/regulatory-disclosures" className="hover:text-brand-accent transition-colors">
              Regulatory Disclosures
            </Link>
            <Link href="/contact" className="hover:text-brand-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-bold text-lg mb-4">Important Notice</h3>
            <div className="text-xs text-gray-400 leading-relaxed space-y-3 mb-6">
              <p>
                This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities in any jurisdiction. Any offer of securities will be made only pursuant to definitive offering documents and only to institutional investors and other investors who are verified as accredited investors under Rule 506(c) of Regulation D and applicable non-U.S. laws.
              </p>
              <p>
                Access to investment-related information may be restricted by law. Persons who do not qualify should not attempt to access such information.
              </p>
              <p className="font-semibold text-gray-300">
                This website is not directed to any person in any jurisdiction where access would be contrary to local law or regulation.
              </p>
            </div>
            <p className="text-center text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Foresight Capital Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
