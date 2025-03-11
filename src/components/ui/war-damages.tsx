import WarDamagesImage from '@/assets/images/war_damages.png';

const WarDamages = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
      <div className='flex flex-col gap-8 w-1/2'>
        <div className='flex flex-col gap-4 w-full'>
          <h1 className='font-bold text-2xl text-center'>Thiệt hại</h1>
          <p className='text-justify'>
            "Liền trong 12 ngày đêm, Mỹ tiến hành cuộc ném bom rải thảm mà sự
            tàn phá đã lớn hơn cả sự tàn phá trong cuộc ném bom suốt từ đầu
            chiến tranh Việt Nam tới giờ. Cuộc ném bom với mức độ tàn phá có
            tính hủy diệt", Weldon A.Brown, giáo sư sử học Mỹ, nhận định.
          </p>

          <p className='text-justify'>
            Các tỉnh miền Bắc đã phải hứng chịu 36.000 tấn bom B52, vượt tổng
            lượng bom ném xuống toàn miền thời kỳ 1969-1971. Riêng Hà Nội chịu
            10.000 tấn. "Bình quân mỗi km2 Hà Nội hứng 33,33 tấn bom, trong khi
            Thế chiến II Đức 5,4 tấn và Nhật 0,43 tấn", thống kê của Bảo tàng
            chiến thắng B52. Hà Nội là đích đến của 66,5% lần máy bay B-52 cất
            cánh (441 trên tổng số 663 lần).
          </p>

          <p className='text-justify'>
            Chiến dịch phòng không bảo vệ Hà Nội - Hải Phòng năm 1972 được ví
            như "Điện Biên Phủ trên không". "Chiến dịch đầu tiên trên thế giới
            bắn rơi nhiều máy bay B-52, giáng cho không quân Mỹ đòn thất bại
            nặng nề nhất trong lịch sử, đánh bại âm mưu giành thế mạnh trên bàn
            đàm phán, góp phần buộc Mỹ ký Hiệp định Paris về chấm dứt chiến
            tranh, lập lại hòa bình ở Việt Nam", thượng tướng Lê Huy Vịnh, Thứ
            trưởng Quốc phòng, nhấn mạnh tại hội thảo khoa học ngày 9/12/2022.
          </p>

          <p className='text-justify'>
            Với trung tướng Nguyễn Văn Phiệt, 84 tuổi, 12 ngày đêm cuối năm 1972
            "là cuộc chiến đấu không cân sức, khốc liệt nhất trong đời quân
            ngũ". 34 B-52 21 F-4 12 A-7 5 F-111
          </p>
        </div>
        <img src={WarDamagesImage} alt='B52_1' className='w-full' />
        <p className='text-justify italic'>
          Nguồn: Bảo tàng chiến thắng B52, Ban Tuyên giáo Trung ương, Sách Đối
          mặt với B52, Chi cục Văn thư - Lưu trữ Hà Nội
        </p>
      </div>
    </div>
  );
};

export default WarDamages;
