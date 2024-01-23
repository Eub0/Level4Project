import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Card } from '@mantine/core';
import classes from './TableScrollArea.module.css';
import { timetableContent } from '@/types/TimetableContent';
import { tableKey } from '@/types/TableKey';

interface DataProps {
    data: timetableContent[],
}

interface KeyProps {
    key: tableKey[],
}

export function Timetable(thisData: timetableContent[], dataKey: tableKey[]) {
  const [scrolled, setScrolled] = useState(false);

  const rows = thisData.map((row) => (
    <Table.Tr key={row.week}>
      <Table.Td>{row.week}</Table.Td>
      <Table.Td>{row.monday}</Table.Td>
      <Table.Td>{row.tuesday}</Table.Td>
      <Table.Td>{row.wednesday}</Table.Td>
      <Table.Td>{row.thursday}</Table.Td>
      <Table.Td>{row.friday}</Table.Td>
      <Table.Td>{row.practical}</Table.Td>
    </Table.Tr>
  ));

  const keys = dataKey.map((row) => (
    <Table.Tr key={row.key}>
      <Table.Td>{row.key}</Table.Td>
      <Table.Td>{row.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Card>
        <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
            <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <Table.Tr>
                <Table.Th>Week</Table.Th>
                <Table.Th>Monday</Table.Th>
                <Table.Th>Tuesday</Table.Th>
                <Table.Th>Wednesday</Table.Th>
                <Table.Th>Thursay</Table.Th>
                <Table.Th>Firday</Table.Th>
                <Table.Th>Practical Component</Table.Th>
            </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        </ScrollArea>
        <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <Table.Tr>
            <Table.Th>Key</Table.Th>
            <Table.Th>Mondule</Table.Th>
        </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{keys}</Table.Tbody>
    </Table>
  </Card>
  );
}