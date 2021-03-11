import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';

export default function ModeratorRoute({component: Component, ...rest}){

    
    return (

        (authService.isLoged() === "mod")
        ?
        
        <Route {...rest} render={props => (
            <Component {...props} />
        )} /> 
        
        :
        <Redirect to="/new-post" />   

    );
};