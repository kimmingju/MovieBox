import { useState } from "react";
import { dummy } from "./movieDummy";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";


function App() {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(dummy.results);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearch = () => {
    const newMovies = dummy.results.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(newMovies);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleReset = () => {
    setSearch("");
    setFilteredMovies(dummy.results);
  };

  const handleGenreChange=(e)=>{
    const genreId=e.target.value;
    setSelectedGenre(genreId);

    if(genreId===''){
      setFilteredMovies(dummy.results);
    }else{
      const filtered=dummy.results.filter((movie)=>
      movie.genre_ids.includes(Number(genreId)));
      setFilteredMovies(filtered);
    }
  }
  return (
    <>
     <Header/>
     <SearchBar
      search={search}
      onSearchChange={(e)=>setSearch(e.target.value)}
      onSearch={handleSearch}
      onReset={handleReset}
      selectedGenre={selectedGenre}
      onGenreChange={handleGenreChange}
      onKeyDown={handleKeyDown}
     />
     <MovieList movies={filteredMovies}/> 
    </>
  );
}

export default App;
