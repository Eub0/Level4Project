import { ErrorPage } from '@/components/ErrorPage';
import { useAuth } from '@/contexts/AuthContext';
import useGuestHook from '@/hooks/guestProvider';
import router from 'next/router';
import { ReactNode } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

interface AccountCheckProps {
	children: ReactNode;
}

export const AccountCheck = ({ children }: AccountCheckProps) => {
	const location = router.pathname;
	const { isGuest } = useGuestHook();
	const { currentUser } = useAuth();

	return (
		<>
			{(matchPath(location, '/') || matchPath(location, '/signup') || matchPath(location, '/forgotpassword')) ?
			children : (isGuest || (currentUser != null)) ? (
				children
			) : (
				<ErrorPage
					errorCode={403}
					errorMessage="You do not have the permission to access this page. Login or continue as a guest to access this page."
				/>
			)}
		</>
	);
};