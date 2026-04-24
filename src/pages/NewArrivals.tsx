import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewArrivals: React.FC = () => {
  const newArrivals = PRODUCTS.filter(p => p.newArrival);

  return (
    <div className="pt-20 min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation - LV Style */}
      <aside className="w-full md:w-64 border-r border-[var(--border)] p-8 md:sticky md:top-20 md:h-[calc(100vh-80px)] overflow-y-auto">
        <h1 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--foreground)]/40 mb-10">New This Season</h1>
        <nav className="space-y-6 text-sm font-light">
          <Link to="/new-arrivals" className="block text-[var(--foreground)] font-medium border-l-2 border-[var(--foreground)] pl-4">For Everyone</Link>
          <Link to="/shop" className="block text-[var(--foreground)]/40 hover:text-[var(--foreground)] pl-4 transition-colors">Limited Edition</Link>
          <Link to="/shop" className="block text-[var(--foreground)]/40 hover:text-[var(--foreground)] pl-4 transition-colors">Technical Knits</Link>
          <Link to="/shop" className="block text-[var(--foreground)]/40 hover:text-[var(--foreground)] pl-4 transition-colors">Ghost Series</Link>
        </nav>

        <div className="mt-20 pt-10 border-t border-[var(--border)]">
          <p className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/30 mb-4">Inspiration</p>
          <p className="text-xs text-[var(--foreground)]/50 leading-relaxed italic font-serif">
            "The transition from biological to synthetic elegance."
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Header Banners or Editorial Blocks */}
          <section className="relative aspect-[21/9] rounded-sm overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000" 
              alt="Highlight" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-10 left-10 text-white space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-80">Season 01 / Drop 02</span>
              <h2 className="text-4xl font-light tracking-tight italic font-serif">Aura Transmission</h2>
            </div>
          </section>

          {/* Product Grid */}
          <section className="space-y-12">
            <div className="flex justify-between items-end border-b border-[var(--border)] pb-6">
              <h3 className="text-2xl font-light tracking-tight uppercase">Featured Arrivals</h3>
              <p className="text-[10px] uppercase tracking-widest text-[var(--foreground)]/40">{newArrivals.length} items</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {newArrivals.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Luxury Editorial Block */}
          <section className="grid md:grid-cols-2 gap-10 items-center py-20 border-t border-[var(--border)]">
              <div className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-medium text-[var(--foreground)]/40">The Craft</h4>
                  <h5 className="text-3xl font-light leading-tight">Advanced Textile <br /> <span className="serif italic">Neuromorphism</span></h5>
                  <p className="text-[var(--foreground)]/60 font-light leading-relaxed">
                    Our new season explores the tactile relationship between data streams and fabric density. 
                    Each garment is a node in the larger network of your identity.
                  </p>
                  <button className="text-xs border-b border-[var(--foreground)] pb-1 uppercase tracking-widest font-medium flex items-center gap-2 hover:opacity-60 transition-opacity">
                    Discover the process
                    <ChevronRight className="w-4 h-4" />
                  </button>
              </div>
              <div className="aspect-square bg-[var(--foreground)]/5 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
                  alt="Process" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
          </section>
        </div>
      </main>
    </div>
  );
};
