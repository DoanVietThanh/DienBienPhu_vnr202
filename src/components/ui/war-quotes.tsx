import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WarQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <main className='main-interactive'>
      <section className='section clearfix section-result'>
        <div className='container'>
          <div
            className='title-block-text aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
          ></div>
          <div
            ref={ref}
            className={cn('box-quote aos-init', isInView && 'aos-animate')}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='line-top'></div>
            <div className='quote-item flexbox'>
              <div className='thumb-quote'>
                <div className='thumb thumb-1x1'>
                  <img src='https://i-vnexpress.vnecdn.net/2022/12/26/Vo-Nguyen-Giap-fw-9632-1672031568.png' />
                </div>
              </div>
              <div className='txt-quote'>
                <p className='text-justify'>
                  "Mỹ đã thua trong ván bài cuối cùng, đúng như lời tiên đoán
                  của Bác Hồ 'Phải dự kiến trước mọi tình huống càng sớm càng
                  tốt. Nhớ là trước khi thua ở Triều Tiên, đế quốc Mỹ đã hủy
                  diệt Bình Nhưỡng. Ở Việt Nam, Mỹ sẽ nhất định thua. Nhưng nó
                  chỉ chịu thua sau khi thua trên bầu trời Hà Nội".
                </p>
                <p className='name-q'>Đại tướng Võ Nguyên Giáp</p>
                <p className='source'>
                  Hồi ức<em> Tổng hành dinh trong mùa xuân toàn thắng</em>
                </p>
              </div>
            </div>
            <div className='line-top'></div>
            <div className='quote-item flexbox thumb-right'>
              <div className='thumb-quote'>
                <div className='thumb thumb-1x1'>
                  <img src='https://i-vnexpress.vnecdn.net/2022/12/26/Brad-Lendon-9541-1672031569.png' />
                </div>
              </div>
              <div className='txt-quote'>
                <p className='text-justify'>
                  "Chiến dịch Linebacker II là một trong những cuộc bắn phá dữ
                  dội nhất trong lịch sử. Một chiến dịch gây sốc và kinh hãi với
                  sức mạnh không quân áp đảo nhằm khuất phục một đối thủ đầy
                  quyết tâm bằng lượng bom khổng lồ. Không quân Mỹ đã phải chịu
                  những tổn thất mà đến tận ngày nay dường như không thể đong
                  đếm hết được".
                </p>
                <p className='name-q'>Brad Lendon</p>
                <p className='source'>Nhà báo Mỹ</p>
              </div>
            </div>
            <div className='line-top'></div>
            <div className='quote-item flexbox'>
              <div className='thumb-quote'>
                <div className='thumb thumb-1x1'>
                  <img src='https://i-vnexpress.vnecdn.net/2022/12/26/Marshall-Michel-fw-9895-1672031569.png' />
                </div>
              </div>
              <div className='txt-quote'>
                <p className='text-justify'>
                  "Đối với người Việt Nam, Linebacker II chỉ đơn giản là một
                  trong những chiến thắng trong chuỗi những trận đánh của 30 năm
                  giành độc lập. Bằng chứng cho thắng lợi của Việt Nam trong
                  Linebacker II chính là đất nước Việt Nam thống nhất và độc lập
                  hoàn toàn".
                </p>
                <p className='name-q'>Marshall Michel</p>
                <p className='source'>Phi công từng tham chiến ở Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarQuotes;
