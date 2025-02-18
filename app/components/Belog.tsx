import React from 'react';
import Image from 'next/image';

const Belog = () => {
  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>Our Belogs</h2>
          <p className='text-gray-600 mt-2'>
            Find a bright ideal to suit your taste with our great selection.
          </p>
        </div>
        <div className='flex gap-4'>
          {/* Blog Item */}
          <div className='flex-1 text-center'>
            <Image
              src='/pic0.jpg'
              width={400}
              height={400}
              alt='pic'
              className='mx-auto object-cover rounded-lg'
            />
            <p className='mt-2 text-gray-700'>Going all-in with millennial design</p>
            <a href='/belog' className='mt-2 inline-block text-black font-semibold'>
              Read More
            </a>
            <div className='mt-1 w-16 mx-auto border-b-2 border-black'></div>
            {/* Clock and Calendar */}
            <div className='flex justify-center items-center gap-4 mt-2 text-gray-600 text-sm'>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6l4 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
                  />
                </svg>
                <span>5 min</span>
              </div>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7V3m8 4V3m-9 10h10m-9 4h10M3 10h18M5 21h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z'
                  />
                </svg>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
          {/* Repeat for other blog items */}
          <div className='flex-1 text-center'>
            <Image
              src='/pic2.jpg'
              width={400}
              height={400}
              alt='pic'
              className='mx-auto object-cover rounded-lg'
            />
            <p className='mt-2 text-gray-700'>Exploring vibrant interior styles</p>
            <a href='/belog' className='mt-2 inline-block text-black font-semibold'>
              Read More
            </a>
            <div className='mt-1 w-16 mx-auto border-b-2 border-black'></div>
            <div className='flex justify-center items-center gap-4 mt-2 text-gray-600 text-sm'>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6l4 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
                  />
                </svg>
                <span>5 min</span>
              </div>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7V3m8 4V3m-9 10h10m-9 4h10M3 10h18M5 21h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z'
                  />
                </svg>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
          <div className='flex-1 text-center'>
            <Image
              src='/pic3.jpg'
              width={400}
              height={400}
              alt='pic'
              className='mx-auto object-cover rounded-lg'
            />
            <p className='mt-2 text-gray-700'>Minimalism redefined for modern times</p>
            <a href='/belog' className='mt-2 inline-block text-black font-semibold'>
              Read More
            </a>
            <div className='mt-1 w-16 mx-auto border-b-2 border-black'></div>
            <div className='flex justify-center items-center gap-4 mt-2 text-gray-600 text-sm'>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6l4 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
                  />
                </svg>
                <span>5 min</span>
              </div>
              <div className='flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7V3m8 4V3m-9 10h10m-9 4h10M3 10h18M5 21h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z'
                  />
                </svg>
                <span>12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
        {/* View All Posts Button */}
        <div className='text-center mt-8'>
          <a
            href='/belog'
            className='text-lg font-semibold text-black'
          >
            View All Posts
          </a>
          <div className='mt-2 w-24 mx-auto border-b-2 border-black'></div>
        </div>
      </div>
    </section>
  );
};

export default Belog;
