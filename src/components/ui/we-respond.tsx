import '@/css/crawl.css';
import { cn } from '@/lib/utils';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

function WeResponse() {
  const refTitleAndDescription = useRef(null);
  const titleAndDescriptionInView = useInView(refTitleAndDescription);

  const ref18 = useRef(null);
  const inView18 = useInView(ref18);
  const ref18_1 = useRef(null);
  const inView18_1 = useInView(ref18_1);

  const ref20 = useRef(null);
  const inView20 = useInView(ref20);
  const ref20_1 = useRef(null);
  const inView20_1 = useInView(ref20_1);

  const ref26 = useRef(null);
  const inView26 = useInView(ref26);
  const ref26_1 = useRef(null);
  const inView26_1 = useInView(ref26_1);
  const ref26_2 = useRef(null);
  const inView26_2 = useInView(ref26_2);

  return (
    <main ref={refTitleAndDescription} className='main-interactive'>
      <section className='section clearfix section-text-content section-text-daptra'>
        <div className='container container-small'>
          <div
            className={cn(
              'title-block-text aos-init',
              titleAndDescriptionInView && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-ninja-font='icielbcdronerangerserif_regular_normal_aunpz'
          >
            ĐÁP TRẢ
          </div>
          <div
            className={cn(
              'wrap-txt aos-init',
              titleAndDescriptionInView && 'aos-animate'
            )}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Bộ tư lệnh Quân chủng Phòng không Không quân lập trận địa chặn
              đánh theo hai hướng tây bắc, tây nam và phía nam Hà Nội. Các trận
              địa tên lửa, pháo cao xạ cũng được bố trí khắp miền Bắc, trọng tâm
              là Hà Nội, Hải Phòng.
            </p>{' '}
          </div>
        </div>
      </section>

      <section
        className='section clearfix section-scroll-content scroll-img relative section-scroll-timeline section-scroll-timeline-daptra aos-init aos-animate'
        id='section_5'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='sticky-top'>
          <div
            className={cn(
              'item-fix-scroll absolute w-100 h-100 flex',
              (inView18 || inView18_1) && 'showed'
            )}
            id='background_20'
          >
            <div className='w-100 h-100'>
              <div className='w-100 h-100 flex flex-wrap justify-center items-center flex-column absolute'>
                <div className='w-100'>
                  <div className='container'>
                    <div className='timeline-tab mb25 flexbox'>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        18/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        20/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-18-12-VN.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Tư liệu Bảo tàng chiến thắng B-52, Hầm chỉ huy
                        tác chiến T1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'item-fix-scroll absolute w-100 h-100 flex hidden',
              (inView20 || inView20_1) && 'showed'
            )}
            id='background_21'
          >
            <div className='w-100 h-100'>
              <div className='w-100 h-100 flex flex-wrap justify-center items-center flex-column absolute'>
                <div className='w-100'>
                  <div className='container'>
                    <div className='timeline-tab mb25 flexbox'>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        18/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        20/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-20-12-VN.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Tư liệu Bảo tàng chiến thắng B-52, Hầm chỉ huy
                        tác chiến T1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'item-fix-scroll absolute w-100 h-100 flex hidden',
              (inView26 || inView26_1 || inView26_2) && 'showed'
            )}
            id='background_22'
          >
            <div className='w-100 h-100'>
              <div className='w-100 h-100 flex flex-wrap justify-center items-center flex-column absolute'>
                <div className='w-100'>
                  <div className='container'>
                    <div className='timeline-tab mb25 flexbox'>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        18/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        20/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-26-12-VN.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Tư liệu Bảo tàng chiến thắng B-52, Hầm chỉ huy
                        tác chiến T1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wrap-text relative'>
          <div className='container'>
            <div ref={ref18} className='item-text-scroll'>
              <div className='box-text-on' data-id='20'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  19h44, Tiểu đoàn 78 khai hỏa, nhằm tốp bay vào từ hướng tây
                  bắc. Radar, tên lửa khử nhiễu phát sóng bắt "pháo đài bay". 29
                  phút sau, Tiểu đoàn 59 bảo vệ mặt bắc bắt đúng dải nhiễu,
                  phóng liên tiếp hai quả SAM-2 trúng mục tiêu.
                </p>
              </div>
            </div>
            <div ref={ref18_1} className='item-text-scroll'>
              <div className='box-text-on' data-id='20'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Chiếc B-52 đầu tiên rơi xuống cánh đồng Chuôm (Đông Anh), cách
                  trận địa tên lửa 10 km. Sự kiện giải tỏa tâm lý, củng cố niềm
                  tin cho quân dân miền Bắc - "siêu pháo đài bay" cũng bị hạ như
                  bất kỳ loại máy bay nào khác.
                </p>
              </div>
            </div>
            <div ref={ref20} className='item-text-scroll'>
              <div className='box-text-on' data-id='21'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  4h46, B-52 ném bom Hà Nội đợt thứ hai trong ngày. 6 bệ phóng
                  tên lửa Tiểu đoàn 57 chỉ còn 3 quả đạn. Tiểu đoàn trưởng
                  Nguyễn Văn Phiệt quyết định đánh mổ cò, dùng quả một, dù theo
                  giáo trình phải 2-3 quả.
                </p>
              </div>
            </div>
            <div ref={ref20_1} className='item-text-scroll'>
              <div className='box-text-on' data-id='21'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  5h09, B-52 vào tầm ngắm. Ông Phiệt lệnh xạ kích. Quả đầu không
                  rời bệ, quả thứ hai phóng đi. Kíp trắc thủ bám chặt tín hiệu
                  B-52, điều khiển tên lửa bay trúng đích. Đạn nổ. Mất nhiễu.
                  Mất mục tiêu. "Siêu pháo đài bay" bùng lên như đuốc. 10 phút
                  sau, quả đạn cuối cùng hạ tiếp một B-52.
                </p>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Bộ đội tên lửa Hà Nội phóng tổng cộng 35 đạn, bắn rơi 7 B-52,
                  bắt 12 phi công. Đây cũng là đêm đầu tiên không quân xuất kích
                  đánh máy bay chiến thuật, phá đội hình gây nhiễu để tên lửa
                  tìm diệt B-52.
                </p>
              </div>
            </div>
            <div ref={ref26} className='item-text-scroll'>
              <div className='box-text-on' data-id='22'>
                <p
                  className='Normal text-justify'
                  data-ninja-font='arial_regular_normal_qxjpy'
                >
                  Tận dụng một ngày Mỹ ngừng ném bom "nghỉ Giáng sinh", quân dân
                  miền Bắc "vá" lại lưới lửa, chuẩn bị đợt phòng thủ mới. Tên
                  lửa bảo vệ Hà Nội tăng từ 9 lên 13 tiểu đoàn. Mỗi trận địa tên
                  lửa có một tiểu đoàn hoặc đại đội pháo cao xạ bảo vệ hỏa lực
                  đánh B-52.
                </p>
              </div>
            </div>
            <div ref={ref26_1} className='item-text-scroll'>
              <div className='box-text-on' data-id='22'>
                <p
                  className='Normal text-justify'
                  data-ninja-font='arial_regular_normal_qxjpy'
                >
                  Đêm xuống, nhiễu kim loại trên màn hình radar phủ trắng trời
                  hàng chục cây số - báo hiệu một trận đánh lớn khi Mỹ huy động
                  số lần B-52 lẫn máy bay chiến thuật đánh phá cao nhất toàn
                  chiến dịch.
                </p>
                <p
                  className='Normal text-justify'
                  data-ninja-font='arial_regular_normal_qxjpy'
                >
                  22h30, trên hướng tây bắc, bệ phóng tên lửa dọc tả hữu ngạn
                  sông Hồng khai hỏa. Chín phút sau, Tiểu đoàn 78 bắn hạ chiếc
                  đầu tiên. Hướng đông nam, tên lửa bắn hàng chục phát, hạ một
                  B-52 rơi xuống hàng ăn trên phố Tương Mai.
                </p>
              </div>
            </div>
            <div ref={ref26_2} className='item-text-scroll'>
              <div className='box-text-on' data-id='22'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Phía đông bắc, Tiểu đoàn 93 diệt một chiếc và Tiểu đoàn 79
                  (Yên Nghĩa) bắn cháy một chiếc, lao xuống đất Sơn La. Pháo cao
                  xạ yểm hộ, đánh dạt F-111 để tên lửa tìm diệt mục tiêu. Hơn
                  một tiếng đối đầu, toàn miền Bắc hạ 8 B-52, riêng Hà Nội 4
                  chiếc, cao nhất toàn chiến dịch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WeResponse;
