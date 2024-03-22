import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Tabs, rem, Input, CloseButton } from "@mantine/core";
import React, { useState } from "react";
import { IoPersonOutline, IoSchoolOutline,IoHomeOutline } from "react-icons/io5";
import classes from "@/styles/Tabs.module.css";
import { ToDoList } from "@/components/layout/ToDoList";
import { UserToDoList } from "@/components/layout/UserToDoList";
import useGuestHook from "@/hooks/guestProvider";

export const ToDo = () => {

    const iconStyle = { width: rem(12), height: rem(12) };
    const {isGuest} = useGuestHook()
    
    return (
      <>
        <PageHeader
            heading="To-Do"
        />
            <Stack>
                <Title order={1} size="h1">
                    To-Do
                </Title>
                <Text>
                    There is a lot to be done before you begin your university journey.
                    To make things easier, we have put together some lists of things you should do before you start, and in your first week.
                </Text>
            </Stack>
            <Tabs defaultValue="Pre-University" variant="unstyled" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="Pre-University" leftSection={<IoHomeOutline style={iconStyle} />}>
                    Pre-University
                    </Tabs.Tab>
                    <Tabs.Tab value="Welcome/First Week" leftSection={<IoSchoolOutline style={iconStyle} />}>
                    Welcome/First Week
                    </Tabs.Tab>
                    {isGuest ? 
                        (<Tabs.Tab value="My To-Do List" disabled={true} leftSection={<IoPersonOutline style={iconStyle} />}>
                            My To-Do List
                        </Tabs.Tab>) :
                        (<Tabs.Tab value="My To-Do List" leftSection={<IoPersonOutline style={iconStyle} />}>
                            My To-Do List
                        </Tabs.Tab>)
                    }
                </Tabs.List>

                <Tabs.Panel value="Pre-University">
                    <ToDoList
                        data={[
                            'Review your financial aid package (if applicable) and ensure that you understand your financial obligations, including tuition, fees, and any additional expenses.',
                            'Arrange your housing accommodations if you plan to live on campus or off-campus. Complete any necessary paperwork or applications.',
                            'Purchase or gather any necessary household items or accommidation essentials.',
                            'Pack and organize your belongings for moving to campus or your new living arrangements.',
                            'Submit any required health forms or immunization records to the university`s health services.',
                            'Ensure that you have the necessary technology and software for your coursework, such as a laptop, software programs, and internet access.',
                            'Reach out to your advisor of studies and introduce yourself.',
                            'Decide on the modules you are going to take. See enrolment advice here for mandatory modules.',
                            'Enroll for you classes following the help provided here.',
                            'Set realistic expectations for yourself and be open to new experiences and challenges.'
                        ]}
                    />
                </Tabs.Panel>

                <Tabs.Panel value="Welcome/First Week">
                    <ToDoList
                            data={[
                                'Settle into your accomidation room or new living arrangements.',
                                'Take a campus tour to familiarize yourself with key locations such as academic buildings, the library, student unions, and recreational facilities.',
                                'Attend the welcome fayre to discover all the clubs and societies availible on campus, and what they offer.',
                                'Attend the sports fayre to discover more about sport life at UofG, and learn about potential clubs to join.',
                                'Attend social events, mixers, and wlecome week events to meet new people and make friends.',
                                'Attend your introductory lectures.',
                                'Familiarize yourself with your timetable, and academic expectations for each course.',
                                'Familiarize yourself with public transportation options and explore the gorgeous city of Glasgow.'
                            ]}
                        />
                </Tabs.Panel>

                <Tabs.Panel value="My To-Do List">
                    <UserToDoList />
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default ToDo;