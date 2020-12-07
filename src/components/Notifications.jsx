import React from 'react';
import '../assets/style/Notifications.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Notifications = () => {
    return (
        <>
            <Navbar />
                <div className="notifications">
                    <Sidedashbar />
                    <div className="notifications-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Notifications</h1>
                        </div>
                        <div className="notifications-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}