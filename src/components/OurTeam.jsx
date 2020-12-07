import React from 'react';
import '../assets/style/OurTeam.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const OurTeam = () => {
    return (
        <>
            <Navbar />
                <div className="our-team">
                    <Sidedashbar />
                    <div className="our-team-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Our Team</h1>
                        </div>
                        <div className="our-team-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}