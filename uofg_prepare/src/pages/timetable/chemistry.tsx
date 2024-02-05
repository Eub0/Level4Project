import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, Tabs, rem } from "@mantine/core";
import { GiChemicalDrop, GiChemicalTank } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";
import { TbSchema } from "react-icons/tb";
import { PiNumberCircleOneBold, PiNumberCircleTwoBold } from "react-icons/pi";
import classes from "@/styles/Tabs.module.css";
import { Timetable } from "@/components/shared/Timetable";
import { timetableContent } from '@/types/TimetableContent';

const chem1Sem1: timetableContent[] = [
    {
        week: "0",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "Introduction",
        friday: "",
        practical:"",
    },
    {
        week: "1",
        monday: "E&A",
        tuesday: "E&A",
        wednesday: "E&A",
        thursday: "",
        friday: "E&A",
        practical:"",
    },
    {
        week: "2",
        monday: "E&A",
        tuesday: "E&A",
        wednesday: "LAB",
        thursday: "PS-E&A",
        friday: "C&M",
        practical:"",
    },
    {
        week: "3",
        monday: "C&M",
        tuesday: "C&M",
        wednesday: "C&M",
        thursday: "",
        friday: "C&M",
        practical:"S",
    },
    {
        week: "4",
        monday: "C&M",
        tuesday: "PS-C&M",
        wednesday: "OC1",
        thursday: "",
        friday: "OC1",
        practical:"S",
    },
    {
        week: "5",
        monday: "OC1",
        tuesday: "OC1",
        wednesday: "OC1",
        thursday: "RT",
        friday: "T",
        practical:"S",
    },
    {
        week: "6",
        monday: "OC1",
        tuesday: "PS-OC1",
        wednesday: "OC2",
        thursday: "RT",
        friday: "OC2",
        practical:"S",
    },
    {
        week: "7",
        monday: "OC2",
        tuesday: "OC2",
        wednesday: "OC2",
        thursday: "",
        friday: "OC2",
        practical:"S",
    },
    {
        week: "8",
        monday: "PS-OC2",
        tuesday: "OC3",
        wednesday: "OC3",
        thursday: "OC3",
        friday: "OC3",
        practical:"S",
    },
    {
        week: "9",
        monday: "OC3",
        tuesday: "OC3",
        wednesday: "PS-OC3",
        thursday: "RT",
        friday: "T",
        practical:"S",
    },
    {
        week: "10",
        monday: "A&R",
        tuesday: "A&R",
        wednesday: "A&R",
        thursday: "",
        friday: "A&R",
        practical:"S",
    },
    {
        week: "11",
        monday: "A&R",
        tuesday: "A&R",
        wednesday: "A&R",
        thursday: "",
        friday: "PS-A&R",
        practical:"",
    },
]

const chem1Sem1Keys = [
    {
        key: "A&R",
        name: "Attractions and Repulsions",
    },
    {
        key: "C&M",
        name: "Compounds and Molecules",
    },
    {
        key: "E&A",
        name: "Elements and Atoms",
    },
    {
        key: "LAB",
        name: "Labratory Introduction",
    },
    {
        key: "OC1",
        name: "Organic Chemistry 1",
    },
    {
        key: "OC2",
        name: "Organic Chemistry 2",
    },
    {
        key: "OC3",
        name: "Organic Chemistry 3",
    },
    {
        key: "PS-xxx",
        name: "Problem Session (Module Tutorial)",
    },
    {
        key: "RT",
        name: "Revision Tutorial",
    },
    {
        key: "S",
        name: "Synthesis-1 Laboratory",
    },
    {
        key: "T",
        name: "Class Test",
    },
]

const chem1Sem2: timetableContent[] = [
    {
        week: "1",
        monday: "DA",
        tuesday: "DA",
        wednesday: "LAB",
        thursday: "CE",
        friday: "CE",
        practical:"",
    },
    {
        week: "2",
        monday: "CE",
        tuesday: "CE",
        wednesday: "CE",
        thursday: "CE",
        friday: "CE",
        practical:"Q",
    },
    {
        week: "3",
        monday: "PS-CE",
        tuesday: "CK",
        wednesday: "CK",
        thursday: "CK",
        friday: "",
        practical:"Q",
    },
    {
        week: "4",
        monday: "CK",
        tuesday: "CK",
        wednesday: "CK",
        thursday: "PS-CK",
        friday: "",
        practical:"Q",
    },
    {
        week: "5",
        monday: "EQU",
        tuesday: "EQU",
        wednesday: "EQU",
        thursday: "RT",
        friday: "T",
        practical:"Q",
    },
    {
        week: "6",
        monday: "EQU",
        tuesday: "EQU",
        wednesday: "EQU",
        thursday: "RT",
        friday: "",
        practical:"Q",
    },
    {
        week: "7",
        monday: "PS-EQU",
        tuesday: "TM",
        wednesday: "TM",
        thursday: "TM",
        friday: "",
        practical:"Q",
    },
    {
        week: "8",
        monday: "TM",
        tuesday: "TM",
        wednesday: "TM",
        thursday: "PS-TM",
        friday: "",
        practical:"Q",
    },
    {
        week: "9",
        monday: "",
        tuesday: "MM",
        wednesday: "MM",
        thursday: "RT",
        friday: "T",
        practical:"Q",
    },
    {
        week: "10",
        monday: "INF",
        tuesday: "MM",
        wednesday: "MM",
        thursday: "MM",
        friday: "RT",
        practical:"",
    },
    {
        week: "11",
        monday: "",
        tuesday: "MM",
        wednesday: "MM",
        thursday: "PS-MM",
        friday: "",
        practical:"",
    }
]

const chem1Sem2Keys = [
    {
        key: "CE",
        name: "Chemical Energy Changes",
    },
    {
        key: "CK",
        name: "Chemical Kinetics",
    },
    {
        key: "DA",
        name: "Data Analysis",
    },
    {
        key: "EQU",
        name: "Aqueous Equilibria & pH",
    },
    {
        key: "LAB",
        name: "Labratory Introduction",
    },
    {
        key: "MM",
        name: "Macromolecules",
    },
    {
        key: "PS-xxx",
        name: "Problem Session (Module Tutorial)",
    },
    {
        key: "Q",
        name: "Quantitative-1 Laboratory",
    },
    {
        key: "RT",
        name: "Revision Tutorial",
    },
    {
        key: "T",
        name: "Class Test",
    },
    {
        key: "TM",
        name: "Transition Metals",
    },
]

const chem2Sem1: timetableContent[] = [
    {
        week: "0",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        practical:"",
    },
    {
        week: "1",
        monday: "Introduction",
        tuesday: "X1",
        wednesday: "Y1",
        thursday: "X1",
        friday: "Y1",
        practical:"",
    },
    {
        week: "2",
        monday: "X1",
        tuesday: "X1",
        wednesday: "Y1",
        thursday: "X1",
        friday: "Q-Lab Introduction",
        practical:"",
    },
    {
        week: "3",
        monday: "X1, Q",
        tuesday: "X1, Q",
        wednesday: "Y1, Q",
        thursday: "X2, Q",
        friday: "Y1, Q",
        practical:"M4C-1",
    },
    {
        week: "4",
        monday: "X2, Q",
        tuesday: "X2, Q",
        wednesday: "Y1, Q",
        thursday: "X2, Q",
        friday: "Y1, Q",
        practical:"M4C-2, X1(P)",
    },
    {
        week: "5",
        monday: "X2, Q",
        tuesday: "X2, Q",
        wednesday: "Y2, Q",
        thursday: "X2, Q",
        friday: "Y2, Q",
        practical:"M4C-3, Y1(P)",
    },
    {
        week: "6",
        monday: "X3, ITU",
        tuesday: "X3, ITU",
        wednesday: "Y2, ITU",
        thursday: "X3, ITU",
        friday: "Y2, ITU",
        practical:"M4C-4",
    },
    {
        week: "7",
        monday: "X3, Q",
        tuesday: "X4, Q",
        wednesday: "Y2, Q",
        thursday: "X4, Q",
        friday: "Y2, Q",
        practical:"M4C-5, X2(O)",
    },
    {
        week: "8",
        monday: "X3, Q",
        tuesday: "X3, Q",
        wednesday: "Y2, Q",
        thursday: "X3, Q",
        friday: "Y3, Q",
        practical:"M4C-6",
    },
    {
        week: "9",
        monday: "Y3, Q",
        tuesday: "X4, Q",
        wednesday: "Y3, Q",
        thursday: "X4, Q",
        friday: "Y3, Q",
        practical:"M4C-7, Y2(I)",
    },
    {
        week: "10",
        monday: "Y3, Q",
        tuesday: "X4, Q",
        wednesday: "Y3, Q",
        thursday: "X4, Q",
        friday: "Y3, Q",
        practical:"X3(I)",
    },
    {
        week: "11",
        monday: "Y4",
        tuesday: "X4",
        wednesday: "Y4",
        thursday: "",
        friday: "",
        practical:"",
    },
]

const chem2Sem1Keys = [
    {
        key: "ITU",
        name: "",
    },
    {
        key: "M4C",
        name: "Maths for Chemistry",
    },
    {
        key: "Q",
        name: "",
    },
    {
        key: "X1",
        name: "Quantum Mechanics & Chemical Bonding",
    },
    {
        key: "X2",
        name: "Isomerism & Stereochemistry",
    },
    {
        key: "X3",
        name: "Main Group Chemistry",
    },
    {
        key: "X4",
        name: "Principles of Spectroscopy",
    },
    {
        key: "Y1",
        name: "Introduction to Spectroscopy",
    },
    {
        key: "Y2",
        name: "Co-ordination Chemistry",
    },
    {
        key: "Y3",
        name: "Aromatic Chemistry",
    },
    {
        key: "Y4",
        name: "Solutions & Elcetrochemistry",
    },
]

const chem2Sem2: timetableContent[] = [
    {
        week: "1",
        monday: "Y4",
        tuesday: "X5",
        wednesday: "S-Lab Introduction",
        thursday: "X5",
        friday: "Y4",
        practical:"",
    },
    {
        week: "2",
        monday: "Y4, S",
        tuesday: "X5, S",
        wednesday: "Y4, S",
        thursday: "X5, S",
        friday: "Y4, S",
        practical:"X4(P)",
    },
    {
        week: "3",
        monday: "Y4, S",
        tuesday: "X5, S",
        wednesday: "Y5, S",
        thursday: "X5, S",
        friday: "Y5, S",
        practical:"Y4(P)",
    },
    {
        week: "4",
        monday: "Y5, S",
        tuesday: "X5, S",
        wednesday: "Y5, S",
        thursday: "X6, S",
        friday: "Y5, S",
        practical:"",
    },
    {
        week: "5",
        monday: "Y5, S",
        tuesday: "X6, S",
        wednesday: "Y6, S",
        thursday: "S",
        friday: "Y6, S",
        practical:"X5(O)",
    },
    {
        week: "6",
        monday: "Y6, S",
        tuesday: "X6, S",
        wednesday: "Y6, S",
        thursday: "X6, S",
        friday: "Y6, S",
        practical:"Y5(O)",
    },
    {
        week: "7",
        monday: "Y6, ITU",
        tuesday: "X6, ITU",
        wednesday: "Y6, ITU",
        thursday: "ITU",
        friday: "X6, ITU",
        practical:"",
    },
    {
        week: "8",
        monday: "X7, S",
        tuesday: "X7, S",
        wednesday: "Y7, S",
        thursday: "X7, S",
        friday: "Y7, S",
        practical:"Y6(P)",
    },
    {
        week: "9",
        monday: "X7, S",
        tuesday: "X7, S",
        wednesday: "Y7, S",
        thursday: "X7, S",
        friday: "Y7, S",
        practical:"X6(I)",
    },
    {
        week: "10",
        monday: "CT-2Y, S",
        tuesday: "X7, S",
        wednesday: "Y7, S",
        thursday: "Careers",
        friday: "Y7, S",
        practical:"",
    },
    {
        week: "11",
        monday: "CT-2X",
        tuesday: "",
        wednesday: "Y7",
        thursday: "X6",
        friday: "",
        practical:"X7(I), Y7(I)",
    },
]

const chem2Sem2Keys = [
    {
        key: "CT-xx",
        name: "Class Test",
    },
    {
        key: "ITU",
        name: "",
    },
    {
        key: "S",
        name: "",
    },
    {
        key: "X5",
        name: "Enols & Enolates",
    },
    {
        key: "X6",
        name: "Organometallic Chemistry",
    },
    {
        key: "X7",
        name: "Solids & Surfaces",
    },
    {
        key: "Y4",
        name: "Solutions & Elcetrochemistry",
    },
    {
        key: "Y5",
        name: "Organic Synthesis",
    },
    {
        key: "Y6",
        name: "Chemical Thermodynamics",
    },
    {
        key: "Y7",
        name: "Applied Organic Chemistry",
    },
]


export const ChemistryTimetable = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    return (
      <>
        <PageHeader
            heading="School of Chemistry"
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
            <Tabs variant="unstyled" defaultValue="Chemistry 1" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="Chemistry 1" leftSection={<GiChemicalDrop style={iconStyle} />}>
                    Chemistry 1
                    </Tabs.Tab>
                    <Tabs.Tab value="Chemistry 2" leftSection={<SlChemistry style={iconStyle} />}>
                    Chemistry 2
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Chemistry 1">
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
                            <Timetable data={chem1Sem1} keyData={chem1Sem1Keys} />
                        </Tabs.Panel>
                        <Tabs.Panel value="Semester 2">
                            <Timetable data={chem1Sem2} keyData={chem1Sem2Keys} />
                        </Tabs.Panel>
                   </Tabs> 
                </Tabs.Panel>

                <Tabs.Panel value="Chemistry 2">
                <Tabs variant="unstyled" defaultValue="Chemistry 2X" classNames={classes} pt={15}>
                    <Tabs.List grow>
                        <Tabs.Tab value="Chemistry 2X" leftSection={<PiNumberCircleOneBold style={iconStyle} />}>
                        Semester 1
                        </Tabs.Tab>
                        <Tabs.Tab value="Chemistry 2Y" leftSection={<PiNumberCircleTwoBold style={iconStyle} />}>
                        Semester 2
                        </Tabs.Tab>
                    </Tabs.List>
                        <Tabs.Panel value="Chemistry 2X">
                        <Timetable data={chem2Sem1} keyData={chem2Sem1Keys} />
                        </Tabs.Panel>
                        <Tabs.Panel value="Chemistry 2Y">
                        <Timetable data={chem2Sem2} keyData={chem2Sem2Keys} />
                        </Tabs.Panel>
                   </Tabs> 
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default ChemistryTimetable;