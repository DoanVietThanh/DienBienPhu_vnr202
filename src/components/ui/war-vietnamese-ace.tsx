import VietnamWeapon1 from '@/assets/images/vn_weapon_1.png';
import VietnamWeapon2 from '@/assets/images/vn_weapon_2.png';
import VietnamWeapon3 from '@/assets/images/vn_weapon_3.png';

import VietnameseAce1 from '@/assets/images/vn_ace_1.png';
import VietnameseAce2 from '@/assets/images/vn_ace_2.png';
import VietnameseAce3 from '@/assets/images/vn_ace_3.png';
import VietnameseFlag from '@/assets/images/vietnamese-flag.jpg';
import { Card } from './card';

const WarVietnameseAce = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
      <div className='flex flex-col gap-8 w-1/2'>
        <div className='flex justify-center items-center rounded-lg overflow-hidden'>
          <img src={VietnameseFlag} alt='B52_1' className='w-1/4' />
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <p className='text-justify'>
            Chiến dịch phòng vệ do Bộ tư lệnh Quân chủng Phòng không Không quân
            tổ chức, chỉ huy 6 trung đoàn tên lửa, 4 trung đoàn tiêm kích, 16
            trung đoàn và 22 tiểu đoàn pháo phòng không, 4 trung đoàn radar, 346
            đơn vị pháo, súng máy phòng không của bộ đội địa phương và dân quân
            tự vệ.
          </p>

          <p className='text-justify'>
            Tên lửa là lực lượng có điều kiện tiêu diệt B-52, song các đơn vị
            đang phân tán nhiều nhiệm vụ. Bảo vệ Hà Nội lúc này có 9 tiểu đoàn.
            Ông Nguyễn Văn Phiệt kể, bộ khí tài của Tiểu đoàn 57 đã qua 14.000
            giờ mở máy, dính trận lụt một năm trước tưởng được nghỉ ngơi, nhưng
            phải làm nhiệm vụ.
          </p>
        </div>
        <img src={VietnamWeapon1} alt='B52_1' className='w-full' />
        <img src={VietnamWeapon2} alt='B52_2' className='w-full' />
        <img src={VietnamWeapon3} alt='B52_3' className='w-full' />
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='font-bold text-2xl text-center'>Chỉ huy</h1>
        <Card className='grid grid-cols-3 gap-10 shadow-lg'>
          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={VietnameseAce1}
              alt='VietnameseAce1'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Thượng tướng</p>
            <p className='font-semibold'>John W. Vogt</p>
            <p>Chỉ huy Tập đoàn không quân số 7</p>
          </div>

          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={VietnameseAce2}
              alt='VietnameseAce2'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Thiếu tướng</p>
            <p className='font-semibold'>John C. Meyer</p>
            <p>Bộ tư lệnh Không quân chiến lược Mỹ (SAC)</p>
          </div>

          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={VietnameseAce3}
              alt='VietnameseAce3'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Đại tá</p>
            <p className='font-semibold'>Damon W. Cooper</p>
            <p>Chỉ huy Nhóm tác chiến số 77</p>
          </div>
        </Card>
        <p className='italic opacity-90 text-center'>
          Nguồn: Tài liệu hội thảo khoa học do Viện Lịch sử quân sự tổ chức
        </p>
      </div>
    </div>
  );
};

export default WarVietnameseAce;
