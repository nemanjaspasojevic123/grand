import React from 'react';
import '../assets/style/NewMediaItem.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg'

export const NewMediaItem = () => {
    return (
        <>
            <Navbar />
                <div className="new-media-item">
                    <Sidedashbar />
                    <div className="new-media-item-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Media Item</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="new-media-item-content">
                            <div className="form-group col-md-4">
                                <label className="new-media-item-content-label">Tags</label>
                                <input type="text" className="form-control posts-search" />
                                <label className="new-media-item-content-label">Choose image</label>
                                <img src={dummy_img} alt="Tis is dummy_img" style={{height: 300}}></img>
                                <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                <label className="new-media-item-content-label">Caption</label>
                                <textarea className="form-control" placeholder="This is image caption..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}