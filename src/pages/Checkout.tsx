import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Apple, ShieldCheck } from 'lucide-react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // PayPal initial options
  const initialOptions = {
    clientId: "test", // Replace with real client ID
    currency: "USD",
    intent: "capture",
  };

  const handleOrderSuccess = () => {
    // In a real app, you'd send order data to your backend here
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/success', { state: { email } });
      setIsProcessing(false);
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-serif italic text-black/40">Bag is empty</h1>
        <Link to="/" className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40 hover:text-[var(--foreground)] mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h1 className="text-3xl font-light tracking-tight mb-8">Checkout</h1>
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40 block">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 focus:border-[var(--foreground)] transition-colors outline-none font-light"
                />
              </div>
              
              <div className="pt-8 space-y-6">
                <h3 className="text-xs uppercase tracking-widest font-medium border-b border-[var(--border)] pb-2">Payment Method</h3>
                
                <PayPalScriptProvider options={initialOptions}>
                  <div className="space-y-4">
                    {/* Apple Pay Simulation */}
                    <button 
                      onClick={handleOrderSuccess}
                      className="w-full bg-[var(--foreground)] text-[var(--background)] h-[55px] rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-all font-medium py-3"
                    >
                      <Apple className="w-5 h-5" />
                      Buy with Apple Pay
                    </button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-[var(--border)]"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase tracking-videst">
                        <span className="bg-[var(--background)] px-4 text-[var(--foreground)]/30 font-medium">Or pay with PayPal</span>
                      </div>
                    </div>

                    <PayPalButtons 
                      style={{ layout: "vertical", shape: "rect" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [{
                            amount: { value: totalPrice.toString() }
                          }],
                          intent: "CAPTURE"
                        });
                      }}
                      onApprove={(data, actions) => {
                        if (actions.order) {
                          return actions.order.capture().then(() => handleOrderSuccess());
                        }
                        return Promise.resolve();
                      }}
                    />
                  </div>
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--foreground)]/5 p-6 rounded-sm space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--foreground)]/40" />
              <p className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/60">Secure SSL Encrypted Checkout</p>
            </div>
            <p className="text-xs text-[var(--foreground)]/40 font-light leading-relaxed">
              Your security is our priority. We use industry-standard encryption to protect your data. 
              Payments are processed securely via Stripe or PayPal.
            </p>
          </div>
        </div>

        <div className="bg-[var(--foreground)]/5 p-8 rounded-sm h-fit space-y-10">
          <h2 className="text-xl font-light tracking-tight uppercase">Order Summary</h2>
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-20 object-cover bg-[var(--foreground)]/5 rounded-sm"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -top-2 -right-2 bg-[var(--foreground)] text-[var(--background)] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-mono">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">{item.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--foreground)]/40">{item.category}</p>
                  </div>
                  <p className="text-xs font-mono opacity-60">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4 border-t border-[var(--foreground)]/10">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest font-medium text-[var(--foreground)]/40">Subtotal</span>
              <span className="text-sm font-mono">${totalPrice}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest font-medium text-[var(--foreground)]/40">Shipping</span>
              <span className="text-xs uppercase tracking-widest font-medium text-[var(--foreground)]/60">Free</span>
            </div>
            <div className="flex justify-between items-baseline pt-4 border-t border-[var(--foreground)]/10">
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Total</span>
              <span className="text-2xl font-mono">${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {isProcessing && (
        <div className="fixed inset-0 bg-[var(--background)]/80 backdrop-blur-md z-[100] flex flex-col items-center justify-center space-y-8">
          <div className="w-16 h-px bg-[var(--foreground)] relative overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-[var(--background)]/50 w-full"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] font-medium">Securing Transaction</p>
        </div>
      )}

    </div>
  );
};
