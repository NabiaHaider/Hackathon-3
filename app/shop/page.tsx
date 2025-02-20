'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import ProductListing from '../components/ProductListing';
import SearchAndFilter from '../components/SearchAndFilter';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../components/pagination';
import ShoppingCart from '../components/Card';
import { Product } from '@/types';
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
