import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem,
  } from '@mantine/core';
  import classes from 'styles/SubSectionCard.module.css';
  
  export function SubSectionCard() {
    const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
    const theme = useMantineTheme();
  
  
    return (
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section>
          <a {...linkProps}>
            <Image src='dwf' alt='Image'/>
          </a>
        </Card.Section>
  
        <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
          outstanding
        </Badge>
  
        <Text className={classes.title} fw={500} component="a" {...linkProps}>
          Resident Evil Village review
        </Text>
  
        <Text fz="sm" c="dimmed">
          Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very
          different direction to its predecessor, namely the fact that this time round instead of
          fighting against various mutated zombies, you’re now dealing with more occult enemies like
          werewolves and vampires.
        </Text>
      </Card>
    );
  }