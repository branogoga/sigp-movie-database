import * as React from "react";
import * as ReactDOM from "react-dom";

import produce, {Draft} from "../node_modules/immer/dist/immer";
import {FormattedMessage} from "../node_modules/react-intl/dist/index";

export interface ILikeButtonProps {
    caption: string;
    finalText: string;
}

export interface ILikeButtonState {
    readonly liked: boolean;
}

export class LikeButton extends React.Component<ILikeButtonProps, ILikeButtonState> {
  constructor(props: ILikeButtonProps) {
    super(props);
    this.state = { liked: false };
  }

  public render(): React.ReactNode {
    if (this.state.liked) {
      return <FormattedMessage id={this.props.finalText}/>;
    }

    return <button
            className="btn btn-primary"
            onClick={this.onClick.bind(this)}
        >
            <FormattedMessage id={this.props.caption}/>
        </button>;
  }

  private onClick() {

      const newState = produce((draft: Draft<ILikeButtonState>) => {
          draft.liked = true;
      });

      this.setState(newState);
  }
}
