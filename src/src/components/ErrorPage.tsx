import {
    Center,
	Container,
	ContainerProps,
	Text,
	Title,
} from '@mantine/core';
import Head from 'next/head';
import classes from '@/styles/ErrorMessage.module.css'
import router from 'next/router';
import { Anchor } from 'react-bootstrap';

interface Props extends ContainerProps {
	errorMessage?: string | null;
	errorCode?: number;
}

export const ErrorPage = ({ errorMessage, errorCode, ...props }: Props) => {

    const navigateToLogin = () => {
		router.replace("/");
	};

    const navigateToHomepage = () => {
		router.replace("/homepage");
	};

	const errorPageTitle = () => {
		if (errorCode === 404) {
			return 'Page not found';
		} else if (errorCode === 403) {
			return 'Forbidden';
        } else {
			return 'Error';
		}
	};

	return (
		<>
			<Head>
				<title>{`uofgprepare - ${errorPageTitle()}`}</title>
			</Head>
			<Container {...props}>
				{errorCode && <div className={classes.label}>{errorCode}</div>}
				<Title ta="center">Oops, something has gone wrong</Title>
				{errorMessage && (
					<Container size="sm" mt="sm">
                        <Center>
                            <Text c="dimmed" size="lg">
                                {errorMessage}
                            </Text>
                        </Center>
                        <Center>
                        {errorCode === 403 ?
                                <Anchor onClick={navigateToLogin} color='blue'>
                                    Go to login page.
                                </Anchor> :
                                <Anchor onClick={navigateToHomepage}>
                                    Return to homepage.
                                </Anchor>
                            }
                        </Center>
					</Container>
				)}
			</Container>
		</>
	);
};