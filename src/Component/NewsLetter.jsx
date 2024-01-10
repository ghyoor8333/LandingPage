import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-emerald-500 p-4'>
     <div className='max-w-[1240px] mx-auto md:flex justify-between pt-[70px] pb-[40px]'>
        <div className='m-2'>
         <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills</h1>
         <span className='text-white'> Sign Upto our newsletter and stay up to date</span>
        </div>
        <div className='m-2'>
            <input type="text" className='p-3 mr-2 text-slate-600 rounded' placeholder='Enter your email' />
            <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>
            <br/>
            <p className='text-white mt-4'> 
            We care about the protection of your data.Read our <br/> <a href='' className='text-black'>Privacy Policy.</a>
            </p>
        </div>
     </div>
    </div>
  )
}
