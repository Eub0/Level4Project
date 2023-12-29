import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Extracurriculars = () => {
    return (
      <>
        <PageHeader
            heading="Extracurriculars"
        />
            <Stack>
            <Title order={1} size="h1">
                Extracurriculars
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
                    Student Bodies
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Glasgow University Union (GUU)"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="https://www.guu.co.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Queen Margret Union (QMU)"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="https://www.qmunion.org.uk/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Student Representatvive Council (SRC)"
                            cardText="The Student Repsreentative Council of the University of Glasgow. Click here to discover more."
                            imgSrc="/images/src.jpg"
                            imgAlt="UofG SRC"
                            link="https://www.glasgowunisrc.org/"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Glasgow University Soprts Association (GUSA)"
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

export default Extracurriculars;