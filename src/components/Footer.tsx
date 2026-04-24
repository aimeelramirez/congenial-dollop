import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenNewsletter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNewsletter }) => {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] py-24 px-6 border-t border-[var(--background)]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-6">
          <h2 className="text-xl tracking-[0.2em] font-light">NEURAL</h2>
          <p className="text-[var(--background)]/40 text-sm font-light leading-relaxed">
            Engineering the intersection of machine intelligence and human expression. 
            Designed for those who dwell in the future state of collective consciousness.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--background)]/60">Collection</h3>
          <ul className="space-y-4 text-sm font-light text-[var(--background)]/40">
            <li><Link to="/shop" className="hover:text-[var(--background)] transition-colors">All Objects</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-[var(--background)] transition-colors">New Arrivals</Link></li>
            <li><Link to="/about" className="hover:text-[var(--background)] transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--background)]/60">Service</h3>
          <ul className="space-y-4 text-sm font-light text-[var(--background)]/40">
            <li><Link to="/" className="hover:text-[var(--background)] transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/" className="hover:text-[var(--background)] transition-colors">Sustainability</Link></li>
            <li><Link to="/" className="hover:text-[var(--background)] transition-colors">Contact</Link></li>
            <li><Link to="/" className="hover:text-[var(--background)] transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--background)]/60">Join the Journal</h3>
            <p className="text-sm font-light text-[var(--background)]/40">Our monthly dispatch on art, design, and culture.</p>
            <div className="relative">
              <input 
                onClick={onOpenNewsletter}
                readOnly
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[var(--background)]/20 py-2 focus:border-[var(--background)] transition-colors outline-none text-sm font-light cursor-pointer"
              />
              <button 
                onClick={onOpenNewsletter}
                className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-medium hover:text-[var(--background)]/60 transition-colors"
              >
                Join
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-[var(--background)]/40 hover:text-[var(--background)] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-[var(--background)]/40 hover:text-[var(--background)] cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-[var(--background)]/40 hover:text-[var(--background)] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-[var(--background)]/5 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--background)]/20">© 2026 NEURAL THREADS. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-[var(--background)]/20">
          <Link to="/" className="hover:text-[var(--background)]/40 transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-[var(--background)]/40 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

