import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import B52_1 from '@/assets/images/B52_1.png';
import B52_2 from '@/assets/images/B52_2.png';
import B52_3 from '@/assets/images/B52_3.png';
import B52_4 from '@/assets/images/B52_4.png';
import AmericanAce1 from '@/assets/images/american_ace_1.png';
import AmericanAce2 from '@/assets/images/american_ace_2.png';
import AmericanAce3 from '@/assets/images/american_ace_3.png';
import AmericaFlag from '@/assets/images/america_flag.png';
import { Card } from './card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const WarAmericanAce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className='flex flex-col items-center gap-8 justify-center mt-8'
      ref={ref}
    >
      <div className='flex flex-col gap-4 w-1/2'>
        <motion.h1
          className='font-bold text-2xl text-center'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          NHỮNG ÁT CHỦ BÀI
        </motion.h1>
        {[
          'Lầu Năm Góc huy động gần một nửa số B-52 (193/400 chiếc), cất cánh 663 lần; hơn 1/3 số máy bay chiến thuật (khoảng 1.200), cất cánh gần 4.000 lần, 6 trên tổng số 24 tàu sân bay, 66 tàu chiến của Hạm đội 7 ở vịnh Bắc Bộ. Đây là cuộc tập kích đường không lớn nhất trong lịch sử chiến tranh.',
          'B-52 ném bom theo đội hình, mỗi tốp 3 chiếc, mỗi đợt ít nhất 6 chiếc và nhiều nhất 75 chiếc, theo tài liệu chỉ huy tác chiến phía Việt Nam năm 1972. Hộ tống dàn B-52 là hàng chục chiến đấu cơ làm nhiệm vụ săn lùng MiG-21, thả dải nhiễu và chế áp trận địa tên lửa... Các trận tập kích dùng B-52 ném bom ban đêm, máy bay chiến thuật đánh bồi dai dẳng ban ngày, máy phát nhiễu điện tử hiện đại hỗ trợ.',
        ].map((text, i) => (
          <motion.p
            key={i}
            className='text-justify'
            variants={fadeIn}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            custom={i + 2}
          >
            {text}
          </motion.p>
        ))}
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <motion.div
          className='flex justify-center items-center rounded-lg overflow-hidden'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={3}
        >
          <motion.img
            src={AmericaFlag}
            alt='America Flag'
            className='w-1/4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h1
          className='font-bold text-2xl text-center'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={4}
        >
          Máy bay ném bom chiến lược B-52
        </motion.h1>

        {[B52_1, B52_2, B52_3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`B52_${i + 1}`}
            className='w-full'
            variants={fadeIn}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            custom={i + 5}
          />
        ))}
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <motion.h1
          className='font-bold text-2xl text-center'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={8}
        >
          Đội hình bay
        </motion.h1>

        <motion.img
          src={B52_4}
          alt='B52_4'
          className='w-full'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={9}
        />
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <motion.h1
          className='font-bold text-2xl text-center'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={10}
        >
          Chỉ huy
        </motion.h1>

        <Card className='grid grid-cols-3 gap-10 shadow-lg'>
          {[AmericanAce1, AmericanAce2, AmericanAce3].map((img, i) => {
            const info = [
              {
                rank: 'Đại tướng',
                name: 'John W. Vogt',
                role: 'Tập đoàn không quân số 7',
              },
              {
                rank: 'Đại tướng',
                name: 'John C. Meyer',
                role: 'Không quân chiến lược Mỹ (SAC)',
              },
              {
                rank: 'Phó đô đốc',
                name: 'Damon W. Cooper',
                role: 'Nhóm tác chiến số 77',
              },
            ][i];

            return (
              <motion.div
                key={i}
                className='col-span-1 text-center text-xs space-y-2'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                variants={fadeIn}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                custom={11 + i}
              >
                <motion.img
                  src={img}
                  alt={`Ace_${i + 1}`}
                  className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
                />
                <p>{info.rank}</p>
                <p className='font-semibold'>{info.name}</p>
                <p>{info.role}</p>
              </motion.div>
            );
          })}
        </Card>

        <motion.p
          className='italic opacity-90 text-center'
          variants={fadeIn}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          custom={15}
        >
          Nguồn: To Hanoi and Back: The U.S. Air Force and North Vietnam,
          1966–1973
        </motion.p>
      </div>
    </div>
  );
};

export default WarAmericanAce;
