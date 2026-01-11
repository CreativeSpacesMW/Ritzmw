
import React from 'react';
import { Globe, Heart, BookOpen, Droplets, Leaf } from 'lucide-react';

const GlobalCSR: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Global Reach */}
      <section className="py-24 bg-ritz-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:row items-center gap-16">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-8">Alliott Global Alliance</h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                As the exclusive Malawian member of the <span className="text-ritz-gold font-semibold">Alliott Global Alliance (AGA)</span>, Ritz provides a seamless gateway for international investors entering the Southern African market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-ritz-gold/20 p-2 rounded">
                    <Globe size={20} className="text-ritz-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">100+ Countries</h4>
                    <p className="text-sm text-slate-400">Collaborating with elite legal and accounting firms globally.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-ritz-gold/20 p-2 rounded">
                    <Globe size={20} className="text-ritz-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Direct Corridors</h4>
                    <p className="text-sm text-slate-400">Specialized desks for investors from the UK, USA, China, and UAE.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-ritz-gold/20 rounded-full blur-3xl"></div>
                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" className="relative z-10 rounded-lg shadow-2xl opacity-80" alt="Global Network" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Corporate Responsibility</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our commitment to Malawi extends beyond the boardroom through strategic social interventions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 hover:border-ritz-gold transition-colors text-center">
              <BookOpen size={48} className="text-ritz-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Through our partnership with <span className="font-bold">MUBAS</span>, we sponsor legal academic excellence and provide internship pathways for Malawi's next generation of legal architects.
              </p>
            </div>
            <div className="p-8 border border-slate-100 hover:border-ritz-gold transition-colors text-center">
              <Heart size={48} className="text-ritz-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Active support for primary healthcare facilities and medical outreach programs in the Southern Region of Malawi.
              </p>
            </div>
            <div className="p-8 border border-slate-100 hover:border-ritz-gold transition-colors text-center">
              <Leaf size={48} className="text-ritz-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Environment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Committing a percentage of our carbon credit legal advisory profits to local reforestation and environmental conservation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalCSR;
