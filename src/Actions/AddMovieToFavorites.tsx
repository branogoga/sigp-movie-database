import * as Types from "../Types/index";

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
