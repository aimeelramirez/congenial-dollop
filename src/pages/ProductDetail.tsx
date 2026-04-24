import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Minus, Plus, Share2, Heart } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-serif italic text-[var(--foreground)]">Product Not Found</h1>
        <Link to="/shop" className="text-[10px] uppercase tracking-widest font-medium border-b border-[var(--foreground)] pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40 hover:text-[var(--foreground)] mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-[3/4] bg-[var(--foreground)]/5 rounded-sm overflow-hidden flex items-center justify-center"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain p-4 md:p-8"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--foreground)]/40">{product.category}</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">{product.name}</h1>
            <p className="text-2xl font-mono">${product.price}</p>
          </div>

          <p className="text-[var(--foreground)]/60 leading-relaxed font-light text-lg">
            {product.description}
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6 border border-[var(--border)] rounded-full px-6 py-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-[var(--foreground)]/60 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-mono w-4 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-[var(--foreground)]/60 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[var(--foreground)] text-[var(--background)] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Add to Bag
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="flex-1 border border-[var(--border)] py-4 rounded-full text-[10px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-[var(--foreground)]/5 transition-colors">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>
              <button className="flex-1 border border-[var(--border)] py-4 rounded-full text-[10px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-[var(--foreground)]/5 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          <div className="pt-10 space-y-4 border-t border-[var(--border)]">
            <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer py-2">
                <span className="text-[10px] uppercase tracking-widest font-medium">Specifications</span>
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="py-4 text-sm text-[var(--foreground)]/50 font-light leading-relaxed">
                <ul className="space-y-2">
                  <li>Premium materials sourced worldwide</li>
                  <li>Ethically produced in fair-trade workshops</li>
                  <li>2-year warranty on all manufacturing defects</li>
                </ul>
              </div>
            </details>
            <details className="group">
              <summary className="list-none flex justify-between items-center cursor-pointer py-2">
                <span className="text-[10px] uppercase tracking-widest font-medium">Shipping & Returns</span>
                <Plus className="w-4 h-4 group-open:rotate-45 transition-transform" />
              </summary>
              <div className="py-4 text-sm text-[var(--foreground)]/50 font-light leading-relaxed">
                Complimentary standard shipping on all domestic orders. Returns accepted within 30 days of delivery.
              </div>
            </details>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
