import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Card } from "@mantine/core";

export const MainGroupChemistry = () => {
    return (
      <>
        <PageHeader
            heading="Main Group Chemistry"
        />
            <Stack>
            <Title order={1} size="h1">
                Main Group Chemistry
            </Title>
            </Stack>
            <Grid pt={20}>
                <Grid.Col span={{ base: 12, md: 10, lg: 8 }}>
                    <Stack>
                        <Title order={4} size="h4">
                            Module Description:
                        </Title>
                        <Card>
                            <Text>

                            </Text>
                        </Card>
                        <Title order={4} size="h4">
                            Useful Websites:
                        </Title>
                        <Card>
                            <Text>
                                
                            </Text>
                        </Card>
                        <Title order={4} size="h4">
                            Recommended Reading::
                        </Title>
                        <Card>
                            <Text>
                                
                            </Text>
                        </Card>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Unit Quiz"
                        cardText="Tighten up on your English with our helpful hub of resources."
                        imgSrc="/images/src.jpg"
                        imgAlt="UofG SRC"
                        link="https://www.glasgowunisrc.org/"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default MainGroupChemistry;