import React from 'react';
import '../assets/style/Tubers.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Tubers = () => {
    return (
        <>
            <Navbar />
                <div className="tubers">
                    <Sidedashbar />
                    <div className="tubers-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Tubers</h1>
                        </div>
                        <div className="tubers-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}