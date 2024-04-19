import React from 'react';
import PropTypes from 'prop-types';
import { Route, useNavigate } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    element: Component,
    ...rest
}) => {
    const navigate = useNavigate();

    return (
        <Route {...rest}>
            {props => isAuthenticated ? <Component {...props} /> : (navigate('/auth/login'), null)}
        </Route>
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    element: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool
}
