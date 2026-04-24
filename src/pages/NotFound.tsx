import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4"
      >
        <div className="w-20 h-20 bg-[var(--foreground)]/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <Compass className="w-10 h-10 text-[var(--foreground)]/20" />
        </div>
        <h1 className="text-[120px] font-serif italic leading-none text-[var(--foreground)]/5 select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">404</h1>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">Coordinates <br /> <span className="serif italic">Lost</span></h2>
        <p className="text-[var(--foreground)]/60 font-light text-lg max-w-md mx-auto">
          The transmission has been interrupted. This sector of the neural network does not exist.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-4 bg-[var(--foreground)] text-[var(--background)] px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-all group"
        >
          Return to Hub
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};
