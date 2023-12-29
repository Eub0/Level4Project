import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Chemistry2Y = () => {
    return (
      <>
        <PageHeader
            heading="Chemistry 2Y"
        />
            <Stack>
            <Title order={1} size="h1">
                Chemistry 2Y
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
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Introduction to Spectroscopy "
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/introductiontospectroscopy"
                        />
                        <SubSectionCard
                            cardTitle="Organic Synthesis"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/organicsynthesis"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Co-ordination Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry2y/coordinationchemistry"
                        />
                        <SubSectionCard
                            cardTitle="Chemical Thermodynamics"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/chemicalthermodynamics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Aromatic Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/aromaticchemistry"
                        />
                        <SubSectionCard
                            cardTitle="Applied Organic Chemistry "
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/appliedorganicchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Solutions and Electrochemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/solutionsandelectrochemistry"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
        </>
    );
}

export default Chemistry2Y;