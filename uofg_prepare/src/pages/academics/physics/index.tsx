import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Tabs, rem } from "@mantine/core";
import { TbWaveSine } from "react-icons/tb";
import { SiAtom } from "react-icons/si";
import classes from '@/styles/Tabs.module.css';

export const Physics = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
      <>
        <PageHeader
            heading="School of Physics"
        />
            <Stack>
            <Title order={1} size="h1">
                School of Physics
            </Title>
            <Text>
                Select from level 1 (Physics 1) and level 2 (Physics 2) courses, and discover what modules are covered and how you can prepare for them.
            </Text>
            </Stack>

            <Tabs variant="unstyled" defaultValue="Physics 1" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="Physics 1" leftSection={<SiAtom style={iconStyle} />}>
                    Physics 1
                    </Tabs.Tab>
                    <Tabs.Tab value="Physics 2" leftSection={<TbWaveSine style={iconStyle} />}>
                    Physics 2
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Physics 1">
                <Stack>
                    <Text pt={10}>
                        Physics 1 is the level 1 (first year) course for Physics. 
                        It runs over the full accadmic year (Semesters 1 & 2), where you will cover a wide range of essesntial modules to help you going forward in physics.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                    </Text>  
                <Title order={3} size="h3">
                    Modules
                </Title>  
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Optics, Waves, & Lasers"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/physics/physics1/opticsWavesAndLasers.jpg"
                            imgAlt="Optics, Waves, & Lasers"
                            link="/academics/physics/physics1/opticswavesandlasers"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <SubSectionCard
                            cardTitle="Dynamics & Relativity"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/physics/physics1/dynamicsAndRelativity.jpg"
                            imgAlt="Dynamics & Relativity"
                            link="/academics/physics/physics1/dynamicsandrelativity"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Thermal Physics"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/physics/physics1/thermalPhysics.jpg"
                            imgAlt="Thermal Physics"
                            link="/academics/physics/physics1/thermalphysics"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Electricity, Electronics & Magnetism"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/physics/physics1/electricityElectronicsAndMagnetism.jpeg"
                            imgAlt="Electricity, Electronics & Magnetism"
                            link="/academics/physics/physics1/electricityelectronicsandmagnetism"
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <SubSectionCard
                            cardTitle="Quantum Phenomena"
                            cardText="One of the two student unions on campus."
                            imgSrc="/images/physics/physics1/quantumPhenomena.jpg"
                            imgAlt="Quantum Phenomena"
                            link="/academics/physics/physics1/quantumphenomena"
                        />
                    </Grid.Col>
                </Grid>
                </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="Physics 2">
                        <Stack pt={10}>
                        <Text>
                        Physics 2 is the level 2 (second year) courses for Physics. 
                        It runs over the full accadmic year (Semesters 1 & 2), where you will cover a wide range of essesntial modules to help you going forward in physics.
                        Click on the module pannles bellow to find more about what is covered in each, so that you can prepare yourself for begining.
                        </Text>
                        <Title order={3} size="h3">
                            Modules
                        </Title>
                        <Grid>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Mathematical Techniques"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/physics/physics2/mathtech.jpg"
                                    imgAlt="Mathematical Techniques"
                                    link="/academics/physics/physics2/mathematicaltechniques"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Oscillating Systems"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/oscillatingsystems"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Thermal Physics"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/thermalphysics"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Newtonian Dynamics"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/newtoniandynamics"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Electricity & Magnetism"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/electricityandmagnetism"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Physics of Solids"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/physicsofsolids"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Nuclear & Particle Physics"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/nuclearandparticlephysics"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Optics"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/optics"
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                                <SubSectionCard
                                    cardTitle="Classical & Quantum Waves"
                                    cardText="One of the two student unions on campus."
                                    imgSrc="/images/guu.jpeg"
                                    imgAlt="UofG GUU"
                                    link="/academics/physics/physics2/classicalandquantumwaves"
                                />
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default Physics;