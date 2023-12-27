import { SetState } from '@/types/Types';
import {
	Burger,
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
		<Group p="apart" w='100%'>
			<Group>
				<Image
					alt="UofG"
					width={170}
				/>
				<Text size="xl" mb={4} w={600}>
					UofG Prepare
				</Text>
			</Group>
            <Burger
                opened={opened}
                onClick={() => setOpened((current: any) => !current)}
                size="md"
                color={dark ? 'white' : 'grey'}
            />
		</Group>
	);
};