import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const WarVietnameseAce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  return (
    <main className='main-interactive'>
      <section className='section clearfix section-Vn'>
        <div className='container'>
          <div ref={ref}>
            <p
              className={cn('flag aos-init', isInView && 'aos-animate')}
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_VN.svg' />
            </p>
            <div
              className={cn('wrap-txt aos-init', isInView && 'aos-animate')}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <p className='Normal'>
                Chiến dịch phòng vệ do Bộ tư lệnh Quân chủng Phòng không Không
                quân tổ chức, chỉ huy 6 trung đoàn tên lửa, 4 trung đoàn tiêm
                kích, 16 trung đoàn và 22 tiểu đoàn pháo phòng không, 4 trung
                đoàn radar, 346 đơn vị pháo, súng máy phòng không của bộ đội địa
                phương và dân quân tự vệ.
              </p>
              <p className='Normal'>
                Tên lửa là lực lượng có điều kiện tiêu diệt B-52, song các đơn
                vị đang phân tán nhiều nhiệm vụ. Bảo vệ Hà Nội lúc này có 9 tiểu
                đoàn. Ông Nguyễn Văn Phiệt kể, bộ khí tài của Tiểu đoàn 57 đã
                qua 14.000 giờ mở máy, dính trận lụt một năm trước tưởng được
                nghỉ ngơi, nhưng phải làm nhiệm vụ.
              </p>
            </div>
          </div>

          <div
            ref={ref1}
            className={cn(
              'img-sam-2 flexbox aos-init',
              isInView1 && 'aos-animate'
            )}
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/SAM-2.png' />
          </div>

          <div
            ref={ref2}
            className={cn(
              'img-mig-21 flexbox aos-init',
              isInView2 && 'aos-animate'
            )}
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/MiG-21.png' />
          </div>

          <div
            ref={ref3}
            className={cn(
              'img-phao-vn mt20 flexbox aos-init',
              isInView3 && 'aos-animate'
            )}
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img src='https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Phao-vn.png' />
          </div>

          <div
            ref={ref4}
            className={cn('box-chihuy aos-init', isInView4 && 'aos-animate')}
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
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch2-vn-7133-1671694364.png' />
                    </div>
                    <span className='name-ch'>
                      Thượng tướng
                      <br />
                      <strong>Văn Tiến Dũng</strong>
                      <br />
                      Tổng tham mưu trưởng QĐND Việt Nam{' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Văn Tiến Dũng</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Văn Tiến Dũng (2 tháng 5 năm 1917 – 17 tháng 3 năm
                          2002), bí danh Lê Hoài, là một vị Đại tướng Quân đội
                          nhân dân Việt Nam. Ông từng là Ủy viên Bộ Chính trị,
                          Tổng Tham mưu trưởng Quân đội nhân dân Việt Nam (1953
                          – 1978), Bộ trưởng Bộ Quốc phòng (1980 – 1986), Bí thư
                          Đảng ủy Quân sự Trung ương (1984 – 1986), một trong
                          những tướng lĩnh danh tiếng của Việt Nam. Trong chiến
                          tranh Việt Nam, ông trực tiếp tham gia chỉ đạo các
                          chiến dịch Đường 9 – Nam Lào (năm 1971), chiến dịch
                          Trị – Thiên ( năm 1972), Chiến dịch Tây Nguyên (năm
                          1975). Tháng 4 năm 1975, ông giữ chức Tư lệnh Chiến
                          dịch giải phóng Sài Gòn – Gia Định (sau đổi tên thành
                          Chiến dịch Hồ Chí Minh).
                        </p>
                        <p className='text-justify'>
                          Đại tướng Văn Tiến Dũng còn có bí danh là Lê Hoài,
                          sinh ngày 2 tháng 5 năm 1917 tại xã Cổ Nhuế, huyện Từ
                          Liêm (nay là các phường Cổ Nhuế 1 và Cổ Nhuế 2, quận
                          Bắc Từ Liêm), Hà Nội. Nhà nghèo, không ruộng đất, mẹ
                          mất sớm, cậu bé họ Văn theo cha ra Hà Nội. Sau khi cha
                          đột ngột qua đời vào năm cậu được 15 tuổi, Văn Tiến
                          Dũng đành phải bỏ học, ở nhà trợ giúp cho anh làm nghề
                          thợ may. 17 tuổi, Văn Tiến Dũng lại ra Hà Nội làm công
                          cho các xưởng dệt Thanh Văn (Hàng Đào), sau chuyển
                          sang xưởng Đức Xương Long, Cự Chung (Hàng Bông).
                        </p>
                        <p className='text-justify'>
                          Từ tháng 5 năm 1978 đến năm 1986, ông được giao nhiệm
                          vụ làm Phó Bí thư thứ nhất, rồi Bí thư Quân ủy Trung
                          ương. Từ tháng 2 năm 1980 đến 1986, ông giữ chức Bộ
                          trưởng Quốc phòng. Năm 1986, do không được bầu vào Bộ
                          Chính trị nên phải rời cương vị Bộ trưởng Quốc phòng.
                          Ông lâm bệnh nặng và từ trần hồi 17h30' ngày 17/3/2002
                          tại Bệnh viện Trung ương Quân đội 108 ở Hà Nội, hưởng
                          thọ 85 tuổi, an táng tại Nghĩa trang Mai Dịch.
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
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch3-vn-6725-1671694365.png' />
                    </div>
                    <span className='name-ch'>
                      Thiếu tướng
                      <br />
                      <strong>Phùng Thế Tài</strong>
                      <br />
                      Phó tổng tham mưu trưởng QĐND Việt Nam{' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Phùng Thế Tài</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Phùng Thế Tài (tháng 2 năm 1920 – 21 tháng 3 năm 2014)
                          là một thượng tướng Quân đội nhân dân Việt Nam[1]. Ông
                          là Tư lệnh đầu tiên của Quân chủng Phòng không – Không
                          quân (1963 – 1967) và từng giữ chức vụ Phó Tổng tham
                          mưu trưởng Quân đội nhân dân Việt Nam (1967 – 1987).
                          Ông tên thật là Phùng Văn Thụ, sinh năm 1920, tại xã
                          Văn Nhân, huyện Phú Xuyên, phủ Thường Tín, tỉnh Hà
                          Đông (nay là xã Nam Tiến, huyện Phú Xuyên, Thành phố
                          Hà Nội). Nhà nghèo, thuở nhỏ ông lưu lạc sang Vân Nam
                          (Trung Quốc) kiếm sống.
                        </p>
                        <p className='text-justify'>
                          Năm 1936, ông được Hoàng Văn Hoan vận động và tham gia
                          tổ chức Việt Nam Độc lập đồng minh hội hải ngoại và
                          được cử đi học ở trường sĩ quan Hoàng Phố, tốt nghiệp
                          với quân hàm Trung úy. Năm 1939, ông gia nhập Đảng
                          Cộng sản Đông Dương và được cử làm bảo vệ cho Chủ tịch
                          Hồ Chí Minh, lúc này đang đóng vai thiếu tá Bát lộ
                          quân Hồ Quang. Thời gian này, Chủ tịch Hồ Chí Minh đặt
                          cho ông bí danh là Phùng Hữu Tài. Tháng 12 năm 1962,
                          ông là Tư lệnh Phòng không. Năm 1963, Quân chủng Phòng
                          không - Không quân thành lập, ông được cử giữ chức Tư
                          lệnh đầu tiên của quân chủng đến năm 1967. Ông giữ
                          chức vụ Phó Tổng tham mưu trưởng Quân đội nhân dân
                          Việt Nam trong 20 năm cho đến khi về hưu (1987). Ông
                          được phong quân hàm Thượng tá (1958), Đại tá (1967),
                          Thiếu tướng (1974), Trung tướng (1980), Thượng tướng
                          (1986).
                        </p>
                        <p className='text-justify'>
                          Trong thời kỳ chiến tranh phá hoại lần thứ nhất của
                          Không quân Mỹ, ông kiêm chức vụ Trưởng ban phòng chống
                          bão lũ trung ương. Năm 1976, khi Tổng cục Hàng không
                          Dân dụng của Việt Nam thống nhất được thành lập, ông
                          kiêm chức vụ Tổng cục trưởng cho đến năm 1978. Ông mất
                          ngày 21 tháng 3 năm 2014 tại Thành phố Hồ Chí Minh,
                          không lâu sau sinh nhật 94 tuổi.
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
                      <img src='https://i-vnexpress.vnecdn.net/2022/12/22/ch4-vn-6670-1671694365.png' />
                    </div>
                    <span className='name-ch'>
                      Đại tá
                      <br />
                      <strong>Lê Văn Tri</strong>
                      <br />
                      Tư lệnh Phòng không Không quân{' '}
                    </span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Lê Văn Tri</DialogTitle>
                    <DialogDescription>
                      <div className='flex flex-col gap-2'>
                        <p className='text-justify'>
                          Lê Văn Tri (13 tháng 9 năm 1920– 29 tháng 5 năm 2006 )
                          là một tướng lĩnh Quân đội nhân dân Việt Nam, hàm
                          Trung tướng, nguyên Chủ nhiệm Tổng cục Kỹ thuật, Bí
                          thư Đảng ủy Tổng cục Kỹ thuật (1977 – 1988), Tư lệnh
                          Quân chủng Phòng không – Không quân, Ủy viên thường vụ
                          Đảng ủy Quân chủng Phòng không - Không quân (1969 –
                          1977). Nguyên là Đại biểu Quốc hội khóa 7, Ủy viên dự
                          khuyết Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam
                          khóa IV.
                        </p>
                        <p className='text-justify'>
                          Ông là một trong những vị tướng nối tiếng đất Quảng
                          Bình. Ông tên thật là Lê Chiêu Nghi, sinh ngày 13
                          tháng 9 năm 1920. Quê ông ở làng Cao Hạ, xã Hạ Trạch,
                          huyện Bố Trạch, tỉnh Quảng Bình. Bố ông mất năm ông
                          lên 3 tuổi. Một ông anh của ông làm thuê ở đồn điền
                          B'Lao, Lâm Đồng. Một ông anh khác làm thuê ở Sài Gòn.
                          Người anh còn lại ở nhà mất sớm, từ đó ông phải nghỉ
                          học, sau khi đậu bằng yếu lược, ở nhà cùng cô em gái
                          theo mẹ đi buôn bán kiếm sống. Rồi sau đó ông vào Sài
                          Gòn với người anh thứ hai cùng đi làm thuê. Năm 1961,
                          sau khi trở về nước, ông được giao làm Tham mưu phó Bộ
                          Tư lệnh Pháo binh phụ trách về pháo phòng không
                          (12/1961).
                        </p>
                        <p className='text-justify'>
                          Tháng 12 năm 1963 ông được cử giữ chức Phó Tư lệnh
                          Quân chủng Phòng không-Không quân, Ủy viên thường vụ
                          Đảng ủy Quân chủng. Tháng 9 năm 1964, ông được đề bạt
                          lên làm Cục phó Cục tác chiến, Bộ Tổng Tham mưu. Năm
                          1967, ông là Phó Tư lệnh kiêm Tham mưu trưởng Quân
                          chủng Phòng không – Không quân.{' '}
                        </p>
                        <p className='text-justify'>
                          Năm 1969, ông là Tư lệnh Quân chủng Phòng không –
                          Không quân. Ngày 10 tháng 3 năm 1977, ông được cử giữ
                          chức vụ Chủ nhiệm Tổng cục Kỹ thuật kiêm Bí thư Đảng
                          ủy Tổng cục. Năm 1988, ông nghỉ hưu. Ngày 29 tháng 5
                          năm 2006, ông mất.
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <p className='mt10 caption-img'>
              Nguồn: Tài liệu hội thảo khoa học do Viện Lịch sử quân sự tổ chức
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarVietnameseAce;
