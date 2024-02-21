import { SetState } from '@/types/Types';
import {
	ActionIcon,
    Affix,
	Burger,
	Group,
	Image,
	Text,
	Title,
	useMantineColorScheme,
} from '@mantine/core';
import { LuMoonStar } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { UserButton } from '../shared/UserButton';
import router from 'next/router';

interface Props {
	setOpened: SetState<boolean>;
	opened: boolean;
}

export const HeaderContent = ({ setOpened, opened }: Props) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  	const dark = colorScheme === 'dark';

	const navigateToHomepage = () => {
		router.replace("/homepage");
	};
	
	return (
			<Group>
				<Image
                    src={`/images/UoG_keyline.png`}
					alt="UofG"
					width={170}
                    height={70}
                    p={10}
					onClick={navigateToHomepage}
				/>
				<Title size="h2" c='white' visibleFrom='md'>
					Prepare - Chemistry and Physics & Astronomy
				</Title>
                <Affix position={{top:15, right: 15}}>
					<UserButton />
                    <Burger
						opened={opened}
						onClick={() => setOpened((current) => !current)}
						size="md"
						color='white'
						hiddenFrom='sm' 
						pl={20}
						pr={30}
					/>
                </Affix>
            </Group> 
	);
};