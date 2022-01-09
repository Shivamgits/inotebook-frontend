import React,{ useContext} from 'react'
import NoteItem from './NoteItem'
import AddNote from './AddNote'



function Notes() {
    
    return (<>
        <AddNote/>
       
             <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note)=>{
                   
                    return <NoteItem key={note.id} note={note}/>;
                })}
            </div>
            </>
       
    )
}

export default Notes
