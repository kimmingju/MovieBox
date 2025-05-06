// src/context/MyBoxContext.jsx
import { createContext, useContext, useState } from "react";

const MyBoxContext = createContext();

export function MyBoxProvider({ children }) {
  const [myBox, setMyBox] = useState([]);

  const toggleMovie = (movie) => {
    setMyBox((prev) => {
      const exists = prev.find((m) => m.id === movie.id);
      return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
    });
  };

  return (
    <MyBoxContext.Provider value={{ myBox, toggleMovie }}>
      {children}
    </MyBoxContext.Provider>
  );
}

export function useMyBox() {
  return useContext(MyBoxContext);
}
