import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Tabs, rem } from "@mantine/core";
import { GrGroup } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import classes from '@/styles/Tabs.module.css';

export const Extracurriculars = () => {
    const iconStyle = { width: rem(12), height: rem(12) };
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
            <Tabs defaultValue="Student Bodies" variant="unstyled" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="Student Bodies" leftSection={<PiStudent style={iconStyle} />}>
                    Student Bodies
                    </Tabs.Tab>
                    <Tabs.Tab value="Societies and Groups" leftSection={<GrGroup style={iconStyle} />}>
                    Societies and Groups
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="Student Bodies">
                    <Grid pt={15}>
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
                </Tabs.Panel>
                <Tabs.Panel value="Societies and Groups">
                    <Grid pt={15}>
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
                </Tabs.Panel>
            </Tabs> 
        </>
    );
}

export default Extracurriculars;