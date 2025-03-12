import VietnamWeapon1 from '@/assets/images/vn_weapon_1.png';
import VietnamWeapon2 from '@/assets/images/vn_weapon_2.png';
import VietnamWeapon3 from '@/assets/images/vn_weapon_3.png';

import VietnameseAce1 from '@/assets/images/vn_ace_1.png';
import VietnameseAce2 from '@/assets/images/vn_ace_2.png';
import VietnameseAce3 from '@/assets/images/vn_ace_3.png';
import VietnameseFlag from '@/assets/images/vietnamese-flag.jpg';

import { Card } from './card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WarVietnameseAce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className='flex flex-col items-center gap-8 justify-center mt-8'
    >
      <div className='flex flex-col gap-8 w-1/2'>
        <motion.div
          variants={fadeInVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 2 }}
          className='flex justify-center items-center rounded-lg overflow-hidden'
        >
          <img src={VietnameseFlag} alt='VietnameseFlag' className='w-1/4' />
        </motion.div>

        <div className='flex flex-col gap-4 w-full'>
          {[
            'Chiến dịch phòng vệ do Bộ tư lệnh Quân chủng Phòng không Không quân tổ chức, chỉ huy 6 trung đoàn tên lửa, 4 trung đoàn tiêm kích, 16 trung đoàn và 22 tiểu đoàn pháo phòng không, 4 trung đoàn radar, 346 đơn vị pháo, súng máy phòng không của bộ đội địa phương và dân quân tự vệ.',
            'Tên lửa là lực lượng có điều kiện tiêu diệt B-52, song các đơn vị đang phân tán nhiều nhiệm vụ. Bảo vệ Hà Nội lúc này có 9 tiểu đoàn. Ông Nguyễn Văn Phiệt kể, bộ khí tài của Tiểu đoàn 57 đã qua 14.000 giờ mở máy, dính trận lụt một năm trước tưởng được nghỉ ngơi, nhưng phải làm nhiệm vụ.',
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={fadeInVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 2, delay: index * 0.4 }}
              className='text-justify'
            >
              {text}
            </motion.p>
          ))}
        </div>

        {[VietnamWeapon1, VietnamWeapon2, VietnamWeapon3].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`VietnamWeapon${i + 1}`}
            className='w-full'
            variants={fadeInVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 2, delay: 0.4 * i }}
          />
        ))}
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <motion.h1
          className='font-bold text-2xl text-center'
          variants={fadeInVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 2 }}
        >
          Chỉ huy
        </motion.h1>

        <motion.div
          className='shadow-lg'
          variants={fadeInVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 2 }}
        >
          <Card className='grid grid-cols-3 gap-10'>
            {[
              {
                img: VietnameseAce1,
                rank: 'Thượng tướng',
                name: 'Lê Văn Tri',
                desc: 'Tư lệnh Quân chủng Phòng không - Không quân',
              },
              {
                img: VietnameseAce2,
                rank: 'Thiếu tướng',
                name: 'Nguyễn Văn Phiệt',
                desc: 'Trung đoàn trưởng Trung đoàn tên lửa 257',
              },
              {
                img: VietnameseAce3,
                rank: 'Đại tá',
                name: 'Phạm Tuân',
                desc: 'Phi công bắn rơi B-52, Anh hùng LLVTND',
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                className='col-span-1 text-center text-xs space-y-2'
                variants={fadeInVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 2, delay: 0.4 * i }}
              >
                <img
                  src={person.img}
                  alt={`VietnameseAce${i + 1}`}
                  className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
                />
                <p>{person.rank}</p>
                <p className='font-semibold'>{person.name}</p>
                <p>{person.desc}</p>
              </motion.div>
            ))}
          </Card>
        </motion.div>

        <motion.p
          className='italic opacity-90 text-center'
          variants={fadeInVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 2, delay: 0.3 }}
        >
          Nguồn: Tài liệu hội thảo khoa học do Viện Lịch sử quân sự tổ chức
        </motion.p>
      </div>
    </div>
  );
};

export default WarVietnameseAce;
