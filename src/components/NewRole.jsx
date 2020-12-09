import React from 'react';
import '../assets/style/NewRole.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewRole = () => {
    return (
        <>
            <Navbar />
                <div className="new-role">
                    <Sidedashbar />
                    <div className="new-role-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Role</h1>
                        </div>
                        <div className="new-role-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}