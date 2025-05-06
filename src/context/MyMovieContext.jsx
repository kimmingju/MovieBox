import { createContext, useContext, useState } from "react";

const MyMovieContext = createContext();

export function MyMovieProvider({ children }) {
  const [myMovies, setMyMovies] = useState([]);

  const addMovies = (movies) => {
    setMyMovies((prev) => [...prev, ...movies]);
  };

  return (
    <MyMovieContext.Provider value={{ myMovies, addMovies }}>
      {children}
    </MyMovieContext.Provider>
  );
}

export function useMyMovie() {
  return useContext(MyMovieContext);
}
