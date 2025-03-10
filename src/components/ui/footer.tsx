'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-slate-950 text-gray-400 py-12'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='flex flex-col md:flex-row justify-between items-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-bold text-white mb-2'>
              Điện Biên Phủ Trên Không
            </h3>
            <p className='max-w-md'>
              Trang web lịch sử về chiến dịch 12 ngày đêm bảo vệ bầu trời Hà Nội
              tháng 12/1972.
            </p>
          </div>

          <div className='flex flex-col items-center md:items-end'>
            <div className='flex space-x-4 mb-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-red-400 transition-colors'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-red-400 transition-colors'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>

            <motion.p
              className='flex items-center text-sm'
              whileHover={{ scale: 1.05 }}
            >
              Được tạo với <Heart className='w-4 h-4 mx-1 text-red-500' /> và
              Framer Motion
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className='border-t border-gray-800 mt-8 pt-8 text-center text-sm'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} - Trang web lịch sử giáo dục</p>
        </motion.div>
      </div>
    </footer>
  );
}
