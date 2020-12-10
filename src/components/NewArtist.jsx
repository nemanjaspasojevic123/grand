import React from 'react';
import '../assets/style/NewArtist.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';
import { Link } from 'react-router-dom';

export const NewArtist = () => {
    return (
        <>
            <Navbar />
                <div className="new-artist">
                    <Sidedashbar />
                    <div className="new-artist-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Artist</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/artists">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="new-artist-content">
                            <div className="form-group col-md-4">
                                <label className="new-artist-item-content-label">Artist</label>
                                <input type="text" className="form-control posts-search" placeholder="Artist name"/>
                                <label className="new-artist-item-content-label">Sort (1-1000)</label>
                                <input type="text" className="form-control posts-search" placeholder="Sort number"/>
                                <label className="new-artist-item-content-label">Type:</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Artist</option>
                                    <option value="1">Creator</option>
                                    <option value="2">Both</option>
                                </select>
                                <div className="form-group new-artist-checkbox">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Artist is in custom category</label>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="new-artist-content-label">Description</label>
                                    <textarea className="form-control" placeholder="Description"></textarea>
                                </div>
                                <div className="new-artist-image">
                                <label className="new-artist-content-label">Choose image</label>
                                <img src={dummy_img} alt="Tis is dummy_img" style={{height: 300}}></img>
                                <button type="submit" className="btn btn-secondary btn-title col-md-4">Add Image</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}