
import React from 'react';
import { Landmark, Zap, Code, ShieldCheck, Globe, Building2 } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const areas = [
    {
      title: "Banking & Fintech",
      icon: <Landmark className="text-ritz-gold" size={40} />,
      description: "Servicing 68% of the Malawian banking market. Specialists in Trade Finance, securitization, and the regulation of digital payment systems.",
      details: ["Trade Finance Architecture", "Securitization", "Digital Banking Compliance", "E-Wallet Regulatory Frameworks"]
    },
    {
      title: "Corporate & Insolvency",
      icon: <Building2 className="text-ritz-gold" size={40} />,
      description: "Guiding M&A activity and complex restructuring under the 2016 Insolvency Act. Pioneer of Legal Compliance Audit Services (LCAS).",
      details: ["M&A Transactions", "Business Rescue Strategy", "Company Secretarial", "Compliance Audits"]
    },
    {
      title: "Energy, Mining & ESG",
      icon: <Zap className="text-ritz-gold" size={40} />,
      description: "Advising on oil and gas regulations and the rapidly emerging carbon credit markets in sub-Saharan Africa.",
      details: ["Mining Licenses", "Oil & Gas Concessions", "Carbon Credit Trading", "ESG Reporting Frameworks"]
    },
    {
      title: "TMT (Tech, Media, Telecoms)",
      icon: <Code className="text-ritz-gold" size={40} />,
      description: "Strategic IP protection and regulatory navigation for telecommunications and digital media giants.",
      details: ["Telecommunications Law", "IP Portfolio Management", "Data Privacy & Protection", "Media Licensing"]
    },
    {
      title: "PPP & International Trade",
      icon: <Globe className="text-ritz-gold" size={40} />,
      description: "Over 20 years of institutional experience in Public-Private Partnerships and cross-border trade governance.",
      details: ["Infrastructure PPPs", "WTO Compliance", "Import/Export Licensing", "Trade Dispute Resolution"]
    },
    {
      title: "Private Client & Property",
      icon: <ShieldCheck className="text-ritz-gold" size={40} />,
      description: "Sophisticated asset protection and high-value property acquisition for high-net-worth individuals and corporate entities.",
      details: ["Conveyancing", "Trusts & Estates", "Asset Structuring", "Land Disputes"]
    }
  ];

  return (
    <div className="bg-gray-50 pb-24">
      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Practice Areas</h1>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Our multidisciplinary model allows us to deploy specialized teams across various sectors, ensuring that every legal solution is grounded in commercial reality.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-100 hover:shadow-xl transition-all group rounded-sm">
                <div className="mb-6">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-ritz-gold transition-colors">{area.title}</h3>
                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-3">
                  {area.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <div className="w-1 h-1 bg-ritz-gold rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 container mx-auto px-4">
        <div className="bg-ritz-blue p-12 text-center text-white relative overflow-hidden rounded-sm">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ritz-gold to-transparent"></div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">Require specialized legal architecture?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">Our digital consultation platform allows you to connect with a senior partner regardless of your global location.</p>
          <button className="bg-ritz-gold text-slate-900 px-8 py-4 font-bold rounded-sm hover:scale-105 transition-transform relative z-10">
            Book a Digital Briefing
          </button>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
