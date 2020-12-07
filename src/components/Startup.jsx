import React from 'react';
import '../assets/style/Startup.css'
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Startup = () => {
    return (
        <>
            <Navbar />
                <div className="startup">
                    <Sidedashbar />
                    <div className="startup-page">
                        <div className="page-title">
                            <h1 className="page-title-text">App Startup</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="startup-content">
                            <div className="startup-row">
                                <div className="startup-list-header">
                                    <h3 className="page-title-text">Favourite Atists</h3>
                                    <button type="submit" className="btn btn-secondary btn-title">Add</button>
                                </div>
                                <div className="startup-list-content">

                                </div>
                            </div>
                            <div className="startup-row">
                                <div className="startup-list-header">
                                    <h3 className="page-title-text">Favorite IDJ Tubers</h3>
                                    <button type="submit" className="btn btn-secondary btn-title">Add</button>
                                </div>
                                <div className="startup-list-content">

                                </div>
                            </div>
                            <div className="startup-row">
                                <div className="startup-list-header">
                                    <h3 className="page-title-text">Favorite Singles</h3>
                                    <button type="submit" className="btn btn-secondary btn-title">Add</button>
                                </div>
                                <div className="startup-list-content">

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}