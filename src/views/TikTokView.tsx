import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

export function TikTokView() {
  return (
    <div className="w-full flex justify-center mt-12 md:mt-4 text-left">
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#004d3e] font-sans mb-4">
            Dynamic Marketing: Deploying our internal success for your business
          </div>
          
          <h2 className="font-sans text-5xl md:text-6xl font-bold text-[#004d3e] leading-[1.1] tracking-tight mb-8">
            The Growth<br/>Engine
          </h2>
          
          <p className="text-gray-600 font-sans text-lg md:text-xl leading-[1.8] font-medium mb-12 max-w-xl">
            We don't just build systems; we build brands. Our marketing vertical specializes in narrative-driven growth for mobility and industrial sectors. We treat your marketing budget with architectural precision, allowing you to bypass the cost of an in-house team while accessing elite strategists. For ambitious brands ready to transition from volume-based spending to value-driven results, our precision-engineered strategies offer a clear, collaborative pathway to measurable growth.
          </p>

          <div className="flex gap-16 mb-12">
            <div>
              <div className="text-3xl font-bold text-[#f7b926] font-sans">
                <AnimatedCounter from={0} to={2.4} />M
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">Audience Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f7b926] font-sans">
                <AnimatedCounter from={0} to={158} />%
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">YoY Growth</div>
            </div>
          </div>

          <div>
            <button className="bg-white text-[#004d3e] hover:bg-gray-50 transition-colors px-6 py-3 rounded border border-gray-200 shadow-sm font-bold text-sm tracking-wide">
              Partner with us
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image/Graphics */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="w-full aspect-[4/3] bg-[#426a57] rounded-[2rem] overflow-hidden relative shadow-2xl p-6 md:p-12 flex items-center justify-center">
            {/* Placeholder for the graphic */}
            <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"></div>
            <img src="https://images.unsplash.com/photo-1620309995540-bbcf9b22cbac?auto=format&fit=crop&q=80&w=1200" alt="Social Media Marketing" className="relative z-10 w-full h-[120%] object-cover object-top rounded-xl shadow-2xl scale-105" />
            
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
