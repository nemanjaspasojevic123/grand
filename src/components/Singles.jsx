import React from 'react';
import '../assets/style/Singles.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Singles = () => {
    return (
        <>
            <Navbar />
                <div className="singles">
                    <Sidedashbar />
                    <div className="singles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Singles</h1>
                        </div>
                        <div className="singles-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}