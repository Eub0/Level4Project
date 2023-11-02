import {
    Box,
    Collapse,
    Group,
    UnstyledButton,
    createStyles,
} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { FaCheveronRight, FaChevronRight } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({
    button: {
        fontWeight: 500,
        display: 'block',
        width: 'calc(100% - 8px)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 4,
        marginBottom: 4,
        padding:`${theme.spacing.xs}px ${theme.spacing.md}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.grey[2] : theme.black,
        fontSize: theme.fontSizes.sm,
        '.navbar-icon': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
            display: 'flex',
            alignItems: 'center',
        },
        ':enabled': {
            '&:hover, &:focus': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                '.navbar-icon': {
                    color: theme.colors[theme.primaryColor][7],
                },
            },
        },
        ':disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    },
    active: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
        color: theme.colorScheme === 'dark' ? `${theme.white} !important` : `${theme.black} !important`,
        '.navbar-icon': {
                color: theme.colors[theme.primaryColor][7],
        },
    },
    link: {
        fontWeight: 500,
        display: 'block',
        textDecoration:'none',
        lineHeight: 1.15,
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding:`${theme.spacing.xs}px ${theme.spacing.md}px`,
        paddingLeft: 18,
        borderRadius: `0${theme.radius.sm}px ${theme.radius.sm}px 0`,
        borderLeft: `1px solid ${theme.colorScheme ==='dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black.colors.grey[7],
        fontSize: theme.fontSizes.sm,
        '&:hover, &:focus': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },chevron: {
        transition: 'transform 200ms ease',
    },
}));

interface Props {
    item: NavigationItems;
    closeNavbar: ()=> void;
    disabled: boolean;
}

export const NavbarButton = ({ item, closeNavbar, disabled }: Props) => {
    const { classes } = useStyles();
    const router = useRouter();

    const isCurrentPage = (route:string): boolean => route == router.route;

    const navigateToPage = () => {
        router.push(item.path);
        closeNavbar();
    }
    const [opened, setOpened] = useState(false);

    if (item.subItems) {
        return (
            <>
                <UnstyledButton
                    data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
                    px="sm"
                    onClick={() => setOpened((o) =>!o)}
                    disabled = {disabled}
                    className={`${classes.button} ${isCurrentPage(item.path) && classes.active}`}
                >
                    <Group position="apart" spacing={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <div className="navbar-icon">{item.icon}</div>
                            <Box ml="xs">{item.name}</Box>
                        </Box>
                        <FaChevronRight
                            className={classes.chevron}
                            size={14}
                            style={{ transform: opened ? `rotate(90deg)` : 'none' }}
                        />
                    </Group>
                </UnstyledButton>
                <Collapse in={opened}>
                    {item.subItems.map((subItem: SubNavigationItem) => (
                        <Link
                            href={item.path + subItem.path}
                            key={subItem.name}
                            className={`${classes.link} ${isCurrentPage(item.path) ? classes.active : ''}`}
                            onClick={closeNavbar}
                        >
                            {subItem.name}
                        </Link>
                    ))}
                </Collapse>
            </>
        );
    } else {
        return (
            <>
                <UnstyledButton
                    data-cy={`${item.name.toLowerCase().replace(/ /g, '-')}-nav-button`}
                    onClickCapture={navigateToPage}
                    px="sm"
                    my={3}
                    disabled = {disabled}
                    className={`${classes.button} ${isCurrentPage(item.path) && classes.active}`}
                >
                    <Group position="apart" spacing={0}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <div className="navbar-icon">{item.icon}</div>
                            <Box ml="xs">{item.name}</Box>
                        </Box>
                    </Group>
                </UnstyledButton>
            </>
        )
    }
};