import Quote1 from '@/assets/images/quote_1.png';
import Quote2 from '@/assets/images/quote_2.png';
import Quote3 from '@/assets/images/quote_3.png';

const WarQuotes = () => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center mt-8'>
      <div className='flex flex-col gap-8 w-1/2'>
        <div className='flex flex-col gap-12 w-full'>
          <h1 className='font-bold text-2xl text-center'>Câu nói hay</h1>
          <section className='flex gap-8'>
            <img src={Quote1} alt='B52_1' className='w-1/5 object-contain' />
            <div className='flex flex-col gap-2'>
              <p className='text-justify'>
                "Mỹ đã thua trong ván bài cuối cùng, đúng như lời tiên đoán của
                Bác Hồ 'Phải dự kiến trước mọi tình huống càng sớm càng tốt. Nhớ
                là trước khi thua ở Triều Tiên, đế quốc Mỹ đã hủy diệt Bình
                Nhưỡng. Ở Việt Nam, Mỹ sẽ nhất định thua. Nhưng nó chỉ chịu thua
                sau khi thua trên bầu trời Hà Nội".
              </p>
              <p className='font-semibold'>Đại tướng Võ Nguyên Giáp</p>
              <p className='italic'>
                Hồi ức Tổng hành dinh trong mùa xuân toàn thắng
              </p>
            </div>
          </section>

          <section className='flex gap-8'>
            <div className='flex flex-col gap-2'>
              <p className='text-justify'>
                "Chiến dịch Linebacker II là một trong những cuộc bắn phá dữ dội
                nhất trong lịch sử. Một chiến dịch gây sốc và kinh hãi với sức
                mạnh không quân áp đảo nhằm khuất phục một đối thủ đầy quyết tâm
                bằng lượng bom khổng lồ. Không quân Mỹ đã phải chịu những tổn
                thất mà đến tận ngày nay dường như không thể đong đếm hết được".
              </p>
              <p className='font-semibold'>Brad Lendon</p>
              <p className='italic'>Nhà báo Mỹ</p>
            </div>
            <img src={Quote2} alt='Quote2' className='w-1/5 object-contain' />
          </section>

          <section className='flex gap-8'>
            <img src={Quote3} alt='Quote3' className='w-1/5 object-contain' />
            <div className='flex flex-col gap-2'>
              <p className='text-justify'>
                "Đối với người Việt Nam, Linebacker II chỉ đơn giản là một trong
                những chiến thắng trong chuỗi những trận đánh của 30 năm giành
                độc lập. Bằng chứng cho thắng lợi của Việt Nam trong Linebacker
                II chính là đất nước Việt Nam thống nhất và độc lập hoàn toàn".
              </p>
              <p className='font-semibold'>Marshall Michel</p>
              <p className='italic'>Phi công từng tham chiến ở Việt Nam</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WarQuotes;
