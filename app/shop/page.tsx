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
import Footer from '@/app/components/Footer';

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

export default Shop;
