import NoteContext from "./noteContext";
import {useState} from "react";


const NoteState = (props) =>{
   
   const notesInitial = ""
   const [notes, setNotes] = useState(notesInitial)



   //Add a Note
   const addNote = (title,description,tag) => {
       const note= null;
       //add note to notes array and update note state
       //concat returns an array whereas push updates an array
       setNotes(notes.concat(note))

   }


   //Delete a Note
   const deleteNote = () => {
       
}


   //Edit a Note
   const editNote = () => {
       
}
   
    return (
        <NoteContext.Provider value={{notes, setNotes,addNote,deleteNote,editNote}} >
            {props.children}
        </NoteContext.Provider>
    )

}


export default NoteState;