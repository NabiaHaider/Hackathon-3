"use client";

import { useState, useEffect, useCallback } from "react";
import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-[#FBEBB5] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Center Section (Navigation Links) */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Right Section (Icons) */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          {/* Hamburger Menu - Visible only on mobile */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 pb-2 space-y-2 text-center">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block py-2 text-sm font-medium"
    : "text-sm font-medium text-center";

  return (
    <>
      <Link className={linkClass} href="/">
        Home
      </Link>
      <Link className={linkClass} href="/shop">
        Shop
      </Link>
      <Link className={linkClass} href="/blog">
        Blog
      </Link>
      <Link className={linkClass} href="/contact">
        Contact
      </Link>
    </>
  );
}

function NavIcons() {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = useCallback(() => {
    setIsInWishlist((prev) => !prev);
  }, []);

  return (
    <>
      <Link href="/account" className="p-2" aria-label="Account">
        <User className="h-5 w-5" />
      </Link>

      <button className="p-2" onClick={toggleWishlist} aria-label="Wishlist">
        <Heart className={`h-5 w-5 ${isInWishlist ? "text-black" : "text-gray-500"}`} />
      </button>

      <Link href="/shop/asgaardsofa/cartside" className="p-2" aria-label="Cart">
        <ShoppingCart className="h-5 w-5" />
      </Link>
    </>
  );
}
