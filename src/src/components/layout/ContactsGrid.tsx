import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, Grid, Card, Image, Table, Anchor, ScrollArea } from "@mantine/core";
import classes from "@/styles/TableScrollArea.module.css"
import cx from 'clsx';
import { contacts } from "@/types/Contacts"
import router from "next/router"

export const ContactsGrid = ({data,school}:{data: contacts[], school: string}) => {

    const navigateToChemistry = () => {
		router.push("https://www.gla.ac.uk/schools/chemistry/");
	};

    const navigateToPhysics = () => {
		router.push("https://www.gla.ac.uk/schools/physics/");
	};

    const navigateToSchoolTour = () => {
		router.push("https://view.genial.ly/63c969a75d20a3001156b922");
	};
    
    const rows = data.map((row) => (
        <Table.Tr key={row.role}>
          <Table.Td>{row.role}</Table.Td>
          <Table.Td>{row.email}</Table.Td>
        </Table.Tr>
      ));

    return (
        <>
            <Grid pt={20}>
                <Grid.Col span={{ base: 12, md: 10, lg: 8 }}>
                    <Card>
                        <ScrollArea>
                            <Table miw={700}>
                                <Table.Thead classNames={classes}>
                                <Table.Tr>
                                    <Table.Th>Role</Table.Th>
                                    <Table.Th>Email</Table.Th>
                                </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>{rows}</Table.Tbody>
                            </Table>
                        </ScrollArea>
                    </Card>
                    <Text pt={15}>
                        If you cannot find what you're looking for here, then have a look on the{" "}
                        <Anchor onClick={school === "physics" ? navigateToPhysics : navigateToChemistry}>
                            UofG School of {school === "physics" ? "Physics & Astronomy" : "Chemistry"}
                        </Anchor>
                        {" "} official website. You might find it there.
                    </Text>
                    {school === "chemistry" ? 
                    <Text pt={15}>
                        If you haven't already, then make sure to check out the virtual{" "} 
                        <Anchor onClick={navigateToSchoolTour}>
                            tour of the school
                        </Anchor>.
                    </Text>
                    : ""
                    }
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                    <Card visibleFrom="sm">
                        <Image src='/images/uofgSpire.jpg' alt='UofG Spire' />
                    </Card>  
                </Grid.Col>
            </Grid>
        </>
    );
}

export default ContactsGrid;