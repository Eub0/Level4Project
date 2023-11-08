import { Tabs, TabsListProps } from '@mantine/core';

export const PageTabsContainer = ({ children, ...props }: TabsListProps) => {
	return (
		<Tabs.List pl="md" style={{ zIndex: 3 }} {...props}>
			{children}
		</Tabs.List>
	);
};