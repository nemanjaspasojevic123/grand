import React from 'react';
import '../assets/style/Shows.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Shows = () => {
    return (
        <>
            <Navbar />
                <div className="shows">
                    <Sidedashbar />
                    <div className="shows-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Shows</h1>
                        </div>
                        <div className="shows-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}