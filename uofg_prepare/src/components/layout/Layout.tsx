import { HeaderContent } from '@/components/layout/HeaderContent';
import { NavbarContent } from '@/components/layout/NavbarContent';
import { PageContainer } from '@/components/layout/PageContainer';
import { AppShell, Box, Header, Navbar } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [opened, setOpened] = useState(false);
	const router = useRouter();
	const showLayout = !['/', '/404'].includes(router.route);

	return (
		<>
			<Head>
				<title>Backstage - Loading...</title>
			</Head>
			{showLayout ? (
				<AppShell
					navbarOffsetBreakpoint="sm"
					fixed
					padding={0}
					// styles={(theme) => ({
					// 	root: {
					// 		backgroundColor:
					// 			theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
					// 	},
					// })}
					navbar={
						<AppShell.Navbar
							p="sm"
							hidden={!opened}
							// hiddenBreakpoint="sm"
							w={{ base: 225 }}
							// styles={(theme) => ({
							// 	root: {
							// 		backgroundColor:
							// 			theme.colorScheme === 'dark'
							// 				? theme.colors.dark[8]
							// 				: theme.colors.gray[1],
							// 	},
							// })}
						>
							<NavbarContent setNavbarOpened={setOexport const Layout = ({ children }: LayoutProps) => {
	const [opened, setOpened] = useState(false);
	const router = useRouter();
	const showLayout = !['/', '/404'].includes(router.route);

	return (
		<>
			<Head>
				<title>Backstage - Loading...</title>
			</Head>
			{showLayout ? (
				<AppShell
					navbarOffsetBreakpoint="sm"
					fixed
					padding={0}
					styles={(theme) => ({
						root: {
							backgroundColor:
								theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
						},
					})}
					navbar={
						<Navbar
							p="sm"
							hidden={!opened}
							hiddenBreakpoint="sm"
							width={{ base: 225 }}
							styles={(theme) => ({
								root: {
									backgroundColor:
										theme.colorScheme === 'dark'
											? theme.colors.dark[8]
											: theme.colors.gray[1],
								},
							})}
						>
							<NavbarContent setNavbarOpened={setOpened} />
						</Navbar>
					}
					header={
						<Header
							height={60}
							p="sm"
							sx={(theme) => ({
								display: 'flex',
								alignItems: 'center',
								backgroundColor:
									theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
							})}
						>
							<HeaderContent opened={opened} setOpened={setOpened} />
						</Header>
					}
				>
					<Box
						id="PageHeader"
						sx={{
							position: 'sticky',
							top: 'var(--mantine-header-height)',
							zIndex: 10,
							'@media (max-width: 768px)': {
								position: 'static',
							},
						}}
					/>
					<PageContainer>{children}</PageContainer>
				</AppShell>
			) : (
				<>{children}</>
			)}
		</>
	);
};opened} />
						</Navbar>
					}
					header={
						<Header
							height={60}
							p="sm"
							sx={(theme) => ({
								display: 'flex',
								alignItems: 'center',
								backgroundColor:
									theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
							})}
						>
							<HeaderContent opened={opened} setOpened={setOpened} />
						</Header>
					}
				>
					<Box
						id="PageHeader"
						sx={{
							position: 'sticky',
							top: 'var(--mantine-header-height)',
							zIndex: 10,
							'@media (max-width: 768px)': {
								position: 'static',
							},
						}}
					/>
					<PageContainer>{children}</PageContainer>
				</AppShell>
			) : (
				<>{children}</>
			)}
		</>
	);
};
