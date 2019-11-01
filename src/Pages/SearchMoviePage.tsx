import * as React from "react";
import { AnyAction, Store } from "redux";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import * as Actions from "../Actions";
import * as Types from "../Types";

import { MovieList } from "../Components/MovieList";

export interface IStoreProps {
    store: Store<Types.IMovieDatabaseStore, AnyAction>;
}

export interface ISearchMoviePageProps extends IStoreProps {
    movies: Types.IMoviePreview[];
    totalNumberOfResults: number;
    query: string;
}

export const SearchMoviePage: React.StatelessComponent<ISearchMoviePageProps> = (props: ISearchMoviePageProps) => {

    let movieList = null;
    if (!props.movies || props.movies.length === 0) {
        movieList = (
            <Alert variant="info">No movies match the search phrase '{props.query}'. Try some other phrase.</Alert>
        );
    } else {

        movieList = (
            <React.Fragment>
                <Alert variant="info">
                    Found '{props.totalNumberOfResults}' movies matching search phrase '{props.query}'.
                </Alert>
                <MovieList movies={props.movies} />
            </React.Fragment>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control
                        type={"text"}
                        value={props.query}
                        className={"my-5"}
                        onChange={onSearchInputChanged.bind(null, props.store)}
                        />
                    {movieList}
                </Col>
            </Row>
        </Container>
    );
};

function onSearchInputChanged(
    store: Store<Types.IMovieDatabaseStore, AnyAction>,
    event: any,
    ) {
        store.dispatch({
            query: event.currentTarget.value,
            type: Actions.SET_SEARCH_QUERY,
        });
}
