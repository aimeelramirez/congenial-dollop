import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';

export const ShopAll: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'default' | 'price-asc' | 'price-desc' | 'name-asc'>('default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    switch (sortOrder) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Already sorted by id or whatever default is
        break;
    }

    return result;
  }, [selectedCategory, sortOrder]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header / New Arrivals Feature */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="New Arrivals" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-[10px] uppercase tracking-[0.6em] font-medium opacity-60">Phase Two Transmission</h1>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none italic font-serif">New Arrivals</h2>
          </motion.div>
        </div>
      </section>

      {/* Grid Controls */}
      <div className="sticky top-20 z-30 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] px-6">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity"
              >
                <Filter className="w-3 h-3" />
                Filter {selectedCategory && `(${selectedCategory})`}
              </button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-4 bg-[var(--background)] border border-[var(--border)] p-4 min-w-[200px] shadow-xl z-50"
                  >
                    <div className="space-y-2">
                      <button 
                        onClick={() => { setSelectedCategory(null); setIsFilterOpen(false); }}
                        className={`block w-full text-left text-[10px] tracking-widest uppercase py-2 hover:opacity-50 transition-all ${!selectedCategory ? 'font-bold' : 'font-light'}`}
                      >
                        All Categories
                      </button>
                      {categories.map(cat => (
                        <button 
                          key={cat}
                          onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                          className={`block w-full text-left text-[10px] tracking-widest uppercase py-2 hover:opacity-50 transition-all ${selectedCategory === cat ? 'font-bold' : 'font-light'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-4 w-px bg-[var(--border)]" />
            <span className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40">
              {filteredAndSortedProducts.length} Results
            </span>
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1 text-[8px] uppercase tracking-[0.2em] bg-[var(--foreground)]/5 px-2 py-1 rounded-full hover:bg-[var(--foreground)]/10 transition-all"
              >
                <X className="w-2 h-2" />
                Clear
              </button>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity"
            >
              Sort By {sortOrder !== 'default' && `(${sortOrder.replace('-', ' ')})`}
              <ChevronDown className="w-3 h-3" />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 bg-[var(--background)] border border-[var(--border)] p-4 min-w-[200px] shadow-xl z-50"
                >
                  <div className="space-y-2 text-right">
                    {[
                      { label: 'Default', value: 'default' },
                      { label: 'Name (A-Z)', value: 'name-asc' },
                      { label: 'Price (Low-High)', value: 'price-asc' },
                      { label: 'Price (High-Low)', value: 'price-desc' }
                    ].map(opt => (
                      <button 
                        key={opt.value}
                        onClick={() => { setSortOrder(opt.value as any); setIsSortOpen(false); }}
                        className={`block w-full text-right text-[10px] tracking-widest uppercase py-2 hover:opacity-50 transition-all ${sortOrder === opt.value ? 'font-bold' : 'font-light'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Product Catalog */}
      <section className="max-w-7xl mx-auto px-6 py-20 min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
          {filteredAndSortedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: (idx % 12) * 0.05 // Stagger for smooth loading
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="py-20 text-center opacity-40">
            <p className="text-[10px] uppercase tracking-[0.4em]">No matching transmissions found</p>
          </div>
        )}
      </section>

      {/* Newsletter / Highlight */}

      <section className="py-32 border-t border-[var(--border)] text-center px-6">
        <div className="max-w-2xl mx-auto space-y-10">
          <h3 className="text-2xl font-serif italic font-light">Stay Synced</h3>
          <p className="text-sm text-[var(--foreground)]/50 font-light leading-relaxed">
            Receive exclusive early access to future drops and limited-run hardware. 
            No spam, only transmissions.
          </p>
          <div className="flex max-w-md mx-auto border-b border-[var(--foreground)] pb-2">
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="flex-1 bg-transparent border-none outline-none text-[10px] tracking-widest uppercase py-2"
            />
            <button className="text-[10px] tracking-widest uppercase font-medium hover:opacity-50">Join</button>
          </div>
        </div>
      </section>
    </div>
  );
};
