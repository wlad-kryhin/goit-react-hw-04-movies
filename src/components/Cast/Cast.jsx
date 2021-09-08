import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FetchMovieCredits } from "../../services/FetchApi";

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    FetchMovieCredits(movieId, setCast);
  }, [movieId]);
  return (
    <div>
      {cast && (
        <ul>
          {cast.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${item.profile_path}`}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
