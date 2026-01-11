
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Laptop } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. A Ritz representative will contact you shortly to schedule your digital consultation.");
  };

  return (
    <div className="bg-gray-50 pb-16 md:pb-24">
      {/* Header */}
      <section className="bg-white py-12 md:py-20 border-b border-slate-100 mb-8 md:mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">Connect with Us</h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
              Accessible, high-velocity legal advice for the modern world. Visit our flagship office or schedule a virtual briefing.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:w-1/3 space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm border border-slate-100">
              <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center">
                <MapPin className="text-ritz-gold mr-3 shrink-0" size={24} /> Flagship HQ
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Location</div>
                  <p className="text-sm md:text-base text-slate-700">Western Wing, Keza Office Park<br />Blantyre, Malawi</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Business Hours</div>
                  <div className="flex items-center text-sm md:text-base text-slate-700">
                    <Clock size={16} className="mr-2 text-ritz-gold" />
                    08:00 to 17:00 (GMT+2)
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Global Access</div>
                  <div className="flex items-center text-sm md:text-base text-slate-700 mb-2">
                    <Phone size={16} className="mr-2 text-ritz-gold" />
                    +265 (0) 1 830 000
                  </div>
                  <div className="flex items-center text-sm md:text-base text-slate-700">
                    <Mail size={16} className="mr-2 text-ritz-gold" />
                    info@ritzattorneys.com
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ritz-blue p-6 md:p-8 rounded-sm text-white">
              <Laptop className="text-ritz-gold mb-4" size={32} />
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Digital Consultation</h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Our secure digital platform allows for full-spectrum legal consultation across Zoom, Teams, and specialized secure document gateways.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 order-1 lg:order-2">
            <div className="bg-white p-6 md:p-10 rounded-sm shadow-sm border border-slate-100">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Schedule a Briefing</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-ritz-gold outline-none transition-all text-base"
                      placeholder="John Doe"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Corporate Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-slate-50 border-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-ritz-gold outline-none transition-all text-base"
                      placeholder="name@company.com"
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Organization</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-ritz-gold outline-none transition-all text-base"
                      placeholder="Multinational Corp"
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Area of Interest</label>
                    <select 
                      className="w-full bg-slate-50 border-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-ritz-gold outline-none transition-all text-base appearance-none"
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>Banking & Fintech</option>
                      <option>Corporate & Insolvency</option>
                      <option>Energy, Mining & ESG</option>
                      <option>TMT</option>
                      <option>Litigation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Message Overview</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border-slate-200 px-4 py-3 rounded-sm focus:ring-1 focus:ring-ritz-gold outline-none transition-all text-base"
                    placeholder="Briefly describe your requirements..."
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-ritz-gold text-slate-900 px-10 py-4 font-bold rounded-sm hover:bg-opacity-90 transition-all flex items-center justify-center group mt-4"
                >
                  Submit Inquiry <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
