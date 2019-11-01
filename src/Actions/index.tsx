import { ADD_MOVIE_TO_FAVORITES, AddToFavorites } from "./../Actions/AddMovieToFavorites";
export { ADD_MOVIE_TO_FAVORITES };

import { REMOVE_MOVIE_FROM_FAVORITES, RemoveFromFavorites } from "./../Actions/RemoveMovieFromFavorites";
export { REMOVE_MOVIE_FROM_FAVORITES };

import { SET_CURRENT_MOVIE_DETAILS, SetCurrentMovieDetails } from "./../Actions/SetCurrentMovieDetails";
export { SET_CURRENT_MOVIE_DETAILS };

import { SET_CURRENT_MOVIE_ID, SetCurrentMovieId } from "./../Actions/SetCurrentMovieId";
export { SET_CURRENT_MOVIE_ID };

import { SET_SEARCH_QUERY, SetSearchQuery } from "./../Actions/SetSearchQuery";
export { SET_SEARCH_QUERY };

import { SET_SEARCH_RESULTS, SetSearchResults } from "./../Actions/SetSearchResults";
export { SET_SEARCH_RESULTS };

export type ActionType
    = SetSearchQuery
    | SetSearchResults
    | AddToFavorites
    | RemoveFromFavorites
    | SetCurrentMovieId
    | SetCurrentMovieDetails
    ;