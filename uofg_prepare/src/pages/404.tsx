import { ErrorPage } from '@/components/ErrorPage';

export const NotFound = () => {
	return (
		<>
			<ErrorPage
				mt="xl"
				errorCode={404}
				errorMessage="The page you requested cannot be found."
			/>
		</>
	);
};

export default NotFound;