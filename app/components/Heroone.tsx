import React from 'react';

const Herone = () => {
  return (
    <section className='bg-[#F7F7F7] py-12'>
      <div className='container mx-auto px-4 md:px-12 mt-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Table Section */}
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='w-full max-w-sm'>
              <img
                src='/table3.png'
                alt='table-image'
                className='w-full h-auto object-contain'
              />
            </div>
            <h3 className='font-bold'>Side Table</h3>
            <a
              href='/shop'
              className='text-black font-medium  hover:no-underline hover:text-gray-800 transition'
            >
              View More
            </a>
            {/* Add gap and underline below View More */}
            <div className='mt-4 w-24 mx-auto border-b-2 border-black'></div>
          </div>

          {/* Sofa Section */}
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='w-full max-w-sm'>
              <img
                src='/soffaa.png'
                alt='sofa-image'
                className='w-full h-auto object-contain'
              />
            </div>
            <h3 className='font-bold'>Side Table</h3>
            <a
              href='/shop'
              className='text-black font-medium  hover:no-underline hover:text-gray-800 transition'
            >
              View More
            </a>
            {/* Add gap and underline below View More */}
            <div className='mt-4 w-24 mx-auto border-b-2 border-black'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herone;
