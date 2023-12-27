import { Box } from '@mantine/core';
import { ReactNode } from 'react';

export const PageContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Box>{children}</Box>
	);
};