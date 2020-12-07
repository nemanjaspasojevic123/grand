import React from 'react';
import '../assets/style/Polls.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Polls = () => {
    return (
        <>
            <Navbar />
                <div className="polls">
                    <Sidedashbar />
                    <div className="polls-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Polls</h1>
                        </div>
                        <div className="polls-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}