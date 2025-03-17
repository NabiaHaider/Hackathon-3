'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { urlFor } from '@/sanity/lib/image';

// Product Type Definition
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  stockLevel: number;
  description: string;
};

const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart, cart, removeFromCart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    if (product.stockLevel < 1) {
      alert('This product is out of stock.');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image)?.url() || '',
      quantity,
    });
    setIsCartVisible(true);
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn pb-9">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src={urlFor(product.image)?.url() || '/placeholder.png'}
            alt={product.name}
            height={1000}
            width={1000}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-md space-y-6 animate-slideInRight">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-3xl text-green-600 font-semibold">$ {product.price}</p>

        <p className="text-gray-600">
          <span className="font-medium">Stock Level: </span>
          {product.stockLevel > 0 ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex items-center space-x-4">
          <button onClick={decreaseQuantity} className="px-3 py-2 bg-gray-300 rounded-lg">-</button>
          <span className="text-xl font-bold">{quantity}</span>
          <button onClick={increaseQuantity} className="px-3 py-2 bg-gray-300 rounded-lg">+</button>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            <FaCartPlus className="inline-block mr-2" />
            Add to Cart
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105">
            <FaHeart className="inline-block mr-2" />
            Wishlist
          </button>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px]`}>
        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            <hr />
            <div className="space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex">
                      <Image src={item.image} height={80} width={80} alt={item.name} />
                      <div className="ml-4">
                        <h3 className="mt-2 font-medium">{item.name}</h3>
                        <p>{item.quantity} x <span className="text-yellow-600">Rs. {item.price.toLocaleString()}</span></p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-300 px-2 rounded">-</button>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-300 px-2 rounded">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 rounded">x</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty</p>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="ml-8 my-2 text-yellow-600">Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-around mx-auto gap-4">
              <Link href="/viewcart">
                <button className="rounded-full bg-gray-200 px-8 py-2 border border-black">View Cart</button>
              </Link>
              <Link href="/checkout">
                <button className="rounded-full bg-gray-200 px-8 py-2 border border-black">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
        <button onClick={() => setIsCartVisible(false)} className="absolute top-4 right-4 text-gray-500">Close</button>
      </div>
    </div>
  );
};

export default ProductDetail;
