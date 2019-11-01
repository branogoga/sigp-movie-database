import * as Types from "../Types/index";

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export type SET_SEARCH_RESULTS = typeof SET_SEARCH_RESULTS;

export interface SetSearchResults {
    type: SET_SEARCH_RESULTS;
    movies: Types.IMoviePreview[];
    totalNumberOfResults: number;
}

export function setSearchResults(movies: Types.IMoviePreview[], totalNumberOfResults: number): SetSearchResults {
    return {
        movies,
        totalNumberOfResults,
        type: SET_SEARCH_RESULTS,
    };
}
