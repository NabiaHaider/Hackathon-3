import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-[#FBEBB5]  min-h-screen flex items-center px-4 md:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        {/* left content */}
        <div className='flex flex-col justify-center space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 leading-snug text-center'>
            Rocket single <br /> seater
            </h1>
              <a
              href='/shop'
              className='inline-block text-center text-black font-medium underline hover:no-underline hover:text-gray-800 transition'
              style={{ textUnderlineOffset: '4px' }} // Adjust underline position
              >
               Shop Now
               </a>
               </div>
              {/* Right Side */}
               <div className='flex justify-center items-center bg-[#FBEBB5]'>
              <Image
             src="/sofa1.png"
            alt='Rocket Single Seater'
            height={1200}
           width={1200}
          className='w-full max-w-sm md:max-w-md object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;
