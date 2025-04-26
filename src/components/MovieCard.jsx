import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "../index.css"

function MovieCard({id, title}) {
  
  return (
    <article>
      <h2>{title}</h2>
      <span>
        <Link to={`/movie/${id}`}>View Info</Link>
      </span>
    </article>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;