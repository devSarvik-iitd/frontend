import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import config from '../config';

const LoginPage = () => {
  // Google client ID - replace this with your own client ID from Google Developer Console
  const clientId = '632224802103-8sssksmpm4i3pfiag2ojbi1n8u10r2if.apps.googleusercontent.com';

  // This function is called when the Google login is successful
  const handleLoginSuccess = async (response) => {
    try {
      // Send the received Google token to your backend API
      const { data } = await axios.post(`${config.baseURL}/auth/login`, {
        token: response.credential,
      });

      console.log('Backend response:', data);

      // You can handle further redirection or state management here
      // For example, redirect to the homepage or set user data in state
    } catch (error) {
      console.error('Error during login:', error);
      // Handle any errors, like showing an alert or redirecting to an error page
    }
  };

  // This function is called when the Google login fails
  const handleLoginFailure = (error) => {
    console.error('Google login failed:', error);
    // Handle the error as needed (e.g., show an alert or retry)
  };

  useEffect(() => {
    // If you're using GoogleOAuthProvider at a higher level in your app, you can remove this from here
    // It ensures that your Google client is ready for use
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="login-container">
        <h2>Login Page</h2>
        <div className="google-login">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
