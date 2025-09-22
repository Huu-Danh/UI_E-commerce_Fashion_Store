interface Props {
  isScrolled: boolean
}
export default function Hero({ isScrolled }: Props) {
  return (
    <div>
      {/* Banner */}
      <div className="w-full min-h-screen bg-[url('/banner1.avif')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center text-white">
        <h1
          className={`font-serif uppercase transition-all duration-500 ${
            isScrolled ? 'opacity-0 scale-90' : 'md:text-9xl text-5xl opacity-100'
          }`}
        >
          MTP-FASHION
        </h1>
        <p className='mt-4 text-lg md:text-2xl'>Phong cách thời trang hiện đại & cá tính</p>
        <button className='mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition'>
          Mua ngay
        </button>
      </div>
    </div>
  )
}
