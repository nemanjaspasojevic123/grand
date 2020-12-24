import React from 'react';
import '../assets/style/NewPoll.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewPoll = () => {
    return (
        <>
            <Navbar />
                <div className="new-poll">
                    <Sidedashbar />
                    <div className="new-poll-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Poll</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add New</div>
                            </button>
                        </div>
                        <div className="new-poll-content">
                            <div className="form-group col-md-4">
                                <div className="new-poll-image">
                                    <label className="new-poll-content-label">Choose image</label>
                                    <img src={dummy_img} alt="Tis is dummy_img" style={{height: 100, width: 400}}></img>
                                    <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                </div>
                                <label className="new-poll-item-content-label">Share image</label>
                                <input type="text" className="form-control" placeholder="Share image"/>
                                <label className="new-poll-item-content-label">Link</label>
                                <input type="text" className="form-control" placeholder="https://idjtv.com/video/glasanje"/>
                                <label className="live-tv-item-content-label">Starting Date</label>
                                <div className="input-group mb-3">
                                    <input type="datetime-local" className="form-control" aria-describedby="button-addon2"/>
                                </div>
                                <label className="live-tv-item-content-label">Ending Date</label>
                                <div className="input-group mb-3">
                                    <input type="datetime-local" className="form-control" aria-describedby="button-addon2"/>
                                </div>
                                <label className="new-singles-item-content-label">Playlist type:</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Active for this week</option>
                                    <option value="1">Recomendations for the next week</option>
                                </select>
                                <button type="button" className="btn btn-secondary btn-title">Add Video</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}