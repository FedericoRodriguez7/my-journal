import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {


     const dispatch = useDispatch();

     const [checking, setchecking] = useState(true)

     const [isLoggedIn, setisLoggedIn] = useState(false)


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);
                
            } else {
                setisLoggedIn(false);
            }

            setchecking(false);

        });
    }, [dispatch, setchecking,setisLoggedIn]);


    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }
    

    return (
        
        <Router>
            <div>
              <Routes>
            <PrivateRoute
    isAuthenticated={isLoggedIn} 
    path="/" 
    element={<JournalScreen />} 
    exact 
/>

            <div className='auth__main'>
                <div className="auth__box-container">

                
                
                <Route path="/auth/login" element={<LoginScreen />} />
                    <Route path="/auth/register" element={<RegisterScreen />} />
                  
                    
                
                </div>  
            </div>
            
            </Routes>
            </div>
            
        </Router>
    );
}