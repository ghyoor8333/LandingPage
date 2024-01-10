import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <>
        <div className= 'bg-emerald-500 w-full py-[100px]'>
         <div className='max-w-[1240px] mx-auto text-center font-bold'>
             <div className='text-xl md:text-4xl mt-4 mb-4 '>Learn with us</div>
             <div className='text-white text-xl  md:text-[60px] mt-4'>Grow with us</div>
             <div className='text-xl md:text-[30px] mt-4 md:mt-12 '>Learn  
             <Typed
                    className='pl-3'
                    strings={[' Web Development','Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={70}
                />
             </div>
         <button className='d-inline bg-black text-white p-3 rounded mt-4'>Get Started</button>
         </div>
        </div>
    </>
  )
}
