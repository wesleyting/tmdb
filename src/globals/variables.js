//API KEY
const API_KEY_ONLY = "a109986a8c819f27263237cea5bc599a";
export const API_KEY = `?api_key=${API_KEY_ONLY}`;
// base
// base_url + {movie id} + api_key + base_lang
export const BASE_URL = "https://api.themoviedb.org/3/movie/";
export const BASE_LANG = `&language="en-US"`;
export const BASE_PAGE = `&page="1"`;

//FILTERS
//NOW PLAYING - (BASE_URL + BASE_URL_NOW + API_KEY + BASE_LANG + BASE_PAGE)
export const BASE_URL_NOW = "now_playing";

//POPULAR - (BASE_URL + BASE_URL_POPULAR + API_KEY + BASE_LANG + BASE_PAGE)
export const BASE_URL_POPULAR = "popular";

//TOP RATED - (BASE_URL + BASE_URL_TOP + API_KEY + BASE_LANG + BASE_PAGE)
export const BASE_URL_TOP = "top_rated";

//TOP RATED - (BASE_URL + BASE_URL_UPCOMING + API_KEY + BASE_LANG + BASE_PAGE)
export const BASE_URL_UPCOMING = "upcoming";