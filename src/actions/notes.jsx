import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/firebase-config"



    export const startNewNote = () => {
        return async (dispatch, getState) => {

            const uid = getState().auth.uid
            
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
            }
            // const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
             const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote) 

            console.log(doc)
        }
    }