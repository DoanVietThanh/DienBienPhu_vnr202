import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const WarArts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const refHorStart = useRef<HTMLDivElement>(null);
  const isInViewHorStart = useInView(refHorStart);

  const refHorEnd = useRef(null);
  const isInViewHorEnd = useInView(refHorEnd);

  const refScene = useRef<HTMLDivElement>(null);

  const refSceneImage = useRef<HTMLDivElement>(null);

  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    if (refHorStart.current) {
      const element = refHorStart.current;
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolled = Math.min(Math.max((windowHeight - top) / height, 0), 1);
      setScrollPercent(scrolled * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='main-interactive'>
      <section
        ref={ref}
        className='section clearfix section-text-content section-text-tacchien'
      >
        <div className='container container-small'>
          <div
            className={cn(
              'title-block-text aos-init',
              isInView && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            {' '}
            NGHỆ THUẬT TÁC CHIẾN
          </div>
          <div
            className={cn('wrap-txt aos-init', isInView && 'aos-animate')}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p className='Normal text-justify'>
              "Tôi thấy lạ với cách đánh của người Việt Nam. Có lẽ chúng tôi
              chưa hiểu hết, nên chúng tôi phải ngồi đây", tù binh phi công Mỹ
              trả lời Phạm Tuân trong cuộc tiếp xúc tại nhà tù Hỏa Lò, đầu năm
              1973. Theo trung tướng Phạm Tuân, nếu so kè kỹ thuật với phi công
              Mỹ có thể còn nhiều vấn đề, nhưng điều vượt lên của bộ đội Việt
              Nam là cách đánh sáng tạo cùng bản lĩnh đánh thắng.
            </p>
            <p className='Normal text-justify'>
              Chiến dịch đáp trả cuộc tập kích đường không cuối năm 1972 là trận
              đấu trí, đọ sức của cả hai phía. Những máy bay ném bom đáng gờm
              nhất thế giới đã gặp phải mạng lưới phòng không miền Bắc được tổ
              chức nhiều tầng, nhiều lớp, tỏa khắp thành thị đến nông thôn, dùng
              từ vũ khí thô sơ đến hiện đại. Như lời một phi công Mỹ từng tham
              gia chiến dịch: "Tên lửa phóng lên nhiều đến nỗi bạn cảm giác có
              thể đi trên mũi những quả đạn đó. Pháo phòng không sáng đến mức có
              thể đọc báo trong buồng lái".
            </p>
            <p className='Normal text-justify'>
              Những sáng tạo trong cách đánh B-52, theo trung tướng Nguyễn Văn
              Phiệt, là nhiều năm tích lũy kinh nghiệm trong gian khổ và máu
              xương của bộ đội phòng không, với sự giúp sức của chuyên gia Liên
              Xô.
            </p>
          </div>
        </div>
      </section>

      <div
        className='horizontal-scroll-section horizontal-scroll-section--init'
        id='section-scroll-map-report'
        style={{
          height: '2445px',
        }}
      >
        <div
          ref={refScene}
          className={cn(
            'scene',
            isInViewHorStart && 'scene--active',
            isInViewHorEnd && 'scene--ended'
          )}
        >
          <div
            className='horizontal-scroll-section__content-wrapper wrapper'
            style={{
              transform: `translate3d(-${
                (((refSceneImage?.current?.getBoundingClientRect().width || 0) *
                  3 -
                  window.innerWidth) *
                  scrollPercent) /
                100
              }px, 0px, 0px)`,
            }}
          >
            <div
              ref={refSceneImage}
              className='horizontal-scroll-section__content-section'
            >
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img-hl1-mobile.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
            <div className='horizontal-scroll-section__content-section'>
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img-hl2-mobile.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
            <div className='horizontal-scroll-section__content-section'>
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img-hl3-mobile.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
          </div>
        </div>
        <div
          ref={refHorStart}
          style={{
            top: `${refScene?.current?.clientHeight || 0}px`,
            height: `${2445 - (refScene?.current?.clientHeight || 0)}px`,
          }}
          className={cn('absolute')}
        ></div>
      </div>

      <section
        ref={refHorEnd}
        className='section clearfix section-text-content section-text-atchubai'
      >
        <div className='container container-small'>
          <div
            className={cn(
              'title-block-text aos-init',
              isInViewHorEnd && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            PHỐ KHÂM THIÊN - ĐÊM B-52
          </div>
          <div
            className={cn('wrap-txt aos-init', isInViewHorEnd && 'aos-animate')}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p className='Normal text-justify'>
              Thực hiện Linebacker II, ngoài khu quân sự ở Hà Nội, Mỹ còn cho
              B-52 rải thảm xuống các bệnh viện, khu dân cư. Phố Khâm Thiên ngày
              26/12 chìm trong biển lửa và sau một đêm trở nên hoang tàn với
              hàng loạt hố bom.
            </p>{' '}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarArts;
