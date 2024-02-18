import cx from 'clsx';
import { useEffect, useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Text, rem, Grid, Card, Image, Input, CloseButton, ActionIcon, Flex, SimpleGrid } from '@mantine/core';
import classes from '@/styles/ToDoList.module.css';
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import { useAuth } from "@/contexts/AuthContext";

export function UserToDoList() {

  // function removeListItem(listItemId: number){
  //   delete thisList[listItemId]
  //   var newList = {}
  //   for (let i = 0; i < thisList.length; i++){
  //     if (Object.prototype.hasOwnProperty.call(thisList, i)){
  //       newList[i] = thisList[i]
  //     }
  //   }
  //   updateToDoList(thisList)
  // }

  const { getToDoList, updateToDoList, addToDoItem } = useAuth();

  const [userItems, setUserItems] = useState([]);
  
  useEffect(() => {
      getToDoList().then(async(res) => {
        setUserItems(await res);
      }); // Assuming `GetToDoList` returns the user items correctly
  })

  const thisList = Object.entries(userItems).map(([key,value]) => ({id:key, item:value})) as any[];

  function addToList(value: string){
    thisList.push(value)
    updateToDoList(thisList)
  }

  const [value, setValue] = useState();

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
        <Table.Td style={{ width: rem(40) }}>
          <ActionIcon size={25} variant="default">
            <IoCloseSharp style={{ width: rem(20), height: rem(20) }} />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Grid pt={20}>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
                <Input
                      placeholder="Enter your To-Do items here."
                      value={value}
                      onChange={(event) => setValue(event.currentTarget.value)}
                      rightSectionPointerEvents="all"
                      mt="md"
                      rightSection={
                       <Flex pr={35}>
                        <CloseButton
                            aria-label="Clear input"
                            onClick={() => setValue('')}
                            style={{ display: value ? undefined : 'none' }}
                        />
                        <ActionIcon 
                          size={30} 
                          variant="light"
                          c={"blue.9"}
                          onClick={addToList(value)}
                          style={{ display: value ? undefined : 'none' }}
                        >
                            <IoAddSharp style={{ width: rem(20), height: rem(20) }} />
                        </ActionIcon>
                      </Flex>
                      }
                  />
            <Card>
                <ScrollArea>
                <Table miw={800} verticalSpacing="sm">
                    <Table.Thead>
                    <Table.Tr>
                        <Table.Th style={{ width: rem(40) }}>
                        <Checkbox
                            onChange={toggleAll}
                            checked={selection.length === thisList.length}
                            indeterminate={selection.length > 0 && selection.length !== thisList.length}
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