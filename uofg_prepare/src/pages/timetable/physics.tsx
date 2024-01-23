import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, useMantineColorScheme, Tabs, rem } from "@mantine/core";
import { SiAtom } from "react-icons/si";
import { TbWaveSine } from "react-icons/tb";
import classes from "@/styles/Tabs.module.css";
import { Timetable } from "@/components/shared/Timetable";
import { timetableContent } from '@/types/TimetableContent';
import { tableKey } from '@/types/TableKey';

export const PhysicsTimetable = () => {
    const iconStyle = { width: rem(12), height: rem(12) };

    const phys2 = [
        {
            week: "string",
            monday: "string",
            tuesday: "string",
            wednesday: "string",
            thursday: "string",
            friday: "string",
            practical:"string",
        }
    ]
    const phys2Key = [
        {
            key: "OWL",
            name: "Optics, Waves & Lasers",
        }
    ]
    
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
                    <Timetable
                        thisData={...phys2}
                        dataKey={...phys2Key}
                    />
                </Tabs.Panel>

                <Tabs.Panel value="Physics 2">
                       
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default PhysicsTimetable;