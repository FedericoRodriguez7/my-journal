import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {

    return (
        
        <Router>
            <div>
            <Routes>
                <Route path="/" element={<JournalScreen />} exact />
            </Routes>
            <div className='auth__main'>
                <div className="auth__box-container">

                
                <Routes>
                <Route path="/auth/login" element={<LoginScreen />} />
                    <Route path="/auth/register" element={<RegisterScreen />} />
                  
                    
                </Routes>
                </div>  
            </div>
            
            
            </div>
        </Router>
    );
}