import React from 'react';
import '../assets/style/NewRole.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewRole = () => {
    return (
        <>
            <Navbar />
                <div className="new-role">
                    <Sidedashbar />
                    <div className="new-role-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Role</h1>
                            <button type="button" className="btn btn-secondary btn-title">Add New</button>
                        </div>
                        <div className="new-role-content">
                            <div className="form-group col-md-4">
                                <label className="new-role-item-content-label">Insert name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="new-role-form-check">
                                <label className="new-role-item-content-label">Choose role permissions</label>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                story
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                poll
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                survey
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                media
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                position
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                comment
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                user
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                cmsUser
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                tag
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                category
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                liveYT
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                liveTV
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                playlist
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                banner
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                userRole
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                edition
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                artist
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                show
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                schedule
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                ourTeam
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                contest
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label className="form-check-label" htmlFor="autoSizingCheck">
                                notification
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}