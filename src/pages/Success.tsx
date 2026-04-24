import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight, MessageSquare, Star } from 'lucide-react';

export const Success: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'your email';
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, save to feedback collection
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center space-y-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <div className="w-20 h-20 bg-[var(--foreground)] text-[var(--background)] rounded-full flex items-center justify-center mx-auto mb-10">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">Thank you for <br /> <span className="serif italic">your patronage</span></h1>
        <p className="text-[var(--foreground)]/60 font-light text-lg max-w-xl mx-auto">
          Your order has been confirmed. A receipt and shipping details have been sent to <span className="text-[var(--foreground)] font-medium">{email}</span>.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10 border-t border-[var(--border)]">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40">
          <Mail className="w-5 h-5" />
          <span>Confirmation Sent</span>
        </div>
        <div className="w-2 h-2 bg-[var(--foreground)]/10 rounded-full hidden md:block" />
        <Link to="/" className="text-xs uppercase tracking-widest font-medium border-b border-[var(--foreground)] pb-1 hover:text-[var(--foreground)]/60 transition-colors">
          Return to Collections
        </Link>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[var(--foreground)]/5 p-10 rounded-sm text-left max-w-2xl mx-auto"
      >
        {!submitted ? (
          <form onSubmit={handleSubmitFeedback} className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-[var(--foreground)]/40" />
              <h2 className="text-sm uppercase tracking-widest font-medium">Your Thoughts</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-xs text-[var(--foreground)]/60 font-light">How was your experience today?</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button 
                    key={s} 
                    type="button"
                    onClick={() => setRating(s)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star className={`w-6 h-6 ${s <= rating ? 'fill-[var(--foreground)] text-[var(--foreground)]' : 'text-[var(--foreground)]/20'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-medium text-[var(--foreground)]/40 block">Comments</label>
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your feedback with us..."
                className="w-full bg-transparent border border-[var(--border)] p-4 min-h-[120px] focus:border-[var(--foreground)] transition-colors outline-none font-light text-sm resize-none rounded-sm"
              />
            </div>

            <button 
              type="submit"
              className="bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all flex items-center gap-4"
            >
              Submit Feedback
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10 text-center space-y-4"
          >
            <h3 className="text-xl font-serif italic">Gratefully received</h3>
            <p className="text-xs text-[var(--foreground)]/40 font-light tracking-wide uppercase">Your feedback helps us refine the experience.</p>
          </motion.div>
        )}
      </motion.section>

    </div>
  );
};
