import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

const Cart = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/bgpic.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <Image src="/bg.png" alt="Product 4" width={60} height={60} className="object-contain mx-auto" />
          <h1 className="text-7xl mb-7 font-medium">Cart</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">Cart</span>
          </p>
        </div>
      </section>

      {/* Cart Section */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Table */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-4 gap-4 text-center bg-orange-100 text-black text-lg py-4">
              <h1>Product</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            {/* Example Product Rows */}
            <div className="grid grid-cols-4 gap-4 text-center border-b py-4">
              <div className="flex flex-col items-center">
                <Image src="/setsofa.png" alt="Asgaard Sofa Large Image" width={150} height={150} className="object-contain" />
                <span className="mt-2 text-black font-medium">Asgaard Sofa</span>
              </div>
              <span className="text-gray-400">Rs. 250,000.00</span>
              <div className="flex justify-center">
                <span className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center">1</span>
              </div>
              <span>Rs. 250,000.00</span>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-between border-b pb-2 mb-2 font-semibold">
              <span className="ml-5 text-lg">Subtotal</span>
              <span className="text-gray-400 mr-5">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span className="ml-5">Total</span>
              <span className="text-yellow-600 text-lg mr-5">Rs. 250,000.00</span>
            </div>
            <Link href="/shop/asgaardsofa/cartside/checkout">
              <button className="mt-8 w-56 ml-14 border border-black text-black py-4 rounded-lg hover:bg-gray-400">Checkout</button>
            </Link>
          </div>
        </div>
      </section>
<Footer />
    </div>
  );
};

export default Cart;
