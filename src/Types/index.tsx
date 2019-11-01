export interface IMoviePreview {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IMovieRating {
    Source: string;
    Value: string;
}

export interface IMovieDetails extends IMoviePreview {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IMovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
}

export interface ISearchMovieStore {
    query: string;
    searchResults: IMoviePreview[];
    totalNumberOfResults: number;
}

export type IFavoriteMoviesStore = IMoviePreview[];

export interface IMovieDatabaseStore {
    favoriteMovies: IFavoriteMoviesStore;
    searchMovie: ISearchMovieStore;
}
