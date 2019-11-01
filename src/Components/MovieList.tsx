import * as React from "react";

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import Media from "react-bootstrap/Media";

import * as Types from "../Types";

export interface IMovieListProps {
    movies: Types.IMoviePreview[];
}

export const MovieList: React.StatelessComponent<IMovieListProps> = (props: IMovieListProps) => {
    const listItems = props.movies.map((movie: Types.IMoviePreview) => {
        return (
            <React.Fragment>
                <Link to={"/movie/" + movie.imdbID}  key={"movie-" + movie.imdbID}>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={movie.Poster}
                            alt={movie.Title}
                        />

                        <Media.Body>
                            <h5>{movie.Title}</h5>
                            <p>
                                {movie.Year}, {movie.Type}
                            </p>
                        </Media.Body>
                    </Media>
                </Link>
            </React.Fragment>
        );
    });

    return (
        <React.Fragment>
            {listItems}
        </React.Fragment>
    );
};
