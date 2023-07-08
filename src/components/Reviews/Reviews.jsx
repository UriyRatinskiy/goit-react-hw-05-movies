import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/apiService';
import css from './Reviews.modules.css';

const Reviews = ({ isLoading }) => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        isLoading(true);
        const response = await api.getMovieReviews(movieId);
        setReview(response.data.results);
      } finally {
        isLoading(false);
      }
    }
    getData();
  }, [movieId, isLoading]);

  return review.length > 0 ? (
    <ul className={css.reviewList}>
      {review.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p
              className={css.description}
              dangerouslySetInnerHTML={{ __html: `${content}` }}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
