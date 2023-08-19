import {
  Section,
  ActorsList,
  ActorCard,
  ImgWrap,
  PersonIcon,
  Text,
} from './Cast.styled.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const Cast = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCastData = async () => {
      try {
        const creditsData = await APIservices.fetchMovieCredits(movieId);
        // console.log('creditsData:', creditsData);
        setCast(creditsData.cast);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getCastData();
  }, [movieId]);

  if (status === 'pending') {
    return <div className="message">Loading...</div>;
  }

  if (status === 'rejected') {
    return <div className="message">Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <Section>
        {cast.length === 0 ? (
          <p>We don't have any cast data for this movie.</p>
        ) : (
          <ActorsList>
            {cast.map(({ id, name, profile_path }) => {
              return (
                <ActorCard key={id}>
                  <ImgWrap>
                    {profile_path ? (
                      <img
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
        )}
      </Section>
    );
  }
};

export default Cast;
