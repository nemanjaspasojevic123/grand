import React from 'react';
import '../assets/style/NewContest.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';

export const NewContest = () => {
    return (
        <>
            <Navbar />
                <div className="new-contest">
                    <Sidedashbar />
                    <div className="new-contest-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Contest</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Add New</div>
                            </button>
                        </div>
                        <div className="new-contest-content">
                            <div className="form-group col-md-4">
                                <div className="new-contest-image">
                                    <label className="new-contest-content-label">Choose contest image</label>
                                    <img src={dummy_img} alt="Tis is dummy_img" style={{height: 200}}></img>
                                    <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                </div>
                                <label className="new-contest-item-content-label">Title</label>
                                <input type="text" className="form-control" placeholder="Title"/>
                                <label className="new-content-item-content-label">Starting Date</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                                <label className="new-content-item-content-label">Ending Date</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                                <label className="new-singles-item-content-label">Select upload format</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Select upload format</option>
                                    <option value="1">IMAGE</option>
                                    <option value="2">VIDEO</option>
                                </select>
                                <div className="new-contest-textarea">
                                    <label className="new-contest-item-content-label">Description:</label>
                                    <textarea className="form-control" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}