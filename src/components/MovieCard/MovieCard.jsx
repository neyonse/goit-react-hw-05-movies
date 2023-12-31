import {
  Card,
  Title,
  PosterWrap,
  PosterImg,
  PosterIcon,
} from './MovieCard.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const location = useLocation();

  const { id, original_title, poster_path } = movie;

  return (
    <Card to={`/movies/${id}`} state={{ from: location }}>
      <PosterWrap>
        {poster_path ? (
          <PosterImg
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            alt={`${original_title} poster`}
          />
        ) : (
          <PosterIcon />
        )}
      </PosterWrap>
      <Title>{original_title}</Title>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
