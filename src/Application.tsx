import * as React from "react";
import * as ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LikeButton } from "./Component";

export interface IApplicationProps {
}

export interface IApplicationState {
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {
  constructor(props: IApplicationProps) {
    super(props);
  }

  public render(): React.ReactNode {
    return <LikeButton
        caption="Click me!"
        finalText="You have clicked me!"
        />;
  }
}
