import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ImageType } from '@/types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: ImageType;
}

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className='relative max-w-4xl w-full'
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute -top-12 right-0 text-white hover:text-red-400 transition-colors'
              onClick={onClose}
            >
              <X className='w-8 h-8' />
            </button>

            <div className='bg-slate-800 rounded-lg overflow-hidden'>
              <div
                className='w-full aspect-video bg-cover bg-center'
                style={{ backgroundImage: `url('${image.src}')` }}
              />

              <div className='p-4'>
                <h3 className='text-xl font-bold text-white'>
                  {image.caption}
                </h3>
                <p className='text-gray-300 mt-2'>{image.description}</p>
                {image.source && (
                  <p className='text-gray-500 text-sm mt-2'>
                    Nguồn: {image.source}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
