import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useParams,
    useRouteMatch,
} from "react-router-dom";

import Alert from "../node_modules/react-bootstrap/Alert";
import Col from "../node_modules/react-bootstrap/Col";
import Container from "../node_modules/react-bootstrap/Container";
import Media from "../node_modules/react-bootstrap/Media";
import Nav from "../node_modules/react-bootstrap/Nav";
import Navbar from "../node_modules/react-bootstrap/Navbar";
import Row from "../node_modules/react-bootstrap/Row";

import { IconContext } from "../node_modules/react-icons/lib/esm/index";
import { FaStar, FaRegStar } from "../node_modules/react-icons/fa/index";

import * as Data from "./Data";

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
}

const FavoriteMovies: React.StatelessComponent<IFavoriteMoviesProps> = (props: IFavoriteMoviesProps) => {
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
}

const SearchMovies: React.StatelessComponent<ISearchMoviesProps> = (props: ISearchMoviesProps) => {

    const movies = Data.searchMovies("batman");

    const movieList = movies.Search.map((movie) => {
        return (
            <Link to={"/movie/" + movie.imdbID}>
                <Media key={"movie-" + movie.imdbID}>
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
    movie: Data.IMovieDetails;
    isFavorite: boolean;
}

const MovieDetails: React.StatelessComponent<IMovieDetailsProps> = (props: IMovieDetailsProps) => {

    return (
        <Container>
            <Row>
                <Col>
                    <Rating 
                        isFavorite={false}
                        onSetAsFavorite={setAsFavorite.bind(null, props.movie.imdbID)}
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

function setAsFavorite(movieId: string): void {
    console.log("Setting movie '" + movieId + "' as favorite.");
}

function removeFromFavorites(movieId: string): void {
    console.log("Remove movie '" + movieId + "' from favorite movies.");
}

export interface IApplicationProps {
    caption: string;
    finalText: string;
}

export interface IApplicationState {
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {
  constructor(props: IApplicationProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
        <React.Fragment>
            <Router>
                <Menu />
                <div className="container my-5">                    
                    <Switch>
                        <Route path="/search"><SearchMovies /></Route>
                        <Route path="/favorite"><FavoriteMovies /></Route>
                        <Route path="/movie/:movieId"><MovieDetailsPage /></Route>
                        <Route path="/"><SearchMovies /></Route>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
  }
}
