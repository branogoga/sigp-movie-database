import * as React from "react";
import { withRouter } from "react-router";
import { AnyAction, Store } from "redux";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import * as Actions from "../Actions";
import * as Types from "../Types";

import { Rating } from "../Components/Rating";

export interface IStoreProps {
    store: Store<Types.IMovieDatabaseStore, AnyAction>;
}

export interface IMovieDetailsPageProps extends IStoreProps {
    movie?: Types.IMovieDetails;
    favoriteMovies: Types.IMoviePreview[];
    match: any;
    history: any;
    location: any;
}

class MovieDetailsPage extends React.Component<IMovieDetailsPageProps, {}> {

    public componentDidMount() {

        const movieId = this.props.match.params.movieId;

        if (this.props.movie && this.props.movie.imdbID === movieId) {
            return;
        }

        this.props.store.dispatch({
            movieId: this.props.match.params.movieId,
            type: Actions.SET_CURRENT_MOVIE_ID,
        });
    }

    public render() {
        if (!this.props.movie) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        } else {

            const movieId = this.props.movie.imdbID;
            const isFavorite = this.props.favoriteMovies.some( (movie) => movie.imdbID === movieId);

            return (
                <MovieDetails
                    movie={this.props.movie}
                    isFavorite={isFavorite}
                    store={this.props.store}
                />
            );
        }
    }
}

export default withRouter(MovieDetailsPage);

interface IMovieDetailsProps extends IStoreProps {
    movie: Types.IMovieDetails;
    isFavorite: boolean;
}

const MovieDetails: React.StatelessComponent<IMovieDetailsProps> = (props: IMovieDetailsProps) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Rating
                        isFavorite={props.isFavorite}
                        onSetAsFavorite={setAsFavorite.bind(null, props.movie, props.store)}
                        onRemoveFromFavorites={removeFromFavorites.bind(null, props.movie.imdbID, props.store)}
                        />
                    <h1>{props.movie.Title}</h1>
                    <div>Rating: {props.movie.imdbRating} / 10</div>
                    <p>{props.movie.Runtime} | {props.movie.Genre} | {props.movie.Released}</p>
                </Col>
            </Row>
        </Container>
    );
};

function setAsFavorite(movie: Types.IMoviePreview, store: Store<Types.IMovieDatabaseStore, AnyAction>): void {
    console.log("Setting movie '" + movie.imdbID + "' as favorite.");

    store.dispatch({
        movie,
        type: Actions.ADD_MOVIE_TO_FAVORITES,
    });
}

function removeFromFavorites(movieId: string, store: Store<Types.IMovieDatabaseStore, AnyAction>): void {
    console.log("Remove movie '" + movieId + "' from favorite movies.");

    store.dispatch({
        movieId,
        type: Actions.REMOVE_MOVIE_FROM_FAVORITES,
    });
}
