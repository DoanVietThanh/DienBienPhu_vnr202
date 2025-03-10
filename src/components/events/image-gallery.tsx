import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ImageType } from '@/types';
import ImageModal from './image-modal';

interface ImageGalleryProps {
  images: ImageType[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='relative'>
      <div className='relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[4/3]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='absolute inset-0'
            style={{
              backgroundImage: `url('${images[currentIndex].src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4'>
          <motion.h4
            className='text-white font-medium'
            key={`title-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {images[currentIndex].caption}
          </motion.h4>

          <motion.p
            className='text-gray-300 text-sm'
            key={`desc-${currentIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {images[currentIndex].description}
          </motion.p>
        </div>

        <button
          className='absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors'
          onClick={() => setModalOpen(true)}
        >
          <ZoomIn className='w-5 h-5' />
        </button>
      </div>

      <div className='flex justify-between mt-4'>
        <button
          className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors'
          onClick={prevImage}
        >
          <ChevronLeft className='w-5 h-5' />
        </button>

        <div className='flex space-x-1'>
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentIndex ? 'bg-red-500' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

        <button
          className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors'
          onClick={nextImage}
        >
          <ChevronRight className='w-5 h-5' />
        </button>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={images[currentIndex]}
      />
    </div>
  );
}
