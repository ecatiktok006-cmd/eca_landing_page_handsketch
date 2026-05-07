import React from 'react';
import { motion } from 'motion/react';
import { Key, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

interface Props {
  icon: string | React.ElementType;
}

export function EHailingView({ icon }: Props) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-center mt-12 text-left">
      {/* Left side: Image placeholder & Stat Box */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="w-full aspect-[4/5] bg-eca-brown-900/10 rounded-3xl overflow-hidden border-2 border-white/50 relative shadow-2xl flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-tr from-eca-brown-900/20 to-transparent mix-blend-overlay"></div>
          {/* Real Image Placeholder - using icon since user didn't provide a photo */}
          {typeof icon === 'string' ? (
            <img src={icon} alt="E-Hailing" className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-50 group-hover:scale-110 transition-transform duration-700 blur-[2px]" />
          ) : (
             (() => {
                const Icon = icon as any;
                return <Icon size={120} strokeWidth={1} className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-50 group-hover:scale-110 transition-transform duration-700 blur-[2px]" />;
             })()
          )}
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full font-sans font-bold text-sm tracking-widest text-eca-brown-900 shadow-xl uppercase border border-white/40">Vehicle Handover</span>
          </div>
        </div>
        
        {/* Stat Box */}
        <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-eca-brown-500/10 z-10 min-w-[180px]">
          <div className="text-5xl md:text-6xl font-extrabold text-[#004d3e] font-sans tracking-tighter shadow-sm mb-1">
            <AnimatedCounter from={0} to={150} />+
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Active Partners</div>
        </div>
      </motion.div>

      {/* Right side: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-sans">
          Smart E-Hailing Solutions & The SewaBeli Initiative
        </div>
        
        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#004d3e] leading-[1.1] tracking-tight">
          SewaBeli: Ownership<br className="hidden md:block"/> Redefined
        </h2>
        
        <p className="text-gray-600 leading-relaxed font-sans text-base md:text-lg mb-8 font-medium max-w-xl">
          We view our drivers not as renters, but as operational partners. While traditional models focus purely on vehicle leasing, our true differentiator in the gig economy is the SewaBeli (Rent-to-Own) Initiative. We have engineered a sustainable, shared-economy ecosystem designed to bridge the gap between labor and capital, creating long-term value for everyone involved.
        </p>
        
        <div className="space-y-6 pt-4 border-t border-eca-brown-500/10">
          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#c2f2ce] flex items-center justify-center flex-shrink-0 text-[#004d3e] shadow-sm border border-[#aae8bb]">
              <Key size={26} strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-bold text-[#004d3e] text-lg font-sans">Pathway to Ownership</h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-1 font-medium">sustainable framework that transforms everyday drivers into vehicle owners by the end of their contract.</p>
            </div>
          </div>
          
          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-xl bg-[#c2f2ce] flex items-center justify-center flex-shrink-0 text-[#004d3e] shadow-sm border border-[#aae8bb]">
              <TrendingUp size={26} strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-bold text-[#004d3e] text-lg font-sans">Mutual Financial Success</h4>
              <p className="text-gray-600 text-sm leading-relaxed mt-1 font-medium">Prioritizing partner success to ensure unprecedented fleet loyalty, operational stability, and a highly scalable model.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
