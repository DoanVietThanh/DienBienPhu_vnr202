import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Quote1 from '@/assets/images/quote_1.png';
import Quote2 from '@/assets/images/quote_2.png';
import Quote3 from '@/assets/images/quote_3.png';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WarQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className='flex flex-col items-center gap-8 justify-center mt-8'
      ref={ref}
    >
      <div className='flex flex-col gap-8 w-1/2'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInVariants}
          transition={{ duration: 0.8 }}
          className='flex justify-center mt-8'
        >
          <iframe
            height='400'
            src='https://www.youtube.com/embed/d52fM8FXY_U?si=NIFnr0_d4VWUC-PB'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className='rounded-xl shadow-xl w-full'
          ></iframe>
        </motion.div>
        <motion.div
          className='flex flex-col gap-12 w-full'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          variants={fadeInVariants}
        >
          <motion.h1
            className='font-bold text-2xl text-center'
            variants={fadeInVariants}
          >
            Câu nói hay
          </motion.h1>

          {/* Quote 1 */}
          <motion.section
            className='flex gap-8'
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.img
              src={Quote1}
              alt='Quote1'
              className='w-1/5 object-contain'
              variants={fadeInVariants}
            />
            <motion.div
              className='flex flex-col gap-2'
              variants={fadeInVariants}
            >
              <motion.p className='text-justify' variants={fadeInVariants}>
                "Mỹ đã thua trong ván bài cuối cùng, đúng như lời tiên đoán của
                Bác Hồ 'Phải dự kiến trước mọi tình huống càng sớm càng tốt. Nhớ
                là trước khi thua ở Triều Tiên, đế quốc Mỹ đã hủy diệt Bình
                Nhưỡng. Ở Việt Nam, Mỹ sẽ nhất định thua. Nhưng nó chỉ chịu thua
                sau khi thua trên bầu trời Hà Nội".
              </motion.p>
              <motion.p className='font-semibold' variants={fadeInVariants}>
                Đại tướng Võ Nguyên Giáp
              </motion.p>
              <motion.p className='italic' variants={fadeInVariants}>
                Hồi ức Tổng hành dinh trong mùa xuân toàn thắng
              </motion.p>
            </motion.div>
          </motion.section>

          {/* Quote 2 */}
          <motion.section
            className='flex gap-8'
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className='flex flex-col gap-2'
              variants={fadeInVariants}
            >
              <motion.p className='text-justify' variants={fadeInVariants}>
                "Chiến dịch Linebacker II là một trong những cuộc bắn phá dữ dội
                nhất trong lịch sử. Một chiến dịch gây sốc và kinh hãi với sức
                mạnh không quân áp đảo nhằm khuất phục một đối thủ đầy quyết tâm
                bằng lượng bom khổng lồ. Không quân Mỹ đã phải chịu những tổn
                thất mà đến tận ngày nay dường như không thể đong đếm hết được".
              </motion.p>
              <motion.p className='font-semibold' variants={fadeInVariants}>
                Brad Lendon
              </motion.p>
              <motion.p className='italic' variants={fadeInVariants}>
                Nhà báo Mỹ
              </motion.p>
            </motion.div>
            <motion.img
              src={Quote2}
              alt='Quote2'
              className='w-1/5 object-contain'
              variants={fadeInVariants}
            />
          </motion.section>

          {/* Quote 3 */}
          <motion.section
            className='flex gap-8'
            variants={fadeInVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.img
              src={Quote3}
              alt='Quote3'
              className='w-1/5 object-contain'
              variants={fadeInVariants}
            />
            <motion.div
              className='flex flex-col gap-2'
              variants={fadeInVariants}
            >
              <motion.p className='text-justify' variants={fadeInVariants}>
                "Đối với người Việt Nam, Linebacker II chỉ đơn giản là một trong
                những chiến thắng trong chuỗi những trận đánh của 30 năm giành
                độc lập. Bằng chứng cho thắng lợi của Việt Nam trong Linebacker
                II chính là đất nước Việt Nam thống nhất và độc lập hoàn toàn".
              </motion.p>
              <motion.p className='font-semibold' variants={fadeInVariants}>
                Marshall Michel
              </motion.p>
              <motion.p className='italic' variants={fadeInVariants}>
                Phi công từng tham chiến ở Việt Nam
              </motion.p>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default WarQuotes;
