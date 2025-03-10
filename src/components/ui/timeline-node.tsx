import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineNodeProps {
  date: string;
  index: number;
}

export default function TimelineNode({ date, index }: TimelineNodeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      className='absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center'
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      ref={ref}
    >
      <div className='w-10 h-10 rounded-full bg-red-600 border-4 border-slate-800 z-10 flex items-center justify-center'>
        <motion.div
          className='w-4 h-4 rounded-full bg-white'
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            delay: index * 0.2,
          }}
        />
      </div>
      <motion.div
        className='mt-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      >
        {date}
      </motion.div>
    </motion.div>
  );
}
