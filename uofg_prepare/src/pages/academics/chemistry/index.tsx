import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Tabs, rem } from "@mantine/core";
import { GiChemicalDrop, GiChemicalTank } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";

export const Chemistry = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
      <>
        <PageHeader
            heading="School of Chemistry"
        />
            <Stack>
            <Title order={1} size="h1">
                School of Chemistry
            </Title>
            <Text>
            As you prepare to enter your university life, and also to assist you throughout your entry year, this section aims to provide help with your academics. 
            Select the school you wish to look at, and find a range of study tool, tips, quizzes, and links to external useful academic resources.
            </Text>
            </Stack>
            {/* <Grid pt={20}>
                <Grid.Col span={{ base: 12, md: 10, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Chemistry 1"
                        cardText="Your hub for all things Level 1 Chemisrty."
                        imgSrc="/images/guu.jpeg"
                        imgAlt="UofG GUU"
                        link="/academics/chemistry/chemistry1"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                <SubSectionCard
                        cardTitle="Chemisrty 2X"
                        cardText="Molecules Matter: The Fundamentals"
                        imgSrc="/images/qmu.png"
                        imgAlt="UofG QMU"
                        link="/academics/chemistry/chemistry2x"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <SubSectionCard
                        cardTitle="Chemistry 2Y"
                        cardText="Chemistry of the Natural World"
                        imgSrc="/images/src.jpg"
                        imgAlt="UofG SRC"
                        link="/academics/chemistry/chemistry2y"
                    />
                </Grid.Col>
            </Grid> */}

            <Tabs defaultValue="gallery">
                <Tabs.List>
                    <Tabs.Tab value="gallery" leftSection={<GiChemicalDrop style={iconStyle} />}>
                    Chemistry 1
                    </Tabs.Tab>
                    <Tabs.Tab value="messages" leftSection={<GiChemicalTank style={iconStyle} />}>
                    Chemistry 2X
                    </Tabs.Tab>
                    <Tabs.Tab value="settings" leftSection={<SlChemistry style={iconStyle} />}>
                    Chemistry 2Y
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                <Stack>
                    <Text pt={10}>
                        Chemistry 1 is the level 1 (first year) course for Chemisrty. 
                        It runs over the full accadmic year (Semesters 1 & 2), where you will cover a wide range of essesntial modules to help you going forward in chemistry.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                    </Text>  
                <Title order={3} size="h3">
                    Semester 1
                </Title>  
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Elements and Atoms"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/elementsandatoms"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                    <SubSectionCard
                            cardTitle="Compounds and Molecules"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry1/compoundsandmolecules"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 1"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry1"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 2"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry2"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 3"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/organicchemistry3"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:2 }}>
                        <SubSectionCard
                            cardTitle="Attractions and Repulsions"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry1/attractionsandrepulsions"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack pt={10}>
                <Title order={3} size="h3">
                    Semester 2
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Data Analysis"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/dataanalysis"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                    <SubSectionCard
                            cardTitle="Chemical Energy Changes"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry1/chemicalenergychanges"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Chemical Kenetics"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/chemicalkenetics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Aqueous Equilibria and pH"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/aqueousequilibriaandph"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
                        <SubSectionCard
                            cardTitle="Transition Metals"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry1/transitionmetals"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:2 }}>
                        <SubSectionCard
                            cardTitle="Medicinal Chemistry"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry1/medicinalchemistry"
                        />
                    </Grid.Col>
                </Grid>
                </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                        <Stack pt={10}>
                        <Text>
                        Chemistry 2X is one of the two level 2 (second year) courses for Chemisrty. 
                        It runs over semester 1, where you will cover the fundamentals of molecular chemistry.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                        </Text>
                        <Grid>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Quantum Mechanics and Chemical Bonding"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/chemistry/chemistry2x/quantummechanicsandchemicalbonding"
                                />
                                <SubSectionCard
                                    cardTitle="Enols and Enolates"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/gusa.jpg"
                                    imgAlt="UofG GUSA"
                                    link="/academics/chemistry/chemistry2x/enolsandenolates"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                    cardTitle="Isomerism and Sterochemistry"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/qmu.png"
                                    imgAlt="UofG QMU"
                                    link="/academics/chemistry/chemistry2x/isomerismandsterochemistry"
                                />
                                <SubSectionCard
                                    cardTitle="Organometallic Chemistry"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/gusa.jpg"
                                    imgAlt="UofG GUSA"
                                    link="/academics/chemistry/chemistry2x/organometallicchemistry"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Main Group Chemistry"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/chemistry/chemistry2x/organicchemistry1"
                                />
                                <SubSectionCard
                                    cardTitle="Solids and Surfaces"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/gusa.jpg"
                                    imgAlt="UofG GUSA"
                                    link="/academics/chemistry/chemistry2x/solidsandsurfaces"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Principles of Spectroscopy"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/chemistry/chemistry2x/principlesofspectroscopy"
                                />
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                <Stack pt={10}>
                <Text>
                    Chemistry 2Y is one of the two level 2 (second year) courses for Chemisrty. 
                    It runs over semester 2, where you will cover the chemistry of the natural world.
                    Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                </Text>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Introduction to Spectroscopy "
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/introductiontospectroscopy"
                        />
                        <SubSectionCard
                            cardTitle="Organic Synthesis"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/organicsynthesis"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Co-ordination Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/qmu.png"
                            imgAlt="UofG QMU"
                            link="/academics/chemistry/chemistry2y/coordinationchemistry"
                        />
                        <SubSectionCard
                            cardTitle="Chemical Thermodynamics"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/chemicalthermodynamics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Aromatic Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/aromaticchemistry"
                        />
                        <SubSectionCard
                            cardTitle="Applied Organic Chemistry "
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/gusa.jpg"
                            imgAlt="UofG GUSA"
                            link="/academics/chemistry/chemistry2y/appliedorganicchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Solutions and Electrochemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/guu.jpeg"
                            imgAlt="UofG GUU"
                            link="/academics/chemistry/chemistry2y/solutionsandelectrochemistry"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default Chemistry;