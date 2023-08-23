import {
  Link,
  Section,
  Wrapper,
  PosterWrap,
  PosterImg,
  PosterIcon,
  Info,
  MovieTitle,
  Score,
  Title,
  Text,
  GenresList,
  GenreLink,
  ListWrap,
} from './MovieDetails.styled';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { APIservices } from 'utils';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const movieData = await APIservices.fetchMovieDetails(movieId);
        setMovieDetails(movieData);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [movieId]);

  if (status === 'pending') {
    return <div className="message">Loading...</div>;
  }

  if (status === 'rejected') {
    return <div className="message">Oooops, something went wrong...</div>;
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
        <Link to={backLinkHref.current}>Go back</Link>
        <Section>
          <h1 className="visually-hidden">Selected movie info</h1>
          <Wrapper>
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
        <Suspense fallback={<p className="message">Loading...</p>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

export default MovieDetails;
