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
                                <Link to="/artists" className="card-header">
                                    <div><i className="fa fa-microphone fa-lg"></i> Artists</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/custom-categories" className="card-header">
                                    <div><i className="fa fa-object-ungroup fa-lg"></i> Custom category</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/users" className="card-header">
                                    <div><i className="fa fa-users fa-lg"></i> Users</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/comments" className="card-header">
                                    <div><i className="fa fa-comments fa-lg"></i> Comments</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/live-tv" className="card-header">
                                    <div><i className="fa fa-video fa-lg"></i> Live TV</div>
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
                                <Link to="/contests" className="card-header">
                                    <div><i className="fa fa-star fa-lg"></i> Contests</div>
                                </Link>
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/singles" className="card-header">
                                    <div><i className="fa fa-music fa-lg"></i> Singles</div>
                                </Link> 
                                <div className="card-body text-dark">
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                    <p className="card-text">Some quick example text.</p>
                                </div>
                            </div>
                            <div className="card border-dark">
                                <Link to="/albums" className="card-header">
                                    <div><i className="fa fa-folder-open fa-lg"></i> Albums</div>
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