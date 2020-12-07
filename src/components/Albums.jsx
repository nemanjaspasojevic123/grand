import React from 'react';
import '../assets/style/Albums.css'
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Albums = () => {
    return (
        <>
            <Navbar />
                <div className="albums">
                    <Sidedashbar />
                    <div className="albums-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Albums</h1>
                        </div>
                        <div className="albums-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}