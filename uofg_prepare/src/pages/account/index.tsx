import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text } from "@mantine/core";

export const Account = () => {
    return (
        <>
            <PageHeader
                heading="My Account"
            />
            <Stack>
            <Title order={1} size="h1">
                My Account
            </Title>
            <Text>
                Edit your account details here.
            </Text>
            </Stack>

        </>
    );
}

export default Account;