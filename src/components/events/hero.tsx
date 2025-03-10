import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className='h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 z-0'
      >
        <div
          className='absolute inset-0 bg-black/70 z-10'
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      <div className='container mx-auto px-4 z-10 text-center'>
        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-red-500'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Điện Biên Phủ Trên Không
        </motion.h1>

        <motion.h2
          className='text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Chiến dịch 12 ngày đêm - Tháng 12/1972
        </motion.h2>

        <motion.p
          className='max-w-2xl mx-auto text-lg text-gray-400'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Cuộc chiến lịch sử bảo vệ bầu trời Hà Nội chống lại chiến dịch ném bom
          B-52 của Mỹ, đánh dấu bước ngoặt quan trọng trong cuộc kháng chiến
          chống Mỹ.
        </motion.p>
      </div>

      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown className='w-10 h-10 text-white/70' />
      </motion.div>
    </section>
  );
}
