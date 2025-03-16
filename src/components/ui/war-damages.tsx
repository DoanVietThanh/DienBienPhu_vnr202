import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const WarDamages = () => {
  const refHorStart = useRef<HTMLDivElement>(null);
  const isInViewHorStart = useInView(refHorStart);

  const refHorEnd = useRef(null);
  const isInViewHorEnd = useInView(refHorEnd);

  const refScene = useRef<HTMLDivElement>(null);

  const refSceneImage = useRef<HTMLDivElement>(null);

  const [scrollPercent, setScrollPercent] = useState(0);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

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
      <div
        className='horizontal-scroll-section horizontal-scroll-section--init'
        id='section-scroll-b52'
        style={{
          height: '6368px',
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
                  4 -
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
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img1-hl-b52.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
            <div className='horizontal-scroll-section__content-section'>
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img2-hl-b52.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
            <div className='horizontal-scroll-section__content-section'>
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img3-hl-b52.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
            <div className='horizontal-scroll-section__content-section'>
              <img
                src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/img4-hl-b52.jpg'
                className='horizontal-scroll-section__image-one'
              />
            </div>
          </div>
        </div>
        <div
          ref={refHorStart}
          style={{
            top: `${refScene?.current?.clientHeight || 0}px`,
            height: `${6368 - (refScene?.current?.clientHeight || 0)}px`,
          }}
          className={cn('absolute')}
        ></div>
      </div>

      <section ref={refHorEnd} className='section clearfix section-result'>
        <div className='container'>
          <div ref={ref1}>
            <div
              className={cn(
                'title-block-text aos-init',
                isInView1 && 'aos-animate'
              )}
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              THIỆT HẠI
            </div>
            <div
              className={cn('wrap-txt aos-init', isInView1 && 'aos-animate')}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <p className='Normal text-justify'>
                "Liền trong 12 ngày đêm, Mỹ tiến hành cuộc ném bom rải thảm mà
                sự tàn phá đã lớn hơn cả sự tàn phá trong cuộc ném bom suốt từ
                đầu chiến tranh Việt Nam tới giờ. Cuộc ném bom với mức độ tàn
                phá có tính hủy diệt", Weldon A.Brown, giáo sư sử học Mỹ, nhận
                định.
              </p>
              <p className='Normal text-justify'>
                Các tỉnh miền Bắc đã phải hứng chịu 36.000 tấn bom B52, vượt
                tổng lượng bom ném xuống toàn miền thời kỳ 1969-1971. Riêng Hà
                Nội chịu 10.000 tấn. "Bình quân mỗi km2 Hà Nội hứng 33,33 tấn
                bom, trong khi Thế chiến II Đức 5,4 tấn và Nhật 0,43 tấn", thống
                kê của Bảo tàng chiến thắng B52. Hà Nội là đích đến của 66,5%
                lần máy bay B-52 cất cánh (441 trên tổng số 663 lần).
              </p>
              <p className='Normal text-justify'>
                Chiến dịch phòng không bảo vệ Hà Nội - Hải Phòng năm 1972 được
                ví như "Điện Biên Phủ trên không". "Chiến dịch đầu tiên trên thế
                giới bắn rơi nhiều máy bay B-52, giáng cho không quân Mỹ đòn
                thất bại nặng nề nhất trong lịch sử, đánh bại âm mưu giành thế
                mạnh trên bàn đàm phán, góp phần buộc Mỹ ký Hiệp định Paris về
                chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam", thượng tướng
                Lê Huy Vịnh, Thứ trưởng Quốc phòng, nhấn mạnh tại hội thảo khoa
                học ngày 9/12/2022.
              </p>
              <p className='Normal text-justify'>
                Với trung tướng Nguyễn Văn Phiệt, 84 tuổi, 12 ngày đêm cuối năm
                1972 "là cuộc chiến đấu không cân sức, khốc liệt nhất trong đời
                quân ngũ".
              </p>{' '}
            </div>
          </div>
          <div
            ref={ref2}
            className={cn(
              'box-res box-res-usa flexbox aos-init',
              isInView2 && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img
              className='flag'
              src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_My.svg'
            />
            <img
              className='note-banha'
              src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/note-banha.png'
            />
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/maybaybiha.svg' />
              <span className='number'>34</span>
              <span className='txt'>B-52</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/F4.svg' />
              <span className='number'>21</span>
              <span className='txt'>F-4</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/A7.svg' />
              <span className='number'>12</span>
              <span className='txt'>A-7</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/F111.svg' />
              <span className='number'>5</span>
              <span className='txt'>F-111</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/A-6A.svg' />
              <span className='number'>4</span>
              <span className='txt'>A-6A</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/RA-5C.svg' />
              <span className='number'>2</span>
              <span className='txt'>RA-5C</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/F-105.svg' />
              <span className='number'>1</span>
              <span className='txt'>F-105</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/HH-53.svg' />
              <span className='number'>1</span>
              <span className='txt'>HH-53</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/147-SC.svg' />
              <span className='number'>1</span>
              <span className='txt'>147-SC</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Chet.svg' />
              <span className='number'>43</span>
              <span className='txt'>
                Phi công
                <br />
                thiệt mạng
              </span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Tubinh.svg' />
              <span className='number'>44</span>
              <span className='txt'>
                Phi công
                <br />
                bị bắt
              </span>
            </div>
          </div>
          <p className='note-source-res'></p>
          <div
            ref={ref3}
            className={cn(
              'box-res box-res-vn flexbox aos-init',
              isInView3 && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img
              className='flag'
              src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_VN.svg'
            />
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/xa-phuong.svg' />
              <span className='number'>71</span>
              <span className='txt'>xã phường bị đánh phá</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/nha-bi-pha.svg' />
              <span className='number'>8.000</span>
              <span className='txt'>nhà bị phá hủy</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/nha-hu-hong.svg' />
              <span className='number'>9.000</span>
              <span className='txt'>nhà hư hỏng</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Chet.svg' />
              <span className='number'>2.380</span>
              <span className='txt'>người chết</span>
            </div>
            <div className='item-hq'>
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/bithuong.svg' />
              <span className='number'>1.355</span>
              <span className='txt'>người bị thương</span>
            </div>
          </div>
          <p className='note-source-res'>
            Nguồn: Bảo tàng chiến thắng B52, Ban Tuyên giáo Trung ương, Sách Đối
            mặt với B52, Chi cục Văn thư - Lưu trữ Hà Nội
          </p>
        </div>
      </section>
    </main>
  );
};

export default WarDamages;
