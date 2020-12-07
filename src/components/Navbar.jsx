import React from 'react';
import { Link } from 'react-router-dom';
import grand_logo from '../assets/logos/Grand_TV_logo.png'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" >
                        <img src={grand_logo} alt="no img" width="130px" height="40px"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" ><i className="fa fa-user-circle fa-lg"></i> Log In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}