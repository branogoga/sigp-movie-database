export const SET_CURRENT_MOVIE_ID = "SET_CURRENT_MOVIE_ID";
export type SET_CURRENT_MOVIE_ID = typeof SET_CURRENT_MOVIE_ID;

export interface SetCurrentMovieId {
    type: SET_CURRENT_MOVIE_ID;
    movieId: string;
}

export function setCurrentMovieId(movieId: string): SetCurrentMovieId {
    return {
        movieId,
        type: SET_CURRENT_MOVIE_ID,
    };
}
