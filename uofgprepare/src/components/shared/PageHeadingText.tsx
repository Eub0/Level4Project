import { TextProps, Title } from '@mantine/core';
import Head from 'next/head';

export const PageHeadingText = ({ children }: TextProps) => {

    return (
        <>
            <Head>
                <title>{`UofG Prepare - ${children}`}</title>
            </Head>
            <Title order={1} size="h3">
                {children}
            </Title>
        </>
    )
}