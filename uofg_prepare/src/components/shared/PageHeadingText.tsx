import { TextProps, Title } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

export const PageHeadingText = ({ children }: {children: ReactNode}) => {
	const { asPath } = useRouter();

	return (
		<>
			<Head>
				<title>{`Backstage - ${children}`}</title>
			</Head>
			<Title order={1} size="h3" weight={500}>
				{children}
			</Title>
		</>
	);
};