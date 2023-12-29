import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Chemistry = () => {
    return (
      <>
        <PageHeader
            heading="School of Chemistry"
        />
            <Stack>
            <Title order={1} size="h1">
                School of Chemistry
            </Title>
            <Text>
            As you prepare to enter your university life, and also to assist you throughout your entry year, this section aims to provide help with your academics. 
            Select the school you wish to look at, and find a range of study tool, tips, quizzes, and links to external useful academic resources.
            </Text>
            </Stack>
            <Grid pt={20}>
                <Grid.Col span={{ base: 12, md: 10, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Chemistry 1"
                        cardText="Your hub for all things Level 1 Chemisrty."
                        imgSrc="/images/guu.jpeg"
                        imgAlt="UofG GUU"
                        link="/academics/chemistry/chemistry1"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <SubSectionCard
                        cardTitle="Chemisrty 2X"
                        cardText="Molecules Matter: The Fundamentals"
                        imgSrc="/images/qmu.png"
                        imgAlt="UofG QMU"
                        link="/academics/chemistry/chemistry2x"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Chemistry 2Y"
                        cardText="Chemistry of the Natural World"
                        imgSrc="/images/src.jpg"
                        imgAlt="UofG SRC"
                        link="/academics/chemistry/chemistry2y"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default Chemistry;