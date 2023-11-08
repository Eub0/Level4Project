import { AppShell, Box, Header, Navbar } from '@mantine/core';
import { ReactNode, useState } from'react';
import { NavbarContent } from './NavbarContent';
import { HeaderContent } from './HeaderContent';
import { PageContainer } from './PageContainer';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const showLayout = !['/', '404'].includes(router.route);

    return (
        <>
            <Head>
                    <title>UofG Prepare - Loading...</title>
            </Head>
            {showLayout ? (
                <AppShell
                    navbarOffsetBreakpoint = "sm"
                    fixed
                    padding = {0}
                    styles = {(theme) => ({
                        root: {
                            backgroundColor:
                                theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
                        },
                    })}
                    navbar = {
                        <Navbar
                            p="sm"
                            hidden = {!opened}
                            hiddenBreakpoint = "sm"
                            width = {{ base: 225 }}
                            styles = {(theme) => ({
                                root: {
                                    backgroundColor:
                                        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.grey[1],
                                },
                            })}
                        >
                            <NavbarContent setNavbarOpened = {setOpened} />
                        </Navbar>
                    }
                    header = {
                        <Header
                            height = {60}
                            p = "sm"
                            sx = {(theme) => ({
                                display: 'flex',
                                allignItems: 'center',
                                backgroundColor:
                                    theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'white',
                            })}
                        >
                            <HeaderContent opened = { opened } setOpened = { setOpened } />
                        </Header>
                    }
                >
                    <Box
                        id = "PageHeader"
                        sx = {{
                            position: 'sticky',
                            top: 'var(--mantine-header-height)',
                            zIndex: 10,
                            '@media (max-width: 768px)': {
                                position: 'static',
                            },
                        }}
                    />
                    <PageContainer> { children } </PageContainer>
                </AppShell>
            ) : (
                <> { children } </>
            )}
        </>
    );
}