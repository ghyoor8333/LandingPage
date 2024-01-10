import React from 'react'
import laptop from '../assets/laptop.jpg'
export default function Experts() {
  return (
    <div className='max-w-{1240px} mx-auto p-2 my-10  md:grid grid-cols-2'>
         <div className='  col-span-1 md:w-[80%] text-center'>
            <img  src={laptop} alt="" />
         </div>
         <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-blue-600 font-bold my-2'>LEARN FROM EXPERT</h1>
            <p className='my-2 text-justify'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora maxime labore, perspiciatis ducimus expedita praesentium commodi, reiciendis dolor omnis quidem molestias consequuntur culpa blanditiis voluptates accusamus?
               Tempore dignissimos ipsa facere sequi, perferendis ullam earum? Corrupti corporis eveniet libero accusantium sed maxime praesentium recusandae inventore quia expedita, sint nihil eius. Illum!
            </p>
            <button className='w-[30%] font-bold bg-black text-white p-3 rounded'>Get Started</button>
         </div>
    </div>
  )
}
