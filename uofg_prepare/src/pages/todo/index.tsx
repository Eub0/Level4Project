import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Tabs, rem } from "@mantine/core";
import React from "react";
import { IoPersonOutline, IoSchoolOutline,IoHomeOutline } from "react-icons/io5";
import classes from "@/styles/Tabs.module.css";

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
            <Tabs defaultValue="gallery" variant="unstyled" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="gallery" leftSection={<IoHomeOutline style={iconStyle} />}>
                    Pre-University
                    </Tabs.Tab>
                    <Tabs.Tab value="messages" leftSection={<IoSchoolOutline style={iconStyle} />}>
                    Welcome/First Week
                    </Tabs.Tab>
                    <Tabs.Tab value="settings" leftSection={<IoPersonOutline style={iconStyle} />}>
                    My To-Do List
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                    Pre-University content
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                    Welcome/Week 1 content
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                    My To-Do List content
                </Tabs.Panel>
            </Tabs>
        </>
    );
}

export default ToDo;