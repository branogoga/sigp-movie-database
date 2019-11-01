import * as React from "react";
import { AnyAction, Store } from "redux";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import * as Types from "../Types";

import { MovieList } from "../Components/MovieList";

export interface IStoreProps {
    store: Store<Types.IMovieDatabaseStore, AnyAction>;
}

export interface IFavoriteMoviesPageProps extends IStoreProps {
    movies: Types.IMoviePreview[];
}

export const FavoriteMoviesPage: React.StatelessComponent<IFavoriteMoviesPageProps>
    = (props: IFavoriteMoviesPageProps) => {

    if (props.movies.length === 0) {
        return (
            <Alert variant="info">The list is empty.</Alert>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Favorite movies</h1>
                    <Alert variant="info">You have {props.movies.length} favorite movies.</Alert>
                    <MovieList movies={props.movies} />
                </Col>
            </Row>
        </Container>
    );
};
