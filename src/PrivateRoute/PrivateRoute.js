import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../ContextApi/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className='reload-spinner all-bg text-center pt-5'>
                < Spinner animation="border" variant='success' />
            </div>
        )
    }
    else {
        return (
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
            ></Route>
        );
    }

};

export default PrivateRoute;