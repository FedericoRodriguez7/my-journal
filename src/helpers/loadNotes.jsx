import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesCollection = collection(db, `${uid}/journal/notes`);
    const notesSnap = await getDocs(notesCollection);

    const notes = [];

    notesSnap.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data()
        });
    });

    console.log(notes);

    return notes;
}