import React, { useContext } from "react";
import "./newUserNameStyles.css";
import { Data } from "../Context/UserContext";

const Form = () => {
  const { form, addUser, handleChange, setShowForm } = useContext(Data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.groupName.trim()) {
      alert("group Name is required..!!");
      return;
    }

    if (!form.color) {
      alert("Select the color");
      return;
    }
    addUser(e);
  };
  return (
    <div>
      <div className="modal-overlay" onClick={() => setShowForm(false)}>
        <div className="form-container" onClick={(e) => e.stopPropagation()}>
          <form className="form" onSubmit={handleSubmit}>
            <h3>Create New Group</h3>
            <div className="labels">
              <label id="group-panel">
                <p>Group Name</p>
                <input
                  type="text"
                  placeholder="Enter group name"
                  name="groupName"
                  value={form.groupName}
                  onChange={handleChange}
                />
              </label>
              <label id="panel-label">
                <p>Choose colour</p>
                <div className="color-panels">
                  {" "}
                  <button
                    id="first-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="rgb(179, 139, 250)"
                  ></button>{" "}
                  <button
                    id="second-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="violet"
                  ></button>{" "}
                  <button
                    id="third-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="rgb(67, 230, 252)"
                  ></button>{" "}
                  <button
                    id="fourth-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="rgb(241, 149, 118)"
                  ></button>{" "}
                  <button
                    id="fifth-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="rgb(0, 71, 255)"
                  ></button>{" "}
                  <button
                    id="sixth-color"
                    type="button"
                    onClick={handleChange}
                    name="color"
                    value="rgb(102, 145, 255)"
                  ></button>{" "}
                </div>
              </label>
            </div>
            <div className="create-btn-div">
              <button id="create-btn" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
