import { Section, List, BtnWrap, PageBtn } from './MoviesList.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APIservices } from 'utils';
import MovieCard from 'components/MovieCard';

const MoviesList = () => {
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPageBtn, setNextPageBtn] = useState(false);
  const [prevPageBtn, setPrevPageBtn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromParams = searchParams.get('query') ?? '';
  const pageFromParams = Number(searchParams.get('page')) ?? 1;
  console.log('pageFromParams', pageFromParams);
  console.log('page', page);

  useEffect(() => {
    if (!nextPageBtn) {
      setPage(1);
      return;
    }
    setPage(pageFromParams);
  }, [nextPageBtn, pageFromParams, query, setSearchParams]);

  useEffect(() => {
    setQuery(queryFromParams);
  }, [queryFromParams]);

  useEffect(() => {
    if (!query) return;

    const getMoviesData = async () => {
      setStatus('pending');
      try {
        const { results, total_pages } = await APIservices.fetchMoviesByName(
          query,
          page
        );
        setMovies(results);
        setSearchParams({ query: query, page: page });

        if (page < total_pages) {
          setNextPageBtn(true);
        } else {
          setNextPageBtn(false);
        }

        if (page > 1) {
          setPrevPageBtn(true);
        } else {
          setPrevPageBtn(false);
        }

        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [page, query]);

  const goNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const goPrevPage = () => {
    setPage(prevPage => prevPage - 1);
    // setSearchParams({ query: query, page: page });
  };

  if (status === 'idle') {
    return (
      <div className="message">
        Type in the search box to find a specific movie.
      </div>
    );
  }

  if (status === 'pending') {
    return <div className="message">Loading...</div>;
  }

  if (status === 'rejected') {
    return <div className="message">Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <Section>
        <h2 className="visually-hidden">Find movie</h2>
        {movies.length === 0 ? (
          <p>No search results for "{query}".</p>
        ) : (
          <List>
            {movies.map(movie => (
              <MovieCard
                to={`/movies/${movie.id}`}
                key={movie.id}
                movie={movie}
              />
            ))}
          </List>
        )}
        <BtnWrap>
          {prevPageBtn && (
            <PageBtn
              type="button"
              aria-label="previous page"
              onClick={goPrevPage}
            >
              Previous page
            </PageBtn>
          )}
          {nextPageBtn && (
            <PageBtn type="button" aria-label="next page" onClick={goNextPage}>
              Next page
            </PageBtn>
          )}
        </BtnWrap>
      </Section>
    );
  }
};

export default MoviesList;
