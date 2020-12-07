import React from 'react';
import '../assets/style/Artists.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Artists = () => {
    return (
        <>
            <Navbar />
                <div className="artists">
                    <Sidedashbar />
                    <div className="artists-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Artists</h1>
                        </div>
                        <div className="artists-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}