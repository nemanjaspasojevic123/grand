import React from 'react';
import '../assets/style/Login.css';
import grand_logo from '../assets/logos/Grand_TV_logo.png'
import { authService } from '../services/auth.service';
import { logInUser } from '../services/api.services';


let username = '';
let password = '';

export const Login = ({history}) => {


    // if (authService.isLoged() && authService.isLoged()!=="admin") history.push('/new-poll');
    // else if (authService.isLoged()) history.push('/dashboard');

    const handleLogin = (e) => {
        e.preventDefault();
        
        logInUser(username, password).then(res => {    
            if (res.statusText === "OK") {   
                const token = res.data.data.token;
                const username = res.data.data.user.username;     
                authService.LogIn(username, token);
                
                if (username === 'admin') {
                    history.push("/dashboard");
                }
                else {
                    history.push("/new-poll");
                }
            }
            else {
                alert('Wrong username or password!') 
            }
        }).catch(err=>{alert('Wrong username or password!'); console.log(err)

    });
    }


    const handleUsername = (e) => {
        username = e.target.value
    }

    const handlePassword = (e) => {
        password = e.target.value
    }

    return (
        <div>
            <form className="login-form" onSubmit={(e) => handleLogin(e)}>
            <img src={grand_logo} alt="no img" width="130px" height="40px" className="login-formLogo"/>
                <div className="form-group">
                    <h1>Login</h1>
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <input type="username" className="form-control" id="exampleInputUsername1" onInput={(e) => handleUsername(e)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onInput={(e) => handlePassword(e)} required/>
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}