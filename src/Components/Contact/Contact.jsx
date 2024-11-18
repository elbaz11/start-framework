import React from 'react'

export default function Contact() {
    return (
      <>
        <div className="inputsForm mt-28 flex flex-col items-center mx-4">
          <div>
            <h2 className=" myTitle text-4xl font-bold mb-6">CONTACT SECTION</h2>
            <div className='flex items-center justify-center mb-6'>
          <div className='w-16 h-1 bg-slate-700'></div>
          <span className='text-slate-700 mx-3 text-xl'>★</span>
          <div className='w-16 h-1 bg-slate-700'></div>
        </div>

          </div>
  
          <div className="mb-6 mx-3 flex justify-center w-full">
            <input
              placeholder="userName"
              type="text"
              id="default-input"
              className="bg-stone-50 border border-gray-300 border-t-0 border-e-0 border-s-0 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-4 focus:outline-none placeholder-gray-500 sm:p-4"
            />
          </div>
  
          <div className="mb-6 mx-3 flex justify-center w-full">
            <input
              placeholder="userAge"
              type="text"
              id="Age-input"
              className="bg-stone-50 border border-gray-300 border-t-0 border-e-0 border-s-0 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-4 focus:outline-none placeholder-gray-500 sm:p-4"
            />
          </div>
  
          <div className="mb-6 mx-3 flex justify-center w-full">
            <input
              placeholder="userEmail"
              type="email"
              id="Email-input"
              className="bg-stone-50 border border-gray-300 border-t-0 border-e-0 border-s-0 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-4 focus:outline-none placeholder-gray-500 sm:p-4"
            />
          </div>
  
          <div className="mb-6 mx-3 flex justify-center w-full">
            <input
              placeholder="userPassword"
              type="password"
              id="Pass-input"
              className="bg-stone-50 border border-gray-300 border-t-0 border-e-0 border-s-0 text-gray-900 text-sm rounded-lg block w-full md:w-1/2 p-4 focus:outline-none placeholder-gray-500 sm:p-4"
            />
          </div>
  
          <div className="w-full md:w-1/2 flex justify-start mb-6">
            <button className="bg-emerald-500 rounded-lg p-2 text-white">Send Message</button>
          </div>
        </div>
      </>
    );
  }
  