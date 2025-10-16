import React, { useContext, useState } from "react";
import { Data } from "../../Context/UserContext";
import "./NewNotesStyles.css";

const NewNotes = ({ userId }) => {
  const { addNote } = useContext(Data);
  const [text, setText] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleAddNote = () => {
    if (!text.trim()) {
      alert("Note cannot be empty");
      return;
    }
    addNote(userId, text);
    setText("");
  };

  return (
    <div className="new-notes">
      <div className="notes-input">
        <textarea
          className="message-box"
          name="note"
          value={text}
          onChange={handleText}
          placeholder="Here's the sample text for sample work"
          onKeyDown={(e)=>{
            if(e.key==="Enter" && !e.shiftKey){
              e.preventDefault();
              handleAddNote();
            }
          }}
        />
        <div className="send-btn-div">
          <img 
            onClick={handleAddNote}
            id="send-btn"
            src="send-button.png"
            alt="send-img"
            className={text.trim() ? "active-btn" : "inactive-btn"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewNotes;
