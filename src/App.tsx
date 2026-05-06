/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CarFront, 
  CloudCog, 
  Megaphone, 
  Key, 
  Plane, 
  TrendingUp
} from 'lucide-react';

const NODES = [
  {
    id: 'e-hailing',
    title: ['E-HAILING', 'RENTAL'],
    icon: CarFront,
    className: 'watercolor-blue',
    cx: 300, cy: 250,
    labelSide: 'left'
  },
  {
    id: 'saas',
    title: ['SaaS', 'PROVIDER'],
    icon: CloudCog,
    className: 'watercolor-blue',
    cx: 900, cy: 250,
    labelSide: 'right'
  },
  {
    id: 'tiktok',
    title: ['TikTok MARKETING', 'AGENCY'],
    icon: Megaphone,
    className: 'watercolor-brown',
    cx: 300, cy: 650,
    labelSide: 'left'
  },
  {
    id: 'daily',
    title: ['DAILY CAR', 'RENTAL'],
    icon: Key,
    className: 'watercolor-yellow',
    cx: 900, cy: 650,
    labelSide: 'right'
  },
  {
    id: 'tourism',
    title: ['TOURISM'],
    icon: Plane,
    className: 'watercolor-yellow',
    cx: 1080, cy: 450,
    labelSide: 'right'
  }
];

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 md:p-12 overflow-hidden selection:bg-eca-brown-900/10">
      {/* Background Decorative Pattern */}
      <div className="fixed inset-0 pointer-events-none circuit-pattern z-0" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 L 60 30 L 100 30" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="30" r="2" fill="currentColor" />
              <path d="M 10 90 L 50 50 L 90 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 text-center mb-6"
      >
        <h1 className="font-sans font-bold text-3xl md:text-4xl tracking-wide text-eca-brown-700 uppercase drop-shadow-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <span>ECA GROUP:</span>
          <span className="font-light">INTEGRATED ECOSYSTEM</span>
        </h1>
        <div className="w-64 h-px bg-eca-brown-500/50 mx-auto mt-2" />
        <div className="w-48 h-px bg-eca-brown-500/30 mx-auto mt-1" />
      </motion.header>

      {/* Main Diagram Area (Desktop) */}
      <main className="relative grow w-full max-w-[1200px] aspect-[4/3] mx-auto z-10 hidden md:block mt-8">
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 1200 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,8 L8,4 z" fill="#8c7668" />
            </marker>
          </defs>

          {/* Connection Paths */}
          <g stroke="#8c7668" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arrow)">
            {/* Top: SaaS -> E-Hailing */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 1.0 }, opacity: { duration: 0.1, delay: 1.0 } }}
              d="M 850,210 Q 600,120 350,210" 
            />
            {/* Left Inner: E-Hailing -> TikTok */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 1.5 }, opacity: { duration: 0.1, delay: 1.5 } }}
              d="M 330,330 L 330,570" 
            />
            {/* Right Inner DOWN: SaaS -> Daily Car */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 1.5 }, opacity: { duration: 0.1, delay: 1.5 } }}
              d="M 910,330 Q 940,450 910,570" 
            />
            {/* Left Outer: TikTok -> E-Hailing */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 2.0 }, opacity: { duration: 0.1, delay: 2.0 } }}
              d="M 260,590 Q 180,450 260,310" 
            />
            {/* Bottom: TikTok -> Daily Car (Fixed direction based on previous step to match logical flow) */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 2.0 }, opacity: { duration: 0.1, delay: 2.0 } }}
              d="M 360,690 Q 600,780 840,690" 
            />
            {/* Right Outer Bottom: Daily Car -> Tourism */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 2.5 }, opacity: { duration: 0.1, delay: 2.5 } }}
              d="M 960,620 Q 1020,580 1050,520" 
            />
            {/* Right Inner UP: Daily Car -> SaaS */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 2.5 }, opacity: { duration: 0.1, delay: 2.5 } }}
              d="M 870,570 Q 810,450 870,330" 
            />
            {/* Right Outer Top: Tourism -> SaaS */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 3.0 }, opacity: { duration: 0.1, delay: 3.0 } }}
              d="M 1050,380 Q 1020,320 960,280" 
            />
          </g>

          {/* Continuous Flow Animations (Dashed Overlays) */}
          <g fill="none" stroke="#6d503e" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 16" opacity="0.4">
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 2.0, duration: 1.5 } }}
              d="M 850,210 Q 600,120 350,210" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 2.5, duration: 1.5 } }}
              d="M 330,330 L 330,570" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 2.5, duration: 1.5 } }}
              d="M 910,330 Q 940,450 910,570" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 3.0, duration: 1.5 } }}
              d="M 260,590 Q 180,450 260,310" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 3.0, duration: 1.5 } }}
              d="M 360,690 Q 600,780 840,690" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 3.5, duration: 1.5 } }}
              d="M 960,620 Q 1020,580 1050,520" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 3.5, duration: 1.5 } }}
              d="M 870,570 Q 810,450 870,330" 
            />
            <motion.path 
              initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} 
              transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 4.0, duration: 1.5 } }}
              d="M 1050,380 Q 1020,320 960,280" 
            />
          </g>

          {/* Path Labels */}
          <g className="font-sans text-[13px] font-medium tracking-widest text-eca-brown-500 uppercase fill-current">
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} x="600" y="165" textAnchor="middle">
              EMPOWER DIGITALIZATION
            </motion.text>
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }} x="600" y="320" textAnchor="middle">
              SYNERGY FLOW
            </motion.text>
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }} x="600" y="750" textAnchor="middle">
              INFRASTRUCTURE & DATA
            </motion.text>
            
            {/* LEADS & TRAFFIC */}
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }} x="350" y="440" textAnchor="start">
              <tspan x="350" dy="0">LEADS &</tspan>
              <tspan x="350" dy="16">TRAFFIC</tspan>
            </motion.text>

            {/* FLEET BOOKINGS */}
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7, duration: 0.8 }} x="820" y="440" textAnchor="end">
              <tspan x="820" dy="0">FLEET</tspan>
              <tspan x="820" dy="16">BOOKINGS</tspan>
            </motion.text>

            {/* INFRASTRUCTURE & DATA (Right) */}
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2, duration: 0.8 }} x="940" y="440" textAnchor="start">
              <tspan x="940" dy="0">INFRASTRUCTURE</tspan>
              <tspan x="940" dy="16">& DATA</tspan>
            </motion.text>
          </g>
        </svg>

        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="watercolor-center w-64 h-64 rounded-full border-2 border-eca-brown-700/50 flex flex-col items-center justify-center p-8 relative drop-shadow-2xl"
          >
            {/* Inner Ring */}
            <div className="absolute inset-3 border border-eca-brown-700/30 rounded-full" />
            <div className="absolute inset-5 border border-eca-brown-700/10 rounded-full" />
            
            <h2 className="font-sans text-5xl font-extrabold text-center leading-tight text-eca-brown-700 tracking-wider">
              ECA<br/><span className="text-4xl text-eca-brown-900">GROUP</span>
            </h2>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-2 text-eca-brown-900/80">Central Core</p>
          </motion.div>
        </div>

        {/* Peripheral Nodes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-40">
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.5, type: "spring" }}
              className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ left: `${(node.cx / 1200) * 100}%`, top: `${(node.cy / 900) * 100}%` }}
            >
              <div className={`${node.className} w-full h-full rounded-full border-[3px] shadow-xl flex items-center justify-center relative group backdrop-blur-sm`}>
                
                {/* Inner decorative ring */}
                <div className="absolute inset-[6px] border border-eca-brown-500/40 rounded-full transition-transform group-hover:scale-95" />

                {/* Icon */}
                <node.icon 
                  size={48} 
                  strokeWidth={1.5}
                  className="text-eca-brown-700/70 group-hover:text-eca-brown-900 transition-colors duration-300" 
                />

                {/* HTML Label overlay */}
                <div 
                  className={`absolute whitespace-nowrap font-sans text-[17px] font-semibold text-eca-brown-700 tracking-wide 
                  ${node.labelSide === 'left' ? 'right-[110%] text-right' : 'left-[110%] text-left'}`}
                >
                  {node.title.map((line, idx) => (
                    <div key={idx} className="leading-snug">{line}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Mobile Stack View */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden w-full max-w-sm flex flex-col gap-6 pb-12 relative z-10"
      >
        <div className="watercolor-center p-8 rounded-full aspect-square border-2 flex flex-col items-center justify-center mx-auto w-64 shadow-xl">
          <h2 className="font-sans text-4xl font-extrabold text-eca-brown-900 text-center">ECA<br/>GROUP</h2>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-2 text-eca-brown-700/80">Central Core</p>
        </div>

        <div className="space-y-4 px-4 w-full">
          {NODES.map((node, i) => (
            <motion.div 
              key={node.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white/40 backdrop-blur-sm p-3 rounded-full border border-eca-brown-500/20 shadow-sm"
            >
              <div className={`${node.className} w-16 h-16 rounded-full border-2 border-eca-brown-500/50 flex items-center justify-center flex-shrink-0`}>
                <node.icon size={24} className="text-eca-brown-700" strokeWidth={1.5} />
              </div>
              <div className="grow pr-4">
                <h3 className="font-bold text-eca-brown-700 text-[15px] leading-tight">
                  {node.title.join(' ')}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
