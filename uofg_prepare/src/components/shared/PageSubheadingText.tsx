import { TextProps, Title } from '@mantine/core';
import { ReactNode } from 'react';

export const PageSubheadingText = ({ children }: {children: ReactNode}) => {
	return (
		<Title
			order={2}
			size="h6"
			w={400}
		>
			{children}
		</Title>
	);
};