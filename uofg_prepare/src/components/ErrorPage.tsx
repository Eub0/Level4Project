import {
    Center,
	Container,
	ContainerProps,
	Text,
	Title,
} from '@mantine/core';
import Head from 'next/head';
import classes from '@/styles/ErrorMessage.module.css'

interface Props extends ContainerProps {
	errorMessage?: string | null;
	errorCode?: number;
}

export const ErrorPage = ({ errorMessage, errorCode, ...props }: Props) => {

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
				<title>{`Backstage - ${errorPageTitle()}`}</title>
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
					</Container>
				)}
			</Container>
		</>
	);
};