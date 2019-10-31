import * as React from "react";
import * as ReactDOM from "react-dom";

import { LikeButton } from "./Component";

import NavBar from "../node_modules/react-bootstrap/Navbar";

export interface IMenuProps {
}

const Menu: React.StatelessComponent<IMenuProps> = (props: IMenuProps) => {
    return (
        <NavBar bg="dark" variant="dark">
            <NavBar.Brand href="#home">
                {"Movie Database"}
            </NavBar.Brand>
        </NavBar>
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
            <LikeButton
                caption={this.props.caption}
                finalText={this.props.finalText}
                />
        </React.Fragment>
    );
  }
}
