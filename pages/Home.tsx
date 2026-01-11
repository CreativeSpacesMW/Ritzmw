
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, ShieldCheck, Zap, TrendingUp, Globe2, Building } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Using Solid Slate background to ensure text visibility */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex items-center bg-slate-950 overflow-hidden py-16 md:py-0">
        {/* Background Overlay Graphics - Darkened for better contrast */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-ritz-gold rounded-full filter blur-[80px] md:blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-40 md:w-80 h-40 md:h-80 bg-blue-900 rounded-full filter blur-[100px] md:blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-ritz-gold/20 border border-ritz-gold/50 px-4 py-1.5 rounded-full mb-8">
              <span className="w-2.5 h-2.5 bg-ritz-gold rounded-full animate-pulse shadow-[0_0_8px_#C5A059]"></span>
              <span className="text-ritz-gold text-xs font-black uppercase tracking-[0.2em]">Malawi's Market Leader</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
              At the <span className="text-ritz-gold italic">Confluence</span> of Law, Tech & Finance.
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-medium">
              Ritz Attorneys at Law is the nation's premier practice, bridging heritage legal excellence with high-speed digital architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="bg-ritz-gold text-slate-950 px-8 py-5 text-lg font-black rounded-sm text-center hover:bg-white hover:scale-105 transition-all shadow-2xl">
                Digital Consultation
              </Link>
              <Link to="/practice-areas" className="border-2 border-white/40 text-white px-8 py-5 text-lg font-black rounded-sm text-center hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center group">
                Explore Expertise <ChevronRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar - Solid White with Dark Text */}
      <section className="bg-white border-b-4 border-ritz-gold py-10 md:py-16 relative z-20 -mt-10 md:-mt-14 mx-4 md:mx-auto max-w-6xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-100">
          <div className="px-10 py-6 text-center group">
            <div className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-2 transition-colors">15+</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-600 font-black">Specialized Lawyers</div>
          </div>
          <div className="px-10 py-6 text-center group">
            <div className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-2 transition-colors">68%</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-600 font-black">Banking Market Share</div>
          </div>
          <div className="px-10 py-6 text-center group">
            <div className="text-4xl md:text-6xl font-serif font-black text-slate-950 mb-2 transition-colors">100+</div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-600 font-black">AGA Partner Countries</div>
          </div>
        </div>
      </section>

      {/* Strategic Genesis - High legibility layout */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 text-slate-950 leading-tight tracking-tight">Strategic Genesis</h2>
              <div className="space-y-8 text-slate-800 leading-relaxed text-lg md:text-xl font-medium">
                <p>
                  Established in 2012, Ritz Attorneys at Law emerged with a radical vision: to reconstruct the Malawian legal landscape for the 21st century. Our ascent was driven by a commitment to multidisciplinary integration.
                </p>
                <p>
                  We recognized early that the traditional boundaries between legal advice, financial architecture, and technological shifts were dissolving. 
                </p>
                <div className="flex items-start space-x-5 p-8 md:p-10 bg-slate-950 text-white border-l-8 border-ritz-gold shadow-xl">
                  <p className="text-lg md:text-2xl font-serif italic text-slate-200">
                    "Our philosophy is speed without compromise. We understand that in the modern global economy, a legal solution is only as valuable as the time it saves for the investor."
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-sm shadow-2xl mt-10 md:mt-16 w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Office Professional" />
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-sm shadow-2xl w-full border-4 border-white" alt="Modern Architecture" />
              </div>
              <div className="absolute -bottom-8 -right-4 bg-ritz-gold p-6 md:p-10 text-slate-950 shadow-2xl">
                <div className="text-4xl md:text-6xl font-serif font-black mb-1">2012</div>
                <div className="text-[12px] uppercase tracking-[0.2em] font-black opacity-90">Foundation Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Confluence - Solid backgrounds for card details */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-950 tracking-tight">The Triple Confluence</h2>
            <div className="w-24 md:w-32 h-2 bg-ritz-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-transparent hover:border-ritz-gold transition-all group hover:-translate-y-2">
              <Scale className="text-ritz-gold mb-8 group-hover:scale-110 transition-transform" size={56} strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-950">Law</h3>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">Deep technical proficiency and regional authority across all branches of civil and commercial law.</p>
            </div>
            <div className="bg-white p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-transparent hover:border-ritz-gold transition-all group hover:-translate-y-2">
              <Zap className="text-ritz-gold mb-8 group-hover:scale-110 transition-transform" size={56} strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-950">Technology</h3>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">Pioneering TMT and Fintech legal frameworks for digital payment systems and telecommunications.</p>
            </div>
            <div className="bg-white p-10 md:p-14 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-transparent hover:border-ritz-gold transition-all group hover:-translate-y-2">
              <TrendingUp className="text-ritz-gold mb-8 group-hover:scale-110 transition-transform" size={56} strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-950">Finance</h3>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">Premier choice for Malawi’s banking sector, handling 68% of the market share in trade finance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
