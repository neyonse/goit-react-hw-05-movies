import {
  Link,
  Section,
  Wrapper,
  PosterImg,
  Info,
  MovieTitle,
  Score,
  Title,
  Text,
  GenresList,
  GenreLink,
  ListWrap,
} from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [status, setStatus] = useState('pending');
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const movieData = await APIservices.fetchMovieDetails(movieId);
        setMovieDetails(movieData);
        // console.log('movieData:', movieData);
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
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movieDetails;

    const userScore = (vote_average * 10).toFixed();

    return (
      <>
        <Section>
          <h1 className="visually-hidden">Selected movie info</h1>
          <Wrapper>
            <PosterImg
              src={`http://image.tmdb.org/t/p/w300${poster_path}`}
              alt={`${original_title} poster`}
            />
            <Info>
              <MovieTitle>
                {original_title} ({release_date.slice(0, 4)})
              </MovieTitle>
              <Text>
                User Score:{' '}
                {userScore >= 70 && (
                  <Score style={{ color: '#61c200' }}>{userScore}%</Score>
                )}
                {userScore >= 50 && userScore < 70 && (
                  <Score style={{ color: 'olive' }}>{userScore}%</Score>
                )}
                {userScore < 50 && (
                  <Score style={{ color: '#ab7b00' }}>{userScore}%</Score>
                )}
              </Text>
              <div>
                <Title>Overview</Title>
                <Text>{overview}</Text>
              </div>
              <div>
                <Title>Genres</Title>
                <GenresList>
                  {genres.map(genre => (
                    <li key={genre.id}>
                      <GenreLink href="#">{genre.name}</GenreLink>
                    </li>
                  ))}
                </GenresList>
              </div>
            </Info>
          </Wrapper>
        </Section>

        <ListWrap>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListWrap>
        <Outlet />
      </>
    );
  }
};

export default MovieDetails;
