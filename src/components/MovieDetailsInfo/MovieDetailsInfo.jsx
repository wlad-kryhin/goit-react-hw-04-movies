import PropTypes from "prop-types";
export default function MovieDetailsInfo({ value, goBack }) {
  return (
    <>
      <button type="button" onClick={goBack} className="form__button button">
        Go back
      </button>
      <div className="movie__container">
        <img
          className="movie__img"
          src={`https://image.tmdb.org/t/p/w342/${value.poster_path}`}
          alt={value.title}
        />
        <div className="movie__text_container">
          <h3 className="movie__title">{value.original_title}</h3>
          <p className="movie__desc">
            Overview:
            <span className="movie__overviews_info">{value.overview}</span>
          </p>
          <p className="movie__desc">
            Genres:
            <span className="movie__overviews_info">
              {value.genres.map((genre) => genre.name).join(", ")}
            </span>
          </p>
          <p className="movie__like">
            Release Date :
            <span className="movie__like_span"> {value.release_date} </span>
          </p>
          <p className="movie__like">
            Average :
            <span className="movie__like_span"> {value.vote_average} </span>
          </p>
        </div>
      </div>
    </>
  );
}
MovieDetailsInfo.propTypes = {
  value: PropTypes.object,
  goBack: PropTypes.func,
};
