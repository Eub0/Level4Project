import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, Tabs, rem } from "@mantine/core";
import { SiAtom } from "react-icons/si";
import { TbWaveSine } from "react-icons/tb";
import { PiNumberCircleOneBold, PiNumberCircleTwoBold } from "react-icons/pi";
import classes from "@/styles/Tabs.module.css";
import { Timetable } from "@/components/shared/Timetable";
import { timetableContent } from '@/types/TimetableContent';
import { tableKey } from "@/types/TableKey";

const phys1Sem1: timetableContent[] = [
    {
        week: "0",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "Introduction",
        practical:"",
    },
    {
        week: "1",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "TP",
        thursday: "D&R",
        friday: "",
        practical:"Diagnostics Test",
    },
    {
        week: "2",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"PCP Intro",
    },
    {
        week: "3",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"PCP DropIn",
    },
    {
        week: "4",
        monday: "OWL",
        tuesday: "D&R",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"PCP Presentations",
    },
    {
        week: "5",
        monday: "P2P",
        tuesday: "FoP1",
        wednesday: "",
        thursday: "P2P",
        friday: "CPT",
        practical:"Labs",
    },
    {
        week: "6",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"Labs",
    },
    {
        week: "7",
        monday: "OWL",
        tuesday: "",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"Labs",
    },
    {
        week: "8",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "TP",
        thursday: "D&R",
        friday: "D&R",
        practical:"Labs",
    },
    {
        week: "9",
        monday: "OWL",
        tuesday: "OWL",
        wednesday: "",
        thursday: "D&R",
        friday: "D&R",
        practical:"Labs",
    },
    {
        week: "10",
        monday: "P2P",
        tuesday: "FoP2",
        wednesday: "",
        thursday: "P2P",
        friday: "CPT",
        practical:"Labs",
    },
    {
        week: "11",
        monday: "OWL Tutorial",
        tuesday: "D&R Tutorial",
        wednesday: "OWL Tutorial",
        thursday: "D&R Tutorial",
        friday: "TP Tutorial",
        practical:"Nothing/Catch-Up",
    },
]

const phys1Sem1Keys = [
    {
        key: "CPT",
        name: "Check Point Tests - No lectures these days",
    },
    {
        key: "D&R",
        name: "Dynamics & Relativity",
    },
    {
        key: "FoP1",
        name: "Inverse design for integrated optics ",
    },
    {
        key: "FoP2",
        name: "Gravitational Waves",
    },
    {
        key: "OWL",
        name: "Optics, Waves & Lasers",
    },
    {
        key: "P2P",
        name: "Peer to Peer Tutorials",
    },
    {
        key: "TP",
        name: "Thermal Physics",
    },
]

const phys1Sem2: timetableContent[] = [
    {
        week: "1",
        monday: "EEM",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "TP",
        friday: "EEM",
        practical:"See Lab Guide",
    },
    {
        week: "2",
        monday: "EEM",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "TP",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "3",
        monday: "EEM",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "TP",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "4",
        monday: "EEM",
        tuesday: "QP",
        wednesday: "TP",
        thursday: "TP",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "5",
        monday: "P2P",
        tuesday: "FoP3",
        wednesday: "",
        thursday: "P2P",
        friday: "CPT",
        practical:"Labs",
    },
    {
        week: "6",
        monday: "TP",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "EEM",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "7",
        monday: "TP",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "EEM",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "8",
        monday: "TP",
        tuesday: "QP",
        wednesday: "QP",
        thursday: "EEM",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "9",
        monday: "OWL",
        tuesday: "QP",
        wednesday: "",
        thursday: "EEM",
        friday: "EEM",
        practical:"Labs",
    },
    {
        week: "10",
        monday: "P2P",
        tuesday: "",
        wednesday: "FoP4",
        thursday: "P2P",
        friday: "CPT",
        practical:"Labs",
    },
    {
        week: "11",
        monday: "TP Tutorial",
        tuesday: "QP Tutorial",
        wednesday: "QP Tutorial",
        thursday: "EEM Tutorial",
        friday: "EEM Tutorial",
        practical:"Nothing/Catch-Up",
    },
]

const phys1Sem2Keys = [
    {
        key: "CPT",
        name: "Check Point Tests - No lectures these days",
    },
    {
        key: "EEM",
        name: "Electricity, Electronics & Magnetism",
    },
    {
        key: "FoP3",
        name: "Science & Technology Studies",
    },
    {
        key: "FoP4",
        name: "The Hubble Tension",
    },
    {
        key: "P2P",
        name: "Peer to Peer Tutorials",
    },
    {
        key: "QP",
        name: "Quantum Phenomena",
    },
    {
        key: "TP",
        name: "Thermal Physics",
    },
]

const phys2Sem1: timetableContent[] = [
    {
        week: "0",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "Introduction",
        practical:"",
    },
    {
        week: "1",
        monday: "Python",
        tuesday: "TP",
        wednesday: "ND",
        thursday: "TP",
        friday: "ND",
        practical:"",
    },
    {
        week: "2",
        monday: "MT",
        tuesday: "",
        wednesday: "ND",
        thursday: "TP",
        friday: "MT",
        practical:"",
    },
    {
        week: "3",
        monday: "MT",
        tuesday: "TP",
        wednesday: "MT",
        thursday: "TP",
        friday: "ND",
        practical:"",
    },
    {
        week: "4",
        monday: "MT",
        tuesday: "TP",
        wednesday: "ND",
        thursday: "TP",
        friday: "ND",
        practical:"",
    },
    {
        week: "5",
        monday: "ND",
        tuesday: "TP",
        wednesday: "ND",
        thursday: "TP",
        friday: "ND",
        practical:"",
    },
    {
        week: "6",
        monday: "ND",
        tuesday: "P2P",
        wednesday: "TP",
        thursday: "TP",
        friday: "CT",
        practical:"",
    },
    {
        week: "7",
        monday: "OS",
        tuesday: "OS",
        wednesday: "OS",
        thursday: "EM",
        friday: "EM",
        practical:"",
    },
    {
        week: "8",
        monday: "OS",
        tuesday: "OS",
        wednesday: "EM",
        thursday: "EM",
        friday: "EM",
        practical:"",
    },
    {
        week: "9",
        monday: "OS",
        tuesday: "OS",
        wednesday: "EM",
        thursday: "EM",
        friday: "EM",
        practical:"",
    },
    {
        week: "10",
        monday: "OS",
        tuesday: "OS",
        wednesday: "RW",
        thursday: "EM",
        friday: "EM",
        practical:"",
    },
    {
        week: "11",
        monday: "OS",
        tuesday: "P2P",
        wednesday: "",
        thursday: "FC",
        friday: "CT",
        practical:"",
    },
]

const phys2Sem1Keys = [
    {
        key: "CT",
        name: "Class Test",
    },
    {
        key: "EM",
        name: "Electricity and Magnetism",
    },
    {
        key: "FC",
        name: "Full Class Tutorial",
    },
    {
        key: "MT",
        name: "Mathematical Techniques",
    },
    {
        key: "ND",
        name: "Newtonian Dynamics",
    },
    {
        key: "OS",
        name: "Oscillating Systems",
    },
    {
        key: "Python",
        name: "Introduction to Python",
    },
    {
        key: "P2P",
        name: "Peer to Peer Tutorials",
    },
    {
        key: "RW",
        name: "Research & Writing Skills",
    },
    {
        key: "TP",
        name: "Thermal Physics",
    },
]

const phys2Sem2: timetableContent[] = [
    {
        week: "1",
        monday: "PoS",
        tuesday: "NPP",
        wednesday: "PoS",
        thursday: "PoS",
        friday: "NPP",
        practical:"",
    },
    {
        week: "2",
        monday: "PoS",
        tuesday: "NPP",
        wednesday: "PoS",
        thursday: "PoS",
        friday: "NPP",
        practical:"",
    },
    {
        week: "3",
        monday: "PoS",
        tuesday: "NPP",
        wednesday: "NPP",
        thursday: "P2P",
        friday: "NPP",
        practical:"",
    },
    {
        week: "4",
        monday: "PoS",
        tuesday: "NPP",
        wednesday: "PoS",
        thursday: "PoS",
        friday: "NPP",
        practical:"",
    },
    {
        week: "5",
        monday: "",
        tuesday: "NPP",
        wednesday: "",
        thursday: "OPT",
        friday: "OPT",
        practical:"",
    },
    {
        week: "6",
        monday: "P2P",
        tuesday: "FC",
        wednesday: "",
        thursday: "",
        friday: "CT",
        practical:"",
    },
    {
        week: "7",
        monday: "CQW",
        tuesday: "CQW",
        wednesday: "CQW",
        thursday: "OPT",
        friday: "OPT",
        practical:"",
    },
    {
        week: "8",
        monday: "CQW",
        tuesday: "CQW",
        wednesday: "CQW",
        thursday: "OPT",
        friday: "OPT",
        practical:"",
    },
    {
        week: "9",
        monday: "CQW",
        tuesday: "CQW",
        wednesday: "OPT",
        thursday: "OPT",
        friday: "OPT",
        practical:"",
    },
    {
        week: "10",
        monday: "CQW",
        tuesday: "CQW",
        wednesday: "P3 Intro",
        thursday: "",
        friday: "OPT",
        practical:"",
    },
    {
        week: "11",
        monday: "P2P",
        tuesday: "FC",
        wednesday: "",
        thursday: "",
        friday: "CT",
        practical:"",
    },
]

const phys2Sem2Keys = [
    {
        key: "CT",
        name: "Class Test",
    },
    {
        key: "CQW",
        name: "Classical & Quantum Waves",
    },
    {
        key: "FC",
        name: "Full Class Tutorial",
    },
    {
        key: "ND",
        name: "Newtonian Dynamics",
    },
    {
        key: "NNP",
        name: "Nuclear & Particle Physics",
    },
    {
        key: "OPT",
        name: "Optics",
    },
    {
        key: "PoS",
        name: "Physics of Solids",
    },
    {
        key: "P2P",
        name: "Peer to Peer Tutorials",
    },
    {
        key: "P3 Intor",
        name: "Physics 3 Introduction",
    },
]


export const PhysicsTimetable = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
      <>
        <PageHeader
            heading="School of Physics"
        />
            <Stack>
                <Title order={1} size="h1">
                    Timetable
                </Title>
                <Text>
                    Creating a good timetable is important when it comes to university. 
                    Time management is (almost) everything. 
                    You should aim to create a good balance of academics and extracurriculars. 
                    This section gives advice on time management, class selection, and how to create/upload your timetable.
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
                    <Tabs variant="unstyled" defaultValue="Semester 1" classNames={classes} pt={15}>
                    <Tabs.List grow>
                        <Tabs.Tab value="Semester 1" leftSection={<PiNumberCircleOneBold style={iconStyle} />}>
                        Semester 1
                        </Tabs.Tab>
                        <Tabs.Tab value="Semester 2" leftSection={<PiNumberCircleTwoBold style={iconStyle} />}>
                        Semester 2
                        </Tabs.Tab>
                    </Tabs.List>
                        <Tabs.Panel value="Semester 1">
                            <Timetable data={phys1Sem1} keyData={phys1Sem1Keys} />
                        </Tabs.Panel>
                        <Tabs.Panel value="Semester 2">
                            <Timetable data={phys1Sem2} keyData={phys1Sem2Keys} />
                        </Tabs.Panel>
                   </Tabs> 
                </Tabs.Panel>

                <Tabs.Panel value="Physics 2">
                <Tabs variant="unstyled" defaultValue="Semester 1" classNames={classes} pt={15}>
                    <Tabs.List grow>
                        <Tabs.Tab value="Semester 1" leftSection={<PiNumberCircleOneBold style={iconStyle} />}>
                        Semester 1
                        </Tabs.Tab>
                        <Tabs.Tab value="Semester 2" leftSection={<PiNumberCircleTwoBold style={iconStyle} />}>
                        Semester 2
                        </Tabs.Tab>
                    </Tabs.List>
                        <Tabs.Panel value="Semester 1">
                            <Timetable data={phys2Sem1} keyData={phys2Sem1Keys} />
                        </Tabs.Panel>
                        <Tabs.Panel value="Semester 2">
                            <Timetable data={phys2Sem2} keyData={phys2Sem2Keys} />
                        </Tabs.Panel>
                   </Tabs> 
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default PhysicsTimetable;