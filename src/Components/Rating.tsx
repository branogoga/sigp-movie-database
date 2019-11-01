import * as React from "react";

import { IconContext } from "react-icons";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IRatingProps {
    isFavorite: boolean;
    onSetAsFavorite: () => void;
    onRemoveFromFavorites: () => void;
}

export const Rating: React.StatelessComponent<IRatingProps> = (props: IRatingProps) => {

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
