import PLACEHOLDER_POSTER from '../images/reeltalk-logo.png';

//API KEY
const API_KEY_ONLY = "a109986a8c819f27263237cea5bc599a";
export const API_KEY = `?api_key=${API_KEY_ONLY}`;
// base
// base_url + {movie id} + api_key + base_lang
export const BASE_URL = "https://api.themoviedb.org/3/movie/";
export const BASE_SEARCH = "https://api.themoviedb.org/3/search/movie/";
// export const BASE_LANG = `&language="en-US"`;
// export const BASE_PAGE = `&page="1"`;

//FILTERS
// BASE_URL + URL_FILTER.xyz + API_KEY
export const URL_FILTER = {pop: "popular", now: "now_playing", top: "top_rated", soon: "upcoming"};

// Default Choices
export const DEFAULT_FILTER = "pop";
export const DEFAULT_YEAR = "2020";

// Movie Box Constants
export const MONTH_FORMAT = "long"; //use short for abbrv

//search
export const SEARCH_QUERY = "&query=";

//null poster
export const BASE_POSTER = "https://image.tmdb.org/t/p/";
export const NULL_POSTER = PLACEHOLDER_POSTER;
