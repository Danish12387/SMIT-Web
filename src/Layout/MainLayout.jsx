import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

function MainLayout() {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;