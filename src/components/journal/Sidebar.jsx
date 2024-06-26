import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(startLogout())
    }

    const {name} = useSelector(state => state.auth)    

    const handleAddNew = () => {
        dispatch(startNewNote())
    }
    
    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button
                  onClick={handleLogOut}  
                  className="btn">
                    Logout
                </button>
                
            </div>

            <div 
            className="journal__new-entry"
            onClick={handleAddNew}
            
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />    

        </aside>
    )
}
