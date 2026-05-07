import { useMotionValue, useTransform, animate, motion } from 'motion/react';
import { useEffect } from 'react';

export function AnimatedCounter({ from, to }: { from: number, to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut", delay: 0.5 });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}
