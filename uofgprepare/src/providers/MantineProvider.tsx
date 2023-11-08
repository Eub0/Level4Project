import {
    ColorScheme,
    ColorSchemeProvider,
    createEmotionCache,
    MantineProvider,
    MantineTheme,
} from '@mantine/core';

import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProps } from '@mantine/notifications';
import { ReactNode } from 'react';

export const MantineProviders = ({ children }: { children: ReactNode }) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key:'color-scheme',
        defaultValue: 'light',
    })

    const toggleColorScheme = () =>
    setColorScheme((current: ColorScheme) =>
    current ==='dark' ? 'light' : 'dark'
    )

    const dissabledInputTextColor: (theme:MantineTheme) => string = (theme) =>
    `${
        theme.colorScheme ==='dark' ? `${theme.colors.gray[3]} !important` : `${theme.colors.dark[6]} !important`
    }`

    const emotionCache = createEmotionCache({ key: 'backstage' })

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                emotionCache={emotionCache}
                theme={{
                    colorScheme,
                    primaryColor: 'blue',
                    cursorType: 'pointer',
                    components: {
                        Title: {
                            defaultProps: {
                                color: colorScheme === 'dark' ? 'gray.2' : 'dark.7',
                            },
                        },
                        Text: {
                            defaultProps: {
                                color: colorScheme === 'dark' ? 'gray.2' : 'dark.7',
                            },
                        },
                        TextInput: {
                            defaultProps: { mb: 'xs' },
                            styles: (theme) =>({
                                disbale: {
                                    color: dissabledInputTextColor(theme),
                                },
                            }),
                        },
                        NumberInput: {
                            defaultProps: { mb: 'xs', },
                            styles: (theme) =>({
                                disbale: {
                                    color: dissabledInputTextColor(theme),
                                },
                            }),
                        },
                        Textarea: {
                            defaultProps: { mb: 'xs', },
                            styles: (theme) =>({
                                disbale: {
                                    color: dissabledInputTextColor(theme),
                                },
                            }),
                        },
                        Select: {
                            defaultProps: { mb: 'xs', },
                            styles: { itemsWrapper: { boxSizing: 'border-box' }},
                        },
                        MultiSelect: {
                            styles: { itemsWrapper: { boxSizing: 'border-box' }},
                        },
                        Checkbox: {
                            defaultProps: { mt: 'sm', mb: 'xs', },
                        },
                        InputWrapper: {
                            defaultProps: { mb: 'xs', },
                        },
                        JsonInput: {
                            defaultProps: { mb: 'xs', },
                        },
                        PasswordInput: {
                            defaultProps: { mb: 'xs', },
                        },
                        Switch: {
                            defaultProps: { mb: 'xs', },
                        },
                    },
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                {/* <NotificationsProvider>{ children}</NotificationsProvider> */}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}