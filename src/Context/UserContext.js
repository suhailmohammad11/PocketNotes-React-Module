import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Data = createContext();

export const UserContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    groupName: "",
    color: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const [users, setUsers] = useState(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      if (!savedUsers || savedUsers === "undefined") {
        return [];
      }
      return JSON.parse(savedUsers);
    } catch (error) {
      console.log("Error parsing users from Local Storage", error);
      return [];
    }
  });

  function capitalizeEachWord(word){
    return word.trim().split(" ").map(w=>w.charAt(0).toUpperCase()+ w.slice(1).toLowerCase()).join(" ");
  }
  const [activeUserId, setActiveUserId] = useState(null);

  const addUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      groupName: capitalizeEachWord(form.groupName),
      color: form.color,
      notes: [],
    };
    const isDuplicate = users.some(
      (u) => u.groupName.toLowerCase() === newUser.groupName.toLowerCase()
    );
    if (isDuplicate) {
      alert("User Alredy exits");
      return;
    }
    setUsers([...users, newUser]);
    setForm({ groupName: "", color: "" });
    setShowForm(false);

    setActiveUserId(newUser.id);
  };

  //adding notes
  const addNote = (userId, noteText) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const now = new Date();
        const options = {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };
        const formattedTime = now
          .toLocaleString("en-GB", options)
          .replace(",", "  .  ");
        const newNote = {
          time: formattedTime,
          text: noteText,
        };

        return {
          ...user,
          notes: [...user.notes, newNote],
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleArrow = () => {
    setShowNotes(false);
    setActiveUserId(null);
  };

  return (
    <Data.Provider
      value={{
        form,
        setForm,
        setUsers,
        addUser,
        users,
        handleChange,
        showForm,
        setShowForm,
        addNote,
        activeUserId,
        setActiveUserId,
        setShowNotes,
        showNotes,
        handleArrow,
      }}
    >
      {children}
    </Data.Provider>
  );
};
