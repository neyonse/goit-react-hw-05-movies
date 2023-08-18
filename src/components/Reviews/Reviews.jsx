import {
  ReviewsSection,
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  Text,
} from './Reviews.styled.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIservices } from 'utils';

const Reviews = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('idle');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviewsData = async () => {
      try {
        const reviewsData = await APIservices.fetchMovieReviews(movieId);
        console.log('reviews:', reviewsData);
        setReviews(reviewsData.results);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    };

    getReviewsData();
  }, [movieId]);

  if (status === 'idle') {
    return <div>There is no reviews yet.</div>;
  }

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>Oooops, something went wrong.</div>;
  }

  if (status === 'resolved') {
    return (
      <ReviewsSection>
        <h2 className="visually-hidden">Reviews</h2>
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsItem>
              <ReviewsAuthor>{review.author}</ReviewsAuthor>
              <Text>{review.content}</Text>
            </ReviewsItem>
          ))}
        </ReviewsList>
      </ReviewsSection>
    );
  }
};

export default Reviews;
