import { motion } from 'motion/react';
import { Bot, Database, Cloud, Handshake } from 'lucide-react';

export function SaaSView() {
  return (
    <div className="w-full flex flex-col items-center text-left mt-16 md:mt-8 gap-24 pb-20">
      {/* Custom SaaS Section */}
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-5/12 flex flex-col"
        >
          <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-sans mb-4">We build the software that runs your business</div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-5xl font-bold text-[#004d3e] leading-[1.1] tracking-tight mb-8">
            Custom SaaS &<br/> Digital<br/> Transformation
          </h2>
          <div className="space-y-6 text-gray-600 font-sans text-lg md:text-xl leading-relaxed font-medium">
            <p>
              As the core architect behind ECA Group's rapid expansion, we understand that off-the-shelf software rarely fits a growing business. We are not just a mobility company; we are a SaaS (Software as a Service) Provider.
            </p>
            <p>
              We design and build customized web applications and AI-driven automated workflows tailored to the exact logistical and operational needs of our B2B partners. Whether you need to streamline your inventory, automate your customer service, or build a bespoke booking ecosystem, we translate your operational bottlenecks into elegant, high-efficiency software solutions.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-blue-100 p-8 rounded-[2rem] flex flex-col justify-center border border-[#004d3e]/5 hover:shadow-lg transition-shadow">
            <div className="text-[#004d3e] mb-6">
              <Bot size={32} strokeWidth={2} />
            </div>
            <h4 className="font-bold text-[#004d3e] text-xl font-sans mb-3 tracking-tight">AI-Driven Workflows</h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">Automate your customer service and replace manual operational bottlenecks with high-efficiency, intelligent automation.</p>
          </div>
          
          <div className="bg-emerald-100 p-8 rounded-[2rem] flex flex-col justify-center border border-[#004d3e]/5 hover:shadow-lg transition-shadow">
            <div className="text-[#004d3e] mb-6">
              <Database size={32} strokeWidth={2} />
            </div>
            <h4 className="font-bold text-[#004d3e] text-xl font-sans mb-3 tracking-tight">Inventory Optimization</h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">Streamline your physical and digital inventory management through custom-built, real-time tracking web applications.</p>
          </div>

          <div className="bg-amber-100 p-8 rounded-[2rem] flex flex-col justify-center border border-[#004d3e]/5 hover:shadow-lg transition-shadow">
            <div className="text-[#004d3e] mb-6">
              <Cloud size={32} strokeWidth={2} />
            </div>
            <h4 className="font-bold text-[#004d3e] text-xl font-sans mb-3 tracking-tight">Bespoke Booking Ecosystems</h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">Architect customized, end-to-end booking platforms tailored specifically to the unique logistical demands of your business.</p>
          </div>

          <div className="bg-purple-100 p-8 rounded-[2rem] flex flex-col justify-center border border-[#004d3e]/5 hover:shadow-lg transition-shadow">
            <div className="text-[#004d3e] mb-6">
              <Handshake size={32} strokeWidth={2} />
            </div>
            <h4 className="font-bold text-[#004d3e] text-xl font-sans mb-3 tracking-tight">B2B Digital Synergy</h4>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">Seamlessly integrate your operational workflows with our proprietary software to scale your enterprise alongside ours.</p>
          </div>
        </motion.div>
      </div>

      {/* Daily Rentals & Fleet Management */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full flex flex-col items-center pt-16 border-t border-eca-brown-500/10"
      >
        <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-sans mb-4 text-center">Where physical assets meet digital oversight</div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#004d3e] leading-[1.1] tracking-tight mb-8 text-center max-w-4xl">
          Daily Rentals & Intelligent Fleet<br className="hidden md:block" /> Management
        </h2>
        <div className="text-gray-600 font-sans text-lg md:text-xl leading-relaxed font-medium text-center max-w-4xl mb-16 px-4">
          <p>
            At ECA Group, our daily, weekly, and monthly car rental services for private clients are driven by uncompromising quality and safety. However, the secret to our scale lies in our Built-In Fleet Management Architecture. Our proprietary SaaS platform provides real-time telemetry, predictive maintenance, and optimized routing for global fleet operators. This level of operational control minimizes downtime, maximizes asset lifespan, and provides absolute transparency. It is exactly this standard of uncompromising operational clarity that naturally draws investors, stakeholders, and industry peers into our ecosystem.
          </p>
        </div>

        {/* Dashboard Image & Tabs Interface */}
        <div className="w-full bg-[#fbfdfc] rounded-[2.5rem] border border-[#004d3e]/10 p-4 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Left Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <div className="bg-white p-6 rounded-2xl border-l-[3px] border-[#004d3e] shadow-lg relative">
              <h4 className="font-bold text-[#004d3e] text-lg font-sans mb-2 tracking-tight">Live Telemetry</h4>
              <p className="text-gray-600 text-base leading-relaxed font-medium">Real-time tracking of vehicle health and location across continents.</p>
            </div>
            
            <div className="p-6 rounded-2xl hover:bg-white/60 transition-colors border-l-[3px] border-transparent cursor-pointer">
              <h4 className="font-bold text-gray-500 text-lg font-sans mb-2 tracking-tight">Asset Lifecycle</h4>
              <p className="text-gray-400 text-base leading-relaxed font-medium">Predictive modeling for depreciation and part replacement cycles.</p>
            </div>

            <div className="p-6 rounded-2xl hover:bg-white/60 transition-colors border-l-[3px] border-transparent cursor-pointer">
              <h4 className="font-bold text-gray-500 text-lg font-sans mb-2 tracking-tight">Eco-Analytics</h4>
              <p className="text-gray-400 text-base leading-relaxed font-medium">Measuring carbon offsets and efficiency gains across the fleet.</p>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="w-full lg:w-2/3">
            <div className="w-full bg-[#1c2c36] rounded-3xl p-4 md:p-6 shadow-2xl relative overflow-hidden flex flex-col border border-white/20">
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <video
                className="w-full h-auto rounded-xl mt-4 shadow-lg border border-white/5"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/fleet_system.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
