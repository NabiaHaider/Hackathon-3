import React from "react";
const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Address */}
                    <div className="text-gray-600 text-sm">
                        <p>Jouhar</p>
                        <p className="my-4">pakistan</p>
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
                                <a href="#" className="text-black hover:text-gray-700 transition">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-black hover:text-gray-700 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-3">Help</h3>
                        <ul className="space-y-2">
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
                            <button className=" text-black underline px-4 py-2 font-bold hover:bg-gray-300 transition">Subscribe</button>
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
    );
};
export default Footer;



