import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, Reducer } from "redux";

import * as I18n from "react-intl";

import { locale as messages_en } from "./translations/en";
import { locale as messages_sk } from "./translations/sk";

const messages = {
    en: messages_en,
    sk: messages_sk,
};
const language = "sk";

import * as Actions from "./Actions";
import { Application } from "./Application";
import * as Types from "./Types/index";

window.addEventListener("load", () => {

    console.log("All assets are loaded");

    console.log("Creating Redux Store ...");

    const initialState: Types.IMovieDatabaseStore = {
        favoriteMovies: [],
        searchMovie: {
            query: "",
            searchResults: [],
        },
    };

    const reducers: Reducer<Types.IMovieDatabaseStore>
        = combineReducers({
            favoriteMovies: Actions.favoriteMoviesReducer,
            searchMovie: Actions.searchMovieReducer,
        });

    const store = createStore(
        reducers,
        initialState,
    );

    console.log("Rendering application ...");
    const container: HTMLElement | null = document.getElementById("react-container");
    ReactDOM.render(
        <I18n.IntlProvider locale={language} messages={messages[language]}>
            <Application caption={"likebutton.caption"} finalText={"likebutton.final-text"}/>
        </I18n.IntlProvider>,
        container);
});
