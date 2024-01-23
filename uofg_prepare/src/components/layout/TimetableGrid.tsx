import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Card, List, Image, ThemeIcon, rem } from "@mantine/core";
import { BiAtom } from "react-icons/bi";

interface Props {
    heading: string,
    title: string,
    moduleAims: string,
    moduleOutline: string[],
    usefulWebsites: string,
    recommendedReading: string,
    cardTitle: string,
    cardText: string,
    imgSrc: string,
    imgAlt: string,
    link: string,
}

export const ContentGrid = ({heading, title, moduleAims, moduleOutline, usefulWebsites, recommendedReading, cardTitle, cardText, imgSrc, imgAlt, link}: Props) => {

    function outlineList (moduleOutline: string[]) {
        const rows = [];
        for (let i = 0; i < moduleOutline.length; i++) {
            rows.push(<List.Item >{moduleOutline[i]}</List.Item>);
        }
        return <List 
            spacing="xs"
            size="sm"
            center
            icon={
            <ThemeIcon color="blue.9" size={24} radius="xl">
                <BiAtom style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
        }>
            {rows}
        </List>;
    }
 
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
                            <Text>{moduleAims}</Text>
                            <Text pt={10}>
                                In this module you will cover the following:
                            </Text>
                            {outlineList(moduleOutline)}
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
                    <Card visibleFrom='sm'>
                        <Image src='/images/uofgSpire.jpg' alt='UofG Spire' />
                    </Card>  
                </Grid.Col>
            </Grid>
        </>
    );
}

export default ContentGrid;