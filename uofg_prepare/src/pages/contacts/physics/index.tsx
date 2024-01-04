import { ContactsGrid } from "@/components/layout/ContactsGrid"
import { PageHeader } from "@/components/layout/PageHeader"
import { Stack, Title } from "@mantine/core"

export const PhysicsContacts = () => {
    return (
        <>
            <PageHeader
            heading="Contacts - School of Physics"
        />
            <Stack>
            <Title order={1} size="h1">
                Contacts - School of Physics
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

export default PhysicsContacts;