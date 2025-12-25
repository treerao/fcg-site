'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InvestorDisclaimerPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative min-h-screen bg-brand-dark">
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Investor Disclaimer
            </h1>
            <p className="text-gray-400 mb-12">
              Important Information for Prospective Investors
            </p>

            <div className="prose prose-invert prose-cyan max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">No Offer or Solicitation</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This website does not constitute an offer to sell, or a solicitation of an offer to
                    buy, any securities or investment products. Any such offer or solicitation will be made
                    only through definitive offering documents and only to qualified institutional and
                    accredited investors.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Accredited Investors Only</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Access to investment materials is restricted to institutional investors and accredited
                    investors as defined under Rule 501(a) of Regulation D. Foresight Capital Group relies
                    on Rule 506(c) and will verify accredited investor status prior to accepting any investment.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Private equity and infrastructure investments involve substantial risks, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Loss of entire investment principal</li>
                    <li>Lack of liquidity and limited redemption rights</li>
                    <li>Use of leverage and borrowing</li>
                    <li>Concentration risk and lack of diversification</li>
                    <li>Regulatory and legal risks</li>
                    <li>Market and economic volatility</li>
                    <li>Technology and operational risks</li>
                    <li>Conflicts of interest</li>
                  </ul>
                  <p>
                    These investments are suitable only for sophisticated investors who can afford to lose
                    their entire investment and who have no need for immediate liquidity.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">No Guarantee of Returns</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Past performance is not indicative of future results. There can be no assurance that
                    any investment strategy will achieve its investment objectives or avoid losses.
                    Projected, estimated, or target returns are hypothetical and may not be realized.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">No Investment Advice</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Nothing on this website constitutes investment, legal, accounting, regulatory, taxation,
                    or other professional advice. Prospective investors should consult with their own advisers
                    before making any investment decision.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Jurisdictional Limitations</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The securities referenced on this website have not been registered under the Securities
                    Act of 1933 or any state or non-U.S. securities laws. This website is not directed to
                    any person in any jurisdiction where access would be contrary to local law or regulation.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Forward-Looking Statements</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This website may contain forward-looking statements that involve risks and uncertainties.
                    Actual results may differ materially from those expressed or implied. Foresight Capital
                    Group undertakes no obligation to update any forward-looking statements.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Offering Documents Control</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    In the event of any conflict or inconsistency between information on this website and
                    the definitive offering documents, the offering documents will control. Prospective
                    investors should carefully review all offering documents before making any investment decision.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Acknowledgment</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    By accessing this website and any investment-related information, you acknowledge that
                    you have read, understood, and agreed to this Investor Disclaimer and the Terms of Use.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    For questions or additional information, please contact:
                  </p>
                  <p className="font-semibold">
                    Foresight Capital Group<br />
                    Email: ir@foresightcg.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
