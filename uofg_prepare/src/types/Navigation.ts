export interface NavigationItem extends SubNavigationItem {
	icon: JSX.Element;
	subItems?: SubNavigationItem[];
}

export interface SubNavigationItem {
	name: string;
	icon: JSX.Element;
	path: string;
	subSubItems?: SubSubNavigationItem[];
}

export interface SubSubNavigationItem {
	name: string;
	path: string;
}