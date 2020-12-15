import React, { useState } from 'react';
import '../assets/style/Positions.css'
import { Navbar } from './Navbar';
import { PositionHome } from './positions/PositionHome';
import { PositionNews } from './positions/PositionNews';
import { PositionTv } from './positions/PositionTv';
import { Sidedashbar } from './Sidedashbar';

export const Positions = () => {

const [selectedOption, setSelectedOption] = useState('');
    
    return (
        <>
            <Navbar />
                <div className="positions">
                    <Sidedashbar />
                    <div className="positions-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Positions</h1>
                            <div>
                            <button type="button" className="btn btn-secondary btn-title">Preview</button>
                            <button type="button" className="btn btn-secondary btn-title">Save</button>
                            </div>
                        </div>
                        <div className="positions-content">
                            <div className="form-group col-md-4">
                                <label >Select page</label>
                                <select onChange={(e) => setSelectedOption(e.target.value)} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Select category</option>
                                    <option value="home">HOME</option>
                                    <option value="tv">TV</option>
                                    <option value="news">NEWS</option>
                                </select>
                            </div>
                            {selectedOption === "home" ? <PositionHome />
                            : selectedOption === "tv" ? <PositionTv />
                            : selectedOption === "news" ? <PositionNews />
                            : null}
                        </div>
                    </div>
                </div>
        </>
    )
}