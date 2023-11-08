import { toTitleCase } from '@/helpers/caseHelper';
import { NextRouter } from 'next/router';
import { useMemo } from 'react';

export const getPathWithoutQuery = (router: NextRouter): string => {
	return router.asPath.split('?')[0];
};

export const getPathNestedRoutes = (router: NextRouter): string[] => {
	return getPathWithoutQuery(router)
		.split('/')
		.filter((v) => v.length > 0);
};

export const getCrumblist = (router: NextRouter) => {
	const pathNestedRoutes = getPathNestedRoutes(router);
	return pathNestedRoutes.map((subpath, idx) => {
		const href = '/' + pathNestedRoutes.slice(0, idx + 1).join('/');
		return { href, text: toTitleCase(subpath) };
	});
};

const generateBreadcrumbs = (router: NextRouter) => {
	const crumblist = getCrumblist(router);
	return [{ href: '/dashboard', text: 'Dashboard' }, ...crumblist];
};

export const useMemoizedBreadCrumbs = (router: NextRouter) => {
	return useMemo(() => generateBreadcrumbs(router), [router]);
};