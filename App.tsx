
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, Scale, Globe, Building2, Briefcase, 
  MapPin, Phone, Mail, Clock, ShieldCheck, Zap, TrendingUp, Users 
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Team from './pages/Team';
import Litigation from './pages/Litigation';
import GlobalCSR from './pages/GlobalCSR';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Team', path: '/team' },
    { name: 'Litigation', path: '/litigation' },
    { name: 'Global & CSR', path: '/global-csr' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-2 border-b border-slate-800/50 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-900 border border-ritz-gold flex items-center justify-center transform rotate-45 shrink-0 transition-all group-hover:rotate-0">
                <span className="text-ritz-gold font-serif font-bold text-lg md:text-xl -rotate-45 group-hover:rotate-0 transition-transform">R</span>
              </div>
              <div className="ml-1 md:ml-2">
                <span className="block text-lg md:text-xl font-serif font-bold tracking-tight leading-none text-white group-hover:text-ritz-gold transition-colors uppercase">Ritz</span>
                <span className="block text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-ritz-gold leading-none mt-1 font-black">Attorneys at Law</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:text-ritz-gold relative py-2 group ${
                    isActive ? 'text-ritz-gold' : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    {isActive && <span className="w-1 h-1 bg-ritz-gold rounded-full"></span>}
                    <span>{link.name}</span>
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-ritz-gold transform origin-left transition-transform duration-500 ${
                    isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-ritz-gold hover:bg-white text-slate-950 px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg active:scale-95"
            >
              Consultation
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white bg-slate-900/50 backdrop-blur-md rounded-md border border-slate-700/50 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-slate-950 z-[110] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="absolute top-0 w-full px-4 sm:px-6 py-6 flex justify-between items-center h-24">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-slate-900 border border-ritz-gold flex items-center justify-center transform rotate-45">
                    <span className="text-ritz-gold font-serif font-bold text-lg -rotate-45">R</span>
                </div>
            </Link>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-white"
            >
              <X size={32} />
            </button>
        </div>

        <div className="flex flex-col h-full justify-center px-8 sm:px-12 space-y-6">
          <div className="text-ritz-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Navigation Menu</div>
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-3xl sm:text-4xl font-serif font-bold transition-all transform duration-500 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              } ${
                location.pathname === link.path ? 'text-ritz-gold' : 'text-slate-500 hover:text-white'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="flex items-center">
                {location.pathname === link.path && <span className="w-4 h-0.5 bg-ritz-gold mr-4"></span>}
                {link.name}
              </span>
            </Link>
          ))}
          <div className={`pt-12 transform transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <Link
              to="/contact"
              className="inline-block bg-ritz-gold text-slate-950 px-10 py-5 text-center font-black uppercase tracking-[0.2em] rounded-sm text-xs shadow-2xl active:scale-95 w-full sm:w-auto"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1">
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 border border-ritz-gold flex items-center justify-center transform rotate-45">
                <span className="text-ritz-gold font-serif font-bold text-lg -rotate-45">R</span>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">RITZ</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs font-medium italic">
              "Technical Excellence at the Confluence of Law, Technology, and Finance."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:border-ritz-gold hover:text-ritz-gold transition-all">
                <Globe size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Offices</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-ritz-gold shrink-0 mt-1" />
                <span className="leading-relaxed">Western Wing, Keza Office Park,<br />Chichiri, Blantyre, Malawi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-ritz-gold shrink-0" />
                <span>Mon-Fri: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Alliance</h4>
            <div className="bg-slate-900/40 p-5 border border-slate-800 rounded-sm">
              <Globe size={20} className="text-ritz-gold mb-3" />
              <p className="text-[11px] leading-relaxed font-medium">
                Exclusive Malawian member of <span className="text-white font-bold">Alliott Global Alliance</span>. Delivering cross-border solutions through 220+ member firms.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Briefing</h4>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-900 border border-slate-800 text-white text-xs px-4 py-3.5 w-full focus:ring-1 focus:ring-ritz-gold outline-none rounded-l-sm transition-all" 
              />
              <button className="bg-ritz-gold text-slate-950 px-4 py-3.5 hover:bg-white transition-all rounded-r-sm">
                <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] gap-6 text-center md:text-left">
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Ritz Attorneys at Law. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="hover:text-ritz-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-ritz-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-ritz-gold transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/team" element={<Team />} />
            <Route path="/litigation" element={<Litigation />} />
            <Route path="/global-csr" element={<GlobalCSR />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
