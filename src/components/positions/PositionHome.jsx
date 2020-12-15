import React from 'react';
import '../../assets/style/position/PositionHome.css'

export const PositionHome = () => {
    return (
        <div className="positionHome">
                        Home
            <div className="grid-container">
                <div className="left" style={{backgroundColor: 'red', height: '70vh'}}>
                    <h1>LEVO</h1>
                </div>
                <div className="right" style={{backgroundColor: 'red', height: '70vh'}}>
                    <h1>DESNO</h1>
                </div>
                <div className="centerUp-left" style={{backgroundColor: 'blue', height: '30vh'}}></div>
                <div className="centerUp-right" style={{backgroundColor: 'green', height: '30vh'}}></div>
                <div className="center-first"  style={{backgroundColor: 'gray', height: '34vh'}}></div>
                <div className="center-second" style={{backgroundColor: 'gray', height: '34vh'}}></div>
                <div className="center-third" style={{backgroundColor: 'gray', height: '34vh'}}></div>
                <div className="center-fourth" style={{backgroundColor: 'gray', height: '34vh'}}></div>
            </div>
        </div>
    )
}