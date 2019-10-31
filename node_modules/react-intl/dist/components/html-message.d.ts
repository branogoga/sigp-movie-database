import FormattedMessage from './message';
import { PrimitiveType } from 'intl-messageformat';
export default class FormattedHTMLMessage extends FormattedMessage<Record<string, PrimitiveType>> {
    static defaultProps: {
        tagName: "span";
        values: {};
    };
    render(): {} | null | undefined;
}
