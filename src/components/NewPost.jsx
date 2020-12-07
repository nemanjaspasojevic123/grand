import React from 'react';
import '../assets/style/NewPost.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const NewPost = () => {
    return (
        <>
            <Navbar />
                <div className="new-post">
                    <Sidedashbar />
                    <div className="new-post-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Post</h1>
                        </div>
                        <div className="new-post-content">
                            
                        </div>
                    </div>
                </div>
        </>
    )
}