import {
    Button,
    Card,
    Center,
    Image,
    Text,
    useMantineColorScheme,
  } from '@mantine/core';
import classes from '@/styles/SubSectionCard.module.css';
import router from 'next/router';

interface Props {
	cardTitle: string,
  cardText: string,
  imgSrc: string,
  imgAlt: string,
  link: string,
}

export function SubSectionCard( {cardTitle, cardText, imgSrc, imgAlt, link}: Props) {
  const linkProps = {target: '_blank', rel: 'noopener noreferrer' };

  const navigateToPage = () => {
		router.push(link);
	};

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';


  return (
    <Card withBorder radius="md" className={dark ? classes.card_dark : classes.card} h={350}>
      <Card.Section>
        <Image src={imgSrc} alt={imgAlt} height={200} onClick={navigateToPage}/>
      </Card.Section>

      <Text className={classes.title} fw={500} component="a" onClick={navigateToPage}>
        {cardTitle}
      </Text>

      <Text fz="sm" c="dimmed">
        {cardText}
      </Text>
      <Center p={20}>
        <Button variant='filled' size='md' onClick={navigateToPage} color='blue.9'>
          Find Out More Here
        </Button>
      </Center>
    </Card>
  );
}