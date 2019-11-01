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
