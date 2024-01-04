import { SetState } from '@/types/Types';
import {
    Affix,
	Burger,
	Container,
	Group,
	Image,
	Text,
	Title,
} from '@mantine/core';

interface Props {
	setOpened: SetState<boolean>;
	opened: boolean;
}

export const HeaderContent = ({ setOpened, opened }: Props) => {
	return (
			<Group>
				<Image
                    src={`/images/UoG_keyline.png`}
					alt="UofG"
					width={170}
                    height={70}
                    p={10}
				/>
				<Title size="h2" c='white'>
					Prepare - Chemistry & Physics
				</Title>
                <Affix position={{top:15, right: 15}}>
                    <Burger
                    opened={opened}
                    onClick={() => setOpened((current: any) => !current)}
                    size="md"
					color='white'
                    />
                </Affix>
            </Group> 
	);
};