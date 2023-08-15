import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <div className="container">
      <h2>Movie {movieId} details</h2>
      <div>
        Image wrapper
        <img src="" alt="" />
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

// cast={data.cast}
// reviews={data.reviews}
