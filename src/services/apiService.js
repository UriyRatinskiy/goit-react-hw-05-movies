import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTNiZTQ5OGJhM2QxMThlYWQ5ODk5NzFlYTg4YzJkOSIsInN1YiI6IjY0OWRkZjI5MGNlMWJjMDBiMDI1OWE0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jMz6oARwZHUH2jOMa_ampqvWJ0AZZPvVj3PI9Zq6I6I';

export async function getTrending() {
  try {
    return await axios.get(`/trending/movie/week?language=en-US`);
  } catch (error) {
    showError(error);
  }
}

export async function searchMovies(query) {
  try {
    return await axios.get(
      `/search/movie?query=${query}&language=en-US&page=1`
    );
  } catch (error) {
    showError(error);
  }
}

export async function getMovieDetails(movie_id) {
  try {
    return await axios.get(`/movie/${movie_id}?language=en-US`);
  } catch (error) {
    showError(error);
  }
}

export async function getMovieCast(movie_id) {
  try {
    return await axios.get(`/movie/${movie_id}/credits?language=en-US`);
  } catch (error) {
    showError(error);
  }
}

export async function getMovieReviews(movie_id) {
  try {
    return await axios.get(`/movie/${movie_id}/reviews?language=en-US`);
  } catch (error) {
    showError(error);
  }
}

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

function showError(error) {
  Notify.failure(`${error.code}: ${error.message}`);
}
