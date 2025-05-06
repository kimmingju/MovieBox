import { useMyBox } from "../context/MyBoxContext";
import MovieCard  from "../MovieCard";
import './MyBox.css'
import HomeButton from "../components/HomeButton";

function MyBox() {
  const {myBox}=useMyBox();

  return (
    <div>
      <h2 style={{ color: "white", marginTop: "30px", textAlign: "center" }}>나의 찜 목록</h2>

      <HomeButton />

      <div className="mybox-container">
        {myBox.length === 0 ? (
          <p
            style={{
              color: "white",
              fontSize: "25px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            찜한 영화가 없습니다.
          </p>
        ) : (
          <div className="app-container">
            {myBox.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBox;