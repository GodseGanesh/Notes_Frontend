import React from "react";
import { useEffect, useState } from "react";

import ListItem from "../compoents/ListItem";
import AddNote from "../compoents/AddNote";
import Header from "../compoents/Header";

function NotesListPage() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, [notes]);

  let getNotes = async () => {
    let response = await fetch(
      "https://ganeshgodse19.pythonanywhere.com/api/notes"
    );
    let data = await response.json();
    console.log(data);
    console.log(response);
    setNotes(data);
  };

  return (
    <div className="app">
      <Header />
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes</h2>
          <p className="notes-count">{notes.length}</p>
        </div>

        <div className="notes-list">
          {notes.length === 0 ? (
            <p className="no-notes-message">No notes available. Add some!</p>
          ) : (
            notes.map((note, index) => <ListItem key={index} note={note} />)
          )}
        </div>

        <AddNote />
      </div>
    </div>
  );
}

export default NotesListPage;
