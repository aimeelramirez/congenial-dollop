import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/10 to-[var(--background)]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium text-[var(--foreground)]/50 mb-6"
          >
            Intelligence Manifested
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-light tracking-tight leading-[0.9] mb-8"
          >
            Wear the <br />
            <span className="serif italic">Future State</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/shop" className="bg-[var(--foreground)] text-[var(--background)] px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all inline-flex items-center gap-4 mx-auto group">
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            Interfacing <span className="serif italic">Digital Minds</span> with Physical Forms.
          </h2>
          <p className="text-[var(--foreground)]/60 leading-relaxed font-light text-lg">
            NEURAL THREADS is a laboratory of high-intelligence apparel. We engineer 
            garments that serve as the second skin for the augmented human, blending 
            superior textile science with cybernetic design.
          </p>
          <div className="w-px h-24 bg-[var(--foreground)]/10 mx-auto" />
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl font-light tracking-wide uppercase">The Essentials</h3>
          <Link to="/shop" className="text-[10px] uppercase tracking-widest font-medium border-b border-[var(--foreground)]/20 pb-1 hover:border-[var(--foreground)] transition-colors">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Seasonal Highlight Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[var(--foreground)]/40">Limited Transmission</span>
              <h3 className="text-4xl font-light tracking-tight italic font-serif">Technical Produce</h3>
              <p className="text-[var(--foreground)]/60 font-light leading-relaxed text-lg">
                Curating the harvest of digital and organic synergy. 
                Our seasonal interface explores the precision of growth and the aesthetics of technical nourishment.
              </p>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-4 bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all">
              Discover Summer Units
            </Link>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-sm overflow-hidden bg-[var(--foreground)]/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1574352592361-32d1327beef6?auto=format&fit=crop&q=80&w=1200" 
              alt="Seasonal Highlight" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <h2 className="text-[20vw] leading-none font-serif italic whitespace-nowrap">Timeless</h2>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h3 className="text-2xl md:text-3xl font-serif italic font-light tracking-wide leading-relaxed">
            "Design is not just what it looks like and feels like. Design is how it works."
          </h3>
          <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
            <span>Crafted with intentionality</span>
            <span className="w-1 h-1 bg-[var(--background)] rounded-full" />
            <span>Built for longevity</span>
          </div>
        </div>
      </section>

    </div>
  );
};
