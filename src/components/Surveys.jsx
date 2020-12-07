import React from 'react';
import '../assets/style/Surveys.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Surveys = () => {
    return (
        <>
            <Navbar />
                <div className="surveys">
                    <Sidedashbar />
                    <div className="surveys-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Surveys</h1>
                        </div>
                        <div className="surveys-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}