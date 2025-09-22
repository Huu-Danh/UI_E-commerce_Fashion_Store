interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}
export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div>
      {/* Overlay + Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Nền mờ */}
        <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setIsOpen(false)}></div>

        {/* Sidebar */}
        <div
          className={`absolute pl-10 top-0 right-0 h-full w-2/3 md:w-3/7 bg-white text-black shadow-lg transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='h-full overflow-y-auto p-6'>
            {/* Nút đóng */}
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full'
            >
              ✕
            </button>

            {/* Menu chính */}
            <nav className='flex flex-col space-y-4 font-serif text-xl md:text-2xl'>
              <a href='#' className='hover:underline'>
                New In
              </a>
              <a href='#' className='hover:underline'>
                Women
              </a>
              <a href='#' className='hover:underline'>
                Men
              </a>
              <a href='#' className='hover:underline'>
                Event
              </a>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </nav>

            {/* Nhóm link phụ */}
            <div className='pt-10 flex flex-col space-y-4 font-serif font-medium md:text-xl'>
              <a href='#' className='hover:underline'>
                About Us
              </a>
              <a href='#' className='hover:underline'>
                Help
              </a>
              <a href='#' className='hover:underline'>
                Contact Us
              </a>
            </div>
            <div className='py-10 flex flex-col space-y-4 font-serif font-medium md:text-xl'>
              <a href='#' className='hover:underline'>
                My Account
              </a>
              <a href='#' className='hover:underline'>
                My Orders
              </a>
              <a href='#' className='hover:underline'>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
