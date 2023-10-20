import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsWhatsapp, BsTiktok, BsInstagram, BsFacebook } from "react-icons/bs";
import {BiLogoMastercard} from "react-icons/bi"
import {RiVisaFill} from "react-icons/ri"
import {BsPaypal} from "react-icons/bs"

export default function FooterDescription() {
  return (
    <div className="py-20  lg:px-16 ">
      <div className="lg:grid grid-cols-3 lg:gap-10 ">
        <div>
          <h2 className=" font-semibold mb-2">About the Company</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            nunc vitae tellus lacinia imperdiet.us mauris pellentesque. Morbi
            tristique augue nec diam ultricies, nec volutpat dolor fermentum.
            Aenean ut tincidunt turpis, id ultricies nisl. Curm.
          </p>
        </div>
        <div className="flex lg:gap-20">
          <div className=" flex flex-col gap-y-2 ">
            <h3 className=" font-semibold">My Account</h3>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              My Order
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              Track Order
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              My Account
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              FAQs
            </p>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <h3 className="font-semibold">My Account</h3>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              My Order
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              Track Order
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              My Account
            </p>
            <p>
              <MdOutlineKeyboardArrowRight className="inline text-xl mr-2 text-gray-800" />
              FAQs
            </p>
          </div>
        </div>

        <div>
          <div>
            <h3 className="font-semibold">Social Media</h3>
            <div className="flex gap-5 mt-2 text-2xl">
              <BsFacebook className="text-sky-700" />
              <BsInstagram className="text-red-500 " />
              <BsTiktok />
              <BsWhatsapp className="text-green-500" />
            </div>
          </div>
          <div className="mt-5">
               <h2 className='text-md mb-2 font-semibold'>Accepted Payment Methods</h2>
                <div className='flex items-center gap-4'>
                    <RiVisaFill color='green' size={40}/>
                    <BiLogoMastercard color='red' size={40}/>
                    <BsPaypal color='blue' size={40}/>
                </div>
               </div>
        </div>
      </div>
    </div>
  );
}
