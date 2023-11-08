import { PageHeadingText } from '@/components/shared/PageHeadingText';
import { PageSubheadingText } from '@/components/shared/PageSubheadingText';
import {Box, Group, Portal, Stack }from '@mantine/core';
import { ReactNode } from 'react';

interface PageHeaderProps {
    heading: string | ReactNode;
    subheading?: string | ReactNode;
    rightSection?: ReactNode;
    bottomSection?: ReactNode;
}

export const PageHeader = ({
    heading, 
    subheading,
    rightSection,
    bottomSection,
}: PageHeaderProps) => {
    return (
        <Portal target="#PageHeader">
            <Box
                style={{
                    borderBottom: 1,
                    backgroundColor: 'colors.gray[2]',
                    minHeight: 72,
                    boxSizing: 'border-box',
            }}
            >
                <Group position="apart" align="center" p="md" sx={{ minHeight: 68 }}>
                    <Stack spacing={0}>
                        {subheading ?? typeof subheading === 'string' ? (
                            <PageSubheadingText>{subheading}</PageSubheadingText>
                        ) : (
                            subheading
                        )}
                        {heading ?? typeof heading ==='string' ? (
                            <PageHeadingText>{subheading}</PageHeadingText>
                            ) : (
                                heading
                            )}
                    </Stack>
                    {rightSection}
                </Group>
            </Box>
            <Box mt={-1}>
                {bottomSection}
            </Box>
        </Portal>
    )
}