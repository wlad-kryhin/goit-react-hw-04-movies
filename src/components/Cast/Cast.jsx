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
        <ul className="home__list cast-list">
          {cast.map((item) => {
            return (
              <li key={item.id} className="home__list_item list-cast">
                <p className="home__list_text color">{item.name}</p>
                <p className="home__list_text color">{item.character}</p>
                <img
                  className="home__list_img list-cast_img"
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
