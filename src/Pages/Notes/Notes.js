import React, { useContext } from "react";
import "./NotesStyles.css";
import { Data } from "../../Context/UserContext";
import UserCard from "../../Components/Notes/UserCard";
import NewNotes from "../../Components/Notes/NewNotes";
const Notes = () => {
  const { users, activeUserId, handleArrow } = useContext(Data);
  const activeUser = users.find((u) => u.id === activeUserId);

  if (!users || users.length === 0 || !activeUser) {
    return (
      <div className="notes-page">
        <div></div>
        <div className="hero">
          <img className="hero-bg" src="notesLogo.jpg" alt="hero" />
          <h3>Pocket Notes</h3>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className="end-end">
          <img src="padlock.png" alt="padlock" />
          <p>end-to-end encrypted</p>
        </div>
      </div>
    );
  }

  if (activeUser) {
    return (
      <div className="notes-page2">
        <div className="notes-div">
          <div className="user-session">
            <img
              src="arrow.png"
              alt="back-image"
              id="back-arrow"
              onClick={handleArrow}
            />
            <UserCard
              groupName={activeUser.groupName}
              color={activeUser.color}
            />
          </div>

          <div className="user-notes">
            {activeUser.notes.length === 0 ? (
              <p>No Notes!</p>
            ) : (
              activeUser.notes.map((note, index) => (
                <div key={index} className="note-item">
                  <p className="note-text">{note.text}</p>
                  <div className="time-div">
                    <small className="note-time">{note.time}</small>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="new-notes-form">
            <NewNotes userId={activeUser.id} />
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
