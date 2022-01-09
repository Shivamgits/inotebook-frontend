import React from "react";

const NoteItem = () => {
  const { note } = props;
  return (
    <div class="col-md-3">
        <div class="card my-3">
      <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">{note.description}</p>
      </div>
    </div>
    </div>
  );
};

export default NoteItem;
