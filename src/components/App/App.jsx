import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { Home, Movies, NotFound } from 'pages';
import MovieDetails from 'components/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
