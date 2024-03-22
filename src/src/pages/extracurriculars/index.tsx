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
                                imgSrc="/images/extracurriculars/studentBodies/guu.png"
                                imgAlt="UofG GUU"
                                link="https://www.guu.co.uk/"
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                                cardTitle="Queen Maragret Union (QMU)"
                                cardText="One of the two student unions on campus."
                                imgSrc="/images/extracurriculars/studentBodies/qmu.png"
                                imgAlt="UofG QMU"
                                link="https://www.qmunion.org.uk/"
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                cardTitle="Student Representative Council (SRC)"
                                cardText="The University's Student Representative Council."
                                imgSrc="/images/extracurriculars/studentBodies/src.png"
                                imgAlt="UofG SRC"
                                link="https://www.glasgowunisrc.org/"
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                                cardTitle="Glasgow University Sports Association (GUSA)"
                                cardText="The University's Sports Association."
                                imgSrc="/images/extracurriculars/studentBodies/gusa.png"
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
                                        cardTitle="Women in STEM Society (WiSTEM)"
                                        cardText="Instagram: @wistemglasgow"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/wistem.jpg"
                                        imgAlt="WiSTEM Glasgow"
                                        link="https://wistemglasgow.wordpress.com/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="UofG Alchemists"
                                        cardText="Instagram: @uniofgalchemistsociety"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/alchemists.png"
                                        imgAlt="UofG Alchemists"
                                        link="https://www.uofgalchemists.com/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="UofG Physics Society (Physoc)"
                                        cardText="Instagram: @guphysoc"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/physoc.png"
                                        imgAlt="UofG Physics Society"
                                        link="https://www.guphysoc.info/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="GU Technology Society (GUTS)"
                                        cardText="Instagram: @gutechsoc"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/GUTS_Banner.png"
                                        imgAlt="GU Technology Society"
                                        link="https://www.gla.ac.uk/schools/computing/undergraduate/studentsociety/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="GU Atronomy Society (Astrosoc)"
                                        cardText="Instagram: @uog_astrosoc"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/astronony.jpg"
                                        imgAlt="GU Astronomy Society"
                                        link="https://astrosocgla.wordpress.com/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="The Royal Society of Chemistry"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/rsoc.jpeg"
                                        imgAlt="The Royal Society of Chemistry"
                                        link="https://www.rsc.org/"
                                    />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                        cardTitle="Institute of Physics"
                                        imgSrc="/images/extracurriculars/societiesAndGroups/iop.jpg"
                                        imgAlt="Institute of Physics"
                                        link="https://www.iop.org/"
                                    />
                        </Grid.Col>
                    </Grid>
                </Tabs.Panel>
            </Tabs> 
        </>
    );
}

export default Extracurriculars;