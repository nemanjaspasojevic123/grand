import React from 'react';
import '../assets/style/NewUser.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewUser = () => {
    return (
        <>
            <Navbar />
                <div className="new-cms-user">
                    <Sidedashbar />
                    <div className="new-cms-user-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New User</h1>
                            <button type="button" className="btn btn-secondary btn-title">Add New</button>
                        </div>
                        <div className="new-cms-user-content">
                            <div className="form-group col-md-4">
                                <label className="new-cms-user-item-content-label">Insert username</label>
                                <input type="text" className="form-control" placeholder="Username"/>
                                <label className="new-cms-user-item-content-label">Insert password</label>
                                <input type="text" className="form-control" placeholder="Password"/>
                                <label className="new-cms-user-item-content-label">Insert email address</label>
                                <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="new-cms-user-form-check">
                                <label className="new-cms-user-item-content-label">Choose user roles</label>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                admin
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                editor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                commentEditor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                contestEditor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                liveTVEditor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                personalStory
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                notifier
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                storyMedia
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                positionsEditor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Live TV editor
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Editor izdanja
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                test
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}