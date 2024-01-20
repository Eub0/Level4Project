import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, Grid, Card, Image, Table } from "@mantine/core";
import classes from "@/styles/ContactsGrid.module.css"
import cx from 'clsx';
import { contacts } from "@/types/Contacts"

interface Props {
    data: contacts[],
}

export const ContactsGrid = ({data}: Props) => {
    
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
                        <Table miw={700}>
                            <Table.Thead classNames={classes}>
                            <Table.Tr>
                                <Table.Th>Role</Table.Th>
                                <Table.Th>Email</Table.Th>
                            </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>{rows}</Table.Tbody>
                        </Table>
                    </Card>
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