import React from 'react';
import '../assets/style/NewSingles.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewSingles = () => {
    return (
        <>
            <Navbar />
                <div className="new-singles">
                    <Sidedashbar />
                    <div className="new-singles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Singles</h1>
                        </div>
                        <div className="new-singles-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}