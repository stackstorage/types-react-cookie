import * as React from 'react';
import { CookieComponentProps } from './CookiesProvider';

// https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type TKey = string | number | symbol;
export type Diff<T extends TKey, U extends TKey> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export default function withCookies<P extends CookieComponentProps>(component: React.ComponentType<P>): React.ComponentClass<Omit<P, keyof CookieComponentProps>>;
