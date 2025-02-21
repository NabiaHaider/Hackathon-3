'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

const AccountPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [registerData, setRegisterData] = useState({
    email: '',
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      alert('Logged in successfully!');
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.email) {
      alert('Registration successful! Please check your email for verification.');
    } else {
      alert('Please enter an email address.');
    }
  };

  return (
    <div>
      <section
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/bgpic.jpg')` }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <Image src="/bg.png" alt="Product 4" width={100} height={100} className="object-contain mx-auto" />
          <h1 className="text-7xl mb-7 font-medium">My Account</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">My account</span>
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Log In</h2>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="username" className="block mb-2 font-medium py-9">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                className="w-full p-5 border border-gray-400 rounded mb-1"
              />
              <label htmlFor="password" className="block mb-2 font-medium py-10">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />
              <div className="flex items-center mb-4 my-11">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button type="submit" className="w-52 border hover:bg-slate-500 border-black text-black py-4 rounded">
                  Log In
                </button>
                <Link href="/forgot-password" className="text-black text-sm mr-56">
                  Lost Your Password?
                </Link>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label htmlFor="email" className="block mb-2 font-medium py-9">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full p-5 border border-gray-400 rounded mb-4"
              />
              <p className="text-sm text-gray-600 mb-4 my-10">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mt-10 text-sm text-gray-600 my-32">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                <Link href="/privacy-policy" className="text-blue-500"> privacy policy</Link>.
              </p>
              <button type="submit" className="w-52 border hover:bg-slate-500 border-black text-black py-4 rounded">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AccountPage;
