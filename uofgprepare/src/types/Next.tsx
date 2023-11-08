import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type NextPageWithProps<P = {}, IP = P> = NextPage<P, IP> & {
};

export type ExtendedAppProps<P = {}> = AppProps<P> & {
	Component: NextPageWithProps;
};