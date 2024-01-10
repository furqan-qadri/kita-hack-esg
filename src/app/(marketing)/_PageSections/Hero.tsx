import React from 'react'
import './hero.css'; 
import Image from 'next/image';
import treeImage from './tree.png'; 
export const Hero = () => {
  return (
    <div className='mx-14'>
    <div className='hero-main flex mt-16 justify-between'>

          <div className='flex flex-col gap-6 hero-left max-w-2xl'>
          <div className='hero-1'>Empower your sustainability journey with us </div>
          <div className='hero-2'>We help businesses generate ESG reports and insights quickly and securely using AI!  </div>
          <div className='flex gap-12'>
            <button className='cta-button'> <span className='cta-span'>Get started</span></button>
            <button className='cta-button'> <span className='cta-span'>How we do it </span></button>
          </div>
          </div>


          <div>
            <Image src={treeImage} alt="" />
        </div>
        </div>
    </div>
    
   
  )
}

export default Hero