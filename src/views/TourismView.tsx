import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

export function TourismView() {
  return (
    <div className="w-full flex flex-col justify-center text-left mt-12 md:mt-4">
      <div className="w-full flex flex-col gap-6">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-sans mb-3">Expanding Horizons</div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-[#004d3e] leading-[1.1] tracking-tight">
            Tourism Ventures
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-[2rem] overflow-hidden relative group min-h-[200px] md:min-h-[240px]"
          >
            <div className="absolute inset-0 bg-[#004d3e]/50 mix-blend-multiply z-10 transition-opacity group-hover:opacity-70"></div>
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200" alt="Resort" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-white text-3xl font-bold font-sans mb-3 tracking-tight">Flexible Tourist Packages</h3>
              <p className="text-white/90 text-sm md:text-base font-medium max-w-md leading-relaxed">Seamless, budget-friendly transport solutions tailored for domestic and international travelers.</p>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 rounded-[2rem] overflow-hidden relative group min-h-[200px] md:min-h-[240px]"
          >
            <div className="absolute inset-0 bg-[#004d3e]/60 mix-blend-multiply z-10 transition-opacity group-hover:opacity-70"></div>
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800" alt="Corporate" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <h3 className="text-white text-2xl font-bold font-sans mb-2 tracking-tight">Corporate Mobility</h3>
              <p className="text-white/90 text-[13px] md:text-sm font-medium leading-relaxed">Providing a scalable, reliable logistical backbone for corporate delegations and events.</p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 rounded-[2rem] overflow-hidden relative group min-h-[300px] md:min-h-[360px]"
          >
            <div className="absolute inset-0 bg-[#004d3e]/30 mix-blend-multiply z-10 transition-opacity group-hover:opacity-50"></div>
            <img src="https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&q=80&w=800" alt="Ocean" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-[#004d3e]/90 via-black/40 to-transparent">
              <h3 className="text-white text-2xl font-bold font-sans mb-3 tracking-tight">Digital Infrastructure</h3>
              <p className="text-white/90 text-sm font-medium leading-relaxed">Ensuring frictionless experiences powered by proprietary tech, from booking to final destination.</p>
            </div>
          </motion.div>

          {/* Block 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 rounded-[2rem] bg-[#0c5945] p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[360px] shadow-xl border border-white/5"
          >
            <div>
              <h3 className="text-white text-3xl font-bold font-sans mb-5 tracking-tight">MOTAC-Certified Experiences</h3>
              <p className="text-[#a1c4bc] text-[15px] md:text-base leading-[1.7] font-medium max-w-2xl font-sans">
                Backed by our official licensing from the Ministry of Tourism, Arts and Culture Malaysia (MOTAC), ECA Group applies our logistical mastery to the travel sector. We provide seamless, budget-friendly, and highly flexible transport packages for domestic and international tourists, as well as corporate delegations.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 mt-8 md:mt-0">
              <div>
                <div className="text-3xl font-bold text-[#1ea87a] font-sans">
                  {<AnimatedCounter from={0} to={24} />} hours
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#72a396] font-bold mt-1.5">Logistical Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1ea87a] font-sans">
                  {<AnimatedCounter from={0} to={100} />}%
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#72a396] font-bold mt-1.5">Tech-Enabled Bookings</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
