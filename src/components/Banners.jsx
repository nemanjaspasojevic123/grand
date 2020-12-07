import React from 'react';
import '../assets/style/Banners.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Banners = () => {
    return (
        <>
            <Navbar />
                <div className="banners">
                    <Sidedashbar />
                    <div className="banners-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Banners</h1>
                        </div>
                        <div className="banners-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}