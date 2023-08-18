import {
  Card,
  Title,
  PosterWrap,
  PosterImg,
  PosterIcon,
} from './MovieCard.styled';

const MovieCard = ({ props }) => {
  const { id, original_title, poster_path } = props;

  return (
    <Card to={`/movies/${id}`}>
      <PosterWrap>
        {poster_path ? (
          <PosterImg
            src={`http://image.tmdb.org/t/p/w200${poster_path}`}
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

export default MovieCard;
