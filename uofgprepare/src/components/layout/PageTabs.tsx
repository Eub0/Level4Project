import { Tabs, TabsProps } from '@mantine/core';

export const PageTabs = ({ children, ...props }: TabsProps) => {
    return (
        <Tabs
            defaultValue="relatedLinks"
            orientation="horizontal"
            style={(theme) => ({
                tabsList: {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[8] :theme.colors.grey[0],
                },
                tab: {
                    fontWeight: 500,
                    marginRight: 3,
                    '&[data-active': {
                        backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] :theme.white,
                    },
                },
            })}
            {...props}
        >
            {children}
        </Tabs>
    )
}