import { PageHeader } from '@/components/layout/PageHeader';
import { greetings } from '@/helpers/greetings';
import { Grid, Image, Stack, Text, Title } from '@mantine/core';

export const Homepage = () => {
	const greetingMessage = greetings();

	return (
		<>
			<PageHeader
				heading="Homepage"
				subheading={`${greetingMessage}`}
			/>
			<Stack>
				<Title order={3} size="h3">
					Welcome to Prepare
                </Title>
                <Text>
                Welcome to Prepare, a system to help you get setup and ready for starting you university journey. 
                This system is specialised to the schools of chemistry and physics. Here you will find advice and tools to help you get set up for starting uni, as ell as useful areas for throughout your time in your first year, such as study tools and advice. 
                We hope you find this system useful in helping prepare you to be a future world changer.
                </Text>
                <Image
                    radius="md"
                    src={null}
                    h={200}
                    alt=''
                />
            </Stack>
		</>
	);
};

export default Homepage;