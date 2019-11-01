import * as Types from "./Types/index";

import Axios from "axios";

export interface ISearchMoviesResponse {
    Search: Types.IMoviePreview[];
    totalResults: string;
    Response: string;
}

const Key = "f476eb53";

export function searchMovies(query: string): Promise<ISearchMoviesResponse> {
    return Axios.get("http://omdbapi.com/?apikey=" + Key + "&s=" + query);
}

export interface IMovieDetailsResponse extends Types.IMovieDetails {
    Response: string;
}

export function getMovieDetails(id: string): Promise<Types.IMovieDetails> {
    return Axios.get("http://omdbapi.com/?apikey=" + Key + "&i=" + id);
}
