import React from 'react';
import '../assets/style/NewUser.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewUser = () => {
    return (
        <>
            <Navbar />
                <div className="new-cms-user">
                    <Sidedashbar />
                    <div className="new-cms-user-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New User</h1>
                        </div>
                        <div className="new-cms-user-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}