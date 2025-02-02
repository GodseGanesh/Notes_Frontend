import React, { useEffect, useState } from "react";
import ListItem from "../compoents/ListItem";
import AddNote from "../compoents/AddNote";
import Header from "../compoents/Header";

function NotesListPage() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    try {
      let response = await fetch(
        "https://ganeshgodse19.pythonanywhere.com/api/notes"
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // Check if the data is an array
        if (Array.isArray(data)) {
          setNotes(data); // Set notes if data is an array
        } else {
          setNotes([]); // Set an empty array if the data is not an array
          console.error("Data is not an array:", data);
        }
      } else {
        console.error("Failed to fetch notes:", response.statusText);
        setNotes([]); // Ensure that notes is set to an empty array if the request fails
      }
    } catch (error) {
      console.error("Request failed:", error);
      setNotes([]); // Set to empty array on error
    }
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
