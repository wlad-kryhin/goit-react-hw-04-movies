import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink, useRouteMatch, Route } from "react-router-dom";
import { FetchFilmsById } from "../services/FetchApi";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
export default function MovieDetails() {
  const { url } = useRouteMatch();
  const [filmsInfo, setFilmsInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    FetchFilmsById(movieId, setFilmsInfo);
  }, [movieId]);

  return (
    <>
      {filmsInfo && (
        <div className="movie__container">
          <img
            className="movie__img"
            src={`https://image.tmdb.org/t/p/w342/${filmsInfo.poster_path}`}
            alt={filmsInfo.title}
          />
          <div className="movie__text_container">
            <h3 className="movie__title">{filmsInfo.original_title}</h3>
            <p className="movie__desc">
              Overview:
              <span className="movie__overviews_info">
                {filmsInfo.overview}
              </span>
            </p>
            <p className="movie__desc">
              Genres:
              <span className="movie__overviews_info">
                {filmsInfo.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="movie__like">
              Release Date : {filmsInfo.release_date}
            </p>
            <p className="movie__like">Average : {filmsInfo.vote_average}</p>
          </div>
        </div>
      )}
      <div className="Addit_info">
        <h4 className="add_title">Additional information</h4>
        <ul>
          <li className="add_link">
            <NavLink
              to={`${url}/cast`}
              className="add_link"
              activeClassName="active_link"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/reviews`}
              className="add_link"
              activeClassName="active_link"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
}
