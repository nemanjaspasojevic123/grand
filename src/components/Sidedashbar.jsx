import React from 'react';
import '../assets/style/Sidedashbar.css';
import { Link } from 'react-router-dom';

export const Sidedashbar = () => {
    return (
        <div className="container-sidebar">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link dashboard-link">
                                    <div className="nav-text"><i className="fa fa-home fa-lg"></i> Dashboard</div>
                                </Link> 
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <Link to="/posts" className="navLink">
                                    <div className="nav-text"><i className="fa fa-newspaper fa-lg"></i> Posts</div>
                                </Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/positions" className="navLink">
                                    <div className="nav-text"><i className="fa fa-arrows-alt fa-lg"></i> Pin Position</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tags" className="navLink">
                                    <div className="nav-text"><i className="fa fa-tags fa-lg"></i> Tags</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/media-center" className="navLink">
                                    <div className="nav-text"><i className="fa fa-cogs fa-lg"></i> Media Center</div>
                                </Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/banners-media-center" className="navLink">
                                    <div className="nav-text"><i className="fa fa-crop fa-lg"></i> Ad Banners</div>
                                </Link>
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <Link to="/notifications" className="navLink">
                                    <div className="nav-text"><i className="fa fa-bell fa-lg"></i> Notifications</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shows" className="navLink">
                                    <div className="nav-text"><i className="fa fa-tv fa-lg"></i> Shows</div>
                                </Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/schedule" className="navLink">
                                    <div className="nav-text"><i className="fa fa-calendar-alt fa-lg"></i> Schedule</div>
                                </Link>
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <Link to="/polls" className="navLink">
                                    <div className="nav-text"><i className="fa fa-chart-pie fa-lg"></i> Polls</div>
                                </Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/surveys" className="navLink">
                                    <div className="nav-text"><i className="fa fa-align-left fa-lg"></i> Surveys</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/banners" className="navLink">
                                    <div className="nav-text"><i className="fa fa-image fa-lg"></i> Banners</div>
                                </Link> 
                            </li>
                            <hr></hr>
                            <br></br>
                            <li className="nav-item">
                                <Link to="/new-post" className="navLink">
                                    <div className="nav-text"><i className="fa fa-plus-circle fa-lg"></i> New Post</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}