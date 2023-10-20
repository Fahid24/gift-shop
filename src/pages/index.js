import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Cetagory from '@/components/sections/cetagory'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Navbar/>
      <Cetagory/>
      <Footer/>
    </div>
  )
}
