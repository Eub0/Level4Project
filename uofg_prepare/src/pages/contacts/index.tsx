import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const Contacts = () => {
    return (
      <>
        <PageHeader
            heading="Contacts"
        />
            <Stack>
            <Title order={1} size="h1">
                Contacts
            </Title>
            <Text>
                Its is important to know who to contact for issues and advice. 
                We have compiled together the essential contacts for both schools for you.
            </Text>
            </Stack>
            <Grid pt={20}>
                <Grid.Col span={{ base: 12, md: 10, lg: 6 }}>
                    <SubSectionCard
                        cardTitle="School of Chemistry"
                        cardText="Essential contacts for the Schoolof Chemistry."
                        imgSrc="/images/guu.jpeg"
                        imgAlt="UofG GUU"
                        link="contacts/chemistry"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <SubSectionCard
                        cardTitle="School of Physics"
                        cardText="Essential contacts for the School of Physics."
                        imgSrc="/images/qmu.png"
                        imgAlt="UofG QMU"
                        link="contacts/physics"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default Contacts;