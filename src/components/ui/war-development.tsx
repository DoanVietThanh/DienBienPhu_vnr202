import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import {useRef} from "react";

const WarDevelopment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const refImage = useRef(null);
  const imageInView = useInView(refImage);

  return (
    <main ref={ref} className="main-interactive">
      <section className="section clearfix section-text-content">
        <div className="container container-small">
          <p
            className={cn("intro-txt aos-init", isInView && "aos-animate")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <strong>
              Trưa 18/12/1972, khi những tốp B-52 đầu tiên cất cánh từ căn cứ
              không quân Andersen trên đảo Guam (Thái Bình Dương) nhằm hướng tây
              bay tới, chiến dịch phòng không toàn miền Bắc Việt Nam lập tức
              khởi động.
            </strong>
          </p>
          <div
            className={cn(
              "title-block-text aos-init",
              isInView && "aos-animate"
            )}
            data-aos="zoom-in"
            data-aos-duration="1000"
          ></div>
          <div
            className={cn("wrap-txt aos-init", isInView && "aos-animate")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="Normal">
              15h cùng ngày, tại Đông Anh (Hà Nội), Tiểu đoàn tên lửa 57 được
              lệnh ăn cơm sớm ba tiếng. Tiểu đoàn trưởng Nguyễn Văn Phiệt kiểm
              tra lại quân số, vẫn còn thiếu vài cán bộ đang cấp tốc cắt phép
              trở về. Tên lửa SAM-2 đã nằm trên trận địa Đại Đồng chờ khai hỏa.
              Toàn Quân chủng Phòng không Không quân chuyển trạng thái sẵn sàng
              chiến đấu.
            </p>
            <p className="Normal">
              1972 là năm mấu chốt cho chấm dứt chiến tranh Việt Nam với đàm
              phán bốn bên gồm Mỹ, Việt Nam Dân chủ Cộng hòa, Chính phủ Cách
              mạng lâm thời Cộng hòa miền Nam Việt Nam và Việt Nam Cộng hòa tại
              Paris. Bốn năm với hơn hai trăm phiên họp, hội nghị vẫn chưa đi
              đến kết quả cuối cùng.
            </p>
            <p className="Normal">
              Ngày 14/12, đàm phán tạm ngừng, Tổng thống Mỹ Richard Nixon phê
              duyệt kế hoạch ném bom mùa Giáng sinh mang mật danh Linebacker II.
              Mục tiêu dùng B-52 đánh Hà Nội, Hải Phòng nhằm mặc cả với miền Bắc
              những điều khoản có lợi và chính quyền Sài Gòn thấy "không bị bỏ
              rơi".
            </p>
            <p className="Normal">
              B-52 là một trong ba trụ cột răn đe hạt nhân của Mỹ (cùng với tên
              lửa đạn đạo xuyên lục địa và tàu ngầm mang tên lửa đạn đạo), được
              truyền thông nước này xem là "pháo đài bất khả xâm phạm". Hồi
              tháng 4/1972, B-52 từng đánh phá Nghệ An, Thanh Hóa, Hải Phòng
              nhằm "kiểm tra năng lực phòng không" của miền Bắc Việt Nam.
            </p>
            <p className="Normal">
              Không gặp nhiều trở ngại khiến Lầu Năm Góc tự tin khích lệ phi
              công B-52: "Bay vào Hà Nội chỉ như một cuộc dạo chơi trong đêm
              phương Đông. Ở độ cao 10.000 m, đối phương không thể với tới. Các
              bạn chỉ cần ấn nút rồi trở về căn cứ an toàn, sạch sẽ".
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
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="container flex flex-col justify-center items-center">
          <img src="https://special.nhandan.vn/HaNoi_DienBienPhutrenkhong_12ngaydem/assets/gRxme4LTGR/28-12-tuong-quan-luc-luong-copy-1920x2723.webp" />
          <p className="mt10 caption-img">
            Nguồn: Quân chủng Phòng không-Không quân, Bảo tàng Chiến thắng B-52
          </p>
        </div>
      </section>
    </main>
  );
};

export default WarDevelopment;
