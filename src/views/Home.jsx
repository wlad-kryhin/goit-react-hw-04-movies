import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilmItem from "../components/FilmItem/FilmItem";
import { FetchPopularFilms } from "../services/FetchApi";

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    FetchPopularFilms(setMovies);
  }, []);

  return (
    <>
      {movies && (
        <ul className="home__list">
          {movies.map((movie) => {
            return <FilmItem value={movie} location={location} />;
          })}
        </ul>
      )}
    </>
  );
}
