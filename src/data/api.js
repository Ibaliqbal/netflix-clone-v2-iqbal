import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// get random
export const getRandom = (data, gap) => {
  try {
    const first = ~~(Math.random() * (data.length - gap) + 1);
    const sec = first + gap;
    const res = data.slice(first, sec);
    return res;
  } catch (error) {
    return error.message;
  }
};

// for movies
export const fetchMovies = async (type, { pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}movie/${type}?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};
export const fetchDiscoverMovies = async ({ pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}discover/movie?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};
export const fetchTrendingMovies = async ({ pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}trending/movie/week?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};
export const fetchTrendingMoviesHome = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}trending/movie/week?api_key=${apiKey}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};

export const fetchDetailMovie = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMoviesUpComing = async (pageRandom) => {
  const response = await axios.get(
    `${baseUrl}movie/upcoming?api_key=${apiKey}&page=${pageRandom}`
  );
  return response.data.results;
};

// for tv shows
export const fetchDetailTvShow = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}tv/${id}?api_key=${apiKey}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchAiringTvShows = async (pageRandom) => {
  try {
    const res = await axios.get(
      `${baseUrl}tv/airing_today?api_key=${apiKey}&page=${pageRandom}`
    );
    const data = await res.data.results;
    const filtered = data.filter((show) => show.poster_path !== null);
    return filtered;
  } catch (error) {
    return error.message;
  }
};

export const fetchTvShows = async (type, { pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}tv/${type}?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};
export const fetchDiscoverTvShows = async ({ pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}discover/tv?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};
export const fetchTrendingTvShows = async ({ pageParam }) => {
  try {
    const response = await axios.get(
      `${baseUrl}trending/tv/week?api_key=${apiKey}&page=${pageParam}`
    );
    const data = await response.data.results;
    const filterData = data.filter((movie) => movie.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};

export const fetchSearchLists = async (endpoint, query, { pageParam }) => {
  try {
    const res = await axios.get(
      `${baseUrl}/search/${endpoint}?api_key=${apiKey}&query=${query}&page=${pageParam}`
    );
    const data = await res.data.results;
    const filterData = data.filter((list) => list.poster_path !== null);
    return filterData;
  } catch (error) {
    return error.message;
  }
};

export const setVideo = async (series, id) => {
  try {
    const res = await axios.get(
      `${baseUrl}/${series}/${id}/videos?api_key=${apiKey}`
    );
    const data = await res.data.results;
    if (data.length > 0) {
      const key = data[0].key;
      const videoUrl = `https://www.youtube.com/watch?v=${key}`;
      window.open(videoUrl, "_blank");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "error",
        title: "Video not available",
      });
    }
  } catch (error) {
    return error.message;
  }
};

export const fetchGenres = async (type) => {
  try {
    const res = axios.get(`${baseUrl}/genre/${type}/list?api_key=${apiKey}`);
    const genre = await (await res).data.genres;
    return genre;
  } catch (error) {
    return error.message;
  }
};

export const fetchGenreLists = async (type, genre, { pageParam }) => {
  try {
    const res = axios.get(
      `${baseUrl}discover/${type}?api_key=${apiKey}&with_genres=${genre}&page_random=${pageParam}`
    );
    const data = (await res).data.results;
    const filterData = data.filter(list => list.poster_path !== null)
    return filterData
  } catch (error) {
    return error.message;
  }
};
