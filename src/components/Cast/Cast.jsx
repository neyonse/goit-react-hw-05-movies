import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const Cast = () => {
  const { movieId } = useParams();
  // console.log('cast id', movieId);

  const [status, setStatus] = useState('idle');
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const { cast } = await APIservices.fetchMovieCredits(movieId);
        setCast(cast);
        console.log('creditsData:', cast);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getMoviesData();
  }, [movieId]);

  if (status === 'idle') {
    return <div>There is no cast yet</div>;
  }

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong...</div>;
  }

  if (status === 'resolved') {
    return (
      <div>
        {/* <h3>Cast</h3> */}
        {cast.map(actor => {
          return (
            <div key={actor.id}>
              {/* <img src={actor.profile_path} alt={actor.name} /> */}
              <p>{actor.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cast;
