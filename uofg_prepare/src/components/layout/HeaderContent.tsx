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

interface Props {
	setOpened: SetState<boolean>;
	opened: boolean;
}

export const HeaderContent = ({ setOpened, opened }: Props) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  	const dark = colorScheme === 'dark';
	
	return (
			<Group>
				<Image
                    src={`/images/UoG_keyline.png`}
					alt="UofG"
					width={170}
                    height={70}
                    p={10}
				/>
				<Title size="h2" c='white' visibleFrom='sm'>
					Prepare - Chemistry & Physics
				</Title>
                <Affix position={{top:15, right: 15}}>
					<ActionIcon
						variant="outline"
						color={dark ? 'yellow' : 'white'}
						onClick={() => toggleColorScheme()}
						title="Toggle color scheme"
					>
						{dark ? <LuSun size="1.1rem" /> : <LuMoonStar size="1.1rem" />}
					</ActionIcon>
                    <Burger
                    opened={opened}
                    onClick={() => setOpened((current) => !current)}
                    size="md"
					color='white'
					hiddenFrom='sm' />
                </Affix>
            </Group> 
	);
};