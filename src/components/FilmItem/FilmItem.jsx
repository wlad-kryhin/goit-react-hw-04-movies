import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function FilmItem({ value, location }) {
  return (
    <li key={value.id} className="home__list_item">
      <Link
        className="home__list_link"
        to={{
          pathname: `/movies/${value.id}`,
          state: { from: location },
        }}
      >
        <img
          className="home__list_img"
          src={`https://image.tmdb.org/t/p/w342/${value.poster_path}`}
          alt=""
        />
        <p className="home__list_text">{value.title}</p>
      </Link>
    </li>
  );
}
FilmItem.propTypes = {
  value: PropTypes.array,
  location: PropTypes.object,
};