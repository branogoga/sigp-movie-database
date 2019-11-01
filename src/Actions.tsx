import * as Types from "./Types/index";
import { combineReducers, Reducer } from "redux";

export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export type SET_SEARCH_QUERY = typeof SET_SEARCH_QUERY;

export interface SetSearchQuery {
    type: SET_SEARCH_QUERY;
    query: string;
}

export function setSearchQuery(query: string): SetSearchQuery {
    return {
        query,
        type: SET_SEARCH_QUERY,
    };
}

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export type SET_SEARCH_RESULTS = typeof SET_SEARCH_RESULTS;

export interface SetSearchResults {
    type: SET_SEARCH_RESULTS;
    movies: Types.IMoviePreview[];
}

export function setSearchResults(movies: Types.IMoviePreview[]): SetSearchResults {
    return {
        movies,
        type: SET_SEARCH_RESULTS,
    };
}

const initialSearchMovieState: Types.ISearchMovieStore = {
    query: "",
    searchResults: [],
};

export function searchMovieReducer(state: Types.ISearchMovieStore = initialSearchMovieState, action: ActionType): Types.ISearchMovieStore {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.query,
            };
            case SET_SEARCH_RESULTS:
                    return {
                        ...state,
                        searchResults: action.movies,
                    };
                default:
            return state;
    }
}

export const searchMovieReducerInstance = combineReducers({searchMovie: searchMovieReducer});

export const ADD_MOVIE_TO_FAVORITES = "ADD_MOVIE_TO_FAVORITES";
export type ADD_MOVIE_TO_FAVORITES = typeof ADD_MOVIE_TO_FAVORITES;

export interface AddToFavorites {
    type: ADD_MOVIE_TO_FAVORITES;
    movie: Types.IMoviePreview;
}

export function addToFavorites(movie: Types.IMoviePreview): AddToFavorites {
    return {
        movie,
        type: ADD_MOVIE_TO_FAVORITES,
    };
}

export const REMOVE_MOVIE_FROM_FAVORITES = "REMOVE_MOVIE_FROM_FAVORITES";
export type REMOVE_MOVIE_FROM_FAVORITES = typeof REMOVE_MOVIE_FROM_FAVORITES;

export interface RemoveFromFavorites {
    type: REMOVE_MOVIE_FROM_FAVORITES;
    movieId: string;
}

export function removeFromFavorites(movieId: string): RemoveFromFavorites {
    return {
        movieId,
        type: REMOVE_MOVIE_FROM_FAVORITES,
    };
}

const initialFavoriteMoviesState: Types.IFavoriteMoviesStore = [];

export function favoriteMoviesReducer(state: Types.IFavoriteMoviesStore = initialFavoriteMoviesState, action: ActionType): Types.IFavoriteMoviesStore {
    switch (action.type) {
        case ADD_MOVIE_TO_FAVORITES:
            console.error("Not implemented: addToFavoritesReducer");
            return state;
        case REMOVE_MOVIE_FROM_FAVORITES:
                console.error("Not implemented: removeFromFavoritesReducer");
                return state;
        default:
            return state;
    }
}

export const favoriteMoviesReducerInstance = combineReducers({favoriteMovies: favoriteMoviesReducer});

export type ActionType
    = SetSearchQuery
    | SetSearchResults
    | AddToFavorites
    | RemoveFromFavorites
    ;