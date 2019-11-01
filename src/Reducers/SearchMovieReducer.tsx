import * as Actions from "../Actions";
import * as Types from "../Types/index";

import { combineReducers, Reducer } from "redux";

const initialSearchMovieState: Types.ISearchMovieStore = {
    query: "",
    searchResults: [],
    totalNumberOfResults: 0,
};

export function searchMovieReducer(
    state: Types.ISearchMovieStore = initialSearchMovieState,
    action: Actions.ActionType,
): Types.ISearchMovieStore {

    switch (action.type) {
        case Actions.SET_SEARCH_QUERY:
            return {
                ...state,
                query: action.query,
            };
            case Actions.SET_SEARCH_RESULTS:
                    return {
                        ...state,
                        searchResults: action.movies,
                        totalNumberOfResults: action.totalNumberOfResults,
                    };
                default:
            return state;
    }
}

export const searchMovieReducerInstance = combineReducers({searchMovie: searchMovieReducer});
