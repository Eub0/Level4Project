import { NavigationItem, SubNavigationItem } from '@/types/Navigation';
import {
	Box,
	Collapse,
	Group,
	UnstyledButton
} from '@mantine/core';
import '@mantine/core/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface Props {
	item: NavigationItem;
	closeNavbar: () => void;
}

export const NavbarButton = ({ item, closeNavbar }: Props) => {
	const router = useRouter();

	const isCurrentPage = (route: string): boolean => route == router.route;

	const navigateToPage = () => {
		router.push(item.path);
		closeNavbar();
	};
	const [opened, setOpened] = useState(false);

	if (item.subItems) {
		return (
			<>
				<UnstyledButton
					data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
					px="sm"
					onClick={() => setOpened((o) => !o)}
				>
					<Group p="apart" >
						<Box>
							<div className="navbar-icon">{item.icon}</div>
							<Box ml="xs">{item.name}</Box>
						</Box>
						<FaChevronRight
							size={14}
							style={{ transform: opened ? `rotate(90deg)` : 'none' }}
						/>
					</Group>
				</UnstyledButton>
				<Collapse in={opened}>
					{item.subItems.map((subItem: SubNavigationItem) => (
						<Link
							href={item.path + subItem.path}
							key={subItem.name}
							onClick={closeNavbar}
						>
							{subItem.name}
						</Link>
					))}
				</Collapse>
			</>
		);
	} else {
		return (
			<UnstyledButton
				data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
				onClick={navigateToPage}
				px="sm"
				my={3}
			>
				<Group p="apart">
					<Box>
						<div className="navbar-icon">{item.icon}</div>
						<Box ml="xs">{item.name}</Box>
					</Box>
				</Group>
			</UnstyledButton>
		);
	}
};