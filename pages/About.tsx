
import React from 'react';
import { User, Shield, Award, Landmark } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Institutional Architecture */}
      <section className="py-16 md:py-24 bg-ritz-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 transform skew-x-12 hidden md:block"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Institutional Architecture</h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 md:mb-12">
              Based at the prestigious <span className="text-ritz-gold font-semibold">Keza Office Park in Blantyre</span>, Ritz Attorneys at Law serves as the "modern vanguard" of African legal services. We have constructed a multidisciplinary engine capable of servicing the most complex cross-border transactions and regulatory challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-ritz-gold font-bold text-2xl md:text-3xl mb-2">Largest</div>
                <p className="text-xs md:text-sm opacity-70 leading-relaxed">Law firm in Malawi by headcount and specialized associates across multiple departments.</p>
              </div>
              <div>
                <div className="text-ritz-gold font-bold text-2xl md:text-3xl mb-2">Dual</div>
                <p className="text-xs md:text-sm opacity-70 leading-relaxed">Qualified practitioners across multiple global jurisdictions, bridging local and international law.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Vanguard Leadership</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">Expertise that spans continents, specializing in the modern convergence of markets.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
            {/* Lusungu Gondwe */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-slate-100 rounded-sm">
                <img src="https://picsum.photos/seed/lusungu/600/750" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Lusungu Gondwe" />
                <div className="absolute inset-0 bg-ritz-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Lusungu Gondwe</h3>
              <div className="text-ritz-gold text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4">Founder & Managing Partner</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Specialist in Banking, Fintech, and Trade Finance. A market visionary who has steered Ritz to its current leadership position through strategic multidisciplinary integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">Fintech</span>
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">Trade Finance</span>
              </div>
            </div>

            {/* Chifundo Ngwira */}
            <div className="group">
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-slate-100 rounded-sm">
                <img src="https://picsum.photos/seed/chifundo/600/750" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Chifundo Ngwira" />
                <div className="absolute inset-0 bg-ritz-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Chifundo Ngwira</h3>
              <div className="text-ritz-gold text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4">Senior Partner</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                With over 25 years of senior legal experience, Chifundo leads the firm's Legal Compliance Audit Services (LCAS), ensuring institutional robustness for domestic and international clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">Compliance</span>
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">LCAS</span>
              </div>
            </div>

            {/* Lozindaba Mbvundula */}
            <div className="group sm:col-span-2 lg:col-span-1 max-w-md mx-auto sm:max-w-none">
              <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-slate-100 rounded-sm">
                <img src="https://picsum.photos/seed/lozindaba/600/750" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Lozindaba Mbvundula" />
                <div className="absolute inset-0 bg-ritz-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">Lozindaba Mbvundula</h3>
              <div className="text-ritz-gold text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-4">Partner</div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Expert in WTO frameworks, Competition Law, and Property Law. Lozindaba bridges the gap between domestic property acquisition and international trade regulations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">WTO</span>
                <span className="bg-slate-100 text-[9px] md:text-[10px] px-2 py-1 rounded-full text-slate-600 uppercase font-semibold">Competition</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-sm border-l-4 border-ritz-gold flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">The "Deep Bench"</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Beyond our senior leadership, Ritz maintains an extensive associate body of high-performing legal professionals. This includes dual-qualified practitioners like <span className="font-semibold text-slate-900">Belinda Msungama</span> (admitted in both Malawi and New York), providing a direct bridge to global financial centers.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-ritz-gold mb-1 md:mb-2">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Core Legal Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
