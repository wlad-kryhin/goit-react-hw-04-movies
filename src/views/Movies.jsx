import { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import Form from "../components/Form/Form";
import { FetchMovies } from "../services/FetchApi";
export default function Movies() {
  const location = useLocation();
  const history = useHistory();
  const [films, setFilms] = useState(null);
  const [value, setValue] = useState("");

  const getValueFromForm = (query) => {
    history.push({ ...location, search: `query=${query}` });
    setValue(query);
  };

  useEffect(() => {
    FetchMovies(value, setFilms);
    const url = new URLSearchParams(location.search).get("query");
    if (films || url === null) {
      return;
    }
    setValue(url);
  }, [value, films, location]);

  return (
    <>
      <Form onSubmit={getValueFromForm} />
      {films && (
        <ul className="home__list">
          {films.map((film) => {
            return (
              <li key={film.id} className="home__list_item">
                <Link className="home__list_link" to={`/movies/${film.id}`}>
                  <img
                    className="home__list_img"
                    src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`}
                    alt=""
                  />
                  <p className="home__list_text">{film.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
