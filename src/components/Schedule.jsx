import React from 'react';
import '../assets/style/Schedule.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Shedule = () => {
    return (
        <>
            <Navbar />
                <div className="schedule">
                    <Sidedashbar />
                    <div className="schedule-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Schedule</h1>
                        </div>
                        <div className="schedule-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}