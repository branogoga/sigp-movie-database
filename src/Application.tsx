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

import Col from "../node_modules/react-bootstrap/Col";
import Container from "../node_modules/react-bootstrap/Container";
import Media from "../node_modules/react-bootstrap/Media";
import Nav from "../node_modules/react-bootstrap/Nav";
import Navbar from "../node_modules/react-bootstrap/Navbar";
import Row from "../node_modules/react-bootstrap/Row";

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
        <div className="mt-5">
            <h1>Favorite movies</h1>
        </div>
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
        <div className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <h1>Search movies</h1>
                        {movieList}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

interface IMovieDetailsProps {
}

const MovieDetails: React.StatelessComponent<IMovieDetailsProps> = (props: IMovieDetailsProps) => {

    const { movieId } = useParams();

    return (
        <div className="mt-5">
            <h1>Movie '{movieId}'</h1>
        </div>
    );
};

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
                <div className="my-5">
                <Switch>
                    <Route path="/search"><SearchMovies /></Route>
                    <Route path="/favorite"><FavoriteMovies /></Route>
                    <Route path="/movie/:movieId"><MovieDetails /></Route>
                    <Route path="/"><SearchMovies /></Route>
                </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
  }
}
