'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p className="text-gray-400 mb-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert prose-cyan max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. No Offer or Solicitation</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This website is provided for informational purposes only and does not constitute
                    an offer to sell or a solicitation of an offer to buy any securities or investment
                    products in any jurisdiction. Nothing contained on this website should be construed
                    as investment advice, a recommendation, or an endorsement of any particular security,
                    investment, or strategy.
                  </p>
                  <p>
                    Any offer or solicitation of an investment in any securities or investment products
                    will be made only by means of definitive offering documents (such as a private
                    placement memorandum, subscription agreement, or similar documents) and only to
                    investors who meet applicable investor qualifications. Such offering documents will
                    contain material information not contained on this website, including, without
                    limitation, risk factors, conflicts of interest, and information about fees and expenses.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Reliance on Rule 506(c)</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group relies on Rule 506(c) of Regulation D under the Securities
                    Act of 1933, as amended (the "Securities Act"), for any private placement offerings.
                    Under Rule 506(c), general solicitation and advertising are permitted, but all
                    purchasers of securities must be accredited investors, and the issuer must take
                    reasonable steps to verify that such purchasers are accredited investors.
                  </p>
                  <p>
                    By accessing any investment-related information on this website, you acknowledge
                    that Foresight Capital Group will verify your status as an accredited investor
                    before permitting any investment. Verification may include third-party verification
                    services, review of financial documentation, or other means as required by applicable
                    law and regulation.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Institutional and Accredited Investor Requirement</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Access to investment-related materials and information on this website is restricted
                    to institutional investors and accredited investors as defined under Rule 501(a) of
                    Regulation D and applicable non-U.S. laws.
                  </p>
                  <p>
                    An "accredited investor" includes, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      A natural person whose individual net worth, or joint net worth with that person's
                      spouse or spousal equivalent, exceeds $1,000,000 (excluding the value of the
                      person's primary residence);
                    </li>
                    <li>
                      A natural person who had an individual income in excess of $200,000 in each of
                      the two most recent years, or joint income with that person's spouse or spousal
                      equivalent in excess of $300,000 in each of those years, and has a reasonable
                      expectation of reaching the same income level in the current year;
                    </li>
                    <li>
                      A bank, insurance company, registered investment company, business development
                      company, or small business investment company;
                    </li>
                    <li>
                      An employee benefit plan if investment decisions are made by a plan fiduciary
                      that is a bank, insurance company, or registered investment adviser, or if the
                      plan has total assets in excess of $5,000,000;
                    </li>
                    <li>
                      A trust with total assets in excess of $5,000,000, not formed for the specific
                      purpose of acquiring the securities offered, and whose purchase is directed by
                      a sophisticated person; and
                    </li>
                    <li>
                      An entity in which all of the equity owners are accredited investors.
                    </li>
                  </ul>
                  <p>
                    If you do not meet these qualifications, you must exit this website immediately and
                    may not access any investment-related information.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Jurisdictional Restrictions</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This website is not directed to, or intended for distribution to or use by, any
                    person or entity in any jurisdiction or country where such distribution or use would
                    be contrary to law or regulation or which would subject Foresight Capital Group to
                    any registration requirement within such jurisdiction or country.
                  </p>
                  <p>
                    The securities and investment products referenced on this website have not been and
                    will not be registered under the Securities Act or the securities laws of any state
                    or non-U.S. jurisdiction. Such securities may not be offered or sold in the United
                    States except pursuant to an exemption from, or in a transaction not subject to,
                    the registration requirements of the Securities Act and applicable state securities
                    laws, or outside the United States to non-U.S. persons in compliance with Regulation S
                    under the Securities Act.
                  </p>
                  <p>
                    By accessing this website, you represent and warrant that you are accessing it from
                    a jurisdiction where it is legal to do so and that you will comply with all applicable
                    laws and regulations.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Forward-Looking Statements</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    This website may contain forward-looking statements, including statements regarding
                    strategy, objectives, expectations, anticipated performance, and other statements that
                    are not historical facts. Such statements are subject to risks, uncertainties, and
                    assumptions and may differ materially from actual future results, performance, or
                    achievements.
                  </p>
                  <p>
                    Forward-looking statements are based on current expectations and involve inherent risks
                    and uncertainties, including factors that could delay, divert, or change any of them.
                    Foresight Capital Group undertakes no obligation to update or revise any forward-looking
                    statements, whether as a result of new information, future events, or otherwise.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. No Investment, Legal, or Tax Advice</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The information on this website does not constitute investment, legal, accounting,
                    regulatory, taxation, or other professional advice, and should not be relied upon as
                    such. Before making any investment decision, prospective investors should consult with
                    their own legal, tax, and financial advisers to determine the suitability of any
                    investment for their particular circumstances.
                  </p>
                  <p>
                    Investments in private equity and infrastructure funds involve substantial risks,
                    including the risk of loss of the entire investment. Past performance is not indicative
                    of future results. There can be no assurance that any investment strategy will achieve
                    its objectives or avoid losses.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    To the fullest extent permitted by applicable law, Foresight Capital Group and its
                    affiliates, officers, directors, employees, and agents disclaim all liability for any
                    direct, indirect, incidental, consequential, or special damages arising out of or in
                    connection with your use of this website or reliance on any information contained herein.
                  </p>
                  <p>
                    This website and all information contained herein are provided "as is" without warranty
                    of any kind, either express or implied, including, but not limited to, the implied
                    warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    All content on this website, including text, graphics, logos, images, and software,
                    is the property of Foresight Capital Group or its licensors and is protected by
                    copyright, trademark, and other intellectual property laws. You may not reproduce,
                    distribute, modify, or create derivative works from any content on this website
                    without express written permission from Foresight Capital Group.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. Privacy</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Your use of this website is subject to our Privacy Policy, which describes how we
                    collect, use, and protect your personal information. By using this website, you
                    consent to the collection and use of your information as described in the Privacy Policy.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Modifications</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group reserves the right to modify these Terms of Use at any time
                    without prior notice. Your continued use of this website after any such modifications
                    constitutes your acceptance of the revised terms.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    These Terms of Use shall be governed by and construed in accordance with the laws of
                    the State of Delaware, without regard to its conflict of law provisions.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <p className="font-semibold">
                    Foresight Capital Group<br />
                    Email: legal@foresightcg.com
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
