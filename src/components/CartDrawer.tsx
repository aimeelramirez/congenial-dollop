import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--background)] z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
              <h2 className="text-xl font-light tracking-wide uppercase">Your Bag</h2>
              <button onClick={onClose} className="p-2 hover:bg-[var(--foreground)]/5 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[var(--foreground)]/10" />
                  <p className="text-[var(--foreground)]/40 font-serif italic">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="text-xs uppercase tracking-widest font-medium border-b border-[var(--foreground)] pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-32 object-cover bg-[var(--foreground)]/5 rounded-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium tracking-tight">{item.name}</h3>
                          <p className="text-sm font-mono opacity-60">${item.price}</p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-[var(--foreground)]/40 mt-1">{item.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-[var(--border)] rounded-full px-3 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-[var(--foreground)]/60"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-[var(--foreground)]/60"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40 hover:text-[var(--foreground)] underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-[var(--border)] space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-widest font-medium text-[var(--foreground)]/40">Subtotal</span>
                  <span className="text-xl font-mono">${totalPrice}</span>
                </div>
                <p className="text-[10px] text-[var(--foreground)]/40 text-center italic font-serif">
                  Shipping and taxes calculated at checkout.
                </p>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-[var(--foreground)] text-[var(--background)] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
