import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import createSagaMiddleware from "redux-saga";

import * as I18n from "react-intl";

import { locale as messages_en } from "./translations/en";
import { locale as messages_sk } from "./translations/sk";

const messages = {
    en: messages_en,
    sk: messages_sk,
};
const language = "sk";

import * as Actions from "./Actions";
import { ConnectedApplication } from "./Application";
import * as Data from "./Data";
import SearchQuerySaga from "./Sagas/Sagas";
import * as Types from "./Types/index";

window.addEventListener("load", () => {

    console.log("All assets are loaded");

    console.log("Creating Redux Store ...");

    const initialState: Types.IMovieDatabaseStore = {
        currentMovie: {
            movie: undefined,
            movieId: "",
        },
        favoriteMovies: [],
        searchMovie: {
            query: "",
            searchResults: [],
            totalNumberOfResults: 0,
        },
    };

    const reducers: Reducer<Types.IMovieDatabaseStore>
        = combineReducers({
            currentMovie: Actions.currentMovieReducer,
            favoriteMovies: Actions.favoriteMoviesReducer,
            searchMovie: Actions.searchMovieReducer,
        });

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(SearchQuerySaga);

    const query = "batman";

    const setSearchQueryAction = {
        query,
        type: Actions.SET_SEARCH_QUERY,
    };

    store.dispatch(setSearchQueryAction);

    console.log("Rendering application ...");
    const container: HTMLElement | null = document.getElementById("react-container");
    ReactDOM.render(
        <I18n.IntlProvider locale={language} messages={messages[language]}>
            <Provider store={store}>
                <ConnectedApplication store={store} />
            </Provider>
        </I18n.IntlProvider>,
        container);
});
