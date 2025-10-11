import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <div className="navbar-container">
               <Navbar />
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;