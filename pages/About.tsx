
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Shield, Award, Landmark, ChevronRight } from 'lucide-react';

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

      {/* Philosophy Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Our Digital Genesis</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded in 2012, our inception was marked by a departure from traditional legal bureaucracy. We envisioned a firm that speaks the language of modern commerce: speed, technical precision, and technological integration.
                </p>
                <p>
                  Today, Ritz is more than a law firm; it is a strategic consultancy that bridges the gap between African markets and global financial hubs.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-50 p-8 border-b-4 border-ritz-gold">
                   <Award size={32} className="text-ritz-gold mb-4" />
                   <h4 className="font-bold mb-2">Excellence</h4>
                   <p className="text-xs text-slate-500">Tier 1 rankings in commercial and corporate advisory.</p>
                </div>
                <div className="bg-slate-950 text-white p-8">
                   <Shield size={32} className="text-ritz-gold mb-4" />
                   <h4 className="font-bold mb-2">Integrity</h4>
                   <p className="text-xs text-slate-400">Trusted by 68% of the Malawian banking sector.</p>
                </div>
              </div>
              <div className="pt-12">
                 <div className="bg-ritz-gold text-slate-950 p-8 h-full flex flex-col justify-center">
                    <Landmark size={32} className="mb-4" />
                    <h4 className="font-bold mb-2">Regional Power</h4>
                    <p className="text-xs opacity-80">Dominant force in SADC region trade law.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by Visionaries</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12">
            Our success is built on the expertise of a diverse, high-performing team of legal professionals. 
          </p>
          <Link to="/team" className="inline-flex items-center space-x-3 bg-slate-950 text-white px-10 py-5 rounded-sm font-black hover:bg-ritz-gold hover:text-slate-950 transition-all group">
            <span>Explore Our Full Team</span>
            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
