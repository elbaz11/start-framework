import React from 'react'

export default function Footer() {
  return (
    <>
<div className="bg-slate-700 w-full py-20 flex-1">
  <div className="flex flex-wrap flex-col md:flex-row md:justify-evenly">
    <div className="text-white mb-6 md:mb-0">
      <h2 className="text-2xl font-bold">LOCATION</h2>
      <p className="mt-1">2215 John Daniel Drive</p>
      <p className="mt-2">Clark, MO 65243</p>
    </div>
    <div className="text-white mb-6 md:mb-0">
      <h2 className="text-2xl font-bold">AROUND THE WEB</h2>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="text-white">
      <h2 className="text-2xl font-bold">ABOUT FREELANCER</h2>
      <p>
        Freelance is a free to use, licensed Bootstrap theme created <br /> by Route
      </p>
    </div>
  </div>
</div>

      <div className='bg-slate-800 w-full py-5'>
        <p className='text-white text-center'>
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}