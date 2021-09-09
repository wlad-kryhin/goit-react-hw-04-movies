import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import FilmItem from "../components/FilmItem/FilmItem";
import Form from "../components/Form/Form";
import { FetchMovies } from "../services/FetchApi";

export default function Movies() {
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("query");
  const history = useHistory();
  const [films, setFilms] = useState(null);
  const [value, setValue] = useState(url ?? "");

  const getValueFromForm = (query) => {
    history.push({ ...location, search: `query=${query}` });
    setValue(query);
  };

  useEffect(() => {
    if (value === "" && url === null) return;
    FetchMovies(url, setFilms);
  }, [value, url]);
  console.log(location);
  console.log(films);

  return (
    <>
      <Form onSubmit={getValueFromForm} />
      {films && (
        <ul className="home__list">
          {films.map((film) => {
            return <FilmItem value={film} location={location} />;
          })}
        </ul>
      )}
    </>
  );
}
