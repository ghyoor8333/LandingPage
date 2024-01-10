import React from 'react'

export default function Plans() {
  return (
    <div className='py-[100px] px-2 '>
       <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
        <div className='shadow-xl h-[400px] my-4 hover:scale-105 duration-500'>
          First
        </div>
        <div className='shadow-xl h-[400px] my-4 hover:scale-105 duration-500'>
          second
        </div>
        <div className='shadow-xl h-[400px] my-4 hover:scale-105 duration-500'>
          Third
        </div>
       </div>
    </div>
  )
}
