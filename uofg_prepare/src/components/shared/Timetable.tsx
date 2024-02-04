import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Card, Title } from '@mantine/core';
import classes from '@/styles/TableScrollArea.module.css';
import { timetableContent } from '@/types/TimetableContent';
import { tableKey } from '@/types/TableKey';

export function Timetable({data,keyData}:{data: timetableContent[],keyData: tableKey[]}) {
  const [scrolled, setScrolled] = useState(false);

  function rows(thisRows: timetableContent[]) {
    return(thisRows.map((row) => (
        <Table.Tr key={row.week}>
            <Table.Td>{row.week}</Table.Td>
            <Table.Td>{row.monday}</Table.Td>
            <Table.Td>{row.tuesday}</Table.Td>
            <Table.Td>{row.wednesday}</Table.Td>
            <Table.Td>{row.thursday}</Table.Td>
            <Table.Td>{row.friday}</Table.Td>
            <Table.Td>{row.practical}</Table.Td>
        </Table.Tr>
      ))
  )};

  function keys(thisKeys: tableKey[]) {
    return(thisKeys.map((row) => (
      <Table.Tr key={row.key}>
        <Table.Td>{row.key}</Table.Td>
        <Table.Td>{row.name}</Table.Td>
      </Table.Tr>
    ))
    )};

  return (
    <>
    <Title py={15} size="h4">
      Semester Timetable
    </Title>
    <Card pt={15}>
      <ScrollArea h={225} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
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
          <Table.Tbody>{rows(data)}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Card>
    <Title py={15} size="h4">
      Table Key
    </Title>
    <Card pt={15}>
        <Table miw={700}>
          <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <Table.Tr>
              <Table.Th>Key</Table.Th>
              <Table.Th>Mondule</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{keys(keyData)}</Table.Tbody>
        </Table>
      </Card>
    </>
  );
}