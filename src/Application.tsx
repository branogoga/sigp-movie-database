import * as React from "react";
import * as ReactDOM from "react-dom";

import { LikeButton } from "./Component";

import Nav from "../node_modules/react-bootstrap/Nav";
import Navbar from "../node_modules/react-bootstrap/Navbar";

export interface IMenuProps {
}

const Menu: React.StatelessComponent<IMenuProps> = (props: IMenuProps) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                {"Movie Database"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#search">Search</Nav.Link>
                    <Nav.Link href="#favorites">Favorites</Nav.Link>
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
    return (
        <div className="mt-5">
            <h1>Search movies</h1>
        </div>
    );
};

interface IMovieDetailsProps {
}

const MovieDetails: React.StatelessComponent<IMovieDetailsProps> = (props: IMovieDetailsProps) => {
    return (
        <div className="mt-5">
            <h1>Movie details</h1>
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
            <Menu />
            <div className="my-5">
                <SearchMovies />
            </div>
        </React.Fragment>
    );
  }
}
