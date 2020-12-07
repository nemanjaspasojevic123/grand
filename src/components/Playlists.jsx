import React from 'react';
import '../assets/style/Playlists.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Playlists = () => {
    return (
        <>
            <Navbar />
                <div className="playlists">
                    <Sidedashbar />
                    <div className="playlists-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Playlists</h1>
                        </div>
                        <div className="playlists-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}