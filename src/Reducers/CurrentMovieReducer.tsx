import * as Actions from "../Actions";
import * as Types from "../Types/index";

import { combineReducers, Reducer } from "redux";

const initialCurrentMovieState: Types.ICurrentMovieStore = {
    movie: undefined,
    movieId: "",
};

export function currentMovieReducer(
    state: Types.ICurrentMovieStore = initialCurrentMovieState,
    action: Actions.ActionType,
): Types.ICurrentMovieStore {

    switch (action.type) {

        case Actions.SET_CURRENT_MOVIE_ID:
            return {
                ...state,
                movie: undefined,
                movieId: action.movieId,
            };
        case Actions.SET_CURRENT_MOVIE_DETAILS:
                return {
                    ...state,
                    movie: action.movie,
                };
        default:
            return state;
    }
}

export const currentMovieReducerInstance = combineReducers({currentMovie: currentMovieReducer});
