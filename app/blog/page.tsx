import React from "react";
import { SlCalender } from "react-icons/sl";
import { RiAdminFill } from "react-icons/ri";
import { GiWoodenSign } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";  // Ensure you're importing Link
import Image from "next/image";

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
              <img
                src="/belog1.jpg"
                alt="Blog Post"
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
              <img
                src="/belog2.jpg"
                alt="Blog Post"
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
              <img
                src="/2.jpeg"
                alt="Blog Post"
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
                <img
                  src="/b1.png"
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
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
                <img
                  src="/b2.png"
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
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
                <img
                  src="/b3.png"
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
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
                <img
                  src="/b4.png"
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
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
 </section>

 <section className="bg-pink-50 text-black py-10">
   <div className="container mx-auto px-4">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {/* First Column */}
      <div className="flex flex-col items-center text-center">
         <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
        <p className="text-xl text-gray-500 flex-grow mt-2">
           For all orders over $50, consectetur <span className='pr-72'>adipim scing elit.</span>
        </p>
       </div>

       {/* Second Column */}
       <div className="flex flex-col items-center text-center">
         <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
         <p className="text-xl text-gray-500 flex-grow mt-2">
           If the product has an issue, consectetur  <span className='pr-48'>adipim scing elit.</span>
         </p>
       </div>

       {/* Third Column */}
       <div className="flex flex-col items-center text-center">
         <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
         <p className="text-xl text-gray-500 flex-grow my-2">
           100% secure payments, consectetur <span className='pr-72'>adipim scing elit.</span>
         </p>
       </div>
     </div>
   </div>
 </section>
 <footer className="bg-white py-8 border-t border-gray-200">
   <div className="container mx-auto px-4 md:px-12">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       {/* Address */}
       <div className="text-gray-600 text-sm">
         <p>Jouhar</p>
         <p className='my-4'>pakistan</p>
       </div>

      {/* Links */}
       <div>
         <h3 className="text-gray-400 text-sm font-medium mb-3">Links</h3>
         <ul className="space-y-2">
           <li>
             <a href="#" className="text-black hover:text-gray-700 transition">Home</a>
           </li>
           <li>
             <a href="/shop" className="text-black hover:text-gray-700 transition">Shop</a>
           </li>
           <li>
             <a href="#" className="text-black hover:text-gray-700 transition">About</a>
           </li>
           <li>
             <a href="/contact" className="text-black hover:text-gray-700 transition">Contact</a>
           </li>
         </ul>
       </div>

       {/* Help */}
       <div>
        <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
         <ul className="space-y-2">
           <li>
             <a href="#" className="text-black hover:text-gray-700 transition">Payment Options</a>
         </li>
          <li>
             <a href="#" className="text-black hover:text-gray-700 transition">Return</a>
          </li>
           <li>
             <a href="#" className="text-black hover:text-gray-700 transition">Privacy Policies</a>
           </li>
         </ul>
       </div>

       {/* Newsletter */}
       <div>
         <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
         <div className="flex items-center">
           <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
           <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-300 transition">Subscribe</button>
         </div>
       </div>
     </div>

     {/* Bottom Section */}
     <div className="mt-8 text-center text-gray-600 text-sm">
       <hr />
     </div>
     <p className="pt-4">2022 Meubel House. All rights reserved.</p>
   </div>
 </footer>

    </div>
  );
};

export default Blogpage;



