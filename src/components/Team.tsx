'use client';

import React from 'react';

const teamMembers = [
  {
    name: "Rajesh Chandran",
    bio: "CEO and Co-Founder of Actual Systems. Serial entrepreneur with successful exits in AI and FinTech (Heighten, Wize, Leap). Holds multiple ML patents; extensive fundraising and scaling experience.",
  },
  {
    name: "Steve Hickman",
    bio: "Global executive with 30+ years in energy, sustainability, and strategic management. Former Chief Corporate Development Officer at ChemOne Group; held senior roles at AIA, HSBC, Old Mutual, and Swiss Life.",
  },
  {
    name: "Karthik Balakrishnan",
    bio: "Co-Founder and President of Actual; previously CTO of Coin and Founder of Airbus UTM. DoD NDSEG Fellow with PhD from Stanford. Expert in AI systems, aviation, and data infrastructure; Venture Partner at Pioneer Fund.",
  },
  {
    name: "Jeremy Hill",
    bio: "Jeremy L. Hill has over 25 years of experience in financial markets: TF Market Advisors, Levy, Harkins & Co. , AllianceBernstein, Société Générale.  He was also an attorney at Coudert Brothers.",
  },
  {
    name: "William I.Y. Byun",
    bio: "Global expert in sustainability, energy, and infrastructure finance. Fulbright Scholar and juror for the Global Energy Prize. Adjunct professor at California State University with 25+ years of C-suite experience.",
  },
  // {
  //   name: "Adam Bauer",
  //   bio: "CEO and Founding Partner at Fairshore AM with deep experience in APAC debt and structured finance. Former senior roles at SMBC, Standard Chartered, and Goldman Sachs. Holds an MBA from INSEAD.",
  // },
  {
    name: "Meagan Packard",
    bio: "Experienced operations leader with a track record in scaling processes and driving organizational efficiency. Early team member at multiple high-growth tech and sustainability startups. MBA from Kellogg and BA from Duke University.",
  },
  {
    name: "Justin Ferrell",
    bio: "Global expert in leadership for organizational change and innovation strategy in his 15th year at Stanford's Institute of Design. Former head of digital and new product design at The Washington Post, part of one Pulitzer Prize-winning investigation and four other finalists.",
  },
  {
    name: "Aurora Chiste",
    bio: "Executive and founder with 15+ years of global experience spanning sustainability, energy, fintech, and development. Member of the World Economic Forum; focuses on regenerative and resilient systems worldwide.",
  },
  {
    name: "Jason Libersky",
    bio: "Quantified Commodity Models & Business Pioneer in market-based decarbonization and environmental performance. Formerly at Chevron, Mercuria, Gevo, and Xpansiv. Deep expertise in data markets and differentiated commodities.",
  },
  {
    name: "Ramana Rao",
    bio: "Early career at Xerox PARC with 30+ patents and 10,000+ citations. Pioneer in information visualization, analytics, search, NLP, and human–AI systems. Founder w/ exits across consumer, enterprise, financial services, and media sectors.",
  },
  {
    name: "Alberto Stocchino",
    bio: "Autonomous Industrial Systems Physicist and technologist; founder of Perceptive (AI perception systems) and innovation leader in mixed reality at Apple. Deep experience at the frontier of cognitive AI and sensing technologies.",
  },
  {
    name: "Derek Lyons",
    bio: "Cognitive AI & Human Systems Co-Founder and CTO of Actual. Rhodes Scholar with degrees from Oxford, MIT, and Yale. Expert in AI and cognitive systems that augment human creativity and problem solving.",
  },
  {
    name: "Bharat Krish",
    bio: "AI SaaS & Digital Transformation Technology executive with 20+ years in AI-powered SaaS and digital transformation. Former President of TIME and CTO at Newsweek. Founder of two deep-tech automation startups; advisor on enterprise AI scale-up.",
  },
  {
    name: "Alan Liu",
    bio: "Machine Learning Infrastructure Engineering leader at Google; formerly led TensorFlow engineering and prior roles at Enlitic, Heighten, and NetSuite. Specialist in scalable ML and data-centric software systems.",
  },
  {
    name: "Jacob Gosselin",
    bio: "United States Marine Corps veteran with 6+ years in aviation engineering, specializing in hydraulic systems and aviation supply chains; structuring financing of project entities.",
  },
  {
    name: "Christina Lee",
    bio: "Global professional in international markets with experience in technical and financial modeling of emerging energy infrastructure projects. Holds a joint Master's degree from Georgetown University (MSB/MSFS), with a focus on international business and policy.",
  },
  {
    name: "Daniel Tinajero",
    bio: "Expert in sustainability, energy transition, and environmental markets. Former Environmental Commissioner for the City of Vista (CA) with experience in carbon markets and infrastructure development. Dual MBA/MSc from the University of Michigan.",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-brand-surface border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-mono text-brand-accent tracking-widest uppercase mb-4">
            Leadership
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Foresight + Uplift Team</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col text-left p-6 bg-brand-dark border border-white/5 rounded-lg hover:border-brand-accent/40 transition-colors group"
            >
              <h4 className="text-xl font-bold text-white mb-3">{member.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Plus a deep bench of experts from Google X, DeepMind, and Institutional Finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
