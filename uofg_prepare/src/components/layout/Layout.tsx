import { HeaderContent } from '@/components/layout/HeaderContent';
import { NavbarContent } from '@/components/layout/NavbarContent';
import { PageContainer } from '@/components/layout/PageContainer';
import { AppShell, Box } from '@mantine/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import classes from '@/styles/Layout.module.css';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [opened, setOpened] = useState(false);
	const router = useRouter();
	const showLayout = !['/', '/404'].includes(router.route);

	return (
		<>
			{/* <Head>
				<title>Prepare - Loading...</title>
			</Head>
			{showLayout ? ( */}
				<AppShell
					padding={20}
					// styles={(theme) => ({
					// 	root: {
					// 		backgroundColor:
					// 			theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
					// 	},
					// })}
                    header={{
                        height:70,
                    }}
                    navbar={{
                    breakpoint:"sm",
                    width:250,
                    }}
                    >
                        <AppShell.Header
							className={classes.header}
							// sx={(theme) => ({
							// 	display: 'flex',
							// 	alignItems: 'center',
							// 	backgroundColor:
							// 		theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
							// })}
						>
							<HeaderContent opened={opened} setOpened={setOpened} />
						</AppShell.Header>
						<AppShell.Navbar
							// styles={(theme) => ({
							// 	root: {
							// 		backgroundColor:
							// 			theme.colorScheme === 'dark'
							// 				? theme.colors.dark[8]
							// 				: theme.colors.gray[1],
							// 	},
							// })}
						>
							<NavbarContent setNavbarOpened={setOpened} />
						</AppShell.Navbar>
                       <AppShell.Main>
					        <PageContainer>{children}</PageContainer>
                        </AppShell.Main> 
				</AppShell>
			{/* ) : (
				<>{children}</>
			)} */}
		</>
	);
};
