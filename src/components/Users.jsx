import React from 'react';
import '../assets/style/Users.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Users = () => {
    return (
        <>
            <Navbar />
                <div className="users">
                    <Sidedashbar />
                    <div className="users-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Users</h1>
                        </div>
                        <div className="users-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}