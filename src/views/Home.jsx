import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchPopularFilms } from "../services/FetchApi";

export default function Home() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    FetchPopularFilms(setMovies);
  }, []);

  return (
    <>
      {movies && (
        <ul className="home__list">
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="home__list_item">
                <Link className="home__list_link" to={`/movies/${movie.id}`}>
                  <img
                    className="home__list_img"
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt=""
                  />
                  <p className="home__list_text">{movie.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
