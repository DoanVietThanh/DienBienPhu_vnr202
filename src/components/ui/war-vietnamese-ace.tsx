import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import {useRef} from "react";

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
    <main className="main-interactive">
      <section className="section clearfix section-Vn">
        <div className="container">
          <div ref={ref}>
            <p
              className={cn("flag aos-init", isInView && "aos-animate")}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_VN.svg" />
            </p>
            <div
              className={cn("wrap-txt aos-init", isInView && "aos-animate")}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="Normal">
                Chiến dịch phòng vệ do Bộ tư lệnh Quân chủng Phòng không Không
                quân tổ chức, chỉ huy 6 trung đoàn tên lửa, 4 trung đoàn tiêm
                kích, 16 trung đoàn và 22 tiểu đoàn pháo phòng không, 4 trung
                đoàn radar, 346 đơn vị pháo, súng máy phòng không của bộ đội địa
                phương và dân quân tự vệ.
              </p>
              <p className="Normal">
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
              "img-sam-2 flexbox aos-init",
              isInView1 && "aos-animate"
            )}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/SAM-2.png" />
          </div>

          <div
            ref={ref2}
            className={cn(
              "img-mig-21 flexbox aos-init",
              isInView2 && "aos-animate"
            )}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/MiG-21.png" />
          </div>

          <div
            ref={ref3}
            className={cn(
              "img-phao-vn mt20 flexbox aos-init",
              isInView3 && "aos-animate"
            )}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Phao-vn.png" />
          </div>

          <div
            ref={ref4}
            className={cn("box-chihuy aos-init", isInView4 && "aos-animate")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="sub-title">
              <strong>Chỉ huy</strong>
            </p>
            <div className="list-chihuy flexbox">
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch2-vn-7133-1671694364.png" />
                </div>
                <span className="name-ch">
                  Thượng tướng
                  <br />
                  <strong>Văn Tiến Dũng</strong>
                  <br />
                  Tổng tham mưu trưởng QĐND Việt Nam{" "}
                </span>
              </div>
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch3-vn-6725-1671694365.png" />
                </div>
                <span className="name-ch">
                  Thiếu tướng
                  <br />
                  <strong>Phùng Thế Tài</strong>
                  <br />
                  Phó tổng tham mưu trưởng QĐND Việt Nam{" "}
                </span>
              </div>
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch4-vn-6670-1671694365.png" />
                </div>
                <span className="name-ch">
                  Đại tá
                  <br />
                  <strong>Lê Văn Tri</strong>
                  <br />
                  Tư lệnh Phòng không Không quân{" "}
                </span>
              </div>
            </div>
            <p className="mt10 caption-img">
              Nguồn: Tài liệu hội thảo khoa học do Viện Lịch sử quân sự tổ chức
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WarVietnameseAce;
