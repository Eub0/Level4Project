import React from 'react';
import { createUseStyles } from 'react-jss';
import { MantineProvider, theming } from '@mantine/core';

const useStyles = createUseStyles(
    (theme) => ({
      '@global': {
        body: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        },
      },
    }),
    { theming }
  );