import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";
import { GiWoodenSign } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";  // Ensure you're importing Link
import Image from "next/image";
import Footer from '../components/Footer';

const Blogpage = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/bgpic.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <Image
            src="/bg.png"
            alt="Product 4"
            width={100}
            height={100}
            className="object-contain mx-auto"
          />
          <h1 className="text-7xl mb-7 font-medium">Blog</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">Blog</span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row w-full py-10 px-5 ml-52">
        {/* Blog Post Section */}
        <div className="w-full md:w-2/4 px-5">
          {/* Blog Post */}
          <div className="mb-10">
            <div className="relative w-full h-64  mb-4 rounded-lg overflow-hidden">
              <Image
                src="/belog1.jpg"
                alt="Blog Post"
                width={600} // Set appropriate width
                height={300} // Set appropriate height
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <RiAdminFill />
              <span className="mr-4 ml-2"> Admin </span>
              <SlCalender />
              <span className="mr-4 ml-2"> 14 Oct 2022 </span>
              <GiWoodenSign />
              <span className="ml-2"> Wood </span>
            </div>
            <h2 className="text-3xl font-semibold mb-2">
              Going all-in with millennial design
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ulitrices. Morbi blandit cursus risus at
              ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
              Cursus mattis molestie a iaculis is erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              euismod elementum.
            </p>
            <Link href="#" className="text-black mt-2 underline hover:underline">
              Read more
            </Link>
          </div>

          <div className="mb-10">
            <div className="relative w-full h-64  mb-4 rounded-lg overflow-hidden">
              <Image
                src="/belog2.jpg"
                alt="Blog Post"
                width={600} // Set appropriate width
                height={300} // Set appropriate height
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <RiAdminFill />
              <span className="mr-4 ml-2"> Admin </span>
              <SlCalender />
              <span className="mr-4 ml-2"> 14 Oct 2022 </span>
              <GiWoodenSign />
              <span className="ml-2"> Wood </span>
            </div>
            <h2 className="text-3xl font-semibold mb-2">
              Exploring new ways of decorating
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ulitrices. Morbi blandit cursus risus at
              ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
              Cursus mattis molestie a iaculis is erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              euismod elementum.
            </p>
            <Link href="#" className="text-black mt-2 underline hover:underline">
              Read more
            </Link>
          </div>

          <div className="mb-10">
            <div className="relative w-full h-64  mb-4 rounded-lg overflow-hidden">
              <Image
                src="/2.jpeg"
                alt="Blog Post"
                width={600} // Set appropriate width
                height={300} // Set appropriate height
                className="object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <RiAdminFill />
              <span className="mr-4 ml-2"> Admin </span>
              <SlCalender />
              <span className="mr-4 ml-2"> 14 Oct 2022 </span>
              <GiWoodenSign />
              <span className="ml-2"> Wood </span>
            </div>
            <h2 className="text-3xl font-semibold mb-2">
              Handmade pieces that took time to make
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
              sollicitudin aliquam ulitrices. Morbi blandit cursus risus at
              ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
              Cursus mattis molestie a iaculis is erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              euismod elementum.
            </p>
            <Link href="#" className="text-black mt-2 underline hover:underline">
              Read more
            </Link>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/4 px-5 ml-8">
          {/* Search Bar */}
          <div className="mb-10 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <Link href="#" className="flex justify-between text-gray-400 hover:text-black mt-10">
                  <span>Craft</span> <span>2</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex justify-between text-gray-400 hover:text-black  mt-7">
                  <span>Design</span> <span>8</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex justify-between text-gray-400 hover:text-black mt-7">
                  <span>Handmade</span> <span>7</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex justify-between text-gray-400 hover:text-black mt-7">
                  <span>Interior</span> <span>1</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex justify-between text-gray-400 hover:text-black mt-7">
                  <span>Wood</span> <span>6</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-semibold  mt-36">Recent Posts</h2>
            <ul className="space-y-4 mt-10">
              <li className="flex items-center">
                <Image
                  src="/b1.png"
                  alt="Thumbnail"
                  width={64} // Equivalent to w-16
                  height={64} // Equivalent to h-16
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <Link href="#" className="text-lg font-medium hover:text-yellow-500">
                    Going all-in with millennial design
                  </Link>
                  <p className="text-sm text-gray-600">03 Aug 2022</p>
                </div>
              </li>
            </ul>

            <ul className="space-y-4 mt-5">
              <li className="flex items-center">
                <Image
                  src="/b2.png"
                  alt="Thumbnail"
                  width={64} // Equivalent to w-16
                  height={64} // Equivalent to h-16
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <Link href="#" className="text-lg font-medium hover:text-yellow-500">
                    Exploring new ways of decorating
                  </Link>
                  <p className="text-sm text-gray-600">03 Aug 2022</p>
                </div>
              </li>
            </ul>

            <ul className="space-y-4 mt-4">
              <li className="flex items-center">
                <Image
                  src="/b3.png"
                  alt="Thumbnail"
                  width={64} // Equivalent to w-16
                  height={64} // Equivalent to h-16
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <Link href="#" className="text-lg font-medium hover:text-yellow-500">
                    Handmade pieces that took time to make
                  </Link>
                  <p className="text-sm text-gray-600">03 Aug 2022</p>
                </div>
              </li>
            </ul>

            <ul className="space-y-4 mt-4">
              <li className="flex items-center">
                <Image
                  src="/b4.png"
                  alt="Thumbnail"
                  width={64} // Equivalent to w-16
                  height={64} // Equivalent to h-16
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <Link href="#" className="text-lg font-medium hover:text-yellow-500">
                    The art of woodworking and design
                  </Link>
                  <p className="text-sm text-gray-600">03 Aug 2022</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href={`/shop?page=1`}>
            <div className="w-10 h-10 flex items-center justify-center border-yellow-200 rounded-md bg-yellow-200 hover:bg-yellow-300 hover:text-black">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
              Next
            </div>
          </Link>
        </div>
      </section>  <section className="bg-pink-50 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
              <p className="text-xl text-gray-500 flex-grow mt-2">
                For all orders over $50, consectetur <br></br> <span className='text-center'>adipim scing elit.</span>
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
              <p className="text-xl text-gray-500 flex-grow mt-2">
                If the product has an issue, consectetur <br></br> <span className='text-ce'>adipim scing elit.</span>
              </p>
            </div>

            {/* Third Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
              <p className="text-xl text-gray-500 flex-grow my-2">
                100% secure payments, consectetur <br></br> <span className='text-center'>adipim scing elit.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
};

export default Blogpage;
