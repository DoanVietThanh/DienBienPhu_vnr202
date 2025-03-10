import { Quiz } from '@/types';

export const quizList: Quiz[] = [
  {
    id: 1,
    question: 'Trận "Điện Biên Phủ trên không" diễn ra vào thời gian nào?',
    options: [
      { id: 1, text: 'Tháng 12 năm 1972', isCorrect: true },
      { id: 2, text: 'Tháng 4 năm 1975', isCorrect: false },
      { id: 3, text: 'Tháng 9 năm 1973', isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      'Mục tiêu chính của Mỹ trong trận "Điện Biên Phủ trên không" là gì?',
    options: [
      { id: 1, text: 'Đánh bại miền Bắc nhanh chóng', isCorrect: false },
      {
        id: 2,
        text: 'Ép Việt Nam trở lại bàn đàm phán theo điều kiện của Mỹ',
        isCorrect: true,
      },
      { id: 3, text: 'Bảo vệ miền Nam Việt Nam', isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      'Loại máy bay chiến lược nào của Mỹ bị bắn rơi nhiều nhất trong trận này?',
    options: [
      { id: 1, text: 'B-52', isCorrect: true },
      { id: 2, text: 'F-4 Phantom', isCorrect: false },
      { id: 3, text: 'F-105 Thunderchief', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'Hệ thống phòng không chủ lực của Hà Nội khi đó là gì?',
    options: [
      { id: 1, text: 'S-75 Dvina (SAM-2)', isCorrect: true },
      { id: 2, text: 'S-300', isCorrect: false },
      { id: 3, text: 'Patriot', isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      'Trong vòng 12 ngày đêm, Hà Nội đã bắn rơi bao nhiêu máy bay B-52 của Mỹ?',
    options: [
      { id: 1, text: '34 chiếc', isCorrect: true },
      { id: 2, text: '21 chiếc', isCorrect: false },
      { id: 3, text: '40 chiếc', isCorrect: false },
    ],
  },
  {
    id: 6,
    question:
      'Ai là Tổng thống Mỹ khi trận "Điện Biên Phủ trên không" diễn ra?',
    options: [
      { id: 1, text: 'Richard Nixon', isCorrect: true },
      { id: 2, text: 'Lyndon B. Johnson', isCorrect: false },
      { id: 3, text: 'John F. Kennedy', isCorrect: false },
    ],
  },
  {
    id: 7,
    question: 'Chiến dịch bảo vệ Hà Nội trong trận này có tên là gì?',
    options: [
      { id: 1, text: 'Chiến dịch Phòng không Hà Nội', isCorrect: false },
      { id: 2, text: 'Chiến dịch Điện Biên Phủ trên không', isCorrect: true },
      { id: 3, text: 'Chiến dịch Hồ Chí Minh', isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      'Đài phát thanh nào tuyên bố chiến thắng của Việt Nam sau trận này?',
    options: [
      { id: 1, text: 'Đài Tiếng nói Việt Nam', isCorrect: true },
      { id: 2, text: 'BBC', isCorrect: false },
      { id: 3, text: 'VOA', isCorrect: false },
    ],
  },
  {
    id: 9,
    question: 'Trận "Điện Biên Phủ trên không" kéo dài bao nhiêu ngày?',
    options: [
      { id: 1, text: '12 ngày đêm', isCorrect: true },
      { id: 2, text: '15 ngày đêm', isCorrect: false },
      { id: 3, text: '10 ngày đêm', isCorrect: false },
    ],
  },
  {
    id: 10,
    question: 'Ngày kết thúc trận "Điện Biên Phủ trên không" là ngày nào?',
    options: [
      { id: 1, text: '30/12/1972', isCorrect: true },
      { id: 2, text: '27/1/1973', isCorrect: false },
      { id: 3, text: '7/5/1954', isCorrect: false },
    ],
  },
  {
    id: 11,
    question: 'Hệ thống radar nào đóng vai trò quan trọng trong trận này?',
    options: [
      { id: 1, text: 'P-12', isCorrect: true },
      { id: 2, text: 'Patriot', isCorrect: false },
      { id: 3, text: 'Aegis', isCorrect: false },
    ],
  },
  {
    id: 12,
    question: 'Địa điểm nào ở Hà Nội bị Mỹ đánh phá ác liệt nhất?',
    options: [
      { id: 1, text: 'Bạch Mai', isCorrect: true },
      { id: 2, text: 'Hoàn Kiếm', isCorrect: false },
      { id: 3, text: 'Tây Hồ', isCorrect: false },
    ],
  },
  {
    id: 13,
    question: 'Ai là người chỉ huy lực lượng phòng không Việt Nam khi đó?',
    options: [
      { id: 1, text: 'Võ Nguyên Giáp', isCorrect: false },
      { id: 2, text: 'Lê Trọng Tấn', isCorrect: false },
      { id: 3, text: 'Văn Tiến Dũng', isCorrect: true },
    ],
  },
  {
    id: 14,
    question: 'Vì sao trận này được gọi là "Điện Biên Phủ trên không"?',
    options: [
      {
        id: 1,
        text: 'Do tầm quan trọng chiến lược và chiến thắng lớn',
        isCorrect: true,
      },
      { id: 2, text: 'Do diễn ra ở Điện Biên', isCorrect: false },
      {
        id: 3,
        text: 'Do có sự tham gia của bộ đội Điện Biên',
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    question: 'Thỏa thuận nào được ký kết sau trận này?',
    options: [
      { id: 1, text: 'Hiệp định Paris', isCorrect: true },
      { id: 2, text: 'Hiệp định Genève', isCorrect: false },
      { id: 3, text: 'Hiệp định Paris lần 2', isCorrect: false },
    ],
  },
  {
    id: 16,
    question: 'Chiến thắng này đã ảnh hưởng như thế nào đến chiến lược của Mỹ?',
    options: [
      {
        id: 1,
        text: 'Mỹ phải ngừng ném bom và quay lại đàm phán',
        isCorrect: true,
      },
      { id: 2, text: 'Mỹ tăng cường ném bom', isCorrect: false },
      { id: 3, text: 'Mỹ mở rộng chiến tranh ra miền Bắc', isCorrect: false },
    ],
  },
  {
    id: 17,
    question: 'Tên của chiến dịch Mỹ tấn công Hà Nội là gì?',
    options: [
      { id: 1, text: 'Linebacker II', isCorrect: true },
      { id: 2, text: 'Rolling Thunder', isCorrect: false },
      { id: 3, text: 'Arc Light', isCorrect: false },
    ],
  },
  {
    id: 18,
    question: 'Trận này đã thể hiện điều gì về ý chí của nhân dân Việt Nam?',
    options: [
      {
        id: 1,
        text: 'Ý chí kiên cường và chiến thuật xuất sắc',
        isCorrect: true,
      },
      { id: 2, text: 'Sự yếu kém về phòng không', isCorrect: false },
      { id: 3, text: 'Sự phụ thuộc vào viện trợ', isCorrect: false },
    ],
  },
  {
    id: 19,
    question:
      'Trong trận "Điện Biên Phủ trên không", quân đội Việt Nam đã áp dụng chiến thuật nào để bắn hạ B-52 hiệu quả nhất?',
    options: [
      { id: 1, text: 'Bắn loạt đạn liên tục từ nhiều hướng', isCorrect: false },
      {
        id: 2,
        text: 'Tạo trận địa giả để đánh lừa và phục kích',
        isCorrect: true,
      },
      { id: 3, text: 'Sử dụng tên lửa tầm ngắn liên tiếp', isCorrect: false },
      { id: 4, text: 'Bắn theo sơ đồ hình tròn', isCorrect: false },
    ],
  },
  {
    id: 20,
    question:
      'Sự kiện nào sau đây xảy ra đồng thời với trận "Điện Biên Phủ trên không"?',
    options: [
      {
        id: 1,
        text: 'Phong trào chống chiến tranh ở Mỹ phát triển mạnh',
        isCorrect: true,
      },
      { id: 2, text: 'Cuộc tổng tiến công Mậu Thân 1968', isCorrect: false },
      { id: 3, text: 'Hiệp định Genève được ký kết', isCorrect: false },
      { id: 4, text: 'Chiến dịch Hồ Chí Minh', isCorrect: false },
    ],
  },
  {
    id: 21,
    question:
      'Để tránh radar của Mỹ, các đơn vị tên lửa của Việt Nam đã áp dụng biện pháp gì?',
    options: [
      { id: 1, text: 'Di chuyển trận địa ngay sau khi phóng', isCorrect: true },
      { id: 2, text: 'Dùng thiết bị gây nhiễu tân tiến', isCorrect: false },
      { id: 3, text: 'Bắn tên lửa từ dưới biển', isCorrect: false },
      { id: 4, text: 'Ẩn mình trong rừng sâu', isCorrect: false },
    ],
  },
  {
    id: 22,
    question: 'Mật danh của chiến dịch phòng không bảo vệ Hà Nội là gì?',
    options: [
      { id: 1, text: 'Chiến dịch Hoa Lửa', isCorrect: false },
      { id: 2, text: 'Chiến dịch Bảo vệ Thủ đô', isCorrect: false },
      { id: 3, text: 'Chiến dịch Cánh Đồng Chum', isCorrect: false },
      {
        id: 4,
        text: 'Chiến dịch Phòng không Hà Nội - Hải Phòng',
        isCorrect: true,
      },
    ],
  },
  {
    id: 23,
    question:
      'Để đối phó với B-52, Việt Nam đã cải tiến tên lửa SAM-2 như thế nào?',
    options: [
      { id: 1, text: 'Tăng tầm bắn và độ chính xác', isCorrect: false },
      {
        id: 2,
        text: 'Giảm thời gian nạp đạn và nâng cao khả năng chống nhiễu',
        isCorrect: true,
      },
      { id: 3, text: 'Trang bị đầu đạn hạt nhân', isCorrect: false },
      {
        id: 4,
        text: 'Kết hợp với hệ thống phòng không tầm thấp',
        isCorrect: false,
      },
    ],
  },
  {
    id: 24,
    question:
      'Mỹ đã sử dụng chiến thuật nào để cố gắng làm suy yếu hệ thống phòng không của Hà Nội?',
    options: [
      {
        id: 1,
        text: 'Tấn công dồn dập liên tục cả ngày lẫn đêm',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'Sử dụng nhiễu điện tử và bắn phá sân bay',
        isCorrect: true,
      },
      { id: 3, text: 'Đổ bộ lực lượng đặc nhiệm', isCorrect: false },
      { id: 4, text: 'Tấn công vào các tỉnh phía Nam', isCorrect: false },
    ],
  },
  {
    id: 25,
    question:
      'Yếu tố nào được xem là "chìa khóa" giúp Việt Nam chiến thắng trong trận này?',
    options: [
      { id: 1, text: 'Chiến thuật du kích trên không', isCorrect: false },
      {
        id: 2,
        text: 'Khả năng phán đoán chính xác đường bay của B-52',
        isCorrect: true,
      },
      { id: 3, text: 'Sự hỗ trợ từ các nước đồng minh', isCorrect: false },
      { id: 4, text: 'Số lượng tên lửa vượt trội', isCorrect: false },
    ],
  },
];
