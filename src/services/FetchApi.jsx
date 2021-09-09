import axios from "axios";

const KEY = "84867915c8b3aadc91d5efa8c22e1ab6";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=";

export function FetchPopularFilms(callback) {
  const url = `${BASE_URL}${KEY}`;
  axios
    .get(url)
    .then((resp) => resp.data.results)
    .then(callback)
    .catch((error) => error.message);
}

export function FetchMovies(query, callback) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
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
  const url = `
  https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  axios
    .get(url)
    .then((response) => response.data)
    .then(callback)
    .catch((error) => error.message);
}

export function FetchMovieCredits(id, callback) {
  const url = `
  https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  axios
    .get(url)
    .then((response) => response.data.cast)
    .then(callback)
    .catch((error) => error.message);
}
export function FetchMovieReviews(id, callback) {
  const url = `
  https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  axios
    .get(url)
    .then((response) => response.data.results)
    .then(callback)
    .catch((error) => error.message);
}
