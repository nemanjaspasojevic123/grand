import React from 'react';
import '../../assets/style/position/PositionHome.css'

export const PositionHome = () => {
    return (
        <div className="positionHome">
            <div className="positionHome-grid-container">
                <div className="positionHome-left">
                    <div style={{backgroundColor: 'red', height: '55vh'}}></div>
                    <h1>LEVO</h1>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Wallpaper</button>
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Unpin Wallpaper</button>
                    </div>
                </div>
                <div className="positionHome-right">
                    <div style={{backgroundColor: 'red', height: '55vh'}}></div>
                    <h1>DESNO</h1>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Wallpaper</button>
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Unpin Wallpaper</button>
                    </div>
                </div>
                <div className="positionHome-centerUp-left">
                    <div style={{backgroundColor: 'blue', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Stories</button>
                    </div>
                </div>
                <div className="positionHome-centerUp-right">
                    <div style={{backgroundColor: 'green', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Story</button>
                    </div>
                </div>
                <div className="positionHome-center-first">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Story</button>
                    </div>
                </div>
                <div className="positionHome-center-second">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Story</button>
                    </div>
                </div>
                <div className="positionHome-center-third">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Story</button>
                    </div>
                </div>
                <div className="positionHome-center-fourth">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionHome-grid-buttons">
                        <button type="button" className="btn btn-secondary positionHome-grid-btn">Pin Story</button>
                    </div>
                </div>
            </div>
        </div>
    )
}