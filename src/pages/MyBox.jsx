import { useMyBox } from "../context/MyBoxContext";
import MovieCard  from "../MovieCard";
import './MyBox.css'
import { Link } from "react-router-dom";

function MyBox() {
  const {myBox}=useMyBox();

  return (
    <div>
      <h2 style={{ color: "white", marginTop: "30px", textAlign: "center" }}>나의 찜 목록</h2>

      <div style={{ padding: "20px", textAlign: "center" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            border: "1px solid white",
            padding: "8px 12px",
            borderRadius: "5px",
          }}
        >
          ← 홈으로
        </Link>
      </div>

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