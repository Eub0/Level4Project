import { SetState } from '@/types/Types';
import {
    Affix,
	Burger,
	Container,
	Group,
	Image,
	Text,
	useMantineColorScheme,
} from '@mantine/core';

interface Props {
	setOpened: SetState<boolean>;
	opened: boolean;
}

export const HeaderContent = ({ setOpened, opened }: Props) => {
	const { colorScheme } = useMantineColorScheme();
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
				<Text size="xl" mb={4} w={600}>
					Prepare - Chemistry & Physics
				</Text>
                <Affix position={{top:15, right: 15}}>
                    <Burger
                    opened={opened}
                    onClick={() => setOpened((current: any) => !current)}
                    size="md"
                    color={dark ? 'white' : 'grey'}
                    />
                </Affix>
            </Group> 
	);
};