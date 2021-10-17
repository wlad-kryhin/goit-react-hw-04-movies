import { useState } from "react";
import FilmList from "../components/FilmList/FilmList";
export default function Library() {
  const [films, setFilms] = useState([]);
  return (
    <>
      {films ? <FilmList list={films} /> : <h2>You are don't have a films</h2>}
    </>
  );
}
