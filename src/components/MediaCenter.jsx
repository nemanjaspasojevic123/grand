import React from 'react';
import '../assets/style/MediaCenter.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const MediaCenter = () => {
    return (
        <>
            <Navbar />
                <div className="media-center">
                    <Sidedashbar />
                    <div className="media-center-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Media Center</h1>
                        </div>
                        <div className="media-center-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}