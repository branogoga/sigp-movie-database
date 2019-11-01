import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Store } from "redux";
import { withRouter } from "react-router";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useParams,
    useRouteMatch,
} from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import * as Actions from "./Actions";
import * as Types from "./Types";

import { Menu } from "./Components/Menu";
import { MovieList } from "./Components/MovieList";
import { Rating } from "./Components/Rating";

export interface IStoreProps {
    store: Store<Types.IMovieDatabaseStore, AnyAction>;
}

interface IFavoriteMoviesProps extends IStoreProps {
    movies: Types.IMoviePreview[];
}

const FavoriteMovies: React.StatelessComponent<IFavoriteMoviesProps> = (props: IFavoriteMoviesProps) => {

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

interface ISearchMoviesProps extends IStoreProps {
    movies: Types.IMoviePreview[];
    totalNumberOfResults: number;
    query: string;
}

const SearchMovies: React.StatelessComponent<ISearchMoviesProps> = (props: ISearchMoviesProps) => {

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

interface IMovieDetailsPageProps extends IStoreProps {
    movie?: Types.IMovieDetails;
    favoriteMovies: Types.IMoviePreview[];
    match: any;
    history: any;
    location: any;
}

export class MovieDetailsPage extends React.Component<IMovieDetailsPageProps, {}> {

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
};

const MovieDetailsPageWithRouter = withRouter(MovieDetailsPage);

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

export interface IApplicationProps extends IStoreProps {
    favoriteMovies: Types.IFavoriteMoviesStore;
    searchMovies: Types.ISearchMovieStore;
    currentMovie: Types.ICurrentMovieStore;
}

export interface IApplicationState {
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {

  constructor(props: IApplicationProps) {
    super(props);
    console.log(props);
  }

  public render(): React.ReactNode {
    return (
        <React.Fragment>
            <Router>
                <Menu />
                <div className="mt-5">
                    <div className="mt-5">
                        <Switch>
                            <Route path="/search">
                                <SearchMovies 
                                    query={this.props.searchMovies.query}
                                    movies={this.props.searchMovies.searchResults}
                                    totalNumberOfResults={this.props.searchMovies.totalNumberOfResults}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/favorite">
                                <FavoriteMovies 
                                    movies={this.props.favoriteMovies}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/movie/:movieId">
                                <MovieDetailsPageWithRouter
                                    movie={this.props.currentMovie.movie}
                                    favoriteMovies={this.props.favoriteMovies}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/">
                                <SearchMovies
                                    query={this.props.searchMovies.query}
                                    movies={this.props.searchMovies.searchResults}
                                    totalNumberOfResults={this.props.searchMovies.totalNumberOfResults}
                                    store={this.props.store}
                                />
                            </Route>

                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
  }
}

function mapStateToProps(
    state: Types.IMovieDatabaseStore,
    ownProps: IStoreProps,
): IApplicationProps {
    return {
        currentMovie: state.currentMovie,
        favoriteMovies: state.favoriteMovies,
        searchMovies: state.searchMovie,
        store: ownProps.store,
    };
}

// const mapDispatchToProps = {
//     addToFavorites: Actions.addToFavorites,
//     removeFromFavorites: Actions.removeFromFavorites,
//     setSearchQuery: Actions.setSearchQuery,
//     setSearchResults: Actions.setSearchResults,
// };

export const ConnectedApplication = connect(mapStateToProps)(Application);
