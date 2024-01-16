import { HeaderContent } from '@/components/layout/HeaderContent';
import { NavbarContent } from '@/components/layout/NavbarContent';
import { PageContainer } from '@/components/layout/PageContainer';
import { AppShell, Box, useMantineColorScheme } from '@mantine/core';
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
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  	const dark = colorScheme === 'dark';

	return (
		<>
				<AppShell
					padding={20}
                    header={{
                        height:70,
                    }}
                    navbar={{
                    breakpoint:"sm",
                    width:250,
                    }}
                >
                        <AppShell.Header
							className={dark ? classes.header_dark : classes.header}
						>
							<HeaderContent opened={opened} setOpened={setOpened} />
						</AppShell.Header>
						<AppShell.Navbar 
							visibleFrom={opened ? '-xs' : 'sm'}
							className={dark ? classes.navbar_dark : classes.navbar}
						>
							<NavbarContent setNavbarOpened={setOpened} />
						</AppShell.Navbar>
                       <AppShell.Main className={dark ? classes.main_dark : classes.main}>
					        <PageContainer>{children}</PageContainer>
                        </AppShell.Main> 
				</AppShell>
		</>
	);
};
