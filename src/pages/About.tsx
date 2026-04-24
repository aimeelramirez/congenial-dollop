import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video mb-12 rounded-sm overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=2000" 
            alt="Collective Atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1]"
        >
          Intelligence as <br /> <span className="serif italic">Aesthetic Integrity</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[var(--foreground)]/60 font-light leading-relaxed"
        >
          NEURAL THREADS was founded at the convergence of machine learning and luxury textile engineering. 
          We believe that clothing is not just protection, but a high-bandwidth interface between the self and the world.
        </motion.p>
      </section>

      {/* Philosophy Grid */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 border border-[var(--background)]/20 rounded-full flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-medium">Algorithmic Precision</h3>
            <p className="text-xs text-[var(--background)]/50 leading-relaxed font-light">
              Every pattern is optimized via custom neural architectures to minimize waste and maximize ergonomic response.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 border border-[var(--background)]/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-medium">Cyber-Security</h3>
            <p className="text-xs text-[var(--background)]/50 leading-relaxed font-light">
              Integrated technical layers protect both your physical form and your digital privacy in high-density urban environments.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 border border-[var(--background)]/20 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-medium">Kinetic Energy</h3>
            <p className="text-xs text-[var(--background)]/50 leading-relaxed font-light">
              Our fabrics react to motion, temperature, and atmospheric pressure, evolving with your environment.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 border border-[var(--background)]/20 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-medium">Global Nodes</h3>
            <p className="text-xs text-[var(--background)]/50 leading-relaxed font-light">
              A decentralized supply chain ensuring ethical sourcing and fair-trade standards across all partner laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">The Manifesto</h2>
            <div className="w-20 h-px bg-[var(--foreground)]/20" />
          </div>
          <div className="space-y-12 text-[var(--foreground)]/80 leading-[1.8] font-light">
            <p className="text-lg">
              We live in an era where the boundary between the physical and the virtual is dissolving. 
              Our mission is to create the artifacts of this transition.
            </p>
            <p>
              By combining rare heritage materials—merino wool, vegetable-tanned leathers, and silk—with 
              next-generation technical fibers, we create a dialogue between the past and the future.
            </p>
            <p className="serif italic text-2xl">
              "We architecturalize intelligence."
            </p>
            <p>
              Based in the quiet space between data clusters. Designed for the nomadic intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-20 border-t border-[var(--border)] text-center">
        <button className="text-[10px] uppercase tracking-[0.4em] font-medium border-b border-[var(--foreground)] pb-2 hover:opacity-60 transition-opacity">
          Connect with the Network
        </button>
      </section>
    </div>
  );
};
