import * as React from 'react';
import { Context } from './injectIntl';
import { FormatRelativeTimeOptions } from '../types';
import { Unit } from '@formatjs/intl-relativetimeformat';
export interface Props extends FormatRelativeTimeOptions {
    value?: number;
    unit?: Unit;
    updateIntervalInSeconds?: number;
    children?(value: string): React.ReactChild;
}
interface State {
    prevUnit?: Unit;
    prevValue?: number;
    currentValueInSeconds: number;
}
export default class FormattedRelativeTime extends React.PureComponent<Props, State> {
    _updateTimer: any;
    static displayName: string;
    static defaultProps: Pick<Props, 'unit' | 'value'>;
    static contextType: React.Context<import("../types").IntlShape>;
    context: React.ContextType<typeof Context>;
    state: State;
    constructor(props: Props, context: React.ContextType<typeof Context>);
    scheduleNextUpdate({ updateIntervalInSeconds, unit }: Props, { currentValueInSeconds }: State): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(props: Props, state: State): {
        prevValue: number | undefined;
        prevUnit: "day" | "hour" | "minute" | "month" | "second" | "year" | "week" | "quarter" | undefined;
        currentValueInSeconds: number;
    } | null;
    render(): string | number | JSX.Element;
}
export {};
