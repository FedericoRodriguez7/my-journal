import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm( note )

    const activeId = useRef(note.id)

    useEffect(() => {
        
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
            
        }
      
    }, [note, reset])

    useEffect(() => {

      dispatch( activeNote( formValues.id, {...formValues}) );
    
    }, [formValues, dispatch])
    
    

    const { body, title} = formValues;



    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    name='body'
                    onChange={handleInputChange}

                ></textarea>

                    {
                        (note.url) && (
                        
                        <div className="notes__image">
                        <img 
                            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                            alt="imagen"
                        />
                    </div>
                        )
                    
                    }


            </div>

        </div>
    )
}
