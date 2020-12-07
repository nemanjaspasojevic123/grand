import React from 'react';
import '../assets/style/Categories.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Categories = () => {
    return (
        <>
            <Navbar />
                <div className="categories">
                    <Sidedashbar />
                    <div className="categories-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Categories</h1>
                        </div>
                        <div className="categories-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}