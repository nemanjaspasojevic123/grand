import React from 'react';
import '../assets/style/NewPlaylist.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewPlaylist = () => {
    return (
        <>
            <Navbar />
                <div className="new-playlist">
                    <Sidedashbar />
                    <div className="new-playlist-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Playlist</h1>
                            <button type="button" className="btn btn-secondary btn-title">Add New</button>
                        </div>
                        <div className="new-playlist-content">
                            <div className="form-group col-md-4">
                                <label className="new-playlist-item-content-label">Title of playlist:</label>
                                <input type="text" className="form-control" placeholder="Title"/>
                                <label className="new-playlist-item-content-label">YouTube Playlist:</label>
                                <input type="text" className="form-control" placeholder="YouTube Playlist"/>
                                <label className="new-playlist-item-content-label">Deezer Playlist:</label>
                                <input type="text" className="form-control" placeholder="Deezer Playlist"/>
                                <label className="new-playlist-item-content-label">iTunes Playlist:</label>
                                <input type="text" className="form-control" placeholder="iTunes Playlist"/>
                                <label className="new-playlist-item-content-label">Spotify Playlist:</label>
                                <input type="text" className="form-control" placeholder="Spotify Playlist"/>
                                <label className="new-playlist-item-content-label">Amazon Playlist:</label>
                                <input type="text" className="form-control" placeholder="Amazon Playlist"/>
                                <label className="new-playlist-item-content-label">Tidal Playlist:</label>
                                <input type="text" className="form-control" placeholder="Tidal Playlist"/>
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