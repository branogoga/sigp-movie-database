import * as Actions from "../Actions";
import * as Types from "../Types/index";

import { combineReducers, Reducer } from "redux";

const initialFavoriteMoviesState: Types.IFavoriteMoviesStore = [];

export function favoriteMoviesReducer(
    state: Types.IFavoriteMoviesStore = initialFavoriteMoviesState,
    action: Actions.ActionType,
): Types.IFavoriteMoviesStore {

    switch (action.type) {
        case Actions.ADD_MOVIE_TO_FAVORITES:
                return state.concat([action.movie]);
        case Actions.REMOVE_MOVIE_FROM_FAVORITES:
                return state.filter( movie => movie.imdbID !== action.movieId);
        default:
            return state;
    }
}

export const favoriteMoviesReducerInstance = combineReducers({favoriteMovies: favoriteMoviesReducer});
