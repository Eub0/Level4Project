import { relativeUrlPath } from '@/helpers/validationHelper';
import { NextPageWithProps } from '@/types/Next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const Home: NextPageWithProps = () => {
  const router = useRouter();
	const redirectToHomepage = true;
	useEffect(() => {
    if (!redirectToHomepage) {
			router.push(
				router.query.returnURL &&
					relativeUrlPath.test(router.query.returnURL as string)
					? (router.query.returnURL as string)
					: '/homepage'
			);
    }
	}, [redirectToHomepage, router]);
  return (
    <>
    { redirectToHomepage }
    </>
  )
}

export default Home;