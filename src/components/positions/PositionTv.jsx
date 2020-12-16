import React from 'react';
import '../../assets/style/position/PositionTv.css'

export const PositionTv = () => {
    return (
        <div className="positionTv">
            <div className="positionTv-grid-container">
                <div className="positionTv-left">
                    <div style={{backgroundColor: 'red', height: '80vh'}}></div>
                    <h1>LEVO</h1>
                    <div className="positionTv-grid-buttons">
                        <button type="button" className="btn btn-secondary positionTv-grid-btn">Pin Wallpaper</button>
                    </div>
                </div>
                <div className="positionTv-right">
                    <div style={{backgroundColor: 'red', height: '80vh'}}></div>
                    <h1>DESNO</h1>
                    <div className="positionTv-grid-buttons">
                        <button type="button" className="btn btn-secondary positionTv-grid-btn">Pin Wallpaper</button>
                    </div>
                </div>
            </div>
        </div>
    )
}