import React from 'react';
import '../assets/style/NewPlaylist.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewPlaylist = () => {
    return (
        <>
            <Navbar />
                <div className="new-playlist">
                    <Sidedashbar />
                    <div className="new-playlist-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Playlist</h1>
                        </div>
                        <div className="new-playlist-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}