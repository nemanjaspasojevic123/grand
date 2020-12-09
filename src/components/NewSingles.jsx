import React from 'react';
import '../assets/style/NewSingles.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewSingles = () => {
    return (
        <>
            <Navbar />
                <div className="new-singles">
                    <Sidedashbar />
                    <div className="new-singles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Singles</h1>
                        </div>
                        <div className="new-singles-content">
                            <div className="form-group col-md-4">
                                <div className="new-singles-image">
                                    <label className="new-singles-content-label">Choose image</label>
                                    <img src={dummy_img} alt="Tis is dummy_img" style={{height: 200}}></img>
                                    <button type="submit" className="btn btn-secondary btn-title col-md-4">Add Image</button>
                                </div>
                                <label className="new-singles-item-content-label">Status:</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Unautorized</option>
                                    <option value="1">Autorized</option>
                                    <option value="2">Pending</option>
                                </select>
                                <label className="new-singles-item-content-label">UPC</label>
                                <input type="text" className="form-control" placeholder="UPC"/>
                                <label className="new-singles-item-content-label">YouTube Id:</label>
                                <input type="text" className="form-control" placeholder="youtube"/>
                                <button type="submit" className="btn btn-secondary btn-title col-md-4">Get UPC</button>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="new-singles-item-content-label">Singles</label>
                                <input type="text" className="form-control" placeholder="singles"/>
                                <label className="new-singles-item-content-label">Title</label>
                                <input type="text" className="form-control" placeholder="Title"/>
                                <div className="form-group new-singles-checkbox">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Is Premiere</label>
                                    <div>
                                        <label className="new-singles-item-content-label">Sort priority:</label>
                                        <input id="frequency" className="form-control" type="number" defaultValue="1000" min="0" max="2000" step="1"></input>
                                    </div>
                                    <label className="new-singles-item-content-label">Primary gener:</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option defaultValue>Pop</option>
                                        <option value="1">Hip-Hop/Rap</option>
                                        <option value="2">Reggae</option>
                                        <option value="3">R&B</option>
                                        <option value="4">Electronic</option>
                                        <option value="5">Alternative</option>
                                        <option value="6">Dance</option>
                                        <option value="7">Folk</option>
                                        <option value="8">Children</option>
                                        <option value="9">Rock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-4">
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
                        </div>
                    </div>
                </div>
        </>
    )
}