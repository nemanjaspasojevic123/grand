import React from 'react';
import '../../assets/style/position/PositionNews.css';

export const PositionNews = () => {
    return (
        <div>
            <div class="positionNews-grid-container">
                <div class="positionNews-left">
                    <div style={{backgroundColor: 'red', height: '55vh'}}></div>
                    <h1>LEVO</h1>
                    <div className="positionNews-grid-buttons">
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Pin Wallpaper</button>
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Unpin Wallpaper</button>
                    </div>
                </div>
                <div class="positionNews-right">
                    <div style={{backgroundColor: 'red', height: '55vh'}}></div>
                    <h1>DESNO</h1>
                    <div className="positionNews-grid-buttons">
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Pin Wallpaper</button>
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Unpin Wallpaper</button>
                    </div>
                </div>
                <div class="positionNews-centerUp">
                    <div style={{backgroundColor: 'blue', height: '30vh'}}></div>
                    <div className="positionNews-grid-buttons">
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Pin Stories</button>
                    </div>
                </div>
                <div class="positionNews-centerDown-left">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionNews-grid-buttons">
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Pin Story</button>
                    </div>
                </div>
                <div class="positionNews-centerDown-right">
                    <div style={{backgroundColor: 'gray', height: '30vh'}}></div>
                    <div className="positionNews-grid-buttons">
                        <button type="button" className="btn btn-secondary positionNews-grid-btn">Pin Story</button>
                    </div>
                </div>
            </div>
        </div>
    )
}