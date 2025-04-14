import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [redirecting, setRedirecting] = useState(false);

    const clientId = '632224802103-8sssksmpm4i3pfiag2ojbi1n8u10r2if.apps.googleusercontent.com';

    // If user is already logged in, show message and redirect after delay
    useEffect(() => {
        if (user) {
            setRedirecting(true);
            const timer = setTimeout(() => {
                navigate('/dashboard');
            }, 3000);

            return () => clearTimeout(timer); // cleanup
        }
    }, [user, navigate]);

    const handleLoginSuccess = async (response) => {
        try {
            const { data } = await axios.post(`${config.baseURL}/auth/login`, {
                token: response.credential,
            }, {
                withCredentials: true,
            });

            console.log('Backend response:', data);

            if (data.message === "Login successful") {
                await login(); // fetch and set user context
                navigate('/dashboard');
            }

            if (data.message === "User does not exist") {
                const userData = data.userInfo;
                localStorage.setItem('pendingGoogleUser', JSON.stringify(userData));
                navigate('/register');
            }

        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleLoginFailure = (error) => {
        console.error('Google login failed:', error);
    };

    return (
        // <GoogleOAuthProvider clientId={clientId}>
        //     <div className="login-container">
        //         <h2>Login Page</h2>
        //         {redirecting ? (
        //             <p>✅ Already logged in, redirecting to dashboard...</p>
        //         ) : (
        //             <div className="container mx-auto w-[40%] google-login">
        //                 <GoogleLogin
        //                     onSuccess={handleLoginSuccess}
        //                     onError={handleLoginFailure}
        //                 />
        //             </div>
        //         )}
        //     </div>
        // </GoogleOAuthProvider>

        <GoogleOAuthProvider clientId={clientId}>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md text-center"
                >
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">Welcome Back 👋</h2>
                    <p className="text-gray-600 mb-8">
                        {redirecting ? '✅ Already logged in, redirecting to dashboard...' : 'Please sign in using your Google account'}
                    </p>

                    {!redirecting && (
                        <div className="flex justify-center">
                            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
                        </div>
                    )}
                </motion.div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;
