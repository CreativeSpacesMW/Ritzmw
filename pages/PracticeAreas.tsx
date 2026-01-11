
import React from 'react';
import { Landmark, Zap, Code, ShieldCheck, Globe, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas: React.FC = () => {
  const areas = [
    {
      title: "Banking & Fintech",
      icon: <Landmark size={32} />,
      description: "Servicing 68% of the Malawian banking market. Specialists in Trade Finance, securitization, and digital payment regulations.",
      details: ["Trade Finance Architecture", "Securitization", "Digital Banking Compliance", "E-Wallet Regulatory Frameworks"]
    },
    {
      title: "Corporate & Insolvency",
      icon: <Building2 size={32} />,
      description: "Guiding M&A activity and complex restructuring. Pioneer of Legal Compliance Audit Services (LCAS) in sub-Saharan Africa.",
      details: ["M&A Transactions", "Business Rescue Strategy", "Company Secretarial", "Compliance Audits"]
    },
    {
      title: "Energy, Mining & ESG",
      icon: <Zap size={32} />,
      description: "Advising on oil and gas regulations and the rapidly emerging carbon credit markets in sub-Saharan Africa.",
      details: ["Mining Licenses", "Oil & Gas Concessions", "Carbon Credit Trading", "ESG Reporting Frameworks"]
    },
    {
      title: "TMT & Digital Assets",
      icon: <Code size={32} />,
      description: "Strategic IP protection and regulatory navigation for telecommunications and digital media infrastructure.",
      details: ["Telecommunications Law", "IP Portfolio Management", "Data Privacy & Protection", "Media Licensing"]
    },
    {
      title: "PPP & Global Trade",
      icon: <Globe size={32} />,
      description: "Decades of institutional experience in Public-Private Partnerships and cross-border trade governance.",
      details: ["Infrastructure PPPs", "WTO Compliance", "Import/Export Licensing", "Trade Dispute Resolution"]
    },
    {
      title: "Private Client & Property",
      icon: <ShieldCheck size={32} />,
      description: "Sophisticated asset protection and high-value property acquisition for HNWIs and corporate entities.",
      details: ["Conveyancing", "Trusts & Estates", "Asset Structuring", "Land Disputes"]
    }
  ];

  return (
    <div className="bg-white pb-32">
      {/* Header */}
      <section className="bg-slate-950 text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="text-ritz-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8">Technical Domains</div>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter">
              Precision <br />
              <span className="text-ritz-gold">Architecture.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl font-serif italic">
              "Every legal solution we deploy is engineered to withstand the velocity of modern global commerce."
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-100">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-white p-12 md:p-16 border-r border-b border-slate-100 hover:bg-slate-50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1.5 h-full bg-ritz-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="mb-10 text-ritz-gold transform group-hover:scale-110 transition-transform origin-left">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-slate-950 leading-tight">{area.title}</h3>
                <p className="text-slate-500 mb-10 text-base leading-relaxed h-20 overflow-hidden">
                  {area.description}
                </p>
                <div className="space-y-4">
                  {area.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <div className="w-1 h-1 bg-ritz-gold/50 rounded-full mr-4"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-ritz-gold flex items-center">
                     Request Briefing <ChevronRight size={14} className="ml-2" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 container mx-auto px-4">
        <div className="bg-slate-950 p-16 md:p-24 text-center text-white relative overflow-hidden rounded-sm group">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale transition-transform duration-[20s] group-hover:scale-110"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">Scale Your Global Operations.</h2>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Our multidisciplinary model ensures your enterprise navigates the complexities of the African market with technical precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-ritz-gold text-slate-950 px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all transform hover:-translate-y-1">
                 Digital Consultation
               </Link>
               <Link to="/team" className="border border-white/20 text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">
                 Meet The Architects
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
