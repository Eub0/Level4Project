import ContentGrid from "@/components/layout/ContentGrid";
import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, Grid, Card,Image, GridCol, Tabs, rem, useMantineColorScheme } from "@mantine/core";
import classes from '@/styles/EnrolmentGrid.module.css';
import { GiChemicalDrop } from "react-icons/gi";
import { SiAtom } from "react-icons/si";

export const EnrolmentAdvice = () => {
    const iconStyle = { width: rem(12), height: rem(12) };
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  	const dark = colorScheme === 'dark';
    
    return (
        <>
            <PageHeader
                heading="Academic Enrolment"
            />
                <Stack>
                    <Title order={1} size="h1">
                        Module Selection
                    </Title>
                    <Text>
                        Selecting which modules to take can be confussing, especially if you are doing it for the first time. 
                        Here is some advice that we think might help make that confussing process a little bit easier.
                    </Text>
                </Stack>
                <Grid pt={15}>
                    <GridCol span={{ base: 12, md: 6, lg: 8 }}>
                        <Card className={dark ? classes.card_dark : classes.card}>
                            <Text pb={5} fw={850}>
                                Mandatory Modules:
                            </Text>
                            <Text>
                                Some courses have madatroy modules that you must take alongside them to progress.
                                Check bellow to see if there are any mandatroy electives you must take.
                            </Text>
                            <Tabs variant="unstyled" defaultValue="School of Chemistry" classNames={classes} pt={10}>
                                <Tabs.List grow>
                                    <Tabs.Tab value="School of Chemistry" leftSection={<GiChemicalDrop style={iconStyle} />}>
                                        School of Chemistry
                                    </Tabs.Tab>
                                    <Tabs.Tab value="School of Physics & Astronomy" leftSection={<SiAtom style={iconStyle} />}>
                                        School of Physics & Astronomy
                                    </Tabs.Tab>
                                </Tabs.List>
                                <Tabs.Panel value="School of Chemistry">
                                    <Text pt={10}>
                                        Whether you are taking Chemistry 1 in level 1, or Chemistry 2X and 2Y in level 2, there are no mandatory modules for you to take.
                                        Again, it is highly recommended you take electives that you feel will benfifit you going forward.
                                        Here are some recomendations from the school:

                                    </Text>
                                </Tabs.Panel>
                                <Tabs.Panel value="School of Physics & Astronomy">
                                    <Text pt={10}>
                                        If you are starting at level 1, the  you must take Maths1 as an elective course in order to progress into level 2.
                                        By the time you enter into honors physics, you must have completed the following level 2 maths courses (Maths 2A,B,D).
                                        With that said, you must take these courses if you are starting at level 2.
                                    </Text>
                                </Tabs.Panel>
                            </Tabs>
                            <Text pt={15} pb={5} fw={850}>
                                What If I Change My Mind?:
                            </Text>
                            <Text fw={550} pb={5}>
                                Please note that this only applies to elective subject.
                                You MUST do all the mandatroy classes related to your degree, otherwise you will be unable to progress.
                            </Text>
                            <Text>
                                If you start a class and are not enjoying it, or it's not what you thought ti would be, that is completely fine.
                                You have the ability to change you choices in the first 2 weeks of teaching. 
                                Simply un-enrol from the class you do not want to take anymore, and enrol in the class you want to replace it with.
                                Since this can be in the first 2 weeks of teaching, there may be spacing issues with the classes.
                                If this is the case, contact your advisor of studies and/or the course co-ordinator for advice on what to do.
                            </Text>
                        </Card>
                    </GridCol>
                    <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                        <Card visibleFrom='sm'>
                            <Image src='/images/uofgSpire.jpg' alt='UofG Spire' />
                        </Card>  
                    </Grid.Col>
                </Grid>
            </>
    );
}

export default EnrolmentAdvice;