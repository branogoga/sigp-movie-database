import * as React from "react";
import * as ReactDOM from "react-dom";

import * as I18n from "../node_modules/react-intl/dist/index";

import { locale as messages_en } from "./translations/en";
import { locale as messages_sk } from "./translations/sk";

const messages = {
    en: messages_en,
    sk: messages_sk,
};
const language = "sk";

import * as Component from "./Component";

window.addEventListener("load", () => {

    console.log("All assets are loaded");

    const container: HTMLElement | null = document.getElementById("react-container");
    ReactDOM.render(
        <I18n.IntlProvider locale={language} messages={messages[language]}>
            <Component.LikeButton caption={"likebutton.caption"} finalText={"likebutton.final-text"}/>
        </I18n.IntlProvider>,
        container);
});
