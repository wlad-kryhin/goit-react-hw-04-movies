import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FetchMovieReviews } from "../../services/FetchApi";

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieReviews(movieId, setReview);
  }, [movieId]);
  console.log(review);
  return (
    <div>
      {review && (
        <ul>
          {review.map((item) => {
            return <li key={item.id}>{item.content}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
