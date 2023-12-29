import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Card } from "@mantine/core";

interface Props {
    heading: string,
    title: string,
    moduleDescription: string,
    usefulWebsites: string,
    recommendedReading: string,
    cardTitle: string,
    cardText: string,
    imgSrc: string,
    imgAlt: string,
    link: string,
}

export const ContentGrid = ({heading, title, moduleDescription, usefulWebsites, recommendedReading, cardTitle, cardText, imgSrc, imgAlt, link}: Props) => {
    return (
      <>
        <PageHeader
            heading={heading}
        />
            <Stack>
            <Title order={1} size="h1">
                {title}
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
                                {moduleDescription}
                            </Text>
                        </Card>
                        <Title order={4} size="h4">
                            Useful Websites:
                        </Title>
                        <Card>
                            <Text>
                                {usefulWebsites}
                            </Text>
                        </Card>
                        <Title order={4} size="h4">
                            Recommended Reading::
                        </Title>
                        <Card>
                            <Text>
                                {recommendedReading}
                            </Text>
                        </Card>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle={cardTitle}
                        cardText={cardText}
                        imgSrc={imgSrc}
                        imgAlt={imgAlt}
                        link={link}
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default ContentGrid;