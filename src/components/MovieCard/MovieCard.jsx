import { Card, Title, PosterWrap, PosterImg } from './MovieCard.styled';
// import { useState, useEffect } from 'react';

const MovieCard = ({ props }) => {
  const { id, original_title, poster_path } = props;
  // const [status, setStatus] = useState('pending');
  // const [trendingMovies, setTrendingMovies] = useState([]);

  // <img
  //   style={{ display: 'block', width: '40px', height: '40px' }}
  //   src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
  //   alt={`${movie.title} poster`}
  // />;

  return (
    <Card to={`/movies/${id}`}>
      <PosterWrap>
        <PosterImg
          src={`http://image.tmdb.org/t/p/w200${poster_path}`}
          alt={`${original_title} poster`}
        />
      </PosterWrap>
      <Title>{original_title}</Title>
    </Card>
  );
};

export default MovieCard;
