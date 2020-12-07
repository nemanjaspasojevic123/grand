import React from 'react';
import '../assets/style/Tags.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Tags = () => {
    return (
        <>
            <Navbar />
                <div className="tags">
                    <Sidedashbar />
                    <div className="tags-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Tags</h1>
                        </div>
                        <div className="tags-content">
                            <input type="text" className="form-control posts-search col-6 col-sm-3" placeholder="Search for tags..."/>
                        </div>
                    </div>
                </div>
        </>
    )
}