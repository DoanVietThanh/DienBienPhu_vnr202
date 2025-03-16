import '@/css/crawl.css';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FaceToFace() {
  const refTitleAndDescription = useRef(null);
  const titleAndDescriptionInView = useInView(refTitleAndDescription);

  const refFaceToFace = useRef(null);
  const faceToFaceInView = useInView(refFaceToFace);

  const ref18 = useRef(null);
  const inView18 = useInView(ref18);

  const ref22 = useRef(null);
  const inView22 = useInView(ref22);

  const ref23 = useRef(null);
  const inView23 = useInView(ref23);

  const ref24 = useRef(null);
  const inView24 = useInView(ref24);

  const ref26 = useRef(null);
  const inView26 = useInView(ref26);

  const ref26_1 = useRef(null);
  const inView26_1 = useInView(ref26_1);

  const ref27 = useRef(null);
  const inView27 = useInView(ref27);

  const ref28 = useRef(null);
  const inView28 = useInView(ref28);

  const ref29 = useRef(null);
  const inView29 = useInView(ref29);
  const ref29_1 = useRef(null);
  const inView29_1 = useInView(ref29_1);

  return (
    <main ref={refTitleAndDescription} className='main-interactive'>
      <section className='section clearfix section-text-content section-text-doimat'>
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
            ĐỐI MẶT
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
              Từ sáng đến chiều 18/12, máy bay Mỹ đột ngột giảm tần suất hoạt
              động. Toàn bộ màn hình radar cảnh giới "trong vắt". Những dấu hiệu
              không bình thường báo hiệu một trận đánh lớn.
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Xế chiều, Bộ Tổng tham mưu chỉ thị cho kíp trực ban tác chiến phải
              ở lại hầm T1. "Đồng chí Lê Đức Thọ từ Paris về. Máy bay vừa hạ
              cánh. Hội nghị bế tắc. Ta phải cảnh giác cao độ. Nó đánh đấy",
              mệnh lệnh được đưa ra.
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              16h - gần bốn tiếng trước khi B-52 ném bom Hà Nội, tin tình báo
              báo về "nhiều tốp B-52 đã cất cánh từ sân bay trên đảo Guam". Toàn
              Quân chủng Phòng không Không quân sẵn sàng chiến đấu. "Cùng thời
              điểm, Nixon gửi công hàm như một tối hậu thư, hạn trong 72 giờ ta
              phải trở lại bàn đàm phán theo những điều kiện của Mỹ", Đại tướng
              Võ Nguyên Giáp kể lại trong hồi ký.
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Gần 19h, trạm radar của Trung đoàn 291 phía tây Nghệ An là điểm
              đầu tiên bắt được tín hiệu B-52, phát cảnh báo về trung tâm tác
              chiến "B-52 đang hướng Hà Nội bay tới".
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Thiếu tướng Nguyễn Văn Ninh, Trợ lý tên lửa Cục Tác chiến khi ấy,
              kể lại ông vã mồ hôi lạnh, "nhiều năm đánh Pháp, đánh Mỹ cộng lại
              chưa bao giờ hai vai nặng trĩu như lúc này". Báo cáo Bộ Tổng tham
              mưu, ông xin kéo còi báo động sớm hơn quy định 35 phút. Tín hiệu
              báo động phòng không toàn miền Bắc rú vang, nhân dân gấp rút sơ
              tán xuống hầm.
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Dưới chân hoàng thành Thăng Long, điện thoại liên lạc giữa hầm D67
              từ Tổng hành dinh và Hầm chỉ huy tác chiến T1 liên tục réo. Trong
              hầm T1, ai nấy mồ hôi đẫm áo dù là đêm đông.
            </p>
            <p
              className='Normal text-justify'
              data-ninja-font='arial_regular_normal_qxjpy'
            >
              Về phía Mỹ, để tập kích Hà Nội, B-52 xuất phát từ Utapao theo
              hướng tây bắc và Guam theo hướng tây nam. Máy bay chiến thuật từ 6
              tàu sân bay trên vịnh Bắc Bộ và đất Thái Lan. Trọng điểm bắn phá
              là Hà Nội, Hải Phòng. Một số ngày, vùng ngoại vi như Thái Nguyên,
              Bắc Giang, Lạng Sơn cũng bị đội bom.
            </p>{' '}
          </div>
        </div>
      </section>

      <section
        ref={refFaceToFace}
        className={cn(
          'section clearfix section-scroll-content scroll-img relative section-scroll-timeline aos-init aos-animate',
          faceToFaceInView && 'aos-animate'
        )}
        id='section_4'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='sticky-top !sticky'>
          <div
            className={cn(
              'item-fix-scroll absolute w-100 h-100 flex',
              inView18 && 'showed'
            )}
            id='background_0'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-18-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              inView22 && 'showed'
            )}
            id='background_1'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-22-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              inView23 && 'showed'
            )}
            id='background_2'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-23-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              inView24 && 'showed'
            )}
            id='background_3'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-24-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              (inView26 || inView26_1) && 'showed'
            )}
            id='background_4'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-26-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              inView27 && 'showed'
            )}
            id='background_5'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-27-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              inView28 && 'showed'
            )}
            id='background_6'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-28-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              (inView29 || inView29_1) && 'showed'
            )}
            id='background_7'
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
                        22/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        23/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        24/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        26/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        27/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        28/12
                      </a>
                      <a
                        href='javascript:void(0);'
                        className='active tab-item'
                        data-ninja-font='arial_bold_normal_qxjpy'
                      >
                        29/12
                      </a>
                    </div>
                    <div className='img-show'>
                      <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-29-12.png' />
                      <p
                        className='note-source-map'
                        data-ninja-font='arial_regular_italic_qxjpy'
                      >
                        Nguồn: Linebacker II: A View from the Rock
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
              <div className='box-text-on' data-id='0'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Mỹ huy động B-52, máy bay chiến thuật, chia ba đợt ném bom 135
                  điểm tại Hà Nội. Mục tiêu đầu tiên là sân bay Hòa Lạc, Nội
                  Bài, Gia Lâm, Kép (Bắc Giang), Yên Bái nhằm chặn đường MiG-21
                  cất cánh, tiếp đến là Đài Tiếng nói Việt Nam, đường sắt Yên
                  Viên, kho hàng ở Đông Anh... Đêm 18 rạng sáng 19/12, 3 chiếc
                  B-52 bị tên lửa miền Bắc bắn hạ.
                </p>
              </div>
            </div>
            <div ref={ref22} className='item-text-scroll'>
              <div className='box-text-on' data-id='1'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  B-52 đánh phá Hải Phòng ban đêm. Cường độ xuất kích giảm so
                  với ngày đầu. Song Mỹ mất thêm 3 B-52, 2 chiếc trong đó bị bộ
                  đội tên lửa Hải Phòng bắn hạ, chiếc còn lại rơi dưới đạn pháo
                  100 mm của Trung đoàn cao xạ bảo vệ Thái Nguyên.
                </p>
              </div>
            </div>
            <div ref={ref23} className='item-text-scroll'>
              <div className='box-text-on' data-id='2'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Ban ngày, máy bay chiến thuật đánh phá ngoại thành Hà Nội, ban
                  đêm B-52 ném bom Đồng Mỏ (Lạng Sơn), Bắc Giang. F-4, F-111
                  tiếp tục không kích sân bay Nội Bài, Yên Bái, Kiến An (Hải
                  Phòng).
                </p>
              </div>
            </div>
            <div ref={ref24} className='item-text-scroll'>
              <div className='box-text-on' data-id='3'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Đêm Giáng sinh, B-52 chủ yếu từ căn cứ Utapao theo hướng tây
                  bắc ném bom Thái Nguyên và Kép. 24h, Mỹ tuyên bố tạm ngưng ném
                  bom.
                </p>
              </div>
            </div>
            <div ref={ref26} className='item-text-scroll'>
              <div className='box-text-on' data-id='4'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Không kích tiếp diễn, Mỹ quyết tâm hủy diệt Hà Nội khi cho
                  B-52 xuất kích tới 105 lần, máy bay chiến thuật 110 lần. Máy
                  bay ném bom tập kích từ ba hướng tây bắc, đông nam và đông
                  bắc. Các tốp "B-52 giả" tăng nghi binh, đánh lừa tên lửa
                  SAM-2, MiG-21.
                </p>
              </div>
            </div>
            <div ref={ref26_1} className='item-text-scroll'>
              <div className='box-text-on' data-id='4'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Mỗi đợt ném bom chia nhiều khu vực để phân tán hỏa lực của tên
                  lửa. Mục tiêu đánh phá tăng lên 120 điểm, tập trung khu đông
                  dân cư như Khâm Thiên, Tương Mai, Bệnh viện Bạch Mai...
                </p>
              </div>
            </div>
            <div ref={ref27} className='item-text-scroll'>
              <div className='box-text-on' data-id='5'>
                <p
                  className='Normal text-justify'
                  data-ninja-font='arial_regular_normal_qxjpy'
                >
                  Từ sáng sớm, các loại máy bay chiến thuật áp chế dữ dội trận
                  địa tên lửa ở Thanh Oai, Gia Lâm (Hà Nội) và Hải Phòng. Số lần
                  B-52 xuất kích giảm còn 60 và ném bom một đợt vào giữa đêm.
                  Lần đầu tiên, B-52 bị bắn hạ bởi tiêm kích MiG-21 do Phạm Tuân
                  lái.
                </p>
              </div>
            </div>
            <div ref={ref28} className='item-text-scroll'>
              <div className='box-text-on' data-id='6'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Mất 31 B-52 sau 10 đêm, Mỹ chuyển hướng đánh phá ngoại vi Hà
                  Nội, Đồng Mỏ (Lạng Sơn). B-52 huy động trong ba đêm cuối chiến
                  dịch giảm trung bình 60 lần xuất kích mỗi đêm.
                </p>
              </div>
            </div>
            <div ref={ref29} className='item-text-scroll'>
              <div className='box-text-on' data-id='7'>
                <p
                  className='Normal text-justify'
                  data-ninja-font='arial_regular_normal_qxjpy'
                >
                  Không tập trung ở tọa độ lửa Hà Nội, B-52 chủ yếu ném bom các
                  tỉnh vòng ngoài như Thái Nguyên, Lạng Sơn, Vĩnh Phú, ngoại vi
                  Hải Phòng, Quảng Ninh.
                </p>
              </div>
            </div>
            <div ref={ref29_1} className='item-text-scroll'>
              <div className='box-text-on' data-id='7'>
                <p
                  data-ninja-font='arial_regular_normal_qxjpy'
                  className='text-justify'
                >
                  Đêm cuối cùng tập kích, Mỹ mất thêm một B-52 và một F-4. Chiếc
                  F-4 cuối cùng rơi trên bầu trời miền Bắc do phi công Bùi Doãn
                  Độ bắn hạ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FaceToFace;
