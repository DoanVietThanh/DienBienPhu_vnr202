import { HistoricalEvent } from '@/types';

export const historicalEvents: HistoricalEvent[] = [
  {
    date: '18/12/1972',
    title: 'Bắt đầu chiến dịch Linebacker II',
    description:
      'Mỹ bắt đầu chiến dịch ném bom quy mô lớn nhằm vào Hà Nội và Hải Phòng.',
    details: [
      'Tổng thống Nixon ra lệnh thực hiện chiến dịch Linebacker II.',
      '193 máy bay B-52 và hơn 100 máy bay chiến đấu khác tham gia chiến dịch.',
      'Đợt tấn công đầu tiên tập trung vào các mục tiêu quân sự và cơ sở hạ tầng.',
      'Quân đội Việt Nam đã được chuẩn bị sẵn sàng cho cuộc tấn công.',
    ],
    images: [
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Máy bay B-52 của Mỹ',
        description:
          'Máy bay ném bom chiến lược B-52 được sử dụng trong chiến dịch Linebacker II.',
        source: 'Bảo tàng Quân đội',
      },
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Bản đồ chiến dịch',
        description:
          'Bản đồ các mục tiêu trong chiến dịch Linebacker II tại Hà Nội và Hải Phòng.',
        source: 'Tư liệu lịch sử',
      },
    ],
    quote: {
      text: 'Đây là cuộc tấn công ném bom lớn nhất trong lịch sử chiến tranh Việt Nam.',
      author: 'Nhà sử học quân sự',
    },
    statistics: [
      {
        value: '193',
        label: 'Máy bay B-52 tham chiến',
      },
      {
        value: '~700',
        label: 'Phi vụ trong ngày đầu tiên',
      },
    ],
  },
  {
    date: '20/12/1972',
    title: 'Trận đánh lớn đầu tiên',
    description:
      'Quân đội Việt Nam bắn rơi nhiều máy bay B-52 trong đêm 20/12.',
    details: [
      'Phòng không Việt Nam sử dụng tên lửa SAM-2 để đánh trả.',
      'Đêm 20/12 đánh dấu chiến thắng đầu tiên khi bắn rơi nhiều máy bay B-52.',
      'Phi công Mỹ Mayer bị bắt làm tù binh sau khi nhảy dù.',
      'Tinh thần chiến đấu của quân và dân Hà Nội được nâng cao sau chiến thắng đầu tiên.',
    ],
    images: [
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Tên lửa SAM-2',
        description:
          'Hệ thống tên lửa phòng không SAM-2 được sử dụng để bắn hạ máy bay B-52.',
        source: 'Bảo tàng Quân đội',
      },
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Xác máy bay B-52 bị bắn rơi',
        description: 'Mảnh vỡ của máy bay B-52 bị bắn rơi tại Hà Nội.',
        source: 'Tư liệu lịch sử',
      },
    ],
    statistics: [
      {
        value: '3',
        label: 'B-52 bị bắn rơi',
      },
      {
        value: '12',
        label: 'Phi công bị bắt',
      },
    ],
  },
  {
    date: '21-24/12/1972',
    title: 'Cao điểm của chiến dịch',
    description:
      'Mỹ tăng cường các đợt ném bom, quân đội Việt Nam tiếp tục đánh trả quyết liệt.',
    details: [
      'Mỹ thay đổi chiến thuật sau những tổn thất ban đầu.',
      'Phòng không Việt Nam điều chỉnh phương án tác chiến.',
      'Nhiều khu vực dân cư ở Hà Nội bị tàn phá nặng nề.',
      'Bệnh viện Bạch Mai bị ném bom gây phẫn nộ trong dư luận quốc tế.',
    ],
    images: [
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Bệnh viện Bạch Mai sau khi bị ném bom',
        description:
          'Hậu quả của việc ném bom Bệnh viện Bạch Mai ngày 22/12/1972.',
        source: 'Tư liệu lịch sử',
      },
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Người dân sơ tán',
        description:
          'Người dân Hà Nội sơ tán khỏi thành phố trong những ngày chiến dịch.',
        source: 'Bảo tàng Lịch sử',
      },
    ],
    quote: {
      text: 'Việc ném bom các mục tiêu dân sự như Bệnh viện Bạch Mai là một tội ác chiến tranh không thể biện minh.',
      author: 'Tổ chức Chữ thập đỏ Quốc tế',
    },
  },
  {
    date: '26/12/1972',
    title: 'Đêm chiến thắng lịch sử',
    description:
      'Đêm 26/12 đánh dấu chiến thắng lớn nhất khi phòng không Việt Nam bắn rơi nhiều B-52.',
    details: [
      'Đêm 26/12 được coi là đỉnh cao của chiến dịch phòng không.',
      'Phòng không Việt Nam bắn rơi 7 máy bay B-52 chỉ trong một đêm.',
      'Chiến thắng này đã gây sốc cho Bộ Quốc phòng Mỹ.',
      'Tinh thần chiến đấu của quân và dân Việt Nam lên cao.',
    ],
    images: [
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Pháo phòng không Việt Nam',
        description: 'Trận địa pháo phòng không trong đêm 26/12/1972.',
        source: 'Bảo tàng Quân đội',
      },
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Chiến sĩ phòng không',
        description:
          'Các chiến sĩ phòng không Việt Nam trong trận đánh lịch sử.',
        source: 'Tư liệu lịch sử',
      },
    ],
    statistics: [
      {
        value: '7',
        label: 'B-52 bị bắn rơi trong đêm 26/12',
      },
      {
        value: '34',
        label: 'Phi công Mỹ bị bắt làm tù binh',
      },
    ],
  },
  {
    date: '29/12/1972',
    title: 'Kết thúc chiến dịch Linebacker II',
    description:
      'Mỹ buộc phải chấm dứt chiến dịch ném bom sau 12 ngày đêm thất bại.',
    details: [
      'Tổng thống Nixon ra lệnh ngừng ném bom từ vĩ tuyến 20 trở ra.',
      'Mỹ quay trở lại bàn đàm phán ở Paris.',
      "Chiến thắng của Việt Nam được coi là 'Điện Biên Phủ trên không'.",
      'Chiến dịch đánh dấu bước ngoặt quan trọng dẫn đến Hiệp định Paris 1973.',
    ],
    images: [
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Hiệp định Paris',
        description:
          'Đàm phán Hiệp định Paris được nối lại sau chiến dịch Linebacker II.',
        source: 'Tư liệu lịch sử',
      },
      {
        src: '/placeholder.svg?height=600&width=800',
        caption: 'Nhân dân Hà Nội mừng chiến thắng',
        description:
          'Người dân Hà Nội ăn mừng chiến thắng sau 12 ngày đêm chiến đấu.',
        source: 'Bảo tàng Lịch sử',
      },
    ],
    quote: {
      text: "Chiến thắng 'Điện Biên Phủ trên không' là minh chứng cho ý chí, sức mạnh và trí tuệ của quân và dân Việt Nam.",
      author: 'Tướng Võ Nguyên Giáp',
    },
    statistics: [
      {
        value: '81',
        label: 'Máy bay Mỹ bị bắn rơi trong toàn chiến dịch',
      },
      {
        value: '34',
        label: 'B-52 bị bắn hạ',
      },
    ],
  },
];
