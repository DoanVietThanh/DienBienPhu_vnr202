const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4  gap-8 text-sm">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-bold text-lg">Về dự án</h3>
          <p>
            Website cung cấp thông tin, hình ảnh và tư liệu lịch sử về sự kiện
            <span className="font-semibold">
              "Hà Nội 12 ngày đêm - Điện Biên Phủ trên không"
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Group 5 - VNR202
      </div>
    </footer>
  );
};

export default Footer;
