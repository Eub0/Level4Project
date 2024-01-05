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
							className={classes.header}
						>
							<HeaderContent opened={opened} setOpened={setOpened} />
						</AppShell.Header>
						{opened && <AppShell.Navbar>
							<NavbarContent setNavbarOpened={setOpened} />
						</AppShell.Navbar>}
                       <AppShell.Main>
					        <PageContainer>{children}</PageContainer>
                        </AppShell.Main> 
				</AppShell>
		</>
	);
};
