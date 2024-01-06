import { SetState } from '@/types/Types';
import {
    Affix,
	Burger,
	Group,
	Image,
	Text,
	Title,
} from '@mantine/core';
import classes from '@/styles/Layout.module.css'

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
				<Title size="h2" c='white' visibleFrom='sm'>
					Prepare - Chemistry & Physics
				</Title>
                <Affix position={{top:15, right: 15}}>
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