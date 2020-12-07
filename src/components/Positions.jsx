import React from 'react';
import '../assets/style/Positions.css'
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Positions = () => {
    return (
        <>
            <Navbar />
                <div className="positions">
                    <Sidedashbar />
                    <div className="positions-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Positions</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Save</button>
                        </div>
                        <div className="positions-content">
                            <div className="form-group col-md-4">
                                <label >Select page</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Select category</option>
                                    <option value="1">HOME</option>
                                    <option value="2">TV</option>
                                    <option value="3">NEWS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}