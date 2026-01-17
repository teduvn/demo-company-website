import React from 'react';
import { Rocket, Globe, Share2, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#10221d] text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-8 text-[#12edb6]">
                <Rocket size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">TEDU</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering the next generation with cutting-edge technology and educational excellence. Leading the digital transformation in learning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">News & Insights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Solutions</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">LMS Platform</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Enterprise Apps</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Curriculum Design</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">Staff Training</a></li>
              <li><a href="#" className="hover:text-[#12edb6] transition-colors">IT Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-white/50 shrink-0" size={18} />
                <span>123 Innovation Drive, Tech City, TC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-white/50 shrink-0" size={18} />
                <span>hello@tedu-global.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-white/50 shrink-0" size={18} />
                <span>+1 (555) 000-TECH</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">© 2024 TEDU Technology & Education. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
