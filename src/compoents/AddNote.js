import React, { useState } from 'react';

function AddNewNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      title,
      content,
    };

    try {
      const response = await fetch("https://ganeshgodse19.pythonanywhere.com/api/notes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
        // Redirect or handle success
        console.log("Note added successfully");
      } else {
        console.error("Error adding note:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNewNote;
