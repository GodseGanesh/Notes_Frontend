import React from "react";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../compoents/Header";

function Notepage(history) {
  const getCsrfToken = () => {
    return document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .filter((cookie) => cookie.startsWith("csrftoken="))
      .map((cookie) => decodeURIComponent(cookie.split("=")[1]))
      .join("");
  };

  const csrfToken = getCsrfToken();

  const { noteId } = useParams();

  const navigate = useNavigate();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(
      `https://ganeshgodse19.pythonanywhere.com/api/note/${noteId}/`
    );

    let data = await response.json();

    setNote(data);
  };

  let updateNote = async () => {
    fetch(`https://ganeshgodse19.pythonanywhere.com/api/note/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = () => {
    fetch(`https://ganeshgodse19.pythonanywhere.com/api/note/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
    });
    navigate("/");
  };

  let createNote = async () => {
    fetch("https://ganeshgodse19.pythonanywhere.com/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = async () => {
    if (noteId === "new" && note === null) {
      navigate("/");
      return;
    }

    if (noteId !== "new" && note.body === "") {
      await deleteNote();
    } else if (noteId !== "new") {
      await updateNote();
    } else if (noteId === "new" && note.body !== null) {
      await createNote();
    }

    navigate("/");
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
  };

  return (
      <div className="app">
        <Header />
        <div className="note">
          <div className="note-header">
            <h3>
              <ArrowLeft onClick={handleSubmit} />
            </h3>
            {noteId !== "new" ? (
              <button onClick={deleteNote}>Delete</button>
            ) : (
              <button onClick={handleSubmit}>Done</button>
            )}
          </div>
          <textarea
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            value={note?.body}
          ></textarea>
        </div>
      </div>
 
  );
}

export default Notepage;
