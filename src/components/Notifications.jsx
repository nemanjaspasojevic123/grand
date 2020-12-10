import React from 'react';
import '../assets/style/Notifications.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Notifications = () => {

    return (
        <>
            <Navbar />
                <div className="notifications">
                    <Sidedashbar />
                    <div className="notifications-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Send Notification</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Send</button>
                        </div>
                        <div className="notifications-content">
                            <div className="form-group col-md-4">
                                <label className="new-artist-item-content-label">Notification type</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Notification type</option>
                                    <option value="1">Story</option>
                                    <option value="2">Video</option>
                                    <option value="3">Contest</option>
                                </select>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Choose reference
                                </button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="new-singles-item-content-label">Notification title</label>
                                <input type="text" className="form-control" placeholder="Notification title"/>
                                <label className="new-artist-content-label">Notification message</label>
                                <textarea className="form-control" placeholder="Notification message"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}