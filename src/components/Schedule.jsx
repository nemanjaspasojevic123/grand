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
                            <button type="button" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="schedule-content">
                            <div className="form-group col-md-4">
                                <label className="new-artist-item-content-label">Select day</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Select day</option>
                                    <option value="1">Sunday</option>
                                    <option value="2">Monday</option>
                                    <option value="3">Tuesday</option>
                                    <option value="4">Wednesday</option>
                                    <option value="5">Thursday</option>
                                    <option value="6">Friday</option>
                                    <option value="7">Saturday</option>
                                </select>    
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}