import axios from "axios";

const KEY = "84867915c8b3aadc91d5efa8c22e1ab6";
const BASE_URL = "https://api.themoviedb.org/3/";

export function FetchPopularFilms(callback) {
  const params = `trending/movie/day?api_key=${KEY}`;
  const url = BASE_URL + params;
  axios
    .get(url)
    .then((resp) => resp.data.results)
    .then(callback)
    .catch((error) => error.message);
}

export function FetchMovies(query, callback) {
  const params = `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const url = BASE_URL + params;
  axios
    .get(url)
    .then((response) => {
      if (!response.data.results.length) {
        return alert("WHAT DID YOU WROTE?");
      }
      return response.data.results;
    })
    .then(callback)
    .catch((error) => error.message);
}

export function FetchFilmsById(id, callback) {
  const params = `movie/${id}?api_key=${KEY}&language=en-US`;
  const url = BASE_URL + params;
  axios
    .get(url)
    .then((response) => response.data)
    .then(callback)
    .catch((error) => error.message);
}

export function FetchMovieCredits(id, callback) {
  const params = `movie/${id}/credits?api_key=${KEY}&language=en-US`;
  const url = BASE_URL + params;
  axios
    .get(url)
    .then((response) => response.data.cast)
    .then(callback)
    .catch((error) => error.message);
}
export function FetchMovieReviews(id, callback) {
  const params = `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const url = BASE_URL + params;
  axios
    .get(url)
    .then((response) => response.data.results)
    .then(callback)
    .catch((error) => error.message);
}
