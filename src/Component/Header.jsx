import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
export default function Header() {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='bg-emerald-500 p-4'>
       <div className='max-w-[1240px] py-[12px]  m-auto flex justify-between items-center'>
          <div className='text-3xl font-bold'>
            <a href=''>EducationADDA</a>
          </div>
          {
               toggle ?  <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-4xl md:hidden block" />:
               <AiOutlineClose  onClick={()=>setToggle(!toggle)} className="text-4xl md:hidden block"/>
          }
         
         
          <ul className='hidden md:flex gap-10 text-white'>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>Company</a>
            </li>
            <li>
                <a href=''>Resources</a>
            </li>
            <li>
            <a href=''>About</a>
            </li>
            <li>
            <a href=''>Contact</a>
            </li>
          </ul>

          {/* Responsive menu */}
          <ul className={`duration-300 md:hidden text-white fixed bg-black  top-[92px] w-full h-screen
                        ${toggle ? 'left-[0px]': 'left-[-100%]'}`
                        }>
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Company
            </li>
            <li className='p-5'>
                Resources
            </li>
            <li className='p-5'>
                About
            </li>
            <li className='p-5'>
                Contact
            </li>
          </ul>
       </div>
    </div>


  )
}
