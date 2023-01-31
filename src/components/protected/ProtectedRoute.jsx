import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    let location = useLocation();
    let navigate = useNavigate();
    let { from } = location.state || { from: { pathname: '/' } };
    let isAuthenticated = false; // determine if the user is authenticated

    if (!isAuthenticated) {
        useEffect(() => {
            navigate('/login', from);
        }, [])
        return null;
    }

    return (
        <Route {...rest}>
            {children}
        </Route>
    );

    // const LoginPage = () => {
    //     let location = useLocation();
    //     let navigate = useNavigate();
    //     let { from } = location.state || { from: { pathname: '/' } };

    //     const handleLogin = () => {
    //         // perform authentication
    //         isAuthenticated = true;
    //         navigate(from);
    //     };

    //     return (
    //         <div>
    //             <h2>Login</h2>
    //             <button onClick={handleLogin}>Login</button>
    //         </div>
    //     );
    };

    export default ProtectedRoute;