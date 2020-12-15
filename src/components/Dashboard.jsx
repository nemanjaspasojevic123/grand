import React from 'react';
import '../assets/style/Dashboard.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <>
            <Navbar />
                <div className="dashboard">
                    <Sidedashbar />
                    <div className="dashboard-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Dashboard</h1>
                        </div>
                        <div className="cards">
                            <div className="card border-dark">
                                <Link to="posts" className="card-header">
                                    <div><i className="fa fa-newspaper fa-lg"></i> Posts</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/positions" className="card-header">
                                    <div><i className="fa fa-arrows-alt fa-lg"></i> Positions</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/tags" className="card-header">
                                    <div><i className="fa fa-tags fa-lg"></i> Tags</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/media-center" className="card-header">
                                    <div><i className="fa fa-cogs fa-lg"></i> Media Center</div>
                                </Link> 
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/banners-media-center" className="card-header">
                                    <div><i className="fa fa-crop fa-lg"></i> Ad Banners</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/notifications" className="card-header">
                                    <div><i className="fa fa-bell fa-lg"></i> Notifications</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/shows" className="card-header">
                                    <div><i className="fa fa-tv fa-lg"></i> Shows</div>
                                </Link> 
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/schedule" className="card-header">
                                    <div><i className="fa fa-calendar-alt fa-lg"></i> Schedule</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/polls" className="card-header">
                                    <div><i className="fa fa-chart-pie fa-lg"></i> Polls</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/surveys" className="card-header">
                                    <div><i className="fa fa-align-left fa-lg"></i> Surveys</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/banners" className="card-header">
                                    <div><i className="fa fa-image fa-lg"></i> Banners</div>
                                </Link> 
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                            <Link to="/new-post" className="card-header">
                                    <div><i className="fa fa-plus-circle fa-lg"></i> New Post</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}