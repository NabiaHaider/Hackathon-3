'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import ProductListing from '../components/ProductListing';
import SearchAndFilter from '../components/SearchAndFilter';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../components/pagination';
import ShoppingCart from '../components/Card';
import { Product } from '../types/Product';
import ShopLine from '../components/shop';
import ProductDetail from '../product/[id]/ProductDetail';

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Change this value to adjust the number of products per page

  // Fetch products from Sanity on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        category,
        "id": _id,
        price,
        description,
        stockLevel,
        imagePath,
        discountPercentage,
        isFeaturedProduct,
        name,
        "image":image.asset._ref
      }`;

      try {
        const products = await client.fetch(query);
        setProducts(products);
        setFilteredProducts(products); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle filtering
  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Calculate paginated products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/bgpic.jpg" // Replace with the correct image file path
          alt="Shop Banner"
          height={400}
          width={1600}
          className="w-full h-40 md:h-auto object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
          Shop
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-700 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{'>'}</span>
            <Link href="/shop" className="hover:underline">
              Shop
            </Link>
          </p>
        </div>
      </div>

      <div className='my-6 mx-4 flex justify-end'>
        <ShoppingCart />
        </div>
 
        <div className='my-6 mx-4 flex justify-end'>
        <ShopLine />
        </div>


      {/* Search and Filter Section */}
      <SearchAndFilter products={products} onFilter={handleFilter} />

      {/* Product Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map(product => (
          <ProductListing product={product} key={product.id} />
        ))}
      </div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
{products.map((product: Product) => (
                   <ProductDetail product={product} key={product.id} />
                 ))}
 {/* 3RD Section: CONCEPT Posts */}
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
           If the product has an issue, consectetur <span className='pr-48'>adipim scing elit.</span>
         </p>
       </div>

       {/* Third Column */}
       <div className="flex flex-col items-center text-center">
         <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
         <p className="text-xl text-gray-500 flex-grow mt-2">
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
                         <p>pakistan</p>
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
                                 <a href="/blog" className="text-black hover:text-gray-700 transition">Blog</a>
                             </li>
                             <li>
                                 <a href="/contact" className="text-black hover:text-gray-700 transition">Contact</a>
                             </li>
                         </ul>
                     </div>

                     {/* Help */}
                     <div>
                         <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
                         <ul className='space-y-2'>
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
                         <h3 className="text-gray-400 text-sm font-medium mb-3">Newsletter</h3>
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

export default Shop;


// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import ProductListing from '../components/ProductListing';
// import SearchAndFilter from '../components/SearchAndFilter';


// const Shop = () => {
//   return (
//     <div>
// {/* First Section with Tailwind Background */}
// <section
//   className="relative h-[60vh] w-full bg-cover bg-center"
//   style={{
//     backgroundImage: `url('/bgpic.jpg')`, // Using the image as a background for full control
//   }}
// >
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-white opacity-50"></div>
//   {/* Content */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
//   <Image
//           src="/bg.png"
//           alt="Product 4"
//           width={70}
//           height={70}
//           className="object-contain mx-auto"
//         />
//     <h1 className="text-7xl mb-7 font-medium">Shop</h1>
//     <p className="text-2xl mt-1 font-semibold">
//       <Link href="/">Home</Link> &gt; <span className='text-gray-600'> Shop</span>
//     </p>
//   </div>
// </section>


//      {/* Second Section: Product Grid */}
// <section className="bg-white text-black py-10">
//   <div className="container mx-auto px-4 text-center">

//     {/* Product Grid */}
//     <div className="grid grid-cols-4 gap-4">
      
//       {/* Column 1 */}
//       <div className="text-center">
//         <Image
//           src="/product1.jpeg"
//           alt="Product 1"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
//         <p className="text-lg font-bold">Rs. 25,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/product2.jpeg"
//           alt="Product 1"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Granite dining table with dining chair</h3>
//         <p className="text-lg font-bold">Rs. 25,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/product3.jpeg"
//           alt="Product 1"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
//         <p className="text-lg font-bold">Rs. 25,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/product4.jpeg"
//           alt="Product 1"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
//         <p className="text-lg font-bold">Rs. 25,000.00</p>
//       </div>

//       {/* Column 2 */}
//       <div className="text-center">
//         <Image
//           src="/c1r2.jpeg"
//           alt="Product 2"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Grain Coffee Table</h3>
//         <p className="text-lg font-bold">Rs. 15,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c2r2.jpeg"
//           alt="Product 2"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Kant Coffee table</h3>
//         <p className="text-lg font-bold">Rs. 225,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c3r2.jpeg"
//           alt="Product 2"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Round coffee table_color 2</h3>
//         <p className="text-lg font-bold">Rs. 251,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c4r2.jpeg"
//           alt="Product 2"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Reclaimed teak coffee table</h3>
//         <p className="text-lg font-bold">Rs. 25,200.00</p>
//       </div>

//       {/* Column 3 */}
//       <div className="text-center">
//         <Image
//           src="/c3r1.jpeg"
//           alt="Product 3"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Plain console</h3>
//         <p className="text-lg font-bold">Rs. 258,200.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c2r3.jpeg"
//           alt="Product 3"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Reclaimed teak side board</h3>
//         <p className="text-lg font-bold">Rs. 20,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c3r3.jpeg"
//           alt="Product 3"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">SJP_0825</h3>
//         <p className="text-lg font-bold">Rs. 200,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c4r3.jpeg"
//           alt="Product 3"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Bella Chair and table</h3>
//         <p className="text-lg font-bold">Rs. 100,000.00</p>
//       </div>

//       {/* Column 4 */}
//       <div className="text-center">
//         <Image
//           src="/side_table.jpeg"
//           alt="Product 4"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Granite square side table</h3>
//         <p className="text-lg font-bold">Rs. 58,800.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c2r4.jpeg"
//           alt="Product 4"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Asgaard Sofa</h3>
//         <p className="text-lg font-bold">Rs. 250,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c3r4.jpeg"
//           alt="Product 4"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Maya sofa three seater</h3>
//         <p className="text-lg font-bold">Rs. 115,000.00</p>
//       </div>
//       <div className="text-center">
//         <Image
//           src="/c4r4.jpeg"
//           alt="Product 4"
//           width={150}
//           height={150}
//           className="object-contain mx-auto"
//         />
//         <h3 className="text-sm font-semibold mt-2">Outdoor sofa set</h3>
//         <p className="text-lg font-bold">Rs. 244,000.00</p>
//       </div>

    
//     </div>
//   </div>
// </section>

//       {/* Pagination Section */}
//       <section className="py-10 text-center">
//         <div className="flex justify-center gap-4">
//           <Link href={`/shop?page=1`}>
//             <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-200 hover:bg-yellow-300 hover:text-black">
//               1
//             </div>
//           </Link>
//           <Link href={`/shop?page=2`}>
//             <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
//               2
//             </div>
//           </Link>
//           <Link href={`/shop?page=3`}>
//             <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
//               3
//             </div>
//           </Link>
//           <Link href={`/shop?page=next`}>
//             <div className="w-10 h-10 flex items-center justify-center border-yellow-100 rounded-md bg-yellow-100 hover:bg-yellow-200 hover:text-black">
//               Next
//             </div>
//           </Link>
//         </div>
//       </section>

//  {/* 3RD Section: CONCEPT Posts */}
//  <section className="bg-pink-50 text-black py-10">
//   <div className="container mx-auto px-4">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {/* First Column */}
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
//         <p className="text-xl text-gray-500 flex-grow mt-2">
//           For all orders over $50, consectetur <span className='pr-72'>adipim scing elit.</span>
//         </p>
//       </div>

//       {/* Second Column */}
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
//         <p className="text-xl text-gray-500 flex-grow mt-2">
//           If the product has an issue, consectetur <span className='pr-48'>adipim scing elit.</span>
//         </p>
//       </div>

//       {/* Third Column */}
//       <div className="flex flex-col items-center text-center">
//         <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
//         <p className="text-xl text-gray-500 flex-grow mt-2">
//           100% secure payments, consectetur <span className='pr-72'>adipim scing elit.</span>
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

// <footer className="bg-white py-8 border-t border-gray-200">
//             <div className="container mx-auto px-4 md:px-12">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                     {/* Address */}
//                     <div className="text-gray-600 text-sm">
//                         <p>Jouhar</p>
//                         <p>pakistan</p>
//                     </div>

//                     {/* Links */}
//                     <div>
//                         <h3 className="text-gray-400 text-sm font-medium mb-3">Links</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="#" className="text-black hover:text-gray-700 transition">Home</a>
//                             </li>
//                             <li>
//                                 <a href="/shop" className="text-black hover:text-gray-700 transition">Shop</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-black hover:text-gray-700 transition">About</a>
//                             </li>
//                             <li>
//                                 <a href="/contact" className="text-black hover:text-gray-700 transition">Contact</a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Help */}
//                     <div>
//                         <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
//                         <ul className='space-y-2'>
//                             <li>
//                                 <a href="#" className="text-black hover:text-gray-700 transition">Payment Options</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-black hover:text-gray-700 transition">Return</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-black hover:text-gray-700 transition">Privacy Policies</a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h3 className="text-gray-400 text-sm font-medium mb-3">Newsletter</h3>
//                         <div className="flex items-center">
//                             <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
//                             <button className=" text-black underline  px-4 py-2 font-bold hover:bg-gray-300 transition">Subscribe</button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="mt-8 text-center text-gray-600 text-sm">
//                     <hr />
//                 </div>
//                 <p className="pt-4">2022 Meubel House. All rights reserved.</p>
//             </div>
//         </footer>
        
// </div>

//   );
// };

// export default Shop;
          
