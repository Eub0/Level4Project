import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Chemistry1 = () => {
    return (
      <>
        <PageHeader
            heading="Chemistry 1"
        />
            <Stack>
            <Title order={1} size="h1">
                Chemistry 1
            </Title>
            <Text>
            An important part of university life is making sure you have time for you. 
            Your interests, hobbies, sports, or even finding something new. 
            This page provides links to find more information about Chemistry and Physics societies, student unions, sports, and the student representative council. 
            All play a key part in making your university experience more than just your degree, and offer a wide range of opportunities for you to take advantage of.
            </Text>
            </Stack>
            <Stack pt={10}>
                <Title order={3} size="h3">
                    Semester 1
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Elements and Atoms"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/elementsandatoms"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                    <SubSectionCard
                            cardTitle="Compounds and Molecules"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry1/compoundsandmolecules"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 1"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry1"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 2"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry2"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 3"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry3"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:2 }}>
                        <SubSectionCard
                            cardTitle="Attractions and Repulsions"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry1/attractionsandrepulsions"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack pt={10}>
                <Title order={3} size="h3">
                    Semester 2
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Data Analysis"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="https://www.guu.co.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                    <SubSectionCard
                            cardTitle="Chemical Energy Changes"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="https://www.qmunion.org.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Chemical Kenetics"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="https://www.guu.co.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Aqueous Equilibria and pH"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="https://www.guu.co.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Transition Metals"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="https://www.guu.co.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:2 }}>
                        <SubSectionCard
                            cardTitle="Medicinal Chemistry"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="https://www.gla.ac.uk/myglasgow/sport/gusa/"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
        </>
    );
}

export default Chemistry1;