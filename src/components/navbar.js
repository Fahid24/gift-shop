import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Navbar() {
  return (

    <nav className='grid justify-center bg-black text-white'>
      <div className='nav-head flex items-center gap-20'>
        <img className='w-56' src='https://www.chococraving.com/wp-content/uploads/2020/12/llogo-white-1400x279.png' alt='' />
        <input type="text" placeholder="srarch for products..." className=" w-[100vh] p-2" />
        <p>Login/Register</p>
        <p className='flex items-center'>Cart/0<AiOutlineShoppingCart size={30} />
        </p>
      </div>
      <div>

      </div>

    </nav>
  )
}
