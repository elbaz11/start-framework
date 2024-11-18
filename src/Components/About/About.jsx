import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function About() {
    let [count , setCount]=useState(0)
    function change(){
        setCount(Math.round(Math.random()*100))
    }

    useEffect(function(){

        console.log('mounting');

        let x = setInterval(()=>{
            console.log('hello');
            
        },1000)

        return()=>{
            clearInterval(x)
            console.log('un mount');
            
        }
        
    },[])

    useEffect(()=>{

        if(count==0){
            return;
        }
        console.log('updating');

    },[count])
   
  return (<>
 <div className='bg-emerald-500 min-h-screen flex flex-col items-center justify-center px-4'>
        <h2 className=' text-white text-4xl font-bold mb-4'>ABOUT COMPONENT</h2>
        <div className='flex items-center justify-center mb-6'>
          <div className='w-16 h-1 bg-white'></div>
          <span className='text-white mx-3 text-xl'>★</span>
          <div className='w-16 h-1 bg-white'></div>
        </div>
        <div className='w-full flex flex-wrap justify-center'>
          <div className='w-full md:w-1/2 px-10 lg:px-20'>
            <p className='text-white'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className='w-full md:w-1/2 px-10 lg:px-20 mt-6 md:mt-0'>
            <p className='text-white'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}