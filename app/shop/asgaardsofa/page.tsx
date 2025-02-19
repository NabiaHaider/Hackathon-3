'use client';

import Image from 'next/image';
import Link from 'next/link';


const AsgaardSofa = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb Bar */}
      <div className="text-gray-500 text-sm my-4 ml-12">
        <Link href="/home" className="hover:text-black"> Home </Link> &gt;
        <Link href="/shop" className="hover:text-black"> Shop </Link> &gt;
        <span className="font-medium"> Asgaard Sofa </span>
      </div>

      {/* 1st Section with Three Columns */}
      <section className="grid grid-cols-3 gap-8">
        {/* First Column: Four Images */}
        <div className="flex flex-col gap-4 mr-24">
          <Image
            src="/s2p1c1r1.png"
            alt="Product 1"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/s2p1c1r2.png"
            alt="Product 2"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/s2p1c1r3.png"
            alt="Product 3"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/setsofa.png"
            alt="Product 4"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
        </div>

        {/* Second Column: Large Image */}
        <div className='mr-8 h-48 w-96'>
          <Image
            src="/setsofa.png"
            alt="Asgaard Sofa Large Image"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* Third Column: Product Details */}
        <div className="flex flex-col gap-4">
          {/* Product Name */}
          <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>

          {/* Price */}
          <p className="text-xl text-gray-500">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span> // Filled stars
            ))}
            <span className="text-gray-300">&#9733;</span> {/* Half star */}
            <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
          </div>

          {/* Descriptive Text */}
          <div className="flex flex-col gap-2">
            
            <p className="text-sm text-gray-600">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            .</p>
        
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Size:</span>
            <button className="px-4 py-2 border rounded">XS</button>
            <button className="px-4 py-2 border rounded">L</button>
            <button className="px-4 py-2 border rounded">XL</button>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Color:</span>
            <button className="w-8 h-8 rounded-full border bg-purple-500"></button>
            <button className="w-8 h-8 rounded-full border bg-black"></button>
            <button className="w-8 h-8 rounded-full border bg-yellow-500"></button>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded text-center"
            />
            <a
            href='/shop/asgaardsofa/cartside'>
            <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button></a>
          </div>

          {/* Additional Text in Two Columns */}
          <div className="grid grid-cols-2 gap-4 mt-4">
           <ul> <li className="text-sm text-gray-600">SKU: SS001</li>
            <li className="text-sm text-gray-600">category: Sofa</li>
            <li className="text-sm text-gray-600">Tags: Sofa, Chair, Home, Shop</li>
            <li className="text-sm text-gray-600 flex gap-3">Share: <Link href="#" className="social-btn facebook">f</Link>
      <Link href="#" className="social-btn linkedin">in</Link>
      <Link href="#" className="social-btn twi">t</Link> </li></ul>
          </div>
        </div>
      </section>
{/* 2nd section */}
      <section className="bg-white py-10">
  <div className="container mx-auto px-4">
    {/* First Row: Three Text Boxes */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className=" text-center">
        <h3 className="text-xl font-normal">Description</h3>
        
      </div>
      <div className=" text-center text-gray-400">
        <h3 className="text-xl font-normal">Additional Information</h3>
       
      </div>
      <div className=" text-center text-gray-400">
        <h3 className="text-xl font-normal">Reviews [5]</h3>
        
      </div>
    </div>

    {/* Second Row: Two Large Images */}
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div>
        <Image
          src="/s2p1s3c3.png" 
          alt="Second Row Image 1"
          width={600}
          height={400}
          className="object-cover rounded"
        />
      </div>
      <div>
        <Image
          src="/s2p1s3c2.png" 
          alt="Second Row Image 2"
          width={600}
          height={400}
          className="object-cover rounded"
        />
      </div>
    </div>

    {/* Third Row: Two Columns with Text */}
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4">
         <p className="text-gray-600">
        Embodying the row, wayward spirit of rock n roll the Kilburn portable active stereo speaker takes the unmistakable look sound of Marshall unplugs the chords, and takes the show on the road.

        </p>
      </div>
      <div className="p-4">
                <p className="text-gray-600">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering Setting the bar as one of the loud speakers in its class, the Kilburn is a compact stout-hearted hete with a well-balanced audio which boasts a clear midrom and extended mhighs for a sound that is both articulate and pronounced. Ine analogue knobs allow you to fine tune the contr to your personcar preferences while the gutor influenced lecther strop enables easy and stylish travel
        </p>
      </div>
    </div>
  </div>
</section>
{/* Third Section: Product Grid */}
<section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 ">Related Products</h2>
        
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Image
                src="/product1.jpeg"
                alt="Product 1"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/product2.jpeg"
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dinning table with dining chair</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/product3.jpeg"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/product4.jpeg"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2 ">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center mt-8 ml-auto">
            <a href="#" className="underline text-sm mb-4">
             View More
             </a>
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
                        <p>pakistan</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-gray-800 hover:text-gray-900 transition">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-800 hover:text-gray-900 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Payment Options</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Return</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Privacy Policies</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-800 transition">Subscribe</button>
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

export default AsgaardSofa;
