import React from 'react';
import '../assets/style/NewAdBanner.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg'

export const NewAdBanner = () => {
    return (
        <>
            <Navbar />
                <div className="new-banner-item">
                    <Sidedashbar />
                    <div className="new-banner-item-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Ad Banner Item</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="new-banner-item-content">
                            <div className="form-group col-md-4">
                                <label className="new-banner-item-content-label">Tags</label>
                                <input type="text" className="form-control posts-search" />
                                <div className="new-banner-form-check">
                                    <label className="new-banner-item-content-label">Choose banner type</label>
                                    <div className="form-check">
                                    <input className="new-banner-item-form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                                    <label className="new-banner-item-form-check-label" htmlFor="flexRadioDefault1">
                                    Side wallpaper 9:18
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="new-banner-item-form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="new-banner-item-form-check-label" htmlFor="flexRadioDefault2">
                                    Main banner 4:1
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="new-banner-item-form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="new-banner-item-form-check-label" htmlFor="flexRadioDefault2">
                                    Side banner 4:3
                                    </label>
                                    </div>
                                </div>
                                <label className="new-banner-item-content-label">Choose image</label>
                                <img src={dummy_img} alt="Tis is dummy_img" style={{height: 200}}></img>
                                <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                <div>
                                    <label className="new-banner-item-content-label">Caption</label>
                                    <textarea className="form-control" placeholder="This is image caption..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}