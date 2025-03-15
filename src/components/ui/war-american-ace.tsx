import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const WarAmericanAce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const refAmerica1 = useRef(null);
  const isAmerica1InView = useInView(refAmerica1);

  const refAmerica2 = useRef(null);
  const isAmerica2InView = useInView(refAmerica2);

  const refAmerica3 = useRef(null);
  const isAmerica3InView = useInView(refAmerica3);

  const refAmerica4 = useRef(null);
  const isAmerica4InView = useInView(refAmerica4);

  useEffect(() => {
    console.log({ isAmerica4InView });
  }, [isAmerica4InView]);

  return (
    <main className='main-interactive'>
      <section
        ref={ref}
        className='section clearfix section-text-content section-text-atchubai'
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
            NHỮNG ÁT CHỦ BÀI
          </div>
          <div
            className={cn('wrap-txt aos-init', isInView && 'aos-animate')}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p className='Normal'>
              Lầu Năm Góc huy động gần một nửa số B-52 (193/400 chiếc), cất cánh
              663 lần; hơn 1/3 số máy bay chiến thuật (khoảng 1.200), cất cánh
              gần 4.000 lần, 6 trên tổng số 24 tàu sân bay, 66 tàu chiến của Hạm
              đội 7 ở vịnh Bắc Bộ. Đây là cuộc tập kích đường không lớn nhất
              trong lịch sử chiến tranh.
            </p>
            <p className='Normal'>
              B-52 ném bom theo đội hình, mỗi tốp 3 chiếc, mỗi đợt ít nhất 6
              chiếc và nhiều nhất 75 chiếc, theo tài liệu chỉ huy tác chiến phía
              Việt Nam năm 1972. Hộ tống dàn B-52 là hàng chục chiến đấu cơ làm
              nhiệm vụ săn lùng MiG-21, thả dải nhiễu và chế áp trận địa tên
              lửa... Các trận tập kích dùng B-52 ném bom ban đêm, máy bay chiến
              thuật đánh bồi dai dẳng ban ngày, máy phát nhiễu điện tử hiện đại
              hỗ trợ.
            </p>{' '}
          </div>
        </div>
      </section>

      <section className='section clearfix section-Usa'>
        <div className='container'>
          <div ref={refAmerica1}>
            <p
              className={cn(
                'flag aos-init ',
                isAmerica1InView && 'aos-animate'
              )}
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_My.svg' />
            </p>
            <p
              className={cn(
                'sub-title aos-init ',
                isAmerica1InView && 'aos-animate'
              )}
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              Máy bay ném bom chiến lược <strong>B-52</strong>
            </p>
            <div
              className={cn(
                'img-b52 flexbox aos-init',
                isAmerica1InView && 'aos-animate'
              )}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/B52_My.png' />
            </div>
          </div>

          <div ref={refAmerica2}>
            <div
              className={cn(
                'img-info mt35 flexbox aos-init',
                isAmerica2InView && 'aos-animate'
              )}
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Info_B52.png' />
            </div>
            <div
              className={cn(
                'img-list mt20 flexbox aos-init',
                isAmerica2InView && 'aos-animate'
              )}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/List_mbMy.png' />
            </div>
          </div>

          <div ref={refAmerica3} className='box-doihinhbay'>
            <p
              className={cn(
                'sub-title aos-init',
                isAmerica3InView && 'aos-animate'
              )}
              data-aos='fade-down'
              data-aos-duration='1000'
            >
              <strong>Đội hình bay</strong>
            </p>
            <div
              className={cn(
                'img-doihinhbay flexbox aos-init',
                isAmerica3InView && 'aos-animate'
              )}
              data-aos='fade-left'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/doihinhbay_My.png' />
            </div>
          </div>

          <div
            ref={refAmerica4}
            className={cn(
              'box-chihuy aos-init',
              isAmerica4InView && 'aos-animate'
            )}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <p className='sub-title'>
              <strong>Chỉ huy</strong>
            </p>
            <div className='list-chihuy flexbox'>
              <Dialog>
                <DialogTrigger asChild>
                  <div className='item-ch hover:scale-110 transition cursor-pointer'>
                    <div className='thumb-ch'>
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch1-usa-4574-1671694365.png' />
                    </div>
                    <span className='name-ch'>
                      Đại tướng
                      <br />
                      <strong>John W. Vogt</strong>
                      <br />
                      Chỉ huy Tập đoàn không quân số 7{' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>John W. Vogt</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Tướng John William Vogt Jr. (18 tháng 3 năm 1920 – 16
                          tháng 4 năm 2010) là một phi công lái máy bay át chủ
                          bài của Không quân Lục quân Hoa Kỳ trong Thế chiến II
                          , sau này đạt được cấp bậc tướng trong Không quân Hoa
                          Kỳ trong thời kỳ Chiến tranh Lạnh .
                        </p>

                        <p className='text-justify'>
                          Ông là chỉ huy Không quân Đồng minh Trung Âu và là
                          tổng tư lệnh Không quân Hoa Kỳ tại Châu Âu tại Căn cứ
                          Không quân Ramstein , Đức vào những năm 1970. Vogt
                          sinh ngày 18 tháng 3 năm 1920 tại Elizabeth, New
                          Jersey , nơi ông tốt nghiệp Trường trung học Thomas
                          Jefferson năm 1938. Ông nhận bằng Cử nhân Nghệ thuật
                          từ Đại học Yale và bằng Thạc sĩ Nghệ thuật từ Đại học
                          Columbia .
                        </p>
                        <p className='text-justify'>
                          Ông đảm nhiệm chức vụ tư lệnh Không đoàn Không quân số
                          7 (PACAF) và phó tư lệnh Bộ Tư lệnh Hỗ trợ Quân sự Hoa
                          Kỳ tại Việt Nam vào ngày 10 tháng 4 năm 1972, thay thế
                          Tướng John D. Lavelle, người đã bị buộc phải từ chức.
                          Vogt chịu trách nhiệm về các hoạt động không quân ở
                          Đông Nam Á trong mười tám tháng cuối cùng của hoạt
                          động chiến đấu của Hoa Kỳ. Với lệnh ngừng bắn ở Việt
                          Nam, ông trở thành chỉ huy Nhóm Hoạt động Hỗ trợ Hoa
                          Kỳ tại Thái Lan, đơn vị tiến hành mọi hoạt động không
                          quân của Hoa Kỳ tại Lào và Campuchia cho đến khi sự
                          tham gia chiến đấu của Hoa Kỳ chấm dứt vào tháng 8 năm
                          1973. Ông là sĩ quan duy nhất từng là tổng tư lệnh của
                          cả Không quân Hoa Kỳ tại Thái Bình Dương và Châu Âu.
                        </p>
                        <p className='text-justify'>
                          Ông nghỉ hưu khỏi Không quân vào ngày 31 tháng 8 năm
                          1975. Ông mất ngày 16 tháng 4 năm 2010. Ông được chôn
                          cất tại Nghĩa trang Quốc gia Arlington ở Khu 59, Lô
                          4224.
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <div className='item-ch hover:scale-110 transition cursor-pointer'>
                    <div className='thumb-ch'>
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch2-usa-9302-1671694365.png' />
                    </div>
                    <span className='name-ch'>
                      Đại tướng
                      <br />
                      <strong>John C. Meyer</strong>
                      <br />
                      Bộ tư lệnh Không quân chiến lược Mỹ (SAC){' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>John C. Meyer</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Tướng John Charles Meyer (3 tháng 4 năm 1919 – 2 tháng
                          12 năm 1975) là một phi công xuất sắc của Mỹ trong Thế
                          chiến II , sau này là tổng tư lệnh Bộ tư lệnh Không
                          quân Chiến lược (SAC) và giám đốc Ban tham mưu Lập kế
                          hoạch Mục tiêu Chiến lược Chung tại Căn cứ Không quân
                          Offutt , Nebraska . SAC là lực lượng răn đe hạt nhân
                          chính của Hoa Kỳ với máy bay ném bom, máy bay tiếp dầu
                          và máy bay trinh sát, cùng tên lửa đạn đạo xuyên lục
                          địa . Ban tham mưu Lập kế hoạch Mục tiêu Chiến lược
                          Chung đã phối hợp các kế hoạch chiến tranh hạt nhân
                          của quốc gia và xây dựng Kế hoạch Hoạt động Tích hợp
                          Đơn lẻ . Meyer sinh ra tại Brooklyn , New York, vào
                          ngày 3 tháng 4 năm 1919.
                        </p>
                        <p className='text-justify'>
                          Ông theo học tại các trường học ở New York và rời
                          Dartmouth để trở thành Học viên Hàng không vào năm
                          1939. Sau Thế chiến thứ II, ông tốt nghiệp Cao đẳng
                          Dartmouth với bằng Cử nhân Nghệ thuật chuyên ngành địa
                          lý chính trị. Meyer qua đời vì một cơn đau tim vào
                          ngày 2 tháng 12 năm 1975 và được chôn cất theo nghi lễ
                          quân đội đầy đủ tại Nghĩa trang Quốc gia Arlington .
                          Năm 1988, Meyer được ghi danh vào Viện danh vọng hàng
                          không quốc gia .
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <div className='item-ch hover:scale-110 transition cursor-pointer'>
                    <div className='thumb-ch'>
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch3-usa-7677-1671694365.png' />
                    </div>
                    <span className='name-ch'>
                      Phó đô đốc
                      <br />
                      <strong>Damon W. Cooper</strong>
                      <br />
                      Chỉ huy Nhóm tác chiến số 77{' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>John C. Meyer</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Damon Warren " Hutch " Cooper (27 tháng 4 năm 1919 –
                          19 tháng 11 năm 1985) là Phó đô đốc Hải quân Hoa Kỳ đã
                          phục vụ trong các cuộc xung đột từ những năm 1940 đến
                          những năm 1970, bao gồm cả chức vụ Chỉ huy Lực lượng
                          Đặc nhiệm 77 trong giai đoạn cuối của Chiến tranh Việt
                          Nam .
                        </p>
                        <p className='text-justify'>
                          Ông sinh ra tại Elizabethtown, Kentucky vào ngày 27
                          tháng 4 năm 1919. Ông theo học tại Cao đẳng Sư phạm
                          Tiểu bang Western Kentucky ở Bowling Green, Kentucky
                          Vào ngày 12 tháng 4 năm 1973, ông đảm nhiệm chức vụ
                          Trưởng phòng Dự bị Hải quân tại New Orleans ,
                          Louisiana, đồng thời đảm nhiệm thêm chức vụ Giám đốc
                          Dự bị Hải quân trong ban tham mưu của Trưởng phòng Tác
                          chiến Hải quân. Hiệp hội Tailhook đã vinh danh ông là
                          Người móc đuôi của Hải quân Hoa Kỳ trong năm 1973. Ông
                          nghỉ hưu khỏi Hải quân vào năm 1974.
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <p className='mt-8 caption-img'>
              Nguồn: To Hanoi and Back: The U.S. Air Force and North Vietnam,
              1966–1973
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarAmericanAce;
