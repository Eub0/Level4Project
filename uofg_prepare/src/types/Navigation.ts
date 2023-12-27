export interface NavigationItem extends SubNavigationItem {
	icon: JSX.Element;
	subItems?: SubNavigationItem[];
}

export interface SubNavigationItem {
	name: string;
	path: string;
}