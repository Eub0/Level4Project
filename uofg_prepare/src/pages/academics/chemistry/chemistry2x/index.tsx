import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Chemistry2 = () => {
    return (
      <>
        <PageHeader
            heading="Chemistry 2"
        />
            <Stack>
            <Title order={1} size="h1">
                Chemistry 2
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
                            cardTitle="Quantum Mechanics and Chemical Bonding"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2x/quantummechanicsandchemicalbonding"
                        />
                        <SubSectionCard
                            cardTitle="Enols and Enolates"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2x/enolsandenolates"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Isomerism and Sterochemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry2x/isomerismandsterochemistry"
                        />
                        <SubSectionCard
                            cardTitle="Organometallic Chemistry"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2x/organometallicchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Main Group Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2x/organicchemistry1"
                        />
                        <SubSectionCard
                            cardTitle="Solids and Surfaces"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2x/solidsandsurfaces"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Principles of Spectroscopy"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2x/principlesofspectroscopy"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
        </>
    );
}

export default Chemistry2;