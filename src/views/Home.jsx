import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilmList from "../components/FilmList/FilmList";
import { FetchPopularFilms } from "../services/FetchApi";

export default function Home() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    FetchPopularFilms(setMovies);
  }, []);

  return (
    <>
      <h1 className="title-home">Most popular movies right now</h1>
      {movies && <FilmList list={movies} location={location} />}
    </>
  );
}
