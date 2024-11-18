import React from 'react'
import photo1 from '../../assets/port1.png'
import photo2 from '../../assets/port2.png'
import photo3 from '../../assets/port3.png'

export default function Portfolio() {
    return (
      <>
      <div className='flex flex-col justify-center items-center'>
      <h2 className=" myTitle mt-32 text-4xl font-bold mb-4">PORTFOLIO COMPONENT </h2>
      <div className='flex items-center justify-center mb-6'>
          <div className='w-16 h-1 bg-slate-700'></div>
          <span className='text-slate-700 mx-3 text-xl'>★</span>
          <div className='w-16 h-1 bg-slate-700'></div>
        </div>


      </div>
        <div className="flex flex-wrap justify-between mb-5 px-16 gap-y-5 md:gap-y-1">
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo1} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo2} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo3} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo1} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo2} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
          <div className=" myDiv w-full lg:w-1/3 md:w-1/2 md:p-8 relative ">
            <img className="w-full rounded-lg" src={photo3} alt="Portfolio Image 1" />
            <div className='layDiv absolute rounded-lg flex justify-center items-center text-white text-9xl'>
            <i class="fa-solid fa-plus "></i>
            </div>
          </div>
        </div>
      </>
    );
  }
  