import {useInView} from "framer-motion";
import {useEffect, useRef} from "react";

import {cn} from "@/lib/utils";

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
    console.log({isAmerica4InView});
  }, [isAmerica4InView]);

  return (
    <main className="main-interactive">
      <section
        ref={ref}
        className="section clearfix section-text-content section-text-atchubai"
      >
        <div className="container container-small">
          <div
            className={cn(
              "title-block-text aos-init",
              isInView && "aos-animate"
            )}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {" "}
            NHỮNG ÁT CHỦ BÀI
          </div>
          <div
            className={cn("wrap-txt aos-init", isInView && "aos-animate")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="Normal">
              Lầu Năm Góc huy động gần một nửa số B-52 (193/400 chiếc), cất cánh
              663 lần; hơn 1/3 số máy bay chiến thuật (khoảng 1.200), cất cánh
              gần 4.000 lần, 6 trên tổng số 24 tàu sân bay, 66 tàu chiến của Hạm
              đội 7 ở vịnh Bắc Bộ. Đây là cuộc tập kích đường không lớn nhất
              trong lịch sử chiến tranh.
            </p>
            <p className="Normal">
              B-52 ném bom theo đội hình, mỗi tốp 3 chiếc, mỗi đợt ít nhất 6
              chiếc và nhiều nhất 75 chiếc, theo tài liệu chỉ huy tác chiến phía
              Việt Nam năm 1972. Hộ tống dàn B-52 là hàng chục chiến đấu cơ làm
              nhiệm vụ săn lùng MiG-21, thả dải nhiễu và chế áp trận địa tên
              lửa... Các trận tập kích dùng B-52 ném bom ban đêm, máy bay chiến
              thuật đánh bồi dai dẳng ban ngày, máy phát nhiễu điện tử hiện đại
              hỗ trợ.
            </p>{" "}
          </div>
        </div>
      </section>

      <section className="section clearfix section-Usa">
        <div className="container">
          <div ref={refAmerica1}>
            <p
              className={cn(
                "flag aos-init ",
                isAmerica1InView && "aos-animate"
              )}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Flag_My.svg" />
            </p>
            <p
              className={cn(
                "sub-title aos-init ",
                isAmerica1InView && "aos-animate"
              )}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Máy bay ném bom chiến lược <strong>B-52</strong>
            </p>
            <div
              className={cn(
                "img-b52 flexbox aos-init",
                isAmerica1InView && "aos-animate"
              )}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/B52_My.png" />
            </div>
          </div>

          <div ref={refAmerica2}>
            <div
              className={cn(
                "img-info mt35 flexbox aos-init",
                isAmerica2InView && "aos-animate"
              )}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Info_B52.png" />
            </div>
            <div
              className={cn(
                "img-list mt20 flexbox aos-init",
                isAmerica2InView && "aos-animate"
              )}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/List_mbMy.png" />
            </div>
          </div>

          <div ref={refAmerica3} className="box-doihinhbay">
            <p
              className={cn(
                "sub-title aos-init",
                isAmerica3InView && "aos-animate"
              )}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <strong>Đội hình bay</strong>
            </p>
            <div
              className={cn(
                "img-doihinhbay flexbox aos-init",
                isAmerica3InView && "aos-animate"
              )}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/doihinhbay_My.png" />
            </div>
          </div>

          <div
            ref={refAmerica4}
            className={cn(
              "box-chihuy aos-init",
              isAmerica4InView && "aos-animate"
            )}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="sub-title">
              <strong>Chỉ huy</strong>
            </p>
            <div className="list-chihuy flexbox">
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch1-usa-4574-1671694365.png" />
                </div>
                <span className="name-ch">
                  Đại tướng
                  <br />
                  <strong>John W. Vogt</strong>
                  <br />
                  Chỉ huy Tập đoàn không quân số 7{" "}
                </span>
              </div>
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch2-usa-9302-1671694365.png" />
                </div>
                <span className="name-ch">
                  Đại tướng
                  <br />
                  <strong>John C. Meyer</strong>
                  <br />
                  Bộ tư lệnh Không quân chiến lược Mỹ (SAC){" "}
                </span>
              </div>
              <div className="item-ch">
                <div className="thumb-ch">
                  <img src="https://i-vnexpress.vnecdn.net/2022/12/22/ch3-usa-7677-1671694365.png" />
                </div>
                <span className="name-ch">
                  Phó đô đốc
                  <br />
                  <strong>Damon W. Cooper</strong>
                  <br />
                  Chỉ huy Nhóm tác chiến số 77{" "}
                </span>
              </div>
            </div>
            <p className="mt10 caption-img">
              {" "}
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
