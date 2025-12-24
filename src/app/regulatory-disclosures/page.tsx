'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegulatoryDisclosuresPage() {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Regulatory Disclosures
            </h1>
            <p className="text-gray-400 mb-12">
              Important Regulatory Information
            </p>

            <div className="prose prose-invert prose-cyan max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Registration and Regulatory Status</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group operates as a private fund adviser. Investment offerings made 
                    through Foresight Capital Group rely on exemptions from registration under the Securities 
                    Act of 1933, as amended (the "Securities Act"), and the Investment Company Act of 1940, 
                    as amended (the "Investment Company Act").
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Rule 506(c) Compliance</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group relies on Rule 506(c) of Regulation D for its private placement 
                    offerings. Under Rule 506(c):
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>General solicitation and advertising are permitted</li>
                    <li>All purchasers must be accredited investors</li>
                    <li>The issuer must take reasonable steps to verify accredited investor status</li>
                    <li>Securities are "restricted securities" under Rule 144 of the Securities Act</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Accredited Investor Verification</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group will verify accredited investor status using one or more of the 
                    following methods:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Review of income documentation (tax returns, W-2s, pay stubs)</li>
                    <li>Review of net worth documentation (bank statements, brokerage statements, appraisals)</li>
                    <li>Third-party verification services</li>
                    <li>Written confirmation from registered broker-dealers, SEC-registered investment advisers, 
                    licensed attorneys, or certified public accountants</li>
                    <li>Existing investor status (for certain prior investors)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Securities Restrictions</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Securities offered by Foresight Capital Group have not been registered under the Securities 
                    Act or any state securities laws. These securities are subject to restrictions on transferability 
                    and resale and may not be transferred or resold except as permitted under the Securities Act 
                    and applicable state securities laws.
                  </p>
                  <p>
                    Investors should be prepared to bear the economic risk of an investment for an indefinite 
                    period of time. There is no public market for the securities, and none is expected to develop.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. International Investors</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    For investors outside the United States, offerings may be made in reliance on Regulation S 
                    under the Securities Act or other applicable exemptions. Non-U.S. investors must comply with 
                    all applicable laws and regulations in their jurisdiction of residence.
                  </p>
                  <p>
                    Foresight Capital Group does not offer securities in any jurisdiction where such offer would 
                    be prohibited or would require registration or licensing that has not been obtained.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. Material Risks</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Investments in private funds involve substantial risks, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Loss of Capital:</strong> You may lose your entire investment</li>
                    <li><strong>Illiquidity:</strong> There are significant restrictions on redemptions and transfers</li>
                    <li><strong>Leverage:</strong> Use of leverage may magnify losses</li>
                    <li><strong>Concentration:</strong> Investments may be concentrated in specific sectors or assets</li>
                    <li><strong>Valuation:</strong> Private assets are difficult to value and valuations may be subjective</li>
                    <li><strong>Conflicts of Interest:</strong> The general partner and its affiliates have conflicts of interest</li>
                    <li><strong>Fees and Expenses:</strong> Management fees and expenses will reduce returns</li>
                    <li><strong>Tax Complexity:</strong> Investments may have complex tax implications</li>
                    <li><strong>Regulatory Risk:</strong> Changes in laws and regulations may adversely affect investments</li>
                  </ul>
                  <p>
                    This is not an exhaustive list of risks. Please carefully review the offering documents 
                    for a complete discussion of risks.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Fees and Expenses</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Private funds managed by Foresight Capital Group typically charge:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Management fees based on committed capital or net asset value</li>
                    <li>Performance-based allocation (carried interest) on realized profits</li>
                    <li>Organizational and offering expenses</li>
                    <li>Operating expenses of the fund</li>
                  </ul>
                  <p>
                    Specific fee structures and expenses will be disclosed in the offering documents for each fund.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Conflicts of Interest</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group and its affiliates have conflicts of interest in managing the funds, 
                    including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Allocation of fees and expenses among funds and accounts</li>
                    <li>Allocation of investment opportunities among funds and accounts</li>
                    <li>Time and resources devoted to different funds and accounts</li>
                    <li>Valuation of portfolio investments</li>
                    <li>Related party transactions</li>
                  </ul>
                  <p>
                    These conflicts will be disclosed in detail in the offering documents, along with policies 
                    and procedures to manage such conflicts.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. ERISA Considerations</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Investors that are employee benefit plans subject to the Employee Retirement Income Security 
                    Act of 1974, as amended ("ERISA"), or other retirement plans or accounts subject to Section 4975 
                    of the Internal Revenue Code should consult with their advisers regarding the suitability of an 
                    investment and potential prohibited transaction and other ERISA-related issues.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Anti-Money Laundering and KYC</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Foresight Capital Group has implemented anti-money laundering ("AML") and know-your-customer 
                    ("KYC") procedures in accordance with applicable laws and regulations. All investors will be 
                    required to provide identification and verification documents as part of the subscription process.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">11. Updates to Disclosures</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The information on this page is subject to change. Foresight Capital Group will update 
                    regulatory disclosures as necessary to reflect material changes in its operations or regulatory 
                    environment. Investors will be notified of material changes as required by applicable law.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact for Regulatory Matters</h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    For questions regarding regulatory matters or compliance, please contact:
                  </p>
                  <p className="font-semibold">
                    Foresight Capital Group<br />
                    Compliance Department<br />
                    Email: compliance@foresightcapitalgroup.com
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
