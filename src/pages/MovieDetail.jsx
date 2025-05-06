import { useParams, Link, useLocation  } from "react-router-dom";
import { dummy } from "../movieDummy";
import { useCart } from "../context/CartContext";


export default function MovieDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((m) => m.id === Number(id));
  const location = useLocation();
  const from = location.state?.from;
  const {addToCart}=useCart();

  if (!movie) {
    return (
      <div style={{ color: "white", padding: "20px" }}>
        <h2>영화를 찾을 수 없습니다</h2>
        <Link to="/">
          <button style={{ marginTop: "20px" }}>← 돌아가기</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img
          className="detail-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p><strong>줄거리</strong><br />{movie.overview}</p>
          <p><strong>개봉일:</strong> {movie.release_date}</p>
          <p><strong>평점:</strong> {movie.vote_average}</p>
          <button 
            className="cart-button"
            onClick={()=>{addToCart(movie)
            alert(`${movie.title}이(가) 장바구니에 담겼습니다!`); 
            }}
          >장바구니에 담기</button>
          <br></br>
          <Link to={from === "mybox" ? "/mybox" : "/"} className="back-button">
            ← 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
