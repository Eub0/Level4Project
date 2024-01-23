import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const Timetable = () => {
    
    return (
      <>
        <PageHeader
            heading="Timetable"
        />
            <Stack>
                <Title order={1} size="h1">
                    Timetable
                </Title>
                <Text>
                    Creating a good timetable is important when it comes to university. 
                    Time management is (almost) everything. 
                    You should aim to create a good balance of academics and extracurriculars. 
                    This section gives advice on time management, class selection, and how to create/upload your timetable.
                </Text>
            </Stack>
            <Grid pt={20}>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                        cardTitle="Enrolment Advice"
                        cardText="Tips about enroling for your classes."
                        imgSrc="/images/src.jpg"
                        imgAlt="UofG"
                        link="timetable/enrolmentadvice"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                        cardTitle="Chemistry Timetables"
                        cardText="See how the courses and their modules work for the School of Chemistry."
                        imgSrc="/images/guu.jpeg"
                        imgAlt="UofG GUU"
                        link="academics/chemistry"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <SubSectionCard
                        cardTitle="Physics Timetables"
                        cardText="See how the courses and their modules work for the School of Physics."
                        imgSrc="/images/qmu.png"
                        imgAlt="UofG QMU"
                        link="academics/physics"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                        cardTitle="My Timetable"
                        cardText="Takes you stright to UofG Life to be avle to view your timetabe (once you have been given your GUID)."
                        imgSrc="/images/timetable/uofgLife.png"
                        imgAlt="UofG"
                        link="https://www.gla.ac.uk/apps/uofglife/#/timetable"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default Timetable;