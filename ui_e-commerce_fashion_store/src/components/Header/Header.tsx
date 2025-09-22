import { useEffect, useState } from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='relative w-full'>
      <Navbar isScrolled={isScrolled} />
      <Hero isScrolled={isScrolled} />
    </header>
  )
}
