import HomeButton from "../components/homeButton";
import { useMyMovie } from "../context/MyMovieContext";
import MovieCard from "../MovieCard";

function MyMoviePage() {
  const { myMovies } = useMyMovie();

  return (
    <div>
    <h2 style={{ color: "white", marginTop: "30px", textAlign: "center" }}>나의 영화</h2>
    <HomeButton/>
    <div className="app-container">
      {myMovies.length === 0 ? (
        <p style={{
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          marginTop: "100px"
        }}>
          아직 결제한 영화가 없습니다.
        </p>
      ) : (
        myMovies.map((movie) => (
          <div key={movie.id} className="movie-container">
            <img
              src={movie.posterUrl || `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h3 style={{ padding: "10px", fontSize: "16px" }}>{movie.title}</h3>
            <button style={{marginBottom:"10px"}}>시청하기</button>
          </div>
        ))
      )}
      
    </div>
    </div>
  );
}

export default MyMoviePage;
