import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Text, rem, Grid, Card, Image } from '@mantine/core';
import classes from '@/styles/ToDoList.module.css';

interface Props {
    data: string[],
}

export function ItemsToList(data: string[]) {
    var items = []
    for (let i = 0; i < data.length; i++) {
        items.push({id: (i+1).toString(), item: data[i]})
    }
    return items
}

export function ToDoList({data}: Props) {
  const thisList = ItemsToList(data)

  const [selection, setSelection] = useState(['0']);

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
    
  const toggleAll = () =>
    setSelection((current) => (current.length === thisList.length ? [] : thisList.map((item) => item.id)));

  const rows = thisList.map((item) => {

  const selected = selection.includes(item.id);

    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Text size="sm" fw={500}>
              {item.item}
            </Text>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
            <Card>
                <ScrollArea>
                <Table miw={800} verticalSpacing="sm">
                    <Table.Thead>
                    <Table.Tr>
                        <Table.Th style={{ width: rem(40) }}>
                        <Checkbox
                            onChange={toggleAll}
                            checked={selection.length === data.length}
                            indeterminate={selection.length > 0 && selection.length !== data.length}
                        />
                        </Table.Th>
                        <Table.Th>To-Do Items</Table.Th>
                    </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
                </ScrollArea>
            </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card visibleFrom='sm'>
                <Image src='/images/uofgSpire.jpg' alt='UofG Spire' />
            </Card>  
        </Grid.Col>
    </Grid>
  );
}