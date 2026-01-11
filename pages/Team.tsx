
import React from 'react';
import { Mail, Linkedin, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamData = {
  partners: [
    {
      name: "Lusungu Gondwe",
      role: "Founder & Managing Partner",
      specialization: "Banking, Fintech & Trade Finance",
      bio: "Lusungu is the driving force behind the firm’s multidisciplinary vision. He handles 68% of the Malawian banking market’s trade finance portfolio and is a pioneer in Fintech regulation in the region.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Fintech", "Trade Finance", "Banking Law"]
    },
    {
      name: "Chifundo Ngwira",
      role: "Senior Partner",
      specialization: "Compliance & Institutional Audit",
      bio: "With over 25 years of experience, Chifundo leads the firm's Legal Compliance Audit Services (LCAS). She specializes in ensuring corporate robustness for international conglomerates operating in Malawi.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Corporate Governance", "Compliance", "Employment Law"]
    },
    {
      name: "Lozindaba Mbvundula",
      role: "Partner",
      specialization: "WTO, Competition & Property",
      bio: "Lozindaba bridges domestic property acquisition with international trade regulations. She is a leading expert on WTO frameworks and Competition Law in Southern Africa.",
      image: "https://images.unsplash.com/photo-1580894732230-28e193399e82?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["International Trade", "Competition Law", "Conveyancing"]
    }
  ],
  associates: [
    {
      name: "Belinda Msungama",
      role: "Senior Associate",
      specialization: "Corporate & Commercial",
      bio: "Dual-qualified practitioner (Malawi and New York). Belinda specializes in cross-border M&A and tech investment.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["M&A", "Investment Law"]
    },
    {
      name: "Kondwani Mtonga",
      role: "Senior Associate",
      specialization: "Litigation & Dispute Resolution",
      bio: "A high-velocity litigator known for handling complex civil and commercial disputes in the High Court.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Litigation", "Arbitration"]
    },
    {
      name: "Memory Ngosi",
      role: "Associate",
      specialization: "Intellectual Property & TMT",
      bio: "Specializes in the protection of digital assets and telecommunications regulatory frameworks.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["IP Protection", "Telecoms"]
    },
    {
      name: "Tiwonge Mhone",
      role: "Associate",
      specialization: "Energy & Mining",
      bio: "Advising on oil and gas regulations and emerging carbon credit trading frameworks.",
      image: "https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Energy Law", "ESG"]
    }
  ]
};

interface TeamMemberCardProps {
  member: any;
  isPartner?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isPartner = false }) => {
  return (
    <div className={`group bg-white rounded-sm overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] ${isPartner ? 'md:flex border-b-4 border-ritz-gold' : 'border border-slate-100'}`}>
      <div className={`relative overflow-hidden bg-slate-900 ${isPartner ? 'md:w-[40%] aspect-[4/5] md:aspect-auto' : 'aspect-[4/5]'}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
           <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-ritz-gold hover:text-white transition-colors">
            <Linkedin size={14} />
           </a>
           <a href={`mailto:info@ritzattorneys.com`} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-ritz-gold hover:text-white transition-colors">
            <Mail size={14} />
           </a>
        </div>
      </div>
      
      <div className={`p-6 md:p-10 lg:p-14 ${isPartner ? 'md:w-[60%] flex flex-col justify-center bg-slate-50' : 'bg-white'}`}>
        <div className="mb-6 md:mb-8">
           <div className="text-ritz-gold text-[9px] font-black uppercase tracking-[0.4em] mb-2 md:mb-4">{member.role}</div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-950 mb-1 leading-tight tracking-tighter group-hover:text-ritz-gold transition-colors">{member.name}</h3>
        </div>
        
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-light">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
          {member.expertise.map((exp: string, i: number) => (
            <span key={i} className="bg-white text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 border border-slate-100 rounded-full">
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="bg-white pb-20 md:pb-32">
      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-ritz-gold transform skew-x-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-ritz-gold/10 border border-ritz-gold/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm mx-auto">
              <Users size={14} className="text-ritz-gold" />
              <span className="text-ritz-gold text-[9px] font-black uppercase tracking-[0.4em]">Global Talent Pool</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tighter">
              The <span className="text-ritz-gold italic font-serif font-light">Human</span> <br />Infrastructure.
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto font-serif italic">
              "A multidisciplinary engine of legal architects, dual-qualified experts, and technical innovators."
            </p>
        </div>
      </section>

      {/* Leadership Partners */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-4">
          <h2 className="text-3xl md:text-6xl font-bold text-slate-950 tracking-tighter">Leadership Partners</h2>
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] pb-1">Strategic Governance</p>
        </div>
        <div className="space-y-16 md:space-y-32">
          {teamData.partners.map((partner, idx) => (
            <TeamMemberCard key={idx} member={partner} isPartner={true} />
          ))}
        </div>
      </section>

      {/* Associate Body */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-4">
            <h2 className="text-3xl md:text-6xl font-bold text-slate-950 tracking-tighter">Expert Practitioners</h2>
            <p className="text-ritz-gold text-[9px] font-black uppercase tracking-[0.3em] pb-1">Technical Execution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamData.associates.map((associate, idx) => (
              <TeamMemberCard key={idx} member={associate} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Bench Stats */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="bg-slate-950 p-10 md:p-32 text-center relative overflow-hidden rounded-sm group">
           <div className="absolute top-0 left-0 w-full h-1 bg-ritz-gold"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h3 className="text-2xl md:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tighter">A "Deep Bench" of Multi-jurisdictional Talent.</h3>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
               {[
                 { val: "15+", label: "Attorneys" },
                 { val: "3", label: "Dual-Qualified" },
                 { val: "100%", label: "Digital Fluency" },
                 { val: "6", label: "Practice Heads" }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                   <div className="text-ritz-gold text-3xl md:text-6xl font-serif font-bold mb-1">{stat.val}</div>
                   <p className="text-slate-500 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em]">{stat.label}</p>
                 </div>
               ))}
             </div>
             <div className="mt-16">
               <Link to="/contact" className="bg-white text-slate-950 px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-ritz-gold transition-colors inline-block">
                 Join Our Technical Team
               </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
