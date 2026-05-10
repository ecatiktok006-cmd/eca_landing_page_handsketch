import React from 'react';
import { motion } from 'motion/react';

interface Props {
  node: {
    id: string;
    title: string[];
    icon: string | React.ElementType;
    className: string;
  };
}

export function DefaultDetailView({ node }: Props) {
  return (
    <>
      <motion.div 
        initial={{ scale: 0.8, rotate: -5 }} 
        animate={{ scale: 1, rotate: 0 }} 
        transition={{ type: "spring", delay: 0.1 }}
        className={`${node.className} w-48 h-48 md:w-64 md:h-64 rounded-full border-4 shadow-2xl flex items-center justify-center p-8 mb-8 relative`}
      >
        <div className="absolute inset-[6px] border border-eca-brown-500/40 rounded-full" />
        {typeof node.icon === 'string' ? (
          <img src={node.icon} alt={node.title.join(' ')} className="w-full h-full object-contain relative z-20 drop-shadow-xl" />
        ) : (
          (() => {
            const Icon = node.icon as any;
            return <Icon size={96} strokeWidth={1.5} className="text-eca-brown-900/80 relative z-20" />;
          })()
        )}
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sketch text-5xl md:text-7xl font-bold text-eca-brown-900 text-center mb-6 leading-tight max-w-2xl px-4"
      >
        {node.title.join(' ')}
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-center space-y-6 px-4"
      >
        <p className="text-xl md:text-2xl font-sans text-eca-brown-700 leading-relaxed font-medium">
          {node.id === 'saas' && "Empowering businesses through cutting-edge SaaS platforms, streamlining operations, and scaling growth potential."}
          {node.id === 'tiktok' && "Driving massive engagement and brand awareness through viral TikTok marketing strategies, content creation, and influencer partnerships."}
          {node.id === 'daily' && "Providing accessible and dynamic daily car rental services across multiple cities to enhance travel flexibility."}
          {node.id === 'tourism' && "Connecting ecosystems to promote vibrant tourism experiences and seamless exploration for travelers worldwide."}
        </p>

        <button type="button" className="mt-8 px-8 py-3 rounded-full bg-eca-brown-900 text-white font-sans font-bold tracking-widest text-sm uppercase hover:bg-eca-brown-700 transition-colors shadow-lg hover:shadow-xl active:scale-95">
          Learn More
        </button>
      </motion.div>
    </>
  );
}
