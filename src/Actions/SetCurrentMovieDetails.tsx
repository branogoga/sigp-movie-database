import * as Types from "../Types/index";

export const SET_CURRENT_MOVIE_DETAILS = "SET_CURRENT_MOVIE_DETAILS";
export type SET_CURRENT_MOVIE_DETAILS = typeof SET_CURRENT_MOVIE_DETAILS;

export interface SetCurrentMovieDetails {
    type: SET_CURRENT_MOVIE_DETAILS;
    movie: Types.IMovieDetails;
}

export function setCurrentMovieDetails(movie: Types.IMovieDetails): SetCurrentMovieDetails {
    return {
        movie,
        type: SET_CURRENT_MOVIE_DETAILS,
    };
}
