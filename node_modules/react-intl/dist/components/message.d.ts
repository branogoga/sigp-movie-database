import * as React from 'react';
import { Context } from './injectIntl';
import { MessageDescriptor } from '../types';
import { PrimitiveType, FormatXMLElementFn } from 'intl-messageformat';
export interface Props<V extends Record<string, any> = Record<string, React.ReactNode>> extends MessageDescriptor {
    values?: V;
    tagName?: React.ElementType<any>;
    children?(...nodes: React.ReactNodeArray): React.ReactNode;
}
export default class FormattedMessage<V extends Record<string, any> = Record<string, PrimitiveType | React.ReactElement | FormatXMLElementFn>> extends React.Component<Props<V>> {
    static defaultProps: {
        values: {};
    };
    static displayName: string;
    static contextType: React.Context<import("../types").IntlShape>;
    context: React.ContextType<typeof Context>;
    constructor(props: Props<V>, context: React.ContextType<typeof Context>);
    shouldComponentUpdate(nextProps: Props<V>): boolean;
    render(): {} | null | undefined;
}
