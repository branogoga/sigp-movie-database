import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";

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
import Media from "react-bootstrap/Media";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import { IconContext } from "react-icons";
import { FaStar, FaRegStar } from "react-icons/fa";

import * as Actions from "./Actions";
import * as Data from "./Data";
import * as Types from "./Types/index";

export interface IMenuProps {
}

const Menu: React.StatelessComponent<IMenuProps> = (props: IMenuProps) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    {"Movie Database"}
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                    <Nav.Link><Link to="/favorite">Favorites</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

interface IFavoriteMoviesProps {
    movies: Types.IMoviePreview[];
}

const FavoriteMovies: React.StatelessComponent<IFavoriteMoviesProps> = (props: IFavoriteMoviesProps) => {

    if (props.movies.length === 0) {
        return (
            <Alert>The list is empty.</Alert>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Favorite movies</h1>
                </Col>
            </Row>
        </Container>
    );
};

interface ISearchMoviesProps {
    movies: Types.IMoviePreview[];
}

const SearchMovies: React.StatelessComponent<ISearchMoviesProps> = (props: ISearchMoviesProps) => {

    // const movies = Data.searchMovies("batman");

    if (props.movies.length === 0) {
        return (
            <Alert>The list is empty.</Alert>
        );
    }

    const movieList = props.movies.map((movie: Types.IMoviePreview) => {
        return (
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
        );
    });

    return (
        <Container>
            <Row>
                <Col>
                    {movieList}
                </Col>
            </Row>
        </Container>
    );
};

interface IMovieDetailsPageProps {
}

const MovieDetailsPage: React.StatelessComponent<IMovieDetailsPageProps> = (props: IMovieDetailsPageProps) => {
    const { movieId } = useParams();

    if (!movieId) {
        return (
            <Alert variant="danger">Invalid movie ID.</Alert>
        );
    }

    const movie = Data.getMovieDetails(movieId);

    return (
        <MovieDetails
            movie={movie}
            isFavorite={true}
        />
    );
};

interface IRatingProps {
    isFavorite: boolean;
    onSetAsFavorite: () => void;
    onRemoveFromFavorites: () => void;
}

const Rating: React.StatelessComponent<IRatingProps> = (props: IRatingProps) => {

    const color: string = "yellow";
    const size: string = "64px";

    if (props.isFavorite) {
        return (
            <IconContext.Provider value={{ color, size }}>
                <FaStar onClick={props.onRemoveFromFavorites} />
            </IconContext.Provider>
        );
    } else {
        return (
            <IconContext.Provider value={{ color, size }}>
                <FaRegStar onClick={props.onSetAsFavorite} />
            </IconContext.Provider>
        );
    }
};

interface IMovieDetailsProps {
    movie: Types.IMovieDetails;
    isFavorite: boolean;
}

const MovieDetails: React.StatelessComponent<IMovieDetailsProps> = (props: IMovieDetailsProps) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Rating
                        isFavorite={false}
                        onSetAsFavorite={setAsFavorite.bind(null, props.movie)}
                        onRemoveFromFavorites={removeFromFavorites.bind(null, props.movie.imdbID)}
                        />
                    <h1>{props.movie.Title}</h1>
                    <div>Rating: {props.movie.imdbRating} / 10</div>
                    <p>{props.movie.Runtime} | {props.movie.Genre} | {props.movie.Released}</p>
                </Col>
            </Row>
        </Container>
    );
};

function setAsFavorite(movie: Types.IMoviePreview): void {
    console.log("Setting movie '" + movie.imdbID + "' as favorite.");
}

function removeFromFavorites(movieId: string): void {
    console.log("Remove movie '" + movieId + "' from favorite movies.");
}

export interface IApplicationProps {
    favoriteMovies: Types.IFavoriteMoviesStore;
    searchMovies: Types.ISearchMovieStore;
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
                <div className="container my-5">
                    <Switch>
                        <Route path="/search"><SearchMovies movies={this.props.searchMovies.searchResults} /></Route>
                        <Route path="/favorite"><FavoriteMovies movies={this.props.favoriteMovies} /></Route>
                        <Route path="/movie/:movieId"><MovieDetailsPage /></Route>
                        <Route path="/"><SearchMovies movies={this.props.searchMovies.searchResults}/></Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
  }
}

function mapStateToProps(state: Types.IMovieDatabaseStore): IApplicationProps {
    return {
        favoriteMovies: state.favoriteMovies,
        searchMovies: state.searchMovie,
    };
}

const mapDispatchToProps = {
    addToFavorites: Actions.addToFavorites,
    removeFromFavorites: Actions.removeFromFavorites,
    setSearchQuery: Actions.setSearchQuery,
    setSearchResults: Actions.setSearchResults,
};

export const ConnectedApplication = connect(mapStateToProps, mapDispatchToProps)(Application);
