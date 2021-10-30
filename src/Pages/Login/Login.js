import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../ContextApi/useAuth';

const Login = () => {
    const { user, googleLogin, error, setIsLoading, setError, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const loginWithGoogle = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => {
                setIsLoading(false);
            });

    }

    return (
        <div className='all-bg'>
            <h3 className='text-center pt-5 tour-title border-bottom'>Log in to your account</h3>
            <div className="text-center py-5" >
                {
                    error && <p className="text-danger">{error}</p>
                }
                {
                    user.email ?
                        <p>You Already Logged in</p>
                        :
                        <button className=' join-google-btn' onClick={loginWithGoogle} >
                            <i className="fab fa-google"></i> Login With Google</button>
                }

            </div>
        </div>

    );
};

export default Login;