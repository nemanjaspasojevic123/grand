import React from 'react';
import '../assets/style/NewCustomCategories.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewCaustomCategories = () => {
    return (
        <>
            <Navbar />
                <div className="new-custom-categories">
                    <Sidedashbar />
                    <div className="new-custom-categories-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Custom Category</h1>
                            <button type="button" className="btn btn-secondary btn-title">Add New</button>
                        </div>
                        <div className="new-custom-categories-content">
                            <div className="form-group col-md-4">
                                <label className="new-custom-categories-item-content-label">Name (EN latin)</label>
                                <input type="text" className="form-control" placeholder="DOMAĆE PRIČE"/>
                                <label className="new-custom-categories-item-content-label">Name (SR latin)</label>
                                <input type="text" className="form-control" placeholder="DOMAĆE PRIČE"/>
                                <label className="new-custom-categories-item-content-label">Route</label>
                                <input type="text" className="form-control" placeholder="domace-price"/>
                                <label className="new-custom-categories-item-content-label">Color hex</label>
                                <input type="text" className="form-control" placeholder="#ff00ff"/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}