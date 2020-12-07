import React from 'react';
import '../assets/style/Login.css'
import { Navbar } from './Navbar';

export const Login = () => {
    return (
        <div>
            <Navbar />
            <form className="login-form">
                <div className="form-group">
                    <h1>Login</h1>
                    <label for="exampleInputUsername1">Username</label>
                    <input type="username" className="form-control" id="exampleInputUsername1"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}