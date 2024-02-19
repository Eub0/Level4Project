import {
	Avatar,
	Divider,
	Group,
	Menu,
	Modal,
	PasswordInput,
	Text,
	UnstyledButton,
	useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GrUserSettings } from "react-icons/gr";
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { LuLock } from "react-icons/lu";
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';
import useGuestHook from '@/hooks/guestProvider';

export const UserButton = () => {
	const router = useRouter();
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const [menuOpened, setMenuOpened] = useState(false);
	const [error, setError] = useState("")
	const { currentUser, signout } = useAuth()
	const {isGuest, setIsGuest} = useGuestHook()

	const navigateToUpdate= () => {
			router.push("/account");
		};

	async function handleLogout() {
		setError("")

		try{
		await signout()
		router.push("/")
		}
		catch {
		setError("Failed to log out")
		}
	}

	function toSignIn() {
		setIsGuest(false)
		router.push("/")
	}

	return (
		<>
			<Menu
				opened={menuOpened}
				onOpen={() => setMenuOpened(true)}
				onClose={() => setMenuOpened(false)}
				styles={{ dropdown: { minWidth: 180, marginTop: 10 } }}
			>
				<Menu.Target>
					<UnstyledButton>
						<Group>
							<Avatar size={40} w={150} color="white" radius="sm">
								<Group>
                  <GrUserSettings />
                  <Text>
                    User Settings
                  </Text>
                </Group>
							</Avatar>
						</Group>
					</UnstyledButton>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Label>Settings</Menu.Label>
          {currentUser ? 
					<Menu.Item
						leftSection={<LuLock />}
            onClick={navigateToUpdate}
					>
						Change account details
					</Menu.Item> : ""}
					<Menu.Item
						onClick={() => toggleColorScheme()}
						leftSection={dark ? <BsSun /> : <BsMoonStars />}
					>
						{dark ? 'Light Mode' : 'Dark Mode'}
					</Menu.Item>
					<Divider />
          {currentUser ? 
					<Menu.Item
						onClick={handleLogout}
						color="red"
						leftSection={<FaSignOutAlt />}
						data-cy="logout-button"
					>
						Sign out
					</Menu.Item> :
					<Menu.Item
					onClick={toSignIn}
					color="blue.9"
					leftSection={<FaSignOutAlt />}
					data-cy="login-button"
					>
						Log In
					</Menu.Item> 
					}
				</Menu.Dropdown>
			</Menu>
		</>
	);
};