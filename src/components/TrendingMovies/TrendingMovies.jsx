import {
  Section,
  SectionTitle,
  MoviesList,
  ShowMoreBtn,
} from './TrendingMovies.styled';
import { useState, useEffect } from 'react';
import { APIservices } from 'utils';
import MovieCard from 'components/MovieCard';

const TrendingMovies = () => {
  const [status, setStatus] = useState('pending');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const { results, total_pages } = await APIservices.fetchTrendingMovies(
          page
        );
        if (page === 1) {
          setTrendingMovies(results);
        } else {
          setTrendingMovies(prevMovies => [...prevMovies, ...results]);
        }

        if (page < total_pages) {
          setShowBtn(true);
        }

        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [page]);

  const showMore = () => setPage(prevPage => prevPage + 1);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <Section>
        <SectionTitle>Trending movies</SectionTitle>
        <MoviesList>
          {trendingMovies.map(movie => (
            <MovieCard
              to={`/movies/${movie.id}`}
              key={movie.id}
              movie={movie}
            />
          ))}
        </MoviesList>
        {showBtn && (
          <ShowMoreBtn type="button" aria-label="show more" onClick={showMore}>
            Show more
          </ShowMoreBtn>
        )}
      </Section>
    );
  }
};

export default TrendingMovies;
