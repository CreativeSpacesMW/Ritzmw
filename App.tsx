
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, Scale, Globe, Building2, Briefcase, 
  MapPin, Phone, Mail, Clock, ShieldCheck, Zap, TrendingUp, Users 
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Litigation from './pages/Litigation';
import GlobalCSR from './pages/GlobalCSR';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Landmark Litigation', path: '/litigation' },
    { name: 'Global & CSR', path: '/global-csr' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-slate-900 border border-ritz-gold flex items-center justify-center transform rotate-45 shrink-0 transition-transform group-hover:scale-110">
                <span className="text-ritz-gold font-serif font-bold text-xl -rotate-45">R</span>
              </div>
              <div className="ml-2">
                <span className="block text-xl font-serif font-bold tracking-tight leading-none group-hover:text-ritz-gold transition-colors">RITZ</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-ritz-gold leading-none mt-1 font-bold">Attorneys at Law</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-ritz-gold py-2 ${
                  location.pathname === link.path ? 'text-ritz-gold border-b-2 border-ritz-gold' : 'text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-ritz-gold hover:bg-white text-slate-950 px-5 py-2.5 rounded-sm text-sm font-extrabold transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Consultation
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white bg-slate-900 rounded-md border border-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Fully opaque for clarity */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-slate-950 z-50 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-5 text-xl font-bold border-b border-slate-900 ${
                location.pathname === link.path ? 'text-ritz-gold' : 'text-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10">
            <Link
              to="/contact"
              className="block w-full bg-ritz-gold text-slate-950 px-4 py-5 text-center font-black rounded-sm text-lg shadow-xl"
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
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
             <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 border border-ritz-gold flex items-center justify-center transform rotate-45">
                <span className="text-ritz-gold font-serif font-bold text-lg -rotate-45">R</span>
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">RITZ</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs font-medium">
              The modern vanguard of African legal services. Delivering technical excellence at the confluence of law, technology, and finance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900 flex items-center justify-center hover:border-ritz-gold hover:text-ritz-gold transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Office Locations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-ritz-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Western Wing, Keza Office Park,<br />Chichiri, Blantyre, Malawi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} className="text-ritz-gold" />
                <span>Mon - Fri: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Global Network</h4>
            <div className="flex items-start space-x-3 bg-slate-900/50 p-4 border border-slate-800 rounded-sm">
              <Globe size={20} className="text-ritz-gold shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Exclusive member of <span className="text-white font-bold">Alliott Global Alliance</span>. Independent legal solutions in 100+ countries.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-widest">Connect</h4>
            <p className="text-xs mb-4 font-bold text-slate-400">Subscribe for executive legal summaries.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Corporate Email" 
                className="bg-slate-900 border border-slate-800 text-white text-sm px-4 py-3 w-full focus:ring-2 focus:ring-ritz-gold outline-none rounded-l-sm font-medium" 
              />
              <button className="bg-ritz-gold text-slate-950 px-4 py-3 hover:bg-white transition-colors rounded-r-sm shadow-inner">
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-widest gap-6">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Ritz Attorneys at Law. Technical Excellence.</p>
          <div className="flex flex-wrap justify-center space-x-8">
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
        <main className="flex-grow page-fade">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
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
