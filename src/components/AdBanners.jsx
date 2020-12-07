import React from 'react';
import '../assets/style/AdBanners.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const AdBanners = () => {
    return (
        <>
            <Navbar />
                <div className="banners-media-center">
                    <Sidedashbar />
                    <div className="banners-media-center-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Ad Banners Media Center</h1>
                        </div>
                        <div className="banners-media-center-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}