import { NavigationItem } from "@/types/Navigation";
import { TiHome } from "react-icons/ti";


export const navigationItems: NavigationItem[] = [
	{
		name: 'Homepage',
		icon: <TiHome size={20} />,
		path: '/homepage',
	}
]