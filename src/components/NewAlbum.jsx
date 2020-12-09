import React from 'react';
import '../assets/style/NewAlbum.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewAlbum = () => {
    return (
        <>
            <Navbar />
                <div className="new-album">
                    <Sidedashbar />
                    <div className="new-album-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Album</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add New</div>
                            </button>
                        </div>
                        <div className="new-album-content">
                            <div className="form-group col-md-4">
                                <div className="new-singles-image">
                                    <label className="new-singles-content-label">Choose image</label>
                                    <img src={dummy_img} alt="Tis is dummy_img" style={{height: 200}}></img>
                                    <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                    <br></br>
                                    <label className="new-singles-item-content-label">UPC:</label>
                                    <input type="text" className="form-control" placeholder="UPC"/>
                                    <label className="new-singles-item-content-label">Artist:</label>
                                    <input type="text" className="form-control" placeholder="artist"/>
                                    <label className="new-singles-item-content-label">Title:</label>
                                    <input type="text" className="form-control" placeholder="Title"/>
                                    <label className="new-singles-item-content-label">Release date</label>
                                    <div className="input-group mb-3">
                                        <input className="form-control datetimepicker-input" data-target="#albumReleaseDatePicker" id="albumReleaseDate" name="albumReleaseDate" type="text"></input>
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                    </div>
                                    <div>
                                        <label className="new-singles-item-content-label">Sort priority:</label>
                                        <input id="frequency" className="form-control" type="number" defaultValue="1000" min="0" max="2000" step="1"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <div>
                                    <label className="new-singles-item-content-label">Number of tracks:</label>
                                    <input id="frequency" className="form-control" type="number" defaultValue="0" min="0" max="1000" step="1"></input>
                                </div>
                                <label className="new-singles-item-content-label">Primary genre:</label>
                                <input type="text" className="form-control" placeholder="primary_genre"/>
                                <label className="new-singles-item-content-label">GooglePlay:</label>
                                <input type="text" className="form-control" placeholder="google_play"/>
                                <label className="new-singles-item-content-label">Deezer:</label>
                                <input type="text" className="form-control" placeholder="deezer"/>
                                <label className="new-singles-item-content-label">iTunes:</label>
                                <input type="text" className="form-control" placeholder="itunes"/>
                                <label className="new-singles-item-content-label">Spotify:</label>
                                <input type="text" className="form-control" placeholder="spotify"/>
                                <label className="new-singles-item-content-label">Amazon:</label>
                                <input type="text" className="form-control" placeholder="amazon"/>
                                <label className="new-singles-item-content-label">TIDAL:</label>
                                <input type="text" className="form-control" placeholder="tidal"/>
                            </div>
                            <div className="form-group col-md-4">
                                <h3 className="page-title-text">Singles:</h3>
                                <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add single</div>
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
        </>
    )
}