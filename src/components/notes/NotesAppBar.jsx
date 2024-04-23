import React from 'react'
import { activeNote, startSaveNote, startUploading } from '../../actions/notes'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'


export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)

const {date} = activeNote

    const noteDate = moment(date);

    

    const handleSave = () => {
        
         dispatch(startSaveNote(active)) 
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) => {
        const file =  e.target.files[0];
        if(file){
            dispatch(startUploading(file))
        }
    }




    return (
        <div className="notes__appbar">
            <span>{ noteDate.format('dddd')}</span>
                <h4>{ noteDate.format('Do')}</h4>

            <input
            id='fileSelector'
            name='file'
            type="file"
            style={{display: 'none'}}
            onChange={handleFileChange}
             />

            <div>
                <button 
                className="btn"
                onClick={handlePictureClick}
                
                >
                    Picture
                </button>

                <button 
                className="btn"
                 onClick={handleSave} 
                
                >
                    Save
                </button>
            </div>
        </div>
    )
}
