import { useMyBox } from './context/MyBoxContext';
import { useLocation,Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { myBox, toggleMovie } = useMyBox();
  const isSaved = myBox.some(m => m.id === movie.id);
  const location = useLocation();
  const isFromMyBox = location.pathname === "/mybox";

  return (
    <div className="movie-container">
  <Link
    to={`/movie/${movie.id}`}
    state={isFromMyBox ? { from: 'mybox' } : undefined}
    className="movie-link"
  >
    <img src={movie.posterUrl} alt={movie.title} />
    <h3>{movie.title}</h3>
  </Link>
  <button 
  className="heart-button"
  onClick={(e) => {
    e.stopPropagation(); 
    toggleMovie(movie);
  }}>
    {isSaved ? '❤️' : '🤍'}
  </button>
</div>
  );
}

export default MovieCard;
