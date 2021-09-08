import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FetchMovieReviews } from "../../services/FetchApi";

export default function Reviews() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieReviews(movieId, setReview);
  }, [movieId]);
  console.log(review);
  return (
    <div>
      {review.length > 0 ? (
        <ul className="review-list">
          {review.map((item) => {
            return (
              <li key={item.id} className="review-item">
                <h4 className="review-title">{item.author}</h4>
                <p className="review-text">{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="error">Sorry, No information available</p>
      )}
    </div>
  );
}
