import React, { useContext } from "react";
import "./NameStyles.css";
import { Data } from "../../Context/UserContext";
import Form from "../../Components/Form";
import UserCard from "../../Components/Notes/UserCard";
const Names = () => {
  const { users, showForm, setShowForm, setShowNotes, setActiveUserId } =
    useContext(Data);
  console.log(users);
  const createUser = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="names-page">
        <div className="title">
          <h1 className="title-h1">Pocket Notes</h1>
        </div>
        <div className="users-panel">
          {users &&
            users.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveUserId(item.id);
                    setShowNotes(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <UserCard
                    key={item.id}
                    groupName={item.groupName}
                    color={item.color}
                  />
                </div>
              );
            })}

          <div className="btn">
            <img
              className="add-btn"
              src="plus.png"
              alt="add-btn"
              onClick={createUser}
            />
          </div>
        </div>
        {showForm && <Form />}
      </div>
    </>
  );
};

export default Names;
