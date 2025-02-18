'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CheckOut = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
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
    alert("Your order has been placed successfully!");

    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);
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
                  <span className="text-2xl">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="flex justify-between items-center mb-4 text-2xl font-semibold">
              <span>Subtotal</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
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

      <footer className="bg-white py-8 border-t border-gray-200 text-center">
        <p>© 2025 Meubel House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CheckOut;
