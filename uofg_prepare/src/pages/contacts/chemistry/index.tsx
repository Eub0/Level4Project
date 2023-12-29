import { ContactsGrid } from "@/components/layout/ContactsGrid"
import ContentGrid from "@/components/layout/ContentGrid"
import { PageHeader } from "@/components/layout/PageHeader"
import { Stack, Title } from "@mantine/core"

export const ChemistryContacts = () => {
    return (
        <>
            <PageHeader
            heading="Contacts - School of Chemistry"
        />
            <Stack>
            <Title order={1} size="h1">
                Contacts - School of Chemistry
            </Title>
            <Title order={3}>
                Essential Contacts
            </Title>
            <ContactsGrid 
                data={[
                    {
                        role:"Level 1 Head",
                        name: "Mr Test",
                        email: "test@test.com"
                    }
                ]}            
            />
            </Stack>
        </>
    )
}

export default ChemistryContacts;