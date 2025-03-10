import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TimelineNode from './timeline-node';
import { historicalEvents } from '@/constants/events';
import EventCard from '../events/event-card';

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section className='py-20 bg-slate-900' id='timeline'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-16 text-center text-red-500'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Dòng Thời Gian Lịch Sử
        </motion.h2>

        <div className='relative'>
          {/* Vertical timeline line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-700' />

          {historicalEvents.map((event, index) => (
            <div key={index} className='mb-24 relative'>
              <TimelineNode date={event.date} index={index} />
              <EventCard
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() =>
                  setExpandedEvent(expandedEvent === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
