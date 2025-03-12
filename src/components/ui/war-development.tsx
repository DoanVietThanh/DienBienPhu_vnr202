import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WarDevelopment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='flex justify-center mt-8' ref={ref}>
      <div className='flex flex-col gap-4 w-1/2'>
        {[
          'Trưa 18/12/1972, khi những tốp B-52 đầu tiên cất cánh từ căn cứ không quân Andersen trên đảo Guam (Thái Bình Dương) nhằm hướng tây bay tới, chiến dịch phòng không toàn miền Bắc Việt Nam lập tức khởi động.',
          '15h cùng ngày, tại Đông Anh (Hà Nội), Tiểu đoàn tên lửa 57 được lệnh ăn cơm sớm ba tiếng. Tiểu đoàn trưởng Nguyễn Văn Phiệt kiểm tra lại quân số, vẫn còn thiếu vài cán bộ đang cấp tốc cắt phép trở về. Tên lửa SAM-2 đã nằm trên trận địa Đại Đồng chờ khai hỏa. Toàn Quân chủng Phòng không Không quân chuyển trạng thái sẵn sàng chiến đấu.',
          '1972 là năm mấu chốt cho chấm dứt chiến tranh Việt Nam với đàm phán bốn bên gồm Mỹ, Việt Nam Dân chủ Cộng hòa, Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam và Việt Nam Cộng hòa tại Paris. Bốn năm với hơn hai trăm phiên họp, hội nghị vẫn chưa đi đến kết quả cuối cùng.',
          'Ngày 14/12, đàm phán tạm ngừng, Tổng thống Mỹ Richard Nixon phê duyệt kế hoạch ném bom mùa Giáng sinh mang mật danh Linebacker II. Mục tiêu dùng B-52 đánh Hà Nội, Hải Phòng nhằm mặc cả với miền Bắc những điều khoản có lợi và chính quyền Sài Gòn thấy "không bị bỏ rơi".',
          'B-52 là một trong ba trụ cột răn đe hạt nhân của Mỹ (cùng với tên lửa đạn đạo xuyên lục địa và tàu ngầm mang tên lửa đạn đạo), được truyền thông nước này xem là "pháo đài bất khả xâm phạm". Hồi tháng 4/1972, B-52 từng đánh phá Nghệ An, Thanh Hóa, Hải Phòng nhằm "kiểm tra năng lực phòng không" của miền Bắc Việt Nam.',
          'Không gặp nhiều trở ngại khiến Lầu Năm Góc tự tin khích lệ phi công B-52: "Bay vào Hà Nội chỉ như một cuộc dạo chơi trong đêm phương Đông. Ở độ cao 10.000 m, đối phương không thể với tới. Các bạn chỉ cần ấn nút rồi trở về căn cứ an toàn, sạch sẽ".',
        ].map((text, idx) => (
          <motion.p
            key={idx}
            className={idx === 0 ? 'font-bold text-sm' : 'text-justify'}
            variants={fadeInVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 1.5, delay: idx * 0.4 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default WarDevelopment;
