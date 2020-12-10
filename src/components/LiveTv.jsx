import React from 'react';
import '../assets/style/LiveTv.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const LiveTv = () => {
    return (
        <>
            <Navbar />
                <div className="live-tv">
                    <Sidedashbar />
                    <div className="live-tv-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Live TV</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="live-tv-content">
                            <div className="form-group col-md-4">
                                <label className="live-tv-item-content-label">Date:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="live-tv-item-content-label">Insert table with Live TV playlist</label>
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" id="inputGroupFile02"/>
                                    <label className="input-group-text" htmlFor="inputGroupFile02">Browse</label>
                                </div>
                            </div>
                            <div className="page-title">
                                <h1 className="page-title-text">Time Correction</h1>
                                <button type="submit" className="btn btn-secondary btn-title">Edit</button>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="new-singles-item-content-label">Add time correction for playlist</label>
                                <input id="frequency" className="form-control" type="number" defaultValue="0" min="0" max="2000" step="1"></input>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}