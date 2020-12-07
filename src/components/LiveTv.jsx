import React from 'react';
import '../assets/style/LiveTv.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const LiveTv = () => {
    return (
        <>
            <Navbar />
                <div className="live-tv">
                    <Sidedashbar />
                    <div className="live-tv-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Live TV</h1>
                        </div>
                        <div className="live-tv-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}