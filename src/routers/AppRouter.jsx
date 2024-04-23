import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNote, startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {


     const dispatch = useDispatch();

     const [checking, setchecking] = useState(true)

     const [isLoggedIn, setisLoggedIn] = useState(false)


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);

               
               dispatch(startLoadingNotes (user.uid))
                
            } else {
                setisLoggedIn(false);
            }

            setchecking(false);

        });
    }, [dispatch, setchecking,setisLoggedIn]);


    if (checking) {
        return (
            <h1>Wait...</h1>
        )
    }
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <JournalScreen />
                    </PrivateRoute>
                } />
    
    <Route path="/auth/login" element={
                <PublicRoute isAuthenticated={isLoggedIn}>
                    <LoginScreen />
                </PublicRoute>
            } />

            <Route path="/auth/register" element={
                <PublicRoute isAuthenticated={isLoggedIn}>
                    <RegisterScreen />
                </PublicRoute>
            } />
        </Routes>
    </BrowserRouter>
);

}