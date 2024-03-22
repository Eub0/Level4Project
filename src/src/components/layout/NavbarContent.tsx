import { NavbarButton } from '@/components/layout/NavbarButton';
import { navigationItems } from '@/routes/routes';
import { NavigationItem } from '@/types/Navigation';
import { SetState } from '@/types/Types';
import { AppShell, ScrollArea } from '@mantine/core';
import { UserButton } from '@/components/shared/UserButton';
import classes from '@/styles/NavbarContent.module.css'

interface Props {
	setNavbarOpened: SetState<boolean>;
}

export const NavbarContent = ({ setNavbarOpened }: Props) => {
	const closeNavbar = () => setNavbarOpened(false);

	return (
		<>
			<AppShell.Section grow component={ScrollArea} mx="-xs" px="xs">
				{navigationItems.map((item: NavigationItem) => (
					<NavbarButton
						key={item.name}
						item={item}
						closeNavbar={closeNavbar}
					/>
				))}
			</AppShell.Section>
		</>
	);
};