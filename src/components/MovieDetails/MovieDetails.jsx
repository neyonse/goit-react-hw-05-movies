import {
  Wrapper,
  Title,
  PosterImg,
  Info,
  ListWrap,
} from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [status, setStatus] = useState('pending');
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const movieData = await APIservices.fetchMovieDetails(movieId);
        setMovieDetails(movieData);
        console.log('movieData:', movieData);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [movieId]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong...</div>;
  }

  if (status === 'resolved') {
    const { original_title, poster_path, overview, vote_average } =
      movieDetails;
    return (
      <section>
        <Title>{original_title}</Title>
        <Wrapper>
          <PosterImg
            src={`http://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`${original_title} poster`}
          />
          <Info>
            <p>{overview}</p>
            <p>{vote_average}</p>
          </Info>
        </Wrapper>

        <ListWrap>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListWrap>
        <Outlet />
      </section>
    );
  }
};

export default MovieDetails;
