import { PageHeader } from "@/components/layout/PageHeader";
import { Stack, Title, Text, CloseButton, Input, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { FiLock, FiUser } from "react-icons/fi";

export const Account = () => {
    
    const [value, setValue] = useState('Clear me');

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
            <Stack pt={30}>
                <Text>
                    Username:
                </Text>
                <Input 
                placeholder="Your username" 
                size="lg"
                leftSection={<FiUser size={16} />} 
                rightSection={
                    <CloseButton
                      aria-label="Clear input"
                      onClick={() => setValue('')}
                      style={{ display: value ? undefined : 'none' }}
                    />
                  }/>
                <Text>
                    email:
                </Text>
                <Input 
                placeholder="Your email" 
                size="lg"
                leftSection={<HiOutlineAtSymbol size={16} />} 
                rightSection={
                    <CloseButton
                      aria-label="Clear input"
                      onClick={() => setValue('')}
                      style={{ display: value ? undefined : 'none' }}
                    />
                  }/>
                <Text>
                    Password:
                </Text>
                <PasswordInput 
                placeholder="Your password" 
                size="lg"
                leftSection={<FiLock size={16} />} 
                // rightSection={
                //     <CloseButton
                //       aria-label="Clear input"
                //       onClick={() => setValue('')}
                //       style={{ display: value ? undefined : 'none' }}
                //     />
                //   }
                  />
            </Stack>
        </>
    );
}

export default Account;