
import React from 'react';
import { Scale, ShieldAlert, Gavel, Briefcase } from 'lucide-react';

const Litigation: React.FC = () => {
  const cases = [
    {
      category: "Public Interest & Anti-Corruption",
      title: "YAS vs. Standard Bank",
      description: "A landmark case defining the boundaries of *locus standi* in anti-corruption matters, setting a high bar for institutional transparency in the financial sector.",
      outcome: "Benchmark established for public interest standing in commercial corruption litigation."
    },
    {
      category: "Constitutional Law",
      title: "Mathanga and Kunje vs. The President",
      description: "High-stakes constitutional litigation regarding the exercise of executive power and electoral commission integrity.",
      outcome: "Reinforced the separation of powers and judicial independence in Malawi."
    },
    {
      category: "Commercial & Insolvency",
      title: "Deluxe Coaches vs. FDH Bank",
      description: "A liquidation benchmark case that tested the limits of creditor rights and business rescue viability under the then-new Insolvency Act.",
      outcome: "Clarified procedural requirements for bank-led liquidations and debt recovery."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <div className="inline-block bg-ritz-gold/10 text-ritz-gold px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4">Case Studies</div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Landmark Litigation</h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Our track record in the High Court and Supreme Court of Malawi reflects our ability to handle high-velocity, precedent-setting legal challenges.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <Scale size={120} className="text-slate-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <div key={i} className="flex flex-col md:row gap-12 border-b border-slate-100 pb-16 last:border-0">
                <div className="md:w-1/4">
                  <div className="text-ritz-gold font-bold text-sm uppercase tracking-widest mb-2 flex items-center">
                    <Gavel size={16} className="mr-2" />
                    {c.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{c.title}</h3>
                </div>
                <div className="md:w-3/4 bg-slate-50 p-8 rounded-sm">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">Case Overview</h4>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{c.description}"
                  </p>
                  <div className="flex items-start bg-white p-4 border-l-4 border-green-500 shadow-sm">
                    <ShieldAlert size={20} className="text-green-500 mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Impact & Outcome</h5>
                      <p className="text-sm text-slate-600">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Litigation;
