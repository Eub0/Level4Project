import { PageHeader } from "@/components/layout/PageHeader";
import { SubSectionCard } from "@/components/shared/SubSectionCard";
import { Stack, Title, Text, Grid, Tabs, rem } from "@mantine/core";
import classes from "@/styles/Tabs.module.css";
import { SlChemistry } from "react-icons/sl";
import { BiAtom } from "react-icons/bi";
import ContactsGrid from "@/components/layout/ContactsGrid";

export const Contacts = () => {
    const iconStyle = { width: rem(12), height: rem(12) };
    return (
      <>
        <PageHeader
            heading="Contacts"
        />
            <Stack>
            <Title order={1} size="h1">
                Contacts
            </Title>
            <Text>
                Its is important to know who to contact for issues and advice. 
                We have compiled together the essential contacts for both schools for you.
            </Text>
            </Stack>
            <Tabs defaultValue="School of Chemistry" variant="unstyled" classNames={classes} pt={15}>
                <Tabs.List grow>
                    <Tabs.Tab value="School of Chemistry" leftSection={<SlChemistry style={iconStyle} />}>
                    School of Chemistry
                    </Tabs.Tab>
                    <Tabs.Tab value="School of Physics" leftSection={<BiAtom style={iconStyle} />}>
                    School of Physics
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="School of Chemistry">
                    <ContactsGrid 
                        data={[
                            {
                                role:"Level 1 Class Head",
                                email: "test@test.com"
                            }
                        ]}            
                    />
                </Tabs.Panel>
                <Tabs.Panel value="School of Physics">
                    <ContactsGrid 
                        data={[
                            {
                                role:"Level 1 Head",
                                email: "phas-classhead-p1@glasgow.ac.uk"
                            },
                            {
                                role:"Level 1 Admin",
                                email: "physics1-admin@glasgow.ac.uk."
                            },
                            {
                                role:"Level 2 Head",
                                email: "phas-classhead-p2@glasgow.ac.uk"
                            },
                            {
                                role:"Level 2 Admin",
                                email: "physics2-admin@glasgow.ac.uk."
                            },
                            {
                                role:"Student Support Officer",
                                email: "phas-studentsuport@glasgow.ac.uk"
                            },
                        ]}            
                    />
                </Tabs.Panel>
            </Tabs> 
        </>
    );
}

export default Contacts;