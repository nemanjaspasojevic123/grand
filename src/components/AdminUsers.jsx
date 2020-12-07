import React from 'react';
import '../assets/style/AdminUsers.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const AdminUsers = () => {
    return (
        <>
            <Navbar />
                <div className="admin-users">
                    <Sidedashbar />
                    <div className="admin-users-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Admin Users</h1>
                        </div>
                        <div className="admin-users-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}