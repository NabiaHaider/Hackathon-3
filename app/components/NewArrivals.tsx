import React from 'react'
import Image from 'next/image'

const NewArrivals = () => {
  return (
    <section className='bg-[#FBF5DC] py-12'>
     <div className='container mx-auto px-4 md:px-16 grid grid-cols md:grid-cols-2 items-center gap-8'>
      {/* Image Section */}
      <div className='flex justify-center'>
       <Image 
       src='/sofaset1.png'
       width={1600}
       height={1600}
       alt='Sofa Set'
       className='w-full object-contain'
       />
      </div>

      {/* Text Section */}
      <div className='text-center  space-y-4'>
        <p className='text-lg font-medium text-gray-600 text-center'>New Arrivals</p>
        <h2 className='text-4xl font-bold text-gray-800 text-center'>Asgaard sofa</h2>
        <a
        href='/shop/asgaardsofa'
        className='inline-block bg-white border border-black text-black font-medium px-6 py-3 mt-5 hover:bg-black hover:text-white transition'
        >Order Now
        </a>
      </div>
      </div> 
    </section>
  );
};

export default NewArrivals
