/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EHailingView } from './views/EHailingView';
import { SaaSView } from './views/SaaSView';
import { TourismView } from './views/TourismView';
import { TikTokView } from './views/TikTokView';
import { DefaultDetailView } from './views/DefaultDetailView';
import { ArrowLeft, Activity, Box, Leaf } from 'lucide-react';

const NODES = [
  {
    id: 'e-hailing',
    title: ['E-HAILING', 'RENTAL'],
    icon: '/ehailing.png',
    className: 'watercolor-blue',
    cx: 300, cy: 250,
    labelSide: 'left'
  },
  {
    id: 'saas',
    title: ['SaaS', 'PROVIDER'],
    icon: '/Saasprovider.png',
    className: 'watercolor-blue',
    cx: 900, cy: 250,
    labelSide: 'right'
  },
  {
    id: 'tiktok',
    title: ['TikTok MARKETING', 'AGENCY'],
    icon: '/tiktokmarketing.png',
    className: 'watercolor-brown',
    cx: 300, cy: 650,
    labelSide: 'left'
  },
  {
    id: 'daily',
    title: ['DAILY CAR', 'RENTAL'],
    icon: '/dailyrental.png',
    className: 'watercolor-yellow',
    cx: 900, cy: 650,
    labelSide: 'right'
  },
  {
    id: 'tourism',
    title: ['TOURISM'],
    icon: '/tourism.png',
    className: 'watercolor-yellow',
    cx: 1080, cy: 450,
    labelSide: 'right'
  }
];

export default function App() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const selectedNode = selectedNodeId ? NODES.find(n => n.id === selectedNodeId) : null;

  return (
    <div className={`relative flex flex-col items-center w-full selection:bg-eca-brown-900/10 ${!selectedNode ? 'min-h-[100dvh] md:h-screen overflow-y-auto md:overflow-hidden p-4 md:px-8 md:py-4' : 'min-h-screen overflow-x-hidden p-4 md:p-12'}`}>
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

      <AnimatePresence mode="wait">
        {!selectedNode ? (
          <motion.div
            key="ecosystem"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full flex-grow flex flex-col items-center min-h-0"
          >
            {/* Main Diagram Area (Desktop) */}
            <main 
              className="relative aspect-[4/3] mx-auto z-10 hidden md:block my-auto"
              style={{ width: '100%', maxWidth: 'min(1200px, calc((100vh - 5rem) * 4 / 3))' }}
            >
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
            {/* Center -> E-Hailing */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.1, delay: 0.5 } }}
              d="M 480,370 Q 420,320 380,290" 
            />
            {/* Center -> SaaS */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.1, delay: 0.5 } }}
              d="M 720,370 Q 780,320 820,290" 
            />
            {/* Center -> TikTok */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.1, delay: 0.5 } }}
              d="M 480,530 Q 420,580 380,610" 
            />
            {/* Center -> Daily Car */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.1, delay: 0.5 } }}
              d="M 720,530 Q 780,580 820,610" 
            />
            {/* Center -> Tourism */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ pathLength: { duration: 1, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.1, delay: 0.5 } }}
              d="M 760,450 L 980,450" 
            />
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
            {/* Center Flow Actions */}
            <motion.path initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 1.5, duration: 1.5 } }} d="M 480,370 Q 420,320 380,290" />
            <motion.path initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 1.5, duration: 1.5 } }} d="M 720,370 Q 780,320 820,290" />
            <motion.path initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 1.5, duration: 1.5 } }} d="M 480,530 Q 420,580 380,610" />
            <motion.path initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 1.5, duration: 1.5 } }} d="M 720,530 Q 780,580 820,610" />
            <motion.path initial={{ opacity: 0 }} animate={{ strokeDashoffset: [0, -36], opacity: 1 }} transition={{ strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" }, opacity: { delay: 1.5, duration: 1.5 } }} d="M 760,450 L 980,450" />
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
          <g className="font-sketch text-[16px] font-bold tracking-widest text-eca-brown-700 uppercase fill-current">
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} x="600" y="145" textAnchor="middle">
              EMPOWER DIGITALIZATION
            </motion.text>
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }} x="600" y="320" textAnchor="middle">
              SYNERGY FLOW
            </motion.text>
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }} x="600" y="770" textAnchor="middle">
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
            
            <h2 className="font-sketch text-5xl font-bold text-center leading-tight text-eca-brown-700 tracking-wider">
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
              className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 pointer-events-auto hover:z-50"
              style={{ left: `${(node.cx / 1200) * 100}%`, top: `${(node.cy / 900) * 100}%` }}
            >
              <div className={`${node.className} w-full h-full rounded-full border-[3px] shadow-xl flex items-center justify-center relative group backdrop-blur-sm`}>
                
                {/* Inner decorative ring */}
                <div className="absolute inset-[6px] border border-eca-brown-500/40 rounded-full transition-transform group-hover:scale-95" />

                <button
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  className="w-full h-full rounded-full flex items-center justify-center relative cursor-pointer"
                >
                  {/* Icon */}
                  {typeof node.icon === 'string' ? (
                    <img 
                      src={node.icon} 
                      alt={node.title.join(' ')} 
                      className="w-24 h-24 object-contain opacity-90 relative z-20 group-hover:opacity-100 group-hover:scale-[1.85] group-hover:drop-shadow-xl transition-all duration-500 ease-out" 
                    />
                  ) : (
                    (() => {
                      const Icon = node.icon as any;
                      return <Icon 
                        size={48} 
                        strokeWidth={1.5}
                        className="text-eca-brown-700/70 group-hover:text-eca-brown-900 transition-colors duration-300" 
                      />;
                    })()
                  )}
                </button>

                {/* HTML Label overlay */}
                <div 
                  className={`absolute whitespace-nowrap font-sketch text-2xl font-bold text-eca-brown-900 tracking-wider drop-shadow-sm
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
        className="md:hidden w-full max-w-sm flex flex-col gap-6 pb-12 relative z-10 my-auto pt-6"
      >
        <div className="watercolor-center p-8 rounded-full aspect-square border-2 flex flex-col items-center justify-center mx-auto w-64 shadow-xl">
          <h2 className="font-sketch text-6xl font-bold text-eca-brown-900 text-center leading-tight">ECA<br/>GROUP</h2>
          <p className="text-sm font-sans tracking-[0.2em] uppercase mt-2 text-eca-brown-700/80">Central Core</p>
        </div>

        <div className="space-y-4 px-4 w-full">
          {NODES.map((node, i) => (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className="w-full text-left flex items-center gap-4 bg-white/40 backdrop-blur-sm p-3 rounded-full border border-eca-brown-500/20 shadow-sm transition-transform active:scale-95"
            >
              <div className={`${node.className} w-16 h-16 rounded-full border-2 border-eca-brown-500/50 flex items-center justify-center flex-shrink-0 overflow-hidden`}>
                {typeof node.icon === 'string' ? (
                  <img src={node.icon} alt={node.title.join(' ')} className="w-10 h-10 object-contain opacity-90" />
                ) : (
                  (() => {
                    const Icon = node.icon as any;
                    return <Icon size={24} className="text-eca-brown-700" strokeWidth={1.5} />;
                  })()
                )}
              </div>
              <div className="grow pr-4">
                <h3 className="font-sketch font-bold text-eca-brown-900 text-[22px] leading-tight">
                  {node.title.join(' ')}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="detail"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className={`w-full ${['e-hailing', 'tourism', 'saas', 'tiktok'].includes(selectedNode.id) ? 'max-w-6xl' : 'max-w-4xl'} mx-auto flex-grow flex flex-col items-center justify-center relative z-20 py-12 px-4`}
        >
          <button
            onClick={() => setSelectedNodeId(null)}
            className="absolute top-0 left-4 md:left-0 flex items-center gap-2 text-eca-brown-700 hover:text-eca-brown-900 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-eca-brown-500/20 shadow-sm hover:scale-105 active:scale-95 z-50"
          >
            <ArrowLeft size={18} />
            <span className="font-sans font-medium uppercase tracking-widest text-xs pt-1">Back to Ecosystem</span>
          </button>

          {selectedNode.id === 'e-hailing' ? (
            <EHailingView icon={selectedNode.icon} />
          ) : selectedNode.id === 'saas' ? (
            <SaaSView />
          ) : selectedNode.id === 'tourism' ? (
            <TourismView />
          ) : selectedNode.id === 'tiktok' ? (
            <TikTokView />
          ) : (
            <DefaultDetailView node={selectedNode} />
          )}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
