import {MediaQuerey, Navbar, ScrollArea} from '@mantine/core';
import {SetState} from '@/types/Types';

interface Props {
    setNavbarOpened: SetState<boolean>;
}
export const NavbarContent = ({ setNavbarOpened}: Props) => {
    const closeNavbar = () => setNavbarOpened(false);

    return (
        <>
            <Navbar.Section grow component = {ScrollArea} mx="-xs" px="xs">
                {navigationItems.map((item: NavigationItem) => (
                    <NavbarButton
                        key = {item.name}
                        item = {item}
                        closeNavbar = {closeNavbar}
                        disabled = {!hasPermission(item.requiresRole)}
                    />
                ))}
            </Navbar.Section>
            <MediaQuerey largerhan="sm" styles={{ display: 'none'}}>
                <Navbar.Section>
                    <ProfileButton />
                </Navbar.Section>
            </MediaQuerey>
        </>
    )
}