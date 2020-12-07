import React from 'react';
import '../assets/style/Roles.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Roles = () => {
    return (
        <>
            <Navbar />
                <div className="roles">
                    <Sidedashbar />
                    <div className="roles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Roles</h1>
                        </div>
                        <div className="roles-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}