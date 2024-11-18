
import React from 'react'
import pic from '../../assets/avatar.svg'

export default function Home() {
  return <>
  <div className='bg-emerald-500 min-h-screen flex flex-col items-center justify-center'>
    <div className='flex flex-col items-center justify-center'>
      <div>
        <img width={270} src={pic} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center'>
      <h2 className=" myTitle mt-10 text-4xl font-bold mb-4 text-white">START FRAMEWORK </h2>
      <div className='flex items-center justify-center mb-2'>
          <div className='w-16 h-1 bg-white'></div>
          <span className='text-white mx-3 text-xl'>★</span>
          <div className='w-16 h-1 bg-white'></div>
        </div>
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>


    </div>

  </div>
  </>
   
  
}
    
  

