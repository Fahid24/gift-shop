import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="px-16 pt-5  bg-sky-500 text-white sticky top-0 z-50">
      <div className="grid grid-cols-11">
        <h1 className="col-span-2 border mr-2 italic">Logo Here</h1>
        <div className="col-span-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className=" w-full   px-5 py-3 rounded-3xl text-black"
          />
        </div>
        <div className="flex gap-5 items-center justify-end col-span-3">
          <p>Login/Register</p>
          <p className="flex items-center">
            Cart/0
            <AiOutlineShoppingCart size={30} />
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <li className=" flex items-center gap-4 py-4">
          <FaBars size={20} />
          Categories
        </li>
        <ul className="flex gap-7">
          <li className="py-4">Home</li>
          <li className="py-4">Shop</li>
          <li className="py-4">Offer🔥</li>
          <li className="py-4">Trending</li>
          <li className="py-4">Track Order</li>
          <li className="py-4">Company</li>
          <li className="py-4">Additionals</li>
        </ul>
        <ul className="flex py-4 gap-7">
          <li>⭐ Shop Reviews 4.9/5</li>
          <li>🌠 Support</li>
        </ul>
      </div>
    </nav>
  );
}
