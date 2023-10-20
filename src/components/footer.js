import React from 'react'
import {BiLogoFacebookCircle,BiLogoMastercard} from "react-icons/bi"
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"
import {RiVisaFill} from "react-icons/ri"
import {BsPaypal} from "react-icons/bs"


export default function Footer() {
    return (
        <footer className='grid p-24 bg-gray-200 grid-cols-2 gap-8'>
            <div className='grid gap-4'>
                <h2 className='text-md font-semibold'>About the ChocoCraving</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-semibold text-green-600'> WHATSAPP</h2>
                    <h2 className='font-semibold text-blue-600'> EMAIL US</h2>
                </div>
            </div>
           <div className='flex justify-between'>

           <div className='grid gap-2'> 
                <h2 className='text-md font-semibold'>My Account</h2>
                <ul className='grid gap-2'>
                    <li>Track Order</li>
                    <li>My Orders</li>
                    <li>My Account</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='grid gap-2'>
                <h2 className='text-md font-semibold'>Information</h2>
                <ul className='grid gap-2'>
                    <li>About Us</li>
                    <li>Customer Reviews</li>
                    <li>Affiliate Program</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='grid gap-2'>
                <div>
                <h2 className='mb-2 text-md font-semibold'>Social Media</h2>
                <div className='flex items-center gap-4'>
                    <BiLogoFacebookCircle size={40} color='blue'/>
                    <IoLogoWhatsapp size={40} color='green' />
                    <AiFillInstagram size={40} color='red' />
                </div>
                </div>
               <div>
               <h2 className='text-md mb-2 font-semibold'>Accepted Payment Methods</h2>
                <div className='flex items-center gap-4'>
                    <RiVisaFill color='green' size={40}/>
                    <BiLogoMastercard color='red' size={40}/>
                    <BsPaypal color='blue' size={40}/>
                </div>
               </div>
            </div>

           </div>
           

        </footer>
    )
}
