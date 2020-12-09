import React from 'react';
import '../assets/style/NewCustomCategories.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewCaustomCategories = () => {
    return (
        <>
            <Navbar />
                <div className="new-custom-categories">
                    <Sidedashbar />
                    <div className="new-custom-categories-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Custom Category</h1>
                        </div>
                        <div className="new-custom-categories-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}