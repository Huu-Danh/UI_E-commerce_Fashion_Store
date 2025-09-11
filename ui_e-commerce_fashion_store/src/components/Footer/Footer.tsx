import { FaFacebook } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoTiktok } from 'react-icons/io5'
import { SiZalo } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className='w-full bg-white overflow-hidden'>
      <div className='max-w-6xl mx-auto px-5 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          <div className='space-y-1'>
            <h2 className='text-xl font-serif mb-4'>MTP-FASHION</h2>
            <div className='flex items-center space-x-4 mb-4'>
              <a href='' aria-label='Facebook'>
                <FaFacebook className='text-xl hover:underline hover:decoration-black' />
              </a>
              <a href='' aria-label='Tiktok'>
                <IoLogoTiktok className='text-xl hover:underline hover:decoration-black' />
              </a>
              <a href='' aria-label='Zalo'>
                <SiZalo className='text-xl bg-black text-white rounded px-0.5 hover:bg-white hover:text-black' />
              </a>
              <a href='' aria-label='Instagram'>
                <GrInstagram className='text-xl hover:underline hover:decoration-black' />
              </a>
            </div>
            <p className='font-mono text-sm'>
              Thương hiệu thời trang MTP-FASHION <br />
              CÔNG TY CỔ PHẦN SẢN XUẤT THƯƠNG MẠI TÂM MINH PHÁT <br />
              Địa chỉ: 195/59, Gò Vấp, TP.HCM.
            </p>
            <a href='' className='block font-mono text-sm hover:underline hover:decoration-black'>
              Chính sách bảo mật
            </a>
            <a href='' className='block font-mono text-sm hover:underline hover:decoration-black'>
              Các điều khoản và điều kiện
            </a>
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-lg font-mono mb-4 text-gray-700'>Về chúng tôi</h3>
            <a href='' className='block hover:underline hover:decoration-black'>
              Giới thiệu MTP-FASHION
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Tuyển dụng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Cảm hứng thời trang
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Danh sách các cửa hàng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Nhượng quyền thương hiệu
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Khách hàng thân thiết
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Chính sách giao hàng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Chính sách bảo hành
            </a>
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-lg font-mono mb-4 text-gray-700'>Hỗ trợ khách hàng</h3>
            <a href='' className='block hover:underline hover:decoration-black'>
              Liên hệ đến MTP-FASHION
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Câu hỏi thường gặp
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Hướng dẫn tạo tài khoản
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Hướng dẫn đặt hàng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Mua Online nhận tại cửa hàng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Hướng dẫn mua trước trả sau
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Quy định và hướng dẫn đổi/trả hàng
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Hướng dẫn đánh giá sản phẩm
            </a>
            <a href='' className='block hover:underline hover:decoration-black'>
              Hướng dẫn xem và đổi thưởng
            </a>
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-lg font-mono mb-4 text-gray-700'>Liên lạc</h3>
            <div className='flex flex-col items-start'>
              <span className='text-sm'>Đặt hàng trực tuyến (8h-21h)</span>
              <span className='text-lg font-bold'>
                <a href='tel:1900 636942'>1900 636942</a>
              </span>
            </div>
            <div className='flex flex-col items-start'>
              <span className='text-sm'>Chăm sóc khách hàng</span>
              <span className='text-lg font-bold'>
                <a href='tel:1900 636940'>1900 636940</a>
              </span>
            </div>
            <div className='text-indigo-700'>
              <a href='cskh.mtp-fashion@gmail.com'>cskh.mtp-fashion@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
