import { TextProps, Title } from "@mantine/core";

export const PageSubheadingText = ({ children }: TextProps) => {
    return (
        <Title
            order={2}
            size="h6"
            color="dark.3"
            weight={400}
            sx={({ colorScheme, colors }) => ({
                color: colorScheme === 'dark' ? colors.dark[0] : colors.gray[7],
            })}
        >
            {children}
        </Title>
    )
}