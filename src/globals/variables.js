import PLACEHOLDER_POSTER from '../images/no-poster.png';

export const DEFAULT_FILTER = "pop";
export const DEFAULT_PAGE = 1;

const API_KEY_ONLY = "a109986a8c819f27263237cea5bc599a";
export const API_KEY = `?api_key=${API_KEY_ONLY}`;

export const BASE_URL = "https://api.themoviedb.org/3/movie/";
export const BASE_SEARCH = "https://api.themoviedb.org/3/search/movie/";
export const BASE_LANG = '&language="en-US"';
export const BASE_PAGE = "&page=";

export const URL_FILTER = {pop: "popular", now: "now_playing", top: "top_rated", soon: "upcoming"};

export const MONTH_FORMAT = "long"; //use short for abbrv

export const SEARCH_QUERY = "&query=";

export const BASE_POSTER = "https://image.tmdb.org/t/p/";
export const NULL_POSTER = PLACEHOLDER_POSTER;


