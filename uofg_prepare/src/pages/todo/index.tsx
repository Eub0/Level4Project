import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Tabs, rem, Input } from "@mantine/core";
import React from "react";
import { IoPersonOutline, IoSchoolOutline,IoHomeOutline } from "react-icons/io5";
import classes from "@/styles/Tabs.module.css";
import { ToDoList } from "@/components/layout/ToDoList";

export const ToDo = () => {

    const iconStyle = { width: rem(12), height: rem(12) };
    
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
                    <Tabs.Tab value="My To-Do List" leftSection={<IoPersonOutline style={iconStyle} />}>
                    My To-Do List
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Pre-University">
                    <ToDoList
                        data={[
                            'This is a test',
                            'This is also a test'
                        ]}
                    />
                </Tabs.Panel>

                <Tabs.Panel value="Welcome/First Week">
                    <ToDoList
                            data={[
                                'This is a test',
                                'This is also a test'
                            ]}
                        />
                </Tabs.Panel>

                <Tabs.Panel value="My To-Do List">
                    <ToDoList
                            data={[

                            ]}
                        />
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default ToDo;