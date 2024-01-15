import { NavigationItem, SubNavigationItem, SubSubNavigationItem } from '@/types/Navigation';
import {
	Box,
	Collapse,
	Group,
	UnstyledButton,
	useMantineColorScheme
} from '@mantine/core';
import '@mantine/core/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import classes from '@/styles/NavbarButton.module.css';

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

	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	if (item.subItems) {
		// for (let subItem=0; subItem < (item.subItems).length; subItem++) {
		// 	if (item.subItems[subItem].subSubItems) {
				return (
					<>
						<UnstyledButton
							className={dark ? `${classes.button_dark} ${
								isCurrentPage(item.path) && classes.active_dark}` :
								`${classes.button} ${
								isCurrentPage(item.path) && classes.active}`}
							data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
							px="sm"
							onClick={() => setOpened((o) => !o)}
							pt={15}
							pb={15}
						>
							<Group
								className={classes.group}
							>
								<Box
									className={classes.box}
								>
									<div className="navbar-icon">{item.icon}</div>
									<Box ml="xs">{item.name}</Box>
								</Box>
								<FaChevronRight
									className={classes.chevron}
									size={14}
									style={{ transform: opened ? `rotate(90deg)` : 'none' }}
								/>
							</Group>
						</UnstyledButton>
						<Collapse in={opened} pb={20}>
							{item.subItems.map((subItem: SubNavigationItem) => (
								<Link
									className={dark ? `${classes.link_dark} ${
										isCurrentPage(item.path + subItem.path) && classes.active_dark
									}`: `${classes.link} ${
										isCurrentPage(item.path + subItem.path) && classes.active
									}`}
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
			}
		// } 
	// } 
	else {return (
			<UnstyledButton
				className={dark ? `${classes.button_dark} ${
					isCurrentPage(item.path) && classes.active_dark
				}` : `${classes.button} ${
					isCurrentPage(item.path) && classes.active
				}`}
				data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
				onClick={navigateToPage}
				px="sm"
				my={3}
				pt={15}
				pb={15}
			>
				<Group 
					className={classes.group}
				>
					<Box
						className={classes.box}
					>
						<div className="navbar-icon">{item.icon}</div>
						<Box ml="xs">{item.name}</Box>
					</Box>
				</Group>
			</UnstyledButton>
		);
	}
};