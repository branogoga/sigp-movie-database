import * as React from "react";
import { connect } from "react-redux";
import { AnyAction, Store } from "redux";

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import * as Types from "./Types";

import { Menu } from "./Components/Menu";

import { FavoriteMoviesPage } from "./Pages/FavoriteMoviesPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import { SearchMoviePage } from "./Pages/SearchMoviePage";

export interface IStoreProps {
    store: Store<Types.IMovieDatabaseStore, AnyAction>;
}

export interface IApplicationProps extends IStoreProps {
    favoriteMovies: Types.IFavoriteMoviesStore;
    searchMovies: Types.ISearchMovieStore;
    currentMovie: Types.ICurrentMovieStore;
}

class Application extends React.Component<IApplicationProps, {}> {

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
                                <SearchMoviePage
                                    query={this.props.searchMovies.query}
                                    movies={this.props.searchMovies.searchResults}
                                    totalNumberOfResults={this.props.searchMovies.totalNumberOfResults}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/favorite">
                                <FavoriteMoviesPage
                                    movies={this.props.favoriteMovies}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/movie/:movieId">
                                <MovieDetailsPage
                                    movie={this.props.currentMovie.movie}
                                    favoriteMovies={this.props.favoriteMovies}
                                    store={this.props.store}
                                />
                            </Route>

                            <Route path="/">
                                <SearchMoviePage
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

export default connect(mapStateToProps)(Application);
