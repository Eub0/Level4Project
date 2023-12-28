import {
    Card,
    Image,
    Text,
    useMantineTheme,
  } from '@mantine/core';
import classes from '@/styles/SubSectionCard.module.css';

interface Props {
	cardTitle: string,
  cardText: string,
  imgSrc: string,
  imgAlt: string,
  link: string,
}

export function SubSectionCard( {cardTitle, cardText, imgSrc, imgAlt, link}: Props) {
  const linkProps = {target: '_blank', rel: 'noopener noreferrer' };


  return (
    <Card withBorder radius="md" className={classes.card} h={300}>
      <Card.Section>
        <a href={link} {...linkProps}>
          <Image src={imgSrc} alt={imgAlt} height={200}/>
        </a>
      </Card.Section>

      <Text className={classes.title} fw={500} component="a" href={link} {...linkProps}>
        {cardTitle}
      </Text>

      <Text fz="sm" c="dimmed">
        {cardText}
      </Text>
    </Card>
  );
}