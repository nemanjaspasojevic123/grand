import React from 'react';
import '../assets/style/NewBanner.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewBanner = () => {
    return (
        <>
            <Navbar />
                <div className="new-banner">
                    <Sidedashbar />
                    <div className="new-banner-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Banner</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add New</div>
                            </button>
                        </div>
                        <div className="new-banner-content">
                            <div className="form-group col-md-4">
                                <label className="new-banner-item-content-label">Starting Date</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                                <label className="new-banner-item-content-label">Ending Date</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                                <label className="new-banner-item-content-label">Link</label>
                                <input type="text" className="form-control" placeholder="e.g. https://www.google.com"/>
                                <div className="new-banner-textarea">
                                    <label className="new-banner-item-content-label">Description:</label>
                                    <textarea className="form-control" placeholder="Description"></textarea>
                                </div>
                                <div className="new-banner-image">
                                    <label className="new-banner-content-label">Choose banner image</label>
                                    <img src={dummy_img} alt="Tis is dummy_img" style={{height: 200}}></img>
                                    <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}