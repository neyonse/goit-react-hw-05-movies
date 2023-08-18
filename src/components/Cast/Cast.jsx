import {
  ActorsList,
  ActorCard,
  ImgWrap,
  ActorImg,
  PersonIcon,
  Text,
} from './Cast.styled.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const Cast = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('idle');
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCastData = async () => {
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

    getCastData();
  }, [movieId]);

  if (status === 'idle') {
    return <div>There is no cast yet.</div>;
  }

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <ActorsList>
        {cast.map(actor => {
          const { id, name, profile_path } = actor;
          return (
            <ActorCard key={id}>
              <ImgWrap>
                {profile_path ? (
                  <ActorImg
                    src={`http://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <PersonIcon />
                )}
              </ImgWrap>

              <Text>{name}</Text>
            </ActorCard>
          );
        })}
      </ActorsList>
    );
  }
};

export default Cast;
