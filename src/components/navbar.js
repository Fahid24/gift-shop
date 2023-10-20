import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaBars } from "react-icons/fa"

export default function Navbar() {
  return (

    <nav className='grid justify-center gap-5 pt-5 bg-black text-white'>
      <div className='nav-head flex items-center gap-20'>
        <img className='w-56' src='https://www.chococraving.com/wp-content/uploads/2020/12/llogo-white-1400x279.png' alt='' />
        <input type="text" placeholder="srarch for products..." className=" w-[100vh] p-2" />
        <p>Login/Register</p>
        <p className='flex items-center'>Cart/0<AiOutlineShoppingCart size={30} />
        </p>
      </div>
      <div className='flex pt-3 gap-20'>
        <ul className='flex gap-7'>
          <li className='bg-red-500 flex items-center gap-4 px-10 py-4'>
            <FaBars size={20}/>
            Categories</li>
          <li className='py-4'>Home</li>
          <li className='py-4'>Shop</li>
          <li className='py-4'>Offer🔥</li>
          <li className='py-4'>Trending
          </li>
          <li className='py-4'>Track Order</li>
          <li className='py-4'>Company</li>
          <li className='py-4'>Additionals
          </li>
        </ul>
        <ul className='flex py-4 gap-7'>
          <li >⭐ Shop Reviews 4.9/5</li>
          <li>🌠 Support</li>
        </ul>
      </div>

    </nav>
  )
}
