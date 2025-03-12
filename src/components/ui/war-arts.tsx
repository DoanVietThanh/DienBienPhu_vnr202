import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const WarArts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const paragraphs = [
    `"Tôi thấy lạ với cách đánh của người Việt Nam. Có lẽ chúng tôi chưa hiểu hết, nên chúng tôi phải ngồi đây", tù binh phi công Mỹ trả lời Phạm Tuân trong cuộc tiếp xúc tại nhà tù Hỏa Lò, đầu năm 1973. Theo trung tướng Phạm Tuân, nếu so kè kỹ thuật với phi công Mỹ có thể còn nhiều vấn đề, nhưng điều vượt lên của bộ đội Việt Nam là cách đánh sáng tạo cùng bản lĩnh đánh thắng.`,
    `Chiến dịch đáp trả cuộc tập kích đường không cuối năm 1972 là trận đấu trí, đọ sức của cả hai phía. Những máy bay ném bom đáng gờm nhất thế giới đã gặp phải mạng lưới phòng không miền Bắc được tổ chức nhiều tầng, nhiều lớp, tỏa khắp thành thị đến nông thôn, dùng từ vũ khí thô sơ đến hiện đại. Như lời một phi công Mỹ từng tham gia chiến dịch: "Tên lửa phóng lên nhiều đến nỗi bạn cảm giác có thể đi trên mũi những quả đạn đó. Pháo phòng không sáng đến mức có thể đọc báo trong buồng lái".`,
    `Những sáng tạo trong cách đánh B-52, theo trung tướng Nguyễn Văn Phiệt, là nhiều năm tích lũy kinh nghiệm trong gian khổ và máu xương của bộ đội phòng không, với sự giúp sức của chuyên gia Liên Xô.`,
  ];

  return (
    <div
      className='flex flex-col items-center gap-8 justify-center mt-8'
      ref={ref}
    >
      <div className='flex flex-col gap-8 w-1/2'>
        <div className='flex flex-col gap-4 w-full'>
          <motion.h1
            className='font-bold text-2xl text-center'
            variants={fadeIn}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
          >
            NGHỆ THUẬT TÁC CHIẾN
          </motion.h1>

          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              className='text-justify'
              variants={fadeIn}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              custom={index + 1}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WarArts;
