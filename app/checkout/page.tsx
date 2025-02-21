
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from '@/app/components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckOut = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipcode: "",
    paymentMethod: "bank",
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart: Product[] = JSON.parse(storedCart);
      setCart(parsedCart);
      setTotal(parsedCart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const orderData = {
      customer: formData,
      items: cart,
      total,
    };

    console.log("Order Placed:", orderData);
    setShowSuccess(true);

    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      <section className="relative h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: `url('/bgpic.jpg')` }}>
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <Image src="/bg.png" alt="Checkout" width={100} height={100} className="object-contain mx-auto" />
          <h1 className="text-7xl mb-7 font-medium">Checkout</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-400">Checkout</span>
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Billing details</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium py-3">First Name</label>
                  <input type="text" name="firstname" className="w-full p-5 border border-gray-400 rounded mb-4" onChange={handleInputChange} />
                </div>
                <div>
                  <label className="block mb-2 font-medium py-3">Last Name</label>
                  <input type="text" name="lastname" className="w-full p-5 border border-gray-400 rounded mb-4" onChange={handleInputChange} />
                </div>
              </div>
              <label className="block mb-2 font-medium py-3">Email Address</label>
              <input type="email" name="email" className="w-full p-5 border border-gray-400 rounded mb-4" onChange={handleInputChange} />
              <label className="block mb-2 font-medium py-3">Phone</label>
              <input type="text" name="phone" className="w-full p-5 border border-gray-400 rounded mb-4" onChange={handleInputChange} />
              <label className="block mb-2 font-medium py-3">Street Address</label>
              <input type="text" name="address" className="w-full p-5 border border-gray-400 rounded mb-4" onChange={handleInputChange} />
            </form>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Your Order</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <span className="text-2xl">{item.name} x {item.quantity}</span>
                  <span className="text-2xl">Rs. {(item.price * item.quantity).toFixed(2)}</span><br></br>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}<br></br>
            <div className="flex justify-between items-center mb-4 text-2xl font-semibold">
              <span>Subtotal</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div><br></br>
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>Total</span>
              <span className="text-yellow-600 text-3xl">Rs. {total.toFixed(2)}</span>
            </div>
            <button onClick={handlePlaceOrder} className="w-72 ml-36 border border-black text-black py-5 rounded-lg font-medium text-xl mt-10">
              Place Order
            </button>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
            <p className="text-xl">Thank you for your purchase. Your order is being processed.</p>
          </div>
        </div>
      )}
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

export default CheckOut;
