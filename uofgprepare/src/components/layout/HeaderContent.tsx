import {SetState} from '@/types/Types';
import { PageBreadcrumbs } from '@/components/layout/PageBreadcrumbs';
import {
    Burger,
    Group,
    Image,
    MediaQuery,
    Text,
    useMantineColorScheme
} from '@mantine/core';

interface Props {
    setOpened: SetState<boolean>;
    opened:boolean;
}

export const HeaderContent = ({setOpened, opened}:Props) => {
    const {colorScheme} = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <Group position="apart" sx={{ width: '100%'}}>
            <Group>
                <Image
                    alt="University of Glasgow"
                    width={170}
                />
                <Text size="xl" mb={4} weight={600}>
                    Prepare
                </Text>
                <MediaQuery
                    smallerThan = "md"
                    styles = {{ display: 'none', marginLeft: '10px'}}
                >
                    <PageBreadcrumbs />
                </MediaQuery>
            </Group>
            <MediaQuery largerThan = "sm" styles={{ display: 'none' }}>
                <Burger
                    opened = {opened}
                    onClick = {() => setOpened((current) => !current)}
                    size = "md"
                    color = {dark ? 'white' : 'grey'}
                />
            </MediaQuery>
        </Group>
    );
}
