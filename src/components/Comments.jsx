import React from 'react';
import '../assets/style/Comments.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Comments = () => {
    return (
        <>
            <Navbar />
                <div className="comments">
                    <Sidedashbar />
                    <div className="comments-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Comments</h1>
                        </div>
                        <div className="comments-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}