import React from 'react'
import { useEffect,useState } from 'react'

import ListItem from '../compoents/ListItem';
import AddNote from '../compoents/AddNote';

function NotesListPage() {

    

    let [notes,setNotes] = useState([])

    useEffect (()=>{
        getNotes()

    },[])

    let getNotes = async () => {
        let response = await fetch('https://ganeshgodse19.pythonanywhere.com/api/notes')
        let data = await response.json()
        console.log(data)
        console.log(response)
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