//API KEY
const API_KEY_ONLY = "a109986a8c819f27263237cea5bc599a";
export const API_KEY = `?api_key=${API_KEY_ONLY}`;
// base
// base_url + {movie id} + api_key + base_lang
export const BASE_URL = "https://api.themoviedb.org/3/movie/";
// export const BASE_LANG = `&language="en-US"`;
// export const BASE_PAGE = `&page="1"`;

//FILTERS
// BASE_URL + URL_FILTER.xyz + API_KEY
export const URL_FILTER = {now: "now_playing", pop: "popular", top: "top_rated", soon: "upcoming"};

// Default Choices
export const DEFAULT_CITY = 'Popular';
export const DEFAULT_YEAR = '2020';
