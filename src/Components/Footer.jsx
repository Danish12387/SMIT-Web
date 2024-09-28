import React from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-5 mt-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* <FaMapMarkerAlt className="text-red-500 text-2xl" /> */}
                    <p className="text-md">
                        Head Office: 1234 Main Street, Suite 100, City, Country
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm">
                        © 2024 Saylani. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
