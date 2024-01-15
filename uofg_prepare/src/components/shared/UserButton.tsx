import { UnstyledButton, Group, Avatar, Text, rem, useMantineColorScheme } from '@mantine/core';
import { FaChevronRight } from 'react-icons/fa';
import { FiUser } from "react-icons/fi";
import classes from '@/styles/UserButton.module.css';
import router from 'next/router';

export function UserButton() {

    const navigateToAccountPage = () => {
        router.push('/account');
	};

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  	const dark = colorScheme === 'dark';

  return (
    <UnstyledButton className={classes.user} onClick={navigateToAccountPage}>
      <Group>
      <Avatar color={dark ? "white" : "blue.9"} radius="lg">
        <FiUser size="1.5rem" />
      </Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500} c={dark ? "white" : "blue.9"}>
            Mr Test Testington
          </Text>

          <Text c="dimmed" size="xs">
            test@test.com
          </Text>
        </div>

        <FaChevronRight className={dark ? classes.chevron_dark : classes.chevron} style={{ width: rem(45), height: rem(14) }}/>
      </Group>
    </UnstyledButton>
  );
}