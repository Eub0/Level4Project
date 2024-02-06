import { PageHeader } from "@/components/layout/PageHeader";
import { greetings } from "@/helpers/greetings";
import { Stack, Text, Title, Image, rem, Center, Grid } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from "@/styles/Carousel.module.css"
import { SubSectionCard } from "@/components/shared/SubSectionCard";

export const Homepage = () => {
	const greetingMessage = greetings();

	return (
		<>
			<PageHeader
				heading="Homepage"
				subheading={`${greetingMessage}`}
			/>
			<Stack>
				<Title order={1} size="h1">
					Welcome to Prepare
                </Title>
                <Title order={5}>
                    {`${greetingMessage}`}
                </Title>
                <Text>
                Welcome to Prepare, a system to help you get setup and ready for starting you university journey. 
                This system is specialised to the Schools of Chemistry and Physics & Astronomy. Here you will find advice and tools to help you get set up for starting university, as well as useful areas for throughout your time in your first year of study, such as study tools and advice. 
                We hope you find this system useful in helping prepare you to be a future world changer.
                </Text>
                <Carousel 
                    classNames={classes} 
                    slideSize="70%" 
                    height={400} 
                    align="center" 
                    slideGap="md" 
                    loop 
                    dragFree 
                    slidesToScroll={1} 
                    draggable={true} 
                    withControls={true} 
                    withIndicators
                >
                    <Carousel.Slide>
                        <Image src="/images/homepage/welcome.jpg" alt="Welcome" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src="/images/homepage/chemistry1.jpg" alt="Experiment 1"/>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src="/images/homepage/chemistry2.jpg" alt="Experiment 2"/>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src="/images/homepage/chemistry3.jpg" alt="Experiment 3"/>
                    </Carousel.Slide>
                </Carousel>
                <Title order={5}>
                    Before you start you journey on prepare, why not have a little fun with the following.
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <SubSectionCard
                            cardTitle="What Type of Chemist Are You?"
                            imgSrc="/images/homepage/chemistQuiz.jpeg"
                            imgAlt="Periodic Table"
                            link="https://flgfkx0av58.typeform.com/to/ocks7FV6"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <SubSectionCard
                            cardTitle="Take a Tour of the School of Chemistry"
                            imgSrc="/images/homepage/chemistQuiz.jpeg"
                            imgAlt="Periodic Table"
                            link="https://view.genial.ly/63c969a75d20a3001156b922"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
		</>
	);
};

export default Homepage;