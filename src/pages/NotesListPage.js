import React from 'react'
import { useEffect,useState } from 'react'

import ListItem from '../compoents/ListItem';
import AddNote from '../compoents/AddNote';

function NotesListPage() {

    const API_URL = process.env.REACT_APP_API_URL;

    let [notes,setNotes] = useState([])

    useEffect (()=>{
        getNotes()

    },[])

    let getNotes = async () => {
        let response = await fetch(`${API_URL}/api/notes`)
        let data = await response.json()
        // console.log(data)
        setNotes(data)

    }

  return (
    <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>

            <AddNote />
           
        </div>
  )
}

export default NotesListPage