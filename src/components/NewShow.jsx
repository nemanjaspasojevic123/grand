import React from 'react';
import '../assets/style/NewShow.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewShow = () => {
    return (
        <>
            <Navbar />
                <div className="new-show">
                    <Sidedashbar />
                    <div className="new-show-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Show</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add New</div>
                            </button>
                        </div>
                        <div className="new-show-content">
                            <div className="form-group col-md-4">
                                <label className="new-show-item-content-label">Name of the Show:</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                                <div className="new-show-textarea">
                                    <label className="new-show-item-content-label">Description of the Show:</label>
                                    <textarea className="form-control" placeholder="Description"></textarea>
                                </div>
                                <div className="form-group new-show-checkbox">
                                    <label className="new-show-form-check-label">Is show:</label>
                                    <input type="checkbox" className="new-show-form-check-input" />
                                </div>
                                <div className="new-show-image">
                                    <label className="new-show-content-label">Choose image</label>
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