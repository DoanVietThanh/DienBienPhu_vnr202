import B52_1 from '@/assets/images/B52_1.png';
import B52_2 from '@/assets/images/B52_2.png';
import B52_3 from '@/assets/images/B52_3.png';
import B52_4 from '@/assets/images/B52_4.png';
import AmericanAce1 from '@/assets/images/american_ace_1.png';
import AmericanAce2 from '@/assets/images/american_ace_2.png';
import AmericanAce3 from '@/assets/images/american_ace_3.png';

import AmericaFlag from '@/assets/images/america_flag.png';
import { Card } from './card';

const WarAmericanAce = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
      <div className='flex flex-col gap-4 w-1/2'>
        <h1 className='font-bold text-2xl text-center'>NHỮNG ÁT CHỦ BÀI</h1>
        <p className='text-justify'>
          Lầu Năm Góc huy động gần một nửa số B-52 (193/400 chiếc), cất cánh 663
          lần; hơn 1/3 số máy bay chiến thuật (khoảng 1.200), cất cánh gần 4.000
          lần, 6 trên tổng số 24 tàu sân bay, 66 tàu chiến của Hạm đội 7 ở vịnh
          Bắc Bộ. Đây là cuộc tập kích đường không lớn nhất trong lịch sử chiến
          tranh.
        </p>

        <p className='text-justify'>
          B-52 ném bom theo đội hình, mỗi tốp 3 chiếc, mỗi đợt ít nhất 6 chiếc
          và nhiều nhất 75 chiếc, theo tài liệu chỉ huy tác chiến phía Việt Nam
          năm 1972. Hộ tống dàn B-52 là hàng chục chiến đấu cơ làm nhiệm vụ săn
          lùng MiG-21, thả dải nhiễu và chế áp trận địa tên lửa... Các trận tập
          kích dùng B-52 ném bom ban đêm, máy bay chiến thuật đánh bồi dai dẳng
          ban ngày, máy phát nhiễu điện tử hiện đại hỗ trợ.
        </p>
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <div className='flex justify-center items-center rounded-lg overflow-hidden'>
          <img src={AmericaFlag} alt='B52_1' className='w-1/4' />
        </div>
        <h1 className='font-bold text-2xl text-center'>
          Máy bay ném bom chiến lược B-52
        </h1>
        <img src={B52_1} alt='B52_1' className='w-full' />
        <img src={B52_2} alt='B52_2' className='w-full' />
        <img src={B52_3} alt='B52_3' className='w-full' />
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='font-bold text-2xl text-center'>Đội hình bay</h1>
        <img src={B52_4} alt='B52_4' className='w-full' />
      </div>

      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='font-bold text-2xl text-center'>Chỉ huy</h1>
        <Card className='grid grid-cols-3 gap-10 shadow-lg'>
          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={AmericanAce1}
              alt='PersonAce1'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Đại tướng</p>
            <p className='font-semibold'>John W. Vogt</p>
            <p>Chỉ huy Tập đoàn không quân số 7</p>
          </div>

          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={AmericanAce2}
              alt='PersonAce2'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Đại tướng</p>
            <p className='font-semibold'>John C. Meyer</p>
            <p>Bộ tư lệnh Không quân chiến lược Mỹ (SAC)</p>
          </div>

          <div className='col-span-1 text-center text-xs space-y-2'>
            <img
              src={AmericanAce3}
              alt='PersonAce3'
              className='w-1/2 mx-auto hover:scale-105 duration-150 transition-all'
            />
            <p>Phó đô đốc</p>
            <p className='font-semibold'>Damon W. Cooper</p>
            <p>Chỉ huy Nhóm tác chiến số 77</p>
          </div>
        </Card>
        <p className='italic opacity-90 text-center'>
          Nguồn: To Hanoi and Back: The U.S. Air Force and North Vietnam,
          1966–1973
        </p>
      </div>
    </div>
  );
};

export default WarAmericanAce;
