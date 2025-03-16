import { User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8 mt-12'>
      <div className='mx-auto px-6 text-center'>
        <div className='flex flex-col items-center gap-3'>
          <h3 className='font-bold text-xl text-gray-200'>
            Về sản phẩm (Group 5 _ VNR202)
          </h3>
          <p className='text-gray-300 leading-relaxed'>
            Website cung cấp thông tin, chỉ phục vụ mục đích học tập về sự kiện
            <span className='font-semibold text-gray-100'>
              &nbsp;"Hà Nội 12 ngày đêm - Điện Biên Phủ trên không"
            </span>
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-3 mt-6 text-gray-400'>
        <User className='w-5 h-5 text-gray-300' />
        <span className='text-gray-100 transition-colors duration-300'>
          Đoàn Viết Thanh - Trần Trương Văn - Nguyễn Thùy Linh
        </span>
      </div>
    </footer>
  );
};

export default Footer;
