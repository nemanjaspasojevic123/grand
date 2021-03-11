import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';

export default function PrivateRoute({component: Component, ...rest}){

    
    return (

        <Route {...rest} render={props => (
        (authService.isLoged() && authService.isLoged()==="admin")
        ?
            <Component {...props} /> :

             <Redirect to="/login" />   
             )} />

    );
};