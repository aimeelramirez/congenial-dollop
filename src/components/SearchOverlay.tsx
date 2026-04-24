import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[var(--background)]/95 backdrop-blur-xl flex flex-col"
        >
          <div className="max-w-7xl mx-auto w-full px-6 pt-12">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-6">
              <div className="flex items-center gap-6 flex-1">
                <SearchIcon className="w-6 h-6 text-[var(--foreground)]/40" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the network..."
                  className="bg-transparent text-3xl md:text-5xl font-light tracking-tight w-full outline-none placeholder:text-[var(--foreground)]/10"
                />
              </div>
              <button 
                onClick={onClose}
                className="p-4 hover:bg-[var(--foreground)]/5 rounded-full transition-colors ml-4"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
              {results.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={`/product/${product.id}`} 
                    onClick={onClose}
                    className="group space-y-4"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-[var(--foreground)]/5 rounded-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div>
                        <h3 className="text-lg font-light tracking-tight">{product.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-[var(--foreground)]/40">{product.category}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}

              {query && results.length === 0 && (
                <div className="col-span-full py-20 text-center space-y-4 border border-dashed border-[var(--border)] rounded-lg">
                  <p className="text-xl font-serif italic text-[var(--foreground)]/40">No matching nodes found</p>
                  <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-20">Try "Hoodie" or "Outerwear"</p>
                </div>
              )}

              {!query && (
                <div className="col-span-full space-y-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-medium text-[var(--foreground)]/30">Suggested Queries</h4>
                  <div className="flex flex-wrap gap-4">
                    {['Apparel', 'Techwear', 'Hoodies', 'Next-Gen'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-6 py-2 border border-[var(--border)] rounded-full text-xs uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
