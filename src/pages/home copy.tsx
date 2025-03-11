import CorrelationForcesImage from '@/assets/images/correlation_of_forces.png';
import DamageTotalImage from '@/assets/images/damage_total.png';
import KhamThienImage from '@/assets/images/kham_thien_place.png';
import MilitaryMapImage from '@/assets/images/military_map.png';
import WarResultImage from '@/assets/images/war_result.png';
import Banner from '@/components/events/banner';
import Footer from '@/components/ui/footer';
import Timeline from '@/components/ui/timeline';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <Banner />
      <Timeline />
      <img
        src={CorrelationForcesImage}
        alt=''
        className='w-[200px] h-[300px]'
      />
      <Footer />

      <section>
        <h1 className='font-semibold'>Diễn biến chiến dịch</h1>
        <div>
          <p>
            10 giờ 30 phút ngày 17/12/1972, Tổng thống Mỹ Richard Nixon ra lệnh
            mở cuộc tập kích bằng không quân vào Hà Nội, Hải Phòng và một số
            thành phố, thị xã trên miền bắc Việt Nam.
          </p>
          <img
            src=''
            alt='Một máy bay ném bom B-52 cất cánh từ căn cứ không quân Andersen của Mỹ tham gia chiến dịch Linebacker II (chiến dịch Hà Nội - Điện Biên Phủ trên không).'
          />
        </div>
        <div>
          <p>
            Sáng 18/12/1972, Phủ Thủ tướng điện chỉ đạo các bộ, cơ quan và một
            số địa phương: “Địch có thể ném bom Hà Nội-Hải Phòng, cần thực hiện
            tốt kế hoạch sơ tán nhân dân của thành phố".
          </p>
          <p>
            Bộ Tổng Tham mưu điện chỉ đạo các đơn vị: “Đề phòng địch dùng B-52
            đánh phá các mục tiêu trọng điểm. Các binh chủng: pháo cao xạ, tên
            lửa, ra-đa, không quân, pháo binh sẵn sàng chiến đấu, kịp thời đánh
            trả máy bay, tàu chiến địch. Tổ chức quan sát, báo động, sơ tán, đào
            hầm hào, phối hợp với Công an và nhân dân làm tốt công tác bảo vệ an
            ninh, bảo vệ tài sản...”.
          </p>
        </div>
        <p>
          18 giờ 50 phút, ngày 18/12/1972, Quân chủng Phòng không-Không quân
          chuyển trạng thái sẵn sàng chiến đấu cấp 1.
        </p>
        <p>
          19 giờ 10 phút, ngày 18/12/1972, Đại đội ra-đa 16 phát hiện nhiễu
          B-52.
        </p>
        <p>
          19 giờ 15 phút, ngày 18/12/1972, Trung đoàn 291 phát hiện B-52 và báo
          cáo: “B-52 đang vào miền bắc”.
        </p>
        <img src={MilitaryMapImage} alt='' className='h-[300px]' />
        <p>
          19 giờ 25 phút, ngày 18/12/1972 không quân ta được lệnh cất cánh đón
          đánh các tốp máy bay chiến thuật của địch.
        </p>
        <p>
          Từ 19 giờ 25 phút đến 20 giờ 18 phút, ngày 18/12/1972, nhiều tốp B-52
          (mỗi tốp 3 chiếc) liên tiếp dội bom xuống khu vực sân bay Nội Bài,
          Đông Anh, Yên Viên, Gia Lâm.
        </p>
        <div>
          <p>
            19 giờ 44 phút, ngày 18/12/1972, quả đạn tên lửa đầu tiên của Tiểu
            đoàn 78 thuộc Trung đoàn Tên lửa 257 được phóng lên - cuộc chiến đấu
            12 ngày đêm của lực lượng phòng không ba thứ quân bảo vệ Hà Nội bắt
            đầu.
          </p>
          <p>
            Trung đoàn Tên lửa 261 được lệnh đánh tập trung, tiêu diệt tốp máy
            bay 671 từ hướng Tam Đảo đánh phá các kho tàng ở Đông Anh, Cổ Loa.
            Một kíp chiến đấu của Tiểu đoàn 59 đã phóng 2 quả đạn từ cự ly thích
            hợp, hạ 1 máy bay B-52. Đây là chiếc B-52 đầu tiên bị bắn rơi tại
            chỗ trên bầu trời Hà Nội, cách trận địa chưa đầy 10km.
          </p>
          <p>
            Thắng lợi hạ gục tại chỗ “Siêu pháo đài bay B-52” ngay trong đêm đầu
            tiên có ý nghĩa đặc biệt quan trọng về tư tưởng và tác chiến, giải
            tỏa những lo lắng, băn khoăn của Bộ Chính trị, Bộ Tổng Tư lệnh và
            tất cả cán bộ, chiến sĩ trực tiếp chiến đấu bảo vệ Hà Nội.
          </p>
        </div>
        <p>
          Đêm 18 rạng ngày 19/12, Mỹ huy động 90 lần chiếc B-52 ném 3 đợt bom
          xuống Thủ đô Hà Nội, xen kẽ có 8 lần chiếc F-111 và 127 lần chiếc máy
          bay cường kích; ném khoảng 6.600 quả bom xuống 135 địa điểm thuộc Thủ
          đô Hà Nội, 85 khu vực dân, làm chết 300 người. Quân và dân ta anh dũng
          chiến đấu, bắn rơi 6 máy bay các loại, trong đó có 3 máy bay B-52 (2
          chiếc rơi tại chỗ).
        </p>
        <p>Sáng 19/12/1972, Bộ Chính trị họp, chỉ đạo về đánh máy bay B-52.</p>
        <div>
          <p>
            Đêm 19/12/1972, máy bay B-52 tiếp tục ném bom Hà Nội, Hải Phòng, Bắc
            Giang, Thái Nguyên, Nam Định.
          </p>
          <p>
            Riêng ở Hà Nội, địch sử dụng 87 lần chiếc B-52 và hơn 200 lần chiếc
            máy bay cường kích ném 3 đợt bom xuống 68 điểm thuộc nội và ngoại
            thành. Các lực lượng phòng không ba thứ quân của ta đã anh dũng
            chiến đấu, bắn rơi 1 máy bay B-52; 1 máy bay F-4.
          </p>
        </div>
        <div>
          <p>
            Đêm 20/12/1972 (bắt đầu từ lúc 19 giờ 27 phút), địch sử dụng 93 lần
            chiếc B-52 và hơn 100 lần chiếc máy bay cường kích các loại vào đánh
            phá Hà Nội và một số mục tiêu ở khu vực Hải Phòng, Thái Nguyên.
          </p>
          <p>
            Rút kinh nghiệm các trận đánh trước, quân và dân ta đã anh dũng, mưu
            trí, lập công xuất sắc: chỉ với 35 quả đạn đã bắn rơi 7 chiếc B-52
            (có 5 chiếc rơi tại chỗ). Đại đội tự vệ của 3 nhà máy (Cơ khí Mai
            Động, Gỗ Hà Nội và Cơ khí Lương Yên), bằng 19 viên đạn 14,5 mm đã
            bắn rơi 1 máy bay F-111 “cánh cụp cánh xòe” của địch.
          </p>
        </div>
        <div>
          <p>
            Ngày 21/12/1972, địch sử dụng 180 lần chiếc máy bay chiến thuật; ban
            đêm địch huy động 24 lần chiếc B-52, 36 lần chiếc máy bay chiến
            thuật đánh phá các mục tiêu trọng yếu của ta tại Hà Nội và một số
            khu vực tại Bắc Giang, Hải Phòng.
          </p>
          <p>
            Phát huy khí thế chiến thắng của 3 ngày trước, quân và dân ta đã bắn
            rơi 11 máy bay, trong đó có 3 chiếc B-52; 2 chiếc F-4; 2 chiếc A-7;
            1 chiếc F-111; 1 chiếc A-6; 1 chiếc RA-50; 1 chiếc F-105.
          </p>
        </div>
        <div>
          <p>
            Ngày 22/12/1972, ban ngày, địch sử dụng 56 lần chiếc máy bay chiến
            thuật đánh phá các mục tiêu quanh Hà Nội; ban đêm, địch sử dụng 24
            lần chiếc B-52 và 30 máy bay chiến thuật hộ tống, cùng 9 máy bay
            F-111 đánh các mục tiêu tại Hà Nội, Hải Phòng, Bắc Ninh.... Chúng
            dội bom xuống Bệnh viện Bạch Mai - bệnh viện lớn nhất miền bắc...
          </p>
        </div>
      </section>
      <section>
        <h1 className='font-semibold'>
          Bom B-52 dội xuống Bệnh viện Bạch Mai đã làm 28 bác sĩ, y tá, nhân
          viên phục vụ và người bệnh bị chết và bị thương.
        </h1>
        <p>
          Ngày 23/12/1972, ban ngày, địch sử dụng 54 lần chiếc máy bay chiến
          thuật đánh phá các khu vực ngoại thành Hà Nội; ban đêm, địch sử dụng
          33 chiếc B-52 đánh Đồng Mỏ (Lạng Sơn) và khu vực Bắc Giang; 30 máy bay
          F-4 và F-105 và 7 máy bay chiến thuật của Hải quân, 11 máy bay F-111
          đánh phá các sân bay: Nội Bài, Yên Bái, Kiến An (Hải Phòng) và một số
          mục tiêu tại Hà Nội, Hải Phòng, Quảng Ninh. Ta bắn rơi 4 máy bay,
          trong đó có 2 chiếc B-52; 1 chiếc F-4; 1 chiếc A-7.
        </p>
        <div>
          <p>
            Ngày 24/12/1972, ban ngày, địch sử dụng 44 lần chiếc máy bay chiến
            thuật đánh phá khu vực Thái Nguyên, Hà Bắc; ban đêm, địch sử dụng 33
            lần chiếc B-52, 39 lần chiếc máy bay chiến thuật đánh phá ác liệt Ga
            Kép, Bắc Giang, các sân bay Yên Bái và khu vực Vĩnh Tuy (Hà Nội).
            Quân và dân miền bắc đã bắn rơi 5 máy bay: 1 chiếc B-52; 2 chiếc
            F-4; 2 chiếc A-7.
          </p>
          <p>
            Trước những thất bại nặng nề, 24 giờ 00 ngày 24/12/1972, lấy cớ nghỉ
            lễ Noel, địch tạm ngừng tập kích để củng cố tinh thần, lực lượng và
            tìm thủ đoạn đánh phá mới.
          </p>
        </div>
        <div>
          <p>
            Ngày 25/12/1972, Bộ Chính trị, Quân ủy Trung ương nhận định: địch sẽ
            đánh phá trở lại Hà Nội ác liệt hơn, quân và dân Thủ đô Hà Nội cùng
            các địa phương miền bắc cần rút kinh nghiệm các trận đánh trước,
            tiếp tục củng cố tinh thần, lực lượng đánh địch trong những ngày
            tới. Tranh thủ thời gian địch ngừng đánh phá, cán bộ, chiến sĩ lực
            lượng phòng không ba thứ quân của các địa phương, nhất là Hà Nội,
            Hải Phòng, Thái Nguyên đã khẩn trương rút kinh nghiệm, tìm cách
            đánh, kịp thời ứng phó với các thủ đoạn đánh phá của địch.
          </p>
        </div>
        <p>
          Ngày 26/12/1972, từ 13 giờ 00 đến tối, địch sử dụng 56 lần chiếc máy
          bay cường kích các loại ném bom dữ dội các khu vực trận địa tên lửa và
          trạm biến thế Đông Anh.
        </p>
        <p>
          Từ 22 giờ 05 phút đến 23 giờ 20 phút, địch sử dụng 105 lần chiếc B-52
          và 110 lần chiếc máy bay chiến thuật hộ tống đánh phá ồ ạt, liên tục
          vào nhiều mục tiêu khu vực Hà Nội, Hải Phòng, Thái Nguyên, ném bom rải
          thảm dữ dội tàn phá tất cả các mục tiêu nội, ngoại thành Hà Nội, đặc
          biệt là khu phố Khâm Thiên và khu phố Hai Bà Trưng, Hà Nội.
        </p>
      </section>
      <section>
        <div>
          <h1 className='font-semibold'>
            Hàng nghìn quả bom trút xuống khu phố Khâm Thiên, san bằng hàng trăm
            ngôi nhà, phá tan cả dãy phố dài gần 1km và ăn sâu vào hai bên tới
            300m.
          </h1>
          <img
            src={KhamThienImage}
            alt='Khu phố Khâm Thiên, Hà Nội, bị máy bay B-52 của Mỹ ném bom tàn phá (26/12/1972)'
            className='w-1/2'
          />
        </div>
        <div>
          <h1>287 người bị giết hại và hơn 290 người bị thương.</h1>
          <img
            src={KhamThienImage}
            alt='Khu phố Khâm Thiên, Hà Nội, bị máy bay B-52 của Mỹ ném bom tàn phá (26/12/1972)'
            className='w-1/2'
          />
        </div>
        <div>
          <h1>
            Đáp trả tội ác của giặc Mỹ, trong 1 giờ chiến đấu, các lực lượng
            phòng không Thủ đô đã bắn rơi 5 máy bay B-52, trong đó có 4 chiếc
            rơi tại chỗ.
          </h1>
          <img
            src={KhamThienImage}
            alt='Khu phố Khâm Thiên, Hà Nội, bị máy bay B-52 của Mỹ ném bom tàn phá (26/12/1972)'
            className='w-1/2'
          />
        </div>
      </section>
      <section>
        <div>
          <h1>
            Hơn một giờ chiến đấu anh dũng trong đêm 26/12/1972, lực lượng phòng
            không ba thứ quân của Hà Nội, Hải Phòng, Thái Nguyên đã bắn rơi 8
            máy bay B-52 và 10 máy bay chiến thuật khác.
          </h1>
          <h1>
            Đây là trận đánh then chốt, quyết định nhất, bắn rơi nhiều máy bay
            B-52 nhất trong 9 ngày chiến đấu. Trong trận này, lần đầu tiên Trung
            đoàn 252, Quân khu Việt Bắc đã bắn rơi 1 chiếc B-52 bằng pháo cao xạ
            100mm.
          </h1>
        </div>
        <div>
          <p>
            Ngày 27/12/1972, buổi sáng, địch huy động 100 lần chiếc máy bay
            chiến thuật; ban đêm, địch tăng cường huy động 36 lần chiếc B-52, 66
            lần chiếc máy bay chiến thuật yểm hộ, xen kẽ, địch dùng 17 lần chiếc
            F-111 tập trung đánh phá dữ dội vào khu vực Hà Nội.
          </p>
          <p>
            Ngày và đêm 27/12/1972, quân và dân miền bắc đã bắn rơi 14 máy bay
            trong đó có 5 chiếc B-52; 5 chiếc F-4; 02 chiếc A-7; 1 chiếc A-6; 1
            máy bay lên thẳng HH-53.
          </p>
          <p>
            Ngày 28/12/1972, ban ngày địch huy động 131 lần chiếc máy bay chiến
            thuật; ban đêm, địch sử dụng khoảng 60 lần chiếc B-52 đánh vào các
            mục tiêu ở khu vực nội, ngoại thành Hà Nội. Quân và dân ta tiếp tục
            chiến đấu dũng cảm, bắn rơi 3 máy bay, trong đó có 2 chiếc B-52 (1
            chiếc do phi công Vũ Xuân Thiều lái chiếc máy bay MiG-21 tiêu diệt
            và đã anh dũng hy sinh); 1 chiếc RA-5C.
          </p>
        </div>
      </section>
      <section>
        <h1>
          Ðúng 21 giờ 45 phút ngày 28/12, phi công Vũ Xuân Thiều được lệnh cất
          cánh, gần đến tốp máy bay địch, anh được chỉ thị cho máy bay quay vòng
          phải, hướng bay 30 độ và lách qua lực lượng tiêm kích của địch để tiếp
          cận B-52. Chiếc MiG bay xuyên vào giữa đội hình máy bay địch, Sở chỉ
          huy Trung đoàn 927 nhắc Thiều bình tĩnh tiếp tục tiếp cận B-52, vì
          địch đông mà chỉ có một chiếc máy bay ta, chúng sẽ khó phát hiện mà
          nếu có cũng không dám bắn vì sợ bắn vào nhau. Ở độ cao 11 nghìn mét,
          Vũ Xuân Thiều báo cáo về Sở chỉ huy: "Tôi đã phát hiện được mục tiêu.
          Xin phép công kích". Cả Sở chỉ huy hồi hộp hướng về phía loa, đợi
          tiếng Thiều hô "cháy rồi".
        </h1>
        <h1>
          Với bản lĩnh kiên cường, quả cảm, kỹ thuật bay giỏi, ai cũng tin tưởng
          Vũ Xuân Thiều sẽ lập công xuất sắc. Nhưng một phút, hai phút vẫn không
          nghe thấy tiếng Thiều, chỉ có tiếng sĩ quan dẫn đường liên tục gọi "có
          nghe thấy không" nhưng anh Thiều vẫn "bặt vô âm tín". Trên màn hình
          ra-đa, hai vệt sáng của MiG và B-52 chặp lại với nhau phát ra một chấm
          sáng to lạ thường, rồi tóe ra thành những chấm nhỏ rơi xuống. Vũ Xuân
          Thiều đã mãi hòa cùng bầu trời để ngăn chặn B-52 trước khi chúng kịp
          vào ném bom quê hương anh...!
        </h1>
      </section>
      <section>
        <div>
          <p>
            Ngày 29/12/1972, do bị tổn thất nặng nề trong 11 ngày liên tiếp, máy
            bay B-52 của địch chỉ đánh một số địa phương vòng ngoài, không dám
            tập trung lực lượng ở toạ độ lửa Hà Nội nữa.
          </p>
          <p>
            Ban ngày, địch sử dụng 36 lần chiếc máy bay chiến thuật; ban đêm,
            địch huy động 60 lần chiếc B-52, 70 lần chiếc máy bay chiến thuật
            công kích các mục tiêu ở Thái Nguyên, Lạng Sơn, Vĩnh Phú, Thanh Hóa
            và ngoại vi Hải Phòng, Quảng Ninh.
          </p>
          <p>
            Các đơn vị phòng không vòng ngoài của ta (tiểu đoàn 72, 78, 79) đã
            bắn rơi 2 máy bay (1 chiếc B-52, 1 chiếc F-4). Đây là trận đánh kết
            thúc thắng lợi 12 ngày đêm bảo vệ Thủ đô Hà Nội nói riêng và miền
            bắc nói chung cuối tháng 12/1972.
          </p>
          <p>
            7 giờ sáng ngày 30/12/1972, Richard Nixon tuyên bố chấm dứt cuộc tập
            kích đường không chiến lược vào Hà Nội, Hải Phòng, ngừng ném bom từ
            Vĩ tuyến 20 trở ra và đề nghị Chính phủ Việt Nam dân chủ cộng hòa
            tiếp tục đàm phán, ký kết Hiệp định Paris.
          </p>
        </div>
      </section>
      <section>
        <img src={WarResultImage} alt='Kết quả chiến dịch' className='w-1/2' />
        <img
          src={DamageTotalImage}
          alt='Tổng hại do Mỹ gây ra tại Hà Nội trong 12 ngày đêm cuối năm 1972'
          className='w-1/2'
        />
      </section>
    </main>
  );
}
