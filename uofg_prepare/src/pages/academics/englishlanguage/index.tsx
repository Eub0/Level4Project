import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid } from "@mantine/core";

export const EnglishLanguage = () => {
    return (
      <>
        <PageHeader
            heading="The English Language"
        />
            <Stack>
            <Title order={1} size="h1">
                The English Language
            </Title>
            <Text>
                Before you begin your joureny here at the University of Glasgow, it is important that you have a good understanding of the English Language.
                This will make it easier for you to reach out and collaborate with members of staff, and fellow students for help and work. 
                The following resources are some ways you can ensure that your Enlish is in a strong position before you begin.
            </Text>
            </Stack>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="The Oxford English Dictionary"
                        cardText="One of the two student unions on campus."
                        imgSrc="/images/englishLanguage/oxfordDictionary.png"
                        imgAlt="Oxford English Dictionary"
                        link="https://www.oed.com/?tl=true"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <SubSectionCard
                        cardTitle="BBC: Learning English"
                        cardText="One of the two student unions on campus."
                        imgSrc="/images/englishLanguage/bbcLearnEnglish.jpg"
                        imgAlt="BBC"
                        link="https://www.bbc.co.uk/learningenglish/"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Duolingo"
                        cardText="Duolingo provides a course where you can strengthen your English with just 5 minutes of practice a day."
                        imgSrc="/images/englishLanguage/duolingo.png"
                        imgAlt="Duolingo"
                        link="https://www.duolingo.com/course/en/uk/Learn-English"
                    />
                </Grid.Col>
            </Grid>
        </>
    );
}

export default EnglishLanguage;