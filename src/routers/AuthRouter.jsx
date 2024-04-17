import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/auth/login');
      }, [navigate]);

    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <BrowserRouter>
                <Routes>
                    <Route path="/auth/login" element={<LoginScreen />} />
                    <Route path="/auth/register" element={<RegisterScreen />} />
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}