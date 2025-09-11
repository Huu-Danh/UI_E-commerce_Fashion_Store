import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

interface Props {
  childrent?: React.ReactNode
}

export default function MainLayout({ childrent }: Props) {
  return (
    <div>
      <Header />
      <div className='bg-indigo-200 h-screen'></div>
      {childrent}
      <Footer />
    </div>
  )
}
