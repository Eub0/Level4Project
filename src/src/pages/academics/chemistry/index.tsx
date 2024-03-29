import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Tabs, rem } from "@mantine/core";
import { GiChemicalDrop, GiChemicalTank } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import classes from '@/styles/Tabs.module.css';

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
                Select from level 1 (Chemistry 1) and level 2 (Chemistry 2X, Chemistry 2Y) courses, and discover what modules are covered and how you can prepare for them.
            </Text>
            </Stack>

            <Tabs variant="unstyled" defaultValue="Chemistry 1" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="Chemistry 1" leftSection={<GiChemicalDrop style={iconStyle} />}>
                    Chemistry 1
                    </Tabs.Tab>
                    <Tabs.Tab value="Chemistry 2X" leftSection={<GiChemicalTank style={iconStyle} />}>
                    Chemistry 2X
                    </Tabs.Tab>
                    <Tabs.Tab value="Chemistry 2Y" leftSection={<SlChemistry style={iconStyle} />}>
                    Chemistry 2Y
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Chemistry 1">
                <Stack>
                    <Text pt={10}>
                        Chemistry 1 is the level 1 (first year) course for Chemisrty. 
                        It runs over the full accadmic year (Semesters 1 & 2), where you will cover a wide range of essesntial modules to help you going forward in chemistry.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                    </Text>  
                <Title order={3} size="h3">
                    Semester 1 Modules
                </Title>  
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Elements and Atoms"
                            imgSrc="/images/chemistry/chemistry1/elementsAndAtoms.jpg"
                            imgAlt="Elements and Atoms"
                            link="/academics/chemistry/chemistry1/elementsandatoms"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Compounds and Molecules"
                            imgSrc="/images/chemistry/chemistry1/compoundsAndMolecules.jpg"
                            imgAlt="Compounds and Molecules"
                            link="/academics/chemistry/chemistry1/compoundsandmolecules"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 1"
                            imgSrc="/images/chemistry/chemistry1/organicChemistry.jpg"
                            imgAlt="Organic Chemistry"
                            link="/academics/chemistry/chemistry1/organicchemistry1"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 2"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/chemistry/chemistry1/organicChemistry.jpg"
                            imgAlt="Organic Chemistry"
                            link="/academics/chemistry/chemistry1/organicchemistry2"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Organic Chemistry 3"
                            imgSrc="/images/chemistry/chemistry1/organicChemistry.jpg"
                            imgAlt="Organic Chemistry"
                            link="/academics/chemistry/chemistry1/organicchemistry3"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:3 }}>
                        <SubSectionCard
                            cardTitle="Attractions and Repulsions"
                            imgSrc="/images/chemistry/chemistry1/attractionsAndRepulsions.jpg"
                            imgAlt="Attractions and Repulsions"
                            link="/academics/chemistry/chemistry1/attractionsandrepulsions"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack pt={10}>
                <Title order={3} size="h3">
                    Semester 2 Modules
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Data Analysis"
                            imgSrc="/images/chemistry/chemistry1/dataAnalysis.jpg"
                            imgAlt="Data Analysis"
                            link="/academics/chemistry/chemistry1/dataanalysis"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Chemical Energy Changes"
                            imgSrc="/images/chemistry/chemistry1/chemicalEnergyChanges.jpg"
                            imgAlt="Chemical Energy Changes"
                            link="/academics/chemistry/chemistry1/chemicalenergychanges"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Chemical Kenetics"
                            imgSrc="/images/chemistry/chemistry1/chemicalKenetics.jpg"
                            imgAlt="Chemical Kenetics"
                            link="/academics/chemistry/chemistry1/chemicalkenetics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Aqueous Equilibria and pH"
                            imgSrc="/images/chemistry/chemistry1/aqueousEquilibriaAndPH.jpg"
                            imgAlt="Aqueous Equilibria and pH"
                            link="/academics/chemistry/chemistry1/aqueousequilibriaandph"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Transition Metals"
                            imgSrc="/images/chemistry/chemistry1/transitionMetals.jpg"
                            imgAlt="Transition Metals"
                            link="/academics/chemistry/chemistry1/transitionmetals"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg:3 }}>
                        <SubSectionCard
                            cardTitle="Macromolecules"
                            imgSrc="/images/chemistry/chemistry1/medicinalChemistry.jpg"
                            imgAlt="Macromolecules Chemistry"
                            link="/academics/chemistry/chemistry1/medicinalchemistry"
                        />
                    </Grid.Col>
                </Grid>
                </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="Chemistry 2X">
                        <Stack pt={10}>
                        <Text>
                        Chemistry 2X is one of the two level 2 (second year) courses for Chemisrty. 
                        It runs over the full accadmic year (Semesters 1 & 2), where you will cover the fundamentals of molecular chemistry.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                        </Text>
                        <Title order={3} size="h3">
                            Modules
                        </Title>
                        <Grid>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Quantum Mechanics and Chemical Bonding"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/chemistry/chemistry2x/quantumMechanicsAndChemicalBonding.jpg"
                                    imgAlt="Quantum Mechanics and Chemical Bonding"
                                    link="/academics/chemistry/chemistry2x/quantummechanicsandchemicalbonding"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                    cardTitle="Isomerism and Sterochemistry"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/chemistry/chemistry2x/isomerismAndSterochemistry.jpg"
                                    imgAlt="Isomerism and Sterochemistry"
                                    link="/academics/chemistry/chemistry2x/isomerismandsterochemistry"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                            <SubSectionCard
                                    cardTitle="Organometallic Chemistry"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/chemistry/chemistry2x/organometallicChemistry.jpg"
                                    imgAlt="Organometallic Chemistry"
                                    link="/academics/chemistry/chemistry2x/organometallicchemistry"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Main Group Chemistry"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/chemistry/chemistry2x/mainGroupChemistry.png"
                                    imgAlt="Main Group Chemistry"
                                    link="/academics/chemistry/chemistry2x/maingroupchemistry"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Enols and Enolates"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/chemistry/chemistry2x/enolsAndEnolates.jpg"
                                    imgAlt="Enols and Enolates"
                                    link="/academics/chemistry/chemistry2x/enolsandenolates"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Solids and Surfaces"
                                    cardText="The Sports Council of the University of Glasgow."
                                    imgSrc="/images/chemistry/chemistry2x/solidsAndSurfaces.jpg"
                                    imgAlt="Solids and Surfaces"
                                    link="/academics/chemistry/chemistry2x/solidsandsurfaces"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Principles of Spectroscopy"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/chemistry/chemistry2x/principlesOfSpectroscopy.jpg"
                                    imgAlt="Principles of Spectroscopy"
                                    link="/academics/chemistry/chemistry2x/principlesofspectroscopy"
                                />
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="Chemistry 2Y">
                <Stack pt={10}>
                <Text>
                    Chemistry 2Y is one of the two level 2 (second year) courses for Chemisrty. 
                    It runs over the full accadmic year (Semesters 1 & 2), where you will cover the chemistry of the natural world.
                    Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                </Text>
                <Title order={3} size="h3">
                    Modules
                </Title>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Introduction to Spectroscopy"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/chemistry/chemistry2y/introductionToSpectroscopy.png"
                            imgAlt="Introduction to Spectroscopy"
                            link="/academics/chemistry/chemistry2y/introductiontospectroscopy"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Organic Synthesis"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/chemistry/chemistry2y/organicSynthesis.jpg"
                            imgAlt="Organic Synthesis"
                            link="/academics/chemistry/chemistry2y/organicsynthesis"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Co-ordination Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/chemistry/chemistry2y/coordinationChemistry.png"
                            imgAlt="Co-ordination Chemistry"
                            link="/academics/chemistry/chemistry2y/coordinationchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Chemical Thermodynamics"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/chemistry/chemistry2y/chemicalThermodynamics.jpeg"
                            imgAlt="Chemical Thermodynamics"
                            link="/academics/chemistry/chemistry2y/chemicalthermodynamics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Aromatic Chemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/chemistry/chemistry2y/aromaticChemistry.jpeg"
                            imgAlt="Aromatic Chemistry"
                            link="/academics/chemistry/chemistry2y/aromaticchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Applied Organic Chemistry"
                            cardText="The Sports Council of the University of Glasgow."
                            imgSrc="/images/chemistry/chemistry2y/appliedOrganicChemistry.jpeg"
                            imgAlt="Applied Organic Chemistry"
                            link="/academics/chemistry/chemistry2y/appliedorganicchemistry"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Solutions and Electrochemistry"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/chemistry/chemistry2y/solutionsAndElectrochemistry.png"
                            imgAlt="Solutions and Electrochemistry"
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