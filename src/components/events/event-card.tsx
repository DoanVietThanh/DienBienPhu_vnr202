import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { HistoricalEvent } from '@/types';
import ImageGallery from './image-gallery';

interface EventCardProps {
  event: HistoricalEvent;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function EventCard({
  event,
  index,
  isExpanded,
  onToggle,
}: EventCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      ref={ref}
    >
      <div
        className={`md:w-1/2 p-6 ${
          isEven ? 'md:pl-12' : 'md:pr-12'
        } flex justify-center`}
      >
        <motion.div
          className='w-full max-w-md bg-slate-800 rounded-lg shadow-lg overflow-hidden'
          whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className='p-6'>
            <h3 className='text-xl font-bold mb-2 text-red-400'>
              {event.title}
            </h3>
            <p className='text-gray-300 mb-4'>{event.description}</p>

            <button
              onClick={onToggle}
              className='flex items-center text-sm text-red-400 hover:text-red-300 transition-colors'
            >
              {isExpanded ? (
                <>
                  <span>Thu gọn</span>
                  <ChevronUp className='ml-1 w-4 h-4' />
                </>
              ) : (
                <>
                  <span>Xem thêm</span>
                  <ChevronDown className='ml-1 w-4 h-4' />
                </>
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <div className='pt-4 border-t border-gray-700 mt-4'>
                    <h4 className='font-medium text-white mb-2'>
                      Chi tiết sự kiện:
                    </h4>
                    <ul className='list-disc pl-5 text-sm text-gray-300 space-y-1'>
                      {event.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>

                    {event.quote && (
                      <blockquote className='border-l-4 border-red-500 pl-4 my-4 italic text-gray-400'>
                        "{event.quote.text}"
                        <footer className='text-sm mt-1 text-gray-500'>
                          — {event.quote.author}
                        </footer>
                      </blockquote>
                    )}

                    {event.statistics && (
                      <div className='grid grid-cols-2 gap-4 mt-4'>
                        {event.statistics.map((stat, i) => (
                          <div key={i} className='bg-slate-700 p-3 rounded-md'>
                            <p className='text-2xl font-bold text-red-400'>
                              {stat.value}
                            </p>
                            <p className='text-xs text-gray-400'>
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className={`md:w-1/2 p-6 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <ImageGallery images={event.images} />
      </div>
    </motion.div>
  );
}
