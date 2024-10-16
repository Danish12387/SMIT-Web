import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function MainLayout() {
    return (
        <div className='bg-gray-50 dark:bg-[#1D232A]'>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;