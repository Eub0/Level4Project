import { NavigationItem } from '@/types/Navigation';
import { IoHomeSharp } from 'react-icons/io5';

export const navigationItems: NavigationItem[] = [
	{
		name: 'Homepage',
		icon: <IoHomeSharp size={20} />,
		path: '/homepage',
	}
]