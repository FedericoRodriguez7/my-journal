import Swal from 'sweetalert2';
import { types } from "../types/types";
import {  signInWithPopup, getAuth, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth ,provider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";










export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName),
                dispatch(finishLoading())
            )
        })
        .catch(e => {
            console.log(e);
            dispatch(finishLoading())
            Swal.fire({
                icon: "error",
  title: "Oops...",
  text: "Email o contraseña erronea",
  
            })
        });
    }
 }

 export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            console.log(userCredential);
            // Actualiza el displayName del usuario con el nombre proporcionado
            await updateProfile(userCredential.user, { displayName: name });
            dispatch(login(userCredential.user.uid, userCredential.user.displayName));
        })
        .catch(e => {
            
            Swal.fire({
                icon: "error",
  title: "Oops...",
  text: "Algo salio mal, intentelo de nuevo",
  
            })
        });
    }
}

 export const startGoogleLogin =  () => {
    return (dispatch) => { 
        signInWithPopup(auth, provider)
        .then( ({user}) => {
           dispatch(
                login(user.uid, user.displayName)
              
           )
        })
    }
}



export const login = (uid, displayName) => ({     
           
        type: types.login,        
        payload: {            
            uid,            
            displayName        
        }    
      


})

export const startLogout = () => {  
    return async (dispatch) => {        
        const auth = getAuth();
        await signOut(auth);        
        dispatch(logout());    
    }
}

export const logout = () => ({
    type: types.logout
})