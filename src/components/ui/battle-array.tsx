import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import {useRef} from "react";

function BattleArray() {
  const refTitleAndDescription = useRef(null);
  const titleAndDescriptionInView = useInView(refTitleAndDescription);

  const refImage = useRef(null);
  const imageInView = useInView(refImage);

  const refDetail = useRef(null);
  const detailInView = useInView(refDetail);

  const ref1 = useRef(null);
  const inView1 = useInView(ref1);

  const ref2 = useRef(null);
  const inView2 = useInView(ref2);

  return (
    <main className="main-interactive">
      <section
        ref={refTitleAndDescription}
        className="section clearfix section-text-content"
      >
        <div className="container container-small">
          <div
            className={cn(
              "title-block-text aos-init ",
              titleAndDescriptionInView && "aos-animate"
            )}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            DÀN TRẬN
          </div>
          <div
            className={cn(
              "wrap-txt aos-init",
              titleAndDescriptionInView && "aos-animate"
            )}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="Normal">
              Mỹ bố trí B-52 tại hai căn cứ Andersen trên đảo Guam (Thái Bình
              Dương) và Utapao (Thái Lan). Máy bay tiếp dầu xuất phát từ Okinawa
              (Nhật Bản) và Philippines. Lực lượng tiêm kích chiến thuật được
              huy động từ căn cứ không quân ở Đà Nẵng, Biên Hòa, Tân Sơn Nhất
              (miền Nam Việt Nam) và 5 sân bay quân sự ở Thái Lan.
            </p>
            <p className="Normal">
              Các phi đội B-52 tập kích Hà Nội theo hai hướng. Chính yếu tây
              bắc, đội hình xuất phát từ căn cứ Utapao - cách Hà Nội hơn 1.000
              km, bay qua thượng Lào, lấy điểm kiểm tra cuối cùng ở Phú Thọ hoặc
              nam Việt Trì, Nà Sản rồi vào không phận Hà Nội. Đội hình đi về hết
              4,5-5,5 tiếng. Từ căn cứ này, mỗi chiếc B-52D mang 22,3 tấn bom
              (99 quả bom, 225 kg/quả).
            </p>
            <p className="Normal">
              Hướng thứ yếu tây nam, B-52 xuất phát từ đảo Guam, cách Hà Nội
              khoảng 4.600 km, tiếp dầu dọc đường rồi bay vào Quy Nhơn, đến Hạ
              Lào vòng lên phía bắc và đột nhập vùng trời Sơn La. Theo hướng
              này, đội hình đi về mất 14-16 tiếng. Mỗi chiếc B-52G mang gần 9,2
              tấn bom (27 quả, mỗi quả 340 kg). B-52D mang 60 quả, tổng 13,5 tấn
              bom.
            </p>
            <p className="Normal">
              Đường rút của phi đội theo hướng tây nam, thoát sang Lào rồi quay
              về đường bay cũ hoặc ra Biển Đông. Với Hải Phòng, B-52 đột nhập từ
              hướng đông bắc theo cửa Nam Triệu và đông nam theo sông Văn Úc.
            </p>{" "}
          </div>
        </div>
      </section>

      <section
        ref={refImage}
        className={cn(
          "section clearfix section-map-report aos-init",
          imageInView && "aos-animate"
        )}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/Map-report.png" />
          <p className="mt10 caption-img">
            Nguồn: LSU Report, SAC Symposium, 12/2017
          </p>
        </div>
      </section>

      <section
        ref={refDetail}
        className={cn(
          "section clearfix section-text-content aos-init ",
          detailInView && "aos-animate"
        )}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container container-small">
          <p className="Normal">
            Về phía miền Bắc, Tiểu đoàn trưởng tên lửa 57 Nguyễn Văn Phiệt khi
            ấy, sau này là Phó tư lệnh chính trị Phòng không Không quân, khẳng
            định: "Cuộc chiến không bất ngờ". Khi miền Bắc chống chiến tranh phá
            hoại lần đầu 1965-1968, Chủ tịch Hồ Chí Minh dự báo "sớm muộn đế
            quốc Mỹ cũng đưa B-52 ra đánh Hà Nội".
          </p>
          <p className="Normal">
            Từ nhiều năm trước, miền Bắc đã nghiên cứu cách đánh B-52 và hoàn
            thiện trước cuộc tập kích chỉ một tháng. Theo trung tướng Phiệt, khó
            nhất làm sao bắt được nhiễu B-52. Khi bay ném bom, B-52 mang tới 17
            máy phát nhiễu, kèm theo đội hình máy bay tác chiến điện tử, cường
            kích thả xuống hàng triệu sợi mồi bẫy bằng kim loại, tạo thành bức
            màn chắn mọi sóng radar, che kín tầm mắt của tên lửa và tiêm kích
            đối phương.
          </p>
          <p className="Normal">
            Bộ đội tên lửa đã dựng quy trình bắt tín hiệu B-52, đưa trắc thủ,
            kíp chiến đấu vào Quân khu IV - nơi pháo đài bay thường hoạt động để
            tập vạch nhiễu tìm B-52, khảo nghiệm cách đánh. Bộ đội radar mang
            khí tài lên núi, phát sóng cảnh giới từ xa. Phi đội MiG-21 huấn
            luyện bay chặn kích cả ngày lẫn đêm, tập cất hạ cánh trên đường bay
            ngắn; cao xạ tập đánh máy bay chiến thuật; dân quân tự vệ túc trực
            bên súng...
          </p>
          <p className="Normal">
            Dự đoán B-52 tập kích Hà Nội chủ yếu hai hướng tây bắc và tây nam,
            các trung đoàn tên lửa lập trận địa chặn đánh từ cửa ngõ theo hai
            hướng này và phía nam thành phố.
          </p>
          <p className="Normal">
            Sau ba lần bổ sung, phương án chống tập kích đường không được Bộ
            Tổng tham mưu phê duyệt ngày 24/11/1972. Mục tiêu "tập trung cao
            nhất lực lượng bảo vệ Hà Nội, Hải Phòng. Đối tượng tác chiến chủ yếu
            là máy bay B-52 và quyết tâm bắn rơi B-52 tại chỗ". Tên lửa là chủ
            lực đánh B-52 thay vì không quân như dự kiến ban đầu.
          </p>
          <p className="Normal">
            Cuộc sơ tán lớn nhất trong lịch sử kháng chiến Thủ đô hoàn thành
            trưa 18/12/1972. Thành phố chỉ còn lại cơ quan chỉ huy, lực lượng
            chiến đấu, tự vệ với lưới lửa phòng không tầng cao, tầng thấp giăng
            sẵn khiến đối phương có thể "bước trên đầu ngọn súng".
          </p>{" "}
        </div>
      </section>

      <section
        className="section clearfix section-scroll-content scroll-img relative aos-init aos-animate"
        id="section_2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="sticky-top">
          <div
            className={cn(
              "item-fix-scroll absolute w-100 h-100 flex hidden showed",
              inView1 && "showed"
            )}
            id="background_base"
          >
            <div className="w-100 h-100">
              <div className="w-100 h-100 flex flex-wrap justify-center items-center flex-column absolute">
                <div className="w-100">
                  <div className="container">
                    <div className="img-show">
                      <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-tenlua.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "item-fix-scroll absolute w-100 h-100 flex hidden",
              inView2 && "showed"
            )}
            id="background_water"
          >
            <div className="w-100 h-100">
              <div className="w-100 h-100 flex flex-wrap justify-center items-center flex-column absolute">
                <div className="w-100">
                  <div className="container">
                    <div className="img-show">
                      <img src="https://s.vnecdn.net/vnexpress/j/v173/event/longform/thoisu/dienbienphutrenkhong/images/graphics/map-phao-tenlua.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-text relative">
          <div className="container">
            <div ref={ref1} className="item-text-scroll">
              <div className="box-text-on flexbox" data-id="base">
                <div className="frame-txt">
                  <p>
                    <strong>Trung đoàn tên lửa:</strong>
                  </p>
                  <p>
                    <strong>E261 </strong>(4 tiểu đoàn tên lửa): Đón đánh B-52
                    hướng tây - tây bắc.
                  </p>
                  <p>
                    <strong>E257 </strong>(4 tiểu đoàn tên lửa): Đánh B-52 hướng
                    tây - tây nam.
                  </p>
                  <p>
                    <strong>E274: </strong>Vừa từ chiến trường ra, chủ yếu dự bị
                    cho Hà Nội, trấn giữ Thanh Oai, Thường Tín.
                  </p>
                </div>
              </div>
            </div>
            <div ref={ref2} className="item-text-scroll">
              <div className="box-text-on flexbox" data-id="water">
                <div className="frame-txt">
                  <p>
                    <strong>Pháo cao xạ:</strong>
                  </p>
                  <p>
                    5 trung đoàn phụ trách các hướng đông bắc, tây bắc, nam Hà
                    Nội; Gia Lâm, Như Quỳnh và Hoài Đức, Hà Đông.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BattleArray;
