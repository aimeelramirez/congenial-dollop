import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset state after some time if needed
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Mock API call
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-xl bg-[var(--background)] z-[110] overflow-hidden rounded-sm shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-[var(--foreground)]/5 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-5 min-h-[400px]">
              <div className="md:col-span-2 relative hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                  alt="Newsletter" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="md:col-span-3 p-10 flex flex-col justify-center space-y-8">
                {!isSubmitted ? (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-[10px] uppercase tracking-[0.4em] font-medium text-[var(--foreground)]/40">Market Transmission</h2>
                      <h3 className="text-3xl font-light tracking-tight italic font-serif">Stay Connected</h3>
                      <p className="text-sm text-[var(--foreground)]/60 leading-relaxed font-light">
                        Subscribe now and receive the latest news from NEURAL, including new arrivals and exclusive collections.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative border-b border-[var(--border)] pb-2 group focus-within:border-[var(--foreground)] transition-colors">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground)]/30" />
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="EMAIL ADDRESS"
                          className="w-full bg-transparent pl-8 border-none outline-none text-[10px] tracking-widest font-medium uppercase"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-[var(--foreground)] text-[var(--background)] py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3 group"
                      >
                        Sign Up
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>

                    <div className="flex items-center gap-2 pt-4">
                      <ShieldCheck className="w-4 h-4 text-[var(--foreground)]/30" />
                      <p className="text-[10px] uppercase tracking-widest text-[var(--foreground)]/30">Your data is secured across the network.</p>
                    </div>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-[var(--foreground)]/5 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-[var(--foreground)]/20 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-serif italic">Access Granted</h3>
                       <p className="text-xs uppercase tracking-widest text-[var(--foreground)]/40">You are now part of the intelligence.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
