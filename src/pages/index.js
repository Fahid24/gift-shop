import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-200 flex justify-center items-center h-[100vh] '>
      <h1 className="text-5xl font-bold "> hello kako</h1>
    </div>
  )
}
