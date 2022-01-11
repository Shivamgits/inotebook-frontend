import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)



  //Add a Note
  const addNote = async (title, description, tag) => {
    const note = null;
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
  
    //add note to notes array and update note state
    //concat returns an array whereas push updates an array
    setNotes(notes.concat(note))

  }


  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();
    

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }


  //Edit a Note
  const editNote = async (id, title, tag, description) => {
    //API Call
    // Default options are marked with *
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
    });
    const json =await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);



    let newNotes= JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].tag = tag;
        newNotes[index].description = description;
        break;
      }

    }
    setNotes(newNotes);

  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }} >
      {props.children}
    </NoteContext.Provider>
  )

}


export default NoteState;