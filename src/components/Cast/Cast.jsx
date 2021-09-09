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
                {item.profile_path ? (
                  <img
                    className="home__list_img list-cast_img"
                    src={`https://image.tmdb.org/t/p/w342/${item.profile_path}`}
                    alt={item.name}
                  />
                ) : (
                  <img
                    className="home__list_img list-cast_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/48/Angelina_Jolie_%2848462859552%29.jpg"
                    alt="Angelina"
                  />
                )}
                <p className="home__list_text color">{item.name}</p>
                <p className="home__list_text color">{item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
