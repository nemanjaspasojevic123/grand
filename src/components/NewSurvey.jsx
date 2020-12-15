import React from 'react';
import '../assets/style/NewSurvey.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewSurvey = () => {
    return (
        <>
            <Navbar />
                <div className="new-survey">
                    <Sidedashbar />
                    <div className="new-survey-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Survey</h1>
                            <button type="button" className="btn btn-secondary btn-title">Add New</button>
                        </div>
                        <div className="new-survey-content">
                            <div className="form-group col-md-4">
                                <label className="new-survey-item-content-label">Insert survey title:</label>
                                <input type="text" className="form-control" placeholder="Title"/>
                                <label className="new-survey-item-content-label">New option:</label>
                                <div className="new-survey-content-option">
                                <input type="text" className="form-control new-survey-option" placeholder="Option X"/>
                                <button type="button" className="btn btn-secondary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}