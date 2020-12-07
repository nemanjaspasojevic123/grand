import React from 'react';
import '../assets/style/Contests.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Contests = () => {
    return (
        <>
            <Navbar />
                <div className="contests">
                    <Sidedashbar />
                    <div className="contests-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Contests</h1>
                        </div>
                        <div className="contests-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}