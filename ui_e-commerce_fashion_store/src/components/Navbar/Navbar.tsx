import { useState } from 'react'
import Sidebar from '../Sidebar'

interface Props {
  isScrolled: boolean
}
export default function Navbar({ isScrolled }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      {/* Navbar Top */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
          isScrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto flex items-center py-6 px-10 text-white'>
          <div className='flex-1'>
            <a href='#' className={`hidden ${isScrolled ? 'md:inline' : ''}`}>
              + Contact
            </a>
          </div>

          <div className='flex-20 md:flex-1 md:text-center'>
            <div
              className={`font-serif uppercase transition-all duration-500 ${
                isScrolled ? 'opacity-100 md:text-2xl text-xl' : 'opacity-0'
              }`}
            >
              MTP-FASHION
            </div>
          </div>

          <div className='flex-1 flex justify-end'>
            <ul className='flex gap-x-6 items-center'>
              {/* Giỏ hàng */}
              <li>
                <button aria-label='Giỏ hàng'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 hover:scale-110 transition'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                      1.263 12c.07.665-.45 1.243-1.119 1.243H4.25
                      a1.125 1.125 0 0 1-1.12-1.243l1.264-12
                      A1.125 1.125 0 0 1 5.513 7.5h12.974
                      c.576 0 1.059.435 1.119 1.007Z'
                    />
                  </svg>
                </button>
              </li>

              {/* Tài khoản */}
              <li>
                <button aria-label='Tài khoản'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 hover:scale-110 transition'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75
                      a7.488 7.488 0 0 0-5.982 2.975m11.963 0
                      a9 9 0 1 0-11.963 0m11.963 0
                      A8.966 8.966 0 0 1 12 21
                      a8.966 8.966 0 0 1-5.982-2.275M15
                      9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                  </svg>
                </button>
              </li>

              {/* Tìm kiếm */}
              <li>
                <button aria-label='Tìm kiếm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 hover:scale-110 transition'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m21 21-5.197-5.197m0 0
                      A7.5 7.5 0 1 0 5.196 5.196
                      a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                </button>
              </li>

              {/* Menu */}
              <li>
                <button aria-label='Menu' className='flex items-center gap-1' onClick={() => setIsOpen(true)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 5.25h16.5m-16.5 4.5h16.5
                      m-16.5 4.5h16.5m-16.5 4.5h16.5'
                    />
                  </svg>
                  <span className='hidden md:inline'>MENU</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
